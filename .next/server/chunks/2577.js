exports.id = 2577;
exports.ids = [2577];
exports.modules = {

/***/ 8117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ ArrowDownIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ArrowDownIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 7.2",
        width: 12,
        height: 7.2,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M6.002 5.03L10.539.265a.826.826 0 011.211 0 .94.94 0 010 1.275l-5.141 5.4a.827.827 0 01-1.183.026L.249 1.545a.937.937 0 010-1.275.826.826 0 011.211 0z",
            fill: "currentColor"
        })
    });


/***/ }),

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ArrowNarrowLeft = ({ width , height , strokeWidth =2 , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: strokeWidth,
            d: "M7 16l-4-4m0 0l4-4m-4 4h18"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowNarrowLeft);


/***/ }),

/***/ 1530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4872);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_forms_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1010);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1427);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _framework_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3386);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4246);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_category__WEBPACK_IMPORTED_MODULE_7__]);
_framework_category__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const CategoryFilterView = ({ categories  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const selectedValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>router.query.category ? router.query.category.split(",") : [], [
        router.query.category
    ]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>selectedValues);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setState(selectedValues);
    }, [
        selectedValues
    ]);
    function handleChange(values) {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                category: values.join(",")
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            style: {
                maxHeight: "400px"
            },
            className: "pb-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "sr-only",
                    children: t("text-categories")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_checkbox_group__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        values: state,
                        onChange: handleChange,
                        children: categories.map((plan)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: plan.name,
                                name: plan.slug,
                                value: plan.slug,
                                theme: "secondary"
                            }, plan.id))
                    })
                })
            ]
        })
    });
};
const CategoryFilter = ({ type  })=>{
    const { query , locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // @ts-ignore
    const { categories , isLoading , error  } = (0,_framework_category__WEBPACK_IMPORTED_MODULE_7__/* .useCategories */ .L)({
        ...type ? {
            type
        } : {
            type: query.searchType
        },
        limit: 1000
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: error.message
    });
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full items-center justify-center py-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: "h-6 w-6",
            simple: true
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryFilterView, {
        categories: categories
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CheckboxGroup = ({ children , values , onChange  })=>{
    const onChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        const { value  } = e.target;
        const newValues = values.includes(value) ? values.filter((v)=>v !== value) : [
            ...values,
            value
        ];
        onChange(newValues);
    }, [
        values,
        onChange
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child)=>{
            if (!/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {
                return child;
            }
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {
                onChange: onChangeHandler,
                checked: values.includes(child.props.value)
            });
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxGroup);


/***/ }),

/***/ 9600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4872);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_forms_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1010);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1427);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _framework_manufacturer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1416);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4246);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_manufacturer__WEBPACK_IMPORTED_MODULE_7__]);
_framework_manufacturer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ManufacturerFilterView = ({ manufacturers  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const selectedValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>router.query.manufacturer ? router.query.manufacturer.split(",") : [], [
        router.query.manufacturer
    ]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectedValues);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setState(selectedValues);
    }, [
        selectedValues
    ]);
    function handleChange(values) {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                manufacturer: values.join(",")
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            style: {
                maxHeight: "400px"
            },
            className: "pb-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "sr-only",
                    children: t("text-manufacturers")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_checkbox_group__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        values: state,
                        onChange: handleChange,
                        children: manufacturers.map((plan)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: plan.name,
                                name: plan.slug,
                                value: plan.slug,
                                theme: "secondary"
                            }, plan.id))
                    })
                })
            ]
        })
    });
};
const ManufacturerFilter = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { manufacturers , isLoading , error  } = (0,_framework_manufacturer__WEBPACK_IMPORTED_MODULE_7__/* .useManufacturers */ .e)({
        language: locale,
        limit: 100
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: error.message
    });
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full items-center justify-center py-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: "h-6 w-6",
            simple: true
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ManufacturerFilterView, {
        manufacturers: manufacturers
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManufacturerFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ price_filter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/rc-slider/assets/index.css
var assets = __webpack_require__(2950);
// EXTERNAL MODULE: external "rc-slider"
var external_rc_slider_ = __webpack_require__(1817);
var external_rc_slider_default = /*#__PURE__*/__webpack_require__.n(external_rc_slider_);
;// CONCATENATED MODULE: ./src/components/ui/forms/range-slider.tsx



// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./src/components/search-view/price-filter.tsx





const { Range  } = (external_rc_slider_default());
const defaultPriceRange = [
    0,
    1000
];
const PriceFilter = ()=>{
    const { t  } = (0,external_react_i18next_.useTranslation)("common");
    const router = (0,router_.useRouter)();
    const selectedValues = (0,external_react_.useMemo)(()=>router.query.price ? router.query.price.split(",") : defaultPriceRange, [
        router.query.price
    ]);
    const [state, setState] = (0,external_react_.useState)(selectedValues);
    (0,external_react_.useEffect)(()=>{
        setState(selectedValues);
    }, [
        selectedValues
    ]);
    function handleChange(value) {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                price: value.join(",")
            }
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: t("text-sort-by-price")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Range, {
                allowCross: false,
                min: 0,
                max: 2000,
                //@ts-ignore
                defaultValue: state,
                //@ts-ignore
                value: state,
                onChange: (value)=>setState(value),
                onAfterChange: handleChange
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-2 gap-3 mt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-start p-2 bg-gray-100 border border-gray-200 rounded",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "text-sm font-semibold text-gray-400",
                                children: "Min"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm font-bold text-heading",
                                children: state[0]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col p-2 bg-gray-100 border border-gray-200 rounded",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "text-sm font-semibold text-gray-400",
                                children: "Max"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm font-bold text-heading",
                                children: state[1]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const price_filter = (PriceFilter);


/***/ }),

/***/ 2577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_disclosure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5896);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_search_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(148);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6663);
/* harmony import */ var _components_search_view_price_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6994);
/* harmony import */ var _components_search_view_category_filter_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1530);
/* harmony import */ var _components_search_view_tag_filter_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3445);
/* harmony import */ var _components_search_view_manufacturer_filter_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9600);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2451);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7246);
/* harmony import */ var _components_icons_arrow_narrow_left__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(582);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3139);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_disclosure__WEBPACK_IMPORTED_MODULE_1__, _sorting__WEBPACK_IMPORTED_MODULE_5__, _components_search_view_category_filter_view__WEBPACK_IMPORTED_MODULE_7__, _components_search_view_tag_filter_view__WEBPACK_IMPORTED_MODULE_8__, _components_search_view_manufacturer_filter_view__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__]);
([_components_ui_disclosure__WEBPACK_IMPORTED_MODULE_1__, _sorting__WEBPACK_IMPORTED_MODULE_5__, _components_search_view_category_filter_view__WEBPACK_IMPORTED_MODULE_7__, _components_search_view_tag_filter_view__WEBPACK_IMPORTED_MODULE_8__, _components_search_view_manufacturer_filter_view__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const FieldWrapper = ({ children , title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border-b border-gray-200 py-7 last:border-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_disclosure__WEBPACK_IMPORTED_MODULE_1__/* .CustomDisclosure */ .Q, {
            title: title,
            children: children
        })
    });
function ClearFiltersButton() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    function clearFilters() {
        const { price , category , sortedBy , orderBy , tags , manufacturer , text , ...rest } = router.query;
        router.push({
            pathname: router.pathname,
            query: {
                ...rest,
                ...router.route !== "/[searchType]/search" && {
                    manufacturer
                }
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "text-sm font-semibold transition-colors text-body hover:text-red-500 focus:text-red-500 focus:outline-none lg:m-0",
        onClick: clearFilters,
        children: t("text-clear-all")
    });
}
const SidebarFilter = ({ type , showManufacturers =true , className  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_14__/* .useIsRTL */ .S)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__/* .drawerAtom */ .P);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("flex bg-white w-full h-full lg:h-auto flex-col lg:border border-gray-200 rounded-xl", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sticky top-0 z-10 flex items-center justify-between px-5 py-6 bg-white border-b border-gray-200 lg:static rounded-tl-xl rounded-tr-xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-3 rtl:space-x-reverse lg:space-x-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "text-body focus:outline-none lg:hidden",
                                onClick: ()=>closeSidebar({
                                        display: false,
                                        view: ""
                                    }),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_narrow_left__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("h-7", {
                                            "rotate-180": isRTL
                                        }),
                                        strokeWidth: 1.7
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: t("text-close")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-xl font-semibold lg:text-2xl text-heading",
                                children: t("text-filter")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClearFiltersButton, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 px-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldWrapper, {
                        title: "text-search",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            variant: "minimal",
                            label: "search"
                        })
                    }),
                    router.route !== "/[searchType]/search" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldWrapper, {
                        title: "text-sort",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sorting__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldWrapper, {
                        title: "text-categories",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_category_filter_view__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            type: type
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldWrapper, {
                        title: "text-sort-by-price",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_price_filter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldWrapper, {
                        title: "text-tags",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_tag_filter_view__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    }),
                    showManufacturers && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldWrapper, {
                        title: "text-manufacturers",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_manufacturer_filter_view__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-5 bg-white sticky bottom-0 z-10 border-t border-gray-200 mt-auto lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    className: "w-full",
                    onClick: ()=>closeSidebar({
                            display: false,
                            view: ""
                        }),
                    children: "Show Products"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1427);
/* harmony import */ var _components_ui_select_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7499);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const plans = [
    {
        id: "1",
        key: "sorting",
        label: "New Released",
        value: "created_at",
        orderBy: "created_at",
        sortedBy: "DESC"
    },
    {
        id: "2",
        key: "sorting",
        label: "Sort by Price: Low to High",
        value: "min_price",
        orderBy: "min_price",
        sortedBy: "ASC"
    },
    {
        id: "3",
        key: "sorting",
        label: "Sort by Price: High to Low",
        value: "max_price",
        orderBy: "max_price",
        sortedBy: "DESC"
    }
];
const Sorting = ({ variant ="radio"  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)("common");
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_7__/* .useIsRTL */ .S)();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>plans.find((plan)=>plan.orderBy === router.query.orderBy) ?? plans[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!router.query.orderBy) {
            setSelected(plans[0]);
        }
    }, [
        router.query.orderBy
    ]);
    function handleChange(values) {
        const { orderBy , sortedBy  } = values;
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                orderBy,
                sortedBy
            }
        });
        setSelected(values);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            variant === "dropdown" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select_select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                defaultValue: selected,
                isRtl: isRTL,
                options: plans,
                isSearchable: false,
                // @ts-ignore
                onChange: handleChange
            }),
            variant === "radio" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                style: {
                    maxHeight: "400px"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup, {
                    value: selected,
                    onChange: handleChange,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup.Label, {
                            className: "sr-only",
                            children: t("text-sort")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "space-y-4",
                            children: plans.map((plan)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup.Option, {
                                    value: plan,
                                    children: ({ checked  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center w-full cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: `h-[18px] w-[18px] rounded-full bg-white ltr:mr-3 rtl:ml-3 ${checked ? "border-[5px] border-gray-800" : "border border-gray-600"}`
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup.Label, {
                                                        as: "p",
                                                        className: "text-sm text-body",
                                                        children: plan.label
                                                    })
                                                ]
                                            })
                                        })
                                }, plan.id))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sorting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4872);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_forms_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1010);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1427);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4246);
/* harmony import */ var _framework_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2307);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_tag__WEBPACK_IMPORTED_MODULE_8__]);
_framework_tag__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const TagFilterView = ({ tags  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const selectedValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>router.query.tags ? router.query.tags?.split(",") : [], [
        router.query.tags
    ]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectedValues);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setState(selectedValues);
    }, [
        selectedValues
    ]);
    function handleChange(values) {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                tags: values.join(",")
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            style: {
                maxHeight: "400px"
            },
            className: "pb-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "sr-only",
                    children: t("text-tags")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_checkbox_group__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        values: state,
                        onChange: handleChange,
                        children: tags.map((plan)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: plan.name,
                                name: plan.slug,
                                value: plan.slug,
                                theme: "secondary"
                            }, plan.id))
                    })
                })
            ]
        })
    });
};
const TagFilter = ()=>{
    const { tags , isLoading , error  } = (0,_framework_tag__WEBPACK_IMPORTED_MODULE_8__/* .useTags */ .e)({
        limit: 100
    });
    let err = error;
    if (err) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: err?.message
    });
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center w-full py-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: "w-6 h-6",
            simple: true
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TagFilterView, {
        tags: tags
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ CustomDisclosure)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _components_icons_arrow_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8117);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CustomDisclosure = ({ title , children , ...props })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
        defaultOpen: true,
        ...props,
        children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                        className: "w-full flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-accent focus:ring-opacity-40",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-bold text-heading",
                                children: t(title)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_down__WEBPACK_IMPORTED_MODULE_2__/* .ArrowDownIcon */ .v, {
                                className: `w-2.5 h-2.5 ${open ? "transform rotate-180" : ""}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                        className: "pt-4",
                        children: children
                    })
                ]
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Checkbox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(({ className , label , name , error , theme ="primary" , ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: name,
                        name: name,
                        type: "checkbox",
                        ref: ref,
                        className: "checkbox",
                        ...rest
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: name,
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-body text-sm", {
                            primary: theme === "primary",
                            secondary: theme === "secondary"
                        }),
                        children: label
                    })
                ]
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-2 text-xs ltr:text-right rtl:text-left text-red-500",
                children: error
            })
        ]
    });
});
Checkbox.displayName = "Checkbox";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ }),

/***/ 2307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useTags)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7422);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4648);
/* harmony import */ var _framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9787);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useTags = (options)=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , isFetchingNextPage , fetchNextPage , hasNextPage , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.TAGS */ .P.TAGS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].tags.all */ .Z.tags.all(Object.assign({}, queryKey[1], pageParam)), {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    return {
        tags: data?.pages?.flatMap((page)=>page.data) ?? [],
        paginatorInfo: Array.isArray(data?.pages) ? (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(data?.pages[data.pages.length - 1]) : null,
        isLoading,
        isLoadingMore: isFetchingNextPage,
        error,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2950:
/***/ (() => {



/***/ })

};
;