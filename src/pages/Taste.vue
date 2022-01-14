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

        <div class="mt-5">
            <div class="mx-6">
                <hr class="w-full border-2 border-white md:border-4" />
            </div>
            <div class="flex justify-center items-center">
                <div style="background-color: #F9AC18;" class="w-max p-3 text-xs font-bold absolute rounded-full md:text-lg">Traditional Food</div>
            </div>
        </div>

        <template v-if="dataRecipe.length === 0">
            <div v-for="index in 3" :key="index + '-placeholders'">
                <div v-if="index % 2 == 0">
                    <div class="mt-12 mx-2 md:mt-16">
                        <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                            <div class="w-full text-left mr-5">
                                <placeholder type="food" />
                            </div>

                            <div class="w-full">
                                <placeholder type="food"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="index % 2 !== 0">
                    <div class="mt-12 mx-2 md:mt-16">
                        <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                            <div class="w-full ">
                                <placeholder type="food"/>
                            </div>

                            <div class="w-full text-right ml-5">
                                <placeholder type="food"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <div v-for="(data, idx) in dataRecipe" :key="data.id">
            <div v-if="idx % 2 == 0">
                <div class="mt-12 mx-2 md:mt-16">
                    <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                        <div class="w-full text-left mr-5">
                            <card
                                class="text-left" 
                                type="A"
                                :title= data.title
                                :description= data.description
                                :id="data.id"
                            />
                        </div>

                        <div class="w-full">
                            <img class="rounded-lg object-cover w-full h-44 md:h-60" :src= data.image />
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="idx % 2 !== 0">
                <div class="mt-12 mx-2 md:mt-16">
                    <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                        <div class="w-full ">
                            <img class="rounded-md object-cover w-full h-44 md:h-60" :src= data.image />
                        </div>

                        <div class="w-full text-right ml-5">
                            <card
                                class="text-right"
                                type="A"
                                :title= data.title
                                :description= data.description
                                :id="data.id"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-14">
            <div class="mx-6">
                <hr class="w-full border-2 border-white md:border-4" />
            </div>
            <div class="flex justify-center items-center">
                <div style="background-color: #F9AC18;" class="w-max text-xs py-3 px-8 font-bold absolute rounded-full md:text-lg">Spices</div>
            </div>
        </div>

        <template v-if="spicesData.length === 0">
            <div v-for="index in 3" :key="index + '-bottom-placeholders'">
                <div class="mt-10 mx-2 md:mt-6">
                    <div class="flex flex-row justify-evenly justify-items-stretch mx-4">
                        <div class="w-full text-left mr-5">
                            <placeholder type="spice" />
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <div v-for="item in spicesData" :key="item.id" class="w-full">
            <div class="mx-6 my-5">
                <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
                    <div class="flex">
                        <img class="rounded-lg w-32 object-cover h-56 md:w-64 md:h-64" :src="item.image" />
                        <div class="mx-4">
                            <div class="font-bold text-md md:text-2xl">{{ item.name }}</div>
                            <div class="text-xs mb-2 md:text-xl md:mt-4">{{ item.description }}</div>
                            <div class="flex">
                                <div>
                                    <tombol @click="addToCart(item)" class="text-xs md:text-md md:mt-3" title="ADD TO CART" />
                                </div>
                                <div class="ml-3">
                                    <tombol @click="removeItem(item)" class="text-xs md:text-md md:mt-3" title="REMOVE FROM CART" />
                                </div>
                            </div>
                            <div>
                                <div class="mt-3 md:text-md"><strong>Item in Cart : </strong>{{ totalItems[item.id] }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div v-if="spicesData.length === 0" wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
            <p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
        </div> -->

        <div class="checkout fixed">
            <router-link to="/order" :class="{ disabled: count < 1 }">
                <div class='badge badge-warning' id='lblCartCount'>{{count}}</div>
                <div class="bg-white rounded-full p-2 border-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
import Card from '../components/Card.vue'
import Placeholder from '../components/Placeholder.vue'
import Tombol from '../components/Button.vue'
// import food1 from '../assets/food1.jpg'
// import food2 from '../assets/food2.jpg'
import { where } from "firebase/firestore"
// import { ref, getDownloadURL } from "firebase/storage"
// import food3 from '../assets/food3.jpg'
// import food4 from '../assets/food4.jpg'
export default {
    name: 'Taste',
    components: {
      Top,
      Card,
      Tombol,
      Placeholder,
    },
    watch: {
        
    },
    computed: {
        // description() {
        //     return this.product.description.substringLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam(0, 150)
        // }
        // product() {
        //     // return this.$store.state.spiceIndo;
        //     return this.spicesData
        // },
        totalItems(){
            let arr = this.$store.state.cartItems 

            return arr.reduce((acc, val) => {
                acc[val.id] = val.quantity || 0
                return acc;
            }, {})

        },
        count(){
            return this.$store.state.cartItemCount;
        },
    },
    data(){
        return {
            tasteBackground: require('../assets/tasteHeader.jpg'),
            spice1: require('../assets/cengkeh.jpg'),
            spice2: require('../assets/kayu manis.jpg'),
            spice3: require('../assets/kapulaga.jpg'),
            dataRecipe: [
                // {id: 1, title: "Gudeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam", image: food1 },
                // {id: 2, title: "Rawon", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam", image: food2 },
                // {id: 3, title: "Ketoprak", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam", image: food1 },
                // {id: 4, title: "Soto Betawi", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam", image: food2 },
            ],
            spicesData: []
        }
    },
    methods: {
        addToCart(item){
            this.$store.dispatch("addToCart", item);
        },
        removeItem(item){
            this.$store.dispatch("removeItem", item);
        },
    },
    async created(){
        this.dataRecipe = await this.$firestoreOrm.collections.recipes.functions.fetch()
        this.spicesData = await this.$firestoreOrm.collections.spices.functions.fetch()

        this.$firestoreOrm.collections.connections.functions.registerOnSnapshot(
            function(snap){
                const data = []
                snap.forEach((doc) => {
                    data.push(doc.data())
                })
                if(data[0].open === 1){
                    console.log('open')
                }
            },
            function(err){
                console.error(err)
            },
            where('identifier', '==', 'a10686f6-3743-482e-a05d-bceb8e87277f')
        )

        if(this.$store.state.cartItems.length == 0){
            this.$store.dispatch('setCartItems', [...this.spicesData])
        }
    }
}
</script>

<style>
.checkout {
    top: calc(var(--viewport-height) - 67px);
    right: 20px;
    /* opacity: 0.7; */
}

#lblCartCount {
    font-size: 12px;
    background: #ff0000;
    color: #fff;
    padding: 0 10px;
    margin-left: 25px; 
    margin-top: -10px;
    position: absolute;
}

.badge {
    padding-left: 9px;
    padding-right: 9px;
    border-radius: 9px;
}

.disabled{
    pointer-events: none;
}

.loader {
	border-top-color: #3498db;
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

</style>