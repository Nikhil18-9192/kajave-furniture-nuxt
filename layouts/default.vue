<template>
  <div>
    <Toolbar />
    <Nuxt />
    <TopNav id="topNav" />
    <GetQuote />
    <Footer
      :class="$route.path == '/' || $route.path == '/faq' ? 'footer' : ''"
    />
    <FooterHome v-if="$route.path == '/' || $route.path == '/faq'" />
  </div>
</template>
<script>
import FooterHome from "@/components/Home/Footer";
export default {
  components: {
    FooterHome
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
