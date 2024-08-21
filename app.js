#!/usr/bin/env node
async function orderingIngredient() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ingredient ordered and delivered');
        }, 3000);
    });
}
async function prepareBakingTray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Baking Tray prepared');
        }, 1500);
    });
}
async function backBrownies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Brownies back to perfection');
        }, 4000);
    });
}
async function makeBrowniesWithOrderedIngredients() {
    try {
        console.log('Starting the brownies-making process.......');
        const orderResult = await orderingIngredient();
        console.log(orderResult);
        const trayResult = await prepareBakingTray();
        console.log(trayResult);
        const backResult = await backBrownies();
        console.log(backResult);
        console.log("Brownies ready to enjoy!");
    }
    catch (error) {
        console.error('An error occurred', error);
    }
}
// Call the function to execute the process
makeBrowniesWithOrderedIngredients();
export {};
