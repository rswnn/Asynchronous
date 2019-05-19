const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve,reject) => {
        setTimeout(ID =>{
            const recipe = { title: 'Fresh Tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID)
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) =>{
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza',  publisher: 'Jonas'};
            resolve(`${pub} ${recipe.title}`)
        }, 1500, publisher);
    });
}

async function getRecipeAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Riswan Ardiansah');
    console.log(related);

    return recipe;
}

getRecipeAW().then(el => console.log(`${el} is best ever !!`));