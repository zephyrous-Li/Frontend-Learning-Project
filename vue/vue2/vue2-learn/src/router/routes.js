import Home from "@/views/Home/index.vue";
import Blog from "@/views/Blog/index.vue";
import About from "@/views/About/index.vue";
import Project from "@/views/Project/index.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Blog",
    component: Blog,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Project",
    component: Project,
  },
];
