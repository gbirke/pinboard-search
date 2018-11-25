<template>
  <div id="app">
      <div class="main">
          <SearchResult :posts="posts" />
      </div>
  </div>
</template>

<script>
import SearchResult from './components/SearchResult';
import posts from './dummy_data/posts';

export default {
  name: 'app',
  components: {
	SearchResult
  },
  data () {
    return {
      posts
    }
  }
}
</script>

<style>

    @import './assets/styles.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
