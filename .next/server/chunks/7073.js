"use strict";
exports.id = 7073;
exports.ids = [7073];
exports.modules = {

/***/ 6824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8609);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2921);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(758);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7507);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5494);
/* harmony import */ var _components_icons_social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9370);










const ManufacturerCard = ({ item , className  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* .Routes.manufacturer */ .Z.manufacturer(item?.slug),
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex cursor-pointer items-center rounded border border-gray-200 bg-white p-5 shadow-md", className),
        title: item?.name,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .E, {
                    src: item?.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__/* .avatarPlaceholder */ .Pb,
                    alt: item?.name,
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col overflow-hidden ltr:ml-4 rtl:mr-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mb-2 truncate text-lg font-semibold text-heading transition-colors hover:text-orange-500",
                        children: item?.name
                    }),
                    !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(item?.socials) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-1.5 flex items-center space-x-3 ltr:ml-1 rtl:mr-1 rtl:space-x-reverse",
                        children: item?.socials?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: item.url,
                                target: "_blank",
                                className: `cursor-pointer text-body transition-colors duration-300 hover:text-accent focus:outline-none`,
                                rel: "noreferrer",
                                children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_8__/* .getIcon */ .q)({
                                    iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_9__,
                                    iconName: item.icon,
                                    className: "w-[16px] h-[14px]"
                                })
                            }, index))
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-1.5 flex items-center space-x-3 rtl:space-x-reverse",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/",
                            target: "_blank",
                            className: `cursor-pointer text-body transition-colors duration-300 hover:text-accent focus:outline-none`,
                            rel: "noreferrer",
                            children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_8__/* .getIcon */ .q)({
                                iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_9__,
                                iconName: "FacebookIcon",
                                className: "w-[16px] h-[14px]"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManufacturerCard);


/***/ }),

/***/ 9374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);


const ManufacturerLoader = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: 280,
        height: 120,
        viewBox: "0 0 280 120",
        backgroundColor: "#e0e0e0",
        foregroundColor: "#cecece",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "50",
                cy: "50",
                r: "50"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "112",
                y: "24",
                rx: "0",
                ry: "0",
                width: "180",
                height: "18"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "114",
                y: "56",
                rx: "0",
                ry: "0",
                width: "90",
                height: "12"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManufacturerLoader);


/***/ })

};
;