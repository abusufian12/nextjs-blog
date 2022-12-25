"use strict";
exports.id = 4804;
exports.ids = [4804];
exports.modules = {

/***/ 4804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);


const Helium = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(9314), __webpack_require__.e(3311), __webpack_require__.e(2808), __webpack_require__.e(1892)]).then(__webpack_require__.bind(__webpack_require__, 1892)), {
    loadableGenerated: {
        modules: [
            "..\\components\\products\\cards\\card.tsx -> " + "@/components/products/cards/helium"
        ]
    }
});
const Neon = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(9314), __webpack_require__.e(3311), __webpack_require__.e(2808), __webpack_require__.e(6054)]).then(__webpack_require__.bind(__webpack_require__, 6054)), {
    loadableGenerated: {
        modules: [
            "..\\components\\products\\cards\\card.tsx -> " + "@/components/products/cards/neon"
        ]
    }
}); // grocery-two
const Argon = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(9314), __webpack_require__.e(3311), __webpack_require__.e(2808), __webpack_require__.e(5661)]).then(__webpack_require__.bind(__webpack_require__, 5661)), {
    loadableGenerated: {
        modules: [
            "..\\components\\products\\cards\\card.tsx -> " + "@/components/products/cards/argon"
        ]
    }
}); // bakery
const Krypton = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(4498)]).then(__webpack_require__.bind(__webpack_require__, 4498)) // furniture extra price
, {
    loadableGenerated: {
        modules: [
            "..\\components\\products\\cards\\card.tsx -> " + "@/components/products/cards/krypton"
        ]
    }
});
const Xenon = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(9314), __webpack_require__.e(3311), __webpack_require__.e(2808), __webpack_require__.e(3434)]).then(__webpack_require__.bind(__webpack_require__, 3434)), {
    loadableGenerated: {
        modules: [
            "..\\components\\products\\cards\\card.tsx -> " + "@/components/products/cards/xenon"
        ]
    }
}); // furniture-two
const Radon = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(3168)]).then(__webpack_require__.bind(__webpack_require__, 3168)), {
    loadableGenerated: {
        modules: [
            "..\\components\\products\\cards\\card.tsx -> " + "@/components/products/cards/radon"
        ]
    }
}); // Book
const MAP_PRODUCT_TO_CARD = {
    neon: Neon,
    helium: Helium,
    argon: Argon,
    krypton: Krypton,
    xenon: Xenon,
    radon: Radon
};
const ProductCard = ({ product , className , ...props })=>{
    const Component = product?.type?.settings?.productCard ? MAP_PRODUCT_TO_CARD[product?.type?.settings?.productCard] : Helium;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        product: product,
        ...props,
        className: className
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ })

};
;