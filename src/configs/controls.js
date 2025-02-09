/**
 * Supported Controls in Vue-Form-Builder
 * @author Phat Tran
 */
import {STYLES} from "@/configs/styles";
import {HELPER} from "@/libraries/helper";
import {
    DATE_PICKER_RETURN_TYPES, DATE_PICKER_START_DATES,

    RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE, RADIO_CHECKBOX_LABEL_POSITION,

    DROPDOWN_DATA_MODES,

    // FILE_UPLOAD_MODES
} from "@/configs/control-config-enum";

// Control-GUI-Component
import InputControl from "@/views/controls/InputControl"
import TextControl from "@/views/controls/TextControl"
import ButtonControl from "@/views/controls/ButtonControl"
import EmptyBlockControl from "@/views/controls/EmptyBlockControl";
import TextBlockControl from "@/views/controls/TextBlockControl";
import LabelControl from "@/views/controls/LabelControl";
import RadioCheckboxMultipleControl from "@/views/controls/RadioCheckboxMultipleControl";
import DatePickerControl from "@/views/controls/DatePickerControl";
import NumberControl from "@/views/controls/NumberControl";
import DropdownControl from "@/views/controls/DropdownControl";
import FileUploaderControl from "@/views/controls/FileUploaderControl";

// Control-Config-Component
import InputConfigView from "@/views/control-configs/InputConfigView";
import TextBlockConfigView from "@/views/control-configs/TextBlockConfigView";
import ButtonConfigView from "@/views/control-configs/ButtonConfigView";
import LabelConfigView from "@/views/control-configs/LabelConfigView";
import RadioCheckboxConfigView from "@/views/control-configs/RadioCheckboxConfigView";
import NumberConfigView from "@/views/control-configs/NumberConfigView";
import DatePickerConfigView from "@/views/control-configs/DatePickerConfigView";
import TextConfigView from "@/views/control-configs/TextConfigView";
import DropdownConfigView from "@/views/control-configs/DropdownConfigView";
import FileUploaderConfigView from "@/views/control-configs/FileUploaderConfigView";

const CONTROLS = {
    input: {
        name: "Campo di testo",
        description: "Campo di testo semplice - Singola riga",
        icon: 'editPencil', // Follow ICON in `icon-facade.js` to see how it works.

        configData: {
            typeAttribute: "text", // date, password
        },

        // component mapping
        fieldComponent: InputControl,
        configComponent: InputConfigView,
    },

    number: {
        name: "Campo numerico",
        description: "Campo numerico - Singola riga",

        configData: {
            isReal: false, // integer or real (float/double)
            decimalPlace: 1, // [For Real] 0.xxx?? (x = num of places)
        },

        fieldComponent: NumberControl,
        configComponent: NumberConfigView,

        /**
         * As same like Vue-JS Property Default Data
         * Specific field need some special data-type/structure, they need to
         * put the creation in a factory method.
         * It must return a value.
         */
        rendererDefaultData() {
            return 0;
        },
    },

    text: {
        name: "Area di testo",
        description: "Area di testo - Più righe",

        // config data for the input field - it will be merge with the CONTROL_DEFAULT_DATA
        configData: {
            rows: 3, // numeric
        },

        // component mapping
        fieldComponent: TextControl,
        configComponent: TextConfigView
    },

    // I would love to support this, but the thing is, many rich editors are too large:
    // js: 150KB+
    // css: 30KB+
    // So 2.0.0 won't have this field.
    // richText: {
    //     name: "Rich-Text Field",
    //     description: "Multiple line text field - Rich Editor (WYSIWYG)",
    // },

    date: {
        name: "Date Picker",
        description: "Selettore di data - Singola data o intervallo di date",

        configData: {
            format: "DD/MM/YYYY",
            firstDay: DATE_PICKER_START_DATES.monday.val, // 0 Sunday, 1 Monday,...
            numberOfMonths: 1, // Number of Month(s) will be shown
            numberOfColumns: 1, // Number of Column(s) will be shown
            minDate: null, // min day (less => can't select)
            maxDate: null,// max day (more => can't select),
            lang: "it-IT", // language

            singleMode: true, // date or date-range

            // for date-range
            minDays: 0, // min-day range
            maxDays: 0, // max-day range

            returnType: DATE_PICKER_RETURN_TYPES.object.val, // specific return type
        },

        fieldComponent: DatePickerControl,
        configComponent: DatePickerConfigView
    },

    // fileUpload: {
    //     name: "File Upload",
    //     description: "Upload single file through API",
    //
    //     configData: {
    //         uploadMode: FILE_UPLOAD_MODES.normal.val,
    //         apiURL: "", // API-Url to upload
    //     },
    // },

    dropDown: {
        name: "Dropdown",
        description: "Lista a discesa - Singola selezione",

        configData: {
            dataMode: DROPDOWN_DATA_MODES.list.val, // normal - api
            multiple: false, // is multiple selection

            /**
             * @var {ListItem[]} items
             */
            items: [], // for normal hard-list

            apiURL: "", // for api-request - must be entered
            apiTextKey: "text", // <option>TEXT</option>
            apiValueKey: "value", // <option value=value>...</option>
        },

        fieldComponent: DropdownControl,
        configComponent: DropdownConfigView,
    },


    checkbox: {
        name: "Caselle di controllo",
        description: "Caselle di controllo - Selezione multipla",

        configData: {
            displayMode: RADIO_CHECKBOX_STYLE.line.val, // line by line / next to each others / 2 items per line
            position: RADIO_CHECKBOX_POSITION.left.val, // POSITION
            labelPosition: RADIO_CHECKBOX_LABEL_POSITION.after.val, // before/after
            inputType: "checkbox", // checkbox/radio/custom

            /**
             * @var {ListItem[]} items
             */
            items: [], // list-item
        },

        fieldComponent: RadioCheckboxMultipleControl,
        configComponent: RadioCheckboxConfigView,
        rendererDefaultData() {
            return [];
        },
    },

    radio: {
        name: "Pulsanti radio", // Radio List
        description: "Pulsanti radio - Selezione mutuamente esclusiva",

        configData: {
            displayMode: RADIO_CHECKBOX_STYLE.line.val, // line by line / next to each others / 2 items per line
            position: RADIO_CHECKBOX_POSITION.left.val, // POSITION
            labelPosition: RADIO_CHECKBOX_LABEL_POSITION.after.val, // before/after
            inputType: "radio", // checkbox/radio/custom

            /**
             * @var {ListItem[]} items
             */
            items: [], // list-item
        },

        fieldComponent: RadioCheckboxMultipleControl,
        configComponent: RadioCheckboxConfigView
    },

    multipleText: {
        name: "Campi di testo multipli",
        description: "Campi di testo multipli - Singola riga",

        configData: {
            displayMode: RADIO_CHECKBOX_STYLE.line.val, // line by line / next to each others / 2 items per line
            position: RADIO_CHECKBOX_POSITION.left.val, // POSITION
            labelPosition: RADIO_CHECKBOX_LABEL_POSITION.before.val, // before/after
            inputType: "text", // checkbox/radio/custom
            additionalFieldClass: "w-auto d-inline-block", // To make it inline

            /**
             * @var {ListItem[]} items
             */
            items: [], // list-item
        },

        fieldComponent: RadioCheckboxMultipleControl,
        configComponent: RadioCheckboxConfigView
    },

    fileUploader: {
        name: "Carica file",
        description: "Carica file - Singolo file o multipli file",
        disableValidation: true,

        // config data
        configData: {
            // for styling
            buttonLabel: "Carica file",
            buttonClasses: "btn btn-primary",
            
            clearButtonLabel: "Annulla",
            clearButtonClasses: "btn btn-danger ml-2",

            // for components
            postActionURL: "./upload-file", // API-URL to upload the file
            extensions: ".png,.jpg,.jpeg,.pdf",
            accept: "image/jpeg,image/png,application/pdf",
            maxSize: 1000, // in bytes - 0 unlimited

            isMultiple: false,
            maximumFiles: 1, // if multiple is on, we need to configure this one

            // special configurations
            // these will be appended when the vue-uploader-component make a request
            headers: [],
            postData: []
        },

        fieldComponent: FileUploaderControl,
        configComponent: FileUploaderConfigView
    },

    label: {
        name: "Label",
        description: "Tag label per identificare un altro campo.",
        disableValue: true,
        
        configData: {
            forAttribute: null, // `for` for any control? (except the Label)

            // Override here in order to not show the Label
            isShowLabel: false
        },

        // no need validation
        disableValidation: true,
        fieldComponent: LabelControl,
        configComponent: LabelConfigView
    },

    button: {
        name: "Pulsante",
        description: "Pulsante per inviare il modulo o eseguire un'azione.",
        disableValidation: true,
        disableValue: true,

        configData: {
            buttonClass: STYLES.BUTTON.PRIMARY,
            buttonType: "button", // submit/reset/button/...

            emitEventCode: "custom_button_click", // like: "BtnClicked/clicked/change"
            emitEventData: "", // special data to emit to let you know which button is clicked

            // if this is true => validation will be run before the real invoke method
            isRunValidation: true,

            // Override here in order to not show the Label
            isShowLabel: false,
        },

        fieldComponent: ButtonControl,
        configComponent: ButtonConfigView
    },

    emptyBlock: {
        name: "Blocco vuoto",
        description: "Blocco vuoto per il layout. Non ha alcun controllo.",
        disableValidation: true,
        disableValue: true,

        fieldComponent: EmptyBlockControl,

        configData: {
            // Override here in order to not show the Label
            isShowLabel: false,
        }
    },

    textBlock: {
        name: "Blocco di testo",
        description: "Semplice blocco di testo. Non ha alcun controllo.",
        disableValidation: true,
        disableValue: true, // if you provide this, the control field value will not be recorded.

        fieldComponent: TextBlockControl,
        configComponent: TextBlockConfigView,

        configData: {
            text: ""
        }
    }
};

const CONTROL_DEFAULT_DATA = {
    // default configuration
    'uniqueId': '', // :id
    'type': '', // control type...
    'name': '', // :name
    'order': 0, // :order

    'label': '',
    'subLabel': '',
    'isShowLabel': true,

    'placeholderText': '', // :placeholder

    'containerClass': STYLES.COLUMNS.COL12,
    'additionalContainerClass': '', // :class for the <div> outer container

    'additionalFieldClass': '', // :class for <input> <select> ...
    'additionalLabelClass': '', // :class for the <label>

    'defaultValue': '',

    /**
     * Validation that applied to the control
     * @var {ValidationRule[]} validations
     */
    'validations': [],

    // data of the others - coming up later
};

/**
 * Create new control data
 * @param controlKey
 * @returns {CONTROL_DEFAULT_DATA}
 */
function createControlData(controlKey) {
    const newData = Object.assign({}, CONTROL_DEFAULT_DATA, CONTROLS[controlKey].configData || {})

    // unique ID is a must - I used UUIDv4 => 99% Unique
    newData.uniqueId = "control-" + HELPER.getUUIDv4()

    // set default data
    newData.label = CONTROLS[controlKey].name
    newData.type = controlKey

    newData.name = newData.label.toLowerCase().replace(/ /g, "_") + "_" + newData.uniqueId;

    return newData
}

export {
    CONTROLS,
    CONTROL_DEFAULT_DATA,
    createControlData
}