<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Ammette valori decimali?
                <input type="checkbox" v-model="control.isReal">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-show="control.isReal">
            <label>Numero di decimali ammessi</label>
            <input type="number"
                   step="1"
                   min="0"
                   max="10"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model.number="control.decimalPlace">
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "NumberConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN]
    }
</script>