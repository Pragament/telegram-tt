"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["shared-components"],{

/***/ "./src/components/ui/AvatarEditable.tsx":
/*!**********************************************!*\
  !*** ./src/components/ui/AvatarEditable.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _CropModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CropModal */ "./src/components/ui/CropModal.tsx");
/* harmony import */ var _AvatarEditable_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarEditable.scss */ "./src/components/ui/AvatarEditable.scss");




const AvatarEditable = ({
  title = 'Change your profile picture',
  disabled,
  isForForum,
  currentAvatarBlobUrl,
  onChange
}) => {
  const [selectedFile, setSelectedFile] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [croppedBlobUrl, setCroppedBlobUrl] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(currentAvatarBlobUrl);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCroppedBlobUrl(currentAvatarBlobUrl);
  }, [currentAvatarBlobUrl]);
  function handleSelectFile(event) {
    const target = event.target;
    if (!target?.files?.[0]) {
      return;
    }
    setSelectedFile(target.files[0]);
    target.value = '';
  }
  const handleAvatarCrop = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(croppedImg => {
    setSelectedFile(undefined);
    onChange(croppedImg);
    if (croppedBlobUrl && croppedBlobUrl !== currentAvatarBlobUrl) {
      URL.revokeObjectURL(croppedBlobUrl);
    }
    setCroppedBlobUrl(URL.createObjectURL(croppedImg));
  }, [croppedBlobUrl, currentAvatarBlobUrl, onChange]);
  const handleModalClose = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setSelectedFile(undefined);
  }, []);
  const labelClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(croppedBlobUrl && 'filled', disabled && 'disabled', isForForum && 'rounded-square');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "AvatarEditable"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    className: labelClassName,
    role: "button",
    tabIndex: 0,
    title: title
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "file",
    onChange: handleSelectFile,
    accept: "image/png, image/jpeg"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: "icon icon-camera-add"
  }), croppedBlobUrl && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: croppedBlobUrl,
    draggable: false,
    alt: "Avatar"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CropModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    file: selectedFile,
    onClose: handleModalClose,
    onChange: handleAvatarCrop
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AvatarEditable));

/***/ }),

/***/ "./src/components/ui/Badge.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/Badge.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/AnimatedCounter */ "./src/components/common/AnimatedCounter.tsx");
/* harmony import */ var _ShowTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowTransition */ "./src/components/ui/ShowTransition.tsx");
/* harmony import */ var _Badge_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Badge.module.scss */ "./src/components/ui/Badge.module.scss");





const Badge = ({
  text,
  className,
  isAlternateColor
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ShowTransition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_Badge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root, isAlternateColor ? _Badge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].alternate : _Badge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["default"], className),
    isOpen: Boolean(text)
  }, text && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: text
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Badge));

/***/ }),

/***/ "./src/components/ui/CheckboxGroup.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/CheckboxGroup.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox */ "./src/components/ui/Checkbox.tsx");



const CheckboxGroup = ({
  id,
  options,
  selected = [],
  disabled,
  nestedCheckbox,
  loadingOptions,
  isRound,
  onChange
}) => {
  const [values, setValues] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(selected || []);
  const handleChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])((event, nestedOptionList) => {
    const {
      value,
      checked
    } = event.currentTarget;
    let newValues;
    if (checked) {
      newValues = [...values, value];
      if (nestedOptionList && value) {
        newValues.push(nestedOptionList.value);
      }
      if (nestedOptionList && value === nestedOptionList.value) {
        nestedOptionList.nestedOptions?.forEach(nestedOption => {
          if (!newValues.includes(nestedOption.value)) {
            newValues.push(nestedOption.value);
          }
        });
      }
    } else {
      newValues = values.filter(v => v !== value);
      if (nestedOptionList && value === nestedOptionList.value) {
        nestedOptionList.nestedOptions?.forEach(nestedOption => {
          newValues = newValues.filter(v => v !== nestedOption.value);
        });
      } else if (nestedOptionList) {
        const nestedOptionValues = nestedOptionList.nestedOptions?.map(nestedOption => nestedOption.value) || [];
        const hasOtherNestedValuesChecked = nestedOptionValues.some(nestedValue => newValues.includes(nestedValue));
        if (!hasOtherNestedValuesChecked) {
          newValues = newValues.filter(v => v !== nestedOptionList.value);
        }
      }
    }
    setValues(newValues);
    onChange(newValues);
  });
  const getCheckedNestedCount = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(nestedOptions => {
    const checkedCount = nestedOptions?.filter(nestedOption => values.includes(nestedOption.value)).length;
    return checkedCount > 0 ? checkedCount : undefined;
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: id,
    className: "radio-group"
  }, options.map(option => {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: option.label,
      subLabel: option.subLabel,
      value: option.value,
      checked: selected.indexOf(option.value) !== -1,
      disabled: option.disabled || disabled,
      isLoading: loadingOptions ? loadingOptions.indexOf(option.value) !== -1 : undefined,
      onChange: handleChange,
      nestedCheckbox: nestedCheckbox,
      nestedCheckboxCount: getCheckedNestedCount(option.nestedOptions ?? []),
      nestedOptionList: option,
      values: values,
      isRound: isRound
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(CheckboxGroup));

/***/ }),

/***/ "./src/components/ui/ConfirmDialog.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/ConfirmDialog.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useKeyboardListNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useKeyboardListNavigation */ "./src/hooks/useKeyboardListNavigation.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./src/components/ui/Modal.tsx");






const ConfirmDialog = ({
  isOpen,
  title,
  header,
  text,
  textParts,
  confirmLabel = 'Confirm',
  confirmIsDestructive,
  isConfirmDisabled,
  isOnlyConfirm,
  areButtonsInColumn,
  className,
  children,
  confirmHandler,
  onClose,
  onCloseAnimationEnd
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();

  // eslint-disable-next-line no-null/no-null
  const containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleSelectWithEnter = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => {
    if (index === -1) confirmHandler();
  }, [confirmHandler]);
  const handleKeyDown = (0,_hooks_useKeyboardListNavigation__WEBPACK_IMPORTED_MODULE_2__["default"])(containerRef, isOpen, handleSelectWithEnter, '.Button');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('confirm', className),
    title: title || lang('Telegram'),
    header: header,
    isOpen: isOpen,
    onClose: onClose,
    onCloseAnimationEnd: onCloseAnimationEnd
  }, text && text.split('\\n').map(textPart => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, textPart)), textParts || children, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: areButtonsInColumn ? 'dialog-buttons-column' : 'dialog-buttons mt-2',
    ref: containerRef,
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "confirm-dialog-button",
    isText: true,
    onClick: confirmHandler,
    color: confirmIsDestructive ? 'danger' : 'primary',
    disabled: isConfirmDisabled
  }, confirmLabel), !isOnlyConfirm && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "confirm-dialog-button",
    isText: true,
    onClick: onClose
  }, lang('Cancel'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ConfirmDialog));

/***/ }),

/***/ "./src/components/ui/CropModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/ui/CropModal.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/files */ "./src/util/files.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ "./src/components/ui/Loading.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _CropModal_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CropModal.scss */ "./src/components/ui/CropModal.scss");









// Change to 'base64' to get base64-encoded string
const cropperResultOptions = {
  type: 'blob',
  quality: 1,
  format: 'jpeg',
  circle: false,
  size: {
    width: 1024,
    height: 1024
  }
};
let Croppie;
let croppiePromise;
async function ensureCroppie() {
  if (!croppiePromise) {
    croppiePromise = Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_croppie_croppie_js-node_modules_croppie_croppie_css"), __webpack_require__.e("src_lib_croppie_ts-node_modules_croppie_croppie_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../lib/croppie */ "./src/lib/croppie.ts"));
    Croppie = (await croppiePromise).default;
  }
  return croppiePromise;
}
let cropper;
async function initCropper(imgFile) {
  try {
    const cropContainer = document.getElementById('avatar-crop');
    if (!cropContainer) {
      return;
    }
    const {
      offsetWidth,
      offsetHeight
    } = cropContainer;
    cropper = new Croppie(cropContainer, {
      enableZoom: true,
      boundary: {
        width: offsetWidth,
        height: offsetHeight
      },
      viewport: {
        width: offsetWidth - 16,
        height: offsetHeight - 16,
        type: 'circle'
      }
    });
    const dataUri = await (0,_util_files__WEBPACK_IMPORTED_MODULE_2__.blobToDataUri)(imgFile);
    await cropper.bind({
      url: dataUri
    });
  } catch (err) {
    if (_config__WEBPACK_IMPORTED_MODULE_1__.DEBUG) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }
}
const CropModal = ({
  file,
  onChange,
  onClose
}) => {
  const [isCroppieReady, setIsCroppieReady] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!file) {
      return;
    }
    if (!isCroppieReady) {
      ensureCroppie().then(() => setIsCroppieReady(true));
      return;
    }
    initCropper(file);
  }, [file, isCroppieReady]);
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const handleCropClick = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (!cropper) {
      return;
    }
    const result = await cropper.result(cropperResultOptions);
    const croppedImg = typeof result === 'string' ? result : (0,_util_files__WEBPACK_IMPORTED_MODULE_2__.blobToFile)(result, 'avatar.jpg');
    onChange(croppedImg);
  }, [onChange]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: Boolean(file),
    onClose: onClose,
    title: "Drag to reposition",
    className: "CropModal",
    hasCloseButton: true
  }, isCroppieReady ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "avatar-crop"
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "confirm-button",
    round: true,
    color: "primary",
    onClick: handleCropClick,
    ariaLabel: lang('CropImage')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: "icon icon-check"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(CropModal));

/***/ }),

/***/ "./src/components/ui/Draggable.tsx":
/*!*****************************************!*\
  !*** ./src/components/ui/Draggable.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Draggable_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Draggable.module.scss */ "./src/components/ui/Draggable.module.scss");





const ZERO_POINT = {
  x: 0,
  y: 0
};
const Draggable = ({
  children,
  id,
  onDrag,
  onDragEnd,
  style: externalStyle,
  knobStyle,
  isDisabled
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [state, setState] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)({
    isDragging: false,
    origin: ZERO_POINT,
    translation: ZERO_POINT
  });
  const handleMouseDown = e => {
    e.stopPropagation();
    e.preventDefault();
    const {
      x,
      y
    } = getClientCoordinate(e);
    setState({
      ...state,
      isDragging: true,
      origin: {
        x,
        y
      },
      width: ref.current?.offsetWidth,
      height: ref.current?.offsetHeight
    });
  };
  const handleMouseMove = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const {
      x,
      y
    } = getClientCoordinate(e);
    const translation = {
      x: x - state.origin.x,
      y: y - state.origin.y
    };
    setState(current => ({
      ...current,
      translation
    }));
    onDrag(translation, id);
  }, [id, onDrag, state.origin.x, state.origin.y]);
  const handleMouseUp = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setState(current => ({
      ...current,
      isDragging: false,
      width: undefined,
      height: undefined
    }));
    onDragEnd();
  }, [onDragEnd]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state.isDragging && isDisabled) {
      setState(current => ({
        ...current,
        isDragging: false,
        width: undefined,
        height: undefined
      }));
    }
  }, [isDisabled, state.isDragging]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state.isDragging) {
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchcancel', handleMouseUp);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchcancel', handleMouseUp);
      window.removeEventListener('mouseup', handleMouseUp);
      setState(current => ({
        ...current,
        translation: ZERO_POINT
      }));
    }
    return () => {
      if (state.isDragging) {
        window.removeEventListener('touchmove', handleMouseMove);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchend', handleMouseUp);
        window.removeEventListener('touchcancel', handleMouseUp);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [handleMouseMove, handleMouseUp, state.isDragging]);
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_Draggable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container, state.isDragging && _Draggable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].isDragging);
  const cssStyles = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(state.isDragging && `transform: translate(${state.translation.x}px, ${state.translation.y}px)`, state.width ? `width: ${state.width}px` : undefined, state.height ? `height: ${state.height}px` : undefined, externalStyle);
  }, [externalStyle, state.height, state.isDragging, state.translation.x, state.translation.y, state.width]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    style: cssStyles,
    className: fullClassName,
    ref: ref
  }, children, !isDisabled && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    "aria-label": lang('i18n_dragToSort'),
    tabIndex: 0,
    role: "button",
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_Draggable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].knob, 'div-button', 'draggable-knob'),
    onMouseDown: handleMouseDown,
    onTouchStart: handleMouseDown,
    style: knobStyle
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: "icon icon-sort",
    "aria-hidden": true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Draggable));
function getClientCoordinate(e) {
  let x;
  let y;
  if ('touches' in e) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else {
    x = e.clientX;
    y = e.clientY;
  }
  return {
    x,
    y
  };
}

/***/ }),

/***/ "./src/components/ui/FloatingActionButton.tsx":
/*!****************************************************!*\
  !*** ./src/components/ui/FloatingActionButton.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _FloatingActionButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloatingActionButton.scss */ "./src/components/ui/FloatingActionButton.scss");





const FloatingActionButton = ({
  isShown,
  className,
  color = 'primary',
  ariaLabel,
  disabled,
  onClick,
  children
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const buttonClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('FloatingActionButton', isShown && 'revealed', className);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: buttonClassName,
    color: color,
    round: true,
    disabled: disabled,
    onClick: isShown && !disabled ? onClick : undefined,
    ariaLabel: ariaLabel,
    tabIndex: -1,
    isRtl: lang.isRtl
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingActionButton);

/***/ }),

/***/ "./src/components/ui/InfiniteScroll.tsx":
/*!**********************************************!*\
  !*** ./src/components/ui/InfiniteScroll.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ "./src/types/index.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _util_resetScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/resetScroll */ "./src/util/resetScroll.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");








const DEFAULT_LIST_SELECTOR = '.ListItem';
const DEFAULT_PRELOAD_BACKWARDS = 20;
const DEFAULT_SENSITIVE_AREA = 800;
const InfiniteScroll = ({
  ref,
  style,
  className,
  items,
  itemSelector = DEFAULT_LIST_SELECTOR,
  preloadBackwards = DEFAULT_PRELOAD_BACKWARDS,
  sensitiveArea = DEFAULT_SENSITIVE_AREA,
  withAbsolutePositioning,
  maxHeight,
  // Used to turn off restoring scroll position (e.g. for frequently re-ordered chat or user lists)
  noScrollRestore = false,
  noScrollRestoreOnTop = false,
  noFastList,
  // Used to re-query `listItemElements` if rendering is delayed by transition
  cacheBuster,
  beforeChildren,
  children,
  scrollContainerClosest,
  onLoadMore,
  onScroll,
  onWheel,
  onClick,
  onKeyDown,
  onDragOver,
  onDragLeave
}) => {
  // eslint-disable-next-line no-null/no-null
  let containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (ref) {
    containerRef = ref;
  }
  const stateRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const [loadMoreBackwards, loadMoreForwards] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!onLoadMore) {
      return [];
    }
    return [(0,_util_schedulers__WEBPACK_IMPORTED_MODULE_5__.debounce)((noScroll = false) => {
      onLoadMore({
        direction: _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Backwards,
        noScroll
      });
    }, 1000, true, false), (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_5__.debounce)(() => {
      onLoadMore({
        direction: _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Forwards
      });
    }, 1000, true, false)];
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, [onLoadMore, items]);

  // Initial preload
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const scrollContainer = scrollContainerClosest ? containerRef.current.closest(scrollContainerClosest) : containerRef.current;
    if (!loadMoreBackwards || !scrollContainer) {
      return;
    }
    if (preloadBackwards > 0 && (!items || items.length < preloadBackwards)) {
      loadMoreBackwards(true);
      return;
    }
    const {
      scrollHeight,
      clientHeight
    } = scrollContainer;
    if (clientHeight && scrollHeight < clientHeight) {
      loadMoreBackwards();
    }
  }, [items, loadMoreBackwards, preloadBackwards, scrollContainerClosest]);

  // Restore `scrollTop` after adding items
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const scrollContainer = scrollContainerClosest ? containerRef.current.closest(scrollContainerClosest) : containerRef.current;
    const container = containerRef.current;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestForcedReflow)(() => {
      const state = stateRef.current;
      state.listItemElements = container.querySelectorAll(itemSelector);
      let newScrollTop;
      if (state.currentAnchor && Array.from(state.listItemElements).includes(state.currentAnchor)) {
        const {
          scrollTop
        } = scrollContainer;
        const newAnchorTop = state.currentAnchor.getBoundingClientRect().top;
        newScrollTop = scrollTop + (newAnchorTop - state.currentAnchorTop);
      } else {
        const nextAnchor = state.listItemElements[0];
        if (nextAnchor) {
          state.currentAnchor = nextAnchor;
          state.currentAnchorTop = nextAnchor.getBoundingClientRect().top;
        }
      }
      if (withAbsolutePositioning || noScrollRestore) {
        return undefined;
      }
      const {
        scrollTop
      } = scrollContainer;
      if (noScrollRestoreOnTop && scrollTop === 0) {
        return undefined;
      }
      return () => {
        (0,_util_resetScroll__WEBPACK_IMPORTED_MODULE_4__["default"])(scrollContainer, newScrollTop);
        state.isScrollTopJustUpdated = true;
      };
    });
  }, [items, itemSelector, noScrollRestore, noScrollRestoreOnTop, cacheBuster, withAbsolutePositioning, scrollContainerClosest]);
  const handleScroll = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    if (loadMoreForwards && loadMoreBackwards) {
      const {
        isScrollTopJustUpdated,
        currentAnchor,
        currentAnchorTop
      } = stateRef.current;
      const listItemElements = stateRef.current.listItemElements;
      if (isScrollTopJustUpdated) {
        stateRef.current.isScrollTopJustUpdated = false;
        return;
      }
      const listLength = listItemElements.length;
      const scrollContainer = scrollContainerClosest ? containerRef.current.closest(scrollContainerClosest) : containerRef.current;
      const {
        scrollTop,
        scrollHeight,
        offsetHeight
      } = scrollContainer;
      const top = listLength ? listItemElements[0].offsetTop : 0;
      const isNearTop = scrollTop <= top + sensitiveArea;
      const bottom = listLength ? listItemElements[listLength - 1].offsetTop + listItemElements[listLength - 1].offsetHeight : scrollHeight;
      const isNearBottom = bottom - (scrollTop + offsetHeight) <= sensitiveArea;
      let isUpdated = false;
      if (isNearTop) {
        const nextAnchor = listItemElements[0];
        if (nextAnchor) {
          const nextAnchorTop = nextAnchor.getBoundingClientRect().top;
          const newAnchorTop = currentAnchor?.offsetParent && currentAnchor !== nextAnchor ? currentAnchor.getBoundingClientRect().top : nextAnchorTop;
          const isMovingUp = currentAnchor && currentAnchorTop !== undefined && newAnchorTop > currentAnchorTop;
          if (isMovingUp) {
            stateRef.current.currentAnchor = nextAnchor;
            stateRef.current.currentAnchorTop = nextAnchorTop;
            isUpdated = true;
            loadMoreForwards();
          }
        }
      }
      if (isNearBottom) {
        const nextAnchor = listItemElements[listLength - 1];
        if (nextAnchor) {
          const nextAnchorTop = nextAnchor.getBoundingClientRect().top;
          const newAnchorTop = currentAnchor?.offsetParent && currentAnchor !== nextAnchor ? currentAnchor.getBoundingClientRect().top : nextAnchorTop;
          const isMovingDown = currentAnchor && currentAnchorTop !== undefined && newAnchorTop < currentAnchorTop;
          if (isMovingDown) {
            stateRef.current.currentAnchor = nextAnchor;
            stateRef.current.currentAnchorTop = nextAnchorTop;
            isUpdated = true;
            loadMoreBackwards();
          }
        }
      }
      if (!isUpdated) {
        if (currentAnchor?.offsetParent) {
          stateRef.current.currentAnchorTop = currentAnchor.getBoundingClientRect().top;
        } else {
          const nextAnchor = listItemElements[0];
          if (nextAnchor) {
            stateRef.current.currentAnchor = nextAnchor;
            stateRef.current.currentAnchorTop = nextAnchor.getBoundingClientRect().top;
          }
        }
      }
    }
    if (onScroll) {
      onScroll(e);
    }
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const scrollContainer = scrollContainerClosest ? containerRef.current.closest(scrollContainerClosest) : containerRef.current;
    if (!scrollContainer) return undefined;
    const handleNativeScroll = e => handleScroll(e);
    scrollContainer.addEventListener('scroll', handleNativeScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleNativeScroll);
    };
  }, [handleScroll, scrollContainerClosest]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: containerRef,
    className: className,
    onWheel: onWheel,
    teactFastList: !noFastList && !withAbsolutePositioning,
    onKeyDown: onKeyDown,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave,
    onClick: onClick,
    style: style
  }, beforeChildren, withAbsolutePositioning && items?.length ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    teactFastList: !noFastList,
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_3__["default"])('position: relative', _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_6__.IS_ANDROID && `height: ${maxHeight}px`)
  }, children) : children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteScroll);

/***/ }),

/***/ "./src/components/ui/ListItem.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/ListItem.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useFastClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useFastClick */ "./src/hooks/useFastClick.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Menu */ "./src/components/ui/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _MenuSeparator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MenuSeparator */ "./src/components/ui/MenuSeparator.tsx");
/* harmony import */ var _RippleEffect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RippleEffect */ "./src/components/ui/RippleEffect.tsx");
/* harmony import */ var _ListItem_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ListItem.scss */ "./src/components/ui/ListItem.scss");

















const ListItem = ({
  ref,
  buttonRef,
  icon,
  iconClassName,
  leftElement,
  buttonClassName,
  menuBubbleClassName,
  secondaryIcon,
  secondaryIconClassName,
  rightElement,
  className,
  style,
  children,
  disabled,
  allowDisabledClick,
  ripple,
  narrow,
  inactive,
  focus,
  destructive,
  multiline,
  isStatic,
  allowSelection,
  withColorTransition,
  contextActions,
  withPortalForMenu,
  href,
  onMouseDown,
  onClick,
  onContextMenu,
  clickArg,
  onSecondaryIconClick,
  onDragEnter,
  nonInteractive
}) => {
  // eslint-disable-next-line no-null/no-null
  let containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (ref) {
    containerRef = ref;
  }
  const [isTouched, markIsTouched, unmarkIsTouched] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_5__["default"])(containerRef, !contextActions);
  const getTriggerElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => containerRef.current);
  const getRootElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => containerRef.current.closest('.custom-scroll'));
  const getMenuElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    return (withPortalForMenu ? document.querySelector('#portals') : containerRef.current).querySelector('.ListItem-context-menu .bubble');
  });
  const getLayout = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => ({
    withPortal: withPortalForMenu
  }));
  const handleClickEvent = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(e => {
    const hasModifierKey = e.ctrlKey || e.metaKey || e.shiftKey;
    if (!hasModifierKey && e.button === _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.MouseButton.Main) {
      e.preventDefault();
    }
  });
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(e => {
    if (disabled && !allowDisabledClick || !onClick) {
      return;
    }
    if (href) {
      // Allow default behavior for opening links in new tab
      const hasModifierKey = e.ctrlKey || e.metaKey || e.shiftKey;
      if (hasModifierKey && e.button === _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.MouseButton.Main || e.button === _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.MouseButton.Auxiliary) {
        return;
      }
      e.preventDefault();
    }
    onClick(e, clickArg);
    if (_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_TOUCH_ENV && !ripple) {
      markIsTouched();
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMeasure)(unmarkIsTouched);
    }
  });
  const {
    handleClick: handleSecondaryIconClick,
    handleMouseDown: handleSecondaryIconMouseDown
  } = (0,_hooks_useFastClick__WEBPACK_IMPORTED_MODULE_6__.useFastClick)(e => {
    if (disabled && !allowDisabledClick || e.button !== 0 || !onSecondaryIconClick && !contextActions) return;
    e.stopPropagation();
    if (onSecondaryIconClick) {
      onSecondaryIconClick(e);
    } else {
      handleContextMenu(e);
    }
  });
  const handleMouseDown = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(e => {
    if (inactive || _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_TOUCH_ENV) {
      return;
    }
    if (contextActions && (e.button === _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.MouseButton.Secondary || !onClick)) {
      handleBeforeContextMenu(e);
    }
    if (e.button === _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.MouseButton.Main) {
      if (!onClick) {
        handleContextMenu(e);
      } else {
        handleClick(e);
      }
    }
  });
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('ListItem', className, allowSelection && 'allow-selection', ripple && 'has-ripple', narrow && 'narrow', disabled && 'disabled', allowDisabledClick && 'click-allowed', inactive && 'inactive', contextMenuAnchor && 'has-menu-open', focus && 'focus', destructive && 'destructive', multiline && 'multiline', isStatic && 'is-static', withColorTransition && 'with-color-transition');
  const ButtonElementTag = href ? 'a' : 'div';
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: containerRef,
    className: fullClassName,
    dir: lang.isRtl ? 'rtl' : undefined,
    style: style,
    onMouseDown: onMouseDown,
    onDragEnter: onDragEnter
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(ButtonElementTag, {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('ListItem-button', isTouched && 'active', buttonClassName),
    role: !isStatic ? 'button' : undefined,
    href: href,
    ref: buttonRef /* TS requires specific types for refs */,
    tabIndex: !isStatic ? 0 : undefined,
    onClick: !inactive && _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_TOUCH_ENV ? handleClick : handleClickEvent,
    onMouseDown: handleMouseDown,
    onContextMenu: onContextMenu || (!inactive && contextActions ? handleContextMenu : undefined)
  }, !disabled && !inactive && ripple && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_RippleEffect__WEBPACK_IMPORTED_MODULE_15__["default"], null), leftElement, icon && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: icon,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('ListItem-main-icon', iconClassName)
  }), multiline && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "multiline-item"
  }, children), !multiline && children, secondaryIcon && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    nonInteractive: nonInteractive,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('secondary-icon', secondaryIconClassName),
    round: true,
    color: "translucent",
    size: "smaller",
    onClick: handleSecondaryIconClick,
    onMouseDown: handleSecondaryIconMouseDown
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: secondaryIcon
  })), rightElement), contextActions && contextMenuAnchor !== undefined && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isOpen: isContextMenuOpen,
    anchor: contextMenuAnchor,
    getTriggerElement: getTriggerElement,
    getRootElement: getRootElement,
    getMenuElement: getMenuElement,
    getLayout: getLayout,
    className: "ListItem-context-menu with-menu-transitions",
    autoClose: true,
    onClose: handleContextMenuClose,
    onCloseAnimationEnd: handleContextMenuHide,
    withPortal: withPortalForMenu,
    bubbleClassName: menuBubbleClassName
  }, contextActions.map(action => 'isSeparator' in action ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_MenuSeparator__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: action.key || 'separator'
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    key: action.title,
    icon: action.icon,
    destructive: action.destructive,
    disabled: !action.handler,
    onClick: action.handler
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "list-item-ellipsis"
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__["default"])(action.title))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./src/components/ui/MenuSeparator.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/MenuSeparator.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _MenuSeparator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuSeparator.module.scss */ "./src/components/ui/MenuSeparator.module.scss");



const MenuSeparator = ({
  className,
  size = 'thin'
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_MenuSeparator_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, _MenuSeparator_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][size], className)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuSeparator);

/***/ }),

/***/ "./src/components/ui/Modal.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/Modal.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATION_DURATION: () => (/* binding */ ANIMATION_DURATION),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_captureKeyboardListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/captureKeyboardListeners */ "./src/util/captureKeyboardListeners.ts");
/* harmony import */ var _util_directInputManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/directInputManager */ "./src/util/directInputManager.ts");
/* harmony import */ var _util_hoc_freezeWhenClosed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/hoc/freezeWhenClosed */ "./src/util/hoc/freezeWhenClosed.ts");
/* harmony import */ var _util_trapFocus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/trapFocus */ "./src/util/trapFocus.ts");
/* harmony import */ var _hooks_useHistoryBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHistoryBack */ "./src/hooks/useHistoryBack.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useLayoutEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useLayoutEffectWithPrevDeps */ "./src/hooks/useLayoutEffectWithPrevDeps.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Portal */ "./src/components/ui/Portal.ts");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Modal.scss */ "./src/components/ui/Modal.scss");















const ANIMATION_DURATION = 200;
const Modal = ({
  dialogRef,
  title,
  className,
  contentClassName,
  headerClassName,
  isOpen,
  isSlim,
  header,
  hasCloseButton,
  hasAbsoluteCloseButton,
  noBackdrop,
  noBackdropClose,
  children,
  style,
  dialogStyle,
  isLowStackPriority,
  dialogContent,
  onClose,
  onCloseAnimationEnd,
  onEnter
}) => {
  const {
    ref: modalRef,
    shouldRender
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_10__["default"])({
    isOpen,
    onCloseAnimationEnd,
    withShouldRender: true
  });
  const withCloseButton = hasCloseButton || hasAbsoluteCloseButton;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      return undefined;
    }
    (0,_util_directInputManager__WEBPACK_IMPORTED_MODULE_3__.disableDirectTextInput)();
    return _util_directInputManager__WEBPACK_IMPORTED_MODULE_3__.enableDirectTextInput;
  }, [isOpen]);
  const handleEnter = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    if (!onEnter) {
      return false;
    }
    e.preventDefault();
    onEnter();
    return true;
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => isOpen ? (0,_util_captureKeyboardListeners__WEBPACK_IMPORTED_MODULE_2__["default"])({
    onEsc: onClose,
    onEnter: handleEnter
  }) : undefined, [isOpen, onClose, handleEnter]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => isOpen && modalRef.current ? (0,_util_trapFocus__WEBPACK_IMPORTED_MODULE_5__["default"])(modalRef.current) : undefined, [isOpen, modalRef]);
  (0,_hooks_useHistoryBack__WEBPACK_IMPORTED_MODULE_6__["default"])({
    isActive: isOpen,
    onBack: onClose
  });
  (0,_hooks_useLayoutEffectWithPrevDeps__WEBPACK_IMPORTED_MODULE_8__["default"])(([prevIsOpen]) => {
    document.body.classList.toggle('has-open-dialog', Boolean(isOpen));
    if (isOpen || !isOpen && prevIsOpen !== undefined) {
      (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.beginHeavyAnimation)(ANIMATION_DURATION);
    }
    return () => {
      document.body.classList.remove('has-open-dialog');
    };
  }, [isOpen]);
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  if (!shouldRender) {
    return undefined;
  }
  function renderHeader() {
    if (header) {
      return header;
    }
    if (!title && !withCloseButton) return undefined;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('modal-header', headerClassName)
    }, withCloseButton && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(hasAbsoluteCloseButton && 'modal-absolute-close-button'),
      round: true,
      color: "translucent",
      size: "smaller",
      ariaLabel: lang('Close'),
      onClick: onClose
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "close"
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "modal-title"
    }, title));
  }
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('Modal', className, noBackdrop && 'transparent-backdrop', isSlim && 'slim', isLowStackPriority && 'low-priority');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Portal__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: modalRef,
    className: fullClassName,
    tabIndex: -1,
    role: "dialog"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "modal-backdrop",
    onClick: !noBackdropClose ? onClose : undefined
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "modal-dialog",
    ref: dialogRef,
    style: dialogStyle
  }, renderHeader(), dialogContent, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('modal-content custom-scroll', contentClassName),
    style: style
  }, children)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_hoc_freezeWhenClosed__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal));

/***/ }),

/***/ "./src/components/ui/Notification.tsx":
/*!********************************************!*\
  !*** ./src/components/ui/Notification.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _util_localization_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/localization/types */ "./src/util/localization/types.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_captureEscKeyListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/captureEscKeyListener */ "./src/util/captureEscKeyListener.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _common_CustomEmoji__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Portal */ "./src/components/ui/Portal.ts");
/* harmony import */ var _RoundTimer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RoundTimer */ "./src/components/ui/RoundTimer.tsx");
/* harmony import */ var _Notification_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Notification.scss */ "./src/components/ui/Notification.scss");

















const DEFAULT_DURATION = 3000;
const ANIMATION_DURATION = 150;
const CUSTOM_EMOJI_SIZE = 1.75 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_6__.REM;
const Notification = ({
  notification
}) => {
  const actions = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    localId,
    message,
    action,
    actionText,
    cacheBreaker,
    className,
    disableClickDismiss,
    dismissAction,
    duration = DEFAULT_DURATION,
    icon,
    customEmojiIconId,
    shouldShowTimer,
    title,
    containerSelector
  } = notification;
  const [isOpen, setIsOpen] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  // eslint-disable-next-line no-null/no-null
  const timerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    transitionClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_10__["default"])(isOpen);
  const handleDismiss = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    actions.dismissNotification({
      localId
    });
  });
  const closeAndDismiss = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(force => {
    if (!force && disableClickDismiss) return;
    setIsOpen(false);
    setTimeout(handleDismiss, ANIMATION_DURATION + _config__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_END_DELAY);
    if (dismissAction) {
      // @ts-ignore
      actions[dismissAction.action](dismissAction.payload);
    }
  });
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    if (action) {
      if (Array.isArray(action)) {
        // @ts-ignore
        action.forEach(cb => actions[cb.action](cb.payload));
      } else {
        // @ts-ignore
        actions[action.action](action.payload);
      }
    }
    closeAndDismiss();
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => isOpen ? (0,_util_captureEscKeyListener__WEBPACK_IMPORTED_MODULE_5__["default"])(closeAndDismiss) : undefined, [isOpen, closeAndDismiss]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    timerRef.current = window.setTimeout(() => closeAndDismiss(true), duration);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = undefined;
      }
    };
  }, [duration, cacheBreaker]); // Reset timer if `cacheBreaker` changes

  const handleMouseEnter = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    if (disableClickDismiss) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  });
  const handleMouseLeave = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    if (disableClickDismiss) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(closeAndDismiss, duration);
  });
  const renderedTitle = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!title) return undefined;
    if ((0,_util_localization_types__WEBPACK_IMPORTED_MODULE_2__.isLangFnParam)(title)) {
      return lang.with(title);
    }
    return (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])(title, ['simple_markdown', 'emoji', 'br', 'links']);
  }, [lang, title]);
  const renderedMessage = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if ((0,_util_localization_types__WEBPACK_IMPORTED_MODULE_2__.isLangFnParam)(message)) {
      return lang.with(message);
    }
    if (typeof message === 'string') {
      return (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])(message, ['simple_markdown', 'emoji', 'br', 'links']);
    }
    return message;
  }, [lang, message]);
  const renderedActionText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!actionText) return undefined;
    if ((0,_util_localization_types__WEBPACK_IMPORTED_MODULE_2__.isLangFnParam)(actionText)) {
      return lang.with(actionText);
    }
    return actionText;
  }, [lang, actionText]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Portal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "Notification-container",
    containerSelector: containerSelector
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('Notification', transitionClassNames, className),
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, customEmojiIconId ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_CustomEmoji__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "notification-emoji-icon",
    forceAlways: true,
    size: CUSTOM_EMOJI_SIZE,
    documentId: customEmojiIconId
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: icon || 'info-filled',
    className: "notification-icon"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "content"
  }, renderedTitle && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "notification-title"
  }, renderedTitle), renderedMessage), action && renderedActionText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "translucent-white",
    onClick: handleClick,
    className: "notification-button"
  }, renderedActionText), shouldShowTimer && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_RoundTimer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "notification-timer",
    key: cacheBreaker,
    duration: Math.ceil(duration / 1000)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);

/***/ }),

/***/ "./src/components/ui/ProgressSpinner.tsx":
/*!***********************************************!*\
  !*** ./src/components/ui/ProgressSpinner.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/animation */ "./src/util/animation.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_stickers_useDynamicColorListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/stickers/useDynamicColorListener */ "./src/hooks/stickers/useDynamicColorListener.ts");
/* harmony import */ var _hooks_useStateRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStateRef */ "./src/hooks/useStateRef.ts");
/* harmony import */ var _hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/window/useDevicePixelRatio */ "./src/hooks/window/useDevicePixelRatio.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ProgressSpinner_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProgressSpinner.scss */ "./src/components/ui/ProgressSpinner.scss");









const SIZES = {
  s: 42,
  m: 48,
  l: 54,
  xl: 52
};
const STROKE_WIDTH = 2;
const STROKE_WIDTH_XL = 3;
const PADDING = 2;
const MIN_PROGRESS = 0.05;
const MAX_PROGRESS = 1;
const GROW_DURATION = 600; // 0.6 s
const ROTATE_DURATION = 2000; // 2 s

const ProgressSpinner = ({
  progress = 0,
  size = 'l',
  square,
  transparent,
  noCross,
  rotationOffset,
  withColor,
  onClick
}) => {
  // eslint-disable-next-line no-null/no-null
  const canvasRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const width = SIZES[size];
  const progressRef = (0,_hooks_useStateRef__WEBPACK_IMPORTED_MODULE_5__.useStateRef)(progress);
  const dpr = (0,_hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const color = (0,_hooks_stickers_useDynamicColorListener__WEBPACK_IMPORTED_MODULE_4__["default"])(canvasRef, !withColor);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let isFirst = true;
    let growFrom = MIN_PROGRESS;
    let growStartedAt;
    let prevProgress;
    (0,_util_animation__WEBPACK_IMPORTED_MODULE_2__.animate)(() => {
      if (!canvasRef.current) {
        return false;
      }
      if (progressRef.current !== prevProgress) {
        growFrom = Math.min(Math.max(MIN_PROGRESS, prevProgress || 0), MAX_PROGRESS);
        growStartedAt = Date.now();
        prevProgress = progressRef.current;
      }
      const targetProgress = Math.min(Math.max(MIN_PROGRESS, progressRef.current), MAX_PROGRESS);
      const t = Math.min(1, (Date.now() - growStartedAt) / GROW_DURATION);
      const animationFactor = _util_animation__WEBPACK_IMPORTED_MODULE_2__.timingFunctions.easeOutQuad(t);
      const currentProgress = growFrom + (targetProgress - growFrom) * animationFactor;
      drawSpinnerArc(canvasRef.current, width * dpr, (size === 'xl' ? STROKE_WIDTH_XL : STROKE_WIDTH) * dpr, color ?? 'white', currentProgress, dpr, isFirst, rotationOffset);
      isFirst = false;
      return currentProgress < 1;
    }, _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation);
  }, [progressRef, size, width, dpr, rotationOffset, color]);
  const className = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(`ProgressSpinner size-${size}`, transparent && 'transparent', square && 'square', noCross && 'no-cross');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: className,
    onClick: onClick
  }, !noCross && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "close"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("canvas", {
    ref: canvasRef,
    className: "ProgressSpinner_canvas",
    style: `width: ${width}; height: ${width}px;`
  }));
};
function drawSpinnerArc(canvas, size, strokeWidth, color, progress, dpr, shouldInit = false, rotationOffset) {
  const centerCoordinate = size / 2;
  const radius = (size - strokeWidth) / 2 - PADDING * dpr;
  const offset = rotationOffset ?? Date.now() % ROTATE_DURATION / ROTATE_DURATION;
  const startAngle = 2 * Math.PI * offset;
  const endAngle = startAngle + 2 * Math.PI * progress;
  const ctx = canvas.getContext('2d');
  if (shouldInit) {
    canvas.width = size;
    canvas.height = size;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
  }
  ctx.clearRect(0, 0, size, size);
  ctx.beginPath();
  ctx.arc(centerCoordinate, centerCoordinate, radius, startAngle, endAngle);
  ctx.stroke();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ProgressSpinner));

/***/ }),

/***/ "./src/components/ui/Radio.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/Radio.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spinner */ "./src/components/ui/Spinner.tsx");
/* harmony import */ var _Radio_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Radio.scss */ "./src/components/ui/Radio.scss");





const Radio = ({
  id,
  label,
  subLabel,
  subLabelClassName,
  value,
  name,
  checked,
  disabled,
  hidden,
  isLoading,
  className,
  onlyInput,
  withIcon,
  isLink,
  onChange,
  onSubLabelClick
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('Radio', className, disabled && 'disabled', hidden && 'hidden-widget', withIcon && 'with-icon', isLoading && 'loading', onlyInput && 'onlyInput', Boolean(subLabel) && 'withSubLabel');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    className: fullClassName,
    dir: lang.isRtl ? 'rtl' : undefined
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "radio",
    name: name,
    value: value,
    id: id,
    checked: checked,
    onChange: onChange,
    disabled: disabled || hidden
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "Radio-main"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "label",
    dir: lang.isRtl ? 'auto' : undefined
  }, label), subLabel && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(subLabelClassName, 'subLabel', isLink ? 'subLabelLink' : undefined),
    dir: lang.isRtl ? 'auto' : undefined,
    onClick: isLink ? onSubLabelClick : undefined
  }, subLabel)), isLoading && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Radio));

/***/ }),

/***/ "./src/components/ui/RadioGroup.tsx":
/*!******************************************!*\
  !*** ./src/components/ui/RadioGroup.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Radio */ "./src/components/ui/Radio.tsx");



const RadioGroup = ({
  id,
  name,
  options,
  selected,
  disabled,
  loadingOption,
  onChange,
  onClickAction,
  subLabelClassName,
  isLink,
  withIcon,
  subLabel
}) => {
  const handleChange = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      value
    } = event.currentTarget;
    onChange(value, event);
  }, [onChange]);
  const onSubLabelClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(value => () => {
    onClickAction?.(value);
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: id,
    className: "radio-group"
  }, options.map(option => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    label: option.label,
    subLabel: subLabel || option.subLabel,
    subLabelClassName: subLabelClassName,
    value: option.value,
    checked: option.value === selected,
    hidden: option.hidden,
    disabled: disabled,
    withIcon: withIcon,
    isLoading: loadingOption ? loadingOption === option.value : undefined,
    className: option.className,
    onChange: handleChange,
    onSubLabelClick: onSubLabelClick(option.value),
    isLink: isLink
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(RadioGroup));

/***/ }),

/***/ "./src/components/ui/RangeSlider.tsx":
/*!*******************************************!*\
  !*** ./src/components/ui/RangeSlider.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _RangeSlider_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RangeSlider.scss */ "./src/components/ui/RangeSlider.scss");




const RangeSlider = ({
  options,
  min = 0,
  max = options ? options.length - 1 : 100,
  step = 1,
  label,
  value,
  disabled,
  bold,
  className,
  renderValue,
  onChange,
  isCenteredLayout
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const handleChange = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    onChange(Number(event.currentTarget.value));
  }, [onChange]);
  const mainClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(className, 'RangeSlider', disabled && 'disabled', bold && 'bold');
  const trackWidth = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (options) {
      return value / (options.length - 1) * 100;
    } else {
      const possibleValuesLength = (max - min) / step;
      return (value - min) / possibleValuesLength * 100;
    }
  }, [options, value, max, min, step]);
  function renderTopRow() {
    if (isCenteredLayout) {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "slider-top-row",
        dir: lang.isRtl ? 'rtl' : undefined
      }, !options && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
        className: "value-min",
        dir: "auto"
      }, min), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
        className: "label",
        dir: "auto"
      }, renderValue ? renderValue(value) : value), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
        className: "value-max",
        dir: "auto"
      }, max)));
    }
    if (!label) {
      return undefined;
    }
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "slider-top-row",
      dir: lang.isRtl ? 'rtl' : undefined
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "label",
      dir: "auto"
    }, label), !options && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "value",
      dir: "auto"
    }, renderValue ? renderValue(value) : value));
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: mainClassName
  }, renderTopRow(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "slider-main"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "slider-fill-track",
    style: `width: ${trackWidth}%`
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    min: min,
    max: max,
    value: value,
    step: step,
    type: "range",
    className: "RangeSlider__input",
    onChange: handleChange
  }), options && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "slider-options"
  }, options.map((option, index) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('slider-option', index === value && 'active'),
    onClick: () => onChange(index)
  }, option)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(RangeSlider));

/***/ }),

/***/ "./src/components/ui/RangeSliderWithMarks.tsx":
/*!****************************************************!*\
  !*** ./src/components/ui/RangeSliderWithMarks.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeSliderWithMarks.module.scss */ "./src/components/ui/RangeSliderWithMarks.module.scss");



const RangeSliderWithMarks = ({
  marks,
  onChange,
  rangeCount
}) => {
  // eslint-disable-next-line no-null/no-null
  const sliderRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const fillPercentage = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (marks.indexOf(rangeCount) / (marks.length - 1) * 100).toFixed(2);
  }, [marks, rangeCount]);
  const rangeCountIndex = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => marks.indexOf(rangeCount), [marks, rangeCount]);
  const rangeValue = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return marks.indexOf(rangeCount).toString();
  }, [marks, rangeCount]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    sliderRef.current.style.setProperty('--fill-percentage', `${fillPercentage}%`);
  }, [fillPercentage]);
  const handleChange = event => {
    const index = parseInt(event.target.value, 10);
    const newValue = marks[index];
    onChange(newValue);
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dotWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].sliderContainer
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tickMarks
  }, marks.map((mark, index) => {
    const isFilled = index <= rangeCountIndex;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      key: mark,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tick, isFilled ? _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].filled : _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tickUnfilled)
    });
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].marksContainer
  }, marks.map(mark => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    key: mark,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].mark, rangeCount === mark && _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].active)
  }, mark))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    ref: sliderRef,
    type: "range",
    className: _RangeSliderWithMarks_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].slider,
    min: "0",
    max: marks.length - 1,
    value: rangeValue,
    onChange: handleChange,
    step: "1"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(RangeSliderWithMarks));

/***/ }),

/***/ "./src/components/ui/ResponsiveHoverButton.tsx":
/*!*****************************************************!*\
  !*** ./src/components/ui/ResponsiveHoverButton.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




const BUTTON_ACTIVATE_DELAY = 200;
let openTimeout;
let isFirstTimeActivation = true;
const ResponsiveHoverButton = ({
  onActivate,
  ...buttonProps
}) => {
  const isMouseInside = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const handleMouseEnter = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_2__["default"])(e => {
    isMouseInside.current = true;

    // This is used to counter additional delay caused by asynchronous module loading
    if (isFirstTimeActivation) {
      isFirstTimeActivation = false;
      onActivate(e);
      return;
    }
    if (openTimeout) {
      clearTimeout(openTimeout);
      openTimeout = undefined;
    }
    openTimeout = window.setTimeout(() => {
      if (isMouseInside.current) {
        onActivate(e);
      }
    }, BUTTON_ACTIVATE_DELAY);
  });
  const handleMouseLeave = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    isMouseInside.current = false;
  });
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_2__["default"])(e => {
    isMouseInside.current = true;
    onActivate(e);
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"]
  // eslint-disable-next-line react/jsx-props-no-spreading
  , _extends({}, buttonProps, {
    onMouseEnter: !_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_TOUCH_ENV ? handleMouseEnter : undefined,
    onMouseLeave: !_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_TOUCH_ENV ? handleMouseLeave : undefined,
    onClick: !_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_TOUCH_ENV ? onActivate : handleClick
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveHoverButton);

/***/ }),

/***/ "./src/components/ui/RoundTimer.tsx":
/*!******************************************!*\
  !*** ./src/components/ui/RoundTimer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/schedulers/useInterval */ "./src/hooks/schedulers/useInterval.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/AnimatedCounter */ "./src/components/common/AnimatedCounter.tsx");
/* harmony import */ var _RoundTimer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RoundTimer.module.scss */ "./src/components/ui/RoundTimer.module.scss");







const UPDATE_FREQUENCY = 1000;
const TIMER_RADIUS = 14;
const RoundTimer = ({
  duration,
  className,
  onEnd
}) => {
  const [timeLeft, setTimeLeft] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(duration);
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_3__["default"])(() => setTimeLeft(prev => prev - 1), timeLeft > 0 ? UPDATE_FREQUENCY : undefined);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (timeLeft <= 0) {
      onEnd?.();
    }
  }, [timeLeft, onEnd]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeLeft(duration);
  }, [duration]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_RoundTimer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: _RoundTimer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].svg,
    width: "32px",
    height: "32px"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("circle", {
    cx: "16",
    cy: "16",
    r: TIMER_RADIUS,
    transform: "rotate(-90, 16, 16)",
    pathLength: "100",
    "stroke-dasharray": "100",
    "stroke-dashoffset": 100 - (timeLeft - 1) / duration * 100 // Show it one step further due to animation
    ,
    className: _RoundTimer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].circle
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _RoundTimer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].text,
    text: (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_2__.formatCountdownShort)(lang, timeLeft * 1000)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(RoundTimer));

/***/ }),

/***/ "./src/components/ui/SearchInput.tsx":
/*!*******************************************!*\
  !*** ./src/components/ui/SearchInput.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useInputFocusOnOpen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInputFocusOnOpen */ "./src/hooks/useInputFocusOnOpen.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loading */ "./src/components/ui/Loading.tsx");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Transition */ "./src/components/ui/Transition.tsx");
/* harmony import */ var _SearchInput_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SearchInput.scss */ "./src/components/ui/SearchInput.scss");












const SearchInput = ({
  ref,
  children,
  resultsItemSelector,
  value,
  inputId,
  className,
  focused,
  isLoading = false,
  spinnerColor,
  spinnerBackgroundColor,
  placeholder,
  disabled,
  autoComplete,
  canClose,
  autoFocusSearch,
  hasUpButton,
  hasDownButton,
  teactExperimentControlled,
  withBackIcon,
  onChange,
  onStartBackspace,
  onReset,
  onFocus,
  onBlur,
  onClick,
  onUpClick,
  onDownClick,
  onSpinnerClick
}) => {
  // eslint-disable-next-line no-null/no-null
  let inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (ref) {
    inputRef = ref;
  }
  const [isInputFocused, markInputFocused, unmarkInputFocused] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_2__["default"])(focused);
  (0,_hooks_useInputFocusOnOpen__WEBPACK_IMPORTED_MODULE_3__["default"])(inputRef, autoFocusSearch, unmarkInputFocused);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!inputRef.current) {
      return;
    }
    if (focused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [focused, placeholder]); // Trick for setting focus when selecting a contact to search for

  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  function handleChange(event) {
    const {
      currentTarget
    } = event;
    onChange(currentTarget.value);
    if (!isInputFocused) {
      handleFocus();
    }
  }
  function handleFocus() {
    markInputFocused();
    onFocus?.();
  }
  function handleBlur() {
    unmarkInputFocused();
    onBlur?.();
  }
  const handleKeyDown = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(e => {
    if (!resultsItemSelector) return;
    if (e.key === 'ArrowDown' || e.key === 'Enter') {
      const element = document.querySelector(resultsItemSelector);
      if (element) {
        element.focus();
      }
    }
    if (e.key === 'Backspace' && e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === 0) {
      onStartBackspace?.();
    }
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('SearchInput', className, isInputFocused && 'has-focus'),
    onClick: onClick,
    dir: oldLang.isRtl ? 'rtl' : undefined
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Transition__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "fade",
    shouldCleanup: true,
    activeKey: Number(!isLoading && !withBackIcon),
    className: "icon-container-left",
    slideClassName: "icon-container-slide"
  }, isLoading && !withBackIcon ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: spinnerColor,
    backgroundColor: spinnerBackgroundColor,
    onClick: onSpinnerClick
  }) : withBackIcon ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "arrow-left",
    className: "back-icon",
    onClick: onReset
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "search",
    className: "search-icon"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, children), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    ref: inputRef,
    id: inputId,
    type: "text",
    dir: "auto",
    placeholder: placeholder || oldLang('Search'),
    className: "form-control",
    value: value,
    disabled: disabled,
    autoComplete: autoComplete,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    teactExperimentControlled: teactExperimentControlled
  }), hasUpButton && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    round: true,
    size: "tiny",
    color: "translucent",
    onClick: onUpClick,
    disabled: !onUpClick,
    ariaLabel: lang('AriaSearchOlderResult')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "up"
  })), hasDownButton && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    round: true,
    size: "tiny",
    color: "translucent",
    onClick: onDownClick,
    disabled: !onDownClick,
    ariaLabel: lang('AriaSearchNewerResult')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "down"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Transition__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "fade",
    shouldCleanup: true,
    activeKey: Number(isLoading),
    className: "icon-container-right",
    slideClassName: "icon-container-slide"
  }, withBackIcon && isLoading ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: spinnerColor,
    backgroundColor: spinnerBackgroundColor,
    onClick: onSpinnerClick
  }) : (value || canClose) && onReset && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    round: true,
    size: "tiny",
    color: "translucent",
    onClick: onReset
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "close"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(SearchInput));

/***/ }),

/***/ "./src/components/ui/Select.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/Select.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");


const Select = props => {
  const {
    id,
    value,
    label,
    hasArrow,
    error,
    ref,
    tabIndex,
    onChange,
    children
  } = props;
  const labelText = error || label;
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('input-group', value && 'touched', error && 'error', labelText && 'with-label', hasArrow && 'with-arrow', 'input-group');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: fullClassName
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", {
    className: "form-control",
    id: id,
    value: value || '',
    onChange: onChange,
    tabIndex: tabIndex,
    ref: ref
  }, children), labelText && id && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: id
  }, labelText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Select));

/***/ }),

/***/ "./src/components/ui/SelectAvatar.tsx":
/*!********************************************!*\
  !*** ./src/components/ui/SelectAvatar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_systemFilesDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/systemFilesDialog */ "./src/util/systemFilesDialog.ts");
/* harmony import */ var _CropModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CropModal */ "./src/components/ui/CropModal.tsx");
/* harmony import */ var _SelectAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectAvatar.module.scss */ "./src/components/ui/SelectAvatar.module.scss");




const SelectAvatar = ({
  onChange,
  inputRef
}) => {
  const [selectedFile, setSelectedFile] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const handleAvatarCrop = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(croppedImg => {
    setSelectedFile(undefined);
    onChange(croppedImg);
  }, [onChange]);
  const handleModalClose = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setSelectedFile(undefined);
  }, []);
  const handleClick = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    (0,_util_systemFilesDialog__WEBPACK_IMPORTED_MODULE_1__.openSystemFilesDialog)('image/png, image/jpeg', event => {
      const target = event.target;
      if (!target?.files?.[0]) {
        return;
      }
      setSelectedFile(target.files[0]);
    }, true);
  }, []);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    ref: inputRef,
    className: _SelectAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].input,
    onClick: handleClick
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CropModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    file: selectedFile,
    onClose: handleModalClose,
    onChange: handleAvatarCrop
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(SelectAvatar));

/***/ }),

/***/ "./src/components/ui/Separator.tsx":
/*!*****************************************!*\
  !*** ./src/components/ui/Separator.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Separator_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Separator.module.scss */ "./src/components/ui/Separator.module.scss");




function Separator({
  children,
  className
}) {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    dir: lang.isRtl ? 'rtl' : undefined,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_Separator_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].separator, className)
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Separator);

/***/ }),

/***/ "./src/components/ui/ShowMoreButton.tsx":
/*!**********************************************!*\
  !*** ./src/components/ui/ShowMoreButton.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ShowMoreButton_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowMoreButton.scss */ "./src/components/ui/ShowMoreButton.scss");




const ShowMoreButton = ({
  count,
  itemName,
  itemPluralName,
  isLoading,
  onClick
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "ShowMoreButton",
    color: "translucent",
    size: "smaller",
    isText: true,
    isLoading: isLoading,
    isRtl: lang.isRtl,
    onClick: onClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: "icon icon-down"
  }), "Show ", count, " more ", count > 1 ? itemPluralName || `${itemName}s` : itemName);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowMoreButton);

/***/ }),

/***/ "./src/components/ui/ShowTransition.tsx":
/*!**********************************************!*\
  !*** ./src/components/ui/ShowTransition.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");



const ShowTransition = ({
  isOpen,
  isHidden,
  isCustom,
  id,
  className,
  onClick,
  children,
  noCloseTransition,
  shouldAnimateFirstRender,
  style,
  ref: externalRef
}) => {
  const prevIsOpen = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_1__["default"])(isOpen);
  const prevChildren = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_1__["default"])(children);
  const fromChildrenRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isFirstRender = prevIsOpen === undefined;
  const {
    ref,
    shouldRender
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_2__["default"])({
    isOpen: isOpen && !isHidden,
    ref: externalRef,
    noMountTransition: isFirstRender && !shouldAnimateFirstRender,
    className: isCustom ? false : undefined,
    noCloseTransition,
    withShouldRender: true
  });
  if (prevIsOpen && !isOpen) {
    fromChildrenRef.current = prevChildren;
  }
  return (shouldRender || isHidden) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: id,
    ref: ref,
    className: className,
    onClick: onClick,
    style: style
  }, isOpen ? children : fromChildrenRef.current);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowTransition);

/***/ }),

/***/ "./src/components/ui/Switcher.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/Switcher.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _Switcher_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Switcher.scss */ "./src/components/ui/Switcher.scss");



const Switcher = ({
  id,
  name,
  value,
  label,
  checked = false,
  disabled,
  inactive,
  noAnimation,
  onChange,
  onCheck
}) => {
  const handleChange = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (onChange) {
      onChange(e);
    }
    if (onCheck) {
      onCheck(e.currentTarget.checked);
    }
  }, [onChange, onCheck]);
  const className = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('Switcher', disabled && 'disabled', inactive && 'inactive', noAnimation && 'no-animation');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    className: className,
    title: label
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    type: "checkbox",
    id: id,
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: handleChange
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "widget"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Switcher));

/***/ }),

/***/ "./src/components/ui/Tab.tsx":
/*!***********************************!*\
  !*** ./src/components/ui/Tab.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_forceReflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/forceReflow */ "./src/util/forceReflow.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useFastClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useFastClick */ "./src/hooks/useFastClick.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Menu */ "./src/components/ui/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _MenuSeparator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MenuSeparator */ "./src/components/ui/MenuSeparator.tsx");
/* harmony import */ var _Tab_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tab.scss */ "./src/components/ui/Tab.scss");













const classNames = {
  active: 'Tab--active',
  badgeActive: 'Tab__badge--active'
};
const Tab = ({
  className,
  title,
  isActive,
  isBlocked,
  badgeCount,
  isBadgeActive,
  previousActiveTab,
  onClick,
  clickArg,
  contextActions,
  contextRootElementSelector
}) => {
  // eslint-disable-next-line no-null/no-null
  const tabRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    // Set initial active state
    if (isActive && previousActiveTab === undefined && tabRef.current) {
      tabRef.current.classList.add(classNames.active);
    }
  }, [isActive, previousActiveTab]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isActive || previousActiveTab === undefined) {
      return;
    }
    const tabEl = tabRef.current;
    const prevTabEl = tabEl.parentElement.children[previousActiveTab];
    if (!prevTabEl) {
      // The number of tabs in the parent component has decreased. It is necessary to add the active tab class name.
      if (isActive && !tabEl.classList.contains(classNames.active)) {
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
          tabEl.classList.add(classNames.active);
        });
      }
      return;
    }
    const platformEl = tabEl.querySelector('.platform');
    const prevPlatformEl = prevTabEl.querySelector('.platform');

    // We move and resize the platform, so it repeats the position and size of the previous one
    const shiftLeft = prevPlatformEl.parentElement.offsetLeft - platformEl.parentElement.offsetLeft;
    const scaleFactor = prevPlatformEl.clientWidth / platformEl.clientWidth;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      prevPlatformEl.classList.remove('animate');
      platformEl.classList.remove('animate');
      platformEl.style.transform = `translate3d(${shiftLeft}px, 0, 0) scale3d(${scaleFactor}, 1, 1)`;
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestForcedReflow)(() => {
        (0,_util_forceReflow__WEBPACK_IMPORTED_MODULE_3__["default"])(platformEl);
        return () => {
          platformEl.classList.add('animate');
          platformEl.style.transform = 'none';
          prevTabEl.classList.remove(classNames.active);
          tabEl.classList.add(classNames.active);
        };
      });
    });
  }, [isActive, previousActiveTab]);
  const {
    contextMenuAnchor,
    handleContextMenu,
    handleBeforeContextMenu,
    handleContextMenuClose,
    handleContextMenuHide,
    isContextMenuOpen
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_6__["default"])(tabRef, !contextActions);
  const {
    handleClick,
    handleMouseDown
  } = (0,_hooks_useFastClick__WEBPACK_IMPORTED_MODULE_7__.useFastClick)(e => {
    if (contextActions && (e.button === _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.MouseButton.Secondary || !onClick)) {
      handleBeforeContextMenu(e);
    }
    if (e.type === 'mousedown' && e.button !== _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.MouseButton.Main) {
      return;
    }
    onClick?.(clickArg);
  });
  const getTriggerElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => tabRef.current);
  const getRootElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => contextRootElementSelector ? tabRef.current.closest(contextRootElementSelector) : document.body);
  const getMenuElement = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => document.querySelector('#portals').querySelector('.Tab-context-menu .bubble'));
  const getLayout = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => ({
    withPortal: true
  }));
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('Tab', onClick && 'Tab--interactive', className),
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onContextMenu: handleContextMenu,
    ref: tabRef
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "Tab_inner"
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_5__["default"])(title), Boolean(badgeCount) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('badge', isBadgeActive && classNames.badgeActive)
  }, badgeCount), isBlocked && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: "icon icon-lock-badge blocked"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: "platform"
  })), contextActions && contextMenuAnchor !== undefined && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isOpen: isContextMenuOpen,
    anchor: contextMenuAnchor,
    getTriggerElement: getTriggerElement,
    getRootElement: getRootElement,
    getMenuElement: getMenuElement,
    getLayout: getLayout,
    className: "Tab-context-menu",
    autoClose: true,
    onClose: handleContextMenuClose,
    onCloseAnimationEnd: handleContextMenuHide,
    withPortal: true
  }, contextActions.map(action => 'isSeparator' in action ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_MenuSeparator__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: action.key || 'separator'
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: action.title,
    icon: action.icon,
    destructive: action.destructive,
    disabled: !action.handler,
    onClick: action.handler
  }, action.title))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);

/***/ }),

/***/ "./src/components/ui/TabList.tsx":
/*!***************************************!*\
  !*** ./src/components/ui/TabList.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _util_animateHorizontalScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/animateHorizontalScroll */ "./src/util/animateHorizontalScroll.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useHorizontalScroll */ "./src/hooks/useHorizontalScroll.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tab */ "./src/components/ui/Tab.tsx");
/* harmony import */ var _TabList_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabList.scss */ "./src/components/ui/TabList.scss");










const TAB_SCROLL_THRESHOLD_PX = 16;
// Should match duration from `--slide-transition` CSS variable
const SCROLL_DURATION = _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.IS_IOS ? 450 : _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_4__.IS_ANDROID ? 400 : 300;
const TabList = ({
  tabs,
  areFolders,
  activeTab,
  onSwitchTab,
  contextRootElementSelector,
  className,
  tabClassName
}) => {
  // eslint-disable-next-line no-null/no-null
  const containerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const previousActiveTab = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__["default"])(activeTab);
  (0,_hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_5__["default"])(containerRef, undefined, true);

  // Scroll container to place active tab in the center
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const container = containerRef.current;
    const {
      scrollWidth,
      offsetWidth,
      scrollLeft
    } = container;
    if (scrollWidth <= offsetWidth) {
      return;
    }
    const activeTabElement = container.childNodes[activeTab];
    if (!activeTabElement) {
      return;
    }
    const {
      offsetLeft: activeTabOffsetLeft,
      offsetWidth: activeTabOffsetWidth
    } = activeTabElement;
    const newLeft = activeTabOffsetLeft - offsetWidth / 2 + activeTabOffsetWidth / 2;

    // Prevent scrolling by only a couple of pixels, which doesn't look smooth
    if (Math.abs(newLeft - scrollLeft) < TAB_SCROLL_THRESHOLD_PX) {
      return;
    }
    (0,_util_animateHorizontalScroll__WEBPACK_IMPORTED_MODULE_2__["default"])(container, newLeft, SCROLL_DURATION);
  }, [activeTab]);
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('TabList', 'no-scrollbar', className),
    ref: containerRef,
    dir: lang.isRtl ? 'rtl' : undefined
  }, tabs.map((tab, i) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: tab.id ?? tab.title
    // TODO Remove dependency on usage context
    ,
    title: !areFolders || tab.id === _config__WEBPACK_IMPORTED_MODULE_1__.ALL_FOLDER_ID ? lang(tab.title) : tab.title,
    isActive: i === activeTab,
    isBlocked: tab.isBlocked,
    badgeCount: tab.badgeCount,
    isBadgeActive: tab.isBadgeActive,
    previousActiveTab: previousActiveTab,
    onClick: onSwitchTab,
    clickArg: i,
    contextActions: tab.contextActions,
    contextRootElementSelector: contextRootElementSelector,
    className: tabClassName
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TabList));

/***/ }),

/***/ "./src/components/ui/TextArea.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/TextArea.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");





const TextArea = ({
  ref,
  id,
  className,
  value,
  label,
  error,
  success,
  disabled,
  readOnly,
  placeholder,
  autoComplete,
  inputMode,
  maxLength,
  maxLengthIndicator,
  tabIndex,
  onChange,
  onInput,
  onKeyPress,
  onKeyDown,
  onBlur,
  onPaste,
  noReplaceNewlines
}) => {
  // eslint-disable-next-line no-null/no-null
  let textareaRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (ref) {
    textareaRef = ref;
  }
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const labelText = error || success || label;
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('input-group', value && 'touched', error ? 'error' : success && 'success', disabled && 'disabled', readOnly && 'disabled', labelText && 'with-label', className);
  const resizeHeight = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(element => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      element.style.height = '0';
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestForcedReflow)(() => {
        const newHeight = element.scrollHeight;
        return () => {
          element.style.height = `${newHeight}px`;
        };
      });
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    resizeHeight(textarea);
  }, []);
  const handleChange = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const target = e.currentTarget;
    if (!noReplaceNewlines) {
      const previousSelectionEnd = target.selectionEnd;
      // TDesktop replaces newlines with spaces as well
      target.value = target.value.replace(/\n/g, ' ');
      target.selectionEnd = previousSelectionEnd;
    }
    resizeHeight(target);
    onChange?.(e);
  }, [noReplaceNewlines, onChange]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: fullClassName,
    dir: lang.isRtl ? 'rtl' : undefined
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("textarea", {
    ref: textareaRef,
    className: "form-control",
    id: id,
    dir: "auto",
    value: value || '',
    tabIndex: tabIndex,
    placeholder: placeholder,
    maxLength: maxLength,
    autoComplete: autoComplete,
    inputMode: inputMode,
    disabled: disabled,
    readOnly: readOnly,
    onChange: handleChange,
    onInput: onInput,
    onKeyPress: onKeyPress,
    onKeyDown: onKeyDown,
    onBlur: onBlur,
    onPaste: onPaste,
    "aria-label": labelText
  }), labelText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", {
    htmlFor: id
  }, labelText), maxLengthIndicator && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "max-length-indicator"
  }, maxLengthIndicator));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TextArea));

/***/ }),

/***/ "./src/components/ui/TextTimer.tsx":
/*!*****************************************!*\
  !*** ./src/components/ui/TextTimer.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/schedulers/useInterval */ "./src/hooks/schedulers/useInterval.ts");
/* harmony import */ var _hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useForceUpdate */ "./src/hooks/useForceUpdate.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");






const UPDATE_FREQUENCY = 500; // Sometimes second gets skipped if using 1000

const TextTimer = ({
  langKey,
  endsAt,
  onEnd
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const forceUpdate = (0,_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const serverTime = (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_2__.getServerTime)();
  const isActive = serverTime < endsAt;
  (0,_hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_3__["default"])(forceUpdate, isActive ? UPDATE_FREQUENCY : undefined);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isActive) {
      onEnd?.();
    }
  }, [isActive, onEnd]);
  if (!isActive) return undefined;
  const timeLeft = endsAt - serverTime;
  const formattedTime = (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_1__.formatMediaDuration)(timeLeft);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, lang(langKey, formattedTime));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TextTimer));

/***/ }),

/***/ "./src/components/ui/Toggle.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/Toggle.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _Toggle_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggle.module.scss */ "./src/components/ui/Toggle.module.scss");



function Toggle({
  value
}) {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_Toggle_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, 'Toggle'),
    "aria-hidden": true
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_Toggle_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].filler, _Toggle_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][value])
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_Toggle_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].widget, _Toggle_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][value])
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Toggle));

/***/ }),

/***/ "./src/components/ui/placeholder/PlaceholderChatInfo.tsx":
/*!***************************************************************!*\
  !*** ./src/components/ui/placeholder/PlaceholderChatInfo.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceholderChatInfo.module.scss */ "./src/components/ui/placeholder/PlaceholderChatInfo.module.scss");



const PlaceholderChatInfo = () => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar, _PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].animated)
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title, _PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].animated)
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].subtitle, _PlaceholderChatInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].animated)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PlaceholderChatInfo));

/***/ }),

/***/ "./src/components/ui/placeholder/Skeleton.tsx":
/*!****************************************************!*\
  !*** ./src/components/ui/placeholder/Skeleton.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _Skeleton_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skeleton.scss */ "./src/components/ui/placeholder/Skeleton.scss");




const Skeleton = ({
  variant = 'rectangular',
  animation = 'wave',
  width,
  height,
  forceAspectRatio,
  inline,
  className
}) => {
  const classNames = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('Skeleton', variant, animation, className, inline && 'inline');
  const aspectRatio = width && height ? `aspect-ratio: ${width}/${height}` : undefined;
  const style = (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(forceAspectRatio && aspectRatio, Boolean(width) && `width: ${width}px`, !forceAspectRatio && Boolean(height) && `height: ${height}px`);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: classNames,
    style: style
  }, inline && '\u00A0');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);

/***/ }),

/***/ "./src/components/ui/AvatarEditable.scss":
/*!***********************************************!*\
  !*** ./src/components/ui/AvatarEditable.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/Badge.module.scss":
/*!*********************************************!*\
  !*** ./src/components/ui/Badge.module.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"Badge-module__root","default":"Badge-module__default","alternate":"Badge-module__alternate"});

/***/ }),

/***/ "./src/components/ui/CropModal.scss":
/*!******************************************!*\
  !*** ./src/components/ui/CropModal.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/Draggable.module.scss":
/*!*************************************************!*\
  !*** ./src/components/ui/Draggable.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"Draggable-module__container","isDragging":"Draggable-module__isDragging","knob":"Draggable-module__knob"});

/***/ }),

/***/ "./src/components/ui/FloatingActionButton.scss":
/*!*****************************************************!*\
  !*** ./src/components/ui/FloatingActionButton.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/ListItem.scss":
/*!*****************************************!*\
  !*** ./src/components/ui/ListItem.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/MenuSeparator.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/ui/MenuSeparator.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"MenuSeparator-module__root","thin":"MenuSeparator-module__thin","thick":"MenuSeparator-module__thick"});

/***/ }),

/***/ "./src/components/ui/Notification.scss":
/*!*********************************************!*\
  !*** ./src/components/ui/Notification.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/ProgressSpinner.scss":
/*!************************************************!*\
  !*** ./src/components/ui/ProgressSpinner.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/Radio.scss":
/*!**************************************!*\
  !*** ./src/components/ui/Radio.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/RangeSlider.scss":
/*!********************************************!*\
  !*** ./src/components/ui/RangeSlider.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/RangeSliderWithMarks.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ui/RangeSliderWithMarks.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dotWrapper":"RangeSliderWithMarks-module__dotWrapper","sliderContainer":"RangeSliderWithMarks-module__sliderContainer","marksContainer":"RangeSliderWithMarks-module__marksContainer","mark":"RangeSliderWithMarks-module__mark","active":"RangeSliderWithMarks-module__active","slider":"RangeSliderWithMarks-module__slider","tickMarks":"RangeSliderWithMarks-module__tickMarks","tick":"RangeSliderWithMarks-module__tick","filled":"RangeSliderWithMarks-module__filled","tickUnfilled":"RangeSliderWithMarks-module__tickUnfilled"});

/***/ }),

/***/ "./src/components/ui/RoundTimer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/ui/RoundTimer.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"RoundTimer-module__root","svg":"RoundTimer-module__svg","circle":"RoundTimer-module__circle"});

/***/ }),

/***/ "./src/components/ui/SearchInput.scss":
/*!********************************************!*\
  !*** ./src/components/ui/SearchInput.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/SelectAvatar.module.scss":
/*!****************************************************!*\
  !*** ./src/components/ui/SelectAvatar.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"input":"SelectAvatar-module__input"});

/***/ }),

/***/ "./src/components/ui/Separator.module.scss":
/*!*************************************************!*\
  !*** ./src/components/ui/Separator.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"separator":"Separator-module__separator"});

/***/ }),

/***/ "./src/components/ui/ShowMoreButton.scss":
/*!***********************************************!*\
  !*** ./src/components/ui/ShowMoreButton.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/Switcher.scss":
/*!*****************************************!*\
  !*** ./src/components/ui/Switcher.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/Tab.scss":
/*!************************************!*\
  !*** ./src/components/ui/Tab.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/TabList.scss":
/*!****************************************!*\
  !*** ./src/components/ui/TabList.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ui/Toggle.module.scss":
/*!**********************************************!*\
  !*** ./src/components/ui/Toggle.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"Toggle-module__root","widget":"Toggle-module__widget","min":"Toggle-module__min","mid":"Toggle-module__mid","max":"Toggle-module__max","filler":"Toggle-module__filler"});

/***/ }),

/***/ "./src/components/ui/placeholder/PlaceholderChatInfo.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/ui/placeholder/PlaceholderChatInfo.module.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PlaceholderChatInfo-module__root","avatar":"PlaceholderChatInfo-module__avatar","info":"PlaceholderChatInfo-module__info","title":"PlaceholderChatInfo-module__title","subtitle":"PlaceholderChatInfo-module__subtitle","animated":"PlaceholderChatInfo-module__animated","slide":"PlaceholderChatInfo-module__slide"});

/***/ }),

/***/ "./src/components/ui/placeholder/Skeleton.scss":
/*!*****************************************************!*\
  !*** ./src/components/ui/placeholder/Skeleton.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=shared-components.b3ca0b39efe2e4cb587f.js.map