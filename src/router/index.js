import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/index",
    component: () => import("../layout.vue"),
  },
  {
    path: "/index",
    name: "index",
    uname: "知进教育",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/school",
    name: "school",
    uname: "学校概况",
    component: () => import("../views/school/school.vue"),
  },
  // 专业介绍二级start
  {
    path: "/basics",
    name: "basics",
    uname: "计算机学院",
    component: () => import("../views/specialty/basics/basics.vue"),
  },
  {
    path: "/web",
    name: "web",
    uname: "物联网学院",
    component: () => import("../views/specialty/web/web.vue"),
  },
  {
    path: "/bigdata",
    name: "bigdata",
    uname: "大数据学院",
    component: () => import("../views/specialty/bigdata/bigdata.vue"),
  },
  {
    path: "/operation",
    name: "operation",
    uname: "网络运营学院",
    component: () => import("../views/specialty/operation/operation.vue"),
  },
  // 二级end

  {
    path: "/specialty",
    name: "specialty",
    uname: "专业介绍",
    component: () => import("../views/specialty/specialty.vue"),
  },
  {
    path: "/education",
    name: "education",
    uname: "教育教学",
    component: () => import("../views/education/education.vue"),
  },
  {
    path: "/quality",
    name: "quality",
    uname: "素质教育",
    component: () => import("../views/quality/quality.vue"),
  },
  {
    path: "/employment",
    name: "employment",
    uname: "就业服务",
    component: () => import("../views/employment/employment.vue"),
  },
  {
    path: "/surroundings",
    name: "surroundings",
    uname: "校园环境",
    component: () => import("../views/surroundings/surroundings.vue"),
  },
  {
    path: "/plan",
    name: "plan",
    uname: "招生计划",
    component: () => import("../views/plan/plan.vue"),
  },
  {
    path: "*",
    name: "notFond",
    uname: "404页面",
    component: () => import("../views/notFond.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
