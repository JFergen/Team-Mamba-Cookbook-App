import DatabaseDriver from '../../database/DatabaseDriver';

it("should get N random recipes", async () => {
    async function getNRandomRecipes(doc) {
        let isPass;
        await DatabaseDriver.getNRandomRecipes("102050791948382455788", 10)
        .then(() => {
            console.log("Successfully got random recipes.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting random recipes.", error);
            isPass = false;
        });
        return isPass;
    }
});
