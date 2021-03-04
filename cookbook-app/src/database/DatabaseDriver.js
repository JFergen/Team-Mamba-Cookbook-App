
class DatabaseDriver {

    static async getAllRecipes() {
        return fetch('/getAllRecipes').then(response =>
            response.json().then(data => {
               return data;
            })
        );
    }

    static addRecipe(recipe) {
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

    static addUser(user) {
        fetch('/addUser/', {
            method: 'POST',
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(user)
        }
        );
    }
}

export default DatabaseDriver;