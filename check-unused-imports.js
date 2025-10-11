const fs = require('fs');
const path = require('path');

/**
 * Simple checker for obviously unused imports in React files
 */
function findUnusedImports(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract all named imports and their sources
        const namedImports = new Map(); // importName -> { module, lineContent }
        
        // Single-line imports
        const singleLineRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g;
        let match;
        
        while ((match = singleLineRegex.exec(content)) !== null) {
            const imports = match[1].split(',').map(imp => imp.trim());
            imports.forEach(imp => {
                namedImports.set(imp, { module: match[2], line: match[0] });
            });
        }
        
        // Multi-line imports
        const multiLineRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]([^'"]+)['"]/gs;
        while ((match = multiLineRegex.exec(content)) !== null) {
            const imports = match[1].split(',')
                .map(imp => imp.replace(/\n/g, '').trim())
                .filter(imp => imp && imp !== '');
            
            imports.forEach(imp => {
                namedImports.set(imp, { module: match[2], line: match[0] });
            });
        }
        
        console.log(`\n🔍 Checking ${namedImports.size} imports in ${path.basename(filePath)}:`);
        
        const unusedImports = [];
        const usedImports = [];
        
        namedImports.forEach((info, importName) => {
            // Skip React hooks as they're hard to detect properly
            if (['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef', 'useContext'].includes(importName)) {
                return;
            }
            
            // Look for usage in the file (excluding import statements)
            const importSection = content.match(/^import.*?from.*?;$/gm)?.join('\n') || '';
            const codeWithoutImports = content.replace(importSection, '');
            
            // Check for the import name in the code
            const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
            const usages = codeWithoutImports.match(usageRegex);
            
            if (!usages || usages.length === 0) {
                unusedImports.push({ name: importName, ...info });
                console.log(`❌ ${importName} from '${info.module}' - UNUSED`);
            } else {
                usedImports.push({ name: importName, ...info, usageCount: usages.length });
                console.log(`✅ ${importName} from '${info.module}' - used ${usages.length} time${usages.length !== 1 ? 's' : ''}`);
            }
        });
        
        return { unusedImports, usedImports, total: namedImports.size };
        
    } catch (error) {
        console.error(`Error analyzing ${filePath}:`, error.message);
        return { unusedImports: [], usedImports: [], total: 0 };
    }
}

/**
 * Remove unused imports from a file
 */
function removeUnusedImports(filePath, unusedImports) {
    if (unusedImports.length === 0) {
        console.log('✅ No unused imports to remove!');
        return false;
    }
    
    console.log(`\n🧹 Removing ${unusedImports.length} unused imports...`);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;
        
        unusedImports.forEach(unused => {
            const importName = unused.name;
            
            // Try to remove from single-line imports
            const singleLineRegex = new RegExp(
                `import\\s*{\\s*([^}]*?)\\b${importName}\\b,?\\s*([^}]*?)\\s*}\\s*from\\s*['"]${unused.module.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"];?`,
                'g'
            );
            
            content = content.replace(singleLineRegex, (match, before, after) => {
                const beforeItems = before.split(',').map(s => s.trim()).filter(s => s);
                const afterItems = after.split(',').map(s => s.trim()).filter(s => s);
                const remainingItems = [...beforeItems, ...afterItems].filter(item => item !== importName);
                
                if (remainingItems.length === 0) {
                    // Remove entire import statement
                    return '';
                } else {
                    // Keep import but remove the unused item
                    return `import { ${remainingItems.join(', ')} } from '${unused.module}';`;
                }
            });
            
            // Try to remove from multi-line imports
            const multiLineStartRegex = new RegExp(
                `import\\s*{[^}]*?\\n?\\s*${importName}\\b,?[^}]*?}\\s*from\\s*['"]${unused.module.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"];?`,
                'gs'
            );
            
            content = content.replace(multiLineStartRegex, (match) => {
                // Remove the specific import line
                const lines = match.split('\n');
                const filteredLines = lines.filter(line => {
                    const trimmedLine = line.trim().replace(/,$/, '');
                    return trimmedLine !== importName;
                });
                
                // Check if any imports remain
                const hasRemainingImports = filteredLines.some(line => 
                    line.trim() && 
                    !line.includes('import {') && 
                    !line.includes('} from') &&
                    !line.includes('from ')
                );
                
                if (!hasRemainingImports) {
                    return ''; // Remove entire import block
                } else {
                    return filteredLines.join('\n');
                }
            });
            
            hasChanges = true;
            console.log(`  ✅ Removed ${importName}`);
        });
        
        if (hasChanges) {
            // Clean up any empty lines left behind
            content = content.replace(/\n\n\n+/g, '\n\n');
            
            fs.writeFileSync(filePath, content);
            console.log(`\n💾 Updated ${path.basename(filePath)}`);
        }
        
        return hasChanges;
        
    } catch (error) {
        console.error(`Error removing unused imports from ${filePath}:`, error.message);
        return false;
    }
}

// CLI usage
if (require.main === module) {
    const filePath = process.argv[2];
    const shouldRemove = process.argv[3] === '--remove' || process.argv[3] === '-r';
    
    if (filePath) {
        const results = findUnusedImports(filePath);
        
        console.log(`\n📊 Summary:`);
        console.log(`   Total imports: ${results.total}`);
        console.log(`   Used imports: ${results.usedImports.length}`);
        console.log(`   Unused imports: ${results.unusedImports.length}`);
        
        if (shouldRemove && results.unusedImports.length > 0) {
            removeUnusedImports(filePath, results.unusedImports);
        } else if (results.unusedImports.length > 0) {
            console.log(`\n💡 To remove unused imports, run:`);
            console.log(`   node ${path.basename(__filename)} "${filePath}" --remove`);
        }
    } else {
        console.log('Usage:');
        console.log(`  node ${path.basename(__filename)} <file-path> [--remove]`);
        console.log('');
        console.log('Options:');
        console.log('  --remove, -r    Remove unused imports from the file');
    }
}

module.exports = { findUnusedImports, removeUnusedImports };