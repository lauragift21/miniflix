<template>
    <div class="trailer-bg">
        <video
            id="trailer"
            autoplay
            loop
            controls
            class="cld-video-player trailer-bg__video">
        </video>
        <div class="trailer-content">
            <h1 class="is-size-1  has-text-weight-bold">{{movie.title || 'Night School'}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cloudinaryInstance', 'movie'],
    mounted() {
    this.player = this.cloudinaryInstance.videoPlayer('trailer', {
    transformation: {
            crop: 'crop',
            width: 1000,
            aspect_ratio: '16:9',
            x: 90,
            y: 90,
            gravity: 'center',
            overlay: 'Miniflix',
    }
    });
    this.player.source(
    this.movie.trailer || 'Night_School'
    );
    // Mute on blur
    document.hidden && this.player.mute()
    window.onfocus = () => this.player.unmute()
    window.onblur = () => this.player.mute()
    },
    watch: {
    movie(newMovie, oldMovie) {
        console.log(newMovie, oldMovie);
        this.player.source(newMovie.trailer);
    }
    },
}
</script>

<style>
.trailer-bg {
  position: relative;
}
.trailer-bg__video {
  position: absolute;
  width: 100%;
  outline: none;
}
.trailer-content {
  position: absolute;
  top: 30%;
  left: 100px;
}
</style>
