"use strict";
exports.id = 9289;
exports.ids = [9289];
exports.modules = {

/***/ 9289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileMainMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7507);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6469);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const headerLinks = [
    {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* .Routes.shops */ .Z.shops,
        label: "nav-menu-shops"
    },
    {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* .Routes.manufacturers */ .Z.manufacturers,
        label: "text-manufacturers"
    },
    {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* .Routes.authors */ .Z.authors,
        label: "text-authors"
    },
    {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* .Routes.coupons */ .Z.coupons,
        label: "nav-menu-offer"
    },
    {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* .Routes.help */ .Z.help,
        label: "nav-menu-faq"
    },
    {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* .Routes.contactUs */ .Z.contactUs,
        label: "nav-menu-contact"
    }
];
function MobileMainMenu() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__/* .drawerAtom */ .P);
    function handleClick(path) {
        router.push(path);
        closeSidebar({
            display: false,
            view: ""
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "flex-grow",
            children: headerLinks.map(({ href , label  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleClick(href),
                        className: "flex cursor-pointer items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8",
                        children: t(label)
                    })
                }, `${href}${label}`))
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;