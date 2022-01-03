<template>
    <div style="background-color: #202424;" class="text-white pb-16">
        <div class="flex flex-row">
            <!-- add background image + bottom fadeout color -->
            <top class="h-screen w-screen items-center text-white flex flex-col justify-end" :background="soundBackground">
            <!-- align items below to the left  -->
            <div class="text-left pb-16">   
                <div class="mx-6 font-bold text-xl md:text-4xl">SIGHT OF INDONESIA</div>
                 <hr class="w-36 ml-6 mt-1 border-4 md:w-64" />
                <div class="mt-3 mx-6 text-xs md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                </div>
            </div>
            </top>
        </div>

        <div  v-for="item in soundList" :key="item.title">
            <div class="flex flex-col">
                <div>
                    <div class="mx-6 mt-10">
                        <iframe class="embed-video w-full " :src= "item.iframe">
                        </iframe>
                    </div>
                    <div class="text-center">
                        <p class="text-lg font-bold my-5">{{item.title}}</p>
                        <p class="text-sm mx-2">
                        {{item.description}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
export default {
    name: 'Sound',
    components: {
      Top,
    },
    data(){
        return {
            soundBackground: require('../assets/soundHeader.jpg'),
            iframeSrc1: 'https://www.youtube.com/embed/UbF6Uf37XN0',
            iframeSrc2: 'https://www.youtube.com/embed/5DmT6N2_uE4',
            iframeSrc3: 'https://www.youtube.com/embed/GFZnjFSvB08',
            soundList: [
                {id: 1, title: "Indonesia Raya", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", iframe: 'https://www.youtube.com/embed/UbF6Uf37XN0'  },
                {id: 2, title: "Soleram", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", iframe: 'https://www.youtube.com/embed/5DmT6N2_uE4' },
                {id: 3, title: "Bungong Jempa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", iframe: 'https://www.youtube.com/embed/GFZnjFSvB08' },
            ]
        }
    },
    created(){
    }
}
</script>

<style>
    .embed-video{
        display: block;
        margin-top: 16px; 
        height: calc(0.5625 * 100vw);
    }
</style>