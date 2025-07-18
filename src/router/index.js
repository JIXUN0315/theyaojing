import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import StudyAbroad from "../pages/StudyAbroad.vue";
import Booking from "../pages/Booking.vue";
import Template from "../pages/Template.vue";
import Blog from "../pages/Blog.vue"
import BlogPost from '../pages/BlogPost.vue'; // 對應你的文章詳細頁 component


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/studyAbroad",
    name: "studyAbroad",
    component: StudyAbroad,
  },
  {
    path: "/booking",
    name: "booking",
    component: Booking,
  },
  {
    path: "/template",
    name: "template",
    component: Template,
  },
  {
    path: "/blog",
    name: "template",
    component: Blog,
  },
  {
    path: '/blog/posts/:slug',   // 動態參數 slug
    name: 'BlogPost',
    component: BlogPost
  }
  // {
  //   path: '/template',
  //   name: 'template',
  //   component: Template,
  //   meta: { hideLayout: true }
  // }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
