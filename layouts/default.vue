<template>
  <v-app dark>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer"  app>
      <div id="nav-wrap">
        <a href="/" id="logo"><img src="~/assets/mu-logo.png"></a>
        <categories/>  
      </div>  
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <a href="/">Miasto Ursynów.<span class="grey-txt"> #nieformalnie #lokalnie #sąsiedzko</span></a>
    </v-toolbar>
    <v-content>
      <no-ssr>
        <nuxt/>
      </no-ssr>
      <v-footer dark height="auto">
        <v-card class="flex" flat tile>
          <v-card-title class="">
            <strong class="subheading">&copy;MiastoUrsynów</strong>
            <v-spacer></v-spacer>
            <!-- <v-btn v-for="social in socials" :key="social.index" class="mx-3" icon>
              <a target="_blank" :href="social.link">
                <v-icon size="24px" color="#fff">{{ social.icon }}</v-icon>
              </a>
            </v-btn> -->
          </v-card-title>
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
      socials: [ 
        { icon: 'fab fa-facebook', link: 'http://facebook.com'},
        { icon: 'fab fa-twitter', link: 'http://twitter.com'}
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Miasto Ursynów. #nieformalnie #lokalnie #sąsiedzko"
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
    color: #fff;
    display: inline-block;
    text-decoration: none;
    margin: 0 10px 0 0;
    font-size: 0.9rem;
    font-weight: bold;
  }
}
.catbar{
  .class-7 {
    background-color: $color-1;
  }
  .class-2 {
    background-color: $color-2;
  }
  .class-1 {
    background-color: $color-3;
  }
  .class-11 {
    background-color: $color-4;
  }
  .class-21 {
    background-color: $color-5;
  }
}
#categories{
  .class-7 {
    color: $color-1;
  }
  .class-2 {
    color: $color-2;
  }
  .class-1 {
    color: $color-3;
  }
  .class-11 {
    color: $color-4;
  }
  .class-21 {
    color: $color-5;
  }
}
#logo{
    img{
      display: inline-block;
      margin: 0 auto;
    }
  display: flex;
  align-items: center;
}
#nav-wrap{
  padding: 20px;
}
.v-toolbar{
  a{
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    margin-top: 3px;
    display: inline-block;
  }
}
.tags{
  text-align: left;
  padding-left: 15px;
  height: 1.5em;
  margin-bottom: 5px;
  a{
    font-size: .8rem;
    display: inline-block;
    background-color: #303030;
    color: #ccc;
    padding: 3px 7px;
    text-decoration: none;
    margin-right: 5px;
    &:hover{
      background-color: #000;
    }
  }
}
.grey-txt{
  color: #424242;
}
</style>
