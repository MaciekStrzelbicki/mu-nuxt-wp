<template>
<div>
      <v-container fluid="true" grid-list-md text-xs-center>
      <v-layout row wrap>
        <twitter-feed :tweets="tweets"></twitter-feed>
        <v-flex xs12 sm4 v-if="item.promowany == 'false'" v-for="item in postsPaginated" :key="item.id">
          <v-card min-height="650px" color="#212121" >
            <v-img
              :src="item.featured_media"
              aspect-ratio="2.5"
            ></v-img>
            <div class="catbar">
              <a :class="'class-' + item.category_id" :href="'/category/' + category.slug" v-for="category in item.categories" :key="category.index">{{ category.category_nicename }}</a>
            </div>
            <h2><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h2>
            <div class="content" v-html="item.content.substring(0, 180) + '...'"></div>

            <v-card-actions>
              <div class="post-footer">
                <p><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>
                <p><v-icon size="14">face</v-icon>&nbsp;&nbsp;<nuxt-link :to="'/author/' + item.author.slug">{{ item.author.name }}</nuxt-link></p> 
                <p><nuxt-link :to="slugToUrl(item.slug)">Czytaj dalej <v-icon size="14">navigate_next</v-icon></nuxt-link></p>
              </div> 
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- <v-btn
      v-if="!endPosts"
      color="black"
      class="white--text"
      @click.prevent="addToPostsPaginated()"
      >
      Następne posty
      <v-icon right dark>expand_more</v-icon>
    </v-btn> -->

      <!-- <a v-if="!endPosts" href="#" @click.prevent="addToPostsPaginated()">Następne posty</a> -->
    </v-container>
    </div>
</template>

<script>
import twitterFeed from '@/components/TwitterFeed'
export default {
  data: () => ({
      postsPaginated: [],
      allPosts: [],
      postsGroups: [],
      displayPage: 1,
      endPosts: false
  }),
  props: ['posts', 'title', 'totalPosts', 'currentPage', 'tweets'],
  components: {twitterFeed},
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    },
    addToPostsPaginated(){
      if(this.displayPage * 10 < this.totalPosts){
        this.postsGroups[this.currentPage].forEach(element => {
          this.postsPaginated.push(element);
        });
        this.displayPage =  this.displayPage + 1;

        if(this.displayPage * 10 > this.totalPosts){
          this.endPosts = true;
        }
      } 
    }
  },
  created() {
    this.allPosts = this.posts;
    let posts = this.posts;
    let groups = [], i;
    for (i = 0; i < posts.length; i += 11) {
        groups.push(posts.slice(i, i + 11));
    }
    this.postsGroups = groups
    this.postsPaginated = groups[0]

  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
  h2{
      text-align: left;
      line-height: 1.2;
    a{
      color: #fff;
      text-decoration: none;
    }
  }
  .content{
      text-align: left;
      padding: 0 15px;
  }
  .post-footer{
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  .content{
    height: 84px;
  }
  h2{
    height: 50px;
    padding: 0 15px;
  }
  .v-image{
    margin-bottom: 5px;
  }
  .catbar{
    width: 100%;
    text-align: left;
    padding-left: 15px;
    padding-top: 5px;
  }
  
</style>
