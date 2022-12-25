"use strict";
exports.id = 1116;
exports.ids = [1116];
exports.modules = {

/***/ 1116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ useCreateFeedback),
/* harmony export */   "Bk": () => (/* binding */ useCreateAbuseReport),
/* harmony export */   "OZ": () => (/* binding */ useCreateQuestion),
/* harmony export */   "iB": () => (/* binding */ useProduct),
/* harmony export */   "k5": () => (/* binding */ useQuestions),
/* harmony export */   "os": () => (/* binding */ usePopularProducts),
/* harmony export */   "rn": () => (/* binding */ useProducts)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7422);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4648);
/* harmony import */ var _framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9787);
/* harmony import */ var _framework_utils_format_products_args__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5949);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7608);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function useProducts(options) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const formattedOptions = {
        ...(0,_framework_utils_format_products_args__WEBPACK_IMPORTED_MODULE_8__/* .formatProductsArgs */ .i)(options),
        language: locale
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.all */ .Z.products.all(Object.assign({}, queryKey[1], pageParam)), {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    return {
        products: data?.pages?.flatMap((page)=>page.data) ?? [],
        paginatorInfo: Array.isArray(data?.pages) ? (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(data?.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}
const usePopularProducts = (options)=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS_POPULAR */ .P.PRODUCTS_POPULAR,
        formattedOptions
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.popular */ .Z.products.popular(queryKey[1]));
    return {
        products: data ?? [],
        isLoading,
        error
    };
};
function useProduct({ slug  }) {
    const { locale: language  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS,
        {
            slug,
            language
        }
    ], ()=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.get */ .Z.products.get({
            slug,
            language
        }));
    return {
        product: data,
        isLoading,
        error
    };
}
function useQuestions(options) {
    const { data: response , isLoading , error , isFetching  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS,
        options
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.questions */ .Z.products.questions(Object.assign({}, queryKey[1])), {
        keepPreviousData: true
    });
    return {
        questions: response?.data ?? [],
        paginatorInfo: (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(response),
        isLoading,
        error,
        isFetching
    };
}
function useCreateFeedback() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const { mutate: createFeedback , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.createFeedback */ .Z.products.createFeedback, {
        onSuccess: (res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(t("text-feedback-submitted"));
            queryClient.refetchQueries(_client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS);
            queryClient.refetchQueries(_client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS);
        }
    });
    return {
        createFeedback,
        isLoading
    };
}
function useCreateAbuseReport() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__/* .useModalAction */ .SO)();
    const { mutate: createAbuseReport , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.createAbuseReport */ .Z.products.createAbuseReport, {
        onSuccess: ()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(t("text-abuse-report-submitted"));
        },
        onError: (error)=>{
            const { response: { data  }  } = error ?? {};
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(t(data?.message));
        },
        onSettled: ()=>{
            closeModal();
        }
    });
    return {
        createAbuseReport,
        isLoading
    };
}
function useCreateQuestion() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__/* .useModalAction */ .SO)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const { mutate: createQuestion , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.createQuestion */ .Z.products.createQuestion, {
        onSuccess: ()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(t("text-question-submitted"));
        },
        onError: (error)=>{
            const { response: { data  }  } = error ?? {};
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(t(data?.message));
        },
        onSettled: ()=>{
            queryClient.refetchQueries(_client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS);
            closeModal();
        }
    });
    return {
        createQuestion,
        isLoading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ formatProductsArgs)
/* harmony export */ });
const formatProductsArgs = (options)=>{
    // Destructure
    const { limit =30 , price , categories , name , searchType , searchQuery , text , ...restOptions } = options || {};
    return {
        limit,
        ...price && {
            min_price: price
        },
        ...name && {
            name: name.toString()
        },
        ...categories && {
            categories: categories.toString()
        },
        ...searchType && {
            type: searchType.toString()
        },
        ...searchQuery && {
            name: searchQuery.toString()
        },
        ...text && {
            name: text.toString()
        },
        ...restOptions
    };
};


/***/ })

};
;