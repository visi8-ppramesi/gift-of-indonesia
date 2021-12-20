<template>
    <div class="container h-screen">
        <!-- center the content below -->
        <div class="flex flex-col">
            <top class="h-screen w-screen items-center text-white flex flex-col justify-center" :background="welcomeBackground">
                <div class="text-4xl">Welcome To</div>
                <div class="font-bold text-8xl">Experience of Indonesia</div>
                <hr style="width: 950px;" class="w-full mt-5 border-4" />
                <div class="text-center text-2xl mx-72 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                </div>
                <div>
                    <div class="flex flex-row">
                        <div>
                            <router-link to="/sight">
                                <tombol class="mx-10" title="Sight" />
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/taste">
                                <tombol class="mx-10" title="Taste" />
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/sound">
                                <tombol class="mx-10" title="Sound" />
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
export default {
    name: 'welcome',
    components: {
        Top,
        Tombol,
    },
    data(){
        return {
            welcomeBackground: require('../assets/Borobudur.jpg')
        }
    },
    created(){
        console.log(this.welcomeBackground)
    }
}
</script>

<style>

</style>