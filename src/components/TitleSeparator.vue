<template>
    <div class="mt-4 py-8">
        <div class="mx-6">
            <hr class="w-full border-2 border-white md:border-4" />
        </div>
        <div class="flex justify-center items-center">
            <div style="background-color: #F9AC18;" class="text-center w-36 py-3 text-xs font-bold absolute rounded-full md:text-lg">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleSeparator',
}
</script>