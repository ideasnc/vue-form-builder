<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Modalità di visualizzazione</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.displayMode">

                <option v-for="item in listDisplayModes"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Posizione di visualizzazione</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.position">

                <option v-for="item in listPositions"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Posizione dell'etichetta</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.labelPosition">

                <option v-for="item in listLabelPositions"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Opzioni
                <span class="pointer"
                      @click="addListItem"
                      v-html="$form.getIcon('addOutline', '16px', '16px', 'green')">
                </span>
            </label>

            <!-- Im using div instead of table. Table too small :( -->
            <div :class="['list-selection']" v-for="(listItem, iItem) in control.items" :key="iItem">

                <div class="tool-block">
                    <span class="pointer"
                          @click="removeListItem(iItem)"
                          v-html="$form.getIcon('close', '16px', '16px', 'red')">
                    </span>
                </div>

                <div :class="styles.FORM.FORM_GROUP">
                    <label>Valore</label>
                    <input type="text" :class="styles.FORM.FORM_CONTROL"
                           placeholder="Valore"
                           v-model="listItem.value">
                </div>

                <div :class="styles.FORM.FORM_GROUP">
                    <label>Testo visualizzato</label>
                    <input type="text" :class="styles.FORM.FORM_CONTROL"
                           placeholder="Testo visualizzato"
                           v-model="listItem.text">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";
    import {RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE, RADIO_CHECKBOX_LABEL_POSITION} from "@/configs/control-config-enum";
    import ListItem from "@/libraries/list-item.class";

    export default {
        name: "RadioCheckboxConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        methods: {
            /**
             * Add new List-Item for the Current Radio/Checkbox
             */
            addListItem() {
                this.control.items.push(
                    new ListItem('', '')
                )
            },

            /**
             * Remove list-Item by Index of the Array
             */
            removeListItem(index) {
                this.control.items.splice(index, 1)
            }
        },

        computed: {
            /**
             * Configuration for the displayMode
             */
            listDisplayModes: () => RADIO_CHECKBOX_STYLE,

            /**
             * Configuration for the position
             */
            listPositions: () => RADIO_CHECKBOX_POSITION,

            /**
             * Configuration for the labelPosition
             */
            listLabelPositions: () => RADIO_CHECKBOX_LABEL_POSITION
        }
    }
</script>