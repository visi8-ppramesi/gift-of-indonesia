<template>
    <div class="container flex flex-col bg-black text-white pb-16">
        <div class="flex flex-row">
            <!-- add background image + bottom fadeout color -->
            <top class="h-screen w-screen items-center text-white flex flex-col justify-center" :background="soundBackground">
            <!-- align items below to the left  -->
            <div class="text-left mt-64">   
                <div class="mx-10 font-bold text-6xl">SOUND OF INDONESIA</div>
                <hr style="width: 550px; margin-left: 50px;" class="w-full mt-5 border-4" />
                <div class="ml-10 mr-96 mt-3 text-2xl">
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
        <div class="flex flex-col">
            <div>
                <div class="mx-10">
                    <iframe class="embed-video w-full " :src="iframeSrc1">
                    </iframe>
                </div>
                <div class="text-center text-2xl">
                    <p class="text-4xl font-bold my-5">INDONESIA RAYA</p>
                    <p class="mx-64">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>
        </div>

        <hr class="border-4 my-5" />

        <div class="flex flex-col">
            <div>
                <div class="mx-10">
                    <iframe class="embed-video w-full " :src="iframeSrc1">
                    </iframe>
                </div>
                <div class="text-center text-2xl">
                    <p class="text-4xl font-bold my-5">SOLERAM</p>
                    <p class="mx-64">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>
        </div>

        <hr class="border-4 my-5" />

        <div class="flex flex-col">
            <div>
                <div class="mx-10">
                    <iframe class="embed-video w-full " :src="iframeSrc1">
                    </iframe>
                </div>
                <div class="text-center text-2xl">
                    <p class="text-4xl font-bold my-5">BUNGONG JEMPA</p>
                    <p class="mx-64">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                    </p>
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
            iframeSrc1: 'https://www.youtube.com/embed/IHpP7CCseTE',
        }
    },
    created(){
        console.log(this.sightBackground)
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