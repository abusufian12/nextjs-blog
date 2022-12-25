"use strict";
exports.id = 8010;
exports.ids = [8010];
exports.modules = {

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7896);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7608);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2057);
/* harmony import */ var _components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8519);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__, _framework_product__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__, _framework_product__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const questionFormSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    question: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("error-description-required")
});
function QuestionForm() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const { data  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalState */ .X9)();
    const { createQuestion , isLoading  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_7__/* .useCreateQuestion */ .OZ)();
    const onSubmit = (values)=>{
        createQuestion({
            product_id: data.product_id,
            shop_id: data.shop_id,
            question: values.question
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full min-h-screen w-screen flex-col bg-light p-7 md:h-auto md:min-h-0 md:max-w-[590px] md:justify-center md:rounded-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-6 text-center text-lg font-semibold text-heading",
                children: t("text-ask-question")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l, {
                onSubmit: onSubmit,
                validationSchema: questionFormSchema,
                children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                ...register("question"),
                                variant: "outline",
                                className: "mb-5",
                                error: t(errors.question?.message)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-semibold leading-relaxed text-gray-500 ltr:pr-5 rtl:pl-5",
                                        children: t("text-question-additional-info")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "h-11 w-auto sm:h-12",
                                        loading: isLoading,
                                        disabled: isLoading,
                                        children: t("text-submit")
                                    })
                                ]
                            })
                        ]
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