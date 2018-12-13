<template>
  <div>
    <main-banner v-if="bannerPosts" :posts="bannerPosts"></main-banner>
    <posts-pagination v-if="totalPages > 1" :totalPosts="totalPosts" :totalPages="totalPages" :currentPage="currentPage"></posts-pagination>
    <post-list v-if="posts" :posts="posts" :totalPosts="totalPosts" :currentPage="currentPage"></post-list>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  import api from '../api/index.js';
  import config from '../api/config/index.js'
  import postList from '../components/PostList';
  import recentPosts from '../components/RecentPosts';
  import categories from '../components/Categories';
  import postsPagination from '../components/PostsPagination';
  import mainBanner from '../components/MainBanner.vue';
  import axios from 'axios';

  export default {
    components: { postList, categories, recentPosts, postsPagination, mainBanner },
  
    async asyncData({ params }) {
      let response  = await api.getPosts()
      let bannerPosts = [];
      response.data.forEach(element => {
        element.promowany ? bannerPosts.push(element) : '';
      });
      return {
        bannerPosts: bannerPosts,
        posts: response.data,
        totalPages: response.totalPages,
        totalPosts: response.total,
        currentPage: 1
      }
    },
    mounted() {
      if (this.categories.length === 0) {
        this.$store.dispatch('getCategories')
      }
      if (this.posts.length === 0) {
        this.$store.dispatch('getPosts')
      }
    },
    computed: {
      ...mapGetters([
        'categories'
      ])
    },
    methods: {
      paginate(page){
        api.getPosts(`page=${page}`).then( (response) => {
          this.posts = response.data;
          this.currentPage = page;
        })
      }
      
    }
  }
</script>

<style>
</style>
