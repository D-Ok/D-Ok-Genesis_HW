var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.jsx
var import_react16 = __toESM(require("../node_modules/react/index.js"));
var import_react_dom = __toESM(require("../node_modules/react-dom/index.js"));

// src/app/index.jsx
var import_react15 = __toESM(require("../node_modules/react/index.js"));
var import_react_router_dom = require("../node_modules/react-router-dom/main.js");

// src/components/MenuBar/MenuBar.jsx
var import_react = __toESM(require("../node_modules/react/index.js"));
var import_prop_types = __toESM(require("../node_modules/prop-types/index.js"));
var import_material = require("../node_modules/@mui/material/node/index.js");
var import_AccountCircle = __toESM(require("../node_modules/@mui/icons-material/AccountCircle.js"));
var MenuBar = function({ user, onTitleClick, onAvatarClick }) {
  const navigateToMainPage = () => onTitleClick();
  const navigateToUserPage = () => user && user.userName && onAvatarClick(user.userName);
  return /* @__PURE__ */ import_react.default.createElement(import_material.AppBar, {
    position: "fixed"
  }, /* @__PURE__ */ import_react.default.createElement(import_material.Toolbar, {
    sx: { justifyContent: "space-between" }
  }, /* @__PURE__ */ import_react.default.createElement(import_material.Typography, {
    variant: "h6",
    component: "div",
    onClick: navigateToMainPage
  }, "TikTuk"), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(import_material.IconButton, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: navigateToUserPage,
    color: "inherit"
  }, user ? /* @__PURE__ */ import_react.default.createElement(import_material.Avatar, {
    alt: user.userName,
    src: user.avatar
  }) : /* @__PURE__ */ import_react.default.createElement(import_AccountCircle.default, null)))));
};
MenuBar.defaultProps = {
  user: void 0,
  onAvatarClick: () => 0,
  onTitleClick: () => 0
};
MenuBar.propTypes = {
  user: import_prop_types.default.shape({
    userName: import_prop_types.default.string,
    avatar: import_prop_types.default.string
  }),
  onAvatarClick: import_prop_types.default.func,
  onTitleClick: import_prop_types.default.func
};
var MenuBar_default = MenuBar;

// src/pages/Trending/Trending.jsx
var import_react8 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types8 = __toESM(require("../node_modules/prop-types/index.js"));

// src/components/Post/Post.jsx
var import_react7 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types7 = __toESM(require("../node_modules/prop-types/index.js"));
var import_Typography = __toESM(require("../node_modules/@mui/material/node/Typography/index.js"));

// src/components/Video/Video.jsx
var import_react4 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types4 = __toESM(require("../node_modules/prop-types/index.js"));
var import_classnames3 = __toESM(require("../node_modules/classnames/index.js"));
var import_react_intersection_observer2 = require("../node_modules/react-intersection-observer/react-intersection-observer.js");

// src/components/VideoElement/VideoElement.jsx
var import_react3 = __toESM(require("../node_modules/react/index.js"));
var import_react_intersection_observer = require("../node_modules/react-intersection-observer/react-intersection-observer.js");
var import_prop_types3 = __toESM(require("../node_modules/prop-types/index.js"));
var import_classnames2 = __toESM(require("../node_modules/classnames/index.js"));

// src/components/InfoIcon/InfoIcon.jsx
var import_react2 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types2 = __toESM(require("../node_modules/prop-types/index.js"));
var import_classnames = __toESM(require("../node_modules/classnames/index.js"));
var import_material2 = require("../node_modules/@mui/material/node/index.js");

// src/helpers/numberToText.js
var numberToText_default = (number) => {
  if (Number.isNaN(number))
    return;
  switch (true) {
    case number < 1e3:
      return number;
    case number < 1e6:
      return `${Math.floor(number / 1e3)}k`;
    default:
      return `${Math.floor(number / 1e6)}m`;
  }
};

// src/components/InfoIcon/InfoIcon.jsx
var InfoIcon = function({
  disabled,
  className,
  icon,
  number,
  color,
  text,
  fontSize,
  iconSize
}) {
  const sxObject = iconSize ? { fontSize: iconSize } : {};
  const textNumber = numberToText_default(number);
  return /* @__PURE__ */ import_react2.default.createElement(import_material2.IconButton, {
    disableRipple: disabled,
    disableFocusRipple: disabled,
    color,
    "aria-label": "upload picture",
    component: "span",
    className: (0, import_classnames.default)(className, "info-icon-container")
  }, /* @__PURE__ */ import_react2.default.createElement(import_material2.Icon, {
    fontSize,
    sx: sxObject
  }, icon), text && /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "info-icon-text"
  }, `${text}:`), textNumber && /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "info-icon-text"
  }, textNumber));
};
InfoIcon.defaultProps = {
  icon: "favorite",
  color: "error",
  fontSize: "medium",
  number: 0,
  text: "",
  iconSize: 0,
  className: "",
  disabled: false
};
InfoIcon.propTypes = {
  icon: import_prop_types2.default.string,
  number: import_prop_types2.default.number,
  text: import_prop_types2.default.string,
  color: import_prop_types2.default.oneOf([
    "inherit",
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning"
  ]),
  fontSize: import_prop_types2.default.oneOf(["inherit", "large", "medium", "small"]),
  iconSize: import_prop_types2.default.number,
  className: import_prop_types2.default.string,
  disabled: import_prop_types2.default.bool
};
var InfoIcon_default = InfoIcon;

// src/helpers/videoController.js
var videoController_default = (video, isPause) => {
  if (isPause)
    video.pause();
  else
    video.play();
};

// src/components/VideoElement/VideoElement.jsx
var VideoElement = function({
  videoUrl,
  isLoad,
  playOnView,
  muted
}) {
  const [isPlay, setIsPlay] = (0, import_react3.useState)(false);
  const videoElement = (0, import_react3.useRef)(null);
  const { ref, inView, entry } = (0, import_react_intersection_observer.useInView)({
    threshold: 0.6
  });
  (0, import_react3.useEffect)(() => {
    setIsPlay(isLoad && playOnView);
  }, [isLoad, playOnView]);
  (0, import_react3.useEffect)(() => {
    if (!playOnView || !isPlay)
      return;
    videoController_default(videoElement.current, !inView);
  }, [inView, playOnView, videoUrl, isPlay, entry]);
  const onVideoClick = () => {
    videoController_default(videoElement.current, isPlay);
    setIsPlay(!isPlay);
  };
  const buttonClasses = (0, import_classnames2.default)("video-button", {
    "--display": playOnView && !isPlay && isLoad
  });
  const videoSource = isLoad ? videoUrl : "";
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "video-element-container",
    ref
  }, /* @__PURE__ */ import_react3.default.createElement("video", {
    muted,
    loop: true,
    onClick: onVideoClick,
    src: videoSource,
    ref: videoElement
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: buttonClasses,
    onClick: onVideoClick
  }, /* @__PURE__ */ import_react3.default.createElement(InfoIcon_default, {
    color: "default",
    icon: "play_arrow",
    iconSize: 100
  })));
};
VideoElement.defaultProps = {
  muted: true,
  isLoad: false,
  playOnView: true,
  videoUrl: "https://v39-eu.tiktokcdn.com/a2144d6d51de21e456077881018c5f87/61930025/video/tos/useast2a/tos-useast2a-ve-0068c004/c5f6c64a47b04ecd91168fd9d921009c/?a=1233&br=2536&bt=1268&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111518492901019021807024301368&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxqNjQ6ZjtkNzMzNzczM0ApMzo6OTo1NGU1Nzk2OzczO2dxc2ZzcjRfNGxgLS1kMTZzc2BeMjQxNC02XjUwLS8uYjA6Yw%3D%3D&vl=&vr="
};
VideoElement.propTypes = {
  videoUrl: import_prop_types3.default.string,
  playOnView: import_prop_types3.default.bool,
  muted: import_prop_types3.default.bool,
  isLoad: import_prop_types3.default.bool
};
var VideoElement_default = VideoElement;

// src/components/Video/Video.jsx
var Video = function({
  muted,
  playOnView,
  videoUrl,
  className
}) {
  const [isLoad, setIsLoad] = (0, import_react4.useState)(false);
  const { ref, inView } = (0, import_react_intersection_observer2.useInView)({
    rootMargin: "100px",
    triggerOnce: true
  });
  (0, import_react4.useEffect)(() => {
    if (inView && !isLoad)
      setIsLoad(true);
  }, [inView, isLoad]);
  const containerClasses = (0, import_classnames3.default)({ [className]: true }, "video-container");
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: containerClasses,
    ref
  }, /* @__PURE__ */ import_react4.default.createElement(VideoElement_default, {
    videoUrl,
    isLoad,
    playOnView,
    muted
  }));
};
Video.defaultProps = {
  playOnView: false,
  className: "",
  muted: true,
  videoUrl: "https://v39-eu.tiktokcdn.com/a2144d6d51de21e456077881018c5f87/61930025/video/tos/useast2a/tos-useast2a-ve-0068c004/c5f6c64a47b04ecd91168fd9d921009c/?a=1233&br=2536&bt=1268&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111518492901019021807024301368&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxqNjQ6ZjtkNzMzNzczM0ApMzo6OTo1NGU1Nzk2OzczO2dxc2ZzcjRfNGxgLS1kMTZzc2BeMjQxNC02XjUwLS8uYjA6Yw%3D%3D&vl=&vr="
};
Video.propTypes = {
  videoUrl: import_prop_types4.default.string,
  className: import_prop_types4.default.string,
  playOnView: import_prop_types4.default.bool,
  muted: import_prop_types4.default.bool
};
var Video_default = Video;

// src/components/Hashtag/Hashtag.jsx
var import_react5 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types5 = __toESM(require("../node_modules/prop-types/index.js"));
var import_material3 = require("../node_modules/@mui/material/node/index.js");
var Hashtag = function({ name, disabled }) {
  return /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "hashtag"
  }, /* @__PURE__ */ import_react5.default.createElement(import_material3.Link, {
    component: "button",
    href: "#",
    disabled,
    underline: "hover"
  }, "#", name));
};
Hashtag.defaultProps = {
  name: "",
  disabled: true
};
Hashtag.propTypes = {
  name: import_prop_types5.default.string,
  disabled: import_prop_types5.default.bool
};
var Hashtag_default = Hashtag;

// src/components/AvatarLink/AvatarLink.jsx
var import_react6 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types6 = __toESM(require("../node_modules/prop-types/index.js"));
var import_classnames4 = __toESM(require("../node_modules/classnames/index.js"));
var import_material4 = require("../node_modules/@mui/material/node/index.js");
var AvatarLink = function({
  uniqueId,
  nickname,
  avatar,
  className,
  onClickHandler
}) {
  const avatarClickHandler = () => onClickHandler(uniqueId);
  const avatarLinkClasses = (0, import_classnames4.default)({ [`${className}`]: true }, "avatar-link-container");
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: avatarLinkClasses,
    onClick: avatarClickHandler
  }, /* @__PURE__ */ import_react6.default.createElement(import_material4.Avatar, {
    alt: nickname,
    src: avatar,
    className: "avatar-icon"
  }), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "avatar-text"
  }, /* @__PURE__ */ import_react6.default.createElement(import_material4.Link, {
    href: "#",
    underline: "hover"
  }, uniqueId), /* @__PURE__ */ import_react6.default.createElement("span", {
    className: "avatar-nickname"
  }, nickname)));
};
AvatarLink.defaultProps = {
  className: "",
  uniqueId: "",
  nickname: "",
  avatar: "",
  onClickHandler: () => 0
};
AvatarLink.propTypes = {
  uniqueId: import_prop_types6.default.string,
  nickname: import_prop_types6.default.string,
  avatar: import_prop_types6.default.string,
  className: import_prop_types6.default.string,
  onClickHandler: import_prop_types6.default.func
};
var AvatarLink_default = AvatarLink;

// src/assets/constants.js
var GLOBAL_CONSTANTS = {
  DEFAULT_USER_ID: "dave.xp",
  API: {
    PATHNAME: "https://tiktok33.p.rapidapi.com",
    ENDPOINTS: {
      TRENDING_FEED: "/trending/feed",
      USER: {
        FEED: "/user/feed/",
        INFO: "/user/info/"
      }
    },
    HEADERS: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
    }
  },
  STYLES: {
    POST: {
      WIDTH: 9,
      HEIGHT: 16,
      SPACE_PX: 20
    },
    MENU_BAR_HEIGHT_PX: 64,
    MAX_HEIGHT_ON_PAGE: 0.9
  }
};

// src/helpers/getPostParameters.js
var { STYLES } = GLOBAL_CONSTANTS;
var getPostParameters_default = () => {
  const { MENU_BAR_HEIGHT_PX, MAX_HEIGHT_ON_PAGE, POST } = STYLES;
  const pageHeight = window.innerHeight - MENU_BAR_HEIGHT_PX;
  const height = pageHeight * MAX_HEIGHT_ON_PAGE;
  const width = 2 * (height * POST.WIDTH / POST.HEIGHT) + POST.SPACE_PX;
  return { height, width };
};

// src/components/Post/Post.jsx
var Post = function(properties) {
  const {
    video,
    text,
    author,
    stats,
    challenges,
    onAvatarClick
  } = properties;
  if (!video)
    return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null);
  const { diggCount, commentCount } = stats;
  const postStyles = getPostParameters_default();
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "post-container",
    style: postStyles
  }, /* @__PURE__ */ import_react7.default.createElement(Video_default, {
    ...video,
    videoUrl: video.playAddr,
    playOnView: true
  }), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "post-info-container"
  }, author && /* @__PURE__ */ import_react7.default.createElement(AvatarLink_default, {
    ...author,
    avatar: author.avatarThumb,
    onClickHandler: onAvatarClick
  }), /* @__PURE__ */ import_react7.default.createElement("hr", {
    className: "post-divider"
  }), /* @__PURE__ */ import_react7.default.createElement(import_Typography.default, {
    variant: "body1",
    component: "div",
    className: "post-text"
  }, text), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "post-hashtags"
  }, challenges.map(({ id, title }) => /* @__PURE__ */ import_react7.default.createElement(Hashtag_default, {
    name: title,
    key: id
  }))), /* @__PURE__ */ import_react7.default.createElement("hr", {
    className: "post-divider"
  }), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "post-reactions"
  }, /* @__PURE__ */ import_react7.default.createElement(InfoIcon_default, {
    number: diggCount
  }), /* @__PURE__ */ import_react7.default.createElement(InfoIcon_default, {
    icon: "forum",
    color: "primary",
    number: commentCount
  }))));
};
Post.defaultProps = {
  challenges: [],
  stats: {
    diggCount: 0,
    commentCount: 0
  },
  video: void 0,
  author: void 0,
  text: void 0,
  onAvatarClick: () => 0
};
Post.propTypes = {
  video: import_prop_types7.default.shape({
    duration: import_prop_types7.default.number,
    height: import_prop_types7.default.number,
    width: import_prop_types7.default.number,
    playAddr: import_prop_types7.default.string
  }),
  author: import_prop_types7.default.objectOf(AvatarLink_default),
  text: import_prop_types7.default.string,
  stats: import_prop_types7.default.shape({
    diggCount: import_prop_types7.default.number,
    commentCount: import_prop_types7.default.number
  }),
  challenges: import_prop_types7.default.arrayOf(import_prop_types7.default.shape({
    id: import_prop_types7.default.string,
    title: import_prop_types7.default.string
  })),
  onAvatarClick: import_prop_types7.default.func
};
var Post_default = Post;

// src/api/api.js
var import_axios = __toESM(require("../node_modules/axios/index.js"));
var {
  API: { HEADERS, PATHNAME }
} = GLOBAL_CONSTANTS;
var options = ({ endpoint, method = "GET", headers = {} }) => {
  const url = `${PATHNAME}${endpoint}`;
  const allHeaders = { ...HEADERS, ...headers };
  return {
    method,
    url,
    headers: allHeaders
  };
};
var getOptions = (endpoint) => options({ endpoint });
var getData = (endpoint) => import_axios.default.request(getOptions(endpoint));

// src/api/getTrendingFeed.js
var trendingFeedUrl = GLOBAL_CONSTANTS.API.ENDPOINTS.TRENDING_FEED;
var getTrendingFeed_default = () => getData(trendingFeedUrl);

// src/services/defaultMapper.js
var callbackAndReturn = (value, callback) => {
  if (callback) {
    callback(value);
  } else {
    return value;
  }
};
var defaultMapper_default = async ({
  request,
  parameters,
  callback,
  defaultReturn
}) => {
  try {
    const result = await request(parameters);
    const { data } = result;
    const resultValue = typeof data === "string" ? defaultReturn : data;
    return callbackAndReturn(resultValue, callback);
  } catch (error) {
    console.error(error);
    return callbackAndReturn(defaultReturn, callback);
  }
};

// src/mock/trendingFeed.js
var trendingFeed_default = [
  {
    id: "7054584592996617478",
    desc: "#stitch mit @_byjemmi Wasser + \u26AA\uFE0FHose = \u{1F92F} folgt f\xFCr mehr\u{1F422} | Insta:diewalsers.official\u{1F4F8}",
    createTime: 1642523473,
    video: {
      id: "7054584592996617478",
      height: 1024,
      width: 576,
      duration: 14,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/c5dc2d05878a45c4baf0b85326215c32_1642523475~tplv-dmt-logom:tos-useast2a-v-0068/4f4f9ad354c448188599e3d43fa2dd72.image?x-expires=1642975200&x-signature=C%2FGMOoU%2FLIG41dbO2A5aoIdwAnE%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5194e1483c604cc88507a0ded9622f86_1642523473?x-expires=1642975200&x-signature=F8uges2bYTTa7DHh3kURMyPNX30%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f448df5c4fad42adad5b1bc94f7674b1_1642523474?x-expires=1642975200&x-signature=OtQgSQuKYbpzYpP7%2BGQPfoXGqsQ%3D",
      playAddr: "https://v16-webapp.tiktok.com/cfcfce0073d6209c006b97c386106aa1/61eddd55/video/tos/useast2a/tos-useast2a-ve-0068c002/87f54a41ca244e5cb154988de4c184a3/?a=1988&br=2182&bt=1091&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2d1ajQ6Zm9oOjMzNzczM0ApOWZoODppN2RoNzY3NWk0PGcwbDUucjRnaWdgLS1kMTZzc2IzLjNgLTYzYjFjNDZfMDQ6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/cfcfce0073d6209c006b97c386106aa1/61eddd55/video/tos/useast2a/tos-useast2a-ve-0068c002/87f54a41ca244e5cb154988de4c184a3/?a=1988&br=2182&bt=1091&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2d1ajQ6Zm9oOjMzNzczM0ApOWZoODppN2RoNzY3NWk0PGcwbDUucjRnaWdgLS1kMTZzc2IzLjNgLTYzYjFjNDZfMDQ6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/5194e1483c604cc88507a0ded9622f86_1642523473~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=FAlTNJIUNx%2BAE1r5F66EQHvYPhw%3D",
        "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/5194e1483c604cc88507a0ded9622f86_1642523473~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=4I%2BmE8gPuAnextrmfPXYMXm9DKk%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c1bbc629f8e8082228ca6fc704f0c4c0?x-expires=1642975200&x-signature=OkaUkYyKUz91ACUpAbSuNniSu3k%3D",
      bitrate: 1117394,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6808171807859803142",
      uniqueId: "diewalsers",
      nickname: "dieWalsers",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_100x100.jpeg?x-expires=1643040000&x-signature=Et4HzIPMt4h7XIGjPSKEXM7tdUM%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_720x720.jpeg?x-expires=1643040000&x-signature=50ISTRqcquPOc%2BfFS2fvINGoHr4%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=l8qnwT62WeskSYel%2Fq7690LYTv0%3D",
      signature: "Lisa & Henry \nWillkommen bei Familie Walser\u{1F970}\u{1F422}\n\u{1F4E8}: booking@diewalsers.com",
      verified: false,
      secUid: "MS4wLjABAAAARdSPx5WZs8jgMbubFXzYXRLnX8nKGl5ReqxpaSwaTqPg4OeUJEpIZhHoFQagUrFF",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6768686368739559426",
      title: "In My Bed",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/ffc2c8df819248679aa241d8ecd2565b",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/544866caa1d140c48b646b233a37dd1f~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/544866caa1d140c48b646b233a37dd1f~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/544866caa1d140c48b646b233a37dd1f~c5_720x720.jpeg",
      authorName: "Rotimi",
      original: false,
      duration: 60,
      album: "The Beauty of Becoming"
    },
    challenges: [
      {
        id: "8288",
        title: "stitch",
        desc: "Make the ultimate collab with your fav creators with our brand new feature, #STITCH! Just find a TikTok video you love, press share, and send it to Stitch.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/6659e09f069c8d2a278f9054d961fb0a",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/6659e09f069c8d2a278f9054d961fb0a",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/6659e09f069c8d2a278f9054d961fb0a",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a7edf3200385b1060776e3d8a6612840",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a7edf3200385b1060776e3d8a6612840",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a7edf3200385b1060776e3d8a6612840",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 54900,
      shareCount: 2607,
      commentCount: 388,
      playCount: 22e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "7054288988617887022",
        start: 12,
        end: 21,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6986792067154592774",
        isCommerce: false,
        userUniqueId: "_byjemmi",
        secUid: "MS4wLjABAAAAQ6HQXqFGjcPhBA8BfDPNsaSsu-2x5fQLnQJ6KkPtVEqPLdBJPlr0MtO0elmLDl70",
        subType: 0
      },
      {
        awemeId: "",
        start: 0,
        end: 7,
        hashtagName: "stitch",
        hashtagId: "8288",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 240,
      followerCount: 639500,
      heartCount: 167e5,
      videoCount: 471,
      diggCount: 7566,
      heart: 167e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Taille:",
          "\u2705",
          "Wait for it\u{1F633}\u{1F633}",
          "folgt f\xFCr mehr\u{1F422}"
        ]
      },
      {
        stickerType: 9,
        stickerText: [
          "Extreme Challenge\u{1F92F}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7024139461835377925",
    desc: "Wenn das Viral gehen sollte fress ich n Besen \u{1F9F9}. #fy #fyp #viral #balkan #mymum #comedy #albanian #america #nomobbingjustfun #lustig",
    createTime: 1635434913,
    video: {
      id: "7024139461835377925",
      height: 1024,
      width: 576,
      duration: 36,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c2824386d47c4477a875f372f479d1c6_1635434917?x-expires=1642975200&x-signature=0345fz%2BXOdEwss28KLx%2FNBEglLQ%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/07996a50f4474761a8bb88b03d311708_1635434915?x-expires=1642975200&x-signature=b6%2BFEB2MCqdkAObWBKz4aLbtNsg%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/14ca7ca86dcc4ad99ad20fd6e7d24538_1635434915?x-expires=1642975200&x-signature=TeIHVMi0I2ZyDytIg%2FECvjFSPK8%3D",
      playAddr: "https://v16-webapp.tiktok.com/d13f5bd1871effeb516dd8776fd1aad0/61eddd6b/video/tos/useast2a/tos-useast2a-ve-0068c001/c9fb229c71544bfcbb467cdf246a2348/?a=1988&br=2668&bt=1334&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3dyaTQ6Zm1mODMzNzczM0ApZ2ZnNDM0PDszN2hoNzg6aWcvcmo2cjRvL3FgLS1kMTZzc2FhYjUtMjA0Li81Yi02YzQ6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/d13f5bd1871effeb516dd8776fd1aad0/61eddd6b/video/tos/useast2a/tos-useast2a-ve-0068c001/c9fb229c71544bfcbb467cdf246a2348/?a=1988&br=2668&bt=1334&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3dyaTQ6Zm1mODMzNzczM0ApZ2ZnNDM0PDszN2hoNzg6aWcvcmo2cjRvL3FgLS1kMTZzc2FhYjUtMjA0Li81Yi02YzQ6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/07996a50f4474761a8bb88b03d311708_1635434915~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=GYj4sQincg7VNqkUcqyY6UMPJHA%3D",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/07996a50f4474761a8bb88b03d311708_1635434915~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=Q1pjTuQs4Hngv0sNHlZRBNjXa60%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/076a46fa39c0b77a82e7f877389e4670?x-expires=1642975200&x-signature=Hi%2BdjS%2Fsq%2FSdVNrgznpWWqTdNHo%3D",
      bitrate: 1366558,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6800270154405905414",
      uniqueId: "ninogashi",
      nickname: "NinoGashi",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a92f8ce2b4b77115c768636e57dcff56~c5_100x100.jpeg?x-expires=1643040000&x-signature=hf6iPSBaVssSPMyJX1khoGLU7rk%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a92f8ce2b4b77115c768636e57dcff56~c5_720x720.jpeg?x-expires=1643040000&x-signature=Opg3UrOw6vG2KsoHokYHXj6AEd4%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a92f8ce2b4b77115c768636e57dcff56~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=4OyYXBbOvmPNCN%2BKsdJ9CbszgvA%3D",
      signature: "Alles Unterhaltung Habibi\u{1F49A}\n\u{1F4E8} info@nino-gashi.de",
      verified: false,
      secUid: "MS4wLjABAAAAzifysuHPGKM2Vlf1q9xTtad5scgLHj341GFnufaazCPV-T3nhaAtxVR6-AO4tpxC",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6746993352891189249",
      title: "Monkeys Spinning Monkeys",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/2777963d433b4f7e81d002eb04bbbe40",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/383f5db9f1e44955896da2c8eb7be6ac~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/383f5db9f1e44955896da2c8eb7be6ac~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/383f5db9f1e44955896da2c8eb7be6ac~c5_720x720.jpeg",
      authorName: "Kevin MacLeod & Kevin The Monkey",
      original: false,
      duration: 60,
      album: "Monkeys Spinning Monkeys"
    },
    challenges: [
      {
        id: "153828",
        title: "fy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "229207",
        title: "fyp",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "20884",
        title: "viral",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "40601",
        title: "balkan",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "130675",
        title: "mymum",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "7888",
        title: "comedy",
        desc: "",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "34293",
        title: "albanian",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "9841",
        title: "america",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1653294035205126",
        title: "nomobbingjustfun",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "47490",
        title: "lustig",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 17e5,
      shareCount: 25e3,
      commentCount: 2e4,
      playCount: 125e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 50,
        end: 53,
        hashtagName: "fy",
        hashtagId: "153828",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 54,
        end: 58,
        hashtagName: "fyp",
        hashtagId: "229207",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 65,
        hashtagName: "viral",
        hashtagId: "20884",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 66,
        end: 73,
        hashtagName: "balkan",
        hashtagId: "40601",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 74,
        end: 80,
        hashtagName: "mymum",
        hashtagId: "130675",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 81,
        end: 88,
        hashtagName: "comedy",
        hashtagId: "7888",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 98,
        hashtagName: "albanian",
        hashtagId: "34293",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 99,
        end: 107,
        hashtagName: "america",
        hashtagId: "9841",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 108,
        end: 125,
        hashtagName: "nomobbingjustfun",
        hashtagId: "1653294035205126",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 126,
        end: 133,
        hashtagName: "lustig",
        hashtagId: "47490",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 371,
      followerCount: 11e5,
      heartCount: 197e5,
      videoCount: 79,
      diggCount: 17e3,
      heart: 197e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Wait for it \u{1F602}\u{1F602}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7053869270442265862",
    desc: "#LetsTalkEmoji",
    createTime: 1642356923,
    video: {
      id: "7053869270442265862",
      height: 1024,
      width: 576,
      duration: 8,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2695fc098e12427fbae816124fdfd0a4_1642356925?x-expires=1642975200&x-signature=SDGG0IoKgPBg36SxCfb9u30%2B3v0%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/56706a473660458bb139709dc4dc1669_1642356924?x-expires=1642975200&x-signature=UAhffyjrHH1Tut5hdSh6IN1EQpw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/fd724b959e2c401cba50ef7baf591eb2_1642356926?x-expires=1642975200&x-signature=rOvC7YDfiqwAGHBqRgCyJHihERY%3D",
      playAddr: "https://v16-webapp.tiktok.com/667928500d73e18a936261d57b6a1b99/61eddd4f/video/tos/useast2a/tos-useast2a-pve-0068/103e0ede0f9146b7aab79fadb7af9cbc/?a=1988&br=1900&bt=950&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am08cmY6Zmc5OjMzNzczM0ApaDk2NTloNjtoNzVmO2czZWdyNWhzcjRfLmZgLS1kMTZzczYzNDE1LTUyLzAvLTZiYmM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/667928500d73e18a936261d57b6a1b99/61eddd4f/video/tos/useast2a/tos-useast2a-pve-0068/103e0ede0f9146b7aab79fadb7af9cbc/?a=1988&br=1900&bt=950&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am08cmY6Zmc5OjMzNzczM0ApaDk2NTloNjtoNzVmO2czZWdyNWhzcjRfLmZgLS1kMTZzczYzNDE1LTUyLzAvLTZiYmM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/56706a473660458bb139709dc4dc1669_1642356924~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=pzy%2FLuhtRO43G8ZHHMDvSvbb2%2FI%3D",
        "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/56706a473660458bb139709dc4dc1669_1642356924~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=HLDW%2FyqTRz94VOG%2BOfINN1LTNbk%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e1ee408efe29c775f42f5969fd536def?x-expires=1642975200&x-signature=7DDkBPAM2YkRXEn9jcOlGyyU7q4%3D",
      bitrate: 973353,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6743843569353065478",
      uniqueId: "cheyennenauert",
      nickname: "Cheyenne",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fba5ad57dfe2c7aedfd6310b9fa4f8cb~c5_100x100.jpeg?x-expires=1643040000&x-signature=QmUW7wRLbEz0DjoaBW9ZWzO%2FB2E%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fba5ad57dfe2c7aedfd6310b9fa4f8cb~c5_720x720.jpeg?x-expires=1643040000&x-signature=i3QlU08JZj6Uu4yQ2MbeeFfB1%2FA%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fba5ad57dfe2c7aedfd6310b9fa4f8cb~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=%2BSBekc%2B9HH7NsPjhQ3sRNzXj9cQ%3D",
      signature: "\u{1F308} 19 \u2648\uFE0E \u{1F331}\nfolgt mir gerne auf Insta <3\nIG: cheyennenauert\n\u26A0\uFE0Feinziger Account\u26A0\uFE0F",
      verified: false,
      secUid: "MS4wLjABAAAAI1f1DhS7k7730MlDxGg3X0QXr-MsENvofbrGAQw0s7lnzfD27aC5XDRXF3Ln1BDP",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7051643144949058309",
      title: "original sound",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7051643174812732165.mp3",
      coverThumb: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03c1044e1b099ab185dee806ace1d0e7~c5_100x100.jpeg?x-expires=1643040000&x-signature=xjdPu8%2BuNI3cLx0m8aQKQ5dwj9o%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03c1044e1b099ab185dee806ace1d0e7~c5_720x720.jpeg?x-expires=1643040000&x-signature=hhimJJncUerMuMTTJUHr32cObbM%3D",
      coverLarge: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03c1044e1b099ab185dee806ace1d0e7~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=IML6t3Q3GR83%2BX4%2FtUIOdxc%2BBPg%3D",
      authorName: "</3",
      original: true,
      duration: 10,
      album: ""
    },
    challenges: [
      {
        id: "55117027",
        title: "letstalkemoji",
        desc: "",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/5251ae86e97876f02917e84d3235e6b0",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/5251ae86e97876f02917e84d3235e6b0",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/5251ae86e97876f02917e84d3235e6b0",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/755a6ddf95be4fec2dbda4f17b47c572",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/755a6ddf95be4fec2dbda4f17b47c572",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/755a6ddf95be4fec2dbda4f17b47c572",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 179e3,
      shareCount: 306,
      commentCount: 831,
      playCount: 19e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 0,
        end: 14,
        hashtagName: "letstalkemoji",
        hashtagId: "55117027",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    effectStickers: [
      {
        name: "lets talk emoji",
        ID: "1318016"
      }
    ],
    authorStats: {
      followingCount: 306,
      followerCount: 334200,
      heartCount: 83e5,
      videoCount: 102,
      diggCount: 66800,
      heart: 83e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          '"wie wird mein 2022"'
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7050500274611408134",
    desc: "ach apple ach #qdh #ouhmanalta #55555 #fy #f\xFCrdich #xyzbca #humor #joke #comedy",
    createTime: 1641572518,
    video: {
      id: "7050500274611408134",
      height: 1024,
      width: 576,
      duration: 76,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ffa38a9e01d94a35ad3ab4f5ddb7d4a8_1641572524?x-expires=1642975200&x-signature=mysAHa4OezqnsfGa%2FoszT8ew09E%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ab059e08a8714f80bf7f7d46a137bee9_1641572519?x-expires=1642975200&x-signature=DheUy2Vq0xl6O6QQXKN%2FmD%2BtpFY%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/718337046397478394714319f0f78cec_1641572520?x-expires=1642975200&x-signature=bCuX1JtdbMyfHMADpuRjGY%2BJ6Y0%3D",
      playAddr: "https://v16-webapp.tiktok.com/b679e1d620adc09a9e08174f0dff0b7c/61eddd93/video/tos/useast2a/tos-useast2a-ve-0068c003/f0d8155bbff24f899f7a3904cdd5fcd1/?a=1988&br=1768&bt=884&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Jybmc6ZnI5OjMzNzczM0ApZzhlZ2Y8ZmRlN2k3aDpkOmcuL2wwcjRfZGBgLS1kMTZzczNeXjYtYTI0Ml4wYl9fLjA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/b679e1d620adc09a9e08174f0dff0b7c/61eddd93/video/tos/useast2a/tos-useast2a-ve-0068c003/f0d8155bbff24f899f7a3904cdd5fcd1/?a=1988&br=1768&bt=884&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Jybmc6ZnI5OjMzNzczM0ApZzhlZ2Y8ZmRlN2k3aDpkOmcuL2wwcjRfZGBgLS1kMTZzczNeXjYtYTI0Ml4wYl9fLjA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/ab059e08a8714f80bf7f7d46a137bee9_1641572519~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=I6v59FW1zgaLUw1xmg5fmlKQcOM%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/ab059e08a8714f80bf7f7d46a137bee9_1641572519~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=mu0A%2BLzvx8yEXqFv4v35aU9fSa0%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3ba0b15950e4b34ffc493d0cb903300d?x-expires=1642975200&x-signature=UJI6xylic4XZ75IdGQEcEGKftwE%3D",
      bitrate: 905835,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6780734992856302598",
      uniqueId: "kaan.etm",
      nickname: "Kaan",
      avatarThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1643040000&x-signature=p166paL6gYgxUMoK6FRvbPKWtp8%3D",
      avatarMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1643040000&x-signature=QElstoKec7xmbA1by1joeZFlYOs%3D",
      avatarLarger: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1643040000&x-signature=sZIZ9hejXax%2Fbh6UftOtcvhLSI0%3D",
      signature: "IG: kaan.etm\n\u2728QDH\u2728\n\u{1F4E7} kaan@enkime.de \u{1F4E7}\n\n2. Acc: @kaan_etm",
      verified: false,
      secUid: "MS4wLjABAAAAMF-L42gtJchluOb9NKGB7CFw1NTL7tJf6hOZBxjtmm5xTLpFXgy76SMx3KzCa9l8",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7050500273932208901",
      title: "Originalton",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7050500289794689798.mp3",
      coverThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1643040000&x-signature=p166paL6gYgxUMoK6FRvbPKWtp8%3D",
      coverMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1643040000&x-signature=QElstoKec7xmbA1by1joeZFlYOs%3D",
      coverLarge: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/1965462bcabeef2296d0f2d0ec67ff5f.jpeg?x-expires=1643040000&x-signature=sZIZ9hejXax%2Fbh6UftOtcvhLSI0%3D",
      authorName: "Kaan",
      original: true,
      duration: 76,
      album: ""
    },
    challenges: [
      {
        id: "73985437",
        title: "qdh",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1666867608081413",
        title: "ouhmanalta",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "21461361",
        title: "55555",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "153828",
        title: "fy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5457735",
        title: "f\xFCrdich",
        desc: "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai \u{1F60D}  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;F\xFCr Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen \u{1F525}",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1652484531221509",
        title: "xyzbca",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "19336",
        title: "humor",
        desc: "\xA1Es hora de re\xEDrte como nunca! Los videos m\xE1s divertidos est\xE1n aqu\xED en TikTok. \u{1F602}\u{1F602}\u{1F602}",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/053571cd694a68990ccec6ed231ac190",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/053571cd694a68990ccec6ed231ac190",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/053571cd694a68990ccec6ed231ac190",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "13751",
        title: "joke",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "7888",
        title: "comedy",
        desc: "",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 405200,
      shareCount: 7323,
      commentCount: 6730,
      playCount: 18e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 14,
        end: 18,
        hashtagName: "qdh",
        hashtagId: "73985437",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 19,
        end: 30,
        hashtagName: "ouhmanalta",
        hashtagId: "1666867608081413",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 31,
        end: 37,
        hashtagName: "55555",
        hashtagId: "21461361",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 38,
        end: 41,
        hashtagName: "fy",
        hashtagId: "153828",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 42,
        end: 50,
        hashtagName: "f\xFCrdich",
        hashtagId: "5457735",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 51,
        end: 58,
        hashtagName: "xyzbca",
        hashtagId: "1652484531221509",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 65,
        hashtagName: "humor",
        hashtagId: "19336",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 66,
        end: 71,
        hashtagName: "joke",
        hashtagId: "13751",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 72,
        end: 79,
        hashtagName: "comedy",
        hashtagId: "7888",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 310,
      followerCount: 24e5,
      heartCount: 821e5,
      videoCount: 362,
      diggCount: 32400,
      heart: 821e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "iSpiegel"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7039354074029952261",
    desc: "first and last time that I talk in a video \u{1F602}",
    createTime: 1638977341,
    video: {
      id: "7039354074029952261",
      height: 1024,
      width: 576,
      duration: 92,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/13ffae9c5b724492803b0465f1952ccc_1638977347?x-expires=1642975200&x-signature=roQP6ZAFdARLRFxvYQTap0SFe48%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e5783e26108e434392b2157f67681a6a_1638977343?x-expires=1642975200&x-signature=kUgY00TMqZlPiwH7a%2Fjxlw%2F%2Bkbw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/42f0e44c831942609c599bfd2491dc62_1638977345?x-expires=1642975200&x-signature=XnBbWZ0ITjcIn4VEVtym96UNSoM%3D",
      playAddr: "https://v16-webapp.tiktok.com/d77086c1b29cdd4683e0106724cbe126/61eddda3/video/tos/useast2a/tos-useast2a-ve-0068c004/5a34e28bbaae4a5895a43613cc8647d1/?a=1988&br=3356&bt=1678&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpmamQ6ZjlmOTMzNzczM0ApOzc5NGU0ZDw7N2Q0OztlZ2dwLWJrcjRfcmxgLS1kMTZzczJjLmBgMjUyYGNgMjE0MWE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/d77086c1b29cdd4683e0106724cbe126/61eddda3/video/tos/useast2a/tos-useast2a-ve-0068c004/5a34e28bbaae4a5895a43613cc8647d1/?a=1988&br=3356&bt=1678&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpmamQ6ZjlmOTMzNzczM0ApOzc5NGU0ZDw7N2Q0OztlZ2dwLWJrcjRfcmxgLS1kMTZzczJjLmBgMjUyYGNgMjE0MWE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/e5783e26108e434392b2157f67681a6a_1638977343~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=UTc5zjAVJZdydKsD8XFqtOpkLnM%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/e5783e26108e434392b2157f67681a6a_1638977343~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=d0JsQPCgugus8Cr06D02HEdGBlE%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4d64b8cd84faf0de919b4f91e59bf98b?x-expires=1642975200&x-signature=odKfLhr6LjuXynHM4TOiAkOixc4%3D",
      bitrate: 1718847,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6592567199944474629",
      uniqueId: "fabiola.baglieri",
      nickname: "\u{1D439}\u{1D44E}\u{1D44F}\u{1D456}\u{1D45C}\u{1D459}\u{1D44E}",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4776877dec9b29b8e754525f50489696~c5_100x100.jpeg?x-expires=1643040000&x-signature=HQcHeqWF4j7BZ9wpY%2BNVsHIm6v8%3D",
      avatarMedium: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4776877dec9b29b8e754525f50489696~c5_720x720.jpeg?x-expires=1643040000&x-signature=neF2mNS8p8%2BpI1DIL3AwgVrS6PI%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4776877dec9b29b8e754525f50489696~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=W1bwEM5ET5xp86T1giRWgDzqxOc%3D",
      signature: "actress\nmake-up/transformations \nItaly, 18\u2728",
      verified: true,
      secUid: "MS4wLjABAAAAR2WoNBKcY425rOVD0JcroCEx2Rpvne4u7Bmmp5WXZ-VcyKc0zjR-MzxMcabFgDd_",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6704992801559414786",
      title: "Infinity",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/7861e9af59e04a7aa61cb096ab7a5652",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/ba83145dc5bc49ee9e8e3d50ed3e2a33~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/ba83145dc5bc49ee9e8e3d50ed3e2a33~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/ba83145dc5bc49ee9e8e3d50ed3e2a33~c5_720x720.jpeg",
      authorName: "Jaymes Young",
      original: false,
      duration: 60,
      album: "Feel Something"
    },
    stats: {
      diggCount: 39e5,
      shareCount: 4433,
      commentCount: 17900,
      playCount: 374e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 530,
      followerCount: 112e5,
      heartCount: 3519e5,
      videoCount: 279,
      diggCount: 45e3,
      heart: 3519e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "\u26A0\uFE0FTHE REAL TUTORIAL\u26A0\uFE0F",
          "okayyy",
          "lessssgo x1",
          "now",
          "the makeup\u{1F479}",
          "this is IMPOSSIBLE",
          "i don\u2019t know how you can do this",
          "let\u2019s fake i\u2019m doing my make-up in a ",
          "WOW",
          "way",
          "the",
          "YELLOW",
          "colouration",
          "of the",
          "foundation",
          "okay lessssgo x2",
          "okay lessgoooo x3",
          "what is TH\xCF\u015A\u{1F479}",
          "my 4 years old sister who\ndoesn\u2019t exist would do better honesly ",
          "never again\u2620\uFE0F",
          "I go get changed and I come back"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7035613099914710278",
    desc: "You can find me in the club \u{1F9A6} #fy #fyp #comedy #cat #club #party @razer",
    createTime: 1638106330,
    video: {
      id: "7035613099914710278",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ca5a3ce13ae8436c9ca3fe0ecaddbd1a_1638106332?x-expires=1642975200&x-signature=wbRaZX0HZeWpNC8AjwzX6NbCwwQ%3D",
      originCover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6b842f56e328459c9d251e711cd162d7_1638106333?x-expires=1642975200&x-signature=gVTzZt9VrG9fUv%2Fs4JYouHkd2UQ%3D",
      dynamicCover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/36f40203b6ea401ca7f8d468d3de1958_1638106332?x-expires=1642975200&x-signature=f%2FXvMkF0lfGKCx4l0LkVwNRpPRc%3D",
      playAddr: "https://v16-webapp.tiktok.com/6e7f35d1fe2ac153b8490a2514597e3b/61eddd53/video/tos/useast2a/tos-useast2a-ve-0068c002/4720f3d2ebcb45fc9c5bb8ce520ab53f/?a=1988&br=2904&bt=1452&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lra2k6ZmxyOTMzNzczM0ApZTc8M2Y1ZjtlN2Y0NGU8OmdkXl82cjRvNmVgLS1kMTZzczQ0Ly41Y2MvYi02NGA2Mi86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/6e7f35d1fe2ac153b8490a2514597e3b/61eddd53/video/tos/useast2a/tos-useast2a-ve-0068c002/4720f3d2ebcb45fc9c5bb8ce520ab53f/?a=1988&br=2904&bt=1452&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lra2k6ZmxyOTMzNzczM0ApZTc8M2Y1ZjtlN2Y0NGU8OmdkXl82cjRvNmVgLS1kMTZzczQ0Ly41Y2MvYi02NGA2Mi86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/6b842f56e328459c9d251e711cd162d7_1638106333~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=IHSmjRmnP0WkFnkkaLIVEhlKGTM%3D",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/6b842f56e328459c9d251e711cd162d7_1638106333~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=miab9rS1ruLXVGl7Aa43Sz818N0%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c830b334f4e60e62bbb712c6263f9027?x-expires=1642975200&x-signature=VhAnKlXEIkimHVlz98em3GFuK9U%3D",
      bitrate: 1487262,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6991469692629287942",
      uniqueId: "salex219",
      nickname: "salex219",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4aeab03d422262e2f90ee99b44767477~c5_100x100.jpeg?x-expires=1643040000&x-signature=7BxLbiyt0h6klWtcUJP8OwfIx0I%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4aeab03d422262e2f90ee99b44767477~c5_720x720.jpeg?x-expires=1643040000&x-signature=DOtB9EwjaVH7t0SrQTbyRMJftmU%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4aeab03d422262e2f90ee99b44767477~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=EyA1XApaZjml7B2rsnocKGQUYXw%3D",
      signature: "Family Trio \u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}\u{1F408}\nofficialsalex219@gmail.com",
      verified: false,
      secUid: "MS4wLjABAAAAG7KwcNLQwwaY-Yi_XQvjRfiULk7OjgZC7X4pX4XPpFJ1rpQKGC2ZhSjvNa0ksNoI",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6995755718976473089",
      title: "Do It To It",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/dfb55719b35c4054a476435a2c9e6dad",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/b509bbd0852943058b264bebe9972249~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/b509bbd0852943058b264bebe9972249~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/b509bbd0852943058b264bebe9972249~c5_720x720.jpeg",
      authorName: "ACRAZE",
      original: false,
      duration: 45,
      album: "Do It To It"
    },
    challenges: [
      {
        id: "153828",
        title: "fy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "229207",
        title: "fyp",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "7888",
        title: "comedy",
        desc: "",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "7551",
        title: "cat",
        desc: "",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/2e13829d6e1816708244b2bc8b905c51",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/2e13829d6e1816708244b2bc8b905c51",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/2e13829d6e1816708244b2bc8b905c51",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5920",
        title: "club",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5509",
        title: "party",
        desc: "Start a #Party with your friends and fans and tell longer stories, partake in bigger activities, hang out with your friends from wherever you are, sing the longest songs in your repertoire and get a chance to start your own trends with musers from all over the world! \u{1F389}",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 44e5,
      shareCount: 634600,
      commentCount: 63300,
      playCount: 311e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 66,
        end: 72,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6728737019381892101",
        isCommerce: false,
        userUniqueId: "razer",
        secUid: "MS4wLjABAAAAUTHjNJGpKgImm-I08ef0q6KHxvN49YID-fI5rwm1cxfCYYhQ0Xg1__OTYJIWzaCD",
        subType: 0
      },
      {
        awemeId: "",
        start: 31,
        end: 34,
        hashtagName: "fy",
        hashtagId: "153828",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 35,
        end: 39,
        hashtagName: "fyp",
        hashtagId: "229207",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 40,
        end: 47,
        hashtagName: "comedy",
        hashtagId: "7888",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 48,
        end: 52,
        hashtagName: "cat",
        hashtagId: "7551",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 53,
        end: 58,
        hashtagName: "club",
        hashtagId: "5920",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 65,
        hashtagName: "party",
        hashtagId: "5509",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 0,
      followerCount: 247900,
      heartCount: 72e5,
      videoCount: 28,
      diggCount: 38,
      heart: 72e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7037482962815913221",
    desc: "So coole Filter #probierenmitkarina #maskiergang",
    createTime: 1638541689,
    video: {
      id: "7037482962815913221",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e44678151ee34ffd84995c1ff4b9e10c?x-expires=1642975200&x-signature=f0jPkyMfAB8iAyPO8jrJNM27gIo%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/84c7c73feedc416c8601f68b4559121e_1638541691?x-expires=1642975200&x-signature=n06kgRj5hNWwWNGJm%2F0kvN7nyWQ%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e79b088e6b8c4d42aa1fe8163d57db22_1638541691?x-expires=1642975200&x-signature=cMJrMWd%2BNJf1pDTaf%2BOZoqOXv1M%3D",
      playAddr: "https://v16-webapp.tiktok.com/a7a647345f1ad488416dbb95e651c6b1/61eddd56/video/tos/useast2a/tos-useast2a-ve-0068c004/6f8dcfe2c97541caa12d93403ff248cf/?a=1988&br=1228&bt=614&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzV4djU6Znc1OTMzNzczM0ApOGc2NmdlNGQ4N2Y2OGQ0Z2dkbS5ucjQwZmlgLS1kMTZzc2AuMDIzMi1gNGIxNTReNTM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/a7a647345f1ad488416dbb95e651c6b1/61eddd56/video/tos/useast2a/tos-useast2a-ve-0068c004/6f8dcfe2c97541caa12d93403ff248cf/?a=1988&br=1228&bt=614&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzV4djU6Znc1OTMzNzczM0ApOGc2NmdlNGQ4N2Y2OGQ0Z2dkbS5ucjQwZmlgLS1kMTZzc2AuMDIzMi1gNGIxNTReNTM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/84c7c73feedc416c8601f68b4559121e_1638541691~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=kIAkTyRviMlJg5ZY0AKnBBis5wA%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/84c7c73feedc416c8601f68b4559121e_1638541691~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=wEf2XXRmbUpZfrfZtzUepvTLdPU%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b89efa0d6fc2e1d86a2e120d2d39de4d?x-expires=1642975200&x-signature=Juf4eftNcTC86%2FgJLtdxNzNFeME%3D",
      bitrate: 629225,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6736977512025228294",
      uniqueId: "karina2you",
      nickname: "Karina",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1664895533502469~c5_100x100.jpeg?x-expires=1643040000&x-signature=TwNsJzTsxqZ%2B6%2BU3RgaQuyUcidc%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1664895533502469~c5_720x720.jpeg?x-expires=1643040000&x-signature=aPnP7lJrag%2BsTuP4hRlx3JgDuRM%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1664895533502469~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=YmD5kRWt8i3VMFex7%2BsGi2AxprY%3D",
      signature: "\u{1F496}\u{1F496}Ihr seid mega \u{1F496}\u{1F496}",
      verified: false,
      secUid: "MS4wLjABAAAAEzBl_KrZdQfyPORwjLjyrKqjsMFknfW3YT2Fv-RpxJvPtsXNga8tg1UWtyXMgBGz",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7029667441701554970",
      title: "Witch Doctor",
      playUrl: "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7029667411670436635.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/79c42a2c7e95ef7fd1f2f4e4ee00b1c2~c5_100x100.jpeg?x-expires=1643040000&x-signature=vb%2Fikl5%2FtAZ%2BV7Yz5y5r7pAlKF4%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/79c42a2c7e95ef7fd1f2f4e4ee00b1c2~c5_720x720.jpeg?x-expires=1643040000&x-signature=DWSxzNKe7QW3paZnTXVz%2BMmylGM%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/79c42a2c7e95ef7fd1f2f4e4ee00b1c2~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=sAo4WCHkTCNOY1WacDmKMcT%2FUp4%3D",
      authorName: "\u{1D469}\u{1D490}\u{1D494}\u{1D494}'\u{1D47F}\u{1D48A}\u{1D482}\u{1D490}(\u2661\uFE0E.)",
      original: true,
      duration: 26,
      album: ""
    },
    challenges: [
      {
        id: "1685331714958337",
        title: "probierenmitkarina",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1695744829787137",
        title: "maskiergang",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 85200,
      shareCount: 378,
      commentCount: 400,
      playCount: 12e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 16,
        end: 35,
        hashtagName: "probierenmitkarina",
        hashtagId: "1685331714958337",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 36,
        end: 48,
        hashtagName: "maskiergang",
        hashtagId: "1695744829787137",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    effectStickers: [
      {
        name: "GIF-Customizer",
        ID: "1177164"
      }
    ],
    authorStats: {
      followingCount: 191,
      followerCount: 3e6,
      heartCount: 1294e5,
      videoCount: 3441,
      diggCount: 61900,
      heart: 1294e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7028579657507294465",
    desc: "@maks.nemcev @elsarca \u{1F602} Inst: kikakim\u{1F602}",
    createTime: 1636468727,
    video: {
      id: "7028579657507294465",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e95ec257d15a432fa2b39dfe90c81a93?x-expires=1642975200&x-signature=d0ZikXG4zAO%2F9oPVWvZ3PG9opKI%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/7aff320f09a84f679726c4a3783e356e_1636468728?x-expires=1642975200&x-signature=hDiX5fQYBSzx5p0E6c7dATsHOoc%3D",
      dynamicCover: "https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/7465eac8da03444282478d8d5b9a9114_1636468728?x-expires=1642975200&x-signature=NAqLG94Uvr9HOc1XG2ThvCxvSVY%3D",
      playAddr: "https://v16-webapp.tiktok.com/a403caa5729dbffa10e0bbe58b7f4f93/61eddd56/video/tos/alisg/tos-alisg-pve-0037c001/3b4de585deab400e880c4db70c51deaa/?a=1988&br=3016&bt=1508&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3FwMzU6Zjg7OTMzODczNEApZWdlNjxmZzs0NzVmZGQ3ZWdoX2pycjQwXzJgLS1kMS1zczYyYDQ2YmAwY15iL2IyYy06Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/a403caa5729dbffa10e0bbe58b7f4f93/61eddd56/video/tos/alisg/tos-alisg-pve-0037c001/3b4de585deab400e880c4db70c51deaa/?a=1988&br=3016&bt=1508&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3FwMzU6Zjg7OTMzODczNEApZWdlNjxmZzs0NzVmZGQ3ZWdoX2pycjQwXzJgLS1kMS1zczYyYDQ2YmAwY15iL2IyYy06Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/7aff320f09a84f679726c4a3783e356e_1636468728~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=DV14mJq5lv2rEY0LeUAKtv7WNRE%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/7aff320f09a84f679726c4a3783e356e_1636468728~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=MampuFZB3W%2BIkp%2FfVXb28FXHNX8%3D"
      ],
      reflowCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e95ec257d15a432fa2b39dfe90c81a93?x-expires=1642975200&x-signature=d0ZikXG4zAO%2F9oPVWvZ3PG9opKI%3D",
      bitrate: 1544330,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6785823001336415238",
      uniqueId: "kikakiim",
      nickname: "Kika Kim",
      avatarThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=vTKxIj4i3VDJ7ngFEMkAyzY31dM%3D",
      avatarMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=4hnijvPmvdC4%2BIFL3iESdWdvlfM%3D",
      avatarLarger: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=6EEg%2BGMXtVtBCeQ9kVaJ4SAD62M%3D",
      signature: "Inst: kikakim\u{1F90D}\n@xoteam\nCooperation: kikakim.booking@gmail.com",
      verified: false,
      secUid: "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6999592688332884763",
      title: "Wolfgang Dance",
      playUrl: "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/6999590203220364059.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_100x100.jpeg?x-expires=1643040000&x-signature=ekmh1oSH%2BOBsDo87TwUyvWqyhzg%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_720x720.jpeg?x-expires=1643040000&x-signature=dMeLF08OOoeLH6SGNJC492gOAnA%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=FOjbS9wCgIveoerNfi8SMl6xDGc%3D",
      authorName: "Tik Toker",
      original: true,
      duration: 30,
      album: ""
    },
    challenges: [
      {
        id: "7025496450389770241",
        title: "\u30A6\u30EB\u30D5\u30AE\u30E3\u30F3\u30B0\u30C0\u30F3\u30B9",
        desc: "\u5468\u308A\u306B\u6C17\u3065\u304B\u308C\u305A\u306B\u30DF\u30C3\u30B7\u30E7\u30F3\u9042\u884C\u3067\u304D\u308B\u304B\u306A..?\n\u6D77\u5916\u5927\u4EBA\u6C17\u97F3\u6E90\u3067\u30C1\u30E3\u30EC\u30F3\u30B8\uFF01\n\u5E74\u672B\u306B\u304B\u3051\u3066\u8907\u6570\u4EBA\u3067\u96C6\u307E\u308B\u969B\u306B\u3053\u3063\u305D\u308A\u52D5\u753B\u3092\u64AE\u3063\u3066\u307F\u308B\u3068\u76DB\u308A\u4E0A\u304C\u308B\u304B\u3082\uFF1F",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/4d857c21d9d88ec232f3f5b321ff58c3",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/4d857c21d9d88ec232f3f5b321ff58c3",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/4d857c21d9d88ec232f3f5b321ff58c3",
        coverThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/d10c5cc4a1b4d624a940351cfa48a247",
        coverMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/d10c5cc4a1b4d624a940351cfa48a247",
        coverLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/d10c5cc4a1b4d624a940351cfa48a247",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 25e5,
      shareCount: 7766,
      commentCount: 10600,
      playCount: 303e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 0,
        end: 12,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6785233725245752325",
        isCommerce: false,
        userUniqueId: "maks.nemcev",
        secUid: "MS4wLjABAAAAflr7QEYlgrM6ktDGMbz03HgB8IOQF3S0KUieRd7LboClpAhl-OgWPYslBrNW5VCS",
        subType: 0
      },
      {
        awemeId: "",
        start: 13,
        end: 21,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6781769642391372806",
        isCommerce: false,
        userUniqueId: "elsarca",
        secUid: "MS4wLjABAAAAZOwuaCChrCWpn4YmQp2JHCQ0iz6mx4s8iaKGMK0UV2zbKr5JlBEm9822u8DPxAXR",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 106,
      followerCount: 274e5,
      heartCount: 7223e5,
      videoCount: 921,
      diggCount: 7071,
      heart: 7223e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7056046313326054661",
    desc: "EINFACH GUTES ESSEN GEHABT HEHEHE lasst liebe auf insta da <3 insta: nonakanal\u2026 inspo: @Selin Kitmir",
    createTime: 1642863806,
    video: {
      id: "7056046313326054661",
      height: 1024,
      width: 576,
      duration: 9,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2d2149d1a4f0464a82c12260bfa005b7_1642863809?x-expires=1642975200&x-signature=W4FBjkx01f9r5IvyUIVzcgy9mBY%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f3f255f3380549d5a60cc7c817bce298_1642863806?x-expires=1642975200&x-signature=Hhnz%2BAt97pb0cALp9J4P6zWe4Yw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/67e593dcb37a494496b5e1c70b67a55a_1642863807?x-expires=1642975200&x-signature=oR%2FZn0LNBRpBj%2BPttQyFXB1D8Yg%3D",
      playAddr: "https://v16-webapp.tiktok.com/8c27a985a87339ec29127250c225aba1/61eddd50/video/tos/useast2a/tos-useast2a-ve-0068c003/39b0c32103904a50b67aa2bbc69c4748/?a=1988&br=3312&bt=1656&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dsNGk6Zmg0OjMzNzczM0ApZmQ0aTc7OmQ8N2kzZmUzM2dkZmJwcjRvbWpgLS1kMTZzcy01M2FgMWEyLjJhMDVeMzE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/8c27a985a87339ec29127250c225aba1/61eddd50/video/tos/useast2a/tos-useast2a-ve-0068c003/39b0c32103904a50b67aa2bbc69c4748/?a=1988&br=3312&bt=1656&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dsNGk6Zmg0OjMzNzczM0ApZmQ0aTc7OmQ8N2kzZmUzM2dkZmJwcjRvbWpgLS1kMTZzcy01M2FgMWEyLjJhMDVeMzE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/f3f255f3380549d5a60cc7c817bce298_1642863806~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=dbL%2Bn73xwvz49fK5hLRZ8YI0h0k%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/f3f255f3380549d5a60cc7c817bce298_1642863806~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=%2Fx2iPow6P2RgXq%2FMoaxS2ZcWm3k%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e088b029838c34139cedc1ec2897a88a?x-expires=1642975200&x-signature=WBAAy65jVXwafrUkgOQVb0xfwX8%3D",
      bitrate: 1696598,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "55162973941440512",
      uniqueId: "nonakanal",
      nickname: "NonaKanal",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/91b7e96735526d82739a1d5abcc1d9cd~c5_100x100.jpeg?x-expires=1643040000&x-signature=%2FWEzYvurcCSinSV6HqtMHLvtgLU%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/91b7e96735526d82739a1d5abcc1d9cd~c5_720x720.jpeg?x-expires=1643040000&x-signature=Gr%2FS0FhanpDuwenZeBdVEp9ULlg%3D",
      avatarLarger: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/91b7e96735526d82739a1d5abcc1d9cd~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=pQmJ82EiPil0XGr4C1NfD1aC6uk%3D",
      signature: "checkt my insta aus \u{1F9DA} \nImpressum :http://www.trismile.de/impressum",
      verified: true,
      secUid: "MS4wLjABAAAATyR-WXgdrHMaeFPWLZ_Kizu_pfmsfnZynA3242ViN0ZEFuaQGC8v12Q1OthQ-88L",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7024838049456851717",
      title: "Who Sexy I'm Sexy",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/d554150f0bfa4861ade7d582e34e51b3",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/aa9ede4d55b34ae9b689f55db5e80c5d~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/aa9ede4d55b34ae9b689f55db5e80c5d~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/aa9ede4d55b34ae9b689f55db5e80c5d~c5_720x720.jpeg",
      authorName: "Big Will & DJ Telly Tellz",
      original: false,
      duration: 10,
      album: "Who Sexy I'm Sexy"
    },
    stats: {
      diggCount: 61700,
      shareCount: 173,
      commentCount: 349,
      playCount: 479100
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 87,
        end: 100,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6909904097337295873",
        isCommerce: false,
        userUniqueId: "selinkitmir2",
        secUid: "MS4wLjABAAAA2igM3aobRKXYzQG6PcQkTfoJNCpeyhfqsGwciID1mpmDw_6g33imktkKvXIJwyvm",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 700,
      followerCount: 23e5,
      heartCount: 1339e5,
      videoCount: 1431,
      diggCount: 6259,
      heart: 1339e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "wenn man nach dem essen mehr bauch als \u{1F351} hat "
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7049678017798393093",
    desc: "Seine Reaktion zu geil \u{1F923}\u{1F923} #f\xFCrdich #fy #fyp #humor #memes #fail #viralvideo #unterhaltung #lustig",
    createTime: 1641381072,
    video: {
      id: "7049678017798393093",
      height: 1072,
      width: 576,
      duration: 11,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/df32cc4b47fa4f72a77b023f65cca0bc?x-expires=1642975200&x-signature=pS6I%2FWhcbgDKRuNs9TqTT71JFNE%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/888ad98b92da41cb9acac7620b21f595_1641381073?x-expires=1642975200&x-signature=%2BC4GAgmJ%2F7oxS%2BhlGVHNNpXKYds%3D",
      dynamicCover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/abcc08cbf6c1404b978508146a3bbca6_1641381074?x-expires=1642975200&x-signature=gqyICRk%2FH9W8cSVkxJwtTz11XJw%3D",
      playAddr: "https://v16-webapp.tiktok.com/b15c180f6c9c96de7438d92ca0e7c1e5/61eddd52/video/tos/useast2a/tos-useast2a-pve-0068/efa9f7c58ef94ee49ea50627beb106eb/?a=1988&br=3058&bt=1529&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amltNmc6ZmtxOjMzNzczM0ApNzs2aWdkPGRnNzRnOzo3ZGduZ3I2cjRnbV5gLS1kMTZzc2IuLi0xYzJiNV8vNWFhXjY6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/b15c180f6c9c96de7438d92ca0e7c1e5/61eddd52/video/tos/useast2a/tos-useast2a-pve-0068/efa9f7c58ef94ee49ea50627beb106eb/?a=1988&br=3058&bt=1529&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amltNmc6ZmtxOjMzNzczM0ApNzs2aWdkPGRnNzRnOzo3ZGduZ3I2cjRnbV5gLS1kMTZzc2IuLi0xYzJiNV8vNWFhXjY6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/888ad98b92da41cb9acac7620b21f595_1641381073~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=H2WGV0uF0Y0efArB4t99%2F7xjU4E%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/888ad98b92da41cb9acac7620b21f595_1641381073~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=ocaUHXm7COZqRDrD5QmIMIcFe64%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/85e2acd925c8ec8d3abd86ce2e407b56?x-expires=1642975200&x-signature=pM4PYkWS6mSxrh2HBO8TX4oqClU%3D",
      bitrate: 1565852,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "7012938481014457349",
      uniqueId: "germanfunclips22",
      nickname: "GermanFunClips22",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7fba83834a2ac6804e7298b47a2d0227~c5_100x100.jpeg?x-expires=1643040000&x-signature=zQ%2BHAyLzJikyi6cpHurM5e3shcI%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7fba83834a2ac6804e7298b47a2d0227~c5_720x720.jpeg?x-expires=1643040000&x-signature=u5astkG8R1liQVvwMH6djfwB7lk%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7fba83834a2ac6804e7298b47a2d0227~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=SrF239VYG52%2Fgk38nAICofowG1U%3D",
      signature: "Hier gibt es regelm\xE4\xDFig  lustige Clips \u{1F60E}\nFolge mir gerne \u{1F62C}",
      verified: false,
      secUid: "MS4wLjABAAAAlO_0x4FQ9UCiuy7YDn9VZl0Gan05JIrEX6R-gWMkQHmziDyjXzuWmrx2WQZTmwJb",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7049677939461327621",
      title: "Originalton",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7049677967147961093.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7fba83834a2ac6804e7298b47a2d0227~c5_100x100.jpeg?x-expires=1643040000&x-signature=zQ%2BHAyLzJikyi6cpHurM5e3shcI%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7fba83834a2ac6804e7298b47a2d0227~c5_720x720.jpeg?x-expires=1643040000&x-signature=u5astkG8R1liQVvwMH6djfwB7lk%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7fba83834a2ac6804e7298b47a2d0227~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=SrF239VYG52%2Fgk38nAICofowG1U%3D",
      authorName: "GermanFunClips22",
      original: true,
      duration: 11,
      album: ""
    },
    challenges: [
      {
        id: "5457735",
        title: "f\xFCrdich",
        desc: "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai \u{1F60D}  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;F\xFCr Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen \u{1F525}",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "153828",
        title: "fy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "229207",
        title: "fyp",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "19336",
        title: "humor",
        desc: "\xA1Es hora de re\xEDrte como nunca! Los videos m\xE1s divertidos est\xE1n aqu\xED en TikTok. \u{1F602}\u{1F602}\u{1F602}",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/053571cd694a68990ccec6ed231ac190",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/053571cd694a68990ccec6ed231ac190",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/053571cd694a68990ccec6ed231ac190",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "128971",
        title: "memes",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5013",
        title: "fail",
        desc: "It's #Fail time",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3a21ea416880cd7c9f6007a8efc8283a",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3a21ea416880cd7c9f6007a8efc8283a",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3a21ea416880cd7c9f6007a8efc8283a",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "85133",
        title: "viralvideo",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2897164",
        title: "unterhaltung",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "47490",
        title: "lustig",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 250500,
      shareCount: 29800,
      commentCount: 3465,
      playCount: 44e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 28,
        end: 36,
        hashtagName: "f\xFCrdich",
        hashtagId: "5457735",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 37,
        end: 40,
        hashtagName: "fy",
        hashtagId: "153828",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 41,
        end: 45,
        hashtagName: "fyp",
        hashtagId: "229207",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 46,
        end: 52,
        hashtagName: "humor",
        hashtagId: "19336",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 53,
        end: 59,
        hashtagName: "memes",
        hashtagId: "128971",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 60,
        end: 65,
        hashtagName: "fail",
        hashtagId: "5013",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 66,
        end: 77,
        hashtagName: "viralvideo",
        hashtagId: "85133",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 91,
        hashtagName: "unterhaltung",
        hashtagId: "2897164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 92,
        end: 99,
        hashtagName: "lustig",
        hashtagId: "47490",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 82,
      followerCount: 254300,
      heartCount: 42e5,
      videoCount: 333,
      diggCount: 2912,
      heart: 42e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: false,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7041301781875510575",
    desc: "",
    createTime: 1639430828,
    video: {
      id: "7041301781875510575",
      height: 1024,
      width: 576,
      duration: 8,
      ratio: "720p",
      cover: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/c10d1b38cd1d4dbc8a2e1e4ec13bdd0f?x-expires=1642975200&x-signature=3cQz9XRHT80bN2HPrUxKbXFeR0Q%3D",
      originCover: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/21772c1d2a40483395073effc5315732_1639430829?x-expires=1642975200&x-signature=BRycB2drf77L5%2Bic5I5Ku71Mhz0%3D",
      dynamicCover: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/b0816dbb9a9e4071bed4e2e349f1c25b_1639430829?x-expires=1642975200&x-signature=Xw5kElUny3LNOO7TonVseq%2F87Ic%3D",
      playAddr: "https://v16-webapp.tiktok.com/7252a495711bd5fc221ca7fd1370a1a7/61eddd4e/video/tos/useast5/tos-useast5-ve-0068c003-tx/77d8510ca9234fa7952021742e0444bc/?a=1988&br=2018&bt=1009&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amd4Mzw6Zjp1OTMzZzczNEApMzo5M2ZoNWRpN2VkOTw0NGcuazA2cjRvZ29gLS1kMS9zczNgMzRiYjAxM2NfLi8tLmE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/7252a495711bd5fc221ca7fd1370a1a7/61eddd4e/video/tos/useast5/tos-useast5-ve-0068c003-tx/77d8510ca9234fa7952021742e0444bc/?a=1988&br=2018&bt=1009&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amd4Mzw6Zjp1OTMzZzczNEApMzo5M2ZoNWRpN2VkOTw0NGcuazA2cjRvZ29gLS1kMS9zczNgMzRiYjAxM2NfLi8tLmE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/21772c1d2a40483395073effc5315732_1639430829~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=uY%2BSRZ2Ii%2FvSIs939217FcHMxRU%3D",
        "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/21772c1d2a40483395073effc5315732_1639430829~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=12IpPBlQUvc8vhWeic%2BvFZU2WV4%3D"
      ],
      reflowCover: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/c10d1b38cd1d4dbc8a2e1e4ec13bdd0f?x-expires=1642975200&x-signature=3cQz9XRHT80bN2HPrUxKbXFeR0Q%3D",
      bitrate: 1033749,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "5831967",
      uniqueId: "charlidamelio",
      nickname: "charli d\u2019amelio",
      avatarThumb: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/692bcc62aacdd2076a8001d8fef6e854~c5_100x100.jpeg?x-expires=1643040000&x-signature=lyyDRMGlNobMkD04Cwkd5G4nPm4%3D",
      avatarMedium: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/692bcc62aacdd2076a8001d8fef6e854~c5_720x720.jpeg?x-expires=1643040000&x-signature=hJnfFXXmnS6xX44frrGThNRGXb8%3D",
      avatarLarger: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/692bcc62aacdd2076a8001d8fef6e854~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=%2Br5A9wLDmSr7J3aAcJjyuQKLgao%3D",
      signature: "",
      verified: true,
      secUid: "MS4wLjABAAAA-VASjiXTh7wDDyXvjk10VFhMWUAoxr8bgfO1kAL1-9s",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 1,
      stitchSetting: 1,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7017063746384169733",
      title: "original sound",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7017063848050051846.mp3",
      coverThumb: "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7f85d3f31ccaeff87af3a3d74c2028c9~c5_100x100.jpeg?x-expires=1643040000&x-signature=kwMD18uOzv8%2B38hU6P2GtKOaW2I%3D",
      coverMedium: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7f85d3f31ccaeff87af3a3d74c2028c9~c5_720x720.jpeg?x-expires=1643040000&x-signature=HNnsGHLhn%2BiBuNBX%2B8b1XUwYVuA%3D",
      coverLarge: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7f85d3f31ccaeff87af3a3d74c2028c9~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=UwtWeGnY6hYt8s6PAcLdebBS1mI%3D",
      authorName: "\u{1F31F}",
      original: true,
      duration: 7,
      album: ""
    },
    challenges: [
      {
        id: "7040899383491035142",
        title: "igiveyouaone",
        desc: "To all the cringe phases we went through, we give you a 1/10.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/306a955b1b6cbc128efe9d134d6f02eb",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/306a955b1b6cbc128efe9d134d6f02eb",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/306a955b1b6cbc128efe9d134d6f02eb",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 5e6,
      shareCount: 233900,
      commentCount: 45600,
      playCount: 392e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    effectStickers: [
      {
        name: "Greenscreen",
        ID: "321523"
      }
    ],
    authorStats: {
      followingCount: 1254,
      followerCount: 1343e5,
      heartCount: 19e8,
      videoCount: 2056,
      diggCount: 8893,
      heart: 105e8
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          " my clear braces with black rubber bands phase"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7049373083764870405",
    desc: "Watch the End!\u{1F633}\u{1F631} #respekt #foryou #respect #wow #film",
    createTime: 1641310074,
    video: {
      id: "7049373083764870405",
      height: 1024,
      width: 576,
      duration: 20,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/33f8c697caa2401fba72666c0ec2d89c?x-expires=1642975200&x-signature=SodcKPVW99atd%2Bchl10Y5o7yAik%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d6ef2625589d40ab84cab40d5ed59866_1641310074?x-expires=1642975200&x-signature=zdBFrUdMl4gxNMC91aM7HTW3YVc%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/1177c200be0c4148987d0298fed97a36_1641310075?x-expires=1642975200&x-signature=FvUAbwfaC2Kj7LFLaNWThh8wblo%3D",
      playAddr: "https://v16-webapp.tiktok.com/81c3af9ef573a6fcb9de724e39a468b3/61eddd5b/video/tos/useast2a/tos-useast2a-ve-0068c004/50a6bd8fdfc3485cbbeb16ff84bebf69/?a=1988&br=2044&bt=1022&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2UzZWk6ZnY5OjMzNzczM0ApNDc0ZztkZzxkNzVmOjs3N2dpZWptcjQwYl5gLS1kMTZzc19eYy4xMy4zMDAzNWFeMi86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/81c3af9ef573a6fcb9de724e39a468b3/61eddd5b/video/tos/useast2a/tos-useast2a-ve-0068c004/50a6bd8fdfc3485cbbeb16ff84bebf69/?a=1988&br=2044&bt=1022&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2UzZWk6ZnY5OjMzNzczM0ApNDc0ZztkZzxkNzVmOjs3N2dpZWptcjQwYl5gLS1kMTZzc19eYy4xMy4zMDAzNWFeMi86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d6ef2625589d40ab84cab40d5ed59866_1641310074~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=NzmXj0%2FwMdFYw7Rn4NdcxlLeam0%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d6ef2625589d40ab84cab40d5ed59866_1641310074~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=70okaMKuHXlpI%2BD48qSRjwiEM2w%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b360ef4bb6a868ae0c79364329d571dc?x-expires=1642975200&x-signature=H1QjT85aDy2SPFrDD9kIlpafvZY%3D",
      bitrate: 1046889,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "7045346206738596870",
      uniqueId: "respectvidyz",
      nickname: "Respectvidyz",
      avatarThumb: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2af2f2f461095248441509e50da66596~c5_100x100.jpeg?x-expires=1643040000&x-signature=%2FFPiZ5IEI7vBwF2GEMBAVOyJkMI%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2af2f2f461095248441509e50da66596~c5_720x720.jpeg?x-expires=1643040000&x-signature=AJpNiEHuE%2BX0Ub9LWeug7RCbVa8%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2af2f2f461095248441509e50da66596~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=95h29Fc5WoI03%2FZccsFXFxRzZlI%3D",
      signature: "#1 for Respect Videos",
      verified: false,
      secUid: "MS4wLjABAAAAIQiEjKwe_3alLUJ6MAqdEXDzh6Rt2Vr82rNWwwAGd2uWQwihUbTqlXhy2m64ibs6",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7027853417045347078",
      title: "som original",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7027853520749562629.mp3",
      coverThumb: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1e86518e1571ffb601cb048bde5169ff~c5_100x100.jpeg?x-expires=1643040000&x-signature=AoSnOnOU2GTL9vAvRw2UHRL8Ciw%3D",
      coverMedium: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1e86518e1571ffb601cb048bde5169ff~c5_720x720.jpeg?x-expires=1643040000&x-signature=WwAgn315IH1vykxsIXDjvoFqVFo%3D",
      coverLarge: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1e86518e1571ffb601cb048bde5169ff~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=bzCNvcb5YkOPSBDVHQxkLk%2BfZIg%3D",
      authorName: "UCHIHA OBITO",
      original: true,
      duration: 22,
      album: ""
    },
    challenges: [
      {
        id: "1502395",
        title: "respekt",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "34238",
        title: "respect",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "7353",
        title: "wow",
        desc: "\u{1F92D}\nWhat makes you WOW!\nCome and shock us~\n\nHow to shoot:\n1. Click the shoot icon. \n2. Click on \u201Cadd sound\u201D.  \n3. Try some funny stickers like [infinite clone].\n\nHave fun~",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/dc486825b4d29a4c659a0b4e9eb2d27d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/dc486825b4d29a4c659a0b4e9eb2d27d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/dc486825b4d29a4c659a0b4e9eb2d27d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "28707",
        title: "film",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 18e5,
      shareCount: 7231,
      commentCount: 5665,
      playCount: 314e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 19,
        end: 27,
        hashtagName: "respekt",
        hashtagId: "1502395",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 29,
        end: 36,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 37,
        end: 45,
        hashtagName: "respect",
        hashtagId: "34238",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 46,
        end: 50,
        hashtagName: "wow",
        hashtagId: "7353",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 51,
        end: 56,
        hashtagName: "film",
        hashtagId: "28707",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 16,
      followerCount: 23e5,
      heartCount: 122e5,
      videoCount: 28,
      diggCount: 35,
      heart: 122e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Respect \u{1F633}\u{1F631}\u{1F525}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7050843156950093062",
    desc: "Ganze Spagettisauce\u{1F602}\u2764\uFE0F Das Ende\u{1F97A} #pranks #couplegoals #funny #foryou",
    createTime: 1641652352,
    video: {
      id: "7050843156950093062",
      height: 1024,
      width: 576,
      duration: 67,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/263f743417114bf0a866a9102d7e561e_1641652369~tplv-dmt-logom:tos-useast2a-v-0068/7f75500a719e44a7a3cc5ae231fd9384.image?x-expires=1642975200&x-signature=NBf9y7NQcX68xlADX1fNc89hZUo%3D",
      originCover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4ed2c1c0addc488d90406dfe0579193b_1641652353?x-expires=1642975200&x-signature=ZkQSN04hjt4K%2FUkjWmI7x04aO3I%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5afcf254e70b47b79cd29546dda3bcd2_1641652353?x-expires=1642975200&x-signature=cuiMkIZCxt1JNn8tgUQhzvc9TOk%3D",
      playAddr: "https://v16-webapp.tiktok.com/7db564c66428692e72032aa7eb69cb88/61eddd8a/video/tos/useast2a/tos-useast2a-pve-0068/ee48d4a0e2b74feb8c8d21fd8e72c6e9/?a=1988&br=1882&bt=941&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3I7PDQ6ZnR0OjMzNzczM0ApZDo0ZWZnZGU6N2g8NDo8NWcuMS8tcjRnLWBgLS1kMTZzczRhXi4tYy9gLi9iLzBfXmA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/7db564c66428692e72032aa7eb69cb88/61eddd8a/video/tos/useast2a/tos-useast2a-pve-0068/ee48d4a0e2b74feb8c8d21fd8e72c6e9/?a=1988&br=1882&bt=941&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3I7PDQ6ZnR0OjMzNzczM0ApZDo0ZWZnZGU6N2g8NDo8NWcuMS8tcjRnLWBgLS1kMTZzczRhXi4tYy9gLi9iLzBfXmA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4ed2c1c0addc488d90406dfe0579193b_1641652353~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=%2FwOexs4s8kxnYZoZnWHub0zvMfg%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4ed2c1c0addc488d90406dfe0579193b_1641652353~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=G5xd%2BAtdxqwS8FZ9MRRC6iTqrRc%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6f3a0ec0036545c5ba26df03f096bab4?x-expires=1642975200&x-signature=kciY%2BJD5uayOGlrXDFEnJZt3tVY%3D",
      bitrate: 964573,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6746999229380248582",
      uniqueId: "stineundmarc",
      nickname: "Stine & Marc",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3072c74f824bc274bb50466634f722e1~c5_100x100.jpeg?x-expires=1643040000&x-signature=%2F2iZZARniqySp%2BWG63lQAxDD1LU%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3072c74f824bc274bb50466634f722e1~c5_720x720.jpeg?x-expires=1643040000&x-signature=9UO92OW8mdZNI9GID%2FT7AdkbT24%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3072c74f824bc274bb50466634f722e1~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=OafYbfE%2FIaC2N2c9sd3ZTY7muKs%3D",
      signature: "Couple edition \u{1F48D}\nCheckt unser Insta ab\u{1F446}\u{1F3FC}\u{1F60D}\n\u{1F4E9} stine.marc@enkime.de",
      verified: false,
      secUid: "MS4wLjABAAAAC_GjbnW1nf0cg5m6rJNVCNl7ZhyUmd-nw0IRZJqbkZfB7dDl58hwcc9B9EkEF3q4",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6817665502509271041",
      title: "Famous piano songs for comedy and cooking programs",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/1f0d7a6a67ed48a0aff282e542eadf60",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f3e2cfb85d8345219b91c61091e6cfe5~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f3e2cfb85d8345219b91c61091e6cfe5~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f3e2cfb85d8345219b91c61091e6cfe5~c5_720x720.jpeg",
      authorName: "moshimo sound design",
      original: false,
      duration: 132,
      album: ""
    },
    challenges: [
      {
        id: "156717",
        title: "pranks",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "43029",
        title: "couplegoals",
        desc: "Show us your #CoupleGoals \u2764\uFE0F",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        coverThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        coverMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        coverLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        isCommerce: false
      },
      {
        id: "5424",
        title: "funny",
        desc: "Oh, we have to laugh...",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/0efc3d4dbc8e70fe21fda5df013e2924",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/0efc3d4dbc8e70fe21fda5df013e2924",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/0efc3d4dbc8e70fe21fda5df013e2924",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 200400,
      shareCount: 5936,
      commentCount: 3386,
      playCount: 21e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 35,
        end: 42,
        hashtagName: "pranks",
        hashtagId: "156717",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 43,
        end: 55,
        hashtagName: "couplegoals",
        hashtagId: "43029",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 62,
        hashtagName: "funny",
        hashtagId: "5424",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 63,
        end: 70,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 104,
      followerCount: 860800,
      heartCount: 357e5,
      videoCount: 918,
      diggCount: 78200,
      heart: 357e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "\u2728ich pranke meinen Freund mit einer bLuTiGeN Binde\u2728",
          "\u2728erstmal sch\xF6n Tomatensauce drauf\u2728",
          "\u2728jetzt wird das Prachtst\xFCck gut platziert\u2728",
          "\u2728oh oh\u2728",
          "\u2728\u{1F602}\u{1F602}\u{1F602}\u2728",
          "\u2728\xFCberlegt\u2728",
          "\u2728\u{1F602}\u{1F602}\u{1F97A}\u{1F97A}\u2728",
          "\u2728\u{1F602}\u{1F602}\u{1F602}\u2728"
        ]
      },
      {
        stickerType: 9,
        stickerText: [
          "Prank an Freund\u{1F602}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7053479052962827566",
    desc: "Tag a friend and don\u2019t say anything (I post videos everyday on Insta - iamjonathanpeter)",
    createTime: 1642266069,
    video: {
      id: "7053479052962827566",
      height: 1024,
      width: 576,
      duration: 18,
      ratio: "720p",
      cover: "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/81e4ace7f6f24444ae0142f1e658f463_1642266070~tplv-dmt-logom:tos-useast5-p-0000-tx/740abdc4972b4e1eac56ab0cad7b258d.image?x-expires=1642975200&x-signature=RcQsojFKaYckld8qZs6%2FYOeJJgs%3D",
      originCover: "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/5fd54771836f4197869fbfa19fe68ab1_1642266070?x-expires=1642975200&x-signature=UBEbrs14%2FN26wMFgMl%2FHBj7lRBY%3D",
      dynamicCover: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/091185ca3e03426bbbe20dbb87de86d4_1642266070?x-expires=1642975200&x-signature=gF9XNP3m5oGgCfFe3ig1x4cUUK8%3D",
      playAddr: "https://v16-webapp.tiktok.com/d1724611c2ebe856a3a2d9dfd1a109e1/61eddd59/video/tos/useast5/tos-useast5-pve-0068-tx/f5818235c8fb46d2bab07c2a97080182/?a=1988&br=1312&bt=656&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2s5djo6ZnhpOjMzZzczNEApPGQ4ZDMzM2Q1Nzw6Mzw2ZGdycXBtcjRnaGVgLS1kMS9zcy1eLmIwY2EwYmE1YmE0Ly06Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/d1724611c2ebe856a3a2d9dfd1a109e1/61eddd59/video/tos/useast5/tos-useast5-pve-0068-tx/f5818235c8fb46d2bab07c2a97080182/?a=1988&br=1312&bt=656&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2s5djo6ZnhpOjMzZzczNEApPGQ4ZDMzM2Q1Nzw6Mzw2ZGdycXBtcjRnaGVgLS1kMS9zcy1eLmIwY2EwYmE1YmE0Ly06Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/5fd54771836f4197869fbfa19fe68ab1_1642266070~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=i6eyADVKteuiFONfry7X8dMEHco%3D",
        "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/5fd54771836f4197869fbfa19fe68ab1_1642266070~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=oxxi1tazgVjlBGRmT%2BHXn32ieJY%3D"
      ],
      reflowCover: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/81e4ace7f6f24444ae0142f1e658f463_1642266070?x-expires=1642975200&x-signature=8D6FGvQrZWWpDiZ5fxaVtjEWIKk%3D",
      bitrate: 671878,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "260544599776038912",
      uniqueId: "iamjonathanpeter",
      nickname: "Jonathan Peter",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/46fecdb4f1f40b475b1c8af37b537284~c5_100x100.jpeg?x-expires=1643040000&x-signature=9VX43E2Lavi0%2BuCpuoc0vyjGBmo%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/46fecdb4f1f40b475b1c8af37b537284~c5_720x720.jpeg?x-expires=1643040000&x-signature=DVNiu8ZrPJt%2BXfEGkb751dv7%2B6Q%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/46fecdb4f1f40b475b1c8af37b537284~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=il5dQorhwpqx8qzsxe%2B%2FeCsHdJA%3D",
      signature: "ACTOR|CREATOR\n\u2764\uFE0F Follow me on Insta ^\nTag me in videos you want me to react to",
      verified: true,
      secUid: "MS4wLjABAAAAEN-FKXJ3o3LDj9THCJz8fPtueAmggA7KcuX-gLkwJKXLqBSlrffayz9UhkplvppL",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 1,
      stitchSetting: 3,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7025056274156881921",
      title: "TO THE MOON",
      playUrl: "",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/3d0115a50bd342c381470555b652de77~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/3d0115a50bd342c381470555b652de77~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/3d0115a50bd342c381470555b652de77~c5_720x720.jpeg",
      authorName: "Jnr Choi",
      original: false,
      duration: 60,
      album: "TO THE MOON"
    },
    stats: {
      diggCount: 1e6,
      shareCount: 4457,
      commentCount: 2898,
      playCount: 86e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 131,
      followerCount: 121e5,
      heartCount: 354e6,
      videoCount: 500,
      diggCount: 4889,
      heart: 354e6
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Follow for more"
        ]
      },
      {
        stickerType: 9,
        stickerText: [
          "Crazy Moments In     \n            4k"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7056363300602383621",
    desc: "Easy \u{1F60E} your first @ has to try this with you \u261D\u{1F3FB}@fabulous_nougat IG:annchen.augustine #fy #foryou #equestrian",
    createTime: 1642937611,
    video: {
      id: "7056363300602383621",
      height: 1024,
      width: 576,
      duration: 14,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/78bb5dd9609740dfbab6d779e1672c76_1642937613?x-expires=1642975200&x-signature=CxfoxBEB13ApXc%2Fa%2FdLMZwmSAY0%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/43f6105c480c4e5fbaea8d62e947c30d_1642937612?x-expires=1642975200&x-signature=vr%2FA7emAJFpdeerKHjPKelot4RM%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f22390c1642e45f58a275c72a58f19d2_1642937613?x-expires=1642975200&x-signature=sgfW8g2PWy8VasAOcoONcwB%2FReQ%3D",
      playAddr: "https://v16-webapp.tiktok.com/e9e559aa435f9b21f033705223182e0f/61eddd55/video/tos/useast2a/tos-useast2a-ve-0068c004/2919e2e0fb26420c9d19922d7f74b19e/?a=1988&br=2558&bt=1279&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc3dzo6ZndtOjMzNzczM0ApZDs1PDk0M2U4NzM0aTo0aGdkZWA2cjRfbWpgLS1kMTZzczJhLmNeNjEwMjFgX2FgMWE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/e9e559aa435f9b21f033705223182e0f/61eddd55/video/tos/useast2a/tos-useast2a-ve-0068c004/2919e2e0fb26420c9d19922d7f74b19e/?a=1988&br=2558&bt=1279&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc3dzo6ZndtOjMzNzczM0ApZDs1PDk0M2U4NzM0aTo0aGdkZWA2cjRfbWpgLS1kMTZzczJhLmNeNjEwMjFgX2FgMWE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/43f6105c480c4e5fbaea8d62e947c30d_1642937612~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=SffVDKU1KT%2F1AzNZZ2cJJ6ROqhQ%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/43f6105c480c4e5fbaea8d62e947c30d_1642937612~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=AH5L5QGwkqPV1TYZlin%2F3PWmfkE%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5a9ac3a29fbb3f1314bf3b3cc14e323c?x-expires=1642975200&x-signature=cmlRXsYYf6qBga7OxYshNEvyIeQ%3D",
      bitrate: 1310426,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6675677232365405189",
      uniqueId: "annchenaugustine",
      nickname: "Augustine",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1b10261fe1296e751af06a6761fabc2d~c5_100x100.jpeg?x-expires=1643040000&x-signature=4cIbuX3Ye%2FESfCKvbRUcMYiX4qI%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1b10261fe1296e751af06a6761fabc2d~c5_720x720.jpeg?x-expires=1643040000&x-signature=iGmEYKU0mlrHHqf%2BpzoY0AIZwQQ%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1b10261fe1296e751af06a6761fabc2d~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=Ps6YcjuaAcQw9OMpQKFCZlBKKVU%3D",
      signature: "\u265B Horses/Lifestyle/Fashion \u265B\nIG: annchen.augustine \nTine@gl-management.net \u{1F4E8}",
      verified: false,
      secUid: "MS4wLjABAAAAoeslG8kilOUUHv_DV0W6zauzgS2jJIe4UvO__Zf_-37D3JdeEwWqYCsZsDEf0Bps",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7027277594416384001",
      title: "Enemy feat. J.I.D. (from the series Arcane League of Legends)",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/cb3d7052f3b24a5b9e2170bcb1c4a0c9",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/ba9bf63eff8d4f42817264c4c49a0c78~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/ba9bf63eff8d4f42817264c4c49a0c78~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/ba9bf63eff8d4f42817264c4c49a0c78~c5_720x720.jpeg",
      authorName: "Imagine Dragons",
      original: false,
      duration: 173,
      album: "Arcane League of Legends (Soundtrack from the Animated Series)"
    },
    challenges: [
      {
        id: "153828",
        title: "fy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8097",
        title: "equestrian",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 59900,
      shareCount: 568,
      commentCount: 1509,
      playCount: 323700
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 87,
        end: 90,
        hashtagName: "fy",
        hashtagId: "153828",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 91,
        end: 98,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 99,
        end: 110,
        hashtagName: "equestrian",
        hashtagId: "8097",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 13,
      followerCount: 17e5,
      heartCount: 47e6,
      videoCount: 436,
      diggCount: 31600,
      heart: 47e6
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7054146158498712837",
    desc: "#trend #viral #trending #fy #fyp #fyp\u30B7 #foryou #foryoupage #f\xFCrdichseite\u30B7 #f\xFCrdich #kesfet #letstalkemoji #beni\xF6ne\xE7\u0131kart #beni\xF6ne\xE7\u0131kart #ke\u015Ffet #pizza",
    createTime: 1642421392,
    video: {
      id: "7054146158498712837",
      height: 1024,
      width: 576,
      duration: 16,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9bfaf7fc69df4218b038bbc0a9a293c6?x-expires=1642975200&x-signature=UnaGuSWidCEuBtBbPBmJgUqVcFo%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/a3d556127b1748e48d07cebdf984c44a_1642421399?x-expires=1642975200&x-signature=H7e6Pq5Th26ucaQDQOonhACuZhw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/52fbb5cfa06044b1918d879a707665e6_1642421393?x-expires=1642975200&x-signature=eqfcIz90IFrPx6ISjSI4VA3v62I%3D",
      playAddr: "https://v16-webapp.tiktok.com/68af8945be5e30cce31046f02bbce71e/61eddd57/video/tos/useast2a/tos-useast2a-pve-0068/187fb94f7783411ab8c371d4f2247e5d/?a=1988&br=3568&bt=1784&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZobmc6ZjVvOjMzNzczM0ApZmlpZGdpM2U6N2U5MzczOWdrYXEwcjRvbWZgLS1kMTZzcy0wLTFfMC0uNTU1MTA2NjY6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/68af8945be5e30cce31046f02bbce71e/61eddd57/video/tos/useast2a/tos-useast2a-pve-0068/187fb94f7783411ab8c371d4f2247e5d/?a=1988&br=3568&bt=1784&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZobmc6ZjVvOjMzNzczM0ApZmlpZGdpM2U6N2U5MzczOWdrYXEwcjRvbWZgLS1kMTZzcy0wLTFfMC0uNTU1MTA2NjY6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/a3d556127b1748e48d07cebdf984c44a_1642421399~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=q2fCdYH058h1nvXdI7slw8GP7AI%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/a3d556127b1748e48d07cebdf984c44a_1642421399~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=yZOYl%2BPt75HgLNw%2FU0mIae73MZs%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b2d314dc718b40a34f377dd60f6f4c69?x-expires=1642975200&x-signature=eg4%2BxD%2FOQW91h%2FFGWW5Fr9N1xy8%3D",
      bitrate: 1827062,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6919388600199054337",
      uniqueId: "demleyskitchen",
      nickname: "Demley's kitchen",
      avatarThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ae85826ec45e59635b4dc7cd60203765.jpeg?x-expires=1643040000&x-signature=KNKodqOTCxHfkdA6mo9j3nqdIIk%3D",
      avatarMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/ae85826ec45e59635b4dc7cd60203765.jpeg?x-expires=1643040000&x-signature=nRb4DyrfZZCcCXSzBvkmTHIBBFU%3D",
      avatarLarger: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/ae85826ec45e59635b4dc7cd60203765.jpeg?x-expires=1643040000&x-signature=gqGcpBL0jQ7u94xQABMQug9nqRQ%3D",
      signature: "Folgt mir auf Instagram\u{1F446}\u{1F3FC}\n\u27A1\uFE0Fdemleyskitchen",
      verified: false,
      secUid: "MS4wLjABAAAAHZPuB9N2ZFOlArHA69BrOYBPNstd3tSG7eHptcTdaUbT6eYJE6Gaepp5nWRYo9lX",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7020331472720546565",
      title: "original sound",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7020331543843670790.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/53c09150044b994484fc5bf0ac639e7b~c5_100x100.jpeg?x-expires=1643040000&x-signature=UFZjQvnSeYaBhjzKF9egU4q80HY%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/53c09150044b994484fc5bf0ac639e7b~c5_720x720.jpeg?x-expires=1643040000&x-signature=9phqevzt8Ft4ZU0D1oZD644kM%2BA%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/53c09150044b994484fc5bf0ac639e7b~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=7%2FAJ5IC%2BAu4WBT7Wst6ibLfOkF0%3D",
      authorName: "DJ Jamzy SpecialistJamz",
      original: true,
      duration: 55,
      album: ""
    },
    challenges: [
      {
        id: "44895",
        title: "trend",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "20884",
        title: "viral",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "20105",
        title: "trending",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "153828",
        title: "fy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "229207",
        title: "fyp",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1637342470396934",
        title: "fyp\u30B7",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "88764338",
        title: "foryoupage",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1655470103986182",
        title: "f\xFCrdichseite\u30B7",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5457735",
        title: "f\xFCrdich",
        desc: "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai \u{1F60D}  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;F\xFCr Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen \u{1F525}",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "71559893",
        title: "kesfet",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "55117027",
        title: "letstalkemoji",
        desc: "",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/5251ae86e97876f02917e84d3235e6b0",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/5251ae86e97876f02917e84d3235e6b0",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/5251ae86e97876f02917e84d3235e6b0",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/755a6ddf95be4fec2dbda4f17b47c572",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/755a6ddf95be4fec2dbda4f17b47c572",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/755a6ddf95be4fec2dbda4f17b47c572",
        isCommerce: false
      },
      {
        id: "1628000584060934",
        title: "beni\xF6ne\xE7\u0131kart",
        desc: "TikTok'ta Feature Kazan\u{1F60D}\nTarih: 15-24 Mart\n\u015Eartlar: Sevdi\u011Fin bir m\xFCzi\u011Fi veya diyalo\u011Fu TikTok'a y\xFCkle, \xE7ekece\u011Fin videoya #beni\xF6ne\xE7\u0131kart hashtagini ekle! \n\xD6d\xFCller:  \n1. Her g\xFCn 5 videoya Feature!\n2. Etkinlik sonunda, en iyi 3 video sahibi i\xE7in 3 g\xFCnl\xFCk Banner imkan\u0131!\n3. Etkinlik sonunda, en fazla payla\u015F\u0131lan 50 videonun (En az 1k izlenme) sahibine TikTok \xF6zel ti\u015F\xF6rt\xFC hediye!",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038149057542.PNG",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038149057542.PNG",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038149057542.PNG",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038157458437.PNG",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038157458437.PNG",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038157458437.PNG",
        isCommerce: false
      },
      {
        id: "1628000584060934",
        title: "beni\xF6ne\xE7\u0131kart",
        desc: "TikTok'ta Feature Kazan\u{1F60D}\nTarih: 15-24 Mart\n\u015Eartlar: Sevdi\u011Fin bir m\xFCzi\u011Fi veya diyalo\u011Fu TikTok'a y\xFCkle, \xE7ekece\u011Fin videoya #beni\xF6ne\xE7\u0131kart hashtagini ekle! \n\xD6d\xFCller:  \n1. Her g\xFCn 5 videoya Feature!\n2. Etkinlik sonunda, en iyi 3 video sahibi i\xE7in 3 g\xFCnl\xFCk Banner imkan\u0131!\n3. Etkinlik sonunda, en fazla payla\u015F\u0131lan 50 videonun (En az 1k izlenme) sahibine TikTok \xF6zel ti\u015F\xF6rt\xFC hediye!",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038149057542.PNG",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038149057542.PNG",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038149057542.PNG",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038157458437.PNG",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038157458437.PNG",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/1628038157458437.PNG",
        isCommerce: false
      },
      {
        id: "86182714",
        title: "ke\u015Ffet",
        desc: "\xC7ok yak\u0131nda...",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/c87d87b115bd1c9ff6d4f5d97c3b5b45",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/c87d87b115bd1c9ff6d4f5d97c3b5b45",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/c87d87b115bd1c9ff6d4f5d97c3b5b45",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/b1d383a7839da95e0981ad6bdb50f2d3",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/b1d383a7839da95e0981ad6bdb50f2d3",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/b1d383a7839da95e0981ad6bdb50f2d3",
        isCommerce: false
      },
      {
        id: "7090",
        title: "pizza",
        desc: "You want a pizza this? \u{1F355}",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/e3a87c0516a0a7907231ac02e3d616b2",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/e3a87c0516a0a7907231ac02e3d616b2",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/e3a87c0516a0a7907231ac02e3d616b2",
        coverThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/b8640c7b1ce7da990c2bfd290529e170",
        coverMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/b8640c7b1ce7da990c2bfd290529e170",
        coverLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/b8640c7b1ce7da990c2bfd290529e170",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 176200,
      shareCount: 6500,
      commentCount: 2815,
      playCount: 18e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 0,
        end: 6,
        hashtagName: "trend",
        hashtagId: "44895",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 7,
        end: 13,
        hashtagName: "viral",
        hashtagId: "20884",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 14,
        end: 23,
        hashtagName: "trending",
        hashtagId: "20105",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 24,
        end: 27,
        hashtagName: "fy",
        hashtagId: "153828",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 28,
        end: 32,
        hashtagName: "fyp",
        hashtagId: "229207",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 33,
        end: 38,
        hashtagName: "fyp\u30B7",
        hashtagId: "1637342470396934",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 39,
        end: 46,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 47,
        end: 58,
        hashtagName: "foryoupage",
        hashtagId: "88764338",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 73,
        hashtagName: "f\xFCrdichseite\u30B7",
        hashtagId: "1655470103986182",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 74,
        end: 82,
        hashtagName: "f\xFCrdich",
        hashtagId: "5457735",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 83,
        end: 90,
        hashtagName: "kesfet",
        hashtagId: "71559893",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 91,
        end: 105,
        hashtagName: "letstalkemoji",
        hashtagId: "55117027",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 106,
        end: 120,
        hashtagName: "beni\xF6ne\xE7\u0131kart",
        hashtagId: "1628000584060934",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 121,
        end: 135,
        hashtagName: "beni\xF6ne\xE7\u0131kart",
        hashtagId: "1628000584060934",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 136,
        end: 143,
        hashtagName: "ke\u015Ffet",
        hashtagId: "86182714",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 144,
        end: 150,
        hashtagName: "pizza",
        hashtagId: "7090",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 12,
      followerCount: 145e3,
      heartCount: 32e5,
      videoCount: 190,
      diggCount: 1260,
      heart: 32e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "5 min Pizza in der Pfanne ",
          "wenden\u{1F501}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7028986516206587141",
    desc: "Ist immer so oder?\u{1F923}\u{1F4A6} #couplegoals #duschen #beziehung #phasen #fyp\u30B7",
    createTime: 1636563456,
    video: {
      id: "7028986516206587141",
      height: 1024,
      width: 576,
      duration: 18,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/a59b8f2a6a9144c8aa9fd03358d311cb_1636563459?x-expires=1642975200&x-signature=c%2BcHmUoi%2Fih0tke%2FKdM0npVRsGk%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4c62d7487fab4f90bcb8e9bd82537f35_1636563457?x-expires=1642975200&x-signature=xGXv4tpbfVOxO2n3eQTQPT%2Bt7nw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/eb1a5b1ffa944a2682bd3698a6c9e0b5_1636563458?x-expires=1642975200&x-signature=TxzXanjeF5iMmSRwfhb4NtliHZk%3D",
      playAddr: "https://v16-webapp.tiktok.com/61fdfb2e98858b2d18c3711d54280097/61eddd59/video/tos/useast2a/tos-useast2a-ve-0068c004/c586ebd1e725446694ba06e16daccc1f/?a=1988&br=2948&bt=1474&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ZoNzM6ZnV5OTMzNzczM0ApOjM4M2VlOmU5NzozODQ8NGcyLWoucjQwZzJgLS1kMTZzcy00MWIyYTQuLV9hXjIxLTE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/61fdfb2e98858b2d18c3711d54280097/61eddd59/video/tos/useast2a/tos-useast2a-ve-0068c004/c586ebd1e725446694ba06e16daccc1f/?a=1988&br=2948&bt=1474&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ZoNzM6ZnV5OTMzNzczM0ApOjM4M2VlOmU5NzozODQ8NGcyLWoucjQwZzJgLS1kMTZzcy00MWIyYTQuLV9hXjIxLTE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4c62d7487fab4f90bcb8e9bd82537f35_1636563457~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=h%2BRPIwXsAYYkck0CNfW28S6i0%2FM%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4c62d7487fab4f90bcb8e9bd82537f35_1636563457~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=JYPfa6YSwsBZSql526XmFiSAoD4%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b097459f6f6b67f8175000cdfd6f898f?x-expires=1642975200&x-signature=iwIYxqSmd7HcpXY6quSt83%2FjqEM%3D",
      bitrate: 1509852,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6808171807859803142",
      uniqueId: "diewalsers",
      nickname: "dieWalsers",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_100x100.jpeg?x-expires=1643040000&x-signature=Et4HzIPMt4h7XIGjPSKEXM7tdUM%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_720x720.jpeg?x-expires=1643040000&x-signature=50ISTRqcquPOc%2BfFS2fvINGoHr4%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=l8qnwT62WeskSYel%2Fq7690LYTv0%3D",
      signature: "Lisa & Henry \nWillkommen bei Familie Walser\u{1F970}\u{1F422}\n\u{1F4E8}: booking@diewalsers.com",
      verified: false,
      secUid: "MS4wLjABAAAARdSPx5WZs8jgMbubFXzYXRLnX8nKGl5ReqxpaSwaTqPg4OeUJEpIZhHoFQagUrFF",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6754420279457565445",
      title: "Mr. Blue Sky",
      playUrl: "",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/108329f3b2784a8e8c8d2aeb32350b29~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/108329f3b2784a8e8c8d2aeb32350b29~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/108329f3b2784a8e8c8d2aeb32350b29~c5_720x720.jpeg",
      authorName: "Electric Light Orchestra",
      original: false,
      duration: 33,
      album: "Out of the Blue"
    },
    challenges: [
      {
        id: "43029",
        title: "couplegoals",
        desc: "Show us your #CoupleGoals \u2764\uFE0F",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        coverThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        coverMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        coverLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        isCommerce: false
      },
      {
        id: "2221523",
        title: "duschen",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6354911",
        title: "beziehung",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "41687428",
        title: "phasen",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1637342470396934",
        title: "fyp\u30B7",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 160200,
      shareCount: 3328,
      commentCount: 829,
      playCount: 4e6
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 23,
        end: 35,
        hashtagName: "couplegoals",
        hashtagId: "43029",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 36,
        end: 44,
        hashtagName: "duschen",
        hashtagId: "2221523",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 45,
        end: 55,
        hashtagName: "beziehung",
        hashtagId: "6354911",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 63,
        hashtagName: "phasen",
        hashtagId: "41687428",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 64,
        end: 69,
        hashtagName: "fyp\u30B7",
        hashtagId: "1637342470396934",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 240,
      followerCount: 639500,
      heartCount: 167e5,
      videoCount: 471,
      diggCount: 7566,
      heart: 167e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Zusammen duschen:",
          "1 Woche Beziehung \u{1F648}",
          "1 Monat Beziehung \u{1F970}",
          "1 Jahr Beziehung \u{1F9FC}\u{1F970}",
          "5+ Jahre Beziehung \u{1FA92}\u{1F602}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7024211316860620033",
    desc: "\u{1F62D}\u{1F62D}\u{1F62D} Inst: kikakim\u{1F90D}",
    createTime: 1635451643,
    video: {
      id: "7024211316860620033",
      height: 1024,
      width: 576,
      duration: 19,
      ratio: "720p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1a9165f7764d449aa0a8e8792ae109cd_1635451647?x-expires=1642975200&x-signature=5rn525N8tCxwGl8RCML2SW6WraA%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/77292ee085ae418c8ff5686c1feb6729_1635451645?x-expires=1642975200&x-signature=zWhEusXqVzQnh659e27Mxpyt27E%3D",
      dynamicCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/46d673f468bd48ebbf487a1398238ba6_1635451646?x-expires=1642975200&x-signature=saM%2B%2FrceUngF5HMFGC%2FZ227jaFM%3D",
      playAddr: "https://v16-webapp.tiktok.com/749f5e6816020249cf554a06a616794d/61eddd5a/video/tos/alisg/tos-alisg-pve-0037c001/ca5a37025aa44c1aa3ef1c2d1a4906d9/?a=1988&br=3442&bt=1721&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3loaTo6ZndqODMzODczNEApZGhkOGc1M2RmNzU3OWU4ZWdobWBfcjQwMnFgLS1kMS1zcy0uLjAtMS1iMGFhLzMtX2I6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/749f5e6816020249cf554a06a616794d/61eddd5a/video/tos/alisg/tos-alisg-pve-0037c001/ca5a37025aa44c1aa3ef1c2d1a4906d9/?a=1988&br=3442&bt=1721&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3loaTo6ZndqODMzODczNEApZGhkOGc1M2RmNzU3OWU4ZWdobWBfcjQwMnFgLS1kMS1zcy0uLjAtMS1iMGFhLzMtX2I6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p77-sign-sg-lite.tiktokcdn.com/tos-alisg-p-0037/77292ee085ae418c8ff5686c1feb6729_1635451645~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=GwictBOegyH2qTdNkvAMU8zd7T0%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/77292ee085ae418c8ff5686c1feb6729_1635451645~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=JrWpTYaXz71CeDfRpCsJakkRJLY%3D"
      ],
      reflowCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1a9165f7764d449aa0a8e8792ae109cd_1635451647?x-expires=1642975200&x-signature=5rn525N8tCxwGl8RCML2SW6WraA%3D",
      bitrate: 1762951,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6785823001336415238",
      uniqueId: "kikakiim",
      nickname: "Kika Kim",
      avatarThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=vTKxIj4i3VDJ7ngFEMkAyzY31dM%3D",
      avatarMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=4hnijvPmvdC4%2BIFL3iESdWdvlfM%3D",
      avatarLarger: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=6EEg%2BGMXtVtBCeQ9kVaJ4SAD62M%3D",
      signature: "Inst: kikakim\u{1F90D}\n@xoteam\nCooperation: kikakim.booking@gmail.com",
      verified: false,
      secUid: "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7005888397580208130",
      title: "MONEY",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/c037c7bcd46a4e91b53a04b6d304aae4",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0c37263a71914c93b692c1ae9e413623~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0c37263a71914c93b692c1ae9e413623~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0c37263a71914c93b692c1ae9e413623~c5_720x720.jpeg",
      authorName: "\uB9AC\uC0AC (LISA)",
      original: false,
      duration: 60,
      album: "LALISA"
    },
    stats: {
      diggCount: 79e5,
      shareCount: 12700,
      commentCount: 40900,
      playCount: 596e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 106,
      followerCount: 274e5,
      heartCount: 7223e5,
      videoCount: 921,
      diggCount: 7071,
      heart: 7223e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "My hair was ruined, details will be on Instagram\u{1F62D}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7039356740554493190",
    desc: "AUTSCH das tat weh \u{1F633}\u{1F97A} #couplecomedy #unterhaltung #fyp\u30B7 #couplegoals",
    createTime: 1638977962,
    video: {
      id: "7039356740554493190",
      height: 1024,
      width: 576,
      duration: 8,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/25827a5298794a0291e94fc36b279e6f_1638977964?x-expires=1642975200&x-signature=DTPemoqnTnFXc5XH0bm2vDIogUI%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6e8c62db7dd6406e9b7a5d533af7369b_1638977963?x-expires=1642975200&x-signature=mqxWSPEV7Abtxp4SCwkSYmcRBho%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/568192f39ed34481a1a271d154f81b27_1638977982?x-expires=1642975200&x-signature=Or%2BIcAxh66llrrfXMMIYqO3PtQo%3D",
      playAddr: "https://v16-webapp.tiktok.com/c7d04f029105405788f2e78d11ba77a6/61eddd4f/video/tos/useast2a/tos-useast2a-ve-0068c002/f76fbd73fe5548aeb9cf4c846ba95a6e/?a=1988&br=2858&bt=1429&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZydDQ6ZmxmOTMzNzczM0ApOTc2ZzY5N2UzNzg2ZGRpOWcwZ3JqcjRvcmxgLS1kMTZzczFeMzItLWJhLzAyYzBfNTE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/c7d04f029105405788f2e78d11ba77a6/61eddd4f/video/tos/useast2a/tos-useast2a-ve-0068c002/f76fbd73fe5548aeb9cf4c846ba95a6e/?a=1988&br=2858&bt=1429&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZydDQ6ZmxmOTMzNzczM0ApOTc2ZzY5N2UzNzg2ZGRpOWcwZ3JqcjRvcmxgLS1kMTZzczFeMzItLWJhLzAyYzBfNTE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/6e8c62db7dd6406e9b7a5d533af7369b_1638977963~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=rLc7%2B%2Bu8nC1d6n2Df3atIpXX96E%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/6e8c62db7dd6406e9b7a5d533af7369b_1638977963~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=Gluvv98WMKBxnudPV5dEBw%2FFrdA%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0690f487280e312d8adc75d38cf23615?x-expires=1642975200&x-signature=yFBcnp4dCs3ACo%2B8TWmUTdq9Ja4%3D",
      bitrate: 1463473,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6808171807859803142",
      uniqueId: "diewalsers",
      nickname: "dieWalsers",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_100x100.jpeg?x-expires=1643040000&x-signature=Et4HzIPMt4h7XIGjPSKEXM7tdUM%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_720x720.jpeg?x-expires=1643040000&x-signature=50ISTRqcquPOc%2BfFS2fvINGoHr4%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=l8qnwT62WeskSYel%2Fq7690LYTv0%3D",
      signature: "Lisa & Henry \nWillkommen bei Familie Walser\u{1F970}\u{1F422}\n\u{1F4E8}: booking@diewalsers.com",
      verified: false,
      secUid: "MS4wLjABAAAARdSPx5WZs8jgMbubFXzYXRLnX8nKGl5ReqxpaSwaTqPg4OeUJEpIZhHoFQagUrFF",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7039356692273924870",
      title: "Originalton",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7039356727409953541.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_100x100.jpeg?x-expires=1643040000&x-signature=Et4HzIPMt4h7XIGjPSKEXM7tdUM%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_720x720.jpeg?x-expires=1643040000&x-signature=50ISTRqcquPOc%2BfFS2fvINGoHr4%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dec42f0c1d2b355be68a7c6b6e11d1ff~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=l8qnwT62WeskSYel%2Fq7690LYTv0%3D",
      authorName: "dieWalsers",
      original: true,
      duration: 8,
      album: ""
    },
    challenges: [
      {
        id: "664412",
        title: "couplecomedy",
        desc: "Share your best comedy skills with your Partner under #couplecomedy \u{1F600}\u{1F61C}",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2897164",
        title: "unterhaltung",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1637342470396934",
        title: "fyp\u30B7",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "43029",
        title: "couplegoals",
        desc: "Show us your #CoupleGoals \u2764\uFE0F",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/a85fe2e8ad558d516d1d17084ce31c20",
        coverThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        coverMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        coverLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/be6369554884bb3f38c13d8e489a4d74",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 170800,
      shareCount: 3576,
      commentCount: 1098,
      playCount: 27e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 24,
        end: 37,
        hashtagName: "couplecomedy",
        hashtagId: "664412",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 38,
        end: 51,
        hashtagName: "unterhaltung",
        hashtagId: "2897164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 52,
        end: 57,
        hashtagName: "fyp\u30B7",
        hashtagId: "1637342470396934",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 58,
        end: 70,
        hashtagName: "couplegoals",
        hashtagId: "43029",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 240,
      followerCount: 639500,
      heartCount: 167e5,
      videoCount: 471,
      diggCount: 7566,
      heart: 167e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Sage vor meinem Mann dass ich mich bei OF angemeldet habe \u{1F602}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7034799766382988550",
    desc: "KLO?\u{1F633} #telefon #sound #voice #call #polizei #anruf #prank #fail #null #wc #klo #sprecher #stimme #band #ansage #unterhaltung #comedy #lol #keyboard",
    createTime: 1637916961,
    video: {
      id: "7034799766382988550",
      height: 1024,
      width: 576,
      duration: 65,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7c4d2c820e7441a4b41eb7dbfc1cfb82_1637916964?x-expires=1642975200&x-signature=Qj16bQZszzsNvN1rwZF8giz5iqg%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5b3c9b54561c4707b3a98a896512192d_1637916964?x-expires=1642975200&x-signature=diGbdcyA5tLDx%2FgENyIRaLzEvtE%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/24b7e4b8ec094d81b766121248c7293d_1637916964?x-expires=1642975200&x-signature=O86UQANZMkpZfwbiBOB1taSmc9k%3D",
      playAddr: "https://v16-webapp.tiktok.com/3f1b3f9e798c1245d5ffd00c33396503/61eddd88/video/tos/useast2a/tos-useast2a-ve-0068c003/86a5b998a25e441089f433b68a1c4d93/?a=1988&br=2152&bt=1076&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3J5cWQ6ZjxkOTMzNzczM0ApZDs7NjNoZDtkN2dkZGY8ZWdzaC9wcjRnLmRgLS1kMTZzczNgLTI2MTM0NS0uMDU2MTQ6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/3f1b3f9e798c1245d5ffd00c33396503/61eddd88/video/tos/useast2a/tos-useast2a-ve-0068c003/86a5b998a25e441089f433b68a1c4d93/?a=1988&br=2152&bt=1076&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3J5cWQ6ZjxkOTMzNzczM0ApZDs7NjNoZDtkN2dkZGY8ZWdzaC9wcjRnLmRgLS1kMTZzczNgLTI2MTM0NS0uMDU2MTQ6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/5b3c9b54561c4707b3a98a896512192d_1637916964~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=2BnmgZZohTTMuUl6fCm%2BjWit6Tw%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/5b3c9b54561c4707b3a98a896512192d_1637916964~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=KSkvoYDd7N87fq3yGEKHUiZRvZ4%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/da220764065046af6c07fa611e834eb5?x-expires=1642975200&x-signature=kJ6WBOhc5R0iz%2BPU2CNbHSi78KA%3D",
      bitrate: 1101982,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6850021004246467590",
      uniqueId: "eddysayi",
      nickname: "EddY",
      avatarThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dfa8cf73cdf23215ebb7093e74fa4d2b.jpeg?x-expires=1643040000&x-signature=qLTvEI9kw7XfzqpTLweIzCKqXCE%3D",
      avatarMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/dfa8cf73cdf23215ebb7093e74fa4d2b.jpeg?x-expires=1643040000&x-signature=qv0hvHTg739YZRGKZ7B5OYq1aKA%3D",
      avatarLarger: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/dfa8cf73cdf23215ebb7093e74fa4d2b.jpeg?x-expires=1643040000&x-signature=qoWJrUS6VzQrzuaQngi4zMMtGkk%3D",
      signature: "die Bandansage \u{1F3A4}\u{1F604} \nBaby-Keyboard \u{1F3B9}\u{1F476}\u{1F3FB}",
      verified: false,
      secUid: "MS4wLjABAAAA1-6Tl3j7s9SGUDPWhPSooCdHuicMrhBWwOeTGUXdD7ywQbNvPmK-5JBhevLLDYRK",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7034799324458470150",
      title: "Originalton",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7034799581003090693.mp3",
      coverThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dfa8cf73cdf23215ebb7093e74fa4d2b.jpeg?x-expires=1643040000&x-signature=qLTvEI9kw7XfzqpTLweIzCKqXCE%3D",
      coverMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/dfa8cf73cdf23215ebb7093e74fa4d2b.jpeg?x-expires=1643040000&x-signature=qv0hvHTg739YZRGKZ7B5OYq1aKA%3D",
      coverLarge: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/dfa8cf73cdf23215ebb7093e74fa4d2b.jpeg?x-expires=1643040000&x-signature=qoWJrUS6VzQrzuaQngi4zMMtGkk%3D",
      authorName: "EddY",
      original: true,
      duration: 65,
      album: ""
    },
    challenges: [
      {
        id: "759757",
        title: "telefon",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "39697",
        title: "sound",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "19994",
        title: "voice",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "10580",
        title: "call",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "738373",
        title: "polizei",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "11684070",
        title: "anruf",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "9122",
        title: "prank",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5013",
        title: "fail",
        desc: "It's #Fail time",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3a21ea416880cd7c9f6007a8efc8283a",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3a21ea416880cd7c9f6007a8efc8283a",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3a21ea416880cd7c9f6007a8efc8283a",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "99440",
        title: "null",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "14454",
        title: "wc",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "124488",
        title: "klo",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6303116",
        title: "sprecher",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2740320",
        title: "stimme",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "31565",
        title: "band",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "4342454",
        title: "ansage",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2897164",
        title: "unterhaltung",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "7888",
        title: "comedy",
        desc: "",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/3fdb9d72d10e72e378dc4a6bfd609325",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1745",
        title: "lol",
        desc: "Can you laugh any louder?\u{1F644}\nHow to shoot: \n\n1. Click the shoot icon. \n2. Click on &amp;quot;add sound&amp;quot;\n3. Add your meme text. \n4. Have fun!",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/d285c2dab8b115a933f10a8422e3500f",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/d285c2dab8b115a933f10a8422e3500f",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/d285c2dab8b115a933f10a8422e3500f",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a3237c664af342f99d4f97515e4834a5",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a3237c664af342f99d4f97515e4834a5",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a3237c664af342f99d4f97515e4834a5",
        isCommerce: false
      },
      {
        id: "91210",
        title: "keyboard",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 186200,
      shareCount: 5159,
      commentCount: 1793,
      playCount: 2e6
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 7,
        end: 15,
        hashtagName: "telefon",
        hashtagId: "759757",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 16,
        end: 22,
        hashtagName: "sound",
        hashtagId: "39697",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 23,
        end: 29,
        hashtagName: "voice",
        hashtagId: "19994",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 30,
        end: 35,
        hashtagName: "call",
        hashtagId: "10580",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 36,
        end: 44,
        hashtagName: "polizei",
        hashtagId: "738373",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 45,
        end: 51,
        hashtagName: "anruf",
        hashtagId: "11684070",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 52,
        end: 58,
        hashtagName: "prank",
        hashtagId: "9122",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 64,
        hashtagName: "fail",
        hashtagId: "5013",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 65,
        end: 70,
        hashtagName: "null",
        hashtagId: "99440",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 71,
        end: 74,
        hashtagName: "wc",
        hashtagId: "14454",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 75,
        end: 79,
        hashtagName: "klo",
        hashtagId: "124488",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 80,
        end: 89,
        hashtagName: "sprecher",
        hashtagId: "6303116",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 90,
        end: 97,
        hashtagName: "stimme",
        hashtagId: "2740320",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 98,
        end: 103,
        hashtagName: "band",
        hashtagId: "31565",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 104,
        end: 111,
        hashtagName: "ansage",
        hashtagId: "4342454",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 112,
        end: 125,
        hashtagName: "unterhaltung",
        hashtagId: "2897164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 126,
        end: 133,
        hashtagName: "comedy",
        hashtagId: "7888",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 134,
        end: 138,
        hashtagName: "lol",
        hashtagId: "1745",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 139,
        end: 148,
        hashtagName: "keyboard",
        hashtagId: "91210",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 148,
      followerCount: 483900,
      heartCount: 74e5,
      videoCount: 130,
      diggCount: 5959,
      heart: 74e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Wenn um 21:30 Uhr ein Callcenter anruft\u2026 \u{1F612}\u{1F923}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7024961163532307717",
    desc: "Reply to @nicole.03 and now I\u2019m eating your boyfriend \u{1F485}\u{1F3FB}",
    createTime: 1635626230,
    video: {
      id: "7024961163532307717",
      height: 960,
      width: 540,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/285f92b6abd74ee0981742ee4c1dc1bc_1635947142?x-expires=1642975200&x-signature=V6kjojHrGhI6tL8IMXDMjDZO5sE%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/dca0c03ee9ea448e995ad15e192cee39_1635947142?x-expires=1642975200&x-signature=Sf9rfidLVrXzXIdf%2B6EtHBDKDmg%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/75d17608247f461ca5df9381206c26d7_1635947143?x-expires=1642975200&x-signature=8X4f7OP0l8wYhSR7j6Qm%2F0zVmYw%3D",
      playAddr: "https://v16-webapp.tiktok.com/ddd072e9619e1f4383667b8a5026cbf2/61eddd53/video/tos/useast2a/tos-useast2a-ve-0068c002/dafc1e147c954a43ad52f84a035810e8/?a=1988&br=2642&bt=1321&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=aml2NTo6ZjM8OTMzNzgzM0ApM2VlNWQ5NDtmN2Y6aTczZ2diNV8ycjQwMi5gLS1kLzZzc19iLTRjYmMxMWE0YzYwNDU6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/ddd072e9619e1f4383667b8a5026cbf2/61eddd53/video/tos/useast2a/tos-useast2a-ve-0068c002/dafc1e147c954a43ad52f84a035810e8/?a=1988&br=2642&bt=1321&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=aml2NTo6ZjM8OTMzNzgzM0ApM2VlNWQ5NDtmN2Y6aTczZ2diNV8ycjQwMi5gLS1kLzZzc19iLTRjYmMxMWE0YzYwNDU6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/dca0c03ee9ea448e995ad15e192cee39_1635947142~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=fEi3dSZ%2FrYvgJsbSwDGzzUViSqc%3D",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/dca0c03ee9ea448e995ad15e192cee39_1635947142~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=AXrcu3mMa7z6LmxIQCkk2huevgA%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f81a59c8d52be897ff937e1f622e76d4?x-expires=1642975200&x-signature=Ya5%2BkiKUZ%2Fq4TtEwS5KSiwjW5cQ%3D",
      bitrate: 1353421,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6694405087929287686",
      uniqueId: "mimiermakeup",
      nickname: "mimiermakeup",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5e504aeff1fb72f159bcfec47dc7f3c7~c5_100x100.jpeg?x-expires=1643040000&x-signature=nbiFELa2xUpAhavPFSrm7KZc61g%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5e504aeff1fb72f159bcfec47dc7f3c7~c5_720x720.jpeg?x-expires=1643040000&x-signature=aUphLsgv5npL0an%2B452XvO60O6o%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5e504aeff1fb72f159bcfec47dc7f3c7~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=pC10Ij605gWkpu3s17QCS2cbAhY%3D",
      signature: "business: makeupmimier@gmail.com\nInstagram: Mimiermakeup\n\u{1F1ED}\u{1F1F7}",
      verified: false,
      secUid: "MS4wLjABAAAAA8PRBKeLvyo9Hnm8YhP_1eVqsEDF0K9pGji3a4bRV0o6kJGpScEeFQjVrmLsVEjt",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7015732867074640646",
      title: "original sound",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7015732954739657478.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/157ef8452b39b75dba2b661ed35ba62a~c5_100x100.jpeg?x-expires=1643040000&x-signature=LGrqsnVIum3oEwk6o3GEdpIplLY%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/157ef8452b39b75dba2b661ed35ba62a~c5_720x720.jpeg?x-expires=1643040000&x-signature=dVIRUTQ5aUD%2BCi0bmlQjyJGuTZc%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/157ef8452b39b75dba2b661ed35ba62a~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=AnJpId4u%2B3GcnI7JJvZuVjhNVWg%3D",
      authorName: "Ian Asher",
      original: true,
      duration: 13,
      album: ""
    },
    stats: {
      diggCount: 18e5,
      shareCount: 3966,
      commentCount: 6050,
      playCount: 83e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 9,
        end: 19,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "1925750",
        isCommerce: false,
        userUniqueId: "nicole.03",
        secUid: "MS4wLjABAAAAcf62zWGVmf1MUwsIKQv9a0RFLqzmLdKYoFgxPotJPpE",
        subType: 2
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    effectStickers: [
      {
        name: "Langsam heranzoomen",
        ID: "1114882"
      }
    ],
    authorStats: {
      followingCount: 576,
      followerCount: 124e5,
      heartCount: 5566e5,
      videoCount: 483,
      diggCount: 10500,
      heart: 5566e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7043741279192222982",
    desc: "Nur noch 16 Tage \u{1F62C} und mache bei der Challenge mit \u{1F57A}\u2764\uFE0F, denn es macht Spa\xDF #bovann @khaby.lame",
    createTime: 1639998818,
    video: {
      id: "7043741279192222982",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/95d1a7060b4c4632a2074379ccc44523~tplv-dmt-logom:tos-useast2a-v-0068/04994158bac547ceb46f4a8f7d4831d1.image?x-expires=1642975200&x-signature=5%2BWT48SXoNx%2FV%2F9rD8JoNpsDiyU%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bc0a2ad1f1e944d99775875cc59a5248_1639998818?x-expires=1642975200&x-signature=MXWDdCi35pahKcJ5vMsLkXNBMSo%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/11cf8a0ab5574853803ab4af34bcb6b3_1639998819?x-expires=1642975200&x-signature=J%2Fs5kMx4BpnOw1KxyjXdArdVul4%3D",
      playAddr: "https://v16-webapp.tiktok.com/75c6811f4f925d75c6a3e69ca5e845e9/61eddd56/video/tos/useast2a/tos-useast2a-pve-0068/7fbb5f558c364bf68bc7a7bfa04ecce2/?a=1988&br=2682&bt=1341&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajo5cGk6Zm85OjMzNzczM0ApNDxpZjY3aWQ8NzU1Omg0OGdnMGNxcjRfXi1gLS1kMTZzczRhXy5eMV9jYC8xXjEyNi06Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/75c6811f4f925d75c6a3e69ca5e845e9/61eddd56/video/tos/useast2a/tos-useast2a-pve-0068/7fbb5f558c364bf68bc7a7bfa04ecce2/?a=1988&br=2682&bt=1341&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajo5cGk6Zm85OjMzNzczM0ApNDxpZjY3aWQ8NzU1Omg0OGdnMGNxcjRfXi1gLS1kMTZzczRhXy5eMV9jYC8xXjEyNi06Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/bc0a2ad1f1e944d99775875cc59a5248_1639998818~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=XKXPOT9cIIpCXHCsyq%2FsZarJukU%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/bc0a2ad1f1e944d99775875cc59a5248_1639998818~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=sulPhJ73z9pW3rgKrn%2B6Xr7LT2o%3D"
      ],
      reflowCover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/b6f4b5fb6315a9e1de4809bbc82daeda?x-expires=1642975200&x-signature=rHpDxJ%2BGAgd22SAiO1de3c6yu3g%3D",
      bitrate: 1373769,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6651570163232980998",
      uniqueId: "bovann",
      nickname: "Bovann Musik",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2a72eaf8db1630600b4b474271d0b343~c5_100x100.jpeg?x-expires=1643040000&x-signature=lfrKIo6BHwEpdvqPZ%2BjC5JKqBeY%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2a72eaf8db1630600b4b474271d0b343~c5_720x720.jpeg?x-expires=1643040000&x-signature=5GlLULTTIY%2Fuwvc2CWX7m0shEoM%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2a72eaf8db1630600b4b474271d0b343~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=oMa5TTLhKMbLrlksEZwUq3eDNTE%3D",
      signature: "Lass uns bitte helfen\n\u{1F447}\u{1F3FB}HIER DER LINK\u{1F447}\u{1F3FB}",
      verified: true,
      secUid: "MS4wLjABAAAAZrr52yUQM0zEKfrmAb9zlBKKCn8X2denjFYgVxEMfmt4ELRC801e3vFoIdGmB36e",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7038648527379024645",
      title: "Tanz wie Khaby Lame",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7038648531729091334.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2a72eaf8db1630600b4b474271d0b343~c5_100x100.jpeg?x-expires=1643040000&x-signature=lfrKIo6BHwEpdvqPZ%2BjC5JKqBeY%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2a72eaf8db1630600b4b474271d0b343~c5_720x720.jpeg?x-expires=1643040000&x-signature=5GlLULTTIY%2Fuwvc2CWX7m0shEoM%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2a72eaf8db1630600b4b474271d0b343~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=oMa5TTLhKMbLrlksEZwUq3eDNTE%3D",
      authorName: "Bovann Musik",
      original: true,
      duration: 15,
      album: ""
    },
    challenges: [
      {
        id: "1649700336485377",
        title: "bovann",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 348700,
      shareCount: 4111,
      commentCount: 3767,
      playCount: 48e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 85,
        end: 96,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "127905465618821121",
        isCommerce: false,
        userUniqueId: "khaby.lame",
        secUid: "MS4wLjABAAAAwAg0rSzO65WQfz4RzQgGv2Xdv108BgPXhRrrmNVIHQZ9PO8-flwwRtEppYTS0OjA",
        subType: 0
      },
      {
        awemeId: "",
        start: 77,
        end: 84,
        hashtagName: "bovann",
        hashtagId: "1649700336485377",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 2395,
      followerCount: 17e5,
      heartCount: 684e5,
      videoCount: 2704,
      diggCount: 27200,
      heart: 684e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Polizei in Bremen so: \u{1F57A}\u{1F970}",
          "Tag 3 von 19 bis ich Kahby Lame treffe und der Song rauskommt",
          "07.01 um 00:00 Uhr"
        ]
      },
      {
        stickerType: 9,
        stickerText: [
          "Tag 3/19"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7054560663871573254",
    desc: "Passt auf euch auch Freunde..\u{1F622}\u{1F622} #trending #startseite #goviralgo #fyp\u30B7 #viral",
    createTime: 1642517901,
    video: {
      id: "7054560663871573254",
      height: 1024,
      width: 576,
      duration: 68,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8fd1cecee8904dab92b8912e598b4882?x-expires=1642975200&x-signature=KPjTD64itKURzPDZxkM57%2BDtuxs%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5cdf80798c5642edba20c8feaad34f4c_1642517902?x-expires=1642975200&x-signature=8w3ui0vMI7%2FYSRto5Vj9tjX6q9I%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/330af036d16b4229b71c3c943857634e_1642517903?x-expires=1642975200&x-signature=XRf2Exgc5UQbKc48yNy1Qek4IBU%3D",
      playAddr: "https://v16-webapp.tiktok.com/9b4c713389a2a1ec4e6c19f82aabfbbc/61eddd8b/video/tos/useast2a/tos-useast2a-pve-0068/0d972254e42b4b6eb88a79f8c2d0e3c0/?a=1988&br=2864&bt=1432&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl3ZzU6ZjxnOjMzNzczM0ApOTg5NDplZTs2N2lmNzhlM2c0Y2YzcjRfXmdgLS1kMTZzczYtLjM1NGM0XzViMDZeNjM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/9b4c713389a2a1ec4e6c19f82aabfbbc/61eddd8b/video/tos/useast2a/tos-useast2a-pve-0068/0d972254e42b4b6eb88a79f8c2d0e3c0/?a=1988&br=2864&bt=1432&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl3ZzU6ZjxnOjMzNzczM0ApOTg5NDplZTs2N2lmNzhlM2c0Y2YzcjRfXmdgLS1kMTZzczYtLjM1NGM0XzViMDZeNjM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/5cdf80798c5642edba20c8feaad34f4c_1642517902~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=b9lr9LpWrLaJn%2B5gAoPGF7sy7WY%3D",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/5cdf80798c5642edba20c8feaad34f4c_1642517902~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=JUs1VsmDKPowJRJSPnZ9b7%2BuQFU%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5353b923c58abbe056a714bd610dddc8?x-expires=1642975200&x-signature=aIQ%2F1ALciNc8LWnA1fSBI4wQQGI%3D",
      bitrate: 1467018,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6810855425619411974",
      uniqueId: "shpe1im",
      nickname: "\u{1F1E6}\u{1F1F1}",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fc889775da3b63bb9b3d7ded7f5b95eb~c5_100x100.jpeg?x-expires=1643040000&x-signature=1GRMVL7LDC%2FRX6vad7muUObkZQM%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fc889775da3b63bb9b3d7ded7f5b95eb~c5_720x720.jpeg?x-expires=1643040000&x-signature=gpnW0mmeLvALzvmNHm4tq1aAIQk%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fc889775da3b63bb9b3d7ded7f5b95eb~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=NFmhiRaCHoRNnwFlvlFJxogyf1w%3D",
      signature: "Folg mir auf Instagram \u2934\uFE0F\nMacht das \u2795 weg \u2764\uFE0F\u200D\u{1F525}\nSnap: Kingshpetiim",
      verified: false,
      secUid: "MS4wLjABAAAAWi5tgAYJan4a9eHs4wpW4kP-UozT3eb3mhPGCcJZY3lPWiF84oodtWshoub8UTTA",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6808589859721054216",
      title: "Tell Me Why I'm Waiting",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/4d3bf39e52f64fed83dbb40dbd71d963",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/38b85cb04bda4b689a2fc83f7bb5b592~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/38b85cb04bda4b689a2fc83f7bb5b592~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/38b85cb04bda4b689a2fc83f7bb5b592~c5_720x720.jpeg",
      authorName: "Timmies/Shiloh",
      original: false,
      duration: 123,
      album: ""
    },
    challenges: [
      {
        id: "20105",
        title: "trending",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2516144",
        title: "startseite",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "44969917",
        title: "goviralgo",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1637342470396934",
        title: "fyp\u30B7",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "20884",
        title: "viral",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 59100,
      shareCount: 172,
      commentCount: 679,
      playCount: 463600
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 34,
        end: 43,
        hashtagName: "trending",
        hashtagId: "20105",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 44,
        end: 55,
        hashtagName: "startseite",
        hashtagId: "2516144",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 66,
        hashtagName: "goviralgo",
        hashtagId: "44969917",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 67,
        end: 72,
        hashtagName: "fyp\u30B7",
        hashtagId: "1637342470396934",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 73,
        end: 79,
        hashtagName: "viral",
        hashtagId: "20884",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    effectStickers: [
      {
        name: "Greenscreen-Video",
        ID: "459294"
      }
    ],
    authorStats: {
      followingCount: 86,
      followerCount: 840500,
      heartCount: 314e5,
      videoCount: 1045,
      diggCount: 7165,
      heart: 314e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "20 J\xE4hriger muss in den Kn@st f\xFCr 4 Jahre\u2026\u{1F622}\u{1F622}"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7043420640736546049",
    desc: "Inst: kikakim\u{1F90D}",
    createTime: 1639924162,
    video: {
      id: "7043420640736546049",
      height: 960,
      width: 540,
      duration: 11,
      ratio: "720p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1099d0935ffa4faba10ef58965cbf987_1639924163?x-expires=1642975200&x-signature=ywouHfzfa1ZA0JbCXgxv71snbxA%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/a3f288bf49fc4d9398a465ce55d6c1b6_1639924163?x-expires=1642975200&x-signature=kqvELpHbCxacqgMmv98CcoMofKo%3D",
      dynamicCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/129a914c12364af696e72f659183d5d0_1639924164?x-expires=1642975200&x-signature=gWOfh0ekovY0Al6cJ3%2FwDt9C6WY%3D",
      playAddr: "https://v16-webapp.tiktok.com/1ec2bc560b6e86ec5150610415b22809/61eddd52/video/tos/alisg/tos-alisg-pve-0037c001/1d4bc592fbcc4c3fa52628e0e167619c/?a=1988&br=3538&bt=1769&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzprcTU6ZmhuOTMzODczNEApMzdoOTZoOTs2NzYzOzU8Z2cuajUwcjRfMHNgLS1kMS1zczYuMF42Nl8wLS0tMDVjYi86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/1ec2bc560b6e86ec5150610415b22809/61eddd52/video/tos/alisg/tos-alisg-pve-0037c001/1d4bc592fbcc4c3fa52628e0e167619c/?a=1988&br=3538&bt=1769&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzprcTU6ZmhuOTMzODczNEApMzdoOTZoOTs2NzYzOzU8Z2cuajUwcjRfMHNgLS1kMS1zczYuMF42Nl8wLS0tMDVjYi86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/a3f288bf49fc4d9398a465ce55d6c1b6_1639924163~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=wjJy9YY2fN3NaM%2Fi99%2FVMzG7OIw%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/a3f288bf49fc4d9398a465ce55d6c1b6_1639924163~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=ztTHz%2Fi8%2BddGjEr2N6Cij9BzqpU%3D"
      ],
      reflowCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/1099d0935ffa4faba10ef58965cbf987_1639924163?x-expires=1642975200&x-signature=ywouHfzfa1ZA0JbCXgxv71snbxA%3D",
      bitrate: 1811825,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6785823001336415238",
      uniqueId: "kikakiim",
      nickname: "Kika Kim",
      avatarThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=vTKxIj4i3VDJ7ngFEMkAyzY31dM%3D",
      avatarMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=4hnijvPmvdC4%2BIFL3iESdWdvlfM%3D",
      avatarLarger: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1643040000&x-signature=6EEg%2BGMXtVtBCeQ9kVaJ4SAD62M%3D",
      signature: "Inst: kikakim\u{1F90D}\n@xoteam\nCooperation: kikakim.booking@gmail.com",
      verified: false,
      secUid: "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7032390075800963073",
      title: "Christmas EveL",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/b4c25cff4d984a919d64334b2be52336",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a5aba563f97e4880a2219f2884cf7f96~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a5aba563f97e4880a2219f2884cf7f96~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a5aba563f97e4880a2219f2884cf7f96~c5_720x720.jpeg",
      authorName: "Stray Kids",
      original: false,
      duration: 60,
      album: "Christmas EveL"
    },
    challenges: [
      {
        id: "44779879",
        title: "christmasevel",
        desc: "\u{1F384} Qu\u1EA9y tr\xEAn giai \u0111i\u1EC7u Christmas EveL si\xEAu hot mang s\u1EAFc m\xE0u Gi\xE1ng sinh 2021 c\u1EF1c huy\u1EC1n b\xED v\xE0 \u0111\u1ED9c l\u1EA1! Th\xEAm n\xE9t tinh ngh\u1ECBch cho \u0111i\u1EC7u nh\u1EA3y c\xF9ng ng\u01B0\u1EDDi b\u1EA1n y\xEAu tinh si\xEAu \u0111\xE1ng y\xEAu t\u1EEB effect Elf Friend \u{1F9DD}, ho\u1EB7c t\u0103ng t\xEDnh h\u1EA5p d\u1EABn cho video v\u1EDBi nh\u1EEFng \xE1nh \u0111\xE8n flash cu\u1ED1n h\xFAt t\u1EEB CapCut template \u{1F4A5}\n\nCapCut Template: https://www.capcut.net/sharevideo?template_id=7041749142149926145&amp;language=en&amp;region=VN",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/e2ce5fd6b83e3c0fdf805b0386a10513",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/e2ce5fd6b83e3c0fdf805b0386a10513",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/e2ce5fd6b83e3c0fdf805b0386a10513",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 14e5,
      shareCount: 10400,
      commentCount: 9222,
      playCount: 125e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 106,
      followerCount: 274e5,
      heartCount: 7223e5,
      videoCount: 921,
      diggCount: 7071,
      heart: 7223e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7056105350960844038",
    desc: "#mother #ja #angry #crazy #kingloui23 #g\xF6nntmir",
    createTime: 1642877551,
    video: {
      id: "7056105350960844038",
      height: 1024,
      width: 576,
      duration: 10,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4d9d9ee4b1bb492b84c0130467c41ad6?x-expires=1642975200&x-signature=dBT1OE9KarE1ZjmCjIhZ1EmNs5U%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/da0f22a717434f32888e0e31354ea1d0_1642877552?x-expires=1642975200&x-signature=XJaXtxsLq7iOb3k%2Fb6QlFzvvMT8%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/05b4225004c6459184b88123919dfa8e_1642877553?x-expires=1642975200&x-signature=rIBn5AQHuQda3Zf%2BjOZSUfQ1Duo%3D",
      playAddr: "https://v16-webapp.tiktok.com/dd3a3c019130e26fcb205146906f7223/61eddd51/video/tos/useast2a/tos-useast2a-ve-0068c003/477ed7b92f9043628d46e1a1cbb4127a/?a=1988&br=1622&bt=811&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZraTg6ZnM4OjMzNzczM0ApNztpNDU0NGQ0N2g6ZjY1aWcxNjEvcjRfMWpgLS1kMTZzc2IuMTMzYS41NjFjMi1eMV86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/dd3a3c019130e26fcb205146906f7223/61eddd51/video/tos/useast2a/tos-useast2a-ve-0068c003/477ed7b92f9043628d46e1a1cbb4127a/?a=1988&br=1622&bt=811&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZraTg6ZnM4OjMzNzczM0ApNztpNDU0NGQ0N2g6ZjY1aWcxNjEvcjRfMWpgLS1kMTZzc2IuMTMzYS41NjFjMi1eMV86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/da0f22a717434f32888e0e31354ea1d0_1642877552~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=UR52Hd68b8V5HxtZZQyHOeq7FR4%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/da0f22a717434f32888e0e31354ea1d0_1642877552~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=OCIaPK1E0gMOE%2BonzRMW%2Bpa3zPQ%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/fbc0142a8e8f7ad67bf27722176652a6?x-expires=1642975200&x-signature=xizLumAbnv%2BzwuyL%2BQPWa1zedgc%3D",
      bitrate: 831011,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6534345858895336448",
      uniqueId: "kingloui23",
      nickname: "King Louie",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dcfbd1c57962804632b3c71e03ef27bf~c5_100x100.jpeg?x-expires=1643040000&x-signature=mtTtONQKB1PyoOHyyN23W3Y1iMY%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dcfbd1c57962804632b3c71e03ef27bf~c5_720x720.jpeg?x-expires=1643040000&x-signature=yMQc%2B7JW88kSF7T7lJh9fgyDZbg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dcfbd1c57962804632b3c71e03ef27bf~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=Nxkza1LLwe9R2bvg3tVSbAF3eok%3D",
      signature: "Kingloui.23 ->Instagram \u{1F4F8}\nE-Mail \u{1F48C} management@midaro-marke\nAman D.Ruffy \u{1F47B}",
      verified: false,
      secUid: "MS4wLjABAAAAHmgs8n8zvP-G9IdI5DuWJmr-QYEF6COpIYjLA-5auuTaJ2k40cAHW8RcSCKUw0ZT",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6936517607080381190",
      title: "Originalton",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6936517679607991046.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03af9696d4a62a0d74a4f9536db40df3~c5_100x100.jpeg?x-expires=1643040000&x-signature=y8Yv%2FtDxSTsKOYlZrUaNk6I1QSc%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03af9696d4a62a0d74a4f9536db40df3~c5_720x720.jpeg?x-expires=1643040000&x-signature=ldyk%2F8BX4KjCHqcLPTrGqrhNPUo%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03af9696d4a62a0d74a4f9536db40df3~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=vNLlwh8xm1OiX%2Bj79pXCyxdAQL4%3D",
      authorName: "Jake Lurks",
      original: true,
      duration: 10,
      album: ""
    },
    challenges: [
      {
        id: "9820",
        title: "mother",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "24476",
        title: "ja",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1618847894516741",
        title: "angry",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5451",
        title: "crazy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1688612649042946",
        title: "kingloui23",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1601366267082757",
        title: "g\xF6nntmir",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 46200,
      shareCount: 528,
      commentCount: 250,
      playCount: 296e3
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 0,
        end: 7,
        hashtagName: "mother",
        hashtagId: "9820",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 8,
        end: 11,
        hashtagName: "ja",
        hashtagId: "24476",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 12,
        end: 18,
        hashtagName: "angry",
        hashtagId: "1618847894516741",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 19,
        end: 25,
        hashtagName: "crazy",
        hashtagId: "5451",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 26,
        end: 37,
        hashtagName: "kingloui23",
        hashtagId: "1688612649042946",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 38,
        end: 47,
        hashtagName: "g\xF6nntmir",
        hashtagId: "1601366267082757",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 420,
      followerCount: 32e5,
      heartCount: 137e6,
      videoCount: 1243,
      diggCount: 15200,
      heart: 137e6
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Wenn meine Mutter mich ruft "
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7044190399333682437",
    desc: "@lululu68 antworten DAS HABEN SO VIELE GESCHRIEBEN LOL\u{1F921} (Insta: emirbyr)",
    createTime: 1640103386,
    video: {
      id: "7044190399333682437",
      height: 1024,
      width: 576,
      duration: 69,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7aa72c99723d4817a3a214d53659e684?x-expires=1642975200&x-signature=0Ws2DDLh%2FQnxVJfufuSfeJuiPWU%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/27ae460d7b414e05836ed779133f9804_1640103389?x-expires=1642975200&x-signature=zrmVGUGV2kwcaVk84Iew%2BP1ZEG8%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/281b122c36f545658404effcdf48ddc9_1640103389?x-expires=1642975200&x-signature=XJsSXB96jeRCWwItIXhxcrcblHE%3D",
      playAddr: "https://v16-webapp.tiktok.com/29fcbb7e512e8134592232af467a73ca/61eddd8b/video/tos/useast2a/tos-useast2a-ve-0068c003/4491deeb2a374bab97e473ffe0bad839/?a=1988&br=2232&bt=1116&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhqajg6ZmR5OjMzNzczM0ApPDw5Z2czOmRlNzg8OmY4ZmdjYi1ucjQwby1gLS1kMTZzc2EyYWIzNjUxXjI1YjUyYmE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/29fcbb7e512e8134592232af467a73ca/61eddd8b/video/tos/useast2a/tos-useast2a-ve-0068c003/4491deeb2a374bab97e473ffe0bad839/?a=1988&br=2232&bt=1116&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhqajg6ZmR5OjMzNzczM0ApPDw5Z2czOmRlNzg8OmY4ZmdjYi1ucjQwby1gLS1kMTZzc2EyYWIzNjUxXjI1YjUyYmE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/27ae460d7b414e05836ed779133f9804_1640103389~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=e0QbqlrCu%2F2rJz551IRCjy7VwvM%3D",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/27ae460d7b414e05836ed779133f9804_1640103389~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=TJhvRUOVkCnyhqa0JMKomG%2FAeH0%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ffbe5f463fde30e8c3313ab3c9052f30?x-expires=1642975200&x-signature=x3JDFOb8HtzEW03k6P%2FvmH9rBYM%3D",
      bitrate: 1142932,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6699921606704448517",
      uniqueId: "emiirbayrak",
      nickname: "\u26A1\uFE0FEMIR BAYRAK\u26A1\uFE0F",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1644765630558213~c5_100x100.jpeg?x-expires=1643040000&x-signature=Y4FHGvOt0ik2NRJCM5cTo%2BquRnQ%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1644765630558213~c5_720x720.jpeg?x-expires=1643040000&x-signature=5LoAmxKmTNOnNfznFdJzurcsWTA%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1644765630558213~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=aCvsf43w90Au21IV%2FFKqHMhlW9I%3D",
      signature: "Insta: emirbyr \n\u{1F4E4}emir@moonvibe.com",
      verified: true,
      secUid: "MS4wLjABAAAAmSwqdn7L-roKUufl4bvTt4JVhOKGSbCShrF5rcmn4ePWno2KAM5hCEXFd5abXIkD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6781097175662200834",
      title: "Act 2: In the Hall of the Mountain King",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/96fe7fb1e01649fba8288f59c01e96c5",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/88b2379bcf4049d3879a95cd6e3ace18~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/88b2379bcf4049d3879a95cd6e3ace18~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/88b2379bcf4049d3879a95cd6e3ace18~c5_720x720.jpeg",
      authorName: "Edvard Grieg",
      original: false,
      duration: 60,
      album: "Peer Gynt (Incidental Music)"
    },
    stats: {
      diggCount: 546700,
      shareCount: 555,
      commentCount: 5527,
      playCount: 41e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 0,
        end: 9,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6990468061284746245",
        isCommerce: false,
        userUniqueId: "lululu68",
        secUid: "MS4wLjABAAAAPi4aarJ-u8YIuMjO2txEUOscoAlgYb8PNfvJoMgW2Rok6uabcnx8w2XAHwWLpEWJ",
        subType: 2
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 895,
      followerCount: 48e5,
      heartCount: 5734e5,
      videoCount: 2480,
      diggCount: 9992,
      heart: 5734e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7047320993186024706",
    desc: "\uCDA4\uC740 \uC774\uB807\uAC8C \uCD94\uB294\uAC70\uC57C. @sia_jiwoo @maroon456 #\uCD94\uCC9C #fyp #viral",
    createTime: 1640832285,
    video: {
      id: "7047320993186024706",
      height: 1024,
      width: 576,
      duration: 11,
      ratio: "720p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9a2bb06059474a2ab2ef568d45d89c25_1640832287?x-expires=1642975200&x-signature=4Urac42qQLdDWWE2oSDVOm2JSvA%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/d86a1013ce8546d6b8d33d92f2231745_1640832286?x-expires=1642975200&x-signature=8yHpyprRdrC9eOUctomZ%2FAUuHXQ%3D",
      dynamicCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/8d720c1a53564aa4bf267b8b962ba035_1640832287?x-expires=1642975200&x-signature=v694Ce9NV84%2FnX7E21YbKtW2F9I%3D",
      playAddr: "https://v16-webapp.tiktok.com/ae70a0e47c0837f7dcfc0cb988a90bfb/61eddd52/video/tos/alisg/tos-alisg-pve-0037/f5e8805b7b2f4984afc0dff83c1daa69/?a=1988&br=3904&bt=1952&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2UzPDQ6ZjhrOjMzODgzNEApaWU7Ojw8ZmVpNzRkNTo8aGcxcmhzcjRnbjNgLS1kLy1zc2FfLTA2MzRjNC0wYGE1LzY6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/ae70a0e47c0837f7dcfc0cb988a90bfb/61eddd52/video/tos/alisg/tos-alisg-pve-0037/f5e8805b7b2f4984afc0dff83c1daa69/?a=1988&br=3904&bt=1952&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2UzPDQ6ZjhrOjMzODgzNEApaWU7Ojw8ZmVpNzRkNTo8aGcxcmhzcjRnbjNgLS1kLy1zc2FfLTA2MzRjNC0wYGE1LzY6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/d86a1013ce8546d6b8d33d92f2231745_1640832286~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=Rgoc9Zqoz0OlbWfG8bVHe7Mzjgw%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/d86a1013ce8546d6b8d33d92f2231745_1640832286~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=T%2FH4gG0%2BcSketcNqoYWxpxxhAgI%3D"
      ],
      reflowCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9a2bb06059474a2ab2ef568d45d89c25_1640832287?x-expires=1642975200&x-signature=4Urac42qQLdDWWE2oSDVOm2JSvA%3D",
      bitrate: 1999842,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6869286989888406529",
      uniqueId: "ox_zung",
      nickname: "\uC6D0\uC815\uB9E8 WonJeong",
      avatarThumb: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7b294b686fbf90c487b11d17998ee1e5.jpeg?x-expires=1643040000&x-signature=D10DyKse5vNUa2sUNO70f6yaWmQ%3D",
      avatarMedium: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7b294b686fbf90c487b11d17998ee1e5.jpeg?x-expires=1643040000&x-signature=JEw9GqSVoB5xfbX6JdljUPnHAWM%3D",
      avatarLarger: "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/7b294b686fbf90c487b11d17998ee1e5.jpeg?x-expires=1643040000&x-signature=bDm54X3CUAyn%2B0JuOOA9IPqe6YE%3D",
      signature: "\u{1F1F0}\u{1F1F7} Korean \u{1F1F0}\u{1F1F7}\n \u25BC MAMAAAA \u25BC\nbusiness: oxzung@kakao.com\n\u{1F53D} MY YOUTUBE \u{1F53D}",
      verified: true,
      secUid: "MS4wLjABAAAAA3l9TD8oUjg-xkY7IzsZhJzfq97vCBvWjgjeadSIGy7hk9b-nAIstNXkOWYTa-Ts",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7031569411240626949",
      title: "Bananza belly dancer",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7031569464059611909.mp3",
      coverThumb: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/74ff87fdc35938f75708374773bc49f6~c5_100x100.jpeg?x-expires=1643040000&x-signature=K9QXYg8WhDbh7w2x%2Ff9I50s8D5U%3D",
      coverMedium: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/74ff87fdc35938f75708374773bc49f6~c5_720x720.jpeg?x-expires=1643040000&x-signature=dWZayxgXombPQf1cKZfCO3B6ukQ%3D",
      coverLarge: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/74ff87fdc35938f75708374773bc49f6~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=3oT%2BjickLgkAe0FCHzYz0j%2F7jO4%3D",
      authorName: "koleeditss",
      original: true,
      duration: 11,
      album: ""
    },
    challenges: [
      {
        id: "30513583",
        title: "\uCD94\uCC9C",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "229207",
        title: "fyp",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "20884",
        title: "viral",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 26e5,
      shareCount: 9667,
      commentCount: 17900,
      playCount: 241e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 13,
        end: 23,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6666286224317808642",
        isCommerce: false,
        userUniqueId: "sia_jiwoo",
        secUid: "MS4wLjABAAAAbox4keFFnV55yBvMwEf99WjvHhU-ukNiEWT6mHpOIJoJ2fOhAabdtb1e4Aor-qDX",
        subType: 0
      },
      {
        awemeId: "",
        start: 24,
        end: 34,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6657795475196837889",
        isCommerce: false,
        userUniqueId: "maroon456",
        secUid: "MS4wLjABAAAAoi5InaBvAhi8f_nVEK7tHVs5a8KwQxr2fU0hZYLxkSz1-15GbAWJruewKeuFHL7S",
        subType: 0
      },
      {
        awemeId: "",
        start: 35,
        end: 38,
        hashtagName: "\uCD94\uCC9C",
        hashtagId: "30513583",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 39,
        end: 43,
        hashtagName: "fyp",
        hashtagId: "229207",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 44,
        end: 50,
        hashtagName: "viral",
        hashtagId: "20884",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 216,
      followerCount: 385e5,
      heartCount: 1e9,
      videoCount: 892,
      diggCount: 5456,
      heart: 1e9
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7026831797736459525",
    desc: "@pipilito_kim antworten Nudereste\u{1F631} #resteverwertung #schnellerezepte #bollekochteinfach #asianudeln #fy",
    createTime: 1636061771,
    video: {
      id: "7026831797736459525",
      height: 1024,
      width: 576,
      duration: 162,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/befc5f2eede140bea77fd88ab15129ec~tplv-dmt-logom:tos-maliva-p-0000/2528873b51294d79ba82ff01754f48ba.image?x-expires=1642975200&x-signature=61%2Fs3dyOIWNUvLQsP4pMszVr5oU%3D",
      originCover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/52de7e01a1d74500b544e50c3cfc103a_1636061773?x-expires=1642975200&x-signature=81xgggGhezRFrS76sdD1T3bmxR0%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/59b018ccf12e4168a1a14c528a944d46_1636061773?x-expires=1642975200&x-signature=dmrqFad2SCLtIbdfdmR3sVk4da8%3D",
      playAddr: "https://v16-webapp.tiktok.com/326400e81c4c62366b70b127c4bb7f7a/61eddde9/video/tos/useast2a/tos-useast2a-ve-0068c003/e702dfa2a86d48f79c85da74f74c8048/?a=1988&br=2504&bt=1252&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2xlOWk6Zmk4OTMzNzczM0ApOGc3aTU7ZmU7NzU5PGk1ZGdjamtvcjRfLi9gLS1kMTZzczM2MS42LWJfL180LmMzMF46Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/326400e81c4c62366b70b127c4bb7f7a/61eddde9/video/tos/useast2a/tos-useast2a-ve-0068c003/e702dfa2a86d48f79c85da74f74c8048/?a=1988&br=2504&bt=1252&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2xlOWk6Zmk4OTMzNzczM0ApOGc3aTU7ZmU7NzU5PGk1ZGdjamtvcjRfLi9gLS1kMTZzczM2MS42LWJfL180LmMzMF46Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/52de7e01a1d74500b544e50c3cfc103a_1636061773~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=T677b2QT6QpkzoTayC7ibtzYPRg%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/52de7e01a1d74500b544e50c3cfc103a_1636061773~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=3pbeTjXn%2FF3JLa3uMLJdjzoPrnI%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4dc6ac518b1c31fb5aa728c77c877d0d?x-expires=1642975200&x-signature=MJyeNt1Y6g3w4d8G2x9QVAC3dek%3D",
      bitrate: 1283008,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6679848421681415173",
      uniqueId: "selfmade_lebensfreude",
      nickname: "Doris Bolle",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/e514df86babf818917fe8b71054a9daa~c5_100x100.jpeg?x-expires=1643040000&x-signature=bW64pLZwPXSCZ1ffkurj5nRocjo%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/e514df86babf818917fe8b71054a9daa~c5_720x720.jpeg?x-expires=1643040000&x-signature=riuyMcnJmQBTIX0ha1Sh%2BKIj94E%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/e514df86babf818917fe8b71054a9daa~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=MtooTLJD1Jav9wb78OWaNXlm5ss%3D",
      signature: "Postfach 13 29 82256 F\xFCrstenfeldbruck \n#bollekochteinfach #bollebackteinfach #fy",
      verified: false,
      secUid: "MS4wLjABAAAAunGtiE4GoOZixrp7HT2J8Ivh5phEkcuBAgdvklOycYM2dsF-nY_-rhCh8zVoHZH9",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6895760150355773441",
      title: "Fun guitar songs for Youtube, commercials, etc.(899019)",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/4500c89c77154f4688efdb15405400cd",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/43faa110cb7545508bcb8448e005da2d~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/43faa110cb7545508bcb8448e005da2d~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/43faa110cb7545508bcb8448e005da2d~c5_720x720.jpeg",
      authorName: "Lyrebirds music",
      original: false,
      duration: 172,
      album: ""
    },
    challenges: [
      {
        id: "55522156",
        title: "resteverwertung",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1650358012225542",
        title: "schnellerezepte",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1688812317014017",
        title: "bollekochteinfach",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "7124130",
        title: "asianudeln",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "153828",
        title: "fy",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 228e3,
      shareCount: 2237,
      commentCount: 2169,
      playCount: 28e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 0,
        end: 13,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6850115866078004229",
        isCommerce: false,
        userUniqueId: "pipilito_kim",
        secUid: "MS4wLjABAAAALMwxDG7gerbDCOA_oz2mn-FNOKhDpLhnMWlhmkz8NI4wHyNC4d8PyBKlOUh-JTbq",
        subType: 2
      },
      {
        awemeId: "",
        start: 36,
        end: 52,
        hashtagName: "resteverwertung",
        hashtagId: "55522156",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 53,
        end: 69,
        hashtagName: "schnellerezepte",
        hashtagId: "1650358012225542",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 70,
        end: 88,
        hashtagName: "bollekochteinfach",
        hashtagId: "1688812317014017",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 100,
        hashtagName: "asianudeln",
        hashtagId: "7124130",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 101,
        end: 104,
        hashtagName: "fy",
        hashtagId: "153828",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 326,
      followerCount: 249800,
      heartCount: 74e5,
      videoCount: 1003,
      diggCount: 17500,
      heart: 74e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "Welche Sch\xFCssel w\xE4re heute Deine?"
        ]
      },
      {
        stickerType: 9,
        stickerText: [
          "Asia Nudeln"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7043079009894173957",
    desc: "Lederhosen boy #Germany #elevator #fyp",
    createTime: 1639844620,
    video: {
      id: "7043079009894173957",
      height: 1024,
      width: 576,
      duration: 9,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f12d125adeff4a8a9acacf26713f82ff?x-expires=1642975200&x-signature=Mjy4JWvnXZUy6WKiPJj56%2FvTRXY%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4e41cfc3191246999559604ab511343a_1639844621?x-expires=1642975200&x-signature=CONKDPBXnVRZdQBow3lYRcgwU7Q%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3a32663350f64086ad16a5ca0475518c_1639844621?x-expires=1642975200&x-signature=5s0bXm3eztAu8Zmk6O3yjE9fldw%3D",
      playAddr: "https://v16-webapp.tiktok.com/2ab7eb35be3910dd2184dd562477f724/61eddd50/video/tos/useast2a/tos-useast2a-ve-0068c002/d09250ff7a6e439b8b876131b941be53/?a=1988&br=1970&bt=985&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajVrOzU6ZjQzOTMzNzczM0ApNThoZTpkaTxmNzM6aGY5OGdzZmsvcjRvanNgLS1kMTZzczNgYl9iYzI1Li4uLTA1L2A6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/2ab7eb35be3910dd2184dd562477f724/61eddd50/video/tos/useast2a/tos-useast2a-ve-0068c002/d09250ff7a6e439b8b876131b941be53/?a=1988&br=1970&bt=985&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajVrOzU6ZjQzOTMzNzczM0ApNThoZTpkaTxmNzM6aGY5OGdzZmsvcjRvanNgLS1kMTZzczNgYl9iYzI1Li4uLTA1L2A6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4e41cfc3191246999559604ab511343a_1639844621~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=VHMfbHO7KKd678IdRYBJe%2F50auk%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4e41cfc3191246999559604ab511343a_1639844621~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=xfy4ezkuCMK%2BINt4WhvkHXMDTkc%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cc07887ee6b7a1c4ce2d7858ef1ea17a?x-expires=1642975200&x-signature=sIH8V%2FVtjvZzII960In%2FS9ka%2BtM%3D",
      bitrate: 1008710,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "6811772908773245958",
      uniqueId: "liamcarps",
      nickname: "Liam Carpenter",
      avatarThumb: "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-avt-0068/061b1fac65576a0597ef5da760dfb7c2~c5_100x100.jpeg?x-expires=1643040000&x-signature=CobOaaWWE23ryIcQKYUEzuTx1PA%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/061b1fac65576a0597ef5da760dfb7c2~c5_720x720.jpeg?x-expires=1643040000&x-signature=9BEXxWcuzo8a5Adf8R%2F5C2ZlEz0%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/061b1fac65576a0597ef5da760dfb7c2~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=bWIBiqD8uCINKU4ENhkHax8rXXs%3D",
      signature: "In Germany we don\u2019t say \u{1F1E9}\u{1F1EA}",
      verified: true,
      secUid: "MS4wLjABAAAAeAW7DxDgdxOHp7tD1XTkdQPk_Iy5n9TYZpDpIBwDZwWeX1Vb9rUEnY48E9jm2Ro3",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "7021382093708151557",
      title: "Up by Olly murs.",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7021382205142321925.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9c5713342c3538129a9320461caa1e88~c5_100x100.jpeg?x-expires=1643040000&x-signature=txtBymt0UXckFIh3S4eo%2F0qFvPc%3D",
      coverMedium: "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-avt-0068/9c5713342c3538129a9320461caa1e88~c5_720x720.jpeg?x-expires=1643040000&x-signature=dKU0Rb3XkjDhzf4MTjBC7mrJFw8%3D",
      coverLarge: "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-avt-0068/9c5713342c3538129a9320461caa1e88~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=WQTKoNKMnstkjJwZwW8pW5eUnSg%3D",
      authorName: "\u{1F499} Havy \u{1F499}",
      original: true,
      duration: 12,
      album: ""
    },
    challenges: [
      {
        id: "46356",
        title: "germany",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "58983",
        title: "elevator",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "229207",
        title: "fyp",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 137500,
      shareCount: 994,
      commentCount: 1489,
      playCount: 75e4
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 15,
        end: 23,
        hashtagName: "germany",
        hashtagId: "46356",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 24,
        end: 33,
        hashtagName: "elevator",
        hashtagId: "58983",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 34,
        end: 38,
        hashtagName: "fyp",
        hashtagId: "229207",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 19,
      followerCount: 910400,
      heartCount: 567e5,
      videoCount: 709,
      diggCount: 1107,
      heart: 567e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "POV: Elevators in Germany \u{1F1E9}\u{1F1EA}\u{1F6D7} "
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "7055676460891163910",
    desc: "\u201CIt\u2019s Okey to cry!\u201D Enjoy the tears \u{1F494}\u{1F494} #onepiece #fyp #foryou #anime #sad #pain",
    createTime: 1642777692,
    video: {
      id: "7055676460891163910",
      height: 1250,
      width: 576,
      duration: 61,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/74ffc6035f094e1fa52adb3cf42b69d6?x-expires=1642975200&x-signature=BtFKPjWHKg9wE7GnAKxNvH6kEgg%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/1c098b3702bc4ee084e16f954ba374f1_1642777693?x-expires=1642975200&x-signature=DPml8tUZbqXpnZpG8Am0NuoNhHk%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3d6adaf8fdb34fd381691b921768c991_1642777695?x-expires=1642975200&x-signature=Rc3OIhBa35k8bgh%2FdkfrGvIlB5c%3D",
      playAddr: "https://v16-webapp.tiktok.com/feb020fdfe9c8a15a915a17e9c51f36a/61eddd84/video/tos/useast2a/tos-useast2a-pve-0068/42cf81c0ae584f90855a560612789f7e/?a=1988&br=1190&bt=595&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ttZjs6ZmRmOjMzNzczM0ApZTU6ZmU3OWQ3N2k4OTU4NGdjLW1pcjRnbGlgLS1kMTZzczAzYjJgMTJiNDU0NDIvMF86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/feb020fdfe9c8a15a915a17e9c51f36a/61eddd84/video/tos/useast2a/tos-useast2a-pve-0068/42cf81c0ae584f90855a560612789f7e/?a=1988&br=1190&bt=595&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=202201231657110101890501580A859F81&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ttZjs6ZmRmOjMzNzczM0ApZTU6ZmU3OWQ3N2k4OTU4NGdjLW1pcjRnbGlgLS1kMTZzczAzYjJgMTJiNDU0NDIvMF86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1c098b3702bc4ee084e16f954ba374f1_1642777693~tplv-tiktok-play.jpeg?x-expires=1643558400&x-signature=JlkCcmAgdeOZnycDt8EfZSVrEjQ%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1c098b3702bc4ee084e16f954ba374f1_1642777693~tplv-tiktokx-share-play.jpeg?x-expires=1643558400&x-signature=1CxsWj%2Bv430GmghNaG6Cj0lDsGA%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/61e06840f48153db61dd0cc3cff6e7a4?x-expires=1642975200&x-signature=OfLh6J3ikJ844qa51cgGyXdFLJg%3D",
      bitrate: 609891,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "7010862579934446598",
      uniqueId: "tickle_my_picklee",
      nickname: "Tickle_My_Picklee",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7b17a1e1eb7b9b6453930ff269ba5b1f~c5_100x100.jpeg?x-expires=1643040000&x-signature=y8fZ1EllZzmZcMn3w85phaN2SYQ%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7b17a1e1eb7b9b6453930ff269ba5b1f~c5_720x720.jpeg?x-expires=1643040000&x-signature=msvNj1eTzJOe6JAEk2U%2BDpXP4O8%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7b17a1e1eb7b9b6453930ff269ba5b1f~c5_1080x1080.jpeg?x-expires=1643040000&x-signature=oHbRiEay3GMqvJZEkufLf0Pymsg%3D",
      signature: "DM in IG for any questions \u{1F920}\nAnime Merch\n( Code: Tickle For Extra 10% Off)",
      verified: false,
      secUid: "MS4wLjABAAAAPtzMvLOSUbbUx9M9XNd-YGo_7NdlMe3G-wGcqX0eQdUTMkvyqZlVnEglsVq-EsbE",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6987864747395861253",
      title: "Taca a Xereca pra Mim",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/898aee75dd45407b84be7be94c81b9d5",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/17e9e3400f6e4130bde19967439bc620~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/17e9e3400f6e4130bde19967439bc620~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/17e9e3400f6e4130bde19967439bc620~c5_720x720.jpeg",
      authorName: "MC Kaique da VP",
      original: false,
      duration: 13,
      album: "Taca a Xereca pra Mim"
    },
    challenges: [
      {
        id: "139663",
        title: "onepiece",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "229207",
        title: "fyp",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5917",
        title: "anime",
        desc: "Whether you're talking about your favorite show, or working on your cosplay, we're here for all things #Anime.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/18ee785c49aad749236572e408555328",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/18ee785c49aad749236572e408555328",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/18ee785c49aad749236572e408555328",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5927",
        title: "sad",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8004",
        title: "pain",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 11e5,
      shareCount: 9523,
      commentCount: 7769,
      playCount: 63e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 41,
        end: 50,
        hashtagName: "onepiece",
        hashtagId: "139663",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 51,
        end: 55,
        hashtagName: "fyp",
        hashtagId: "229207",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 63,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 64,
        end: 70,
        hashtagName: "anime",
        hashtagId: "5917",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 71,
        end: 75,
        hashtagName: "sad",
        hashtagId: "5927",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 76,
        end: 81,
        hashtagName: "pain",
        hashtagId: "8004",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 30,
      followerCount: 151e3,
      heartCount: 92e5,
      videoCount: 240,
      diggCount: 2583,
      heart: 92e5
    },
    privateItem: false,
    duetEnabled: false,
    stitchEnabled: false,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  }
];

// src/services/trendingFeedMapper.js
var trendingFeedMapper_default = async (callback) => defaultMapper_default({
  request: getTrendingFeed_default,
  callback,
  defaultReturn: trendingFeed_default
});

// src/pages/Trending/Trending.jsx
var Trending = function({ onNavigateToUser }) {
  const [posts, setPosts] = (0, import_react8.useState)([]);
  (0, import_react8.useEffect)(() => {
    trendingFeedMapper_default(setPosts);
  }, []);
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, JSON.stringify(posts), posts && posts.map((element) => /* @__PURE__ */ import_react8.default.createElement(Post_default, {
    ...element,
    key: element.id,
    onAvatarClick: onNavigateToUser
  })));
};
Trending.defaultProps = {
  onNavigateToUser: () => 0
};
Trending.propTypes = {
  onNavigateToUser: import_prop_types8.default.func
};
var Trending_default = Trending;

// src/pages/UserDetails/UserDetails.jsx
var import_react14 = __toESM(require("../node_modules/react/index.js"));
var import_react_router = require("../node_modules/react-router/main.js");

// src/api/getUserFeed.js
var userFeedUrl = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.FEED;
var getUserFeed_default = (userID) => {
  const endpoint = `${userFeedUrl}${userID}`;
  return getData(endpoint);
};

// src/mock/userFeed.js
var userFeed_default = [
  {
    id: "6949187520152358149",
    desc: "Would you have an appointment with Hulk?  \u{1F606}\u{1F4AA} #animation #chiropractor #hulk #spiderman #marvel #3danimation",
    createTime: 1617983807,
    video: {
      id: "6949187520152358149",
      height: 1024,
      width: 576,
      duration: 6,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ccaeca6ad4f5445aa2f6c6f080a03b57_1617983809?x-expires=1642971600&x-signature=5in40leKcpO9rc4eYF7xlxe058c%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/1232f75ec42544538b3333cb24bd54c1_1617983809?x-expires=1642971600&x-signature=%2FYEqRoB%2B1zVcJbbL5OFuVDrOSJw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ab22f7caedb84f16933a3b467d6d2ad9_1617983813?x-expires=1642971600&x-signature=LVUPPENf8OP7o7iVP6QoiSVADIQ%3D",
      playAddr: "https://v16-webapp.tiktok.com/104b5ba05e07e238abaac3ac9bd24264/61edcf7d/video/tos/useast2a/tos-useast2a-ve-0068c001/ba27881c85e747b1935070d30b1105eb/?a=1988&br=1042&bt=521&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y5aG5kbzg6NDMzNzczM0ApZ2RpOjtlOWU0N2lpaGQ0O2c1aDFwYWlqYGxgLS1kMTZzczZiYmMwLTQvNTE0YzA2YTM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/104b5ba05e07e238abaac3ac9bd24264/61edcf7d/video/tos/useast2a/tos-useast2a-ve-0068c001/ba27881c85e747b1935070d30b1105eb/?a=1988&br=1042&bt=521&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y5aG5kbzg6NDMzNzczM0ApZ2RpOjtlOWU0N2lpaGQ0O2c1aDFwYWlqYGxgLS1kMTZzczZiYmMwLTQvNTE0YzA2YTM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1232f75ec42544538b3333cb24bd54c1_1617983809~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=mHa%2BLeijEv3jwe3waQhzKylQPW0%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1232f75ec42544538b3333cb24bd54c1_1617983809~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=CHPPuQAHirKRGen6ByM3E9kHKXU%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/618405b90bebabcff15602645b03ffef?x-expires=1642971600&x-signature=LaInlLjmXPNCio757ZqYWkY0fMk%3D",
      bitrate: 534380,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6947362074016238341",
      title: "original sound",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6947362138470009605.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c45dd93a8485a08969e164b7d9dee9b4~c5_100x100.jpeg?x-expires=1643036400&x-signature=YCVeoIi%2FCAOK6imFdtoxGaprs8I%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c45dd93a8485a08969e164b7d9dee9b4~c5_720x720.jpeg?x-expires=1643036400&x-signature=VfVkfVvzOkm%2BQCcZoOX%2FkHc5SWU%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c45dd93a8485a08969e164b7d9dee9b4~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=eU4%2Bl%2BnAS36VpmtObyik04dTXRY%3D",
      authorName: "Tyler Madeley",
      original: true,
      duration: 8,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6033788",
        title: "chiropractor",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17079",
        title: "hulk",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "12413",
        title: "spiderman",
        desc: "",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "16276",
        title: "marvel",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "36727092",
        title: "3danimation",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 46700,
      shareCount: 1102,
      commentCount: 487,
      playCount: 14e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 47,
        end: 57,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 58,
        end: 71,
        hashtagName: "chiropractor",
        hashtagId: "6033788",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 72,
        end: 77,
        hashtagName: "hulk",
        hashtagId: "17079",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 88,
        hashtagName: "spiderman",
        hashtagId: "12413",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 96,
        hashtagName: "marvel",
        hashtagId: "16276",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 97,
        end: 109,
        hashtagName: "3danimation",
        hashtagId: "36727092",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    stickersOnItem: [
      {
        stickerType: 4,
        stickerText: [
          "TikTok chiropractors\nbe like:"
        ]
      }
    ],
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6948001993092910341",
    desc: "Some fun behind the scenes \u{1F4AA}\u{1F60A} #animation #3danimation #spiderman #hulk #makingof #behindthescenes #marvel #disney #maya",
    createTime: 1617707782,
    video: {
      id: "6948001993092910341",
      height: 1024,
      width: 576,
      duration: 8,
      ratio: "720p",
      cover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/dd1af885cd2e437bb54dc0f58c08ee9c_1617707783?x-expires=1642971600&x-signature=UkwZOVWUYi87s3lHPq5mUVV2PZk%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d789bfc7557a49c8aec6b5cdbfcd4d12_1617707783?x-expires=1642971600&x-signature=MoTtAIEE9UVIqRc6KyaqVCz4Bhs%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/27bc6f0fb8dd490f9e7e9351a317ae4c_1617707783?x-expires=1642971600&x-signature=ca0pyyKjpHy6HMNMl9tJQFQXxwk%3D",
      playAddr: "https://v16-webapp.tiktok.com/a635c1c6685d1d9100fdfd43b5b28f1f/61edcf7f/video/tos/useast2a/tos-useast2a-ve-0068c002/fa8c8c4edfd6492a88f73135e5ed07a6/?a=1988&br=1746&bt=873&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anRma2dwNjg3NDMzNzczM0ApNjQzOWdnNGRmN2ZkZjM2aGczMTUzZmVuMWpgLS1kMTZzc2I2YDAwNi0uYzMzNWNiMjY6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/a635c1c6685d1d9100fdfd43b5b28f1f/61edcf7f/video/tos/useast2a/tos-useast2a-ve-0068c002/fa8c8c4edfd6492a88f73135e5ed07a6/?a=1988&br=1746&bt=873&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anRma2dwNjg3NDMzNzczM0ApNjQzOWdnNGRmN2ZkZjM2aGczMTUzZmVuMWpgLS1kMTZzc2I2YDAwNi0uYzMzNWNiMjY6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d789bfc7557a49c8aec6b5cdbfcd4d12_1617707783~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=AUX%2FxtP6jsVwgJ0fYqGUD9GNXck%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d789bfc7557a49c8aec6b5cdbfcd4d12_1617707783~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=jrWJ5aR2rKo79yXQSvD%2Bq9Eq%2BzY%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f850c7eceeb21daf5012c9c87d2f4edb?x-expires=1642971600&x-signature=RWKeqO%2BAZkTPVsjh7ZmawjH9AdE%3D",
      bitrate: 894757,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6948001787118996229",
      title: "original sound",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6948001940244613893.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      authorName: "Dave XP",
      original: true,
      duration: 8,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "36727092",
        title: "3danimation",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "12413",
        title: "spiderman",
        desc: "",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17079",
        title: "hulk",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2270073",
        title: "makingof",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5236",
        title: "behindthescenes",
        desc: "Share your #BehindTheScenes moments",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "16276",
        title: "marvel",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8284",
        title: "disney",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "130632",
        title: "maya",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 92300,
      shareCount: 517,
      commentCount: 308,
      playCount: 31e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 32,
        end: 42,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 43,
        end: 55,
        hashtagName: "3danimation",
        hashtagId: "36727092",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 66,
        hashtagName: "spiderman",
        hashtagId: "12413",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 67,
        end: 72,
        hashtagName: "hulk",
        hashtagId: "17079",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 73,
        end: 82,
        hashtagName: "makingof",
        hashtagId: "2270073",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 83,
        end: 99,
        hashtagName: "behindthescenes",
        hashtagId: "5236",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 100,
        end: 107,
        hashtagName: "marvel",
        hashtagId: "16276",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 108,
        end: 115,
        hashtagName: "disney",
        hashtagId: "8284",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 116,
        end: 121,
        hashtagName: "maya",
        hashtagId: "130632",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6919527366356225285",
    desc: "Such a fun collab animating with @happykelli ! \u{1F60A}\u26C4 #animation #olaf #girllikemechallenge @shakira",
    createTime: 1611078025,
    video: {
      id: "6919527366356225285",
      height: 1024,
      width: 576,
      duration: 14,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bfe480beefc5494389f73f09b9ece5d0_1611078027?x-expires=1642971600&x-signature=XbqrY7Pdlr%2B9KAHKizBW4clkF9o%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c68ff96576e04f6cb85326a0f2aac379_1611078026?x-expires=1642971600&x-signature=JRvC%2FHaH4prgQr%2F8SpJ6vHxD7KA%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/64f8b8ababc84da9bc182d4953b0bb4c_1611078026?x-expires=1642971600&x-signature=bDR8uMlcfAGx0JsbzXsPGQTuMgA%3D",
      playAddr: "https://v16-webapp.tiktok.com/21b8f00e805233fed6102e739bad2d6b/61edcf85/video/tos/useast2a/tos-useast2a-pve-0068/8a384562236d483e9ae6061ea188b755/?a=1988&br=3212&bt=1606&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anh5ZnE2c29rMzMzODczM0ApZWc0ZGZkaWVmNzs4PGc0OmdqbGpoYTZlZjBgLS0yMTZzc14vXmIwMF4tLzJfMDNiNV86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/21b8f00e805233fed6102e739bad2d6b/61edcf85/video/tos/useast2a/tos-useast2a-pve-0068/8a384562236d483e9ae6061ea188b755/?a=1988&br=3212&bt=1606&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anh5ZnE2c29rMzMzODczM0ApZWc0ZGZkaWVmNzs4PGc0OmdqbGpoYTZlZjBgLS0yMTZzc14vXmIwMF4tLzJfMDNiNV86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/c68ff96576e04f6cb85326a0f2aac379_1611078026~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=usPBpN0%2BIf4lZd8rz1cxsKkbf70%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/c68ff96576e04f6cb85326a0f2aac379_1611078026~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=bZzBSrs5QGuSqQ%2F9YpKUNqVMqUg%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bfe480beefc5494389f73f09b9ece5d0_1611078027?x-expires=1642971600&x-signature=XbqrY7Pdlr%2B9KAHKizBW4clkF9o%3D",
      bitrate: 1644980,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6839079162326550529",
      title: "GIRL LIKE ME",
      playUrl: "",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/8771ed2a89b24ef9bc689bb584ff86e9~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/8771ed2a89b24ef9bc689bb584ff86e9~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/8771ed2a89b24ef9bc689bb584ff86e9~c5_720x720.jpeg",
      authorName: "Black Eyed Peas & Shakira",
      original: false,
      duration: 60,
      album: "TRANSLATION"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17393",
        title: "olaf",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1622369842212870",
        title: "girllikemechallenge",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 243100,
      shareCount: 2983,
      commentCount: 1914,
      playCount: 19e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 33,
        end: 44,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6808739390341694470",
        isCommerce: false,
        userUniqueId: "happykelli",
        secUid: "MS4wLjABAAAAylXrolJTXSJsSVpaPpxTOQpdXa4F0Md367CsP0-lMmJfH1a2KptlimEUaNORd1eC",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 97,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "168541398546182144",
        isCommerce: false,
        userUniqueId: "shakira",
        secUid: "MS4wLjABAAAAMTSBCxTaYvqbcRpT924iKILvChaXJEW2t8QEMK3s5NtXENf85cwPjT-biAUnsUfb",
        subType: 0
      },
      {
        awemeId: "",
        start: 51,
        end: 61,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 62,
        end: 67,
        hashtagName: "olaf",
        hashtagId: "17393",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 68,
        end: 88,
        hashtagName: "girllikemechallenge",
        hashtagId: "1622369842212870",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6908416215497248002",
    desc: "Had to do one with both of them! Merry Christmas everyone! \u{1F60A}\u{1F384} #animation #fanart #toystory #disney #pixar",
    createTime: 1608490996,
    video: {
      id: "6908416215497248002",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p77-sign-sg-lite.tiktokcdn.com/obj/tos-alisg-p-0037/7969fde2a7b5478c87aa85be5c8ca1b8_1608490998?x-expires=1642971600&x-signature=pVvOGKtgGgLn9srZi51%2B0vLhmrg%3D",
      originCover: "https://p77-sign-sg-lite.tiktokcdn.com/obj/tos-alisg-p-0037/fa51657825ba4774ac69dac8340d8b61_1608490998?x-expires=1642971600&x-signature=m2fLvy53a%2FERx%2BNJS%2FqX%2BTYSSFs%3D",
      dynamicCover: "https://p77-sign-sg-lite.tiktokcdn.com/obj/tos-alisg-p-0037/0badaf73c264480084bed1d818f9bf40_1608490999?x-expires=1642971600&x-signature=9Z2SgKtkXSo0irIE95tn1ufGFxc%3D",
      playAddr: "https://v16-webapp.tiktok.com/1d1658cf7311f0df4a9b9d17e67465a0/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/6cabfbaf07804af392a84a1aeb17c6da/?a=1988&br=2030&bt=1015&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajRyazg1eHRzeTMzNzczM0ApOTk8ZDY8Nzs8N2c3NzozNGdgbmwvNXAyc2NfLS0zMTRzczQyMS4xNWMuXjYvNC4yLV46Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/1d1658cf7311f0df4a9b9d17e67465a0/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/6cabfbaf07804af392a84a1aeb17c6da/?a=1988&br=2030&bt=1015&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajRyazg1eHRzeTMzNzczM0ApOTk8ZDY8Nzs8N2c3NzozNGdgbmwvNXAyc2NfLS0zMTRzczQyMS4xNWMuXjYvNC4yLV46Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/fa51657825ba4774ac69dac8340d8b61_1608490998~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=tyCaGPsEqnmwdt17dBFFg5LHQdc%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/fa51657825ba4774ac69dac8340d8b61_1608490998~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=f8dsMsvn8Gff6o%2FPnmLeoaZ56e0%3D"
      ],
      reflowCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/7969fde2a7b5478c87aa85be5c8ca1b8_1608490998?x-expires=1642971600&x-signature=QWF2VsBwSGvO6ZMVWB4yCXhJhX8%3D",
      bitrate: 1040274,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "172594401737605120",
      title: "All I Want for Christmas is YOU",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6882150809962957573.mp3",
      coverThumb: "",
      coverMedium: "",
      coverLarge: "",
      authorName: "",
      original: true,
      duration: 12,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "195699",
        title: "fanart",
        desc: "Whether you love comic books, anime or anything else, show us your best #FanArt.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "172957",
        title: "toystory",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8284",
        title: "disney",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "654478",
        title: "pixar",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 23e5,
      shareCount: 164100,
      commentCount: 26600,
      playCount: 147e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 64,
        end: 74,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 75,
        end: 82,
        hashtagName: "fanart",
        hashtagId: "195699",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 83,
        end: 92,
        hashtagName: "toystory",
        hashtagId: "172957",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 93,
        end: 100,
        hashtagName: "disney",
        hashtagId: "8284",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 101,
        end: 107,
        hashtagName: "pixar",
        hashtagId: "654478",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6907342407143017729",
    desc: "Animating Buzz for this year's Christmas challenge! \u{1F60A} #animation #fanart #buzzlightyear #toystory #pixar",
    createTime: 1608240982,
    video: {
      id: "6907342407143017729",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/70c0bc146d334a099855104add7178a1?x-expires=1642971600&x-signature=4z4oVzUcSoREb7ZKPBH%2FI2ipfsQ%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/de309143a7e541efa4e116150c293336_1608240984?x-expires=1642971600&x-signature=kbEwxblcPwAXJUghuG084vvU%2BBQ%3D",
      dynamicCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/fb74c777bfa848519251fbf4ee5bd5ba_1608240984?x-expires=1642971600&x-signature=wBolJesAkSCgfrGWNPpIxikwQKs%3D",
      playAddr: "https://v16-webapp.tiktok.com/54d861276a6454a798b9cea56916e301/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/ab6d9a30b9a843a1919995d4a3e04223/?a=1988&br=1252&bt=626&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2pkbnJmM2t2eTMzOzczM0ApNztkPDo0NGRlN2dmaGQ0NmdnaGdncGtycmFfLS0vMTRzczE1XzFiYl5iMWFfXzYtYDM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/54d861276a6454a798b9cea56916e301/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/ab6d9a30b9a843a1919995d4a3e04223/?a=1988&br=1252&bt=626&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2pkbnJmM2t2eTMzOzczM0ApNztkPDo0NGRlN2dmaGQ0NmdnaGdncGtycmFfLS0vMTRzczE1XzFiYl5iMWFfXzYtYDM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/de309143a7e541efa4e116150c293336_1608240984~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=9wjO0Ps2N6wyg2kutBSGfr1pYp4%3D",
        "https://p77-sign-sg.tiktokcdn.com/tos-alisg-p-0037/de309143a7e541efa4e116150c293336_1608240984~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=PxODOI3xs2a4yEjCgMDzZYz9jec%3D"
      ],
      reflowCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/70c0bc146d334a099855104add7178a1?x-expires=1642971600&x-signature=4z4oVzUcSoREb7ZKPBH%2FI2ipfsQ%3D",
      bitrate: 641882,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "172594401737605120",
      title: "All I Want for Christmas is YOU",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6882150809962957573.mp3",
      coverThumb: "",
      coverMedium: "",
      coverLarge: "",
      authorName: "",
      original: true,
      duration: 12,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "195699",
        title: "fanart",
        desc: "Whether you love comic books, anime or anything else, show us your best #FanArt.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "95899",
        title: "buzzlightyear",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "172957",
        title: "toystory",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "654478",
        title: "pixar",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 1e6,
      shareCount: 41500,
      commentCount: 9055,
      playCount: 66e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 55,
        end: 65,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 66,
        end: 73,
        hashtagName: "fanart",
        hashtagId: "195699",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 74,
        end: 88,
        hashtagName: "buzzlightyear",
        hashtagId: "95899",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 98,
        hashtagName: "toystory",
        hashtagId: "172957",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 99,
        end: 105,
        hashtagName: "pixar",
        hashtagId: "654478",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6905565464726932737",
    desc: "Animating Woody for this year's Christmas challenge! \u{1F60A} #animation #fanart #woody #toystory #disney #pixar",
    createTime: 1607827256,
    video: {
      id: "6905565464726932737",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/300c84b4d9e44ebcbc96d10741299a07?x-expires=1642971600&x-signature=wJe0ZFZOv4O5umHtLOHBzIU3bpw%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/31a181c9e7e0480ba61b3daa969f4da4_1607827258?x-expires=1642971600&x-signature=h1IHf%2FZnrG4scLnkUGh9cqVb%2BS8%3D",
      dynamicCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/a321ebf4b0d54c83828adc0741ac732f_1607827259?x-expires=1642971600&x-signature=Z9QKSWo5GMi%2F052LD1%2BvztWwOqI%3D",
      playAddr: "https://v16-webapp.tiktok.com/f3a869d88c7e7dfe9907dac437ccb0d7/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/1f574d81827148c3bfdbb24fbab2abbb/?a=1988&br=1178&bt=589&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3F1ZTozNWVxeTMzOzczM0ApOmU1Zjg0aDszNzxoN2dmPGcwYWlga2xicl5fLS0yMTRzczItMmBiXl4zLS81NTE2YmE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/f3a869d88c7e7dfe9907dac437ccb0d7/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/1f574d81827148c3bfdbb24fbab2abbb/?a=1988&br=1178&bt=589&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3F1ZTozNWVxeTMzOzczM0ApOmU1Zjg0aDszNzxoN2dmPGcwYWlga2xicl5fLS0yMTRzczItMmBiXl4zLS81NTE2YmE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/31a181c9e7e0480ba61b3daa969f4da4_1607827258~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=XSKYJXzA7FhkSWLW%2B8lyS7J4Eb8%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/31a181c9e7e0480ba61b3daa969f4da4_1607827258~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=TjzEp9tXhZIU6FyzkyP014qM9y4%3D"
      ],
      reflowCover: "https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/300c84b4d9e44ebcbc96d10741299a07?x-expires=1642971600&x-signature=1fJ0pEiDJqPiF0kL8oA%2FGRY14gA%3D",
      bitrate: 603948,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "172594401737605120",
      title: "All I Want for Christmas is YOU",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6882150809962957573.mp3",
      coverThumb: "",
      coverMedium: "",
      coverLarge: "",
      authorName: "",
      original: true,
      duration: 12,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "195699",
        title: "fanart",
        desc: "Whether you love comic books, anime or anything else, show us your best #FanArt.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "260634",
        title: "woody",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "172957",
        title: "toystory",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8284",
        title: "disney",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "654478",
        title: "pixar",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 38e5,
      shareCount: 153700,
      commentCount: 36100,
      playCount: 215e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 56,
        end: 66,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 67,
        end: 74,
        hashtagName: "fanart",
        hashtagId: "195699",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 75,
        end: 81,
        hashtagName: "woody",
        hashtagId: "260634",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 82,
        end: 91,
        hashtagName: "toystory",
        hashtagId: "172957",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 92,
        end: 99,
        hashtagName: "disney",
        hashtagId: "8284",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 100,
        end: 106,
        hashtagName: "pixar",
        hashtagId: "654478",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6897335679903173890",
    desc: "Based on @arbacn killer impression of Mickey! \u{1F60A} #animation #fanart #mickey #mickeymouse #disney #dance",
    createTime: 1605911109,
    video: {
      id: "6897335679903173890",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/3e612e0a809b40f79c653f98e51bef5c_1605911111?x-expires=1642971600&x-signature=umogzug6RQjO4pyzNljTm%2FCEReo%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4066b8fdec6e48d990669cfd916c3619_1605911110?x-expires=1642971600&x-signature=DUrzGrxLGOrlpEgZrJL0hrdTbeo%3D",
      dynamicCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/adf0378349af46a487aa979e3419a8dd_1605911111?x-expires=1642971600&x-signature=4BUONV9auekWtidyZFsSixw%2F34g%3D",
      playAddr: "https://v16-webapp.tiktok.com/4fdad8c9f9ed4b304303025ec4a8c9de/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/89b1284349ef41c5a2cdd7c1534935d2/?a=1988&br=1310&bt=655&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lza2dya2g3eDMzZzczM0ApaGg1OTM4OztmNzVmZTU7PGdgY2FyNDNeMXBfLS1jMTRzczQ2LS8yMjY1YDYzXzVhLWI6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/4fdad8c9f9ed4b304303025ec4a8c9de/61edcf83/video/tos/alisg/tos-alisg-pve-0037c001/89b1284349ef41c5a2cdd7c1534935d2/?a=1988&br=1310&bt=655&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lza2dya2g3eDMzZzczM0ApaGg1OTM4OztmNzVmZTU7PGdgY2FyNDNeMXBfLS1jMTRzczQ2LS8yMjY1YDYzXzVhLWI6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/4066b8fdec6e48d990669cfd916c3619_1605911110~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=tSu0sLBHL6ukY7S%2FlU8FlzNQAhM%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/4066b8fdec6e48d990669cfd916c3619_1605911110~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=SRHo7yZDsg%2Bms4TsFBbLXW5bsek%3D"
      ],
      reflowCover: "https://p77-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/3e612e0a809b40f79c653f98e51bef5c_1605911111?x-expires=1642971600&x-signature=EKCULCa29MjQ9Adv20HI3pm2rcM%3D",
      bitrate: 671381,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6707497548220812038",
      title: "Mickey Mouse Club House Theme",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1637582480017462.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/8cbc12787378a3cf17fe27b9d8797b49~c5_100x100.jpeg?x-expires=1643036400&x-signature=iW5ydudmskz9Ak3JKedHPbvzjIk%3D",
      coverMedium: "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/8cbc12787378a3cf17fe27b9d8797b49~c5_720x720.jpeg?x-expires=1643036400&x-signature=dBOhsbzyUpHCVLrBaVoAXu5emCw%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/8cbc12787378a3cf17fe27b9d8797b49~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=UzydzNzIQOLY7zDUJNNWsXeRTwc%3D",
      authorName: "TootyMcNooty",
      original: true,
      duration: 11,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "195699",
        title: "fanart",
        desc: "Whether you love comic books, anime or anything else, show us your best #FanArt.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "15467",
        title: "mickey",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "22380",
        title: "mickeymouse",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8284",
        title: "disney",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5054",
        title: "dance",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 220700,
      shareCount: 29100,
      commentCount: 2409,
      playCount: 3e6
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 9,
        end: 16,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6736725635928916997",
        isCommerce: false,
        userUniqueId: "arbacn",
        secUid: "MS4wLjABAAAA_IaVOVMY8yfoXZSt0hjDHFBOEDXRjrP0knE_fvvJP-B3hm8y_mamw2cIgt2MQB4J",
        subType: 0
      },
      {
        awemeId: "",
        start: 49,
        end: 59,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 60,
        end: 67,
        hashtagName: "fanart",
        hashtagId: "195699",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 68,
        end: 75,
        hashtagName: "mickey",
        hashtagId: "15467",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 76,
        end: 88,
        hashtagName: "mickeymouse",
        hashtagId: "22380",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 96,
        hashtagName: "disney",
        hashtagId: "8284",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 97,
        end: 103,
        hashtagName: "dance",
        hashtagId: "5054",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6858800045957942530",
    desc: "Animating Spongebob! \u{1F9FD}\u{1F454} #animation #spongebob #tiny @jbalvin",
    createTime: 1596938844,
    video: {
      id: "6858800045957942530",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "540p",
      cover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/948da5dc1a1f4e9694849e6d06049d33_1596938846?x-expires=1642971600&x-signature=EhzK9XOucdjF4XFBYQYvh%2FoPqzE%3D",
      originCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/54cffc812f594e16a4aec34fa40ab326_1596938847?x-expires=1642971600&x-signature=%2FHxXVOgLxNMAKQzzXACsWdciHSs%3D",
      dynamicCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/0f067703b9c74851bb33b0299d92982c_1596938846?x-expires=1642971600&x-signature=ieYNzX1OYxpijyh1q6sU4gJpxdI%3D",
      playAddr: "https://v16-webapp.tiktok.com/8b6d8bb5ae1a42599f0ca74429bc5292/61edcf86/video/tos/alisg/tos-alisg-pve-0037/b0b1e492c45841968e32fd22615815a9/?a=1988&br=450&bt=225&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=5&rc=amhrdzlscGVvdjMzZDczM0ApZDxkZjNnPDs2NzxkNTQzaGdtX2QzLy5gZ2tfLS02MTRzczRjYDAvYWMwY15eYzEuNTA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/8b6d8bb5ae1a42599f0ca74429bc5292/61edcf86/video/tos/alisg/tos-alisg-pve-0037/b0b1e492c45841968e32fd22615815a9/?a=1988&br=450&bt=225&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=5&rc=amhrdzlscGVvdjMzZDczM0ApZDxkZjNnPDs2NzxkNTQzaGdtX2QzLy5gZ2tfLS02MTRzczRjYDAvYWMwY15eYzEuNTA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/54cffc812f594e16a4aec34fa40ab326_1596938847~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=EyihxrRoHMRwNB%2F0Dn%2B1bg01OB8%3D",
        "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/54cffc812f594e16a4aec34fa40ab326_1596938847~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=LkXWlccnCJ1hEW6kAwKbaMMgXYg%3D"
      ],
      reflowCover: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/948da5dc1a1f4e9694849e6d06049d33_1596938846?x-expires=1642971600&x-signature=EhzK9XOucdjF4XFBYQYvh%2FoPqzE%3D",
      bitrate: 231284,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "lowest",
      encodeUserTag: "",
      codecType: "h264",
      definition: "540p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6847701042042243074",
      title: 'Agua (Music from "Sponge on the Run" Movie)',
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/b678dca441114c0382076237d9baa503",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f4d3537fc7dc4d0d933d2c9c01a2f01b~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f4d3537fc7dc4d0d933d2c9c01a2f01b~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f4d3537fc7dc4d0d933d2c9c01a2f01b~c5_720x720.jpeg",
      authorName: "Tainy & J Balvin",
      original: false,
      duration: 34,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1440",
        title: "spongebob",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "31658",
        title: "tiny",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 447e3,
      shareCount: 56e3,
      commentCount: 2907,
      playCount: 44e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 54,
        end: 62,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "132667022575992832",
        isCommerce: false,
        userUniqueId: "jbalvin",
        secUid: "MS4wLjABAAAAYbp6OaRgezXn4Bp5dmoM2dfBYOASM9M5I3bMLpjp0OdD7Y6JLua2DSAs1EUaVJ45",
        subType: 0
      },
      {
        awemeId: "",
        start: 26,
        end: 36,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 37,
        end: 47,
        hashtagName: "spongebob",
        hashtagId: "1440",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 48,
        end: 53,
        hashtagName: "tiny",
        hashtagId: "31658",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6850565511781027078",
    desc: "I animated this one during some YouTube Livestreams \u270C\u{1F60A} #animation #treasure #samus #nintendo #dance @laiapeerez",
    createTime: 1595021580,
    video: {
      id: "6850565511781027078",
      height: 1024,
      width: 576,
      duration: 5,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/53fe180121aa4606b22433e789151035_1595021581?x-expires=1642971600&x-signature=jPm2SRCMK9xmKpN993WZLbqJkx0%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/1cc6b9e36d8547619e95fd0380200483_1595021582?x-expires=1642971600&x-signature=wKjs%2B9a%2FfVA%2BnL%2FpNJY5GfFu0Rw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c692463499494efa8a5e2b92f30c1c80_1595021581?x-expires=1642971600&x-signature=%2FWOEsGrYKW%2BenPlLUCi8y8on484%3D",
      playAddr: "https://v16-webapp.tiktok.com/67c5903d85e0daee22a76d050fce7b3d/61edcf7c/video/tos/useast2a/tos-useast2a-ve-0068c001/8204a7bfb1634b7da00ef1cadbff3b9e/?a=1988&br=2290&bt=1145&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY8bjQ1dG80djMzOzczM0ApOWVnPDo4aGRlN2ZoOjs2OWcycTVlNHBpYzZfLS00MTZzc2E2My9fXzMwNi8yLWIuYS06Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/67c5903d85e0daee22a76d050fce7b3d/61edcf7c/video/tos/useast2a/tos-useast2a-ve-0068c001/8204a7bfb1634b7da00ef1cadbff3b9e/?a=1988&br=2290&bt=1145&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY8bjQ1dG80djMzOzczM0ApOWVnPDo4aGRlN2ZoOjs2OWcycTVlNHBpYzZfLS00MTZzc2E2My9fXzMwNi8yLWIuYS06Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1cc6b9e36d8547619e95fd0380200483_1595021582~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=Qq1hVInJ41qOfq4UCeBXuaRkxIM%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1cc6b9e36d8547619e95fd0380200483_1595021582~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=rixJQO3h49B3MVo%2BiK8PVISoVQQ%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/53fe180121aa4606b22433e789151035_1595021581?x-expires=1642971600&x-signature=jPm2SRCMK9xmKpN993WZLbqJkx0%3D",
      bitrate: 1173040,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6712555168950536965",
      title: "Treasure",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1638808117600293.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3faf0ba5a74f0f375bafe4da81457d96~c5_100x100.jpeg?x-expires=1643036400&x-signature=gc%2BJWhkgDGgfgpbT2bJsl0SKEoA%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3faf0ba5a74f0f375bafe4da81457d96~c5_720x720.jpeg?x-expires=1643036400&x-signature=2Q9cYSJ5tVdlL8JrCqKPnJql9Fg%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3faf0ba5a74f0f375bafe4da81457d96~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=eD2UIQ18hnvtezHYpFjwfBri5%2BY%3D",
      authorName: "whaddup",
      original: true,
      duration: 12,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "39664",
        title: "treasure",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2867743",
        title: "samus",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "183398",
        title: "nintendo",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5054",
        title: "dance",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 93e3,
      shareCount: 3755,
      commentCount: 398,
      playCount: 919e3
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 101,
        end: 112,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "98608501853220864",
        isCommerce: false,
        userUniqueId: "laiapeerez",
        secUid: "MS4wLjABAAAAJesSlzbA1yPGokTlw-wgie3o7BC0WG-XsX434IvXf7i74R9lW-O-vxrUViDSEuBY",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 66,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 67,
        end: 76,
        hashtagName: "treasure",
        hashtagId: "39664",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 77,
        end: 83,
        hashtagName: "samus",
        hashtagId: "2867743",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 84,
        end: 93,
        hashtagName: "nintendo",
        hashtagId: "183398",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 94,
        end: 100,
        hashtagName: "dance",
        hashtagId: "5054",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6837991333622500614",
    desc: "Back from a small hiatus! \u{1F60A} #animation #blindinglights #blindinglightschallenge #starwars #stormtroopers",
    createTime: 1592093926,
    video: {
      id: "6837991333622500614",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3b820e4ad0b54f8d9cffec748f258256_1592093930?x-expires=1642971600&x-signature=QD1Yw6y%2FcPAVnFadCLJVeAUH1bE%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cc3583afb5b3407195400677254bc375_1592093929?x-expires=1642971600&x-signature=zzwtr%2B16BWe%2BErL2wXdPrz2BzPk%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ba5960111de54e2a8f2ee7d4ec816be9_1592093929?x-expires=1642971600&x-signature=KQMbUX8bFls2%2Fs3KALghmg3mnpo%3D",
      playAddr: "https://v16-webapp.tiktok.com/33ad79f00df0dd0bb72598c28ba28028/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c004/5b2c18c3df9743e49a918496db556880/?a=1988&br=1990&bt=995&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Bvazc8dG9wdTMzOjczM0ApNGloaWY3N2VlNzxnZGY4ZmcuYmc0ZW5obWZfLS1jMTZzczRfNWJgYzI0LjAuNl4zXjU6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/33ad79f00df0dd0bb72598c28ba28028/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c004/5b2c18c3df9743e49a918496db556880/?a=1988&br=1990&bt=995&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Bvazc8dG9wdTMzOjczM0ApNGloaWY3N2VlNzxnZGY4ZmcuYmc0ZW5obWZfLS1jMTZzczRfNWJgYzI0LjAuNl4zXjU6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/cc3583afb5b3407195400677254bc375_1592093929~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=Vcw2mTbK1nN9pHAsLwXLb5x50Nw%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/cc3583afb5b3407195400677254bc375_1592093929~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=zdu0ijvI9wDzzVWVwcrQqjkjcfI%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3b820e4ad0b54f8d9cffec748f258256_1592093930?x-expires=1642971600&x-signature=QD1Yw6y%2FcPAVnFadCLJVeAUH1bE%3D",
      bitrate: 1019083,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6772930910393273094",
      title: "Blinding Lights",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/0491b32b3fe04263a229733d0be5eb0c",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/dccf502b7877450e9ef67c7cfa90350b~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/dccf502b7877450e9ef67c7cfa90350b~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/dccf502b7877450e9ef67c7cfa90350b~c5_720x720.jpeg",
      authorName: "The Weeknd",
      original: false,
      duration: 12,
      album: "Blinding Lights"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "9351231",
        title: "blindinglights",
        desc: "Gather your family members and join in this fun #blindinglights family dance challenge! \u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F46F}",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/f02b1e09c18977e0113524565d4818d7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/f02b1e09c18977e0113524565d4818d7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/f02b1e09c18977e0113524565d4818d7",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/897e14b570af98f464522af2f9f72ed5",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/897e14b570af98f464522af2f9f72ed5",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/897e14b570af98f464522af2f9f72ed5",
        isCommerce: false
      },
      {
        id: "1651517406941189",
        title: "blindinglightschallenge",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6609",
        title: "starwars",
        desc: "Who's excited for The Force Awakens? Get your Star Wars on!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "186030",
        title: "stormtroopers",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 203800,
      shareCount: 18500,
      commentCount: 1167,
      playCount: 17e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 29,
        end: 39,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 40,
        end: 55,
        hashtagName: "blindinglights",
        hashtagId: "9351231",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 80,
        hashtagName: "blindinglightschallenge",
        hashtagId: "1651517406941189",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 81,
        end: 90,
        hashtagName: "starwars",
        hashtagId: "6609",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 91,
        end: 105,
        hashtagName: "stormtroopers",
        hashtagId: "186030",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6830112895926291718",
    desc: "Behind the Scenes of the most shared video to date on TikTok with 13.7M shares! Thanks a lot peeps! \u{1F64C}\u{1F60A}\u2603\uFE0F #animation #olaf #olafchallenge",
    createTime: 1590259584,
    video: {
      id: "6830112895926291718",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/dfed34e5c639457cad9e184b8e6d22cf?x-expires=1642971600&x-signature=lGScNysa8Ogyv22xIeR6QPB76us%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c881661505c749dcba73ed4bb61261e1_1590259585?x-expires=1642971600&x-signature=%2FM8Fm9g%2FFAX3BdmHbAchFn7xols%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/62563406bf3740f5a44c09a0c2b87039_1590259587?x-expires=1642971600&x-signature=rsLfeVc8Vl2DnNHn2Cs7LkL5Tz8%3D",
      playAddr: "https://v16-webapp.tiktok.com/941938f5b893cd92b4d54ae596a7a857/61edcf83/video/tos/useast2a/tos-useast2a-pve-0068/6cd59588145f4e58a1eef0ae9b70da77/?a=1988&br=1766&bt=883&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am85ajVydnhwdTMzOzczM0ApNDg3Njo1PGU4NzlmZjw6OmcwcWwyYWBjcjFfLS1hMTZzc15hNDViNjFhY2AzYDNfMmA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/941938f5b893cd92b4d54ae596a7a857/61edcf83/video/tos/useast2a/tos-useast2a-pve-0068/6cd59588145f4e58a1eef0ae9b70da77/?a=1988&br=1766&bt=883&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am85ajVydnhwdTMzOzczM0ApNDg3Njo1PGU4NzlmZjw6OmcwcWwyYWBjcjFfLS1hMTZzc15hNDViNjFhY2AzYDNfMmA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/c881661505c749dcba73ed4bb61261e1_1590259585~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=8bQ3JL%2B6n0NseX%2FIYfeJSnAZdoA%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/c881661505c749dcba73ed4bb61261e1_1590259585~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=Dbsn7IS8qmiHYJ2LPcFTGAI367U%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/dfed34e5c639457cad9e184b8e6d22cf?x-expires=1642971600&x-signature=lGScNysa8Ogyv22xIeR6QPB76us%3D",
      bitrate: 904953,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "172594401737605120",
      title: "All I Want for Christmas is YOU",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6882150809962957573.mp3",
      coverThumb: "",
      coverMedium: "",
      coverLarge: "",
      authorName: "",
      original: true,
      duration: 12,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17393",
        title: "olaf",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6012024",
        title: "olafchallenge",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 14e5,
      shareCount: 12600,
      commentCount: 7531,
      playCount: 97e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 107,
        end: 117,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 118,
        end: 123,
        hashtagName: "olaf",
        hashtagId: "17393",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 124,
        end: 138,
        hashtagName: "olafchallenge",
        hashtagId: "6012024",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6825296771770502406",
    desc: "Quick #behindthescenes of my Star Wars animation! \u{1F60A} #animation #starwars",
    createTime: 1589138242,
    video: {
      id: "6825296771770502406",
      height: 1024,
      width: 576,
      duration: 9,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7970200581f64c3d90493666d0516384?x-expires=1642971600&x-signature=x7gguZIcvVSQO2vj1PEYhAtgukk%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/292ce6183f76461cb33fead50241098c_1589138245?x-expires=1642971600&x-signature=yc6060flC9zP%2Bkb0pGukYsSFb%2Bk%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0bb248cc79a347b89592496bdc12f4d2_1589138245?x-expires=1642971600&x-signature=MVDqmBT8DZlczTRulez0Pp8lHbI%3D",
      playAddr: "https://v16-webapp.tiktok.com/fe23e3a8bde32b2e900d4a1563d64d8d/61edcf81/video/tos/useast2a/tos-useast2a-ve-0068c001/47f38030c43747c3a7f5a007acbc41b8/?a=1988&br=2638&bt=1319&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3NtPGdsOnc4dDMzNjczM0ApNmQ6ZGgzOjw8NzNnZmQ4OWdkamQ0NGE1MXBfLS01MTZzczExNTA0YWIvLl8tLjM2Ly06Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/fe23e3a8bde32b2e900d4a1563d64d8d/61edcf81/video/tos/useast2a/tos-useast2a-ve-0068c001/47f38030c43747c3a7f5a007acbc41b8/?a=1988&br=2638&bt=1319&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3NtPGdsOnc4dDMzNjczM0ApNmQ6ZGgzOjw8NzNnZmQ4OWdkamQ0NGE1MXBfLS01MTZzczExNTA0YWIvLl8tLjM2Ly06Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/292ce6183f76461cb33fead50241098c_1589138245~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=LUEZrzMyZRFl7%2FBS9VFtE4CvcW0%3D",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/292ce6183f76461cb33fead50241098c_1589138245~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=YP%2Bz7lNQ53%2FYtyXJHJCQgwOLs2U%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7970200581f64c3d90493666d0516384?x-expires=1642971600&x-signature=x7gguZIcvVSQO2vj1PEYhAtgukk%3D",
      bitrate: 1351140,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6825297040357034758",
      title: "original sound",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/930f466eb73d7541eac977117ab0ced5.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      authorName: "Dave XP",
      original: true,
      duration: 9,
      album: ""
    },
    challenges: [
      {
        id: "5236",
        title: "behindthescenes",
        desc: "Share your #BehindTheScenes moments",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6609",
        title: "starwars",
        desc: "Who's excited for The Force Awakens? Get your Star Wars on!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 382e3,
      shareCount: 1580,
      commentCount: 1009,
      playCount: 25e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 6,
        end: 22,
        hashtagName: "behindthescenes",
        hashtagId: "5236",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 53,
        end: 63,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 64,
        end: 73,
        hashtagName: "starwars",
        hashtagId: "6609",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6823411018933226758",
    desc: "Clearly Homer is not as flexible as @charlidamelio \u{1F923}\u{1F926}\u200D\u2642\uFE0F #animation #savage #homersimpson",
    createTime: 1588699182,
    video: {
      id: "6823411018933226758",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cb7afdc26bf14a28b2275e5c92a84a4a_1588699184?x-expires=1642971600&x-signature=dh6%2BAszOq34HesjiX00mxPbjRH4%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/dcd2853b18be4dfb9896fe2221be8ef0_1588699183?x-expires=1642971600&x-signature=IN1J8dyKcxkjHcyC7XO8%2FetgKeM%3D",
      dynamicCover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/2e4ddc850d444578bc18b950a369964d_1588699183?x-expires=1642971600&x-signature=x5UR7%2FEVcgg6fVm1586Mtt1RJZo%3D",
      playAddr: "https://v16-webapp.tiktok.com/c97847315b9eed3c6b9310425c03bc4e/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c003/cf09e2051d7d4eb185d5160d33d0f3bf/?a=1988&br=848&bt=424&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amQ5b3ZrN3hzdDMzODczM0ApZzo4OGZnN2U7N2hnO2Q4NWdqNmouMHIuc2xfLS1gMTZzczQuLS1eMy8vXy8zM18uNjA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/c97847315b9eed3c6b9310425c03bc4e/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c003/cf09e2051d7d4eb185d5160d33d0f3bf/?a=1988&br=848&bt=424&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amQ5b3ZrN3hzdDMzODczM0ApZzo4OGZnN2U7N2hnO2Q4NWdqNmouMHIuc2xfLS1gMTZzczQuLS1eMy8vXy8zM18uNjA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/dcd2853b18be4dfb9896fe2221be8ef0_1588699183~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=zjQsAomX4v49bkBk%2FTlroBEJoiQ%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/dcd2853b18be4dfb9896fe2221be8ef0_1588699183~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=zYBGEOjwAJI9n7FK3BXrMKbqFVo%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cb7afdc26bf14a28b2275e5c92a84a4a_1588699184?x-expires=1642971600&x-signature=dh6%2BAszOq34HesjiX00mxPbjRH4%3D",
      bitrate: 434191,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6800996740322297858",
      title: "Savage",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/456087e02ca946328ecc31d7662bfab7",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/6e30c3a31bcd4d9fadbfef2f0a8feb12~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/6e30c3a31bcd4d9fadbfef2f0a8feb12~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/6e30c3a31bcd4d9fadbfef2f0a8feb12~c5_720x720.jpeg",
      authorName: "Megan Thee Stallion",
      original: false,
      duration: 60,
      album: "Suga"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "3237",
        title: "savage",
        desc: "",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/e0ce241bd0f16be1ead4ce64ea0f7451",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/e0ce241bd0f16be1ead4ce64ea0f7451",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/e0ce241bd0f16be1ead4ce64ea0f7451",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "381943",
        title: "homersimpson",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 761400,
      shareCount: 58500,
      commentCount: 6711,
      playCount: 43e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 36,
        end: 50,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "5831967",
        isCommerce: false,
        userUniqueId: "charlidamelio",
        secUid: "MS4wLjABAAAA-VASjiXTh7wDDyXvjk10VFhMWUAoxr8bgfO1kAL1-9s",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 69,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 70,
        end: 77,
        hashtagName: "savage",
        hashtagId: "3237",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 91,
        hashtagName: "homersimpson",
        hashtagId: "381943",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6820468926141500677",
    desc: "How most of the environments look off camera \u{1F605} #animation #behindthescenes #tmnt #shuffle #shuffledance",
    createTime: 1588014172,
    video: {
      id: "6820468926141500677",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7ad7604ad9a542e5a12199acbda7d74f_1588014175?x-expires=1642971600&x-signature=5v6ALSduHAQ6JdVLeXuJuO%2FY3cE%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0fd9bc9fc0fe4fba8ab6e064e78ea705_1588014174?x-expires=1642971600&x-signature=hrRojReeMYkEQ1nednSbIlK1l3I%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3672dcd6ff814dee9ed390c385e6c4f0_1588014174?x-expires=1642971600&x-signature=Np7WqNYTGgLzAChDVTPDNfCi1HM%3D",
      playAddr: "https://v16-webapp.tiktok.com/a250e5b3a96aa9ffe5dad171f1ab10bd/61edcf86/video/tos/useast2a/tos-useast2a-pve-0068/88feb38cbed0457c84547e0ca7e7cf4f/?a=1988&br=1620&bt=810&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am53NGk0a29sdDMzODczM0ApZTg1NTc4NWQ6N2k7NzppZGdfbGQ0LW5eaGdfLS0uMTZzcy4vYTExY2A1LjFiMTQyYmA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/a250e5b3a96aa9ffe5dad171f1ab10bd/61edcf86/video/tos/useast2a/tos-useast2a-pve-0068/88feb38cbed0457c84547e0ca7e7cf4f/?a=1988&br=1620&bt=810&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am53NGk0a29sdDMzODczM0ApZTg1NTc4NWQ6N2k7NzppZGdfbGQ0LW5eaGdfLS0uMTZzcy4vYTExY2A1LjFiMTQyYmA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/0fd9bc9fc0fe4fba8ab6e064e78ea705_1588014174~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=dU1QmNCpx3fl%2BMXXzNpNpdIKJBk%3D",
        "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/0fd9bc9fc0fe4fba8ab6e064e78ea705_1588014174~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=9MVk5vr%2F%2FmpgfM9z3G8xcLLckso%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7ad7604ad9a542e5a12199acbda7d74f_1588014175?x-expires=1642971600&x-signature=5v6ALSduHAQ6JdVLeXuJuO%2FY3cE%3D",
      bitrate: 830315,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "249047798388834304",
      title: "Seve (Radio Edit)",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/0632641cb90a48d1b3effde8c4b0aff0",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/e47824aeea434aec99281387b91a69c1~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/e47824aeea434aec99281387b91a69c1~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/e47824aeea434aec99281387b91a69c1~c5_720x720.jpeg",
      authorName: "Tez Cadey",
      original: false,
      duration: 30,
      album: "Seve (Radio Edit)"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5236",
        title: "behindthescenes",
        desc: "Share your #BehindTheScenes moments",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a1fba566361ab77f2445aae27130d1e1",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "28721",
        title: "tmnt",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "18069",
        title: "shuffle",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "553029",
        title: "shuffledance",
        desc: "Heyo it's dance time!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 240800,
      shareCount: 1046,
      commentCount: 667,
      playCount: 18e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 48,
        end: 58,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 75,
        hashtagName: "behindthescenes",
        hashtagId: "5236",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 76,
        end: 81,
        hashtagName: "tmnt",
        hashtagId: "28721",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 82,
        end: 90,
        hashtagName: "shuffle",
        hashtagId: "18069",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 91,
        end: 104,
        hashtagName: "shuffledance",
        hashtagId: "553029",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6819726588448460037",
    desc: "Animating Homer! \u{1F60A} The winner of the poll #animation #fanart #homersimpson #homer #simpsons #ghostbusters",
    createTime: 1587841333,
    video: {
      id: "6819726588448460037",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b6a6c6f84104439f904294d76e4dccd5_1587841335?x-expires=1642971600&x-signature=3kfngLW%2BxA%2F4ylVAGvOV7NtO8Zw%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/fee26a9435fd4c7d8d2143f4c2b5aa71_1587841335?x-expires=1642971600&x-signature=Zb%2FIiUBjrrBBF0h2aKyX7gw67co%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/15748514240e4d679343046f1a11d270_1587841335?x-expires=1642971600&x-signature=7Ycj7wD93f5kP3bPsqu7iN2Yuts%3D",
      playAddr: "https://v16-webapp.tiktok.com/692219e79a173365b5bc3a16bde233e6/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c003/0829b88f61614ecb86c912879b91ba79/?a=1988&br=1018&bt=509&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hzbHlnZHg7dDMzPDczM0ApZGdoOTs6N2VmNzY4OGY2PGdwNnFgbXAvYWZfLS02MTZzczMuXy5iYmNhLTE2MjM2MjE6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/692219e79a173365b5bc3a16bde233e6/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c003/0829b88f61614ecb86c912879b91ba79/?a=1988&br=1018&bt=509&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hzbHlnZHg7dDMzPDczM0ApZGdoOTs6N2VmNzY4OGY2PGdwNnFgbXAvYWZfLS02MTZzczMuXy5iYmNhLTE2MjM2MjE6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/fee26a9435fd4c7d8d2143f4c2b5aa71_1587841335~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=ZOjetGLv96h0Dqvu1pCvi5D6SEY%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/fee26a9435fd4c7d8d2143f4c2b5aa71_1587841335~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=ShvxTtSAO%2BnqKw5efWziajVFGD8%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b6a6c6f84104439f904294d76e4dccd5_1587841335?x-expires=1642971600&x-signature=3kfngLW%2BxA%2F4ylVAGvOV7NtO8Zw%3D",
      bitrate: 521417,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6819726555170884358",
      title: "original sound",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/213766136bcdc39b5c2f70dc7d08f968.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      authorName: "Dave XP",
      original: true,
      duration: 12,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "195699",
        title: "fanart",
        desc: "Whether you love comic books, anime or anything else, show us your best #FanArt.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "381943",
        title: "homersimpson",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "26456",
        title: "homer",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "63879",
        title: "simpsons",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42111",
        title: "ghostbusters",
        desc: "Get ready to answer the call! \xA0The Ghostbusters movie is now out on iTunes! \xA0To celebrate, we\u2019ve gotten some exclusive access to two hilarious Ghostbusters dialogue clips. \xA0Come back today and tomorrow to film videos to new GB dialogue! \xA0We &lt;3 GB!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 171e3,
      shareCount: 9677,
      commentCount: 754,
      playCount: 14e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 43,
        end: 53,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 54,
        end: 61,
        hashtagName: "fanart",
        hashtagId: "195699",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 62,
        end: 75,
        hashtagName: "homersimpson",
        hashtagId: "381943",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 76,
        end: 82,
        hashtagName: "homer",
        hashtagId: "26456",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 83,
        end: 92,
        hashtagName: "simpsons",
        hashtagId: "63879",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 93,
        end: 106,
        hashtagName: "ghostbusters",
        hashtagId: "42111",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6817885764311911686",
    desc: "This took 3 weeks to animate! \u{1F605} Who's your fav? #animation #fanart #hsm #highschoolmusical #wereallinthistogether",
    createTime: 1587412732,
    video: {
      id: "6817885764311911686",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/13bcfa60b598452c81aa940216b7f847?x-expires=1642971600&x-signature=MfXB2%2B%2FzjsCeqCcwpjBbbKLW9r0%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/48f8cdc7f7a54f788ebc0ad75787efad_1587412734?x-expires=1642971600&x-signature=8yhMVYYd5YV3qhqH0KaVemwgbZk%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/dab766f8c2ef4a45a9431bc85a3772b9_1587412734?x-expires=1642971600&x-signature=qMlHUHA4U9cpo%2BYhgcxUHvqbeG8%3D",
      playAddr: "https://v16-webapp.tiktok.com/e032433f6ae35d9ba4f45f7e2ca2307d/61edcf86/video/tos/useast2a/tos-useast2a-pve-0068/83dd9c01dabb4508aa79d96fa84eecb1/?a=1988&br=3600&bt=1800&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2lzZ21rN3J5dDMzNjczM0ApOTZnZmg5aDxkN2dlNjo4N2dhajAtMHIubWJfLS01MTZzcy4xLmEtMjQwNWNgY19jMjM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/e032433f6ae35d9ba4f45f7e2ca2307d/61edcf86/video/tos/useast2a/tos-useast2a-pve-0068/83dd9c01dabb4508aa79d96fa84eecb1/?a=1988&br=3600&bt=1800&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2lzZ21rN3J5dDMzNjczM0ApOTZnZmg5aDxkN2dlNjo4N2dhajAtMHIubWJfLS01MTZzcy4xLmEtMjQwNWNgY19jMjM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/48f8cdc7f7a54f788ebc0ad75787efad_1587412734~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=9mlus03WZdjCRC4h33z29LKSsyo%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/48f8cdc7f7a54f788ebc0ad75787efad_1587412734~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=BXGCzC4hRjWo3pWR6t7Y%2BmMC%2Bw8%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/13bcfa60b598452c81aa940216b7f847?x-expires=1642971600&x-signature=MfXB2%2B%2FzjsCeqCcwpjBbbKLW9r0%3D",
      bitrate: 1844051,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6723595815937526534",
      title: "original sound",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1641533290482741.mp3",
      coverThumb: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/68fe84993fb5e2b3e4bec3d64e08af92~c5_100x100.jpeg?x-expires=1643036400&x-signature=wbunImJ19ijaiqArsv7XoiukZLU%3D",
      coverMedium: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/68fe84993fb5e2b3e4bec3d64e08af92~c5_720x720.jpeg?x-expires=1643036400&x-signature=ZWaigCW%2BnKO%2Fraw08Tgvi5RCBF0%3D",
      coverLarge: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/68fe84993fb5e2b3e4bec3d64e08af92~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=kdAeiMKmw039WAYwImwnpL6xEOM%3D",
      authorName: "ashbash2425",
      original: true,
      duration: 15,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "195699",
        title: "fanart",
        desc: "Whether you love comic books, anime or anything else, show us your best #FanArt.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "47199",
        title: "hsm",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "29377",
        title: "highschoolmusical",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "303031",
        title: "wereallinthistogether",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 370900,
      shareCount: 21900,
      commentCount: 4976,
      playCount: 2e6
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 49,
        end: 59,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 60,
        end: 67,
        hashtagName: "fanart",
        hashtagId: "195699",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 68,
        end: 72,
        hashtagName: "hsm",
        hashtagId: "47199",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 73,
        end: 91,
        hashtagName: "highschoolmusical",
        hashtagId: "29377",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 92,
        end: 114,
        hashtagName: "wereallinthistogether",
        hashtagId: "303031",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6807436621999312134",
    desc: "Hulk joins the #spideychallenge \u{1F606}. I use a Ghetto Spider video as reference. #hulk #spiderman #takeonme #marvel #xyzbca",
    createTime: 1584979856,
    video: {
      id: "6807436621999312134",
      height: 1024,
      width: 576,
      duration: 14,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e5511b17c2544d558a646a8bf0b30b44_1584979858?x-expires=1642971600&x-signature=%2FtZNy6BoiuTcwdf2y1ZiX9oEtr0%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3947eab8564c4360bbfff97099b54128_1584979858?x-expires=1642971600&x-signature=anAKW%2BtAmhk3PcPMDY%2F12LWE8Cw%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/022b7e484ad44958a67fbcab34d4b411_1584979858?x-expires=1642971600&x-signature=yP%2BwYE766YbGfhuEiJm24f7iZI0%3D",
      playAddr: "https://v16-webapp.tiktok.com/18e14093414d68ae06e77bdd440609b4/61edcf85/video/tos/useast2a/tos-useast2a-ve-0068c003/f43caa136cbc4e7a8bacce1613881ad4/?a=1988&br=1904&bt=952&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2txO3Y7czpnczMzZDczM0ApaWZlN2VnOjw0NztkNjRkZ2cvbWc2MjMtcXBfLS1hMTZzczRgLTE0NDJeMC1hNi4wY186Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/18e14093414d68ae06e77bdd440609b4/61edcf85/video/tos/useast2a/tos-useast2a-ve-0068c003/f43caa136cbc4e7a8bacce1613881ad4/?a=1988&br=1904&bt=952&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2txO3Y7czpnczMzZDczM0ApaWZlN2VnOjw0NztkNjRkZ2cvbWc2MjMtcXBfLS1hMTZzczRgLTE0NDJeMC1hNi4wY186Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/3947eab8564c4360bbfff97099b54128_1584979858~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=lE0P1TPU%2F1W7QpaXzrNNSxcrzAU%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/3947eab8564c4360bbfff97099b54128_1584979858~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=CMPglG%2BMrt4W%2FOT9CCvEz7AYYxc%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e5511b17c2544d558a646a8bf0b30b44_1584979858?x-expires=1642971600&x-signature=%2FtZNy6BoiuTcwdf2y1ZiX9oEtr0%3D",
      bitrate: 975096,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6763345715096783622",
      title: "original sound",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1651226479189110.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      authorName: "Dave XP",
      original: true,
      duration: 14,
      album: ""
    },
    challenges: [
      {
        id: "19517324",
        title: "spideychallenge",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17079",
        title: "hulk",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "12413",
        title: "spiderman",
        desc: "",
        profileThumb: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        profileMedium: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        profileLarger: "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/faf65903bf96eb212851ae24c6b1acba",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "104445",
        title: "takeonme",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "16276",
        title: "marvel",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1652484531221509",
        title: "xyzbca",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 332900,
      shareCount: 24200,
      commentCount: 1949,
      playCount: 5e6
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 15,
        end: 31,
        hashtagName: "spideychallenge",
        hashtagId: "19517324",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 83,
        hashtagName: "hulk",
        hashtagId: "17079",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 84,
        end: 94,
        hashtagName: "spiderman",
        hashtagId: "12413",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 95,
        end: 104,
        hashtagName: "takeonme",
        hashtagId: "104445",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 105,
        end: 112,
        hashtagName: "marvel",
        hashtagId: "16276",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 113,
        end: 120,
        hashtagName: "xyzbca",
        hashtagId: "1652484531221509",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6802997878584249605",
    desc: "Animating the TMNT! \u{1F422}\u{1F355} I use @brandonlangys8 video as reference! #animation #shuffle #shuffledance #tmnt #shufflechallenge",
    createTime: 1583946378,
    video: {
      id: "6802997878584249605",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/13fb019e74f84e9e9cfd7f344276d94a_1583946384?x-expires=1642971600&x-signature=PiiXzVY7cmNQMrq3x7u135O2ZPk%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bf0a51f117b141129db3528bb0b8fae0_1583946383?x-expires=1642971600&x-signature=6o6Kwnt2mCFVZvZ7kif3lBOu0Gc%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bc99d1059fd14a3e8776c52056452245_1583946384?x-expires=1642971600&x-signature=NnF6JUTCswbI6EKTeRBqonfgl4Q%3D",
      playAddr: "https://v16-webapp.tiktok.com/bc5e5d53dc6c5fdb0bb0e8449b575015/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c004/a97c45763f2a43d29d1aad8038625704/?a=1988&br=1160&bt=580&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajs6NWU8aztrczMzOjczM0ApOzo0NWdmNTw0Nzk0OmhnNWdjNGNqXmleZWhfLS00MTZzc19jYy01X2JgYGAwNTYuYjA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/bc5e5d53dc6c5fdb0bb0e8449b575015/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c004/a97c45763f2a43d29d1aad8038625704/?a=1988&br=1160&bt=580&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajs6NWU8aztrczMzOjczM0ApOzo0NWdmNTw0Nzk0OmhnNWdjNGNqXmleZWhfLS00MTZzc19jYy01X2JgYGAwNTYuYjA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/bf0a51f117b141129db3528bb0b8fae0_1583946383~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=lk0AJRk9UYAIOhICtorfeRvu4Mw%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/bf0a51f117b141129db3528bb0b8fae0_1583946383~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=ze811f%2Br3kkLRI2W441BNEXCR1s%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/13fb019e74f84e9e9cfd7f344276d94a_1583946384?x-expires=1642971600&x-signature=PiiXzVY7cmNQMrq3x7u135O2ZPk%3D",
      bitrate: 594764,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6329772901717412609",
      title: "Seve",
      playUrl: "",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/3af78202acca4c8e979177effaa80125~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/3af78202acca4c8e979177effaa80125~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/3af78202acca4c8e979177effaa80125~c5_720x720.jpeg",
      authorName: "Tez Cadey",
      original: false,
      duration: 39,
      album: "Ultra Summer 2 (The Best In Deep and Tropical House)"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "18069",
        title: "shuffle",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "553029",
        title: "shuffledance",
        desc: "Heyo it's dance time!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "28721",
        title: "tmnt",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "4794870",
        title: "shufflechallenge",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 12e5,
      shareCount: 40800,
      commentCount: 7691,
      playCount: 87e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 31,
        end: 46,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6673452529613014021",
        isCommerce: false,
        userUniqueId: "brandonlangys",
        secUid: "MS4wLjABAAAA4o9SXPIeZWflYZAEXXzQwXlQFRKd_rKs15TVrozHadg3xwTW2rsqnQKCckBbu35J",
        subType: 0
      },
      {
        awemeId: "",
        start: 67,
        end: 77,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 86,
        hashtagName: "shuffle",
        hashtagId: "18069",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 87,
        end: 100,
        hashtagName: "shuffledance",
        hashtagId: "553029",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 101,
        end: 106,
        hashtagName: "tmnt",
        hashtagId: "28721",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 107,
        end: 124,
        hashtagName: "shufflechallenge",
        hashtagId: "4794870",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6801910711812427014",
    desc: "Olaf just beat Samantha's record! \u{1F606}\u26C4 #animation #olaf #flappybird #frozen #frozen2 #samantha",
    createTime: 1583693251,
    video: {
      id: "6801910711812427014",
      height: 1024,
      width: 576,
      duration: 11,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/140507d4a94b4cf9a04075a9561d87b2_1583693258?x-expires=1642971600&x-signature=WaU%2BdI2RWbwzG2DGSc3QwaDpRsw%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3510d72ee1bf43feb4032bc62eaf95de_1583693258?x-expires=1642971600&x-signature=YN%2FdEthT1nLXSk0Nj8zXqsmqfb4%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/758d827290c84c009678b414cfb25e3d_1583693258?x-expires=1642971600&x-signature=rG%2FCkIZg6HLWh5VSMm%2B32FPusNo%3D",
      playAddr: "https://v16-webapp.tiktok.com/a9025d7d14a36c86330ccde0b1e39cd3/61edcf82/video/tos/useast2a/tos-useast2a-ve-0068c001/4f2f62aac25c4d7694f6f667a3d6642e/?a=1988&br=1570&bt=785&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3VxZjRvcTttczMzOjczM0ApZmU1O2hnODs2NzlmNzdmNmc2bm9kZ3NeamZfLS00MTZzczAxLy0xNGM0YzQyXjQ2MjA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/a9025d7d14a36c86330ccde0b1e39cd3/61edcf82/video/tos/useast2a/tos-useast2a-ve-0068c001/4f2f62aac25c4d7694f6f667a3d6642e/?a=1988&br=1570&bt=785&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3VxZjRvcTttczMzOjczM0ApZmU1O2hnODs2NzlmNzdmNmc2bm9kZ3NeamZfLS00MTZzczAxLy0xNGM0YzQyXjQ2MjA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/3510d72ee1bf43feb4032bc62eaf95de_1583693258~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=eLOSjfiNQZIy1dJcZVybkBs8ea4%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/3510d72ee1bf43feb4032bc62eaf95de_1583693258~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=CUhrbMm%2FILkjOwH%2B7BhiJcWAsak%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/140507d4a94b4cf9a04075a9561d87b2_1583693258?x-expires=1642971600&x-signature=WaU%2BdI2RWbwzG2DGSc3QwaDpRsw%3D",
      bitrate: 804039,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6746368108098784006",
      title: "ROXANNE",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/e2a1f933fd7746088781c654cf6ce441",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f0bc2ec25b8c4dd7a859265adf6e5ef2~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f0bc2ec25b8c4dd7a859265adf6e5ef2~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f0bc2ec25b8c4dd7a859265adf6e5ef2~c5_720x720.jpeg",
      authorName: "Arizona Zervas",
      original: false,
      duration: 38,
      album: "ROXANNE"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17393",
        title: "olaf",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "249372",
        title: "flappybird",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5768",
        title: "frozen",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2698017",
        title: "frozen2",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "204079",
        title: "samantha",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 14e5,
      shareCount: 19100,
      commentCount: 4762,
      playCount: 116e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 38,
        end: 48,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 49,
        end: 54,
        hashtagName: "olaf",
        hashtagId: "17393",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 55,
        end: 66,
        hashtagName: "flappybird",
        hashtagId: "249372",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 67,
        end: 74,
        hashtagName: "frozen",
        hashtagId: "5768",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 75,
        end: 83,
        hashtagName: "frozen2",
        hashtagId: "2698017",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 84,
        end: 93,
        hashtagName: "samantha",
        hashtagId: "204079",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6797792618756476166",
    desc: "WAIT FOR IT... \u{1F418}\u{1F57A}Like if you want to see a Making-Of \u{1F449}\u2764 #animation #elephant #elephantdance #xyzbca",
    createTime: 1582734445,
    video: {
      id: "6797792618756476166",
      height: 1024,
      width: 576,
      duration: 12,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/307c1c6f162344408264bd85c3d0de4c_1582734511?x-expires=1642971600&x-signature=JMUfxRgDMfWsUUUo%2BUoHEnCifAs%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/33e29906030e4737ad8556d8b7274059_1582734516?x-expires=1642971600&x-signature=x9RmaJn29Uqqm%2Fgf1HnPwlnZ37w%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/62ef5e05f2284d8e9f6746544777dbd6_1582734515?x-expires=1642971600&x-signature=d39xNkBLtai1Z46M0AWU47JaroM%3D",
      playAddr: "https://v16-webapp.tiktok.com/c79d8664ea6edeee4554aa6b0143171c/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c001/18fa33a1ab0c466c86237c60555da419/?a=1988&br=1310&bt=655&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzk8bjN4Ozw8czMzNjczM0ApOzdoZDo6OGQ1NzM3ZGRpNGc1NGteLzFfal9fLS0zMTZzczQyLi5iYF42LjUzNTM2Ni46Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/c79d8664ea6edeee4554aa6b0143171c/61edcf83/video/tos/useast2a/tos-useast2a-ve-0068c001/18fa33a1ab0c466c86237c60555da419/?a=1988&br=1310&bt=655&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzk8bjN4Ozw8czMzNjczM0ApOzdoZDo6OGQ1NzM3ZGRpNGc1NGteLzFfal9fLS0zMTZzczQyLi5iYF42LjUzNTM2Ni46Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/33e29906030e4737ad8556d8b7274059_1582734516~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=2eY9ib6UA1T6jI09MIAlGlsu7UQ%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/33e29906030e4737ad8556d8b7274059_1582734516~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=DcioDJa4Up2Fz45nIjz9bUes6CA%3D"
      ],
      reflowCover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/307c1c6f162344408264bd85c3d0de4c_1582734511?x-expires=1642971600&x-signature=lAuB2hnsX1rCXEGI2k6nZDz8Ygc%3D",
      bitrate: 670751,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6690711983962098438",
      title: "Chinese New Year",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/fc8f5b9c38394b2fa9317991f578e123",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0dba7919ccf94972a7f3b264aa9c32f9~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0dba7919ccf94972a7f3b264aa9c32f9~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0dba7919ccf94972a7f3b264aa9c32f9~c5_720x720.jpeg",
      authorName: "SALES",
      original: false,
      duration: 29,
      album: "SALES - EP"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8507",
        title: "elephant",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "508151",
        title: "elephantdance",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1652484531221509",
        title: "xyzbca",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 526900,
      shareCount: 11500,
      commentCount: 2501,
      playCount: 33e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 59,
        end: 69,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 70,
        end: 79,
        hashtagName: "elephant",
        hashtagId: "8507",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 80,
        end: 94,
        hashtagName: "elephantdance",
        hashtagId: "508151",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 95,
        end: 102,
        hashtagName: "xyzbca",
        hashtagId: "1652484531221509",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6797129717607582981",
    desc: "Back at it again with the Hulk! I use @charlidamelio video as reference \u{1F60A} #animation #thehulk #hulk #britneychallenge #britneyspears",
    createTime: 1582580089,
    video: {
      id: "6797129717607582981",
      height: 1024,
      width: 576,
      duration: 14,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/32c811cd6f18475eaaccee230a8b5a6d_1582580094?x-expires=1642971600&x-signature=z%2BS5j%2Bo3eEknQdZXfZIEEt0fEO4%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4c10e836dc3a48e4a1fd07fdfe65b930_1582580094?x-expires=1642971600&x-signature=8KCNUoi6mq%2FSr7%2FL1QlVxPuUgag%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d3e76b0547754a7297646da7f2042252_1582580094?x-expires=1642971600&x-signature=oIFqncwJJnvu3i9eCkb9CGNLYg0%3D",
      playAddr: "https://v16-webapp.tiktok.com/95c4961269fc4ac6603d68c1c1732292/61edcf85/video/tos/useast2a/tos-useast2a-ve-0068/3da34327d309428ebdbbce2e6fd344e7/?a=1988&br=996&bt=498&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajg8bWgzPHc3czMzNTczM0ApaTY4Zjc2NDw0Nzc6OTZmZWcvLl9sX25fL15fLS0tMTZzcy9gLTEvMzQxMTYzNWEwNDM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/95c4961269fc4ac6603d68c1c1732292/61edcf85/video/tos/useast2a/tos-useast2a-ve-0068/3da34327d309428ebdbbce2e6fd344e7/?a=1988&br=996&bt=498&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajg8bWgzPHc3czMzNTczM0ApaTY4Zjc2NDw0Nzc6OTZmZWcvLl9sX25fL15fLS0tMTZzcy9gLTEvMzQxMTYzNWEwNDM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4c10e836dc3a48e4a1fd07fdfe65b930_1582580094~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=YCrNSoi%2Ff6Krf9mwqYrL0bOKPRk%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/4c10e836dc3a48e4a1fd07fdfe65b930_1582580094~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=4M8kYL17JkStWf3QSi1G3Nx8obc%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/32c811cd6f18475eaaccee230a8b5a6d_1582580094?x-expires=1642971600&x-signature=z%2BS5j%2Bo3eEknQdZXfZIEEt0fEO4%3D",
      bitrate: 510200,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6770097829735074565",
      title: "Baby One More Time",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1652856796452885.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/05e0eff0e552fce8c3da7e0d337c3010~c5_100x100.jpeg?x-expires=1643036400&x-signature=ZlTGPGyj%2BWQTCYsb4NgtuoixoAs%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/05e0eff0e552fce8c3da7e0d337c3010~c5_720x720.jpeg?x-expires=1643036400&x-signature=20sTaU8Zn64xowS9Ipk3CrZXFI8%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/05e0eff0e552fce8c3da7e0d337c3010~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=rwme45D7086gTm7MUNey7Nh27u8%3D",
      authorName: "Cory Nation",
      original: true,
      duration: 58,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "65522",
        title: "thehulk",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17079",
        title: "hulk",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6535800",
        title: "britneychallenge",
        desc: "Britney Spears sevenler burada m\u0131? \u{1F471}\u{1F3FB}\u200D\u2640\uFE0FHit Me Baby One More Time i\xE7in TikTok'ta dans zaman\u0131! \u{1F57A}\u{1F3FB}",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/451fc669263f79879c0f2eb56730a941",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/451fc669263f79879c0f2eb56730a941",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/451fc669263f79879c0f2eb56730a941",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1198",
        title: "britneyspears",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 32e5,
      shareCount: 114500,
      commentCount: 14700,
      playCount: 217e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 38,
        end: 52,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "5831967",
        isCommerce: false,
        userUniqueId: "charlidamelio",
        secUid: "MS4wLjABAAAA-VASjiXTh7wDDyXvjk10VFhMWUAoxr8bgfO1kAL1-9s",
        subType: 0
      },
      {
        awemeId: "",
        start: 75,
        end: 85,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 86,
        end: 94,
        hashtagName: "thehulk",
        hashtagId: "65522",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 95,
        end: 100,
        hashtagName: "hulk",
        hashtagId: "17079",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 101,
        end: 118,
        hashtagName: "britneychallenge",
        hashtagId: "6535800",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 119,
        end: 133,
        hashtagName: "britneyspears",
        hashtagId: "1198",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6795538998254243077",
    desc: "Leave a like for Lego Batman! \u{1F60A}\u2764#animation #fanart #legobatman #batman #shuffle #stairshuffle",
    createTime: 1582209721,
    video: {
      id: "6795538998254243077",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/16100a00850048f4a49784d41b38ab00_1582209728?x-expires=1642971600&x-signature=zQdIK6RM0UTwDFZVybmRc%2B9m8CQ%3D",
      originCover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8aa6b134e1424193a5647ea067022e0b_1582209727?x-expires=1642971600&x-signature=UBiFzJH4r4plskuQQ%2B%2F3qkPwra0%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/579760dd98b04547a67c75569f5bc18b_1582209727?x-expires=1642971600&x-signature=efOw%2FwBBMWjGtEezuKxSAr%2F9YBg%3D",
      playAddr: "https://v16-webapp.tiktok.com/49794d9759abbbce8e731a92e5d9f8aa/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c002/206213635469447782a17fb0d400a61f/?a=1988&br=1054&bt=527&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhlPHF3Ojo8czMzNTczM0ApNzg6ZjM5M2Q0N2hpN2g1OmdxNmNlL2pvaTRfLS02MTZzczVhM19fYDUzLjFjNmI2LjU6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/49794d9759abbbce8e731a92e5d9f8aa/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c002/206213635469447782a17fb0d400a61f/?a=1988&br=1054&bt=527&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhlPHF3Ojo8czMzNTczM0ApNzg6ZjM5M2Q0N2hpN2g1OmdxNmNlL2pvaTRfLS02MTZzczVhM19fYDUzLjFjNmI2LjU6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/8aa6b134e1424193a5647ea067022e0b_1582209727~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=QDOwKys0k9%2B0hX5ltTluNuNXZbA%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/8aa6b134e1424193a5647ea067022e0b_1582209727~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=OmbjdkGttZOmGpPL9hR8N80Ymu4%3D"
      ],
      reflowCover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/16100a00850048f4a49784d41b38ab00_1582209728?x-expires=1642971600&x-signature=KH2ktS6mvLLMs96B9TEeLAueN5M%3D",
      bitrate: 539972,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6549202998130643983",
      title: "#PlankChallenge",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6877749521024076549.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1c011da9478ea466ddff54596a7ddf48~c5_100x100.jpeg?x-expires=1643036400&x-signature=TgzZdYSPR0kF1%2FEjjzbjOagrI8I%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1c011da9478ea466ddff54596a7ddf48~c5_720x720.jpeg?x-expires=1643036400&x-signature=S6MryZjwjm2ghyxlEejvwF7UkYw%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1c011da9478ea466ddff54596a7ddf48~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=Z4LyTTdebkjFLv6yZV9EzR7dxAA%3D",
      authorName: "bing bong",
      original: true,
      duration: 15,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "195699",
        title: "fanart",
        desc: "Whether you love comic books, anime or anything else, show us your best #FanArt.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/a23dfabcc366eb99cdc207db0d7acc7d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1717557",
        title: "legobatman",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "18112",
        title: "batman",
        desc: "\xA1Comparte al mundo todo lo que amas sobre el ic\xF3nico Caballero de la noche!",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/cfb283feda8e89edb9f6edf131976f9d",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/cfb283feda8e89edb9f6edf131976f9d",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/cfb283feda8e89edb9f6edf131976f9d",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "18069",
        title: "shuffle",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "60678311",
        title: "stairshuffle",
        desc: "Do you think you can shuffle well? How about on stairs!? \u{1F483}\u{1F57A} Show us your moves and challenge your friends by showing us your #stairshuffle!\u{1F602} \u{1F463}",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 559e3,
      shareCount: 31e3,
      commentCount: 2396,
      playCount: 4e6
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 33,
        end: 43,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 44,
        end: 51,
        hashtagName: "fanart",
        hashtagId: "195699",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 52,
        end: 63,
        hashtagName: "legobatman",
        hashtagId: "1717557",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 64,
        end: 71,
        hashtagName: "batman",
        hashtagId: "18112",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 72,
        end: 80,
        hashtagName: "shuffle",
        hashtagId: "18069",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 81,
        end: 94,
        hashtagName: "stairshuffle",
        hashtagId: "60678311",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6793765523227266310",
    desc: "Having fun animating BB-8! \u{1F60A} #animation #bb8 #starwars #foru #foryou #xyzbca #culikitakati",
    createTime: 1581796801,
    video: {
      id: "6793765523227266310",
      height: 1024,
      width: 576,
      duration: 7,
      ratio: "720p",
      cover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/99feff57148a478dbfa934e326e25089_1581796806?x-expires=1642971600&x-signature=J5oh3U5cEZB5WYeHdpD6JVXQLSw%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/444bb933603f4dc58bc2855fa8b0713d_1581796805?x-expires=1642971600&x-signature=qz7X558HRP%2BeqB7mh%2FgWZQpLJOU%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8a27ecd134ad477691d8a15b04af38c0_1581796806?x-expires=1642971600&x-signature=GOEL7DiYqETD0I95GHObzLye01s%3D",
      playAddr: "https://v16-webapp.tiktok.com/367dd4a9c9f13f7fd79ce5dd094c601d/61edcf7e/video/tos/useast2a/tos-useast2a-ve-0068c001/99cc07cf9eba4907945179a4a137ebf7/?a=1988&br=720&bt=360&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anBsanU1OmQ3czMzNzczM0ApNTdkNzU5NmU3NzM4ZGQ8NGdpaGJvLjFrbzFfLS0zMTZzc2BhNl81NmEyLTMvLmMtMWI6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/367dd4a9c9f13f7fd79ce5dd094c601d/61edcf7e/video/tos/useast2a/tos-useast2a-ve-0068c001/99cc07cf9eba4907945179a4a137ebf7/?a=1988&br=720&bt=360&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anBsanU1OmQ3czMzNzczM0ApNTdkNzU5NmU3NzM4ZGQ8NGdpaGJvLjFrbzFfLS0zMTZzc2BhNl81NmEyLTMvLmMtMWI6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/444bb933603f4dc58bc2855fa8b0713d_1581796805~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=nHYGkz%2FdyWLTOhWuJLAIDBAC5ZE%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/444bb933603f4dc58bc2855fa8b0713d_1581796805~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=rWrTJwLuZhw1yix6mNhVBfHA8KE%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/99feff57148a478dbfa934e326e25089_1581796806?x-expires=1642971600&x-signature=qCVAA1vrtJlLdRdoAV8s19meTAI%3D",
      bitrate: 369032,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6727960752390425349",
      title: "Patatak",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1642566624592918.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70db623e73946c09ce61268e439bb2b5~c5_100x100.jpeg?x-expires=1643036400&x-signature=2g1LLxny7IkEk1baRVpSiyI64%2BQ%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70db623e73946c09ce61268e439bb2b5~c5_720x720.jpeg?x-expires=1643036400&x-signature=izvJVIpzGXDCr6PgQbY1X4qKf6o%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70db623e73946c09ce61268e439bb2b5~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=1uIT6QBfdZl9E9c5bH3Uzl%2Bj2Ys%3D",
      authorName: "Alex B.",
      original: true,
      duration: 7,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1102353",
        title: "bb8",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6609",
        title: "starwars",
        desc: "Who's excited for The Force Awakens? Get your Star Wars on!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "108264",
        title: "foru",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1652484531221509",
        title: "xyzbca",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "49752945",
        title: "culikitakati",
        desc: "Culiki ta ka ti... culiki ta ka ta...",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/e9d439302908be74c1001ba58929fed6",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/e9d439302908be74c1001ba58929fed6",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/e9d439302908be74c1001ba58929fed6",
        coverThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/c683fb1037f559f5a10e422d64d050fc",
        coverMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/c683fb1037f559f5a10e422d64d050fc",
        coverLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/c683fb1037f559f5a10e422d64d050fc",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 16e5,
      shareCount: 109700,
      commentCount: 4139,
      playCount: 139e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 30,
        end: 40,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 41,
        end: 45,
        hashtagName: "bb8",
        hashtagId: "1102353",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 46,
        end: 55,
        hashtagName: "starwars",
        hashtagId: "6609",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 61,
        hashtagName: "foru",
        hashtagId: "108264",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 62,
        end: 69,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 70,
        end: 77,
        hashtagName: "xyzbca",
        hashtagId: "1652484531221509",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 91,
        hashtagName: "culikitakati",
        hashtagId: "49752945",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6792632842481356038",
    desc: "Animating Olaf once again! \u2603\uFE0F How did he do? #animation #foru #foryou #olaf #olafchallenge #frozen #smilechallenge",
    createTime: 1581533078,
    video: {
      id: "6792632842481356038",
      height: 1024,
      width: 576,
      duration: 8,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2083a02fcb6d40d2bd64f5e4fe744029_1581533083?x-expires=1642971600&x-signature=bt%2B47afRDRpwnxtkoKEs08FatnU%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/78e8263258894c7db14b3bee729fb98b_1581533083?x-expires=1642971600&x-signature=flieraj07%2F1NwUelm%2FJgmMXktus%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/61885737cf3c430283ea0152c8656c90_1581533083?x-expires=1642971600&x-signature=kfZOey9oa0uCZDv01cS9QfOOSFM%3D",
      playAddr: "https://v16-webapp.tiktok.com/75e36bc42e3fc8d4909497e2e9ec4458/61edcf7f/video/tos/useast2a/tos-useast2a-ve-0068c002/1d48d643ec684ee8b90fcaf24ad04beb/?a=1988&br=1078&bt=539&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anM2OXRwNjM3czMzNDczM0ApZTY4ODU6PDxmNzg7ZzozZGdfY2JrZG9sYy9fLS1jMTZzczM0Y2IuX14yNGBjMl82YC86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/75e36bc42e3fc8d4909497e2e9ec4458/61edcf7f/video/tos/useast2a/tos-useast2a-ve-0068c002/1d48d643ec684ee8b90fcaf24ad04beb/?a=1988&br=1078&bt=539&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anM2OXRwNjM3czMzNDczM0ApZTY4ODU6PDxmNzg7ZzozZGdfY2JrZG9sYy9fLS1jMTZzczM0Y2IuX14yNGBjMl82YC86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/78e8263258894c7db14b3bee729fb98b_1581533083~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=lWyCWpukK3Z5WEQXL0r73vk24Po%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/78e8263258894c7db14b3bee729fb98b_1581533083~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=CMK3%2B%2Bvl7I6XdE74gffFHjcc25E%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2083a02fcb6d40d2bd64f5e4fe744029_1581533083?x-expires=1642971600&x-signature=bt%2B47afRDRpwnxtkoKEs08FatnU%3D",
      bitrate: 552580,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6673815674961414917",
      title: "famous ppl are using my sound sks thank u ahhh",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1629362280550421.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d039b78a9da68419f251d5477d32237~c5_100x100.jpeg?x-expires=1643036400&x-signature=EIFDs3zIS0Lp6JE62leFrHA8yfw%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d039b78a9da68419f251d5477d32237~c5_720x720.jpeg?x-expires=1643036400&x-signature=g8id25wU5Ax%2Fp%2BimZVZCQcV2aF8%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d039b78a9da68419f251d5477d32237~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=JIQLounCsfpAXoZcj1ZaKtPoPhU%3D",
      authorName: "\u{1D41A}\u{1D42F}\u{1D41E}\u{1D42B}\u{1D432} \u{1F98B}",
      original: true,
      duration: 8,
      album: "\u{1D62E}\u{1D63A}\u{1D627}\u{1D626}\u{1D626}\u{1D62D}\u{1D62A}\u{1D62F}\u{1D628}\u{1D634}"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "108264",
        title: "foru",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "17393",
        title: "olaf",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6012024",
        title: "olafchallenge",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "5768",
        title: "frozen",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "145961",
        title: "smilechallenge",
        desc: "Smiles are so contagious! We challenge you to bring out your best smile and spread musical.ly positive vibes! Check out @justindrewblake's smile for inspo!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 23e5,
      shareCount: 90200,
      commentCount: 3946,
      playCount: 129e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 45,
        end: 55,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 56,
        end: 61,
        hashtagName: "foru",
        hashtagId: "108264",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 62,
        end: 69,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 70,
        end: 75,
        hashtagName: "olaf",
        hashtagId: "17393",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 76,
        end: 90,
        hashtagName: "olafchallenge",
        hashtagId: "6012024",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 91,
        end: 98,
        hashtagName: "frozen",
        hashtagId: "5768",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 99,
        end: 114,
        hashtagName: "smilechallenge",
        hashtagId: "145961",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6789687770735545606",
    desc: "Animating Samus! \u{1F60A} I use @uwumi video as reference, Rig by Joe Toole #animation #samus #nintendo #oneupgirl #jumpupsuperstar",
    createTime: 1580847376,
    video: {
      id: "6789687770735545606",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5ad59d9455a14969add40e912e9188dc_1580847381?x-expires=1642971600&x-signature=PBqoow%2BdLZhUcgJ1vQgKCq%2BN%2BbY%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d9cd4c8e5f6142ffaaa72bf30dd78be5_1580847382?x-expires=1642971600&x-signature=IhdUY3ECpGUaLRgrSY%2BCmnpVKY8%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/eb36860bbb28477181bb8eef1ed73468_1580847382?x-expires=1642971600&x-signature=wysaBz5I2YcJaoZUMQCiJUgqAUQ%3D",
      playAddr: "https://v16-webapp.tiktok.com/420af2fe5a68d6c32de8320eecbcfc58/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c001/f09f715f5c2749c591214da2121cab2e/?a=1988&br=1316&bt=658&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and1Om83czV3cjMzZTczM0ApMzU4OTVkZWRkNzQ3NDQ0ZGdhM3BfYWVqL3BfLS01MTZzc2MzMjNeYjE2LjMvNDFjYWM6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/420af2fe5a68d6c32de8320eecbcfc58/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c001/f09f715f5c2749c591214da2121cab2e/?a=1988&br=1316&bt=658&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and1Om83czV3cjMzZTczM0ApMzU4OTVkZWRkNzQ3NDQ0ZGdhM3BfYWVqL3BfLS01MTZzc2MzMjNeYjE2LjMvNDFjYWM6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-p-0068/d9cd4c8e5f6142ffaaa72bf30dd78be5_1580847382~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=pJKX67%2FKpKu2AClx4HGHkX78bUo%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d9cd4c8e5f6142ffaaa72bf30dd78be5_1580847382~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=mzrQ3fc31h5HzOAMAefAuQ8FdUc%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5ad59d9455a14969add40e912e9188dc_1580847381?x-expires=1642971600&x-signature=PBqoow%2BdLZhUcgJ1vQgKCq%2BN%2BbY%3D",
      bitrate: 673996,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "284152021925212160",
      title: "Jump Up Super Star VGR Remix ft. Jenny",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6882762643783142149.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5e725222430abb4645dc06fca0071da~c5_100x100.jpeg?x-expires=1643036400&x-signature=i%2BNJCuTWCGuY6WKaWfeVBDOoDQE%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5e725222430abb4645dc06fca0071da~c5_720x720.jpeg?x-expires=1643036400&x-signature=ryG6oSGYybHldmaEKBdCSqigwc4%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5e725222430abb4645dc06fca0071da~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=9Il9MRc6hnQRXl0QmSeLEhCNGFc%3D",
      authorName: "\u{1D440}\u{1D468}\u{1D46B}\u{1D470}\u{1D46C}",
      original: true,
      duration: 15,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "2867743",
        title: "samus",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "183398",
        title: "nintendo",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "82734154",
        title: "oneupgirl",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "71596977",
        title: "jumpupsuperstar",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 460500,
      shareCount: 28e3,
      commentCount: 2476,
      playCount: 39e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 26,
        end: 32,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6636871415030136838",
        isCommerce: false,
        userUniqueId: "uwumi",
        secUid: "MS4wLjABAAAA9LlSd43BgekofaFku9zpv5YbL9zmtpbbX-HpRK7gGghxrptqQdc_7vVRa23jfFIH",
        subType: 0
      },
      {
        awemeId: "",
        start: 70,
        end: 80,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 81,
        end: 87,
        hashtagName: "samus",
        hashtagId: "2867743",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 88,
        end: 97,
        hashtagName: "nintendo",
        hashtagId: "183398",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 98,
        end: 108,
        hashtagName: "oneupgirl",
        hashtagId: "82734154",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 109,
        end: 125,
        hashtagName: "jumpupsuperstar",
        hashtagId: "71596977",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6787876218516573446",
    desc: "Animated collab with my buddy @donaldducc ! \u{1F986}\u{1F60A} Rig by SgwaYang #animation #foru #foryou #donaldduck",
    createTime: 1580425592,
    video: {
      id: "6787876218516573446",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c5c0363cff7b4580b8edaef5884b4df8_1580425599?x-expires=1642971600&x-signature=wPpclG0IDcw%2B4L0cLQ3rPNVfiik%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6b3e376538104db4a57d95aef0be85a0_1580425597?x-expires=1642971600&x-signature=6%2FX4DjdxIonHmP%2Fvdi9ecjAvXfw%3D",
      dynamicCover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/65b94d16edca45559fd37ab8e0f1e728_1580425598?x-expires=1642971600&x-signature=B9gZM2rwB4DR5b%2BWPVJ83AuR9V0%3D",
      playAddr: "https://v16-webapp.tiktok.com/ec867089db3a7f9ff6963b8f79a37a68/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c001/ab8f4d740c964e819b814b822a72ef76/?a=1988&br=1484&bt=742&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzd5d3c7NHZwcjMzNTczM0ApOzRmNGg5ZTxnN2Y6aDg2aWdmZWNfZC1oL21fLS0vMTZzc2AyXi0vLmItYS0zM2BhLl86Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/ec867089db3a7f9ff6963b8f79a37a68/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c001/ab8f4d740c964e819b814b822a72ef76/?a=1988&br=1484&bt=742&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzd5d3c7NHZwcjMzNTczM0ApOzRmNGg5ZTxnN2Y6aDg2aWdmZWNfZC1oL21fLS0vMTZzc2AyXi0vLmItYS0zM2BhLl86Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/6b3e376538104db4a57d95aef0be85a0_1580425597~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=b%2FUm8mC%2FmrjJ7wztvqhY1g5YNAc%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/6b3e376538104db4a57d95aef0be85a0_1580425597~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=MlfiWHD6Uei07qF3M8CIGXeltkY%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c5c0363cff7b4580b8edaef5884b4df8_1580425599?x-expires=1642971600&x-signature=wPpclG0IDcw%2B4L0cLQ3rPNVfiik%3D",
      bitrate: 760595,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6704333887629232901",
      title: "Opaul",
      playUrl: "",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a37d343543424197aaef831973625224~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a37d343543424197aaef831973625224~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/a37d343543424197aaef831973625224~c5_720x720.jpeg",
      authorName: "Freddie Dredd",
      original: false,
      duration: 35,
      album: "Pink Lotus"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "108264",
        title: "foru",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "261294",
        title: "donaldduck",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 54e4,
      shareCount: 14900,
      commentCount: 1629,
      playCount: 39e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 30,
        end: 41,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6633268078182694918",
        isCommerce: false,
        userUniqueId: "donaldducc",
        secUid: "MS4wLjABAAAAd7nT2tq_VsP4B9Rw14Mjsmla877CyP2rMxSSdQpdtAGOx4EPjAwXblvmNtnJsJDz",
        subType: 0
      },
      {
        awemeId: "",
        start: 65,
        end: 75,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 76,
        end: 81,
        hashtagName: "foru",
        hashtagId: "108264",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 82,
        end: 89,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 90,
        end: 101,
        hashtagName: "donaldduck",
        hashtagId: "261294",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6786676450289290501",
    desc: "Fun collab with the awesome @montanatucker ! Animation by me and rig by Maxindia099 \u{1F648}\u{1F60A} #animation #dancemonkey #foru #foryou",
    createTime: 1580146248,
    video: {
      id: "6786676450289290501",
      height: 1024,
      width: 576,
      duration: 20,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/17a8bd67f9c745908eda5386fe171ec2_1580146252?x-expires=1642971600&x-signature=%2BLBE4MWcdvq%2BaCJXwxVMOdA72kg%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/60e22059b97c4efcb3ea16a720c1f26c_1580146252?x-expires=1642971600&x-signature=10bFXyb28RZm0PcsNzS4UGhcr8k%3D",
      dynamicCover: "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8b89d3115efd450daf9551dbb2ed6201_1580146253?x-expires=1642971600&x-signature=Ui3FHAevUlAN2q%2BtDhXguHqANGc%3D",
      playAddr: "https://v16-webapp.tiktok.com/d79e55f097d59bb494955923a7e575d3/61edcf8b/video/tos/useast2a/tos-useast2a-ve-0068c003/7615eec80a124c90878dc1b124b2ca27/?a=1988&br=2334&bt=1167&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3VvOGh2Z2prcjMzZTczM0ApOWhnO2hkZTwzNzQ3aDQ3aWdkbmJwYmQ0cGtfLS1fMTZzcy1gLWBeMmI2Ml9fYC5jNDY6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/d79e55f097d59bb494955923a7e575d3/61edcf8b/video/tos/useast2a/tos-useast2a-ve-0068c003/7615eec80a124c90878dc1b124b2ca27/?a=1988&br=2334&bt=1167&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3VvOGh2Z2prcjMzZTczM0ApOWhnO2hkZTwzNzQ3aDQ3aWdkbmJwYmQ0cGtfLS1fMTZzcy1gLWBeMmI2Ml9fYC5jNDY6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/60e22059b97c4efcb3ea16a720c1f26c_1580146252~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=DvQucLcaS7JIvq5cLOexenLuo%2B0%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/60e22059b97c4efcb3ea16a720c1f26c_1580146252~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=H%2F%2FYlTgOAsN%2B%2BJorgqy97V%2BJYMo%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/17a8bd67f9c745908eda5386fe171ec2_1580146252?x-expires=1642971600&x-signature=%2BLBE4MWcdvq%2BaCJXwxVMOdA72kg%3D",
      bitrate: 1195558,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6786673680631089926",
      title: "original sound",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/1656903070076950.mp3",
      coverThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      coverMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      coverLarge: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      authorName: "Dave XP",
      original: true,
      duration: 20,
      album: ""
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "1342023",
        title: "dancemonkey",
        desc: "\u0421\u043D\u0438\u043C\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043E \u043F\u043E\u0434 \u043D\u043E\u0432\u044B\u0439 \u0442\u0440\u0435\u043A c \u0445\u044D\u0448\u0442\u0435\u0433\u043E\u043C #dancemonkey \u{1F3B9}\u{1F525}",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3e2bcb9fe0662a596f568228c2f6610f",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3e2bcb9fe0662a596f568228c2f6610f",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/3e2bcb9fe0662a596f568228c2f6610f",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "108264",
        title: "foru",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 369600,
      shareCount: 6964,
      commentCount: 834,
      playCount: 33e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 28,
        end: 42,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "229747563124387840",
        isCommerce: false,
        userUniqueId: "montanatucker",
        secUid: "MS4wLjABAAAArwtftIZMAAAPnM4_LhGtRuiq8T1pssCYslsqUlbXbWPMwC7WH_G68XcLuufRytwF",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 99,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 100,
        end: 112,
        hashtagName: "dancemonkey",
        hashtagId: "1342023",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 113,
        end: 118,
        hashtagName: "foru",
        hashtagId: "108264",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 119,
        end: 126,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6781889079425502470",
    desc: "Animating Vader and the gang! Rigs by Squir. I use @charlidamelio video as reference #animation #foru #foryou #tiktokers #starwars #darthvader",
    createTime: 1579031602,
    video: {
      id: "6781889079425502470",
      height: 1024,
      width: 576,
      duration: 9,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bd9e7380837148b69ae6faab5733fbf0_1579031605?x-expires=1642971600&x-signature=hRqum8cRFR%2Bu9ExI%2FfFgpo3I2Jw%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/1f64687226854e5696e59b4792b6ef9d_1579031604?x-expires=1642971600&x-signature=KeH1KhTJm82z6OVt7RT6ZuLB9qQ%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/a0bd7a6d197241ecaa938ed159546c7a_1579031606?x-expires=1642971600&x-signature=56yrlcwjuE7%2B4TyzE6jQoh%2Fu%2FI8%3D",
      playAddr: "https://v16-webapp.tiktok.com/84b27db3316a894b301756fb6c2d5862/61edcf81/video/tos/useast2a/tos-useast2a-ve-0068/c89219180002451ea1e62854c6556bb2/?a=1988&br=2032&bt=1016&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29nOXQ1azs0cjMzaDczM0ApNWg3NWc7Ojw5N2g8NWRkNmdgZDBxa21ybGNfLS1eMTZzcy9gLV42MS1fMV5jLzBjMmA6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/84b27db3316a894b301756fb6c2d5862/61edcf81/video/tos/useast2a/tos-useast2a-ve-0068/c89219180002451ea1e62854c6556bb2/?a=1988&br=2032&bt=1016&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29nOXQ1azs0cjMzaDczM0ApNWg3NWc7Ojw5N2g8NWRkNmdgZDBxa21ybGNfLS1eMTZzcy9gLV42MS1fMV5jLzBjMmA6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1f64687226854e5696e59b4792b6ef9d_1579031604~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=mb105XJnk9uhwrE3yp%2BGpxJQpFg%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/1f64687226854e5696e59b4792b6ef9d_1579031604~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=XZ9K4IuRLQ0P8tzXC9L2%2BX71FkU%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bd9e7380837148b69ae6faab5733fbf0_1579031605?x-expires=1642971600&x-signature=hRqum8cRFR%2Bu9ExI%2FfFgpo3I2Jw%3D",
      bitrate: 1040516,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6740802873518508805",
      title: "Lip Gloss (Main Version)",
      playUrl: "",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/526d1eed07f74fa6ad499f5c63c083d9~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/526d1eed07f74fa6ad499f5c63c083d9~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/526d1eed07f74fa6ad499f5c63c083d9~c5_720x720.jpeg",
      authorName: "Lil Mama",
      original: false,
      duration: 9,
      album: "Lip Gloss"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "108264",
        title: "foru",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "78017460",
        title: "tiktokers",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6609",
        title: "starwars",
        desc: "Who's excited for The Force Awakens? Get your Star Wars on!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "250056",
        title: "darthvader",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 952500,
      shareCount: 224e3,
      commentCount: 4308,
      playCount: 64e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 51,
        end: 65,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "5831967",
        isCommerce: false,
        userUniqueId: "charlidamelio",
        secUid: "MS4wLjABAAAA-VASjiXTh7wDDyXvjk10VFhMWUAoxr8bgfO1kAL1-9s",
        subType: 0
      },
      {
        awemeId: "",
        start: 85,
        end: 95,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 96,
        end: 101,
        hashtagName: "foru",
        hashtagId: "108264",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 102,
        end: 109,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 110,
        end: 120,
        hashtagName: "tiktokers",
        hashtagId: "78017460",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 121,
        end: 130,
        hashtagName: "starwars",
        hashtagId: "6609",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 131,
        end: 142,
        hashtagName: "darthvader",
        hashtagId: "250056",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6780072883197709574",
    desc: "Animating C-3PO! \u{1F60A} I use the amazing @arbacn take on the dance as reference! #animation #foru #foryou #tiktokers #starwars #c3po",
    createTime: 1578608738,
    video: {
      id: "6780072883197709574",
      height: 1024,
      width: 576,
      duration: 14,
      ratio: "720p",
      cover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3aafc92529624081af7da2c01281447b_1578608743?x-expires=1642971600&x-signature=IO1DGaVAt4%2B1WEPYBpwQJaRMEJE%3D",
      originCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2e46e2276def4d5cbf5211bf29de0e79_1578608742?x-expires=1642971600&x-signature=gdiTFaX%2ByfSW8Q5exmvQD5k%2BLk0%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d0bf05d6bb6e4335954733e41f5566f8_1578608743?x-expires=1642971600&x-signature=LBzjO%2FumQnyJCHpNL0qpACqM%2BS8%3D",
      playAddr: "https://v16-webapp.tiktok.com/065848b29dda8e3c9acd2e3a331fc9e7/61edcf85/video/tos/useast2a/tos-useast2a-ve-0068/94a6c63f86854c91980b25bfc11176d0/?a=1988&br=1506&bt=753&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anQ8d21kdmx0cjMzPDczM0ApZWU6NTpnMztkN2U2NjVpOWdhcGo2NDFjZF9fLS0xMTZzc2EuNGM1YGEwYTZfXi5hXzU6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/065848b29dda8e3c9acd2e3a331fc9e7/61edcf85/video/tos/useast2a/tos-useast2a-ve-0068/94a6c63f86854c91980b25bfc11176d0/?a=1988&br=1506&bt=753&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anQ8d21kdmx0cjMzPDczM0ApZWU6NTpnMztkN2U2NjVpOWdhcGo2NDFjZF9fLS0xMTZzc2EuNGM1YGEwYTZfXi5hXzU6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/2e46e2276def4d5cbf5211bf29de0e79_1578608742~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=%2BsdueOE9%2B6jPdJ5BgVRX4fwndhQ%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/2e46e2276def4d5cbf5211bf29de0e79_1578608742~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=wMhfH7f%2BFbWyXq2Bec%2Fs7rvpl%2B0%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3aafc92529624081af7da2c01281447b_1578608743?x-expires=1642971600&x-signature=IO1DGaVAt4%2B1WEPYBpwQJaRMEJE%3D",
      bitrate: 771422,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6751085052446198534",
      title: "Candy",
      playUrl: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/ada210917b3c41fc8c6e39458fef23f4",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/2fdd432f818644208c2617c9dd63c7e7~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/2fdd432f818644208c2617c9dd63c7e7~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/2fdd432f818644208c2617c9dd63c7e7~c5_720x720.jpeg",
      authorName: "Doja Cat",
      original: false,
      duration: 15,
      album: "Candy"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "108264",
        title: "foru",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "78017460",
        title: "tiktokers",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "6609",
        title: "starwars",
        desc: "Who's excited for The Force Awakens? Get your Star Wars on!",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "3261425",
        title: "c3po",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 810100,
      shareCount: 79300,
      commentCount: 3346,
      playCount: 63e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 38,
        end: 45,
        hashtagName: "",
        hashtagId: "",
        type: 0,
        userId: "6736725635928916997",
        isCommerce: false,
        userUniqueId: "arbacn",
        secUid: "MS4wLjABAAAA_IaVOVMY8yfoXZSt0hjDHFBOEDXRjrP0knE_fvvJP-B3hm8y_mamw2cIgt2MQB4J",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 88,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 89,
        end: 94,
        hashtagName: "foru",
        hashtagId: "108264",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 95,
        end: 102,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 103,
        end: 113,
        hashtagName: "tiktokers",
        hashtagId: "78017460",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 114,
        end: 123,
        hashtagName: "starwars",
        hashtagId: "6609",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 124,
        end: 129,
        hashtagName: "c3po",
        hashtagId: "3261425",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  },
  {
    id: "6778215449407524101",
    desc: "Animating WALL-E! \u{1F916}\u{1F60A} Rig by Corey Drake #animation #foru #foryou #tiktokers #walle #disney #pixar",
    createTime: 1578176270,
    video: {
      id: "6778215449407524101",
      height: 1024,
      width: 576,
      duration: 15,
      ratio: "720p",
      cover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/45b74d1ea2d149b69b602fd14475449b_1578176273?x-expires=1642971600&x-signature=GHfFUxi0ChYO8BT%2FytPTICAVBnU%3D",
      originCover: "https://p77-sign-va-lite.tiktokcdn.com/obj/tos-maliva-p-0068/5377cdc1bc15466bba8329779ba26cfd_1578176272?x-expires=1642971600&x-signature=HvTWIG3rj%2FiMxnnfIoBIvFsR%2BVQ%3D",
      dynamicCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/21b79ac90b1b493b8794cd43f9e21f36_1578176273?x-expires=1642971600&x-signature=oIZuzPEPhrB8oY6XlEdVL1EYOso%3D",
      playAddr: "https://v16-webapp.tiktok.com/a51eb817d63bee19f9795f7da52b6253/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c003/07b93573e8134df8a4ff6adf5595cce9/?a=1988&br=1480&bt=740&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY7OHZ4aHhqcjMzZTczM0ApZGk7NjlpOGVnN2ZkODY6NmdjNjJlYWA2cTVfLS0zMTZzczRhNjIzNl5hXi4uNmMzNTU6Yw%3D%3D&vl=&vr=",
      downloadAddr: "https://v16-webapp.tiktok.com/a51eb817d63bee19f9795f7da52b6253/61edcf86/video/tos/useast2a/tos-useast2a-ve-0068c003/07b93573e8134df8a4ff6adf5595cce9/?a=1988&br=1480&bt=740&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_F5qkag3-I&l=20220123155815010190209092187A6F80&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY7OHZ4aHhqcjMzZTczM0ApZGk7NjlpOGVnN2ZkODY6NmdjNjJlYWA2cTVfLS0zMTZzczRhNjIzNl5hXi4uNmMzNTU6Yw%3D%3D&vl=&vr=",
      shareCover: [
        "",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/5377cdc1bc15466bba8329779ba26cfd_1578176272~tplv-tiktok-play.jpeg?x-expires=1643554800&x-signature=rEVi%2Bc5r%2Fz6bdnD2gM9%2B7sCPu0U%3D",
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/5377cdc1bc15466bba8329779ba26cfd_1578176272~tplv-tiktokx-share-play.jpeg?x-expires=1643554800&x-signature=6kBhwXOzzFqIrfWIz4Q5LhEdPv8%3D"
      ],
      reflowCover: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/45b74d1ea2d149b69b602fd14475449b_1578176273?x-expires=1642971600&x-signature=OcHISV8u3WMhP3ey7yLYoWv91IU%3D",
      bitrate: 758333,
      encodedType: "normal",
      format: "mp4",
      videoQuality: "normal",
      encodeUserTag: "",
      codecType: "h264",
      definition: "720p"
    },
    author: {
      id: "241418783272443904",
      uniqueId: "dave.xp",
      nickname: "Dave XP",
      avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
      avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
      avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
      signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
      verified: true,
      secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
      secret: false,
      ftc: false,
      relation: 0,
      openFavorite: false,
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      isADVirtual: false
    },
    music: {
      id: "6690711983962098438",
      title: "Chinese New Year",
      playUrl: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/fc8f5b9c38394b2fa9317991f578e123",
      coverThumb: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0dba7919ccf94972a7f3b264aa9c32f9~c5_100x100.jpeg",
      coverMedium: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0dba7919ccf94972a7f3b264aa9c32f9~c5_200x200.jpeg",
      coverLarge: "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0dba7919ccf94972a7f3b264aa9c32f9~c5_720x720.jpeg",
      authorName: "SALES",
      original: false,
      duration: 29,
      album: "SALES - EP"
    },
    challenges: [
      {
        id: "25574",
        title: "animation",
        desc: "Here's to the entire #Animation community on TikTok.",
        profileThumb: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileMedium: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        profileLarger: "https://p77-va.tiktokcdn.com/obj/musically-maliva-obj/7d4c73aea01c14770215a32eb5cbccb7",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "108264",
        title: "foru",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "42164",
        title: "foryou",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "78017460",
        title: "tiktokers",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "708860",
        title: "walle",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "8284",
        title: "disney",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      },
      {
        id: "654478",
        title: "pixar",
        desc: "",
        profileThumb: "",
        profileMedium: "",
        profileLarger: "",
        coverThumb: "",
        coverMedium: "",
        coverLarger: "",
        isCommerce: false
      }
    ],
    stats: {
      diggCount: 56e5,
      shareCount: 605600,
      commentCount: 37300,
      playCount: 331e5
    },
    duetInfo: {
      duetFromId: "0"
    },
    originalItem: false,
    officalItem: false,
    textExtra: [
      {
        awemeId: "",
        start: 42,
        end: 52,
        hashtagName: "animation",
        hashtagId: "25574",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 53,
        end: 58,
        hashtagName: "foru",
        hashtagId: "108264",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 59,
        end: 66,
        hashtagName: "foryou",
        hashtagId: "42164",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 67,
        end: 77,
        hashtagName: "tiktokers",
        hashtagId: "78017460",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 78,
        end: 84,
        hashtagName: "walle",
        hashtagId: "708860",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 85,
        end: 92,
        hashtagName: "disney",
        hashtagId: "8284",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      },
      {
        awemeId: "",
        start: 93,
        end: 99,
        hashtagName: "pixar",
        hashtagId: "654478",
        type: 1,
        userId: "",
        isCommerce: false,
        userUniqueId: "",
        secUid: "",
        subType: 0
      }
    ],
    secret: false,
    forFriend: false,
    digged: false,
    itemCommentStatus: 0,
    showNotPass: false,
    vl1: false,
    itemMute: false,
    authorStats: {
      followingCount: 66,
      followerCount: 48e5,
      heartCount: 767e5,
      videoCount: 38,
      diggCount: 9079,
      heart: 767e5
    },
    privateItem: false,
    duetEnabled: true,
    stitchEnabled: true,
    shareEnabled: true,
    isAd: false,
    duetDisplay: 0,
    stitchDisplay: 0
  }
];

// src/services/userFeedMapper.js
var userFeedMapper_default = async (userID, callback) => defaultMapper_default({
  request: getUserFeed_default,
  parameters: userID,
  callback,
  defaultReturn: userFeed_default
});

// src/components/UserProfile/UserProfile.jsx
var import_react11 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types11 = __toESM(require("../node_modules/prop-types/index.js"));

// src/components/UserInfo/UserInfo.jsx
var import_react9 = __toESM(require("../node_modules/react/index.js"));
var import_material5 = require("../node_modules/@mui/material/node/index.js");
var import_prop_types9 = __toESM(require("../node_modules/prop-types/index.js"));
var UserInfo = function({
  bioLink,
  uniqueId,
  nickname,
  avatarLarger,
  signature,
  navigateToUser
}) {
  return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(AvatarLink_default, {
    className: "profile-avatar",
    name: uniqueId,
    nickName: nickname,
    avatar: avatarLarger,
    onClickHandler: navigateToUser
  }), /* @__PURE__ */ import_react9.default.createElement(import_material5.Typography, {
    variant: "body1",
    component: "p"
  }, signature), bioLink && /* @__PURE__ */ import_react9.default.createElement(import_material5.Link, {
    href: bioLink.link
  }, bioLink.link));
};
UserInfo.defaultProps = {
  avatarLarger: "",
  bioLink: void 0,
  nickname: "",
  uniqueId: "",
  signature: "",
  navigateToUser: () => 0
};
UserInfo.propTypes = {
  avatarLarger: import_prop_types9.default.string,
  bioLink: import_prop_types9.default.shape({
    link: import_prop_types9.default.string,
    risk: import_prop_types9.default.number
  }),
  nickname: import_prop_types9.default.string,
  uniqueId: import_prop_types9.default.string,
  signature: import_prop_types9.default.string,
  navigateToUser: import_prop_types9.default.func
};
var UserInfo_default = UserInfo;

// src/components/StatsInfo/StatsInfo.jsx
var import_react10 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types10 = __toESM(require("../node_modules/prop-types/index.js"));
var StatsInfo = function({
  followingCount,
  followerCount,
  videoCount,
  heartCount
}) {
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "profile-icon-group"
  }, /* @__PURE__ */ import_react10.default.createElement(InfoIcon_default, {
    disabled: true,
    number: heartCount,
    text: "Hearts"
  }), /* @__PURE__ */ import_react10.default.createElement(InfoIcon_default, {
    number: videoCount,
    text: "Videos",
    icon: "play_circle",
    color: "info"
  }), /* @__PURE__ */ import_react10.default.createElement(InfoIcon_default, {
    number: followerCount,
    text: "Followers",
    icon: "visibility",
    color: "success"
  }), /* @__PURE__ */ import_react10.default.createElement(InfoIcon_default, {
    number: followingCount,
    text: "Following",
    icon: "face",
    color: "default"
  }));
};
StatsInfo.defaultProps = {
  followerCount: 0,
  followingCount: 0,
  heartCount: 0,
  videoCount: 0
};
StatsInfo.propTypes = {
  followerCount: import_prop_types10.default.number,
  followingCount: import_prop_types10.default.number,
  heartCount: import_prop_types10.default.number,
  videoCount: import_prop_types10.default.number
};
var StatsInfo_default = StatsInfo;

// src/components/UserProfile/UserProfile.jsx
var UserProfile = function({ stats, user }) {
  return /* @__PURE__ */ import_react11.default.createElement("div", null, user && /* @__PURE__ */ import_react11.default.createElement(UserInfo_default, {
    ...user
  }), stats && /* @__PURE__ */ import_react11.default.createElement(StatsInfo_default, {
    ...stats
  }));
};
UserProfile.defaultProps = {
  stats: void 0,
  user: void 0
};
UserProfile.propTypes = {
  stats: import_prop_types11.default.shape({
    diggCount: import_prop_types11.default.number,
    followerCount: import_prop_types11.default.number,
    followingCount: import_prop_types11.default.number,
    heartCount: import_prop_types11.default.number,
    videoCount: import_prop_types11.default.number
  }),
  user: import_prop_types11.default.shape({
    avatarLarger: import_prop_types11.default.string,
    avatarMedium: import_prop_types11.default.string,
    avatarThumb: import_prop_types11.default.string,
    bioLink: import_prop_types11.default.shape({
      link: import_prop_types11.default.string,
      risk: import_prop_types11.default.number
    }),
    id: import_prop_types11.default.string,
    nickname: import_prop_types11.default.string,
    uniqueId: import_prop_types11.default.string,
    verified: import_prop_types11.default.bool,
    signature: import_prop_types11.default.string
  })
};
var UserProfile_default = UserProfile;

// src/components/VideoGrid/VideoGrid.jsx
var import_react13 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types13 = __toESM(require("../node_modules/prop-types/index.js"));

// src/components/VideoGlidElement/VideoGrigElement.jsx
var import_react12 = __toESM(require("../node_modules/react/index.js"));
var import_prop_types12 = __toESM(require("../node_modules/prop-types/index.js"));
var import_material6 = require("../node_modules/@mui/material/node/index.js");
var VideoGridElement = function({ playCount, videoUrl }) {
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "user-video-container"
  }, /* @__PURE__ */ import_react12.default.createElement(Video_default, {
    controls: false,
    videoUrl,
    className: "user-video-display"
  }), /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "user-video-info"
  }, /* @__PURE__ */ import_react12.default.createElement(import_material6.Icon, {
    fontSize: "large"
  }, "play_arrow"), /* @__PURE__ */ import_react12.default.createElement("span", null, numberToText_default(playCount))));
};
VideoGridElement.defaultProps = {
  videoUrl: "",
  playCount: 0
};
VideoGridElement.propTypes = {
  videoUrl: import_prop_types12.default.string,
  playCount: import_prop_types12.default.number
};
var VideoGrigElement_default = VideoGridElement;

// src/components/VideoGrid/VideoGrid.jsx
var VideoGrid = function({ videos }) {
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "video-grid"
  }, videos.map(({ video: { playAddr }, stats: { playCount } }) => /* @__PURE__ */ import_react13.default.createElement(VideoGrigElement_default, {
    videoUrl: playAddr,
    playCount,
    key: playAddr
  })));
};
VideoGrid.defaultProps = {
  videos: []
};
VideoGrid.propTypes = {
  videos: import_prop_types13.default.arrayOf(import_prop_types13.default.shape({
    video: import_prop_types13.default.shape({
      playAddr: import_prop_types13.default.string
    }),
    stats: import_prop_types13.default.shape({
      playCount: import_prop_types13.default.number
    })
  }))
};
var VideoGrid_default = VideoGrid;

// src/pages/UserDetails/UserDetails.jsx
var UserDetails = function() {
  const { uniqueId } = (0, import_react_router.useParams)();
  const [userInfo, setUserInfo] = (0, import_react14.useState)();
  const [videos, setVideos] = (0, import_react14.useState)([]);
  (0, import_react14.useEffect)(() => {
    userFeedMapper_default(uniqueId, setVideos);
  }, [uniqueId]);
  (0, import_react14.useEffect)(() => {
    if (!videos || videos.length === 0)
      return;
    const user = videos[0].author;
    const stats = videos[0].authorStats;
    setUserInfo({ user, stats });
  }, [videos]);
  return /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement(UserProfile_default, {
    ...userInfo
  }), /* @__PURE__ */ import_react14.default.createElement(VideoGrid_default, {
    videos
  }));
};
var UserDetails_default = UserDetails;

// src/api/getUserInfo.js
var userInfoUrl = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.INFO;
var getUserInfo_default = (userID) => {
  const endpoint = `${userInfoUrl}${userID}`;
  return getData(endpoint);
};

// src/mock/userInfo.js
var userInfo_default = {
  id: "241418783272443904",
  shortId: "",
  uniqueId: "dave.xp",
  nickname: "Dave XP",
  avatarLarger: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1643036400&x-signature=zgCYFDya%2BxEXaINvgERYlWIyEnY%3D",
  avatarMedium: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1643036400&x-signature=2DSJ92aYYEsaUjDa8VMgbsK%2BrBg%3D",
  avatarThumb: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1643036400&x-signature=mdRTh4ajQZ16dw%2FMNZw28SCLia4%3D",
  signature: "\u{1F1E8}\u{1F1F7} Animator from Costa Rica\nGet my app Dollify!\n\u{1F447}",
  createTime: 1497901438,
  verified: true,
  secUid: "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
  ftc: false,
  relation: 0,
  openFavorite: false,
  bioLink: {
    link: "dollifyapp.com",
    risk: 3
  },
  commentSetting: 0,
  duetSetting: 0,
  stitchSetting: 0,
  privateAccount: false,
  secret: false,
  isADVirtual: false,
  roomId: "",
  extraInfo: {}
};

// src/services/userInfoMapper.js
var userInfoMapper_default = async (userID, callback) => defaultMapper_default({
  request: getUserInfo_default,
  parameters: userID,
  callback,
  defaultReturn: userInfo_default
});

// src/services/userBaseInfoMapper.js
var userBaseInfoMapper_default = async (userID, callback) => {
  const userInfo = await userInfoMapper_default(userID);
  if (!userInfo)
    return;
  const result = {
    userName: userID,
    avatar: userInfo.avatarThumb
  };
  if (callback) {
    callback(result);
  } else {
    return result;
  }
};

// src/app/index.jsx
var defaultUser = GLOBAL_CONSTANTS.DEFAULT_USER_ID;
var App = function() {
  const navigate = (0, import_react_router_dom.useNavigate)();
  const [currentUserInfo, setCurrentUserInfo] = (0, import_react15.useState)();
  (0, import_react15.useEffect)(() => {
    userBaseInfoMapper_default(defaultUser, setCurrentUserInfo);
  }, []);
  const onNavigateToUserHandler = (name) => navigate(`/user/${name}`, { replace: true });
  const navigateToMainPage = () => navigate("/", { replace: true });
  return /* @__PURE__ */ import_react15.default.createElement(import_react_router_dom.MemoryRouter, null, /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ import_react15.default.createElement(MenuBar_default, {
    user: currentUserInfo,
    onTitleClick: navigateToMainPage,
    onAvatarClick: onNavigateToUserHandler
  }), /* @__PURE__ */ import_react15.default.createElement(import_react_router_dom.Routes, null, /* @__PURE__ */ import_react15.default.createElement(import_react_router_dom.Route, {
    path: "/",
    element: /* @__PURE__ */ import_react15.default.createElement(Trending_default, {
      onNavigateToUser: onNavigateToUserHandler
    })
  }), /* @__PURE__ */ import_react15.default.createElement(import_react_router_dom.Route, {
    path: "/user"
  }, /* @__PURE__ */ import_react15.default.createElement(import_react_router_dom.Route, {
    path: ":uniqueId",
    element: /* @__PURE__ */ import_react15.default.createElement(UserDetails_default, null)
  })))));
};
var app_default = App;

// src/index.jsx
import_react_dom.default.render(/* @__PURE__ */ import_react16.default.createElement(import_react16.default.StrictMode, null, /* @__PURE__ */ import_react16.default.createElement(app_default, null)), document.querySelector("#root"));
