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
            type="Recipe"
            title="Ingredients :"
            :ingredients="bahan"
            total="300,000"
        />

        <div class="px-6">
            <div style="background-color: #4E423E;" class="mt-10 text-white w-full flex flex-col rounded-xl shadow-lg">
                <div class="text-xl font-bold px-4 pt-4 md:text-4xl">How To Cook :</div>
                <div class="mx-4">
                    
                </div>

                <div class="mx-4 mt-4 pb-6" v-html="text">
                    <!-- <ol class="mx-4 text-justify list-decimal md:text-2xl">
                        <li class="my-3">Rebus daging dan dengkul sapi hingga setengah lunak. Potong daging sesuai selera. Sisihkan.</li>
                        <li class="my-3">Masukkan Royco Kaldu Sapi dan garam ke dalam air rebusan daging.</li>
                        <li class="my-3">Tumis bumbu halus, lengkuas, daun jeruk, dan serai hingga harum dan matang.</li>
                        <li class="my-3">Masukkan potongan daging ke dalam tumisan, masak hingga bumbu meresap.</li>
                        <li class="my-3">Masukkan tumisan daging ke dalam kuah kaldu. Masak dengan api kecil hingga daging empuk.</li>
                        <li class="my-3">Sajikan hangat beserta pelengkap.</li>
                    </ol> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
import Card from '../components/Card.vue'

export default {
    name: 'Recipe',
    components: {
      Top,
      Card,
    },
    data(){
        return {
            gudeg: require('../assets/food1.jpg'),
            bahan: [
                {name: 'Daging Sapi', porsi: '500 g for 1 portion', price: '263,000'},
                {name: 'Daun Jeruk', porsi: '5 pieces for 1 portion', price: '5,000'},
                {name: 'Asam Jawa', porsi: '1 pieces for 1 portion', price: '5,000'},
                {name: 'Serai', porsi: '1 pieces for 1 portion', price: '7,000'},
                {name: 'Bawang', porsi: '1 pieces for 1 portion', price: '10,000'},
                {name: 'Kemiri', porsi: '1 pieces for 1 portion', price: '10,000'},
            ],
            description: '',
            image: '',
            ingredients: [],
            text: '',
            title: ''
        }
    },
    async created(){
        const data = await this.$firebase.recipeById(this.$route.params.id)
        Object.assign(this, { ...data })
        console.log(this)
        // this.description = description
        // this.image = image
        // this.ingredients = ingredients
        // this.text = text
        // this.title = title

        // const snapshot = await getDocs(query(this.$firebase.recipes, where(FieldPath.documentId(), '==', this.$route.params.id)))
        // snapshot.forEach((doc) => {
        //     console.log(doc.data())
        // })
    }
}
</script>

<style>

</style>