<template>
  <div class="custom-container">
    <div class="row my-5 py-5" v-if="data != null">
      <div class="col-8">
        <div class="row">
          <div class="col-4 col-lg-3 col-md-6 col-sm-12 mb-3 pb-2" v-for="(item,index) in data" :key="index">
            <Card :data="item" @addToCart="cart.push(item)" @removeFromCart="removeItem($event)"/>
          </div>
        </div>
      </div>
      <div class="col-4">
          <Cart :data="cart"/>
      </div>
    </div>
  </div>
</template>

<script>

import Card from '@/components/Products/Card.vue'
import Cart from '@/components/Cart/Cart.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Card,
    Cart,
  },
  data(){
    return {
      data: null,
      cart: [],
    }
  },

  methods: {
    ...mapActions({
      getData : 'getData',
    }),

    async getListProduct(){
      let payload = {url : 'products'}
      let response = await this.getData(payload)

      if (response.status == 200) {
        this.data = response.data.products
      }
    },

    removeItem(target) {
      this.cart.find((item, index) => item.id == target.id ? this.cart.splice(index, 1) : null)
    }
  },

  mounted(){
    this.getListProduct()
  }
}
</script>
