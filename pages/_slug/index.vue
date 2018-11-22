<template>
  <div>
      <h3>{{post.title.rendered}}</h3>
      <div v-html="post.content.rendered"></div>
      <img :src="imageFull" alt="">
  </div>
</template>

<script>
  import axios from 'axios'
  import config from "@/api/config";

  export default {
    components: { },
    async asyncData({ params }) {
      let { data } = await axios.get(config.baseUrl + `posts?_embed&slug=${params.slug}`)
      console.log('data: ', data)
      return {
        post: data[0],
        imageFull: data[0]._embedded['wp:featuredmedia'] ? data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : null
      }
    }
  }
</script>

<style>

</style>
