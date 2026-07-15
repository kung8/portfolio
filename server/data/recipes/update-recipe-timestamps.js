/* eslint-disable no-console */
const fs = require('fs');
const { spawnSync } = require('child_process');

// Thin wrapper for git commands used by this hook helper.
function runGit(args) {
    const result = spawnSync('git', args, { encoding: 'utf8' });
    return {
        status: result.status,
        stdout: (result.stdout || '').trim(),
        stderr: (result.stderr || '').trim(),
    };
}

// Commit-time timestamp format required by recipe metadata.
function nowTimestamp() {
    const date = new Date();

    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = String(date.getFullYear());
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');

    return `${mm}/${dd}/${yyyy} ${hh}:${min}:${ss}`;
}

// Reads `available: true|false` from a recipe module.
// Returns null when the file doesn't match recipe object shape.
function getAvailableValue(content) {
    const match = content.match(/^\s*available\s*:\s*(true|false)\s*,?\s*$/m);
    if (!match) {
        return null;
    }
    return match[1] === 'true';
}

// Returns the file content at HEAD for transition checks.
// If file is new in this commit, returns null.
function getPreviousCommittedContent(filePath) {
    const existsInHead = runGit(['cat-file', '-e', `HEAD:${filePath}`]);
    if (existsInHead.status !== 0) {
        return null;
    }

    const previous = runGit(['show', `HEAD:${filePath}`]);
    if (previous.status !== 0) {
        return null;
    }

    return previous.stdout;
}

// Ensures `recommended` exists right below `available`.
// This keeps metadata fields in a predictable location.
function ensureRecommendedLine(lines) {
    let recommendedIndex = lines.findIndex((line) => /^\s*recommended\s*:/.test(line));
    if (recommendedIndex !== -1) {
        const indentMatch = lines[recommendedIndex].match(/^(\s*)/);
        return {
            lines,
            recommendedIndex,
            indent: indentMatch ? indentMatch[1] : '    ',
            inserted: false,
        };
    }

    const availableIndex = lines.findIndex((line) => /^\s*available\s*:/.test(line));
    if (availableIndex === -1) {
        return {
            lines,
            recommendedIndex: -1,
            indent: '    ',
            inserted: false,
        };
    }

    const indentMatch = lines[availableIndex].match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : '    ';
    lines.splice(availableIndex + 1, 0, `${indent}recommended: false,`);

    recommendedIndex = availableIndex + 1;
    return {
        lines,
        recommendedIndex,
        indent,
        inserted: true,
    };
}

// We reinsert these right under `recommended` to normalize placement.
function removeTimestampLines(lines) {
    return lines.filter((line) => !/^\s*createdAt\s*:/.test(line) && !/^\s*modifiedAt\s*:/.test(line));
}

// Reads an existing timestamp value (if present) so createdAt can be preserved.
function getExistingTimestampValue(content, key) {
    const regex = new RegExp(`^\\s*${key}\\s*:\\s*['"]([^'"]+)['"]\\s*,?\\s*$`, 'm');
    const match = content.match(regex);
    return match ? match[1] : '';
}

// Compares recipe body changes without timestamp churn.
// If these normalized contents differ, recipe content was meaningfully edited.
function contentWithoutTimestamps(content) {
    return removeTimestampLines(content.split('\n')).join('\n');
}

// Applies metadata placement rules for a single recipe file:
// 1) Ensure `recommended` exists below `available`
// 2) Remove old timestamp lines
// 3) Reinsert timestamps directly under `recommended` with normalized values
function applyTimestamps(content, options) {
    let lines = content.split('\n');

    const rec = ensureRecommendedLine(lines);
    lines = rec.lines;

    if (rec.recommendedIndex === -1) {
        return content;
    }

    lines = removeTimestampLines(lines);

    const refreshedRecIndex = lines.findIndex((line) => /^\s*recommended\s*:/.test(line));
    if (refreshedRecIndex === -1) {
        return lines.join('\n');
    }

    const indentMatch = lines[refreshedRecIndex].match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : '    ';

    lines.splice(
        refreshedRecIndex + 1,
        0,
        `${indent}createdAt: '${options.createdAtValue}',`,
        `${indent}modifiedAt: '${options.modifiedAtValue}',`
    );

    return lines.join('\n');
}

// createdAt should only reset when:
// - file is new and available=true,
// OR
// - file transitions from available=false -> available=true.
function shouldResetCreatedAtToNow({ currentAvailable, previousAvailable, isNewFile }) {
    if (!currentAvailable) {
        return false;
    }
    if (isNewFile) {
        return true;
    }
    return previousAvailable === false && currentAvailable === true;
}

// Processes one staged recipe file according to commit-time rules.
function processFile(filePath, timestamp) {
    if (filePath.endsWith('/template.js') || filePath.endsWith('/initialized-template.js')) {
        return { updated: false };
    }

    if (!fs.existsSync(filePath)) {
        return { updated: false };
    }

    const original = fs.readFileSync(filePath, 'utf8');
    const currentAvailable = getAvailableValue(original);

    if (currentAvailable === null) {
        return { updated: false };
    }

    const previousContent = getPreviousCommittedContent(filePath);
    const isNewFile = previousContent === null;
    const previousAvailable = previousContent ? getAvailableValue(previousContent) : null;
    const existingCreatedAt = getExistingTimestampValue(original, 'createdAt');
    const existingModifiedAt = getExistingTimestampValue(original, 'modifiedAt');

    // For unavailable recipes, avoid rewriting files that already satisfy
    // the empty-string timestamp rule.
    if (!currentAvailable && existingCreatedAt === '' && existingModifiedAt === '') {
        return { updated: false };
    }

    const resetCreatedAtToNow = shouldResetCreatedAtToNow({
        currentAvailable,
        previousAvailable,
        isNewFile,
    });

    const meaningfulChange = isNewFile
        ? true
        : contentWithoutTimestamps(original) !== contentWithoutTimestamps(previousContent || '');

    const createdAtValue = currentAvailable
        ? (resetCreatedAtToNow ? timestamp : (existingCreatedAt || timestamp))
        : '';

    const modifiedAtValue = currentAvailable
        ? ((resetCreatedAtToNow || meaningfulChange) ? timestamp : (existingModifiedAt || timestamp))
        : '';

    const next = applyTimestamps(original, {
        createdAtValue,
        modifiedAtValue,
    });

    if (next === original) {
        return { updated: false };
    }

    fs.writeFileSync(filePath, next, 'utf8');
    return { updated: true };
}

// Entry point: receives staged recipe paths from pre-commit hook.
// Uses one timestamp per run so all updated files in the same commit are consistent.
function main() {
    const files = process.argv.slice(2);
    if (files.length === 0) {
        console.log('No recipe files passed to timestamp updater.');
        return;
    }

    const timestamp = nowTimestamp();
    let updated = 0;

    for (const filePath of files) {
        const result = processFile(filePath, timestamp);
        if (result.updated) {
            updated += 1;
        }
    }

    console.log(`Recipe timestamp updater: updated ${updated} file(s).`);
}

main();