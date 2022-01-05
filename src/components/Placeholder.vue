<template>
    <div>
        <div v-if="type === 'food'" class="w-full flex items-center flex-col">
            <div class="flex w-full brown-background shadow-md p-4 rounded-md">
                <div data-placeholder class="mr-2 h-20 w-20 rounded-full overflow-hidden relative bg-gray-200">
                    
                </div>
                <div class="flex flex-col justify-between">
                    <div data-placeholder class="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200">
                    
                    </div>
                    <div data-placeholder class="h-10 w-40 overflow-hidden relative bg-gray-200">
                    
                    </div>
                </div>
            </div>
        </div>

        <div v-if="type === 'spice'">
            <div style="background-color: #4E423E;" class="text-white w-full flex flex-col rounded-xl shadow-lg p-4">
                <div class="flex">
                    <div data-placeholder class="mr-2 h-32 w-32 overflow-hidden relative bg-gray-200">   
                    </div>
                    <div class="flex flex-col justify-between">
                        <div data-placeholder class="mb-2 ml-8 h-5 w-84 overflow-hidden relative bg-gray-200">
                        
                        </div>

                        <div data-placeholder class="h-10 ml-8 w-84 overflow-hidden relative bg-gray-200">
                        </div>

                        <div class="mt-3 ml-8 flex">
                            <div data-placeholder class="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200"></div>
                            <div data-placeholder class="mb-2 ml-5 h-5 w-40 overflow-hidden relative bg-gray-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        type: String,
    },
}
</script>

<style>
    .brown-background{
        background: #4E423E
    }
    [data-placeholder]::after {
        content: " ";
        box-shadow: 0 0 50px 9px rgba(254,254,254);
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%; 
        animation: load 1s infinite;
    }
</style>