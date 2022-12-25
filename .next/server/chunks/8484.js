"use strict";
exports.id = 8484;
exports.ids = [8484];
exports.modules = {

/***/ 8855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CloseIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            clipRule: "evenodd"
        })
    });


/***/ }),

/***/ 3830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2921);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(758);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8609);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1683);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_settings__WEBPACK_IMPORTED_MODULE_5__]);
_framework_settings__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Logo = ({ className , ...props })=>{
    const { settings: { logo , siteTitle  }  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_5__/* .useSettings */ .rV)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: "/",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("inline-flex", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-10 w-32 overflow-hidden md:w-40",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                src: logo?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__/* .logoPlaceholder */ .nM,
                alt: siteTitle || "PickBazar Logo",
                layout: "fill",
                objectFit: "contain",
                loading: "eager"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ ModalProvider),
/* harmony export */   "SO": () => (/* binding */ useModalAction),
/* harmony export */   "X9": () => (/* binding */ useModalState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    view: undefined,
    isOpen: false,
    data: null
};
function modalReducer(state, action) {
    switch(action.type){
        case "open":
            return {
                ...state,
                view: action.view,
                data: action.payload,
                isOpen: true
            };
        case "close":
            return {
                ...state,
                view: undefined,
                data: null,
                isOpen: false
            };
        default:
            throw new Error("Unknown Modal Action!");
    }
}
const ModalStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
ModalStateContext.displayName = "ModalStateContext";
const ModalActionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
ModalActionContext.displayName = "ModalActionContext";
const ModalProvider = ({ children  })=>{
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(modalReducer, initialState);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalStateContext.Provider, {
        value: state,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalActionContext.Provider, {
            value: dispatch,
            children: children
        })
    });
};
function useModalState() {
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ModalStateContext);
    if (context === undefined) {
        throw new Error(`useModalState must be used within a ModalProvider`);
    }
    return context;
}
function useModalAction() {
    const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ModalActionContext);
    if (dispatch === undefined) {
        throw new Error(`useModalAction must be used within a ModalProvider`);
    }
    return {
        openModal (view, payload) {
            dispatch({
                type: "open",
                view,
                payload
            });
        },
        closeModal () {
            dispatch({
                type: "close"
            });
        }
    };
}


/***/ }),

/***/ 4648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ API_ENDPOINTS)
/* harmony export */ });
const API_ENDPOINTS = {
    PRODUCTS: "/products",
    PRODUCTS_POPULAR: "/popular-products",
    PRODUCTS_REVIEWS: "/reviews",
    PRODUCTS_REVIEWS_ABUSE_REPORT: "/abusive_reports",
    PRODUCTS_QUESTIONS: "/questions",
    FEEDBACK: "/feedbacks",
    CATEGORIES: "/categories",
    TYPES: "/types",
    TAGS: "/tags",
    SHOPS: "/shops",
    AUTHORS: "/authors",
    AUTHORS_TOP: "/top-authors",
    MANUFACTURERS: "/manufacturers",
    MANUFACTURERS_TOP: "/top-manufacturers",
    COUPONS: "/coupons",
    COUPONS_VERIFY: "/coupons/verify",
    ORDERS: "/orders",
    ORDERS_STATUS: "/order-status",
    ORDERS_REFUNDS: "/refunds",
    ORDERS_CHECKOUT_VERIFY: "/orders/checkout/verify",
    ORDERS_DOWNLOADS: "/downloads",
    GENERATE_DOWNLOADABLE_PRODUCT_LINK: "/downloads/digital_file",
    USERS: "/users",
    USERS_ADDRESS: "/address",
    USERS_ME: "/me",
    USERS_LOGIN: "/token",
    USERS_REGISTER: "/register",
    USERS_FORGOT_PASSWORD: "/forget-password",
    USERS_VERIFY_FORGOT_PASSWORD_TOKEN: "/verify-forget-password-token",
    USERS_RESET_PASSWORD: "/reset-password",
    USERS_CHANGE_PASSWORD: "/change-password",
    USERS_LOGOUT: "/logout",
    USERS_SUBSCRIBE_TO_NEWSLETTER: "/subscribe-to-newsletter",
    USERS_CONTACT_US: "/contact-us",
    USERS_WISHLIST: "/my-wishlists",
    WISHLIST: "/wishlists",
    USERS_WISHLIST_TOGGLE: "/wishlists/toggle",
    SOCIAL_LOGIN: "/social-login-token",
    SEND_OTP_CODE: "/send-otp-code",
    VERIFY_OTP_CODE: "/verify-otp-code",
    OTP_LOGIN: "/otp-login",
    UPDATE_CONTACT: "/update-contact",
    SETTINGS: "/settings",
    UPLOADS: "/attachments",
    MY_QUESTIONS: "/my-questions",
    MY_REPORTS: "/my-reports"
};


/***/ }),

/***/ 1095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ HttpClient)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9035);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://api.ra-rang.com",
    timeout: 5000000,
    headers: {
        "Content-Type": "application/json"
    }
});
// Change request data/error here
Axios.interceptors.request.use((config)=>{
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .AUTH_TOKEN_KEY */ .nd);
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token ? token : ""}`
    };
    return config;
});
// Change response data/error here
Axios.interceptors.response.use((response)=>response, (error)=>{
    if (error.response && error.response.status === 401 || error.response && error.response.status === 403 || error.response && error.response.data.message === "PICKBAZAR_ERROR.NOT_AUTHORIZED") {
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove(_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .AUTH_TOKEN_KEY */ .nd);
        next_router__WEBPACK_IMPORTED_MODULE_2___default().reload();
    }
    return Promise.reject(error);
});
class HttpClient {
    static async get(url, params) {
        const response = await Axios.get(url, {
            params
        });
        return response.data;
    }
    static async post(url, data, options) {
        const response = await Axios.post(url, data, options);
        return response.data;
    }
    static async put(url, data) {
        const response = await Axios.put(url, data);
        return response.data;
    }
    static async delete(url) {
        const response = await Axios.delete(url);
        return response.data;
    }
    static formatSearchParams(params) {
        return Object.entries(params).filter(([, value])=>Boolean(value)).map(([k, v])=>[
                "type",
                "categories",
                "tags",
                "author",
                "manufacturer"
            ].includes(k) ? `${k}.slug:${v}` : `${k}:${v}`).join(";");
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4648);
/* harmony import */ var _http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_client__WEBPACK_IMPORTED_MODULE_1__]);
_http_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Client {
    products = {
        all: ({ type , categories , name , shop_id , author , manufacturer , min_price , max_price , tags , ...params })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS, {
                searchJoin: "and",
                with: "type;author",
                ...params,
                search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                    type,
                    categories,
                    name,
                    shop_id,
                    author,
                    manufacturer,
                    min_price,
                    max_price,
                    tags,
                    status: "publish"
                })
            }),
        popular: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_POPULAR */ .P.PRODUCTS_POPULAR, params),
        questions: ({ question , ...params })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS, {
                searchJoin: "and",
                ...params,
                search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                    question
                })
            }),
        get: ({ slug , language  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS}/${slug}`, {
                language,
                searchJoin: "and",
                with: "categories;shop;type;variations;variations.attribute.values;manufacturer;variation_options;tags;author"
            }),
        createFeedback: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.FEEDBACK */ .P.FEEDBACK, input),
        createAbuseReport: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS_ABUSE_REPORT */ .P.PRODUCTS_REVIEWS_ABUSE_REPORT, input),
        createQuestion: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS, input)
    };
    myQuestions = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.MY_QUESTIONS */ .P.MY_QUESTIONS, {
                with: "user",
                orderBy: "created_at",
                sortedBy: "desc",
                ...params
            })
    };
    myReports = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.MY_REPORTS */ .P.MY_REPORTS, {
                with: "user",
                orderBy: "created_at",
                sortedBy: "desc",
                ...params
            })
    };
    reviews = {
        all: ({ rating , ...params })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS, {
                searchJoin: "and",
                with: "user",
                ...params,
                search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                    rating
                })
            }),
        get: ({ id  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS}/${id}`),
        create: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS, input),
        update: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.put */ .e.put(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS}/${input.id}`, input)
    };
    categories = {
        all: ({ type , ...params })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.CATEGORIES */ .P.CATEGORIES, {
                searchJoin: "and",
                ...params,
                ...type && {
                    search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                        type
                    })
                }
            })
    };
    tags = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.TAGS */ .P.TAGS, params)
    };
    types = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.TYPES */ .P.TYPES, params),
        get: ({ slug , language  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.TYPES */ .P.TYPES}/${slug}`, {
                language
            })
    };
    shops = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS, {
                search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                    is_active: "1"
                }),
                ...params
            }),
        get: (slug)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS}/${slug}`)
    };
    authors = {
        all: ({ name , ...params })=>{
            return _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.AUTHORS */ .P.AUTHORS, {
                ...params,
                search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                    name
                })
            });
        },
        top: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.AUTHORS_TOP */ .P.AUTHORS_TOP, params),
        get: ({ slug , language  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.AUTHORS */ .P.AUTHORS}/${slug}`, {
                language
            })
    };
    manufacturers = {
        all: ({ name , ...params })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.MANUFACTURERS */ .P.MANUFACTURERS, {
                ...params,
                search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                    name
                })
            }),
        top: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.MANUFACTURERS_TOP */ .P.MANUFACTURERS_TOP, params),
        get: ({ slug , language  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.MANUFACTURERS */ .P.MANUFACTURERS}/${slug}`, {
                language
            })
    };
    coupons = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.COUPONS */ .P.COUPONS, params),
        verify: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.COUPONS_VERIFY */ .P.COUPONS_VERIFY, input)
    };
    orders = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS, {
                with: "refund",
                ...params
            }),
        get: (tracking_number)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS}/${tracking_number}`),
        create: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS, input),
        statuses: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_STATUS */ .P.ORDERS_STATUS, params),
        refunds: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_REFUNDS */ .P.ORDERS_REFUNDS, params),
        createRefund: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_REFUNDS */ .P.ORDERS_REFUNDS, input),
        downloadable: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_DOWNLOADS */ .P.ORDERS_DOWNLOADS, query),
        verify: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_CHECKOUT_VERIFY */ .P.ORDERS_CHECKOUT_VERIFY, input),
        generateDownloadLink: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.GENERATE_DOWNLOADABLE_PRODUCT_LINK */ .P.GENERATE_DOWNLOADABLE_PRODUCT_LINK, input)
    };
    users = {
        me: ()=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME),
        update: (user)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.put */ .e.put(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS */ .P.USERS}/${user.id}`, user),
        login: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_LOGIN */ .P.USERS_LOGIN, input),
        socialLogin: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SOCIAL_LOGIN */ .P.SOCIAL_LOGIN, input),
        sendOtpCode: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SEND_OTP_CODE */ .P.SEND_OTP_CODE, input),
        verifyOtpCode: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.VERIFY_OTP_CODE */ .P.VERIFY_OTP_CODE, input),
        OtpLogin: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.OTP_LOGIN */ .P.OTP_LOGIN, input),
        register: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_REGISTER */ .P.USERS_REGISTER, input),
        forgotPassword: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_FORGOT_PASSWORD */ .P.USERS_FORGOT_PASSWORD, input),
        verifyForgotPasswordToken: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN */ .P.USERS_VERIFY_FORGOT_PASSWORD_TOKEN, input),
        resetPassword: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_RESET_PASSWORD */ .P.USERS_RESET_PASSWORD, input),
        changePassword: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_CHANGE_PASSWORD */ .P.USERS_CHANGE_PASSWORD, input),
        logout: ()=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_LOGOUT */ .P.USERS_LOGOUT, {}),
        deleteAddress: ({ id  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient["delete"] */ .e["delete"](`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_ADDRESS */ .P.USERS_ADDRESS}/${id}`),
        subscribe: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_SUBSCRIBE_TO_NEWSLETTER */ .P.USERS_SUBSCRIBE_TO_NEWSLETTER, input),
        contactUs: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_CONTACT_US */ .P.USERS_CONTACT_US, input)
    };
    wishlist = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_WISHLIST */ .P.USERS_WISHLIST, {
                with: "shop",
                orderBy: "created_at",
                sortedBy: "desc",
                ...params
            }),
        toggle: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_WISHLIST_TOGGLE */ .P.USERS_WISHLIST_TOGGLE, input),
        remove: (id)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient["delete"] */ .e["delete"](`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/${id}`),
        checkIsInWishlist: ({ product_id  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/in_wishlist/${product_id}`)
    };
    settings = {
        all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS, {
                ...params
            }),
        upload: (input)=>{
            let formData = new FormData();
            input.forEach((attachment)=>{
                formData.append("attachment[]", attachment);
            });
            return _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.UPLOADS */ .P.UPLOADS, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Client());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mU": () => (/* binding */ useSubscription),
/* harmony export */   "rV": () => (/* binding */ useSettings),
/* harmony export */   "xh": () => (/* binding */ useUploads)
/* harmony export */ });
/* unused harmony export useVerifyCoupon */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7422);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_get_preview_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(522);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6617);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_5__]);
([_client__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function useSettings() {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const formattedOptions = {
        language: locale
    };
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].settings.all */ .Z.settings.all(Object.assign({}, queryKey[1], pageParam)));
    return {
        settings: data?.options ?? {},
        isLoading,
        error
    };
}
const useUploads = ({ onChange , defaultFiles  })=>{
    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_lib_get_preview_image__WEBPACK_IMPORTED_MODULE_9__/* .getPreviewImage */ .a)(defaultFiles));
    const { mutate: upload , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].settings.upload */ .Z.settings.upload, {
        onSuccess: (data)=>{
            if (onChange) {
                const dataAfterRemoveTypename = data?.map(({ __typename , ...rest })=>rest);
                onChange(dataAfterRemoveTypename);
                setFiles((0,_lib_get_preview_image__WEBPACK_IMPORTED_MODULE_9__/* .getPreviewImage */ .a)(dataAfterRemoveTypename));
            }
        }
    });
    function handleSubmit(data) {
        upload(data);
    }
    return {
        mutate: handleSubmit,
        isLoading,
        files
    };
};
function useSubscription() {
    let [isSubscribed, setIsSubscribed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const subscription = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].users.subscribe */ .Z.users.subscribe, {
        onSuccess: ()=>{
            setIsSubscribed(true);
        },
        onError: ()=>{
            setIsSubscribed(false);
        }
    });
    return {
        ...subscription,
        isSubscribed
    };
}
function useVerifyCoupon() {
    const { t  } = useTranslation();
    const [_, applyCoupon] = useAtom(couponAtom);
    let [formError, setFormError] = useState(null);
    const { mutate , isLoading  } = useMutation(client.coupons.verify, {
        onSuccess: (data)=>{
            if (!data.is_valid) {
                setFormError({
                    code: t("error-invalid-coupon")
                });
            }
            applyCoupon(data?.coupon);
        },
        onError: (error)=>{
            const { response: { data  }  } = error ?? {};
            toast.error(data?.message);
        }
    });
    return {
        mutate,
        isLoading,
        formError,
        setFormError
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mg": () => (/* binding */ getDirection),
/* harmony export */   "V4": () => (/* binding */ SHOPS_LIMIT),
/* harmony export */   "iK": () => (/* binding */ CHECKOUT),
/* harmony export */   "k$": () => (/* binding */ DEFAULT_LANGUAGE),
/* harmony export */   "nd": () => (/* binding */ AUTH_TOKEN_KEY),
/* harmony export */   "qW": () => (/* binding */ CART_KEY)
/* harmony export */ });
/* unused harmony exports TOKEN, AUTH_PERMISSIONS, LIMIT, SUPER_ADMIN, CUSTOMER, RTL_LANGUAGES, PRODUCT_INITIAL_FETCH_LIMIT */
const CART_KEY = "pick-cart";
const TOKEN = "token";
const AUTH_TOKEN_KEY = "auth_token";
const AUTH_PERMISSIONS = "auth_permissions";
const LIMIT = 10;
const SUPER_ADMIN = "super_admin";
const CUSTOMER = "customer";
const CHECKOUT = "pickbazar-checkout";
const SHOPS_LIMIT = 20;
const RTL_LANGUAGES = [
    "ar",
    "he"
];
const PRODUCT_INITIAL_FETCH_LIMIT = 30;
const DEFAULT_LANGUAGE = "en" ?? 0;
function getDirection(language) {
    if (!language) return "ltr";
    return RTL_LANGUAGES.includes(language) ? "rtl" : "ltr";
}


/***/ }),

/***/ 522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getPreviewImage)
/* harmony export */ });
const getPreviewImage = (value)=>{
    let images = [];
    if (value) {
        images = Array.isArray(value) ? value.map(({ thumbnail  })=>({
                preview: thumbnail
            })) : [
            {
                preview: value.thumbnail
            }
        ];
    }
    return images;
};


/***/ }),

/***/ 8609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pb": () => (/* reexport */ avatar),
  "Qg": () => (/* reexport */ coupon),
  "nM": () => (/* reexport */ logo),
  "Hb": () => (/* reexport */ product)
});

;// CONCATENATED MODULE: ./src/assets/placeholders/product.svg
/* harmony default export */ const product = ({"src":"/_next/static/media/product.ba64d04a.svg","height":210,"width":270});
;// CONCATENATED MODULE: ./src/assets/placeholders/coupon.svg
/* harmony default export */ const coupon = ({"src":"/_next/static/media/coupon.5015b440.svg","height":240,"width":320});
;// CONCATENATED MODULE: ./src/assets/placeholders/avatar.svg
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.c9441dc8.svg","height":120,"width":120});
;// CONCATENATED MODULE: ./src/assets/placeholders/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.0679544b.svg","height":18,"width":109});
;// CONCATENATED MODULE: ./src/lib/placeholders.tsx






/***/ }),

/***/ 1805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport default from dynamic */ react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7139);
/* harmony import */ var react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 6862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ authorizationAtom)
/* harmony export */ });
/* unused harmony export checkIsLoggedIn */
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9035);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function checkIsLoggedIn() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_TOKEN_KEY */ .nd);
    if (!token) return false;
    return true;
}
const authorizationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(checkIsLoggedIn());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gh": () => (/* binding */ deliveryTimeAtom),
/* harmony export */   "Jb": () => (/* binding */ verifiedResponseAtom),
/* harmony export */   "Km": () => (/* binding */ billingAddressAtom),
/* harmony export */   "du": () => (/* binding */ shippingAddressAtom),
/* harmony export */   "lu": () => (/* binding */ customerContactAtom),
/* harmony export */   "y9": () => (/* binding */ clearCheckoutAtom)
/* harmony export */ });
/* unused harmony exports defaultCheckout, checkoutAtom, paymentGatewayAtom, verifiedTokenAtom, couponAtom, discountAtom, walletAtom, payableAmountAtom */
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9035);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const defaultCheckout = {
    billing_address: null,
    shipping_address: null,
    delivery_time: null,
    payment_gateway: "STRIPE",
    customer_contact: "",
    verified_response: null,
    coupon: null,
    payable_amount: 0,
    use_wallet: false
};
// Original atom.
const checkoutAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomWithStorage)(_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT */ .iK, defaultCheckout);
const clearCheckoutAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, (_get, set, _data)=>{
    return set(checkoutAtom, defaultCheckout);
});
const billingAddressAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).billing_address, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        billing_address: data
    });
});
const shippingAddressAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).shipping_address, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        shipping_address: data
    });
});
const deliveryTimeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).delivery_time, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        delivery_time: data
    });
});
const paymentGatewayAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).payment_gateway, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        payment_gateway: data
    });
});
const verifiedTokenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).token, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        token: data
    });
});
const customerContactAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).customer_contact, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        customer_contact: data
    });
});
const verifiedResponseAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).verified_response, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        verified_response: data
    });
});
const couponAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).coupon, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        coupon: data
    });
});
const discountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).coupon?.amount);
const walletAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).use_wallet, (get, set)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        use_wallet: !prev.use_wallet
    });
});
const payableAmountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).payable_amount, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        payable_amount: data
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ drawerAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const drawerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    display: false,
    view: "",
    data: null
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zl": () => (/* binding */ CartProvider),
/* harmony export */   "jD": () => (/* binding */ useCart)
/* harmony export */ });
/* unused harmony export cartContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7859);
/* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1483);
/* harmony import */ var _lib_use_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1805);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9035);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_5__]);
([jotai__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const cartContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
cartContext.displayName = "CartContext";
const useCart = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(cartContext);
    if (context === undefined) {
        throw new Error(`useCart must be used within a CartProvider`);
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>context, [
        context
    ]);
};
const CartProvider = (props)=>{
    const [savedCart, saveCart] = (0,_lib_use_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .useLocalStorage */ ._)(_lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .CART_KEY */ .qW, JSON.stringify(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E));
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__/* .cartReducer */ .C, savedCart ? JSON.parse(savedCart) : _cart_reducer__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E);
    const [, emptyVerifiedResponse] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_5__/* .verifiedResponseAtom */ .Jb);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        emptyVerifiedResponse(null);
    }, [
        emptyVerifiedResponse,
        state
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        saveCart(JSON.stringify(state));
    }, [
        state,
        saveCart
    ]);
    const addItemsToCart = (items)=>dispatch({
            type: "ADD_ITEMS_WITH_QUANTITY",
            items
        });
    const addItemToCart = (item, quantity)=>dispatch({
            type: "ADD_ITEM_WITH_QUANTITY",
            item,
            quantity
        });
    const removeItemFromCart = (id)=>dispatch({
            type: "REMOVE_ITEM_OR_QUANTITY",
            id
        });
    const clearItemFromCart = (id)=>dispatch({
            type: "REMOVE_ITEM",
            id
        });
    const isInCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>!!(0,_cart_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .rV)(state.items, id), [
        state.items
    ]);
    const getItemFromCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>(0,_cart_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .rV)(state.items, id), [
        state.items
    ]);
    const isInStock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>(0,_cart_utils__WEBPACK_IMPORTED_MODULE_7__/* .inStock */ .pz)(state.items, id), [
        state.items
    ]);
    const updateCartLanguage = (language)=>dispatch({
            type: "UPDATE_CART_LANGUAGE",
            language
        });
    const resetCart = ()=>dispatch({
            type: "RESET_CART"
        });
    const value = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({
            ...state,
            addItemsToCart,
            addItemToCart,
            removeItemFromCart,
            clearItemFromCart,
            getItemFromCart,
            isInCart,
            isInStock,
            resetCart,
            updateCartLanguage
        }), [
        getItemFromCart,
        isInCart,
        isInStock,
        state
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(cartContext.Provider, {
        value: value,
        ...props
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ cartReducer),
/* harmony export */   "E": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1483);

const initialState = {
    items: [],
    isEmpty: true,
    totalItems: 0,
    totalUniqueItems: 0,
    total: 0,
    meta: null,
    language: "en"
};
function cartReducer(state, action) {
    switch(action.type){
        case "ADD_ITEMS_WITH_QUANTITY":
            {
                const items = [
                    ...state.items,
                    ...action.items
                ];
                return generateFinalState(state, items);
            }
        case "ADD_ITEM_WITH_QUANTITY":
            {
                const items1 = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .addItemWithQuantity */ .Kv)(state.items, action.item, action.quantity);
                return generateFinalState(state, items1);
            }
        case "REMOVE_ITEM_OR_QUANTITY":
            {
                const items2 = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .removeItemOrQuantity */ .um)(state.items, action.id, action.quantity ?? 1);
                return generateFinalState(state, items2);
            }
        case "ADD_ITEM":
            {
                const items3 = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .addItem */ .jX)(state.items, action.item);
                return generateFinalState(state, items3);
            }
        case "REMOVE_ITEM":
            {
                const items4 = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .removeItem */ .cl)(state.items, action.id);
                return generateFinalState(state, items4);
            }
        case "UPDATE_ITEM":
            {
                const items5 = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .updateItem */ .$G)(state.items, action.id, action.item);
                return generateFinalState(state, items5);
            }
        case "UPDATE_CART_LANGUAGE":
            {
                return {
                    ...initialState,
                    language: action.language
                };
            }
        case "RESET_CART":
            return initialState;
        default:
            return state;
    }
}
const generateFinalState = (state, items)=>{
    const totalUniqueItems = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateUniqueItems */ .tm)(items);
    return {
        ...state,
        items: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateItemTotals */ .pQ)(items),
        totalItems: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateTotalItems */ .yL)(items),
        totalUniqueItems,
        total: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateTotal */ .tf)(items),
        isEmpty: totalUniqueItems === 0
    };
};


/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ updateItem),
/* harmony export */   "Kv": () => (/* binding */ addItemWithQuantity),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "jX": () => (/* binding */ addItem),
/* harmony export */   "pQ": () => (/* binding */ calculateItemTotals),
/* harmony export */   "pz": () => (/* binding */ inStock),
/* harmony export */   "rV": () => (/* binding */ getItem),
/* harmony export */   "tf": () => (/* binding */ calculateTotal),
/* harmony export */   "tm": () => (/* binding */ calculateUniqueItems),
/* harmony export */   "um": () => (/* binding */ removeItemOrQuantity),
/* harmony export */   "yL": () => (/* binding */ calculateTotalItems)
/* harmony export */ });
/* unused harmony export calculatePaidTotal */
function addItemWithQuantity(items, item, quantity) {
    if (quantity <= 0) throw new Error("cartQuantity can't be zero or less than zero");
    const existingItemIndex = items.findIndex((existingItem)=>existingItem.id === item.id);
    if (existingItemIndex > -1) {
        const newItems = [
            ...items
        ];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
    }
    return [
        ...items,
        {
            ...item,
            quantity
        }
    ];
}
function removeItemOrQuantity(items, id, quantity) {
    return items.reduce((acc, item)=>{
        if (item.id === id) {
            const newQuantity = item.quantity - quantity;
            return newQuantity > 0 ? [
                ...acc,
                {
                    ...item,
                    quantity: newQuantity
                }
            ] : [
                ...acc
            ];
        }
        return [
            ...acc,
            item
        ];
    }, []);
}
// Simple CRUD for Item
function addItem(items, item) {
    return [
        ...items,
        item
    ];
}
function getItem(items, id) {
    return items.find((item)=>item.id === id);
}
function updateItem(items, id, item) {
    return items.map((existingItem)=>existingItem.id === id ? {
            ...existingItem,
            ...item
        } : existingItem);
}
function removeItem(items, id) {
    return items.filter((existingItem)=>existingItem.id !== id);
}
function inStock(items, id) {
    const item = getItem(items, id);
    if (item) return item["quantity"] < item["stock"];
    return false;
}
const calculateItemTotals = (items)=>items.map((item)=>({
            ...item,
            itemTotal: item.price * item.quantity
        }));
const calculateTotal = (items)=>items.reduce((total, item)=>total + item.quantity * item.price, 0);
const calculateTotalItems = (items)=>items.reduce((sum, item)=>sum + item.quantity, 0);
const calculateUniqueItems = (items)=>items.length;
const calculatePaidTotal = ({ totalAmount , tax , shipping_charge  }, discount)=>{
    let paidTotal = totalAmount + tax + shipping_charge;
    if (discount) {
        paidTotal = paidTotal - discount;
    }
    return paidTotal;
};


/***/ })

};
;