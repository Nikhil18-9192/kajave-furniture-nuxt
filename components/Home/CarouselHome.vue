<template>
  <div id="carousel-container">
    <client-only>
      <carousel
        class="carousel"
        :per-page="1"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="10000"
        :mouse-drag="true"
        :paginationEnabled="false"
      >
        <slide
          class="slide"
          v-for="item in carouselItems"
          v-bind:key="item.img"
          :style="{ backgroundImage: `url(${item.img})` }"
        >
          <video
            poster="https://firebasestorage.googleapis.com/v0/b/kajave-calculation-app.appspot.com/o/thumb.jpg?alt=media&token=41f3b099-a04d-47e7-b3ca-5dcb4d085342"
            controls
            autoplay
            v-if="item.video"
            :src="item.video"
          ></video>
        </slide>
      </carousel>
    </client-only>
    <div class="nav-helper">
      <img class="arrow_small" src="/arrow_small.svg" alt="" />
      <img class="arrow_big" src="/arrow_big.svg" alt="" />
      <p>Scroll Down</p>
      <div class="gif"></div>
    </div>
  </div>
</template>

<script>
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";
export default {
  name: "Carousel",
  components: {
    carousel: Carousel,
    slide: Slide
  },
  data() {
    return {
      carouselItems: [
        {
          text: "Crafting happiness since 1900",
          video:
            "https://firebasestorage.googleapis.com/v0/b/kajave-calculation-app.appspot.com/o/KajaveFurnitureVideo.mp4?alt=media&token=947814bf-551c-4bd5-9bad-9010f3a446a4"
        },
        {
          text: "Quality Furniture every home needs",
          img: "/1.jpg"
        },
        {
          text: "Nothing like else !",
          img: "/2.jpg"
        },

        {
          text: "Crafting happiness since 1900",
          img: "/3.jpg"
        },
        {
          text: "Crafting happiness since 1900",
          img: "/4.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scopped>
#carousel-container {
  width: 100%;
  position: relative;
  overflow: hidden;

  .carousel {
    width: 100%;
    position: relative;

    .slide {
      width: 100%;
      @include for-phone-only {
        height: 250px;
      }
      @include for-tablet-portrait-up {
        height: 90vh;
      }
      background-size: cover;
      background-position: center;
    }

    video {
      min-width: 100%;
      height: 100%;
    }
  }

  .nav-helper {
    position: absolute;
    bottom: 12px;
    width: 300px;
    height: 300px;
    background: #fff;
    overflow: hidden;
    border-radius: 50%;
    transform: translate(-50%, 85%);
    left: 50%;

    p {
      position: absolute;
      top: 8px;
      font-size: 12px;
      left: 50%;
      transform: translateX(-50%);

      @include for-phone-only {
        display: none;
      }
    }

    @include for-phone-only {
      width: 140px;
      height: 140px;
    }

    .gif {
      background-image: url("https://static1.squarespace.com/static/5508a48ce4b05ef9ded22bbe/t/5c06a3a788251bb5298b9041/1547930497660/1510001409393.gif?format=500w");
      background-size: contain;
      width: 100px;
      height: 100px;
      background-position: top;
      margin: 0 auto;
      @include for-phone-only {
        display: none;
      }
    }

    img {
      display: block;
      margin: 0 auto;
    }

    .arrow_small {
      margin-top: 8px;
      animation: arrow-small 3s infinite ease-in-out;

      @include for-tablet-portrait-up {
        display: none;
      }
    }
    .arrow_big {
      animation: arrow-big 3s infinite ease-in-out;
      @include for-tablet-portrait-up {
        display: none;
      }
    }

    @keyframes arrow-small {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(2px);
      }
      50% {
        transform: translateY(3px);
      }
      75% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes arrow-big {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}
</style>
