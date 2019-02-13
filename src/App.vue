<template>
  <div id="app">
    <Library/>
    <BookList/>
  </div>
</template>

<script>
import Library from './components/Library.vue'
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    Library,
    BookList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
