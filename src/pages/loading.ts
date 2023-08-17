import { ref, computed, watch, onMounted, toRefs } from "vue";
import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";
import { Dialog } from "../base-components/Headless";
import Table from "../base-components/Table";
import { ItemService, IItem } from "../services/item";
import { SchoolService, ISchool } from "../services/school";
import { useRoute } from "vue-router";
import Loading from "../base-components/Loading/Loading.vue";
import AppNotFound from "../base-components/AppNotFound.vue";
import { paginate } from "../globals";
import { useUserSession } from "../stores/userSession";
import { __VLS_internalComponent } from "./ComputerRoom.vue";

const { defineProps, defineEmits, defineExpose, defineOptions, defineSlots, defineModel, withDefaults } = await import('vue');
const route = useRoute();
const { user } = toRefs(useUserSession());
let routeId = computed(() => String(route.params.id) || user.value?.schoolId);
export let loading = ref(false);
export let list = ref<IItem[]>([]);
export let school = ref<ISchool>();
function getSchool() {
SchoolService.getById(routeId.value).then((res) => {
school.value = res.data;
});
}
onMounted(() => {
getList();
getSchool();
});
export let page = ref(1);
export let limit = ref(20);
export let total = ref(0);
let params = computed(() => {
return {
page: page.value - 1,
size: limit.value,
schoolId: routeId.value,
};
});

async function getList() {
try {
loading.value = true;
const res = await ItemService.getList(params.value);
list.value = res.data.content;
total.value = res.data.totalElements;
} catch (error) {
console.log(error);
} finally {
loading.value = false;
}
}
watch(() => params.value, () => {
getList();
});
export let currentItem = ref<IItem>();
export const deleteConfirmationModal = ref(false);
export async function deleteItem() {
try {
deleteConfirmationModal.value = false;
loading.value = true;
await ItemService.delete(currentItem.value?.id);
getList();
} catch (error) {
console.log(error);
}
finally {
loading.value = false;

}
}
export const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
const __VLS_componentsOption = {};
let __VLS_name!: 'ComputerRoom';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Loading', typeof __VLS_localComponents, "Loading", "Loading", "Loading"> &
__VLS_WithComponent<'Button', typeof __VLS_localComponents, "Button", "Button", "Button"> &
__VLS_WithComponent<'Table', typeof __VLS_localComponents, "Table", "Table", "Table"> &
__VLS_WithComponent<'NTag', typeof __VLS_localComponents, "NTag", "nTag", "n-tag"> &
__VLS_WithComponent<'RouterLink', typeof __VLS_localComponents, "RouterLink", "RouterLink", "RouterLink"> &
__VLS_WithComponent<'Lucide', typeof __VLS_localComponents, "Lucide", "Lucide", "Lucide"> &
__VLS_WithComponent<'AppNotFound', typeof __VLS_localComponents, "AppNotFound", "AppNotFound", "AppNotFound"> &
__VLS_WithComponent<'NPagination', typeof __VLS_localComponents, "NPagination", "nPagination", "n-pagination"> &
__VLS_WithComponent<'Dialog', typeof __VLS_localComponents, "Dialog", "Dialog", "Dialog">;
({} as __VLS_IntrinsicElements).h2; ({} as __VLS_IntrinsicElements).h2;
__VLS_components.Loading; __VLS_components.Loading;
// @ts-ignore
[Loading, Loading,];
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button;
// @ts-ignore
[Button, Button, Button, Button, Button, Button,];
__VLS_components.Table; __VLS_components.Table;
// @ts-ignore
[Table, Table,];
__VLS_components["Table.Thead"]; __VLS_components["Table.Thead"];
__VLS_components["Table.Tr"]; __VLS_components["Table.Tr"]; __VLS_components["Table.Tr"]; __VLS_components["Table.Tr"];
__VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"]; __VLS_components["Table.Th"];
__VLS_components["Table.Tbody"]; __VLS_components["Table.Tbody"];
__VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"]; __VLS_components["Table.Td"];
__VLS_components.NTag; __VLS_components.NTag; __VLS_components.nTag; __VLS_components.nTag; __VLS_components["n-tag"]; __VLS_components["n-tag"];
// @ts-ignore
[NTag, NTag,];
__VLS_components.RouterLink; __VLS_components.RouterLink;
// @ts-ignore
[RouterLink, RouterLink,];
__VLS_components.Lucide; __VLS_components.Lucide; __VLS_components.Lucide;
// @ts-ignore
[Lucide, Lucide, Lucide,];
({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a;
__VLS_components.AppNotFound;
// @ts-ignore
[AppNotFound,];
__VLS_components.NPagination; __VLS_components.nPagination; __VLS_components["n-pagination"];
// @ts-ignore
[NPagination,];
__VLS_components.Dialog; __VLS_components.Dialog;
// @ts-ignore
[Dialog, Dialog,];
__VLS_components["Dialog.Panel"]; __VLS_components["Dialog.Panel"];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["h2"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).h2;
const __VLS_2 = __VLS_1({ ...{}, class: ("mt-10 text-lg font-medium intro-y"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
(__VLS_ctx.school?.soatoResponse.nameUz);
(__VLS_ctx.school?.name);
}
{
let __VLS_4!: 'Loading' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Loading : (typeof __VLS_resolvedLocalAndGlobalComponents)['Loading'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({ ...{}, active: ((__VLS_ctx.loading)), style: ({}), }));
({} as { Loading: typeof __VLS_4; }).Loading;
({} as { Loading: typeof __VLS_4; }).Loading;
const __VLS_6 = __VLS_5({ ...{}, active: ((__VLS_ctx.loading)), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_10 = __VLS_9({ ...{}, class: ("grid grid-cols-12 gap-6 mt-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_14 = __VLS_13({ ...{}, class: ("flex flex-wrap items-center col-span-12 mt-2 intro-y xl:flex-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_18 = __VLS_17({ ...{}, class: ("flex items-center w-full mt-3 xl:w-auto xl:mt-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
}
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_22 = __VLS_21({ ...{}, class: ("flex justify-end col-span-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
{
let __VLS_24!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ onClick: {} as any, }, class: ("ml-auto"), variant: ("primary"), }));
({} as { Button: typeof __VLS_24; }).Button;
({} as { Button: typeof __VLS_24; }).Button;
const __VLS_26 = __VLS_25({ ...{ onClick: {} as any, }, class: ("ml-auto"), variant: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
let __VLS_28 = { 'click': __VLS_pickEvent(__VLS_27.emit!, 'click' as const, __VLS_componentProps(__VLS_25, __VLS_26).onClick) };
__VLS_28 = {
click: $event => {
__VLS_ctx.$router.push(`/school/${__VLS_ctx.school?.id}/item-create`);
}
};
}
}
{
const __VLS_29 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_31 = __VLS_30({ ...{}, class: ("col-span-12 overflow-auto intro-y 2xl:overflow-visible "), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
{
let __VLS_33!: 'Table' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Table : (typeof __VLS_resolvedLocalAndGlobalComponents)['Table'];
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...{}, class: ("border-spacing-y-[10px] border-separate -mt-2 text-center"), }));
({} as { Table: typeof __VLS_33; }).Table;
({} as { Table: typeof __VLS_33; }).Table;
const __VLS_35 = __VLS_34({ ...{}, class: ("border-spacing-y-[10px] border-separate -mt-2 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
{
const __VLS_37 = __VLS_ctx.Table.Thead;
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, }));
const __VLS_39 = __VLS_38({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
{
const __VLS_41 = __VLS_ctx.Table.Tr;
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, }));
const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
{
const __VLS_45 = __VLS_ctx.Table.Th;
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, class: ("border-b-0 whitespace-nowrap"), }));
const __VLS_47 = __VLS_46({ ...{}, class: ("border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
}
{
const __VLS_49 = __VLS_ctx.Table.Th;
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ ...{}, class: ("border-b-0 whitespace-nowrap"), }));
const __VLS_51 = __VLS_50({ ...{}, class: ("border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
}
{
const __VLS_53 = __VLS_ctx.Table.Th;
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }));
const __VLS_55 = __VLS_54({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
}
{
const __VLS_57 = __VLS_ctx.Table.Th;
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }));
const __VLS_59 = __VLS_58({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
}
{
const __VLS_61 = __VLS_ctx.Table.Th;
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }));
const __VLS_63 = __VLS_62({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
}
{
const __VLS_65 = __VLS_ctx.Table.Th;
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }));
const __VLS_67 = __VLS_66({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
}
{
const __VLS_69 = __VLS_ctx.Table.Th;
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }));
const __VLS_71 = __VLS_70({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71)!;
}
{
const __VLS_73 = __VLS_ctx.Table.Th;
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }));
const __VLS_75 = __VLS_74({ ...{}, class: ("text-center border-b-0 whitespace-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75)!;
}
}
}
if (__VLS_ctx.list.length) {
{
const __VLS_77 = __VLS_ctx.Table.Tbody;
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{}, }));
const __VLS_79 = __VLS_78({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_78));
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.list)!)) {
{
const __VLS_81 = __VLS_ctx.Table.Tr;
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, key: ((index)), class: ("intro-x"), }));
const __VLS_83 = __VLS_82({ ...{}, key: ((index)), class: ("intro-x"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
{
const __VLS_85 = __VLS_ctx.Table.Td;
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, class: ("first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }));
const __VLS_87 = __VLS_86({ ...{}, class: ("first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
(__VLS_ctx.paginate(index, __VLS_ctx.page, __VLS_ctx.limit));
}
{
const __VLS_89 = __VLS_ctx.Table.Td;
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }));
const __VLS_91 = __VLS_90({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91)!;
(item.nameUz);
}
{
const __VLS_93 = __VLS_ctx.Table.Td;
const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }));
const __VLS_95 = __VLS_94({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95)!;
(item.itemTypeResponse.nameUz);
}
{
const __VLS_97 = __VLS_ctx.Table.Td;
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }));
const __VLS_99 = __VLS_98({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
(item.invertNumber);
}
{
const __VLS_101 = __VLS_ctx.Table.Td;
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }));
const __VLS_103 = __VLS_102({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
(item.serialNumber);
}
{
const __VLS_105 = __VLS_ctx.Table.Td;
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }));
const __VLS_107 = __VLS_106({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
{
let __VLS_109!: 'NTag' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NTag : 'nTag' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nTag : 'n-tag' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-tag'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NTag'];
const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ ...{}, variant: ("info"), }));
({} as { NTag: typeof __VLS_109; }).NTag;
({} as { NTag: typeof __VLS_109; }).NTag;
const __VLS_111 = __VLS_110({ ...{}, variant: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
const __VLS_112 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111)!;
(item.count);
}
}
{
const __VLS_113 = __VLS_ctx.Table.Td;
const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }));
const __VLS_115 = __VLS_114({ ...{}, class: ("first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
(item.projectResponse?.name || '');
}
{
const __VLS_117 = __VLS_ctx.Table.Td;
const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{}, class: ("first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"), }));
const __VLS_119 = __VLS_118({ ...{}, class: ("first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
{
const __VLS_121 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_123 = __VLS_122({ ...{}, class: ("flex items-center justify-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123)!;
{
let __VLS_125!: 'RouterLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterLink : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterLink'];
const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ ...{}, to: ((`/item/${item.id}/update`)), class: ("flex items-center text-info mr-3"), href: ("#"), }));
({} as { RouterLink: typeof __VLS_125; }).RouterLink;
({} as { RouterLink: typeof __VLS_125; }).RouterLink;
const __VLS_127 = __VLS_126({ ...{}, to: ((`/item/${item.id}/update`)), class: ("flex items-center text-info mr-3"), href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127)!;
{
let __VLS_129!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ ...{}, icon: ("Edit"), class: ("w-4 h-4 mr-1"), }));
({} as { Lucide: typeof __VLS_129; }).Lucide;
const __VLS_131 = __VLS_130({ ...{}, icon: ("Edit"), class: ("w-4 h-4 mr-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
}
}
{
const __VLS_133 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_135 = __VLS_134({ ...{ onClick: {} as any, }, class: ("flex items-center text-danger"), href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
let __VLS_137 = { 'click': __VLS_pickEvent(__VLS_136.emit!, 'click' as const, __VLS_componentProps(__VLS_134, __VLS_135).onClick) };
__VLS_137 = {
click: $event => {
if (!((__VLS_ctx.list.length))) return;
__VLS_ctx.currentItem = item, __VLS_ctx.deleteConfirmationModal = true;
}
};
{
let __VLS_138!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{}, icon: ("Trash2"), class: ("w-4 h-4 mr-1"), }));
({} as { Lucide: typeof __VLS_138; }).Lucide;
const __VLS_140 = __VLS_139({ ...{}, icon: ("Trash2"), class: ("w-4 h-4 mr-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140)!;
}
}
}
}
}
// @ts-ignore
[school, school, loading, loading, $router, school, Table, Table, Table, Table, Table, Table, Table, Table, Table, Table, list, Table, list, Table, Table, paginate, page, limit, Table, Table, Table, Table, Table, Table, Table, currentItem, deleteConfirmationModal,];
}
}
}
else {
{
let __VLS_142!: 'AppNotFound' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.AppNotFound : (typeof __VLS_resolvedLocalAndGlobalComponents)['AppNotFound'];
const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ ...{}, }));
({} as { AppNotFound: typeof __VLS_142; }).AppNotFound;
const __VLS_144 = __VLS_143({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144)!;
}
}
}
{
const __VLS_146 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_148 = __VLS_147({ ...{}, class: ("flex justify-end"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148)!;
{
let __VLS_150!: 'NPagination' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NPagination : 'nPagination' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nPagination : 'n-pagination' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-pagination'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NPagination'];
const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ ...{}, class: ("mt-4"), page: ((__VLS_ctx.page)), itemCount: ((__VLS_ctx.total)), pageSizes: (([10, 20, 30, 40])), pageSize: ((__VLS_ctx.limit)), showSizePicker: (true), }));
({} as { NPagination: typeof __VLS_150; }).NPagination;
const __VLS_152 = __VLS_151({ ...{}, class: ("mt-4"), page: ((__VLS_ctx.page)), itemCount: ((__VLS_ctx.total)), pageSizes: (([10, 20, 30, 40])), pageSize: ((__VLS_ctx.limit)), showSizePicker: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
}
}
}
{
const __VLS_154 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_156 = __VLS_155({ ...{}, class: ("flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156)!;
}
}
}
{
let __VLS_158!: 'Dialog' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Dialog : (typeof __VLS_resolvedLocalAndGlobalComponents)['Dialog'];
const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{ onClose: {} as any, }, open: ((__VLS_ctx.deleteConfirmationModal)), }));
({} as { Dialog: typeof __VLS_158; }).Dialog;
({} as { Dialog: typeof __VLS_158; }).Dialog;
const __VLS_160 = __VLS_159({ ...{ onClose: {} as any, }, open: ((__VLS_ctx.deleteConfirmationModal)), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160)!;
let __VLS_162 = { 'close': __VLS_pickEvent(__VLS_161.emit!, 'close' as const, __VLS_componentProps(__VLS_159, __VLS_160).onClose) };
__VLS_162 = {
close: $event => {
__VLS_ctx.deleteConfirmationModal = false;
}
};
{
const __VLS_163 = __VLS_ctx.Dialog.Panel;
const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ ...{}, }));
const __VLS_165 = __VLS_164({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_164));
const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165)!;
{
const __VLS_167 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_169 = __VLS_168({ ...{}, class: ("p-5 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_168));
const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169)!;
{
let __VLS_171!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ ...{}, icon: ("XCircle"), class: ("w-16 h-16 mx-auto mt-3 text-danger"), }));
({} as { Lucide: typeof __VLS_171; }).Lucide;
const __VLS_173 = __VLS_172({ ...{}, icon: ("XCircle"), class: ("w-16 h-16 mx-auto mt-3 text-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173)!;
}
{
const __VLS_175 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_176 = __VLS_asFunctionalComponent(__VLS_175, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_177 = __VLS_176({ ...{}, class: ("mt-5 text-3xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
}
{
const __VLS_179 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_181 = __VLS_180({ ...{}, class: ("mt-2 text-slate-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_180));
const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181)!;
}
}
{
const __VLS_183 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_185 = __VLS_184({ ...{}, class: ("px-5 pb-8 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185)!;
{
let __VLS_187!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_188 = __VLS_asFunctionalComponent(__VLS_187, new __VLS_187({ ...{ onClick: {} as any, }, variant: ("outline-secondary"), type: ("button"), class: (" mr-4"), }));
({} as { Button: typeof __VLS_187; }).Button;
({} as { Button: typeof __VLS_187; }).Button;
const __VLS_189 = __VLS_188({ ...{ onClick: {} as any, }, variant: ("outline-secondary"), type: ("button"), class: (" mr-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_188));
const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189)!;
let __VLS_191 = { 'click': __VLS_pickEvent(__VLS_190.emit!, 'click' as const, __VLS_componentProps(__VLS_188, __VLS_189).onClick) };
__VLS_191 = {
click: $event => {
__VLS_ctx.deleteConfirmationModal = false;
}
};
}
{
let __VLS_192!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ...{ onClick: {} as any, }, variant: ("danger"), type: ("button"), }));
({} as { Button: typeof __VLS_192; }).Button;
({} as { Button: typeof __VLS_192; }).Button;
const __VLS_194 = __VLS_193({ ...{ onClick: {} as any, }, variant: ("danger"), type: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194)!;
let __VLS_196 = { 'click': __VLS_pickEvent(__VLS_195.emit!, 'click' as const, __VLS_componentProps(__VLS_193, __VLS_194).onClick) };
__VLS_196 = {
click: (__VLS_ctx.deleteItem)
};
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[page, total, limit, page, total, limit, deleteConfirmationModal, deleteConfirmationModal, deleteConfirmationModal, Dialog, deleteConfirmationModal, deleteItem,];
return __VLS_slots;
}
