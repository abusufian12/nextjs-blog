"use strict";
exports.id = 344;
exports.ids = [344];
exports.modules = {

/***/ 8593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ useReviews),
/* harmony export */   "J3": () => (/* binding */ useUpdateReview),
/* harmony export */   "ZU": () => (/* binding */ useCreateReview)
/* harmony export */ });
/* unused harmony export useReview */
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7608);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7422);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4648);
/* harmony import */ var _utils_data_mappers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9787);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_4__]);
_client__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function useReviews(options) {
    const { data: response , isLoading , error , isFetching  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS,
        options
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].reviews.all */ .Z.reviews.all(Object.assign({}, queryKey[1])), {
        keepPreviousData: true
    });
    return {
        reviews: response?.data ?? [],
        paginatorInfo: (0,_utils_data_mappers__WEBPACK_IMPORTED_MODULE_6__/* .mapPaginatorData */ .Q)(response),
        isLoading,
        error,
        isFetching,
        hasMore: response && response?.last_page > response?.current_page
    };
}
function useReview({ id  }) {
    const { data , isLoading , error  } = useQuery([
        API_ENDPOINTS.PRODUCTS_REVIEWS,
        id
    ], ()=>client.reviews.get({
            id
        }), {
        enabled: Boolean(id)
    });
    return {
        review: data,
        isLoading,
        error
    };
}
function useCreateReview() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { mutate: createReview , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].reviews.create */ .Z.reviews.create, {
        onSuccess: (res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(t("text-review-request-submitted"));
        },
        onSettled: ()=>{
            queryClient.invalidateQueries([
                _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS
            ]);
            closeModal();
        }
    });
    return {
        createReview,
        isLoading
    };
}
function useUpdateReview() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { mutate: updateReview , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].reviews.update */ .Z.reviews.update, {
        onSuccess: (res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(t("text-review-request-update-submitted"));
        },
        onSettled: ()=>{
            queryClient.invalidateQueries([
                _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS
            ]);
            closeModal();
        }
    });
    return {
        updateReview,
        isLoading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;