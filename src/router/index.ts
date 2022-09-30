import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import MainNavbar from "@/components/MainNavbar.vue";

// check out https://ionicframework.com/docs/vue/navigation
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: MainNavbar,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        name: "Login",
        path: "login",
        component: () => import("@/views/LoginPage.vue"),
        beforeEnter: () => {
          const user = true;
          if (user) return "/home";
        },
      },
      {
        name: "Home",
        path: "home",
        component: () => import("@/views/HomePage.vue"),
        meta: { requiresAuth: true },
      },
      {
        name: "Upload",
        path: "upload",
        component: () => import("@/views/UploadPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        name: "Library",
        path: "library",
        component: () => import("@/views/LibraryPage.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const user = true;

  if (to.meta.requiresAuth && !user && to.name !== "Login") {
    return "/login";
  }
});

export default router;
