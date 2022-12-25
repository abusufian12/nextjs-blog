"use strict";
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7608);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3139);
/* harmony import */ var _components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1678);
/* harmony import */ var _components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1772);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6510);
/* harmony import */ var _lib_hooks_use_swiper_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 0
};
const ReviewImageModal = ()=>{
    const { data  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalState */ .X9)();
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_3__/* .useIsRTL */ .S)();
    const [nextEl, nextRef] = (0,_lib_hooks_use_swiper_ref__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [prevEl, prevRef] = (0,_lib_hooks_use_swiper_ref__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "m-auto block w-full max-w-[680px] rounded bg-light p-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Swiper */ .tq, {
                    id: "review-gallery",
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W_
                    ],
                    initialSlide: data?.initSlide ?? 0,
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            swiper.navigation.init();
                        }, 100);
                    },
                    loop: data?.images?.length > 1,
                    navigation: {
                        prevEl,
                        nextEl
                    },
                    ...swiperParams,
                    children: data?.images?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .SwiperSlide */ .o5, {
                            className: "flex items-center justify-center selection:bg-transparent",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: item?.original ?? "/product-placeholder-borderless.svg",
                                alt: `Review gallery ${item.id}`,
                                width: 600,
                                height: 600,
                                objectFit: "contain"
                            })
                        }, `review-gallery-${item.id}`))
                }),
                data?.images?.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: prevRef,
                            className: "review-gallery-prev absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:bg-gray-100 ltr:left-2 rtl:right-2 md:-mt-5 md:h-9 md:w-9 ltr:md:left-3 rtl:md:right-3",
                            children: isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_5__/* .ChevronRight */ ._, {
                                className: "h-4 w-4"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_4__/* .ChevronLeft */ .s, {
                                className: "h-4 w-4"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: nextRef,
                            className: "review-gallery-next absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:bg-gray-100 ltr:right-2 rtl:left-2 md:-mt-5 md:h-9 md:w-9 ltr:md:right-3 rtl:md:left-3",
                            children: isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_4__/* .ChevronLeft */ .s, {
                                className: "h-4 w-4"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_5__/* .ChevronRight */ ._, {
                                className: "h-4 w-4"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewImageModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSwiperRef = ()=>{
    const [wrapper, setWrapper] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (ref.current) {
            setWrapper(ref.current);
        }
    }, []);
    return [
        wrapper,
        ref
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSwiperRef);


/***/ })

};
;