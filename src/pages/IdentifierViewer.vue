<template>
    <div class="p-4">
        <div>
            <div>
                <label for="">UUID</label>
                <br>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="write.identifier">
            </div>
            <br>
            <div>
                <label for="">Connection ID</label>
                <br>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="write.id">
            </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="setConnectionIdentifier">Set connection identifier</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            write: {
                identifier: '',
                id: ''
            }
        }
    },
    methods: {
        setConnectionIdentifier(){
            window.localStorage.setItem('uuid', this.write.identifier)
            window.localStorage.setItem('id', this.write.id)
        }
    },
    created(){
        const connectionUuid = window.localStorage.getItem('uuid')
        const connectionId = window.localStorage.getItem('id')
        this.write = {identifier: connectionUuid, id: connectionId}
    }
}
</script>