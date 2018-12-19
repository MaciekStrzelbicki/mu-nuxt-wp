<template>
    <v-flex xs12 sm4 id="twitter-feed">
        <v-card min-height="650px" color="rgba(0, 0, 0, 1)" >
            <a href="https://twitter.com/MiastoUrsynow">@MiastoUrsynow</a>
            <v-layout v-for="tweet in tweets" :key="tweet.id_str">
                <v-flex sm2>
                    <v-icon>fab fa-twitter</v-icon> 
                    <small>{{tweet.time}}</small>
                </v-flex>
                <v-flex sm10>
                    <p v-html="tweet.tweet_text_html"></p>
                </v-flex>
            </v-layout>
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
    max-height: 424px;
    overflow-y: scroll;
    p{
        color: #fff;
        text-align: left;
        a{
            color: #fff;
        }
    }
}

</style>
