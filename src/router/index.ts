import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/SideMenu/SideMenu.vue";
import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import Dahboard from "../pages/dashboard/Dashboard.vue";
import Equipment from "../pages/Equipment.vue";
import ComputerRoom from "../pages/ComputerRoom.vue";
import Users from "../pages/Users.vue";
import Login from "../pages/Login.vue";
import Profile from "../pages/profile/Profile.vue";
import ProfileUpdate from "../pages/profile/Update.vue";
import Position from "../pages/reference/Position.vue";
import Project from "../pages/reference/Project.vue";
const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "side-menu-page-1",
        component: Dahboard,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/profile/:id/update",
        name: "ProfileUpdate",
        component: ProfileUpdate,
      },
      {
        path: "/equipment",
        name: "Equipment",
        component: Equipment,
      },
      {
        path: "/computer-room",
        name: "ComputerRoom",
        component: ComputerRoom,
      },
      {
        path: "/users",
        name: "Users",
        component: Users,
      },
      {
        path: "/reference/position",
        name: "Position",
        component: Position,
      },
      {
        path: "/reference/project",
        name: "Project",
        component: Project,
      }
    ],
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
