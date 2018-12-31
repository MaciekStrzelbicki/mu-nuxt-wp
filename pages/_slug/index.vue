<template>
<div>
    <v-img max-height="400px" v-if="featured_image()" :src="post.better_featured_image.source_url" :alt="post.better_featured_image.alt_txt"></v-img>
    <div id="post-view">
        <h1>{{ post.title.rendered }}</h1>
        <div class="catbar">
          <nuxt-link :class="'class-' + category.term_id" :to="categoryUrl(category.slug)" v-for="category in post.pure_taxonomies.categories" :key="category.index">{{ category.category_nicename }}</nuxt-link>
        </div>
        <div class="tags">
          <nuxt-link v-for="tag in post.pure_taxonomies.tags" :key="tag.index" :to="tagUrl(tag.slug)">{{ tag.name }}</nuxt-link>
        </div>
        <div id="post-view" v-html="post.content.rendered"></div>
    </div>
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

<style lang="scss">
#post-view{
  max-width: 600px;
  margin: 0 auto;
  p{
    font-size: 1.5rem;
  }
  .tags{
    padding-left: 0;
    a{
      background-color: rgb(33, 33, 33);
      &:hover{
        background-color: #000;
      }
    }
  }
}
</style>
