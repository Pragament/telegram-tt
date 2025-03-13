"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_Avatar_tsx-src_components_common_FullNameTitle_tsx-src_hooks_useContext-631740"],{

/***/ "./src/components/common/Avatar.tsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _helpers_peerColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/peerColor */ "./src/components/common/helpers/peerColor.ts");
/* harmony import */ var _helpers_renderText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFastClick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useFastClick */ "./src/hooks/useFastClick.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useMediaTransitionDeprecated */ "./src/hooks/useMediaTransitionDeprecated.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_OptimizedVideo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/OptimizedVideo */ "./src/components/ui/OptimizedVideo.tsx");
/* harmony import */ var _AvatarStoryCircle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AvatarStoryCircle */ "./src/components/common/AvatarStoryCircle.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _Avatar_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Avatar.scss */ "./src/components/common/Avatar.scss");



















const LOOP_COUNT = 3;
const cn = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__.createClassNameBuilder)('Avatar');
cn.media = cn('media');
cn.icon = cn('icon');
const Avatar = ({
  className,
  size = 'large',
  peer,
  photo,
  webPhoto,
  text,
  isSavedMessages,
  isSavedDialog,
  withVideo,
  withStory,
  forPremiumPromo,
  withStoryGap,
  withStorySolid,
  forceFriendStorySolid,
  forceUnreadStorySolid,
  storyViewerOrigin,
  storyViewerMode = 'single-peer',
  loopIndefinitely,
  noPersonalPhoto,
  onClick
}) => {
  const {
    openStoryViewer
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const videoLoopCountRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const isCustomPeer = peer && 'isCustomPeer' in peer;
  const realPeer = peer && !isCustomPeer ? peer : undefined;
  const user = realPeer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isPeerUser)(realPeer) ? realPeer : undefined;
  const chat = realPeer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isPeerChat)(realPeer) ? realPeer : undefined;
  const isDeleted = user && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isDeletedUser)(user);
  const isReplies = realPeer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isChatWithRepliesBot)(realPeer.id);
  const isAnonymousForwards = realPeer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isAnonymousForwardsChat)(realPeer.id);
  const isForum = chat?.isForum;
  let imageHash;
  let videoHash;
  const shouldLoadVideo = withVideo && photo?.isVideo;
  const shouldFetchBig = size === 'jumbo';
  if (!isSavedMessages && !isDeleted) {
    if (user && !noPersonalPhoto || chat) {
      imageHash = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getChatAvatarHash)(peer, shouldFetchBig ? 'big' : undefined);
    } else if (photo) {
      imageHash = `photo${photo.id}?size=m`;
      if (photo.isVideo && withVideo) {
        videoHash = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getVideoProfilePhotoMediaHash)(photo);
      }
    } else if (webPhoto) {
      imageHash = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getWebDocumentHash)(webPhoto);
    }
  }
  const specialIcon = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isCustomPeer) {
      return peer.avatarIcon;
    }
    if (isSavedMessages) {
      return isSavedDialog ? 'my-notes' : 'avatar-saved-messages';
    }
    if (isDeleted) {
      return 'avatar-deleted-account';
    }
    if (isReplies) {
      return 'reply-filled';
    }
    if (isAnonymousForwards) {
      return 'author-hidden';
    }
    return undefined;
  }, [isCustomPeer, isSavedMessages, isDeleted, isReplies, isAnonymousForwards, peer, isSavedDialog]);
  const imgBlobUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_12__["default"])(imageHash, false, _api_types__WEBPACK_IMPORTED_MODULE_2__.ApiMediaFormat.BlobUrl);
  const videoBlobUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_12__["default"])(videoHash, !shouldLoadVideo, _api_types__WEBPACK_IMPORTED_MODULE_2__.ApiMediaFormat.BlobUrl);
  const hasBlobUrl = Boolean(imgBlobUrl || videoBlobUrl);
  // `videoBlobUrl` can be taken from memory cache, so we need to check `shouldLoadVideo` again
  const shouldPlayVideo = Boolean(videoBlobUrl && shouldLoadVideo);
  const transitionClassNames = (0,_hooks_useMediaTransitionDeprecated__WEBPACK_IMPORTED_MODULE_13__["default"])(hasBlobUrl);
  const handleVideoEnded = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(e => {
    const video = e.currentTarget;
    if (!videoBlobUrl) return;
    if (loopIndefinitely) return;
    videoLoopCountRef.current += 1;
    if (videoLoopCountRef.current >= LOOP_COUNT) {
      video.style.display = 'none';
    }
  });
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_14__["default"])();
  let content;
  const author = user ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getUserFullName)(user) : chat ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getChatTitle)(lang, chat) : text;
  if (specialIcon) {
    content = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
      name: specialIcon,
      className: cn.icon,
      role: "img",
      ariaLabel: author
    });
  } else if (hasBlobUrl) {
    content = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      src: imgBlobUrl,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(cn.media, 'avatar-media', transitionClassNames, videoBlobUrl && 'poster'),
      alt: author,
      decoding: "async",
      draggable: false
    }), shouldPlayVideo && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_OptimizedVideo__WEBPACK_IMPORTED_MODULE_15__["default"], {
      canPlay: true,
      src: videoBlobUrl,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(cn.media, 'avatar-media', 'poster'),
      muted: true,
      loop: loopIndefinitely,
      autoPlay: true,
      disablePictureInPicture: true,
      playsInline: true,
      draggable: false,
      onEnded: handleVideoEnded
    }));
  } else if (user) {
    const userFullName = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getUserFullName)(user);
    content = userFullName ? (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_7__.getFirstLetters)(userFullName, 2) : undefined;
  } else if (chat) {
    const title = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getChatTitle)(lang, chat);
    content = title && (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_7__.getFirstLetters)(title, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.isUserId)(chat.id) ? 2 : 1);
  } else if (isCustomPeer) {
    const title = peer.title || lang(peer.titleKey);
    content = title && (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_7__.getFirstLetters)(title, 1);
  } else if (text) {
    content = (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_7__.getFirstLetters)(text, 2);
  }
  const isRoundedRect = isCustomPeer && peer.isAvatarSquare || isForum && !((withStory || withStorySolid) && realPeer?.hasStories);
  const isPremiumGradient = isCustomPeer && peer.withPremiumGradient;
  const customColor = isCustomPeer && peer.customPeerAvatarColor;
  const fullClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(`Avatar size-${size}`, className, (0,_helpers_peerColor__WEBPACK_IMPORTED_MODULE_8__.getPeerColorClass)(peer), !peer && text && 'hidden-user', isSavedMessages && 'saved-messages', isAnonymousForwards && 'anonymous-forwards', isDeleted && 'deleted-account', isReplies && 'replies-bot-account', isPremiumGradient && 'premium-gradient-bg', isRoundedRect && 'forum', (photo || webPhoto) && 'force-fit', (withStory && realPeer?.hasStories || forPremiumPromo) && 'with-story-circle', withStorySolid && realPeer?.hasStories && 'with-story-solid', withStorySolid && forceFriendStorySolid && 'close-friend', withStorySolid && (realPeer?.hasUnreadStories || forceUnreadStorySolid) && 'has-unread-story', onClick && 'interactive', !isSavedMessages && !imgBlobUrl && 'no-photo');
  const hasMedia = Boolean(isSavedMessages || imgBlobUrl);
  const {
    handleClick,
    handleMouseDown
  } = (0,_hooks_useFastClick__WEBPACK_IMPORTED_MODULE_10__.useFastClick)(e => {
    if (withStory && storyViewerMode !== 'disabled' && realPeer?.hasStories) {
      e.stopPropagation();
      openStoryViewer({
        peerId: realPeer.id,
        isSinglePeer: storyViewerMode === 'single-peer',
        origin: storyViewerOrigin
      });
      return;
    }
    if (onClick) {
      onClick(e, hasMedia);
    }
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: fullClassName,
    id: realPeer?.id && withStory ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getPeerStoryHtmlId)(realPeer.id) : undefined,
    "data-peer-id": realPeer?.id,
    "data-test-sender-id": _config__WEBPACK_IMPORTED_MODULE_3__.IS_TEST ? realPeer?.id : undefined,
    "aria-label": typeof content === 'string' ? author : undefined,
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_6__["default"])(customColor && `--color-user: ${customColor}`),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: "inner"
  }, typeof content === 'string' ? (0,_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__["default"])(content, [size === 'jumbo' ? 'hq_emoji' : 'emoji']) : content), withStory && realPeer?.hasStories && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AvatarStoryCircle__WEBPACK_IMPORTED_MODULE_16__["default"], {
    peerId: realPeer.id,
    size: size,
    withExtraGap: withStoryGap
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(Avatar));

/***/ }),

/***/ "./src/components/common/AvatarStoryCircle.tsx":
/*!*****************************************************!*\
  !*** ./src/components/common/AvatarStoryCircle.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   drawGradientCircle: () => (/* binding */ drawGradientCircle)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/window/useDevicePixelRatio */ "./src/hooks/window/useDevicePixelRatio.ts");






const SIZES = {
  micro: 1.125 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  tiny: 2.125 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  mini: 1.625 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  small: 2.25 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  'small-mobile': 2.625 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  medium: 2.875 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  large: 3.5 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  giant: 5.125 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  huge: 6.125 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM,
  jumbo: 7.625 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM
};
const BLUE = ['#34C578', '#3CA3F3'];
const GREEN = ['#C9EB38', '#09C167'];
const PURPLE = ['#A667FF', '#55A5FF'];
const GRAY = '#C4C9CC';
const DARK_GRAY = '#737373';
const STROKE_WIDTH = 0.125 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM;
const STROKE_WIDTH_READ = 0.0625 * _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM;
const GAP_PERCENT = 2;
const SEGMENTS_MAX = 45; // More than this breaks rendering in Safari and Chrome

const GAP_PERCENT_EXTRA = 10;
const EXTRA_GAP_ANGLE = Math.PI / 4;
const EXTRA_GAP_SIZE = GAP_PERCENT_EXTRA / 100 * (2 * Math.PI);
const EXTRA_GAP_START = EXTRA_GAP_ANGLE - EXTRA_GAP_SIZE / 2;
const EXTRA_GAP_END = EXTRA_GAP_ANGLE + EXTRA_GAP_SIZE / 2;
function AvatarStoryCircle({
  size = 'large',
  className,
  peerStories,
  storyIds,
  lastReadId,
  withExtraGap,
  appTheme
}) {
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dpr = (0,_hooks_window_useDevicePixelRatio__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const values = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (storyIds || []).reduce((acc, id) => {
      acc.total += 1;
      if (lastReadId && id <= lastReadId) {
        acc.read += 1;
      }
      return acc;
    }, {
      total: 0,
      read: 0
    });
  }, [lastReadId, storyIds]);
  const isCloseFriend = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!peerStories || !storyIds?.length) {
      return false;
    }
    return storyIds.some(id => {
      const story = peerStories[id];
      if (!story || !('isForCloseFriends' in story)) {
        return false;
      }
      const isRead = lastReadId && story.id <= lastReadId;
      return story.isForCloseFriends && !isRead;
    });
  }, [lastReadId, peerStories, storyIds]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!ref.current) {
      return;
    }
    drawGradientCircle({
      canvas: ref.current,
      size: SIZES[size] * dpr,
      segmentsCount: values.total,
      color: isCloseFriend ? 'green' : 'blue',
      readSegmentsCount: values.read,
      withExtraGap,
      readSegmentColor: appTheme === 'dark' ? DARK_GRAY : GRAY,
      dpr
    });
  }, [appTheme, isCloseFriend, size, values.read, values.total, withExtraGap, dpr]);
  if (!values.total) {
    return undefined;
  }
  const maxSize = SIZES[size];
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("canvas", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('story-circle', size, className),
    style: `max-width: ${maxSize}px; max-height: ${maxSize}px;`
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  peerId
}) => {
  const peerStories = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPeerStories)(global, peerId);
  const appTheme = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTheme)(global);
  return {
    peerStories: peerStories?.byId,
    storyIds: peerStories?.orderedIds,
    lastReadId: peerStories?.lastReadId,
    appTheme
  };
})(AvatarStoryCircle)));
function drawGradientCircle({
  canvas,
  size,
  color,
  segmentsCount,
  readSegmentsCount = 0,
  withExtraGap = false,
  readSegmentColor,
  dpr
}) {
  if (segmentsCount > SEGMENTS_MAX) {
    readSegmentsCount = Math.round(readSegmentsCount * (SEGMENTS_MAX / segmentsCount));
    segmentsCount = SEGMENTS_MAX;
  }
  const strokeModifier = Math.max(Math.max(size - SIZES.large * dpr, 0) / dpr / _helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_4__.REM / 1.5, 1) * dpr;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }
  canvas.width = size;
  canvas.height = size;
  const centerCoordinate = size / 2;
  const radius = (size - STROKE_WIDTH * strokeModifier) / 2;
  const segmentAngle = 2 * Math.PI / segmentsCount;
  const gapSize = GAP_PERCENT / 100 * (2 * Math.PI);
  const gradient = ctx.createLinearGradient(0, 0, Math.ceil(size * Math.cos(Math.PI / 2)), Math.ceil(size * Math.sin(Math.PI / 2)));
  const colorStops = color === 'purple' ? PURPLE : color === 'green' ? GREEN : BLUE;
  colorStops.forEach((colorStop, index) => {
    gradient.addColorStop(index / (colorStops.length - 1), colorStop);
  });
  ctx.lineCap = 'round';
  ctx.clearRect(0, 0, size, size);
  Array.from({
    length: segmentsCount
  }).forEach((_, i) => {
    const isRead = i < readSegmentsCount;
    let startAngle = i * segmentAngle - Math.PI / 2 + gapSize / 2;
    let endAngle = startAngle + segmentAngle - (segmentsCount > 1 ? gapSize : 0);
    ctx.strokeStyle = isRead ? readSegmentColor : gradient;
    ctx.lineWidth = (isRead ? STROKE_WIDTH_READ : STROKE_WIDTH) * strokeModifier;
    if (withExtraGap) {
      if (startAngle >= EXTRA_GAP_START && endAngle <= EXTRA_GAP_END) {
        // Segment is inside extra gap
        return;
      } else if (startAngle < EXTRA_GAP_START && endAngle > EXTRA_GAP_END) {
        // Extra gap is inside segment
        ctx.beginPath();
        ctx.arc(centerCoordinate, centerCoordinate, radius, EXTRA_GAP_END, endAngle);
        ctx.stroke();
        endAngle = EXTRA_GAP_START;
      } else if (startAngle < EXTRA_GAP_START && endAngle > EXTRA_GAP_START) {
        // Segment ends in extra gap
        endAngle = EXTRA_GAP_START;
      } else if (startAngle < EXTRA_GAP_END && endAngle > EXTRA_GAP_END) {
        // Segment starts in extra gap
        startAngle = EXTRA_GAP_END;
      }
    }
    ctx.beginPath();
    ctx.arc(centerCoordinate, centerCoordinate, radius, startAngle, endAngle);
    ctx.stroke();
  });
}

/***/ }),

/***/ "./src/components/common/FakeIcon.tsx":
/*!********************************************!*\
  !*** ./src/components/common/FakeIcon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _FakeIcon_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FakeIcon.scss */ "./src/components/common/FakeIcon.scss");



const FakeIcon = ({
  fakeType
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: "FakeIcon"
  }, lang(fakeType === 'fake' ? 'FakeMessage' : 'ScamMessage'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(FakeIcon));

/***/ }),

/***/ "./src/components/common/FullNameTitle.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/FullNameTitle.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_stopEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/stopEvent */ "./src/util/stopEvent.ts");
/* harmony import */ var _helpers_renderText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _CustomEmoji__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CustomEmoji */ "./src/components/common/CustomEmoji.tsx");
/* harmony import */ var _FakeIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FakeIcon */ "./src/components/common/FakeIcon.tsx");
/* harmony import */ var _icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _VerifiedIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./VerifiedIcon */ "./src/components/common/VerifiedIcon.tsx");
/* harmony import */ var _FullNameTitle_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FullNameTitle.module.scss */ "./src/components/common/FullNameTitle.module.scss");















const FullNameTitle = ({
  className,
  peer,
  noVerified,
  noFake,
  withEmojiStatus,
  emojiStatusSize,
  isSavedMessages,
  isSavedDialog,
  noLoopLimit,
  canCopyTitle,
  iconElement,
  allowMultiLine,
  onEmojiStatusClick,
  observeIntersection
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    showNotification
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const realPeer = 'id' in peer ? peer : undefined;
  const customPeer = 'isCustomPeer' in peer ? peer : undefined;
  const isUser = realPeer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isPeerUser)(realPeer);
  const title = realPeer && (isUser ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getUserFullName)(realPeer) : (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getChatTitle)(lang, realPeer));
  const isPremium = isUser && realPeer.isPremium;
  const canShowEmojiStatus = withEmojiStatus && !isSavedMessages && realPeer;
  const handleTitleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(e => {
    if (!title || !canCopyTitle) {
      return;
    }
    (0,_util_stopEvent__WEBPACK_IMPORTED_MODULE_6__["default"])(e);
    (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_5__.copyTextToClipboard)(title);
    showNotification({
      message: `${isUser ? 'User' : 'Chat'} name was copied`
    });
  });
  const specialTitle = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (customPeer) {
      return customPeer.title || lang(customPeer.titleKey);
    }
    if (isSavedMessages) {
      return lang(isSavedDialog ? 'MyNotes' : 'SavedMessages');
    }
    if ((0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isAnonymousForwardsChat)(realPeer.id)) {
      return lang('AnonymousForward');
    }
    if ((0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isChatWithRepliesBot)(realPeer.id)) {
      return lang('RepliesTitle');
    }
    if ((0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isChatWithVerificationCodesBot)(realPeer.id)) {
      return lang('VerifyCodesNotifications');
    }
    return undefined;
  }, [customPeer, isSavedDialog, isSavedMessages, lang, realPeer]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('title', _FullNameTitle_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].root, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    dir: "auto",
    role: "button",
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('fullName', _FullNameTitle_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].fullName, !allowMultiLine && _FullNameTitle_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].ellipsis, canCopyTitle && _FullNameTitle_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].canCopy),
    onClick: handleTitleClick
  }, specialTitle || (0,_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])(title || '')), !iconElement && peer && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, !noVerified && peer?.isVerified && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_VerifiedIcon__WEBPACK_IMPORTED_MODULE_13__["default"], null), !noFake && peer?.fakeType && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_FakeIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fakeType: peer.fakeType
  }), canShowEmojiStatus && realPeer.emojiStatus && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_CustomEmoji__WEBPACK_IMPORTED_MODULE_10__["default"], {
    documentId: realPeer.emojiStatus.documentId,
    size: emojiStatusSize,
    loopLimit: !noLoopLimit ? _config__WEBPACK_IMPORTED_MODULE_2__.EMOJI_STATUS_LOOP_LIMIT : undefined,
    observeIntersectionForLoading: observeIntersection,
    onClick: onEmojiStatusClick
  }), canShowEmojiStatus && !realPeer.emojiStatus && isPremium && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__["default"], null)), iconElement);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(FullNameTitle));

/***/ }),

/***/ "./src/components/common/VerifiedIcon.tsx":
/*!************************************************!*\
  !*** ./src/components/common/VerifiedIcon.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _VerifiedIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifiedIcon.scss */ "./src/components/common/VerifiedIcon.scss");


const VerifiedIcon = () => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: "VerifiedIcon",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z",
    style: "fill: var(--color-fill)"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z",
    style: "fill: var(--color-checkmark)"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifiedIcon);

/***/ }),

/***/ "./src/components/common/helpers/peerColor.ts":
/*!****************************************************!*\
  !*** ./src/components/common/helpers/peerColor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getApiPeerColorClass: () => (/* binding */ getApiPeerColorClass),
/* harmony export */   getPeerColorClass: () => (/* binding */ getPeerColorClass)
/* harmony export */ });
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");

function getPeerColorClass(peer, noUserColors, shouldReset) {
  if (!peer) {
    if (!shouldReset) return undefined;
    return noUserColors ? 'peer-color-count-1' : 'peer-color-0';
  }
  if ('isCustomPeer' in peer) {
    if (peer.peerColorId === undefined) return undefined;
    return `peer-color-${peer.peerColorId}`;
  }
  return noUserColors ? `peer-color-count-${(0,_global_helpers__WEBPACK_IMPORTED_MODULE_0__.getPeerColorCount)(peer)}` : `peer-color-${(0,_global_helpers__WEBPACK_IMPORTED_MODULE_0__.getPeerColorKey)(peer)}`;
}
function getApiPeerColorClass(color) {
  return `peer-color-${color.color}`;
}

/***/ }),

/***/ "./src/hooks/useContextMenuHandlers.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useContextMenuHandlers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/teact/teact-dom */ "./src/lib/teact/teact-dom.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLastCallback */ "./src/hooks/useLastCallback.ts");





const LONG_TAP_DURATION_MS = 200;
const IOS_PWA_CONTEXT_MENU_DELAY_MS = 100;
function stopEvent(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  e.stopPropagation();
}
const useContextMenuHandlers = (elementRef, isMenuDisabled, shouldDisableOnLink, shouldDisableOnLongTap, getIsReady, shouldDisablePropagation) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [contextMenuAnchor, setContextMenuAnchor] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [contextMenuTarget, setContextMenuTarget] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const handleBeforeContextMenu = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    if (!isMenuDisabled && e.button === 2) {
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMutation)(() => {
        (0,_lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__.addExtraClass)(e.target, 'no-selection');
      });
    }
  });
  const handleContextMenu = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_2__.requestMutation)(() => {
      (0,_lib_teact_teact_dom__WEBPACK_IMPORTED_MODULE_1__.removeExtraClass)(e.target, 'no-selection');
    });
    if (isMenuDisabled || shouldDisableOnLink && e.target.matches('a[href]')) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (contextMenuAnchor) {
      return;
    }
    setIsContextMenuOpen(true);
    setContextMenuAnchor({
      x: e.clientX,
      y: e.clientY
    });
    setContextMenuTarget(e.target);
  });
  const handleContextMenuClose = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    setIsContextMenuOpen(false);
  });
  const handleContextMenuHide = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    setContextMenuAnchor(undefined);
  });

  // Support context menu on touch devices
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMenuDisabled || !_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_TOUCH_ENV || shouldDisableOnLongTap || getIsReady && !getIsReady()) {
      return undefined;
    }
    const element = elementRef.current;
    if (!element) {
      return undefined;
    }
    let timer;
    const clearLongPressTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = undefined;
      }
    };
    const emulateContextMenuEvent = originalEvent => {
      clearLongPressTimer();
      const {
        clientX,
        clientY,
        target
      } = originalEvent.touches[0];
      if (contextMenuAnchor || shouldDisableOnLink && target.matches('a[href]')) {
        return;
      }

      // Temporarily intercept and clear the next click
      document.addEventListener('touchend', e => {
        // On iOS in PWA mode, the context menu may cause click-through to the element in the menu upon opening
        if (_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_IOS && _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_PWA) {
          setTimeout(() => {
            document.removeEventListener('mousedown', stopEvent, {
              capture: true
            });
            document.removeEventListener('click', stopEvent, {
              capture: true
            });
          }, IOS_PWA_CONTEXT_MENU_DELAY_MS);
        }
        stopEvent(e);
      }, {
        once: true,
        capture: true
      });

      // On iOS15, in PWA mode, the context menu immediately closes after opening
      if (_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_PWA && _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_3__.IS_IOS) {
        document.addEventListener('mousedown', stopEvent, {
          once: true,
          capture: true
        });
        document.addEventListener('click', stopEvent, {
          once: true,
          capture: true
        });
      }
      setIsContextMenuOpen(true);
      setContextMenuAnchor({
        x: clientX,
        y: clientY
      });
    };
    const startLongPressTimer = e => {
      if (isMenuDisabled) {
        return;
      }
      if (shouldDisablePropagation) e.stopPropagation();
      clearLongPressTimer();
      timer = window.setTimeout(() => emulateContextMenuEvent(e), LONG_TAP_DURATION_MS);
    };

    // @perf Consider event delegation
    element.addEventListener('touchstart', startLongPressTimer, {
      passive: true
    });
    element.addEventListener('touchcancel', clearLongPressTimer, true);
    element.addEventListener('touchend', clearLongPressTimer, true);
    element.addEventListener('touchmove', clearLongPressTimer, {
      passive: true
    });
    return () => {
      clearLongPressTimer();
      element.removeEventListener('touchstart', startLongPressTimer);
      element.removeEventListener('touchcancel', clearLongPressTimer, true);
      element.removeEventListener('touchend', clearLongPressTimer, true);
      element.removeEventListener('touchmove', clearLongPressTimer);
    };
  }, [contextMenuAnchor, isMenuDisabled, shouldDisableOnLongTap, elementRef, shouldDisableOnLink, getIsReady, shouldDisablePropagation]);
  return {
    isContextMenuOpen,
    contextMenuAnchor,
    contextMenuTarget,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useContextMenuHandlers);

/***/ }),

/***/ "./src/hooks/useFastClick.ts":
/*!***********************************!*\
  !*** ./src/hooks/useFastClick.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFastClick: () => (/* binding */ useFastClick)
/* harmony export */ });
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLastCallback */ "./src/hooks/useLastCallback.ts");


function useFastClick(callback) {
  const handler = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    if (e.type === 'mousedown' && e.button !== _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Main) {
      return;
    }
    callback(e);
  });
  return _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_0__.IS_TOUCH_ENV ? {
    handleClick: callback ? handler : undefined
  } : {
    handleMouseDown: callback ? handler : undefined
  };
}

/***/ }),

/***/ "./src/hooks/useInfiniteScroll.ts":
/*!****************************************!*\
  !*** ./src/hooks/useInfiniteScroll.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useForceUpdate */ "./src/hooks/useForceUpdate.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usePreviousDeprecated */ "./src/hooks/usePreviousDeprecated.ts");






const DEFAULT_LIST_SLICE = 30;
const useInfiniteScroll = (loadMoreBackwards, listIds, isDisabled = false, listSlice = DEFAULT_LIST_SLICE) => {
  const requestParamsRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const currentStateRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!currentStateRef.current && listIds && !isDisabled) {
    const {
      newViewportIds,
      newIsOnTop,
      fromOffset
    } = getViewportSlice(listIds, _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Forwards, listSlice, listIds[0]);
    currentStateRef.current = {
      viewportIds: newViewportIds,
      isOnTop: newIsOnTop,
      offset: fromOffset
    };
  }
  const forceUpdate = (0,_useForceUpdate__WEBPACK_IMPORTED_MODULE_3__["default"])();
  if (isDisabled) {
    requestParamsRef.current = {};
  }
  const prevListIds = (0,_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(listIds);
  const prevIsDisabled = (0,_usePreviousDeprecated__WEBPACK_IMPORTED_MODULE_5__["default"])(isDisabled);
  if (listIds && !isDisabled && (listIds !== prevListIds || isDisabled !== prevIsDisabled)) {
    const {
      viewportIds,
      isOnTop
    } = currentStateRef.current || {};
    const currentMiddleId = viewportIds && !isOnTop ? viewportIds[Math.round(viewportIds.length / 2)] : undefined;
    const defaultOffsetId = currentMiddleId && listIds.includes(currentMiddleId) ? currentMiddleId : listIds[0];
    const {
      offsetId = defaultOffsetId,
      direction = _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Forwards
    } = requestParamsRef.current || {};
    const {
      newViewportIds,
      newIsOnTop,
      fromOffset
    } = getViewportSlice(listIds, direction, listSlice, offsetId);
    requestParamsRef.current = {};
    if (!viewportIds || !(0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.areSortedArraysEqual)(viewportIds, newViewportIds)) {
      currentStateRef.current = {
        viewportIds: newViewportIds,
        isOnTop: newIsOnTop,
        offset: fromOffset
      };
    }
  } else if (!listIds) {
    currentStateRef.current = undefined;
  }
  const getMore = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(({
    direction,
    noScroll
  }) => {
    const {
      viewportIds
    } = currentStateRef.current || {};
    const offsetId = viewportIds ? direction === _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Backwards ? viewportIds[viewportIds.length - 1] : viewportIds[0] : undefined;
    if (!listIds) {
      if (loadMoreBackwards) {
        loadMoreBackwards({
          offsetId
        });
      }
      return;
    }
    const {
      newViewportIds,
      areSomeLocal,
      areAllLocal,
      newIsOnTop,
      fromOffset
    } = getViewportSlice(listIds, direction, listSlice, offsetId);
    if (areSomeLocal && !(viewportIds && (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_2__.areSortedArraysEqual)(viewportIds, newViewportIds))) {
      currentStateRef.current = {
        viewportIds: newViewportIds,
        isOnTop: newIsOnTop,
        offset: fromOffset
      };
      forceUpdate();
    }
    if (!areAllLocal && loadMoreBackwards) {
      if (!noScroll) {
        requestParamsRef.current = {
          ...requestParamsRef.current,
          direction,
          offsetId
        };
      }
      loadMoreBackwards({
        offsetId
      });
    }
  });
  return isDisabled ? [listIds] : [currentStateRef.current?.viewportIds, getMore, currentStateRef.current?.offset];
};
function getViewportSlice(sourceIds, direction, listSlice, offsetId) {
  const {
    length
  } = sourceIds;
  const index = offsetId ? sourceIds.indexOf(offsetId) : 0;
  const isForwards = direction === _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Forwards;
  const indexForDirection = isForwards ? index : index + 1 || length;
  const from = Math.max(0, indexForDirection - listSlice);
  const to = indexForDirection + listSlice - 1;
  const newViewportIds = sourceIds.slice(Math.max(0, from), to + 1);
  let areSomeLocal;
  let areAllLocal;
  switch (direction) {
    case _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Forwards:
      areSomeLocal = indexForDirection >= 0;
      areAllLocal = from >= 0;
      break;
    case _types__WEBPACK_IMPORTED_MODULE_1__.LoadMoreDirection.Backwards:
      areSomeLocal = indexForDirection < length;
      areAllLocal = to <= length - 1;
      break;
  }
  return {
    newViewportIds,
    areSomeLocal,
    areAllLocal,
    newIsOnTop: newViewportIds[0] === sourceIds[0],
    fromOffset: from
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

/***/ }),

/***/ "./src/hooks/useLayoutEffectWithPrevDeps.ts":
/*!**************************************************!*\
  !*** ./src/hooks/useLayoutEffectWithPrevDeps.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");

const useLayoutEffectWithPrevDeps = (cb, dependencies, debugKey) => {
  const prevDepsRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const prevDeps = prevDepsRef.current;
    prevDepsRef.current = dependencies;
    return cb(prevDeps || []);
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, dependencies, debugKey);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayoutEffectWithPrevDeps);

/***/ }),

/***/ "./src/lib/fastBlur.js":
/*!*****************************!*\
  !*** ./src/lib/fastBlur.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ boxBlurCanvasRGB)
/* harmony export */ });
/* eslint-disable no-nested-ternary */
/* eslint-disable no-bitwise */
/* eslint-disable no-multi-assign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */

/*
Superfast Blur - a fast Box Blur For Canvas

Version:     0.5
Author:        Mario Klingemann
Contact:     mario@quasimondo.com
Website:    http://www.quasimondo.com/BoxBlurForCanvas
Twitter:    @quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr:
https://flattr.com/thing/140066/Superfast-Blur-a-pretty-fast-Box-Blur-Effect-for-CanvasJavascript

Copyright (c) 2011 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

// eslint-disable-next-line max-len
const mul_table = [1, 57, 41, 21, 203, 34, 97, 73, 227, 91, 149, 62, 105, 45, 39, 137, 241, 107, 3, 173, 39, 71, 65, 238, 219, 101, 187, 87, 81, 151, 141, 133, 249, 117, 221, 209, 197, 187, 177, 169, 5, 153, 73, 139, 133, 127, 243, 233, 223, 107, 103, 99, 191, 23, 177, 171, 165, 159, 77, 149, 9, 139, 135, 131, 253, 245, 119, 231, 224, 109, 211, 103, 25, 195, 189, 23, 45, 175, 171, 83, 81, 79, 155, 151, 147, 9, 141, 137, 67, 131, 129, 251, 123, 30, 235, 115, 113, 221, 217, 53, 13, 51, 50, 49, 193, 189, 185, 91, 179, 175, 43, 169, 83, 163, 5, 79, 155, 19, 75, 147, 145, 143, 35, 69, 17, 67, 33, 65, 255, 251, 247, 243, 239, 59, 29, 229, 113, 111, 219, 27, 213, 105, 207, 51, 201, 199, 49, 193, 191, 47, 93, 183, 181, 179, 11, 87, 43, 85, 167, 165, 163, 161, 159, 157, 155, 77, 19, 75, 37, 73, 145, 143, 141, 35, 138, 137, 135, 67, 33, 131, 129, 255, 63, 250, 247, 61, 121, 239, 237, 117, 29, 229, 227, 225, 111, 55, 109, 216, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 48, 190, 47, 93, 185, 183, 181, 179, 178, 176, 175, 173, 171, 85, 21, 167, 165, 41, 163, 161, 5, 79, 157, 78, 154, 153, 19, 75, 149, 74, 147, 73, 144, 143, 71, 141, 140, 139, 137, 17, 135, 134, 133, 66, 131, 65, 129, 1];
// eslint-disable-next-line max-len
const shg_table = [0, 9, 10, 10, 14, 12, 14, 14, 16, 15, 16, 15, 16, 15, 15, 17, 18, 17, 12, 18, 16, 17, 17, 19, 19, 18, 19, 18, 18, 19, 19, 19, 20, 19, 20, 20, 20, 20, 20, 20, 15, 20, 19, 20, 20, 20, 21, 21, 21, 20, 20, 20, 21, 18, 21, 21, 21, 21, 20, 21, 17, 21, 21, 21, 22, 22, 21, 22, 22, 21, 22, 21, 19, 22, 22, 19, 20, 22, 22, 21, 21, 21, 22, 22, 22, 18, 22, 22, 21, 22, 22, 23, 22, 20, 23, 22, 22, 23, 23, 21, 19, 21, 21, 21, 23, 23, 23, 22, 23, 23, 21, 23, 22, 23, 18, 22, 23, 20, 22, 23, 23, 23, 21, 22, 20, 22, 21, 22, 24, 24, 24, 24, 24, 22, 21, 24, 23, 23, 24, 21, 24, 23, 24, 22, 24, 24, 22, 24, 24, 22, 23, 24, 24, 24, 20, 23, 22, 23, 24, 24, 24, 24, 24, 24, 24, 23, 21, 23, 22, 23, 24, 24, 24, 22, 24, 24, 24, 23, 22, 24, 24, 25, 23, 25, 25, 23, 24, 25, 25, 24, 22, 25, 25, 25, 24, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 23, 25, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24, 22, 25, 25, 23, 25, 25, 20, 24, 25, 24, 25, 25, 22, 24, 25, 24, 25, 24, 25, 25, 24, 25, 25, 25, 25, 22, 25, 25, 25, 24, 25, 24, 25, 18];
function boxBlurCanvasRGB(context, top_x, top_y, width, height, radius, iterations) {
  if (Number.isNaN(radius) || radius < 1) return;
  radius |= 0;
  if (Number.isNaN(iterations)) iterations = 1;
  iterations |= 0;
  if (iterations > 3) iterations = 3;
  if (iterations < 1) iterations = 1;
  const imageData = context.getImageData(top_x, top_y, width, height);
  const pixels = imageData.data;
  let rsum;
  let gsum;
  let bsum;
  let x;
  let y;
  let i;
  let p;
  let p1;
  let p2;
  let yp;
  let yi;
  let yw;
  let wm = width - 1;
  let hm = height - 1;
  let rad1 = radius + 1;
  let r = [];
  let g = [];
  let b = [];
  let mul_sum = mul_table[radius];
  let shg_sum = shg_table[radius];
  let vmin = [];
  let vmax = [];
  while (iterations-- > 0) {
    yw = yi = 0;
    for (y = 0; y < height; y++) {
      rsum = pixels[yw] * rad1;
      gsum = pixels[yw + 1] * rad1;
      bsum = pixels[yw + 2] * rad1;
      for (i = 1; i <= radius; i++) {
        p = yw + ((i > wm ? wm : i) << 2);
        rsum += pixels[p++];
        gsum += pixels[p++];
        bsum += pixels[p++];
      }
      for (x = 0; x < width; x++) {
        r[yi] = rsum;
        g[yi] = gsum;
        b[yi] = bsum;
        if (y == 0) {
          vmin[x] = ((p = x + rad1) < wm ? p : wm) << 2;
          vmax[x] = (p = x - radius) > 0 ? p << 2 : 0;
        }
        p1 = yw + vmin[x];
        p2 = yw + vmax[x];
        rsum += pixels[p1++] - pixels[p2++];
        gsum += pixels[p1++] - pixels[p2++];
        bsum += pixels[p1++] - pixels[p2++];
        yi++;
      }
      yw += width << 2;
    }
    for (x = 0; x < width; x++) {
      yp = x;
      rsum = r[yp] * rad1;
      gsum = g[yp] * rad1;
      bsum = b[yp] * rad1;
      for (i = 1; i <= radius; i++) {
        yp += i > hm ? 0 : width;
        rsum += r[yp];
        gsum += g[yp];
        bsum += b[yp];
      }
      yi = x << 2;
      for (y = 0; y < height; y++) {
        pixels[yi] = rsum * mul_sum >>> shg_sum;
        pixels[yi + 1] = gsum * mul_sum >>> shg_sum;
        pixels[yi + 2] = bsum * mul_sum >>> shg_sum;
        if (x == 0) {
          vmin[y] = ((p = y + rad1) < hm ? p : hm) * width;
          vmax[y] = (p = y - radius) > 0 ? p * width : 0;
        }
        p1 = x + vmin[y];
        p2 = x + vmax[y];
        rsum += r[p1] - r[p2];
        gsum += g[p1] - g[p2];
        bsum += b[p1] - b[p2];
        yi += width << 2;
      }
    }
  }
  context.putImageData(imageData, top_x, top_y);
}

/***/ }),

/***/ "./src/util/directInputManager.ts":
/*!****************************************!*\
  !*** ./src/util/directInputManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableDirectTextInput: () => (/* binding */ disableDirectTextInput),
/* harmony export */   enableDirectTextInput: () => (/* binding */ enableDirectTextInput),
/* harmony export */   getIsDirectTextInputDisabled: () => (/* binding */ getIsDirectTextInputDisabled)
/* harmony export */ });
let counter = 0;
function disableDirectTextInput() {
  counter += 1;
}
function enableDirectTextInput() {
  counter -= 1;
}
function getIsDirectTextInputDisabled() {
  return counter > 0;
}

/***/ }),

/***/ "./src/util/hoc/freezeWhenClosed.ts":
/*!******************************************!*\
  !*** ./src/util/hoc/freezeWhenClosed.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freezeWhenClosed)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");

function freezeWhenClosed(Component) {
  function ComponentWrapper(props) {
    const newProps = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);
    if (props.isOpen) {
      newProps.current = props;
    } else {
      newProps.current = {
        ...newProps.current,
        isOpen: false
      };
    }
    return Component(newProps.current);
  }
  return ComponentWrapper;
}

/***/ }),

/***/ "./src/util/resetScroll.ts":
/*!*********************************!*\
  !*** ./src/util/resetScroll.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   stopScrollInertia: () => (/* binding */ stopScrollInertia)
/* harmony export */ });
/* harmony import */ var _forceReflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forceReflow */ "./src/util/forceReflow.ts");
/* harmony import */ var _windowEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windowEnvironment */ "./src/util/windowEnvironment.ts");


const resetScroll = (container, scrollTop) => {
  if (_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_IOS) {
    container.style.overflow = 'hidden';
  }
  if (scrollTop !== undefined) {
    container.scrollTop = scrollTop;
  }
  if (_windowEnvironment__WEBPACK_IMPORTED_MODULE_1__.IS_IOS) {
    container.style.overflow = '';
  }
};
function stopScrollInertia(element) {
  element.style.display = 'none';
  (0,_forceReflow__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  element.style.display = '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetScroll);

/***/ }),

/***/ "./src/util/trapFocus.ts":
/*!*******************************!*\
  !*** ./src/util/trapFocus.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trapFocus)
/* harmony export */ });
function trapFocus(element) {
  function handleKeyDown(e) {
    if (e.key !== 'Tab') {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const focusableElements = Array.from(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    if (!focusableElements.length) {
      return;
    }
    const currentFocusedIndex = focusableElements.findIndex(em => em.isSameNode(document.activeElement));
    let newFocusedIndex = 0;
    if (currentFocusedIndex >= 0) {
      if (e.shiftKey) {
        newFocusedIndex = currentFocusedIndex > 0 ? currentFocusedIndex - 1 : focusableElements.length - 1;
      } else {
        newFocusedIndex = currentFocusedIndex < focusableElements.length - 1 ? currentFocusedIndex + 1 : 0;
      }
    }
    focusableElements[newFocusedIndex].focus();
  }
  document.addEventListener('keydown', handleKeyDown, false);
  return () => {
    document.removeEventListener('keydown', handleKeyDown, false);
  };
}

/***/ }),

/***/ "./src/components/common/FakeIcon.scss":
/*!*********************************************!*\
  !*** ./src/components/common/FakeIcon.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/common/FullNameTitle.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/common/FullNameTitle.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"FullNameTitle-module__root","fullName":"FullNameTitle-module__fullName","canCopy":"FullNameTitle-module__canCopy","ellipsis":"FullNameTitle-module__ellipsis"});

/***/ }),

/***/ "./src/components/common/VerifiedIcon.scss":
/*!*************************************************!*\
  !*** ./src/components/common/VerifiedIcon.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_components_common_Avatar_tsx-src_components_common_FullNameTitle_tsx-src_hooks_useContext-631740.3e46c7753dac22203bb6.js.map