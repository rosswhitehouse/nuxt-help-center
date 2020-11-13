<template>
    <div>
        <div v-if="cohort === 'A'">A</div>
        <div v-if="cohort === 'B'">B</div>
        <h1>{{ currentArticle.name }}</h1>
        <div v-html="currentArticle.body"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        cohort() {
            return this.$store.state.cohort;
        },
        currentArticle() {
            let result;
            for (let i = 0; i < this.$store.state.articles.length; i++) {
                if (this.$store.state.articles[i].id.toString() === this.id.split('-')[0]) {
                    result = this.$store.state.articles[i];
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