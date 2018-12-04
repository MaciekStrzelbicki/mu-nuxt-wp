<template>
  <div>
      <categories :categories="categories"></categories>
      <h1 class="page-title">{{slug}}</h1>
      <post-list v-if="posts" :posts="category_posts" :title="slug"></post-list>
      <recent-posts v-if="posts" :totalPosts="posts.total" :totalPages="posts.totalPages" :posts="posts.data"></recent-posts>
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
  async asyncData({ params }) {
    let { posts } = await api.getCategory(params.slug)

    return {
      category_posts: posts,
      slug: params.slug
    }
  },
  mounted() {
    // this.$store.dispatch('getCategory', this.$route.params.slug)
    // console.log(this.categories)
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
    this.$store.dispatch('getPosts')
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
