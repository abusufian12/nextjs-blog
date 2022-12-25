(() => {
var exports = {};
exports.id = 7905;
exports.ids = [7905];
exports.modules = {

/***/ 7332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CheckedIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CheckedIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 13 13",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            "data-name": "Group 36431",
            fill: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "data-name": "Path 22671",
                d: "M6.5,0A6.5,6.5,0,1,0,13,6.5,6.508,6.508,0,0,0,6.5,0Zm3.633,4.789L5.979,8.911a.639.639,0,0,1-.9.016l-2.2-2a.661.661,0,0,1-.049-.912.644.644,0,0,1,.912-.033l1.743,1.6L9.2,3.861a.657.657,0,0,1,.929.929Z"
            })
        })
    });
};


/***/ }),

/***/ 910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ MenuIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MenuIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "3.231",
        height: "14",
        viewBox: "0 0 3.231 14",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            fill: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 7a1.615 1.615 0 1 0 1.615-1.615A1.617 1.617 0 0 0 0 7ZM0 12.384a1.615 1.615 0 1 0 1.615-1.615A1.617 1.617 0 0 0 0 12.384ZM0 1.615A1.615 1.615 0 1 0 1.615 0 1.617 1.617 0 0 0 0 1.615Z"
            })
        })
    });


/***/ }),

/***/ 6560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_questions_question_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8587);
/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1116);
/* harmony import */ var _components_ui_search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(148);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7608);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1143);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_questions_question_card__WEBPACK_IMPORTED_MODULE_2__, _framework_product__WEBPACK_IMPORTED_MODULE_5__, _framework_user__WEBPACK_IMPORTED_MODULE_9__]);
([_components_questions_question_card__WEBPACK_IMPORTED_MODULE_2__, _framework_product__WEBPACK_IMPORTED_MODULE_5__, _framework_user__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ProductQuestions = ({ productId , shopId , productType  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { isAuthorized  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_9__/* .useUser */ .aF)();
    const { questions , paginatorInfo , isLoading  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_5__/* .useQuestions */ .k5)({
        product_id: productId,
        limit: 5,
        page,
        ...!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(query?.text) && {
            question: query.text?.toString()
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setPage(1);
    }, [
        query.text
    ]);
    function onPagination(current) {
        setPage(current);
    }
    const openQuestionModal = ()=>{
        if (!isAuthorized) {
            openModal("LOGIN_VIEW");
            return;
        }
        openModal("QUESTION_FORM", {
            product_id: productId,
            shop_id: shopId
        });
    };
    if (isLoading && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(questions)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {});
    }
    const boxedLayout = [
        "books"
    ].includes(productType);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("-mt-px border-t border-b border-border-200 border-opacity-70", {
                    "px-5 lg:px-16": !boxedLayout,
                    "px-5 xl:px-0": boxedLayout
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("flex flex-col justify-between sm:flex-row sm:items-center", {
                        "mx-auto max-w-screen-xl": boxedLayout
                    }),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full flex-col items-start space-y-1 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:py-0 ltr:lg:pr-5 rtl:lg:pl-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "mb-1 text-lg font-semibold tracking-tight text-heading",
                                    children: [
                                        t("text-question-answers"),
                                        " (",
                                        paginatorInfo?.total ?? 0,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "rounded-full bg-accent px-5 py-3 text-xs font-bold text-white transition-colors hover:border-accent hover:bg-accent-hover",
                                    onClick: openQuestionModal,
                                    children: t("text-ask-question")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "-ml-3 shrink-0 border-t border-border-200 border-opacity-70 py-3 sm:ml-0 sm:min-w-[50%] sm:border-t-0 sm:py-8 ltr:sm:border-l ltr:sm:pl-5 rtl:sm:border-r rtl:sm:pr-5 md:min-w-[380px] lg:py-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                label: t("text-search-label"),
                                placeholder: t("text-question-search-placeholder"),
                                variant: "flat"
                            })
                        })
                    ]
                })
            }),
            questions?.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("border-b border-border-200 border-opacity-70", {
                    "px-5 lg:px-16": !boxedLayout,
                    "px-5 xl:px-0": boxedLayout
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
                        "mx-auto max-w-screen-xl": boxedLayout
                    }),
                    children: [
                        questions?.map((question)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_questions_question_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                question: question
                            }, `question-no-${question.id}`)),
                        paginatorInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between border-t border-border-200 border-opacity-70 py-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-xs text-body text-opacity-70",
                                    children: [
                                        t("text-page"),
                                        " ",
                                        paginatorInfo.currentPage,
                                        " ",
                                        t("text-of"),
                                        " ",
                                        Math.ceil(paginatorInfo.total / paginatorInfo.perPage)
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-2 flex items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        total: paginatorInfo.total,
                                        current: paginatorInfo.currentPage,
                                        pageSize: paginatorInfo.perPage,
                                        onChange: onPagination
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-center justify-center border-b border-border-200 border-opacity-70 px-5 py-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-lg font-semibold text-gray-400",
                    children: t("text-no-question-found")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductQuestions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ QuestionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7608);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1143);
/* harmony import */ var _components_icons_like_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2284);
/* harmony import */ var _components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9711);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_user__WEBPACK_IMPORTED_MODULE_5__, _framework_product__WEBPACK_IMPORTED_MODULE_8__]);
([_framework_user__WEBPACK_IMPORTED_MODULE_5__, _framework_product__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function QuestionCard({ question  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalAction */ .SO)();
    const { isAuthorized  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_5__/* .useUser */ .aF)();
    const { createFeedback  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_8__/* .useCreateFeedback */ .AM)();
    const { id , answer , created_at , my_feedback , negative_feedbacks_count , positive_feedbacks_count , question: userQuestion  } = question;
    function feedback(value) {
        if (!isAuthorized) {
            openModal("LOGIN_VIEW");
            return;
        }
        createFeedback({
            model_id: id,
            model_type: "Question",
            ...value
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-t border-border-200 border-opacity-70 py-7 first:border-t-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-2.5 text-base font-semibold text-heading",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block uppercase ltr:mr-1 rtl:ml-1",
                        children: "Q:"
                    }),
                    userQuestion
                ]
            }),
            answer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-base",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block font-semibold uppercase text-heading ltr:mr-1 rtl:ml-1",
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
                            dayjs__WEBPACK_IMPORTED_MODULE_1___default()(created_at).format("D MMMM, YYYY")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-6 rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center text-xs tracking-wider text-gray-400 transition",
                                disabled: my_feedback?.positive,
                                onClick: ()=>feedback({
                                        positive: true
                                    }),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_like_icon__WEBPACK_IMPORTED_MODULE_6__/* .LikeIcon */ .l, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("h-4 w-4 ltr:mr-1.5 rtl:ml-1.5", {
                                            "text-accent": my_feedback?.positive
                                        })
                                    }),
                                    positive_feedbacks_count
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center text-xs tracking-wider text-gray-400 transition",
                                onClick: ()=>feedback({
                                        negative: true
                                    }),
                                disabled: my_feedback?.negative,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_7__/* .DislikeIcon */ .R, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("h-4 w-4 ltr:mr-1.5 rtl:ml-1.5", {
                                            "text-accent": my_feedback?.negative
                                        })
                                    }),
                                    negative_feedbacks_count
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ average_ratings)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/components/ui/rating-badge.tsx
var rating_badge = __webpack_require__(667);
// EXTERNAL MODULE: ./src/components/icons/star-icon.tsx
var star_icon = __webpack_require__(3135);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/rating-progress-bar.tsx



function RatingProgressBar({ ratingId =0 , ratingProgressItem , totalReviews , colorClassName ="bg-accent"  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center text-sm text-heading",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-11 shrink-0 items-center space-x-1 font-semibold rtl:space-x-reverse",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-sm font-semibold text-heading",
                        children: ratingId
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(star_icon/* StarIcon */.r, {
                        className: "h-2.5 w-2.5 ltr:ml-1.5 rtl:mr-1.5"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative h-[5px] w-52 overflow-hidden rounded-md bg-[#F1F1F1]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_classnames_default()("absolute h-full rounded-md", colorClassName),
                    style: {
                        width: `${ratingProgressItem?.total / totalReviews * 100}%`
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shrink-0 ltr:pl-5 rtl:pr-5",
                children: ratingProgressItem?.total ?? 0
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/reviews/average-ratings.tsx




const AverageRatings = ({ title , totalReviews , ratings , ratingCount  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    //TODO: need to check
    if (!ratingCount) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-5 md:py-12 lg:px-16",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "mb-7 text-lg font-semibold tracking-tight text-heading",
                children: [
                    t("text-ratings-reviews"),
                    " ",
                    title
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-full flex-col divide-y divide-gray-200 divide-opacity-70 sm:flex-row sm:items-center sm:space-x-8 sm:divide-y-0 sm:divide-x rtl:sm:space-x-reverse rtl:sm:divide-x-reverse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full pb-4 sm:w-auto sm:pb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(rating_badge/* default */.Z, {
                                rating: ratings,
                                className: "mb-4",
                                variant: "large"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-base text-gray-400",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        totalReviews,
                                        " ",
                                        t("text-ratings")
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full space-y-3 py-0.5 pt-4 sm:w-auto sm:pt-0 ltr:sm:pl-8 rtl:sm:pr-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                                ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 5),
                                ratingId: 5,
                                totalReviews: totalReviews
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                                ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 4),
                                ratingId: 4,
                                totalReviews: totalReviews,
                                colorClassName: "bg-teal-500"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                                ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 3),
                                ratingId: 3,
                                totalReviews: totalReviews,
                                colorClassName: "bg-teal-400"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                                ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 2),
                                ratingId: 2,
                                totalReviews: totalReviews,
                                colorClassName: "bg-amber-500"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                                ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 1),
                                ratingId: 1,
                                totalReviews: totalReviews,
                                colorClassName: "bg-rose-500"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const average_ratings = (AverageRatings);


/***/ }),

/***/ 1137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_reviews_review_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8413);
/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _framework_review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8593);
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1478);
/* harmony import */ var _star_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8195);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_reviews_review_card__WEBPACK_IMPORTED_MODULE_2__, _framework_review__WEBPACK_IMPORTED_MODULE_5__]);
([_components_reviews_review_card__WEBPACK_IMPORTED_MODULE_2__, _framework_review__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ProductReviews = ({ productId , productType  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { text , ...restQuery } = query;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { reviews , isLoading , paginatorInfo  } = (0,_framework_review__WEBPACK_IMPORTED_MODULE_5__/* .useReviews */ .DF)({
        product_id: productId,
        limit: 5,
        page,
        ...!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(restQuery) && {
            ...restQuery
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setPage(1);
    }, [
        restQuery
    ]);
    function onPagination(current) {
        setPage(current);
    }
    if (isLoading && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(reviews)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {});
    }
    const boxedLayout = [
        "books"
    ].includes(productType);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("border-t border-b border-border-200 border-opacity-70", {
                    "px-5 ltr:lg:pl-16 ltr:lg:pr-10 rtl:lg:pr-16 rtl:lg:pl-10": !boxedLayout,
                    "px-5 xl:px-0": boxedLayout
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("flex flex-col justify-between sm:flex-row sm:items-center", {
                        "mx-auto max-w-screen-xl": boxedLayout
                    }),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mt-3 text-lg font-semibold tracking-tight text-heading sm:mt-0",
                            children: [
                                t("text-product-reviews"),
                                " (",
                                paginatorInfo?.total ?? 0,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center border-border-200 border-opacity-70 py-3 sm:space-y-1 ltr:sm:border-l rtl:sm:border-r lg:flex-row lg:space-y-0 lg:!border-0 lg:py-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full shrink-0 border-border-200 border-opacity-70 ltr:sm:pl-8 ltr:sm:pr-5 rtl:sm:pl-5 rtl:sm:pr-8 lg:w-auto lg:py-5 ltr:lg:border-l rtl:lg:border-r",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sorting__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full shrink-0 border-border-200 border-opacity-70 ltr:sm:pl-8 ltr:sm:pr-5 rtl:sm:pl-5 rtl:sm:pr-8 lg:w-auto lg:py-5 ltr:lg:border-l rtl:lg:border-r",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_star_filter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    ]
                })
            }),
            !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(reviews) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("border-b border-border-200 border-opacity-70", {
                    "px-5 lg:px-16": !boxedLayout,
                    "px-5 xl:px-0": boxedLayout
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
                        "mx-auto max-w-screen-xl": boxedLayout
                    }),
                    children: [
                        reviews?.map((review)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reviews_review_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                review: review
                            }, `review-no-${review?.id}`)),
                        paginatorInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between border-t border-border-200 border-opacity-70 py-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                        t("text-page"),
                                        " ",
                                        paginatorInfo.currentPage,
                                        " ",
                                        t("text-of"),
                                        " ",
                                        Math.ceil(paginatorInfo.total / paginatorInfo.perPage)
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-2 flex items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        total: paginatorInfo.total,
                                        current: paginatorInfo.currentPage,
                                        pageSize: paginatorInfo.perPage,
                                        onChange: onPagination
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-center justify-center border-b border-border-200 border-opacity-70 px-5 py-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-lg font-semibold text-gray-400",
                    children: t("text-no-reviews-found")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReviewCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_rating_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(667);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2921);
/* harmony import */ var _components_icons_checked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7332);
/* harmony import */ var _components_icons_like_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2284);
/* harmony import */ var _components_icons_menu_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(910);
/* harmony import */ var _components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9711);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8609);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1116);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7608);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _framework_product__WEBPACK_IMPORTED_MODULE_13__, _framework_user__WEBPACK_IMPORTED_MODULE_15__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _framework_product__WEBPACK_IMPORTED_MODULE_13__, _framework_user__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function ReviewCard({ review  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_14__/* .useModalAction */ .SO)();
    const { createFeedback  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_13__/* .useCreateFeedback */ .AM)();
    const { isAuthorized  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_15__/* .useUser */ .aF)();
    const { id , comment , rating , photos , created_at , user , negative_feedbacks_count , positive_feedbacks_count , my_feedback  } = review;
    function feedback(value) {
        if (!isAuthorized) {
            openModal("LOGIN_VIEW");
            return;
        }
        createFeedback({
            model_id: id,
            model_type: "Review",
            ...value
        });
    }
    function openAbuseReportModal() {
        if (!isAuthorized) {
            openModal("LOGIN_VIEW");
            return;
        }
        openModal("ABUSE_REPORT", {
            model_id: id,
            model_type: "Review"
        });
    }
    const handleImageClick = (idx)=>{
        openModal("REVIEW_IMAGE_POPOVER", {
            images: photos,
            initSlide: idx
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-t border-border-200 border-opacity-70 py-7 first:border-t-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_rating_badge__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                rating: rating,
                className: "mb-2.5"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-4 flex items-center text-xs text-gray-500",
                children: [
                    t("text-by"),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "capitalize ltr:ml-1 rtl:mr-1",
                        children: user?.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_checked__WEBPACK_IMPORTED_MODULE_8__/* .CheckedIcon */ .Y, {
                        className: "h-[13px] w-[13px] text-gray-700 ltr:ml-1 rtl:mr-1"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-base leading-7 text-heading",
                children: comment
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "space-s-2 flex items-start pt-3",
                children: photos?.map((photo, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-1.5 cursor-pointer",
                        onClick: ()=>handleImageClick(idx),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_7__/* .Image */ .E, {
                            src: photo.thumbnail ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_12__/* .productPlaceholder */ .Hb,
                            alt: user.name ?? "",
                            width: 80,
                            height: 80,
                            objectFit: "contain",
                            className: "inline-flex rounded-md bg-gray-200"
                        })
                    }, photo.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-3.5 text-xs text-gray-400",
                        children: [
                            t("text-date"),
                            ": ",
                            dayjs__WEBPACK_IMPORTED_MODULE_6___default()(created_at).format("MMMM D, YYYY")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-6 rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center text-xs tracking-wider text-gray-400 transition",
                                disabled: my_feedback?.positive,
                                onClick: ()=>feedback({
                                        positive: true
                                    }),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_like_icon__WEBPACK_IMPORTED_MODULE_9__/* .LikeIcon */ .l, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("h-4 w-4 ltr:mr-1.5 rtl:ml-1.5", {
                                            "text-accent": my_feedback?.positive
                                        })
                                    }),
                                    positive_feedbacks_count
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center text-xs tracking-wider text-gray-400 transition",
                                onClick: ()=>feedback({
                                        negative: true
                                    }),
                                disabled: my_feedback?.negative,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_11__/* .DislikeIcon */ .R, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("h-4 w-4 ltr:mr-1.5 rtl:ml-1.5", {
                                            "text-accent": my_feedback?.negative
                                        })
                                    }),
                                    negative_feedbacks_count
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                                as: "div",
                                className: "relative inline-block ltr:text-left rtl:text-right",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                                        className: "group p-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_menu_icon__WEBPACK_IMPORTED_MODULE_10__/* .MenuIcon */ .O, {
                                            className: "text-gray-400 transition-colors group-hover:text-accent"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                                        enter: "transition ease-out duration-100",
                                        enterFrom: "transform opacity-0 scale-95",
                                        enterTo: "transform opacity-100 scale-100",
                                        leave: "transition ease-in duration-75",
                                        leaveFrom: "transform opacity-100 scale-100",
                                        leaveTo: "transform opacity-0 scale-95",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                                            as: "ul",
                                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("absolute mt-2 w-48 overflow-hidden rounded border border-border-200 bg-light py-2 shadow-700 focus:outline-none ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: openAbuseReportModal,
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("flex w-full items-center space-x-4 px-5 py-2.5 text-sm font-semibold capitalize transition duration-200 hover:text-accent focus:outline-none rtl:space-x-reverse", active ? "text-accent" : "text-body"),
                                                        children: t("text-report-abuse")
                                                    })
                                            })
                                        })
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_select_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7499);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3139);






const plans = [
    {
        id: "1",
        key: "sorting",
        label: "Recent",
        value: "created_at",
        orderBy: "created_at",
        sortedBy: "DESC"
    },
    {
        id: "2",
        key: "sorting",
        label: "Ratings: Low to High",
        value: "l2h",
        orderBy: "rating",
        sortedBy: "ASC"
    },
    {
        id: "3",
        key: "sorting",
        label: "Ratings: High to Low",
        value: "h2l",
        orderBy: "rating",
        sortedBy: "DESC"
    }
];
const Sorting = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_5__/* .useIsRTL */ .S)();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>plans.find((plan)=>plan.orderBy === router.query.orderBy) ?? plans[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
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
        }, undefined, {
            scroll: false
        });
        setSelected(values);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "min-w-[50px] text-sm text-body ltr:mr-2 rtl:ml-2",
                children: [
                    t("text-sort-by"),
                    " :"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select_select__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                defaultValue: selected,
                isRtl: isRTL,
                isMinimal: true,
                isSearchable: false,
                options: plans,
                width: 200,
                // @ts-ignore
                onChange: handleChange
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sorting);


/***/ }),

/***/ 8195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_select_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7499);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3139);






const plans = [
    {
        id: "1",
        key: "sorting",
        label: "All Star",
        value: "default"
    },
    {
        id: "2",
        key: "sorting",
        label: "5 Star",
        value: "5"
    },
    {
        id: "3",
        key: "sorting",
        label: "4 Star",
        value: "4"
    },
    {
        id: "4",
        key: "sorting",
        label: "3 Star",
        value: "3"
    },
    {
        id: "5",
        key: "sorting",
        label: "2 Star",
        value: "2"
    },
    {
        id: "6",
        key: "sorting",
        label: "1 Star",
        value: "1"
    }
];
const StarFilter = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_5__/* .useIsRTL */ .S)();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>plans.find((plan)=>plan.value === router.query.rating) ?? plans[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!router.query.rating) {
            setSelected(plans[0]);
        }
    }, [
        router.query.rating
    ]);
    function handleChange(values) {
        const { value  } = values;
        const { rating , ...restQuery } = router.query;
        router.push({
            pathname: router.pathname,
            query: {
                ...restQuery,
                ...value === "default" ? {} : {
                    rating: value
                }
            }
        }, undefined, {
            scroll: false
        });
        setSelected(values);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "min-w-[50px] text-sm text-body ltr:mr-2 rtl:ml-2",
                children: [
                    t("text-filter"),
                    " :"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_select_select__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                defaultValue: selected,
                // value={selected}
                isRtl: isRTL,
                isMinimal: true,
                isSearchable: false,
                options: plans,
                width: 100,
                // @ts-ignore
                onChange: handleChange
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarFilter);


/***/ }),

/***/ 4249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title , description , images , url , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        title: title,
        openGraph: {
            ...Boolean(url) && {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/${url}`
            },
            title,
            description,
            ...Boolean(images) && {
                images: images?.map((item)=>({
                        url: item?.image?.original,
                        alt: item?.title
                    }))
            }
        },
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 5932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "rc-pagination"
const external_rc_pagination_namespaceObject = require("rc-pagination");
var external_rc_pagination_default = /*#__PURE__*/__webpack_require__.n(external_rc_pagination_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/rc-pagination/assets/index.css
var assets = __webpack_require__(6307);
;// CONCATENATED MODULE: ./src/components/ui/pagination.tsx




const Pagination = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_rc_pagination_default()), {
        nextIcon: "next",
        prevIcon: "previous",
        ...props
    });
};
/* harmony default export */ const pagination = (Pagination);


/***/ }),

/***/ 9806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9717);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _framework_client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4648);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const getStaticPaths = async ({ locales  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(locales, "locales is not defined");
    const { data  } = await _client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products.all */ .Z.products.all({
        limit: 100
    });
    const paths = data?.flatMap((product)=>locales?.map((locale)=>({
                params: {
                    slug: product.slug
                },
                locale
            })));
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async ({ params , locale  })=>{
    const { slug  } = params; //* we know it's required because of getStaticPaths
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    await queryClient.prefetchQuery([
        _framework_client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        {
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.all */ .Z.settings.all(queryKey[1]));
    try {
        const product = await _client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products.get */ .Z.products.get({
            slug,
            language: locale
        });
        return {
            props: {
                product,
                ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                    "common"
                ]),
                dehydratedState: JSON.parse(JSON.stringify((0,react_query_hydration__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)))
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

/***/ 7348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_product_ssr__WEBPACK_IMPORTED_MODULE_10__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_product_ssr__WEBPACK_IMPORTED_MODULE_10__.b)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3746);
/* harmony import */ var _components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6560);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4249);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9006);
/* harmony import */ var _components_questions_product_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9475);
/* harmony import */ var _components_reviews_average_ratings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3441);
/* harmony import */ var _components_reviews_product_reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1137);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _framework_product_ssr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _components_questions_product_questions__WEBPACK_IMPORTED_MODULE_5__, _components_reviews_product_reviews__WEBPACK_IMPORTED_MODULE_7__, _framework_product_ssr__WEBPACK_IMPORTED_MODULE_10__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _components_questions_product_questions__WEBPACK_IMPORTED_MODULE_5__, _components_reviews_product_reviews__WEBPACK_IMPORTED_MODULE_7__, _framework_product_ssr__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












//FIXME: typescript and layout
const Details = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(9314), __webpack_require__.e(3311), __webpack_require__.e(2808), __webpack_require__.e(2795), __webpack_require__.e(1789), __webpack_require__.e(3147), __webpack_require__.e(6589), __webpack_require__.e(6834), __webpack_require__.e(6963)]).then(__webpack_require__.bind(__webpack_require__, 6963)), {
    loadableGenerated: {
        modules: [
            "products\\[slug].tsx -> " + "@/components/products/details/details"
        ]
    }
});
const BookDetails = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2083), __webpack_require__.e(9314), __webpack_require__.e(3311), __webpack_require__.e(2795), __webpack_require__.e(1789), __webpack_require__.e(3147), __webpack_require__.e(6589), __webpack_require__.e(6834), __webpack_require__.e(7041)]).then(__webpack_require__.bind(__webpack_require__, 7041)), {
    loadableGenerated: {
        modules: [
            "products\\[slug].tsx -> " + "@/components/products/details/book-details"
        ]
    }
});
const RelatedProducts = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>Promise.all(/* import() */[__webpack_require__.e(4804), __webpack_require__.e(2953)]).then(__webpack_require__.bind(__webpack_require__, 2953)), {
    loadableGenerated: {
        modules: [
            "products\\[slug].tsx -> " + "@/components/products/details/related-products"
        ]
    }
});
const CartCounterButton = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "products\\[slug].tsx -> " + "@/components/cart/cart-counter-button"
        ]
    },
    ssr: false
});
const ProductPage = ({ product  })=>{
    const { width  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_4__/* .useWindowSize */ .i)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: product.name,
                url: product.slug,
                images: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(product?.image) ? [
                    product.image
                ] : []
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_2__/* .AttributesProvider */ .iv, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-h-screen bg-light",
                        children: [
                            product.type?.slug === "books" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookDetails, {
                                product: product
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                                        product: product
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reviews_average_ratings__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        title: product?.name,
                                        ratingCount: product?.rating_count,
                                        totalReviews: product?.total_reviews,
                                        ratings: product?.ratings
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reviews_product_reviews__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                productId: product?.id,
                                productType: product?.type?.slug
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_questions_product_questions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                productId: product?.id,
                                shopId: product?.shop?.id,
                                productType: product?.type?.slug
                            }),
                            product.type?.slug !== "books" && product?.related_products?.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-5 lg:p-14 xl:p-16",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RelatedProducts, {
                                    products: product.related_products,
                                    currentProductId: product.id,
                                    gridClassName: "lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
                                })
                            })
                        ]
                    }),
                    width > 1023 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartCounterButton, {})
                ]
            })
        ]
    });
};
ProductPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6307:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3104:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 6024:
/***/ ((module) => {

"use strict";
module.exports = require("little-state-machine");

/***/ }),

/***/ 8492:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 9699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 7342:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-ssr-error.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

"use strict";
module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 9717:
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ 3094:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ 1929:
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

/***/ }),

/***/ 7139:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 2089:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useWindowSize");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8780:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-invariant");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

"use strict";
module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,3139,7636,8484,6214,6443,7896,2057,5682,1116,9355,6153,6748,3746,2493,148,6631,4815,7499,6759,344,7173], () => (__webpack_exec__(7348)));
module.exports = __webpack_exports__;

})();