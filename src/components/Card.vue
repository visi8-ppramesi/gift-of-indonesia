<template>
  <div>
    <div v-if="type === 'A' ">
      <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
        <div class="text-md md:text-2xl">{{ title }}</div>
        <div class="text-xs mt-2 md:text-lg">{{ description }}</div>
        <router-link to="/recipe">
           <tombol class="mt-2 text-xs md:text-lg md:mt-3" title="RECIPE" />
        </router-link>
      </div>
    </div>

    <div v-if="type === 'Order' ">
      <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
        <div class="text-xl md:text-4xl">{{ title }}</div>
        <ul class="list-disc mx-4 mt-5">
          <li class="my-3" v-for="item in ingredients" :key="item.name">
            <div class="flex">
              <div class="w-5/6">
                <div class="text-md font-bold md:text-2xl">
                  {{ item.name }}
                </div>
                <div class="text-xs md:text-lg">
                  {{ item.porsi }}
                </div>
              </div>

              <div class="flex items-center justify-end w-5/6 ml-16">
                <div class="text-md md:text-xl">
                  Rp. {{item.price}}
                </div>
              </div>
            </div>
          </li>
        </ul>
        
        <hr class="border-2 mx-2" />

        <div class="flex mx-2 mt-2">
          <div>
            <div class="text-md w-1/6 font-bold md:text-2xl">
              Total
            </div>
          </div>

          <div class="flex items-center justify-end w-5/6 ml-36">
            <div class="text-md md:text-xl">
              Rp. {{ total }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="type ==='Recipe'">
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
                  {{ item.porsi }}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Tombol from './Button.vue'
export default {
    name: 'Card',
    components: {
        Tombol,
    },
    props: {
        title: String,
        description: String,
        metode: Function,
        ingredients: [
            String,
            Array
        ],
        type: String,
        image: String,
        total: String,
    },
}
</script>