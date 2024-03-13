<template>
    <div class="sidebar-form-configuration">
        <h5>Impostazioni sezione</h5>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Titolo</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="sectionConfiguration.headline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Classi aggiuntive titolo (CSS)</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="sectionConfiguration.headlineAdditionalClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Sottotitolo</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="sectionConfiguration.subHeadline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Classi aggiuntive sottotitolo (CSS)</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="sectionConfiguration.subHeadlineAdditionalClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Mostra titolo
                <input type="checkbox" v-model="sectionConfiguration.isShowHeadline">
            </label>
        </div>

        <div class="buttons">
            <button :class="styles.BUTTON.PRIMARY" @click="save(false)">
                Salva
            </button>
            <button :class="styles.BUTTON.INFO" @click="save(true)">
                Salva e chiudi
            </button>
        </div>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";
    import {SECTION_DEFAULT_DATA} from "@/configs/section";

    export default {
        name: "SidebarSectionConfiguration",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],

        data: () => ({
            dataKey: "sectionConfiguration",
            sectionConfiguration: Object.assign({}, SECTION_DEFAULT_DATA)
        }),

        created() {
            // retrieve the data from `GlobalSidebar` passed in
            this.sectionConfiguration = Object.assign({}, this.sectionConfiguration, this.dataPackage)
        }
    }
</script>