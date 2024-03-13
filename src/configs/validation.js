/**
 * Validation Rules of Vue-Form-Builder
 * - desc: Validation Rule Info
 * - needValue - boolean: Need additional value from user or not? True is yes
 * - errorMessage: default error message, can be edit by the users
 * -
 */

const VALIDATION_RULES = {
    required: {
        desc: "Il campo deve avere un valore (almeno la lunghezza deve essere 1)",
        needValue: false,
        errorMessage: "Questo campo è obbligatorio",
    },

    min: {
        desc: "Lunghezza minima del valore. Per il campo numerico, sarà il valore (non la lunghezza)",

        needValue: true,
        valueInfo: "Valore minimo",

        errorMessage: "Il valore minimo per questo campo è :min",
    },

    max: {
        desc: "Lunghezza massima del valore. Per il campo numerico, sarà il valore (non la lunghezza)",

        needValue: true,
        valueInfo: "Valore massimo",

        errorMessage: "Il valore massimo per questo campo è :max",
    },

    isEmail: {
        desc: "Convalida l'indirizzo e-mail",
        needValue: false,
        errorMessage: "Formato dell'indirizzo e-mail errato",
    },

    regex: {
        desc: "Convalida il campo utilizzando una regola Regex",

        needValue: true,
        valueInfo: "Formato: Pattern Regex|Flag - es: [0-9]+|g",

        errorMessage: "Questo valore non correponde al formato richiesto",
    },

    sameAs: {
        desc: "Controlla se il campo ha lo stesso valore di un altro campo",

        needValue: true,
        valueInfo: "Il nome del campo con cui vuoi verificare",

        errorMessage: "Questo valore di campo non è uguale a :sameAs",
    },

    customClosure: {
        desc: "Utilizza una funzione custom per convalidare il campo",

        needValue: true,
        valueInfo: "Nome del metodo",

        errorMessage: "Questo campo non è valido",
    }
}

/**
 * Add Validation Rule for the Control Validation
 * @param ruleType
 * @returns {{errorMessage: (string), type: (string)}}
 */
class ValidationRule {
    /**
     * Needed properties
     */
    ruleType = ""
    errorMessage = ""
    additionalValue = ""

    constructor(ruleType, customErrorMessage) {
        this.ruleType = ruleType

        if (ruleType) {
            this.errorMessage = customErrorMessage || VALIDATION_RULES[ruleType].errorMessage || ""
        }
    }
}

export
{
    VALIDATION_RULES,
    ValidationRule
}