<template>
  <div id="post-list">
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row fill-height wrap>
        <twitter-feed v-if="tweets" :tweets="tweets"></twitter-feed>
          
          <v-flex xs12 sm4 
            v-if="post.promowany == 'false' && category == 'all' && viewType != 'kategoria-slug' && viewType != 'tag-slug'
            || post.katShow && viewType == 'kategoria-slug' 
            || post.tagShow && viewType == 'tag-slug'" 
            v-for="post in posts" 
            :key="post.id">

            <v-card color="#212121" >
              <p class="date"><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ post.date }} </p>
              <v-img
                :src="post.featured_media"
                aspect-ratio="2.5"
              ></v-img>
              <div class="catbar">
                <nuxt-link :class="'class-' + category.cat_ID" :to="categoryUrl(category.slug)" v-for="category in post.categories" :key="category.index">{{ category.category_nicename }}</nuxt-link>
              </div>
              <h2 v-html="titleEx(post.title)"></h2>
              <div class="content" v-html="post.content.substring(0,170) + '...'"></div>
              <div class="tags">
                <nuxt-link v-for="tag in post.tags" :key="tag.index" :to="'/tag/' + tag.slug">{{ tag.name }}</nuxt-link>
              </div>
                <div class="post-footer">
                  <v-btn flat :to="authorUrl(post.author.slug)" color="white"><v-icon size="14">face</v-icon>&nbsp;{{ post.author.name }}</v-btn>
                  <v-btn flat :to="slugToUrl(post.slug)" color="white">Czytaj dalej <v-icon size="16">navigate_next</v-icon></v-btn>
                </div>
            </v-card>
          </v-flex>
        </v-layout>
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
      endPosts: false,
      view: ''
  }),
  props: ['posts', 'title', 'totalPosts', 'currentPage', 'tweets', 'category', 'tag'],
  components: {twitterFeed},
  computed:{
    viewType: function () {
      return this.$route.name
    } 
  },
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    },
    titleEx(title){
      if(title.length > 90){
        return title.substring(0, 60) + '...'
      } else {
        return title
      }
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
    },
    paginatePosts(){
      this.allPosts = this.posts;
      let posts = this.posts;
      let groups = [], i;
      for (i = 0; i < posts.length; i += 11) {
          groups.push(posts.slice(i, i + 11));
      }
      this.postsGroups = groups
      this.postsPaginated = groups[0]
    },
    checkCategory(){
      this.posts.forEach(post => {
        post.categories.forEach(cat => {
          cat.cat_name == this.category ? post.katShow = true : post.katShow
        })
      })
    },
    checkTag(){
      this.posts.forEach(post => {
        post.tags.forEach(tag => {
          tag.name == this.tag ? post.tagShow = true : post.tagShow
        })
      })
    }
  },
  created() {
    this.paginatePosts();
    this.checkCategory();
    this.checkTag();

  },
  mounted(){
  }
}
</script>

<style lang="scss">
#post-list{

  h2{
    text-align: left;
      line-height: 1.2;
      padding: 0 15px;  
      font-size: 1.2rem;  
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    a{
      color: #fff;
      text-decoration: none;
    }
  }
  .post-footer{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    a{
      color: #fff;
      text-decoration: none;
      margin: 0;
    }
    .v-icon {
      line-height: 1.1;
    }

  }
  .v-image{
    margin-bottom: 5px;
  }
  .catbar{
    width: 100%;
    text-align: left;
    padding-left: 15px;
    padding-top: 5px;
    a{
      &:hover{
        opacity: .8;
      }
    }
  }
  .v-card{
    position: relative;
    height: 100%;
      .date{
        position: absolute;
        z-index: 1;
        right: 0;
        top: 0;
        background-color: $overlay;
        padding: 5px 10px;
        font-size: 0.8rem;
      }
    .content{
      text-align: left;
      padding: 0 15px;
      height: 5em;
      overflow: hidden;
      p{
        text-overflow: ellipsis;
        font-size: .9rem;
        color: #ccc;
        line-height: 1.2;
        margin-bottom: 10px;
      }
    }      
  }
}
  
</style>
