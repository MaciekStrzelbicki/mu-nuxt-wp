<template>
<div>
    <v-img max-height="400px" v-if="featured_image()" :src="post.better_featured_image.source_url" :alt="post.better_featured_image.alt_txt"></v-img>
    <div id="post-view">
        <h1>{{ post.title.rendered }}</h1>
        <div class="catbar">
          <a :class="'class-' + category.term_id" :href="'/category/' + category.slug" v-for="category in post.pure_taxonomies.categories" :key="category.index">{{ category.category_nicename }}</a>
        </div>
        <div class="tags">
          <a v-for="tag in post.pure_taxonomies.tags" :key="tag.index" :href="'tagi/' + tag.slug">{{ tag.name }}</a>
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
