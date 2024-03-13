/**
 * Supported Section & Section Constants in Vue-Form-Builder
 * @author Phat Tran
 */
import {HELPER} from "@/libraries/helper";
import {ROW_TYPES} from "@/configs/row";

// Builder Views
import NormalSectionView from "@/views/builder/section-views/NormalSectionView";
// import TableSectionView from "@/views/builder/section-views/TableSectionView";
import ToggleableSectionView from "@/views/builder/section-views/ToggleableSectionView";
import TabSectionView from "@/views/builder/section-views/TabSectionView";

// Builder Buttons [PRE]
import TabSectionPreButtons from "@/views/builder/section-navigation-buttons/TabSectionPreButtons";

// Builder Buttons [POST]

// Renderer Views
import RendererNormalSectionView from "@/views/renderer/section-views/NormalSectionView";
import RendererToggleableSectionView from "@/views/renderer/section-views/ToggleableSectionView";
import RendererTabSectionView from "@/views/renderer/section-views/TabSectionView";




const SECTION_TYPES = {
    normal: {
        name: "Blocco standard",
        description: "Blocco standard con titolo",
        value: 'normal',

        rowType: ROW_TYPES.normal,
        builderView: NormalSectionView,
        rendererView: RendererNormalSectionView,
    },

    toggleable: {
        name: "Blocco richiudibile",
        description: "Blocco dotato di switch (visualizza/nascondi)",
        value: 'toggleable',

        rowType: ROW_TYPES.normal,
        builderView: ToggleableSectionView,
        rendererView: RendererToggleableSectionView
    },

    tab: {
        name: "Blocco tabs",
        description: "Blocco dotato di tab multiple",
        value: "tab",

        rowType: ROW_TYPES.tabRow,
        builderView: TabSectionView,
        rendererView: RendererTabSectionView,
        preCustomButtonView: TabSectionPreButtons,
    }

    // table: {
    //     name: "Table Block",
    //     description: "Section block built from a table with 2 column",
    //     value: 'table',
    //
    //     rowType: ROW_TYPES.tableRow,
    //     builderView: TableSectionView
    // },


};

/**
 * DEFAULT DATA in order to create/reread from the configuration
 */
const SECTION_DEFAULT_DATA = {
    uniqueId: '',

    headline: '',
    headlineAdditionalClass: '',

    subHeadline: '',
    subHeadlineAdditionalClass: '',

    isShowHeadline: true,

    sortOrder: 0,
    type: '',
    rows: [], // array of rowId
    controls: [], // array of controlIds
};

/**
 * Create new Section
 * @param type
 * @param sortOrder
 */
function createNewSection(type, sortOrder = 0) {
    if (!SECTION_TYPES[type]) {
        throw new TypeError(`Section Type: ${type} doesn't exists in Vue-Form-Builder`);
    }

    // create new section data base on the default data
    let newSectionData = HELPER.cloneDeep(SECTION_DEFAULT_DATA)
    newSectionData.type = type
    newSectionData.uniqueId = "section-" + HELPER.getUUIDv4()
    newSectionData.headline = "Nuova sezione"
    newSectionData.subHeadline = "Sottotitolo della sezione"
    newSectionData.sortOrder = sortOrder

    return newSectionData;
}

export {
    SECTION_TYPES,
    SECTION_DEFAULT_DATA,
    createNewSection
}