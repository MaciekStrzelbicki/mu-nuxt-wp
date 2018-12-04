<template>
  <div>
      <categories :categories="categories"></categories>
      <h1>{{ post.title.rendered }}</h1>
      <a :href="'/category/' + post.pure_taxonomies.categories[0].slug">{{ post.pure_taxonomies.categories[0].cat_name }}</a> 
      <div v-html="post.content.rendered"></div>
      <img v-if="featured_image()" :src="post.better_featured_image.source_url" :alt="post.better_featured_image.alt_txt">
      recent-posts:
      <recent-posts v-if="posts" :posts="posts"></recent-posts>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import config from "../../api/config";
import recentPosts from '../../components/RecentPosts.vue'
import categories from '../../components/Categories.vue'

export default {
  components: { recentPosts, categories },
  async asyncData({ params }) {
    let { data } = await axios.get(config.baseUrl + `posts?slug=${params.slug}`)
    return {
      post: data[0]
    }
  },

  mounted() {
    this.$store.dispatch('getPosts');
    this.$store.dispatch('getCategories');
    // console.log('aaa:',   this.post)
  },
  computed: {
    ...mapGetters([
      'posts',
      'categories'
    ])
  },
  methods:{
    featured_image(){
      if (this.post.better_featured_image != null){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>
