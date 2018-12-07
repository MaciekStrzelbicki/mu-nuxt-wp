<template>
    <div>
    <div v-for="item in posts" :key="item.id">
        <img width="100px" :src="item.featured_media" alt="">
        <h3><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h3>
        <a :href="'/' + item.category_slug">{{ item.category_nicename }}</a>
        <p>item.slug {{ item.slug }} </p>
        <div v-html="item.excerpt"></div>
        <hr>
    </div>
    </div>
</template>
<script>
export default {
  props: ['posts'],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  },
  mounted(){
    // console.log('posts: ', this.posts)
  }
}
</script>
<style lang="scss">
    
</style>