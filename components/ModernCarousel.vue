<template>
  <div id="modern-c">
    <div class="c-slide" ref="modernslider">
      <img v-for="(currentImg, index) in imgs" :key="index" :src="currentImg" />
    </div>
    <div class="btns">
      <button
        @click="currentImg > 0 ? slidePrev() : ''"
        :class="[{ disabled: currentImg <= 0 }]"
      >
        Prev
      </button>
      <button
        @click="currentImg < imgs.length - 1 ? slideNext() : ''"
        :class="[{ disabled: currentImg >= imgs.length - 1 }]"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "/moderncarousel/1.jpg",
        "/moderncarousel/2.jpg",
        "/moderncarousel/3.jpg",
        "/moderncarousel/4.jpg",
        "/moderncarousel/5.jpg",
        "/moderncarousel/6.jpg"
      ],
      currentImg: 0
    };
  },
  methods: {
    slideNext: function() {
      const slider = document.querySelector(".c-slide");
      const allImgs = document.querySelectorAll(".c-slide img");
      const size = allImgs[0].clientWidth;
      this.currentImg++;

      slider.style.transform = `translateX(-${size * this.currentImg}px)`;
    },
    slidePrev: function() {
      const slider = document.querySelector(".c-slide");
      const allImgs = document.querySelectorAll(".c-slide img");
      const size = allImgs[0].clientWidth;
      this.currentImg--;

      slider.style.transform = `translateX(-${size * this.currentImg}px)`;
    }
  },
  computed: {}
};
</script>

<style lang="scss" scopped>
#modern-c {
  width: 100%;
  position: relative;
  margin-bottom: 32px;
  height: 70vh;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px;

  @include for-phone-only {
    height: 250px;

    width: 98%;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  .c-slide {
    width: auto;
    height: 100%;
    position: relative;
    transition: 0.3s linear all;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: #fff;

    img {
      width: 100%;
      height: 100%;
      min-width: 100%;
      object-fit: cover;
    }
  }

  .btns {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #f5f5f5;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0.5px 6px 15px rgba(0, 0, 0, 0.432);
    overflow: hidden;

    button {
      padding: 12px 20px;
      border: none;
      background: transparent;
      font-size: 12px;
      transition: 0.3s ease all;
      overflow: hidden;
      text-align: center;
      cursor: pointer;

      @include for-phone-only {
        padding: 6px 12px;
        font-size: 10px;
      }

      &:hover {
        background: #d8d8d8;
      }
    }

    .disabled {
      opacity: 0.5;
    }
  }
}
</style>
