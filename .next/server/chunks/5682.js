"use strict";
exports.id = 5682;
exports.ids = [5682];
exports.modules = {

/***/ 4246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": () => (/* binding */ Error),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);


const Error = ({ message  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mt-2 text-xs text-red-500 ltr:text-left rtl:text-right",
        children: t(message)
    });
};
const ErrorMessage = ({ message  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "max-w-sm p-5 mx-auto mt-16 text-lg font-semibold text-center bg-red-400 rounded min-w-min text-light",
        children: t(message)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ }),

/***/ 9787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ mapPaginatorData)
/* harmony export */ });
/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3104);
/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camelcase_keys__WEBPACK_IMPORTED_MODULE_0__);

const mapPaginatorData = (obj)=>{
    if (!obj) return null;
    const { data , ...formattedValues } = camelcase_keys__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    return {
        ...formattedValues,
        hasMorePages: formattedValues.lastPage !== formattedValues.currentPage,
        firstItem: formattedValues.from,
        lastItem: formattedValues.to
    };
};


/***/ })

};
;