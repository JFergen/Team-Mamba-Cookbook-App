class DatabaseDriver {
    static async getAllRecipes() {
        return fetch('/getAllRecipes').then(response =>
            response.json().then(data => {
               return data;
            })
        );
    }

}

export default DatabaseDriver;