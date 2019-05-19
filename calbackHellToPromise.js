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
    })
}

const getRelated = publisher => {
    return new Promise((resolve, reject) =>{
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza',  publisher: 'Jonas'};
            resolve(`${pub} ${recipe.title}`)
        }, 1500, publisher);
    })
}

getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Riswan Ardiansah');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log('error');
});

// nb :menangani Error perlu reject(denganParameter) untuk mereturn error :)