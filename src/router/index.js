import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import StudyAbroad from "../pages/StudyAbroad.vue";
import Booking from "../pages/Booking.vue";
import HighSchool from "../pages/HighSchool.vue";
import Template from "../pages/Template.vue";
import LanguageSchool from "../pages/LanguageSchool.vue";
import Blog from "../pages/Blog.vue"
import BlogPost from '../pages/BlogPost.vue'; 
import Document from "../pages/Document.vue";
import News from '../pages/News.vue';
import NewsPost from '../pages/NewsPost.vue'


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
    path: "/highSchool",
    name: "highSchool",
    component: HighSchool,
  },
  {
    path: "/languageSchool",
    name: "languageSchool",
    component: LanguageSchool,
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
    path: "/blog/posts/:slug", // 動態參數 slug
    name: "BlogPost",
    component: BlogPost,
  },
  {
    path: "/document",
    name: "document",
    component: Document,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/news/:id",
    name: "NewsPost",
    component: NewsPost,
  },
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
