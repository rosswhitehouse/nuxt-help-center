<template>
    <div>
        <h1>{{ currentArticle.name }}</h1>
        <div v-html="currentArticle.body"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        ...mapState(['articles']),
        currentArticle() {
            let result;
            for (let i = 0; i < this.articles.length; i++) {
                if (this.articles[i].id.toString() === this.id.split('-')[0]) {
                    result = this.articles[i];
                    break;
                }
            }
            return result;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>