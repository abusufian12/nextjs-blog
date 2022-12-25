"use strict";
exports.id = 9702;
exports.ids = [9702];
exports.modules = {

/***/ 6378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2921);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6443);
/* harmony import */ var _components_ui_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9314);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8855);
/* harmony import */ var _lib_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8384);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2083);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_use_price__WEBPACK_IMPORTED_MODULE_6__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_use_price__WEBPACK_IMPORTED_MODULE_6__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CartItem = ({ item  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("common");
    const { isInStock , clearItemFromCart , addItemToCart , removeItemFromCart , updateCartLanguage , language  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__/* .useCart */ .jD)();
    const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)({
        amount: item.price
    });
    const { price: itemPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)({
        amount: item.itemTotal
    });
    function handleIncrement(e) {
        e.stopPropagation();
        // Check language and update
        if (item?.language !== language) {
            updateCartLanguage(item?.language);
        }
        addItemToCart(item, 1);
    }
    const handleRemoveClick = (e)=>{
        e.stopPropagation();
        removeItemFromCart(item.id);
    };
    const outOfStock = !isInStock(item.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        layout: true,
        initial: "from",
        animate: "to",
        exit: "from",
        variants: (0,_lib_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_9__/* .fadeInOut */ .I)(0.25),
        className: "flex items-center border-b border-solid border-border-200 border-opacity-75 py-4 px-4 text-sm sm:px-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_counter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    value: item.quantity,
                    onDecrement: handleRemoveClick,
                    onIncrement: handleIncrement,
                    variant: "pillVertical",
                    disabled: outOfStock
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                    src: item?.image ?? _config_site__WEBPACK_IMPORTED_MODULE_3__/* .siteSettings */ .U?.product?.placeholderImage,
                    alt: item.name,
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: "font-bold text-heading",
                        children: [
                            item.name,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "my-2.5 font-semibold text-accent",
                        children: price
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-xs text-body",
                        children: [
                            item.quantity,
                            " X ",
                            item.unit
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-bold text-heading ltr:ml-auto rtl:mr-auto",
                children: itemPrice
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-none ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2",
                onClick: ()=>clearItemFromCart(item.id),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t("text-close")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_5__/* .CloseIcon */ .T, {
                        className: "h-3 w-3"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_icons_cart_check_bag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7453);
/* harmony import */ var _components_icons_empty_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9119);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8855);
/* harmony import */ var _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6378);
/* harmony import */ var _lib_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8384);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7507);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2083);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1698);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3069);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2451);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_6__, _lib_use_price__WEBPACK_IMPORTED_MODULE_8__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_6__, _lib_use_price__WEBPACK_IMPORTED_MODULE_8__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const CartSidebarView = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("common");
    const { items , totalUniqueItems , total , language  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_9__/* .useCart */ .jD)();
    const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_12__/* .drawerAtom */ .P);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    function handleCheckout() {
        const isRegularCheckout = items.find((item)=>!Boolean(item.is_digital));
        if (isRegularCheckout) {
            router.push(_config_routes__WEBPACK_IMPORTED_MODULE_7__/* .Routes.checkout */ .Z.checkout, undefined, {
                locale: language
            });
        } else {
            router.push(_config_routes__WEBPACK_IMPORTED_MODULE_7__/* .Routes.checkoutDigital */ .Z.checkoutDigital, undefined, {
                locale: language
            });
        }
        closeSidebar({
            display: false,
            view: ""
        });
    }
    const { price: totalPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)({
        amount: total
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative flex h-full flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "fixed top-0 z-10 flex w-full max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-light py-4 px-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex font-semibold text-accent",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_cart_check_bag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "shrink-0",
                                width: 24,
                                height: 22
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex ltr:ml-2 rtl:mr-2",
                                children: (0,_lib_format_string__WEBPACK_IMPORTED_MODULE_13__/* .formatString */ .U)(totalUniqueItems, t("text-item"))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>closeSidebar({
                                display: false,
                                view: ""
                            }),
                        className: "flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-muted transition-all duration-200 hover:bg-accent hover:text-light focus:bg-accent focus:text-light focus:outline-none ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: t("text-close")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_5__/* .CloseIcon */ .T, {
                                className: "h-3 w-3"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimateSharedLayout, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    layout: true,
                    className: "flex-grow pt-16 pb-20",
                    children: items.length > 0 ? items?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            item: item
                        }, item.id)) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        layout: true,
                        initial: "from",
                        animate: "to",
                        exit: "from",
                        variants: (0,_lib_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_14__/* .fadeInOut */ .I)(0.25),
                        className: "flex h-full flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_empty_cart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                width: 140,
                                height: 176
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "mt-6 text-base font-semibold",
                                children: t("text-no-products")
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: "fixed bottom-0 z-10 w-full max-w-md bg-light py-5 px-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "flex h-12 w-full justify-between rounded-full bg-accent p-1 text-sm font-bold shadow-700 transition-colors hover:bg-accent-hover focus:bg-accent-hover focus:outline-none md:h-14",
                    onClick: handleCheckout,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "flex h-full flex-1 items-center px-5 text-light",
                            children: t("text-checkout")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "flex h-full shrink-0 items-center rounded-full bg-light px-5 text-accent",
                            children: totalPrice
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartSidebarView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const EmptyCart = ({ width =231.91 , height =292 , className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        className: className,
        viewBox: "0 0 231.91 292",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "linear-gradient",
                    x1: "1",
                    y1: "0.439",
                    x2: "0.369",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "0",
                            stopColor: "#029477"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "#009e7f"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                id: "no_cart_in_bag_2",
                "data-name": "no cart in bag 2",
                transform: "translate(-1388 -351)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                        id: "Ellipse_2873",
                        "data-name": "Ellipse 2873",
                        cx: "115.955",
                        cy: "27.366",
                        rx: "115.955",
                        ry: "27.366",
                        transform: "translate(1388 588.268)",
                        fill: "#ddd",
                        opacity: "0.25"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18691",
                        "data-name": "Path 18691",
                        d: "M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",
                        transform: "translate(1403 381)",
                        fill: "#009e7f"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Rectangle_1852",
                        "data-name": "Rectangle 1852",
                        d: "M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",
                        transform: "translate(1403 381)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Rectangle_1853",
                        "data-name": "Rectangle 1853",
                        d: "M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",
                        transform: "translate(1403 381)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18685",
                        "data-name": "Path 18685",
                        d: "M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",
                        transform: "translate(1056.69 164.944)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18686",
                        "data-name": "Path 18686",
                        d: "M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",
                        transform: "translate(1057.793 95.684)",
                        fill: "#009e7f"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        id: "Ellipse_2874",
                        "data-name": "Ellipse 2874",
                        cx: "28.689",
                        cy: "28.689",
                        r: "28.689",
                        transform: "translate(1473.823 511.046)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        id: "Ellipse_2875",
                        "data-name": "Ellipse 2875",
                        cx: "15.046",
                        cy: "15.046",
                        r: "15.046",
                        transform: "translate(1481.401 547.854) rotate(-45)",
                        fill: "#009e7f"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18687",
                        "data-name": "Path 18687",
                        d: "M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
                        transform: "translate(1060.579 -35.703)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18688",
                        "data-name": "Path 18688",
                        d: "M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
                        transform: "translate(1060.566 -35.704)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18689",
                        "data-name": "Path 18689",
                        d: "M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
                        transform: "translate(970.304 -35.704)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18690",
                        "data-name": "Path 18690",
                        d: "M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
                        transform: "translate(970.318 -35.703)",
                        fill: "#006854"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18692",
                        "data-name": "Path 18692",
                        d: "M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",
                        transform: "translate(1292.301 101.536)",
                        fill: "url(#linear-gradient)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        id: "Path_18693",
                        "data-name": "Path 18693",
                        d: "M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",
                        transform: "translate(1118.301 101.536)",
                        fill: "url(#linear-gradient)"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyCart);


/***/ })

};
;