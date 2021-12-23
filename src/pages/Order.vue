<template>
    <div style="background-color: #202424;" class="text-white pb-16">
        <div class="flex flex-row">
            <!-- add background image + bottom fadeout color -->
            <top  class="h-screen w-screen items-center text-white flex flex-col justify-end" :background="gudeg">
            <!-- align items below to the left  -->
               <div class="text-left pb-16">   
                    <div class="mx-6 font-bold text-xl md:text-4xl">Gudeg</div>
                    
                    <div class="mx-6 mt-1 text-xs md:text-lg">
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

        <card 
            class="px-6"
            type="Order"
            title="Ingredients :"
            :ingredients="bahan"
            total="300,000"
        />

        <div class="px-6">
            <div style="background-color: #4E423E;" class="mt-10 text-white w-full flex flex-col rounded-xl shadow-lg">
                <div class="text-xl px-4 pt-4 md:text-4xl">Payment :</div>
                <div class="flex pb-4 text-xs mt-3 md:mt-6">
                    <div class="ml-4">
                        <tombol class="md:text-xl" title="Credit Card" />
                    </div>

                    <div class="mx-2">
                        <tombol class="md:text-xl" title="Bank Transfer" />
                    </div>

                    <div>
                        <tombol class="md:text-xl" title="Paypal" />
                    </div>
                </div>

                <div class="mx-4">
                    <div style="background-color: white;" class="w-full mt-10 text-black flex flex-col rounded-md shadow-xl">
                        <div class="p-4">
                            <div class="py-4">
                                <p>NAME ON CARD</p>
                                <input class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
                            </div>
                            <div class="py-4">
                                <p>CARD NUMBER</p>
                                <input class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card-number" type="number" placeholder="Number">
                            </div>
                            <div class="flex">
                                <div>
                                    <p>Month</p>
                                    <input class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="month" type="number" placeholder="Month">
                                </div>

                                <div class="ml-4">
                                    <p>Year</p>
                                    <input class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="number" placeholder="Year">
                                </div>

                                <div class="ml-4">
                                    <p>CVV</p>
                                    <input class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv-number" type="number" placeholder="CVV Number">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mx-4 mt-4 pb-6">
                    <tombol title="PAY NOW" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
import Card from '../components/Card.vue'
import Tombol from '../components/Button.vue'
export default {
    name: 'Taste',
    components: {
      Top,
      Card,
      Tombol,
    },
    data(){
        return {
            gudeg: require('../assets/food1.jpg'),
            // bahan: [
            //     {name: 'Daging Sapi', porsi: '500 g for 1 portion', price: '263,000'},
            //     {name: 'Daun Jeruk', porsi: '5 pieces for 1 portion', price: '5,000'},
            //     {name: 'Asam Jawa', porsi: '1 pieces for 1 portion', price: '5,000'},
            //     {name: 'Serai', porsi: '1 pieces for 1 portion', price: '7,000'},
            //     {name: 'Bawang', porsi: '1 pieces for 1 portion', price: '10,000'},
            //     {name: 'Kemiri', porsi: '1 pieces for 1 portion', price: '10,000'},
            // ]
        }
    },
    methods: {

    }
}
</script>

<style>

</style>