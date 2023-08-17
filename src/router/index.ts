import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/SideMenu/SideMenu.vue";
import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import Dahboard from "../pages/dashboard/Dashboard.vue";
import ItemList from "../pages/item/List.vue";
import ItemCreate from "../pages/item/Create.vue";
import ItemUpdate from "../pages/item/Update.vue";
import ComputerRoom from "../pages/ComputerRoom.vue";
import Users from "../pages/Users.vue";
import Login from "../pages/Login.vue";
import Profile from "../pages/profile/Profile.vue";
import ProfileUpdate from "../pages/profile/Update.vue";
import Position from "../pages/reference/Position.vue";
import Project from "../pages/reference/Project.vue";
import ItemType from "../pages/reference/ItemType.vue";
import City from "../pages/soato/City.vue";
import Region from "../pages/soato/Region.vue";
import SchoolList from "../pages/school/List.vue";
import UserList from "../pages/school/User.vue";
import SchoolUser from "../pages/school/SchoolUser.vue";
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
        path: "/school/:id",
        name: "School",
        component: Profile,
      },
      {
        path: "/profile/:id/update",
        name: "ProfileUpdate",
        component: ProfileUpdate,
      },
      {
        path: "/item",
        name: "ItemList",
        component: ItemList,
      },
      {
        path: "/school/:id/item",
        name: "SchoolItemList",
        component: ItemList,
      },
      {
        path: "/item/create",
        name: "ItemCreate",
        component: ItemCreate,
      },
      {
        path: "/item/:id/update",
        name: "ItemUpdate",
        component: ItemUpdate,
      },
      {
        path: "/school/:id/item-create",
        name: "SchoolItemCreate",
        component: ItemCreate,
      },
      {
        path: "/computer-room",
        name: "ComputerRoom",
        component: ComputerRoom,
      },
      {
        path: "/school/:id/computer-room",
        name: "SchoolComputerRoom",
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
      },
      {
        path: "/reference/item-type",
        name: "ItemType",
        component: ItemType,
      },
      {
        path: "soato",
        name: "City",
        component: City,
      },
      {
        path: "soato/:id/region",
        name: "Region",
        component: Region,
      },
      {
        path: "soato/:id/school",
        name: "SchoolList",
        component: SchoolList,
      },
      {
        path: "soato/:id/user",
        name: "UserList",
        component: UserList,
      },
      {
        path: "school/:id/user",
        name: "SchoolUser",
        component: SchoolUser,
      },
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (to.name !== "login" && !token) next({ name: "login" });
  if (to.name == "login" && token) next({ name: "Profile" });
  else next();
});
export default router;
