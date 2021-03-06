
class DatabaseDriver {

    static async getAllRecipes() {
        return fetch('/getAllRecipes').then(response =>
            response.json().then(data => {
               return data;
            })
        );
    }

    // static post(body) {
    //     fetch('/post/', {
    //         method: 'POST',
    //         cache: "no-cache",
    //         headers:{
    //             "content_type":"application/json",
    //         },
    //         body: JSON.stringify(body)
    //     }
    //     );
    // }

    // static addRecipe(recipe) {
    //     DatabaseDriver.post({
    //         table_name: 'recipes_table',
    //         data: recipe
    //     });
    // }

    static login(user) {
        fetch('/login/', {
            method: 'POST',
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(user)
        }
        );
    }

    static addRecipe(userId, recipe) {
        recipe.user_id = userId

        fetch('/addRecipe/', {
            method: 'POST',
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(recipe)
        }
        );

    }

    static deleteRecipe(userId, recipeId) {
        var recipeToDelete = JSON.stringify({
            'user_id': userId,
            'recipe_id': recipeId
        });

        fetch('/deleteRecipe/' + recipeToDelete, {
            method: 'DELETE',
            cache: "no-cache",
        });
    }
}

export default DatabaseDriver;