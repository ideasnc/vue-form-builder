<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Tipo pulsante (attributo <code>type</code>)</label>
            <select type="text"
                    :class="styles.FORM.FORM_CONTROL"
                    v-model="control.buttonType"
            >
                <option v-for="(name, value) in buttonTypeList"
                        :key="value"
                        :value="value"
                        v-text="name">
                </option>
            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Classi pulsante (attributo <code>class</code>)</label>
            <select type="text"
                    :class="styles.FORM.FORM_CONTROL"
                    v-model="control.buttonClass"
            >
                <option v-for="(className, name) in buttonClasses"
                        :key="className"
                        :value="className">
                    {{name}}
                </option>
            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-if="permissions.canUseAdvancedSettings">
            <label>
                Eseguire la convalida prima di eseguire il comando?
                <input type="checkbox" v-model="control.isRunValidation">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-if="permissions.canUseAdvancedSettings">
            <label>
                Codice evento da emettere
                <IconTooltip icon="informationOutline"
                             text="Il sistema emetterà un evento tramite $emit con <strong>CODICE INSERITO</strong>" />
            </label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="control.emitEventCode">
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-if="permissions.canUseAdvancedSettings">
            <label>
                Valore dati da emettere
                <IconTooltip icon="informationOutline"
                             text="Stringa di dati specifica quando il sistema invoca $emit" />
            </label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="control.emitEventData">
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "ButtonConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        computed: {
            buttonTypeList() {
                return {
                    'button': "Pulsante generico (button)",
                    'submit': "Submit (invia il modulo)",
                    'clear': 'Clear (resetta il modulo)'
                };
            },
            buttonClasses() {
                return this.styles.BUTTON
            }
        }
    }
</script>