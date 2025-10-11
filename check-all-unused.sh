#!/bin/bash

echo "🔍 Checking all React components for unused imports..."
echo "=================================================="

find src -name "*.jsx" -o -name "*.js" | while read file; do
    echo ""
    echo "📄 Analyzing: $file"
    echo "----------------------------------------"
    node check-unused-imports.js "$file" 2>/dev/null || echo "❌ Error analyzing $file"
done

echo ""
echo "✅ Analysis complete!"
echo ""
echo "💡 To remove unused imports from a specific file, run:"
echo "   node check-unused-imports.js <file-path> --remove"