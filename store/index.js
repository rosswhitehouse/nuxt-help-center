export const state = () => ({
    categories: [],
    sections: [],
    articles: [],
    cohort: null
});

export const mutations = {
    updateCategories: (state, data) => {
        state.categories = data;
    },
    updateSections: (state, data) => {
        state.sections = data;
    },
    updateArticles: (state, data) => {
        state.articles = data;
    },
    setCohort: (state, data) => {
      state.cohort = data;
    }
};

export const actions = {
    async getCohort({ state, commit }) {
      const cohort = Math.random() > 0.5 ? 'A' : 'B';
      commit('setCohort', cohort);
    },
    async getCategoryData({ state, commit }) {
      console.log('RUNNING');
      if (state.categories.length) return
      try {
        await fetch('https://help.hotjar.com/api/v2/help_center/categories')
        .then(response => response.json())
        .then(data => {
          commit('updateCategories', data.categories)
        })
      }
      catch (err) {
        console.log(err);
      }
    },
    async getSectionData({ state, commit }) {
      if (state.sections.length) return
      try {
        await fetch('https://help.hotjar.com/api/v2/help_center/sections')
        .then(response => response.json())
        .then(data => {
          commit('updateSections', data.sections)
        })
      }
      catch (err) {
        console.log(err);
      }
    },
    async getArticleData({ state, commit }) {
      if (state.articles.length) return
      try {
        await fetch('https://help.hotjar.com/api/v2/help_center/articles')
        .then(response => response.json())
        .then(data => {
          commit('updateArticles', data.articles)
        })
      }
      catch (err) {
        console.log(err);
      }
    }
};