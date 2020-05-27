/**
 * Event-Communication Constants in Vue-Form-Builder
 * @author Phat Tran <phattranminh96@gmai.com>
 */


const EVENT_CONSTANTS = {
    /**
     * Constants for Form-Builder
     */
    BUILDER: {
        SECTION: {
            ADDED_ROW: "builder.section.added_row",
            DELETE: "builder.section.delete",
            UPDATE: "builder.section.update",

            // section sort
            PUSH: "builder.section.push"
        },
        ROW: {
            CREATE: "builder.row.add",
            UPDATE: "builder.row.update",
            DELETE: "builder.row.delete",
        },

        /**
         * GLOBAL SIDEBAR EVENTS
         */
        SIDEBAR: {
            INJECT: "builder.sidebar.inject",
            OPEN: "builder.sidebar.open",
            OPENED: "builder.sidebar.opened",
            SAVE: "builder.sidebar.save",
            AFTER_CLOSED: "builder.sidebar.after_closed",
        }
    },

    /**
     * Constants for Form-Renderer
     */
    RENDERER: {

    }
};

export {
    EVENT_CONSTANTS
}