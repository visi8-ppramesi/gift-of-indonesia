<template>
    <div class="container flex flex-col bg-black text-white pb-16">
        <div class="flex">
            <!-- add background image + bottom fadeout color -->
            <top  class="h-screen w-screen items-center text-white flex flex-col justify-center" :background="tasteBackground">
                <!-- align items below to the right  -->
                <div class="text-left">   
                    <div class="mx-10 font-bold text-6xl">TASTE OF INDONESIA</div>
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
        <div>
            <div>[Separator + Title]</div>
        </div>
        
        <div class="mt-24"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-10">
                <div class="w-full text-left mr-5">
                    <card
                        class="text-left" 
                        type="A"
                        title="Gudeg" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum"
                    />

                </div>

                <div class="w-full ">
                    <img class="rounded-lg" :src="food1" />
                </div>
            </div>
        </div>

        <div class="mt-24"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-10">
                <div class="w-full ">
                    <img class="rounded-lg" :src="food2" />
                </div>

                <div class="w-full text-right ml-5">
                    <card
                        class="text-right"
                        type="A"
                        title="Rawon" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum"
                    />

                </div>
            </div>
        </div>

        <div class="mt-24"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-10">
                <div class="w-full text-left mr-5">
                    <card
                        class="text-left" 
                        type="A"
                        title="Ketoprak" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum"
                    />

                </div>

                <div class="w-full ">
                    <img class="rounded-lg" :src="food1" />
                </div>
            </div>
        </div>

        <div class="mt-24"> <!-- change height -->
            <div class="flex flex-row justify-evenly justify-items-stretch mx-10">
                <div class="w-full ">
                    <img class="rounded-lg" :src="food2" />
                </div>

                <div class="w-full text-right ml-5">
                    <card
                        class="text-right"
                        type="A"
                        title="Soto Betawi" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum"
                    />

                </div>
            </div>
        </div>

        <hr class="mx-10 my-5" />

        <div class="w-full">
            <card
                type="B"
                :image="spice1"
                title="Cengkeh"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum"
            />
        </div>

         <div class="w-full">
            <card
                type="B"
                :image="spice2"
                title="Kayu Manis"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum"
            />
        </div>

         <div class="w-full">
            <card
                type="B"
                :image="spice3"
                title="Kapulaga"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum"
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
        console.log(this.tasteBackground)
    }
}
</script>

<style>

</style>