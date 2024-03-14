<template>
    <SidebarToggleableContainer headline="Stile e design">
        <div :class="styles.FORM.FORM_GROUP">
            <label>Dimensione del campo</label>
            <select :class="styles.FORM.FORM_CONTROL" v-model="control.containerClass">
                <option v-for="(className, classID) in containerClasses"
                        :key="className"
                        :value="className">
                    {{classID}} ({{containerClassNames[classID]}})
                </option>
            </select>
            <small>
                La percentuale si riferisce alla larghezza del campo all'interno del container.
                I campi vengono visualizzati in riga, se la somma delle percentuali supera il 100% verranno mandati a capo.
            </small>
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-if="permissions.canUseAdvancedSettings">
            <label>Classi CSS aggiuntive (container)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalContainerClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-if="permissions.canUseAdvancedSettings">
            <label>Classi CSS aggiuntive (campo)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalFieldClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-if="permissions.canUseAdvancedSettings">
            <label>Classi CSS aggiuntive (label)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalLabelClass">
        </div>
    </SidebarToggleableContainer>
</template>

<script>
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "ControlStylingInformation",
        mixins: [STYLE_INJECTION_MIXIN],
        components: {SidebarToggleableContainer},
        props: {
            control: Object,
            permissions: Object
        },

        computed: {
            containerClasses() {
                return this.styles.COLUMNS;
            },
            containerClassNames() {
                return this.styles.COLUMNS_NAMES;
            }
        }
    }
</script>

<style scoped>

</style>