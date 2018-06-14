<template>
  <div class=" container form-bg">
  
    <h2 class="text-center">Application Form</h2>
    <hr>
    <form>
      <h3>Personal Details</h3>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group col-lg-6 col-md-6 col-sm-6 nopadding">
        <label>Position</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group col-lg-6 col-md-6 col-sm-6 resno-padding">
        <label>Email-address:</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group col-lg-6 col-md-6 col-sm-6 nopadding">
        <label>Phone Number</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group col-lg-6 col-md-6 col-sm-6 resno-padding">
        <label>Date of Birth</label>
        <input type="date" class="form-control">
      </div>
      <div class="form-inline">
        <label class="m-r15">Gender</label>
        <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" value="option1"> Male
            </label>
        <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="option2"> Female
            </label>
      </div>
      <div class="form-group col-lg-6 col-md-6 col-sm-6 nopadding">
        <label>Hometown</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group col-lg-6 col-md-6 col-sm-6 resno-padding">
        <label>Current City</label>
        <input type="text" class="form-control">
      </div>
      <h3 class="m-t40">Professional Details</h3>
      <div class="form-inline">
        <label>Current Employment Status</label>
        <label class="checkbox-inline rp-l0">
              <select class="form-control">
                <option>Fresher</option>
                <option>Freelancer</option>
                <option>Working</option>
                <option>Other</option>
              </select>
            </label>
      </div>
      <div class="form-group">
        <label>Skills</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Project Links(If any)</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Resume</label>
        <input type="file">
      </div>
  
      <h3 class="m-t40">References</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
          </tr>
          <tr>
            <td><input type="text" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
          </tr>
        </tbody>
      </table>
  
      <div class="text-center">
        <button type="submit" class="btn jobcustom-btn m-b40 btn-spacer">Submit</button>
        <button type="submit" class="btn jobcustom-btn m-b40 btn-spacer">Cancel</button>
      </div>
    </form>
  
  </div>
</template>

<script>
  export default {
    mounted() {
      $('#container').attr('class', '');
      $('#container').addClass('container-fluid formmain nopadding');
  
      $('#footer').attr('class', '');
      $('#footer').addClass('footer2 text-center');
    }
  }
</script>
