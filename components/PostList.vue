<template>
  <div id="post-list">
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row fill-height wrap>
        <twitter-feed v-if="tweets" :tweets="tweets"></twitter-feed>
          <v-flex xs12 sm4 v-if="item.promowany == 'false' && category == 'all' || item.categories[0].cat_name == category" v-for="item in postsPaginated" :key="item.id">
            <!-- <h2>{{category}} == {{item.categories[0].cat_name}} ||</h2> -->
            <v-card color="#212121" >
              <p class="date"><v-icon size="14">calendar_today</v-icon>&nbsp;&nbsp;{{ item.date }} </p>
              <v-img
                :src="item.featured_media"
                aspect-ratio="2.5"
              ></v-img>
              <div class="catbar">
                <a :class="'class-' + item.category_id" :href="'/category/' + category.slug" v-for="category in item.categories" :key="category.index">{{ category.category_nicename }}</a>
              </div>
              <!-- <h2><nuxt-link :to="slugToUrl(item.slug)" v-html="titleEx(item.title)"></nuxt-link></h2> -->
              <h2 v-html="titleEx(item.title)"></h2>
              <div class="content" v-html="item.content.substring(0,170) + '...'"></div>
              <div class="tags">
                <a v-for="tag in item.tags" :key="tag.index" :href="'tagi/' + tag.slug">{{ tag.name }}</a>
              </div>
                <div class="post-footer">
                  <v-btn flat :to="'/author/' + item.author.slug" color="white"><v-icon size="14">face</v-icon>&nbsp;{{ item.author.name }}</v-btn>
                  <v-btn flat :to="slugToUrl(item.slug)" color="white">Czytaj dalej <v-icon size="16">navigate_next</v-icon></v-btn>
                </div>
            </v-card>
          </v-flex>
        </v-layout>
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
  props: ['posts', 'title', 'totalPosts', 'currentPage', 'tweets', 'category'],
  components: {twitterFeed},
  computed:{
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
      // height: 2em;
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
