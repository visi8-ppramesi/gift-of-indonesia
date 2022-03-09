<template>
  <div class="container h-full">
    <!-- center the content below -->
    <div class="flex flex-col">
      <top
        class="
          min-h-screen
          h-full
          w-screen
          items-center
          text-white
          flex flex-col
          justify-center
        "
        :background="welcomeBackground"
      >
        <div class="text-md md:text-xl" @click="openIdViewer">Welcome To</div>
        <div class="font-bold text-xl md:text-4xl" @click="openPlayStore">
          Experience of Indonesia
        </div>
        <hr class="underline mt-2 border-4" />
        <div
          class="
            text-center
            w-full
            px-4
            text-sm
            mt-3
            md:text-lg md:w-full md:px-6
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
      </top>
    </div>

    <ul id="cards">
      <li class="card" id="card_1">
        <div class="card__content">
          <layer-choice
            class="
              min-h-screen
              h-full
              w-screen
              items-center
              text-white
              justify-center
            "
            :backgroundChoice="sight"
            >

            <div class="flex flex h-screen justify-center items-center">
              <div class="flex flex-col items-center justify-center max-w-screen-xl">
                <div
                class="
                  text-center
                  w-full
                  px-4
                  text-sm
                  mt-3
                  md:text-lg md:w-full md:px-6
                "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </div>

                <div>
                  <router-link to="/sight">
                  <button
                    class="
                      text-white
                      border-white
                      bg-opacity-10
                      border-solid border-2
                      shadow-xl
                      text-black
                      bg-white
                      mt-7
                      px-20
                      py-4
                      2xl:text-3xl
                    "
                    >
                      Sight
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </layer-choice>
        </div>
      </li>
      <li class="card" id="card_2">
        <div class="card__content">
          <layer-choice
            class="
              min-h-screen
              h-full
              w-screen
              items-center
              text-white
              justify-center
            "
            :backgroundChoice="taste"
            >

            <div class="flex flex h-screen justify-center items-center">
              <div class="flex flex-col items-center justify-center max-w-screen-xl">
                <div
                class="
                  text-center
                  w-full
                  px-4
                  text-sm
                  mt-3
                  md:text-lg md:w-full md:px-6
                "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </div>

                <div>
                  <router-link to="/taste">
                  <button
                    class="
                      text-white
                      border-white
                      bg-opacity-10
                      border-solid border-2
                      shadow-xl
                      text-black
                      bg-white
                      mt-7
                      px-20
                      py-4
                      2xl:text-3xl
                    "
                    >
                      Taste
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </layer-choice>
        </div>
      </li>
      <li class="card" id="card_3">
        <div class="card__content w-screen h-screen">
          <layer-choice
            class="
              min-h-screen
              h-full
              w-screen
              items-center
              text-white
              justify-center
            "
            :backgroundChoice="sound"
            >

            <div class="flex flex h-screen justify-center items-center">
              <div class="flex flex-col items-center justify-center max-w-screen-xl">
                <div
                class="
                  text-center
                  w-full
                  px-4
                  text-sm
                  mt-3
                  md:text-lg md:w-full md:px-6
                "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </div>

                <div>
                  <router-link to="/sound">
                  <button
                    class="
                      text-white
                      border-white
                      bg-opacity-10
                      border-solid border-2
                      shadow-xl
                      text-black
                      bg-white
                      mt-7
                      px-20
                      py-4
                      2xl:text-3xl
                    "
                    >
                      Sound
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </layer-choice>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import LayerChoice from "../components/LayerChoice.vue";
// import Tombol from '../components/Button.vue'
import { where } from "firebase/firestore";
// import sight from '../assets/sight.jpg'
// import taste from '../assets/taste.png'
// import sound from '../assets/sound.jpg'
export default {
  name: "welcome",
  components: {
    Top,
    LayerChoice,
    // Tombol,
  },
  data() {
    return {
      welcomeBackground: require("../assets/Borobudur.jpg"),
      clickCount: 0,
      // choice: [
      //     {title: "Sight", button: "Sight", image: sight, link: "/sight"},
      //     {title: "Taste", button: "Taste", image: taste, link: "/taste"},
      //     {title: "Sound", button: "Sound", image: sound, link: "/sound"},
      // ]
      sight: require("../assets/sight.jpg"),
      taste: require("../assets/taste.png"),
      sound: require("../assets/sound.jpg"),
    };
  },
  created() {
    this.clickCount = 0;
    const self = this;
    //if open on connection is true + browser is oculus browser, redirect automatically to vr
    if (this.$isOculus || this.$isMobile) {
      this.$firestoreOrm.collections.connections.functions
        .fetchQuery([where("identifier", "==", this.$connection.identifier)])
        .then((data) => {
          if (data[0].open === 1) {
            self.$router.push({ path: "/scene/asdfasdfasdf" });
            //redirect to VR here
          }
        });
    }
  },
  methods: {
    openPlayStore() {},
    openIdViewer() {
      this.clickCount += 1;
      if (this.clickCount > 3) {
        this.$router.push({ path: "/id-viewer" });
      }
    },
  },
};
</script>

<style>
.underline {
  width: 200px;
}

#cards {
  padding-bottom: calc(
    var(--numcards) * var(--card-top-offset)
  ); /* Make place at bottom, as items will slide to that position*/
  margin-bottom: var(
    --card-margin
  ); /* Don't include the --card-margin in padding, as that will affect the scroll-timeline*/
}

#card_1 {
  --index: 1;
}

#card_2 {
  --index: 2;
}

#card_3 {
  --index: 3;
}

#card_4 {
  --index: 4;
}

.card {
  position: sticky;
  top: 0;
  padding-top: calc(var(--index) * var(--card-top-offset));
}

@supports (animation-timeline: works) {
  @scroll-timeline cards-element-scrolls-in-body {
    source: selector(body);
    scroll-offsets: selector(#cards) start 1, selector(#cards) start 0;
    start: selector(#cards) start 1;
    end: selector(#cards) start 0;
    time-range: 4s;
  }

  .card {
    --index0: calc(var(--index) - 1);
    --reverse-index: calc(var(--numcards) - var(--index0));
    --reverse-index0: calc(var(--reverse-index) - 1);
  }

  .card__content {
    transform-origin: 50% 0%;
    will-change: transform;

    --duration: calc(var(--reverse-index0) * 1s);
    --delay: calc(var(--index0) * 1s);

    animation: var(--duration) linear scale var(--delay) forwards;
    animation-timeline: cards-element-scrolls-in-body;
  }

  @keyframes scale {
    to {
      transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
    }
  }
}

/* body {
	text-align: center;
	font-size: calc(1em + 0.5vw);
}

header,
main {
	width: 80vw;
	margin: 0 auto;
}

header {
	height: 100vh;
	display: grid;
	place-items: center;
} */

#cards {
  list-style: none;
  outline: calc(var(--outline-width) * 10) solid blue;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(var(--numcards), var(--card-height));
  gap: var(--card-margin);
}

.card {
  outline: var(--outline-width) solid hotpink;
}

.card__content {
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  color: rgb(10, 5, 7);
  overflow: hidden;

  display: grid;
  grid-template-areas: "text img";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  align-items: stretch;
  outline: var(--outline-width) solid lime;
}

.card__content > div {
  grid-area: text;
  place-self: center;
  text-align: left;

  display: grid;
  gap: 1em;
  place-items: start;
}

.card__content > figure {
  grid-area: img;
  overflow: hidden;
}

.card__content > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* h1 {
	font-weight: 300;
	font-size: 3.5em;
}

h2 {
	font-weight: 300;
	font-size: 2.5em;
}

p {
	font-family: sans-serif;
	font-weight: 300;
	line-height: 1.42;
}

aside {
	width: 50vw;
	margin: 0 auto;
	text-align: left;
}

aside p {
	margin-bottom: 1em;
} */
</style>