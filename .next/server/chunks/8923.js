"use strict";
exports.id = 8923;
exports.ids = [8923];
exports.modules = {

/***/ 6560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ch": () => (/* binding */ useAttributes),
/* harmony export */   "iv": () => (/* binding */ AttributesProvider)
/* harmony export */ });
/* unused harmony export AttributesContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {};
const AttributesContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
AttributesContext.displayName = "AttributesContext";
const AttributesProvider = (props)=>{
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialState);
    const value = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({
            attributes: state,
            setAttributes: dispatch
        }), [
        state
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AttributesContext.Provider, {
        value: value,
        ...props
    });
};
const useAttributes = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(AttributesContext);
    if (context === undefined) {
        throw new Error(`useAttributes must be used within a SettingsProvider`);
    }
    return context;
};


/***/ }),

/***/ 8923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_get_variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9257);
/* harmony import */ var _lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var _details_variation_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6585);
/* harmony import */ var _details_variation_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7165);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6560);
/* harmony import */ var _add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2808);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_details_variation_price__WEBPACK_IMPORTED_MODULE_5__, _add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_8__, _framework_product__WEBPACK_IMPORTED_MODULE_9__]);
([_details_variation_price__WEBPACK_IMPORTED_MODULE_5__, _add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_8__, _framework_product__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Variation = ({ product  })=>{
    const { attributes  } = (0,_components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_7__/* .useAttributes */ .Ch)();
    const variations = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_lib_get_variations__WEBPACK_IMPORTED_MODULE_2__/* .getVariations */ .y)(product?.variations), [
        product?.variations
    ]);
    const isSelected = (0,_lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_3__/* .isVariationSelected */ .V)(variations, attributes);
    let selectedVariation = {};
    if (isSelected) {
        selectedVariation = product?.variation_options?.find((o)=>lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(o.options.map((v)=>v.value).sort(), Object.values(attributes).sort()));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[95vw] max-w-lg rounded-md bg-white p-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-2 text-center text-2xl font-semibold text-heading",
                children: product?.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-8 flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_details_variation_price__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    selectedVariation: selectedVariation,
                    minPrice: product.min_price,
                    maxPrice: product.max_price
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_details_variation_groups__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    variations: variations
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_8__/* .AddToCart */ .o, {
                data: product,
                variant: "big",
                variation: selectedVariation,
                disabled: selectedVariation?.is_disable || !isSelected
            })
        ]
    });
};
const ProductVariation = ({ productSlug  })=>{
    const { product , isLoading  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_9__/* .useProduct */ .iB)({
        slug: productSlug
    });
    if (isLoading || !product) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_7__/* .AttributesProvider */ .iv, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Variation, {
            product: product
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductVariation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;