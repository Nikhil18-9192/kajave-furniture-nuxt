<template>
  <div>
    <Toolbar />
    <Nuxt />
    <TopNav id="topNav" />
    <GetQuote />
    <Footer
      :class="$route.path == '/' || $route.path == '/faq' ? 'footer' : ''"
    />
    <ProductBtn v-if="$route.path == '/' || $route.path == '/faq'" />
  </div>
</template>
<script>
import ProductBtn from "@/components/Home/AllProductsBtn";
export default {
  components: {
    ProductBtn
  }
};
</script>
<style lang="scss" scoped>
.footer {
  @include for-phone-only {
    padding-bottom: 60px;
  }
}
#topNav {
  display: none;
  @include for-phone-only {
    display: block;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
