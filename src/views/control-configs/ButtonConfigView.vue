<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Tipo pulsante (attributo <code>type</code>code>)</label>
            <select type="text"
                    :class="styles.FORM.FORM_CONTROL"
                    v-model="control.buttonType"
            >
                <option v-for="item in buttonTypeList"
                        :key="item"
                        :value="item"
                        v-text="item">
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
                    {{name}} ({{className}})
                </option>
            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Eseguire la convalida prima di eseguire il comando?
                <input type="checkbox" v-model="control.isRunValidation">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Codice evento da emettere
                <IconTooltip icon="informationOutline"
                             text="Il sistema emetterà un evento tramite $emit con <strong>CODICE INSERITO</strong>" />
            </label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="control.emitEventCode">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
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
                return ['button', 'submit', 'clear']
            },
            buttonClasses() {
                return this.styles.BUTTON
            }
        }
    }
</script>