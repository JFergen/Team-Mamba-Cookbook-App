import DatabaseDriver from '../../database/DatabaseDriver';

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

it("get suggested friends", async () => {
    async function getSuggestedFriends(id) {
        let isPass;
        await DatabaseDriver.getSuggestedFriends("102050791948382455788", 10)
        .then(() => {
            console.log("Successfully got suggested friends.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting suggested friends.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("get suggested comments", async () => {
    async function getSuggestedComments(id) {
        let isPass;
        await DatabaseDriver.getSuggestedComments("102050791948382455788", 10)
        .then(() => {
            console.log("Successfully got suggested comments.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting suggested comments.", error);
            isPass = false;
        });
        return isPass;
    }
});


it("followers", async () => {
    async function followers(id) {
        let isPass;
        await DatabaseDriver.followers("108347274282317384205")
        .then(() => {
            console.log("Successfully got user's followers.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting user's followers.", error);
            isPass = false;
        });
        return isPass;
    }
});


it("following", async () => {
    async function following(id) {
        let isPass;
        await DatabaseDriver.following("108347274282317384205")
        .then(() => {
            console.log("Successfully got user's following.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting user's following.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("get users saved recipes", async () => {
    async function getUsersSavedRecipes(id) {
        let isPass;
        await DatabaseDriver.getUsersSavedRecipes("108347274282317384205")
        .then(() => {
            console.log("Successfully got users saved recipes.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting users saved recipes.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Add recipe", async () => {
    let id = {
                user_id: "109182935798434949219",
                name: "pasta",
                ingredient: "red sauce"
             }
    async function addRecipe(id) {
        let isPass;
        await DatabaseDriver.addRecipe()
        .then(() => {
            console.log("Successfully added recipe.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error adding recipe.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Update recipe", async () => {
    let id = {
        user_id: "109182935798434949219",
        name: "pasta",
        ingredient: "alfredo sauce"
     }
    async function updateRecipe(id) {
        let isPass;
        await DatabaseDriver.updateRecipe()
        .then(() => {
            console.log("Successfully updated recipe.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error updating recipe.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Add comment", async () => {
    let id = {
        user_id: "109182935798434949219",
        name: "Het's comment",
        comment: "Hi guys!"
     }
    async function addComment(id) {
        let isPass;
        await DatabaseDriver.addComment()
        .then(() => {
            console.log("Successfully added comment.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error adding comment.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Update comment", async () => {
    let id = {
        user_id: "109182935798434949219",
        name: "Het's comment",
        comment: "nice"
     }
    async function updateComment(id) {
        let isPass;
        await DatabaseDriver.updateComment()
        .then(() => {
            console.log("Successfully updated comment.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error updating comment.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Get recipe comments", async () => {
    async function getRecipeComments(id) {
        let isPass;
        await DatabaseDriver.getRecipeComments("606f4a51cc88bcfb8f1f14a6")
        .then(() => {
            console.log("Successfully got recipe comments.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting recipe comments.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Get users recipes", async () => {
    async function getUsersRecipes(id) {
        let isPass;
        await DatabaseDriver.getUsersRecipes("109182935798434949219")
        .then(() => {
            console.log("Successfully got users recipes.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting users recipes.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Get user saved", async () => {
    async function getUserSved(id) {
        let isPass;
        await DatabaseDriver.getUserSaved("109182935798434949219")
        .then(() => {
            console.log("Successfully got user saved.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting user saved.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Get recipes for homepage", async () => {
    async function getRecipesForHomepage(id) {
        let isPass;
        await DatabaseDriver.getRecipesForHomepage("109182935798434949219")
        .then(() => {
            console.log("Successfully got recipes for homepage.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error getting recipes for homepage.", error);
            isPass = false;
        });
        return isPass;
    }
});

it("Delete recipe", async () => {
    async function deleteRecipe(id) {
        let isPass;
        await DatabaseDriver.deleteRecipe("606f4a51cc88bcfb8f1f14a6")
        .then(() => {
            console.log("Successfully deleted recipe.");
            isPass = true;
        })
        .catch((error) => {
            alert("Error deleteing recipe.", error);
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
