"use strict";
exports.id = 7636;
exports.ids = [7636];
exports.modules = {

/***/ 2921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport default from dynamic */ next_image__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Link = ({ children , variant , title , target , className , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                "inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none px-3 py-0 h-9 text-sm bg-accent text-light border border-transparent hover:bg-accent-hover transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700'": variant === "button"
            }, className),
            title: title,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 7507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Routes)
/* harmony export */ });
const Routes = {
    home: "/",
    checkout: "/checkout",
    checkoutDigital: "/checkout/digital",
    checkoutGuest: "/checkout/guest",
    profile: "/profile",
    changePassword: "/change-password",
    orders: "/orders",
    order: (tracking_number)=>`/orders/${encodeURIComponent(tracking_number)}`,
    refunds: "/refunds",
    help: "/help",
    logout: "/logout",
    coupons: "/offers",
    orderReceived: "/order-received",
    products: "/products",
    product: (slug)=>{
        // if (asPath) {
        //   return `/products/${encodeURIComponent(slug)}?type=${asPath}`;  
        // }
        return `/products/${encodeURIComponent(slug)}`;
    },
    privacy: "/privacy",
    terms: "/terms",
    contactUs: "/contact",
    shops: "/shops",
    shop: (slug)=>`/shops/${encodeURIComponent(slug)}`,
    downloads: "/downloads",
    authors: "/authors",
    author: (slug)=>`/authors/${encodeURIComponent(slug)}`,
    manufacturers: "/manufacturers",
    manufacturer: (slug)=>`/manufacturers/${encodeURIComponent(slug)}`,
    search: "/search",
    wishlists: "/wishlists",
    questions: "/questions",
    reports: "/reports"
};


/***/ })

};
;