import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "@/views/coaches/CoachDetail.vue";
import CoachesList from "@/views/coaches/CoachesList.vue";
import CoachRegistration from "@/views/coaches/CoachRegistration.vue";
import ContactCoach from "@/views/requests/ContactCoach.vue";
import RequestsReceived from "@/views/requests/RequestsReceived.vue";
import NotFound from "@/views/NotFound.vue";
import UserAuth from "@/views/auth/UserAuth.vue";

const routes = [
  { path: "/", redirect: "/coaches" },
  { path: "/coaches", component: CoachesList },
  {
    name: "coach-detail",
    path: "/coaches/:id",
    props: true,
    component: CoachDetail,
    children: [{ path: "contact", component: ContactCoach, name:"contact" }],
  },
  { path: "/register", component: CoachRegistration },
  { path: "/requests", component: RequestsReceived },
  { path: "/auth", component: UserAuth },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
