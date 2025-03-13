"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_AnimatedCounter_tsx-src_components_common_MediaSpoiler_tsx-src_componen-ad09c2"],{

/***/ "./src/components/common/AnimatedCounter.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/AnimatedCounter.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useForceUpdate */ "./src/hooks/useForceUpdate.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");
/* harmony import */ var _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnimatedCounter.module.scss */ "./src/components/common/AnimatedCounter.module.scss");









const ANIMATION_TIME = 200;
const MAX_SIMULTANEOUS_ANIMATIONS = 10;
let scheduledAnimationsCounter = 0;
const resetCounterOnTickEnd = (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_4__.throttleWithTickEnd)(() => {
  scheduledAnimationsCounter = 0;
});
const AnimatedCounter = ({
  text,
  className,
  isDisabled,
  ref
}) => {
  const {
    isRtl
  } = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const prevText = (0,_hooks_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_7__["default"])(text);
  const forceUpdate = (0,_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const shouldAnimate = scheduleAnimation(!isDisabled && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)()) && prevText !== undefined && prevText !== text);
  const characters = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return shouldAnimate ? renderAnimatedCharacters(text, prevText) : text;
  }, [shouldAnimate, prevText, text]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!shouldAnimate) return undefined;
    const timeoutId = window.setTimeout(() => {
      forceUpdate();
    }, ANIMATION_TIME);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [shouldAnimate, text]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(className, !isDisabled && _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].root),
    dir: isRtl ? 'rtl' : undefined
  }, characters);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedCounter));
function scheduleAnimation(condition) {
  if (!condition || scheduledAnimationsCounter >= MAX_SIMULTANEOUS_ANIMATIONS) return false;
  if (scheduledAnimationsCounter === 0) {
    resetCounterOnTickEnd();
  }
  scheduledAnimationsCounter++;
  return true;
}
function renderAnimatedCharacters(text, prevText) {
  const elements = [];
  const textLength = text.length;
  const prevTextLength = prevText?.length ?? 0;
  for (let i = 0; i <= textLength; i++) {
    const charIndex = textLength - i;
    const prevTextCharIndex = prevTextLength - i;
    if (prevText && prevTextCharIndex >= 0 && text[charIndex] !== prevText[prevTextCharIndex]) {
      elements.unshift(/*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterContainer
      }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].character
      }, text[charIndex] ?? ''), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterOld
      }, prevText[prevTextCharIndex]), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _AnimatedCounter_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].characterNew
      }, text[charIndex] ?? '')));
    } else {
      elements.unshift(/*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, text[charIndex] ?? ''));
    }
  }
  return elements;
}

/***/ }),

/***/ "./src/components/common/AnimatedIconFromSticker.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedIconFromSticker.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _AnimatedIconWithPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedIconWithPreview */ "./src/components/common/AnimatedIconWithPreview.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }





function AnimatedIconFromSticker(props) {
  const {
    sticker,
    noLoad,
    forcePreview,
    ...otherProps
  } = props;
  const thumbDataUri = sticker?.thumbnail?.dataUri;
  const localMediaHash = sticker && `sticker${sticker.id}`;
  const previewBlobUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(sticker ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getStickerMediaHash)(sticker, 'preview') : undefined, noLoad && !forcePreview, _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMediaFormat.BlobUrl);
  const tgsUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(localMediaHash, noLoad);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedIconWithPreview__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    tgsUrl: tgsUrl,
    previewUrl: previewBlobUrl,
    thumbDataUri: thumbDataUri
    // eslint-disable-next-line react/jsx-props-no-spreading
  }, otherProps));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedIconFromSticker));

/***/ }),

/***/ "./src/components/common/AnimatedIconWithPreview.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedIconWithPreview.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useMediaTransitionDeprecated */ "./src/hooks/useMediaTransitionDeprecated.ts");
/* harmony import */ var _AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnimatedIcon */ "./src/components/common/AnimatedIcon.tsx");
/* harmony import */ var _AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimatedIconWithPreview.module.scss */ "./src/components/common/AnimatedIconWithPreview.module.scss");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }








const ANIMATION_DURATION = 300;
const loadedPreviewUrls = new Set();
function AnimatedIconWithPreview(props) {
  const {
    previewUrl,
    thumbDataUri,
    className,
    ...otherProps
  } = props;
  const [isThumbOpen,, unmarkThumbOpen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(Boolean(thumbDataUri));
  const thumbClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isThumbOpen);
  const [isPreviewOpen, markPreviewOpen, unmarkPreviewOpen] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(loadedPreviewUrls.has(previewUrl));
  const previewClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isPreviewOpen);
  const [isAnimationReady, markAnimationReady] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  const handlePreviewLoad = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    markPreviewOpen();
    loadedPreviewUrls.add(previewUrl);
  });
  const handleAnimationReady = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    unmarkThumbOpen();
    unmarkPreviewOpen();
    setTimeout(markAnimationReady, ANIMATION_DURATION);
  });
  const {
    size
  } = props;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(className, _AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(size !== undefined && `width: ${size}px; height: ${size}px;`)
  }, thumbDataUri && !isAnimationReady &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/alt-text
  _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: thumbDataUri,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].preview, thumbClassNames),
    draggable: false
  }), previewUrl && !isAnimationReady &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/alt-text
  _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: previewUrl,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_AnimatedIconWithPreview_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].preview, previewClassNames),
    draggable: false,
    onLoad: handlePreviewLoad
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AnimatedIcon__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, otherProps, {
    onLoad: handleAnimationReady
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(AnimatedIconWithPreview));

/***/ }),

/***/ "./src/components/common/MediaSpoiler.tsx":
/*!************************************************!*\
  !*** ./src/components/common/MediaSpoiler.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useCanvasBlur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useCanvasBlur */ "./src/hooks/useCanvasBlur.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaSpoiler.module.scss */ "./src/components/common/MediaSpoiler.module.scss");







const BLUR_RADIUS = 25;
const ANIMATION_DURATION = 500;
const MediaSpoiler = ({
  isVisible,
  withAnimation,
  thumbDataUri,
  className,
  width,
  height
}) => {
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    shouldRender,
    transitionClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isVisible, undefined, true, withAnimation ? false : undefined, undefined, ANIMATION_DURATION);
  const canvasRef = (0,_hooks_useCanvasBlur__WEBPACK_IMPORTED_MODULE_3__["default"])(thumbDataUri, !shouldRender, undefined, BLUR_RADIUS, width, height);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    if (!ref.current) return;
    const el = ref.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const shiftX = x - rect.width / 2;
    const shiftY = y - rect.height / 2;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      el.setAttribute('style', `--click-shift-x: ${shiftX}px; --click-shift-y: ${shiftY}px`);
    });
  });
  if (!shouldRender) {
    return undefined;
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, transitionClassNames, className, withAnimation && _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].maskAnimation),
    ref: ref,
    onClick: withAnimation ? handleClick : undefined
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("canvas", {
    ref: canvasRef,
    className: _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].canvas,
    width: width,
    height: height
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _MediaSpoiler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dots
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(MediaSpoiler));

/***/ }),

/***/ "./src/components/common/PremiumProgress.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/PremiumProgress.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PremiumProgress.module.scss */ "./src/components/common/PremiumProgress.module.scss");







const PremiumProgress = ({
  leftText,
  rightText,
  floatingBadgeText,
  floatingBadgeIcon,
  progress,
  isPrimary,
  className
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  // eslint-disable-next-line no-null/no-null
  const floatingBadgeRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const parentContainerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [shiftX, setShiftX] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [tailPosition, setTailPosition] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const updateBadgePosition = () => {
    if (floatingBadgeRef.current && parentContainerRef.current && progress !== undefined) {
      const badgeWidth = floatingBadgeRef.current.offsetWidth;
      const parentWidth = parentContainerRef.current.offsetWidth;
      const minShift = badgeWidth / 2;
      const maxShift = parentWidth - badgeWidth / 2;
      const currentShift = progress * parentWidth;
      const safeShift = Math.max(minShift, Math.min(currentShift, maxShift));
      setShiftX(safeShift / parentWidth);
      let newTailPosition;
      if (currentShift < minShift) {
        newTailPosition = progress * parentWidth / (minShift * 2);
      } else if (currentShift > maxShift) {
        const progressMapped = (progress - maxShift / parentWidth) / (1 - maxShift / parentWidth);
        newTailPosition = 0.5 + progressMapped * 0.4;
      } else {
        newTailPosition = 0.5;
      }
      setTailPosition(newTailPosition);
    }
  };
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(updateBadgePosition, [progress]);
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__["default"])(parentContainerRef, updateBadgePosition);
  const hasFloatingBadge = Boolean(floatingBadgeIcon || floatingBadgeText);
  const isProgressFull = Boolean(progress) && progress > 0.99;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: parentContainerRef,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, hasFloatingBadge && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].withBadge, isPrimary && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].primary, className),
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(progress !== undefined && `--progress: ${progress}`, tailPosition !== undefined && `--tail-position: ${tailPosition}`, `--shift-x: ${shiftX}`)
  }, hasFloatingBadge && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].badgeContainer
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadge,
    ref: floatingBadgeRef
  }, floatingBadgeIcon && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: floatingBadgeIcon,
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeIcon
  }), floatingBadgeText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeValue,
    dir: lang.isRtl ? 'rtl' : undefined
  }, floatingBadgeText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].floatingBadgeTriangle
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "m 28,4 v 9 c 0.0089,7.283278 -3.302215,5.319646 -6.750951,8.589815 l -5.8284,5.82843 c -0.781,0.78105 -2.0474,0.78104 -2.8284,0 L 6.7638083,21.589815 C 2.8288652,17.959047 0.04527024,20.332086 0,13 V 4 C 0,4 0.00150581,0.97697493 3,1 5.3786658,1.018266 22.594519,0.9142007 25,1 c 2.992326,0.1067311 3,3 3,3 z",
    fill: "#7E85FF"
  }))))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].left
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, leftText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].right
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, rightText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].progress, isProgressFull && _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].fullProgress)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].left
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, leftText)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PremiumProgress_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].right
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, rightText))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PremiumProgress));

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useUniqueId */ "./src/hooks/useUniqueId.ts");
/* harmony import */ var _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GiftRibbon.module.scss */ "./src/components/common/gift/GiftRibbon.module.scss");






const COLORS = {
  red: [['#FF5B54', '#ED1C26'], ['#653633', '#532224']],
  blue: [['#6ED2FF', '#34A4FC'], ['#344F5A', '#152E42']]
};
const COLOR_KEYS = new Set(Object.keys(COLORS));
const GiftRibbon = ({
  text,
  color,
  className,
  theme
}) => {
  const randomId = (0,_hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const validSvgRandomId = `svg-${randomId}`; // ID must start with a letter

  const colorKey = COLOR_KEYS.has(color) ? color : undefined;
  const isDarkTheme = theme === 'dark';
  const gradientColor = colorKey ? COLORS[colorKey][isDarkTheme ? 1 : 0] : undefined;
  const startColor = gradientColor ? gradientColor[0] : color;
  const endColor = gradientColor ? gradientColor[1] : color;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].ribbon,
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M52.4851 26.4853L29.5145 3.51472C27.2641 1.26428 24.2119 0 21.0293 0H2.82824C1.04643 0 0.154103 2.15429 1.41403 3.41422L52.5856 54.5858C53.8455 55.8457 55.9998 54.9534 55.9998 53.1716V34.9706C55.9998 31.788 54.7355 28.7357 52.4851 26.4853Z",
    fill: `url(#${validSvgRandomId})`
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("defs", null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("linearGradient", {
    id: validSvgRandomId,
    x1: "27.9998",
    y1: "1",
    x2: "27.9998",
    y2: "55",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    "stop-color": startColor
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    offset: "1",
    "stop-color": endColor
  })))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].text
  }, text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  return {
    theme: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTheme)(global)
  };
})(GiftRibbon)));

/***/ }),

/***/ "./src/components/common/helpers/sortChatIds.ts":
/*!******************************************************!*\
  !*** ./src/components/common/helpers/sortChatIds.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortChatIds)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");



const VERIFIED_PRIORITY_BASE = 3e9;
const PINNED_PRIORITY_BASE = 3e8;
function sortChatIds(chatIds, shouldPrioritizeVerified = false, priorityIds, currentUserId) {
  // Avoid calling sort on every global change
  const global = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobal)();
  return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.orderBy)(chatIds, id => {
    if (id === currentUserId) {
      return Infinity;
    }
    const chat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChat)(global, id);
    if (!chat) {
      return 0;
    }
    let priority = 0;
    const lastMessage = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_1__.selectChatLastMessage)(global, id);
    if (lastMessage) {
      priority += lastMessage.date;
    }
    if (shouldPrioritizeVerified && chat.isVerified) {
      priority += VERIFIED_PRIORITY_BASE; // ~100 years in seconds
    }
    if (priorityIds && priorityIds.includes(id)) {
      priority = Date.now() + PINNED_PRIORITY_BASE + (priorityIds.length - priorityIds.indexOf(id));
    }
    return priority;
  }, 'desc');
}

/***/ }),

/***/ "./src/components/common/pickers/PeerPicker.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/pickers/PeerPicker.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_memo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/memo */ "./src/util/memo.ts");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useInfiniteScroll */ "./src/hooks/useInfiniteScroll.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Checkbox */ "./src/components/ui/Checkbox.tsx");
/* harmony import */ var _ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/InfiniteScroll */ "./src/components/ui/InfiniteScroll.tsx");
/* harmony import */ var _ui_InputText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/InputText */ "./src/components/ui/InputText.tsx");
/* harmony import */ var _ui_Loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Loading */ "./src/components/ui/Loading.tsx");
/* harmony import */ var _ui_Radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/Radio */ "./src/components/ui/Radio.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _FullNameTitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PickerItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PickerItem */ "./src/components/common/pickers/PickerItem.tsx");
/* harmony import */ var _PickerSelectedItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PickerSelectedItem */ "./src/components/common/pickers/PickerSelectedItem.tsx");
/* harmony import */ var _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PickerStyles.module.scss */ "./src/components/common/pickers/PickerStyles.module.scss");
























// Focus slows down animation, also it breaks transition layout in Chrome
const FOCUS_DELAY_MS = 500;
const MAX_FULL_ITEMS = 10;
const ALWAYS_FULL_ITEMS_COUNT = 5;
const ITEM_CLASS_NAME = 'PeerPickerItem';
const PeerPicker = ({
  className,
  categories,
  itemIds,
  categoryPlaceholderKey,
  filterValue,
  filterPlaceholder,
  notFoundText,
  searchInputId,
  itemClassName,
  isLoading,
  noScrollRestore,
  isSearchable,
  lockedUnselectedSubtitle,
  forceShowSelf,
  isViewOnly,
  itemInputType,
  withStatus,
  withPeerTypes,
  withDefaultPadding,
  onFilterChange,
  onDisabledClick,
  onLoadMore,
  ...optionalProps
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const allowMultiple = optionalProps.allowMultiple;
  const lockedSelectedIds = allowMultiple ? optionalProps.lockedSelectedIds : undefined;
  const lockedUnselectedIds = allowMultiple ? optionalProps.lockedUnselectedIds : undefined;
  const selectedCategories = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (allowMultiple) {
      return optionalProps.selectedCategories;
    }
    return optionalProps.selectedCategory ? [optionalProps.selectedCategory] : _util_memo__WEBPACK_IMPORTED_MODULE_9__.MEMO_EMPTY_ARRAY;
  }, [allowMultiple, optionalProps.selectedCategory, optionalProps.selectedCategories]);
  const selectedIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (allowMultiple) {
      return optionalProps.selectedIds;
    }
    return optionalProps.selectedId ? [optionalProps.selectedId] : _util_memo__WEBPACK_IMPORTED_MODULE_9__.MEMO_EMPTY_ARRAY;
  }, [allowMultiple, optionalProps.selectedId, optionalProps.selectedIds]);

  // eslint-disable-next-line no-null/no-null
  const inputRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const shouldMinimize = selectedIds.length > MAX_FULL_ITEMS;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSearchable) return undefined;
    const timeoutId = window.setTimeout(() => {
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMeasure)(() => {
        inputRef.current?.focus();
      });
    }, FOCUS_DELAY_MS);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isSearchable]);
  const lockedSelectedIdsSet = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new Set(lockedSelectedIds), [lockedSelectedIds]);
  const lockedUnselectedIdsSet = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new Set(lockedUnselectedIds), [lockedUnselectedIds]);
  const unlockedSelectedIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return selectedIds.filter(id => !lockedSelectedIdsSet.has(id));
  }, [lockedSelectedIdsSet, selectedIds]);
  const categoriesByType = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!categories) return {};
    return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_8__.buildCollectionByKey)(categories, 'type');
  }, [categories]);
  const sortedItemIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (filterValue) {
      return itemIds;
    }
    const lockedSelectedBucket = [];
    const unlockedBucket = [];
    const lockedUnselectableBucket = [];
    itemIds.forEach(id => {
      if (lockedSelectedIdsSet.has(id)) {
        lockedSelectedBucket.push(id);
      } else if (lockedUnselectedIdsSet.has(id)) {
        lockedUnselectableBucket.push(id);
      } else {
        unlockedBucket.push(id);
      }
    });
    return lockedSelectedBucket.concat(unlockedBucket, lockedUnselectableBucket);
  }, [filterValue, itemIds, lockedSelectedIdsSet, lockedUnselectedIdsSet]);
  const handleItemClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(id => {
    if (lockedSelectedIdsSet.has(id)) {
      onDisabledClick?.(id, true);
      return;
    }
    if (lockedUnselectedIdsSet.has(id)) {
      onDisabledClick?.(id, false);
      return;
    }
    if (allowMultiple && categoriesByType[id]) {
      const categoryType = categoriesByType[id].type;
      const newSelectedCategories = selectedCategories?.slice() || [];
      if (newSelectedCategories.includes(categoryType)) {
        newSelectedCategories.splice(newSelectedCategories.indexOf(categoryType), 1);
      } else {
        newSelectedCategories.push(categoryType);
      }
      optionalProps.onSelectedCategoriesChange?.(newSelectedCategories);
      return;
    }
    if (allowMultiple) {
      const newSelectedIds = selectedIds.slice();
      if (newSelectedIds.includes(id)) {
        newSelectedIds.splice(newSelectedIds.indexOf(id), 1);
      } else {
        newSelectedIds.push(id);
      }
      optionalProps.onSelectedIdsChange?.(newSelectedIds);
      return;
    }
    if (categoriesByType[id]) {
      optionalProps.onSelectedCategoryChange?.(categoriesByType[id].type);
      return;
    }
    optionalProps.onSelectedIdChange?.(id);
  });
  const handleFilterChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(e => {
    const {
      value
    } = e.currentTarget;
    onFilterChange?.(value);
  });
  const [viewportIds, getMore] = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__["default"])(onLoadMore, sortedItemIds, Boolean(filterValue));
  const renderItem = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, isCategory) => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    const category = isCategory ? categoriesByType[id] : undefined;
    const peer = !isCategory ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectPeer)(global, id) : undefined;
    const peerOrCategory = peer || category;
    if (!peerOrCategory) {
      if (_config__WEBPACK_IMPORTED_MODULE_2__.DEBUG) return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        key: id
      }, "No peer or category with ID ", id);
      return undefined;
    }
    const isSelf = peer && !(0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.isApiPeerChat)(peer) ? peer.isSelf && !forceShowSelf : undefined;
    const isAlwaysUnselected = lockedUnselectedIdsSet.has(id);
    const isAlwaysSelected = lockedSelectedIdsSet.has(id);
    const isLocked = isAlwaysUnselected || isAlwaysSelected;
    const isChecked = category ? selectedCategories?.includes(category.type) : selectedIds.includes(id);
    function getInputElement() {
      if (isLocked) return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_20__["default"], {
        name: "lock-badge"
      });
      if (itemInputType === 'radio') {
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Radio__WEBPACK_IMPORTED_MODULE_17__["default"], {
          checked: isChecked,
          disabled: isLocked,
          onlyInput: true
        });
      }
      if (itemInputType === 'checkbox') {
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
          checked: isChecked,
          disabled: isLocked,
          onlyInput: true
        });
      }
      return undefined;
    }
    function getSubtitle() {
      if (isAlwaysUnselected) return [lockedUnselectedSubtitle];
      if (withStatus && peer) {
        if ((0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.isApiPeerChat)(peer)) {
          return [(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getGroupStatus)(lang, peer)];
        }
        const userStatus = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_6__.selectUserStatus)(global, peer.id);
        return [(0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getUserStatus)(lang, peer, userStatus), (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isUserOnline)(peer, userStatus, true) && _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].onlineStatus)];
      }
      if (withPeerTypes && peer) {
        const langKey = (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_5__.getPeerTypeKey)(peer);
        return langKey && [lang(langKey)];
      }
      return undefined;
    }
    const [subtitle, subtitleClassName] = getSubtitle() || [];
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PickerItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: id,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(ITEM_CLASS_NAME, itemClassName),
      title: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_FullNameTitle__WEBPACK_IMPORTED_MODULE_19__["default"], {
        peer: peerOrCategory
      }),
      avatarElement: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        peer: peer || category,
        isSavedMessages: isSelf,
        size: "medium"
      }),
      subtitle: subtitle,
      subtitleClassName: subtitleClassName,
      disabled: isLocked,
      inactive: isViewOnly,
      ripple: true,
      inputElement: getInputElement(),
      inputPosition: "end"
      // eslint-disable-next-line react/jsx-no-bind
      ,
      onClick: () => handleItemClick(id)
      // eslint-disable-next-line react/jsx-no-bind
      ,
      onDisabledClick: onDisabledClick && (() => onDisabledClick(id, isAlwaysSelected))
    });
  }, [categoriesByType, forceShowSelf, isViewOnly, itemClassName, itemInputType, lang, lockedSelectedIdsSet, lockedUnselectedIdsSet, lockedUnselectedSubtitle, onDisabledClick, selectedCategories, selectedIds, withPeerTypes, withStatus]);
  const beforeChildren = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!categories?.length) return undefined;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      key: "categories"
    }, categoryPlaceholderKey && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerCategoryTitle
    }, lang(categoryPlaceholderKey)), categories?.map(category => renderItem(category.type, true)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerCategoryTitle
    }, lang('FilterChats')));
  }, [categories, categoryPlaceholderKey, lang, renderItem]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].container, className)
  }, isSearchable && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].header, 'custom-scroll'),
    dir: lang.isRtl ? 'rtl' : undefined
  }, selectedCategories?.map(category => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PickerSelectedItem__WEBPACK_IMPORTED_MODULE_22__["default"], {
    customPeer: categoriesByType[category],
    onClick: handleItemClick,
    clickArg: category,
    canClose: true
  })), lockedSelectedIds?.map((id, i) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PickerSelectedItem__WEBPACK_IMPORTED_MODULE_22__["default"], {
    peerId: id,
    isMinimized: shouldMinimize && i < selectedIds.length - ALWAYS_FULL_ITEMS_COUNT,
    forceShowSelf: forceShowSelf,
    onClick: handleItemClick,
    clickArg: id
  })), unlockedSelectedIds.map((id, i) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PickerSelectedItem__WEBPACK_IMPORTED_MODULE_22__["default"], {
    peerId: id,
    isMinimized: shouldMinimize && i + (lockedSelectedIds?.length || 0) < selectedIds.length - ALWAYS_FULL_ITEMS_COUNT,
    canClose: true,
    onClick: handleItemClick,
    clickArg: id
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InputText__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: searchInputId,
    ref: inputRef,
    value: filterValue,
    onChange: handleFilterChange,
    placeholder: filterPlaceholder || lang('SelectChat')
  })), viewportIds?.length ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_7__["default"])(_PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].pickerList, withDefaultPadding && _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].padded, 'custom-scroll'),
    items: viewportIds,
    itemSelector: `.${ITEM_CLASS_NAME}`,
    beforeChildren: beforeChildren,
    onLoadMore: getMore,
    noScrollRestore: noScrollRestore
  }, viewportIds.map(id => renderItem(id))) : !isLoading && viewportIds && !viewportIds.length ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _PickerStyles_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].noResults
  }, notFoundText || 'Sorry, nothing found.') : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Loading__WEBPACK_IMPORTED_MODULE_16__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PeerPicker));

/***/ }),

/***/ "./src/components/common/pickers/PickerItem.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/pickers/PickerItem.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_RippleEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/RippleEffect */ "./src/components/ui/RippleEffect.tsx");
/* harmony import */ var _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PickerItem.module.scss */ "./src/components/common/pickers/PickerItem.module.scss");







const PickerItem = ({
  title,
  subtitle,
  avatarElement,
  inputElement,
  inputPosition = 'start',
  disabled,
  inactive,
  ripple,
  className,
  titleClassName,
  subtitleClassName,
  style,
  onClick,
  onDisabledClick
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const isClickable = !inactive && !disabled;
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (inactive) return;
    if (disabled) {
      onDisabledClick?.();
      return;
    }
    onClick?.();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, subtitle && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].multiline, disabled && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].disabled, isClickable && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].clickable, avatarElement && _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].withAvatar, className),
    onClick: handleClick,
    style: style,
    dir: lang.isRtl ? 'rtl' : undefined,
    role: isClickable ? 'button' : undefined
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    ,
    tabIndex: isClickable ? 0 : undefined
  }, !disabled && !inactive && ripple && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_RippleEffect__WEBPACK_IMPORTED_MODULE_5__["default"], null), inputElement && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].input, inputPosition === 'end' ? _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].endInput : _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].startInput)
  }, inputElement), avatarElement && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].avatarElement
  }, avatarElement), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title, titleClassName)
  }, title), subtitle && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle, subtitleClassName)
  }, subtitle), !inputElement && _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_2__.IS_IOS && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PickerItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].separator
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PickerItem);

/***/ }),

/***/ "./src/components/common/pickers/PickerSelectedItem.tsx":
/*!**************************************************************!*\
  !*** ./src/components/common/pickers/PickerSelectedItem.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _helpers_peerColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/peerColor */ "./src/components/common/helpers/peerColor.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _FullNameTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PickerSelectedItem_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PickerSelectedItem.scss */ "./src/components/common/pickers/PickerSelectedItem.scss");











// eslint-disable-next-line @typescript-eslint/comma-dangle
const PickerSelectedItem = ({
  icon,
  title,
  isMinimized,
  canClose,
  clickArg,
  peer,
  mockPeer,
  customPeer,
  className,
  fluid,
  isSavedMessages,
  withPeerColors,
  onClick
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const apiPeer = mockPeer || peer;
  const anyPeer = customPeer || apiPeer;
  const chat = apiPeer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__.isApiPeerChat)(apiPeer) ? apiPeer : undefined;
  let iconElement;
  let titleText;
  if (icon && title) {
    iconElement = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "item-icon"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: icon
    }));
    titleText = title;
  } else if (anyPeer) {
    iconElement = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      peer: anyPeer,
      size: "small",
      isSavedMessages: isSavedMessages
    });
    titleText = title || /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_FullNameTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      peer: anyPeer,
      isSavedMessages: isSavedMessages,
      withEmojiStatus: true
    });
  }
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('PickerSelectedItem', className, (chat?.isForum || customPeer?.isAvatarSquare) && 'square-avatar', isMinimized && 'minimized', canClose && 'closeable', fluid && 'fluid', withPeerColors && (0,_helpers_peerColor__WEBPACK_IMPORTED_MODULE_5__.getPeerColorClass)(customPeer || peer));
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: fullClassName,
    onClick: () => onClick?.(clickArg),
    title: isMinimized ? titleText : undefined,
    dir: lang.isRtl ? 'rtl' : undefined
  }, iconElement, !isMinimized && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "item-name",
    dir: "auto"
  }, titleText), canClose && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "item-remove"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "close"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  peerId,
  forceShowSelf
}) => {
  if (!peerId) {
    return {};
  }
  const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, peerId);
  const user = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, peerId);
  const isSavedMessages = !forceShowSelf && user && user.isSelf;
  return {
    peer,
    isSavedMessages
  };
})(PickerSelectedItem)));

/***/ }),

/***/ "./src/components/middle/ActionMessage.tsx":
/*!*************************************************!*\
  !*** ./src/components/middle/ActionMessage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_replies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/helpers/replies */ "./src/global/helpers/replies.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderActionMessageText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/helpers/renderActionMessageText */ "./src/components/common/helpers/renderActionMessageText.tsx");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/preventMessageInputBlur */ "./src/components/middle/helpers/preventMessageInputBlur.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useEnsureMessage */ "./src/hooks/useEnsureMessage.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useShowTransitionDeprecated */ "./src/hooks/useShowTransitionDeprecated.ts");
/* harmony import */ var _message_hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/hooks/useFocusMessage */ "./src/components/middle/message/hooks/useFocusMessage.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _ActionMessageSuggestedAvatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ActionMessageSuggestedAvatar */ "./src/components/middle/ActionMessageSuggestedAvatar.tsx");
/* harmony import */ var _message_ContextMenuContainer_async__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./message/ContextMenuContainer.async */ "./src/components/middle/message/ContextMenuContainer.async.tsx");
/* harmony import */ var _message_SimilarChannels__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./message/SimilarChannels */ "./src/components/middle/message/SimilarChannels.tsx");


























const APPEARANCE_DELAY = 10;
const STAR_GIFT_STICKER_SIZE = 120;
const ActionMessage = ({
  message,
  isEmbedded,
  appearanceOrder = 0,
  isJustAdded,
  isLastInList,
  senderUser,
  senderChat,
  targetUserIds,
  targetMessage,
  targetChatId,
  targetChat,
  isFocused,
  focusDirection,
  noFocusHighlight,
  premiumGiftSticker,
  starGiftSticker,
  starsGiftSticker,
  isInsideTopic,
  topic,
  memoFirstUnreadIdRef,
  canPlayAnimatedEmojis,
  patternColor,
  observeIntersectionForReading,
  observeIntersectionForLoading,
  observeIntersectionForPlaying,
  onIntersectPinnedMessage
}) => {
  const {
    openPremiumModal,
    requestConfetti,
    checkGiftCode,
    getReceipt,
    openGiftInfoModalFromMessage,
    openPrizeStarsTransactionFromGiveaway
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_15__["default"])();

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_14__.useOnIntersect)(ref, observeIntersectionForReading);
  (0,_hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_12__["default"])(message.chatId, message.replyInfo?.type === 'message' ? message.replyInfo.replyToMsgId : undefined, targetMessage);
  (0,_message_hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_18__["default"])(ref, message.chatId, isFocused, focusDirection, noFocusHighlight, isJustAdded);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useUnmountCleanup)(() => {
    if (message.isPinned) {
      onIntersectPinnedMessage?.({
        viewportPinnedIdsToRemove: [message.id]
      });
    }
  });
  const noAppearanceAnimation = appearanceOrder <= 0;
  const [isShown, markShown] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_13__["default"])(noAppearanceAnimation);
  const isPremiumGift = message.content.action?.type === 'giftPremium';
  const isGiftCode = message.content.action?.type === 'giftCode';
  const isSuggestedAvatar = message.content.action?.type === 'suggestProfilePhoto' && message.content.action.photo;
  const isJoinedMessage = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isJoinedChannelMessage)(message);
  const isStarsGift = message.content.action?.type === 'giftStars';
  const isStarGift = message.content.action?.type === 'starGift';
  const isPrizeStars = message.content.action?.type === 'prizeStars';
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (noAppearanceAnimation) {
      return;
    }
    setTimeout(markShown, appearanceOrder * APPEARANCE_DELAY);
  }, [appearanceOrder, markShown, noAppearanceAnimation]);
  const isVisible = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_14__.useIsIntersecting)(ref, observeIntersectionForPlaying);
  const shouldShowConfettiRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)((() => {
    const isUnread = memoFirstUnreadIdRef?.current && message.id >= memoFirstUnreadIdRef.current;
    return isPremiumGift && !message.isOutgoing && isUnread;
  })());
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isVisible && shouldShowConfettiRef.current) {
      shouldShowConfettiRef.current = false;
      requestConfetti({
        withStars: true
      });
    }
  }, [isVisible, requestConfetti]);
  const {
    transitionClassNames
  } = (0,_hooks_useShowTransitionDeprecated__WEBPACK_IMPORTED_MODULE_17__["default"])(isShown, undefined, noAppearanceAnimation, false);

  // No need for expensive global updates on users and chats, so we avoid them
  const usersById = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().users.byId;
  const targetUsers = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return targetUserIds ? targetUserIds.map(userId => usersById?.[userId]).filter(Boolean) : undefined;
  }, [targetUserIds, usersById]);
  const renderContent = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return (0,_common_helpers_renderActionMessageText__WEBPACK_IMPORTED_MODULE_7__.renderActionMessageText)(oldLang, message, senderUser, senderChat, targetUsers, targetMessage, targetChatId, topic, {
      isEmbedded
    }, observeIntersectionForLoading, observeIntersectionForPlaying);
  }, [isEmbedded, message, observeIntersectionForLoading, observeIntersectionForPlaying, oldLang, senderChat, senderUser, targetChatId, targetMessage, targetUsers, topic]);
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_11__["default"])(ref);
  const isContextMenuShown = contextMenuAnchor !== undefined;
  const handleMouseDown = e => {
    (0,_helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_10__.preventMessageInputBlur)(e);
    handleBeforeContextMenu(e);
  };
  const handleStarGiftClick = () => {
    openGiftInfoModalFromMessage({
      chatId: message.chatId,
      messageId: message.id
    });
  };
  const handlePremiumGiftClick = () => {
    openPremiumModal({
      isGift: true,
      fromUserId: senderUser?.id,
      toUserId: targetUserIds?.[0],
      monthsAmount: message.content.action?.months || 0
    });
  };
  const handlePrizeStarsClick = () => {
    openPrizeStarsTransactionFromGiveaway({
      chatId: message.chatId,
      messageId: message.id
    });
  };
  const handleGiftCodeClick = () => {
    const slug = message.content.action?.slug;
    if (!slug) return;
    checkGiftCode({
      slug,
      message: {
        chatId: message.chatId,
        messageId: message.id
      }
    });
  };
  const handleClick = () => {
    if (message.content.action?.type === 'receipt') {
      getReceipt({
        chatId: message.chatId,
        messageId: message.id
      });
    }
  };

  // TODO Refactoring for action rendering
  const shouldSkipRender = isInsideTopic && message.content.action?.text === 'TopicWasCreatedAction';
  if (shouldSkipRender) {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      ref: ref
    });
  }
  if (isEmbedded) {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      ref: ref,
      className: "embedded-action-message"
    }, renderContent());
  }
  function renderGift() {
    const giftMessage = message.content.action?.message;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift",
      tabIndex: 0,
      role: "button",
      onClick: handlePremiumGiftClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: message.id,
      sticker: premiumGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang('ActionGiftPremiumTitle')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, oldLang('ActionGiftPremiumSubtitle', oldLang('Months', message.content.action?.months, 'i'))), giftMessage && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-gift-subtitle"
    }, (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_9__.renderTextWithEntities)({
      text: giftMessage.text,
      entities: giftMessage.entities
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_22__["default"], {
      preset: "button"
    }), oldLang('ActionGiftPremiumView')));
  }
  function renderGiftCode() {
    const isFromGiveaway = message.content.action?.isGiveaway;
    const isUnclaimed = message.content.action?.isUnclaimed;
    const giftMessage = message.content.action?.message;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-gift-code",
      tabIndex: 0,
      role: "button",
      onClick: handleGiftCodeClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: message.id,
      sticker: premiumGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang(isUnclaimed ? 'BoostingUnclaimedPrize' : 'BoostingCongratulations')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, targetChat && (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__["default"])(oldLang(isFromGiveaway ? 'BoostingReceivedGiftFrom' : isUnclaimed ? 'BoostingReceivedPrizeFrom' : 'BoostingYouHaveUnclaimedPrize', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, targetChat)), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__["default"])(oldLang('BoostingUnclaimedPrizeDuration', oldLang('Months', message.content.action?.months, 'i')), ['simple_markdown'])), giftMessage && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-gift-subtitle"
    }, (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_9__.renderTextWithEntities)({
      text: giftMessage.text,
      entities: giftMessage.entities
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, oldLang('BoostingReceivedGiftOpenBtn')));
  }
  function renderStarsGift() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-gift-code",
      tabIndex: 0,
      role: "button",
      onClick: handleStarGiftClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: message.id,
      sticker: starsGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-stars-balance"
    }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(message.content.action.stars), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang('Stars'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-stars-subtitle"
    }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__["default"])(oldLang(!message.isOutgoing ? 'ActionGiftStarsSubtitleYou' : 'ActionGiftStarsSubtitle', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, targetChat)), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_22__["default"], {
      preset: "button"
    }), oldLang('ActionGiftPremiumView')));
  }
  function renderStarGiftUserCaption() {
    const targetUser = targetUsers && targetUsers[0];
    if (!targetUser || !senderUser) return undefined;
    if (message.isOutgoing) {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "action-message-user-caption"
      }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", lang('GiftTo'), " "), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: "action-message-user-avatar",
        size: "micro",
        peer: targetChat
      }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", targetUser.firstName, " "));
    }
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-user-caption"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", lang('GiftFrom'), " "), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: "action-message-user-avatar",
      size: "micro",
      peer: senderUser
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, " ", senderUser.firstName, " "));
  }
  function renderStarGiftUserDescription() {
    const starGift = message.content.action?.starGift;
    const targetUser = targetUsers && targetUsers[0]?.firstName;
    const starGiftMessage = message.content.action?.starGift?.message;
    if (!starGift) return undefined;
    if (starGiftMessage) {
      return (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_9__.renderTextWithEntities)({
        text: starGiftMessage.text,
        entities: starGiftMessage.entities
      });
    }
    const amount = starGift?.starsToConvert;
    if (message.isOutgoing) {
      return lang('ActionStarGiftOutDescription', {
        user: targetUser || 'User',
        count: amount
      }, {
        withNodes: true
      });
    }
    if (starGift.isSaved) {
      return lang('ActionStarGiftDisplaying');
    }
    if (starGift.isConverted) {
      return message.isOutgoing ? lang('GiftInfoDescriptionOutConverted', {
        amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(amount),
        user: targetUser || 'User'
      }, {
        pluralValue: amount,
        withNodes: true,
        withMarkdown: true
      }) : lang('GiftInfoDescriptionConverted', {
        amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(amount)
      }, {
        pluralValue: amount,
        withNodes: true,
        withMarkdown: true
      });
    }
    return lang('ActionStarGiftDescription', {
      count: amount
    }, {
      withNodes: true
    });
  }
  function renderStarGift() {
    const starGift = message.content.action?.starGift;
    if (!starGift) return undefined;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-gift-code action-message-star-gift",
      tabIndex: 0,
      role: "button",
      onClick: handleStarGiftClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sticker: starGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true,
      size: STAR_GIFT_STICKER_SIZE
    }), renderStarGiftUserCaption(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-gift-subtitle"
    }, renderStarGiftUserDescription()), !message.isOutgoing && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: "action-message-button"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_22__["default"], {
      preset: "button"
    }), oldLang('ActionGiftPremiumView')), starGift.gift.availabilityTotal && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_21__["default"], {
      color: patternColor || 'blue',
      text: oldLang('Gift2Limited1OfRibbon', (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatIntegerCompact)(starGift.gift.availabilityTotal))
    }));
  }
  function renderPrizeStars() {
    const isUnclaimed = message.content.action?.isUnclaimed;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-gift action-message-gift-code",
      tabIndex: 0,
      role: "button",
      onClick: handlePrizeStarsClick
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: message.id,
      sticker: starGiftSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, oldLang(isUnclaimed ? 'BoostingUnclaimedPrize' : 'BoostingCongratulations')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, targetChat && (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__["default"])(oldLang(isUnclaimed ? 'BoostingReceivedPrizeFrom' : 'BoostingYouHaveUnclaimedPrize', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, targetChat)), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-subtitle"
    }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__["default"])(lang('PrizeCredits', {
      count: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(message.content.action?.stars))
    }, {
      withNodes: true
    }), ['simple_markdown'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "action-message-button"
    }, oldLang('ActionGiftPremiumView')));
  }
  const className = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])('ActionMessage message-list-item', isFocused && !noFocusHighlight && 'focused', (isPremiumGift || isSuggestedAvatar) && 'centered-action', isContextMenuShown && 'has-menu-open', isLastInList && 'last-in-list', transitionClassNames);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    id: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getMessageHtmlId)(message.id),
    className: className,
    "data-message-id": message.id,
    "data-is-pinned": message.isPinned || undefined,
    onMouseDown: handleMouseDown,
    onContextMenu: handleContextMenu
  }, !isSuggestedAvatar && !isGiftCode && !isJoinedMessage && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "action-message-content",
    onClick: handleClick
  }, renderContent()), isPremiumGift && renderGift(), isGiftCode && renderGiftCode(), isStarsGift && renderStarsGift(), isStarGift && renderStarGift(), isPrizeStars && renderPrizeStars(), isSuggestedAvatar && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ActionMessageSuggestedAvatar__WEBPACK_IMPORTED_MODULE_23__["default"], {
    message: message,
    renderContent: renderContent
  }), isJoinedMessage && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_message_SimilarChannels__WEBPACK_IMPORTED_MODULE_25__["default"], {
    chatId: targetChatId
  }), contextMenuAnchor && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_message_ContextMenuContainer_async__WEBPACK_IMPORTED_MODULE_24__["default"], {
    isOpen: isContextMenuOpen,
    anchor: contextMenuAnchor,
    message: message,
    messageListType: "thread",
    onClose: handleContextMenuClose,
    onCloseAnimationEnd: handleContextMenuHide
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  threadId
}) => {
  const {
    chatId,
    senderId,
    content
  } = message;
  const {
    targetUserIds,
    targetChatId
  } = content.action || {};
  const targetMessageId = (0,_global_helpers_replies__WEBPACK_IMPORTED_MODULE_3__.getMessageReplyInfo)(message)?.replyToMsgId;
  const targetMessage = targetMessageId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChatMessage)(global, chatId, targetMessageId) : undefined;
  const theme = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTheme)(global);
  const {
    patternColor
  } = global.settings.themes[theme] || {};
  const isFocused = threadId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsMessageFocused)(global, message, threadId) : false;
  const {
    direction: focusDirection,
    noHighlight: noFocusHighlight
  } = isFocused && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTabState)(global).focusedMessage || {};
  const senderUser = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, senderId || chatId);
  const senderChat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, chatId);
  const targetChat = targetChatId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, targetChatId) : undefined;
  const giftDuration = content.action?.months;
  const premiumGiftSticker = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectGiftStickerForDuration)(global, giftDuration);
  const starGift = content.action?.type === 'starGift' ? content.action.starGift?.gift : undefined;
  const starCount = content.action?.stars;
  const starGiftSticker = starGift?.stickerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectStarGiftSticker)(global, starGift.stickerId) : undefined;
  const starsGiftSticker = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectGiftStickerForStars)(global, starCount);
  const topic = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTopicFromMessage)(global, message);
  return {
    senderUser,
    senderChat,
    targetChat,
    targetChatId,
    targetUserIds,
    targetMessage,
    isFocused,
    premiumGiftSticker,
    starGiftSticker,
    starsGiftSticker,
    topic,
    patternColor,
    canPlayAnimatedEmojis: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCanPlayAnimatedEmojis)(global),
    ...(isFocused && {
      focusDirection,
      noFocusHighlight
    })
  };
})(ActionMessage)));

/***/ }),

/***/ "./src/components/middle/ActionMessageSuggestedAvatar.tsx":
/*!****************************************************************!*\
  !*** ./src/components/middle/ActionMessageSuggestedAvatar.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./src/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/files */ "./src/util/files.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _ui_CropModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/CropModal */ "./src/components/ui/CropModal.tsx");













const ActionMessageSuggestedAvatar = ({
  message,
  renderContent
}) => {
  const {
    openMediaViewer,
    uploadProfilePhoto,
    showNotification
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    isOutgoing
  } = message;
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [cropModalBlob, setCropModalBlob] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isVideoModalOpen, openVideoModal, closeVideoModal] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__["default"])(false);
  const photo = message.content.action.photo;
  const suggestedPhotoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getPhotoMediaHash)(photo, 'full'));
  const suggestedVideoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getVideoProfilePhotoMediaHash)(photo));
  const isVideo = message.content.action.photo?.isVideo;
  const showAvatarNotification = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    showNotification({
      title: lang('ApplyAvatarHintTitle'),
      message: lang('ApplyAvatarHint'),
      action: {
        action: 'requestNextSettingsScreen',
        payload: {
          screen: _types__WEBPACK_IMPORTED_MODULE_3__.SettingsScreens.Main
        }
      },
      actionText: lang('Open')
    });
  });
  const handleSetSuggestedAvatar = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(file => {
    setCropModalBlob(undefined);
    uploadProfilePhoto({
      file
    });
    showAvatarNotification();
  });
  const handleCloseCropModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    setCropModalBlob(undefined);
  });
  const handleSetVideo = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    if (!suggestedVideoUrl) return;
    closeVideoModal();
    showAvatarNotification();

    // TODO Once we support uploading video avatars, add crop/trim modal here
    const blob = await (0,_util_files__WEBPACK_IMPORTED_MODULE_5__.fetchBlob)(suggestedVideoUrl);
    uploadProfilePhoto({
      file: new File([blob], 'avatar.mp4'),
      isVideo: true,
      videoTs: photo.videoSizes?.find(l => l.videoStartTs !== undefined)?.videoStartTs
    });
  });
  const handleViewSuggestedAvatar = async () => {
    if (!isOutgoing && suggestedPhotoUrl) {
      if (isVideo) {
        openVideoModal();
      } else {
        setCropModalBlob(await (0,_util_files__WEBPACK_IMPORTED_MODULE_5__.fetchBlob)(suggestedPhotoUrl));
      }
    } else {
      openMediaViewer({
        chatId: message.chatId,
        messageId: message.id,
        threadId: _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID,
        origin: _types__WEBPACK_IMPORTED_MODULE_3__.MediaViewerOrigin.SuggestedAvatar
      });
    }
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "action-message-suggested-avatar",
    tabIndex: 0,
    role: "button",
    onClick: handleViewSuggestedAvatar
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    photo: message.content.action.photo,
    loopIndefinitely: true,
    withVideo: isVideo,
    size: "jumbo"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, renderContent()), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "action-message-button"
  }, lang(isVideo ? 'ViewVideoAction' : 'ViewPhotoAction')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_CropModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    file: cropModalBlob,
    onClose: handleCloseCropModal,
    onChange: handleSetSuggestedAvatar
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isOpen: isVideoModalOpen,
    title: lang('SuggestedVideo'),
    confirmHandler: handleSetVideo,
    onClose: closeVideoModal,
    textParts: renderContent()
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ActionMessageSuggestedAvatar));

/***/ }),

/***/ "./src/components/middle/message/ContextMenuContainer.async.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/middle/message/ContextMenuContainer.async.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_moduleLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/moduleLoader */ "./src/util/moduleLoader.ts");
/* harmony import */ var _hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useModuleLoader */ "./src/hooks/useModuleLoader.ts");



const ContextMenuContainerAsync = props => {
  const {
    isOpen
  } = props;
  const ContextMenuContainer = (0,_hooks_useModuleLoader__WEBPACK_IMPORTED_MODULE_2__["default"])(_util_moduleLoader__WEBPACK_IMPORTED_MODULE_1__.Bundles.Extra, 'ContextMenuContainer', !isOpen);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return ContextMenuContainer ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(ContextMenuContainer, props) : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenuContainerAsync);

/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.tsx":
/*!***********************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/schedulers/useTimeout */ "./src/hooks/schedulers/useTimeout.ts");
/* harmony import */ var _hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useAverageColor */ "./src/hooks/useAverageColor.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useHorizontalScroll */ "./src/hooks/useHorizontalScroll.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SimilarChannels.module.scss */ "./src/components/middle/message/SimilarChannels.module.scss");
















const DEFAULT_BADGE_COLOR = '#3C3C4399';
const SHOW_CHANNELS_NUMBER = 10;
const MIN_SKELETON_DELAY = 300;
const MAX_SKELETON_DELAY = 2000;
const SimilarChannels = ({
  chatId,
  similarChannelIds,
  shouldShowInChat,
  count,
  isCurrentUserPremium
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    toggleChannelRecommendations,
    loadChannelRecommendations
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [isShowing, markShowing, markNotShowing] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])(false);
  const [isHiding, markHiding, markNotHiding] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])(false);
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const similarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!similarChannelIds) {
      return undefined;
    }
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return similarChannelIds.map(id => (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectChat)(global, id)).filter(Boolean);
  }, [similarChannelIds]);
  // Show skeleton while loading similar channels
  const [shoulRenderSkeleton, setShoulRenderSkeleton] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(!similarChannelIds);
  const firstSimilarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => similarChannels?.slice(0, SHOW_CHANNELS_NUMBER), [similarChannels]);
  const areSimilarChannelsPresent = Boolean(firstSimilarChannels?.length);
  (0,_hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_8__["default"])(ref, !areSimilarChannelsPresent || !shouldShowInChat || shoulRenderSkeleton, true);
  const isAnimating = isHiding || isShowing;
  const shouldRenderChannels = Boolean(!shoulRenderSkeleton && (shouldShowInChat || isAnimating) && areSimilarChannelsPresent);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!similarChannelIds) {
      loadChannelRecommendations({
        chatId
      });
    }
  }, [chatId, similarChannelIds]);
  (0,_hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_5__["default"])(() => setShoulRenderSkeleton(false), MAX_SKELETON_DELAY);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shoulRenderSkeleton && similarChannels && shouldShowInChat) {
      const id = setTimeout(() => {
        setShoulRenderSkeleton(false);
      }, MIN_SKELETON_DELAY);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [similarChannels, shouldShowInChat, shoulRenderSkeleton]);
  const handleToggle = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    toggleChannelRecommendations({
      chatId
    });
    if (shouldShowInChat) {
      markNotShowing();
      markHiding();
    } else {
      markShowing();
      markNotHiding();
    }
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].root)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "join-text"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(areSimilarChannelsPresent && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].joinText),
    onClick: areSimilarChannelsPresent ? handleToggle : undefined
  }, lang('ChannelJoined'))), shoulRenderSkeleton && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].skeleton
  }), shouldRenderChannels && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(isShowing && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].isAppearing, isHiding && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].isHiding)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].notch
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "19",
    height: "7",
    viewBox: "0 0 19 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].notchPath,
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19 7C16.8992 7 13.59 3.88897 11.5003 1.67424C10.7648 0.894688 10.397 0.50491 10.0434 0.385149C9.70568 0.270811 9.4225 0.270474 9.08456 0.38401C8.73059 0.50293 8.36133 0.892443 7.62279 1.67147C5.52303 3.88637 2.18302 7 0 7L19 7Z",
    fill: "white"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].inner
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].header
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].title
  }, lang('SimilarChannels')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].close,
    color: "translucent",
    onClick: handleToggle
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "close"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].channelList, 'no-scrollbar')
  }, firstSimilarChannels?.map((channel, i) => {
    return i === SHOW_CHANNELS_NUMBER - 1 ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(MoreChannels, {
      channel: channel,
      chatId: chatId,
      channelsCount: count - SHOW_CHANNELS_NUMBER + 1,
      isCurrentUserPremium: isCurrentUserPremium
    }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(SimilarChannel, {
      channel: channel
    });
  })))));
};
function SimilarChannel({
  channel
}) {
  const {
    openChat
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const color = (0,_hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_6__["default"])(channel, DEFAULT_BADGE_COLOR);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].item,
    onClick: () => openChat({
      id: channel.id
    })
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].avatar,
    key: channel.id,
    size: "large",
    peer: channel
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    style: `background: ${color}`,
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].badge
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].icon, 'icon icon-user-filled')
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].membersCount
  }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_4__.formatIntegerCompact)(channel?.membersCount || 0))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].channelTitle
  }, channel.title));
}
function MoreChannels({
  channel,
  chatId,
  channelsCount,
  isCurrentUserPremium
}) {
  const {
    openPremiumModal,
    openChatWithInfo
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const handleClickMore = () => {
    if (isCurrentUserPremium) {
      openChatWithInfo({
        id: chatId,
        shouldReplaceHistory: true,
        profileTab: 'similarChannels',
        forceScrollProfileTab: true
      });
    } else {
      openPremiumModal();
    }
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].item, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].lastItem),
    onClick: () => handleClickMore()
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].avatar,
    key: channel.id,
    size: "large",
    peer: channel
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatar
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatarInner
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatar, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].lastFakeAvatar)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fakeAvatarInner
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].badge
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].membersCount
  }, `+${channelsCount}`), !isCurrentUserPremium && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "lock-badge",
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].icon
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].channelTitle
  }, lang('MoreSimilar')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  chatId
}) => {
  const {
    similarChannelIds,
    shouldShowInChat,
    count
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSimilarChannelIds)(global, chatId) || {};
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsCurrentUserPremium)(global);
  return {
    similarChannelIds,
    shouldShowInChat,
    count,
    isCurrentUserPremium
  };
})(SimilarChannels)));

/***/ }),

/***/ "./src/components/middle/message/hooks/useFocusMessage.ts":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/hooks/useFocusMessage.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFocusMessage)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/teact/teact-dom */ "./src/lib/teact/teact-dom.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_animateScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/animateScroll */ "./src/util/animateScroll.ts");






// This is used when the viewport was replaced.
const BOTTOM_FOCUS_OFFSET = 500;
const RELOCATED_FOCUS_OFFSET = _config__WEBPACK_IMPORTED_MODULE_2__.SCROLL_MAX_DISTANCE;
const FOCUS_MARGIN = 20;
function useFocusMessage(elementRef, chatId, isFocused, focusDirection, noFocusHighlight, isResizingContainer, isJustAdded, isQuote, scrollTargetPosition) {
  const isRelocatedRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(!isJustAdded);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const isRelocated = isRelocatedRef.current;
    isRelocatedRef.current = false;
    if (isFocused && elementRef.current) {
      const messagesContainer = elementRef.current.closest('.MessageList');
      // `noFocusHighlight` is always called with “scroll-to-bottom” buttons
      const isToBottom = noFocusHighlight;
      const scrollPosition = scrollTargetPosition || isToBottom ? 'end' : 'centerOrTop';
      const exec = () => {
        const result = (0,_util_animateScroll__WEBPACK_IMPORTED_MODULE_4__["default"])(messagesContainer, elementRef.current, scrollPosition, FOCUS_MARGIN, focusDirection !== undefined ? isToBottom ? BOTTOM_FOCUS_OFFSET : RELOCATED_FOCUS_OFFSET : undefined, focusDirection, undefined, isResizingContainer, true);
        if (isQuote) {
          const firstQuote = elementRef.current.querySelector('.is-quote');
          if (firstQuote) {
            (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMutation)(() => {
              (0,_lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__.addExtraClass)(firstQuote, 'animate');
            });
          }
        }
        return result;
      };
      if (isRelocated) {
        // We need this to override scroll setting from Message List layout effect
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestForcedReflow)(exec);
      } else {
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMeasure)(() => {
          (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_3__.requestMutation)(exec());
        });
      }
    }
  }, [elementRef, chatId, isFocused, focusDirection, noFocusHighlight, isResizingContainer, isQuote, scrollTargetPosition]);
}

/***/ }),

/***/ "./src/global/helpers/payments.ts":
/*!****************************************!*\
  !*** ./src/global/helpers/payments.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildStarsTransactionCustomPeer: () => (/* binding */ buildStarsTransactionCustomPeer),
/* harmony export */   formatStarsAmount: () => (/* binding */ formatStarsAmount),
/* harmony export */   formatStarsTransactionAmount: () => (/* binding */ formatStarsTransactionAmount),
/* harmony export */   getPrizeStarsTransactionFromGiveaway: () => (/* binding */ getPrizeStarsTransactionFromGiveaway),
/* harmony export */   getRequestInputInvoice: () => (/* binding */ getRequestInputInvoice),
/* harmony export */   getStarsTransactionFromGift: () => (/* binding */ getStarsTransactionFromGift)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selectors */ "./src/global/selectors/index.ts");

function getRequestInputInvoice(global, inputInvoice) {
  if (inputInvoice.type === 'slug') return inputInvoice;
  if (inputInvoice.type === 'stargift') {
    const {
      userId,
      shouldHideName,
      giftId,
      message
    } = inputInvoice;
    const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectUser)(global, userId);
    if (!user) return undefined;
    return {
      type: 'stargift',
      user,
      shouldHideName,
      giftId,
      message
    };
  }
  if (inputInvoice.type === 'starsgift') {
    const {
      userId,
      stars,
      amount,
      currency
    } = inputInvoice;
    const user = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectUser)(global, userId);
    if (!user) return undefined;
    return {
      type: 'stars',
      purpose: {
        type: 'starsgift',
        user,
        stars,
        amount,
        currency
      }
    };
  }
  if (inputInvoice.type === 'stars') {
    const {
      stars,
      amount,
      currency
    } = inputInvoice;
    return {
      type: 'stars',
      purpose: {
        type: 'stars',
        stars,
        amount,
        currency
      }
    };
  }
  if (inputInvoice.type === 'chatInviteSubscription') {
    const {
      hash
    } = inputInvoice;
    return {
      type: 'chatInviteSubscription',
      hash
    };
  }
  if (inputInvoice.type === 'message') {
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectChat)(global, inputInvoice.chatId);
    if (!chat) {
      return undefined;
    }
    return {
      type: 'message',
      chat,
      messageId: inputInvoice.messageId
    };
  }
  if (inputInvoice.type === 'giftcode') {
    const {
      userIds,
      boostChannelId,
      amount,
      currency,
      option,
      message
    } = inputInvoice;
    const users = userIds.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectUser)(global, id)).filter(Boolean);
    const boostChannel = boostChannelId ? (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectChat)(global, boostChannelId) : undefined;
    return {
      type: 'giveaway',
      option,
      purpose: {
        type: 'giftcode',
        amount,
        currency,
        users,
        boostChannel,
        message
      }
    };
  }
  if (inputInvoice.type === 'starsgiveaway') {
    const {
      chatId,
      additionalChannelIds,
      amount,
      currency,
      untilDate,
      areWinnersVisible,
      countries,
      isOnlyForNewSubscribers,
      prizeDescription,
      stars,
      users
    } = inputInvoice;
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectChat)(global, chatId);
    if (!chat) {
      return undefined;
    }
    const additionalChannels = additionalChannelIds?.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectChat)(global, id)).filter(Boolean);
    return {
      type: 'starsgiveaway',
      purpose: {
        type: 'starsgiveaway',
        amount,
        currency,
        chat,
        additionalChannels,
        untilDate,
        areWinnersVisible,
        countries,
        isOnlyForNewSubscribers,
        prizeDescription,
        stars,
        users
      }
    };
  }
  if (inputInvoice.type === 'giveaway') {
    const {
      chatId,
      additionalChannelIds,
      amount,
      currency,
      option,
      untilDate,
      areWinnersVisible,
      countries,
      isOnlyForNewSubscribers,
      prizeDescription
    } = inputInvoice;
    const chat = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectChat)(global, chatId);
    if (!chat) {
      return undefined;
    }
    const additionalChannels = additionalChannelIds?.map(id => (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.selectChat)(global, id)).filter(Boolean);
    return {
      type: 'giveaway',
      option,
      purpose: {
        type: 'giveaway',
        amount,
        currency,
        chat,
        additionalChannels,
        untilDate,
        areWinnersVisible,
        countries,
        isOnlyForNewSubscribers,
        prizeDescription
      }
    };
  }
  return undefined;
}
function buildStarsTransactionCustomPeer(peer) {
  if (peer.type === 'appStore') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.AppleTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.AppleTopUp.Subtitle',
      peerColorId: 5
    };
  }
  if (peer.type === 'playMarket') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.GoogleTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.GoogleTopUp.Subtitle',
      peerColorId: 3
    };
  }
  if (peer.type === 'fragment') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.FragmentTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.FragmentTopUp.Subtitle',
      customPeerAvatarColor: '#000000'
    };
  }
  if (peer.type === 'premiumBot') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.PremiumBotTopUp.Title',
      subtitleKey: 'Stars.Intro.Transaction.PremiumBotTopUp.Subtitle',
      peerColorId: 1,
      withPremiumGradient: true
    };
  }
  if (peer.type === 'ads') {
    return {
      avatarIcon: 'star',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.TelegramAds.Title',
      subtitleKey: 'Stars.Intro.Transaction.TelegramAds.Subtitle',
      peerColorId: 2
    };
  }
  if (peer.type === 'api') {
    return {
      avatarIcon: 'bots',
      isCustomPeer: true,
      titleKey: 'Stars.Intro.Transaction.TelegramBotApi.Title',
      subtitleKey: 'Stars.Intro.Transaction.TelegramBotApi.Subtitle',
      peerColorId: 4
    };
  }
  return {
    avatarIcon: 'star',
    isCustomPeer: true,
    titleKey: 'Stars.Intro.Transaction.Unsupported.Title',
    subtitleKey: 'Stars.Intro.Transaction.Unsupported.Title',
    peerColorId: 0
  };
}
function formatStarsTransactionAmount(lang, starsAmount) {
  const amount = starsAmount.amount + starsAmount.nanos / 1e9;
  if (amount < 0) {
    return `- ${lang.number(Math.abs(amount))}`;
  }
  return `+ ${lang.number(amount)}`;
}
function formatStarsAmount(lang, starsAmount) {
  return lang.number(starsAmount.amount + starsAmount.nanos / 1e9);
}
function getStarsTransactionFromGift(message) {
  const {
    action
  } = message.content;
  if (action?.type !== 'giftStars') return undefined;
  const {
    transactionId,
    stars
  } = action;
  return {
    id: transactionId,
    stars: {
      amount: stars,
      nanos: 0
    },
    peer: {
      type: 'peer',
      id: message.isOutgoing ? message.chatId : message.senderId || message.chatId
    },
    date: message.date,
    isGift: true,
    isMyGift: message.isOutgoing || undefined
  };
}
function getPrizeStarsTransactionFromGiveaway(message) {
  const {
    action
  } = message.content;
  if (action?.type !== 'prizeStars') return undefined;
  const {
    transactionId,
    stars,
    targetChatId
  } = action;
  return {
    id: transactionId,
    stars: {
      amount: stars,
      nanos: 0
    },
    peer: {
      type: 'peer',
      id: targetChatId
    },
    date: message.date,
    giveawayPostId: message.id
  };
}

/***/ }),

/***/ "./src/global/helpers/peers.ts":
/*!*************************************!*\
  !*** ./src/global/helpers/peers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPeerTypeKey: () => (/* binding */ getPeerTypeKey),
/* harmony export */   isApiPeerChat: () => (/* binding */ isApiPeerChat),
/* harmony export */   isApiPeerUser: () => (/* binding */ isApiPeerUser)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.ts");

function isApiPeerChat(peer) {
  return 'title' in peer;
}
function isApiPeerUser(peer) {
  return !isApiPeerChat(peer);
}
function getPeerTypeKey(peer) {
  if (isApiPeerChat(peer)) {
    if (peer.type === 'chatTypeBasicGroup' || peer.type === 'chatTypeSuperGroup') {
      return 'ChatList.PeerTypeGroup';
    }
    if (peer.type === 'chatTypeChannel') {
      return 'ChatList.PeerTypeChannel';
    }
    if (peer.type === 'chatTypePrivate') {
      return 'ChatList.PeerTypeNonContact';
    }
    return undefined;
  }
  if (peer.id === _config__WEBPACK_IMPORTED_MODULE_0__.SERVICE_NOTIFICATIONS_USER_ID) {
    return 'ServiceNotifications';
  }
  if (peer.isSupport) {
    return 'SupportStatus';
  }
  if (peer.type && peer.type === 'userTypeBot') {
    return 'ChatList.PeerTypeBot';
  }
  if (peer.isContact) {
    return 'ChatList.PeerTypeContact';
  }
  return 'ChatList.PeerTypeNonContactUser';
}

/***/ }),

/***/ "./src/hooks/schedulers/useTimeout.ts":
/*!********************************************!*\
  !*** ./src/hooks/schedulers/useTimeout.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLastCallback */ "./src/hooks/useLastCallback.ts");


function useTimeout(callback, delay) {
  const savedCallback = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(callback);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof delay !== 'number') {
      return undefined;
    }
    const id = setTimeout(() => savedCallback(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTimeout);

/***/ }),

/***/ "./src/hooks/useAverageColor.ts":
/*!**************************************!*\
  !*** ./src/hooks/useAverageColor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/colors */ "./src/util/colors.ts");
/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMedia */ "./src/hooks/useMedia.ts");





function useAverageColor(peer, fallbackColor = '#00000000') {
  const [color, setColor] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(fallbackColor);
  const imgBlobUrl = (0,_useMedia__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatAvatarHash)(peer), false, _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMediaFormat.BlobUrl);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (!imgBlobUrl) {
        return;
      }
      const averageColor = await (0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.getAverageColor)(imgBlobUrl);
      setColor(`#${(0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.rgb2hex)(averageColor)}`);
    })();
  }, [imgBlobUrl]);
  return color;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAverageColor);

/***/ }),

/***/ "./src/hooks/useCanvasBlur.ts":
/*!************************************!*\
  !*** ./src/hooks/useCanvasBlur.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCanvasBlur)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fastBlur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fastBlur */ "./src/lib/fastBlur.js");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _useSyncEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSyncEffect */ "./src/hooks/useSyncEffect.ts");





const RADIUS = 2;
const ITERATIONS = 2;
function useCanvasBlur(dataUri, isDisabled = false, withRaf, radius = RADIUS, preferredWidth, preferredHeight) {
  // eslint-disable-next-line no-null/no-null
  const canvasRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isStarted = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_useSyncEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    if (!isDisabled) {
      isStarted.current = false;
    }
  }, [dataUri, isDisabled]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!dataUri || !canvas || isDisabled || isStarted.current) {
      return;
    }
    isStarted.current = true;
    const img = new Image();
    const processBlur = () => {
      const width = preferredWidth || img.width;
      const height = preferredHeight || img.height;
      const ctx = canvas.getContext('2d', {
        alpha: false
      });
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMutation)(() => {
        canvas.width = width;
        canvas.height = height;
        if (_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_CANVAS_FILTER_SUPPORTED) {
          ctx.filter = `blur(${radius}px)`;
        }
        ctx.drawImage(img, -radius * 2, -radius * 2, width + radius * 4, height + radius * 4);
        if (!_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_CANVAS_FILTER_SUPPORTED) {
          (0,_lib_fastBlur__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx, 0, 0, width, height, radius, ITERATIONS);
        }
      });
    };
    img.onload = () => {
      if (withRaf) {
        (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMeasure)(processBlur);
      } else {
        processBlur();
      }
    };
    img.src = dataUri;
  }, [dataUri, isDisabled, preferredHeight, preferredWidth, radius, withRaf]);
  return canvasRef;
}

/***/ }),

/***/ "./src/hooks/useEnsureMessage.ts":
/*!***************************************!*\
  !*** ./src/hooks/useEnsureMessage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEnsureMessage)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");


function useEnsureMessage(chatId, messageId, message, replyOriginForId, isDisabled) {
  const {
    loadMessage
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDisabled) return;
    if (messageId && !message) {
      loadMessage({
        chatId,
        messageId: messageId,
        replyOriginForId: replyOriginForId
      });
    }
  }, [isDisabled, chatId, message, messageId, replyOriginForId]);
}

/***/ }),

/***/ "./src/hooks/useHorizontalScroll.ts":
/*!******************************************!*\
  !*** ./src/hooks/useHorizontalScroll.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");

const useHorizontalScroll = (containerRef, isDisabled, shouldPreventDefault = false) => {
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDisabled) {
      return undefined;
    }
    const container = containerRef.current;
    function handleScroll(e) {
      // Ignore horizontal scroll and let it work natively (e.g. on touchpad)
      if (!e.deltaX) {
        container.scrollLeft += e.deltaY / 4;
        if (shouldPreventDefault) e.preventDefault();
      }
    }
    container.addEventListener('wheel', handleScroll, {
      passive: !shouldPreventDefault
    });
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [containerRef, isDisabled, shouldPreventDefault]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHorizontalScroll);

/***/ }),

/***/ "./src/hooks/useLang.ts":
/*!******************************!*\
  !*** ./src/hooks/useLang.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/localization */ "./src/util/localization/index.ts");
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./src/hooks/useEffectOnce.ts");
/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForceUpdate */ "./src/hooks/useForceUpdate.ts");



const useLang = () => {
  const forceUpdate = (0,_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    return (0,_util_localization__WEBPACK_IMPORTED_MODULE_0__.addLocalizationCallback)(forceUpdate);
  });
  return (0,_util_localization__WEBPACK_IMPORTED_MODULE_0__.getTranslationFn)();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLang);

/***/ }),

/***/ "./src/hooks/usePrevious.ts":
/*!**********************************!*\
  !*** ./src/hooks/usePrevious.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");


// This is not render-dependent and will never allow previous to match current
function usePrevious(current) {
  const prevRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (lastRef.current !== current) {
    prevRef.current = lastRef.current;
  }
  lastRef.current = current;
  return prevRef.current;
}

/***/ }),

/***/ "./src/util/animateHorizontalScroll.ts":
/*!*********************************************!*\
  !*** ./src/util/animateHorizontalScroll.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animateHorizontalScroll)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/util/animation.ts");




const DEFAULT_DURATION = 300;
const stopById = new Map();
function animateHorizontalScroll(container, left, duration = DEFAULT_DURATION) {
  if (!(0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobal)())) {
    duration = 0;
  }
  const isRtl = container.getAttribute('dir') === 'rtl';
  const {
    scrollLeft,
    offsetWidth: containerWidth,
    scrollWidth,
    dataset: {
      scrollId
    }
  } = container;
  let path = left - scrollLeft;
  if (path < 0) {
    const remainingPath = -scrollLeft * (isRtl ? -1 : 1);
    path = Math.max(path, remainingPath);
  } else if (path > 0) {
    const remainingPath = scrollWidth - (scrollLeft + containerWidth);
    path = Math.min(path, remainingPath);
  }
  if (path === 0) {
    return Promise.resolve();
  }
  if (scrollId && stopById.has(scrollId)) {
    stopById.get(scrollId)();
  }
  const target = scrollLeft + path;
  return new Promise(resolve => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
      if (duration === 0) {
        container.scrollLeft = target;
        resolve();
        return;
      }
      let isStopped = false;
      const id = Math.random().toString();
      container.dataset.scrollId = id;
      stopById.set(id, () => {
        isStopped = true;
      });
      container.style.scrollSnapType = 'none';
      const startAt = Date.now();
      (0,_animation__WEBPACK_IMPORTED_MODULE_3__.animate)(() => {
        if (isStopped) return false;
        const t = Math.min((Date.now() - startAt) / duration, 1);
        const currentPath = path * (1 - transition(t));
        container.scrollLeft = Math.round(target - currentPath);
        if (t >= 1) {
          container.style.scrollSnapType = '';
          delete container.dataset.scrollId;
          stopById.delete(id);
          resolve();
        }
        return t < 1;
      }, _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation);
    });
  });
}
function transition(t) {
  return 1 - (1 - t) ** 3.5;
}

/***/ }),

/***/ "./src/util/animateScroll.ts":
/*!***********************************!*\
  !*** ./src/util/animateScroll.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelScrollBlockingAnimation: () => (/* binding */ cancelScrollBlockingAnimation),
/* harmony export */   "default": () => (/* binding */ animateScroll),
/* harmony export */   isAnimatingScroll: () => (/* binding */ isAnimatingScroll),
/* harmony export */   restartCurrentScrollAnimation: () => (/* binding */ restartCurrentScrollAnimation)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation */ "./src/util/animation.ts");
/* harmony import */ var _windowEnvironment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./windowEnvironment */ "./src/util/windowEnvironment.ts");








let isAnimating = false;
let currentArgs;
let onHeavyAnimationEnd;
function animateScroll(...args) {
  currentArgs = args.slice(0, 8);
  const mutate = createMutateFunction(...currentArgs);
  const shouldReturnMutationFn = args[8];
  if (shouldReturnMutationFn) {
    return mutate;
  }
  (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(mutate);
  return undefined;
}
function restartCurrentScrollAnimation() {
  if (!isAnimating) {
    return;
  }
  (0,_animation__WEBPACK_IMPORTED_MODULE_6__.cancelSingleAnimation)();
  (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMeasure)(() => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation)(createMutateFunction(...currentArgs));
  });
}
function createMutateFunction(container, element, position, margin = 0, maxDistance = _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE, forceDirection, forceDuration, forceNormalContainerHeight) {
  if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Static || !(0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanAnimateInterface)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)())) {
    forceDuration = 0;
  }
  const {
    offsetTop: elementTop,
    offsetHeight: elementHeight
  } = element;
  const {
    scrollTop: currentScrollTop,
    offsetHeight: containerHeight,
    scrollHeight
  } = container;
  const targetContainerHeight = forceNormalContainerHeight && container.dataset.normalHeight ? Number(container.dataset.normalHeight) : containerHeight;
  let scrollTo;
  switch (position) {
    case 'start':
      scrollTo = elementTop - margin + (_windowEnvironment__WEBPACK_IMPORTED_MODULE_7__.IS_ANDROID ? 1 : 0);
      break;
    case 'end':
      scrollTo = elementTop + elementHeight + margin - targetContainerHeight;
      break;
    // 'nearest' is not supported yet
    case 'nearest':
    case 'center':
    case 'centerOrTop':
      scrollTo = elementHeight < targetContainerHeight ? elementTop + elementHeight / 2 - targetContainerHeight / 2 : elementTop - margin;
      break;
  }
  const scrollFrom = calculateScrollFrom(container, scrollTo, maxDistance, forceDirection);
  let path = scrollTo - scrollFrom;
  if (path < 0) {
    const remainingPath = -scrollFrom;
    path = Math.max(path, remainingPath);
  } else if (path > 0) {
    const remainingPath = scrollHeight - (scrollFrom + targetContainerHeight);
    path = Math.min(path, remainingPath);
  }
  const absPath = Math.abs(path);
  return () => {
    if (absPath < 1) {
      if (currentScrollTop !== scrollFrom) {
        container.scrollTop = scrollFrom;
      }
      return;
    }
    const target = scrollFrom + path;
    if (forceDuration === 0) {
      container.scrollTop = target;
      return;
    }
    const transition = absPath <= _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_SHORT_TRANSITION_MAX_DISTANCE ? shortTransition : longTransition;
    const duration = forceDuration || _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MIN_DURATION + absPath / _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE * (_config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DURATION - _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MIN_DURATION);
    const startAt = Date.now();
    isAnimating = true;
    const prevOnHeavyAnimationEnd = onHeavyAnimationEnd;
    onHeavyAnimationEnd = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.beginHeavyAnimation)(undefined, true);
    prevOnHeavyAnimationEnd?.();
    (0,_animation__WEBPACK_IMPORTED_MODULE_6__.animateSingle)(() => {
      const t = Math.min((Date.now() - startAt) / duration, 1);
      const currentPath = path * (1 - transition(t));
      const newScrollTop = Math.round(target - currentPath);
      container.scrollTop = newScrollTop;
      isAnimating = t < 1 && newScrollTop !== target;
      if (!isAnimating) {
        currentArgs = undefined;
        onHeavyAnimationEnd?.();
        onHeavyAnimationEnd = undefined;
      }
      return isAnimating;
    }, _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_4__.requestMutation);
  };
}
function isAnimatingScroll() {
  return isAnimating;
}
function cancelScrollBlockingAnimation() {
  onHeavyAnimationEnd();
  onHeavyAnimationEnd = undefined;
}
function calculateScrollFrom(container, scrollTo, maxDistance = _config__WEBPACK_IMPORTED_MODULE_3__.SCROLL_MAX_DISTANCE, forceDirection) {
  const {
    scrollTop
  } = container;
  if (forceDirection === undefined) {
    const offset = scrollTo - scrollTop;
    if (offset < -maxDistance) {
      return scrollTop + (offset + maxDistance);
    } else if (offset > maxDistance) {
      return scrollTop + (offset - maxDistance);
    }
  } else if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Up) {
    return scrollTo + maxDistance;
  } else if (forceDirection === _types__WEBPACK_IMPORTED_MODULE_2__.FocusDirection.Down) {
    return Math.max(0, scrollTo - maxDistance);
  }
  return scrollTop;
}
function shortTransition(t) {
  return 1 - (1 - t) ** 3.5;
}
function longTransition(t) {
  return 1 - (1 - t) ** 6;
}

/***/ }),

/***/ "./src/util/colors.ts":
/*!****************************!*\
  !*** ./src/util/colors.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToRGBA: () => (/* binding */ convertToRGBA),
/* harmony export */   getAverageColor: () => (/* binding */ getAverageColor),
/* harmony export */   getColorLuma: () => (/* binding */ getColorLuma),
/* harmony export */   getPatternColor: () => (/* binding */ getPatternColor),
/* harmony export */   getTextColor: () => (/* binding */ getTextColor),
/* harmony export */   hex2rgb: () => (/* binding */ hex2rgb),
/* harmony export */   hsb2rgb: () => (/* binding */ hsb2rgb),
/* harmony export */   numberToHexColor: () => (/* binding */ numberToHexColor),
/* harmony export */   rgb2hex: () => (/* binding */ rgb2hex),
/* harmony export */   rgb2hsb: () => (/* binding */ rgb2hsb)
/* harmony export */ });
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files */ "./src/util/files.ts");
/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */
/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */


const LUMA_THRESHOLD = 128;

/**
 * HEX > RGB
 * input: 'xxxxxx' (ex. 'ed15fa') case-insensitive
 * output: [r, g, b] ([0-255, 0-255, 0-255])
 */
function hex2rgb(param) {
  return [parseInt(param.substring(0, 2), 16), parseInt(param.substring(2, 4), 16), parseInt(param.substring(4, 6), 16)];
}

/**
 * RGB > HEX
 * input: [r, g, b] ([0-255, 0-255, 0-255])
 * output: 'xxxxxx' (ex. 'ff0000')
 */
function rgb2hex(param) {
  const p0 = param[0].toString(16);
  const p1 = param[1].toString(16);
  const p2 = param[2].toString(16);
  return (p0.length == 1 ? '0' + p0 : p0) + (p1.length == 1 ? '0' + p1 : p1) + (p2.length == 1 ? '0' + p2 : p2);
}

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */
function rgb2hsb([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    v = max;
  let d = max - min;
  s = max == 0 ? 0 : d / max;
  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, v];
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function hsb2rgb([h, s, v]) {
  let r, g, b;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
async function getAverageColor(url) {
  // Only visit every 5 pixels
  const blockSize = 5;
  const defaultRGB = [0, 0, 0];
  let data;
  let width;
  let height;
  let i = -4;
  let length;
  let rgb = [0, 0, 0];
  let count = 0;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  if (!context) {
    return defaultRGB;
  }
  const image = await (0,_files__WEBPACK_IMPORTED_MODULE_0__.preloadImage)(url);
  height = image.naturalHeight || image.offsetHeight || image.height;
  width = image.naturalWidth || image.offsetWidth || image.width;
  canvas.height = height;
  canvas.width = width;
  context.drawImage(image, 0, 0);
  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }
  length = data.data.length;

  // eslint-disable-next-line no-cond-assign
  while ((i += blockSize * 4) < length) {
    if (data.data[i + 3] === 0) continue; // Ignore fully transparent pixels
    ++count;
    rgb[0] += data.data[i];
    rgb[1] += data.data[i + 1];
    rgb[2] += data.data[i + 2];
  }
  rgb[0] = Math.floor(rgb[0] / count);
  rgb[1] = Math.floor(rgb[1] / count);
  rgb[2] = Math.floor(rgb[2] / count);
  return rgb;
}
function getColorLuma(rgbColor) {
  const [r, g, b] = rgbColor;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma;
}

// Function was adapted from https://github.com/telegramdesktop/tdesktop/blob/35ff621b5b52f7e3553fb0f990ea13ade7101b8e/Telegram/SourceFiles/data/data_wall_paper.cpp#L518
function getPatternColor(rgbColor) {
  let [hue, saturation, value] = rgb2hsb(rgbColor);
  saturation = Math.min(1, saturation + 0.05 + 0.1 * (1 - saturation));
  value = value > 0.5 ? Math.max(0, value * 0.65) : Math.max(0, Math.min(1, 1 - value * 0.65));
  return `hsla(${hue * 360}, ${saturation * 100}%, ${value * 100}%, .4)`;
}

/* eslint-disable no-bitwise */
const convertToRGBA = color => {
  const alpha = color >> 24 & 0xff;
  const red = color >> 16 & 0xff;
  const green = color >> 8 & 0xff;
  const blue = color & 0xff;
  const alphaFloat = alpha / 255;
  return `rgba(${red}, ${green}, ${blue}, ${alphaFloat})`;
};
const numberToHexColor = color => {
  return `#${color.toString(16).padStart(6, '0')}`;
};
const getTextColor = color => {
  const r = color >> 16 & 0xff;
  const g = color >> 8 & 0xff;
  const b = color & 0xff;
  const luma = getColorLuma([r, g, b]);
  return luma > LUMA_THRESHOLD ? 'black' : 'white';
};

/***/ }),

/***/ "./src/util/objects/customPeer.ts":
/*!****************************************!*\
  !*** ./src/util/objects/customPeer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CUSTOM_PEER_EXCLUDED_CHAT_TYPES: () => (/* binding */ CUSTOM_PEER_EXCLUDED_CHAT_TYPES),
/* harmony export */   CUSTOM_PEER_HIDDEN: () => (/* binding */ CUSTOM_PEER_HIDDEN),
/* harmony export */   CUSTOM_PEER_INCLUDED_CHAT_TYPES: () => (/* binding */ CUSTOM_PEER_INCLUDED_CHAT_TYPES),
/* harmony export */   CUSTOM_PEER_PREMIUM: () => (/* binding */ CUSTOM_PEER_PREMIUM)
/* harmony export */ });
const CUSTOM_PEER_PREMIUM = {
  isCustomPeer: true,
  type: 'premium',
  titleKey: 'PrivacyPremium',
  subtitleKey: 'PrivacyPremiumText',
  avatarIcon: 'star',
  isAvatarSquare: true,
  withPremiumGradient: true
};
const CUSTOM_PEER_INCLUDED_CHAT_TYPES = [{
  isCustomPeer: true,
  type: 'contacts',
  titleKey: 'FilterContacts',
  avatarIcon: 'user',
  isAvatarSquare: true,
  peerColorId: 5
}, {
  isCustomPeer: true,
  type: 'nonContacts',
  titleKey: 'FilterNonContacts',
  avatarIcon: 'non-contacts',
  isAvatarSquare: true,
  peerColorId: 4
}, {
  isCustomPeer: true,
  type: 'groups',
  titleKey: 'FilterGroups',
  avatarIcon: 'group',
  isAvatarSquare: true,
  peerColorId: 3
}, {
  isCustomPeer: true,
  type: 'channels',
  titleKey: 'FilterChannels',
  avatarIcon: 'channel',
  isAvatarSquare: true,
  peerColorId: 1
}, {
  isCustomPeer: true,
  type: 'bots',
  titleKey: 'FilterBots',
  avatarIcon: 'bots',
  isAvatarSquare: true,
  peerColorId: 6
}];
const CUSTOM_PEER_EXCLUDED_CHAT_TYPES = [{
  isCustomPeer: true,
  type: 'excludeMuted',
  titleKey: 'FilterMuted',
  avatarIcon: 'mute',
  isAvatarSquare: true,
  peerColorId: 6
}, {
  isCustomPeer: true,
  type: 'excludeRead',
  titleKey: 'FilterRead',
  avatarIcon: 'readchats',
  isAvatarSquare: true,
  peerColorId: 4
}, {
  isCustomPeer: true,
  type: 'excludeArchived',
  titleKey: 'FilterArchived',
  avatarIcon: 'archive',
  isAvatarSquare: true,
  peerColorId: 5
}];
const CUSTOM_PEER_HIDDEN = {
  isCustomPeer: true,
  type: 'hidden',
  titleKey: 'StarsTransactionHidden',
  avatarIcon: 'author-hidden',
  peerColorId: 4
};

/***/ }),

/***/ "./src/components/common/AnimatedCounter.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/AnimatedCounter.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AnimatedCounter-module__root","character-container":"AnimatedCounter-module__character-container","characterContainer":"AnimatedCounter-module__character-container","character":"AnimatedCounter-module__character","character-old":"AnimatedCounter-module__character-old","characterOld":"AnimatedCounter-module__character-old","character-disappear":"AnimatedCounter-module__character-disappear","characterDisappear":"AnimatedCounter-module__character-disappear","character-new":"AnimatedCounter-module__character-new","characterNew":"AnimatedCounter-module__character-new","character-appear":"AnimatedCounter-module__character-appear","characterAppear":"AnimatedCounter-module__character-appear"});

/***/ }),

/***/ "./src/components/common/AnimatedIconWithPreview.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/common/AnimatedIconWithPreview.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AnimatedIconWithPreview-module__root","preview":"AnimatedIconWithPreview-module__preview"});

/***/ }),

/***/ "./src/components/common/MediaSpoiler.module.scss":
/*!********************************************************!*\
  !*** ./src/components/common/MediaSpoiler.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"MediaSpoiler-module__root","mask-animation":"MediaSpoiler-module__mask-animation","maskAnimation":"MediaSpoiler-module__mask-animation","circle-cut":"MediaSpoiler-module__circle-cut","circleCut":"MediaSpoiler-module__circle-cut","dots":"MediaSpoiler-module__dots","canvas":"MediaSpoiler-module__canvas","opacity-breath":"MediaSpoiler-module__opacity-breath","opacityBreath":"MediaSpoiler-module__opacity-breath","dots-animation":"MediaSpoiler-module__dots-animation","dotsAnimation":"MediaSpoiler-module__dots-animation"});

/***/ }),

/***/ "./src/components/common/PremiumProgress.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/PremiumProgress.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PremiumProgress-module__root","withBadge":"PremiumProgress-module__withBadge","badgeContainer":"PremiumProgress-module__badgeContainer","slide-in":"PremiumProgress-module__slide-in","slideIn":"PremiumProgress-module__slide-in","floating-badge-wrapper":"PremiumProgress-module__floating-badge-wrapper","floatingBadgeWrapper":"PremiumProgress-module__floating-badge-wrapper","rotate-in":"PremiumProgress-module__rotate-in","rotateIn":"PremiumProgress-module__rotate-in","floating-badge":"PremiumProgress-module__floating-badge","floatingBadge":"PremiumProgress-module__floating-badge","floating-badge-triangle":"PremiumProgress-module__floating-badge-triangle","floatingBadgeTriangle":"PremiumProgress-module__floating-badge-triangle","floating-badge-icon":"PremiumProgress-module__floating-badge-icon","floatingBadgeIcon":"PremiumProgress-module__floating-badge-icon","floating-badge-value":"PremiumProgress-module__floating-badge-value","floatingBadgeValue":"PremiumProgress-module__floating-badge-value","left":"PremiumProgress-module__left","right":"PremiumProgress-module__right","progress":"PremiumProgress-module__progress","fullProgress":"PremiumProgress-module__fullProgress","primary":"PremiumProgress-module__primary"});

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GiftRibbon-module__root","text":"GiftRibbon-module__text"});

/***/ }),

/***/ "./src/components/common/pickers/PickerItem.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/common/pickers/PickerItem.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PickerItem-module__root","clickable":"PickerItem-module__clickable","separator":"PickerItem-module__separator","disabled":"PickerItem-module__disabled","title":"PickerItem-module__title","subtitle":"PickerItem-module__subtitle","withAvatar":"PickerItem-module__withAvatar","multiline":"PickerItem-module__multiline","input":"PickerItem-module__input","startInput":"PickerItem-module__startInput","endInput":"PickerItem-module__endInput","avatarElement":"PickerItem-module__avatarElement"});

/***/ }),

/***/ "./src/components/common/pickers/PickerSelectedItem.scss":
/*!***************************************************************!*\
  !*** ./src/components/common/pickers/PickerSelectedItem.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/common/pickers/PickerStyles.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/common/pickers/PickerStyles.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"PickerStyles-module__container","header":"PickerStyles-module__header","pickerCategoryTitle":"PickerStyles-module__pickerCategoryTitle","pickerList":"PickerStyles-module__pickerList","padded":"PickerStyles-module__padded","noResults":"PickerStyles-module__noResults","onlineStatus":"PickerStyles-module__onlineStatus"});

/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"SimilarChannels-module__root","notch":"SimilarChannels-module__notch","notch-path":"SimilarChannels-module__notch-path","notchPath":"SimilarChannels-module__notch-path","join-text":"SimilarChannels-module__join-text","joinText":"SimilarChannels-module__join-text","header":"SimilarChannels-module__header","title":"SimilarChannels-module__title","close":"SimilarChannels-module__close","icon":"SimilarChannels-module__icon","skeleton":"SimilarChannels-module__skeleton","inner":"SimilarChannels-module__inner","is-appearing":"SimilarChannels-module__is-appearing","isAppearing":"SimilarChannels-module__is-appearing","channels-appear":"SimilarChannels-module__channels-appear","channelsAppear":"SimilarChannels-module__channels-appear","is-hiding":"SimilarChannels-module__is-hiding","isHiding":"SimilarChannels-module__is-hiding","channels-disappear":"SimilarChannels-module__channels-disappear","channelsDisappear":"SimilarChannels-module__channels-disappear","channel-list":"SimilarChannels-module__channel-list","channelList":"SimilarChannels-module__channel-list","item":"SimilarChannels-module__item","last-item":"SimilarChannels-module__last-item","lastItem":"SimilarChannels-module__last-item","avatar":"SimilarChannels-module__avatar","badge":"SimilarChannels-module__badge","members-count":"SimilarChannels-module__members-count","membersCount":"SimilarChannels-module__members-count","channel-title":"SimilarChannels-module__channel-title","channelTitle":"SimilarChannels-module__channel-title","fake-avatar":"SimilarChannels-module__fake-avatar","fakeAvatar":"SimilarChannels-module__fake-avatar","fake-avatar-inner":"SimilarChannels-module__fake-avatar-inner","fakeAvatarInner":"SimilarChannels-module__fake-avatar-inner","last-fake-avatar":"SimilarChannels-module__last-fake-avatar","lastFakeAvatar":"SimilarChannels-module__last-fake-avatar"});

/***/ })

}]);
//# sourceMappingURL=src_components_common_AnimatedCounter_tsx-src_components_common_MediaSpoiler_tsx-src_componen-ad09c2.971cb4ed9b2a8ac49990.js.map