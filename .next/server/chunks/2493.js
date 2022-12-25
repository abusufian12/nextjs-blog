"use strict";
exports.id = 2493;
exports.ids = [2493];
exports.modules = {

/***/ 6211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotUserPassword),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "updateFormState": () => (/* binding */ updateFormState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2057);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5788);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7896);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6024);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(little_state_machine__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7608);
/* harmony import */ var _components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4003);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1143);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3830);
/* harmony import */ var _ui_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7392);
/* harmony import */ var _icons_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9013);
/* harmony import */ var _icons_arrow_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__, _framework_user__WEBPACK_IMPORTED_MODULE_8__, _components_ui_logo__WEBPACK_IMPORTED_MODULE_10__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__, _framework_user__WEBPACK_IMPORTED_MODULE_8__, _components_ui_logo__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const emailFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email("error-email-format").required("error-email-required")
});
const tokenFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    token: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("error-password-required")
});
const passwordFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required()
});
function EmailForm({ email , onSubmit , isLoading , serverError  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        useFormProps: {
            defaultValues: {
                email
            }
        },
        validationSchema: emailFormValidation,
        serverError: serverError && t(serverError),
        className: "text-left",
        children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        label: t("text-email"),
                        type: "email",
                        ...register("email"),
                        error: t(errors.email?.message)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        type: "submit",
                        className: "!mt-5 w-full text-sm tracking-[0.2px] lg:!mt-6",
                        loading: isLoading,
                        disabled: isLoading,
                        children: [
                            t("text-submit-email"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_next__WEBPACK_IMPORTED_MODULE_13__/* .ArrowNextIcon */ .z, {
                                className: "w-5"
                            })
                        ]
                    })
                ]
            })
    });
}
function TokenForm({ token , onSubmit , isLoading , serverError , handlePrevStep  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        useFormProps: {
            defaultValues: {
                token
            }
        },
        validationSchema: tokenFormValidation,
        serverError: serverError,
        children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        label: t("token-label"),
                        ...register("token"),
                        error: t(errors.token?.message)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: handlePrevStep,
                                className: "order-1 w-full !bg-cyan-500 text-sm tracking-[0.2px] hover:!bg-cyan-600",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_12__/* .ArrowPrevIcon */ .W, {
                                        className: "w-5"
                                    }),
                                    t("text-previous-step")
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "w-full text-sm tracking-[0.2px] sm:order-2",
                                loading: isLoading,
                                disabled: isLoading,
                                children: [
                                    t("text-submit-token"),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_next__WEBPACK_IMPORTED_MODULE_13__/* .ArrowNextIcon */ .z, {
                                        className: "w-5"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
    });
}
function PasswordForm({ onSubmit , isLoading , handlePrevStep  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        useFormProps: {
            defaultValues: {
                password: ""
            }
        },
        validationSchema: passwordFormValidation,
        children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: t("text-new-password"),
                        ...register("password"),
                        error: t(errors.password?.message)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: handlePrevStep,
                                className: "order-1 w-full !bg-cyan-500 text-sm tracking-[0.2px] hover:!bg-cyan-600",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_12__/* .ArrowPrevIcon */ .W, {
                                        className: "w-5"
                                    }),
                                    t("text-previous-step")
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "w-full text-sm tracking-[0.2px] sm:order-2",
                                loading: isLoading,
                                disabled: isLoading,
                                children: t("text-reset-password")
                            })
                        ]
                    })
                ]
            })
    });
}
function RenderFormSteps() {
    const { mutate: forgotPassword , isLoading , message , formError  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_8__/* .useForgotPassword */ .pO)();
    const { mutate: verifyForgotPasswordToken , isLoading: verifying , formError: tokenFormError  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_8__/* .useVerifyForgotPasswordToken */ .TQ)();
    const { mutate: resetPassword , isLoading: resetting  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_8__/* .useResetPassword */ .mI)();
    // use hook for getting form state and actions
    const { state , actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_5__.useStateMachine)({
        updateFormState
    });
    const emailFormHandle = ({ email  })=>{
        forgotPassword({
            email
        });
    };
    const passwordFormHandle = ({ password  })=>{
        resetPassword({
            password,
            token: state.token,
            email: state.email
        });
    };
    const tokenFormHandle = ({ token  })=>{
        verifyForgotPasswordToken({
            token,
            email: state.email
        });
    };
    function backToPreviousStep(step) {
        actions.updateFormState({
            step
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            state.step === "Email" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmailForm, {
                email: state.email,
                onSubmit: emailFormHandle,
                isLoading: isLoading,
                serverError: formError
            }),
            state.step === "Token" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_alert__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: "mb-4",
                        message: message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenForm, {
                        token: state.token,
                        onSubmit: tokenFormHandle,
                        isLoading: verifying,
                        serverError: tokenFormError,
                        handlePrevStep: ()=>backToPreviousStep("Email")
                    })
                ]
            }),
            state.step === "Password" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PasswordForm, {
                    onSubmit: passwordFormHandle,
                    isLoading: resetting,
                    handlePrevStep: ()=>backToPreviousStep("Token")
                })
            })
        ]
    });
}
const initialState = {
    step: "Email",
    email: "",
    password: "",
    token: ""
};
//@ts-ignore
(0,little_state_machine__WEBPACK_IMPORTED_MODULE_5__.createStore)(initialState);
const updateFormState = (state, payload)=>{
    return {
        ...state,
        ...payload
    };
};
function ForgotUserPassword() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("common");
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(little_state_machine__WEBPACK_IMPORTED_MODULE_5__.StateMachineProvider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4 text-sm leading-relaxed text-center mb-7 text-body sm:mt-5 sm:mb-10 md:text-base",
                    children: t("forgot-password-helper")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenderFormSteps, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-col items-center justify-center text-sm mt-9 mb-7 text-heading sm:mt-11 sm:mb-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "start-2/4 -ms-4 absolute -top-2.5 bg-light px-2",
                            children: t("text-or")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-sm text-center text-body sm:text-base",
                    children: [
                        t("text-back-to"),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>openModal("LOGIN_VIEW"),
                            className: "font-semibold underline transition-colors duration-200 ms-1 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none",
                            children: t("text-login")
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ Eye)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Eye = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            })
        ]
    });


/***/ }),

/***/ 3988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ initialOtpState),
/* harmony export */   "R": () => (/* binding */ optAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const initialOtpState = {
    step: "PhoneNumber",
    isContactExist: false,
    otpId: null,
    phoneNumber: ""
};
const optAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(initialOtpState);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8855);



const variantClasses = {
    info: "bg-blue-100 text-blue-600",
    warning: "bg-yellow-100 text-yellow-600",
    error: "bg-red-100 text-red-500",
    success: "bg-green-100 text-accent",
    infoOutline: "border border-blue-200 text-blue-600",
    warningOutline: "border border-yellow-200 text-yellow-600",
    errorOutline: "border border-red-200 text-red-600",
    successOutline: "border border-green-200 text-green-600"
};
const Alert = ({ message , closeable =false , variant ="info" , className , onClose  })=>{
    if (!message) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative flex items-center justify-between rounded py-4 px-5 shadow-sm", variantClasses[variant], className),
        role: "alert",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm",
                children: message
            }),
            closeable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "data-dismiss": "alert",
                "aria-label": "Close",
                onClick: onClose,
                title: "Close alert",
                className: "absolute top-1/2 -mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-red-500 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-25 focus:bg-gray-300 focus:bg-opacity-25 focus:outline-none ltr:right-2 ltr:-mr-0.5 rtl:left-2 rtl:-ml-0.5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__/* .CloseIcon */ .T, {
                        className: "h-3 w-3"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ }),

/***/ 5788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const variantClasses = {
    normal: "bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent",
    solid: "bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent",
    outline: "border border-border-base rounded focus:border-accent",
    line: "ltr:pl-0 rtl:pr-0 border-b border-border-base rounded-none focus:border-accent"
};
const sizeClasses = {
    small: "text-sm h-9",
    medium: "h-12",
    big: "h-14"
};
const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(({ className , label , name , error , children , variant ="normal" , dimension ="medium" , shadow =false , disabled =false , type ="text" , inputClassName , ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "block mb-3 text-sm font-semibold leading-none text-body-dark",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: type,
                ref: ref,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0", shadow && "focus:shadow", variantClasses[variant], sizeClasses[dimension], disabled && "cursor-not-allowed bg-gray-100", inputClassName),
                disabled: disabled,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
                "aria-invalid": error ? "true" : "false",
                ...rest
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-xs text-red-500",
                children: error
            })
        ]
    });
});
Input.displayName = "Input";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 4003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ password_input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(758);
// EXTERNAL MODULE: ./src/components/icons/eye-icon.tsx
var eye_icon = __webpack_require__(6056);
;// CONCATENATED MODULE: ./src/components/icons/eye-off-icon.tsx

const EyeOff = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        })
    });

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/ui/forms/password-input.tsx







const variantClasses = {
    normal: "bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent",
    solid: "bg-gray-100 border border-border-100 focus:bg-light focus:border-accent",
    outline: "border border-border-base focus:border-accent"
};
const PasswordInput = /*#__PURE__*/ external_react_default().forwardRef(({ className , inputClassName , label , name , error , children , variant ="normal" , shadow =false , type ="text" , forgotPageLink ="" , forgotPageRouteOnClick , ...rest }, ref)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const [show, setShow] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: name,
                        className: "font-semibold text-sm text-body",
                        children: label
                    }),
                    forgotPageLink && /*#__PURE__*/ jsx_runtime_.jsx(ui_link/* default */.Z, {
                        href: forgotPageLink,
                        className: "text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover",
                        children: t("common:text-forgot-password")
                    }),
                    forgotPageRouteOnClick && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: forgotPageRouteOnClick,
                        type: "button",
                        className: "text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover",
                        children: t("common:text-forgot-password")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: name,
                        name: name,
                        type: show ? "text" : "password",
                        ref: ref,
                        className: external_classnames_default()("py-3 ltr:pl-4 rtl:pr-4 ltr:pr-11 rtl:pl-11 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0", shadow && "focus:shadow", variantClasses[variant], inputClassName),
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        ...rest
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: name,
                        className: "absolute ltr:right-4 rtl:left-4 top-5 -mt-2 text-body cursor-pointer",
                        onClick: ()=>setShow((prev)=>!prev),
                        children: show ? /*#__PURE__*/ jsx_runtime_.jsx(EyeOff, {
                            className: "w-6 h-6"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(eye_icon/* Eye */.b, {
                            className: "w-6 h-6"
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "my-2 text-xs text-red-500",
                children: error
            })
        ]
    });
});
PasswordInput.displayName = "PasswordInput";
/* harmony default export */ const password_input = (PasswordInput);


/***/ }),

/***/ 1143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AW": () => (/* binding */ useContact),
/* harmony export */   "Io": () => (/* binding */ useUpdateUser),
/* harmony export */   "PC": () => (/* binding */ useDeleteAddress),
/* harmony export */   "TQ": () => (/* binding */ useVerifyForgotPasswordToken),
/* harmony export */   "Tk": () => (/* binding */ useSendOtpCode),
/* harmony export */   "_7": () => (/* binding */ useVerifyOtpCode),
/* harmony export */   "aF": () => (/* binding */ useUser),
/* harmony export */   "aU": () => (/* binding */ useLogout),
/* harmony export */   "f0": () => (/* binding */ useLogin),
/* harmony export */   "hv": () => (/* binding */ useOtpLogin),
/* harmony export */   "mI": () => (/* binding */ useResetPassword),
/* harmony export */   "mr": () => (/* binding */ useRegister),
/* harmony export */   "ob": () => (/* binding */ useSocialLogin),
/* harmony export */   "pO": () => (/* binding */ useForgotPassword),
/* harmony export */   "y8": () => (/* binding */ useChangePassword)
/* harmony export */ });
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7608);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7422);
/* harmony import */ var _store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6862);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2451);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5723);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_otp_atom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3988);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6024);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(little_state_machine__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6211);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_4__, _store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_6__, _lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_11__, _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__, _store_checkout__WEBPACK_IMPORTED_MODULE_14__]);
([_client__WEBPACK_IMPORTED_MODULE_4__, _store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_6__, _lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_11__, _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__, _store_checkout__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function useUser() {
    const [isAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__/* .authorizationAtom */ .O);
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME
    ], _client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.me */ .Z.users.me, {
        enabled: isAuthorized,
        onError: (err)=>{
            console.log(err);
        }
    });
    //TODO: do some improvement here
    return {
        me: data,
        isLoading,
        error,
        isAuthorized
    };
}
const useDeleteAddress = ()=>{
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.deleteAddress */ .Z.users.deleteAddress, {
        onSuccess: (data)=>{
            if (data) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("successfully-address-deleted");
                closeModal();
                return;
            }
        },
        onError: (error)=>{
            const { response: { data  }  } = error ?? {};
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(data?.message);
        },
        onSettled: ()=>{
            queryClient.invalidateQueries(_client_api_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME);
        }
    });
};
const useUpdateUser = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.update */ .Z.users.update, {
        onSuccess: (data)=>{
            if (data?.id) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(t("profile-update-successful"));
                closeModal();
            }
        },
        onError: (error)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(t("error-something-wrong"));
        },
        onSettled: ()=>{
            queryClient.invalidateQueries(_client_api_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME);
        }
    });
};
const useContact = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.contactUs */ .Z.users.contactUs, {
        onSuccess: (data)=>{
            if (data.success) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(t(data.message));
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(t(data.message));
            }
        },
        onError: (err)=>{
            console.log(err);
        }
    });
};
function useLogin() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__/* .authorizationAtom */ .O);
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__/* .useToken */ .d)();
    let [serverError, setServerError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.login */ .Z.users.login, {
        onSuccess: (data)=>{
            if (!data.token) {
                setServerError("error-credential-wrong");
                return;
            }
            setToken(data.token);
            setAuthorized(true);
            closeModal();
        },
        onError: (error)=>{
            console.log(error.message);
        }
    });
    return {
        mutate,
        isLoading,
        serverError,
        setServerError
    };
}
function useSocialLogin() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__/* .useToken */ .d)();
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__/* .authorizationAtom */ .O);
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.socialLogin */ .Z.users.socialLogin, {
        onSuccess: (data)=>{
            if (data?.token && data?.permissions?.length) {
                setToken(data?.token);
                setAuthorized(true);
                return;
            }
            if (!data.token) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(t("error-credential-wrong"));
            }
        },
        onError: (error)=>{
            console.log(error.message);
        },
        onSettled: ()=>{
            queryClient.clear();
        }
    });
}
function useSendOtpCode({ verifyOnly  } = {}) {
    let [serverError, setServerError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const [otpState, setOtpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_11__/* .optAtom */ .R);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.sendOtpCode */ .Z.users.sendOtpCode, {
        onSuccess: (data)=>{
            if (!data.success) {
                setServerError(data.message);
                return;
            }
            setOtpState({
                ...otpState,
                otpId: data?.id,
                isContactExist: data?.is_contact_exist,
                phoneNumber: data?.phone_number,
                step: data?.is_contact_exist ? "OtpForm" : "RegisterForm",
                ...verifyOnly && {
                    step: "OtpForm"
                }
            });
        },
        onError: (error)=>{
            console.log(error.message);
        }
    });
    return {
        mutate,
        isLoading,
        serverError,
        setServerError
    };
}
function useVerifyOtpCode({ onVerifySuccess  }) {
    const [otpState, setOtpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_11__/* .optAtom */ .R);
    let [serverError, setServerError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.verifyOtpCode */ .Z.users.verifyOtpCode, {
        onSuccess: (data)=>{
            if (!data.success) {
                setServerError(data?.message);
                return;
            }
            if (onVerifySuccess) {
                onVerifySuccess({
                    phone_number: otpState.phoneNumber
                });
            }
            setOtpState({
                ..._components_otp_atom__WEBPACK_IMPORTED_MODULE_11__/* .initialOtpState */ .L
            });
        },
        onError: (error)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);
        }
    });
    return {
        mutate,
        isLoading,
        serverError,
        setServerError
    };
}
function useOtpLogin() {
    const [otpState, setOtpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_11__/* .optAtom */ .R);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__/* .authorizationAtom */ .O);
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__/* .useToken */ .d)();
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    let [serverError, setServerError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { mutate: otpLogin , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.OtpLogin */ .Z.users.OtpLogin, {
        onSuccess: (data)=>{
            if (!data.token) {
                setServerError("text-otp-verify-failed");
                return;
            }
            setToken(data.token);
            setAuthorized(true);
            setOtpState({
                ..._components_otp_atom__WEBPACK_IMPORTED_MODULE_11__/* .initialOtpState */ .L
            });
            closeModal();
        },
        onError: (error)=>{
            console.log(error.message);
        },
        onSettled: ()=>{
            queryClient.clear();
        }
    });
    function handleSubmit(input) {
        otpLogin({
            ...input,
            phone_number: otpState.phoneNumber,
            otp_id: otpState.otpId
        });
    }
    return {
        mutate: handleSubmit,
        isLoading,
        serverError,
        setServerError
    };
}
function useRegister() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__/* .useToken */ .d)();
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__/* .authorizationAtom */ .O);
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    let [formError, setFormError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.register */ .Z.users.register, {
        onSuccess: (data)=>{
            if (data?.token && data?.permissions?.length) {
                setToken(data?.token);
                setAuthorized(true);
                closeModal();
                return;
            }
            if (!data.token) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(t("error-credential-wrong"));
            }
        },
        onError: (error)=>{
            const { response: { data  }  } = error ?? {};
            setFormError(data);
        }
    });
    return {
        mutate,
        isLoading,
        formError,
        setFormError
    };
}
function useLogout() {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_8__/* .useToken */ .d)();
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_5__/* .authorizationAtom */ .O);
    const [_r, resetCheckout] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_14__/* .clearCheckoutAtom */ .y9);
    const { mutate: signOut  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.logout */ .Z.users.logout, {
        onSuccess: (data)=>{
            if (data) {
                setToken("");
                setAuthorized(false);
                resetCheckout();
                queryClient.refetchQueries(_client_api_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME);
            }
        },
        onSettled: ()=>{
            queryClient.clear();
        }
    });
    function handleLogout() {
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)({
            redirect: false
        });
        signOut();
    }
    return {
        mutate: handleLogout
    };
}
function useChangePassword() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
    let [formError, setFormError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.changePassword */ .Z.users.changePassword, {
        onSuccess: (data)=>{
            if (!data.success) {
                setFormError({
                    oldPassword: data?.message ?? ""
                });
                return;
            }
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(t("password-successful"));
        },
        onError: (error)=>{
            const { response: { data  }  } = error ?? {};
            setFormError(data);
        }
    });
    return {
        mutate,
        isLoading,
        formError,
        setFormError
    };
}
function useForgotPassword() {
    const { actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_12__.useStateMachine)({
        updateFormState: _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.updateFormState
    });
    let [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    let [formError, setFormError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.forgotPassword */ .Z.users.forgotPassword, {
        onSuccess: (data, variables)=>{
            if (!data.success) {
                setFormError({
                    email: data?.message ?? ""
                });
                return;
            }
            setMessage(data?.message);
            actions.updateFormState({
                email: variables.email,
                step: "Token"
            });
        }
    });
    return {
        mutate,
        isLoading,
        message,
        formError,
        setFormError,
        setMessage
    };
}
function useResetPassword() {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const { actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_12__.useStateMachine)({
        updateFormState: _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.updateFormState
    });
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.resetPassword */ .Z.users.resetPassword, {
        onSuccess: (data)=>{
            if (data?.success) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Successfully Reset Password!");
                actions.updateFormState({
                    ..._components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.initialState
                });
                openModal("LOGIN_VIEW");
                return;
            }
        },
        onSettled: ()=>{
            queryClient.clear();
        }
    });
}
function useVerifyForgotPasswordToken() {
    const { actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_12__.useStateMachine)({
        updateFormState: _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.updateFormState
    });
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    let [formError, setFormError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].users.verifyForgotPasswordToken */ .Z.users.verifyForgotPasswordToken, {
        onSuccess: (data, variables)=>{
            if (!data.success) {
                setFormError({
                    token: data?.message ?? ""
                });
                return;
            }
            actions.updateFormState({
                step: "Password",
                token: variables.token
            });
        },
        onSettled: ()=>{
            queryClient.clear();
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

/***/ 5723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useToken)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useToken() {
    return {
        setToken (token) {
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd, token, {
                expires: 1
            });
        },
        getToken () {
            return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd);
        },
        removeToken () {
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd);
        },
        hasToken () {
            const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd);
            if (!token) return false;
            return true;
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;