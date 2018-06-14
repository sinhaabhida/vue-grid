<template>
  <div class="flex-container">
  
    <div class="box1">
      <router-link :to="{ name: 'applicationForm' }">
        <h1>Fresher</h1>
        <img src="../../../assets/images/graduation-hat .png">
        <p>Freshers click here to get a head start in your career.</p>
        <div class="job-btn1">Click Here to Apply</div>
      </router-link>
    </div>
  
    <div class="box2">
      <router-link :to="{ name: 'jobOpenings' }">
        <h1>Experience</h1>
        <img src="../../../assets/images/user.png">
        <p> Experienced Professionals click here to search for the right job.</p>
        <div class="job-btn2">Click Here to Apply</div>
      </router-link>
    </div>
  
  </div>
</template>

<script>
export default {
  mounted() {
    $('#container').attr('class', '');
    $('#container').addClass('main resbg container-fluid nopadding');

    $('#footer').attr('class', '');
    $('#footer').addClass('footer1 resfooter text-center');
  }
}
</script>
