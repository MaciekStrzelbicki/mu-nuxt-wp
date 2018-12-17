<template>
  <div>
      <div v-for="tweet in tweets" :key="tweet.id_str">
          
          <p v-html="tweet.tweet_text_html"></p>
      </div>
      
  </div>    
</template>
<script>
    export default{
        props: ['tweets'],
    }
</script>

<style>


</style>
