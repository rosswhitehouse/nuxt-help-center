<template>
    <div>
        <h1>{{ currentSection.name }}</h1>
        <p>{{ currentSection.description }}</p>
        <ul>
            <li v-for="article in articlesInThisSection" :key="article.id">
                <nuxt-link :to="`/articles/${article.id}`">{{ article.name }}</nuxt-link>
            </li>
        </ul>
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
        ...mapState(['articles', 'sections']),
        currentSection() {
            let result;
            for (let i = 0; i < this.sections.length; i++) {
                if (this.sections[i].id.toString() === this.id.split('-')[0]) {
                    result = this.sections[i];
                    break;
                }
            }
            return result;
        },
        articlesInThisSection() {
            return this.articles.filter(article => article.section_id === this.currentSection.id)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>