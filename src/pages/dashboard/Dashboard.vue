<script setup lang="ts">
import _ from "lodash";
import { ref, provide, toRefs } from "vue";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import TinySlider, { TinySliderElement } from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import Litepicker from "../../base-components/Litepicker";
import ReportDonutChart from "../../components/ReportDonutChart";
import ReportLineChart from "../../components/ReportLineChart";
import ReportPieChart from "../../components/ReportPieChart";
import ReportDonutChart1 from "../../components/ReportDonutChart1";
import SimpleLineChart1 from "../../components/SimpleLineChart1";
import LeafletMap from "../../components/LeafletMap";
import { Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";
import { useSideMenuStore } from "../../stores/side-menu";
import { useRoute } from "vue-router";
let { breadcrumb } = toRefs(useSideMenuStore())
const route = useRoute()

breadcrumb.value = [
]
const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();

provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

const prevImportantNotes = () => {
  importantNotesRef.value?.tns.goTo("prev");
};
const nextImportantNotes = () => {
  importantNotesRef.value?.tns.goTo("next");
};
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
      
        <div class="col-span-12">
          <div class="items-center block h-10 intro-y sm:flex">
            <h2 class="mr-5 text-lg font-medium truncate">Maktablar ro'yhati</h2>
          </div>
          <div class="p-5 mt-12 intro-y box sm:mt-5">
            <div>
            Joylashuvi xaritada
            </div>
            <LeafletMap class="h-[500px] mt-5 rounded-md bg-slate-200" />
          </div>
        </div>
        
     
      </div>
    </div>
    <div class="col-span-12 2xl:col-span-3">
      <div class="pb-10 -mb-10 2xl:border-l">
        <div class="grid grid-cols-12 2xl:pl-6 gap-x-6 2xl:gap-x-0 gap-y-6">
          <!-- BEGIN: Transactions -->
          <div class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 2xl:mt-8">
            <div class="flex items-center h-10 intro-x">
              <h2 class="mr-5 text-lg font-medium truncate">Transactions</h2>
            </div>
            <div class="mt-5">
              <div v-for="(faker, fakerKey) in _.take(fakerData, 5)" :key="fakerKey" class="intro-x">
                <div class="flex items-center px-5 py-3 mb-3 box zoom-in">
                  <div class="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                    <img alt="Midone Tailwind HTML Admin Template" :src="faker.photos[0]" />
                  </div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">{{ faker.users[0].name }}</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      {{ faker.dates[0] }}
                    </div>
                  </div>
                  <div :class="{
                    'text-success': faker.trueFalse[0],
                    'text-danger': !faker.trueFalse[0],
                  }">
                    {{ faker.trueFalse[0] ? "+" : "-" }}${{ faker.totals[0] }}
                  </div>
                </div>
              </div>
              <a href=""
                class="block w-full py-3 text-center border border-dotted rounded-md intro-x border-slate-400 dark:border-darkmode-300 text-slate-500">
                View More
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>
