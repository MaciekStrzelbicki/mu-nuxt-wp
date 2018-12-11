<template>
    <div id="mainbanner">
      <section v-if="item.promowany == '1'" v-for="item in posts" :key="item.id" :style="{ backgroundImage: 'url(' + item.featured_media + ')' }" id="prom1" class="prom" >
          <div class="overlay">
            <div id="catbar">
              <a :href="category.slug" v-for="category in item.categories" :key="category.id">{{ category.category_nicename }}</a>
            </div>
            <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
            <div class="excerpt" v-html="item.content.substring(0, 300) + '...'">
            </div>
            <nuxt-link :to="slugToUrl(item.slug)">Czytaj dalej</nuxt-link>
            <div class="post-footer">
              <v-icon>calendar_today</v-icon> {{ item.date }} 
              <v-icon>face</v-icon><nuxt-link :to="item.author.slug">{{ item.author.name }}</nuxt-link> 
            </div>
          </div>
          <!-- <p>item.slug {{ item.slug }} </p> -->
      </section>
      <div id="prom-rigt">
        <section :style="{ backgroundImage: 'url(' + item.featured_media + ')' }" id="prom2" class="prom" v-if="item.promowany == '2'" v-for="item in posts" :key="item.id">
          <div class="overlay">
            <div id="catbar">
              <a :href="category.slug" v-for="category in item.categories" :key="category.id">{{ category.category_nicename }}</a>
            </div>            
            <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
            <div class="excerpt" v-html="item.content.substring(0, 100) + '...'"></div>
          </div>
        </section>
        <section :style="{ backgroundImage: 'url(' + item.featured_media + ')' }" id="prom3" class="prom" v-if="item.promowany == '3'" v-for="item in posts" :key="item.id">
          <div class="overlay">
            <div id="catbar">
              <a :href="category.slug" v-for="category in item.categories" :key="category.id">{{ category.category_nicename }}</a>
            </div>            
            <h1><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h1>
            <div class="excerpt" v-html="item.content.substring(0, 100) + '...'"></div>
          </div>
        </section>
      </div>
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
<style lang="scss">
    #mainbanner{
      display: flex;
      .prom{
          display: flex;
          align-items: flex-end;
      }
      #prom1{
        width: 60%;
        height: 500px;
        background-size: cover;
        background-position: center center;
        margin-right: 20px;
      }
      #prom-rigt{
        display: flex;
        flex-flow: column;
        width: 40%;
        #prom2{
          margin-bottom: 10px;
          background-size: cover;
          background-position: center center;
          height: 240px;
          width: 100%;
        }
        #prom3{
          margin-top: 10px;
          background-size: cover;
          background-position: center center;
          height: 240px;
          width: 100%;

        }
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
          a{
            color: #fff;
            text-decoration: none;
          }
        }
      }
      #catbar{
        background-color: red;
        display: inline-block;
        padding: 2px 10px;
        a{
          color: #fff;
          display: inline-block;
          text-decoration: none;
          margin: 0 10px;
        }
      }
    }
</style>