<template>
    <div>
        <div class="absolute text-white">
            Version {{ version }}, User Agent {{ userAgent }}
        </div>
        <nav @click="goBack" v-if="$route.name !== 'welcome'" class="go-back-container fixed h-16">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16" fill="white" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
        </nav>
        <router-view />
        <!-- add back button here -->
    </div>
</template>

<script>
import { where } from "firebase/firestore"
export default {
    name: 'App',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
    data(){
        return {
            testing: require('./scenes/testing.html'),
            version: '0.0.0',
            userAgent: '',
        }
    },
    created(){
        this.version = process.env.VUE_APP_VERSION
        this.userAgent = navigator.userAgent
        console.log(this.version)
        const self = this
        if(this.$isOculus || this.$isMobile){
            console.log(this.$connection.identifier)
            this.$firestoreOrm.collections.connections.functions.registerOnSnapshot(
                function(snap){
                    const data = []
                    snap.forEach((doc) => {
                        data.push(doc.data())
                    })
                    console.log(data)
                    if(data[0].open === 1){
                        self.$router.push({ path: '/scene/asdfasdfasdf' })
                        //redirect to vr here
                    }
                },
                function(err){
                    console.error(err)
                },
                [ where('identifier', '==', this.$connection.identifier) ]
            )
        }
    }
}
</script>

<style scoped>
    .go-back-container{
        top: calc(var(--viewport-height) - 84px);
        margin: 10px;
        z-index: 9999;
    }

    .powered-by-logo{
        width: 100%;
    }
</style>
