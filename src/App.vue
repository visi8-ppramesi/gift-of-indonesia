<template>
  <div>
    <nav @click="goBack" v-if="$route.name !== 'welcome'" class="go-back-container fixed h-16">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16" fill="white" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
    </nav>
    <div class="checkout fixed">
        <router-link to="/order">
            <div class='badge badge-warning' id='lblCartCount'>{{count}}</div>
            <div class="bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </div>
        </router-link>
    </div>
    <router-view />
    <!-- add back button here -->
  </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
    computed: {
        count(){
            return this.$store.state.cartItemCount;
        },
    }
}
</script>

<style scoped>
    .go-back-container{
        top: calc(var(--viewport-height) - 84px);
        margin: 10px;
        z-index: 9999;
    }

    .checkout {
        top: calc(var(--viewport-height) - 75px);
        right:35px;
        /* opacity: 0.7; */
    }

    .powered-by-logo{
        width: 100%;
    }

    .badge {
        padding-left: 9px;
        padding-right: 9px;
        border-radius: 9px;
    }

    #lblCartCount {
        font-size: 12px;
        background: #ff0000;
        color: #fff;
        padding: 0 10px;
        margin-left: 30px; 
        margin-top: -10px;
        position: absolute;
    }
</style>
