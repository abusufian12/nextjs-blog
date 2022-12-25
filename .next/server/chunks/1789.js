"use strict";
exports.id = 1789;
exports.ids = [1789];
exports.modules = {

/***/ 6585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ variation_groups)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/boxed-attribute.tsx


const BoxedAttribute = ({ title , value , active , className , color , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("h-full py-2 px-5 flex flex-col rounded items-center justify-center border border-gray-200 bg-gray-50 cursor-pointer text-body font-semibold", {
            "!border-accent !border-2 !text-accent": active
        }),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: value
            })
        ]
    });
};
/* harmony default export */ const boxed_attribute = (BoxedAttribute);

;// CONCATENATED MODULE: ./src/components/ui/attribute.tsx



function Attribute({ type , isActive , value , color , attribute , variant ="normal" , onClick  }) {
    switch(type){
        case "formats":
            return /*#__PURE__*/ jsx_runtime_.jsx(boxed_attribute, {
                title: "Hardcover",
                value: "$9.59",
                active: isActive
            });
        case "color":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                role: "button",
                onClick: onClick,
                className: external_classnames_default()("flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-transparent p-0.5", {
                    "!border-accent": isActive
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "h-full w-full rounded-full border border-border-200",
                    style: {
                        backgroundColor: color
                    }
                })
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                role: "button",
                onClick: onClick,
                className: external_classnames_default()("cursor-pointer whitespace-nowrap rounded border-border-200 bg-gray-50 px-4 py-3 text-sm text-heading transition-colors", {
                    "!border-accent !bg-accent !text-light": isActive && variant === "normal",
                    "!border-accent !text-accent": isActive && variant === "outline",
                    "border-2 font-semibold": variant === "outline",
                    border: variant === "normal"
                }),
                children: value
            });
    }
}
// const Attribute: React.FC<AttributeProps> = ({
//   value,
//   active,
//   className,
//   color,
//   ...props
// }) => {
//   const classes = cn(
//     {
//       'px-4 py-3 text-sm border rounded text-heading bg-gray-50 border-border-200':
//         className !== 'color',
//       '!text-light !bg-accent !border-accent': active && className !== 'color',
//       'h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent':
//         className === 'color',
//       '!border-accent': active && className === 'color',
//     },
//     'cursor-pointer'
//   );
//   return (
//     <div className={classes} {...props}>
//       {className === 'color' ? (
//         <span
//           className="w-full h-full rounded-full border border-border-200"
//           style={{ backgroundColor: color }}
//         />
//       ) : (
//         value
//       )}
//     </div>
//   );
// };
/* harmony default export */ const ui_attribute = (Attribute);

// EXTERNAL MODULE: ./src/components/products/details/attributes.context.tsx
var attributes_context = __webpack_require__(6560);
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(1427);
;// CONCATENATED MODULE: ./src/components/products/details/variation-groups.tsx




const VariationGroups = ({ variations , variant  })=>{
    const { attributes , setAttributes  } = (0,attributes_context/* useAttributes */.Ch)();
    const replaceHyphens = (str)=>{
        return str.replace(/-/g, " ");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: Object.keys(variations).map((variationName, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center border-b border-border-200 border-opacity-70 py-4 first:pt-0 last:border-b-0 last:pb-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "inline-block min-w-[60px] whitespace-nowrap text-sm font-semibold capitalize leading-none text-heading ltr:mr-5 rtl:ml-5",
                        children: [
                            replaceHyphens(variationName),
                            " :"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "-mb-5 w-full overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                            className: "w-full pb-5",
                            options: {
                                scrollbars: {
                                    autoHide: "never"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "-mb-1.5 flex w-full space-x-4 rtl:space-x-reverse",
                                children: variations[variationName].map((attribute)=>/*#__PURE__*/ jsx_runtime_.jsx(ui_attribute, {
                                        // className={variationName}
                                        type: variationName,
                                        color: attribute.meta ? attribute.meta : attribute?.value,
                                        isActive: attributes[variationName] === attribute.value,
                                        value: attribute.value,
                                        variant: variant,
                                        onClick: ()=>setAttributes((prev)=>({
                                                    ...prev,
                                                    [variationName]: attribute.value
                                                }))
                                    }, attribute.id))
                            })
                        })
                    })
                ]
            }, index))
    });
};
/* harmony default export */ const variation_groups = (VariationGroups);


/***/ }),

/***/ 7165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariationPrice)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2083);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_1__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function VariationPrice({ selectedVariation , minPrice , maxPrice  }) {
    const { price , basePrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(selectedVariation && {
        amount: Number(selectedVariation.sale_price ? selectedVariation.sale_price : selectedVariation.price),
        baseAmount: Number(selectedVariation.price)
    });
    const { price: min_price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: Number(minPrice)
    });
    const { price: max_price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: Number(maxPrice)
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                className: "text-2xl md:text-3xl font-semibold text-accent no-underline",
                children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(selectedVariation) ? `${price}` : `${min_price} - ${max_price}`
            }),
            basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                className: "text-sm md:text-base font-normal text-muted ltr:ml-2 rtl:mr-2",
                children: basePrice
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getVariations)
/* harmony export */ });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);

function getVariations(variations) {
    if (!variations) return {};
    return lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(variations, "attribute.slug");
}


/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ isVariationSelected)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);

function isVariationSelected(variations, attributes) {
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(variations)) return true;
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(attributes)) {
        return Object.keys(variations).every((variation)=>attributes.hasOwnProperty(variation));
    }
    return false;
}


/***/ })

};
;