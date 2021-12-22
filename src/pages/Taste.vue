<template>
    <div style="background-color: #202424;" class="text-white pb-16">
        <div class="flex">
            <!-- add background image + bottom fadeout color -->
            <top  class="h-screen w-screen items-center text-white flex flex-col justify-end" :background="tasteBackground">
                <!-- align items below to the right  -->
                <div class="text-right pb-12 md:pb-16">
                <div class="mx-6 font-bold text-xl md:text-4xl">TASTE OF INDONESIA</div>
                <div class="flex justify-end mx-6">
                    <hr class="w-36 mt-1 border-4 md:w-72" />
                </div>
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

        <div>
            <div class="mx-6">
                <hr class="w-full border-2 border-white md:border-4" />
            </div>
            <div class="flex justify-center items-center">
                <div style="background-color: #F9AC18;" class="w-max p-3 text-xs font-bold absolute rounded-xl md:text-lg">Traditional Food</div>
            </div>
        </div>
        
        
        <div class="mt-12 mx-2 md:mt-24"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                <div class="w-full text-left mr-5">
                    <card
                        class="text-left" 
                        type="A"
                        title="Gudeg" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam"
                    />

                </div>

                <div class="w-full">
                    <img class="rounded-lg object-cover h-44 md:h-60" :src="food1" />
                </div>
            </div>
        </div>

        <div class="mt-12 mx-2"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                <div class="w-full ">
                    <img class="rounded-md object-cover h-44 md:h-60" :src="food2" />
                </div>

                <div class="w-full text-right ml-5">
                    <card
                        class="text-right"
                        type="A"
                        title="Rawon" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam"
                    />

                </div>
            </div>
        </div>
 
        <div class="mt-12 mx-2"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                <div class="w-full text-left mr-5">
                    <card
                        class="text-left" 
                        type="A"
                        title="Ketoprak" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam"
                    />

                </div>

                <div class="w-full ">
                    <img class="rounded-lg object-cover h-44 md:h-60" :src="food1" />
                </div>
            </div>
        </div>

        <div class="mt-12 mx-2"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                <div class="w-full ">
                    <img class="rounded-md object-cover h-44 md:h-60" :src="food2" />
                </div>

                <div class="w-full text-right ml-5">
                    <card
                        class="text-right"
                        type="A"
                        title="Soto Betawi" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam"
                    />

                </div>
            </div>
        </div>

        <div class="py-16">
            <div class="mx-6">
                <hr class="w-full border-2 border-white md:border-4" />
            </div>
            <div class="flex justify-center items-center">
                <div style="background-color: #F9AC18;" class="w-max text-xs py-3 px-8 font-bold absolute rounded-xl md:text-lg">Spice</div>
            </div>
        </div>

        <div class="w-full">
            <card
                type="B"
                :image="spice1"
                title="Cengkeh"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam"
            />
        </div>

         <div class="w-full">
            <card
                type="B"
                :image="spice2"
                title="Kayu Manis"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam"
            />
        </div>

         <div class="w-full">
            <card
                type="B"
                :image="spice3"
                title="Kapulaga"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam"
            />
        </div>


    </div>
</template>

<script>
import Top from '../components/Top.vue'
import Card from '../components/Card.vue'
export default {
    name: 'Taste',
    components: {
      Top,
      Card,
    },
    data(){
        return {
            tasteBackground: require('../assets/tasteHeader.jpg'),
            food1: require('../assets/food1.jpg'),
            food2: require('../assets/food2.jpg'),
            food3: require('../assets/food3.jpg'),
            food4: require('../assets/food4.jpg'),
            spice1: require('../assets/cengkeh.jpg'),
            spice2: require('../assets/kayu manis.jpg'),
            spice3: require('../assets/kapulaga.jpg'),
        }
    },
    created(){
    }
}
</script>

<style>

</style>