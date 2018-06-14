<template>
  <div class="flex-container1 jobsearch nopadding">
    <div>
      <form class="form-inline jobform ">
        <div class="form-group p-l20">
          <label class="m-r4">Job Title</label>
          <input type="text" class="form-control m-r15">
        </div>
        <div class="form-group">
          <label class="m-r4">Skill</label>
          <input type="text" class="form-control m-r15">
        </div>
        <div class="form-group">
          <label class="m-r4">Experience</label>
          <input type="text" class="form-control w130 reswidth m-r15">
        </div>
        <a role="button" type="submit" class="btn jobcustom-btn btn-spacer">Find Jobs</a>
      </form>
    </div>
  
    <div class="col-xs-12">
  
      <div>
        <h2 class="m-b25">Current Openings</h2>
      </div>
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <job-opening-element v-for="job in currentOpenings" :key="job.name" :job="job"></job-opening-element>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import JobOpeningElement from './job-opening-element.vue'
  
  export default {
    components: {
      JobOpeningElement
    },
    computed: {
      ...mapGetters({
        currentOpenings: '$_home/currentOpenings'
      })
    },
    created() {
      this.$store.dispatch('$_home/getCurrentOpenings');
    },
    mounted() {
      $("#container").attr("class", "");
      $("#container").addClass("jobmain container-fluid nopadding");
  
      $("#navmenu").addClass("custom-header");
  
      $("#footer").attr("class", "");
      $("#footer").addClass("footer1 text-center");
    },
    destroyed() {
      $("#navmenu").removeClass("custom-header");
    }
  };
</script>

<style scoped>
  html,
  body {
    height: 100vh;
  }
</style>
