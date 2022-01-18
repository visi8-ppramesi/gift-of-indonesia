<template>
    <div>
        <a-scene>
            <!-- The original example also has this 180 degree rotation, to appear to be going forward. -->
            <a-videosphere rotation="0 180 0" src="#video">
            </a-videosphere>
            
            <!-- Define camera with zero user height, movement disabled and arrow key rotation added. -->
            <a-camera user-height="0">
                <!-- Text element for display messaging.  Hide once video is playing. -->
                <a-entity id="msg" position="0 -0.3 -1.5" text="align:center; 
                        width:3;
                        wrapCount:100;
                        color:red;">
                </a-entity>
            </a-camera>      
            
            <!-- Wait for the video to load. -->
            <a-assets>
                <!-- Single source video. -->
                <video id="video" style="display:none" autoplay loop crossorigin="anonymous" playsinline webkit-playsinline>
                    <!-- MP4 video source. -->
                    <source type="video/mp4"
                        src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/" />
                </video>
            </a-assets>
        </a-scene>
    </div>
</template>

<script>
export default {
    name:'SceneViewer',
    data(){
        return {
            test: '<a-scene><a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box><a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere><a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder><a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane><a-sky color="#ECECEC"></a-sky></a-scene>'
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