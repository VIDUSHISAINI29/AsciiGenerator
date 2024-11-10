import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         redirect:"/page1"
      },
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "/page1",
               name: "page1",
               component: () => import("@/pages/Page1.vue"),
           
            },
         ],
      },
   ],
});

export default router;
