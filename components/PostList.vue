<template>
  <div>
    <v-container fluid="true" grid-list-md text-xs-center>
    <v-layout row wrap  >
      <v-flex xs12 sm3 v-if="!item.promowany" v-for="item in postsPaginated" :key="item.id">
        <v-card >
          <v-img
            :src="item.featured_media"
            aspect-ratio="2"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h3>
              <div v-html="item.content.substring(0, 200) + '...'"></div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="white">Czytaj dalej</v-btn>
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

<style lang="scss">

</style>
