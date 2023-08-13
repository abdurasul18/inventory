import { ref, toRefs, onMounted } from "vue";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Tab } from "../../base-components/Headless";
import Loading from "../../base-components/Loading/Loading.vue";
import { useUserSession } from "../../stores/userSession";
import { __VLS_internalComponent } from "./Profile.vue";

const { defineProps, defineEmits, defineExpose, defineOptions, defineSlots, defineModel, withDefaults } = await import('vue');
export let { user } = toRefs(useUserSession());
let { getProfile } = useUserSession();
let loading = ref(false);
async function getSchool() {
try {
loading.value = true;
await getProfile();
}
finally {
loading.value = false;
}
}
onMounted(() => {
getSchool();
});
export const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
const __VLS_componentsOption = {};
let __VLS_name!: 'Profile';
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
__VLS_WithComponent<'Lucide', typeof __VLS_localComponents, "Lucide", "Lucide", "Lucide"> &
__VLS_WithComponent<'NList', typeof __VLS_localComponents, "NList", "nList", "n-list"> &
__VLS_WithComponent<'NListItem', typeof __VLS_localComponents, "NListItem", "nListItem", "n-list-item">;
__VLS_components.Loading; __VLS_components.Loading;
// @ts-ignore
[Loading, Loading,];
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).h2; ({} as __VLS_IntrinsicElements).h2;
__VLS_components.Button; __VLS_components.Button;
// @ts-ignore
[Button, Button,];
__VLS_components.Lucide; __VLS_components.Lucide; __VLS_components.Lucide; __VLS_components.Lucide; __VLS_components.Lucide;
// @ts-ignore
[Lucide, Lucide, Lucide, Lucide, Lucide,];
__VLS_components["Tab.Group"]; __VLS_components["Tab.Group"];
({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a;
__VLS_components.NList; __VLS_components.NList; __VLS_components.NList; __VLS_components.NList; __VLS_components.nList; __VLS_components.nList; __VLS_components.nList; __VLS_components.nList; __VLS_components["n-list"]; __VLS_components["n-list"]; __VLS_components["n-list"]; __VLS_components["n-list"];
// @ts-ignore
[NList, NList, NList, NList,];
__VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.NListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components.nListItem; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"]; __VLS_components["n-list-item"];
// @ts-ignore
[NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem, NListItem,];
({} as __VLS_IntrinsicElements).strong; ({} as __VLS_IntrinsicElements).strong; ({} as __VLS_IntrinsicElements).strong; ({} as __VLS_IntrinsicElements).strong; ({} as __VLS_IntrinsicElements).strong; ({} as __VLS_IntrinsicElements).strong;
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
{
let __VLS_0!: 'Loading' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Loading : (typeof __VLS_resolvedLocalAndGlobalComponents)['Loading'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { Loading: typeof __VLS_0; }).Loading;
({} as { Loading: typeof __VLS_0; }).Loading;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{}, class: ("flex items-center mt-8 intro-y"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["h2"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).h2;
const __VLS_10 = __VLS_9({ ...{}, class: ("mr-auto text-lg font-medium"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
}
{
let __VLS_12!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ onClick: {} as any, }, variant: ("primary"), }));
({} as { Button: typeof __VLS_12; }).Button;
({} as { Button: typeof __VLS_12; }).Button;
const __VLS_14 = __VLS_13({ ...{ onClick: {} as any, }, variant: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
let __VLS_16 = { 'click': __VLS_pickEvent(__VLS_15.emit!, 'click' as const, __VLS_componentProps(__VLS_13, __VLS_14).onClick) };
__VLS_16 = {
click: $event => {
__VLS_ctx.$router.push('/profile/5/update');
}
};
{
let __VLS_17!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{}, icon: ("Edit"), class: ("w-4 h-4 mr-2"), }));
({} as { Lucide: typeof __VLS_17; }).Lucide;
const __VLS_19 = __VLS_18({ ...{}, icon: ("Edit"), class: ("w-4 h-4 mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19)!;
}
}
}
{
const __VLS_21 = __VLS_ctx.Tab.Group;
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, }));
const __VLS_23 = __VLS_22({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
{
const __VLS_25 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_27 = __VLS_26({ ...{}, class: ("px-5 pt-5 mt-5 intro-y box"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
{
const __VLS_29 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_31 = __VLS_30({ ...{}, class: ("flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_35 = __VLS_34({ ...{}, class: ("flex items-center justify-center flex-1 px-5 lg:justify-start"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
{
const __VLS_37 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_39 = __VLS_38({ ...{}, class: ("ml-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
{
const __VLS_41 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_43 = __VLS_42({ ...{}, class: ("w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
(__VLS_ctx.user?.soatoResponse?.nameUz);
(__VLS_ctx.user?.name);
}
{
const __VLS_45 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_47 = __VLS_46({ ...{}, class: ("text-slate-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
(__VLS_ctx.user?.shortName);
}
{
const __VLS_49 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_51 = __VLS_50({ ...{}, class: ("text-slate"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
(__VLS_ctx.user?.schoolTypeResponse?.name);
}
}
}
{
const __VLS_53 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_55 = __VLS_54({ ...{}, class: ("flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
{
const __VLS_57 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_59 = __VLS_58({ ...{}, class: ("font-medium text-center lg:text-left lg:mt-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
}
{
const __VLS_61 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_63 = __VLS_62({ ...{}, class: ("flex flex-col items-center justify-center mt-4 lg:items-start"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
{
const __VLS_65 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_67 = __VLS_66({ ...{}, class: ("flex items-center truncate sm:whitespace-normal"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
{
let __VLS_69!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ ...{}, icon: ("Mail"), class: ("w-4 h-4 mr-2"), }));
({} as { Lucide: typeof __VLS_69; }).Lucide;
const __VLS_71 = __VLS_70({ ...{}, icon: ("Mail"), class: ("w-4 h-4 mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71)!;
}
{
const __VLS_73 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_75 = __VLS_74({ ...{}, href: ((`mailto:${__VLS_ctx.user?.email}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75)!;
(__VLS_ctx.user?.email);
}
}
{
const __VLS_77 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_79 = __VLS_78({ ...{}, class: ("flex items-center mt-3 truncate sm:whitespace-normal"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
{
let __VLS_81!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, icon: ("PhoneCall"), class: ("w-4 h-4 mr-2"), }));
({} as { Lucide: typeof __VLS_81; }).Lucide;
const __VLS_83 = __VLS_82({ ...{}, icon: ("PhoneCall"), class: ("w-4 h-4 mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
}
{
const __VLS_85 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_87 = __VLS_86({ ...{}, href: ((`tel:${__VLS_ctx.user?.phone}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
(__VLS_ctx.user?.phone);
}
}
{
const __VLS_89 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_91 = __VLS_90({ ...{}, class: ("flex items-center mt-3 truncate sm:whitespace-normal"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91)!;
{
let __VLS_93!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ ...{}, icon: ("Globe2"), class: ("w-4 h-4 mr-2"), }));
({} as { Lucide: typeof __VLS_93; }).Lucide;
const __VLS_95 = __VLS_94({ ...{}, icon: ("Globe2"), class: ("w-4 h-4 mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95)!;
}
{
const __VLS_97 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, {});
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_99 = __VLS_98({ ...{}, href: ((__VLS_ctx.user?.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
(__VLS_ctx.user?.email);
}
}
{
const __VLS_101 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_103 = __VLS_102({ ...{}, class: ("flex items-center mt-3 truncate sm:whitespace-normal"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
{
let __VLS_105!: 'Lucide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Lucide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Lucide'];
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{}, icon: ("Locate"), class: ("w-4 h-4 mr-2"), }));
({} as { Lucide: typeof __VLS_105; }).Lucide;
const __VLS_107 = __VLS_106({ ...{}, icon: ("Locate"), class: ("w-4 h-4 mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
}
(__VLS_ctx.user?.address);
}
}
}
{
const __VLS_109 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_111 = __VLS_110({ ...{}, class: ("flex items-center justify-center flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
const __VLS_112 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111)!;
{
const __VLS_113 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_115 = __VLS_114({ ...{}, class: ("w-20 py-3 text-center rounded-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
{
const __VLS_117 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_119 = __VLS_118({ ...{}, class: ("text-xl font-medium text-primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
(__VLS_ctx.user?.studentCount);
}
{
const __VLS_121 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_123 = __VLS_122({ ...{}, class: ("text-slate-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123)!;
}
}
{
const __VLS_125 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_127 = __VLS_126({ ...{}, class: ("w-20 py-3 text-center rounded-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127)!;
{
const __VLS_129 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_131 = __VLS_130({ ...{}, class: ("text-xl font-medium text-primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
(__VLS_ctx.user?.capacity || 0);
}
{
const __VLS_133 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_135 = __VLS_134({ ...{}, class: ("text-slate-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
}
}
{
const __VLS_137 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_139 = __VLS_138({ ...{}, class: ("w-20 py-3 text-center rounded-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_138));
const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139)!;
{
const __VLS_141 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_143 = __VLS_142({ ...{}, class: ("text-xl font-medium text-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143)!;
(__VLS_ctx.user?.needPc || 0);
}
{
const __VLS_145 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_147 = __VLS_146({ ...{}, class: ("text-slate-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
}
}
}
}
}
{
const __VLS_149 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_151 = __VLS_150({ ...{}, class: ("grid grid-cols-2 mb-4 gap-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151)!;
{
const __VLS_153 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_155 = __VLS_154({ ...{}, class: ("px-5 pt-5 mt-3 pb-4 intro-y box"), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155)!;
{
const __VLS_157 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_159 = __VLS_158({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_158));
const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159)!;
{
let __VLS_161!: 'NList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NList : 'nList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nList : 'n-list' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NList'];
const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({ ...{}, hoverable: (true), class: (""), }));
({} as { NList: typeof __VLS_161; }).NList;
({} as { NList: typeof __VLS_161; }).NList;
const __VLS_163 = __VLS_162({ ...{}, hoverable: (true), class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163)!;
{
let __VLS_165!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ ...{}, }));
({} as { NListItem: typeof __VLS_165; }).NListItem;
({} as { NListItem: typeof __VLS_165; }).NListItem;
const __VLS_167 = __VLS_166({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_166));
const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
{
const __VLS_169 = ({} as __VLS_IntrinsicElements)["strong"];
const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, {});
({} as __VLS_IntrinsicElements).strong;
({} as __VLS_IntrinsicElements).strong;
const __VLS_171 = __VLS_170({ ...{}, class: ("mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_170));
const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171)!;
(__VLS_ctx.user?.name || '-');
}
}
{
let __VLS_173!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, }));
({} as { NListItem: typeof __VLS_173; }).NListItem;
({} as { NListItem: typeof __VLS_173; }).NListItem;
const __VLS_175 = __VLS_174({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_174));
const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175)!;
{
const __VLS_177 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_179 = __VLS_178({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_178));
const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179)!;
}
{
const __VLS_181 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_183 = __VLS_182({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_182));
const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183)!;
(__VLS_ctx.user?.number || '-');
}
}
{
let __VLS_185!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ ...{}, }));
({} as { NListItem: typeof __VLS_185; }).NListItem;
({} as { NListItem: typeof __VLS_185; }).NListItem;
const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187)!;
{
const __VLS_189 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_191 = __VLS_190({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_190));
const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191)!;
}
{
const __VLS_193 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_194 = __VLS_asFunctionalComponent(__VLS_193, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_195 = __VLS_194({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_194));
const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195)!;
(__VLS_ctx.user?.schoolTypeResponse?.name || '-');
}
}
{
let __VLS_197!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_198 = __VLS_asFunctionalComponent(__VLS_197, new __VLS_197({ ...{}, }));
({} as { NListItem: typeof __VLS_197; }).NListItem;
({} as { NListItem: typeof __VLS_197; }).NListItem;
const __VLS_199 = __VLS_198({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_198));
const __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199)!;
{
const __VLS_201 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_202 = __VLS_asFunctionalComponent(__VLS_201, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_203 = __VLS_202({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_202));
const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_201, __VLS_203)!;
}
{
const __VLS_205 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_207 = __VLS_206({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_206));
const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207)!;
(__VLS_ctx.user?.shortName || '-');
}
}
{
let __VLS_209!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{}, }));
({} as { NListItem: typeof __VLS_209; }).NListItem;
({} as { NListItem: typeof __VLS_209; }).NListItem;
const __VLS_211 = __VLS_210({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_210));
const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211)!;
{
const __VLS_213 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_214 = __VLS_asFunctionalComponent(__VLS_213, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_215 = __VLS_214({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_214));
const __VLS_216 = __VLS_pickFunctionalComponentCtx(__VLS_213, __VLS_215)!;
}
{
const __VLS_217 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_218 = __VLS_asFunctionalComponent(__VLS_217, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_219 = __VLS_218({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_218));
const __VLS_220 = __VLS_pickFunctionalComponentCtx(__VLS_217, __VLS_219)!;
(__VLS_ctx.user?.govermental == 0 ? 'Davlat maktabi' : 'Xususiy maktab');
}
}
{
let __VLS_221!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221({ ...{}, }));
({} as { NListItem: typeof __VLS_221; }).NListItem;
({} as { NListItem: typeof __VLS_221; }).NListItem;
const __VLS_223 = __VLS_222({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_222));
const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223)!;
{
const __VLS_225 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_226 = __VLS_asFunctionalComponent(__VLS_225, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_227 = __VLS_226({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_226));
const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227)!;
}
{
const __VLS_229 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_231 = __VLS_230({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_230));
const __VLS_232 = __VLS_pickFunctionalComponentCtx(__VLS_229, __VLS_231)!;
(__VLS_ctx.user?.inn);
}
}
{
let __VLS_233!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_234 = __VLS_asFunctionalComponent(__VLS_233, new __VLS_233({ ...{}, }));
({} as { NListItem: typeof __VLS_233; }).NListItem;
({} as { NListItem: typeof __VLS_233; }).NListItem;
const __VLS_235 = __VLS_234({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_234));
const __VLS_236 = __VLS_pickFunctionalComponentCtx(__VLS_233, __VLS_235)!;
{
const __VLS_237 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_238 = __VLS_asFunctionalComponent(__VLS_237, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_239 = __VLS_238({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_238));
const __VLS_240 = __VLS_pickFunctionalComponentCtx(__VLS_237, __VLS_239)!;
}
{
const __VLS_241 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_243 = __VLS_242({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_242));
const __VLS_244 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243)!;
(__VLS_ctx.user?.soatoResponse?.nameUz || '-');
(__VLS_ctx.user?.address);
}
}
}
}
}
{
const __VLS_245 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_246 = __VLS_asFunctionalComponent(__VLS_245, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_247 = __VLS_246({ ...{}, class: ("px-5 pt-5 mt-3 intro-y box"), }, ...__VLS_functionalComponentArgsRest(__VLS_246));
const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247)!;
{
const __VLS_249 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_250 = __VLS_asFunctionalComponent(__VLS_249, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_251 = __VLS_250({ ...{}, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_250));
const __VLS_252 = __VLS_pickFunctionalComponentCtx(__VLS_249, __VLS_251)!;
{
let __VLS_253!: 'NList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NList : 'nList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nList : 'n-list' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NList'];
const __VLS_254 = __VLS_asFunctionalComponent(__VLS_253, new __VLS_253({ ...{}, hoverable: (true), }));
({} as { NList: typeof __VLS_253; }).NList;
({} as { NList: typeof __VLS_253; }).NList;
const __VLS_255 = __VLS_254({ ...{}, hoverable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_254));
const __VLS_256 = __VLS_pickFunctionalComponentCtx(__VLS_253, __VLS_255)!;
{
let __VLS_257!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_258 = __VLS_asFunctionalComponent(__VLS_257, new __VLS_257({ ...{}, }));
({} as { NListItem: typeof __VLS_257; }).NListItem;
({} as { NListItem: typeof __VLS_257; }).NListItem;
const __VLS_259 = __VLS_258({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_258));
const __VLS_260 = __VLS_pickFunctionalComponentCtx(__VLS_257, __VLS_259)!;
{
const __VLS_261 = ({} as __VLS_IntrinsicElements)["strong"];
const __VLS_262 = __VLS_asFunctionalComponent(__VLS_261, {});
({} as __VLS_IntrinsicElements).strong;
({} as __VLS_IntrinsicElements).strong;
const __VLS_263 = __VLS_262({ ...{}, class: ("mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_262));
const __VLS_264 = __VLS_pickFunctionalComponentCtx(__VLS_261, __VLS_263)!;
}
}
{
let __VLS_265!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ ...{}, }));
({} as { NListItem: typeof __VLS_265; }).NListItem;
({} as { NListItem: typeof __VLS_265; }).NListItem;
const __VLS_267 = __VLS_266({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_266));
const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267)!;
{
const __VLS_269 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_270 = __VLS_asFunctionalComponent(__VLS_269, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_271 = __VLS_270({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_270));
const __VLS_272 = __VLS_pickFunctionalComponentCtx(__VLS_269, __VLS_271)!;
}
{
const __VLS_273 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_274 = __VLS_asFunctionalComponent(__VLS_273, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_275 = __VLS_274({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_274));
const __VLS_276 = __VLS_pickFunctionalComponentCtx(__VLS_273, __VLS_275)!;
(__VLS_ctx.user?.headLastname);
(__VLS_ctx.user?.headName);
(__VLS_ctx.user?.headSecondName);
}
}
{
let __VLS_277!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_278 = __VLS_asFunctionalComponent(__VLS_277, new __VLS_277({ ...{}, }));
({} as { NListItem: typeof __VLS_277; }).NListItem;
({} as { NListItem: typeof __VLS_277; }).NListItem;
const __VLS_279 = __VLS_278({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_278));
const __VLS_280 = __VLS_pickFunctionalComponentCtx(__VLS_277, __VLS_279)!;
{
const __VLS_281 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_282 = __VLS_asFunctionalComponent(__VLS_281, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_283 = __VLS_282({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_282));
const __VLS_284 = __VLS_pickFunctionalComponentCtx(__VLS_281, __VLS_283)!;
}
{
const __VLS_285 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_286 = __VLS_asFunctionalComponent(__VLS_285, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_287 = __VLS_286({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_286));
const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287)!;
(__VLS_ctx.user?.headPositionResponse);
}
}
{
let __VLS_289!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_290 = __VLS_asFunctionalComponent(__VLS_289, new __VLS_289({ ...{}, }));
({} as { NListItem: typeof __VLS_289; }).NListItem;
({} as { NListItem: typeof __VLS_289; }).NListItem;
const __VLS_291 = __VLS_290({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_290));
const __VLS_292 = __VLS_pickFunctionalComponentCtx(__VLS_289, __VLS_291)!;
{
const __VLS_293 = ({} as __VLS_IntrinsicElements)["strong"];
const __VLS_294 = __VLS_asFunctionalComponent(__VLS_293, {});
({} as __VLS_IntrinsicElements).strong;
({} as __VLS_IntrinsicElements).strong;
const __VLS_295 = __VLS_294({ ...{}, class: ("mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_294));
const __VLS_296 = __VLS_pickFunctionalComponentCtx(__VLS_293, __VLS_295)!;
}
}
{
let __VLS_297!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_298 = __VLS_asFunctionalComponent(__VLS_297, new __VLS_297({ ...{}, }));
({} as { NListItem: typeof __VLS_297; }).NListItem;
({} as { NListItem: typeof __VLS_297; }).NListItem;
const __VLS_299 = __VLS_298({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_298));
const __VLS_300 = __VLS_pickFunctionalComponentCtx(__VLS_297, __VLS_299)!;
{
const __VLS_301 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_302 = __VLS_asFunctionalComponent(__VLS_301, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_303 = __VLS_302({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_302));
const __VLS_304 = __VLS_pickFunctionalComponentCtx(__VLS_301, __VLS_303)!;
}
{
const __VLS_305 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_306 = __VLS_asFunctionalComponent(__VLS_305, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_307 = __VLS_306({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_306));
const __VLS_308 = __VLS_pickFunctionalComponentCtx(__VLS_305, __VLS_307)!;
(__VLS_ctx.user?.aktLastname);
(__VLS_ctx.user?.aktName);
(__VLS_ctx.user?.aktSecondName);
}
}
{
let __VLS_309!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_310 = __VLS_asFunctionalComponent(__VLS_309, new __VLS_309({ ...{}, }));
({} as { NListItem: typeof __VLS_309; }).NListItem;
({} as { NListItem: typeof __VLS_309; }).NListItem;
const __VLS_311 = __VLS_310({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_310));
const __VLS_312 = __VLS_pickFunctionalComponentCtx(__VLS_309, __VLS_311)!;
{
const __VLS_313 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_314 = __VLS_asFunctionalComponent(__VLS_313, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_315 = __VLS_314({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_314));
const __VLS_316 = __VLS_pickFunctionalComponentCtx(__VLS_313, __VLS_315)!;
}
{
const __VLS_317 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_318 = __VLS_asFunctionalComponent(__VLS_317, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_319 = __VLS_318({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_318));
const __VLS_320 = __VLS_pickFunctionalComponentCtx(__VLS_317, __VLS_319)!;
(__VLS_ctx.user?.aktPositionResponse);
}
}
{
let __VLS_321!: 'NListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NListItem : 'nListItem' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.nListItem : 'n-list-item' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['n-list-item'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['NListItem'];
const __VLS_322 = __VLS_asFunctionalComponent(__VLS_321, new __VLS_321({ ...{}, }));
({} as { NListItem: typeof __VLS_321; }).NListItem;
({} as { NListItem: typeof __VLS_321; }).NListItem;
const __VLS_323 = __VLS_322({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_322));
const __VLS_324 = __VLS_pickFunctionalComponentCtx(__VLS_321, __VLS_323)!;
{
const __VLS_325 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_326 = __VLS_asFunctionalComponent(__VLS_325, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_327 = __VLS_326({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_326));
const __VLS_328 = __VLS_pickFunctionalComponentCtx(__VLS_325, __VLS_327)!;
}
{
const __VLS_329 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_330 = __VLS_asFunctionalComponent(__VLS_329, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_331 = __VLS_330({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_330));
const __VLS_332 = __VLS_pickFunctionalComponentCtx(__VLS_329, __VLS_331)!;
(__VLS_ctx.user?.aktPhone);
}
}
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[$router, Tab, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user,];
return __VLS_slots;
}
