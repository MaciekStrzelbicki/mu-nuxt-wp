<template>
    <div id="mainbanner">
      <v-container fluid>
        <v-layout  row wrap>
          <v-flex d-flex xs12 sm6 md8>
            <v-card id="prom1" tag="section" dark v-if="item.promowany == '1'" v-for="item in posts" :key="item.id">
              <p class="date"><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>
              <v-layout align-end fill-height :style='{ backgroundImage: `url(${item.featured_media})` }'>
                <div class="overlay">
                  <div class="catbar">
                    <nuxt-link :class="'class-' + category.term_id" :to="categoryUrl(category.slug)" v-for="category in item.categories" :key="category.index">{{ category.category_nicename }}</nuxt-link>
                  </div>
                  <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
                  <div class="excerpt" v-html="item.content.substring(0, 300) + '...'"></div>
                  <div class="tags">
                    <nuxt-link v-for="tag in item.tags" :key="tag.index" :to="tagUrl(tag.slug)">{{ tag.name }}</nuxt-link> 
                  </div>
                  <div class="post-footer">
                    <v-btn flat :to="authorUrl(item.author.slug)" color="white"><v-icon size="14">face</v-icon>&nbsp;{{ item.author.name }}</v-btn>
                    <v-btn flat :to="slugToUrl(item.slug)" color="white">Czytaj dalej <v-icon size="16">navigate_next</v-icon></v-btn>
                  </div>     
                </div>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md4>
            <v-layout column wrap>
              <v-flex >
                <v-card align-end id="prom2" tag="section" class="prom" v-if="item.promowany == '2'" v-for="item in posts" :key="item.id">
                  <p class="date"><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>
                  <v-layout align-end fill-height :style='{ backgroundImage: `url(${item.featured_media})` }'>
                    <div class="overlay">
                      <div class="catbar">
                        <nuxt-link :class="'class-' + category.term_id" :to="category.slug" v-for="category in item.categories" :key="category.id">{{ category.category_nicename }}</nuxt-link>
                      </div>            
                      <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
                      <div class="tags">
                        <nuxt-link v-for="tag in item.tags" :key="tag.index" :to="tagUrl(tag.slug)">{{ tag.name }}</nuxt-link>
                      </div>
                      <div class="post-footer">
                        <v-btn flat :to="authorUrl(item.author.slug)" color="white"><v-icon size="14">face</v-icon>&nbsp;{{ item.author.name }}</v-btn>
                        <v-btn flat :to="slugToUrl(item.slug)" color="white">Czytaj dalej <v-icon size="16">navigate_next</v-icon></v-btn>
                      </div>                          
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex >
                <v-card align-end id="prom3" tag="section"  class="prom" v-if="item.promowany == '3'" v-for="item in posts" :key="item.id">
                  <p class="date"><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>                      
                  <v-layout align-end fill-height :style='{ backgroundImage: `url(${item.featured_media})` }'>
                    <div class="overlay">
                      <div class="catbar">
                        <nuxt-link :class="'class-' + category.term_id" :to="categoryUrl(category.slug)" v-for="category in item.categories" :key="category.id">{{ category.category_nicename }}</nuxt-link>
                      </div>            
                      <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
                      <div class="tags">
                        <nuxt-link v-for="tag in item.tags" :key="tag.index" :to="tagUrl(tag.slug)">{{ tag.name }}</nuxt-link>
                      </div>
                      <div class="post-footer">
                        <v-btn flat :to="authorUrl(item.author.slug)" color="white"><v-icon size="14">face</v-icon>&nbsp;{{ item.author.name }}</v-btn>
                        <v-btn flat :to="slugToUrl(item.slug)" color="white">Czytaj dalej <v-icon size="16">navigate_next</v-icon></v-btn>
                      </div>                          
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
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

  },
  computed: {

  },
  mounted(){
  }
}
</script>
<style lang="scss">
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
      p{
        font-size: 1rem;
        line-height: 1.2;
      }      
    }
    .v-btn{
      margin: 0;
    }
    .post-footer{
      display: flex;
      justify-content: space-between;
      margin: -10px;
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
    position: relative;
      .layout{
        background-size: cover;
        background-position: center;
      }
      p.date{
        position: absolute;
        z-index: 1;
        right: 0;
        top: 0;
        background-color: $overlay;
        padding: 5px 10px;
        font-size: 0.8rem;
      }
  }
  .catbar{
    padding-left: 0;
    font-size: .8rem;
    a{
      &:hover{
        opacity: .8;
      }
    }    
  }
  .tags{
    padding-left: 0;
    margin-bottom: 15px;
    height: auto;
  }
}
</style>