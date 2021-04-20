import DatabaseDriver from '../../database/DatabaseDriver';

it("should delete user", async () => {
    async function deleteUser(doc) {
        let isPass;
        await DatabaseDriver.deleteUser("102050791948382455788")
        .then(() => {
            console.log("Successfully deleted user.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error deleteing user.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("should delete comment", async () => {
    async function deleteComment(doc) {
        let isPass;
        await DatabaseDriver.deleteComment("102050791948382455788")
        .then(() => {
            console.log("Successfully deleted comment.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error deleting comment.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("should follow", async () => {
    async function follow(doc) {
        let isPass;
        await DatabaseDriver.follow("102050791948382455788")
        .then(() => {
            console.log("Successfully followed.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error following.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("should unfollow", async () => {
    async function unfollow(doc) {
        let isPass;
        await DatabaseDriver.unfollow("102050791948382455788")
        .then(() => {
            console.log("Successfully unfollowed.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error unfollowing.", error);
            isPass = false;
        });
        return isPass;
    }
});

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