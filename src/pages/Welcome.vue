<template>
    <div class="container h-screen">
        <!-- center the content below -->
        <div class="flex flex-col">
            <top class="h-screen w-screen items-center text-white flex flex-col justify-center" :background="welcomeBackground">
                <div class="text-md md:text-xl" @click="openIdViewer">Welcome To</div>
                <div class="font-bold text-xl md:text-4xl" @click="openPlayStore">Experience of Indonesia</div>
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
                <div>
                    <div class="flex flex-row mt-8">
                        <div>
                            <router-link to="/sight">
                                <tombol class="ml-6 mt-2 text-sm md:text-lg  md:mt-4 md:ml-4" title="Sight" />
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/taste">
                                <tombol class="mx-4 mt-2 text-sm md:text-lg  md:mt-4 md:mx-12" title="Taste" />
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/sound">
                                <tombol class="mt-2 text-sm md:text-lg  md:mt-4" title="Sound" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </top>
        </div>
    </div>
</template>

<script>
import Top from '../components/Top.vue'
import Tombol from '../components/Button.vue'
import { where } from "firebase/firestore"
export default {
    name: 'welcome',
    components: {
        Top,
        Tombol,
    },
    data(){
        return {
            welcomeBackground: require('../assets/Borobudur.jpg'),
            clickCount: 0
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
        openPlayStore(){
            document.location.href = 'intent:#Intent;scheme=twitter;package=com.twitter.android;end;'
        },
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

    @media (min-width: 768px){
        .underline {
            width: 300px;
        }
    }
</style>