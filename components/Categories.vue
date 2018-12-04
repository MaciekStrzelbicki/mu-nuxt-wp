<template>
  <div>
    <h1>Kategorie</h1>
    <nuxt-link to="/">home</nuxt-link>
    <div v-for="item in categories" :key="item.id">
    <nuxt-link :to="slugToUrl(item.slug)">{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['categories'],
  methods: {
    slugToUrl(slug) {
      return `/category/${slug}`
    }
  }
}
</script>

<style>


</style>
