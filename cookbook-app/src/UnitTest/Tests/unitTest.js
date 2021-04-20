import DatabaseDriver from '../../database/DatabaseDriver';

it("Should get N random recipes", async () => {
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

it("Deleting User", async () => {
    async function deleteUser(id) {
        let isPass;
        await DatabaseDriver.deleteUser("108347274282317384205")
        .then(() => {
            console.log("Successfully deleted user.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error delete user.", error);
            isPass = false;
        });
        return isPass;
    }
});

