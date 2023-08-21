<template>
    <div class="demo-block">
        <div class="demo-content">
            <slot name="demo"></slot>
        </div>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.description">
                <slot name="description"></slot>
            </div>
            <div class="code-content">
                <slot name="source"></slot>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang="css" scoped>
.demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    margin-top: 15px;
    margin-bottom: 15px;
}

.demo-block:hover,
.demo-block:active {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

.demo-block .demo-content {
    padding: 24px;
}
</style>