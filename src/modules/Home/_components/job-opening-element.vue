<template>
  <tr class="trhover">
    <td><a href="#">{{ job.name }}</a></td>
    <td>{{ job.skills }}</td>
    <td>{{ job.experiance }}</td>
    <td class="text-right applybtn"><a type="submit" class="btn  jobcustom-btn" href="form.html" role="button">Apply Now</a></td>
  </tr>
</template>

<script>
export default {
  props: ['job']
}
</script>
