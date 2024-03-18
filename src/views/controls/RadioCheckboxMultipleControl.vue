<template>
    <div :id="control.uniqueId">
        <div v-if="isSameBlock" class="radio-checkbox" :class="lineNextClasses">

            <label v-for="listItem in control.items"
                   :key="listItem.value"
                   :class="positionClasses">
                <!--- For structural, line/next is same --->

                <template v-if="isLabelBefore">
                    {{listItem.text}}
                    <input :type="inputType"
                           :class="inputClasses"
                           :name="inputName(listItem)"
                           :value="listItem.value"
                           v-model="valueContainer[controlName]"
                    >
                </template>
                <template v-else>
                    <input :type="inputType"
                           :class="inputClasses"
                           :name="inputName(listItem)"
                           :value="listItem.value"
                           v-model="valueContainer[controlName]"
                    >
                    {{listItem.text}}
                </template>

                <!--- Line By Line will need this <br> --->
                <br v-if="displayMode === 'line'" />
            </label>

        </div>
        <div v-else>
            <!--- Double/Size --->
            <div :class="styles.ROW" class="radio-checkbox">

                <div :class="[styles.COLUMNS.COL6, positionClasses]"
                     v-for="listItem in control.items"
                     :key="listItem.value">

                    <label>

                        <!--- Input things are same, hmm - TODO: DRY ?? --->
                        <template v-if="isLabelBefore">
                            {{listItem.text}}
                            <input :type="inputType"
                                :class="inputClasses"
                                :name="inputName(listItem)"
                                :value="listItem.value"
                                v-model="valueContainer[controlName]"
                            >
                        </template>
                        <template v-else>
                            <input :type="inputType"
                                :class="inputClasses"
                                :name="inputName(listItem)"
                                :value="listItem.value"
                                v-model="valueContainer[controlName]"
                            >
                            {{listItem.text}}
                        </template>
                        
                    </label>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";
    import {RADIO_CHECKBOX_LABEL_POSITION, RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE} from "@/configs/control-config-enum";

    /**
     * Radio/Checkbox List Control
     * Probably, we can use them together. Because the only main difference is input[type=radio|checkbox]
     * @property {ListItem[]} control.items
     */
    export default {
        name: "RadioCheckboxControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],
        props: {
            valueContainer: {
                type: Object,
                default: () => ({})
            }
        },

        data: () => ({
            stopDefaultValueAssign: true,
            defaultBucket: ''
        }),

        created() {
            // special case for Form-Builder since we can't use the
            // valueContainer (value container only available on Renderer)
            if (!this.valueContainer[this.controlName]) {
                this.valueContainer[this.controlName] = ''
            }
        },

        mounted() {
            if (this.control.defaultValue) {
                // assign default value for control
                if (this.isRadio) {
                    this.updateValue(this.control.defaultValue)
                } else {
                    this.updateValue([this.control.defaultValue])
                }
            }
        },

        computed: {
            /**
             * Get the input type for the current instance control
             * @returns {string}
             */
            inputType() {
                return this.control.inputType.toLowerCase();
            },

            /**
             * Check if the current instance control is radio??
             * @returns {boolean}
             */
            isRadio() {
                return this.inputType === 'radio'
            },

            /**
             * Check if the current instance control is radio??
             * @returns {boolean}
             */
            isCheckbox() {
                return this.inputType === 'checkbox'
            },

            /**
             * Check if the label is before the input[type=radio|checkbox]
             * @returns {boolean}
             */
            isLabelBefore() {
                return this.control.labelPosition === RADIO_CHECKBOX_LABEL_POSITION.before.val
            },

            /**
             * Quick Access to The Control.DisplayMode
             * @returns {string}
             */
            displayMode() {
                return this.control.displayMode
            },

            /**
             * Check if the displayMode either line or next. Because both of them are in the same `div` block
             * @returns {boolean}
             */
            isSameBlock() {
                return this.displayMode === RADIO_CHECKBOX_STYLE.line.val
                    || this.displayMode === RADIO_CHECKBOX_STYLE.next.val
            },

            /**
             * Get classes for view mode of Line - Next
             * @returns {Object}
             */
            lineNextClasses() {
                return {
                    'line': this.displayMode === 'line',
                    'next': this.displayMode === 'next',
                }
            },

            /**
             * Get position class depends on the configuration
             * @returns {Object}
             */
            positionClasses() {
                return {
                    'text-center': this.control.position === RADIO_CHECKBOX_POSITION.center.val,
                    'text-right': this.control.position === RADIO_CHECKBOX_POSITION.right.val,
                    'text-left': this.control.position === RADIO_CHECKBOX_POSITION.left.val,
                }
            },

            /**
             * Get the input classes for the control
             * @returns {Array}
             */
            inputClasses() {
                if (this.isRadio || this.isCheckbox) {
                    return this.control.additionalFieldClass
                }

                // For other type of control, we add form-control class
                return this.controlFieldClass
            }
        },

        methods: {
            /**
             * Generate the :name for the input[type=checkbox|radio]
             * @returns {string|string}
             */
             inputName(value) {
                // For input[name] of Radio, they need to be the same.
                // If Control Name is Empty => Use ID instead (otherwise, control will break =)) )
                if (this.isRadio) {
                    return this.controlName
                }

                // For Checkbox, name will always be Array Mode (name[])
                if (this.isCheckbox) {
                    return (this.controlName) + "[]"
                }

                return (this.controlName) + "[" + value.value + "]"
            }
        }
    }
</script>