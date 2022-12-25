"use strict";
exports.id = 8032;
exports.ids = [8032];
exports.modules = {

/***/ 8032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbuseReport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1116);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2057);
/* harmony import */ var _components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8519);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_product__WEBPACK_IMPORTED_MODULE_2__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__]);
([_framework_product__WEBPACK_IMPORTED_MODULE_2__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function AbuseReport({ data  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const { createAbuseReport , isLoading  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_2__/* .useCreateAbuseReport */ .Bk)();
    function onSubmit(values) {
        createAbuseReport({
            ...data,
            ...values
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light p-7 md:h-auto md:min-h-0 md:max-w-[590px] md:rounded-xl",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
            onSubmit: onSubmit,
            children: ({ register  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            label: t("text-reason"),
                            ...register("message")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            loading: isLoading,
                            disabled: isLoading,
                            children: t("text-report")
                        })
                    ]
                })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;