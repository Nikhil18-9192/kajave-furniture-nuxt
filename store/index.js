import app from "@/utils/firebase";
export const state = () => ({
  products: []
});

export const getters = {
  getProducts: function(state) {
    return state.products;
  }
};

export const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.products.push(payload);
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const res = await app.content.get({
      schemaKey: "5OXzHGfHvLxrybi3VGTq"
    });
    for (var key in res) {
      if (res.hasOwnProperty(key)) {
        var val = res[key];

        commit("SET_PRODUCTS", {
          name: val.name,
          description: val.description,
          imgs: val.imgs,
          type: val.type,
          img: val.img,
          id: key,
          number: parseInt(val.number, 10)
        });
      }
    }
  }
};
