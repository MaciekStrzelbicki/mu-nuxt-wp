<template>
    <div id="mainbanner">
      <v-container fluid>
        <v-layout  row wrap>
          <v-flex d-flex xs12 sm6 md8>
            <v-card id="prom1" tag="section" dark v-if="item.promowany == '1'" v-for="item in posts" :key="item.id">
              <v-layout align-end fill-height :style='{ backgroundImage: `url(${item.featured_media})` }'>
                <div class="overlay">
                  <div class="catbar">
                    <a :class="'class-' + category.term_id" :href="'/category/' + category.slug" v-for="category in item.categories" :key="category.index">{{ category.category_nicename }}</a>
                  </div>
                  <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
                  <div class="excerpt" v-html="item.content.substring(0, 300) + '...'"></div>
                  <div class="post-footer">
                    <p><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>
                    <p><v-icon size="14">face</v-icon>&nbsp;&nbsp;<nuxt-link :to="'/author/' + item.author.slug">{{ item.author.name }}</nuxt-link></p> 
                    <p><nuxt-link :to="slugToUrl(item.slug)">Czytaj dalej <v-icon size="14">navigate_next</v-icon></nuxt-link></p>
                  </div>
                </div>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md4>
            <v-layout column wrap>
              <!-- <v-flex d-flex> -->
                <!-- <v-layout row wrap> -->
                  <v-flex >
                    <v-card align-end id="prom2" tag="section" class="prom" v-if="item.promowany == '2'" v-for="item in posts" :key="item.id">
                      <v-layout align-end fill-height :style='{ backgroundImage: `url(${item.featured_media})` }'>
                        <div class="overlay">
                          <div class="catbar">
                            <a :class="'class-' + category.term_id" :href="category.slug" v-for="category in item.categories" :key="category.id">{{ category.category_nicename }}</a>
                          </div>            
                          <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
                          <!-- <div class="excerpt" v-html="item.content.substring(0, 100) + '...'"></div> -->
                          <div class="post-footer">
                            <p><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>
                            <p><v-icon size="14">face</v-icon>&nbsp;&nbsp;<nuxt-link :to="'/author/' + item.author.slug">{{ item.author.name }}</nuxt-link></p> 
                            <p><nuxt-link :to="slugToUrl(item.slug)">Czytaj dalej <v-icon size="14">navigate_next</v-icon></nuxt-link></p>
                          </div>
                        </div>
                      </v-layout>
                    </v-card>
                  </v-flex>
                  <v-flex >
                    <v-card align-end id="prom3" tag="section"  class="prom" v-if="item.promowany == '3'" v-for="item in posts" :key="item.id">
                      <v-layout align-end fill-height :style='{ backgroundImage: `url(${item.featured_media})` }'>
                        <div class="overlay">
                          <div class="catbar">
                            <a :class="'class-' + category.term_id" :href="category.slug" v-for="category in item.categories" :key="category.id">{{ category.category_nicename }}</a>
                          </div>            
                          <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
                          <!-- <div class="excerpt" v-html="item.content.substring(0, 100) + '...'"></div> -->
                          <div class="post-footer">
                            <p><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>
                            <p><v-icon size="14">face</v-icon>&nbsp;&nbsp;<nuxt-link :to="'/author/' + item.author.slug">{{ item.author.name }}</nuxt-link></p> 
                            <p><nuxt-link :to="slugToUrl(item.slug)">Czytaj dalej <v-icon size="14">navigate_next</v-icon></nuxt-link></p>
                          </div>                          
                        </div>
                      </v-layout>
                    </v-card>
                  </v-flex>
                <!-- </v-layout> -->
              <!-- </v-flex> -->
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
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
  computed: {
    // excerpt: (string, value) => {
    //   return string.split(0, value) + '…';
    // }
  },
  mounted(){
    // console.log('posts: ', this.posts)
  }
}
</script>
<style lang="scss" scoped>
    #mainbanner{
      h1{
        line-height: 1.2;
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
      #prom1{
        width: 60%;
        height: 500px;
        background-size: cover;
        background-position: center center;
        margin-right: 6px;
      }
      #prom2{
        margin-bottom: 2px;
        background-size: cover;
        background-position: center center;
        height: 245px;
      }
      #prom3{
        margin-top: 2px;
        background-size: cover;
        background-position: center center;
        height: 250px;
      }
      .overlay{
        // height: 30%;
        background-color: rgba(0,0,0,0.8);
        width: 100%;
        padding: 10px;
        h1{
          a{
            color: #fff;
            text-decoration: none;
          }
        }
        .excerpt{
          width: 100%;
        }
        .post-footer{
          display: flex;
          justify-content: space-between;
          p{
            margin: 0;
            a{
              color: #fff;
              text-decoration: none;
            }
            .v-icon {
                line-height: 1.1;
            }
          }

        }
      }
      .v-card{
        .layout{
          background-size: cover;
          background-position: center;
        }
      }
    }
</style>