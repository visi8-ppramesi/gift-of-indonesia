<template>
    <button class="px-4 bg-transparent hover:bg-white font-semibold hover:text-black py-1 border border-white hover:border-transparent rounded">
        {{title}}
    </button>
</template>

<script>
export default {
    name: 'Tombol',
    props: {
        title: String
    }
}
</script>

<style>

</style>