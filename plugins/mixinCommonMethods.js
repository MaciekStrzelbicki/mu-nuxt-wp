import Vue from 'vue'

Vue.mixin({
  methods: {
    slugToUrl(slug) {
        return `/${slug}`
      }, 
      categoryUrl(slug) {
        return `/kategoria/${slug}`
      },
      tagUrl(slug) {
        return `/tag/${slug}`
      },
      authorUrl(slug) {
        return `/autor/${slug}`
      }
  }
})