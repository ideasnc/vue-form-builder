// Configs
import {CONTROLS} from "@/configs/controls";
import {STYLES} from "@/configs/styles";
import {VALIDATION_RULES} from "@/configs/validation";
import {
    DATE_PICKER_RETURN_TYPES, DATE_PICKER_START_DATES,
    RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE,
    DROPDOWN_DATA_MODES,
    FILE_UPLOAD_MODES
} from "@/configs/control-config-enum";

// Mixins
import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

const getConfig = () => {
    return {
        STYLES,
        CONTROLS,
        VALIDATION_RULES,
        DATE_PICKER_RETURN_TYPES,
        DATE_PICKER_START_DATES,
        RADIO_CHECKBOX_POSITION,
        RADIO_CHECKBOX_STYLE,
        DROPDOWN_DATA_MODES,
        FILE_UPLOAD_MODES
    }
};

const getMixins = () => {
    return {
        CONTROL_FIELD_EXTEND_MIXIN
    }
};

export {
    getConfig,
    getMixins
}