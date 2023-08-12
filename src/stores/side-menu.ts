import { defineStore } from "pinia";
import { Icon } from "../base-components/Lucide/Lucide.vue";

export interface Menu {
  icon: Icon;
  title: string;
  pageName?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

export const useSideMenuStore = defineStore("sideMenu", {
  state: (): SideMenuState => ({
    menu: [
      {
        icon: "Activity",
        pageName: "side-menu-page-1",
        title: "Dashboard",
      },
      {
        icon: "Activity",
        pageName: "Profile",
        title: "Tashkilot to'g'risida umumiy ma'lumot",
      },
      {
        icon: "Activity",
        pageName: "Equipment",
        title: "Jihozlar ro'yxati",
      },
      {
        icon: "Activity",
        pageName: "ComputerRoom",
        title: "Kompyuter sinflari",
      },
      {
        icon: "Activity",
        pageName: "Users",
        title: "Foydalanuvchilar",
      },
      {
        icon: "Activity",
        pageName: "Position",
        title: "Ma'lumotnomalar",
        subMenu: [
          {
            icon: "Activity",
            pageName: "Position",
            title: "Lavozimlar",
          },
          {
            icon: "Activity",
            pageName: "Project",
            title: "Loyihalar",
          },
        ],
      }
    ],
  }),
});
