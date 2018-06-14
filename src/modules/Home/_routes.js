import _home from "./_components/home.vue";
import _applicationForm from "./_components/application-form.vue";
import _jobOpenings from "./_components/job-openings.vue";

export default [
  {
    path: "/",
    component: _home,
    name: "home"
  },
  {
    path: "/application-form",
    component: _applicationForm,
    name: "applicationForm"
  },
  {
    path: "/job-openings",
    component: _jobOpenings,
    name: "jobOpenings"
  }
];
