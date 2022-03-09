<template>
    <div class="layer-background" :style="'background-image:linear-gradient(to top, ' + color + ', rgb(0 0 0 / 1%)), url(' + backgroundChoice + ');'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LayerChoice',
    props: {
        backgroundChoice: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#202424'
        }
    }
}
</script>

<style scoped>
.layer-background{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>