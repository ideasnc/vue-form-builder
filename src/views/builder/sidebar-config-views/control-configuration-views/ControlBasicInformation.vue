<template>
    <SidebarToggleableContainer headline="Informazioni base">
        <div :class="styles.FORM.FORM_GROUP">
            <label>ID Univoco (non modificabile)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" :value="control.uniqueId" readonly>
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-if="false">
            <label>Nome (deve essere univoco)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.name">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Nome (deve essere univoco)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.label">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Sottotitolo</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.subLabel">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Mostra label
                <input type="checkbox" v-model="control.isShowLabel">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Placeholder (opzionale)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.placeholderText">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Valore predefinito (opzionale)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.defaultValue">
        </div>

    </SidebarToggleableContainer>
</template>

<script>
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "ControlBasicInformation",
        mixins: [STYLE_INJECTION_MIXIN],
        components: {SidebarToggleableContainer},
        props: {
            control: Object,
        },
        watch: {
            control: {
                handler: function (newVal) {
                    if (newVal.label) {
                        newVal.name = newVal.label.toLowerCase().replace(/ /g, "_") + "_" + newVal.uniqueId;
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>