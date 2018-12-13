<template>
  <v-app dark>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <categories></categories>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
      <v-footer app>
        <span>&copy; 2017</span>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import categories from '@/components/Categories';
  export default {
    data() {
      return {
        clipped: true,
        drawer: true,
        fixed: true,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }, components: {
      categories
    }
  }
</script>
