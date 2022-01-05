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

        <div class="mx-6 my-5">
            <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
                <div class="text-center" v-if="totalPrice == 0">
                    <div class="text-4xl">Your Cart is Empty</div>
                    <div class="text-xl mt-3">You can go to taste page to order food items</div>
                </div>
                <div v-if="totalPrice !== 0">
                    <div class="text-xl md:text-4xl">Items in cart :</div>
                    <ul class="list-disc mx-6 mt-5">
                        <li class="my-3" v-for="items in cartItems" :key="items.id">
                            <div class="flex">
                                <div class="w-5/6">
                                    <div class="text-md font-bold md:text-2xl">
                                        {{ items.name }}
                                    </div>
                                    <div class="text-xs md:text-lg">
                                        {{ formatPrice(items.price * items.quantity) }}
                                    </div>
                                </div>

                                <div class="flex items-center justify-end w-5/6 ml-16">
                                    <div class="text-md md:text-xl">
                                         x {{items.quantity}}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <hr class="border-2 mx-2" />

                    <div class="flex mx-4 mt-2">
                        <div>
                            <div class="text-md w-1/6 font-bold md:text-2xl">
                            Total
                            </div>
                        </div>

                        <div class="flex items-center justify-end w-5/6 ml-36">
                            <div class="text-md md:text-xl">
                            Rp. {{ formatPrice(totalPrice) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

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
// import Card from '../components/Card.vue'
import Tombol from '../components/Button.vue'
export default {
    name: 'Taste',
    components: {
      Top,
    //   Card,
      Tombol,
    },
    computed: {
        cartItems(){
            return this.$store.state.cartItems.filter(v => v.quantity > 0);
        },
        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map(el => {
                price += el["quantity"] * el["price"];
            });
            return price;
        }
    },
    data(){
        return {
            gudeg: require('../assets/food1.jpg'),
            item:0
            // bahan: [
            //     {name: 'Daging Sapi', porsi: '500 g for 1 portion', price: '263,000'},
            //     {name: 'Daun Jeruk', porsi: '5 pieces for 1 portion', price: '5,000'},
            //     {name: 'Asam Jawa', porsi: '1 pieces for 1 portion', price: '5,000'},
            //     {name: 'Serai', porsi: '1 pieces for 1 portion', price: '7,000'},
            //     {name: 'Bawang', porsi: '1 pieces for 1 portion', price: '10,000'},
            //     {name: 'Kemiri', porsi: '1 pieces for 1 portion', price: '10,000'},
            // ]
        };
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>

<style>

</style>