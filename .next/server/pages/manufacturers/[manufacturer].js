"use strict";
(() => {
var exports = {};
exports.id = 5935;
exports.ids = [5935,5494];
exports.modules = {

/***/ 3744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2921);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5494);
/* harmony import */ var _components_icons_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9370);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8609);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(758);






const Details = ({ manufacturer  })=>{
    const { name , slug , website , image , cover_image , socials  } = manufacturer ?? {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-12 flex w-full flex-col border border-gray-200 md:flex-row xl:mb-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col items-center overflow-hidden p-5 md:w-1/3 lg:p-8 2xl:p-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 2xl:h-40 2xl:w-40",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                            src: image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__/* .avatarPlaceholder */ .Pb,
                            alt: name,
                            width: 160,
                            height: 160
                        })
                    }),
                    name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "mt-5 w-full truncate text-center text-xl font-bold text-heading 2xl:text-2xl",
                        title: name,
                        children: name
                    }),
                    website && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: website,
                        className: "mt-2 text-sm text-body transition-colors hover:text-accent",
                        children: website
                    }),
                    socials && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-5 flex items-center space-x-5 rtl:space-x-reverse",
                        children: socials?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: item.url,
                                target: "_blank",
                                className: `cursor-pointer text-body transition-colors duration-300 hover:text-accent focus:outline-none`,
                                rel: "noreferrer",
                                children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_2__/* .getIcon */ .q)({
                                    iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_3__,
                                    iconName: item.icon,
                                    className: "w-4 h-4"
                                })
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative hidden w-full items-center justify-center overflow-hidden bg-gray-50 md:flex md:w-2/3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                    src: cover_image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__/* .productPlaceholder */ .Hb,
                    alt: "cover image",
                    width: 1100,
                    height: 370
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);


/***/ }),

/***/ 7397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getStaticPaths),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8780);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7422);
/* harmony import */ var _client_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8578);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _framework_client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4648);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9717);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const getStaticPaths = async ({ locales  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(locales, "locales is not defined");
    const { data  } = await _client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].manufacturers.all */ .Z.manufacturers.all({
        limit: 100
    });
    const paths = data?.flatMap((manufacturer)=>locales?.map((locale)=>({
                params: {
                    manufacturer: manufacturer.slug
                },
                locale
            })));
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async ({ params , locale  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
    await queryClient.prefetchQuery([
        _framework_client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        {
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.all */ .Z.settings.all(queryKey[1]));
    try {
        const manufacturer = await _client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].manufacturers.get */ .Z.manufacturers.get({
            slug: params.manufacturer,
            language: locale
        });
        return {
            props: {
                manufacturer,
                variables: {
                    limit: _client_variables__WEBPACK_IMPORTED_MODULE_6__/* .PRODUCTS_PER_PAGE */ .a9,
                    manufacturer: manufacturer?.slug
                },
                ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                    "common"
                ]),
                dehydratedState: JSON.parse(JSON.stringify((0,react_query_hydration__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)))
            },
            revalidate: 60
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const getIcon = ({ iconList , iconName , ...rest })=>{
    const TagName = iconList[iconName];
    return !!TagName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TagName, {
        ...rest
    }) : null;
};


/***/ }),

/***/ 9006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2089);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 9402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manufacturer),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__.b)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_filter_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6692);
/* harmony import */ var _components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(879);
/* harmony import */ var _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6093);
/* harmony import */ var _components_manufacturer_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3744);
/* harmony import */ var _components_products_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3206);
/* harmony import */ var _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2577);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1116);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9006);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7246);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2451);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9465);
/* harmony import */ var _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7397);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__, _components_products_grid__WEBPACK_IMPORTED_MODULE_5__, _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__, _framework_product__WEBPACK_IMPORTED_MODULE_7__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_11__, react_sticky_box__WEBPACK_IMPORTED_MODULE_15__, _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__]);
([_components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__, _components_products_grid__WEBPACK_IMPORTED_MODULE_5__, _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__, _framework_product__WEBPACK_IMPORTED_MODULE_7__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_11__, react_sticky_box__WEBPACK_IMPORTED_MODULE_15__, _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const CartCounterButton = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(null, {
    loadableGenerated: {
        modules: [
            "manufacturers\\[manufacturer].tsx -> " + "@/components/cart/cart-counter-button"
        ]
    },
    ssr: false
});
function Manufacturer({ manufacturer , variables  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)("common");
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const { products , loadMore , isLoadingMore , isLoading , hasMore , error  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_7__/* .useProducts */ .rn)({
        ...variables,
        ...query
    });
    const { width  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_8__/* .useWindowSize */ .i)();
    const productsItem = products;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_manufacturer_details__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        manufacturer: manufacturer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-8 text-3xl font-semibold tracking-tight text-heading",
                        children: t("text-books")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .r, {
                        products: productsItem,
                        loadMore: loadMore,
                        isLoading: isLoading,
                        isLoadingMore: isLoadingMore,
                        hasMore: hasMore,
                        error: error,
                        column: "five"
                    })
                ]
            }),
            width > 1023 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartCounterButton, {})
        ]
    });
}
const GetLayout = (page)=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)("common");
    const [_, setDrawerView] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__/* .drawerAtom */ .P);
    const type = page.props.manufacturer?.type?.slug;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_general__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full bg-light",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto flex min-h-screen w-full max-w-1920 px-5 py-10 rtl:space-x-reverse lg:space-x-10 xl:py-14 xl:px-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden w-80 shrink-0 lg:block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_sticky_box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    offsetTop: 140,
                                    offsetBottom: 30,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        type: type,
                                        showManufacturers: false
                                    })
                                })
                            }),
                            page
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.button, {
                        whileTap: {
                            scale: 0.88
                        },
                        onClick: ()=>setDrawerView({
                                display: true,
                                view: "SEARCH_FILTER",
                                data: {
                                    type,
                                    showManufacturers: false
                                }
                            }),
                        className: "flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: t("text-filter")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_filter_icon__WEBPACK_IMPORTED_MODULE_1__/* .FilterIcon */ .k, {
                                width: "17.05",
                                height: "18"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
Manufacturer.getLayout = GetLayout;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3104:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 9699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 7342:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-ssr-error.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 1817:
/***/ ((module) => {

module.exports = require("rc-slider");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9717:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 2089:
/***/ ((module) => {

module.exports = require("react-use/lib/useWindowSize");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 9465:
/***/ ((module) => {

module.exports = import("react-sticky-box");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,3139,7636,8484,6214,7896,5682,1116,2732,9355,4804,3206,148,3386,6631,4815,9370,6692,1416,7499,2577,7146], () => (__webpack_exec__(9402)));
module.exports = __webpack_exports__;

})();