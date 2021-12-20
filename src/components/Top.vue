<template>
    <div class="top-background" :style="'background-image:linear-gradient(to top, ' + color + ', rgb(0 0 0 / 1%)), url(' + background + ');'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Top',
    props: {
        background: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'black'
        }
    }
}
</script>

<style scoped>
.top-background{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>