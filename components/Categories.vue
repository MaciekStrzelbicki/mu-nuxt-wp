<template>
  <div id="categories">
    <nuxt-link v-if="item.count > 0" :class="'class-' + item.id" :to="slugToUrl(item.slug)" v-for="item in categories" :key="item.id">
        {{ item.name }}
      <v-chip small>
        {{ item.count }}
      </v-chip>
    </nuxt-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    slugToUrl(slug) {
      return `/kategoria/${slug}`
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

<style lang="scss"> 
#categories{
  padding-top: 20px;
  a{
    display: block;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    font-weight: 900;
    padding: 10px 5px;
    border-bottom: 1px solid #303030;
    &:hover{
      background-color: #303030;
    }
  }
}

</style>
