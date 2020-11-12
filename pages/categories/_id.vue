<template>
    <div>
        <h1>{{ currentCategory.name }}</h1>
        <p>{{ currentCategory.description }}</p>
        <ul>
            <li v-for="section in sectionsInThisCategory" :key="section.id">
                <nuxt-link :to="`/sections/${section.id}`">{{ section.name }}</nuxt-link>
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
        ...mapState(['categories', 'sections']),
        currentCategory() {
            let result;
            for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].id.toString() === this.id.split('-')[0]) {
                    result = this.categories[i];
                    break;
                }
            }
            return result;
        },
        sectionsInThisCategory() {
            return this.sections.filter(section => section.category_id === this.currentCategory.id)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>