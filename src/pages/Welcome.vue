<template>
    <div class="container h-screen flex flex-col justify-center px-6">
        <!-- center the content below -->
        <div class="flex flex-col items-center">
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
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>