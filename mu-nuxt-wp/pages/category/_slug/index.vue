<template>
  <div>
      <categories :categories="categories"></categories>
      <h1></h1>{{slug}}</h1>
      <post-list v-if="posts" :posts="category_posts" ></post-list>
      <recent-posts v-if="posts" :posts="posts.data"></recent-posts>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import api from "../api/index";
import postList from '../components/PostList.vue';
import recentPosts from '../components/RecentPosts.vue';
import categories from '../components/Categories.vue';

export default {
  components: { postList, categories, recentPosts },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { posts } = await api.getCategory(params.slug)

    return {
      category_posts: posts,
      slug: params.slug
    }
  },
  mounted() {
    this.$store.dispatch('getCategory', this.$route.params.slug)
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
/* layout */

.page-title {
    text-align: center;
    font-size:36px;
    background-color:#1e5799;
    background-image: linear-gradient(to right, #34495F, #3A5674);
    text-align: center;
    padding-top: 80px;
    color:#fff;
    padding-bottom:10px;
}

.category-container {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  line-height: 150%;
  padding: 60px 30px 30px 30px;
  max-width: 1000px;
  margin: 0px auto;
}

.category-content {
  flex: 1;
}

.content img {
  max-width: 100%;
  height: auto;
  margin: 10px 0px;
}

.sidebar {
  width: 180px;
  padding: 0px 20px;
}

/* end layout */

.links {
  padding-top: 15px;
}

p {
  margin-bottom: 10px;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  
  .title {
    font-size: 22px;
    line-height:44px;
  }

  .sidebar {
    display: none;
  }

}
</style>
