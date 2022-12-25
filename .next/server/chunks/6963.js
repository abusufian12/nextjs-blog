"use strict";
exports.id = 6963;
exports.ids = [6963];
exports.modules = {

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 1403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const CategoryBadges = ({ onClose , categories , basePath  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    const handleClick = (path)=>{
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(path);
        if (onClose) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mt-4 md:mt-6 pt-4 md:pt-6 flex flex-row items-start border-t border-border-200 border-opacity-60",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm font-semibold text-heading capitalize ltr:mr-6 rtl:ml-6 py-1",
                children: t("text-categories")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row flex-wrap",
                children: categories?.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleClick(`${basePath}?category=${category.slug}`),
                        className: "lowercase text-sm text-heading tracking-wider whitespace-nowrap py-1 px-2.5 bg-transparent border border-border-200 rounded ltr:mr-2 rtl:ml-2 mb-2 transition-colors hover:border-accent hover:text-accent focus:outline-none focus:bg-opacity-100",
                        children: category.name
                    }, category.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryBadges);


/***/ }),

/***/ 6963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_back_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2325);
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2808);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2083);
/* harmony import */ var _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9114);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_get_variations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9257);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2795);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _category_badges__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1403);
/* harmony import */ var _variation_price__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7165);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7507);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2451);
/* harmony import */ var _variation_groups__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6585);
/* harmony import */ var _lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(67);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7608);
/* harmony import */ var _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1330);
/* harmony import */ var _attributes_context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6560);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(9850);
/* harmony import */ var _components_icons_heart_outline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(182);
/* harmony import */ var _components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8896);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6631);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1143);
/* harmony import */ var _framework_wishlist__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(3147);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _components_icons_star_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__, _lib_use_price__WEBPACK_IMPORTED_MODULE_3__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__, _variation_price__WEBPACK_IMPORTED_MODULE_13__, jotai__WEBPACK_IMPORTED_MODULE_16__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__, _framework_user__WEBPACK_IMPORTED_MODULE_26__, _framework_wishlist__WEBPACK_IMPORTED_MODULE_27__]);
([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__, _lib_use_price__WEBPACK_IMPORTED_MODULE_3__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__, _variation_price__WEBPACK_IMPORTED_MODULE_13__, jotai__WEBPACK_IMPORTED_MODULE_16__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__, _framework_user__WEBPACK_IMPORTED_MODULE_26__, _framework_wishlist__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































function FavoriteButton({ productId , className  }) {
    const { isAuthorized  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_26__/* .useUser */ .aF)();
    const { toggleWishlist , isLoading: adding  } = (0,_framework_wishlist__WEBPACK_IMPORTED_MODULE_27__/* .useToggleWishlist */ .n$)(productId);
    const { inWishlist , isLoading: checking  } = (0,_framework_wishlist__WEBPACK_IMPORTED_MODULE_27__/* .useInWishlist */ .tc)({
        enabled: isAuthorized,
        product_id: productId
    });
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_19__/* .useModalAction */ .SO)();
    function toggle() {
        if (!isAuthorized) {
            openModal("LOGIN_VIEW");
            return;
        }
        toggleWishlist({
            product_id: productId
        });
    }
    const isLoading = adding || checking;
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_22___default()("mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300", className),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                simple: true,
                className: "flex h-5 w-5"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_22___default()("mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-colors", {
            "!border-accent": inWishlist
        }, className),
        onClick: toggle,
        children: inWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_24__/* .HeartFillIcon */ .q, {
            className: "h-5 w-5 text-accent"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_heart_outline__WEBPACK_IMPORTED_MODULE_23__/* .HeartOutlineIcon */ .P, {
            className: "h-5 w-5 text-accent"
        })
    });
}
const Details = ({ product , backBtn =true , isModal =false  })=>{
    const { id , name , image , description , unit , categories , gallery , type , quantity , shop , slug , ratings  } = product ?? {};
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("common");
    const [_, setShowStickyShortDetails] = (0,jotai__WEBPACK_IMPORTED_MODULE_16__.useAtom)(_store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__/* .stickyShortDetailsAtom */ .f);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_19__/* .useModalAction */ .SO)();
    const intersectionRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const intersection = (0,react_use__WEBPACK_IMPORTED_MODULE_28__.useIntersection)(intersectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 1
    });
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (intersection && intersection.isIntersecting) {
            setShowStickyShortDetails(false);
            return;
        }
        if (intersection && !intersection.isIntersecting) {
            setShowStickyShortDetails(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        intersection
    ]);
    const { attributes  } = (0,_attributes_context__WEBPACK_IMPORTED_MODULE_21__/* .useAttributes */ .Ch)();
    const { price , basePrice , discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
        amount: product?.sale_price ? product?.sale_price : product?.price,
        baseAmount: product?.price
    });
    const navigate = (path)=>{
        router.push(path);
        closeModal();
    };
    const variations = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>(0,_lib_get_variations__WEBPACK_IMPORTED_MODULE_6__/* .getVariations */ .y)(product?.variations), [
        product?.variations
    ]);
    const isSelected = (0,_lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_18__/* .isVariationSelected */ .V)(variations, attributes);
    let selectedVariation = {};
    if (isSelected) {
        selectedVariation = product?.variation_options?.find((o)=>lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default()(o.options.map((v)=>v.value).sort(), Object.values(attributes).sort()));
    }
    const scrollDetails = ()=>{
        react_scroll__WEBPACK_IMPORTED_MODULE_11__.scroller.scrollTo("details", {
            smooth: true,
            offset: -80
        });
    };
    const hasVariations = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(variations);
    const previewImages = (0,_lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_30__/* .displayImage */ ._)(selectedVariation?.image, gallery, image);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "rounded-lg bg-light",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col border-b border-border-200 border-opacity-70 md:flex-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-8 flex items-center justify-between lg:mb-10",
                                children: [
                                    backBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_back_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                                    discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-full bg-yellow-500 px-3 text-xs font-semibold leading-6 text-light ltr:ml-auto rtl:mr-auto",
                                        children: discount
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-gallery h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__/* .ThumbsCarousel */ .X, {
                                    gallery: previewImages,
                                    hideThumbs: previewImages.length <= 1
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                ref: intersectionRef,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex w-full items-start justify-between space-x-8 rtl:space-x-reverse",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_22___default()(`text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl`, {
                                                    "cursor-pointer transition-colors hover:text-accent": isModal
                                                }),
                                                ...isModal && {
                                                    onClick: ()=>navigate(_config_routes__WEBPACK_IMPORTED_MODULE_15__/* .Routes.product */ .Z.product(slug))
                                                },
                                                children: name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavoriteButton, {
                                                    productId: id,
                                                    className: classnames__WEBPACK_IMPORTED_MODULE_22___default()({
                                                        "mr-1": isModal
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-2 flex items-center justify-between",
                                        children: [
                                            unit && !hasVariations && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block text-sm font-normal text-body",
                                                children: unit
                                            }),
                                            isModal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "inline-flex shrink-0 items-center rounded border border-accent bg-accent px-3 py-1 text-sm text-white",
                                                children: [
                                                    ratings,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_star_icon__WEBPACK_IMPORTED_MODULE_29__/* .StarIcon */ .r, {
                                                        className: "h-2.5 w-2.5 ltr:ml-1 rtl:mr-1"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-3 text-sm leading-7 text-body md:mt-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            character: 150,
                                            ...!isModal && {
                                                onClick: ()=>scrollDetails(),
                                                compressText: "common:text-see-more"
                                            },
                                            children: description
                                        })
                                    }),
                                    hasVariations ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "my-5 flex items-center md:my-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_price__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    selectedVariation: selectedVariation,
                                                    minPrice: product.min_price,
                                                    maxPrice: product.max_price
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_groups__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    variations: variations
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "my-5 flex items-center md:my-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                                className: "text-2xl font-semibold text-accent no-underline md:text-3xl",
                                                children: price
                                            }),
                                            basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                className: "text-sm font-normal text-muted ltr:ml-2 rtl:mr-2 md:text-base",
                                                children: basePrice
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-6 flex flex-col items-center md:mt-6 lg:flex-row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mb-3 w-full lg:mb-0 lg:max-w-[400px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__/* .AddToCart */ .o, {
                                                    data: product,
                                                    variant: "big",
                                                    variation: selectedVariation,
                                                    disabled: selectedVariation?.is_disable || !isSelected
                                                })
                                            }),
                                            !hasVariations && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: Number(quantity) > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7",
                                                    children: [
                                                        quantity,
                                                        " ",
                                                        t("text-pieces-available")
                                                    ]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "whitespace-nowrap text-base text-red-500 ltr:lg:ml-7 rtl:lg:mr-7",
                                                    children: t("text-out-stock")
                                                })
                                            }),
                                            !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(selectedVariation) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7",
                                                children: selectedVariation?.is_disable || selectedVariation.quantity === 0 ? t("text-out-stock") : `${selectedVariation.quantity} ${t("text-pieces-available")}`
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !!categories?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_category_badges__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                categories: categories,
                                basePath: `/${type?.slug}`,
                                onClose: closeModal
                            }),
                            shop?.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-2 flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6",
                                        children: t("common:text-sellers")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>navigate(_config_routes__WEBPACK_IMPORTED_MODULE_15__/* .Routes.shop */ .Z.shop(shop?.slug)),
                                        className: "text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline",
                                        children: shop?.name
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_11__.Element, {
                name: "details",
                className: "border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6",
                        children: t("text-details")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm text-body",
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_arrow_narrow_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(582);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





const BackButton = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "inline-flex items-center justify-center text-accent font-semibold transition-colors hover:text-accent-hover focus:text-accent-hover focus:outline-none",
        onClick: router.back,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_narrow_left__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("w-5 h-5 ltr:mr-2 rtl:ml-2", {
                    "transform rotate-180": router.locale === "ar" || router.locale === "he"
                }),
                strokeWidth: 1.7
            }),
            t("text-back")
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);


/***/ })

};
;