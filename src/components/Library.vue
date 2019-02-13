<template>
  <div>
    <h1>Welcome to the Library!</h1>
    <h3>We have {{ this.availableBooks.length }} books available</h3>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Library',
    computed: {
      ...mapGetters([
        'availableBooks'
      ])
    }
  };
</script>

<style scoped>

</style>