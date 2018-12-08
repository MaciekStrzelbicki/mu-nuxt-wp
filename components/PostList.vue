<template>
  <div>
    <h1>PostList</h1>
    <div v-if="!item.promowany" v-for="item in postsPaginated" :key="item.id">
      <img width="100px" :src="item.featured_media" alt="">
      <h3><nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link></h3>
      <a :href="'/' + item.category_slug">{{ item.category_nicename }}</a>
      <p>item.slug {{ item.slug }} </p>
      <div v-html="item.excerpt"></div>
      <hr>
    </div>
    <a v-if="!endPosts" href="#" @click.prevent="addToPostsPaginated()">Następne posty</a>
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
  .screen-reader-text{
    display: none;
  }
</style>
