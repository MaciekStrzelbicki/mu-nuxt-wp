<template>
  <v-app dark>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
      <categories/>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <no-ssr>
        <nuxt/>
      </no-ssr>
      <v-footer dark height="auto">
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-actions class="grey darken-3 justify-center">&copy;2018 —
            <strong>Vuetify</strong>
          </v-card-actions>
        </v-card>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import categories from "@/components/Categories";
export default {
  components: { categories },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" }
      ],
      icons: [],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
<style lang="scss">
.catbar {
  display: inline-block;
  margin-bottom: 5px;
  a {
    padding: 2px 10px;
    // background-color: red;
    color: #fff;
    display: inline-block;
    text-decoration: none;
    margin: 0 10px 0 0;
    font-size: 0.9rem;
    font-weight: bold;
  }
}
.class-7 {
  background-color: #f34235;
}
.class-2 {
  background-color: #3e50b4;
}
.class-1 {
  background-color: #4bae4f;
}
.class-11 {
  background-color: #fe9700;
}
.class-21 {
  background-color: #2095f2;
}
</style>
