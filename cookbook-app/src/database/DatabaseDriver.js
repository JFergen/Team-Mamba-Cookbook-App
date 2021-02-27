
class DatabaseDriver {

    static async getAllRecipes() {
        return fetch('/getAllRecipes').then(response =>
            response.json().then(data => {
                console.log(data);
            })
        );
    }

}

export default DatabaseDriver;