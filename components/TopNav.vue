<template>
  <div class="nav-top">
    <ul id="nav-phone">
      <li v-for="menu in menuItems" :key="menu.name">
        <nuxt-link :to="menu.link">{{ menu.name }}</nuxt-link>
      </li>
    </ul>
    <div class="info">
      <p>
        <span style="color:#9E866A; font-weight:500">Email:</span
        >kolhapur@kajavefurniture.com
      </p>
      <p>
        <span style="color:#9E866A; font-weight:500">Address:</span> 9/1/3,
        Lonar vasahat, Near Menon and Menon, Kolhapur, Maharashtra 416005
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Products",
          link: "/products"
        },
        {
          name: "Factory",
          link: "/factory"
        },

        {
          name: "About",
          link: "/about"
        },
        {
          name: "Contact Us",
          link: "/contact"
        },
        {
          name: "FAQ & Policy",
          link: "faq"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-top {
  background: #232323;
  width: 100%;
  #nav-phone {
    padding: 16px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    li {
      font-family: "Exo", sans-serif;
      display: inline;
      font-size: 12px;
      font-weight: normal;
      margin: 8px;
      color: #9e866a;
      cursor: pointer;
      a {
        color: #80776a;
        text-decoration: none;
        &.nuxt-link-exact-active {
          color: #adadad;
        }
      }
    }
  }
  .info {
    text-align: left;
    background: #000;
    padding: 16px 26px;
    p {
      font-family: "Exo", sans-serif;
      color: #898989;
      font-weight: 300;
      font-size: 14px;
      margin: 8px 0;
      letter-spacing: 0.05em;
    }
  }
}
</style>
