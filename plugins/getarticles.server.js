export default async({ store}) => {
    await store.dispatch('getCategoryData');
    await store.dispatch('getSectionData');
    await store.dispatch('getArticleData');
}