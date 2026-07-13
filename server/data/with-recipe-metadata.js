const path = require('path');
const { execSync } = require('child_process');

// Git command output can have trailing newlines; we only need the first timestamp line.
const parseFirstLine = (text) => {
    const lines = text
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean);

    return lines.length ? lines[0] : null;
};

// Pull timestamps from Git so metadata is stable across machines and deploys.
const getRecipeFileGitMetadata = (modulePath, repoRoot) => {
    const relativeFilePath = path.relative(repoRoot, modulePath);

    try {
        // Most recent commit touching this file.
        const updatedAt = execSync(
            `git log -1 --format=%aI -- "${relativeFilePath}"`,
            { cwd: repoRoot, stdio: ['ignore', 'pipe', 'ignore'] }
        ).toString();

        // First commit where this file contains `available: true`.
        // `--follow` includes renames and `--reverse` yields oldest-to-newest output.
        const createdAt = execSync(
            `git log --follow --reverse --format=%aI -S 'available: true' -- "${relativeFilePath}"`,
            { cwd: repoRoot, stdio: ['ignore', 'pipe', 'ignore'] }
        ).toString();

        return {
            createdAt: parseFirstLine(createdAt),
            updatedAt: parseFirstLine(updatedAt),
        };
    } catch (_error) {
        return {
            createdAt: null,
            updatedAt: null,
        };
    }
};

const withRecipeMetadata = (recipes) => {
    if (!Array.isArray(recipes)) {
        return recipes;
    }

    // Restrict metadata extraction to recipe module files only.
    const recipeModuleDir = `${path.join(__dirname, 'recipes')}${path.sep}`;
    const repoRootDir = path.join(__dirname, '..', '..');
    // Map module exports object -> git metadata for quick lookups during final merge.
    const recipeFileMetadataByExport = new WeakMap();

    // Scan loaded recipe modules from Node's require cache.
    for (const modulePath of Object.keys(require.cache)) {
        if (!modulePath.startsWith(recipeModuleDir)) {
            continue;
        }

        const cachedModule = require.cache[modulePath];
        if (!cachedModule || !cachedModule.exports || typeof cachedModule.exports !== 'object') {
            continue;
        }

        try {
            const gitMetadata = getRecipeFileGitMetadata(modulePath, repoRootDir);

            recipeFileMetadataByExport.set(cachedModule.exports, {
                createdAt: gitMetadata.createdAt || null,
                updatedAt: gitMetadata.updatedAt || null,
            });
        } catch (_error) {
            // If file metadata cannot be read, keep the recipe object unchanged.
        }
    }

    return recipes.map(recipe => {
        if (!recipe || typeof recipe !== 'object') {
            return recipe;
        }

        // Hidden/unavailable recipes should not expose timestamps.
        const isAvailable = !!recipe.available;

        const fileMetadata = recipeFileMetadataByExport.get(recipe);
        // Respect explicit timestamps in recipe files, otherwise use computed Git metadata.
        const createdAt = isAvailable ? (recipe.createdAt || fileMetadata?.createdAt || null) : null;
        const updatedAt = isAvailable ? (recipe.updatedAt || fileMetadata?.updatedAt || null) : null;

        return {
            ...recipe,
            createdAt,
            updatedAt,
        };
    });
};

module.exports = withRecipeMetadata;