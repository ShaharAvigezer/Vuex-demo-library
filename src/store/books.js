import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
      { id: 1, title: 'Ender\'s Game', available: true },
      { id: 2, title: 'Harry Potter and the Goblet of Fire', available: true },
      { id: 3, title: 'Fahrenheit 451', available: false }
    ]
  },
  getters: {
    availableBooks: state => {
      return state.books.filter(book => book.available);
    }
  },
  mutations: {
    toggleAvailability(state, book) {
      const index = state.books.findIndex(b => b.id === book.id);
      state.books[index].available = !state.books[index].available;
    }
  },
  actions: {
    async rentBook(context, book) {
      context.commit('toggleAvailability', book);

      /* commit multiple mutations
      context.commit('logDateTime');
      context.commit('saveUsername');
      */

      /* commit mutation after API call
      await LibraryAPI.rentBook(book);
      context.commit('setUnavailable', book);
      */
    }
  }
});

