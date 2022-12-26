"use strict";
(() => {
var exports = {};
exports.id = 2971;
exports.ids = [2971];
exports.modules = {

/***/ 8465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4246);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7896);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4588);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6786);
/* harmony import */ var _framework_question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6463);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_icons_like_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2284);
/* harmony import */ var _components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9711);
/* harmony import */ var _components_ui_loaders_question_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9546);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(758);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2921);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7507);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8609);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2083);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_question__WEBPACK_IMPORTED_MODULE_5__, _lib_use_price__WEBPACK_IMPORTED_MODULE_14__]);
([_framework_question__WEBPACK_IMPORTED_MODULE_5__, _lib_use_price__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function QuestionItem({ question  }) {
    const { question: myQuestion , answer , created_at , positive_feedbacks_count , negative_feedbacks_count , product  } = question;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    const { price , basePrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        amount: product?.sale_price ? product?.sale_price : product?.price,
        baseAmount: product?.price
    });
    const { price: minPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        amount: product?.min_price
    });
    const { price: maxPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        amount: product?.max_price
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-t border-border-200 border-opacity-70 py-7 first:border-t-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-5 flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-10 w-10 overflow-hidden rounded border border-gray-200",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_11__/* .Image */ .E, {
                            src: product.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_13__/* .productPlaceholder */ .Hb,
                            layout: "fill",
                            alt: product?.name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                className: "mb-0.5 inline-block text-sm font-semibold text-heading transition-colors hover:text-accent",
                                href: _config_routes__WEBPACK_IMPORTED_MODULE_12__/* .Routes.product */ .Z.product(product?.slug),
                                children: product?.name
                            }),
                            product?.product_type.toLowerCase() === "variable" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-start space-x-1.5 rtl:space-x-reverse",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-semibold text-body",
                                        children: minPrice
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: " - "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-semibold text-body",
                                        children: maxPrice
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex min-w-150 items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                        className: "text-sm font-semibold text-body no-underline",
                                        children: price
                                    }),
                                    basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                        className: "text-sm font-normal text-muted ltr:ml-3 rtl:mr-3",
                                        children: basePrice
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-md bg-gray-50 py-3 px-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mb-2.5 text-base font-semibold text-heading",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block uppercase ltr:mr-1 rtl:ml-1",
                                title: t("text-question"),
                                children: "Q:"
                            }),
                            myQuestion
                        ]
                    }),
                    answer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-base",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block font-semibold uppercase text-heading ltr:mr-1 rtl:ml-1",
                                title: t("text-answer"),
                                children: "A:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-600",
                                children: answer
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-5 text-xs text-gray-400",
                                children: [
                                    t("text-date"),
                                    ": ",
                                    dayjs__WEBPACK_IMPORTED_MODULE_6___default()(created_at).format("D MMMM, YYYY")
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-6 rtl:space-x-reverse",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "flex items-center text-xs tracking-wider text-gray-400 transition",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_like_icon__WEBPACK_IMPORTED_MODULE_7__/* .LikeIcon */ .l, {
                                                className: "h-4 w-4 ltr:mr-1.5 rtl:ml-1.5"
                                            }),
                                            positive_feedbacks_count
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "flex items-center text-xs tracking-wider text-gray-400 transition",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_8__/* .DislikeIcon */ .R, {
                                                className: "h-4 w-4 ltr:mr-1.5 rtl:ml-1.5"
                                            }),
                                            negative_feedbacks_count
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const MyQuestions = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    const { questions , isLoading , isLoadingMore , error , hasMore , loadMore  } = (0,_framework_question__WEBPACK_IMPORTED_MODULE_5__/* .useMyQuestions */ .U)();
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: error.message
    });
    // loader
    if (!questions.length && isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex w-full flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 flex items-center justify-center sm:mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-center text-lg font-semibold text-heading sm:text-xl",
                        children: t("profile-sidebar-my-wishlist")
                    })
                }),
                (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(15, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_question_loader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        uniqueKey: `favorite-${i}`
                    }, i))
            ]
        });
    }
    if (!questions.length && !isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex w-full flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 flex items-center justify-between sm:mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "ml-auto text-center text-lg font-semibold text-heading sm:text-xl",
                        children: t("profile-sidebar-my-wishlist")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    text: "text-no-download",
                    className: "mx-auto w-full md:w-7/12"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-8 flex items-center justify-center sm:mb-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-center text-lg font-semibold text-heading sm:text-xl",
                            children: t("profile-sidebar-my-questions")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: questions?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuestionItem, {
                                question: item
                            }, item.id))
                    })
                ]
            }),
            hasMore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 flex w-full justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    loading: isLoadingMore,
                    disabled: isLoadingMore,
                    onClick: loadMore,
                    children: t("text-load-more")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyQuestions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);


const QuestionLoader = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: "100%",
        height: "100%",
        viewBox: "0 0 900 180",
        backgroundColor: "#f3f3f3",
        foregroundColor: "#ecebeb",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "0",
                y: "0",
                rx: "0",
                ry: "0",
                width: "40",
                height: "40"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "55",
                y: "0",
                rx: "0",
                ry: "0",
                width: "220",
                height: "14"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "55",
                y: "24",
                rx: "0",
                ry: "0",
                width: "80",
                height: "14"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "0",
                y: "65",
                rx: "0",
                ry: "0",
                width: "900",
                height: "60"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionLoader);


/***/ }),

/***/ 6463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useMyQuestions)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7422);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4648);
/* harmony import */ var _utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9787);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useMyQuestions(options) {
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.MY_QUESTIONS */ .P.MY_QUESTIONS,
        options
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].myQuestions.all */ .Z.myQuestions.all(Object.assign({}, queryKey[1], pageParam)), {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    return {
        questions: data?.pages?.flatMap((page)=>page.data) ?? [],
        paginatorInfo: Array.isArray(data?.pages) ? (0,_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(data?.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rangeMap)
/* harmony export */ });
function rangeMap(n, fn) {
    const arr = [];
    while(n > arr.length){
        arr.push(fn(arr.length));
    }
    return arr;
}


/***/ }),

/***/ 4625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_general_ssr__WEBPACK_IMPORTED_MODULE_5__.b)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_cards_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9744);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4249);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1018);
/* harmony import */ var _components_questions_my_questions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8465);
/* harmony import */ var _framework_general_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(344);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _components_questions_my_questions__WEBPACK_IMPORTED_MODULE_4__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_5__]);
([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _components_questions_my_questions__WEBPACK_IMPORTED_MODULE_4__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MyQuestionsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_cards_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: "w-full shadow-none sm:shadow",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_questions_my_questions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            })
        ]
    });
};
MyQuestionsPage.authenticationRequired = true;
MyQuestionsPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyQuestionsPage);

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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 6024:
/***/ ((module) => {

module.exports = require("little-state-machine");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

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

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9717:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

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

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,3139,7636,8484,6214,6443,7896,2057,5682,2732,6153,2083,2493,5934,3116,5594,6759], () => (__webpack_exec__(4625)));
module.exports = __webpack_exports__;

})();