<template>
    <button class="px-10 mt-7 bg-transparent hover:bg-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
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