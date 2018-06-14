<template>
  <!-- <div id="container">
    <nav class="navbar header" id='navmenu'>
      <div class=" container">
        <ul class="topmenu-left nopadding ">
          <li class="logo"><img src="../../assets/images/new.png"></li>
        </ul>
        <ul class="topmenu-right nopadding">
          <li class="login"><a href="applicant's data.html">Login</a></li>
        </ul>
      </div>
    </nav>
  
    <router-view></router-view>
  
    <div class="clearfix"></div>
    <div id="footer">
      <p> All Rights Reserved 2018</p>
    </div>
  
  </div> -->

<div id="demo">
  <my-vue-grid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
  </my-vue-grid>
</div>

</template>

<script>
import store from './_store';
import vueGrid from '../GlobalComponent/vue-grid.vue';
export default {
  created() {
    const STORE_KEY = '$_home';
    
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },
  components:{
    'my-vue-grid':vueGrid
  },
  data() {
    return{
      searchQuery: '',
    gridColumns: ['name', 'power','stamina'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity , stamina: 8000},
      { name: 'Bruce Lee', power: 9000 , stamina: 9000 },
      { name: 'Jackie Chan', power: 7000,  stamina: 10000},
      { name: 'Jet Li', power: 8000, stamina: 11000 }
    ]
    }
  }
}
</script>
