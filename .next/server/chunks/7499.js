"use strict";
exports.id = 7499;
exports.ids = [7499];
exports.modules = {

/***/ 7499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ select_select)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./src/components/ui/select/select.styles.ts
const selectStyles = {
    option: (provided, state)=>({
            ...provided,
            fontSize: "0.875rem",
            color: "rgb(var(--text-heading))",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 12,
            paddingBottom: 12,
            cursor: "pointer",
            borderBottom: "1px solid #E5E7EB",
            backgroundColor: state.isSelected ? "#efefef" : state.isFocused ? "#F9FAFB" : "#ffffff"
        }),
    control: (_, state)=>({
            width: state.selectProps.width,
            display: "flex",
            alignItems: "center",
            minHeight: !state.selectProps.isMinimal ? 50 : 0,
            backgroundColor: "#ffffff",
            borderRadius: 5,
            border: !state.selectProps.isMinimal ? "1px solid #F1F1F1" : "none",
            borderColor: state.isFocused ? "rgb(var(--color-gray-500))" : "#F1F1F1",
            boxShadow: state.menuIsOpen && !state.selectProps.isMinimal && "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        }),
    indicatorSeparator: ()=>({
            display: "none"
        }),
    dropdownIndicator: (provided, state)=>({
            ...provided,
            color: "rgb(var(--text-heading))",
            "&:hover": {
                color: "rgb(var(--text-heading))"
            }
        }),
    clearIndicator: (provided, state)=>({
            ...provided,
            color: state.isFocused ? "#9CA3AF" : "#cccccc",
            padding: 0,
            cursor: "pointer",
            "&:hover": {
                color: "#9CA3AF"
            }
        }),
    menu: (provided, state)=>({
            ...provided,
            width: state.selectProps.width,
            borderRadius: 5,
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        }),
    menuList: (provided)=>({
            ...provided,
            paddingTop: 0,
            paddingBottom: 0
        }),
    valueContainer: (provided, state)=>({
            ...provided,
            paddingLeft: state.selectProps.isMinimal ? 0 : state.isRtl ? 4 : 16,
            paddingRight: state.selectProps.isMinimal ? 0 : state.isRtl ? 16 : 4
        }),
    singleValue: (provided, _)=>({
            ...provided,
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "rgb(var(--text-heading))"
        }),
    multiValue: (provided, _)=>({
            ...provided,
            backgroundColor: "rgb(var(--color-accent-400))",
            borderRadius: 9999,
            overflow: "hidden",
            boxShadow: "0 0px 3px 0 rgba(0, 0, 0, 0.1), 0 0px 2px 0 rgba(0, 0, 0, 0.06)"
        }),
    multiValueLabel: (provided, _)=>({
            ...provided,
            paddingLeft: 10,
            fontSize: "0.875rem",
            color: "#ffffff"
        }),
    multiValueRemove: (provided, _)=>({
            ...provided,
            paddingLeft: 0,
            paddingRight: 8,
            color: "#ffffff",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "rgb(var(--color-accent-300))",
                color: "#F3F4F6"
            }
        }),
    placeholder: (provided, _)=>({
            ...provided,
            fontSize: "0.875rem",
            color: "rgba(107, 114, 128, 0.7)"
        }),
    noOptionsMessage: (provided, _)=>({
            ...provided,
            fontSize: "0.875rem",
            color: "rgba(107, 114, 128, 0.7)"
        })
};

;// CONCATENATED MODULE: ./src/components/ui/select/select.tsx




const Select = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
        ref: ref,
        styles: selectStyles,
        ...props
    }));
Select.displayName = "Select";
/* harmony default export */ const select_select = (Select);


/***/ })

};
;