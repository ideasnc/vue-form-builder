<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Tipo di dati da ritornare</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.returnType">

                <option v-for="item in listReturnTypes"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <!--- Only show this configuration if return Type is Format --->
        <div :class="styles.FORM.FORM_GROUP" v-show="control.returnType === listReturnTypes.format.val">
            <label>Formato data</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.format" />
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Giorno di inizio della settimana</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.firstDay">

                <option v-for="item in listStartDates"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Data minima
                <IconTooltip icon="informationOutline" text="Segui questo formato: YYYY-MM-DD. Vuoto per nessuno." />
            </label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.minDate" />
            <small>Data minima che può essere selezionata nel calendario</small>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Data massima
                <IconTooltip icon="informationOutline" text="Segui questo formato: YYYY-MM-DD. Vuoto per nessuno." />
            </label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.maxDate"  />
            <small>Data massima che può essere selezionata nel calendario</small>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Abilita la selezione di un intervallo di date?

                <!--- Because singleModel == true => single date picker --->
                <input type="checkbox"
                       name="enableDateRange"
                       v-model="control.singleMode"
                       :true-value="false"
                       :false-value="true">
            </label>
        </div>

        <!--- Only show this configuration if date-range --->
        <div :class="styles.FORM.FORM_GROUP" v-show="!control.singleMode">
            <label>Numero minimo di giorni selezionabili (0 per nessuno)</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.minDays" />
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-show="!control.singleMode">
            <label>Numero massimo di giorni selezionabili (0 per infiniti)</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.maxDays" />
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Numero di mesi</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.numberOfMonths" />
            <small>Numero di mesi che verranno visualizzati</small>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Numero di colonne</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.numberOfColumns" />
            <small>Numero di colonne che verranno visualizzate</small>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";
    import {DATE_PICKER_RETURN_TYPES, DATE_PICKER_START_DATES} from "@/configs/control-config-enum";

    export default {
        name: "DatePickerConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],


        computed: {
            /**
             * Return types of DatePicker
             */
            listReturnTypes: () => DATE_PICKER_RETURN_TYPES,

            /**
             * Start dates of the Week
             */
            listStartDates:() => DATE_PICKER_START_DATES,
        }
    }
</script>