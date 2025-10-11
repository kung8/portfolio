const fs = require('fs');
const path = require('path');

/**
 * Analyzes a React file for unused imports and variables
 */
function checkUnusedImportsAndVariables(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        const results = {
            unusedImports: [],
            unusedVariables: [],
            potentiallyUnused: []
        };
        
        // Extract all imports
        const imports = [];
        const importRegex = /import\s+(?:{([^}]+)}|\*\s+as\s+(\w+)|(\w+))\s+from\s+['"]([^'"]+)['"]/g;
        
        let match;
        while ((match = importRegex.exec(content)) !== null) {
            if (match[1]) {
                // Destructured imports: import { a, b, c } from 'module'
                const destructuredImports = match[1].split(',').map(imp => imp.trim());
                destructuredImports.forEach(imp => {
                    imports.push({ name: imp, module: match[4], type: 'destructured' });
                });
            } else if (match[2]) {
                // Namespace import: import * as name from 'module'
                imports.push({ name: match[2], module: match[4], type: 'namespace' });
            } else if (match[3]) {
                // Default import: import name from 'module'
                imports.push({ name: match[3], module: match[4], type: 'default' });
            }
        }
        
        // Also check multi-line imports
        const multiLineImportRegex = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/gs;
        while ((match = multiLineImportRegex.exec(content)) !== null) {
            const importNames = match[1].split(',').map(name => {
                return name.trim().replace(/\\n/g, '').replace(/\\s+/g, ' ').trim();
            }).filter(name => name && !name.includes('import') && !name.includes('from'));
            
            importNames.forEach(name => {
                const cleanName = name.replace(/,$/, '').trim();
                if (cleanName && !imports.find(imp => imp.name === cleanName)) {
                    imports.push({ name: cleanName, module: match[2], type: 'destructured' });
                }
            });
        }
        
        console.log('\n🔍 Found imports:');
        imports.forEach(imp => {
            console.log(`  - ${imp.name} (${imp.type}) from '${imp.module}'`);
        });
        
        // Check which imports are used
        imports.forEach(imp => {
            const importName = imp.name;
            
            // Skip React hooks as they're commonly used in ways that are hard to detect
            if (['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef'].includes(importName)) {
                return;
            }
            
            // Create regex to find usage of this import
            const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
            
            // Count occurrences (excluding the import line itself)
            const contentWithoutImports = content.replace(/import[^;]+;/g, '');
            const matches = contentWithoutImports.match(usageRegex);
            const usageCount = matches ? matches.length : 0;
            
            if (usageCount === 0) {
                results.unusedImports.push(imp);
            } else if (usageCount === 1) {
                // Might be only used in the export or prop destructuring
                results.potentiallyUnused.push({ ...imp, usageCount });
            }
        });
        
        // Extract variable declarations
        const variableDeclarations = [];
        const varRegex = /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g;
        
        while ((match = varRegex.exec(content)) !== null) {
            variableDeclarations.push(match[1]);
        }
        
        // Check for unused variables (basic check)
        variableDeclarations.forEach(varName => {
            const usageRegex = new RegExp(`\\b${varName}\\b`, 'g');
            const matches = content.match(usageRegex);
            const usageCount = matches ? matches.length : 0;
            
            // If used only once (in declaration), it might be unused
            if (usageCount === 1) {
                results.potentiallyUnused.push({ name: varName, type: 'variable', usageCount: 1 });
            }
        });
        
        return results;
        
    } catch (error) {
        console.error(`Error analyzing ${filePath}:`, error.message);
        return { unusedImports: [], unusedVariables: [], potentiallyUnused: [] };
    }
}

function reportResults(results, filePath) {
    console.log(`\n📊 Analysis Results for ${path.basename(filePath)}:`);
    console.log('='.repeat(50));
    
    if (results.unusedImports.length > 0) {
        console.log('\n❌ Unused Imports:');
        results.unusedImports.forEach(imp => {
            console.log(`  - ${imp.name} from '${imp.module}'`);
        });
    }
    
    if (results.potentiallyUnused.length > 0) {
        console.log('\n⚠️  Potentially Unused (low usage):');
        results.potentiallyUnused.forEach(item => {
            if (item.module) {
                console.log(`  - ${item.name} from '${item.module}' (used ${item.usageCount} time${item.usageCount !== 1 ? 's' : ''})`);
            } else {
                console.log(`  - ${item.name} (${item.type}, used ${item.usageCount} time${item.usageCount !== 1 ? 's' : ''})`);
            }
        });
    }
    
    if (results.unusedImports.length === 0 && results.potentiallyUnused.length === 0) {
        console.log('\n✅ No obvious unused imports or variables found!');
    }
    
    console.log('\n💡 Note: This is a basic analysis. Some items marked as "unused" might be:');
    console.log('   - Used in JSX attributes or complex expressions');
    console.log('   - Used in dynamic property access');
    console.log('   - Required for side effects');
    console.log('   - Used in ways that are hard to detect statically');
}

// CLI usage
if (require.main === module) {
    const filePath = process.argv[2];
    if (filePath) {
        console.log(`🔍 Analyzing unused imports and variables in: ${path.basename(filePath)}`);
        const results = checkUnusedImportsAndVariables(filePath);
        reportResults(results, filePath);
    } else {
        console.log('Usage: node check-unused.js <file-path>');
    }
}

module.exports = { checkUnusedImportsAndVariables, reportResults };