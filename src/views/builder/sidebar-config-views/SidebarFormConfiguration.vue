<template>
    <div class="sidebar-form-configuration">
        <h5>Impostazioni modulo</h5>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Titolo</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="formConfiguration.headline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Sottotitolo</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="formConfiguration.subHeadline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Mostra titolo
                <input type="checkbox" v-model="formConfiguration.isShowHeadline">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Renderizza il tag HTML &#x3C;form&#x3E; intorno al modulo?
                <input type="checkbox" v-model="formConfiguration.renderFormTag">
            </label>
        </div>

        <div v-show="formConfiguration.renderFormTag">

            <div :class="styles.FORM.FORM_GROUP">
                <label>URL del parametro <code>action</code></label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="formConfiguration.formActionURL">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>Metodo HTTP del modulo</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="formConfiguration.formMethod">
            </div>

        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Abilita la validazione server-side?
                <input type="checkbox" v-model="formConfiguration.enableServerSideValidation">
            </label>
        </div>

        <div v-show="formConfiguration.enableServerSideValidation">
            <div :class="styles.FORM.FORM_GROUP">
                <label>Endpoint della validazione server-side</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="formConfiguration.serverSideValidationEndpoint">
            </div>
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
    import {FORM_DEFAULT_DATA} from "@/configs/form";

    /**
     * @property {FORM_DEFAULT_DATA} formConfiguration
     */
    export default {
        name: "SidebarFormConfiguration",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],
        data: () => ({
            // OVERRIDE IT FROM `SIDEBAR_BODY_MIXIN`
            dataKey: "formConfiguration",
            formConfiguration: Object.assign({}, FORM_DEFAULT_DATA),
        }),

        methods: {
            /**
             * Pre-Form-Validation
             * @return {String}
             */
            preSaveValidation() {
                if (this.formConfiguration.enableServerSideValidation && !this.formConfiguration.serverSideValidationEndpoint) {
                    return "È necessario includere l'endpoint di convalida server-side";
                }

                return ""
            }
        },

        created() {
            // retrieve the data from `GlobalSidebar` passed in
            this.formConfiguration = Object.assign({}, this.formConfiguration, this.dataPackage)
        }
    }
</script>