<template>
    <div>
        <ul>
            <li v-if="currentPage > 1"><a @click.prevent="changePage(-1)" href="#">&lt;</a></li>
            <li v-for="(value, index) in totalPagesNum" :key="index">
                <a href="/" @click.prevent="changePage(index)" >{{ index }}</a>
            </li>
            <li v-if="currentPage < totalPagesNum"><a @click.prevent="changePage(+1)" href="#">&gt;</a></li>
        </ul>
    </div>
</template>
<script>
    export default{
        data: function() {
            return {
                currentPage: 1
            }
        },
        props: ['totalPages', 'totalPosts'],
        computed:{
            totalPagesNum(){
                return this.totalPages * 1
            } 
        },
        methods:{
            changePage(incr){
                this.$parent.paginate(this.currentPage + incr);
                this.currentPage = this.currentPage + incr;
            }
        }
    }
</script>
<style lang="scss">
    
</style>