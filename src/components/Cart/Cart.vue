<template>
  <div>
    <div class="card bg-white rounded-cs-3 border-0 shadow-card w-100 h-100 p-4">
      <h5 class="fs-22 fw-600 ff-poppins text-black-main mt-4">Shopping Cart</h5>
      <div class="mt-3 overflow-auto">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th class="ff-roboto text-grey-main fs-18 fw-500" scope="col">Name</th>
              <th class="ff-roboto text-grey-main fs-18 fw-500" scope="col">QTY</th>
              <th class="ff-roboto text-grey-main fs-18 fw-500" scope="col">Price</th>
              <th class="ff-roboto text-grey-main fs-18 fw-500" scope="col">Sub total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td class="ff-roboto text-grey-surface fs-14 fw-400">{{item.title}}</td>
              <td class="ff-roboto text-grey-surface fs-14 fw-400">{{item.qty}}</td>
              <td class="ff-roboto text-grey-surface fs-14 fw-400">{{helperCurrency('USD').symbol + ' ' + helperMoneyFormatterNew(item.price / (item.discountPercentage / 100), 'USD')}}</td>
              <td class="ff-roboto text-grey-surface fs-14 fw-400 text-end">{{helperCurrency('USD').symbol + ' ' + helperMoneyFormatterNew((item.price / (item.discountPercentage / 100) * item.qty), 'USD')}}</td>
            </tr>
            <tr v-if="data.length == 0">
              <td colspan="4"><img src="@/assets/icon/shopping-cart.svg" alt="Shopping Cart" style="filter: contrast(0.8)" class="w-50 d-flex mx-auto"></td>
            </tr>
            <tr>
              <td colspan="4">
                <hr>
              </td>
            </tr>
            <tr>
              <td class="ff-roboto text-grey-surface fs-14 fw-400" colspan="2">Total</td>
              <td class="ff-roboto text-black-main fs-20 fw-600 text-end" colspan="2">{{helperCurrency('USD').symbol + ' ' + helperMoneyFormatterNew(total , 'USD') }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="$emit('checkoutCart', data)" class="btn btn-primary bg-cyan-main border-0 shadow-btn bg-btn rounded-cs-2 w-100 d-flex align-items-center justify-content-center" :disabled="data.length == 0"><img src="@/assets/icon/shopping-cart.svg" alt="cart"> <span class="ff-mulish fs-18 fw text-white ms-2">Checkout</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List Cart',
  props: {
    data: Object
  },

  data(){
    return { 
      total: 0,
    }
  },

  emits:['checkoutCart'],

  watch: {
    data:{
      deep:true,
      handler: function(newData, oldData){
        this.total = this.getTotalPrice()
      }
    }
  },
  
  methods: {
    getTotalPrice(){
      let totalPrice = 0
      this.data.map(item => {
        totalPrice += (item.price / (item.discountPercentage / 100)) * item.qty
      })

      return totalPrice
    }
  }
}
</script>