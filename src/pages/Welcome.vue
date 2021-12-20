<template>
    <div class="container h-screen">
        <!-- center the content below -->
        <div class="flex flex-col">
            <top class="h-screen w-screen items-center flex flex-col justify-center" :background="welcomeBackground">
                <div>Welcome To</div>
                <div>Experience of Indonesia</div>
                <hr>
                <div>a bunch of text</div>
                <div>
                    <div class="flex flex-row">
                        <div>
                            <router-link to="/sight">
                                [button here]
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/taste">
                                [button here]
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/sound">
                                [button here]
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
export default {
    name: 'welcome',
    components: {
        Top
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