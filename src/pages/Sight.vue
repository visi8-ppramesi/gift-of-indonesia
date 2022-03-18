<template>
    <div style="background-color: #202424;" class="text-white pb-16">
        <div class="flex"> 
            <!-- add background image + bottom fadeout color -->
            <top class="h-screen w-screen items-center text-white flex flex-col justify-end" :background="sightBackground">
            <!-- align items below to the right  -->
                <div class="text-right pb-16">   
                    <div class="mx-6 font-bold text-lg md:text-4xl">SIGHT OF INDONESIA</div>
                    <div class="flex justify-end mx-6">
                    <hr class="w-36 mt-1 border-4 md:w-72" />
                </div>
                    <div class="mt-3 text-xs md:text-lg mx-6">
                        Every sightseeing in Indonesia, especially the magnificent Mount Bromo will not disappoint with its spectacular views and dramatic landscapes. Standing majestically inside the huge caldera of the once ancient Mount Tengger, Mount Bromo is surrounded by a vast stretching sea of volcanic sand that radiated a certain mystical beauty.
                    </div>
                </div>
            </top>
        </div>

        <div class="my-4">
            <title-separator class="mb-4">VR Content</title-separator>

            <Carousel :panelsPerView="3">
                <template v-if="content.length > 0">
                        <div
                            style="height: 16rem; width: 26rem;"
                            v-for="item in content"
                            class="px-2"
                            :key="item.id"
                        >
                            <a :href="item.url">
                                <img :src="item.preview" :id="'box-' + item.id" />
                            </a>
                        </div>
                </template>
                <template v-else>
                    <placeholder style="height: 360px;" class="px-2" v-for="idx in 3" type="carousel" :key="idx"/>
                </template>
            </Carousel>
        </div>

        <div class="my-4">
            <title-separator class="mb-4">Content</title-separator> 
            <!-- change height -->
            <div class="h-full mx-6 flex flex-row justify-evenly justify-items-stretch md:mt-12">
                <div class="w-full h-44 mr-2 pr-2">
                    <img class="rounded-lg object-cover w-full h-full" :src="card1" />
                </div>

                <div class="w-full text-right">
                    <div class="text-md font-bold md:text-2xl">Diving</div>
                    <div class="text-sm md:text-xl">Raja Ampat</div>
                    <div class="text-xs mt-2 md:text-lg">
                        Raja Ampat lies in the heart of the Coral Triangle. It holds the prestigious title as the most marine biodiverse place on earth. Breathtakingly spectacular and truly unforgettable Raja Ampat Scuba Diving experience can’t be missed for everyone to enjoy.
                    </div>
                    <div class="mt-2 md:mt-4">
                        <tombol class="text-xs md:text-md" title="AR" />
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12"> <!-- change height -->
            <div class="h-full mx-6 flex flex-row justify-evenly justify-items-stretch">
                <div class="w-full text-left">
                    <div class="text-md font-bold md:text-xl">Fishing</div>
                    <div class="text-sm md:text-lg">Sea of Indonesia</div>
                    <div class="text-xs mt-2 md:text-lg">
                       Your fishing in Indonesia experience should be amazing. With tens of thousands of islands offer the best Indonesia Fishing Game or recreational sport fishing in various locations. 
                    </div>
                    <div class="mt-2 md:mt-4" @click="openVR">
                        <!-- <router-link to="/scene/asdfasdfasdf"> -->
                            <tombol class="text-xs md:text-md" title="VR" />
                        <!-- </router-link> -->
                    </div>
                </div>

                <div class="w-full h-44 ml-2 pl-2">
                    <img class="rounded-lg object-cover w-full h-full" :src="card2" />
                </div>
            </div>
        </div>

        <div class="mt-12"> <!-- change height -->
            <div class="h-full mx-6 flex flex-row justify-evenly justify-items-stretch">
                <div class="w-full h-44 mr-2 pr-2">
                    <img class="rounded-lg object-cover w-full h-full" :src="card3" />
                </div>

                <div class="w-full text-right">
                    <div class="text-md font-bold md:text-xl">Dance</div>
                    <div class="text-sm md:text-lg">Reog Ponogoro Dance</div>
                    <div class="text-xs mt-2 md:text-lg">
                        The dances in Indonesia reflect its diverse and long history. Dances in Indonesia are believed by many scholars to have had their beginning in rituals and religious worship. Every region has its own traditional dances and it reflects their special features.

                        Music is an integral part of every culture in this world. It is seen as a form of entertainment and a way of spending time with a community.
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
import Swal from 'sweetalert2'
import Carousel from '../components/Carousel.vue'
import TitleSeparator from '../components/TitleSeparator.vue'
import Placeholder from '../components/Placeholder.vue'
export default {
    name: 'Sight',
    components: {
      Top,
      Tombol,
      Carousel,
      TitleSeparator,
      Placeholder,
    },
    data(){
        return {
            sightBackground: require('../assets/sight.jpg'),
            card1: require('../assets/Card1.jpg'),
            card2: require('../assets/Card2.jpeg'),
            card3: require('../assets/Card3.jpg'),
            content: []
        }
    },
    async created(){
        this.content = await this.$firestoreOrm.collections['vr-content'].functions.fetch()
    },
    methods: {
        goToContent(url){
            document.URL = url
        },
        openVR(){
            const self = this
            if(this.$isOculus || this.$isMobile){
                self.$router.push({ path: '/scene/asdfasdfasdf' })
            }else{
                self.$firestoreOrm.collections.connections.functions.updateById(this.$connection.id, {
                    open: 1
                }).then((res) => {
                    if(res){
                        Swal.fire('Open your VR device!')
                    }
                })
                setTimeout(() => {
                    self.$firestoreOrm.collections.connections.functions.updateById(this.$connection.id, {
                        open: 0
                    })
                }, 20 * 1000)
            }
        }
    }
}
</script>

<style>

</style>