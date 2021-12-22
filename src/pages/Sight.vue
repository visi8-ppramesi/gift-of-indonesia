<template>
    <div style="background-color: #202424;" class="text-white pb-16">
        <div class="flex"> 
            <!-- add background image + bottom fadeout color -->
            <top class="h-screen w-screen items-center text-white flex flex-col justify-end" :background="sightBackground">
            <!-- align items below to the right  -->
                <div class="text-right pb-12 md:pb-0">   
                    <div class="mx-6 font-bold text-lg md:text-4xl">SIGHT OF INDONESIA</div>
                    <div class="flex justify-end mx-6">
                    <hr class="w-36 mt-1 border-4 md:w-72" />
                </div>
                    <div class="mt-3 text-xs md:text-lg mx-6">
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

        <div> <!-- change height -->
            <div class="h-52 mx-6 flex flex-row justify-evenly justify-items-stretch md:mt-12">
                <div class="w-full">
                    <img class="rounded-lg object-cover w-full h-full" :src="card1" />
                </div>

                <div class="w-full text-right">
                    <div class="text-md font-bold md:text-2xl">Diving</div>
                    <div class="text-sm md:text-xl">Raja Ampat</div>
                    <div class="text-xs mt-2 md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed eiusmod tempor incididunt ut labore et dolore magna.
                    </div>
                    <div class="mt-2 md:mt-4">
                        <tombol class="text-xs md:text-md" title="AR" />
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-24"> <!-- change height -->
            <div class="h-52 mx-6 flex flex-row justify-evenly justify-items-stretch">
                <div class="w-full text-left">
                    <div class="text-md font-bold md:text-xl">Fishing</div>
                    <div class="text-sm md:text-lg">Laut Indonesia</div>
                    <div class="text-xs mt-2 md:text-lg">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed eiusmod tempor. consectetur adipiscing elit
                    </div>
                    <div class="mt-2 md:mt-4">
                        <tombol class="text-xs md:text-md" title="VR" />
                    </div>
                </div>

                <div class="w-full h-44 mx-2">
                    <img class="rounded-lg object-cover w-full" :src="card2" />
                </div>
            </div>
        </div>

        <div class="mt-24"> <!-- change height -->
            <div class="mx-6 h-52 flex flex-row justify-evenly justify-items-stretch">
                <div class="w-full h-44">
                    <img class="rounded-lg object-cover w-full" :src="card3" />
                </div>

                <div class="w-full text-right">
                    <div class="text-md font-bold md:text-xl">Dance</div>
                    <div class="text-sm md:text-lg">Tari Reog Ponogoro</div>
                    <div class="text-xs mt-2 md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed eiusmod tempor incididunt ut labore et dolore.
                    </div>
                    <div class="mt-2 md:mt-4">
                        <tombol class="text-xs md:text-md" title="PANORAMA" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Tombol from '../components/Button.vue'
import Top from '../components/Top.vue'
export default {
    name: 'Sight',
    components: {
      Top,
      Tombol,
    },
    data(){
        return {
            sightBackground: require('../assets/sightHeader.jpg'),
            card1: require('../assets/Card1.jpg'),
            card2: require('../assets/Card2.jpeg'),
            card3: require('../assets/Card3.jpg'),
        }
    },
    created(){
        console.log(this.sightBackground)
    }
}
</script>

<style>

</style>