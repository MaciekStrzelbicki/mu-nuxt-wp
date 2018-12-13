<template>
  <div>
    <v-container fluid="true" grid-list-md text-xs-center>
    <v-layout row wrap  >
      <v-flex xs12 sm4 v-if="item.promowany == 'false'" v-for="item in postsPaginated" :key="item.id">
        <v-card color="rgba(0, 0, 0, 1)" >
          <v-img
            :src="item.featured_media"
            aspect-ratio="1.5"
          ></v-img>
          <v-card-title primary-title>
              <h2><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h2>
          </v-card-title>
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
    <a v-if="!endPosts" href="#" @click.prevent="addToPostsPaginated()">Następne posty</a>
    </v-container>
  </div>

</template>

<script>

export default {
  data: () => ({
      postsPaginated: [],
      allPosts: [],
      postsGroups: [],
      displayPage: 1,
      endPosts: false
  }),
  props: ['posts', 'title', 'totalPosts', 'currentPage'],
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
    for (i = 0; i < posts.length; i += 10) {
        groups.push(posts.slice(i, i + 10));
    }
    this.postsGroups = groups
    this.postsPaginated = groups[0]
  },
  // computed: {
  //   postsPaginated: () => {
  //     // let array = [];
  //     // console.log('data:', data.posts)

  //     console.log(posts)

  //     // var i,j,temparray,chunk = 10;
  //     // for (i=0,j=data.length; i<j; i+=chunk) {
  //     //     temparray = array.slice(i,i+chunk);
  //     //     // do whatever
  //     // }
  //   return this.posts
  //   }
  // },
  mounted(){
    // console.log('posts: ', this.posts)
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
      padding: 0 17px;
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
          line-height: 0.8;
      }
    }

  }
  
</style>
