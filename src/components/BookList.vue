<template>
  <div>
    <div class="list" v-for="book in availableBooks" :key="book.id">
      <span>{{ book.title }}</span>
      <button @click="rentBook(book)">Rent</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'BooksList',
    computed: {
      ...mapGetters([
        'availableBooks'
      ])
    },
    methods: {
      ...mapActions([
        'rentBook'
      ])
    }
  };
</script>

<style scoped>

</style>