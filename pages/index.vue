<template>
  <post-list v-if="posts" :posts="posts" title="Recent Posts"></post-list>
</template>

<script>

import api from '@/api/index';
import PostList from '@/components/PostList.vue'
export default {
  components:{
    PostList
  },
  async asyncData({ params }) {
    let { data } = await api.getPosts()
    return {
      posts: data
    }
  }
}
</script>

<style>

</style>
