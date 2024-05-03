export const selectCategoriesMap = (state) => {
    console.log('selector fired');
    return state.categories.categoriesArray.reduce((acc, category) => {
        const { title, items } = category;

        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
};
