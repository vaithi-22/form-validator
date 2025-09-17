
// Validation functions that return { status: boolean, message: string }
function validateRecipeName(value) {
    console.log(value);
    return { status: true, message: '' };
}

function validateIngredients(value) {
    console.log(value);
    return { status: true, message: '' };
}

function validateCookingTime(value) {
    console.log(value);
    return { status: true, message: '' };
}

function validateDifficulty(value) {
    console.log(value);
    return { status: true, message: '' };
}

function validateDietary(value) {
    console.log(value);
    return { status: true, message: '' };
}

function validateServings(value) {
    console.log(value);
    return { status: true, message: '' };
}



// Do not change any of the lines below here
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipeForm');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // Create validators object with all validation functions
            const validators = {
                recipeName: validateRecipeName,
                ingredients: validateIngredients,
                cookingTime: validateCookingTime,
                difficulty: validateDifficulty,
                dietary: validateDietary,
                servings: validateServings
            };

            submitRecipe(validators);
        });
    }
});
