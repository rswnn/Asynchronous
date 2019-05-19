const getRecipe = () => {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID)

        setTimeout(id => {
            const recipe = { title: 'Fresh Tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza',  publisher: 'Jonas'}
                console.log(publisher);
            }, 1500, recipe.publisher);

        }, 1500, recipeID[2]);

    }, 1500);
}
getRecipe();