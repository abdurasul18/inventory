<script setup lang="ts">
import _ from "lodash";
import { ref, toRefs, onMounted } from "vue";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Tab } from "../../base-components/Headless";
import Loading from "../../base-components/Loading/Loading.vue";
import { useUserSession } from "../../stores/userSession";
import  { useSideMenuStore } from "../../stores/side-menu";
let  { breadcrumb } = toRefs(useSideMenuStore())
breadcrumb.value = [
    {
        title: "Tashkilot ma'lumotlari",
        url: "/profile"
    }
]
let { user } = toRefs(useUserSession());
let { getProfile } = useUserSession();
let loading = ref(false);
async function getSchool() {
    try {
        loading.value = true
        await getProfile()
    }
    finally {
        loading.value = false
    }
}
onMounted(() => {
    getSchool()
})
</script>

<template>
    <Loading>
        <div class="flex items-center mt-8 intro-y">
            <h2 class="mr-auto text-lg font-medium">Tashkilot to'g'risida umumiy ma'lumot</h2>
            <Button @click="$router.push('/profile/5/update')" variant="primary">
                <Lucide icon="Edit" class="w-4 h-4 mr-2" /> Tahrirlash
            </Button>
        </div>
        <Tab.Group>
            <!-- BEGIN: Profile Info -->
            <div class="px-5 pt-5 mt-5 intro-y box">
                <div class="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
                    <div class="flex items-center justify-center flex-1 px-5 lg:justify-start">
                        <div class="ml-5">
                            <div class="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
                                {{ user?.soatoResponse?.nameUz }} {{ user?.name }}
                            </div>
                            <div class="text-slate-500">{{ user?.shortName }}</div>
                            <div class="text-slate"> {{ user?.schoolTypeResponse?.name }} </div>
                        </div>
                    </div>
                    <div
                        class="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0">
                        <div class="font-medium text-center lg:text-left lg:mt-3">
                            Tashkilot bilan aloqa
                        </div>
                        <div class="flex flex-col items-center justify-center mt-4 lg:items-start">
                            <div class="flex items-center truncate sm:whitespace-normal">
                                <Lucide icon="Mail" class="w-4 h-4 mr-2" />
                                <a :href="`mailto:${user?.email}`"> {{ user?.email }} </a>
                            </div>
                            <div class="flex items-center mt-3 truncate sm:whitespace-normal">
                                <Lucide icon="PhoneCall" class="w-4 h-4 mr-2" />
                                <a :href="`tel:${user?.phone}`"> {{ user?.phone }} </a>
                            </div>
                            <div class="flex items-center mt-3 truncate sm:whitespace-normal">
                                <Lucide icon="Globe2" class="w-4 h-4 mr-2" />
                                <a :href="user?.email"> {{ user?.email }} </a>
                            </div>
                            <div class="flex items-center mt-3 truncate sm:whitespace-normal">
                                <Lucide icon="Locate" class="w-4 h-4 mr-2" />
                                {{ user?.address }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex items-center justify-center flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0">
                        <div class="w-20 py-3 text-center rounded-md">
                            <div class="text-xl font-medium text-primary">{{ user?.studentCount }}</div>
                            <div class="text-slate-500">O'quvchilar soni</div>
                        </div>
                        <div class="w-20 py-3 text-center rounded-md">
                            <div class="text-xl font-medium text-primary">{{ user?.capacity || 0 }}</div>
                            <div class="text-slate-500">Maktab sig'imi </div>
                        </div>
                        <div class="w-20 py-3 text-center rounded-md">
                            <div class="text-xl font-medium text-danger"> {{ user?.needPc || 0 }}</div>
                            <div class="text-slate-500">Ehtiyoj</div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="grid grid-cols-2 mb-4 gap-4">
                <div class="px-5 pt-5 mt-3 pb-4 intro-y box">
                    <div>
                        <n-list hoverable class="">
                            <n-list-item>
                                <strong class="mx-auto">{{ user?.name || '-' }}</strong>
                            </n-list-item>
                            <n-list-item>
                                <span> Maktab raqami </span>
                                <span> {{ user?.number || '-' }} </span>
                            </n-list-item>
                            <n-list-item>
                                <span> Maktab turi </span>
                                <span> {{ user?.schoolTypeResponse?.name || '-' }} </span>
                            </n-list-item>
                            <n-list-item>
                                <span> Maktab qisqa nomi</span>
                                <span> {{ user?.shortName || '-' }} </span>
                            </n-list-item>
                            <n-list-item>
                                <span> Davlat maktabi/ Xususiy maktab </span>
                                <span> {{ user?.govermental == 0 ? 'Davlat maktabi' : 'Xususiy maktab' }} </span>
                            </n-list-item>
                            <n-list-item>
                                <span> INN </span>
                                <span> {{ user?.inn }} </span>
                            </n-list-item>
                            <n-list-item>
                                <span> Manzil </span>
                                <span> {{ user?.soatoResponse?.nameUz || '-' }} {{ user?.address }} </span>
                            </n-list-item>
                        </n-list>

                    </div>

                </div>

                <div class="px-5 pt-5 mt-3 intro-y box">
                    <div class="">
                        <n-list hoverable>
                            <n-list-item>
                                <strong class="mx-auto"> Rahbar </strong>
                            </n-list-item>
                            <n-list-item>
                                <span> FIO </span>
                                <span> {{ user?.headLastname }} {{ user?.headName }} {{ user?.headSecondName }}
                                </span>
                            </n-list-item>
                            <n-list-item>
                                <span> Lavozimi </span>
                                <span> {{ user?.headPositionResponse }} </span>
                            </n-list-item>
                            <n-list-item>
                                <strong class="mx-auto"> AKT mas'ul shaxs </strong>
                            </n-list-item>
                            <n-list-item>
                                <span> FIO </span>
                                <span> {{ user?.aktLastname }} {{ user?.aktName }} {{ user?.aktSecondName }} </span>
                            </n-list-item>
                            <n-list-item>
                                <span> Lavozimi </span>
                                <span> {{ user?.aktPositionResponse }} </span>
                            </n-list-item>
                            <n-list-item>
                                <span> Telefon raqami </span>
                                <span> {{ user?.aktPhone }} </span>
                            </n-list-item>
                        </n-list>
                    </div>

                </div>
            </div>
        </Tab.Group>
    </Loading>
</template>
<style>
.n-list-item__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.n-list-item__main span {
    max-width: 70%;
    margin-left: 5px;
    text-align: right;
}
</style>