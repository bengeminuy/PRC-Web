import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Welcome from "@/components/Welcome";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: Welcome,
      props: true
    }
  ]
});
