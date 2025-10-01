
// Validation functions that return { status: boolean, message: string }
function validateRecipeName(value) {
    let isValid = false;
    let errorMessage = "";
    if (value && typeof value === "string" && value.length >= 4) {
        isValid = true;
    } else if (!value) {
        errorMessage = "Recipe name can not be empty";
    } else if (typeof value !== "string") {
        errorMessage = "Recipename must enter text";
    } else if (value.length >= 4) {
        errorMessage = "you must enter at least 4 charactors";
    }
    console.log(isValid);
    console.log(value);
    return {
        status: isValid,
        message: errorMessage
    };

}

function validateIngredients(value) {
    console.log(value);
    const isValid = value && value.length >= 10
    return { status: isValid, 
        message: isValid ? "": "please insert more than 10 ingredients" };
}

function validateCookingTime(value) {
    console.log(value);
    value= Number(value);
    let isValidRange = value >= 1 && value <= 360

    return {
        status: isValidRange,
        message: isValidRange ? "" : (value < 0 ? "cooking time more than zero" : "cooking time less than 360")
    };
}

function validateDifficulty(value) {
    console.log(value)
    const validChoices = ["easy", "medium", "hard"]
    return {
        status: validChoices.includes(value),
        message: validChoices.includes(value) ? "" : "Please select any one of the choice"
    };
}

function validateDietary(value) {
    console.log(value);

    const validChoices=["vegetarian","vegan","gluten-free","dairy-free"]
    
    return { status: validChoices.includes(value),
         message: validChoices.includes(value) ? "": "please select the one choice" };
}

function validateServings(value) {
    console.log(value);
    value= Number(value);
    let isValid = true;
    let errorMessage = "";
    if (value < 1) {
        isValid = false;
        errorMessage="serving can not less than 1"
    } else if (value > 100) {
        isValid = false;
        errorMessage="serving can not more than 100"
    }
    return { status:isValid,
         message: errorMessage 
        };
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
