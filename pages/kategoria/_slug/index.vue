<template>
  <div>
    <v-container>
      <p>Posty w kategorii:</p>
      <h1 class="page-title">{{this.$route.params.slug}}</h1>
    </v-container>
    <post-list v-if="posts.data" :posts="posts.data" :category="this.$route.params.slug"></post-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import api from '../../../api/index.js';
import postList from '../../../components/PostList';
import recentPosts from '../../../components/RecentPosts';
import categories from '../../../components/Categories';

export default {
  components: { postList, categories, recentPosts },
  async fetch ({ store, params }) {
    await store.dispatch('getPosts');
  },
  mounted() {
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
    if (this.posts.length === 0){
      this.$store.dispatch('getPosts')
    }
  },
  computed: {
    ...mapGetters([
      'posts',
      'category',
      'categories'
    ])
  }
}
</script>

<style>

</style>
