<template>
  <div>
      <!-- <categories :categories="categories"></categories> -->
    <v-container>
      <small>Posty w kategorii:</small>
      <h1 class="page-title">{{this.$route.params.slug}}</h1>
    </v-container>
    <post-list v-if="posts.data" :posts="posts.data" :category="this.$route.params.slug"></post-list>
    <!-- {{ posts.data }}  -->
    <!-- {{ this.$route.params.slug }} -->
      <!-- <post-list v-if="posts" :posts="category_posts" :title="slug"></post-list> -->
      <!-- <recent-posts v-if="posts" :totalPosts="posts.total" :totalPages="posts.totalPages" :posts="posts.data"></recent-posts> -->
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
  // async asyncData({ params }) {
  //   let { posts } = await api.getCategory(params.slug)

  //   return {
  //     category_posts: posts,
  //     slug: params.slug
  //   }
  // },
  async fetch ({ store, params }) {
    await store.dispatch('getPosts');
  },
  mounted() {
    // this.$store.dispatch('getCategory', this.$route.params.slug)
    console.log(this.categories)
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
