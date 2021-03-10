class DatabaseDriver {

    // Users

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

    static deleteUser(userId) {
        fetch('/deleteUser/' + userId, {
            method: 'DELETE',
            cache: "no-cache",
        });
    }

    // End Users

    // Recipes

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

    static async getUsersRecipes(userId) {
        return fetch('/getUsersRecipes/' + String(userId)).then(response =>
            response.json().then(data => {
               return data;
            })
        );
    }

    // End Recipes

    // Comments

    static addComment(recipe_id, comment) {
        var comment_to_add = {
            recipe_id: recipe_id,
            comment: comment
        }

        fetch('/addComment/', {
            method: 'POST',
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(comment_to_add)
        }
        );
    }

    // End Comments
}

export default DatabaseDriver;