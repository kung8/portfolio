#!/bin/bash

# Pre-commit checker for unused imports and variables
# This script can be run independently or as part of the pre-commit hook

echo "🔍 Checking for unused imports and variables..."
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get all React files (or specific files passed as arguments)
if [ $# -eq 0 ]; then
    # No arguments - check all React files
    REACT_FILES=$(find src -name "*.jsx" -o -name "*.js" 2>/dev/null)
    echo "Checking all React files in src directory..."
else
    # Arguments provided - check specific files
    REACT_FILES="$@"
    echo "Checking specified files..."
fi

if [ -z "$REACT_FILES" ]; then
    echo "No React files found to check."
    exit 0
fi

TOTAL_FILES=0
CLEAN_FILES=0
PROBLEMATIC_FILES=0
OVERALL_UNUSED_FOUND=false

# Check each React file
for file in $REACT_FILES; do
    if [ ! -f "$file" ]; then
        echo -e "${YELLOW}⚠️  File not found: $file${NC}"
        continue
    fi
    
    TOTAL_FILES=$((TOTAL_FILES + 1))
    echo ""
    echo "📄 Checking: $file"
    echo "----------------------------------------"
    
    # Try ESLint first if available
    if command -v npx >/dev/null 2>&1 && [ -f ".eslintrc.json" ]; then
        # Use ESLint to check for unused imports and variables
        ESLINT_OUTPUT=$(npx eslint "$file" --no-eslintrc --config .eslintrc.json --format compact 2>/dev/null | grep -E "(unused-imports|no-unused-vars)" || true)
        
        if [ -n "$ESLINT_OUTPUT" ]; then
            echo -e "${RED}❌ Issues found:${NC}"
            echo "$ESLINT_OUTPUT" | while IFS= read -r line; do
                echo "   $line"
            done
            PROBLEMATIC_FILES=$((PROBLEMATIC_FILES + 1))
            OVERALL_UNUSED_FOUND=true
        else
            echo -e "${GREEN}✅ No unused imports/variables detected${NC}"
            CLEAN_FILES=$((CLEAN_FILES + 1))
        fi
    else
        # Fallback to our custom checker
        UNUSED_OUTPUT=$(node check-unused-imports.js "$file" 2>/dev/null)
        
        if echo "$UNUSED_OUTPUT" | grep -q "❌"; then
            echo -e "${RED}❌ Issues found:${NC}"
            echo "$UNUSED_OUTPUT" | grep "❌" | while IFS= read -r line; do
                echo "   $line"
            done
            PROBLEMATIC_FILES=$((PROBLEMATIC_FILES + 1))
            OVERALL_UNUSED_FOUND=true
        else
            echo -e "${GREEN}✅ No unused imports detected${NC}"
            CLEAN_FILES=$((CLEAN_FILES + 1))
        fi
    fi
done

# Summary
echo ""
echo "📊 Summary:"
echo "==========="
echo -e "Total files checked: $TOTAL_FILES"
echo -e "${GREEN}Clean files: $CLEAN_FILES${NC}"
echo -e "${RED}Files with issues: $PROBLEMATIC_FILES${NC}"

if [ "$OVERALL_UNUSED_FOUND" = true ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Issues detected!${NC}"
    echo ""
    echo "🔧 Fix options:"
    echo "  • Manual: Remove unused imports/variables in your editor"
    echo "  • Auto-fix: Run 'npx eslint --fix <file>' or 'node check-unused-imports.js <file> --remove'"
    echo "  • VS Code: Use Cmd+. on highlighted issues for quick fixes"
    echo ""
    
    # If running in pre-commit context, exit with error
    if [ "$1" = "--pre-commit" ]; then
        exit 1
    fi
else
    echo ""
    echo -e "${GREEN}🎉 All files are clean!${NC}"
fi

exit 0