"use strict";
exports.id = 9965;
exports.ids = [9965];
exports.modules = {

/***/ 9965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Standard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_banners_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3429);
/* harmony import */ var _components_categories_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5644);
/* harmony import */ var _components_products_grids_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9504);
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__, _components_categories_categories__WEBPACK_IMPORTED_MODULE_2__, _components_products_grids_home__WEBPACK_IMPORTED_MODULE_3__, _filter_bar__WEBPACK_IMPORTED_MODULE_4__]);
([_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__, _components_categories_categories__WEBPACK_IMPORTED_MODULE_2__, _components_products_grids_home__WEBPACK_IMPORTED_MODULE_3__, _filter_bar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Standard({ variables  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                layout: "standard",
                variables: variables.types
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_bar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variables: variables.categories
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                layout: "standard",
                variables: variables.categories
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "flex-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grids_home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "px-4 py-8 lg:p-8",
                    variables: variables.products
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;