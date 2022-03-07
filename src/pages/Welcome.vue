<template>
    <div class="container h-screen">
        <!-- center the content below -->
        <div class="flex flex-col">
            <top class="h-screen w-screen items-center text-white flex flex-col justify-center" :background="welcomeBackground">
                <div class="text-md md:text-xl" @click="openIdViewer">Welcome To</div>
                <div class="font-bold text-xl md:text-4xl">Experience of Indonesia</div>
                <hr class="underline mt-2 border-4" />
                <div class="text-center w-full px-4 text-sm mt-3 md:text-lg md:w-full md:px-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                </div>
            </top>
            <div class="choice">
                <div class="container relative" v-for="item in choice" :key="item.title">   
                    <img class="w-screen" :src="item.image" />
                    <router-link :to="item.link">
                        <button class="btn border-white border-solid border-2 font-bold shadow-xl text-black bg-white px-2 py-1">Button</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
// import Tombol from '../components/Button.vue'
import { where } from "firebase/firestore"
import sight from '../assets/sight.jpg'
import taste from '../assets/taste.png'
import sound from '../assets/sound.jpg'
export default {
    name: 'welcome',
    components: {
        Top,
        // Tombol,
    },
    data(){
        return {
            welcomeBackground: require('../assets/Borobudur.jpg'),
            sight: require('../assets/sight.jpg'),
            clickCount: 0,
            choice: [
                {title: "Sight", image: sight, link: "/sight"},
                {title: "Taste", image: taste, link: "/taste"},
                {title: "Sound", image: sound, link: "/sound"},
            ]
        }
    },
    created(){
        this.clickCount = 0
        const self = this
        //if open on connection is true + browser is oculus browser, redirect automatically to vr
        if(this.$isOculus || this.$isMobile){
            this.$firestoreOrm.collections.connections.functions
                .fetchQuery([where('identifier', '==', this.$connection.identifier)])
                .then((data) => {
                    if(data[0].open === 1){
                        self.$router.push({ path: '/scene/asdfasdfasdf' })
                        //redirect to VR here
                    }
                })
        }
    },
    methods: {
        openIdViewer(){
            this.clickCount += 1
            if(this.clickCount > 3){
                this.$router.push({ path: '/id-viewer' })
            }
        }
    }
}
</script>

<style>
    .underline {
        width: 200px;
    }

    .container .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
    }

    .container .btn:hover {
        background-color: #555;
    }

    @media (min-width: 768px){
        .underline {
            width: 300px;
        }
    }
</style>