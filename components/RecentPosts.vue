<template>
  <div>
    <h3>Najnowsze posty</h3>
    <h4>totalPages: {{ totalPages }}</h4>
    <h4>totalPosts: {{ totalPosts }}</h4>
    <ul>
      <li v-for="item in posts" :key="item.id">
        <nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['posts', 'totalPosts', 'totalPages'],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  }
}
</script>

<style>

</style>
