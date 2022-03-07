<template>
  <div class="flex">
    <div class="wrapper w-full px-6">
      <Flicking :options="{ renderOnlyVisible: false, panelsPerView: 2, resizeOnContentsReady: true, circular: true}">
        <div v-for="item in list" class="px-2" :key="item.name">
          <img :src="item.image" />
        </div>
      </Flicking>
    </div>
  </div>
</template>
<script>
import cengkeh from '../assets/food2.jpg'
export default {
  name: 'Carousel',
  data() {
    return {
      list: [
        {title: 'Borobudur', image: cengkeh},
        {title: 'Borobudur', image: cengkeh},
        {title: 'Borobudur', image: cengkeh},
      ]
    }
  }
}
</script>