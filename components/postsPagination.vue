<template>
    <div>
        {{ currentPage }}
        <ul>
            <li v-if="currentPage > 1">
                <a @click.prevent="changePage(currentPage - 1)" href="#">&lt;</a>
            </li>
            <li v-for="(value, index) in totalPagesNum" :key="index">
                <a href="/" :class="[currentPage == index + 1 ? 'active' : '']" @click.prevent="changePage(index + 1)" >{{ index + 1 }}</a>
            </li>
            <li v-if="currentPage < totalPagesNum">
                <a @click.prevent="changePage(currentPage + 1)" href="#">&gt;</a>
            </li>
        </ul>
    </div>
</template>


<script>
    export default{
        props: ['totalPages', 'totalPosts', 'currentPage'],
        computed:{
            totalPagesNum(){
                return Number(this.totalPages)
            } 
        },
        methods:{
            changePage(incr){
                if(incr == this.currentPage){
                    return false
                } else {
                    this.$parent.paginate(incr);
                }
            }
        }
    }
</script>


<style lang="scss">
    
</style>