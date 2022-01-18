<template>
    <div>
        {{ write }}
    </div>
</template>

<script>
export default {
    data(){
        return {
            write: ''
        }
    },
    created(){
        const connectionUuid = window.localStorage.getItem('uuid')
        const connectionId = window.localStorage.getItem('id')
        this.write = JSON.stringify({identifier: connectionUuid, id: connectionId})
    }
}
</script>