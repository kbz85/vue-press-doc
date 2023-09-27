<script setup lang="ts">
const props = defineProps({
    file: {
        type: String,
        required: true,
    },
    demo: {
        type: Object,
        required: true,
    },
})

</script>

<template>
    <div class="example-showcase">
        <ClientOnly>
            <component :is="demo" v-if="demo" v-bind="$attrs" />
        </ClientOnly>
    </div>
</template>

<style lang="scss" scoped>
.example-showcase {
    padding: 1.5rem;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--border-color);
}
</style>
