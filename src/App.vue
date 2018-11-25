<template>
  <div
    id="app"
    class="container"
  >
    <nav class="top-bar">
      Pinboard Search
    </nav>
    <!-- TODO search fields -->
    <div class="main">
      <SearchResult :posts="posts" />
    </div>
    <aside class="tags">
      Tags go here, TODO
    </aside>
  </div>
</template>

<script>
import SearchResult from './components/SearchResult';
import posts from './dummy_data/posts';

export default {
  name: 'App',
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
