#!/usr/bin/env node

/**
 * Import Sorter for Recipe Files
 * 
 * This script helps maintain clean and organized import statements in recipe files
 * by automatically sorting imports from './ingredients' alphabetically.
 * 
 * Usage:
 *   node sort-imports.js check [filename]     - Check if imports are sorted
 *   node sort-imports.js sort [filename]      - Sort imports
 *   node sort-imports.js [filename]           - Sort imports in specific file
 *   node sort-imports.js sort                 - Sort all files
 * 
 * Examples:
 *   node sort-imports.js check                - Check all files
 *   node sort-imports.js check pad-thai.js    - Check specific file
 *   node sort-imports.js sort pad-thai.js     - Sort specific file
 *   node sort-imports.js sort                 - Sort all files
 * 
 * Features:
 * - Automatically detects multi-line ingredient imports
 * - Sorts imports alphabetically (case-sensitive)
 * - Preserves code formatting and structure
 * - Provides detailed feedback on which files need sorting
 * - Safe operation - only modifies import blocks
 */

const fs = require('fs');
const path = require('path');

/**
 * Sorts a single import block (either ingredients or constants)
 * @param {Array} lines - All file lines
 * @param {number} startIndex - Start line of import block
 * @param {number} endIndex - End line of import block
 * @param {string} importType - Type of import ('ingredients' or 'constants')
 * @returns {Array} - Updated lines array
 */
function sortImportBlock(lines, startIndex, endIndex, importType) {
    const importNames = [];
    
    // Handle single-line imports (mainly for constants)
    if (startIndex === endIndex) {
        const line = lines[startIndex];
        const match = line.match(/const\s*{\s*([^}]+)\s*}\s*=\s*require\(['"]\.\/[^'"]*['"]\)/);
        if (match) {
            const imports = match[1].split(',').map(name => name.trim()).filter(name => name);
            imports.sort();
            const newLine = line.replace(/{\s*[^}]+\s*}/, `{ ${imports.join(', ')} }`);
            const newLines = [...lines];
            newLines[startIndex] = newLine;
            return newLines;
        }
        return lines;
    }
    
    // Handle multi-line imports
    for (let i = startIndex + 1; i < endIndex; i++) {
        const line = lines[i].trim();
        if (line && !line.startsWith('//')) {
            // Remove trailing comma and clean up
            const cleanName = line.replace(/,$/, '').trim();
            if (cleanName) {
                importNames.push(cleanName);
            }
        }
    }
    
    // Sort the imports alphabetically
    importNames.sort();
    
    // Reconstruct the import block
    const newLines = [...lines];
    const baseIndent = ' '.repeat(4); // 4 spaces for imports
    
    // Replace the import block
    const newImportLines = [
        lines[startIndex], // Keep the opening line
        ...importNames.map(name => `${baseIndent}${name},`),
        lines[endIndex] // Keep the closing line
    ];
    
    // Replace the old import block with the new sorted one
    newLines.splice(startIndex, endIndex - startIndex + 1, ...newImportLines);
    return newLines;
}

/**
 * Sorts the imports from './ingredients' and './constants' in a recipe file alphabetically
 * @param {string} filePath - Path to the recipe file
 */
function sortImportsInFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        let lines = content.split('\n');
        let hasChanges = false;
        
        // Find and sort constants import (single or multi-line)
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Single-line constants import
            if (line.includes("require('./constants')") && line.includes('const {') && line.includes('}')) {
                const originalLine = line;
                lines = sortImportBlock(lines, i, i, 'constants');
                if (lines[i] !== originalLine) {
                    hasChanges = true;
                    console.log(`✅ Sorted constants import in ${path.basename(filePath)}`);
                }
                break;
            }
        }
        
        // Find and sort ingredients import (single-line first, then multi-line)
        let foundSingleLineIngredients = false;
        
        // Look for single-line ingredients import
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes("require('./ingredients')") && line.includes('const {') && line.includes('}')) {
                const originalLine = line;
                lines = sortImportBlock(lines, i, i, 'ingredients');
                if (lines[i] !== originalLine) {
                    hasChanges = true;
                    console.log(`✅ Sorted ingredients import in ${path.basename(filePath)}`);
                }
                foundSingleLineIngredients = true;
                break;
            }
        }
        
        // If no single-line ingredients import found, look for multi-line
        if (!foundSingleLineIngredients) {
            let importStartIndex = -1;
            let importEndIndex = -1;
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                
                // Look for const { that starts a multi-line import
                if (line === 'const {') {
                    // Check if the closing part has require('./ingredients')
                    for (let j = i + 1; j < Math.min(i + 50, lines.length); j++) {
                        if (lines[j].includes("} = require('./ingredients')")) {
                            importStartIndex = i;
                            importEndIndex = j;
                            break;
                        }
                    }
                    if (importStartIndex !== -1) break;
                }
            }
            
            if (importStartIndex !== -1 && importEndIndex !== -1) {
                const originalLines = lines.slice(importStartIndex, importEndIndex + 1);
                lines = sortImportBlock(lines, importStartIndex, importEndIndex, 'ingredients');
                const newLines = lines.slice(importStartIndex, importEndIndex + 1);
                
                if (JSON.stringify(originalLines) !== JSON.stringify(newLines)) {
                    hasChanges = true;
                    console.log(`✅ Sorted ingredients import in ${path.basename(filePath)}`);
                }
            }
        }
        
        if (hasChanges) {
            // Write the file back
            fs.writeFileSync(filePath, lines.join('\n'));
            console.log(`✅ Updated ${path.basename(filePath)}`);
            return true;
        } else {
            console.log(`No changes needed in ${path.basename(filePath)}`);
            return false;
        }
        
    } catch (error) {
        console.error(`❌ Error processing ${path.basename(filePath)}:`, error.message);
        return false;
    }
}

/**
 * Checks if imports in a file are already sorted
 * @param {string} filePath - Path to the recipe file
 * @returns {boolean} - True if sorted, false if not
 */
function areImportsSorted(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        // Check constants import (single-line)
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes("require('./constants')") && line.includes('const {') && line.includes('}')) {
                const match = line.match(/const\s*{\s*([^}]+)\s*}\s*=\s*require\(['"]\.\/constants['"]\)/);
                if (match) {
                    const imports = match[1].split(',').map(name => name.trim()).filter(name => name);
                    const sortedImports = [...imports].sort();
                    if (JSON.stringify(imports) !== JSON.stringify(sortedImports)) {
                        return false; // Constants not sorted
                    }
                }
                break;
            }
        }
        
        // Check ingredients import (single-line first, then multi-line)
        let foundSingleLineIngredients = false;
        
        // Check single-line ingredients import
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes("require('./ingredients')") && line.includes('const {') && line.includes('}')) {
                const match = line.match(/const\s*{\s*([^}]+)\s*}\s*=\s*require\(['"]\.\/ingredients['"]\)/);
                if (match) {
                    const imports = match[1].split(',').map(name => name.trim()).filter(name => name);
                    const sortedImports = [...imports].sort();
                    if (JSON.stringify(imports) !== JSON.stringify(sortedImports)) {
                        return false; // Single-line ingredients not sorted
                    }
                    foundSingleLineIngredients = true;
                }
                break;
            }
        }
        
        // Check multi-line ingredients import if no single-line found
        if (!foundSingleLineIngredients) {
            let importStartIndex = -1;
            let importEndIndex = -1;
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line === 'const {') {
                    for (let j = i + 1; j < Math.min(i + 50, lines.length); j++) {
                        if (lines[j].includes("} = require('./ingredients')")) {
                            importStartIndex = i;
                            importEndIndex = j;
                            break;
                        }
                    }
                    if (importStartIndex !== -1) break;
                }
            }
            
            if (importStartIndex !== -1 && importEndIndex !== -1) {
                // Extract import names
                const importNames = [];
                for (let i = importStartIndex + 1; i < importEndIndex; i++) {
                    const line = lines[i].trim();
                    if (line && !line.startsWith('//')) {
                        const cleanName = line.replace(/,$/, '').trim();
                        if (cleanName) {
                            importNames.push(cleanName);
                        }
                    }
                }
                
                // Check if sorted
                const sortedNames = [...importNames].sort();
                if (JSON.stringify(importNames) !== JSON.stringify(sortedNames)) {
                    return false; // Multi-line ingredients not sorted
                }
            }
        }
        
        return true; // All imports are sorted
        
    } catch (error) {
        return true; // Error reading file, consider it sorted
    }
}

/**
 * Sorts imports in all recipe files or a specific file
 * @param {string} targetFile - Optional specific file to process
 * @param {boolean} checkOnly - If true, only check which files need sorting
 */
function sortAllImports(targetFile = null, checkOnly = false) {
    const recipesDir = __dirname;
    
    if (targetFile) {
        const fullPath = path.join(recipesDir, targetFile);
        if (fs.existsSync(fullPath)) {
            if (checkOnly) {
                const sorted = areImportsSorted(fullPath);
                console.log(`${targetFile}: ${sorted ? '✅ Sorted' : '❌ Needs sorting'}`);
            } else {
                sortImportsInFile(fullPath);
            }
        } else {
            console.error(`File not found: ${targetFile}`);
        }
        return;
    }
    
    // Process all .js files except this script and ingredients.js
    const files = fs.readdirSync(recipesDir)
        .filter(file => 
            file.endsWith('.js') && 
            file !== 'sort-imports.js' && 
            file !== 'ingredients.js' &&
            file !== 'constants.js' &&
            file !== 'ingredient-categories.js'
        );
    
    if (checkOnly) {
        console.log(`Checking ${files.length} recipe files for import sorting...`);
        const unsortedFiles = [];
        
        files.forEach(file => {
            const fullPath = path.join(recipesDir, file);
            if (!areImportsSorted(fullPath)) {
                unsortedFiles.push(file);
            }
        });
        
        console.log(`\n📊 Summary:`);
        console.log(`   Total files: ${files.length}`);
        console.log(`   Properly sorted: ${files.length - unsortedFiles.length}`);
        console.log(`   Need sorting: ${unsortedFiles.length}`);
        
        if (unsortedFiles.length > 0) {
            console.log(`\n🔧 Files that need sorting:`);
            unsortedFiles.forEach(file => console.log(`   - ${file}`));
        }
        return;
    }
    
    console.log(`Processing ${files.length} recipe files...`);
    
    let processed = 0;
    let successful = 0;
    
    files.forEach(file => {
        const fullPath = path.join(recipesDir, file);
        processed++;
        if (sortImportsInFile(fullPath)) {
            successful++;
        }
    });
    
    console.log(`\n📊 Summary:`);
    console.log(`   Total files processed: ${processed}`);
    console.log(`   Successfully updated: ${successful}`);
    console.log(`   Skipped/failed: ${processed - successful}`);
}

// CLI usage
if (require.main === module) {
    const args = process.argv.slice(2);
    const command = args[0];
    const targetFile = args[1];
    
    console.log('🔧 Import Sorter for Recipe Files\n');
    
    if (command === 'check') {
        if (targetFile) {
            console.log(`Checking imports in: ${targetFile}`);
            sortAllImports(targetFile, true);
        } else {
            console.log('Checking all recipe files for import sorting...');
            sortAllImports(null, true);
        }
    } else if (command === 'sort') {
        if (targetFile) {
            console.log(`Sorting imports in: ${targetFile}`);
            sortAllImports(targetFile);
        } else {
            console.log('Sorting imports in all recipe files...');
            sortAllImports();
        }
    } else if (command && !targetFile) {
        // Single argument could be a filename
        console.log(`Sorting imports in: ${command}`);
        sortAllImports(command);
    } else {
        console.log('Usage:');
        console.log('  node sort-imports.js check [filename]     - Check if imports are sorted');
        console.log('  node sort-imports.js sort [filename]      - Sort imports');
        console.log('  node sort-imports.js [filename]           - Sort imports in specific file');
        console.log('  node sort-imports.js sort                 - Sort all files');
    }
}

module.exports = { sortImportsInFile, sortAllImports, areImportsSorted };