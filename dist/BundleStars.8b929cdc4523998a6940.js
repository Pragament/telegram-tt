"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["BundleStars"],{

/***/ "./src/bundles/stars.ts":
/*!******************************!*\
  !*** ./src/bundles/stars.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftInfoModal: () => (/* reexport safe */ _components_modals_gift_info_GiftInfoModal__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   GiftModal: () => (/* reexport safe */ _components_modals_gift_GiftModal__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   GiftRecipientPicker: () => (/* reexport safe */ _components_modals_gift_recipient_GiftRecipientPicker__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   PaidReactionModal: () => (/* reexport safe */ _components_modals_paidReaction_PaidReactionModal__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   StarPaymentModal: () => (/* reexport safe */ _components_modals_stars_StarsPaymentModal__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   StarsBalanceModal: () => (/* reexport safe */ _components_modals_stars_StarsBalanceModal__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   StarsGiftModal: () => (/* reexport safe */ _components_modals_stars_gift_StarsGiftModal__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   StarsGiftingPickerModal: () => (/* reexport safe */ _components_main_premium_StarsGiftingPickerModal__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   StarsSubscriptionModal: () => (/* reexport safe */ _components_modals_stars_subscription_StarsSubscriptionModal__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   StarsTransactionInfoModal: () => (/* reexport safe */ _components_modals_stars_transaction_StarsTransactionModal__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _components_modals_stars_gift_StarsGiftModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals/stars/gift/StarsGiftModal */ "./src/components/modals/stars/gift/StarsGiftModal.tsx");
/* harmony import */ var _components_main_premium_StarsGiftingPickerModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/premium/StarsGiftingPickerModal */ "./src/components/main/premium/StarsGiftingPickerModal.tsx");
/* harmony import */ var _components_modals_stars_StarsBalanceModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modals/stars/StarsBalanceModal */ "./src/components/modals/stars/StarsBalanceModal.tsx");
/* harmony import */ var _components_modals_stars_StarsPaymentModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modals/stars/StarsPaymentModal */ "./src/components/modals/stars/StarsPaymentModal.tsx");
/* harmony import */ var _components_modals_stars_transaction_StarsTransactionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modals/stars/transaction/StarsTransactionModal */ "./src/components/modals/stars/transaction/StarsTransactionModal.tsx");
/* harmony import */ var _components_modals_stars_subscription_StarsSubscriptionModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modals/stars/subscription/StarsSubscriptionModal */ "./src/components/modals/stars/subscription/StarsSubscriptionModal.tsx");
/* harmony import */ var _components_modals_paidReaction_PaidReactionModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modals/paidReaction/PaidReactionModal */ "./src/components/modals/paidReaction/PaidReactionModal.tsx");
/* harmony import */ var _components_modals_gift_GiftModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modals/gift/GiftModal */ "./src/components/modals/gift/GiftModal.tsx");
/* harmony import */ var _components_modals_gift_recipient_GiftRecipientPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modals/gift/recipient/GiftRecipientPicker */ "./src/components/modals/gift/recipient/GiftRecipientPicker.tsx");
/* harmony import */ var _components_modals_gift_info_GiftInfoModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modals/gift/info/GiftInfoModal */ "./src/components/modals/gift/info/GiftInfoModal.tsx");











/***/ }),

/***/ "./src/components/common/BadgeButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/BadgeButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BadgeButton.module.scss */ "./src/components/common/BadgeButton.module.scss");



const BadgeButton = ({
  children,
  className,
  onClick
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
    onClick: onClick
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeButton);

/***/ }),

/***/ "./src/components/main/premium/StarsGiftingPickerModal.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/main/premium/StarsGiftingPickerModal.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/sortChatIds */ "./src/components/common/helpers/sortChatIds.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/pickers/PeerPicker */ "./src/components/common/pickers/PeerPicker.tsx");
/* harmony import */ var _common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/pickers/PickerModal */ "./src/components/common/pickers/PickerModal.tsx");
/* harmony import */ var _StarsGiftingPickerModal_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StarsGiftingPickerModal.module.scss */ "./src/components/main/premium/StarsGiftingPickerModal.module.scss");











const StarsGiftingPickerModal = ({
  isOpen,
  currentUserId,
  activeListIds,
  archivedListIds,
  userIds
}) => {
  const {
    closeStarsGiftingPickerModal,
    openStarsGiftModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [searchQuery, setSearchQuery] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const displayedUserIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const usersById = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().users.byId;
    const combinedIds = [...(userIds || []), ...(activeListIds || []), ...(archivedListIds || [])];
    const filteredContactIds = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.filterUsersByName)(combinedIds, usersById, searchQuery);
    return (0,_common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_util_iteratees__WEBPACK_IMPORTED_MODULE_4__.unique)(filteredContactIds).filter(id => {
      const user = usersById[id];
      if (!user) {
        return false;
      }
      return !user.isSupport && !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isUserBot)(user) && !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isDeletedUser)(user) && id !== currentUserId && id !== _config__WEBPACK_IMPORTED_MODULE_2__.SERVICE_NOTIFICATIONS_USER_ID;
    }));
  }, [currentUserId, searchQuery, userIds, activeListIds, archivedListIds]);
  const handleSelectedUserIdsChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(newSelectedId => {
    if (newSelectedId?.length) {
      openStarsGiftModal({
        forUserId: newSelectedId
      });
      closeStarsGiftingPickerModal();
    }
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: _StarsGiftingPickerModal_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].root,
    isOpen: isOpen,
    onClose: closeStarsGiftingPickerModal,
    title: oldLang('GiftStarsTitle'),
    hasCloseButton: true,
    shouldAdaptToSearch: true,
    withFixedHeight: true,
    confirmButtonText: oldLang('Continue'),
    onEnter: closeStarsGiftingPickerModal
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _StarsGiftingPickerModal_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].picker,
    itemIds: displayedUserIds,
    filterValue: searchQuery,
    filterPlaceholder: oldLang('Search'),
    onFilterChange: setSearchQuery,
    isSearchable: true,
    withDefaultPadding: true,
    withStatus: true,
    onSelectedIdChange: handleSelectedUserIdsChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    chats: {
      listIds
    },
    currentUserId
  } = global;
  return {
    userIds: global.contactList?.userIds,
    activeListIds: listIds.active,
    archivedListIds: listIds.archived,
    currentUserId
  };
})(StarsGiftingPickerModal)));

/***/ }),

/***/ "./src/components/modals/gift/GiftComposer.tsx":
/*!*****************************************************!*\
  !*** ./src/components/modals/gift/GiftComposer.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_PremiumProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/PremiumProgress */ "./src/components/common/PremiumProgress.tsx");
/* harmony import */ var _middle_ActionMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../middle/ActionMessage */ "./src/components/middle/ActionMessage.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/ListItem */ "./src/components/ui/ListItem.tsx");
/* harmony import */ var _ui_Switcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/Switcher */ "./src/components/ui/Switcher.tsx");
/* harmony import */ var _ui_TextArea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/TextArea */ "./src/components/ui/TextArea.tsx");
/* harmony import */ var _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GiftComposer.module.scss */ "./src/components/modals/gift/GiftComposer.module.scss");

















const LIMIT_DISPLAY_THRESHOLD = 50;
function GiftComposer({
  gift,
  userId,
  user,
  captionLimit,
  patternColor,
  currentUserId,
  isPaymentFormLoading
}) {
  const {
    sendStarGift,
    openInvoice
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [giftMessage, setGiftMessage] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [shouldHideName, setShouldHideName] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isStarGift = 'id' in gift;
  const localMessage = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isStarGift) {
      return {
        id: -1,
        chatId: '0',
        isOutgoing: true,
        senderId: currentUserId,
        date: Math.floor(Date.now() / 1000),
        content: {
          action: {
            targetUserIds: [userId],
            mediaType: 'action',
            text: 'ActionGiftInbound',
            type: 'giftPremium',
            amount: gift.amount,
            currency: gift.currency,
            months: gift.months,
            message: {
              text: giftMessage
            },
            translationValues: ['%action_origin%', '%gift_payment_amount%']
          }
        }
      };
    }
    return {
      id: -1,
      chatId: currentUserId,
      isOutgoing: false,
      senderId: currentUserId,
      date: Math.floor(Date.now() / 1000),
      content: {
        action: {
          targetUserIds: [userId],
          mediaType: 'action',
          text: 'ActionGiftInbound',
          type: 'starGift',
          currency: _config__WEBPACK_IMPORTED_MODULE_2__.STARS_CURRENCY_CODE,
          amount: gift.stars,
          starGift: {
            message: giftMessage?.length ? {
              text: giftMessage
            } : undefined,
            isNameHidden: shouldHideName,
            starsToConvert: gift.starsToConvert,
            isSaved: false,
            isConverted: false,
            gift
          },
          translationValues: ['%action_origin%', '%gift_payment_amount%']
        }
      }
    };
  }, [currentUserId, gift, giftMessage, isStarGift, shouldHideName, userId]);
  const handleGiftMessageChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(e => {
    setGiftMessage(e.target.value);
  });
  const handleShouldHideNameChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    setShouldHideName(!shouldHideName);
  });
  const handleMainButtonClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    if (isStarGift) {
      sendStarGift({
        userId,
        shouldHideName,
        gift,
        message: giftMessage ? {
          text: giftMessage
        } : undefined
      });
      return;
    }
    openInvoice({
      type: 'giftcode',
      userIds: [userId],
      currency: gift.currency,
      amount: gift.amount,
      option: gift,
      message: giftMessage ? {
        text: giftMessage
      } : undefined
    });
  });
  function renderOptionsSection() {
    const symbolsLeft = captionLimit ? captionLimit - giftMessage.length : undefined;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].optionsSection
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_TextArea__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].messageInput,
      onChange: handleGiftMessageChange,
      value: giftMessage,
      label: lang('GiftMessagePlaceholder'),
      maxLength: captionLimit,
      maxLengthIndicator: symbolsLeft && symbolsLeft < LIMIT_DISPLAY_THRESHOLD ? symbolsLeft.toString() : undefined
    }), isStarGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].switcher,
      narrow: true,
      ripple: true,
      onClick: handleShouldHideNameChange
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, lang('GiftHideMyName')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Switcher__WEBPACK_IMPORTED_MODULE_14__["default"], {
      checked: shouldHideName,
      onChange: handleShouldHideNameChange,
      label: lang('GiftHideMyName')
    })));
  }
  function renderFooter() {
    const userFullName = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getUserFullName)(user);
    const amount = isStarGift ? (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_7__.formatStarsAsIcon)(lang, gift.stars, true) : (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_6__.formatCurrency)(gift.amount, gift.currency);
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].footer
    }, isStarGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].description
    }, lang('GiftHideNameDescription', {
      profile: userFullName,
      receiver: userFullName
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].spacer
    }), isStarGift && gift.availabilityRemains && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PremiumProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isPrimary: true,
      progress: gift.availabilityRemains / gift.availabilityTotal,
      rightText: lang('GiftSoldCount', {
        count: gift.availabilityTotal - gift.availabilityRemains
      }),
      leftText: lang('GiftLeftCount', {
        count: gift.availabilityRemains
      }),
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].limited
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].mainButton,
      onClick: handleMainButtonClick,
      isLoading: isPaymentFormLoading
    }, lang('GiftSend', {
      amount
    }, {
      withNodes: true
    })));
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].root, 'no-scroll')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].actionMessageView, 'MessageList')
    // @ts-ignore -- FIXME: Find a way to disable interactions but keep a11y
    ,
    inert: true,
    style: `--pattern-color: ${patternColor}`
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_middle_ActionMessage__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: isStarGift ? gift.id : gift.months,
    message: localMessage
  })), renderOptionsSection(), renderFooter());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  userId
}) => {
  const theme = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTheme)(global);
  const {
    patternColor
  } = global.settings.themes[theme] || {};
  const user = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, userId);
  const tabState = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTabState)(global);
  return {
    user,
    patternColor,
    captionLimit: global.appConfig?.starGiftMaxMessageLength,
    currentUserId: global.currentUserId,
    isPaymentFormLoading: tabState.isPaymentFormLoading
  };
})(GiftComposer)));

/***/ }),

/***/ "./src/components/modals/gift/GiftItemPremium.tsx":
/*!********************************************************!*\
  !*** ./src/components/modals/gift/GiftItemPremium.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GiftItem.module.scss */ "./src/components/modals/gift/GiftItem.module.scss");










const GIFT_STICKER_SIZE = 86;
function GiftItemPremium({
  sticker,
  canPlayAnimatedEmojis,
  baseMonthAmount,
  option,
  onClick
}) {
  const {
    months,
    amount,
    currency
  } = option;
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const handleGiftClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    onClick(option);
  });
  const perMonth = Math.floor(amount / months);
  const discount = baseMonthAmount && baseMonthAmount > perMonth ? Math.ceil(100 - perMonth / (baseMonthAmount / 100)) : undefined;
  function renderMonths() {
    const caption = months === 12 ? lang('Years', {
      count: 1
    }, {
      pluralValue: 1
    }) : lang('Months', {
      count: months
    }, {
      pluralValue: months
    });
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].monthsDescription
    }, caption);
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].container,
    tabIndex: 0,
    role: "button",
    onClick: handleGiftClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sticker: sticker,
    play: canPlayAnimatedEmojis,
    noLoop: true,
    nonInteractive: true,
    size: GIFT_STICKER_SIZE
  }), renderMonths(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].description
  }, lang('PremiumGiftDescription')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].buy,
    nonInteractive: true,
    size: "tiny",
    pill: true,
    fluid: true
  }, (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_3__.formatCurrencyAsString)(amount, currency)), Boolean(discount) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "red",
    text: lang('GiftDiscount', {
      percent: discount
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  option
}) => {
  const sticker = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectGiftStickerForDuration)(global, option.months);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanPlayAnimatedEmojis)(global);
  return {
    sticker,
    canPlayAnimatedEmojis
  };
})(GiftItemPremium)));

/***/ }),

/***/ "./src/components/modals/gift/GiftItemStar.tsx":
/*!*****************************************************!*\
  !*** ./src/components/modals/gift/GiftItemStar.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GiftItem.module.scss */ "./src/components/modals/gift/GiftItem.module.scss");










const GIFT_STICKER_SIZE = 90;
function GiftItemStar({
  sticker,
  gift,
  onClick
}) {
  const {
    openGiftInfoModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    stars,
    isLimited,
    isSoldOut
  } = gift;
  const handleGiftClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    if (isSoldOut) {
      openGiftInfoModal({
        gift
      });
      return;
    }
    onClick(gift);
  });
  if (!sticker) return undefined;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].container, _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].starGift),
    tabIndex: 0,
    role: "button",
    onClick: handleGiftClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sticker: sticker,
    noLoop: true,
    nonInteractive: true,
    size: GIFT_STICKER_SIZE
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].buy,
    nonInteractive: true,
    size: "tiny",
    color: "stars",
    withSparkleEffect: true,
    pill: true,
    fluid: true
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "star",
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].star
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].amount
  }, stars)), isLimited && !isSoldOut && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "blue",
    text: lang('GiftLimited')
  }), isSoldOut && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "red",
    text: lang('GiftSoldOut')
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  gift
}) => {
  const sticker = global.stickers.starGifts.stickers[gift.stickerId];
  return {
    sticker
  };
})(GiftItemStar)));

/***/ }),

/***/ "./src/components/modals/gift/GiftModal.tsx":
/*!**************************************************!*\
  !*** ./src/components/modals/gift/GiftModal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_Transition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Transition */ "./src/components/ui/Transition.tsx");
/* harmony import */ var _stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../stars/BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _GiftComposer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GiftComposer */ "./src/components/modals/gift/GiftComposer.tsx");
/* harmony import */ var _GiftItemPremium__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GiftItemPremium */ "./src/components/modals/gift/GiftItemPremium.tsx");
/* harmony import */ var _GiftItemStar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./GiftItemStar */ "./src/components/modals/gift/GiftItemStar.tsx");
/* harmony import */ var _StarGiftCategoryList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StarGiftCategoryList */ "./src/components/modals/gift/StarGiftCategoryList.tsx");
/* harmony import */ var _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./GiftModal.module.scss */ "./src/components/modals/gift/GiftModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");





















const PremiumGiftModal = ({
  modal,
  starGiftsById,
  starGiftCategoriesByName,
  starBalance,
  user
}) => {
  const {
    closeGiftModal,
    requestConfetti
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  // eslint-disable-next-line no-null/no-null
  const dialogRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const transitionRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const giftHeaderRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpen = Boolean(modal);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_5__["default"])(modal);
  const [selectedGift, setSelectedGift] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isHeaderHidden, setIsHeaderHidden] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isHeaderForStarGifts, setIsHeaderForStarGifts] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedCategory, setSelectedCategory] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const filteredGifts = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return renderingModal?.gifts?.sort((prevGift, gift) => prevGift.months - gift.months).filter(gift => gift.users === 1);
  }, [renderingModal]);
  const baseGift = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return filteredGifts?.reduce((prev, gift) => prev.amount < gift.amount ? prev : gift);
  }, [filteredGifts]);
  const showConfetti = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      const {
        top,
        left,
        width,
        height
      } = dialog.querySelector('.modal-content').getBoundingClientRect();
      requestConfetti({
        top,
        left,
        width,
        height,
        withStars: true
      });
    }
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (renderingModal?.isCompleted) {
      showConfetti();
    }
  }, [renderingModal]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      setIsHeaderHidden(true);
      setSelectedGift(undefined);
    }
  }, [isOpen]);
  const handleScroll = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(e => {
    if (selectedGift) return;
    const {
      scrollTop
    } = e.currentTarget;
    setIsHeaderHidden(scrollTop <= 150);
    if (transitionRef.current && giftHeaderRef.current) {
      const {
        top: headerTop
      } = giftHeaderRef.current.getBoundingClientRect();
      const {
        top: transitionTop
      } = transitionRef.current.getBoundingClientRect();
      setIsHeaderForStarGifts(headerTop - transitionTop <= 0);
    }
  });
  const giftPremiumDescription = lang('GiftPremiumDescription', {
    user: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(user),
    link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
      text: lang('GiftPremiumDescriptionLinkCaption'),
      url: lang('GiftPremiumDescriptionLink')
    })
  }, {
    withNodes: true
  });
  const starGiftDescription = lang('StarGiftDescription', {
    user: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(user)
  }, {
    withNodes: true
  });
  function renderGiftPremiumHeader() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].headerText, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].center)
    }, lang('GiftPremiumHeader'));
  }
  function renderGiftPremiumDescription() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].description, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].center)
    }, giftPremiumDescription);
  }
  function renderStarGiftsHeader() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
      ref: giftHeaderRef,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].headerText, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].center)
    }, lang('StarsGiftHeader'));
  }
  function renderStarGiftsDescription() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].description, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].starGiftsDescription, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].center)
    }, starGiftDescription);
  }
  const handleGiftClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(gift => {
    setSelectedGift(gift);
    setIsHeaderForStarGifts('id' in gift);
    setIsHeaderHidden(false);
  });
  function renderStarGifts() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].starGiftsContainer
    }, starGiftsById && starGiftCategoriesByName[selectedCategory].map(giftId => {
      const gift = starGiftsById[giftId];
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_GiftItemStar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        gift: gift,
        onClick: handleGiftClick
      });
    }));
  }
  function renderPremiumGifts() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].premiumGiftsGallery
    }, filteredGifts?.map(gift => {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_GiftItemPremium__WEBPACK_IMPORTED_MODULE_16__["default"], {
        option: gift,
        baseMonthAmount: baseGift ? Math.floor(baseGift.amount / baseGift.months) : undefined,
        onClick: handleGiftClick
      });
    }));
  }
  const onCategoryChanged = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(category => {
    setSelectedCategory(category);
  });
  const handleCloseButtonClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (selectedGift) {
      setSelectedGift(undefined);
      return;
    }
    closeGiftModal();
  });
  function renderMainScreen() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].main, 'custom-scroll'),
      onScroll: handleScroll
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].avatars
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: "huge",
      peer: user
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].logoBackground,
      src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_20__,
      alt: "",
      draggable: false
    })), renderGiftPremiumHeader(), renderGiftPremiumDescription(), renderPremiumGifts(), renderStarGiftsHeader(), renderStarGiftsDescription(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarGiftCategoryList__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onCategoryChanged: onCategoryChanged
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "zoomFade",
      activeKey: getCategoryKey(selectedCategory),
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].starGiftsTransition
    }, renderStarGifts()));
  }
  const isBackButton = Boolean(selectedGift);
  const buttonClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])('animated-close-icon', isBackButton && 'state-back');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    dialogRef: dialogRef,
    onClose: closeGiftModal,
    isOpen: isOpen,
    isSlim: true,
    contentClassName: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].content,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].modalDialog, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].root)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].closeButton,
    round: true,
    color: "translucent",
    size: "smaller",
    onClick: handleCloseButtonClick,
    ariaLabel: isBackButton ? oldLang('Common.Back') : oldLang('Common.Close')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: buttonClassName
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].balance,
    balance: starBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].header, isHeaderHidden && _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].hiddenHeader)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "slideVerticalFade",
    activeKey: Number(isHeaderForStarGifts),
    slideClassName: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].headerSlide
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].commonHeaderText
  }, lang(isHeaderForStarGifts ? 'StarsGiftHeader' : 'GiftPremiumHeader')))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_13__["default"], {
    ref: transitionRef,
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].transition,
    name: "pushSlide",
    activeKey: selectedGift ? 1 : 0
  }, !selectedGift && renderMainScreen(), selectedGift && renderingModal?.forUserId && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_GiftComposer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    gift: selectedGift,
    userId: renderingModal.forUserId
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const {
    starGiftsById,
    starGiftCategoriesByName,
    stars
  } = global;
  const user = modal?.forUserId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, modal.forUserId) : undefined;
  return {
    boostPerSentGift: global.appConfig?.boostsPerSentGift,
    starGiftsById,
    starGiftCategoriesByName,
    starBalance: stars?.balance,
    user
  };
})(PremiumGiftModal)));
function getCategoryKey(category) {
  if (category === 'all') {
    return -1;
  }
  if (category === 'limited') {
    return 0;
  }
  return category;
}

/***/ }),

/***/ "./src/components/modals/gift/StarGiftCategoryList.tsx":
/*!*************************************************************!*\
  !*** ./src/components/modals/gift/StarGiftCategoryList.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useHorizontalScroll */ "./src/hooks/useHorizontalScroll.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StarGiftCategoryList.module.scss */ "./src/components/modals/gift/StarGiftCategoryList.module.scss");







const StarGiftCategoryList = ({
  starGiftCategoriesByName,
  onCategoryChanged
}) => {
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const starCategories = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(starGiftCategoriesByName).filter(category => category !== 'all' && category !== 'limited').map(Number).sort((a, b) => a - b), [starGiftCategoriesByName]);
  const [selectedCategory, setSelectedCategory] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  function handleItemClick(category) {
    setSelectedCategory(category);
    onCategoryChanged(category);
  }
  function renderCategoryName(category) {
    if (category === 'all') {
      return lang('AllGiftsCategory');
    }
    if (category === 'limited') {
      return lang('LimitedGiftsCategory');
    }
    return category;
  }
  function renderCategoryItem(category) {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].item, selectedCategory === category && _StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].selectedItem),
      onClick: () => handleItemClick(category)
    }, category !== 'all' && category !== 'limited' && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].star,
      type: "gold",
      size: "middle"
    }), renderCategoryName(category));
  }
  (0,_hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, undefined, true);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].list, 'no-scrollbar')
  }, renderCategoryItem('all'), renderCategoryItem('limited'), starCategories.map(renderCategoryItem));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    starGiftCategoriesByName
  } = global;
  return {
    starGiftCategoriesByName
  };
})(StarGiftCategoryList)));

/***/ }),

/***/ "./src/components/modals/gift/info/GiftInfoModal.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/gift/info/GiftInfoModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/objects/customPeer */ "./src/util/objects/customPeer.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_BadgeButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/BadgeButton */ "./src/components/common/BadgeButton.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _ui_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../ui/Link */ "./src/components/ui/Link.tsx");
/* harmony import */ var _common_TableInfoModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/TableInfoModal */ "./src/components/modals/common/TableInfoModal.tsx");
/* harmony import */ var _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./GiftInfoModal.module.scss */ "./src/components/modals/gift/info/GiftInfoModal.module.scss");

























const STICKER_SIZE = 120;
const GiftInfoModal = ({
  modal,
  sticker,
  userFrom,
  targetUser,
  currentUserId,
  starGiftMaxConvertPeriod
}) => {
  const {
    closeGiftInfoModal,
    changeGiftVisilibity,
    convertGiftToStars,
    openChatWithInfo
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [isConvertConfirmOpen, openConvertConfirm, closeConvertConfirm] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const isOpen = Boolean(modal);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_11__["default"])(modal);
  const {
    gift: typeGift
  } = renderingModal || {};
  const isUserGift = typeGift && 'gift' in typeGift;
  const userGift = isUserGift ? typeGift : undefined;
  const canUpdate = Boolean(userGift?.fromId && userGift.messageId);
  const isSender = userGift?.fromId === currentUserId;
  const canConvertDifference = userGift && starGiftMaxConvertPeriod && userGift.date + starGiftMaxConvertPeriod - (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_8__.getServerTime)() || 0;
  const conversionLeft = Math.ceil(canConvertDifference / 60 / 60 / 24);
  const handleClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    closeGiftInfoModal();
  });
  const handleTriggerVisibility = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    const {
      fromId,
      messageId,
      isUnsaved
    } = userGift;
    changeGiftVisilibity({
      userId: fromId,
      messageId: messageId,
      shouldUnsave: !isUnsaved
    });
    handleClose();
  });
  const handleConvertToStars = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    const {
      fromId,
      messageId
    } = userGift;
    convertGiftToStars({
      userId: fromId,
      messageId: messageId
    });
    closeConvertConfirm();
    handleClose();
  });
  const handleOpenProfile = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    openChatWithInfo({
      id: currentUserId,
      profileTab: 'gifts'
    });
    handleClose();
  });
  const modalData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!typeGift) {
      return undefined;
    }
    const {
      fromId,
      isNameHidden,
      message,
      starsToConvert,
      isUnsaved,
      isConverted
    } = userGift || {};
    const gift = isUserGift ? typeGift.gift : typeGift;
    const isVisibleForMe = isNameHidden && targetUser;
    const description = (() => {
      if (!userGift) {
        return lang('GiftInfoSoldOutDescription');
      }
      if (!canUpdate && !isSender) return undefined;
      if (!starsToConvert || canConvertDifference < 0) return undefined;
      if (isConverted) {
        return canUpdate ? lang('GiftInfoDescriptionConverted', {
          amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_9__.formatInteger)(starsToConvert)
        }, {
          pluralValue: starsToConvert,
          withNodes: true,
          withMarkdown: true
        }) : lang('GiftInfoDescriptionOutConverted', {
          amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_9__.formatInteger)(starsToConvert),
          user: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(targetUser)
        }, {
          pluralValue: starsToConvert,
          withNodes: true,
          withMarkdown: true
        });
      }
      return canUpdate ? lang('GiftInfoDescription', {
        amount: starsToConvert
      }, {
        withNodes: true,
        withMarkdown: true,
        pluralValue: starsToConvert
      }) : lang('GiftInfoDescriptionOut', {
        amount: starsToConvert,
        user: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(targetUser)
      }, {
        withNodes: true,
        withMarkdown: true,
        pluralValue: starsToConvert
      });
    })();
    const header = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].header
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sticker: sticker,
      noLoop: true,
      nonInteractive: true,
      size: STICKER_SIZE
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].title
    }, !userGift && lang('GiftInfoSoldOutTitle'), userGift && lang(canUpdate ? 'GiftInfoReceived' : 'GiftInfoTitle')), userGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].amount
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].amount
    }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_9__.formatInteger)(gift.stars)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
      type: "gold",
      size: "middle"
    })), description && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].description, !userGift && _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].soldOut)
    }, description));
    const tableData = [];
    if (fromId || isNameHidden) {
      tableData.push([lang('GiftInfoFrom'), fromId ? {
        chatId: fromId
      } : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        size: "small",
        peer: _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_PEER_HIDDEN
      }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
        className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].unknown
      }, oldLang(_util_objects_customPeer__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_PEER_HIDDEN.titleKey)))]);
    }
    if (userGift?.date) {
      tableData.push([lang('GiftInfoDate'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_5__.formatDateTimeToString)(userGift.date * 1000, lang.code, true)]);
    }
    if (gift.firstSaleDate) {
      tableData.push([lang('GiftInfoFirstSale'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_5__.formatDateTimeToString)(gift.firstSaleDate * 1000, lang.code, true)]);
    }
    if (gift.lastSaleDate) {
      tableData.push([lang('GiftInfoLastSale'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_5__.formatDateTimeToString)(gift.lastSaleDate * 1000, lang.code, true)]);
    }
    tableData.push([lang('GiftInfoValue'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].giftValue
    }, (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_6__.formatStarsAsIcon)(lang, gift.stars), canUpdate && canConvertDifference > 0 && Boolean(starsToConvert) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_BadgeButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onClick: openConvertConfirm
    }, lang('GiftInfoConvert', {
      amount: starsToConvert
    }, {
      pluralValue: starsToConvert
    })))]);
    if (gift.availabilityTotal) {
      tableData.push([lang('GiftInfoAvailability'), lang('GiftInfoAvailabilityValue', {
        count: gift.availabilityRemains || 0,
        total: gift.availabilityTotal
      }, {
        pluralValue: gift.availabilityRemains || 0
      })]);
    }
    if (message) {
      tableData.push([undefined, (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__.renderTextWithEntities)(message)]);
    }
    const footer = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].footer
    }, canUpdate && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_24__["default"].footerDescription
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, isUnsaved ? lang('GiftInfoHidden') : lang('GiftInfoSaved', {
      link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Link__WEBPACK_IMPORTED_MODULE_22__["default"], {
        isPrimary: true,
        onClick: handleOpenProfile
      }, lang('GiftInfoSavedView'))
    }, {
      withNodes: true
    })), isVisibleForMe && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoSenderHidden'))), !canUpdate && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_20__["default"], {
      size: "smaller",
      onClick: handleClose
    }, lang('OK')), canUpdate && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_20__["default"], {
      size: "smaller",
      onClick: handleTriggerVisibility
    }, lang(isUnsaved ? 'GiftInfoMakeVisible' : 'GiftInfoMakeInvisible')));
    return {
      header,
      tableData,
      footer
    };
  }, [typeGift, userGift, isUserGift, targetUser, sticker, lang, canUpdate, canConvertDifference, isSender, oldLang]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableInfoModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
    isOpen: isOpen,
    header: modalData?.header,
    tableData: modalData?.tableData,
    footer: modalData?.footer,
    onClose: handleClose
  }), userGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_21__["default"], {
    isOpen: isConvertConfirmOpen,
    onClose: closeConvertConfirm,
    confirmHandler: handleConvertToStars,
    title: lang('GiftInfoConvertTitle')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoConvertDescription1', {
    amount: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_6__.formatStarsAsText)(lang, userGift.starsToConvert),
    user: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(userFrom)
  }, {
    withNodes: true,
    withMarkdown: true
  })), canConvertDifference > 0 && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoConvertDescriptionPeriod', {
    count: conversionLeft
  }, {
    withNodes: true,
    withMarkdown: true,
    pluralValue: conversionLeft
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoConvertDescription2'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const typeGift = modal?.gift;
  const isUserGift = typeGift && 'gift' in typeGift;
  const gift = isUserGift ? typeGift.gift : typeGift;
  const stickerId = gift?.stickerId;
  const sticker = stickerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectStarGiftSticker)(global, stickerId) : undefined;
  const fromId = isUserGift && typeGift.fromId;
  const userFrom = fromId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, fromId) : undefined;
  const targetUser = modal?.userId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, modal.userId) : undefined;
  return {
    sticker,
    userFrom,
    targetUser,
    currentUserId: global.currentUserId,
    starGiftMaxConvertPeriod: global.appConfig?.starGiftMaxConvertPeriod
  };
})(GiftInfoModal)));

/***/ }),

/***/ "./src/components/modals/gift/recipient/GiftRecipientPicker.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/modals/gift/recipient/GiftRecipientPicker.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/sortChatIds */ "./src/components/common/helpers/sortChatIds.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/pickers/PeerPicker */ "./src/components/common/pickers/PeerPicker.tsx");
/* harmony import */ var _common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/pickers/PickerModal */ "./src/components/common/pickers/PickerModal.tsx");
/* harmony import */ var _GiftRecipientPicker_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GiftRecipientPicker.module.scss */ "./src/components/modals/gift/recipient/GiftRecipientPicker.module.scss");










const GiftRecipientPicker = ({
  modal,
  currentUserId,
  userIds
}) => {
  const {
    closeGiftRecipientPicker,
    openGiftModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const isOpen = modal;
  const [searchQuery, setSearchQuery] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const displayedUserIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const usersById = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().users.byId;
    const filteredContactIds = userIds ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.filterUsersByName)(userIds, usersById, searchQuery) : [];
    return (0,_common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_util_iteratees__WEBPACK_IMPORTED_MODULE_3__.unique)(filteredContactIds).filter(userId => {
      const user = usersById[userId];
      if (!user) {
        return true;
      }
      return !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isUserBot)(user) && userId !== currentUserId;
    }));
  }, [currentUserId, searchQuery, userIds]);
  const handleSelectedUserIdsChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(selectedId => {
    openGiftModal({
      forUserId: selectedId
    });
    closeGiftRecipientPicker();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _GiftRecipientPicker_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].root,
    isOpen: isOpen,
    onClose: closeGiftRecipientPicker,
    title: oldLang('GiftTelegramPremiumOrStarsTitle'),
    hasCloseButton: true,
    shouldAdaptToSearch: true,
    withFixedHeight: true
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _GiftRecipientPicker_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].picker,
    itemIds: displayedUserIds,
    filterValue: searchQuery,
    filterPlaceholder: oldLang('Search'),
    onSelectedIdChange: handleSelectedUserIdsChange,
    onFilterChange: setSearchQuery,
    isSearchable: true,
    withDefaultPadding: true,
    withStatus: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    currentUserId
  } = global;
  return {
    currentUserId,
    userIds: global.contactList?.userIds,
    userSelectionLimit: global.appConfig?.giveawayAddPeersMax
  };
})(GiftRecipientPicker)));

/***/ }),

/***/ "./src/components/modals/paidReaction/PaidReactionModal.tsx":
/*!******************************************************************!*\
  !*** ./src/components/modals/paidReaction/PaidReactionModal.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_PeerBadge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/PeerBadge */ "./src/components/common/PeerBadge.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/Checkbox */ "./src/components/ui/Checkbox.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_Separator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/Separator */ "./src/components/ui/Separator.tsx");
/* harmony import */ var _stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../stars/BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _StarSlider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StarSlider */ "./src/components/modals/paidReaction/StarSlider.tsx");
/* harmony import */ var _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PaidReactionModal.module.scss */ "./src/components/modals/paidReaction/PaidReactionModal.module.scss");





















const MAX_TOP_REACTORS = 3;
const DEFAULT_STARS_AMOUNT = 50;
const MAX_REACTION_AMOUNT = 2500;
const ANONYMOUS_PEER = {
  avatarIcon: 'author-hidden',
  customPeerAvatarColor: '#9eaab5',
  isCustomPeer: true,
  titleKey: 'StarsReactionAnonymous'
};
const PaidReactionModal = ({
  modal,
  chat,
  message,
  maxAmount,
  starBalance,
  defaultPrivacy
}) => {
  const {
    closePaidReactionModal,
    addLocalPaidReaction
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [starsAmount, setStarsAmount] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_STARS_AMOUNT);
  const [isTouched, markTouched, unmarkTouched] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [shouldShowUp, setShouldShowUp] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const handleAnonimityChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(e => {
    setShouldShowUp(e.target.checked);
  });
  const handleAmountChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(value => {
    setStarsAmount(value);
    markTouched();
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!modal) {
      unmarkTouched();
    }
  }, [modal]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const currentReactor = message?.reactions?.topReactors?.find(reactor => reactor.isMe);
    if (currentReactor) {
      setShouldShowUp(!currentReactor.isAnonymous);
      return;
    }
    setShouldShowUp(defaultPrivacy || true);
  }, [defaultPrivacy, message?.reactions?.topReactors]);
  const handleSend = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    if (!modal) return;
    addLocalPaidReaction({
      chatId: modal.chatId,
      messageId: modal.messageId,
      count: starsAmount,
      isPrivate: !shouldShowUp
    });
    closePaidReactionModal();
  });
  const topReactors = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    const all = message?.reactions?.topReactors;
    if (!all) {
      return undefined;
    }
    const result = [];
    let hasMe = false;
    all.forEach(reactor => {
      const user = reactor.peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, reactor.peerId) : undefined;
      if (!user && !reactor.isAnonymous && !reactor.isMe) return;
      if (reactor.isMe) {
        hasMe = true;
      }
      result.push({
        amount: reactor.count,
        localAmount: reactor.isMe && isTouched ? starsAmount : 0,
        isMe: reactor.isMe,
        isAnonymous: reactor.isAnonymous,
        user
      });
    });
    if (!hasMe && isTouched) {
      const me = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, global.currentUserId);
      result.push({
        amount: 0,
        localAmount: starsAmount,
        isMe: true,
        user: me
      });
    }
    result.sort((a, b) => b.amount + b.localAmount - (a.amount + a.localAmount));
    return result.slice(0, MAX_TOP_REACTORS);
  }, [isTouched, message?.reactions?.topReactors, starsAmount]);
  const chatTitle = chat && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getChatTitle)(oldLang, chat);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    isOpen: Boolean(modal),
    onClose: closePaidReactionModal,
    isSlim: true,
    hasAbsoluteCloseButton: true,
    contentClassName: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].content
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_18__["default"], {
    balance: starBalance,
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].modalBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarSlider__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].slider,
    defaultValue: DEFAULT_STARS_AMOUNT,
    maxValue: maxAmount,
    onChange: handleAmountChange
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].title
  }, oldLang('StarsReactionTitle')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('StarsReactionText', chatTitle), ['simple_markdown', 'emoji'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Separator__WEBPACK_IMPORTED_MODULE_17__["default"], null, topReactors && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].topLabel
  }, oldLang('StarsReactionTopSenders'))), topReactors && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].top
  }, topReactors.map(reactor => {
    const countText = (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_5__.formatInteger)(reactor.amount + reactor.localAmount);
    const peer = reactor.isAnonymous || !reactor.user || reactor.isMe && !shouldShowUp ? ANONYMOUS_PEER : reactor.user;
    const text = 'isCustomPeer' in peer ? oldLang(peer.titleKey) : (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getUserFullName)(peer);
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PeerBadge__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].topPeer,
      key: `${reactor.user?.id || 'anonymous'}-${countText}`,
      peer: peer,
      badgeText: countText,
      badgeIcon: "star",
      badgeClassName: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].topBadge,
      text: text
    });
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].checkbox,
    checked: shouldShowUp,
    onChange: handleAnonimityChange,
    label: oldLang('StarsReactionShowMeInTopSenders')
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: "smaller",
    onClick: handleSend
  }, lang('SendPaidReaction', {
    amount: starsAmount
  }, {
    withNodes: true,
    specialReplacement: {
      [_config__WEBPACK_IMPORTED_MODULE_2__.STARS_ICON_PLACEHOLDER]: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].buttonStar,
        name: "star"
      })
    }
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].disclaimer
  }, lang('StarsReactionTerms', {
    link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
      text: lang('StarsReactionLinkText'),
      url: lang('StarsReactionLink')
    })
  }, {
    withNodes: true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const chat = modal && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, modal.chatId);
  const message = modal && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChatMessage)(global, modal.chatId, modal.messageId);
  const starBalance = global.stars?.balance;
  const maxAmount = global.appConfig?.paidReactionMaxAmount || MAX_REACTION_AMOUNT;
  const defaultPrivacy = global.settings.paidReactionPrivacy;
  return {
    chat,
    message,
    starBalance,
    maxAmount,
    defaultPrivacy
  };
})(PaidReactionModal)));

/***/ }),

/***/ "./src/components/modals/paidReaction/StarSlider.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/paidReaction/StarSlider.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useEffectOnce */ "./src/hooks/useEffectOnce.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/AnimatedCounter */ "./src/components/common/AnimatedCounter.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StarSlider.module.scss */ "./src/components/modals/paidReaction/StarSlider.module.scss");











const DEFAULT_POINTS = [50, 100, 500, 1000, 2000, 5000, 10000];
const StarSlider = ({
  maxValue,
  defaultValue,
  className,
  onChange
}) => {
  // eslint-disable-next-line no-null/no-null
  const floatingBadgeRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const points = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const result = [];
    for (let i = 0; i < DEFAULT_POINTS.length; i++) {
      if (DEFAULT_POINTS[i] < maxValue) {
        result.push(DEFAULT_POINTS[i]);
      }
      if (DEFAULT_POINTS[i] >= maxValue) {
        result.push(maxValue);
        break;
      }
    }
    return result;
  }, [maxValue]);
  const [value, setValue] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,_hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    setValue(getProgress(points, defaultValue));
  });
  const updateSafeBadgePosition = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const badge = floatingBadgeRef.current;
    if (!badge) return;
    const parent = badge.parentElement;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMeasure)(() => {
      const safeMinX = parent.offsetLeft + badge.offsetWidth / 2;
      const safeMaxX = parent.offsetLeft + parent.offsetWidth - badge.offsetWidth / 2;
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
        parent.style.setProperty('--_min-x', `${safeMinX}px`);
        parent.style.setProperty('--_max-x', `${safeMaxX}px`);
      });
    });
  });
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_6__["default"])(floatingBadgeRef, updateSafeBadgePosition);
  const handleChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(event => {
    const newValue = Number(event.currentTarget.value);
    setValue(newValue);
    onChange(getValue(points, newValue));
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].root, className),
    style: `--progress: ${value / points.length}`
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadge,
    ref: floatingBadgeRef
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeText
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "star",
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeIcon
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(getValue(points, value))
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeTriangle,
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("defs", null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("linearGradient", {
    id: "StarBadgeTriangle",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    offset: "-50%",
    "stop-color": "#FFAA00"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    offset: "150%",
    "stop-color": "#FFCD3A"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "m 28,4 v 9 c 0.0089,7.283278 -3.302215,5.319646 -6.750951,8.589815 l -5.8284,5.82843 c -0.781,0.78105 -2.0474,0.78104 -2.8284,0 L 6.7638083,21.589815 C 2.8288652,17.959047 0.04527024,20.332086 0,13 V 4 C 0,4 0.00150581,0.97697493 3,1 5.3786658,1.018266 22.594519,0.9142007 25,1 c 2.992326,0.1067311 3,3 3,3 z",
    fill: "url(#StarBadgeTriangle)"
  })))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].progress
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_9__["default"], {
    preset: "progress",
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].sparkles
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].slider,
    type: "range",
    min: 0,
    max: points.length,
    defaultValue: getProgress(points, defaultValue),
    step: "any",
    onChange: handleChange
  }));
};
function getProgress(points, value) {
  const pointIndex = points.findIndex(point => value <= point);
  const prevPoint = points[pointIndex - 1] || 1;
  const nextPoint = points[pointIndex] || points[points.length - 1];
  const progress = (value - prevPoint) / (nextPoint - prevPoint);
  return pointIndex + progress;
}
function getValue(points, progress) {
  const pointIndex = Math.floor(progress);
  const prevPoint = points[pointIndex - 1] || 1;
  const nextPoint = points[pointIndex] || points[points.length - 1];
  const value = prevPoint + (nextPoint - prevPoint) * (progress - pointIndex);
  return Math.round(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarSlider));

/***/ }),

/***/ "./src/components/modals/stars/BalanceBlock.tsx":
/*!******************************************************!*\
  !*** ./src/components/modals/stars/BalanceBlock.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StarsBalanceModal.module.scss */ "./src/components/modals/stars/StarsBalanceModal.module.scss");






const BalanceBlock = ({
  balance,
  className
}) => {
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].balance, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].smallerText
  }, lang('StarsBalance')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].balanceBottom
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "gold",
    size: "middle"
  }), balance !== undefined ? (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_1__.formatStarsAmount)(lang, balance) : '…'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(BalanceBlock));

/***/ }),

/***/ "./src/components/modals/stars/StarsBalanceModal.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/stars/StarsBalanceModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/InfiniteScroll */ "./src/components/ui/InfiniteScroll.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_TabList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/TabList */ "./src/components/ui/TabList.tsx");
/* harmony import */ var _ui_Transition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/Transition */ "./src/components/ui/Transition.tsx");
/* harmony import */ var _BalanceBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _StarTopupOptionList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StarTopupOptionList */ "./src/components/modals/stars/StarTopupOptionList.tsx");
/* harmony import */ var _subscription_StarsSubscriptionItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subscription/StarsSubscriptionItem */ "./src/components/modals/stars/subscription/StarsSubscriptionItem.tsx");
/* harmony import */ var _transaction_StarsTransactionItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transaction/StarsTransactionItem */ "./src/components/modals/stars/transaction/StarsTransactionItem.tsx");
/* harmony import */ var _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./StarsBalanceModal.module.scss */ "./src/components/modals/stars/StarsBalanceModal.module.scss");
/* harmony import */ var _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../assets/icons/StarLogo.svg */ "./src/assets/icons/StarLogo.svg");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");

























const TRANSACTION_TYPES = ['all', 'inbound', 'outbound'];
const TRANSACTION_TABS = [{
  title: 'StarsTransactionsAll'
}, {
  title: 'StarsTransactionsIncoming'
}, {
  title: 'StarsTransactionsOutgoing'
}];
const TRANSACTION_ITEM_CLASS = 'StarsTransactionItem';
const SUBSCRIPTION_PURPOSE = 'subs';
const StarsBalanceModal = ({
  modal,
  starsBalanceState,
  canBuyPremium
}) => {
  const {
    closeStarsBalanceModal,
    loadStarsTransactions,
    loadStarsSubscriptions,
    openStarsGiftingPickerModal,
    openInvoice
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    balance,
    history,
    subscriptions
  } = starsBalanceState || {};
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [isHeaderHidden, setHeaderHidden] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [selectedTabIndex, setSelectedTabIndex] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [areBuyOptionsShown, showBuyOptions, hideBuyOptions] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const isOpen = Boolean(modal && starsBalanceState);
  const {
    originStarsPayment,
    originReaction,
    originGift,
    topup
  } = modal || {};
  const shouldOpenOnBuy = originStarsPayment || originReaction || originGift || topup;
  const ongoingTransactionAmount = originStarsPayment?.form?.invoice?.totalAmount || originStarsPayment?.subscriptionInfo?.subscriptionPricing?.amount || originReaction?.amount || originGift?.gift.stars || topup?.balanceNeeded;
  const starsNeeded = ongoingTransactionAmount ? ongoingTransactionAmount - (balance?.amount || 0) : undefined;
  const starsNeededText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    if (originReaction) {
      const channel = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChat)(global, originReaction.chatId);
      if (!channel) return undefined;
      return oldLang('StarsNeededTextReactions', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, channel));
    }
    if (originStarsPayment) {
      const bot = originStarsPayment.form?.botId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, originStarsPayment.form.botId) : undefined;
      if (!bot) return undefined;
      return oldLang('StarsNeededText', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(bot));
    }
    if (originGift) {
      const user = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, originGift.userId);
      if (!user) return undefined;
      return oldLang('StarsNeededTextGift', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(user));
    }
    if (topup?.purpose === SUBSCRIPTION_PURPOSE) {
      return oldLang('StarsNeededTextLink');
    }
    return undefined;
  }, [originReaction, originStarsPayment, originGift, topup?.purpose, oldLang]);
  const shouldShowItems = Boolean(history?.all?.transactions.length && !shouldOpenOnBuy);
  const shouldSuggestGifting = !shouldOpenOnBuy;
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      setHeaderHidden(true);
      setSelectedTabIndex(0);
      hideBuyOptions();
    }
  }, [isOpen]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldOpenOnBuy) {
      showBuyOptions();
      return;
    }
    hideBuyOptions();
  }, [shouldOpenOnBuy]);
  const tosText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isOpen) return undefined;
    const text = oldLang('lng_credits_summary_options_about');
    const parts = text.split('{link}');
    return [parts[0], /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
      url: oldLang('StarsTOSLink'),
      text: oldLang('lng_credits_summary_options_about_link')
    }), parts[1]];
  }, [isOpen, oldLang]);
  function handleScroll(e) {
    const {
      scrollTop
    } = e.currentTarget;
    setHeaderHidden(scrollTop <= 150);
  }
  const handleLoadMoreTransactions = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    loadStarsTransactions({
      type: TRANSACTION_TYPES[selectedTabIndex]
    });
  });
  const handleLoadMoreSubscriptions = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    loadStarsSubscriptions();
  });
  const openStarsGiftingPickerModalHandler = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    openStarsGiftingPickerModal({});
  });
  const handleBuyStars = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(option => {
    openInvoice({
      type: 'stars',
      stars: option.stars,
      currency: option.currency,
      amount: option.amount
    });
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].root,
    isOpen: isOpen,
    onClose: closeStarsBalanceModal
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].main, 'custom-scroll'),
    onScroll: handleScroll
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    round: true,
    size: "smaller",
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].closeButton,
    color: "translucent"
    // eslint-disable-next-line react/jsx-no-bind
    ,
    onClick: () => closeStarsBalanceModal(),
    ariaLabel: lang('Close')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "close"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_BalanceBlock__WEBPACK_IMPORTED_MODULE_18__["default"], {
    balance: balance,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].modalBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].header, isHeaderHidden && _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].hiddenHeader)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].starHeaderText
  }, oldLang('TelegramStars'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].logo,
    src: _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_23__,
    alt: "",
    draggable: false
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].logoBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_24__,
    alt: "",
    draggable: false
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].headerText
  }, starsNeeded ? oldLang('StarsNeededTitle', ongoingTransactionAmount) : oldLang('TelegramStars')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_5__["default"])(starsNeededText || oldLang('TelegramStarsInfo'), ['simple_markdown', 'emoji'])), canBuyPremium && !areBuyOptionsShown && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].starButton,
    onClick: showBuyOptions
  }, oldLang('Star.List.BuyMoreStars')), canBuyPremium && !areBuyOptionsShown && shouldSuggestGifting && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].starButton, 'settings-main-menu-star'),
    color: "translucent",
    onClick: openStarsGiftingPickerModalHandler
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "icon",
    type: "gold",
    size: "big"
  }), oldLang('TelegramStarsGift')), areBuyOptionsShown && starsBalanceState?.topupOptions && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarTopupOptionList__WEBPACK_IMPORTED_MODULE_19__["default"], {
    starsNeeded: starsNeeded,
    options: starsBalanceState.topupOptions,
    onClick: handleBuyStars
  })), areBuyOptionsShown && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].tos
  }, tosText), shouldShowItems && Boolean(subscriptions?.list.length) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].sectionTitle
  }, oldLang('StarMySubscriptions')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].subscriptions
  }, subscriptions?.list.map(subscription => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_subscription_StarsSubscriptionItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    key: subscription.id,
    subscription: subscription
  })), subscriptions?.nextOffset && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isText: true,
    disabled: subscriptions.isLoading,
    size: "smaller",
    noForcedUpperCase: true,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].loadMore,
    onClick: handleLoadMoreSubscriptions
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "down",
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].loadMoreIcon
  }), oldLang('StarMySubscriptionsExpand')))), shouldShowItems && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].container
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_17__["default"], {
    name: lang.isRtl ? 'slideOptimizedRtl' : 'slideOptimized',
    activeKey: selectedTabIndex,
    renderCount: TRANSACTION_TABS.length,
    shouldRestoreHeight: true,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].transition
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onLoadMore: handleLoadMoreTransactions,
    items: history?.[TRANSACTION_TYPES[selectedTabIndex]]?.transactions,
    scrollContainerClosest: `.${_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].main}`,
    itemSelector: `.${TRANSACTION_ITEM_CLASS}`,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].transactions,
    noFastList: true
  }, history?.[TRANSACTION_TYPES[selectedTabIndex]]?.transactions.map(transaction => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_transaction_StarsTransactionItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
    key: `${transaction.id}-${transaction.isRefund}`,
    transaction: transaction,
    className: TRANSACTION_ITEM_CLASS
  }))))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_TabList__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].tabs,
    tabClassName: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].tab,
    activeTab: selectedTabIndex,
    tabs: TRANSACTION_TABS,
    onSwitchTab: setSelectedTabIndex
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  return {
    starsBalanceState: global.stars,
    canBuyPremium: !(0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsPremiumPurchaseBlocked)(global)
  };
})(StarsBalanceModal)));

/***/ }),

/***/ "./src/components/modals/stars/StarsPaymentModal.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/stars/StarsPaymentModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_PeerBadge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/PeerBadge */ "./src/components/common/PeerBadge.tsx");
/* harmony import */ var _common_pickers_PickerSelectedItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/pickers/PickerSelectedItem */ "./src/components/common/pickers/PickerSelectedItem.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _BalanceBlock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _transaction_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transaction/PaidMediaThumb */ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx");
/* harmony import */ var _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./StarsBalanceModal.module.scss */ "./src/components/modals/stars/StarsBalanceModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");
























const StarPaymentModal = ({
  modal,
  bot,
  starsBalanceState,
  paidMediaMessage,
  paidMediaChat
}) => {
  const {
    closeStarsPaymentModal,
    openStarsBalanceModal,
    sendStarPaymentForm
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [isLoading, markLoading, unmarkLoading] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const isOpen = Boolean(modal?.inputInvoice && starsBalanceState);
  const prevModal = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_12__["default"])(modal);
  const renderingModal = modal || prevModal;
  const {
    form,
    subscriptionInfo
  } = renderingModal || {};
  const amount = form?.invoice?.totalAmount || subscriptionInfo?.subscriptionPricing?.amount;
  const isBotSubscription = Boolean(form?.invoice.subscriptionPeriod);
  const canShowPeerItem = !subscriptionInfo?.subscriptionPricing;
  const photo = form?.photo;
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      unmarkLoading();
    }
  }, [isOpen]);
  const descriptionText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!renderingModal?.inputInvoice) {
      return '';
    }
    const botName = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(bot);
    const starsText = oldLang('Stars.Intro.PurchasedText.Stars', amount);
    if (paidMediaMessage) {
      const extendedMedia = paidMediaMessage.content.paidMedia.extendedMedia;
      const areAllPhotos = extendedMedia.every(media => !media.duration);
      const areAllVideos = extendedMedia.every(media => !!media.duration);
      const mediaText = areAllPhotos ? oldLang('Stars.Transfer.Photos', extendedMedia.length) : areAllVideos ? oldLang('Stars.Transfer.Videos', extendedMedia.length) : oldLang('Media', extendedMedia.length);
      const channelTitle = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, paidMediaChat);
      return oldLang('Stars.Transfer.UnlockInfo', [mediaText, channelTitle, starsText]);
    }
    if (subscriptionInfo) {
      return lang('StarsSubscribeText', {
        chat: subscriptionInfo.title,
        amount
      }, {
        withNodes: true,
        withMarkdown: true,
        pluralValue: amount
      });
    }
    if (isBotSubscription) {
      return lang('StarsSubscribeBotText', {
        name: form.title,
        amount,
        bot: botName
      }, {
        pluralValue: amount
      });
    }
    return oldLang('Stars.Transfer.Info', [form.title, botName, starsText]);
  }, [renderingModal?.inputInvoice, bot, oldLang, amount, paidMediaMessage, subscriptionInfo, isBotSubscription, form, paidMediaChat, lang]);
  const disclaimerText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (subscriptionInfo) {
      return lang('StarsSubscribeInfo', {
        link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_17__["default"], {
          url: lang('StarsSubscribeInfoLink'),
          text: lang('StarsSubscribeInfoLinkText')
        })
      }, {
        withNodes: true
      });
    }
    return undefined;
  }, [subscriptionInfo, lang]);
  const inviteCustomPeer = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!subscriptionInfo) {
      return undefined;
    }
    return (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getCustomPeerFromInvite)(subscriptionInfo);
  }, [subscriptionInfo]);
  const handlePayment = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    const balance = starsBalanceState?.balance;
    if (amount === undefined || balance === undefined) {
      return;
    }
    if (amount > balance.amount) {
      openStarsBalanceModal({
        originStarsPayment: modal
      });
      return;
    }
    sendStarPaymentForm({});
    markLoading();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    contentClassName: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentContent,
    isOpen: isOpen,
    hasAbsoluteCloseButton: true,
    isSlim: true,
    onClose: closeStarsPaymentModal
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_BalanceBlock__WEBPACK_IMPORTED_MODULE_20__["default"], {
    balance: starsBalanceState?.balance,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].modalBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentImages,
    dir: oldLang.isRtl ? 'ltr' : 'rtl'
  }, paidMediaMessage ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_transaction_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_21__["default"], {
    media: paidMediaMessage.content.paidMedia.extendedMedia
  }) : inviteCustomPeer ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentPhoto,
    peer: inviteCustomPeer,
    size: "giant"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    type: "gold",
    size: "adaptive",
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].avatarStar
  })) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PeerBadge__WEBPACK_IMPORTED_MODULE_15__["default"], {
    peer: !photo ? bot : undefined,
    avatarWebPhoto: photo,
    avatarSize: "giant",
    badgeIcon: "star",
    badgeText: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(amount),
    badgeClassName: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].amountBadge,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentPhoto
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentImageBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__,
    alt: "",
    draggable: false
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].headerText
  }, inviteCustomPeer ? oldLang('StarsSubscribeTitle') : oldLang('StarsConfirmPurchaseTitle')), canShowPeerItem && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PickerSelectedItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].botItem,
    peerId: form?.botId
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])(descriptionText, ['simple_markdown', 'emoji'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentButton,
    size: "smaller",
    onClick: handlePayment,
    isLoading: isLoading
  }, lang(isBotSubscription ? 'StarsSubscribeBotButtonMonth' : 'StarsPay', {
    amount: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_5__.formatStarsAsIcon)(lang, amount, true)
  }, {
    withNodes: true
  })), disclaimerText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].disclaimer, _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].smallerText)
  }, disclaimerText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const bot = modal?.form?.botId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, modal.form.botId) : undefined;
  const messageInputInvoice = modal?.inputInvoice?.type === 'message' ? modal.inputInvoice : undefined;
  const message = messageInputInvoice ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChatMessage)(global, messageInputInvoice.chatId, messageInputInvoice.messageId) : undefined;
  const chat = messageInputInvoice ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChat)(global, messageInputInvoice.chatId) : undefined;
  const isPaidMedia = message?.content.paidMedia;
  return {
    bot,
    starsBalanceState: global.stars,
    paidMediaMessage: isPaidMedia ? message : undefined,
    paidMediaChat: isPaidMedia ? chat : undefined
  };
})(StarPaymentModal)));

/***/ }),

/***/ "./src/components/modals/stars/gift/StarsGiftModal.tsx":
/*!*************************************************************!*\
  !*** ./src/components/modals/stars/gift/StarsGiftModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _StarTopupOptionList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../StarTopupOptionList */ "./src/components/modals/stars/StarTopupOptionList.tsx");
/* harmony import */ var _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StarsGiftModal.module.scss */ "./src/components/modals/stars/gift/StarsGiftModal.module.scss");
/* harmony import */ var _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../assets/icons/StarLogo.svg */ "./src/assets/icons/StarLogo.svg");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");


















const StarsGiftModal = ({
  modal,
  user
}) => {
  const {
    closeStarsGiftModal,
    openInvoice,
    requestConfetti
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  // eslint-disable-next-line no-null/no-null
  const dialogRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpen = Boolean(modal?.isOpen);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_7__["default"])(modal);
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [selectedOption, setSelectedOption] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isHeaderHidden, setHeaderHidden] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      setHeaderHidden(true);
    }
  }, [isOpen]);
  const showConfetti = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      const {
        top,
        left,
        width,
        height
      } = dialog.querySelector('.modal-content').getBoundingClientRect();
      requestConfetti({
        top,
        left,
        width,
        height,
        withStars: true
      });
    }
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (renderingModal?.isCompleted) {
      showConfetti();
    }
  }, [renderingModal, showConfetti]);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(option => {
    if (!renderingModal) return;
    setSelectedOption(option);
    if (user) {
      openInvoice({
        type: 'starsgift',
        userId: user.id,
        stars: option.stars,
        currency: option.currency,
        amount: option.amount
      });
    } else {
      openInvoice({
        type: 'stars',
        stars: option.stars,
        currency: option.currency,
        amount: option.amount
      });
    }
  });
  function handleScroll(e) {
    const {
      scrollTop
    } = e.currentTarget;
    setHeaderHidden(scrollTop <= 150);
  }
  const handleClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    closeStarsGiftModal();
  });
  function renderGiftTitle() {
    if (renderingModal?.isCompleted) {
      return user ? (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('Notification.StarsGift.SentYou', (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_5__.formatCurrencyAsString)(selectedOption.amount, selectedOption.currency, oldLang.code)), ['simple_markdown']) : (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('StarsAcquiredInfo', selectedOption?.stars), ['simple_markdown']);
    }
    return user ? oldLang('GiftStarsTitle') : oldLang('Star.List.GetStars');
  }
  const bottomText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const text = oldLang('lng_credits_summary_options_about');
    const parts = text.split('{link}');
    return [parts[0], /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_11__["default"], {
      url: oldLang('StarsTOSLink'),
      text: oldLang('lng_credits_summary_options_about_link')
    }), parts[1]];
  }, [oldLang]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].modalDialog, _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].root),
    dialogRef: dialogRef,
    isSlim: true,
    onClose: handleClose,
    isOpen: isOpen
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].main,
    onScroll: handleScroll
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    round: true,
    size: "smaller",
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].closeButton,
    color: "translucent"
    // eslint-disable-next-line react/jsx-no-bind
    ,
    onClick: () => closeStarsGiftModal(),
    ariaLabel: oldLang('Close')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("i", {
    className: "icon icon-close"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].header, isHeaderHidden && _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].hiddenHeader)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].starHeaderText
  }, user ? oldLang('GiftStarsTitle') : oldLang('Star.List.GetStars'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].headerInfo
  }, user ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: "huge",
    peer: user,
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].avatar
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].logoBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_17__,
    alt: "",
    draggable: false
  })) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].logo,
    src: _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_16__,
    alt: "",
    draggable: false
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].logoBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_17__,
    alt: "",
    draggable: false
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].headerText, _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].center)
  }, renderGiftTitle()), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].description
  }, user ? (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('ActionGiftStarsSubtitle', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getSenderTitle)(oldLang, user)), ['simple_markdown']) : oldLang('Stars.Purchase.GetStarsInfo')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarTopupOptionList__WEBPACK_IMPORTED_MODULE_14__["default"], {
    options: renderingModal?.starsGiftOptions,
    onClick: handleClick
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].secondaryInfo
  }, bottomText))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const user = modal?.forUserId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(), modal.forUserId) : undefined;
  return {
    user
  };
})(StarsGiftModal)));

/***/ }),

/***/ "./src/components/modals/stars/helpers/transaction.ts":
/*!************************************************************!*\
  !*** ./src/components/modals/stars/helpers/transaction.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransactionTitle: () => (/* binding */ getTransactionTitle),
/* harmony export */   isNegativeStarsAmount: () => (/* binding */ isNegativeStarsAmount)
/* harmony export */ });
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");


function getTransactionTitle(lang, transaction) {
  if (transaction.starRefCommision) {
    return lang('StarTransactionCommission', (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_1__.formatPercent)(transaction.starRefCommision));
  }
  if (transaction.extendedMedia) return lang('StarMediaPurchase');
  if (transaction.subscriptionPeriod) return transaction.title || lang('StarSubscriptionPurchase');
  if (transaction.isReaction) return lang('StarsReactionsSent');
  if (transaction.giveawayPostId) return lang('StarsGiveawayPrizeReceived');
  if (transaction.isMyGift) return lang('StarsGiftSent');
  if (transaction.isGift) return lang('StarsGiftReceived');
  if (transaction.starGift) {
    return isNegativeStarsAmount(transaction.stars) ? lang('Gift2TransactionSent') : lang('Gift2ConvertedTitle');
  }
  const customPeer = transaction.peer && transaction.peer.type !== 'peer' && (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_0__.buildStarsTransactionCustomPeer)(transaction.peer) || undefined;
  if (customPeer) return customPeer.title || lang(customPeer.titleKey);
  return transaction.title;
}
function isNegativeStarsAmount(starsAmount) {
  if (starsAmount.amount) return starsAmount.amount < 0;
  return starsAmount.nanos < 0;
}

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionItem.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionItem.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/data/useSelector */ "./src/hooks/data/useSelector.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StarsSubscriptionItem.module.scss */ "./src/components/modals/stars/subscription/StarsSubscriptionItem.module.scss");












function selectProvidedPeer(peerId) {
  return global => (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, peerId);
}
const StarsSubscriptionItem = ({
  subscription
}) => {
  const {
    openStarsSubscriptionModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    peerId,
    pricing,
    until,
    isCancelled,
    title,
    photo
  } = subscription;
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const peer = (0,_hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_6__["default"])(selectProvidedPeer(peerId));
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    openStarsSubscriptionModal({
      subscription
    });
  });
  if (!peer) {
    return undefined;
  }
  const hasExpired = until < Date.now() / 1000;
  const formattedDate = (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_4__.formatDateToString)(until * 1000, lang.code, true, 'long');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].root,
    onClick: handleClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].preview
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "medium",
    peer: peer
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].subscriptionStar,
    type: "gold",
    size: "small"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].title
  }, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getSenderTitle)(lang, peer)), title && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].subtitle
  }, photo && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    webPhoto: photo,
    size: "micro"
  }), title), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].description
  }, lang(hasExpired ? 'StarsSubscriptionExpired' : isCancelled ? 'StarsSubscriptionExpires' : 'StarsSubscriptionRenews', formattedDate))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].status
  }, isCancelled || hasExpired ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].statusEnded
  }, lang(hasExpired ? 'StarsSubscriptionStatusExpired' : 'StarsSubscriptionStatusCancelled')) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].statusPricing
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].star,
    type: "gold",
    size: "adaptive"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].amount
  }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_5__.formatInteger)(pricing.amount))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].statusPeriod
  }, lang('StarsParticipantSubscriptionPerMonth')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarsSubscriptionItem));

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionModal.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionModal.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _common_TableInfoModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/TableInfoModal */ "./src/components/modals/common/TableInfoModal.tsx");
/* harmony import */ var _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StarsSubscriptionModal.module.scss */ "./src/components/modals/stars/subscription/StarsSubscriptionModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");


















const StarsSubscriptionModal = ({
  modal,
  peer
}) => {
  const {
    closeStarsSubscriptionModal,
    fulfillStarsSubscription,
    changeStarsSubscription,
    checkChatInvite,
    loadStarStatus,
    openInvoice
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    subscription
  } = modal || {};
  const buttonState = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!subscription) {
      return 'hidden';
    }
    if (subscription.canRefulfill) {
      return 'refulfill';
    }
    const isActive = subscription.until > Date.now() / 1000;
    if (isActive && !subscription.isCancelled) {
      return 'cancel';
    }
    if (isActive && subscription.isCancelled) {
      return 'renew';
    }
    const canRestart = subscription.chatInviteHash || subscription.invoiceSlug;
    if (!isActive && canRestart) {
      return 'restart';
    }
    return 'ok';
  }, [subscription]);
  const handleButtonClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    if (!subscription) {
      return;
    }
    switch (buttonState) {
      case 'refulfill':
        {
          fulfillStarsSubscription({
            id: subscription.id
          });
          break;
        }
      case 'restart':
        {
          if (subscription.chatInviteHash) {
            checkChatInvite({
              hash: subscription.chatInviteHash
            });
          } else if (subscription.invoiceSlug) {
            openInvoice({
              type: 'slug',
              slug: subscription.invoiceSlug
            });
          }
          loadStarStatus();
          break;
        }
      case 'renew':
        {
          changeStarsSubscription({
            id: subscription.id,
            isCancelled: false
          });
          break;
        }
      case 'cancel':
        {
          changeStarsSubscription({
            id: subscription.id,
            isCancelled: true
          });
          break;
        }
    }
    closeStarsSubscriptionModal();
  });
  const starModalData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!subscription || !peer) {
      return undefined;
    }
    const {
      pricing,
      until,
      isCancelled,
      canRefulfill,
      photo,
      title,
      hasBotCancelled
    } = subscription;
    const isBotSubscription = (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.isApiPeerUser)(peer);
    const header = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].header, _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].starsHeader)
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].avatarWrapper
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      peer: !photo ? peer : undefined,
      webPhoto: photo,
      size: "jumbo"
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subscriptionStar,
      type: "gold",
      size: "adaptive"
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].starsBackground),
      src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_17__,
      alt: "",
      draggable: false
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].title
    }, title || oldLang('StarsSubscriptionTitle')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].amount
    }, lang('StarsPerMonth', {
      amount: pricing.amount
    }, {
      withNodes: true,
      specialReplacement: {
        [_config__WEBPACK_IMPORTED_MODULE_2__.STARS_ICON_PLACEHOLDER]: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].amountStar,
          size: "adaptive",
          type: "gold"
        })
      }
    })));
    const tableData = [];
    tableData.push([oldLang(isBotSubscription ? 'StarsSubscriptionBot' : 'StarsSubscriptionChannel'), {
      chatId: peer.id
    }]);
    if (title) {
      tableData.push([oldLang('StarsSubscriptionBotProduct'), title]);
    }
    const hasExpired = until < Date.now() / 1000;
    tableData.push([oldLang(hasExpired ? 'StarsSubscriptionUntilExpired' : isCancelled ? 'StarsSubscriptionUntilExpires' : 'StarsSubscriptionUntilRenews'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true)]);
    const footerTos = lang('StarsTransactionTOS', {
      link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        url: lang('StarsTransactionTOSLink'),
        text: lang('StarsTransactionTOSLinkText')
      })
    }, {
      withNodes: true
    });
    const footer = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].footer
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, footerTos), isCancelled && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].danger
    }, oldLang(hasBotCancelled ? 'StarsSubscriptionBotCancelledText' : 'StarsSubscriptionCancelledText')), canRefulfill && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, oldLang('StarsSubscriptionRefulfillInfo', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true))), !isCancelled && !canRefulfill && hasExpired && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, oldLang('StarsSubscriptionExpiredInfo', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true))), !isCancelled && !canRefulfill && !hasExpired && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, oldLang('StarsSubscriptionCancelInfo', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true))), buttonState !== 'hidden' && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: "smaller",
      color: buttonState === 'cancel' ? 'danger' : 'primary',
      isText: buttonState === 'cancel',
      onClick: handleButtonClick
    }, oldLang(buttonState === 'cancel' ? 'StarsSubscriptionCancel' : buttonState === 'refulfill' ? 'StarsSubscriptionRefulfill' : buttonState === 'restart' ? 'StarsSubscriptionAgain' : buttonState === 'renew' ? 'StarsSubscriptionRenew' : 'OK')));
    return {
      header,
      tableData,
      footer
    };
  }, [buttonState, lang, oldLang, peer, subscription]);
  const prevModalData = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__["default"])(starModalData);
  const renderingModalData = prevModalData || starModalData;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableInfoModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    isOpen: Boolean(subscription),
    className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].modal,
    header: renderingModalData?.header,
    tableData: renderingModalData?.tableData,
    footer: renderingModalData?.footer,
    onClose: closeStarsSubscriptionModal
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const peerId = modal?.subscription.peerId;
  const peer = peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, peerId) : undefined;
  return {
    peer
  };
})(StarsSubscriptionModal)));

/***/ }),

/***/ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx":
/*!********************************************************************!*\
  !*** ./src/components/modals/stars/transaction/PaidMediaThumb.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_MediaSpoiler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/MediaSpoiler */ "./src/components/common/MediaSpoiler.tsx");
/* harmony import */ var _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PaidMediaThumb.module.scss */ "./src/components/modals/stars/transaction/PaidMediaThumb.module.scss");







const THUMB_LIMIT = 3;
const PREVIEW_THUMB_LIMIT = 2;
const PaidMediaThumb = ({
  media,
  className,
  isTransactionPreview,
  onClick
}) => {
  const count = Math.min(media.length, isTransactionPreview ? PREVIEW_THUMB_LIMIT : THUMB_LIMIT);
  const isLocked = 'mediaType' in media[0];
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`itemCount${count}`], isTransactionPreview && _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].preview, className),
    dir: "rtl",
    onClick: onClick
  }, media.slice(0, count).reverse().map((item, i, arr) => {
    const realIndex = arr.length - i - 1;
    return 'mediaType' in item ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_MediaSpoiler__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].thumb,
      isVisible: true,
      width: item.width,
      height: item.height,
      thumbDataUri: item.thumbnail?.dataUri
    }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(SingleMediaThumb, {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(isTransactionPreview && realIndex > 0 && _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].noOutline),
      boughtMedia: item,
      index: realIndex
    });
  }), isLocked && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].count
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "stars-lock"
  }), media.length > 1 ? media.length : ''));
};
function SingleMediaThumb({
  boughtMedia,
  index,
  className
}) {
  const media = boughtMedia.video || boughtMedia.photo;
  const mediaHash = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMediaHash)(media, 'pictogram');
  const thumb = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMediaThumbUri)(media);
  const mediaBlob = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaHash);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].thumb, index !== undefined && `stars-transaction-media-${index}`, className)
  }, thumb && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blurry,
    src: thumb,
    alt: ""
  }), mediaBlob && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].full,
    src: mediaBlob,
    alt: ""
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PaidMediaThumb));

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionItem.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionItem.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/objects/customPeer */ "./src/util/objects/customPeer.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _helpers_transaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/transaction */ "./src/components/modals/stars/helpers/transaction.ts");
/* harmony import */ var _hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/data/useSelector */ "./src/hooks/data/useSelector.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _PaidMediaThumb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PaidMediaThumb */ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx");
/* harmony import */ var _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StarsTransactionItem.module.scss */ "./src/components/modals/stars/transaction/StarsTransactionItem.module.scss");


















function selectOptionalPeer(peerId) {
  return global => peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, peerId) : undefined;
}
const StarsTransactionItem = ({
  transaction,
  className
}) => {
  const {
    openStarsTransactionModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    date,
    stars,
    photo,
    peer: transactionPeer,
    extendedMedia,
    subscriptionPeriod
  } = transaction;
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const peerId = transactionPeer.type === 'peer' ? transactionPeer.id : undefined;
  const peer = (0,_hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_10__["default"])(selectOptionalPeer(peerId));
  const data = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let title = (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_9__.getTransactionTitle)(oldLang, transaction);
    let description;
    let status;
    let avatarPeer;
    if (transaction.peer.type === 'peer') {
      description = peer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getSenderTitle)(oldLang, peer);
      avatarPeer = peer || _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_PEER_PREMIUM;
    } else {
      const customPeer = (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_3__.buildStarsTransactionCustomPeer)(transaction.peer);
      title = customPeer.title || oldLang(customPeer.titleKey);
      description = oldLang(customPeer.subtitleKey);
      avatarPeer = customPeer;
    }
    if (transaction.photo) {
      avatarPeer = undefined;
    }
    if (transaction.isRefund) {
      status = oldLang('StarsRefunded');
    }
    if (transaction.hasFailed) {
      status = oldLang('StarsFailed');
    }
    if (transaction.isPending) {
      status = oldLang('StarsPending');
    }
    return {
      title,
      description,
      avatarPeer,
      status
    };
  }, [oldLang, peer, transaction]);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    openStarsTransactionModal({
      transaction
    });
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].root, className),
    onClick: handleClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].preview
  }, extendedMedia ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_16__["default"], {
    media: extendedMedia,
    isTransactionPreview: true
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: "medium",
    webPhoto: photo,
    peer: data.avatarPeer
  }), Boolean(subscriptionPeriod) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].subscriptionStar,
    type: "gold",
    size: "small"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].title
  }, data.title), data.description && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_8__["default"])(data.description)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].date
  }, (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(date * 1000, oldLang.code, true), data.status && ` — (${data.status})`)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].stars
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].amount, (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_9__.isNegativeStarsAmount)(stars) ? _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].negative : _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].positive)
  }, (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_3__.formatStarsTransactionAmount)(lang, stars)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].star,
    type: "gold",
    size: "adaptive"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarsTransactionItem));

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionModal.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionModal.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../types */ "./src/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _helpers_transaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/transaction */ "./src/components/modals/stars/helpers/transaction.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _common_TableInfoModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/TableInfoModal */ "./src/components/modals/common/TableInfoModal.tsx");
/* harmony import */ var _PaidMediaThumb__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PaidMediaThumb */ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx");
/* harmony import */ var _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StarsTransactionModal.module.scss */ "./src/components/modals/stars/transaction/StarsTransactionModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");























const StarsTransactionModal = ({
  modal,
  peer,
  canPlayAnimatedEmojis,
  topSticker
}) => {
  const {
    showNotification,
    openMediaViewer,
    closeStarsTransactionModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const {
    transaction
  } = modal || {};
  const handleOpenMedia = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    const media = transaction?.extendedMedia;
    if (!media) return;
    openMediaViewer({
      origin: _types__WEBPACK_IMPORTED_MODULE_2__.MediaViewerOrigin.StarsTransaction,
      standaloneMedia: media.flatMap(item => Object.values(item))
    });
  });
  const starModalData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!transaction) {
      return undefined;
    }
    const {
      giveawayPostId,
      photo,
      stars
    } = transaction;
    const customPeer = transaction.peer && transaction.peer.type !== 'peer' && (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_4__.buildStarsTransactionCustomPeer)(transaction.peer) || undefined;
    const peerId = transaction.peer?.type === 'peer' ? transaction.peer.id : undefined;
    const toName = transaction.peer && oldLang(getStarsPeerTitleKey(transaction.peer));
    const title = (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_9__.getTransactionTitle)(oldLang, transaction);
    const messageLink = peer && transaction.messageId ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getMessageLink)(peer, undefined, transaction.messageId) : undefined;
    const giveawayMessageLink = peer && giveawayPostId && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getMessageLink)(peer, undefined, giveawayPostId);
    const media = transaction.extendedMedia;
    const mediaAmount = media?.length || 0;
    const areAllPhotos = media?.every(m => !m.video);
    const areAllVideos = media?.every(m => !m.photo);
    const mediaText = areAllPhotos ? oldLang('Stars.Transfer.Photos', mediaAmount) : areAllVideos ? oldLang('Stars.Transfer.Videos', mediaAmount) : oldLang('Media', mediaAmount);
    const description = transaction.description || (media ? mediaText : undefined);
    const shouldDisplayAvatar = !media && !topSticker;
    const avatarPeer = !photo ? peer || customPeer : undefined;
    const header = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].header, _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].starsHeader)
    }, media && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].mediaPreview, 'transaction-media-preview'),
      media: media,
      onClick: handleOpenMedia
    }), !media && topSticker && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: transaction.id,
      sticker: topSticker,
      play: canPlayAnimatedEmojis,
      noLoop: true,
      nonInteractive: true
    }), shouldDisplayAvatar && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
      peer: avatarPeer,
      webPhoto: photo,
      size: "giant"
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].starsBackground),
      src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_22__,
      alt: "",
      draggable: false
    }), title && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].title
    }, title), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].description
    }, description), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].amount
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].amount, (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_9__.isNegativeStarsAmount)(stars) ? _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].negative : _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].positive)
    }, (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_4__.formatStarsTransactionAmount)(lang, stars)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
      type: "gold",
      size: "middle"
    })));
    const tableData = [];
    if (transaction.starRefCommision) {
      tableData.push([oldLang('StarsTransaction.StarRefReason.Title'), oldLang('StarsTransaction.StarRefReason.Program')]);
    }
    let peerLabel;
    if ((0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_9__.isNegativeStarsAmount)(stars) || transaction.isMyGift) {
      peerLabel = oldLang('Stars.Transaction.To');
    } else if (transaction.starRefCommision) {
      peerLabel = oldLang('StarsTransaction.StarRefReason.Miniapp');
    } else if (peerId) {
      peerLabel = oldLang('Star.Transaction.From');
    } else {
      peerLabel = oldLang('Stars.Transaction.Via');
    }
    tableData.push([peerLabel, peerId ? {
      chatId: peerId
    } : toName || '']);
    if (messageLink) {
      tableData.push([oldLang('Stars.Transaction.Reaction.Post'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_18__["default"], {
        url: messageLink,
        text: messageLink
      })]);
    }
    if (giveawayMessageLink) {
      tableData.push([oldLang('BoostReason'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_18__["default"], {
        url: giveawayMessageLink,
        text: oldLang('Giveaway')
      })]);
      tableData.push([oldLang('Gift'), oldLang('Stars', transaction.stars, 'i')]);
    }
    if (transaction.id) {
      tableData.push([oldLang('Stars.Transaction.Id'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].tid,
        onClick: () => {
          (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_7__.copyTextToClipboard)(transaction.id);
          showNotification({
            message: oldLang('StarsTransactionIDCopied')
          });
        }
      }, transaction.id), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].copyIcon,
        name: "copy"
      }))]);
    }
    tableData.push([oldLang('Stars.Transaction.Date'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__.formatDateTimeToString)(transaction.date * 1000, oldLang.code, true)]);
    const footerText = oldLang('lng_credits_box_out_about');
    const footerTextParts = footerText.split('{link}');
    const footer = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].footer
    }, footerTextParts[0], /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_18__["default"], {
      url: oldLang('StarsTOSLink'),
      text: oldLang('lng_credits_summary_options_about_link')
    }), footerTextParts[1]);
    return {
      header,
      tableData,
      footer
    };
  }, [transaction, oldLang, lang, peer, topSticker, canPlayAnimatedEmojis]);
  const prevModalData = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_13__["default"])(starModalData);
  const renderingModalData = prevModalData || starModalData;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableInfoModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    isOpen: Boolean(transaction),
    className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].modal,
    header: renderingModalData?.header,
    tableData: renderingModalData?.tableData,
    footer: renderingModalData?.footer,
    buttonText: oldLang('OK'),
    onClose: closeStarsTransactionModal
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const peerId = modal?.transaction?.peer?.type === 'peer' && modal.transaction.peer.id;
  const peer = peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, peerId) : undefined;
  const starCount = modal?.transaction.stars;
  const starsGiftSticker = modal?.transaction.isGift && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectGiftStickerForStars)(global, starCount?.amount);
  const starGiftStickerId = modal?.transaction.starGift?.stickerId;
  const starGiftSticker = starGiftStickerId && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectStarGiftSticker)(global, starGiftStickerId);
  return {
    peer,
    canPlayAnimatedEmojis: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanPlayAnimatedEmojis)(global),
    topSticker: starGiftSticker || starsGiftSticker
  };
})(StarsTransactionModal)));
function getStarsPeerTitleKey(peer) {
  switch (peer.type) {
    case 'appStore':
      return 'AppStore';
    case 'playMarket':
      return 'PlayMarket';
    case 'fragment':
      return 'Fragment';
    case 'premiumBot':
      return 'StarsTransactionBot';
    case 'ads':
      return 'StarsTransactionAds';
    case 'api':
      return 'Stars.Intro.Transaction.TelegramBotApi.Subtitle';
    default:
      return 'Stars.Transaction.Unsupported.Title';
  }
}

/***/ }),

/***/ "./src/util/localization/format.tsx":
/*!******************************************!*\
  !*** ./src/util/localization/format.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatStarsAsIcon: () => (/* binding */ formatStarsAsIcon),
/* harmony export */   formatStarsAsText: () => (/* binding */ formatStarsAsText)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _components_common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _components_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");




function formatStarsAsText(lang, amount) {
  return lang('StarsAmountText', {
    amount
  }, {
    pluralValue: amount
  });
}
function formatStarsAsIcon(lang, amount, asFont) {
  const icon = asFont ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "star",
    className: "star-amount-icon"
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "gold",
    className: "star-amount-icon",
    size: "adaptive"
  });
  return lang('StarsAmount', {
    amount
  }, {
    withNodes: true,
    specialReplacement: {
      [_config__WEBPACK_IMPORTED_MODULE_1__.STARS_ICON_PLACEHOLDER]: icon
    }
  });
}

/***/ }),

/***/ "./src/components/common/BadgeButton.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/common/BadgeButton.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"BadgeButton-module__root"});

/***/ }),

/***/ "./src/components/main/premium/StarsGiftingPickerModal.module.scss":
/*!*************************************************************************!*\
  !*** ./src/components/main/premium/StarsGiftingPickerModal.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"StarsGiftingPickerModal-module__root","transition":"StarsGiftingPickerModal-module__transition","main":"StarsGiftingPickerModal-module__main","filter":"StarsGiftingPickerModal-module__filter","title":"StarsGiftingPickerModal-module__title","buttons":"StarsGiftingPickerModal-module__buttons","picker":"StarsGiftingPickerModal-module__picker","avatars":"StarsGiftingPickerModal-module__avatars","center":"StarsGiftingPickerModal-module__center","description":"StarsGiftingPickerModal-module__description","premiumFeatures":"StarsGiftingPickerModal-module__premiumFeatures","options":"StarsGiftingPickerModal-module__options","button":"StarsGiftingPickerModal-module__button"});

/***/ }),

/***/ "./src/components/modals/gift/GiftComposer.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/modals/gift/GiftComposer.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GiftComposer-module__root","header":"GiftComposer-module__header","spacer":"GiftComposer-module__spacer","title":"GiftComposer-module__title","balance-container":"GiftComposer-module__balance-container","balanceContainer":"GiftComposer-module__balance-container","balance-caption":"GiftComposer-module__balance-caption","balanceCaption":"GiftComposer-module__balance-caption","star-balance":"GiftComposer-module__star-balance","starBalance":"GiftComposer-module__star-balance","balance":"GiftComposer-module__balance","optionsSection":"GiftComposer-module__optionsSection","checkboxTitle":"GiftComposer-module__checkboxTitle","actionMessageView":"GiftComposer-module__actionMessageView","messageInput":"GiftComposer-module__messageInput","limited":"GiftComposer-module__limited","footer":"GiftComposer-module__footer","switcher":"GiftComposer-module__switcher","description":"GiftComposer-module__description","main-button":"GiftComposer-module__main-button","mainButton":"GiftComposer-module__main-button","star":"GiftComposer-module__star"});

/***/ }),

/***/ "./src/components/modals/gift/GiftItem.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/modals/gift/GiftItem.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"GiftItem-module__container","starGift":"GiftItem-module__starGift","monthsDescription":"GiftItem-module__monthsDescription","description":"GiftItem-module__description","buy":"GiftItem-module__buy","star":"GiftItem-module__star","amount":"GiftItem-module__amount"});

/***/ }),

/***/ "./src/components/modals/gift/GiftModal.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/modals/gift/GiftModal.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GiftModal-module__root","transition":"GiftModal-module__transition","content":"GiftModal-module__content","main":"GiftModal-module__main","giftSection":"GiftModal-module__giftSection","section":"GiftModal-module__section","starGiftsContainer":"GiftModal-module__starGiftsContainer","premiumGiftsGallery":"GiftModal-module__premiumGiftsGallery","header":"GiftModal-module__header","headerSlide":"GiftModal-module__headerSlide","headerText":"GiftModal-module__headerText","hiddenHeader":"GiftModal-module__hiddenHeader","commonHeaderText":"GiftModal-module__commonHeaderText","closeButton":"GiftModal-module__closeButton","balance":"GiftModal-module__balance","avatars":"GiftModal-module__avatars","logoBackground":"GiftModal-module__logoBackground","center":"GiftModal-module__center","description":"GiftModal-module__description","starGiftsDescription":"GiftModal-module__starGiftsDescription","boostIcon":"GiftModal-module__boostIcon","optionBottom":"GiftModal-module__optionBottom","secondaryInfo":"GiftModal-module__secondaryInfo","footer":"GiftModal-module__footer","starGiftsTransition":"GiftModal-module__starGiftsTransition"});

/***/ }),

/***/ "./src/components/modals/gift/StarGiftCategoryList.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/modals/gift/StarGiftCategoryList.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"list":"StarGiftCategoryList-module__list","item-selected":"StarGiftCategoryList-module__item-selected","itemSelected":"StarGiftCategoryList-module__item-selected","item":"StarGiftCategoryList-module__item","selected-item":"StarGiftCategoryList-module__selected-item","selectedItem":"StarGiftCategoryList-module__selected-item","star":"StarGiftCategoryList-module__star"});

/***/ }),

/***/ "./src/components/modals/gift/info/GiftInfoModal.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/modals/gift/info/GiftInfoModal.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"GiftInfoModal-module__header","amount":"GiftInfoModal-module__amount","title":"GiftInfoModal-module__title","description":"GiftInfoModal-module__description","soldOut":"GiftInfoModal-module__soldOut","footerDescription":"GiftInfoModal-module__footerDescription","unknown":"GiftInfoModal-module__unknown","giftValue":"GiftInfoModal-module__giftValue"});

/***/ }),

/***/ "./src/components/modals/gift/recipient/GiftRecipientPicker.module.scss":
/*!******************************************************************************!*\
  !*** ./src/components/modals/gift/recipient/GiftRecipientPicker.module.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"GiftRecipientPicker-module__root","picker":"GiftRecipientPicker-module__picker"});

/***/ }),

/***/ "./src/components/modals/paidReaction/PaidReactionModal.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/modals/paidReaction/PaidReactionModal.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"content":"PaidReactionModal-module__content","title":"PaidReactionModal-module__title","slider":"PaidReactionModal-module__slider","description":"PaidReactionModal-module__description","modalBalance":"PaidReactionModal-module__modalBalance","topLabel":"PaidReactionModal-module__topLabel","top":"PaidReactionModal-module__top","topBadge":"PaidReactionModal-module__topBadge","buttonStar":"PaidReactionModal-module__buttonStar","topPeer":"PaidReactionModal-module__topPeer","checkbox":"PaidReactionModal-module__checkbox","disclaimer":"PaidReactionModal-module__disclaimer"});

/***/ }),

/***/ "./src/components/modals/paidReaction/StarSlider.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/modals/paidReaction/StarSlider.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"StarSlider-module__root","slider":"StarSlider-module__slider","sparkles":"StarSlider-module__sparkles","progress":"StarSlider-module__progress","floatingBadgeWrapper":"StarSlider-module__floatingBadgeWrapper","floatingBadge":"StarSlider-module__floatingBadge","floatingBadgeText":"StarSlider-module__floatingBadgeText","floatingBadgeTriangle":"StarSlider-module__floatingBadgeTriangle"});

/***/ }),

/***/ "./src/components/modals/stars/StarsBalanceModal.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/modals/stars/StarsBalanceModal.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"StarsBalanceModal-module__root","transition":"StarsBalanceModal-module__transition","main":"StarsBalanceModal-module__main","container":"StarsBalanceModal-module__container","section":"StarsBalanceModal-module__section","sectionTitle":"StarsBalanceModal-module__sectionTitle","tos":"StarsBalanceModal-module__tos","logo":"StarsBalanceModal-module__logo","logoBackground":"StarsBalanceModal-module__logoBackground","headerHext":"StarsBalanceModal-module__headerHext","description":"StarsBalanceModal-module__description","header":"StarsBalanceModal-module__header","starHeaderText":"StarsBalanceModal-module__starHeaderText","botItem":"StarsBalanceModal-module__botItem","hiddenHeader":"StarsBalanceModal-module__hiddenHeader","closeButton":"StarsBalanceModal-module__closeButton","balance":"StarsBalanceModal-module__balance","smallerText":"StarsBalanceModal-module__smallerText","balanceBottom":"StarsBalanceModal-module__balanceBottom","modalBalance":"StarsBalanceModal-module__modalBalance","starButton":"StarsBalanceModal-module__starButton","paymentContent":"StarsBalanceModal-module__paymentContent","paymentImages":"StarsBalanceModal-module__paymentImages","paymentPhoto":"StarsBalanceModal-module__paymentPhoto","avatarStar":"StarsBalanceModal-module__avatarStar","paymentImageBackground":"StarsBalanceModal-module__paymentImageBackground","paymentButton":"StarsBalanceModal-module__paymentButton","paymentButtonStar":"StarsBalanceModal-module__paymentButtonStar","transactions":"StarsBalanceModal-module__transactions","subscriptions":"StarsBalanceModal-module__subscriptions","tabs":"StarsBalanceModal-module__tabs","disclaimer":"StarsBalanceModal-module__disclaimer","amountBadge":"StarsBalanceModal-module__amountBadge","loadMore":"StarsBalanceModal-module__loadMore","loadMoreIcon":"StarsBalanceModal-module__loadMoreIcon"});

/***/ }),

/***/ "./src/components/modals/stars/gift/StarsGiftModal.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/modals/stars/gift/StarsGiftModal.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"StarsGiftModal-module__root","main":"StarsGiftModal-module__main","headerInfo":"StarsGiftModal-module__headerInfo","logo":"StarsGiftModal-module__logo","logoBackground":"StarsGiftModal-module__logoBackground","description":"StarsGiftModal-module__description","section":"StarsGiftModal-module__section","header":"StarsGiftModal-module__header","starHeaderText":"StarsGiftModal-module__starHeaderText","hiddenHeader":"StarsGiftModal-module__hiddenHeader","closeButton":"StarsGiftModal-module__closeButton","avatar":"StarsGiftModal-module__avatar","center":"StarsGiftModal-module__center","secondaryInfo":"StarsGiftModal-module__secondaryInfo","modalDialog":"StarsGiftModal-module__modalDialog"});

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionItem.module.scss":
/*!************************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionItem.module.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"StarsSubscriptionItem-module__root","info":"StarsSubscriptionItem-module__info","subtitle":"StarsSubscriptionItem-module__subtitle","status":"StarsSubscriptionItem-module__status","statusPricing":"StarsSubscriptionItem-module__statusPricing","amount":"StarsSubscriptionItem-module__amount","title":"StarsSubscriptionItem-module__title","description":"StarsSubscriptionItem-module__description","statusPeriod":"StarsSubscriptionItem-module__statusPeriod","statusEnded":"StarsSubscriptionItem-module__statusEnded","preview":"StarsSubscriptionItem-module__preview","subscriptionStar":"StarsSubscriptionItem-module__subscriptionStar"});

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionModal.module.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionModal.module.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modal":"StarsSubscriptionModal-module__modal","header":"StarsSubscriptionModal-module__header","starsHeader":"StarsSubscriptionModal-module__starsHeader","title":"StarsSubscriptionModal-module__title","amount":"StarsSubscriptionModal-module__amount","footer":"StarsSubscriptionModal-module__footer","starsBackground":"StarsSubscriptionModal-module__starsBackground","avatarWrapper":"StarsSubscriptionModal-module__avatarWrapper","subscriptionStar":"StarsSubscriptionModal-module__subscriptionStar","amountStar":"StarsSubscriptionModal-module__amountStar","secondary":"StarsSubscriptionModal-module__secondary","danger":"StarsSubscriptionModal-module__danger"});

/***/ }),

/***/ "./src/components/modals/stars/transaction/PaidMediaThumb.module.scss":
/*!****************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/PaidMediaThumb.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"PaidMediaThumb-module__root","preview":"PaidMediaThumb-module__preview","count":"PaidMediaThumb-module__count","thumb":"PaidMediaThumb-module__thumb","noOutline":"PaidMediaThumb-module__noOutline","itemCount1":"PaidMediaThumb-module__itemCount1","itemCount2":"PaidMediaThumb-module__itemCount2","itemCount3":"PaidMediaThumb-module__itemCount3","blurry":"PaidMediaThumb-module__blurry","full":"PaidMediaThumb-module__full","fadeIn":"PaidMediaThumb-module__fadeIn"});

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionItem.module.scss":
/*!**********************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionItem.module.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"StarsTransactionItem-module__root","info":"StarsTransactionItem-module__info","stars":"StarsTransactionItem-module__stars","amount":"StarsTransactionItem-module__amount","title":"StarsTransactionItem-module__title","description":"StarsTransactionItem-module__description","date":"StarsTransactionItem-module__date","positive":"StarsTransactionItem-module__positive","negative":"StarsTransactionItem-module__negative","preview":"StarsTransactionItem-module__preview","subscriptionStar":"StarsTransactionItem-module__subscriptionStar"});

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionModal.module.scss":
/*!***********************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionModal.module.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modal":"StarsTransactionModal-module__modal","positive":"StarsTransactionModal-module__positive","negative":"StarsTransactionModal-module__negative","header":"StarsTransactionModal-module__header","starsHeader":"StarsTransactionModal-module__starsHeader","amount":"StarsTransactionModal-module__amount","title":"StarsTransactionModal-module__title","description":"StarsTransactionModal-module__description","tid":"StarsTransactionModal-module__tid","footer":"StarsTransactionModal-module__footer","starsBackground":"StarsTransactionModal-module__starsBackground","copyIcon":"StarsTransactionModal-module__copyIcon","mediaPreview":"StarsTransactionModal-module__mediaPreview","subtitle":"StarsTransactionModal-module__subtitle","starGiftSticker":"StarsTransactionModal-module__starGiftSticker"});

/***/ }),

/***/ "./src/assets/icons/StarLogo.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/StarLogo.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "StarLogo.600328787c79d99dfd66.svg";

/***/ }),

/***/ "./src/assets/stars-bg.png":
/*!*********************************!*\
  !*** ./src/assets/stars-bg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "stars-bg.dee4c4b73c7d21c2ec73.png";

/***/ })

}]);
//# sourceMappingURL=BundleStars.8b929cdc4523998a6940.js.map