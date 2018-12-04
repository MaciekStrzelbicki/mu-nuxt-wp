<template>
  <div>
      totalPosts: {{ totalPosts }}
      <a href="#" @click.prevent="paginate('1')" data-page="1">1</a>
      <a href="#" @click.prevent="paginate('2')" data-page="2">2</a>
      <a href="#" @click.prevent="paginate('3')" data-page="3">3</a>
      <categories :categories="categories"></categories>
      <post-list v-if="posts" :posts="posts"></post-list>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import api from '../api/index.js';
import postList from '../components/PostList';
import recentPosts from '../components/RecentPosts';
import categories from '../components/Categories';
import actions from '../store/actions.js'
import axios from 'axios';
import config from '../api/config/index.js'
export default {
  components: { postList, categories, recentPosts },
  async asyncData({ params }) {
    let { data } = await api.getPosts('page=1')
    return {
      posts: data,
      totalPosts: params.totalPosts
    }
  },
  mounted() {
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
    // this.paginate(2)
  },
  computed: {
    ...mapGetters([
      'categories'
      ])
  },
  methods: {
    paginate: (e) => {
        return axios.get(config.baseUrl + `posts?page=2`)
        .then((res) => {
          return { posts: res.data }
        })
        .catch((e) => {
          error({ statusCode: 404, message: 'Post not found' })
        })
      // console.log('this: ', this);      
      // api.getPosts('page=' + e).then(response => {
      //   const data = [...response.data];
      //   if (response.status === 200 && response.data.length > 0) {
      //     resolve(data);
      //   } 
      // })
    }
  }
}
</script>

<style>

</style>
