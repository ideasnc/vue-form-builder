/**
 * Constant for Radio/Checkbox Styling
 * @type {{next: string, bothSide: string, line: string}}
 */
const RADIO_CHECKBOX_STYLE = {
    line: {
        val: 'line',
        description: "Uno per riga"
    },
    next: {
        val: 'next',
        description: "Uno accanto all'altro"
    },
    bothSide: {
        val: "bothSide",
        description: "Uno a destra, uno a sinistra",
    }
};

/**
 * Constant for Radio/Checkbox position
 * @type {{left: string, center: string, right: string}}
 */
const RADIO_CHECKBOX_POSITION = {
    left: {
        val: 'left',
        description: "Sinistra"
    },
    center: {
        val: 'center',
        description: 'Centro',
    },
    right: {
        val: 'right',
        description: 'Destra'
    }
};

/**
 * Constant for Radio/Checkbox Label Position
 * @type {{before: {val: string, description: string}, after: {val: string, description: string}}}
 */
const RADIO_CHECKBOX_LABEL_POSITION = {
    before: {
        val: 'before',
        description: "Prima"
    },
    after: {
        val: 'after',
        description: 'Dopo',
    }
};

/**
 * Return Type for Date-Picker
 * @type {{format: {val: string, description: string}, object: {val: string, description: string}}}
 */
const DATE_PICKER_RETURN_TYPES = {
    format: {
        val: "format",
        description: "Stringa formattata"
    },
    object: {
        val: "object",
        description: "Oggetto Date di JavaScript"
    }
}

/**
 * Date Picker Start Date (Sunday, Monday,...) of the Week
 */
const DATE_PICKER_START_DATES = {
    monday: {
        val: 1,
        description: "Lunedì"
    },
    tuesday: {
        val: 2,
        description: "Martedì"
    },
    wednesday: {
        val: 3,
        description: "Mercoledì"
    },
    thursday: {
        val: 4,
        description: "Giovedì"
    },
    friday: {
        val: 5,
        description: "Venerdì"
    },
    saturday: {
        val: 6,
        description: "Sabato"
    },
    sunday: {
        val: 0,
        description: "Sunday"
    },
}

/**
 * DROPDOWN DATA MODE
 *  - Normal
 *  - API
 */
const DROPDOWN_DATA_MODES = {
    list: {
        val: 'list',
        description: "Standard - Lista predefinita di elementi"
    },
    api: {
        val: 'api',
        description: "API - Chiamata API per ottenere i dati della lista",
    },
}

/**
 * File Upload Modes
 */
const FILE_UPLOAD_MODES = {
    normal: {
        val: 'normal',
        description: "Conserva il file per post-processing" //Keep the file there for HTTP Form Request
    },

    preUpload: {
        val: 'preUpload',
        description: "Pre-upload del file"
    },
}

export  {
    RADIO_CHECKBOX_POSITION,
    RADIO_CHECKBOX_STYLE,
    RADIO_CHECKBOX_LABEL_POSITION,

    DATE_PICKER_RETURN_TYPES,
    DATE_PICKER_START_DATES,

    DROPDOWN_DATA_MODES,

    FILE_UPLOAD_MODES
}