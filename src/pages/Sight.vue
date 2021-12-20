<template>
    <div class="container flex flex-col bg-black text-white pb-16">
        <div class="flex"> 
            <!-- add background image + bottom fadeout color -->
            <top class="h-screen w-screen items-center text-white flex flex-col justify-center" :background="sightBackground">
            <!-- align items below to the right  -->
            <div class="text-right">   
                <div class="mx-10 font-bold text-6xl">SIGHT OF INDONESIA</div>
                 <hr style="width: 550px; margin-left: 930px;" class="w-full mt-5 border-4" />
                <div class="mr-10 ml-96 mt-3 text-2xl">
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
            <div class="flex flex-row justify-evenly justify-items-stretch">
                <div class="w-full ">
                    <img class="rounded-lg mx-8" :src="card1" />
                </div>

                <div class="w-full text-right mx-10">
                    <div class="text-6xl font-bold">DIVING</div>
                    <div class="text-4xl">Raja Ampat</div>
                    <div class="text-2xl mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum
                    </div>
                    <div>
                        <tombol title="AR" />
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-24"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-10">
                <div class="w-full text-left">
                    <div class="text-6xl font-bold">Fishing</div>
                    <div class="text-4xl">Laut Indonesia</div>
                    <div class="text-2xl mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum
                    </div>
                    <div>
                        <tombol title="VR" />
                    </div>
                </div>

                <div class="w-full ">
                    <img class="rounded-lg" :src="card2" />
                </div>
            </div>
        </div>

        <div class="mt-24"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch">
                <div class="w-full ">
                    <img class="rounded-lg mx-8" :src="card3" />
                </div>
                
                <div class="w-full text-right mx-10">
                    <div class="text-6xl font-bold">DANCE</div>
                    <div class="text-4xl">Tari Reog Ponogoro</div>
                    <div class="text-2xl mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum
                    </div>
                    <div>
                        <tombol title="PANORAMA" />
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