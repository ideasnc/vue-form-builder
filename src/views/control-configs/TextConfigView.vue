<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Numero di righe</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.rows" />
            <small>Attributo HTML <code>rows</code></small>
        </div>

    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "TextConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN]
    }
</script>