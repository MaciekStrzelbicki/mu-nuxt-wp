<template>
  <div>
    <div v-for="item in posts" :key="item.id">
        <br>
        <nuxt-link :to="item.slug">{{ item.title }}</nuxt-link>
        <div v-html="item.content"></div>
		
		<img :src="item.thumbUrl" alt="">
		{{ item.date }}
        <nuxt-link :to="item.slug">Czytaj dalej</nuxt-link>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>

<style>
</style>
