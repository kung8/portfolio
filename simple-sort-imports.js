const fs = require('fs');
const path = require('path');

/**
 * Simple and reliable React import sorter
 */
function sortReactImports(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        let lines = content.split('\n');
        let hasChanges = false;

        // Process each line to sort single-line destructured imports
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Sort single-line destructured imports
            if (line.trim().startsWith('import ') && line.includes('{') && line.includes('}')) {
                const match = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
                if (match) {
                    const originalImports = match[1].split(',').map(name => name.trim()).filter(name => name);
                    const sortedImports = [...originalImports].sort();
                    
                    if (JSON.stringify(originalImports) !== JSON.stringify(sortedImports)) {
                        const newLine = line.replace(match[1], ' ' + sortedImports.join(', ') + ' ');
                        lines[i] = newLine;
                        hasChanges = true;
                        console.log(`✅ Sorted destructured imports in ${path.basename(filePath)}`);
                    }
                }
            }
        }

        // Process multi-line imports
        for (let i = 0; i < lines.length - 1; i++) {
            const line = lines[i].trim();
            
            // Detect start of multi-line import
            if (line.startsWith('import {') && !line.includes('}')) {
                // Find the end of this import block
                let endIndex = -1;
                for (let j = i + 1; j < lines.length; j++) {
                    if (lines[j].includes('}') && lines[j].includes('from')) {
                        endIndex = j;
                        break;
                    }
                }
                
                if (endIndex !== -1) {
                    // Extract import names from the middle lines
                    const importNames = [];
                    for (let k = i + 1; k < endIndex; k++) {
                        const importLine = lines[k].trim();
                        if (importLine && !importLine.startsWith('//')) {
                            const cleanName = importLine.replace(/,$/, '').trim();
                            if (cleanName) {
                                importNames.push(cleanName);
                            }
                        }
                    }
                    
                    // Sort the import names
                    const sortedNames = [...importNames].sort();
                    
                    // Check if sorting is needed
                    if (JSON.stringify(importNames) !== JSON.stringify(sortedNames)) {
                        // Replace the middle lines with sorted imports
                        const newMiddleLines = sortedNames.map((name, index) => {
                            const isLast = index === sortedNames.length - 1;
                            const comma = isLast ? '' : ',';
                            return `    ${name}${comma}`;
                        });
                        
                        // Replace the lines
                        lines.splice(i + 1, endIndex - i - 1, ...newMiddleLines);
                        hasChanges = true;
                        console.log(`✅ Sorted multi-line imports in ${path.basename(filePath)}`);
                    }
                }
            }
        }

        if (hasChanges) {
            fs.writeFileSync(filePath, lines.join('\n'));
            console.log(`✅ Updated ${path.basename(filePath)}`);
            return true;
        } else {
            console.log(`No changes needed in ${path.basename(filePath)}`);
            return false;
        }
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return false;
    }
}

// CLI usage
if (require.main === module) {
    const filePath = process.argv[2];
    if (filePath) {
        console.log(`🔧 Sorting imports in: ${path.basename(filePath)}`);
        sortReactImports(filePath);
    } else {
        console.log('Usage: node simple-sort-imports.js <file-path>');
    }
}

module.exports = { sortReactImports };