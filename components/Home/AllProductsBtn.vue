<template>
  <div id="footer">
    <div @click="showAllProducts" class="flex">
      <h4>SHOW ALL PRODUCTS</h4>
      <img src="/footer_arrow.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  methods: {
    showAllProducts: function() {
      this.$router.push("/products");
    }
  }
};
</script>

<style lang="scss" scopped>
#footer {
  width: 100%;
  background: #9e866a;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  display: none;
  @include for-phone-only {
    height: 57px;
    display: block;
  }
  height: 80px;
  color: white;

  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    h4 {
      font-family: "Exo", sans-serif !important;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.17em;
      color: #ffffff;
    }

    img {
      margin-left: 16px;
      transition: all 0.3s ease;
    }
  }
}
#footer:hover {
  img {
    transform: translateX(7px);
  }
}
</style>
