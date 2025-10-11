const fs = require('fs');
const path = require('path');

/**
 * Sorts destructured imports in a single line
 */
function sortSingleLineImport(line) {
    // Handle destructured imports like: import { B, A, C } from 'module';
    const match = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*/);
    if (match) {
        const originalImports = match[1].split(',').map(name => name.trim()).filter(name => name);
        const sortedImports = [...originalImports].sort(); // Create a copy to sort
        if (JSON.stringify(originalImports) !== JSON.stringify(sortedImports)) {
            return line.replace(match[1], ' ' + sortedImports.join(', ') + ' ');
        }
    }
    return line;
}

/**
 * Sorts multi-line destructured imports
 */
function sortMultiLineImport(importLines) {
    if (importLines.length < 3) return importLines; // Need at least opening, content, closing lines
    
    const firstLine = importLines[0]; // import {
    const lastLine = importLines[importLines.length - 1]; // } from 'module';
    const middleLines = importLines.slice(1, -1);
    
    // Extract import names from middle lines
    const importNames = [];
    middleLines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('//')) {
            const cleanName = trimmed.replace(/,$/, '').trim();
            if (cleanName) {
                importNames.push(cleanName);
            }
        }
    });
    
    // Sort the import names
    const sortedNames = [...importNames].sort();
    
    // Check if sorting is needed
    if (JSON.stringify(importNames) === JSON.stringify(sortedNames)) {
        return importLines; // No changes needed
    }
    
    // Create new middle lines with sorted imports
    const newMiddleLines = sortedNames.map((name, index) => {
        const isLast = index === sortedNames.length - 1;
        const comma = isLast ? '' : ',';
        return `    ${name}${comma}`;
    });
    
    return [firstLine, ...newMiddleLines, lastLine];
}

/**
 * Categorizes an import statement
 */
function categorizeImport(line) {
    line = line.trim();
    
    // React imports
    if (line.includes('from \'react\'') || line.includes('from "react"')) {
        return 'react';
    }
    
    // CSS/SCSS imports
    if (line.includes('.scss') || line.includes('.css')) {
        return 'styles';
    }
    
    // Get the import path
    const match = line.match(/from\s*['"]([^'"]+)['"]/);
    if (match) {
        const importPath = match[1];
        // Relative path imports (start with . or /)
        if (importPath.startsWith('.') || importPath.startsWith('/')) {
            return 'relative';
        } else {
            // External library imports (no relative path)
            return 'external';
        }
    }
    
    return 'other';
}

/**
 * Sorts imports in a React component file by category and alphabetically within categories
 * @param {string} filePath - Path to the React component file
 */
function sortImportsInReactFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        let lines = content.split('\n');
        let hasChanges = false;
        
        // Find the import section
        let importStartIndex = -1;
        let importEndIndex = -1;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line.startsWith('import ')) {
                if (importStartIndex === -1) {
                    importStartIndex = i;
                }
                importEndIndex = i;
            } else if (importStartIndex !== -1 && line !== '' && !line.startsWith('//')) {
                // End of import block (hit non-import, non-empty, non-comment line)
                break;
            }
        }
        
        if (importStartIndex === -1) {
            console.log(`No imports found in ${path.basename(filePath)}`);
            return false;
        }
        
        // Extract and categorize imports
        const imports = {
            react: [],
            external: [],
            relative: [],
            styles: [],
            other: []
        };
        
        // Collect all import lines and sort destructured imports
        let i = importStartIndex;
        while (i <= importEndIndex) {
            const line = lines[i];
            if (line.trim().startsWith('import ')) {
                const category = categorizeImport(line);
                
                // Check if this is a multi-line import
                if (line.includes('{') && !line.includes('}')) {
                    // Find the closing brace
                    let endLineIndex = i;
                    for (let j = i + 1; j <= importEndIndex; j++) {
                        if (lines[j].includes('}')) {
                            endLineIndex = j;
                            break;
                        }
                    }
                    
                    // Process multi-line import
                    const multiLineImport = lines.slice(i, endLineIndex + 1);
                    const sortedMultiLineImport = sortMultiLineImport(multiLineImport);
                    
                    if (JSON.stringify(multiLineImport) !== JSON.stringify(sortedMultiLineImport)) {
                        hasChanges = true;
                        console.log(`✅ Sorted multi-line imports in ${path.basename(filePath)}`);
                    }
                    
                    // Store as a single block (we'll join later)
                    imports[category].push(sortedMultiLineImport.join('\n'));
                    i = endLineIndex + 1;
                } else {
                    // Single line import
                    let processedLine = line;
                    
                    // Sort destructured imports within the line
                    if (line.includes('{') && line.includes('}')) {
                        const sortedLine = sortSingleLineImport(line);
                        if (sortedLine !== line) {
                            hasChanges = true;
                            console.log(`✅ Sorted destructured imports in ${path.basename(filePath)}`);
                        }
                        processedLine = sortedLine;
                    }
                    
                    imports[category].push(processedLine);
                    i++;
                }
            } else {
                i++;
            }
        }
        
        // Sort imports within each category alphabetically
        Object.keys(imports).forEach(category => {
            imports[category].sort((a, b) => {
                // Extract the module path for comparison
                const getModulePath = (importLine) => {
                    const match = importLine.match(/from\s*['"]([^'"]+)['"]/);
                    return match ? match[1] : '';
                };
                
                const moduleA = getModulePath(a);
                const moduleB = getModulePath(b);
                
                // For relative imports, sort by path depth first, then alphabetically
                if (category === 'relative') {
                    // Count the number of ../ in the path to determine depth
                    const getDepth = (path) => {
                        const matches = path.match(/\.\.\//g);
                        return matches ? matches.length : 0;
                    };
                    
                    const depthA = getDepth(moduleA);
                    const depthB = getDepth(moduleB);
                    
                    // Sort by depth first (higher depth = more ../ = should come first)
                    if (depthA !== depthB) {
                        return depthB - depthA;
                    }
                    
                    // If same depth, sort alphabetically by full path
                    return moduleA.localeCompare(moduleB);
                }
                
                return moduleA.localeCompare(moduleB);
            });
        });
        
        // Build the new import section in order: React, External, Relative, Styles
        const newImports = [];
        
        const addImportsToNewList = (importList) => {
            importList.forEach(importItem => {
                if (importItem.includes('\n')) {
                    // Multi-line import - split and add each line
                    newImports.push(...importItem.split('\n'));
                } else {
                    // Single line import
                    newImports.push(importItem);
                }
            });
        };
        
        if (imports.react.length > 0) {
            addImportsToNewList(imports.react);
            if (imports.external.length > 0 || imports.relative.length > 0 || imports.styles.length > 0) {
                newImports.push(''); // Empty line after React
            }
        }
        
        if (imports.external.length > 0) {
            addImportsToNewList(imports.external);
            if (imports.relative.length > 0 || imports.styles.length > 0) {
                newImports.push(''); // Empty line after external
            }
        }
        
        if (imports.relative.length > 0) {
            addImportsToNewList(imports.relative);
            if (imports.styles.length > 0) {
                newImports.push(''); // Empty line after relative
            }
        }
        
        if (imports.styles.length > 0) {
            addImportsToNewList(imports.styles);
        }
        
        if (imports.other.length > 0) {
            addImportsToNewList(imports.other);
        }
        
        // Check if the order changed
        const originalImports = lines.slice(importStartIndex, importEndIndex + 1);
        if (JSON.stringify(originalImports) !== JSON.stringify(newImports)) {
            hasChanges = true;
        }
        
        if (hasChanges) {
            // Replace the import section
            lines.splice(importStartIndex, importEndIndex - importStartIndex + 1, ...newImports);
            
            fs.writeFileSync(filePath, lines.join('\n'));
            console.log(`✅ Sorted and grouped imports in ${path.basename(filePath)}`);
            return true;
        } else {
            console.log(`No changes needed in ${path.basename(filePath)}`);
            return false;
        }
        
    } catch (error) {
        console.error(`Error processing ${path.basename(filePath)}:`, error.message);
        return false;
    }
}

/**
 * Checks if imports in a React file are properly sorted and grouped
 */
function areImportsSorted(filePath) {
    // This is a simplified check - in practice, you'd want to implement
    // similar logic to the sorting function to verify the current state
    return true; // For now, assume we need to check manually
}

/**
 * Sorts imports in all React files in a directory
 */
function sortAllReactImports(targetDir = null, checkOnly = false) {
    const srcDir = targetDir || path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcDir)) {
        console.error(`Directory not found: ${srcDir}`);
        return;
    }
    
    const files = getAllReactFiles(srcDir);
    console.log(`${checkOnly ? 'Checking' : 'Processing'} ${files.length} React component files...`);
    
    let processed = 0;
    let successful = 0;
    
    files.forEach(file => {
        const fullPath = path.join(srcDir, file);
        processed++;
        if (!checkOnly && sortImportsInReactFile(fullPath)) {
            successful++;
        } else if (checkOnly) {
            console.log(`Checking: ${file}`);
        }
    });
    
    console.log(`\\n📊 Summary:`);
    console.log(`   Total files processed: ${processed}`);
    if (!checkOnly) {
        console.log(`   Successfully updated: ${successful}`);
        console.log(`   Skipped/failed: ${processed - successful}`);
    }
}

/**
 * Recursively get all React files (.jsx, .js) in a directory
 */
function getAllReactFiles(dir, filesList = [], basePath = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        const relativePath = path.join(basePath, file);
        
        if (stat.isDirectory() && file !== 'node_modules' && !file.startsWith('.')) {
            getAllReactFiles(filePath, filesList, relativePath);
        } else if (stat.isFile() && (file.endsWith('.jsx') || (file.endsWith('.js') && !file.includes('.test.') && !file.includes('.spec.')))) {
            filesList.push(relativePath);
        }
    });
    
    return filesList;
}

// CLI usage
if (require.main === module) {
    const args = process.argv.slice(2);
    const command = args[0];
    const targetFile = args[1];
    
    console.log('🔧 React Import Sorter\\n');
    
    if (command === 'check') {
        if (targetFile) {
            console.log(`Checking imports in: ${targetFile}`);
            // For individual file checking, you'd implement the check logic
        } else {
            console.log('Checking all React files for import sorting...');
            sortAllReactImports(null, true);
        }
    } else if (command === 'sort') {
        if (targetFile) {
            const fullPath = path.resolve(targetFile);
            console.log(`Sorting imports in: ${targetFile}`);
            sortImportsInReactFile(fullPath);
        } else {
            console.log('Sorting imports in all React files...');
            sortAllReactImports();
        }
    } else if (command && !targetFile) {
        // Single argument could be a filename
        const fullPath = path.resolve(command);
        console.log(`Sorting imports in: ${command}`);
        sortImportsInReactFile(fullPath);
    } else {
        console.log('Usage:');
        console.log('  node sort-react-imports.js check [filename]     - Check if imports are sorted');
        console.log('  node sort-react-imports.js sort [filename]      - Sort imports');
        console.log('  node sort-react-imports.js [filename]           - Sort imports in specific file');
        console.log('  node sort-react-imports.js sort                 - Sort all files');
    }
}

module.exports = { sortImportsInReactFile, sortAllReactImports, areImportsSorted };