<template>
    <table>
      <col v-for="key in columns" :width="key.width">
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key.fieldName && !key.checkBox}">
          {{ key.fieldName | capitalize }}
          <span v-if="!key.checkBox" class="arrow" :class="sortOrders[key.fieldName] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
    	<tr>
      	<td v-for="key in columns">
        <input style="width:100%" v-if="!key.suppressFilter" type="text" v-model="filterKeys[key.fieldName]" @input="filterChange(key.fieldName)" />
        <label v-if="key.checkBox"><input type="checkbox" @change="allSelected=!allSelected"> &nbsp;Select All</label>
        </td>
      </tr>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          <section v-if="key.checkBox">
            <input class="chkBoxClass" v-model="selectedData" :value="entry" type="checkbox">
          </section>
          <section v-else>
            {{entry[key.fieldName]}}
          </section>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array
  },
  data: function() {
    var sortOrders = {};
    var filterkeys = {};
    this.columns.forEach(function(key) {
      (sortOrders[key.fieldName] = 1), (filterkeys[key.fieldName] = "");
      console.log(filterkeys);
    });
    return {
      sortKey: "",
      sortOrders: sortOrders,
      filterKey: "",
      filterKeys: filterkeys,
      allSelected:false,
      selectedData:[]
    };
  },
  computed: {
    filteredData: function() {
      var sortKey = this.sortKey;
      var filterKey = this.filterKey && this.filterKey.toLowerCase();
      var order = this.sortOrders[sortKey] || 1;
      var data = this.data;
      if (
        Object.keys(this.filterKeys).some(key => {
          return this.filterKeys[key] !== "";
        })
      ) {
        data = data.filter(row => {
          return Object.keys(row).every(key => {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(String(this.filterKeys[key]).toLowerCase()) > -1 ||
              this.filterKeys[key] === ""
            );
          });
          
        });
      }
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
  },
  methods: {
    sortBy: function(setkey) {
      // console.log(setkey);
      if (!setkey.checkBox) {
        let key = setkey.fieldName;
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1;
      }
    },
    filterChange(key) {
      this.filterKey = key;
    },
    selectAllCheckBox() {
      console.log('select all called');
       $(".checkBoxClass").prop('checked', true);
    }
  },
  watch:{
    allSelected(){
      if(this.allSelected){
        this.selectedData=[];
        this.data.forEach((row)=>{
          this.selectedData.push(row);
        })
      }
      else{
        console.log('deselecting all');
        this.selectedData=[];
      }
    },
    selectedData(){
      console.log(this.selectedData);
    }
  }
};
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
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
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

.chkBoxClass{

}
</style>


