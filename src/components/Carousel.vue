<template>
  <div class="flex">
    <div class="wrapper w-full px-6">
      <Flicking
        :options="{
          renderOnlyVisible: false,
          panelsPerView: panelsPerView,
          resizeOnContentsReady: true,
          circular: true,
        }"
      >
        <slot></slot>
        <!-- <div
          v-for="item in list"
          class="px-2"
          :key="item.name"
          @click="clickBox"
        >
          <img :src="item.image" :id="'box-' + item.id" />
        </div> -->
      </Flicking>
    </div>
  </div>
</template>
<script>
// import cengkeh from "../assets/food2.jpg";
export default {
  name: "Carousel",
  props: {
    panelsPerView: {
      type: Number,
      default: 2
    }
  },
  // data() {
  //   return {
  //     list: [
  //       { title: "Borobudur", image: cengkeh, id: "asdfasdf" },
  //       { title: "Borobudur", image: cengkeh, id: "zxcvzxcv" },
  //       { title: "Borobudur", image: cengkeh, id: "sdfgsdfg" },
  //     ],
  //   };
  // },
  methods: {
    clickBox(e) {
      this.$emit("clickBox", e.target);
    },
  },
};
</script>