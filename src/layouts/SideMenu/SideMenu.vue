<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import logoUrl from "../../assets/images/logo2.svg";
import Tippy from "../../base-components/Tippy";
import Lucide from "../../base-components/Lucide";
import TopBar from "../../components/TopBar";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import MobileMenu from "../../components/MobileMenu";
import { useSideMenuStore } from "../../stores/side-menu";
import {
  ProvideForceActiveMenu,
  forceActiveMenu,
  Route,
  FormattedMenu,
  nestedMenu,
  linkTo,
  enter,
  leave,
} from "./side-menu";
import { watch, reactive, ref, computed, onMounted, provide } from "vue";
import { useUserSession } from "../../stores/userSession";
const { getProfile } = useUserSession();
onMounted(() => {
  getProfile();
});
const route: Route = useRoute();
const router = useRouter();
let formattedMenu = reactive<Array<FormattedMenu | "divider">>([]);
const setFormattedMenu = (computedFormattedMenu: Array<FormattedMenu | "divider">) => {
  Object.assign(formattedMenu, computedFormattedMenu);
};
const sideMenuStore = useSideMenuStore();
const sideMenu = computed(() => nestedMenu(sideMenuStore.menu, route));
const windowWidth = ref(window.innerWidth);

provide<ProvideForceActiveMenu>("forceActiveMenu", (pageName: string) => {
  forceActiveMenu(route, pageName);
  setFormattedMenu(sideMenu.value);
});

watch(sideMenu, () => {
  setFormattedMenu(sideMenu.value);
});

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu;
  }
);

onMounted(() => {
  setFormattedMenu(sideMenu.value);

  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div class="py-2">
    <!-- <DarkModeSwitcher /> -->
    <!-- <MainColorSwitcher /> -->
    <MobileMenu />
    <div class="flex mt-[4.7rem] md:mt-0">
      <!-- BEGIN: Side Menu -->
      <nav
        class="side-nav pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px]"
      >
        <RouterLink
          :to="{ name: 'side-menu-page-1' }"
          class="flex items-center pt-4 intro-x"
        >
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="w-24 mx-auto"
            :src="logoUrl"
          />
        </RouterLink>
        <div class="my-6 side-nav__divider"></div>
        <ul>
          <!-- BEGIN: First Child -->
          <template v-for="(menu, menuKey) in formattedMenu">
            <li
              v-if="menu == 'divider'"
              type="li"
              :class="[
                'side-nav__divider my-6',

                // Animation
                `opacity-0 animate-[0.4s_ease-in-out_0.1s_intro-divider] animate-fill-mode-forwards animate-delay-${
                  (menuKey + 1) * 10
                }`,
              ]"
              :key="'divider-' + menuKey"
            ></li>
            <li v-else :key="menuKey">
              <Tippy
                as="a"
                :content="menu.title"
                :options="{
                  placement: 'right',
                }"
                :disable="windowWidth > 1260"
                :href="menu.subMenu
  ? '#'
  : ((pageName: string | undefined) => {
    try {
      return router.resolve({
        name: pageName,
      }).fullPath;
    } catch (err) {
      return '';
    }
  })(menu.pageName)
  "
                @click="(event: MouseEvent) => {
    event.preventDefault();
    linkTo(menu, router);
    setFormattedMenu([...formattedMenu]);
  }"
                :class="[
                  menu.active ? 'side-menu side-menu--active' : 'side-menu',

                  // Animation
                  {
                    [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                      (menuKey + 1) * 10
                    }`]: !menu.active,
                  },
                ]"
              >
                <div class="side-menu__icon">
                  <Lucide :icon="menu.icon" />
                </div>
                <div class="side-menu__title">
                  {{ menu.title }}
                  <div
                    v-if="menu.subMenu"
                    :class="[
                      'side-menu__sub-icon',
                      { 'transform rotate-180': menu.activeDropdown },
                    ]"
                  >
                    <Lucide icon="ChevronDown" />
                  </div>
                </div>
              </Tippy>
              <Transition @enter="enter" @leave="leave">
                <ul
                  v-if="menu.subMenu && menu.activeDropdown"
                  :class="{ 'side-menu__sub-open': menu.activeDropdown }"
                >
                  <li v-for="(subMenu, subMenuKey) in menu.subMenu" :key="subMenuKey">
                    <Tippy
                      as="a"
                      :content="subMenu.title"
                      :options="{
                        placement: 'right',
                      }"
                      :disable="windowWidth > 1260"
                      :href="subMenu.subMenu
  ? '#'
  : ((pageName: string | undefined) => {
    try {
      return router.resolve({
        name: pageName,
      }).fullPath;
    } catch (err) {
      return '';
    }
  })(subMenu.pageName)
  "
                      :class="[
                        subMenu.active ? 'side-menu side-menu--active' : 'side-menu',

                        // Animation
                        {
                          [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                            (subMenuKey + 1) * 10
                          }`]: !subMenu.active,
                        },
                      ]"
                      @click="(event: MouseEvent) => {
  event.preventDefault();
  linkTo(subMenu, router);
  setFormattedMenu([...formattedMenu]);
}"
                    >
                      <div class="side-menu__icon">
                        <Lucide :icon="subMenu.icon" />
                      </div>
                      <div class="side-menu__title">
                        {{ subMenu.title }}
                        <div
                          v-if="subMenu.subMenu"
                          :class="[
                            'side-menu__sub-icon',
                            { 'transform rotate-180': subMenu.activeDropdown },
                          ]"
                        >
                          <Lucide icon="ChevronDown" />
                        </div>
                      </div>
                    </Tippy>
                    <Transition @enter="enter" @leave="leave" v-if="subMenu.subMenu">
                      <ul
                        v-if="subMenu.subMenu && subMenu.activeDropdown"
                        :class="{
                          'side-menu__sub-open': subMenu.activeDropdown,
                        }"
                      >
                        <li
                          v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu"
                          :key="lastSubMenuKey"
                        >
                          <Tippy
                            as="a"
                            :content="lastSubMenu.title"
                            :options="{
                              placement: 'right',
                            }"
                            :disable="windowWidth > 1260"
                            :href="lastSubMenu.subMenu
  ? '#'
  : ((pageName: string | undefined) => {
    try {
      return router.resolve({
        name: pageName,
      }).fullPath;
    } catch (err) {
      return '';
    }
  })(lastSubMenu.pageName)
  "
                            :class="[
                              lastSubMenu.active
                                ? 'side-menu side-menu--active'
                                : 'side-menu',

                              // Animation
                              {
                                [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                  (lastSubMenuKey + 1) * 10
                                }`]: !lastSubMenu.active,
                              },
                            ]"
                            @click="(event: MouseEvent) => {
  event.preventDefault();
  linkTo(lastSubMenu, router);
  setFormattedMenu([...formattedMenu]);
}"
                          >
                            <div class="side-menu__icon">
                              <Lucide :icon="lastSubMenu.icon" />
                            </div>
                            <div class="side-menu__title">
                              {{ lastSubMenu.title }}
                            </div>
                          </Tippy>
                        </li>
                      </ul>
                    </Transition>
                  </li>
                </ul>
              </Transition>
            </li>
          </template>
          <!-- END: First Child -->
        </ul>
      </nav>
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div
        class="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block"
      >
        <TopBar />
        <RouterView />
      </div>
      <!-- END: Content -->
    </div>
  </div>
</template>
