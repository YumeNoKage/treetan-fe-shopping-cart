<style scoped>
.thumbnail {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 25px 25px 45px 0;
  height:200px;
}

.border-custome {
  border-radius: 0px 0px 45px 0px;
}
</style>

<template>
  <div class="card bg-white rounded-cs-3 border-0 shadow-card w-100 h-100">
    <div :style="`background-image: url(${dataParent.thumbnail})`" class="card-img-top thumbnail position-relative" :alt="dataParent.category">
      <div class="category bg-cyan-main position-absolute bottom-0 start-0 w-100 text-white px-3 py-2 border-custome ff-poppins fw-400 fs-14">{{dataParent.category}}</div>
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="ff-roboto fs-18 fw-500 text-grey-surface">{{dataParent.title}}</h5>
        <p class="ff-roboto fs-18 fw-500 mb-0 text-balck-main">{{cutText(dataParent.description, 0 , 45)}}{{dataParent.description.length > 45 ? '...' : ''}}</p>
      </div>
      <div>
        <p class="ff-poppins fs-26 fw-600 my-3 text-balck-main">{{ helperCurrency('USD').symbol + ' ' + helperMoneyFormatterNew(dataParent.price / (dataParent.discountPercentage / 100), 'USD') }}</p>
        <p class="mb-2"><span class="bg-red-surface rounded-cs-1 px-2 py-1 fs-14 text-red-main ff-roboto fw-500">{{dataParent.discountPercentage}} %</span> <s class="ff-roboto fs-14 fw-400 text-grey-surface">{{helperCurrency('USD').symbol + ' ' + helperMoneyFormatterNew(dataParent.price, 'USD') }}</s> </p>
        <p class="mb-3 d-flex align-content-center"><img src="@/assets/icon/star.svg" alt="star"> <span class="ff-roboto fs-14 fw-400 text-yellow-main ms-2">{{dataParent.rating}}</span></p>
        <button v-if="!dataParent.added" @click="dataParent.added = true; dataParent.qty = 1; $emit('addToCart', dataParent)" class="btn btn-primary bg-cyan-main border-0 shadow-btn bg-btn rounded-cs-2 w-100 d-flex align-items-center justify-content-center"><img src="@/assets/icon/shopping-cart.svg" alt="cart"> <span class="ff-mulish fs-18 fw text-white ms-2">Add To Cart</span></button>
        <div class="d-flex justify-content-center" v-else>
          <button @click="dataParent.qty -= 1; dataParent.qty == 0 ? (dataParent.added = false, $emit('removeFromCart', dataParent)) : null" class="btn-primary bg-cyan-surface border-0 rounded-2 d-flex align-items-center p-3"><img src="@/assets/icon/decrease.svg" alt="decrease"></button>
          <span class="text-center ff-roboto fs-20 fw-600 mt-2" style="width: 50px ">{{dataParent.qty}}</span>
          <button @click="dataParent.qty += 1" class="btn-primary bg-cyan-surface border-0 rounded-2 d-flex align-items-center p-3"><img src="@/assets/icon/increase.svg" alt="increase"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List Card',
  props: {
    data: Object
  },
  data(){
    return{
      dataParent : this.data
    }
  },
  emits:['addToCart', 'removeFromCart']
}
</script>