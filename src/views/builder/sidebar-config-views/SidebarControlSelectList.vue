<template>
    <div class="sidebar-form-configuration">

        <h5>Aggiungi campo</h5>


        <div :class="[styles.LIST_GROUP.CONTAINER]">

            <a href="javascript:void(0)"
               :class="styles.LIST_GROUP.SINGLE_ITEM"
               v-for="(controlInfo, controlKey) in controlTypes"
               v-show="!controlInfo.isHidden"
               :key="controlKey"
               @click="selectedControl(controlKey)">

                <p class="type-headline" v-text="controlInfo.name"></p>
                <p class="type-desc" v-text="controlInfo.description"></p>

            </a>

        </div>

    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {CONTROLS, createControlData} from "@/configs/controls";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";

    export default {
        name: "SidebarControlSelectList",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],
        computed: {
            controlTypes: () => {
                console.log(CONTROLS);
                const controls = {};
                const sortedKeys = Object.keys(CONTROLS).sort((a, b) => {
                    let orderA = CONTROLS[a].order ? CONTROLS[a].order : 0
                    let orderB = CONTROLS[b].order ? CONTROLS[b].order : 0
                    return orderA - orderB
                })
                sortedKeys.forEach(key => {
                    controls[key] = CONTROLS[key]
                })
                return controls
            }
        },

        data:() => ({
            dataKey: "newControlData",
            newControlData: null
        }),

        methods: {
            /**
             * Selected a control => we will generate a new control data then emit it to the section
             * @param controlKey
             */
            selectedControl(controlKey) {
                if (!CONTROLS[controlKey]) {
                    alert(`Control ${controlKey} doesn't exists in Vue-Form-Builder`)
                    return
                }

                // create
                this.newControlData = createControlData(controlKey)
                this.save(true)
            }
        }
    }
</script>

<style scoped>

</style>