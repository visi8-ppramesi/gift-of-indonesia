<template>
  <div>
    <div v-if="type === 'A' ">
      <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
        <div class="text-4xl">{{ title }}</div>
        <div class="text-2xl mt-5">{{ description }}</div>
        <router-link to="/order">
            <tombol title="ORDER NOW" />
        </router-link>
      </div>
    </div>

    <div class="mx-10 my-5" v-if="type === 'B' ">
      <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
        <div class="flex">
          <img class="rounded-lg w-96" :src="image" />
          <div class="mx-5">
            <div class="font-bold text-4xl">{{ title }}</div>
            <br />
            <div class="text-2xl">{{ description }}</div>
            <router-link to="/order">
              <tombol title="ORDER NOW" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-if="type === 'Order' ">
      <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
        <div class="text-4xl">{{ title }}</div>
        <ul class="list-disc mx-10 mt-5">
          <li class="my-3" v-for="item in ingredients" :key="item.name">
            <div class="flex">
              <div>
                <div class="text-2xl font-bold">
                  {{ item.name }}
                </div>
                <div class="text-sm">
                  {{ item.porsi }}
                </div>
              </div>

              <div class="flex items-center justify-end w-5/6 ml-16">
                <div class="text-lg">
                  Rp. {{item.price}}
                </div>
              </div>
            </div>
          </li>
        </ul>
        
        <hr class="border-4 mx-4" />

        <div class="flex mx-10">
          <div>
            <div class="text-2xl w-1/6 font-bold mt-5">
              Total
            </div>
          </div>

          <div class="flex items-center justify-end w-5/6 ml-36">
            <div class="text-lg">
              Rp. {{ total }}
            </div>
          </div>
        </div>
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
        ingredients: [
            String,
            Array
        ],
        type: String,
        image: String,
        total: String,
    }
}
</script>