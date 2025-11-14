const RecipeWebScraper = require('./server/services/RecipeWebScraper');

async function testReactCompatibility() {
  try {
    console.log('🧪 Comprehensive React Compatibility Test');
    console.log('==========================================');
    
    const scraper = new RecipeWebScraper();
    const recipeData = await scraper.scrapeRecipe('https://www.allrecipes.com/recipe/244777/apple-pie-cake-mix-cake/');
    
    console.log('\n✅ Basic Data Types:');
    console.log(`  name: ${typeof recipeData.name} = "${recipeData.name}"`);
    console.log(`  category: ${typeof recipeData.category} = "${recipeData.category}"`);
    console.log(`  genre: ${typeof recipeData.genre} = "${recipeData.genre}"`);
    console.log(`  method: ${typeof recipeData.method} = "${recipeData.method}"`);
    console.log(`  type: ${typeof recipeData.type} = "${recipeData.type}"`);
    
    console.log('\n✅ Timing Objects:');
    console.log(`  prepTime: {amount: ${recipeData.prepTime?.amount}, unit: "${recipeData.prepTime?.unit}"}`);
    console.log(`  cookTime: {amount: ${recipeData.cookTime?.amount}, unit: "${recipeData.cookTime?.unit}"}`);
    console.log(`  yields: {amount: ${recipeData.yields?.amount}, unit: "${recipeData.yields?.unit}"}`);
    
    console.log('\n✅ Ingredients Array:');
    console.log(`  Count: ${recipeData.ingredients ? recipeData.ingredients.length : 0}`);
    if (recipeData.ingredients && recipeData.ingredients.length > 0) {
      recipeData.ingredients.slice(0, 3).forEach((ing, i) => {
        console.log(`  ${i+1}: {`);
        console.log(`    amount: ${typeof ing.amount} = ${JSON.stringify(ing.amount)}`);
        console.log(`    unit: ${typeof ing.unit} = "${ing.unit}"`);
        console.log(`    name: ${typeof ing.name} = "${ing.name}"`);
        console.log(`    additionalDetails: ${typeof ing.additionalDetails} = "${ing.additionalDetails}"`);
        console.log(`  }`);
      });
    }
    
    console.log('\n✅ Directions Array:');
    console.log(`  Count: ${recipeData.directions ? recipeData.directions.length : 0}`);
    if (recipeData.directions && recipeData.directions.length > 0) {
      recipeData.directions.slice(0, 2).forEach((dir, i) => {
        console.log(`  ${i+1}: {step: "${dir.step.substring(0, 50)}..."}`);
      });
    }
    
    console.log('\n✅ Optional Arrays:');
    console.log(`  appliances: ${Array.isArray(recipeData.appliances)} (length: ${recipeData.appliances?.length || 0})`);
    console.log(`  supplies: ${Array.isArray(recipeData.supplies)} (length: ${recipeData.supplies?.length || 0})`);
    console.log(`  websites: ${Array.isArray(recipeData.websites)} (length: ${recipeData.websites?.length || 0})`);
    
    // Check for potential React crashes
    console.log('\n🔍 Potential Issues Check:');
    let issues = [];
    
    if (!recipeData.name) issues.push('Missing name');
    if (!recipeData.category) issues.push('Missing category');
    if (!recipeData.genre) issues.push('Missing genre');
    
    if (recipeData.ingredients) {
      const badIngredients = recipeData.ingredients.filter(ing => 
        !ing.name || typeof ing.unit !== 'string' || (ing.amount === '' || ing.amount === null)
      );
      if (badIngredients.length > 0) issues.push(`${badIngredients.length} malformed ingredients`);
    }
    
    if (recipeData.directions) {
      const badDirections = recipeData.directions.filter(dir => !dir.step || dir.step === '');
      if (badDirections.length > 0) issues.push(`${badDirections.length} empty directions`);
    }
    
    if (issues.length === 0) {
      console.log('  ✅ No issues found - should be React compatible!');
    } else {
      console.log('  ❌ Issues found:', issues.join(', '));
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

testReactCompatibility();