<template>
    <table>
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
          {{ key | capitalize }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
    	<tr>
      	<td v-for="key in columns">
        <input type="text" v-model="filterKeys[key]" @input="filterChange(key)" />
        </td>
      </tr>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    props: {
    data: Array,
    columns: Array,
  },
  data: function () {
    var sortOrders = {};
		var filterkeys = {};    
    this.columns.forEach(function (key) {
      sortOrders[key] = 1,
      filterkeys[key] = ""
      console.log(filterkeys);
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      filterKey:'',
      filterKeys: filterkeys
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase();
      var order = this.sortOrders[sortKey] || 1
      var data = this.data;
      if (Object.keys(this.filterKeys).some((key)=>{return this.filterKeys[key]!==""})) {
      
        data = data.filter((row) => {
          let boolval = Object.keys(row).every((key) => {
            return String(row[key]).toLowerCase().indexOf(String(this.filterKeys[key]).toLowerCase()) > -1 || this.filterKeys[key]==="";
          
          }) 
          /* console.log(boolval); */
          if(boolval) return true ;
          return false;
                   
         /* this.filterKeys.forEach((key)=>{
            String(row[key]).toLowerCase().indexOf(this.filterKeys[key])>-1;
          }) */
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
},
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + (str.substring(1)).toLowerCase()
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    filterChange(key){
    	this.filterKey=key;
    }
  }
}
</script>

<style scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

</style>


