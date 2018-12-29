<template>
    <v-flex xs12 sm8 id="twitter-feed" >
        <v-card style="background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33);">
            <v-container v-for="tweet in tweets" :key="tweet.id_str">
                <v-layout row>
                    <v-flex sm1>
                        <v-img :src="tweet.image"></v-img>
                    </v-flex>
                    <v-flex sm9>
                        {{ tweet.screen_name }}<br>
                        <nuxt-link :to="'https://twitter.com/MiastoUrsynow'">@{{ tweet.name }}</nuxt-link>
                    </v-flex>
                    <v-flex sm2>
                        <v-layout align-center justify-center column fill-height>
                            <v-icon>fab fa-twitter</v-icon>
                            <small v-html="tweet.time.replace('ago', 'temu')"></small>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <div v-html="tweet.tweet_text_html"></div>
                </v-layout>
            </v-container>
        </v-card>
    </v-flex>
</template>
<script>
    export default{
        props: ['tweets'],
    }
</script>

<style lang="scss">
#twitter-feed{
    overflow-y: hidden;
    font-size: .9rem;
    color: #fff;
    text-align: left;
    a{
        color: #ccc;
    }
    .v-card{
        height: 330px;
    }
}

</style>
