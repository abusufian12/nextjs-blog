exports.id = 6842;
exports.ids = [6842];
exports.modules = {

/***/ 3290:
/***/ ((module) => {

// Exports
module.exports = {
	"progress_container": "progress-box_progress_container___zzev",
	"bar": "progress-box_bar__t1PIC",
	"progress_wrapper": "progress-box_progress_wrapper___Kwhc",
	"checked": "progress-box_checked__SaJdX",
	"status_wrapper": "progress-box_status_wrapper__6S4IY"
};


/***/ }),

/***/ 1205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CheckMark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CheckMark = ({ ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20.894",
        height: "16",
        viewBox: "0 0 20.894 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            "data-name": "_ionicons_svg_ios-checkmark (3)",
            d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
            transform: "translate(-148.4 -173.6)",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 9486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ OrderItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5666);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2083);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3139);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2921);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8609);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7608);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(758);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7507);
/* harmony import */ var _lib_get_review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_2__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











//FIXME: need to fix this usePrice hooks issue within the table render we may check with nested property
const OrderItemList = (_, record)=>{
    const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: record.pivot?.unit_price
    });
    let name = record.name;
    if (record?.pivot?.variation_option_id) {
        const variationTitle = record?.variation_options?.find((vo)=>vo?.id === record?.pivot?.variation_option_id)["title"];
        name = `${name} - ${variationTitle}`;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex h-16 w-16 shrink-0 overflow-hidden rounded",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                    src: record.image?.thumbnail ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
                    alt: name,
                    className: "h-full w-full object-cover",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col overflow-hidden ltr:ml-4 rtl:mr-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-1 flex space-x-1 rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                href: _config_routes__WEBPACK_IMPORTED_MODULE_9__/* .Routes.product */ .Z.product(record?.slug),
                                className: "inline-block overflow-hidden truncate text-sm text-body transition-colors hover:text-accent hover:underline",
                                locale: record?.language,
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block overflow-hidden truncate text-sm text-body",
                                children: "x"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block overflow-hidden truncate text-sm font-semibold text-heading",
                                children: record.unit
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mb-1 inline-block overflow-hidden truncate text-sm font-semibold text-accent",
                        children: price
                    })
                ]
            })
        ]
    });
};
const OrderItems = ({ products , orderId  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_4__/* .useIsRTL */ .S)();
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    const orderTableColumns = [
        {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ltr:pl-20 rtl:pr-20",
                children: t("text-item")
            }),
            dataIndex: "",
            key: "items",
            align: alignLeft,
            width: 250,
            ellipsis: true,
            render: OrderItemList
        },
        {
            title: t("text-quantity"),
            dataIndex: "pivot",
            key: "pivot",
            align: "center",
            width: 100,
            render: function renderQuantity(pivot) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-base",
                    children: pivot.order_quantity
                });
            }
        },
        {
            title: t("text-price"),
            dataIndex: "pivot",
            key: "price",
            align: alignRight,
            width: 100,
            render: function RenderPrice(pivot) {
                const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
                    amount: pivot.subtotal
                });
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: price
                });
            }
        },
        {
            title: "",
            dataIndex: "",
            align: alignRight,
            width: 140,
            render: function RenderReview(_, record) {
                function openReviewModal() {
                    openModal("REVIEW_RATING", {
                        product_id: record.id,
                        shop_id: record.shop_id,
                        order_id: orderId,
                        name: record.name,
                        image: record.image,
                        my_review: (0,_lib_get_review__WEBPACK_IMPORTED_MODULE_10__/* .getReview */ .T)(record),
                        ...record.pivot?.variation_option_id && {
                            variation_option_id: record.pivot?.variation_option_id
                        }
                    });
                }
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: openReviewModal,
                    className: "cursor-pointer text-sm font-semibold text-body transition-colors hover:text-accent",
                    children: (0,_lib_get_review__WEBPACK_IMPORTED_MODULE_10__/* .getReview */ .T)(record) ? t("text-update-review") : t("text-write-review")
                });
            }
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .Table */ .i, {
        //@ts-ignore
        columns: orderTableColumns,
        data: products,
        rowKey: (record)=>record.pivot?.variation_option_id ? record.pivot.variation_option_id : record.created_at,
        className: "orderDetailsTable w-full",
        rowClassName: "!cursor-auto",
        scroll: {
            x: 350,
            y: 500
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4246);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6631);
/* harmony import */ var _components_ui_progress_box_progress_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9720);
/* harmony import */ var _framework_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_order__WEBPACK_IMPORTED_MODULE_4__]);
_framework_order__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const OrderStatuses = ({ status , language  })=>{
    const { orderStatuses , isLoading , error  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_4__/* .useOrderStatuses */ .Rr)({
        limit: 100,
        language: language
    });
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        showText: false,
        className: "h-[200px]"
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: error.message
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_progress_box_progress_box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        data: orderStatuses,
        status: status
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderStatuses);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const Badge = ({ className , color: colorOverride , textColor: textColorOverride , text , style  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const classes = {
        root: "px-3 py-1 rounded-full text-sm",
        default: "bg-accent",
        text: "text-light"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
            [classes.default]: !colorOverride,
            [classes.text]: !textColorOverride
        }, colorOverride, textColorOverride, className),
        style: style,
        children: t(text)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ 9720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1205);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1427);
/* harmony import */ var _progress_box_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3290);
/* harmony import */ var _progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4__);





const ProgressBox = ({ status , data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "h-full w-full",
        options: {
            scrollbars: {
                autoHide: "never"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex w-full flex-col py-7 md:flex-row md:items-start md:justify-start",
            children: data?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress_container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress_wrapper), status >= item.serial ? (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().checked) : ""),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().status_wrapper),
                                    children: status >= item.serial ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-4 w-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__/* .CheckMark */ .Y, {
                                            className: "w-full"
                                        })
                                    }) : item.serial
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0",
                            children: item && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center",
                                children: item?.name
                            })
                        })
                    ]
                }, item.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBox);


/***/ }),

/***/ 5666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ rc_table__WEBPACK_IMPORTED_MODULE_1___default.a)
/* harmony export */ });
/* harmony import */ var rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7254);
/* harmony import */ var rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3345);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_table__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ formatAddress)
/* harmony export */ });
function removeFalsy(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v])=>Boolean(v)));
}
function formatAddress(address) {
    if (!address) return;
    const temp = [
        "street_address",
        "state",
        "city",
        "zip",
        "country"
    ].reduce((acc, k)=>({
            ...acc,
            [k]: address[k]
        }), {});
    const formattedAddress = removeFalsy(temp);
    return Object.values(formattedAddress).join(", ");
}


/***/ }),

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ getReview)
/* harmony export */ });
function getReview(product) {
    if (product?.pivot?.variation_option_id) {
        return product?.my_review?.find((review)=>review?.variation_option_id === product?.pivot?.variation_option_id);
    } else {
        return product?.my_review?.[0];
    }
}


/***/ }),

/***/ 7254:
/***/ (() => {



/***/ })

};
;