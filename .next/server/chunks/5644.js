"use strict";
exports.id = 5644;
exports.ids = [5644];
exports.modules = {

/***/ 5644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Categories)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4246);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _framework_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_category__WEBPACK_IMPORTED_MODULE_3__]);
_framework_category__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StickySidebarListCategories = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2732), __webpack_require__.e(1963), __webpack_require__.e(5434), __webpack_require__.e(494)]).then(__webpack_require__.bind(__webpack_require__, 494)), {
    loadableGenerated: {
        modules: [
            "..\\components\\categories\\categories.tsx -> " + "@/components/categories/sticky-sidebar-list-categories"
        ]
    }
});
const StaticSidebarVerticalRectangleCategories = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(3139), __webpack_require__.e(2732), __webpack_require__.e(6153), __webpack_require__.e(9112), __webpack_require__.e(8858)]).then(__webpack_require__.bind(__webpack_require__, 8858)), {
    loadableGenerated: {
        modules: [
            "..\\components\\categories\\categories.tsx -> " + "@/components/categories/sliding-vertical-rectangle-categories"
        ]
    }
});
const StickySidebarBoxedCategories = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2732), __webpack_require__.e(1963), __webpack_require__.e(5434), __webpack_require__.e(9976)]).then(__webpack_require__.bind(__webpack_require__, 9976)), {
    loadableGenerated: {
        modules: [
            "..\\components\\categories\\categories.tsx -> " + "@/components/categories/sticky-sidebar-boxed-categories"
        ]
    }
});
const FilterCategoryGrid = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7896), __webpack_require__.e(1116), __webpack_require__.e(2732), __webpack_require__.e(4804), __webpack_require__.e(3206), __webpack_require__.e(9504), __webpack_require__.e(1963), __webpack_require__.e(1505)]).then(__webpack_require__.bind(__webpack_require__, 1595)), {
    loadableGenerated: {
        modules: [
            "..\\components\\categories\\categories.tsx -> " + "@/components/categories/filter-category-grid"
        ]
    }
});
const SlidingCardCategories = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(3139), __webpack_require__.e(2732), __webpack_require__.e(6153), __webpack_require__.e(9112), __webpack_require__.e(4521), __webpack_require__.e(7243)]).then(__webpack_require__.bind(__webpack_require__, 7243)), {
    loadableGenerated: {
        modules: [
            "..\\components\\categories\\categories.tsx -> " + "@/components/categories/sliding-card-category"
        ]
    }
});
const MAP_CATEGORY_TO_GROUP = {
    classic: StickySidebarListCategories,
    modern: StickySidebarBoxedCategories,
    standard: StaticSidebarVerticalRectangleCategories,
    minimal: FilterCategoryGrid,
    compact: SlidingCardCategories,
    default: StickySidebarListCategories
};
function Categories({ layout , className , variables  }) {
    const { categories , isLoading , error  } = (0,_framework_category__WEBPACK_IMPORTED_MODULE_3__/* .useCategories */ .L)(variables);
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: error.message
    });
    const Component = MAP_CATEGORY_TO_GROUP[layout];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        notFound: !Boolean(categories.length),
        categories: categories,
        loading: isLoading,
        className: className,
        variables: variables
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;