<template>
    <div>
      <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
        <div class="text-xl font-bold md:text-4xl">{{ title }}</div>
        <ul class="list-disc mx-4 mt-5">
          <li class="my-3" v-for="item in ingredients" :key="item.name">
            <div class="flex">
              <div class="w-5/6">
                <div class="text-md font-bold md:text-2xl">
                  {{ item.name }}
                </div>
                <div class="text-xs md:text-lg">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: 'recipeCard',
    props: {
        title: String,
        ingredients: [
            String,
            Array
        ],
    },
}
</script>