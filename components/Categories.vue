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
import { mapGetters } from 'vuex';

export default {
  methods: {
    slugToUrl(slug) {
      return `/category/${slug}`
    }
  },
  mounted() {
      if (this.categories.length === 0) {
        this.$store.dispatch('getCategories')
      }
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
}
</script>

<style>


</style>
