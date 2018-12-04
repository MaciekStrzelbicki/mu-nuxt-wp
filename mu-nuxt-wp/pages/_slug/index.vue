<template>
  <div>
      <categories :categories="categories"></categories>
      <h1>{{post.title.rendered}}</h1>
      <div v-html="post.content.rendered"></div>
      <recent-posts v-if="posts" :posts="posts.data"></recent-posts>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios';
import config from '../../api/config';
import recentPosts from '../../components/RecentPosts';
import categories from '../../components/Categories';

export default {
  components: { recentPosts, categories },
  async asyncData({ params }) {
    let { data } = await axios.get(config.baseUrl + `posts?slug=${params.slug}`)
    return {
      post: data[0]
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapGetters([
      'posts',
      'categories'
    ])
  }
}
</script>

<style>

</style>
