<template>
    <div v-html="test">

    </div>
</template>

<script>
export default {
    name:'SceneViewer',
    data(){
        return {
            test: `
<a-scene>
    <a-videosphere rotation="0 180 0" src="#video">
    </a-videosphere>
    <!-- <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane> -->
    <!-- The original example also has this 180 degree rotation, to appear to be going forward. --><!-- <a-videosphere src="#video"></a-videosphere> -->
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <!-- Define camera with zero user height, movement disabled and arrow key rotation added. --><!-- <a-camera user-height="0"><a-entity id="msg" position="0 -0.3 -1.5" text="align:center; width:3; wrapCount:100; color:red;"></a-entity></a-camera>--><!-- Wait for the video to load. -->
    <a-assets>
        <video id="video" style="display:none" autoplay loop playsinline webkit-playsinline>
            <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/gift-of-indonesia.appspot.com/o/city.mp4?alt=media&token=1c9c4547-37d2-41cc-bdf0-a0fcb81bcff2" />
        </video>
    </a-assets>
</a-scene>
            `
            // test: '<a-scene><!-- The original example also has this 180 degree rotation, to appear to be going forward. --><!-- <a-videosphere src="#video"></a-videosphere> --><a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box><!-- Define camera with zero user height, movement disabled and arrow key rotation added. --><!-- <a-camera user-height="0"><a-entity id="msg" position="0 -0.3 -1.5" text="align:center; width:3; wrapCount:100; color:red;"></a-entity></a-camera>--><!-- Wait for the video to load. --><a-assets><video id="video" style="display:none" autoplay loop playsinline webkit-playsinline><source type="video/mp4" src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/" /></video></a-assets></a-scene>'
            // test: '<a-scene><a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane><a-sky color="#ECECEC"></a-sky></a-scene>'
        }
    },
    beforeDestroy(){
        const els = document.getElementsByClassName('a-fullscreen')
        els[0].classList.remove('a-fullscreen')
    }
}
</script>

<style>

</style>