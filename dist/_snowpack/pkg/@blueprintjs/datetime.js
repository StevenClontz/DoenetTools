import { _ as __extends, a as __assign, b as __rest, c as __spreadArray } from '../common/tslib.es6-b8612d9e.js';
import { c as createCommonjsModule, g as getDefaultExportFromCjs, a as commonjsGlobal } from '../common/_commonjsHelpers-f5d70792.js';
import { r as react } from '../common/index-61623f21.js';
import { p as process$1 } from '../common/process-e9e98960.js';
import { _ as _defineProperty, a as _objectWithoutPropertiesLoose, b as _extends$1 } from '../common/defineProperty-009a854b.js';
import { g as global$1 } from '../common/_polyfill-node:global-acbc543a.js';
import { p as propTypes } from '../common/index-d3677bfe.js';
import { r as reactDom } from '../common/index-eaf9e997.js';
import { _ as _objectWithoutPropertiesLoose$1, a as _extends$2 } from '../common/setPrototypeOf-a1ddd73f.js';
import { _ as _inheritsLoose$1 } from '../common/inheritsLoose-d655f3b9.js';

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Alignment along the horizontal axis. */
var Alignment = {
    CENTER: "center",
    LEFT: "left",
    RIGHT: "right",
};

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// tslint:disable:object-literal-sort-keys
/**
 * The four basic intents.
 */
var Intent = {
    NONE: "none",
    PRIMARY: "primary",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger",
};

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Position = {
    BOTTOM: "bottom",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    LEFT: "left",
    LEFT_BOTTOM: "left-bottom",
    LEFT_TOP: "left-top",
    RIGHT: "right",
    RIGHT_BOTTOM: "right-bottom",
    RIGHT_TOP: "right-top",
    TOP: "top",
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
};

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a, _b, _c, _d;
var NS = "bp4";
if (typeof process$1 !== "undefined") {
    NS = (_d = (_b = (_a = process$1.env) === null || _a === void 0 ? void 0 : _a.BLUEPRINT_NAMESPACE) !== null && _b !== void 0 ? _b : (_c = process$1.env) === null || _c === void 0 ? void 0 : _c.REACT_APP_BLUEPRINT_NAMESPACE) !== null && _d !== void 0 ? _d : NS;
}
// modifiers
var ACTIVE = "".concat(NS, "-active");
var ALIGN_LEFT = "".concat(NS, "-align-left");
var ALIGN_RIGHT = "".concat(NS, "-align-right");
var DARK = "".concat(NS, "-dark");
var DISABLED = "".concat(NS, "-disabled");
var FILL = "".concat(NS, "-fill");
var LARGE = "".concat(NS, "-large");
var LOADING = "".concat(NS, "-loading");
var MINIMAL = "".concat(NS, "-minimal");
var OUTLINED = "".concat(NS, "-outlined");
var ROUND = "".concat(NS, "-round");
var SELECTED = "".concat(NS, "-selected");
var SMALL = "".concat(NS, "-small");
var INTENT_PRIMARY = intentClass(Intent.PRIMARY);
var INTENT_SUCCESS = intentClass(Intent.SUCCESS);
var INTENT_WARNING = intentClass(Intent.WARNING);
var INTENT_DANGER = intentClass(Intent.DANGER);
var TEXT_OVERFLOW_ELLIPSIS = "".concat(NS, "-text-overflow-ellipsis");
var BUTTON = "".concat(NS, "-button");
var BUTTON_SPINNER = "".concat(BUTTON, "-spinner");
var BUTTON_TEXT = "".concat(BUTTON, "-text");
var DIVIDER = "".concat(NS, "-divider");
var HTML_SELECT = "".concat(NS, "-html-select");
var INPUT = "".concat(NS, "-input");
var INPUT_GROUP = "".concat(INPUT, "-group");
var INPUT_LEFT_CONTAINER = "".concat(INPUT, "-left-container");
var INPUT_ACTION = "".concat(INPUT, "-action");
var MENU = "".concat(NS, "-menu");
var MENU_ITEM = "".concat(MENU, "-item");
var MENU_ITEM_ICON = "".concat(MENU_ITEM, "-icon");
var MENU_ITEM_LABEL = "".concat(MENU_ITEM, "-label");
var MENU_SUBMENU = "".concat(NS, "-submenu");
var MENU_SUBMENU_ICON = "".concat(MENU_SUBMENU, "-icon");
var OVERLAY = "".concat(NS, "-overlay");
var OVERLAY_BACKDROP = "".concat(OVERLAY, "-backdrop");
var OVERLAY_CONTENT = "".concat(OVERLAY, "-content");
var OVERLAY_INLINE = "".concat(OVERLAY, "-inline");
var OVERLAY_OPEN = "".concat(OVERLAY, "-open");
var OVERLAY_START_FOCUS_TRAP = "".concat(OVERLAY, "-start-focus-trap");
var OVERLAY_END_FOCUS_TRAP = "".concat(OVERLAY, "-end-focus-trap");
var POPOVER = "".concat(NS, "-popover");
var POPOVER_ARROW = "".concat(POPOVER, "-arrow");
var POPOVER_BACKDROP = "".concat(POPOVER, "-backdrop");
var POPOVER_CAPTURING_DISMISS = "".concat(POPOVER, "-capturing-dismiss");
var POPOVER_CONTENT = "".concat(POPOVER, "-content");
var POPOVER_DISMISS = "".concat(POPOVER, "-dismiss");
var POPOVER_DISMISS_OVERRIDE = "".concat(POPOVER_DISMISS, "-override");
var POPOVER_OPEN = "".concat(POPOVER, "-open");
var POPOVER_OUT_OF_BOUNDARIES = "".concat(POPOVER, "-out-of-boundaries");
var POPOVER_TARGET = "".concat(POPOVER, "-target");
var POPOVER_WRAPPER = "".concat(POPOVER, "-wrapper");
var TRANSITION_CONTAINER = "".concat(NS, "-transition-container");
var PORTAL = "".concat(NS, "-portal");
var SPINNER = "".concat(NS, "-spinner");
var SPINNER_ANIMATION = "".concat(SPINNER, "-animation");
var SPINNER_HEAD = "".concat(SPINNER, "-head");
var SPINNER_NO_SPIN = "".concat(NS, "-no-spin");
var SPINNER_TRACK = "".concat(SPINNER, "-track");
var TOOLTIP = "".concat(NS, "-tooltip");
var ICON = "".concat(NS, "-icon");
/**
 * Returns the namespace prefix for all Blueprint CSS classes.
 * Customize this namespace at build time with the `process.env.BLUEPRINT_NAMESPACE` environment variable.
 */
function getClassNamespace() {
    return NS;
}
/** Return CSS class for alignment. */
function alignmentClass(alignment) {
    switch (alignment) {
        case Alignment.LEFT:
            return ALIGN_LEFT;
        case Alignment.RIGHT:
            return ALIGN_RIGHT;
        default:
            return undefined;
    }
}
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("".concat(NS, "-icon-")) === 0 ? iconName : "".concat(NS, "-icon-").concat(iconName);
}
function intentClass(intent) {
    if (intent == null || intent === Intent.NONE) {
        return undefined;
    }
    return "".concat(NS, "-intent-").concat(intent.toLowerCase());
}

/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
/**
 * Gets the active element in the document or shadow root (if an element is provided, and it's in the shadow DOM).
 */
function getActiveElement(element, options) {
    var _a;
    if (element == null) {
        return document.activeElement;
    }
    var rootNode = ((_a = element.getRootNode(options)) !== null && _a !== void 0 ? _a : document);
    return rootNode.activeElement;
}

/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns whether the value is a function. Acts as a type guard. */
/* istanbul ignore next */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(value) {
    return typeof value === "function";
}

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns = "[Blueprint]";
var CLAMP_MIN_MAX = ns + " clamp: max cannot be less than min";
var INPUT_WARN_LEFT_ELEMENT_LEFT_ICON_MUTEX = ns + " <InputGroup> leftElement and leftIcon prop are mutually exclusive, with leftElement taking priority.";
var POPOVER_REQUIRES_TARGET = ns + " <Popover> requires target prop or at least one child element.";
var POPOVER_HAS_BACKDROP_INTERACTION = ns + " <Popover hasBackdrop={true}> requires interactionKind={PopoverInteractionKind.CLICK}.";
var POPOVER_WARN_TOO_MANY_CHILDREN = ns +
    " <Popover> supports one or two children; additional children are ignored." +
    " First child is the target, second child is the content. You may instead supply these two as props.";
var POPOVER_WARN_DOUBLE_CONTENT = ns + " <Popover> with two children ignores content prop; use either prop or children.";
var POPOVER_WARN_DOUBLE_TARGET = ns + " <Popover> with children ignores target prop; use either prop or children.";
var POPOVER_WARN_EMPTY_CONTENT = ns + " Disabling <Popover> with empty/whitespace content...";
var POPOVER_WARN_HAS_BACKDROP_INLINE = ns + " <Popover usePortal={false}> ignores hasBackdrop";
var POPOVER_WARN_PLACEMENT_AND_POSITION_MUTEX = ns + " <Popover> supports either placement or position prop, not both.";
var POPOVER_WARN_UNCONTROLLED_ONINTERACTION = ns + " <Popover> onInteraction is ignored when uncontrolled.";
var PORTAL_CONTEXT_CLASS_NAME_STRING = ns + " <Portal> context blueprintPortalClassName must be string";
var SPINNER_WARN_CLASSES_SIZE = ns + " <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";

/** Returns whether `"production"` exists and equals `env`. */
function isNodeEnv(env) {
    return typeof process$1 !== "undefined" && process$1.env && "production" === env;
}
/**
 * Clamps the given number between min and max values. Returns value if within
 * range, or closest bound.
 */
function clamp(val, min, max) {
    if (val == null) {
        return val;
    }
    if (max < min) {
        throw new Error(CLAMP_MIN_MAX);
    }
    return Math.min(Math.max(val, min), max);
}
var uniqueCountForNamespace = new Map();
/** Generate a unique ID within a given namespace, using a simple counter-based implementation to avoid collisions. */
function uniqueId(namespace) {
    var _a;
    var curCount = (_a = uniqueCountForNamespace.get(namespace)) !== null && _a !== void 0 ? _a : 0;
    uniqueCountForNamespace.set(namespace, curCount + 1);
    return "".concat(namespace, "-").concat(curCount);
}

/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns true if `node` is null/undefined, false, empty string, or an array
 * composed of those. If `node` is an array, only one level of the array is
 * checked, for performance reasons.
 */
function isReactNodeEmpty(node, skipArray) {
    if (skipArray === void 0) { skipArray = false; }
    return (node == null ||
        node === "" ||
        node === false ||
        (!skipArray &&
            Array.isArray(node) &&
            // only recurse one level through arrays, for performance
            (node.length === 0 || node.every(function (n) { return isReactNodeEmpty(n, true); }))));
}
/**
 * Converts a React node to an element: non-empty string or number or
 * `React.Fragment` (React 16.3+) is wrapped in given tag name; empty strings
 * and booleans are discarded.
 */
function ensureElement(child, tagName) {
    if (tagName === void 0) { tagName = "span"; }
    if (child == null || typeof child === "boolean") {
        return undefined;
    }
    else if (typeof child === "string") {
        // cull whitespace strings
        return child.trim().length > 0 ? react.createElement(tagName, {}, child) : undefined;
    }
    else if (typeof child === "number" || typeof child.type === "symbol" || Array.isArray(child)) {
        // React.Fragment has a symbol type, ReactNodeArray extends from Array
        return react.createElement(tagName, {}, child);
    }
    else if (isReactElement(child)) {
        return child;
    }
    else {
        // child is inferred as {}
        return undefined;
    }
}
function isReactElement(child) {
    return (typeof child === "object" &&
        typeof child.type !== "undefined" &&
        typeof child.props !== "undefined");
}
/**
 * Returns true if the given JSX element matches the given component type.
 *
 * NOTE: This function only checks equality of `displayName` for performance and
 * to tolerate multiple minor versions of a component being included in one
 * application bundle.
 *
 * @param element JSX element in question
 * @param ComponentType desired component type of element
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isElementOfType(element, ComponentType) {
    return (element != null &&
        element.type != null &&
        element.type.displayName != null &&
        element.type.displayName === ComponentType.displayName);
}

/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isRefObject(value) {
    return value != null && typeof value !== "function";
}
function isRefCallback(value) {
    return typeof value === "function";
}
/**
 * Assign the given ref to a target, either a React ref object or a callback which takes the ref as its first argument.
 */
function setRef(refTarget, ref) {
    if (isRefObject(refTarget)) {
        // HACKHACK: .current property is readonly
        refTarget.current = ref;
    }
    else if (isRefCallback(refTarget)) {
        refTarget(ref);
    }
}
/**
 * Creates a ref handler which assigns the ref returned by React for a mounted component to a field on the target object.
 * The target object is usually a component class.
 *
 * If provided, it will also update the given `refProp` with the value of the ref.
 */
function refHandler(refTargetParent, refTargetKey, refProp) {
    return function (ref) {
        refTargetParent[refTargetKey] = ref;
        setRef(refProp, ref);
    };
}

/*
 * Copyright 2019 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var AbstractPureComponent2 = /** @class */ (function (_super) {
    __extends(AbstractPureComponent2, _super);
    function AbstractPureComponent2(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        _this.timeoutIds = [];
        _this.requestIds = [];
        /**
         * Clear all known timeouts.
         */
        _this.clearTimeouts = function () {
            if (_this.timeoutIds.length > 0) {
                for (var _i = 0, _a = _this.timeoutIds; _i < _a.length; _i++) {
                    var timeoutId = _a[_i];
                    window.clearTimeout(timeoutId);
                }
                _this.timeoutIds = [];
            }
        };
        /**
         * Clear all known animation frame requests.
         */
        _this.cancelAnimationFrames = function () {
            if (_this.requestIds.length > 0) {
                for (var _i = 0, _a = _this.requestIds; _i < _a.length; _i++) {
                    var requestId = _a[_i];
                    window.cancelAnimationFrame(requestId);
                }
                _this.requestIds = [];
            }
        };
        if (!isNodeEnv("production")) {
            _this.validateProps(_this.props);
        }
        return _this;
    }
    AbstractPureComponent2.prototype.componentDidUpdate = function (_prevProps, _prevState, _snapshot) {
        if (!isNodeEnv("production")) {
            this.validateProps(this.props);
        }
    };
    AbstractPureComponent2.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
        this.cancelAnimationFrames();
    };
    /**
     * Request an animation frame and remember its ID.
     * All pending requests will be canceled when component unmounts.
     *
     * @returns a "cancel" function that will cancel the request when invoked.
     */
    AbstractPureComponent2.prototype.requestAnimationFrame = function (callback) {
        var handle = window.requestAnimationFrame(callback);
        this.requestIds.push(handle);
        return function () { return window.cancelAnimationFrame(handle); };
    };
    /**
     * Set a timeout and remember its ID.
     * All pending timeouts will be cleared when component unmounts.
     *
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractPureComponent2.prototype.setTimeout = function (callback, timeout) {
        var handle = window.setTimeout(callback, timeout);
        this.timeoutIds.push(handle);
        return function () { return window.clearTimeout(handle); };
    };
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * Like propTypes, these runtime checks run only in development mode.
     */
    AbstractPureComponent2.prototype.validateProps = function (_props) {
        // implement in subclass
    };
    return AbstractPureComponent2;
}(react.PureComponent));

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DISPLAYNAME_PREFIX = "Blueprint4";
/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
var INVALID_PROPS = [
    "active",
    "alignText",
    "asyncControl",
    "containerRef",
    "current",
    "elementRef",
    "fill",
    "icon",
    "inputRef",
    "intent",
    "inline",
    "large",
    "loading",
    "leftElement",
    "leftIcon",
    "minimal",
    "onRemove",
    "outlined",
    "panel",
    "panelClassName",
    "popoverProps",
    "rightElement",
    "rightIcon",
    "round",
    "small",
    "text",
];
/**
 * Typically applied to HTMLElements to filter out disallowed props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the denylist (only appropriate for HTMLElements).
 *
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default denylist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and denylist together.
 */
function removeNonHTMLProps(props, invalidProps, shouldMerge) {
    if (invalidProps === void 0) { invalidProps = INVALID_PROPS; }
    if (shouldMerge === void 0) { shouldMerge = false; }
    if (shouldMerge) {
        invalidProps = invalidProps.concat(INVALID_PROPS);
    }
    return invalidProps.reduce(function (prev, curr) {
        // Props with hyphens (e.g. data-*) are always considered html props
        if (curr.indexOf("-") !== -1) {
            return prev;
        }
        if (prev.hasOwnProperty(curr)) {
            delete prev[curr];
        }
        return prev;
    }, __assign({}, props));
}

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TAB = 9;
var ENTER = 13;
var ESCAPE = 27;
var SPACE = 32;
var ARROW_UP = 38;
var ARROW_DOWN = 40;
/** Returns whether the key code is `enter` or `space`, the two keys that can click a button. */
function isKeyboardClick(keyCode) {
    return keyCode === ENTER || keyCode === SPACE;
}

var classnames = createCommonjsModule(function (module) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var inheritsLoose = createCommonjsModule(function (module) {
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _inheritsLoose = /*@__PURE__*/getDefaultExportFromCjs(inheritsLoose);

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized);

var toStr = Object.prototype.toString;

var isArguments = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr$1 = Object.prototype.toString;
	var isArgs = isArguments; // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr$1.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr$1.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
var implementation = keysShim;

var slice = Array.prototype.slice;


var origKeys = Object.keys;
var keysShim$1 = origKeys ? function keys(o) { return origKeys(o); } : implementation;

var originalKeys = Object.keys;

keysShim$1.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArguments(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim$1;
	}
	return Object.keys || keysShim$1;
};

var objectKeys = keysShim$1;

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var shams$1 = function hasToStringTagShams() {
	return shams() && !!Symbol.toStringTag;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;


var hasSymbols = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return shams();
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice$1 = Array.prototype.slice;
var toStr$2 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice$1.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice$1.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice$1.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var functionBind = Function.prototype.bind || implementation$1;

var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols$1 = hasSymbols();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols$1 ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};



var $concat = functionBind.call(Function.call, Array.prototype.concat);
var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
var $replace = functionBind.call(Function.call, String.prototype.replace);
var $strSlice = functionBind.call(Function.call, String.prototype.slice);
var $exec = functionBind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (src(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (src(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (src(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = src(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind = createCommonjsModule(function (module) {




var $apply = getIntrinsic('%Function.prototype.apply%');
var $call = getIntrinsic('%Function.prototype.call%');
var $reflectApply = getIntrinsic('%Reflect.apply%', true) || functionBind.call($call, $apply);

var $gOPD = getIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = getIntrinsic('%Object.defineProperty%', true);
var $max = getIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(functionBind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(functionBind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}
});

var $indexOf = callBind(getIntrinsic('String.prototype.indexOf'));

var callBound = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = getIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

var hasToStringTag = shams$1();


var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

var $defineProperty = getIntrinsic('%Object.defineProperty%', true);

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
			return true;
		} catch (e) {
			// IE 8 has a broken defineProperty
			return false;
		}
	}
	return false;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!hasPropertyDescriptors()) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

var hasPropertyDescriptors_1 = hasPropertyDescriptors;

var hasSymbols$2 = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr$3 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction$1 = function (fn) {
	return typeof fn === 'function' && toStr$3.call(fn) === '[object Function]';
};

var hasPropertyDescriptors$1 = hasPropertyDescriptors_1();

var supportsDescriptors = origDefineProperty && hasPropertyDescriptors$1;

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction$1(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value; // eslint-disable-line no-param-reassign
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = objectKeys(map);
	if (hasSymbols$2) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

var defineProperties_1 = defineProperties;

var numberIsNaN = function (value) {
	return value !== value;
};

var implementation$2 = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};

var polyfill = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation$2;
};

var shim = function shimObjectIs() {
	var polyfill$1 = polyfill();
	defineProperties_1(Object, { is: polyfill$1 }, {
		is: function testObjectIs() {
			return Object.is !== polyfill$1;
		}
	});
	return polyfill$1;
};

var polyfill$1 = callBind(polyfill(), Object);

defineProperties_1(polyfill$1, {
	getPolyfill: polyfill,
	implementation: implementation$2,
	shim: shim
});

var objectIs = polyfill$1;

var hasToStringTag$1 = shams$1();
var has$1;
var $exec$1;
var isRegexMarker;
var badStringifier;

if (hasToStringTag$1) {
	has$1 = callBound('Object.prototype.hasOwnProperty');
	$exec$1 = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString$1 = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

var isRegex = hasToStringTag$1
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has$1(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec$1(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString$1(value) === regexClass;
	};

var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD$1 = Object.getOwnPropertyDescriptor;
if (gOPD$1) {
	try {
		gOPD$1([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD$1 = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	if (!functionsHaveNames() || !gOPD$1) {
		return false;
	}
	var desc = gOPD$1(function () {}, 'name');
	return !!desc && !!desc.configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

var functionsHaveNames_1 = functionsHaveNames;

var implementation$3 = createCommonjsModule(function (module) {

var functionsHaveConfigurableNames = functionsHaveNames_1.functionsHaveConfigurableNames();

var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.hasIndices) {
		result += 'd';
	}
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};

if (functionsHaveConfigurableNames && Object.defineProperty) {
	Object.defineProperty(module.exports, 'name', { value: 'get flags' });
}
});

var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
var $gOPD$1 = Object.getOwnPropertyDescriptor;

var polyfill$2 = function getPolyfill() {
	if (supportsDescriptors$1 && (/a/mig).flags === 'gim') {
		var descriptor = $gOPD$1(RegExp.prototype, 'flags');
		if (
			descriptor
			&& typeof descriptor.get === 'function'
			&& typeof RegExp.prototype.dotAll === 'boolean'
			&& typeof RegExp.prototype.hasIndices === 'boolean'
		) {
			/* eslint getter-return: 0 */
			var calls = '';
			var o = {};
			Object.defineProperty(o, 'hasIndices', {
				get: function () {
					calls += 'd';
				}
			});
			Object.defineProperty(o, 'sticky', {
				get: function () {
					calls += 'y';
				}
			});
			if (calls === 'dy') {
				return descriptor.get;
			}
		}
	}
	return implementation$3;
};

var supportsDescriptors$2 = defineProperties_1.supportsDescriptors;

var gOPD$2 = Object.getOwnPropertyDescriptor;
var defineProperty$1 = Object.defineProperty;
var TypeErr = TypeError;
var getProto$1 = Object.getPrototypeOf;
var regex = /a/;

var shim$1 = function shimFlags() {
	if (!supportsDescriptors$2 || !getProto$1) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = polyfill$2();
	var proto = getProto$1(regex);
	var descriptor = gOPD$2(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty$1(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};

var flagsBound = callBind(polyfill$2());

defineProperties_1(flagsBound, {
	getPolyfill: polyfill$2,
	implementation: implementation$3,
	shim: shim$1
});

var regexp_prototype_flags = flagsBound;

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr$4 = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag$2 = shams$1();

var isDateObject = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag$2 ? tryDateObject(value) : toStr$4.call(value) === dateClass;
};

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? objectIs(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? objectIs(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments$1(a) !== isArguments$1(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && regexp_prototype_flags(a) === regexp_prototype_flags(b);
  }

  if (isDateObject(a) && isDateObject(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

var deepEqual_1 = deepEqual;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction$2(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$2 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction$2(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$2(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$2(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$2({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$2({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$2({}, side, reference[side]),
      end: defineProperty$2({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction$2(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global$1).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var warning = function() {};

var warning_1 = warning;

var implementation$4 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(react);



var _propTypes2 = _interopRequireDefault(propTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(react);



var _implementation2 = _interopRequireDefault(implementation$4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = /*@__PURE__*/getDefaultExportFromCjs(lib);

var ManagerReferenceNodeContext = createContext();
var ManagerReferenceNodeSetterContext = createContext();

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "referenceNode", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return react.createElement(ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, react.createElement(ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(react.Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef$1 = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: undefined,
      placement: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperInstance", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperNode", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "arrowNode", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      setRef$1(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends$1({}, _this.props.modifiers, {
          arrow: _extends$1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends$1({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deepEqual_1(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef$1(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(react.Component);

_defineProperty(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});
function Popper$1(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return react.createElement(ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
    return react.createElement(InnerPopper, _extends$1({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refHandler", function (node) {
      setRef$1(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef$1(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning_1(Boolean(this.props.setReferenceNode));
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(react.Component);

function Reference(props) {
  return react.createElement(ManagerReferenceNodeSetterContext.Consumer, null, function (setReferenceNode) {
    return react.createElement(InnerReference, _extends$1({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var TransitionGroupContext = react.createContext(null);

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose$1(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass$1 = function removeClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose$1(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) forceReflow(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass$1(node, baseClassName);
    }

    if (activeClassName) {
      removeClass$1(node, activeClassName);
    }

    if (doneClassName) {
      removeClass$1(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(Transition, _extends$2({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  {};

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && react.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return react.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!react.isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = react.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && react.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose$1(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized$1(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends$2({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes =  {};
TransitionGroup.defaultProps = defaultProps;

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var REACT_CONTEXT_TYPES = {
    blueprintPortalClassName: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "string") {
            return new Error(PORTAL_CONTEXT_CLASS_NAME_STRING);
        }
        return undefined;
    },
};
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.context = {};
        _this.state = { hasMounted: false };
        _this.portalElement = null;
        return _this;
    }
    Portal.prototype.render = function () {
        // Only render `children` once this component has mounted in a browser environment, so they are
        // immediately attached to the DOM tree and can do DOM things like measuring or `autoFocus`.
        // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
        if (typeof document === "undefined" || !this.state.hasMounted || this.portalElement === null) {
            return null;
        }
        else {
            return reactDom.createPortal(this.props.children, this.portalElement);
        }
    };
    Portal.prototype.componentDidMount = function () {
        if (this.props.container == null) {
            return;
        }
        this.portalElement = this.createContainerElement();
        this.props.container.appendChild(this.portalElement);
        /* eslint-disable-next-line react/no-did-mount-set-state */
        this.setState({ hasMounted: true }, this.props.onChildrenMount);
    };
    Portal.prototype.componentDidUpdate = function (prevProps) {
        // update className prop on portal DOM element
        if (this.portalElement != null && prevProps.className !== this.props.className) {
            maybeRemoveClass(this.portalElement.classList, prevProps.className);
            maybeAddClass(this.portalElement.classList, this.props.className);
        }
    };
    Portal.prototype.componentWillUnmount = function () {
        var _a;
        (_a = this.portalElement) === null || _a === void 0 ? void 0 : _a.remove();
    };
    Portal.prototype.createContainerElement = function () {
        var container = document.createElement("div");
        container.classList.add(PORTAL);
        maybeAddClass(container.classList, this.props.className);
        if (this.context != null) {
            maybeAddClass(container.classList, this.context.blueprintPortalClassName);
        }
        return container;
    };
    Portal.displayName = "".concat(DISPLAYNAME_PREFIX, ".Portal");
    Portal.contextTypes = REACT_CONTEXT_TYPES;
    Portal.defaultProps = {
        container: typeof document !== "undefined" ? document.body : undefined,
    };
    return Portal;
}(react.Component));
function maybeRemoveClass(classList, className) {
    if (className != null && className !== "") {
        classList.remove.apply(classList, className.split(" "));
    }
}
function maybeAddClass(classList, className) {
    if (className != null && className !== "") {
        classList.add.apply(classList, className.split(" "));
    }
}

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAutoFocusing = false;
        _this.state = {
            hasEverOpened: _this.props.isOpen,
        };
        // an HTMLElement that contains the backdrop and any children, to query for focus target
        _this.containerElement = null;
        // An empty, keyboard-focusable div at the beginning of the Overlay content
        _this.startFocusTrapElement = null;
        // An empty, keyboard-focusable div at the end of the Overlay content
        _this.endFocusTrapElement = null;
        _this.refHandlers = {
            // HACKHACK: see https://github.com/palantir/blueprint/issues/3979
            /* eslint-disable-next-line react/no-find-dom-node */
            container: function (ref) { return (_this.containerElement = reactDom.findDOMNode(ref)); },
            endFocusTrap: function (ref) { return (_this.endFocusTrapElement = ref); },
            startFocusTrap: function (ref) { return (_this.startFocusTrapElement = ref); },
        };
        _this.maybeRenderChild = function (child) {
            if (isFunction(child)) {
                child = child();
            }
            if (child == null) {
                return null;
            }
            // add a special class to each child element that will automatically set the appropriate
            // CSS position mode under the hood.
            var decoratedChild = typeof child === "object" ? (react.cloneElement(child, {
                className: classnames(child.props.className, OVERLAY_CONTENT),
            })) : (react.createElement("span", { className: OVERLAY_CONTENT }, child));
            var _a = _this.props, onOpening = _a.onOpening, onOpened = _a.onOpened, onClosing = _a.onClosing, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
            return (react.createElement(CSSTransition, { classNames: transitionName, onEntering: onOpening, onEntered: onOpened, onExiting: onClosing, onExited: _this.handleTransitionExited, timeout: transitionDuration, addEndListener: _this.handleTransitionAddEnd }, decoratedChild));
        };
        /**
         * Ensures repeatedly pressing shift+tab keeps focus inside the Overlay. Moves focus to
         * the `endFocusTrapElement` or the first keyboard-focusable element in the Overlay (excluding
         * the `startFocusTrapElement`), depending on whether the element losing focus is inside the
         * Overlay.
         */
        _this.handleStartFocusTrapElementFocus = function (e) {
            var _a;
            if (!_this.props.enforceFocus || _this.isAutoFocusing) {
                return;
            }
            // e.relatedTarget will not be defined if this was a programmatic focus event, as is the
            // case when we call this.bringFocusInsideOverlay() after a user clicked on the backdrop.
            // Otherwise, we're handling a user interaction, and we should wrap around to the last
            // element in this transition group.
            if (e.relatedTarget != null &&
                _this.containerElement.contains(e.relatedTarget) &&
                e.relatedTarget !== _this.endFocusTrapElement) {
                (_a = _this.endFocusTrapElement) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
            }
        };
        /**
         * Wrap around to the end of the dialog if `enforceFocus` is enabled.
         */
        _this.handleStartFocusTrapElementKeyDown = function (e) {
            var _a;
            if (!_this.props.enforceFocus) {
                return;
            }
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable-next-line deprecation/deprecation */
            if (e.shiftKey && e.which === TAB) {
                var lastFocusableElement = _this.getKeyboardFocusableElements().pop();
                if (lastFocusableElement != null) {
                    lastFocusableElement.focus();
                }
                else {
                    (_a = _this.endFocusTrapElement) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                }
            }
        };
        /**
         * Ensures repeatedly pressing tab keeps focus inside the Overlay. Moves focus to the
         * `startFocusTrapElement` or the last keyboard-focusable element in the Overlay (excluding the
         * `startFocusTrapElement`), depending on whether the element losing focus is inside the
         * Overlay.
         */
        _this.handleEndFocusTrapElementFocus = function (e) {
            var _a, _b;
            // No need for this.props.enforceFocus check here because this element is only rendered
            // when that prop is true.
            // During user interactions, e.relatedTarget will be defined, and we should wrap around to the
            // "start focus trap" element.
            // Otherwise, we're handling a programmatic focus event, which can only happen after a user
            // presses shift+tab from the first focusable element in the overlay.
            if (e.relatedTarget != null &&
                _this.containerElement.contains(e.relatedTarget) &&
                e.relatedTarget !== _this.startFocusTrapElement) {
                var firstFocusableElement = _this.getKeyboardFocusableElements().shift();
                // ensure we don't re-focus an already active element by comparing against e.relatedTarget
                if (!_this.isAutoFocusing && firstFocusableElement != null && firstFocusableElement !== e.relatedTarget) {
                    firstFocusableElement.focus();
                }
                else {
                    (_a = _this.startFocusTrapElement) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                }
            }
            else {
                var lastFocusableElement = _this.getKeyboardFocusableElements().pop();
                if (lastFocusableElement != null) {
                    lastFocusableElement.focus();
                }
                else {
                    // Keeps focus within Overlay even if there are no keyboard-focusable children
                    (_b = _this.startFocusTrapElement) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
                }
            }
        };
        _this.handleTransitionExited = function (node) {
            var _a, _b;
            if (_this.props.shouldReturnFocusOnClose && _this.lastActiveElementBeforeOpened instanceof HTMLElement) {
                _this.lastActiveElementBeforeOpened.focus();
            }
            (_b = (_a = _this.props).onClosed) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        };
        _this.handleBackdropMouseDown = function (e) {
            var _a;
            var _b = _this.props, backdropProps = _b.backdropProps, canOutsideClickClose = _b.canOutsideClickClose, enforceFocus = _b.enforceFocus, onClose = _b.onClose;
            if (canOutsideClickClose) {
                onClose === null || onClose === void 0 ? void 0 : onClose(e);
            }
            if (enforceFocus) {
                _this.bringFocusInsideOverlay();
            }
            (_a = backdropProps === null || backdropProps === void 0 ? void 0 : backdropProps.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(backdropProps, e);
        };
        _this.handleDocumentClick = function (e) {
            var _a = _this.props, canOutsideClickClose = _a.canOutsideClickClose, isOpen = _a.isOpen, onClose = _a.onClose;
            // get the actual target even in the Shadow DOM
            var eventTarget = (e.composed ? e.composedPath()[0] : e.target);
            var stackIndex = Overlay.openStack.indexOf(_this);
            var isClickInThisOverlayOrDescendant = Overlay.openStack
                .slice(stackIndex)
                .some(function (_a) {
                var elem = _a.containerElement;
                // `elem` is the container of backdrop & content, so clicking on that container
                // should not count as being "inside" the overlay.
                return elem && elem.contains(eventTarget) && !elem.isSameNode(eventTarget);
            });
            if (isOpen && !isClickInThisOverlayOrDescendant && canOutsideClickClose) {
                // casting to any because this is a native event
                onClose === null || onClose === void 0 ? void 0 : onClose(e);
            }
        };
        /**
         * When multiple Overlays are open, this event handler is only active for the most recently
         * opened one to avoid Overlays competing with each other for focus.
         */
        _this.handleDocumentFocus = function (e) {
            // get the actual target even in the Shadow DOM
            var eventTarget = e.composed ? e.composedPath()[0] : e.target;
            if (_this.props.enforceFocus &&
                _this.containerElement != null &&
                eventTarget instanceof Node &&
                !_this.containerElement.contains(eventTarget)) {
                // prevent default focus behavior (sometimes auto-scrolls the page)
                e.preventDefault();
                e.stopImmediatePropagation();
                _this.bringFocusInsideOverlay();
            }
        };
        _this.handleKeyDown = function (e) {
            var _a = _this.props, canEscapeKeyClose = _a.canEscapeKeyClose, onClose = _a.onClose;
            if (e.key === "Escape" && canEscapeKeyClose) {
                onClose === null || onClose === void 0 ? void 0 : onClose(e);
                // prevent other overlays from closing
                e.stopPropagation();
                // prevent browser-specific escape key behavior (Safari exits fullscreen)
                e.preventDefault();
            }
        };
        _this.handleTransitionAddEnd = function () {
            // no-op
        };
        return _this;
    }
    Overlay.getDerivedStateFromProps = function (_a) {
        var hasEverOpened = _a.isOpen;
        if (hasEverOpened) {
            return { hasEverOpened: hasEverOpened };
        }
        return null;
    };
    Overlay.prototype.render = function () {
        var _a;
        var _b;
        // oh snap! no reason to render anything at all if we're being truly lazy
        if (this.props.lazy && !this.state.hasEverOpened) {
            return null;
        }
        var _c = this.props, autoFocus = _c.autoFocus, children = _c.children, className = _c.className, enforceFocus = _c.enforceFocus, usePortal = _c.usePortal, isOpen = _c.isOpen;
        // TransitionGroup types require single array of children; does not support nested arrays.
        // So we must collapse backdrop and children into one array, and every item must be wrapped in a
        // Transition element (no ReactText allowed).
        var childrenWithTransitions = isOpen ? (_b = react.Children.map(children, this.maybeRenderChild)) !== null && _b !== void 0 ? _b : [] : [];
        var maybeBackdrop = this.maybeRenderBackdrop();
        if (maybeBackdrop !== null) {
            childrenWithTransitions.unshift(maybeBackdrop);
        }
        if (isOpen && (autoFocus || enforceFocus) && childrenWithTransitions.length > 0) {
            childrenWithTransitions.unshift(this.renderDummyElement("__start", {
                className: OVERLAY_START_FOCUS_TRAP,
                onFocus: this.handleStartFocusTrapElementFocus,
                onKeyDown: this.handleStartFocusTrapElementKeyDown,
                ref: this.refHandlers.startFocusTrap,
            }));
            if (enforceFocus) {
                childrenWithTransitions.push(this.renderDummyElement("__end", {
                    className: OVERLAY_END_FOCUS_TRAP,
                    onFocus: this.handleEndFocusTrapElementFocus,
                    ref: this.refHandlers.endFocusTrap,
                }));
            }
        }
        var containerClasses = classnames(OVERLAY, (_a = {},
            _a[OVERLAY_OPEN] = isOpen,
            _a[OVERLAY_INLINE] = !usePortal,
            _a), className);
        var transitionGroup = (react.createElement(TransitionGroup, { appear: true, "aria-live": "polite", className: containerClasses, component: "div", onKeyDown: this.handleKeyDown, ref: this.refHandlers.container }, childrenWithTransitions));
        if (usePortal) {
            return (react.createElement(Portal, { className: this.props.portalClassName, container: this.props.portalContainer }, transitionGroup));
        }
        else {
            return transitionGroup;
        }
    };
    Overlay.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.isOpen && !this.props.isOpen) {
            this.overlayWillClose();
        }
        else if (!prevProps.isOpen && this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.overlayWillClose();
    };
    /**
     * @public for testing
     * @internal
     */
    Overlay.prototype.bringFocusInsideOverlay = function () {
        var _this = this;
        // always delay focus manipulation to just before repaint to prevent scroll jumping
        return this.requestAnimationFrame(function () {
            var _a;
            // container ref may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            var activeElement = getActiveElement(_this.containerElement);
            if (_this.containerElement == null || activeElement == null || !_this.props.isOpen) {
                return;
            }
            var isFocusOutsideModal = !_this.containerElement.contains(activeElement);
            if (isFocusOutsideModal) {
                (_a = _this.startFocusTrapElement) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                _this.isAutoFocusing = false;
            }
        });
    };
    Overlay.prototype.maybeRenderBackdrop = function () {
        var _a = this.props, backdropClassName = _a.backdropClassName, backdropProps = _a.backdropProps, hasBackdrop = _a.hasBackdrop, isOpen = _a.isOpen, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
        if (hasBackdrop && isOpen) {
            return (react.createElement(CSSTransition, { classNames: transitionName, key: "__backdrop", timeout: transitionDuration, addEndListener: this.handleTransitionAddEnd },
                react.createElement("div", __assign({}, backdropProps, { className: classnames(OVERLAY_BACKDROP, backdropClassName, backdropProps === null || backdropProps === void 0 ? void 0 : backdropProps.className), onMouseDown: this.handleBackdropMouseDown }))));
        }
        else {
            return null;
        }
    };
    Overlay.prototype.renderDummyElement = function (key, props) {
        var _a = this.props, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
        return (react.createElement(CSSTransition, { classNames: transitionName, key: key, addEndListener: this.handleTransitionAddEnd, timeout: transitionDuration, unmountOnExit: true },
            react.createElement("div", __assign({ tabIndex: 0 }, props))));
    };
    Overlay.prototype.getKeyboardFocusableElements = function () {
        var focusableElements = this.containerElement !== null
            ? Array.from(
            // Order may not be correct if children elements use tabindex values > 0.
            // Selectors derived from this SO question:
            // https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus
            this.containerElement.querySelectorAll([
                'a[href]:not([tabindex="-1"])',
                'button:not([disabled]):not([tabindex="-1"])',
                'details:not([tabindex="-1"])',
                'input:not([disabled]):not([tabindex="-1"])',
                'select:not([disabled]):not([tabindex="-1"])',
                'textarea:not([disabled]):not([tabindex="-1"])',
                '[tabindex]:not([tabindex="-1"])',
            ].join(",")))
            : [];
        return focusableElements.filter(function (el) {
            return !el.classList.contains(OVERLAY_START_FOCUS_TRAP) &&
                !el.classList.contains(OVERLAY_END_FOCUS_TRAP);
        });
    };
    Overlay.prototype.overlayWillClose = function () {
        document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        document.removeEventListener("mousedown", this.handleDocumentClick);
        var openStack = Overlay.openStack;
        var stackIndex = openStack.indexOf(this);
        if (stackIndex !== -1) {
            openStack.splice(stackIndex, 1);
            if (openStack.length > 0) {
                var lastOpenedOverlay = Overlay.getLastOpened();
                // Only bring focus back to last overlay if it had autoFocus _and_ enforceFocus enabled.
                // If `autoFocus={false}`, it's likely that the overlay never received focus in the first place,
                // so it would be surprising for us to send it there. See https://github.com/palantir/blueprint/issues/4921
                if (lastOpenedOverlay.props.autoFocus && lastOpenedOverlay.props.enforceFocus) {
                    lastOpenedOverlay.bringFocusInsideOverlay();
                    document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
                }
            }
            if (openStack.filter(function (o) { return o.props.usePortal && o.props.hasBackdrop; }).length === 0) {
                document.body.classList.remove(OVERLAY_OPEN);
            }
        }
    };
    Overlay.prototype.overlayWillOpen = function () {
        var getLastOpened = Overlay.getLastOpened, openStack = Overlay.openStack;
        if (openStack.length > 0) {
            document.removeEventListener("focus", getLastOpened().handleDocumentFocus, /* useCapture */ true);
        }
        openStack.push(this);
        if (this.props.autoFocus) {
            this.isAutoFocusing = true;
            this.bringFocusInsideOverlay();
        }
        if (this.props.enforceFocus) {
            // Focus events do not bubble, but setting useCapture allows us to listen in and execute
            // our handler before all others
            document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        }
        if (this.props.canOutsideClickClose && !this.props.hasBackdrop) {
            document.addEventListener("mousedown", this.handleDocumentClick);
        }
        if (this.props.hasBackdrop && this.props.usePortal) {
            // add a class to the body to prevent scrolling of content below the overlay
            document.body.classList.add(OVERLAY_OPEN);
        }
        this.lastActiveElementBeforeOpened = getActiveElement(this.containerElement);
    };
    Overlay.displayName = "".concat(DISPLAYNAME_PREFIX, ".Overlay");
    Overlay.defaultProps = {
        autoFocus: true,
        backdropProps: {},
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        isOpen: false,
        lazy: true,
        shouldReturnFocusOnClose: true,
        transitionDuration: 300,
        transitionName: OVERLAY,
        usePortal: true,
    };
    Overlay.openStack = [];
    Overlay.getLastOpened = function () { return Overlay.openStack[Overlay.openStack.length - 1]; };
    return Overlay;
}(AbstractPureComponent2));

var resizeObservers = [];

var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};

var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};

var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};

var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

var freeze = function (obj) { return Object.freeze(obj); };

var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
    }
    return ResizeObserverSize;
}());

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());

var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};

var global = typeof window !== 'undefined' ? window : {};

var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};

var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());

var calculateDepthForNode = function (node) {
    if (isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};

var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};

var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};

var process = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};

var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};

var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};

var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return global.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};

var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());

var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());

var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && resizeObservers.push(detail);
            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
            updateCount(1);
            scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            updateCount(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());

var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** `ResizeSensor` requires a single DOM element child and will error otherwise. */
var ResizeSensor = /** @class */ (function (_super) {
    __extends(ResizeSensor, _super);
    function ResizeSensor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = null;
        _this.observer = new ResizeObserver(function (entries) { var _a, _b; return (_b = (_a = _this.props).onResize) === null || _b === void 0 ? void 0 : _b.call(_a, entries); });
        return _this;
    }
    ResizeSensor.prototype.render = function () {
        // pass-through render of single child
        return react.Children.only(this.props.children);
    };
    ResizeSensor.prototype.componentDidMount = function () {
        this.observeElement();
    };
    ResizeSensor.prototype.componentDidUpdate = function (prevProps) {
        this.observeElement(this.props.observeParents !== prevProps.observeParents);
    };
    ResizeSensor.prototype.componentWillUnmount = function () {
        this.observer.disconnect();
        this.element = null;
    };
    /**
     * Observe the DOM element, if defined and different from the currently
     * observed element. Pass `force` argument to skip element checks and always
     * re-observe.
     */
    ResizeSensor.prototype.observeElement = function (force) {
        if (force === void 0) { force = false; }
        var element = this.getElement();
        if (!(element instanceof Element)) {
            // stop everything if not defined
            this.observer.disconnect();
            return;
        }
        if (element === this.element && !force) {
            // quit if given same element -- nothing to update (unless forced)
            return;
        }
        else {
            // clear observer list if new element
            this.observer.disconnect();
            // remember element reference for next time
            this.element = element;
        }
        // observer callback is invoked immediately when observing new elements
        this.observer.observe(element);
        if (this.props.observeParents) {
            var parent_1 = element.parentElement;
            while (parent_1 != null) {
                this.observer.observe(parent_1);
                parent_1 = parent_1.parentElement;
            }
        }
    };
    ResizeSensor.prototype.getElement = function () {
        try {
            // using findDOMNode for two reasons:
            // 1. cloning to insert a ref is unwieldy and not performant.
            // 2. ensure that we resolve to an actual DOM node (instead of any JSX ref instance).
            // HACKHACK: see https://github.com/palantir/blueprint/issues/3979
            /* eslint-disable-next-line react/no-find-dom-node */
            return reactDom.findDOMNode(this);
        }
        catch (_a) {
            // swallow error if findDOMNode is run on unmounted component.
            return null;
        }
    };
    ResizeSensor.displayName = "".concat(DISPLAYNAME_PREFIX, ".ResizeSensor");
    return ResizeSensor;
}(AbstractPureComponent2));

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @deprecated use { Tooltip2 } from "@blueprintjs/popover2" */
// eslint-disable-next-line deprecation/deprecation
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // eslint-disable-next-line deprecation/deprecation
        _this.popover = null;
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, children = _b.children, intent = _b.intent, popoverClassName = _b.popoverClassName, restProps = __rest(_b, ["children", "intent", "popoverClassName"]);
        var classes = classnames(TOOLTIP, (_a = {}, _a[MINIMAL] = this.props.minimal, _a), intentClass(intent), popoverClassName);
        return (
        /* eslint-disable deprecation/deprecation */
        react.createElement(Popover, __assign({ interactionKind: PopoverInteractionKind.HOVER_TARGET_ONLY, modifiers: { arrow: { enabled: !this.props.minimal } } }, restProps, { autoFocus: false, canEscapeKeyClose: false, enforceFocus: false, lazy: true, popoverClassName: classes, portalContainer: this.props.portalContainer, ref: function (ref) { return (_this.popover = ref); } }), children));
    };
    Tooltip.prototype.reposition = function () {
        if (this.popover != null) {
            this.popover.reposition();
        }
    };
    Tooltip.displayName = "".concat(DISPLAYNAME_PREFIX, ".Tooltip");
    // eslint-disable-next-line deprecation/deprecation
    Tooltip.defaultProps = {
        hoverCloseDelay: 0,
        hoverOpenDelay: 100,
        minimal: false,
        transitionDuration: 100,
    };
    return Tooltip;
}(AbstractPureComponent2));

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Popper placement utils
// ======================
/** Converts a full placement to one of the four positions by stripping text after the `-`. */
function getPosition(placement) {
    return placement.split("-")[0];
}
/** Returns true if position is left or right. */
function isVerticalPosition(side) {
    return ["left", "right"].indexOf(side) !== -1;
}
/** Returns the opposite position. */
function getOppositePosition(side) {
    switch (side) {
        case "top":
            return "bottom";
        case "left":
            return "right";
        case "bottom":
            return "top";
        default:
            return "left";
    }
}
/** Returns the CSS alignment keyword corresponding to given placement. */
function getAlignment(placement) {
    var align = placement.split("-")[1];
    switch (align) {
        case "start":
            return "left";
        case "end":
            return "right";
        default:
            return "center";
    }
}
// Popper modifiers
// ================
/** Modifier helper function to compute popper transform-origin based on arrow position */
function getTransformOrigin(data) {
    var position = getPosition(data.placement);
    if (data.arrowElement == null) {
        return isVerticalPosition(position)
            ? "".concat(getOppositePosition(position), " ").concat(getAlignment(position))
            : "".concat(getAlignment(position), " ").concat(getOppositePosition(position));
    }
    else {
        var arrowSizeShift = data.arrowElement.clientHeight / 2;
        var arrow = data.offsets.arrow;
        // can use keyword for dimension without the arrow, to ease computation burden.
        // move origin by half arrow's height to keep it centered.
        return isVerticalPosition(position)
            ? "".concat(getOppositePosition(position), " ").concat(arrow.top + arrowSizeShift, "px")
            : "".concat(arrow.left + arrowSizeShift, "px ").concat(getOppositePosition(position));
    }
}
// additional space between arrow and edge of target
var ARROW_SPACING = 4;
/** Popper modifier that offsets popper and arrow so arrow points out of the correct side */
var arrowOffsetModifier = function (data) {
    if (data.arrowElement == null) {
        return data;
    }
    // our arrows have equal width and height
    var arrowSize = data.arrowElement.clientWidth;
    // this logic borrowed from original Popper arrow modifier itself
    var position = getPosition(data.placement);
    var isVertical = isVerticalPosition(position);
    var len = isVertical ? "width" : "height";
    var offsetSide = isVertical ? "left" : "top";
    var arrowOffsetSize = Math.round(arrowSize / 2 / Math.sqrt(2));
    // offset popover by arrow size, offset arrow in the opposite direction
    if (position === "top" || position === "left") {
        // the "up & back" directions require negative popper offsets
        data.offsets.popper[offsetSide] -= arrowOffsetSize + ARROW_SPACING;
        // can only use left/top on arrow so gotta get clever with 100% + X
        data.offsets.arrow[offsetSide] = data.offsets.popper[len] - arrowSize + arrowOffsetSize;
    }
    else {
        data.offsets.popper[offsetSide] += arrowOffsetSize + ARROW_SPACING;
        data.offsets.arrow[offsetSide] = -arrowOffsetSize;
    }
    return data;
};

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// these paths come from the Core Kit Sketch file
// https://github.com/palantir/blueprint/blob/develop/resources/sketch/Core%20Kit.sketch
var SVG_SHADOW_PATH = "M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378" +
    "-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z";
var SVG_ARROW_PATH = "M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005" +
    "c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z";
/** Modifier helper function to compute arrow rotate() transform */
function getArrowAngle(placement) {
    if (placement == null) {
        return 0;
    }
    // can only be top/left/bottom/right - auto is resolved internally
    switch (getPosition(placement)) {
        case "top":
            return -90;
        case "left":
            return 180;
        case "bottom":
            return 90;
        default:
            return 0;
    }
}
var PopoverArrow = function (_a) {
    var _b = _a.arrowProps, ref = _b.ref, style = _b.style, placement = _a.placement;
    return (react.createElement("div", { className: POPOVER_ARROW, ref: ref, style: style.left == null || isNaN(+style.left) ? {} : style },
        react.createElement("svg", { viewBox: "0 0 30 30", style: { transform: "rotate(".concat(getArrowAngle(placement), "deg)") } },
            react.createElement("path", { className: POPOVER_ARROW + "-border", d: SVG_SHADOW_PATH }),
            react.createElement("path", { className: POPOVER_ARROW + "-fill", d: SVG_ARROW_PATH }))));
};
PopoverArrow.displayName = "".concat(DISPLAYNAME_PREFIX, ".PopoverArrow");

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Convert a position to a placement.
 *
 * @param position the position to convert
 */
function positionToPlacement(position) {
    /* istanbul ignore next */
    switch (position) {
        case Position.TOP_LEFT:
            return "top-start";
        case Position.TOP:
            return "top";
        case Position.TOP_RIGHT:
            return "top-end";
        case Position.RIGHT_TOP:
            return "right-start";
        case Position.RIGHT:
            return "right";
        case Position.RIGHT_BOTTOM:
            return "right-end";
        case Position.BOTTOM_RIGHT:
            return "bottom-end";
        case Position.BOTTOM:
            return "bottom";
        case Position.BOTTOM_LEFT:
            return "bottom-start";
        case Position.LEFT_BOTTOM:
            return "left-end";
        case Position.LEFT:
            return "left";
        case Position.LEFT_TOP:
            return "left-start";
        case "auto":
        case "auto-start":
        case "auto-end":
            // Return the string unchanged.
            return position;
        default:
            return assertNever(position);
    }
}
/* istanbul ignore next */
function assertNever(x) {
    throw new Error("Unexpected position: " + x);
}

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PopoverInteractionKind = {
    CLICK: "click",
    CLICK_TARGET_ONLY: "click-target",
    HOVER: "hover",
    HOVER_TARGET_ONLY: "hover-target",
};
/** @deprecated use { Popover2 } from "@blueprintjs/popover2" */
// eslint-disable-next-line deprecation/deprecation
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.popoverRef = react.createRef();
        /**
         * DOM element that contains the popover.
         * When `usePortal={true}`, this element will be portaled outside the usual DOM flow,
         * so this reference can be very useful for testing.
         */
        _this.popoverElement = null;
        /** DOM element that contains the target. */
        _this.targetElement = null;
        _this.state = {
            hasDarkParent: false,
            isOpen: _this.getIsOpen(_this.props),
            transformOrigin: "",
        };
        // a flag that lets us detect mouse movement between the target and popover,
        // now that mouseleave is triggered when you cross the gap between the two.
        _this.isMouseInTargetOrPopover = false;
        // a flag that indicates whether the target previously lost focus to another
        // element on the same page.
        _this.lostFocusOnSamePage = true;
        _this.handlePopoverRef = refHandler(_this, "popoverElement", _this.props.popoverRef);
        _this.handleTargetRef = function (ref) { return (_this.targetElement = ref); };
        /**
         * Instance method to instruct the `Popover` to recompute its position.
         *
         * This method should only be used if you are updating the target in a way
         * that does not cause it to re-render, such as changing its _position_
         * without changing its _size_ (since `Popover` already repositions when it
         * detects a resize).
         */
        _this.reposition = function () { var _a; return (_a = _this.popperScheduleUpdate) === null || _a === void 0 ? void 0 : _a.call(_this); };
        _this.renderPopover = function (popperProps) {
            var _a;
            var _b = _this.props, interactionKind = _b.interactionKind, usePortal = _b.usePortal;
            var transformOrigin = _this.state.transformOrigin;
            // Need to update our reference to this on every render as it will change.
            _this.popperScheduleUpdate = popperProps.scheduleUpdate;
            var popoverHandlers = {
                // always check popover clicks for dismiss class
                onClick: _this.handlePopoverClick,
            };
            if (interactionKind === PopoverInteractionKind.HOVER ||
                (!usePortal && interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY)) {
                popoverHandlers.onMouseEnter = _this.handleMouseEnter;
                popoverHandlers.onMouseLeave = _this.handleMouseLeave;
            }
            var popoverClasses = classnames(POPOVER, (_a = {},
                _a[DARK] = _this.props.inheritDarkTheme && _this.state.hasDarkParent,
                _a[MINIMAL] = _this.props.minimal,
                _a[POPOVER_CAPTURING_DISMISS] = _this.props.captureDismiss,
                _a[POPOVER_OUT_OF_BOUNDARIES] = popperProps.outOfBoundaries === true,
                _a), _this.props.popoverClassName);
            return (react.createElement("div", { className: TRANSITION_CONTAINER, ref: popperProps.ref, style: popperProps.style },
                react.createElement(ResizeSensor, { onResize: _this.reposition },
                    react.createElement("div", __assign({ className: popoverClasses, style: { transformOrigin: transformOrigin }, ref: _this.popoverRef }, popoverHandlers),
                        _this.isArrowEnabled() && (react.createElement(PopoverArrow, { arrowProps: popperProps.arrowProps, placement: popperProps.placement })),
                        react.createElement("div", { className: POPOVER_CONTENT }, _this.understandChildren().content)))));
        };
        _this.renderTarget = function (referenceProps) {
            var _a, _b;
            var _c = _this.props, fill = _c.fill, openOnTargetFocus = _c.openOnTargetFocus, targetClassName = _c.targetClassName, _d = _c.targetProps, targetProps = _d === void 0 ? {} : _d;
            var isOpen = _this.state.isOpen;
            var isControlled = _this.isControlled();
            var isHoverInteractionKind = _this.isHoverInteractionKind();
            var targetTagName = _this.props.targetTagName;
            if (fill) {
                targetTagName = "div";
            }
            var finalTargetProps = isHoverInteractionKind
                ? {
                    // HOVER handlers
                    onBlur: _this.handleTargetBlur,
                    onFocus: _this.handleTargetFocus,
                    onMouseEnter: _this.handleMouseEnter,
                    onMouseLeave: _this.handleMouseLeave,
                }
                : {
                    // CLICK needs only one handler
                    onClick: _this.handleTargetClick,
                };
            finalTargetProps["aria-haspopup"] = "true";
            finalTargetProps.className = classnames(POPOVER_TARGET, (_a = {}, _a[POPOVER_OPEN] = isOpen, _a), targetProps.className, targetClassName);
            finalTargetProps.ref = referenceProps.ref;
            var rawTarget = ensureElement(_this.understandChildren().target);
            if (rawTarget === undefined) {
                return null;
            }
            var rawTabIndex = rawTarget.props.tabIndex;
            // ensure target is focusable if relevant prop enabled
            var tabIndex = rawTabIndex == null && openOnTargetFocus && isHoverInteractionKind ? 0 : rawTabIndex;
            var clonedTarget = react.cloneElement(rawTarget, {
                className: classnames(rawTarget.props.className, (_b = {},
                    // this class is mainly useful for button targets; we should only apply it for uncontrolled popovers
                    // when they are opened by a user interaction
                    _b[ACTIVE] = isOpen && !isControlled && !isHoverInteractionKind,
                    _b)),
                // force disable single Tooltip child when popover is open (BLUEPRINT-552)
                /* eslint-disable-next-line deprecation/deprecation */
                disabled: isOpen && isElementOfType(rawTarget, Tooltip) ? true : rawTarget.props.disabled,
                tabIndex: tabIndex,
            });
            var target = react.createElement(targetTagName, __assign(__assign({}, targetProps), finalTargetProps), clonedTarget);
            return react.createElement(ResizeSensor, { onResize: _this.reposition }, target);
        };
        _this.isControlled = function () { return _this.props.isOpen !== undefined; };
        _this.handleTargetFocus = function (e) {
            var _a, _b;
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                if (e.relatedTarget == null && !_this.lostFocusOnSamePage) {
                    // ignore this focus event -- the target was already focused but the page itself
                    // lost focus (e.g. due to switching tabs).
                    return;
                }
                _this.handleMouseEnter(e);
            }
            (_b = (_a = _this.props.targetProps) === null || _a === void 0 ? void 0 : _a.onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleTargetBlur = function (e) {
            var _a, _b;
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                // if the next element to receive focus is within the popover, we'll want to leave the
                // popover open. e.relatedTarget ought to tell us the next element to receive focus, but if the user just
                // clicked on an element which is not focusable (either by default or with a tabIndex attribute),
                // it won't be set. So, we filter those out here and assume that a click handler somewhere else will
                // close the popover if necessary.
                if (e.relatedTarget != null && !_this.isElementInPopover(e.relatedTarget)) {
                    _this.handleMouseLeave(e);
                }
            }
            _this.lostFocusOnSamePage = e.relatedTarget != null;
            (_b = (_a = _this.props.targetProps) === null || _a === void 0 ? void 0 : _a.onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleMouseEnter = function (e) {
            var _a, _b;
            _this.isMouseInTargetOrPopover = true;
            // if we're entering the popover, and the mode is set to be HOVER_TARGET_ONLY, we want to manually
            // trigger the mouse leave event, as hovering over the popover shouldn't count.
            if (!_this.props.usePortal &&
                _this.isElementInPopover(e.target) &&
                _this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY &&
                !_this.props.openOnTargetFocus) {
                _this.handleMouseLeave(e);
            }
            else if (!_this.props.disabled) {
                // only begin opening popover when it is enabled
                _this.setOpenState(true, e, _this.props.hoverOpenDelay);
            }
            (_b = (_a = _this.props.targetProps) === null || _a === void 0 ? void 0 : _a.onMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleMouseLeave = function (e) {
            var _a, _b;
            _this.isMouseInTargetOrPopover = false;
            // wait until the event queue is flushed, because we want to leave the
            // popover open if the mouse entered the popover immediately after
            // leaving the target (or vice versa).
            _this.setTimeout(function () {
                if (_this.isMouseInTargetOrPopover) {
                    return;
                }
                // user-configurable closing delay is helpful when moving mouse from target to popover
                _this.setOpenState(false, e, _this.props.hoverCloseDelay);
            });
            (_b = (_a = _this.props.targetProps) === null || _a === void 0 ? void 0 : _a.onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handlePopoverClick = function (e) {
            var eventTarget = e.target;
            var eventPopover = eventTarget.closest(".".concat(POPOVER));
            var isEventFromSelf = eventPopover === _this.popoverRef.current;
            var isEventPopoverCapturing = eventPopover === null || eventPopover === void 0 ? void 0 : eventPopover.classList.contains(POPOVER_CAPTURING_DISMISS);
            // an OVERRIDE inside a DISMISS does not dismiss, and a DISMISS inside an OVERRIDE will dismiss.
            var dismissElement = eventTarget.closest(".".concat(POPOVER_DISMISS, ", .").concat(POPOVER_DISMISS_OVERRIDE));
            var shouldDismiss = dismissElement != null && dismissElement.classList.contains(POPOVER_DISMISS);
            var isDisabled = eventTarget.closest(":disabled, .".concat(DISABLED)) != null;
            if (shouldDismiss && !isDisabled && (!isEventPopoverCapturing || isEventFromSelf)) {
                _this.setOpenState(false, e);
            }
        };
        _this.handleOverlayClose = function (e) {
            if (_this.targetElement === null || e === undefined) {
                return;
            }
            var eventTarget = e.target;
            // if click was in target, target event listener will handle things, so don't close
            if (!elementIsOrContains(_this.targetElement, eventTarget) || e.nativeEvent instanceof KeyboardEvent) {
                _this.setOpenState(false, e);
            }
        };
        _this.handleTargetClick = function (e) {
            var _a, _b;
            // ensure click did not originate from within inline popover before closing
            if (!_this.props.disabled && !_this.isElementInPopover(e.target)) {
                if (_this.props.isOpen == null) {
                    _this.setState(function (prevState) { return ({ isOpen: !prevState.isOpen }); });
                }
                else {
                    _this.setOpenState(!_this.props.isOpen, e);
                }
            }
            (_b = (_a = _this.props.targetProps) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        /** Popper modifier that updates React state (for style properties) based on latest data. */
        _this.updatePopoverState = function (data) {
            // always set string; let shouldComponentUpdate determine if update is necessary
            _this.setState({ transformOrigin: getTransformOrigin(data) });
            return data;
        };
        return _this;
    }
    Popover.prototype.render = function () {
        var _a;
        var _b;
        // rename wrapper tag to begin with uppercase letter so it's recognized
        // as JSX component instead of intrinsic element. but because of its
        // type, tsc actually recognizes that it is _any_ intrinsic element, so
        // it can typecheck the HTML props!!
        var _c = this.props, className = _c.className, disabled = _c.disabled, fill = _c.fill, placement = _c.placement, _d = _c.position, position = _d === void 0 ? "auto" : _d, shouldReturnFocusOnClose = _c.shouldReturnFocusOnClose;
        var isOpen = this.state.isOpen;
        var wrapperTagName = this.props.wrapperTagName;
        if (fill) {
            wrapperTagName = "div";
        }
        var isContentEmpty = ensureElement(this.understandChildren().content) == null;
        // need to do this check in render(), because `isOpen` is derived from
        // state, and state can't necessarily be accessed in validateProps.
        if (isContentEmpty && !disabled && isOpen !== false && !isNodeEnv("production")) {
            console.warn(POPOVER_WARN_EMPTY_CONTENT);
        }
        var wrapperClasses = classnames(POPOVER_WRAPPER, className, (_a = {},
            _a[FILL] = fill,
            _a));
        var defaultAutoFocus = this.isHoverInteractionKind() ? false : undefined;
        var wrapper = react.createElement(wrapperTagName, { className: wrapperClasses }, react.createElement(Reference, { innerRef: this.handleTargetRef }, this.renderTarget), react.createElement(Overlay, { autoFocus: (_b = this.props.autoFocus) !== null && _b !== void 0 ? _b : defaultAutoFocus, backdropClassName: POPOVER_BACKDROP, backdropProps: this.props.backdropProps, canEscapeKeyClose: this.props.canEscapeKeyClose, canOutsideClickClose: this.props.interactionKind === PopoverInteractionKind.CLICK, className: this.props.portalClassName, enforceFocus: this.props.enforceFocus, hasBackdrop: this.props.hasBackdrop, isOpen: isOpen && !isContentEmpty, onClose: this.handleOverlayClose, onClosed: this.props.onClosed, onClosing: this.props.onClosing, onOpened: this.props.onOpened, onOpening: this.props.onOpening, transitionDuration: this.props.transitionDuration, transitionName: POPOVER, usePortal: this.props.usePortal, portalContainer: this.props.portalContainer, 
            // if hover interaciton, it doesn't make sense to take over focus control
            shouldReturnFocusOnClose: this.isHoverInteractionKind() ? false : shouldReturnFocusOnClose },
            react.createElement(Popper$1, { innerRef: this.handlePopoverRef, placement: placement !== null && placement !== void 0 ? placement : positionToPlacement(position), modifiers: this.getPopperModifiers() }, this.renderPopover)));
        return react.createElement(Manager, null, wrapper);
    };
    Popover.prototype.componentDidMount = function () {
        this.updateDarkParent();
    };
    // eslint-disable-next-line deprecation/deprecation
    Popover.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (prevProps.popoverRef !== this.props.popoverRef) {
            setRef(prevProps.popoverRef, null);
            this.handlePopoverRef = refHandler(this, "popoverElement", this.props.popoverRef);
            setRef(this.props.popoverRef, this.popoverElement);
        }
        this.updateDarkParent();
        var nextIsOpen = this.getIsOpen(this.props);
        if (this.props.isOpen != null && nextIsOpen !== this.state.isOpen) {
            this.setOpenState(nextIsOpen);
            // tricky: setOpenState calls setState only if this.props.isOpen is
            // not controlled, so we need to invoke setState manually here.
            this.setState({ isOpen: nextIsOpen });
        }
        else if (this.props.disabled && this.state.isOpen && this.props.isOpen == null) {
            // special case: close an uncontrolled popover when disabled is set to true
            this.setOpenState(false);
        }
    };
    // eslint-disable-next-line deprecation/deprecation
    Popover.prototype.validateProps = function (props) {
        if (props.isOpen == null && props.onInteraction != null) {
            console.warn(POPOVER_WARN_UNCONTROLLED_ONINTERACTION);
        }
        if (props.hasBackdrop && !props.usePortal) {
            console.warn(POPOVER_WARN_HAS_BACKDROP_INLINE);
        }
        if (props.hasBackdrop && props.interactionKind !== PopoverInteractionKind.CLICK) {
            console.error(POPOVER_HAS_BACKDROP_INTERACTION);
        }
        if (props.placement !== undefined && props.position !== undefined) {
            console.warn(POPOVER_WARN_PLACEMENT_AND_POSITION_MUTEX);
        }
        var childrenCount = react.Children.count(props.children);
        var hasContentProp = props.content !== undefined;
        var hasTargetProp = props.target !== undefined;
        if (childrenCount === 0 && !hasTargetProp) {
            console.error(POPOVER_REQUIRES_TARGET);
        }
        if (childrenCount > 2) {
            console.warn(POPOVER_WARN_TOO_MANY_CHILDREN);
        }
        if (childrenCount > 0 && hasTargetProp) {
            console.warn(POPOVER_WARN_DOUBLE_TARGET);
        }
        if (childrenCount === 2 && hasContentProp) {
            console.warn(POPOVER_WARN_DOUBLE_CONTENT);
        }
    };
    Popover.prototype.updateDarkParent = function () {
        if (this.props.usePortal && this.state.isOpen) {
            var hasDarkParent = this.targetElement != null && this.targetElement.closest(".".concat(DARK)) != null;
            this.setState({ hasDarkParent: hasDarkParent });
        }
    };
    // content and target can be specified as props or as children. this method
    // normalizes the two approaches, preferring child over prop.
    Popover.prototype.understandChildren = function () {
        var _a = this.props, children = _a.children, contentProp = _a.content, targetProp = _a.target;
        // #validateProps asserts that 1 <= children.length <= 2 so content is optional
        var _b = react.Children.toArray(children), targetChild = _b[0], contentChild = _b[1];
        return {
            content: contentChild == null ? contentProp : contentChild,
            target: targetChild == null ? targetProp : targetChild,
        };
    };
    // eslint-disable-next-line deprecation/deprecation
    Popover.prototype.getIsOpen = function (props) {
        // disabled popovers should never be allowed to open.
        if (props.disabled) {
            return false;
        }
        else if (props.isOpen != null) {
            return props.isOpen;
        }
        else {
            return props.defaultIsOpen;
        }
    };
    Popover.prototype.getPopperModifiers = function () {
        var _a = this.props, boundary = _a.boundary, modifiers = _a.modifiers;
        var _b = modifiers, _c = _b.flip, flip = _c === void 0 ? {} : _c, _d = _b.preventOverflow, preventOverflow = _d === void 0 ? {} : _d;
        return __assign(__assign({}, modifiers), { arrowOffset: {
                enabled: this.isArrowEnabled(),
                fn: arrowOffsetModifier,
                order: 510,
            }, flip: __assign({ boundariesElement: boundary }, flip), preventOverflow: __assign({ boundariesElement: boundary }, preventOverflow), updatePopoverState: {
                enabled: true,
                fn: this.updatePopoverState,
                order: 900,
            } });
    };
    // a wrapper around setState({isOpen}) that will call props.onInteraction instead when in controlled mode.
    // starts a timeout to delay changing the state if a non-zero duration is provided.
    Popover.prototype.setOpenState = function (isOpen, e, timeout) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        // cancel any existing timeout because we have new state
        (_a = this.cancelOpenTimeout) === null || _a === void 0 ? void 0 : _a.call(this);
        if (timeout !== undefined && timeout > 0) {
            this.cancelOpenTimeout = this.setTimeout(function () { return _this.setOpenState(isOpen, e); }, timeout);
        }
        else {
            if (this.props.isOpen == null) {
                this.setState({ isOpen: isOpen });
            }
            else {
                (_c = (_b = this.props).onInteraction) === null || _c === void 0 ? void 0 : _c.call(_b, isOpen, e);
            }
            if (!isOpen) {
                // non-null assertion because the only time `e` is undefined is when in controlled mode
                // or the rare special case in uncontrolled mode when the `disabled` flag is toggled true
                (_e = (_d = this.props).onClose) === null || _e === void 0 ? void 0 : _e.call(_d, e);
            }
        }
    };
    Popover.prototype.isArrowEnabled = function () {
        var _a = this.props, minimal = _a.minimal, modifiers = _a.modifiers;
        // omitting `arrow` from `modifiers` uses Popper default, which does show an arrow.
        return !minimal && ((modifiers === null || modifiers === void 0 ? void 0 : modifiers.arrow) == null || modifiers.arrow.enabled);
    };
    Popover.prototype.isElementInPopover = function (element) {
        var _a;
        return (_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.contains(element);
    };
    Popover.prototype.isHoverInteractionKind = function () {
        return (this.props.interactionKind === PopoverInteractionKind.HOVER ||
            this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY);
    };
    Popover.displayName = "".concat(DISPLAYNAME_PREFIX, ".Popover");
    // eslint-disable-next-line deprecation/deprecation
    Popover.defaultProps = {
        boundary: "scrollParent",
        captureDismiss: false,
        defaultIsOpen: false,
        disabled: false,
        fill: false,
        hasBackdrop: false,
        hoverCloseDelay: 300,
        hoverOpenDelay: 150,
        inheritDarkTheme: true,
        interactionKind: PopoverInteractionKind.CLICK,
        minimal: false,
        modifiers: {},
        openOnTargetFocus: true,
        shouldReturnFocusOnClose: false,
        // N.B. we don't set a default for `placement` or `position` here because that would trigger
        // a warning in validateProps if the other prop is specified by a user of this component
        targetTagName: "span",
        transitionDuration: 300,
        usePortal: true,
        wrapperTagName: "span",
    };
    return Popover;
}(AbstractPureComponent2));

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}

function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
}

var add = ["M10.99 6.99h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z"];

var addClip = ["M12 0a1 1 0 00-1 1v2H9a1 1 0 000 2h2v2a1 1 0 102 0V5h2a1 1 0 100-2h-2V1a1 1 0 00-1-1zM0 4a1 1 0 011-1h3.5a1 1 0 010 2H2v2a1 1 0 01-2 0V4zm1 12a1 1 0 01-1-1v-3a1 1 0 112 0v2h2.5a1 1 0 110 2H1zm11 0a1 1 0 001-1v-3a1 1 0 10-2 0v2H9a1 1 0 100 2h3zm-5.5-4a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"];

var addColumnLeft = ["M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12zM4 9h1v1c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1H7V6c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-.55 0-1 .45-1 1s.45 1 1 1z"];

var addColumnRight = ["M8 9h1v1c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V6c0-.55-.45-1-1-1s-1 .45-1 1v1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7-9H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 14H2V2h3v12zm9 0H6V2h8v12z"];

var addLocation = ["M8 0a1 1 0 110 2 6 6 0 106 6 1 1 0 012 0 8 8 0 11-8-8zm0 5a3 3 0 110 6 3 3 0 010-6zm5-5a1 1 0 011 1v.999L15 2a1 1 0 010 2h-1v1a1 1 0 01-2 0V4h-1a1 1 0 010-2h1V1a1 1 0 011-1z"];

var addRowBottom = ["M6 11h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1H9V8c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1s.45 1 1 1zm9-11H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V6h12v8zm0-9H2V2h12v3z"];

var addRowTop = ["M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2v-3h12v3zm0-4H2V2h12v8zM6 7h1v1c0 .55.45 1 1 1s1-.45 1-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1H9V4c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1s.45 1 1 1z"];

var addToArtifact = ["M14 4.01h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm-13 2h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm8 6H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1z"];

var addToFolder = ["M.01 7V5H16v7c0 .55-.45 1-1 1H9.005v-2.99C8.974 8.332 7.644 7 5.996 7H.01zM15 2H7.416L5.706.29a.996.996 0 00-.71-.29H1C.45 0 0 .45 0 1v3h15.99V3c.01-.55-.44-1-.99-1zM5.997 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.589L.3 14.29a1.003 1.003 0 001.42 1.42l3.287-3.29v1.59c0 .55.45 1 1 1 .549 0 .999-.45.999-1v-4A1.02 1.02 0 005.996 9z"];

var airplane = ["M16 1.5A1.498 1.498 0 0013.44.44L9.91 3.97 2 1 1 3l5.93 3.95L3.88 10H1l-1 1 3 2 2 3 1-1v-2.88l3.05-3.05L13 15l2-1-2.97-7.91 3.53-3.53c.27-.27.44-.65.44-1.06z"];

var alignCenter = ["M4 4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H4zM1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm13 10H2c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm1-6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-5 5c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1h4z"];

var alignJustify = ["M15 12.98H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-14-10h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1 0 .56.45 1 1 1zm14 4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-3H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0 6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var alignLeft = ["M13 13H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 3h8c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 12h4c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z"];

var alignRight = ["M15 12.98H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm-14-10h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1 0 .56.45 1 1 1zm14 1H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0 6h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm0-3H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var alignmentBottom = ["M10 12h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm5 2H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h3c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1z"];

var alignmentHorizontalCenter = ["M15 7h-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1H7V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4H1c-.55 0-1 .45-1 1s.45 1 1 1h1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9h2v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1z"];

var alignmentLeft = ["M9 9H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM1 0C.45 0 0 .45 0 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm13 2H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"];

var alignmentRight = ["M11 9H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm4-9c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-4 2H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"];

var alignmentTop = ["M15 0H1C.45 0 0 .45 0 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM6 4H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm7 0h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"];

var alignmentVerticalCenter = ["M13 2H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4v2H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H9V7h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"];

var anchor = ["M10 2a2 2 0 01-1 1.732V5h2v2H9v6.874a4.004 4.004 0 002.976-3.436l-.269.27a1 1 0 01-1.414-1.415l2-2a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414l-.306-.306a6 6 0 01-11.974 0l-.306.306A1 1 0 01.293 9.293l2-2a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414l-.27-.27A4.003 4.003 0 007 13.875V7H5V5h2V3.732A2 2 0 1110 2z"];

var annotation = ["M15.52 2.77c.3-.29.48-.7.48-1.15C16 .73 15.27 0 14.38 0c-.45 0-.85.18-1.15.48l-1.34 1.34 2.3 2.3 1.33-1.35zM7.4 10.9l6.21-6.21-2.3-2.3L5.1 8.6l2.3 2.3zM14 14H2V2h6.34l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5.66l-2 2V14zM3 13l3.58-1.29-2.29-2.27L3 13z"];

var antenna = ["M2.673 10.758a1.396 1.396 0 01.093.234c.127.442.012.932-.362 1.212-.441.332-1.075.246-1.349-.233a8 8 0 1114.014-.225c-.259.488-.889.594-1.341.277-.382-.269-.513-.755-.4-1.2a1.259 1.259 0 01.085-.238 6 6 0 10-10.74.173zm2.464-1.862a1.783 1.783 0 01.076.404c.03.415-.096.831-.43 1.078-.444.328-1.08.237-1.314-.264a5.003 5.003 0 01-.24-.62l-.004-.011a5 5 0 119.574-.08l-.003.011c-.063.213-.14.422-.23.625-.226.504-.861.606-1.31.285-.338-.241-.47-.654-.448-1.07a1.737 1.737 0 01.07-.405 2.99 2.99 0 00-.216-2.233 3 3 0 00-5.525 2.28zM8 7a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414L8 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L7 11.586V8a1 1 0 011-1z"];

var appHeader = ["M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zM6 4a1 1 0 00-1.993-.117L4 4v8a1 1 0 001.993.117L6 12V9h4v3a1 1 0 001.993.117L12 12V4a1 1 0 00-1.993-.117L10 4v3H6V4z"];

var application = ["M3.5 7h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zM15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 12H2V5h12v8zM3.5 9h4c.28 0 .5-.22.5-.5S7.78 8 7.5 8h-4c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5z"];

var applications = ["M3.5 11h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5s.22.5.5.5zm0-2h5c.28 0 .5-.22.5-.5S8.78 8 8.5 8h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM11 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V7h8v7zm5-14H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM3.5 13h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5z"];

var archive = ["M13.382 0a1 1 0 01.894.553L16 4v11a1 1 0 01-1 1H1a1 1 0 01-1-1V4L1.724.553A1 1 0 012.618 0h10.764zM8 6c-.55 0-1 .45-1 1v2.59l-.29-.29-.081-.076A.97.97 0 006 9a1.003 1.003 0 00-.71 1.71l2 2 .096.084c.168.13.38.206.614.206.28 0 .53-.11.71-.29l2-2 .084-.096A1.003 1.003 0 009.29 9.29l-.29.3V7l-.007-.116A1.004 1.004 0 008 6zm5-4H3L2 4h12l-1-2z"];

var areaOfInterest = ["M4 3.664C4 1.644 5.793 0 8 0s3.993 1.643 4 3.664C12 5.692 8 11 8 11S4 5.692 4 3.664zM6 4a2 2 0 104.001-.001A2 2 0 006 4zm7.504 6.269l-2.68-1.609.021-.033c.34-.538.688-1.115 1-1.687l3.67 2.202a1 1 0 01.266 1.482l-4 5A1 1 0 0111 16H5a1 1 0 01-.78-.376l-4-5a1 1 0 01.266-1.482l3.67-2.202a30.46 30.46 0 00.999 1.687l.021.033-2.68 1.609 2.985 3.73h5.038l2.985-3.73z"];

var array = ["M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm4 7a1 1 0 110 2 1 1 0 010-2zM5 7a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z"];

var arrayBoolean = ["M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm7 6a1 1 0 01.993.883L12 7v2a1 1 0 01-.883.993L11 10H5a1 1 0 01-.993-.883L4 9V7a1 1 0 01.883-.993L5 6h6zm0 1H8v2h3V7z"];

var arrayDate = ["M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm6.5 4a.5.5 0 01.5.5V5a1 1 0 01.993.883L12 6v5a1 1 0 01-.883.993L11 12H5a1 1 0 01-.993-.883L4 11V6a1 1 0 01.883-.993L5 5v-.5a.5.5 0 011 0V5h4v-.5a.5.5 0 01.5-.5zm.5 3H5v4h6V7z"];

var arrayFloatingPoint = ["M15.993.883A1 1 0 0015 0h-3l-.117.007A1 1 0 0011 1l.007.117A1 1 0 0012 2h2v12h-2l-.117.007A1 1 0 0012 16h3l.117-.007A1 1 0 0016 15V1l-.007-.117zM5 1a1 1 0 00-1-1H1L.883.007A1 1 0 000 1v14l.007.117A1 1 0 001 16h3l.117-.007A1 1 0 005 15l-.007-.117A1 1 0 004 14H2V2h2l.117-.007A1 1 0 005 1z", "M4.347 5.86c-.177.03-.36.047-.547.047v.703h1.344v3.86h.977V5h-.727a.844.844 0 01-.203.422 1.17 1.17 0 01-.367.281c-.14.073-.3.125-.477.157z", "M11.462 5.27c-.236-.176-.542-.264-.918-.264s-.685.088-.925.263a1.79 1.79 0 00-.557.662c-.13.266-.22.56-.27.88-.046.321-.068.632-.068.933 0 .3.022.612.067.933.05.32.14.617.271.887.135.266.321.487.557.662.24.17.549.256.925.256s.682-.085.918-.256c.24-.175.426-.396.556-.662a2.86 2.86 0 00.271-.887c.05-.321.075-.632.075-.933 0-.3-.025-.612-.075-.933a2.775 2.775 0 00-.27-.88 1.702 1.702 0 00-.557-.662zm-.452 4.34a.7.7 0 01-.466.157.711.711 0 01-.474-.158 1.214 1.214 0 01-.293-.436 2.791 2.791 0 01-.15-.647 6.443 6.443 0 01-.046-.782c0-.276.015-.534.045-.775.03-.246.08-.461.15-.647.076-.185.174-.33.294-.436a.69.69 0 01.474-.166.68.68 0 01.466.166c.126.105.223.25.294.436.075.186.128.401.158.647.03.24.045.5.045.775 0 .276-.015.537-.045.782-.03.246-.083.462-.158.647-.07.18-.168.326-.294.436z", "M7.082 9.445H8.17V10.5H7.082V9.445z"];

var arrayNumeric = ["M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm6.904 5c.256 0 .483.037.68.112a1.343 1.343 0 01.812.788c.072.184.108.385.108.604 0 .23-.05.441-.152.636a1.314 1.314 0 01-.456.492v.016l.08.04c.055.031.111.072.168.124.085.077.163.172.232.284a1.673 1.673 0 01.24.872c0 .25-.043.477-.128.68a1.518 1.518 0 01-.896.852 1.937 1.937 0 01-.68.116c-.427 0-.792-.101-1.096-.304a1.362 1.362 0 01-.584-.864c-.01-.053.01-.088.064-.104l.696-.16.033-.002c.03.002.051.022.063.058.059.16.155.296.288.408.133.112.312.168.536.168.256 0 .453-.076.592-.228a.827.827 0 00.208-.58c0-.277-.08-.495-.24-.652-.16-.157-.376-.236-.648-.236h-.232l-.035-.005c-.03-.01-.045-.035-.045-.075v-.632l.005-.035c.01-.03.035-.045.075-.045h.216l.138-.009a.734.734 0 00.438-.207c.144-.144.216-.336.216-.576a.745.745 0 00-.192-.532c-.128-.136-.307-.204-.536-.204-.203 0-.363.05-.48.152a.815.815 0 00-.248.408c-.016.048-.048.067-.096.056l-.68-.16-.034-.012c-.028-.016-.038-.044-.03-.084a1.347 1.347 0 01.516-.828c.136-.104.296-.185.48-.244A1.98 1.98 0 0110.904 5zm-6.152.088l.035.005c.03.01.045.035.045.075v5.28l-.005.035c-.01.03-.035.045-.075.045h-.736l-.035-.005c-.03-.01-.045-.035-.045-.075V6.16H3.92l-.832.584-.032.016C3.02 6.773 3 6.751 3 6.696V5.88l.006-.04a.157.157 0 01.05-.072l.872-.632.04-.027a.236.236 0 01.104-.021h.68zM7.344 5c.256 0 .483.04.68.12.197.08.364.188.5.324s.24.296.312.48c.072.184.108.383.108.596 0 .245-.045.47-.136.676-.09.205-.216.404-.376.596l-1.584 1.92v.016h2.016l.035.005c.03.01.045.035.045.075v.64l-.005.035c-.01.03-.035.045-.075.045H5.808l-.035-.005c-.03-.01-.045-.035-.045-.075v-.6l.004-.04a.132.132 0 01.036-.064l1.92-2.392.1-.133a1.95 1.95 0 00.156-.267.985.985 0 00.096-.432.736.736 0 00-.188-.512c-.125-.139-.303-.208-.532-.208-.219 0-.39.061-.512.184a.826.826 0 00-.224.496c-.01.053-.04.075-.088.064L5.792 6.4l-.034-.012c-.028-.016-.038-.044-.03-.084a1.425 1.425 0 01.94-1.192A1.88 1.88 0 017.344 5z"];

var arrayString = ["M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm1.61 5c.514 0 .962.212 1.343.637.382.425.573.997.573 1.716 0 .838-.258 1.588-.773 2.252-.514.663-1.327 1.2-2.437 1.609v-.465l.233-.095a3.09 3.09 0 001.274-1.017c.366-.505.55-1.03.55-1.577a.478.478 0 00-.057-.26c-.018-.037-.043-.056-.074-.056s-.08.025-.149.075c-.198.142-.446.214-.744.214-.36 0-.675-.145-.944-.433A1.453 1.453 0 014 6.572c0-.422.155-.79.465-1.102.31-.313.692-.47 1.144-.47zm4.474 0c.514 0 .963.212 1.344.637.381.425.572.997.572 1.716 0 .838-.257 1.588-.772 2.252-.515.663-1.327 1.2-2.437 1.609v-.465l.233-.095a3.09 3.09 0 001.274-1.017c.366-.505.549-1.03.549-1.577a.478.478 0 00-.056-.26c-.019-.037-.044-.056-.075-.056-.03 0-.08.025-.149.075-.198.142-.446.214-.744.214-.36 0-.674-.145-.944-.433a1.453 1.453 0 01-.405-1.028c0-.422.155-.79.466-1.102.31-.313.691-.47 1.144-.47z"];

var arrayTimestamp = ["M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm4 3a5 5 0 110 10A5 5 0 018 3zm0 1a4 4 0 100 8 4 4 0 000-8zm2.354 1.646a.5.5 0 01.057.638l-.057.07-2 2a.5.5 0 01-.638.057l-.07-.057-1-1a.5.5 0 01.638-.765l.07.057.646.647 1.646-1.647a.5.5 0 01.708 0z"];

var arrowBottomLeft = ["M14 3a1.003 1.003 0 00-1.71-.71L4 10.59V6c0-.55-.45-1-1-1s-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1H5.41l8.29-8.29c.19-.18.3-.43.3-.71z"];

var arrowBottomRight = ["M13 5c-.55 0-1 .45-1 1v4.59l-8.29-8.3a1.003 1.003 0 00-1.42 1.42l8.3 8.29H6c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"];

var arrowDown = ["M13 8c-.3 0-.5.1-.7.3L9 11.6V2c0-.5-.4-1-1-1s-1 .5-1 1v9.6L3.7 8.3C3.5 8.1 3.3 8 3 8c-.5 0-1 .5-1 1 0 .3.1.5.3.7l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1z"];

var arrowLeft = ["M13.99 6.99H4.41L7.7 3.7a1.003 1.003 0 00-1.42-1.42l-5 5a1.014 1.014 0 000 1.42l5 5a1.003 1.003 0 001.42-1.42L4.41 8.99H14c.55 0 1-.45 1-1s-.46-1-1.01-1z"];

var arrowRight = ["M14.7 7.29l-5-5a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l3.29 3.29H1.99c-.55 0-1 .45-1 1s.45 1 1 1h9.59l-3.29 3.29a1.003 1.003 0 001.42 1.42l5-5c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z"];

var arrowTopLeft = ["M13.71 12.29L5.41 4H10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var arrowTopRight = ["M13 2H6c-.55 0-1 .45-1 1s.45 1 1 1h4.59L2.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L12 5.41V10c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z"];

var arrowUp = ["M13.7 6.3l-5-5C8.5 1.1 8.3 1 8 1s-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 4.4V14c0 .6.4 1 1 1s1-.4 1-1V4.4l3.3 3.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7z"];

var arrowsHorizontal = ["M15.7 7.3l-4-4c-.2-.2-.4-.3-.7-.3-.6 0-1 .5-1 1 0 .3.1.5.3.7L12.6 7H3.4l2.3-2.3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7s.1.5.3.7l4 4c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L3.4 9h9.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z"];

var arrowsVertical = ["M12 10c-.3 0-.5.1-.7.3L9 12.6V3.4l2.3 2.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-4-4C8.5.1 8.3 0 8 0s-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 3.4v9.2l-2.3-2.3c-.2-.2-.4-.3-.7-.3-.5 0-1 .4-1 1 0 .3.1.5.3.7l4 4c.2.2.4.3.7.3s.5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1z"];

var asterisk = ["M14.54 11.18l.01-.02L9.8 8l4.75-3.17-.01-.02c.27-.17.46-.46.46-.81 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L9 6.13V1c0-.55-.45-1-1-1S7 .45 7 1v5.13L2.55 3.17l-.01.01A.969.969 0 002 3c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01L6.2 8l-4.75 3.17.01.02c-.27.17-.46.46-.46.81 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02L7 9.87V15c0 .55.45 1 1 1s1-.45 1-1V9.87l4.45 2.96.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1 0-.35-.19-.64-.46-.82z"];

var at = ["M5.816 8.371c0 1.515.603 2.274 1.814 2.274 1.273 0 1.971-.954 2.089-2.86l.12-2.331a5.298 5.298 0 00-1.337-.165c-.848 0-1.507.276-1.979.828-.472.554-.707 1.305-.707 2.254M16 7.133c0 .93-.149 1.78-.446 2.55-.297.77-.714 1.372-1.253 1.802a2.913 2.913 0 01-1.868.642c-.521 0-.975-.137-1.356-.41a1.989 1.989 0 01-.773-1.111h-.12c-.323.506-.723.887-1.198 1.14a3.35 3.35 0 01-1.605.38c-1.076 0-1.924-.34-2.541-1.023-.618-.682-.926-1.607-.926-2.77 0-1.341.41-2.428 1.229-3.264.818-.835 1.918-1.253 3.298-1.253.502 0 1.058.043 1.669.13.61.088 1.155.21 1.63.367l-.218 4.536v.234c0 1.04.344 1.562 1.031 1.562.521 0 .935-.332 1.241-.996.308-.664.463-1.508.463-2.537 0-1.112-.232-2.09-.695-2.931a4.762 4.762 0 00-1.97-1.947c-.851-.456-1.83-.682-2.934-.682-1.405 0-2.628.286-3.67.858a5.736 5.736 0 00-2.382 2.455c-.549 1.062-.822 2.296-.822 3.7 0 1.888.512 3.339 1.535 4.353 1.024 1.015 2.492 1.52 4.409 1.52 1.46 0 2.982-.29 4.567-.877v1.6c-1.386.56-2.896.839-4.527.839-2.446 0-4.35-.65-5.717-1.945C.685 12.757 0 10.947 0 8.625c0-1.698.37-3.209 1.11-4.532a7.556 7.556 0 013.076-3.038C5.497.35 6.982 0 8.64 0c1.433 0 2.71.294 3.827.878a6.294 6.294 0 012.607 2.504c.619 1.082.926 2.332.926 3.75"];

var automaticUpdates = ["M8 14c-3.31 0-6-2.69-6-6 0-1.77.78-3.36 2-4.46V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1h1.74A7.95 7.95 0 000 8c0 4.42 3.58 8 8 8 .55 0 1-.45 1-1s-.45-1-1-1zM8 2a5.9 5.9 0 012.95.81l1.47-1.47A7.893 7.893 0 008 0c-.55 0-1 .45-1 1s.45 1 1 1zm2.71 6.71l5-5a1.003 1.003 0 00-1.42-1.42L10 6.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42l2 2c.18.18.43.29.71.29s.53-.11.71-.29zM16 8c0-.55-.06-1.08-.16-1.6l-1.87 1.87A5.966 5.966 0 0112 12.45V11c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-1.74A7.95 7.95 0 0016 8z"];

var backlink = ["M14 10a1 1 0 110 2h-.585l2.292 2.293a1 1 0 01-1.32 1.497l-.094-.083L12 13.415V14a1 1 0 11-2 0l.003-3.075.012-.1.012-.059.033-.108.034-.081.052-.098.067-.096.08-.09a1.01 1.01 0 01.112-.097l.11-.071.143-.065.076-.024.091-.02.116-.014L14 10zM6.036 6.136l-3.45 3.45-.117.127a2 2 0 002.818 2.818l.127-.117 3.45-3.449a4 4 0 01-.885 3.704l-.15.16-1 1A4 4 0 011.02 8.33l.15-.16 1-1a3.998 3.998 0 013.865-1.035zm4.671-1.843a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094 5-5a1 1 0 011.414 0zm3.121-3.121a4 4 0 01.151 5.497l-.15.16-1 1a3.998 3.998 0 01-3.864 1.036l3.45-3.45.116-.128a2 2 0 00-2.818-2.818l-.127.117-3.45 3.45A4 4 0 017.02 2.33l.15-.16 1-1a4 4 0 015.657 0z"];

var badge = ["M13.36 4.59c-.15-1.13.5-2.01 1.1-2.87L13.43.53c-1.72.88-4.12.65-5.63-.53-1.51 1.18-3.91 1.41-5.63.52l-1.03 1.2c.61.86 1.25 1.74 1.1 2.87-.3 2.29-2.45 4.17-1.32 6.68.45 1.14 1.44 1.9 2.72 2.2 1.56.36 3.52.72 4.16 2.53.64-1.81 2.6-2.16 4.16-2.54 1.28-.3 2.27-1.06 2.72-2.2 1.12-2.5-1.03-4.38-1.32-6.67z"];

var banCircle = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 9H5c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"];

var bankAccount = ["M15.36 6.46l-.62-.14c-.31-1.12-.98-2.15-1.87-2.99l.4-1.77a.438.438 0 00-.49-.56c-.85.09-1.6.42-2.14.98-.84-.32-1.87-.51-2.85-.51-2.49 0-4.63 1.17-5.92 2.89-.18-.04-.36-.09-.53-.09-.76 0-1.34.61-1.34 1.4 0 .56.31 1.03.76 1.26-.05.33-.09.7-.09 1.07 0 1.68.71 3.17 1.83 4.34l-.27 1.59c-.09.56.35 1.07.89 1.07h.58c.45 0 .8-.33.89-.79l.04-.37c.94.42 2 .7 3.16.7 1.11 0 2.23-.23 3.16-.7l.05.37c.09.47.45.79.89.79h.58c.53 0 .98-.51.89-1.07l-.27-1.54c.62-.61 1.07-1.35 1.38-2.15l.8-.19c.4-.09.71-.47.71-.93V7.4c.09-.47-.22-.84-.62-.94zM12 8c-.6 0-1-.7-1-1.5S11.4 5 12 5s1 .7 1 1.5S12.6 8 12 8zM6.21 4.92c-.41.2-.91.04-1.12-.36-.21-.4-.04-.88.37-1.07 1.35-.65 2.73-.65 4.08 0 .41.2.58.68.37 1.07-.21.4-.71.56-1.12.36-.87-.43-1.71-.43-2.58 0z"];

var barcode = ["M0 14h2V2H0v12zm6 0h1V2H6v12zm2 0h1V2H8v12zm-5 0h2V2H3v12zM15 2v12h1V2h-1zm-5 12h1V2h-1v12zm2 0h2V2h-2v12z"];

var p = [];

var blockedPerson = ["M9.39 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.07-.01-.13-.02-.2.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.13-.39.27-.06.43-.36.5-.63.01-.03.03-.08.05-.12C8.18 7.8 6.94 6.04 6.94 4c0-.32.04-.62.09-.92-.17-.03-.35-.08-.51-.08-.65 0-1.37.2-1.88.59-.5.38-.87.92-1.05 1.51-.04.14-.07.27-.09.41-.09.48-.14 1.23-.14 1.74v.06c-.19.08-.36.27-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.12 15.5.03 16 .03 16h12.96s.15-.5-.22-1.36c-.37-.85-2.18-1.42-3.38-1.95zM11.97 0C9.75 0 7.94 1.79 7.94 4s1.8 4 4.03 4S16 6.21 16 4s-1.8-4-4.03-4zM9.96 4c0-1.1.9-2 2.01-2 .37 0 .72.11 1.02.28l-2.75 2.73c-.17-.3-.28-.64-.28-1.01zm2.01 2c-.37 0-.72-.11-1.02-.28l2.75-2.73c.18.3.28.64.28 1.01.01 1.1-.9 2-2.01 2z"];

var bold = ["M11.7 7c.2-.4.3-1 .3-1.5v-.4V5c0-.1 0-.2-.1-.3v-.1C11.4 3.1 10.1 2 8.5 2H4c-.5 0-1 .4-1 1v10c0 .5.4 1 1 1h5c2.2 0 4-1.8 4-4 0-1.2-.5-2.3-1.3-3zM6 5h2c.6 0 1 .4 1 1s-.4 1-1 1H6V5zm3 6H6V9h3c.6 0 1 .4 1 1s-.4 1-1 1z"];

var book = ["M2 1v14c0 .55.45 1 1 1h1V0H3c-.55 0-1 .45-1 1zm11-1h-1v7l-2-2-2 2V0H5v16h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var bookmark = ["M11.2.01h-.15C11.03.01 11.02 0 11 0H5c-.02 0-.03.01-.05.01H4.8c-.44 0-.8.37-.8.82v14.75c0 .45.25.56.57.24l2.87-2.94c.31-.32.82-.32 1.13 0l2.87 2.94c.31.32.57.21.57-.24V.83C12 .38 11.64.01 11.2.01z"];

var box = ["M6 10h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm9.93-4.37v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37zM9 2h3.32l1.2 3H9V2zM3.68 2H7v3H2.48l1.2-3zM14 14H2V7h12v7z"];

var briefcase = ["M15 3.98h-3v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v4h3v-1h2v1h6v-1h2v1h3v-4c0-.55-.45-1-1-1zm-5 0H6v-1h4v1zm3 7h-2v-1H5v1H3v-1H0v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4h-3v1z"];

var bringData = ["M14 14a1 1 0 010 2H2a1 1 0 010-2h12zM7.995 3.005c.55 0 1 .45 1 .999v5.584l1.29-1.288a1.002 1.002 0 011.42 1.419l-3 2.996a1.015 1.015 0 01-1.42 0l-3-2.997A1.002 1.002 0 015.705 8.3l1.29 1.29V4.013c0-.55.45-1.009 1-1.009zM14 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zM8 0a1 1 0 110 2 1 1 0 010-2zM5 0a1 1 0 110 2 1 1 0 010-2zM2 0a1 1 0 110 2 1 1 0 010-2z"];

var bug = ["M5 3a3 3 0 016 0 5.022 5.022 0 011.425 1.67L13 4.382V3a1 1 0 112 0v2a1 1 0 01-.553.894l-1.46.731c.008.124.013.249.013.375v1h2a1 1 0 110 2h-2a5 5 0 01-.21 1.439l1.581.633A1 1 0 0115 13v2a1 1 0 11-2 0v-1.323l-1.167-.467A4.99 4.99 0 018 15a4.99 4.99 0 01-3.833-1.79L3 13.677V15a1 1 0 11-2 0v-2a1 1 0 01.629-.928l1.581-.633A5 5 0 013 10H1a1 1 0 110-2h2V7c0-.126.005-.251.014-.375l-1.461-.73A1 1 0 011 5V3a1 1 0 012 0v1.382l.575.288A5.023 5.023 0 015 3zm0 6v1a3 3 0 106 0V7a3 3 0 00-6 0v2z"];

var buggy = ["M13.928.629A1 1 0 0012.89.006l-9 1a1 1 0 00-.747.48L.431 6.005A.5.5 0 000 6.5v3a.5.5 0 00.5.5h2.798c.341 0 .672.116.938.329l1.952 1.561A.5.5 0 006.5 12H10a.5.5 0 00.4-.2l.9-1.2a1.5 1.5 0 011.2-.6h3a.5.5 0 00.5-.5v-4a.5.5 0 00-.308-.462L13.928.628zM12.36 2.094l-.006-.016-3.166.352 1.121 3.083 2.052-3.419zm.467 1.166l-1.649 2.748 2.51-.594-.861-2.154zM9.603 6.496L8.166 2.543l-3.563.396L2.766 6H3.5a.5.5 0 01.367.16L6.218 8.7h1.914l1.452-2.177a.5.5 0 01.019-.027zM2.5 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm11 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"];

var build = ["M15.39 12.41L7.7 6l1.07-1.1c.34-.34-.12-.63.12-1.26.88-2.17 3.41-2.35 3.41-2.35s.36-.37.71-.72C9.74-.81 7.53.53 6.54 1.4L3.12 4.9l-.71.72c-.39.4-.39 1.05 0 1.45l-.7.72c-.39-.4-1.02-.4-1.41 0s-.39 1.05 0 1.45l1.41 1.45c.39.4 1.02.4 1.41 0s.39-1.05 0-1.45l.71-.72c.39.4 1.02.4 1.41 0l.8-.82 6.39 7.67c.82.82 2.14.82 2.96 0 .81-.82.81-2.15 0-2.96z"];

var calculator = ["M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM6 14H4v-2h2v2zm0-3H4V9h2v2zm0-3H4V6h2v2zm3 6H7v-2h2v2zm0-3H7V9h2v2zm0-3H7V6h2v2zm3 6h-2V9h2v5zm0-6h-2V6h2v2zm0-3H4V2h8v3z"];

var calendar = ["M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z"];

var camera = ["M15 3h-2.59L10.7 1.29A.956.956 0 0010 1H6c-.28 0-.53.11-.71.29L3.59 3H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2.56c1.1 1.22 2.67 2 4.44 2s3.34-.78 4.44-2H15c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM3 6H1V5h2v1zm5 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var caretDown = ["M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 00-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z"];

var caretLeft = ["M9.5 4c-.13 0-.24.05-.33.13l-4 3.5c-.1.09-.17.22-.17.37s.07.28.17.37l4 3.5a.495.495 0 00.83-.37v-7c0-.28-.22-.5-.5-.5z"];

var caretRight = ["M11 8c0-.15-.07-.28-.17-.37l-4-3.5A.495.495 0 006 4.5v7a.495.495 0 00.83.37l4-3.5c.1-.09.17-.22.17-.37z"];

var caretUp = ["M11.87 9.17s.01 0 0 0l-3.5-4C8.28 5.07 8.15 5 8 5s-.28.07-.37.17l-3.5 4a.495.495 0 00.37.83h7a.495.495 0 00.37-.83z"];

var cargoShip = ["M10 1h3a1 1 0 011 1v2h-4V1zM2.25 4a.25.25 0 00-.25.25V9H.883a.5.5 0 00-.429.757l1.072 1.787c.207.344.477.638.791.87A9.76 9.76 0 011 12.5a.5.5 0 000 1c2.067 0 3.414-.543 4.161-.917.55.373 1.505.917 2.839.917 1.32 0 2.27-.533 2.822-.905l.004.002c.196.105.48.24.856.374.75.268 1.857.529 3.318.529a.5.5 0 000-1c-.326 0-.63-.014-.916-.039.47-.328.848-.79 1.07-1.347l.572-1.428A.5.5 0 0015.26 9H4V4.25A.25.25 0 003.75 4h-1.5zm2.714 9.56a.5.5 0 01.527.033c.455.325 1.277.907 2.509.907s2.054-.582 2.51-.907a.5.5 0 01.579-.001l.006.004.036.023c.034.022.09.055.168.097.154.082.394.197.72.313.649.232 1.642.471 2.981.471a.5.5 0 010 1c-1.46 0-2.568-.261-3.318-.53a6.316 6.316 0 01-.856-.373l-.004-.002c-.552.372-1.502.905-2.822.905-1.334 0-2.289-.544-2.839-.917-.747.374-2.094.917-4.161.917a.5.5 0 010-1c2.129 0 3.384-.63 3.964-.94zM14 5h-4v3h3a1 1 0 001-1V5zM5 2a1 1 0 011-1h3v3H5V2zm4 3H5v2a1 1 0 001 1h3V5z"];

var cellTower = ["M8.97 6.76c-.01-.05-.04-.08-.06-.13-.02-.05-.03-.1-.05-.15.08-.14.14-.3.14-.48 0-.55-.45-1-1-1s-1 .45-1 1c0 .18.06.34.14.48-.03.05-.03.1-.05.15-.02.05-.05.08-.06.13l-2 8c-.13.54.19 1.08.73 1.21a.995.995 0 001.21-.73L7.53 13h.94l.56 2.24a1 1 0 001.94-.48l-2-8zM3.72 1.7C4.1 1.3 4.09.67 3.7.28S2.67-.09 2.28.3c-3.05 3.12-3.05 8.28 0 11.4a.996.996 0 101.43-1.39c-2.28-2.35-2.28-6.27.01-8.61zM11.6 3.2c-.44-.33-1.07-.24-1.4.2-.33.44-.24 1.07.2 1.4.43.32.53 1.96-.04 2.43-.42.35-.48.98-.13 1.41.35.42.98.48 1.41.13 1.59-1.33 1.39-4.5-.04-5.57z", "M13.72.3c-.39-.4-1.02-.4-1.41-.02s-.41 1.02-.03 1.42c2.29 2.34 2.29 6.26 0 8.6-.39.39-.38 1.03.02 1.41s1.03.38 1.41-.02c3.05-3.11 3.05-8.27.01-11.39zM5.4 7.23c-.57-.47-.47-2.11-.04-2.43.44-.33.53-.96.2-1.4s-.96-.53-1.4-.2c-1.44 1.07-1.63 4.24-.04 5.57.42.35 1.05.3 1.41-.13.35-.42.29-1.06-.13-1.41z"];

var changes = ["M8.29 7.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L13 7.59V1c0-.55-.45-1-1-1s-1 .45-1 1v6.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42zM14.5 13h-13c-.83 0-1.5.67-1.5 1.5S.67 16 1.5 16h13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM1 5c.28 0 .53-.11.71-.29L3 3.41V10c0 .55.45 1 1 1s1-.45 1-1V3.41L6.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3C4.53.11 4.28 0 4 0s-.53.11-.71.29l-3 3A1.003 1.003 0 001 5z"];

var chart = ["M0 15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9.4L0 11v4zm6-5.5V15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5l-1 1-3-1.5zM13 7l-1 1v7c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V7.88c-.26.07-.58.12-1 .12-1.96 0-2-1-2-1zm2-6h-3c-.55 0-1 .45-1 1s.45 1 1 1h.59L8.8 6.78 5.45 5.11v.01C5.31 5.05 5.16 5 5 5s-.31.05-.44.11V5.1l-4 2v.01C.23 7.28 0 7.61 0 8c0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L5 7.12 8.55 8.9v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L14 4.41V5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"];

var chat = ["M6 10c-1.1 0-2-.9-2-2V3H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1v2a1.003 1.003 0 001.71.71L5.41 13H10c.55 0 1-.45 1-1v-1.17l-.83-.83H6zm9-10H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var chevronBackward = ["M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L6 6.59V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L7.41 8z"];

var chevronDown = ["M12 5c-.28 0-.53.11-.71.29L8 8.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0012 5z"];

var chevronForward = ["M10 3c-.55 0-1 .45-1 1v2.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L7.59 8 4.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L9 9.41V12c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z"];

var chevronLeft = ["M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C5.11 7.47 5 7.72 5 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L7.41 8z"];

var chevronRight = ["M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var chevronUp = ["M12.71 9.29l-4-4C8.53 5.11 8.28 5 8 5s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 7.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var circle = ["M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"];

var circleArrowDown = ["M11 7c-.28 0-.53.11-.71.29L9 8.59V5c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 7zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"];

var circleArrowLeft = ["M11 7H7.41L8.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C4.11 7.47 4 7.72 4 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L7.41 9H11c.55 0 1-.45 1-1s-.45-1-1-1zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"];

var circleArrowRight = ["M8.71 4.29a1.003 1.003 0 00-1.42 1.42L8.59 7H5c-.55 0-1 .45-1 1s.45 1 1 1h3.59L7.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"];

var circleArrowUp = ["M8.71 4.29C8.53 4.11 8.28 4 8 4s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L7 7.41V11c0 .55.45 1 1 1s1-.45 1-1V7.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"];

var citation = ["M15.02 5c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 003.6 2.94C12.1 9.76 11.14 11 10.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42zm-11-3c-1.66 0-3 1.34-3 3a2.996 2.996 0 003.6 2.94C4.1 9.76 3.14 11 2.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42 0-1.66-1.35-3-3-3z"];

var clean = ["M12 8l-1.2 2.796-2.8 1.2 2.8 1.197L12 16l1.2-2.807L16 12l-2.8-1.204zM5 0L3.5 3.5 0 4.995 3.5 6.5 5 10l1.5-3.5L10 5 6.5 3.5z"];

var clip = ["M0 1a1 1 0 011-1h4a1 1 0 010 2H2v3a1 1 0 01-2 0V1zm1 15a1 1 0 01-1-1v-4a1 1 0 112 0v3h3a1 1 0 110 2H1zm14 0a1 1 0 001-1v-4a1 1 0 10-2 0v3h-3a1 1 0 100 2h4zm0-16a1 1 0 011 1v4a1 1 0 11-2 0V2h-3a1 1 0 110-2h4zM8 11a3 3 0 100-6 3 3 0 000 6z"];

var clipboard = ["M11 2c0-.55-.45-1-1-1h.22C9.88.4 9.24 0 8.5 0S7.12.4 6.78 1H7c-.55 0-1 .45-1 1v1h5V2zm2 0h-1v2H5V2H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"];

var cloud = ["M12 6c-.03 0-.07 0-.1.01A5 5 0 002 7c0 .11.01.22.02.33A3.51 3.51 0 000 10.5C0 12.43 1.57 14 3.5 14H12c2.21 0 4-1.79 4-4s-1.79-4-4-4z"];

var cloudDownload = ["M11 11c-.28 0-.53.11-.71.29L9 12.59V8c0-.55-.45-1-1-1s-1 .45-1 1v4.59L5.71 11.3A.965.965 0 005 11a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 11zm1-7c-.03 0-.07 0-.1.01A5 5 0 002 5c0 .11.01.22.02.33A3.51 3.51 0 000 8.5c0 1.41.84 2.61 2.03 3.17C2.2 10.17 3.46 9 5 9c.06 0 .13.02.19.02C5.07 8.7 5 8.36 5 8c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .36-.07.7-.19 1.02.06 0 .13-.02.19-.02 1.48 0 2.7 1.07 2.95 2.47A3.964 3.964 0 0016 8c0-2.21-1.79-4-4-4z"];

var cloudUpload = ["M8.71 7.29C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L7 10.41V15c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM12 4c-.03 0-.07 0-.1.01A5 5 0 002 5c0 .11.01.22.02.33a3.495 3.495 0 00.07 6.37c-.05-.23-.09-.46-.09-.7 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 014.24 0l3 3c.54.54.88 1.29.88 2.12 0 .16-.02.32-.05.47C15.17 10.78 16 9.5 16 8c0-2.21-1.79-4-4-4z"];

var code = ["M15.71 7.29l-3-3a1.003 1.003 0 00-1.42 1.42L13.59 8l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM5 5a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L2.41 8 4.7 5.71c.19-.18.3-.43.3-.71zm4-3c-.48 0-.87.35-.96.81l-2 10c-.01.06-.04.12-.04.19 0 .55.45 1 1 1 .48 0 .87-.35.96-.81l2-10c.01-.06.04-.12.04-.19 0-.55-.45-1-1-1z"];

var codeBlock = ["M15 3h-2V2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H7V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-8.29 8.29a1.003 1.003 0 01-1.42 1.42l-3-3C2.11 9.53 2 9.28 2 9s.11-.53.29-.71l3-3a1.003 1.003 0 011.42 1.42L4.41 9l2.3 2.29zm7-1.58l-3 3a1.003 1.003 0 01-1.42-1.42L11.59 9l-2.3-2.29a1.003 1.003 0 011.42-1.42l3 3c.18.18.29.43.29.71s-.11.53-.29.71z"];

var cog = ["M15.19 6.39h-1.85c-.11-.37-.27-.71-.45-1.04l1.36-1.36c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 00-1.13 0l-1.36 1.36c-.33-.17-.67-.33-1.04-.44V.79c0-.44-.36-.8-.8-.8h-1.6c-.44 0-.8.36-.8.8v1.86c-.39.12-.75.28-1.1.47l-1.3-1.3c-.3-.3-.79-.3-1.09 0L1.82 2.91c-.3.3-.3.79 0 1.09l1.3 1.3c-.2.34-.36.7-.48 1.09H.79c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.85c.11.37.27.71.45 1.04l-1.36 1.36c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.36-1.36c.33.18.67.33 1.04.44v1.86c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.86c.39-.12.75-.28 1.1-.47l1.3 1.3c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1.3-1.3c.19-.35.36-.71.48-1.1h1.85c.44 0 .8-.36.8-.8v-1.6a.816.816 0 00-.81-.79zm-7.2 4.6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"];

var collapseAll = ["M7.29 6.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L8 4.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4zm1.42 2.58C8.53 9.11 8.28 9 8 9s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 11.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4z"];

var colorFill = ["M3.093 7c.017-.05.036-.1.058-.15.106-.248.225-.397.263-.436L7 2.828 11.172 7H3.093zM6.5 13c1 0 2.5-1 3-1.5l3.086-3.086L14 7l-1.414-1.414-4.172-4.172L7 0 5.586 1.414 2 5c-.5.5-1 1.5-1 2.5s.5 2 1 2.5l2 2c.5.5 1.5 1 2.5 1zm7-4l1.125 1.667c.238.353.375.666.375 1 0 .666-.375 1.333-1.5 1.333s-1.5-.667-1.5-1.333c0-.334.137-.647.375-1L13.5 9zM0 15a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z"];

var columnLayout = ["M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 13H2V3h2v10zm3 0H5V3h2v10zm7 0H8V3h6v10z"];

var comment = ["M14 1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2v3a1.003 1.003 0 001.71.71L8.41 12H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3.5 8C2.67 8 2 7.33 2 6.5S2.67 5 3.5 5 5 5.67 5 6.5 4.33 8 3.5 8zm4 0C6.67 8 6 7.33 6 6.5S6.67 5 7.5 5 9 5.67 9 6.5 8.33 8 7.5 8zm4 0c-.83 0-1.5-.67-1.5-1.5S10.67 5 11.5 5s1.5.67 1.5 1.5S12.33 8 11.5 8z"];

var comparison = ["M7.99-.01c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1v-14c0-.55-.45-1-1-1zm-3 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm10 0h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm0 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm-10-3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"];

var compass = ["M12 8c0 .14-.03.27-.08.39l-3 6.99c-.15.37-.51.62-.92.62s-.77-.25-.92-.61l-3-6.99a1.006 1.006 0 010-.79l3-6.99C7.23.25 7.59 0 8 0s.77.25.92.61l3 6.99c.05.13.08.26.08.4zM8 3.54L6.09 8h3.82L8 3.54z"];

var compressed = ["M15.93 5.63v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37zM9 2h3.32l1.2 3H9V2zM3.68 2H7v3H2.48l1.2-3zM14 14H2V7h5v2.59l-1.29-1.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L9 9.59V7h5v7z"];

var confirm = ["M8.7 4.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 00-1.42-1.42l-4.29 4.3L8.7 4.29zm5.22 3.01c.03.23.07.45.07.69 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c.81 0 1.59.17 2.3.46l1.5-1.5A7.998 7.998 0 00-.01 7.99c0 4.42 3.58 8 8 8s8-3.58 8-8c0-.83-.13-1.64-.36-2.39l-1.71 1.7z"];

var console$1 = ["M15 15H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM14 5H2v8h12V5zM4 6c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 01-1.42-1.42L4.59 9l-1.3-1.29A1.003 1.003 0 014 6zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z"];

var contrast = ["M15.2 6.4h-1.44c-.13-.47-.32-.92-.56-1.34L14.26 4c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 00-1.13 0L10.94 2.8c-.42-.24-.86-.42-1.34-.56V.8c0-.44-.36-.8-.8-.8H7.2c-.44 0-.8.36-.8.8v1.44c-.5.14-.96.34-1.4.59l-1-1c-.3-.3-.79-.3-1.09 0L1.83 2.91c-.3.3-.3.79 0 1.09l1 1c-.25.44-.45.9-.59 1.4H.8c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.44c.13.47.32.92.56 1.34L1.74 12c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.06-1.06c.42.24.86.42 1.34.56v1.44c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.44c.5-.14.96-.33 1.4-.59l1 1c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1-1c.25-.43.45-.9.59-1.4h1.44c.44 0 .8-.36.8-.8V7.2a.818.818 0 00-.81-.8zM8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4v8z"];

var control = ["M13 8H8v5h5V8zm0-5H8v4h5V3zm2-3H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V2h12v12zM7 3H3v10h4V3z"];

var creditCard = ["M14.99 2.95h-14c-.55 0-1 .45-1 1v1h16v-1c0-.55-.45-1-1-1zm-15 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-6h-16v6zm5.5-2h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.23-.5.5-.5zm-3 0h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.23-.5.5-.5z"];

var cross = ["M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z"];

var crown = ["M2 6l3 2 3-4 3 4 3-2-1 6H3L2 6zm6-5a1 1 0 110 2 1 1 0 010-2zM1 3a1 1 0 110 2 1 1 0 010-2zm14 0a1 1 0 110 2 1 1 0 010-2zM3 13h10v2H3v-2z"];

var cube = ["M14.194 3.54L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l5.698 3.255zm.75.71a1 1 0 01.056.33v6.84a1 1 0 01-.504.868L8.5 15.714V8.277l6.444-4.027zm-13.888 0L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33z"];

var cubeAdd = ["M14 2h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V4h-1a1 1 0 010-2h1V1a1 1 0 012 0v1zM9.136.65a3.001 3.001 0 00.992 5.222c.018.058.038.115.059.172L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l.64.365zM15 7.235v4.184a1 1 0 01-.504.868L8.5 15.714V8.277l2.187-1.367A2.994 2.994 0 0013 8c.768 0 1.47-.289 2-.764zM1.056 4.25L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33z"];

var cubeRemove = ["M10.365 5.933L8 7.41 1.806 3.54 7.504.283a1 1 0 01.992 0l.64.365a3.001 3.001 0 001.228 5.283zM15 6v5.42a1 1 0 01-.504.868L8.5 15.714V8.277L12.143 6H15zM1.056 4.25L7.5 8.277v7.437l-5.996-3.426A1 1 0 011 11.42V4.58a1 1 0 01.056-.33zM11 2h4a1 1 0 010 2h-4a1 1 0 010-2z"];

var curvedRangeChart = ["M15 12H3.12l1.81-1.39c1.73 1.01 5.53-.03 9.08-2.61l-1.22-1.5C10.3 8.3 7.86 9.37 6.65 9.29L14.3 3.4l-.6-.8-7.83 6.03c-.01-1.07 1.8-3.19 4.47-5.13L9.12 2C5.38 4.7 3.34 8.1 4.25 9.87L2 11.6V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var cut = ["M13 2s.71-1.29 0-2L8.66 5.07l1.05 1.32L13 2zm.07 8c-.42 0-.82.09-1.18.26L3.31 0c-.69.71 0 2 0 2l3.68 5.02-2.77 3.24A2.996 2.996 0 000 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.46-.11-.89-.29-1.27L8.1 8.54l2.33 3.19c-.18.39-.29.82-.29 1.27 0 1.66 1.31 3 2.93 3S16 14.66 16 13s-1.31-3-2.93-3zM3 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10.07 0c-.54 0-.98-.45-.98-1s.44-1 .98-1 .98.45.98 1-.44 1-.98 1z"];

var cycle = ["M13 9a3 3 0 110 6 3 3 0 010-6zM3 9a3 3 0 110 6 3 3 0 010-6zm6.169-5.27l.087.09 1.51 1.746 1.589.549a1 1 0 01.65 1.16l-.032.112a1 1 0 01-1.159.65l-.112-.032-1.843-.636a1 1 0 01-.337-.198l-.092-.093-.959-1.109L7.041 7.5l1.691 1.819a1 1 0 01.26.556L9 10v3a1 1 0 01-1.993.117L7 13l-.001-2.608-2.056-2.211a1 1 0 01-.081-1.264l.082-.1 2.825-3.026a1 1 0 011.4-.061zM13 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"];

var dashboard = ["M5 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM4 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-2 6c0 1.1.9 2 2 2s2-.9 2-2c0-.53-2-5-2-5s-2 4.47-2 5zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm4-9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"];

var dataConnection = ["M1 9.52c.889.641 2.308 1.133 4.003 1.354L5 11a5.994 5.994 0 002.664 4.988c-.217.008-.44.012-.664.012-3.215 0-5.846-.85-5.993-1.906L1 14V9.52zM11 6c2.762 0 5 2.238 5 5s-2.238 5-5 5-5-2.238-5-5 2.238-5 5-5zm1 1l-4 5h2.5l-.5 3 4-5h-2.5l.5-3zm1-3.48v1.822a6.002 6.002 0 00-7.9 4.556l-.248-.03c-2.168-.28-3.733-.966-3.845-1.774L1 8V3.52C2.22 4.4 4.44 5 7 5s4.78-.6 6-1.48zM7 0c3.31 0 6 .9 6 2s-2.69 2-6 2c-3.32 0-6-.9-6-2s2.68-2 6-2z"];

var dataLineage = ["M1.067 0C.477 0 0 .478 0 1.067V3.2c0 .59.478 1.067 1.067 1.067h2.24a5.342 5.342 0 002.9 3.734 5.337 5.337 0 00-2.9 3.733h-2.24C.477 11.733 0 12.21 0 12.8v2.133C0 15.523.478 16 1.067 16H6.4c.59 0 1.067-.478 1.067-1.067V12.8c0-.59-.478-1.067-1.067-1.067H4.401a4.27 4.27 0 013.92-3.194l.212-.006V9.6c0 .59.478 1.067 1.067 1.067h5.333c.59 0 1.067-.478 1.067-1.067V6.4c0-.59-.478-1.067-1.067-1.067H9.6c-.59 0-1.067.478-1.067 1.067v1.067a4.268 4.268 0 01-4.132-3.2H6.4c.59 0 1.067-.478 1.067-1.067V1.067C7.467.477 6.989 0 6.4 0H1.067z"];

var database = ["M8 4c3.31 0 6-.9 6-2s-2.69-2-6-2C4.68 0 2 .9 2 2s2.68 2 6 2zm-6-.48V8c0 1.1 2.69 2 6 2s6-.9 6-2V3.52C12.78 4.4 10.56 5 8 5s-4.78-.6-6-1.48zm0 6V14c0 1.1 2.69 2 6 2s6-.9 6-2V9.52C12.78 10.4 10.56 11 8 11s-4.78-.6-6-1.48z"];

var _delete = ["M11.99 4.99a1.003 1.003 0 00-1.71-.71l-2.29 2.3L5.7 4.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2.29 2.29-2.29 2.29A1.003 1.003 0 005.7 11.7l2.29-2.29 2.29 2.29a1.003 1.003 0 001.42-1.42L9.41 7.99 11.7 5.7c.18-.18.29-.43.29-.71zm-4-5c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z"];

var delta = ["M8 0L0 16h16L8 0zM7 5l5 10H2L7 5z"];

var deriveColumn = ["M6.08 6.67h-.84c.24-.92.56-1.6.96-2.03.24-.27.48-.4.71-.4.05 0 .08.01.11.04s.04.06.04.1c0 .04-.03.11-.1.21-.06.1-.1.2-.1.29 0 .13.05.24.15.33.1.09.23.14.39.14.17 0 .31-.06.42-.17A.58.58 0 008 4.73c0-.22-.09-.39-.26-.53-.17-.13-.44-.2-.81-.2-.59 0-1.12.16-1.59.48-.48.32-.93.85-1.36 1.59-.15.26-.29.42-.42.49s-.35.11-.64.1l-.19.65h.81l-1.19 4.37c-.2.72-.33 1.16-.4 1.33-.1.24-.26.45-.46.62-.08.07-.18.1-.3.1-.03 0-.06-.01-.08-.03l-.03-.04c0-.02.03-.06.09-.11.06-.06.09-.14.09-.26 0-.13-.05-.23-.14-.32a.6.6 0 00-.4-.13c-.21 0-.38.05-.51.16s-.21.25-.21.4c0 .16.08.3.23.42.16.12.4.18.74.18.53 0 .99-.13 1.4-.39.41-.26.76-.65 1.07-1.19.3-.54.62-1.4.94-2.59l.68-2.53h.82l.2-.63zM15 0H8c-.55 0-1 .45-1 1v2h2V2h5v12H9v-1H7v2c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM8.3 9.94c.18.52.33.89.46 1.13.13.24.28.4.44.51.17.1.37.16.62.16.24 0 .49-.08.74-.25.33-.21.66-.58 1.01-1.09l-.21-.11c-.23.31-.41.5-.52.57a.44.44 0 01-.26.07c-.12 0-.24-.07-.36-.21-.2-.24-.46-.91-.8-2 .3-.49.55-.81.75-.96.15-.11.3-.16.47-.16.06 0 .17.02.34.06.16.04.31.06.43.06.17 0 .31-.06.43-.17.1-.11.16-.25.16-.43 0-.19-.06-.33-.17-.44-.12-.11-.28-.16-.49-.16-.19 0-.37.04-.54.13-.17.09-.39.27-.65.56-.2.21-.48.58-.87 1.11-.15-.66-.41-1.26-.78-1.81l-2.05.33-.04.21c.15-.03.28-.04.39-.04.2 0 .37.08.5.25.21.26.5 1.03.88 2.33-.29.37-.49.61-.6.72-.18.18-.33.3-.44.36-.09.04-.19.07-.3.07-.09 0-.23-.04-.42-.13a.866.866 0 00-.36-.09c-.2 0-.36.06-.49.18a.59.59 0 00-.19.46c0 .17.06.32.18.43.12.11.28.16.48.16.2 0 .38-.04.55-.11.17-.08.39-.24.65-.49.24-.27.6-.66 1.06-1.21z"];

var desktop = ["M15 0H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h4.75l-.5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-1.25l-.5-2H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 10H2V2h12v8z"];

var diagnosis = ["M3.2 1a1 1 0 01.117 1.993L3.2 3H3v3a2 2 0 001.85 1.995L5 8a2 2 0 001.995-1.85L7 6V3h-.2a1 1 0 01-.993-.883L5.8 2a1 1 0 01.883-.993L6.8 1H8a1 1 0 01.993.883L9 2v4a4.002 4.002 0 01-3.007 3.876v.007L6 10a3 3 0 005.995.176L12 10V7.792a2.5 2.5 0 112 0V10a5 5 0 01-10 0c0-.042.003-.084.008-.125A4 4 0 011.005 6.2L1 6V2a1 1 0 01.883-.993L2 1h1.2z"];

var diagramTree = ["M15 8v3h-2V9H9v2H7V9H3v2H1V8a1 1 0 011-1h5V5h2v2h5a1 1 0 011 1zM1 12h2a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1zm12 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1zm-6 0h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zM7 0h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V1a1 1 0 011-1z"];

var directionLeft = ["M16 1.99l-16 6 16 6-4-6z"];

var directionRight = ["M16 7.99l-16-6 4 6-4 6z"];

var disable = ["M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-6 8c0-3.31 2.69-6 6-6 1.3 0 2.49.42 3.47 1.12l-8.35 8.35c-.7-.98-1.12-2.17-1.12-3.47zm6 6c-1.3 0-2.49-.42-3.47-1.12l8.35-8.35c.7.98 1.12 2.17 1.12 3.47 0 3.32-2.68 6-6 6z"];

var divide = ["M9 5a1 1 0 11-2 0 1 1 0 012 0zM5 7c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H5zm3 5a1 1 0 100-2 1 1 0 000 2z"];

var document$1 = ["M9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0zm3 14H4V2h4v4h4v8z"];

var documentOpen = ["M6 12c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1.59L1.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L6 10.41V12zm4-12H4c-.55 0-1 .45-1 1v4h2V2h4v4h4v8H5.24l-1.8 1.8c.16.12.35.2.56.2h10c.55 0 1-.45 1-1V5l-5-5z"];

var documentShare = ["M10 14H2V2h4v4h1c0-.83.36-1.55.91-2.09l-.03-.03.9-.9C8.3 2.45 8 1.77 8 1L7 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V8.22c-.53.48-1.23.78-2 .78v5zm5-14h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 001.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z"];

var dollar = ["M12.83 9.51c-.1-.3-.25-.58-.45-.84s-.45-.49-.75-.7c-.3-.2-.65-.36-1.05-.48-.16-.04-.43-.11-.8-.2-.35-.09-.73-.18-1.12-.28-.39-.1-.74-.19-1.06-.27-.31-.08-.49-.12-.54-.13-.43-.12-.78-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72.14-.19.32-.34.54-.46.22-.11.46-.19.72-.24.26-.05.52-.08.77-.08.74 0 1.35.15 1.83.46.48.3.75.83.81 1.56h2.14c0-.6-.13-1.13-.38-1.58-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7-.24-.06-.49-.1-.75-.14V1c0-.55-.45-1-1-1s-1 .45-1 1v1.08c-.23.03-.46.07-.68.13-.54.13-1.02.34-1.44.61-.42.28-.76.63-1.02 1.05-.26.43-.39.93-.39 1.5 0 .3.04.59.13.88.09.29.23.56.44.82.21.26.48.49.83.7.35.21.79.38 1.31.51.85.21 1.56.38 2.14.52.58.13 1.08.28 1.52.42.25.09.48.23.69.44.21.21.32.53.32.97 0 .21-.05.42-.14.63-.09.21-.24.39-.45.55-.21.16-.47.29-.81.39-.33.1-.73.15-1.2.15-.43 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.16-.31-.24-.68-.24-1.12H3c.01.71.15 1.32.43 1.84.27.52.64.94 1.1 1.27.46.33.99.58 1.61.74.27.07.56.12.85.16V15c0 .55.45 1 1 1s1-.45 1-1v-1.05c.3-.03.61-.08.9-.15.58-.13 1.1-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.31-.05-.61-.15-.91z"];

var dot = ["M8 5a3 3 0 100 6 3 3 0 100-6z"];

var doubleCaretHorizontal = ["M13.71 7.29l-3-3A1.003 1.003 0 009 5v6a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM6 4c-.28 0-.53.11-.71.29l-3 3C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l3 3A1.003 1.003 0 007 11V5c0-.55-.45-1-1-1z"];

var doubleCaretVertical = ["M5 7h6a1.003 1.003 0 00.71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 005 7zm6 2H5a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 9z"];

var doubleChevronDown = ["M7.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4zM12 8c-.28 0-.53.11-.71.29L8 11.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0012 8z"];

var doubleChevronLeft = ["M4.41 8L7.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L4.41 8zm5 0l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C7.11 7.47 7 7.72 7 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L9.41 8z"];

var doubleChevronRight = ["M9 8c0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4C8.89 8.53 9 8.28 9 8zm4.71-.71l-4-4a1.003 1.003 0 00-1.42 1.42L11.59 8 8.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var doubleChevronUp = ["M4 8c.28 0 .53-.11.71-.29L8 4.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-4 4A1.003 1.003 0 004 8zm4.71-.71C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4z"];

var doughnutChart = ["M11.86 7h4.05C15.45 3.39 12.61.52 9 .07v4.07A4 4 0 0111.86 7zM12 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4V0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8h-4z"];

var download = ["M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM11.7 9.7l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-3-3A1.003 1.003 0 015.7 8.28l1.29 1.29V3.99c0-.55.45-1 1-1s1 .45 1 1v5.59l1.29-1.29a1.003 1.003 0 011.71.71c0 .27-.11.52-.29.7z"];

var dragHandleHorizontal = ["M2 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"];

var dragHandleVertical = ["M6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-6c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"];

var draw = ["M14.9 11c-.3 0-.5.1-.7.3l-3 3c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1zm-1-1v-.2l-1-5c-.1-.3-.3-.6-.6-.7l-11-4-.3.3 5.8 5.8c.2-.1.4-.2.6-.2.8 0 1.5.7 1.5 1.5S8.3 9 7.4 9s-1.5-.7-1.5-1.5c0-.2.1-.4.2-.6L.3 1.1l-.3.3 4 11c.1.3.4.6.7.6l5 1h.2c.3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7z"];

var drawerLeft = ["M7 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h6zM6 2H2v12h4V2zm2 5h4.59L11.3 5.71A.965.965 0 0111 5a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42L12.59 9H8V7z"];

var drawerLeftFilled = ["M1 0h6a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm7 7h4.59L11.3 5.71A.965.965 0 0111 5a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42L12.59 9H8V7z"];

var drawerRight = ["M15 0a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 01-1-1V1a1 1 0 011-1h6zm-1 2h-4v12h4V2zM8 7H3.41L4.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 9H8V7z"];

var drawerRightFilled = ["M9 0h6a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 01-1-1V1a1 1 0 011-1zM8 7H3.41L4.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 9H8V7z"];

var driveTime = ["M15.12 4.76h-1.05l-.76-2.12c-.19-.53-.76-1.08-1.27-1.24 0 0-1.32-.4-4.04-.4-2.72 0-4.04.4-4.04.4-.5.16-1.07.71-1.26 1.24l-.77 2.12H.88c-.48 0-.88.42-.88.94s.4.94.88.94h.38L1 7c-.03.69 0 1.44 0 2v5c0 .66.38 1 1 1s1-.34 1-1v-1h10v1c0 .66.38 1 1 1s1-.34 1-1V9c0-.56-.01-1.37 0-2l-.26-.37h.38c.48 0 .88-.42.88-.93 0-.52-.4-.94-.88-.94zM5 10H3V8h2v2zm8 0h-2V8h2v2zm0-4H3c-.18 0-.06-.82 0-1l.73-1.63C3.79 3.19 3.82 3 4 3h8c.18 0 .21.19.27.37L13 5c.06.18.18 1 0 1z"];

var duplicate = ["M15 0H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V6h8v8z"];

var edit = ["M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z"];

var eject = ["M4 9h8a1.003 1.003 0 00.71-1.71l-4-4C8.53 3.11 8.28 3 8 3s-.53.11-.71.29l-4 4A1.003 1.003 0 004 9zm8 1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z"];

var emoji = ["M8 0a8 8 0 110 16A8 8 0 018 0zm0 1a7 7 0 100 14A7 7 0 008 1zM4 8c.228 2.262 2 4 4 4 1.938 0 3.77-1.738 3.984-3.8L12 8h1c-.128 2.888-2.317 5-5 5a5 5 0 01-4.995-4.783L3 8h1zm2-3a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"];

var endorsed = ["M15.86 7.5l-.81-1.42V4.5c0-.36-.19-.68-.49-.87l-1.37-.8-.81-1.41c-.19-.31-.51-.49-.86-.49H9.89L8.5.14a.948.948 0 00-1 0l-1.39.8H4.52a1 1 0 00-.86.49l-.8 1.37-1.44.83c-.3.19-.49.51-.49.87v1.65l-.8 1.37c-.08.15-.13.32-.13.49s.05.34.14.49l.8 1.37v1.65c0 .36.19.68.49.87l1.42.81.8 1.37c.19.31.51.49.86.49H6.1l1.39.8c.15.09.32.14.48.14s.34-.05.49-.14l1.39-.8h1.63a1 1 0 00.86-.49l.81-1.41 1.37-.8c.3-.19.49-.51.49-.87V9.93l.81-1.42a.89.89 0 00.04-1.01zm-4.12-.82l-4.01 4.01c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-2-2c-.18-.19-.3-.44-.3-.71a1.003 1.003 0 011.71-.71l1.3 1.3 3.3-3.3a1.003 1.003 0 011.71.71.95.95 0 01-.29.7z"];

var envelope = ["M0 3.06v9.88L4.94 8 0 3.06zM14.94 2H1.06L8 8.94 14.94 2zm-6.41 8.53c-.14.14-.32.22-.53.22s-.39-.08-.53-.22L6 9.06 1.06 14h13.88L10 9.06l-1.47 1.47zM11.06 8L16 12.94V3.06L11.06 8z"];

var equals = ["M3 5h10a1 1 0 010 2H3a1 1 0 110-2zm0 4h10a1 1 0 010 2H3a1 1 0 010-2z"];

var eraser = ["M8.06 13.91l7.63-7.44c.41-.4.41-1.05 0-1.45L10.86.3c-.41-.4-1.08-.4-1.49 0L.31 9.13c-.41.4-.41 1.05 0 1.45l5.58 5.44h8.12v-.01c.55 0 1-.45 1-1s-.45-1-1-1H7.96l.1-.1zm-2.17.06L1.67 9.85l4.22-4.11 4.22 4.11-4.22 4.12z"];

var error = ["M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-3h-2v-7h2v7z"];

var euro = ["M6.52 3.18c.51-.27 1.12-.4 1.83-.4.48 0 .91.06 1.27.18.37.12.68.29.96.51.18.14.3.33.44.51l1.53-1.53c-.12-.11-.23-.22-.36-.32a5.61 5.61 0 00-1.74-.83c-.66-.2-1.36-.3-2.1-.3-.99 0-1.88.18-2.66.53-.79.35-1.45.82-2 1.41-.55.58-.96 1.27-1.26 2.06H2c-.55 0-1 .45-1 1s.45 1 1 1h.04c-.01.17-.04.33-.04.5 0 .17.03.33.04.5H2c-.55 0-1 .45-1 1s.45 1 1 1h.43c0 .01 0 .02.01.02a6.2 6.2 0 001.25 2.07 5.77 5.77 0 002 1.4c.78.34 1.67.51 2.66.51.81 0 1.54-.12 2.21-.36.67-.24 1.25-.59 1.75-1.03l.03-.03-1.55-1.33c-.01.01-.02.03-.03.04-.29.3-.63.53-1.02.69-.4.17-.85.25-1.37.25-.71 0-1.32-.13-1.83-.4s-.93-.62-1.25-1.07c-.19-.24-.34-.49-.46-.76H9c.55 0 1-.45 1-1s-.45-1-1-1H4.35c-.01-.17-.03-.33-.03-.5 0-.17.02-.34.03-.5H10c.55 0 1-.45 1-1s-.45-1-1-1H4.83c.13-.27.27-.52.44-.76.32-.44.74-.8 1.25-1.06zM14 8.98v0z"];

var exchange = ["M1.99 5.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm4.15 1.86a.495.495 0 10.7-.7L5.7 5.99h5.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H5.7l1.15-1.15a.495.495 0 10-.7-.7l-2 2c-.1.09-.16.21-.16.35s.06.26.15.35l2 2.01zm7.85-1.86c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zM9.85 8.14a.533.533 0 00-.36-.15.495.495 0 00-.35.85l1.15 1.15h-5.8c-.28 0-.5.22-.5.5s.22.5.5.5h5.79l-1.15 1.15a.495.495 0 10.7.7l2-2c.09-.09.15-.22.15-.35s-.06-.26-.15-.35l-1.98-2z"];

var excludeRow = ["M0 10a1.003 1.003 0 001.71.71L3 9.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 00.29 6.71L1.59 8 .29 9.29C.11 9.47 0 9.72 0 10zm1-7h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 10H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-1-7H9c-1.1 0-2 .9-2 2s.9 2 2 2h5c1.1 0 2-.9 2-2s-.9-2-2-2z"];

var expandAll = ["M4 7c.28 0 .53-.11.71-.29L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-4 4A1.003 1.003 0 004 7zm8 2c-.28 0-.53.11-.71.29L8 12.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0012 9z"];

var _export = ["M4 6c.28 0 .53-.11.71-.29L7 3.41V11c0 .55.45 1 1 1s1-.45 1-1V3.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4C8.53.11 8.28 0 8 0s-.53.11-.71.29l-4 4A1.003 1.003 0 004 6zm11 5c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"];

var eyeOff = ["M16 7.97v-.02-.01-.02-.02a.672.672 0 00-.17-.36c-.49-.63-1.07-1.2-1.65-1.72l-3.16 2.26a2.978 2.978 0 01-2.98 2.9c-.31 0-.6-.06-.88-.15L5.09 12.3c.44.19.9.36 1.37.47.97.23 1.94.24 2.92.05.88-.17 1.74-.54 2.53-.98 1.25-.7 2.39-1.67 3.38-2.75.18-.2.37-.41.53-.62.09-.1.15-.22.17-.36v-.02-.02-.01-.02-.03c.01-.02.01-.03.01-.04zm-.43-4.17c.25-.18.43-.46.43-.8 0-.55-.45-1-1-1-.22 0-.41.08-.57.2l-.01-.01-2.67 1.91c-.69-.38-1.41-.69-2.17-.87a6.8 6.8 0 00-2.91-.05c-.88.18-1.74.54-2.53.99-1.25.7-2.39 1.67-3.38 2.75-.18.2-.37.41-.53.62-.23.29-.23.63-.01.92.51.66 1.11 1.25 1.73 1.79.18.16.38.29.56.44l-2.09 1.5.01.01c-.25.18-.43.46-.43.8 0 .55.45 1 1 1 .22 0 .41-.08.57-.2l.01.01 14-10-.01-.01zm-10.41 5a3.03 3.03 0 01-.11-.8 2.99 2.99 0 012.99-2.98c.62 0 1.19.21 1.66.53L5.16 8.8z"];

var eyeOn = ["M10.29 6.7c.18.18.43.29.71.29s.53-.11.71-.29l4-4c.17-.18.29-.43.29-.7a1.003 1.003 0 00-1.71-.71L11 4.58 9.71 3.29A.997.997 0 009 3c-.55 0-1 .44-1 1a1 1 0 00.3.7l1.99 2zM16 7.96v-.02-.01-.02-.02a.64.64 0 00-.17-.36c-.3-.4-.65-.76-1-1.12l-1.7 1.7c-.55.55-1.3.88-2.13.88-.06 0-.11-.01-.17-.02C10.42 10.15 9.32 11 8.01 11A3.005 3.005 0 016.4 5.46c-.24-.43-.39-.93-.39-1.46 0-.26.04-.5.1-.74-.7.2-1.37.5-2.01.86-1.26.7-2.4 1.68-3.4 2.77-.18.21-.36.41-.53.63-.22.29-.22.64 0 .93.51.67 1.12 1.27 1.73 1.81 1.33 1.17 2.85 2.15 4.53 2.55.97.23 1.95.24 2.92.05.89-.18 1.74-.54 2.54-.99 1.25-.71 2.4-1.69 3.39-2.78.18-.2.37-.41.54-.63.09-.1.15-.23.17-.37v-.02-.02-.01-.02-.03c.01-.01.01-.02.01-.03zM8.01 9c.48 0 .87-.35.96-.81a.55.55 0 01-.07-.09l-.02.01L7.8 7.03c-.45.1-.79.48-.79.96 0 .56.45 1.01 1 1.01z"];

var eyeOpen = ["M8.002 7.003a1.003 1.003 0 000 2.005 1.003 1.003 0 000-2.005zm7.988.972v-.02-.01-.02-.02a.675.675 0 00-.17-.36c-.509-.673-1.118-1.264-1.737-1.806-1.328-1.173-2.846-2.155-4.523-2.546a6.702 6.702 0 00-2.925-.06c-.889.18-1.738.541-2.546.992C2.84 4.837 1.692 5.81.694 6.902c-.18.211-.36.411-.53.632a.742.742 0 000 .932c.51.672 1.119 1.264 1.738 1.805 1.328 1.173 2.846 2.156 4.523 2.547.968.23 1.947.24 2.925.04.889-.18 1.738-.542 2.546-.993 1.248-.712 2.397-1.684 3.395-2.777.18-.2.37-.411.54-.632.09-.1.149-.23.169-.36v-.02-.02-.01-.02-.03c0-.01-.01-.01-.01-.02zm-7.988 3.038a2.998 2.998 0 01-2.995-3.008 2.998 2.998 0 012.995-3.008 2.998 2.998 0 012.996 3.008 2.998 2.998 0 01-2.996 3.008z"];

var fastBackward = ["M14 3c-.24 0-.44.09-.62.23l-.01-.01L9 6.72V4c0-.55-.45-1-1-1-.24 0-.44.09-.62.23v-.01l-5 4 .01.01C2.16 7.41 2 7.68 2 8s.16.59.38.77v.01l5 4 .01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V9.28l4.38 3.5.01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var fastForward = ["M15 8c0-.32-.16-.59-.38-.77l.01-.01-5-4-.01.01A.987.987 0 009 3c-.55 0-1 .45-1 1v2.72l-4.38-3.5v.01A.987.987 0 003 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01L8 9.28V12c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01 5-4-.01-.01c.22-.18.38-.45.38-.77z"];

var feed = ["M1.99 11.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm1-4c-.55 0-1 .45-1 1s.45 1 1 1c1.66 0 3 1.34 3 3 0 .55.45 1 1 1s1-.45 1-1c0-2.76-2.24-5-5-5zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7 3.13 7 7 0 .55.45 1 1 1s1-.45 1-1a9 9 0 00-9-9zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c6.08 0 11 4.92 11 11 0 .55.45 1 1 1s1-.45 1-1c0-7.18-5.82-13-13-13z"];

var feedSubscribed = ["M3 2c1.06 0 2.08.16 3.06.45.13-.71.52-1.32 1.05-1.76C5.82.25 4.44 0 3 0c-.55 0-1 .45-1 1s.45 1 1 1zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8.32-6.33a.99.99 0 001.4 0l3.98-3.98c.19-.18.3-.42.3-.7 0-.55-.45-.99-1-.99-.28 0-.52.11-.7.29l-3.28 3.28-1.29-1.29a.99.99 0 00-.7-.29 1 1 0 00-1 .99c0 .27.11.52.29.7l2 1.99zm3.73.53l-.93.93-.02-.02c-.17.17-.35.33-.56.45C13.47 9.16 14 11.02 14 13c0 .55.45 1 1 1s1-.45 1-1c0-2.5-.73-4.82-1.95-6.8zM3 8c-.55 0-1 .45-1 1s.45 1 1 1c1.66 0 3 1.34 3 3 0 .55.45 1 1 1s1-.45 1-1c0-2.76-2.24-5-5-5zm5.91-.91l-.03.03-2-2 .03-.03c-.11-.11-.23-.2-.33-.33A8.9 8.9 0 003 4c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7 3.13 7 7 0 .55.45 1 1 1s1-.45 1-1c0-1.87-.57-3.61-1.55-5.06-.61-.11-1.13-.42-1.54-.85z"];

var film = ["M15 1h-5v2H6V1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h5v-2h4v2h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 13H2v-2h2v2zm0-3H2V8h2v2zm0-3H2V5h2v2zm0-3H2V2h2v2zm6 6H6V5h4v5zm4 3h-2v-2h2v2zm0-3h-2V8h2v2zm0-3h-2V5h2v2zm0-3h-2V2h2v2z"];

var filter = ["M13.99.99h-12a1.003 1.003 0 00-.71 1.71l4.71 4.71V14a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V7.41L14.7 2.7a1.003 1.003 0 00-.71-1.71z"];

var filterKeep = ["M15 10c-.28 0-.53.11-.71.29L12 12.59l-1.29-1.29A.965.965 0 0010 11a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0015 10zm-3-8c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L4 6.41V12a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7z"];

var filterList = ["M9 8c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1zm3-6c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L4 6.41V12a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7zm3 8h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 3h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z"];

var filterOpen = ["M15.707 10.293a1 1 0 010 1.414l-3 3c-.63.63-1.707.184-1.707-.707V8c0-.89 1.077-1.337 1.707-.707l3 3zM12 2c0 .28-.11.53-.29.7L8 6.41V10c0 .28-.11.53-.29.71l-2 2A1.003 1.003 0 014 12V6.41L.29 2.71A1.003 1.003 0 011 1h10c.55 0 1 .45 1 1z"];

var filterRemove = ["M12 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L4 6.41V12a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7zm2.41 10l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L13 10.59 11.71 9.3A.965.965 0 0011 9a1.003 1.003 0 00-.71 1.71l1.3 1.29-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l1.29-1.3 1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L14.41 12z"];

var flag = ["M2.99 2.99c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1s1-.45 1-1v-11c0-.55-.45-1-1-1zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 3.03v7.23c2.07-2.11 5.92 1.75 9 0V3.02c-3 2.07-6.94-2.03-9 0z"];

var flame = ["M9.217 0c0 1.368.368 2.462 1.104 3.282C12.774 5.197 14 7.385 14 9.846c0 2.735-1.472 4.786-4.415 6.154 2.165-2.4 1.84-3.385-.368-6.4-2.342 1.2-1.967 2-1.592 3.6-.786 0-1.5 0-1.875-.4 0 .547.898 2 1.464 3.2-2.943-.82-6.092-5.744-4.988-6.154.736-.273 1.594-.137 2.575.41C3.575 5.333 5.047 1.915 9.217 0z"];

var flash = ["M4 8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1zm4-4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v2c0 .55.45 1 1 1zM3.79 5.21a1.003 1.003 0 001.42-1.42l-1.5-1.5a1.003 1.003 0 00-1.42 1.42l1.5 1.5zm.71 5.29c-.28 0-.53.11-.71.29l-1.5 1.5a1.003 1.003 0 001.42 1.42l1.5-1.5a1.003 1.003 0 00-.71-1.71zm7-5c.28 0 .53-.11.71-.29l1.5-1.5a1.003 1.003 0 00-1.42-1.42l-1.5 1.5a1.003 1.003 0 00.71 1.71zm.71 5.29a1.003 1.003 0 00-1.42 1.42l1.5 1.5a1.003 1.003 0 001.42-1.42l-1.5-1.5zM15 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zM8 5C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1z"];

var floatingPoint = ["M1 5.326c.274 0 .541-.023.8-.069.259-.046.491-.122.697-.228a1.71 1.71 0 00.537-.412c.153-.167.252-.373.297-.617h1.063v8H2.966V6.354H1V5.326zM12.172 4.01c.55 0 .997.128 1.342.385.352.25.623.572.814.968.198.389.33.818.396 1.287.073.47.11.924.11 1.364 0 .44-.037.895-.11 1.364-.066.47-.198.902-.396 1.298-.19.389-.462.711-.814.968-.345.25-.792.374-1.342.374s-1.001-.125-1.353-.374a2.74 2.74 0 01-.814-.968 4.618 4.618 0 01-.396-1.298 9.795 9.795 0 01-.099-1.364c0-.44.033-.895.099-1.364.073-.47.205-.898.396-1.287.198-.396.47-.719.814-.968.352-.257.803-.385 1.353-.385zm0 6.963c.271 0 .499-.077.682-.231.183-.161.326-.374.429-.638.11-.271.187-.587.231-.946.044-.36.066-.74.066-1.144 0-.403-.022-.781-.066-1.133a3.724 3.724 0 00-.231-.946 1.51 1.51 0 00-.429-.638.995.995 0 00-.682-.242c-.279 0-.51.08-.693.242a1.656 1.656 0 00-.429.638 4.08 4.08 0 00-.22.946c-.044.352-.066.73-.066 1.133s.022.785.066 1.144c.044.36.117.675.22.946.11.264.253.477.429.638.183.154.414.231.693.231zM8.089 10.5H6.5v1.543h1.589V10.5z"];

var floppyDisk = ["M15.71 2.29l-2-2A.997.997 0 0013 0h-1v6H4V0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.28-.11-.53-.29-.71zM14 15H2V9c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v6zM11 1H9v4h2V1z"];

var flowBranch = ["M10.643 6.595c.22.418.344.894.344 1.399 0 .439-.094.855-.263 1.231l3.265 3.462-.002-1.75a.973.973 0 01.314-.68.99.99 0 011.388.048c.186.2.316.46.3.715l-.009 4.03a.959.959 0 01-.3.68.972.972 0 01-.698.266l-4.053.002a.97.97 0 01-.679-.314 1.031 1.031 0 01.05-1.42.972.972 0 01.698-.266l1.7-.001-3.305-3.35a2.998 2.998 0 01-4.228-1.653H.999a1 1 0 010-2h4.166a2.998 2.998 0 014.06-1.735l3.449-3.268-1.745.002a.979.979 0 01-.631-1.692c.199-.186.459-.316.713-.3l4.025.009c.247.008.493.1.679.3.186.2.274.451.265.7l.002 4.046a.972.972 0 01-.313.68 1.03 1.03 0 01-1.42-.05.973.973 0 01-.266-.7V3.295l-3.34 3.301z"];

var flowEnd = ["M9.702 7.31c.176.176.293.41.293.684a.976.976 0 01-.283.695c-1.888 1.91-2.892 2.918-3.011 3.027-.179.164-.42.284-.693.284a.995.995 0 01-.997-.985c0-.274.112-.541.292-.72.12-.12.624-.551 1.514-1.293H.98c-.536 0-.975-.47-.975-1.008 0-.537.439-.996.975-.996h5.837c-.895-.752-1.4-1.187-1.514-1.304a1.03 1.03 0 01-.292-.705C5.01 4.45 5.464 4 6 4c.272 0 .52.108.695.294A535.7 535.7 0 009.702 7.31zM13 11.002c-1.657 0-3-1.347-3-3.008a3.004 3.004 0 013-3.007c1.657 0 3 1.346 3 3.007a3.004 3.004 0 01-3 3.008z"];

var flowLinear = ["M4.16 9.002H.977C.44 9.002 0 8.532 0 7.994c0-.537.44-.99.978-.99h3.18A3.01 3.01 0 016.995 5a3.01 3.01 0 012.839 2.004h2.98c-.898-.756-1.404-1.193-1.518-1.31a1.03 1.03 0 01-.293-.705c0-.538.454-.989.992-.989.274 0 .521.108.697.294.118.124 1.122 1.13 3.014 3.016a.96.96 0 01.293.684.975.975 0 01-.284.695l-3.018 3.027a.974.974 0 01-.694.284c-.553 0-1-.447-1-.985 0-.274.117-.545.293-.72l1.518-1.293H9.833A3.01 3.01 0 016.996 11 3.01 3.01 0 014.16 9.002z"];

var flowReview = ["M5.175 7.004a3.003 3.003 0 012.83-2.001c1.305 0 2.416.835 2.83 2.001h1.985c-.896-.756-1.401-1.193-1.515-1.31a1.03 1.03 0 01-.292-.705c0-.538.453-.989.99-.989a.95.95 0 01.696.294c.117.124 1.12 1.13 3.008 3.016.176.176.293.41.293.684a.976.976 0 01-.283.695l-3.013 3.027a.995.995 0 01-1.691-.702c0-.273.116-.544.292-.72l1.515-1.292h-1.98a3.003 3.003 0 01-2.835 2.016A3.003 3.003 0 015.17 9.002H3.18l1.515 1.292c.176.176.292.447.292.72a.995.995 0 01-1.69.702L.282 8.69A.976.976 0 010 7.994c0-.273.117-.508.293-.684A535.858 535.858 0 003.3 4.294.95.95 0 013.997 4c.537 0 .99.45.99.989 0 .273-.12.528-.292.705-.114.117-.62.554-1.515 1.31h1.995z"];

var flowReviewBranch = ["M10.392 10.647A3.002 3.002 0 016.16 8.995H3.37l1.338 1.318c.172.178.287.41.282.683-.01.536-.524.995-.99.995-.465 0-.63-.187-.747-.294L.281 8.682A.956.956 0 010 7.994a.971.971 0 01.294-.687l3.01-3.028a.973.973 0 01.697-.27c.536.01.998.485.989 1.021a.971.971 0 01-.295.687L3.37 6.997h2.79a3.002 3.002 0 014.106-1.716l2.416-2.277-1.732.004a.99.99 0 01-.679-.329.978.978 0 01.05-1.378c.199-.186.459-.315.714-.3l4.012.005c.248.009.493.1.68.3.185.2.273.45.264.699L15.99 6.05a.973.973 0 01-.314.679 1.03 1.03 0 01-1.421-.048.971.971 0 01-.265-.699V4.29L11.65 6.602c.219.416.343.89.343 1.394 0 .451-.1.88-.279 1.263L14 11.68l-.004-1.73a.982.982 0 01.323-.68.978.978 0 011.378.049c.187.2.316.46.3.714l-.004 4.011a.983.983 0 01-.3.691.972.972 0 01-.7.265l-4.046-.001a.987.987 0 01-.679-.326 1.017 1.017 0 01.048-1.41.972.972 0 01.699-.265h1.693l-2.315-2.35z"];

var flows = ["M13.5 6a2.5 2.5 0 00-2.45 2h-1.3L5.74 4l-.75.75L8.25 8h-3.3a2.5 2.5 0 100 1h3.3l-3.26 3.25.75.75 4.01-4h1.3a2.5 2.5 0 102.45-3z"];

var folderClose = ["M-.01 14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7h-16v7zm15-10H7.41L5.7 2.3a.965.965 0 00-.71-.3h-4c-.55 0-1 .45-1 1v3h16V5c0-.55-.45-1-1-1z"];

var folderNew = ["M10.165 7a3.003 3.003 0 002.827 2 3.003 3.003 0 002.827-2H16v7c0 .55-.45 1-1 1H1.01c-.55 0-1-.45-1-1V7h10.155zM8.76 6H0V3c0-.55.45-1 1-1h1.998c.28 0 .53.11.71.29L5.417 4h2.578c0 .768.29 1.469.765 2zm6.23-3c.55 0 1 .45 1 1s-.45 1-1 1h-.999v1c0 .55-.45 1-1 1-.549 0-.998-.45-.998-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 .999-1 .55 0 1 .45 1 1v1h.999z"];

var folderOpen = ["M2.06 6.69c.14-.4.5-.69.94-.69h11V5c0-.55-.45-1-1-1H6.41l-1.7-1.71A.997.997 0 004 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01zM16 8c0-.55-.45-1-1-1H4a.99.99 0 00-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l2-6c.04-.09.06-.2.06-.31z"];

var folderShared = ["M8.76 5.98c-.47-.53-.77-1.22-.77-1.99h-.58L5.7 2.29a.965.965 0 00-.71-.3h-4c-.55 0-1 .45-1 1v3h8.76l.01-.01zm6.23-2.99h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.3a.99.99 0 00-.29.7 1.003 1.003 0 001.71.71l3.29-3.29V8c0 .55.45 1 1 1s1-.45 1-1V4c0-.56-.45-1.01-1-1.01zm-1.98 7.23l-.9.9-.01-.01c-.54.55-1.28.89-2.11.89-1.66 0-3-1.34-3-3 0-.77.3-1.47.78-2H-.01v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.18c-.31.11-.65.18-1 .18-.76-.01-1.45-.31-1.98-.78z"];

var folderSharedOpen = ["M13.02 10.22l-.9.9-.01-.01c-.54.55-1.28.89-2.11.89-1.66 0-3-1.34-3-3 0-.77.3-1.47.78-2H4a.99.99 0 00-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l1.11-3.32c-.01 0-.03.01-.05.01-.77 0-1.45-.3-1.98-.78zM2.06 6.69c.14-.4.5-.69.94-.69h5.76l.01-.01C8.3 5.46 8 4.77 8 4H6.41l-1.7-1.71A.997.997 0 004 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01zM15 3h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 001.42 1.42L14 6.41V8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z"];

var follower = ["M9.37 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.06-.01-.12-.01-.19.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.12-.39.28-.06.44-.36.5-.63.06-.11.19-.39.16-.7-.04-.4-.2-.59-.38-.67v-.07c0-.52-.05-1.26-.14-1.74a2.72 2.72 0 00-.09-.43 3.02 3.02 0 00-1.04-1.51C7.87 3.2 7.15 3 6.5 3c-.64 0-1.36.2-1.87.59-.5.38-.87.92-1.05 1.51-.04.13-.07.27-.09.4-.09.49-.14 1.24-.14 1.75v.06c-.19.07-.36.26-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.13 15.5.02 16 .02 16h12.96s.15-.5-.22-1.36c-.38-.85-2.19-1.42-3.39-1.95zm6.33-10.4l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9.99c-.55 0-1 .45-1 1s.45 1 1 1h2.58l-.29.29a1.003 1.003 0 001.42 1.42l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var following = ["M9.37 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.06-.01-.12-.01-.19.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.12-.39.28-.06.44-.36.5-.63.06-.11.19-.39.16-.7-.04-.4-.2-.59-.38-.67v-.07c0-.52-.05-1.26-.14-1.74a2.72 2.72 0 00-.09-.43 3.02 3.02 0 00-1.04-1.51C7.87 3.2 7.15 3 6.5 3c-.64 0-1.36.2-1.87.59-.5.38-.87.92-1.05 1.51-.04.13-.07.27-.09.4-.09.49-.14 1.24-.14 1.75v.06c-.19.07-.36.26-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.13 15.5.02 16 .02 16h12.96s.15-.5-.22-1.36c-.38-.85-2.19-1.42-3.39-1.95zM14.99 2h-2.58l.29-.29A1.003 1.003 0 0011.28.29l-2 2c-.17.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L12.41 4h2.58c.55 0 1-.45 1-1s-.45-1-1-1z"];

var font = ["M13.93 14.67L8.94.67h-.01C8.79.28 8.43 0 8 0s-.79.28-.93.67h-.01l-5 14h.01c-.04.1-.07.21-.07.33 0 .55.45 1 1 1 .43 0 .79-.28.93-.67h.01L5.49 11h5.02l1.55 4.34h.01c.14.38.5.66.93.66.55 0 1-.45 1-1 0-.12-.03-.23-.07-.33zM6.2 9L8 3.97 9.8 9H6.2z"];

var fork = ["M13.7 9.29a1.003 1.003 0 00-1.42 1.42l.29.29H11.4l-5-5h6.17l-.29.29a1.003 1.003 0 001.42 1.42l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.29.29H.99c-.55 0-1 .45-1 1s.45 1 1 1h2.59l6.71 6.71c.18.18.43.29.71.29h1.59l-.29.29a1.003 1.003 0 001.42 1.42l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71l-2.02-2z"];

var form = ["M2 11v2h2v-2H2zM1 9h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1zm9-6h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1zM6 1a1.003 1.003 0 01.71 1.71l-3 4C3.53 6.89 3.28 7 3 7s-.53-.11-.71-.29l-2-2a1.003 1.003 0 011.42-1.42L3 4.59l2.29-3.3C5.47 1.11 5.72 1 6 1zm4 10h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1z"];

var fuel = ["M1.949 1H0v2h2c.31 0 .6.161.762.426l1.965 3.193-1.352 1.08A1 1 0 003 8.482V13.9c0 .607.448 1.1 1 1.1h11c.552 0 1-.492 1-1.1V2s0-1-1-1H9c-.5 0-1 .5-1 1v2L6.388 5.29 4.455 2.35A3 3 0 001.95 1zM14 3v1h-4V3h4z"];

var fullCircle = ["M8 0a8 8 0 100 16A8 8 0 108 0z"];

var fullStackedChart = ["M13 12h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zM10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm0 4H7v3h3V6zm5-4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V2zm0 3h-3v2h3V5zM5 5H2v3h3V5zm-2 7h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1zm12 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM5 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h3V2zm3 10h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1z"];

var fullscreen = ["M3.41 2H5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v4c0 .55.45 1 1 1s1-.45 1-1V3.41L5.29 6.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L3.41 2zM6 9c-.28 0-.53.11-.71.29L2 12.59V11c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41l3.29-3.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1zm9 1c-.55 0-1 .45-1 1v1.59L10.71 9.3A.965.965 0 0010 9a1.003 1.003 0 00-.71 1.71l3.3 3.29H11c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0-10h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 001.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z"];

var _function = ["M8.12 4.74H6.98c.33-1.29.75-2.24 1.28-2.84.33-.37.64-.56.95-.56.06 0 .11.02.15.05.04.04.06.09.06.15 0 .05-.04.15-.13.29-.09.14-.13.28-.13.4 0 .18.07.33.2.46.14.13.31.19.52.19.22 0 .41-.08.56-.23.15-.16.23-.37.23-.63 0-.3-.11-.55-.34-.74C10.1 1.09 9.74 1 9.24 1c-.78 0-1.49.22-2.12.67-.64.45-1.24 1.2-1.81 2.23-.2.36-.38.59-.56.69-.18.1-.46.15-.85.15l-.26.9h1.08l-1.59 6.12c-.27 1.01-.44 1.63-.54 1.86-.14.34-.34.63-.62.87-.11.1-.24.15-.4.15a.15.15 0 01-.11-.04l-.04-.05c0-.03.04-.08.12-.16.08-.08.12-.2.12-.36 0-.18-.06-.33-.19-.44-.12-.12-.3-.18-.54-.18-.28 0-.51.08-.68.23-.16.14-.25.32-.25.53 0 .22.1.42.31.59.21.17.53.25.97.25.7 0 1.32-.18 1.87-.54.54-.36 1.02-.92 1.42-1.67.41-.75.82-1.96 1.25-3.63l.91-3.54h1.1l.29-.89zm5.43 1.52c.2-.15.41-.23.62-.23.08 0 .23.03.45.09s.41.09.57.09c.23 0 .42-.08.57-.23.16-.16.24-.36.24-.61 0-.26-.08-.47-.23-.62-.15-.15-.37-.23-.66-.23-.25 0-.5.06-.72.18-.23.12-.51.38-.86.78-.26.3-.64.81-1.15 1.55-.2-.91-.55-1.75-1.05-2.51l-2.72.46-.06.29c.2-.04.37-.06.51-.06.27 0 .49.11.67.34.28.36.67 1.45 1.17 3.26-.39.52-.66.85-.8 1.01-.24.26-.44.42-.59.5-.12.06-.25.09-.41.09-.11 0-.3-.06-.56-.18-.18-.08-.34-.12-.48-.12-.27 0-.48.08-.66.25-.17.17-.26.38-.26.64 0 .25.08.44.24.6.16.15.37.23.64.23.26 0 .5-.05.73-.16.23-.11.52-.34.86-.69.35-.35.82-.9 1.43-1.67.23.73.44 1.25.61 1.58s.37.57.59.71c.22.15.5.22.83.22.32 0 .65-.11.98-.34.44-.3.88-.81 1.34-1.53l-.26-.15c-.31.43-.54.7-.69.8-.1.07-.22.1-.35.1-.16 0-.32-.1-.48-.3-.27-.34-.62-1.27-1.06-2.8.4-.68.73-1.13 1-1.34z"];

var ganttChart = ["M10 10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM6 7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1zm9 5H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM4 5h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z"];

var geofence = ["M6 9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-3.29 3.3A1.003 1.003 0 010 15c0-.28.11-.53.3-.71L3.59 11H2c-.55 0-1-.45-1-1s.45-1 1-1zM9.088.004l.097.013.097.024.057.018.1.042.054.029.095.061.052.04 6 5 .05.046.076.08.053.07.06.095.051.11c.056.141.079.294.067.446l-.014.105-.037.143-.035.087-.043.083-4 7-.034.056-.059.08-.038.044-.096.092-.114.082-.116.062-.086.034-.109.03-.1.017-.069.006H8.83c.088-.25.144-.515.163-.79L9 13v-3a3 3 0 00-2.824-2.995L6 7H3c-.351 0-.689.06-1.002.171L2 5l.002-.07.013-.1.015-.073.025-.085.043-.104.056-.101.045-.066.079-.093.084-.078.083-.062 6-4 .07-.043.12-.056.111-.036.108-.022.083-.01h.031c.046-.002.083 0 .12.003z"];

var geolocation = ["M-.01 6.66l7.34 2 2 7.33 6.66-16z"];

var geosearch = ["M8.82 12.4h.66c.23 0 .36-.17.36-.4v-1.48l.19-.18c-.27.03-.55.06-.83.06-.28 0-.56-.03-.84-.07.02.04.05.08.07.13V12c0 .23.15.4.39.4zM6.4 15.1A5.51 5.51 0 01.9 9.6c0-.49.06-.98.18-1.43.03 0 .05-.01.08-.01h.08v.44c0 .19.17.34.36.34.03 0 .07-.01.1-.01l.71.7c.07.07.19.07.26 0s.07-.19 0-.26l-.7-.72c0-.02.03-.03.03-.05v-.11c0-.15.08-.2.23-.33h.42c.08 0 .15-.01.22-.04h.02c.02-.02.03-.02.04-.04.01-.01.01-.01.02-.01l.02-.01.9-.9c-.13-.26-.24-.52-.34-.8h-.5v-.43c0-.01.05.05.04-.08h.31c-.03-.13-.06-.26-.08-.39h-.57c.16-.12.34-.24.51-.36-.02-.23-.04-.46-.04-.7 0-.12.01-.23.02-.34A6.385 6.385 0 000 9.6C0 13.13 2.87 16 6.4 16c3.1 0 5.67-2.22 6.26-5.15l-.78-.88c-.21 2.85-2.58 5.13-5.48 5.13zm-1.7-2.93v-.28h.12c.23 0 .39-.19.39-.42v-.54s.01-.01 0-.01L3.77 9.45h-.62c-.23 0-.38.19-.38.42v1.6c0 .23.14.42.38.42h.26v1.61c0 .23.22.41.45.41s.45-.18.45-.41v-.97H4.3c.24 0 .4-.13.4-.36zm11.07-2.34l-2.94-2.94c.11-.17.21-.34.3-.52.01-.03.03-.06.04-.09.08-.18.16-.36.22-.55v-.01c.06-.19.1-.38.14-.58.01-.05.01-.09.02-.14.03-.2.05-.4.05-.61a4.4 4.4 0 00-4.4-4.4C6.77 0 4.8 1.97 4.8 4.4s1.97 4.4 4.4 4.4c.21 0 .41-.02.61-.05.04 0 .09-.01.14-.02.2-.03.39-.08.58-.14h.01c.19-.06.37-.14.55-.22.03-.01.06-.03.09-.04.18-.09.35-.19.52-.3l2.94 2.94a.8.8 0 00.57.23c.44 0 .8-.36.8-.8a.895.895 0 00-.24-.57zM9.2 7.6C7.43 7.6 6 6.17 6 4.4c0-1.77 1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2zm1.54 4.26v-.52c0-.09-.1-.17-.19-.17s-.19.07-.19.17v.52c0 .09.1.17.19.17s.19-.07.19-.17z"];

var gitBranch = ["M12 1c-1.66 0-3 1.34-3 3 0 1.25.76 2.32 1.85 2.77A2.02 2.02 0 019 8H7c-.73 0-1.41.2-2 .55V5.82C6.16 5.4 7 4.3 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.82v4.37c-1.16.4-2 1.51-2 2.81 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.04-.53-1.95-1.32-2.49.35-.31.81-.51 1.32-.51h2c1.92 0 3.52-1.35 3.91-3.15A2.996 2.996 0 0012 1zM4 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitCommit = ["M15 7h-3.14c-.45-1.72-2-3-3.86-3S4.59 5.28 4.14 7H1c-.55 0-1 .45-1 1s.45 1 1 1h3.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H15c.55 0 1-.45 1-1s-.45-1-1-1zm-7 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"];

var gitMerge = ["M12 6c-1.3 0-2.4.84-2.82 2H9c-1.62 0-3-.96-3.63-2.34C6.33 5.16 7 4.16 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.81v4.37C1.84 10.6 1 11.7 1 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V8.43A5.89 5.89 0 009 10h.18A2.996 2.996 0 0015 9c0-1.66-1.34-3-3-3zm-8 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitNewBranch = ["M14 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3.18 4.8C10.51 7.51 9.82 8 9 8H7c-.73 0-1.41.2-2 .55V5.82C6.16 5.4 7 4.3 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.82v4.37c-1.16.4-2 1.51-2 2.81 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.04-.53-1.95-1.32-2.49.35-.31.81-.51 1.32-.51h2c1.9 0 3.49-1.33 3.89-3.11-.29.07-.58.11-.89.11-.41 0-.8-.08-1.18-.2zM4 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitPull = ["M3 1C1.34 1 0 2.34 0 4c0 1.3.84 2.4 2 2.82v3.37C.84 10.6 0 11.7 0 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C5.16 6.4 6 5.3 6 4c0-1.66-1.34-3-3-3zm0 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 5.18V6c0-1.66-1.34-3-3-3H9.41l1.29-1.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-3 3C6.11 3.47 6 3.72 6 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L9.41 5H11c.55 0 1 .45 1 1v4.18A2.996 2.996 0 0013 16c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitPush = ["M4 6h1V5H4v1zm9 3c0-.28-.11-.53-.29-.71l-3-3C9.53 5.11 9.28 5 9 5s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L8 8.41V15c0 .55.45 1 1 1s1-.45 1-1V8.41l1.29 1.29c.18.19.43.3.71.3.55 0 1-.45 1-1zM5 3H4v1h1V3zm10-3H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h5v-2H2v-1h4v-1H3V2h11v9h-2v1h2v1h-2v2h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var gitRepo = ["M5 9H4v1h1V9zm10-9H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h3v1l2-1 2 1v-1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM4 13H2v-1h2v1zm10 0H8v-1h6v1zm0-2H3V2h11v9zM5 3H4v1h1V3zm0 4H4v1h1V7zm0-2H4v1h1V5z"];

var glass = ["M2 0v4c0 2.97 2.16 5.43 5 5.91V14H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9V9.91c2.84-.48 5-2.94 5-5.91V0H2z"];

var globe = ["M4.45 7.83c-.26 0-.41.21-.41.46v1.75c0 .26.16.46.41.46h.29v1.77c0 .25.24.45.49.45s.49-.2.49-.45V11.2h-.01c.26 0 .44-.14.44-.4v-.3h.14c.26 0 .43-.2.43-.46v-.59s.01-.01 0-.01l-1.58-1.6h-.69zM8.51 3.9h.22c.06 0 .12-.01.12-.07 0-.06-.05-.07-.12-.07h-.22c-.06 0-.12.01-.12.07.01.06.06.07.12.07zm-2.33-.05c.07-.07.07-.19 0-.26l-.5-.5a.187.187 0 00-.26 0c-.07.07-.07.19 0 .26l.5.5c.07.07.19.07.26 0zm3.06.89c.07 0 .14-.06.14-.12v-.31c0-.07-.07-.12-.14-.12s-.14.06-.14.12v.31c0 .07.07.12.14.12zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-.55.1-1.07.23-1.57h.11v.47c0 .2.18.37.39.37.03 0 .08-.01.11-.02l.78.77c.08.08.2.08.28 0 .08-.08.08-.2 0-.28l-.75-.78c0-.02.04-.04.04-.06v-.12c0-.16.09-.22.25-.36h.46c.09 0 .17-.01.24-.05h.02c.02-.01.03-.02.05-.03.01-.01.01-.01.02-.01l.02-.02 1.59-1.58c.18-.18.18-.46 0-.64s-.47-.15-.65.03l-.3.34h-.57v-.48c0-.01.05.05.05-.09h.64c.12 0 .22-.09.22-.21s-.1-.21-.22-.21H4.1c.18-.15.34-.31.54-.44l.01-.01c.21-.14.45-.25.68-.37.15-.07.29-.15.44-.21.17-.07.35-.11.53-.17.18-.05.35-.12.53-.16a6.05 6.05 0 013.47.35c.05.02.1.05.16.08.25.11.48.24.71.39.25.16.49.34.71.55H10.6s0-.03-.01-.03c-.04 0-.09 0-.13.03l-.51.51a.17.17 0 000 .23c.06.06.17.06.23 0l.42-.44.01-.02h.25c0 .14-.07.09-.07.12v.07c0 .22-.15.37-.36.37h-.38c-.19 0-.38.21-.38.4v.17h-.1c-.12 0-.2.06-.2.18v.25h-.23c-.17 0-.3.11-.3.28 0 .17.13.26.3.26.07 0 .14.03.19-.11l.04.01.49-.46h.17l.39.37c.03.03.08.02.12-.01.03-.03.03-.12 0-.15l-.32-.35h.23l.09.12c.18.18.48.17.66-.01l.09-.1h.4c.02 0 .08.05.08.05v.24l-.05-.01h-.36c-.11 0-.21.1-.21.21 0 .11.09.21.21.21h.41v.15c-.14.21-.24.42-.45.42h-.94v-.01l-.44-.44a.47.47 0 00-.66 0l-.42.43v.01H8.6c-.26 0-.49.21-.49.46v.92c0 .26.23.45.49.45h.9c.34.14.57.35.72.69v1.68c0 .26.17.44.42.44h.72c.26 0 .4-.18.4-.44V9l.89-.86.03-.02.02-.01h.03c.07-.08.15-.19.15-.31v-.91c0-.18-.16-.32-.31-.46H13c.01.28.21.42.46.42h.42c.08.37.12.76.12 1.15 0 3.31-2.69 6-6 6zm4.54-4.27c-.1 0-.21.08-.21.18v.57c0 .1.11.18.21.18.1 0 .21-.08.21-.18v-.57c0-.1-.11-.18-.21-.18zM8.37 3.19c0-.25-.2-.42-.46-.42h-.54c-.25 0-.42.18-.42.43 0 .03-.1.04.05.08v.47c0 .15.06.27.21.27s.21-.12.21-.27v-.14h.5c.24 0 .45-.16.45-.42z"];

var globeNetwork = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm5.17 5h-2.44c-.21-1.11-.51-2.03-.91-2.69 1.43.46 2.61 1.43 3.35 2.69zM10 8c0 .73-.05 1.39-.12 2H6.12C6.05 9.39 6 8.73 6 8s.05-1.39.12-2h3.76c.07.61.12 1.27.12 2zM8 2c.67 0 1.36 1.1 1.73 3H6.27C6.64 3.1 7.33 2 8 2zm-1.82.31c-.4.66-.71 1.58-.91 2.69H2.83a6.025 6.025 0 013.35-2.69zM2 8c0-.7.13-1.37.35-2h2.76C5.04 6.62 5 7.28 5 8s.04 1.38.11 2H2.35C2.13 9.37 2 8.7 2 8zm.83 3h2.44c.21 1.11.51 2.03.91 2.69A6.025 6.025 0 012.83 11zM8 14c-.67 0-1.36-1.1-1.73-3h3.46c-.37 1.9-1.06 3-1.73 3zm1.82-.31c.4-.66.7-1.58.91-2.69h2.44a6.025 6.025 0 01-3.35 2.69zM13.65 10h-2.76c.07-.62.11-1.28.11-2s-.04-1.38-.11-2h2.76c.22.63.35 1.3.35 2s-.13 1.37-.35 2z"];

var graph = ["M14 3c-1.06 0-1.92.83-1.99 1.88l-1.93.97A2.95 2.95 0 008 5c-.56 0-1.08.16-1.52.43L3.97 3.34C3.98 3.23 4 3.12 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.24 0 .47-.05.68-.13l2.51 2.09C5.08 7.29 5 7.63 5 8c0 .96.46 1.81 1.16 2.35l-.56 1.69c-.91.19-1.6.99-1.6 1.96 0 1.1.9 2 2 2s2-.9 2-2c0-.51-.2-.97-.51-1.32l.56-1.69A2.99 2.99 0 0011 8c0-.12-.02-.24-.04-.36l1.94-.97c.32.21.69.33 1.1.33 1.1 0 2-.9 2-2s-.9-2-2-2z"];

var graphRemove = ["M12.89 8.11l-.01.01-.38-.38-.38.38-.02-.02c-.54.55-1.27.9-2.1.9-1.66 0-3-1.34-3-3 0-.83.35-1.56.9-2.1l-.02-.02.38-.38-.38-.38.01-.01C7.35 2.57 7 1.83 7 1c0-.34.07-.65.17-.96A8.004 8.004 0 000 8c0 4.42 3.58 8 8 8 4.14 0 7.54-3.14 7.96-7.17-.31.1-.62.17-.96.17-.83 0-1.57-.35-2.11-.89zm1.02-4.61l1.79-1.79c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-1.79 1.8L10.71.3A.965.965 0 0010 0a1.003 1.003 0 00-.71 1.71l1.79 1.79-1.79 1.79a1.003 1.003 0 001.42 1.42l1.79-1.79 1.79 1.79a1.003 1.003 0 001.42-1.42l-1.8-1.79z"];

var greaterThan = ["M2.713 5.958a1 1 0 01.574-1.916l10 3c.95.285.95 1.63 0 1.916l-10 3a1 1 0 01-.574-1.916L9.52 8 2.713 5.958z"];

var greaterThanOrEqualTo = ["M2.713 3.958a1 1 0 01.574-1.916l10 3c.95.285.95 1.63 0 1.916l-10 3a1 1 0 01-.574-1.916L9.52 6 2.713 3.958zM3 12h10a1 1 0 010 2H3a1 1 0 010-2z"];

var grid = ["M15 9c.55 0 1-.45 1-1s-.45-1-1-1h-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1zm-8 3H4V9h3v3zm0-5H4V4h3v3zm5 5H9V9h3v3zm0-5H9V4h3v3z"];

var gridView = ["M0 1v6h7V0H1C.45 0 0 .45 0 1zm0 14c0 .55.45 1 1 1h6V9H0v6zM15 0H9v7h7V1c0-.55-.45-1-1-1zM9 16h6c.55 0 1-.45 1-1V9H9v7z"];

var groupObjects = ["M5 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-3H5C2.24 3 0 5.24 0 8s2.24 5 5 5h6c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 9H5c-2.21 0-4-1.79-4-4s1.79-4 4-4h6c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var groupedBarChart = ["M10 12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1zm3 0c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm2 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-9-1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1zm-3 0c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v9c0 .55.45 1 1 1z"];

var hand = ["M15 5c0-.55-.45-1-1-1-.41 0-.76.24-.91.59v.01s0 .01-.01.01L11.57 8h-.36l.78-4.84C12 3.11 12 3.05 12 3a1 1 0 00-1.99-.16v.01L9.18 8H9V1c0-.55-.45-1-1-1S7 .45 7 1v7h-.09l-.93-5.18A1 1 0 005 2c-.55 0-1 .45-1 1 0 .05 0 .11.01.16L5.26 11h-.04L2.83 7.44C2.65 7.18 2.35 7 2 7c-.55 0-1 .45-1 1 0 .17.04.33.12.47l3 5.69h.01v.01A5.002 5.002 0 0013 11v-.59l1.93-5.05c.05-.11.07-.23.07-.36z"];

var handDown = ["M14.72 7.87c-1.54-.67-2.99-2.68-3.7-3.95C10.11 1.95 9.93 0 6.14 0 4.05 0 2.71.61 1.92 2.12 1.27 3.36 1 5.21 1 7.83v.79c0 .65.6 1.18 1.35 1.18.34 0 .64-.11.88-.29.17.48.68.84 1.29.84.41 0 .78-.16 1.03-.42.23.37.67.63 1.19.63.57 0 1.05-.31 1.25-.74l.01.63v4.05c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7.9c.58.41 1.55 1.21 2.47 1.29 1.57.14 1.82-1.07 1.25-1.32z"];

var handLeft = ["M12.08 4.97c-1.26-.71-3.27-2.15-3.95-3.7C7.88.7 6.67.96 6.81 2.52c.09.93.89 1.9 1.3 2.48H1.5C.67 5 0 5.67 0 6.5S.67 8 1.5 8h4.05l.63.01c-.44.2-.75.69-.75 1.25 0 .52.26.96.63 1.19-.26.25-.42.61-.42 1.03 0 .61.35 1.12.84 1.29-.18.24-.29.54-.29.88 0 .75.54 1.35 1.19 1.35h.79c2.62 0 4.47-.28 5.71-.92 1.51-.79 2.12-2.14 2.12-4.22 0-3.79-1.95-3.97-3.92-4.89z"];

var handRight = ["M14.5 5H7.89c.41-.58 1.21-1.55 1.3-2.47C9.34.97 8.12.71 7.87 1.28c-.67 1.54-2.68 2.99-3.95 3.7C1.95 5.89 0 6.07 0 9.86c0 2.09.61 3.43 2.12 4.22 1.24.65 3.09.92 5.71.92h.79c.65 0 1.18-.6 1.18-1.35 0-.34-.11-.64-.29-.88.48-.17.84-.68.84-1.29 0-.41-.16-.78-.42-1.03.37-.23.63-.67.63-1.19 0-.57-.31-1.05-.74-1.25l.63-.01h4.05c.83 0 1.5-.67 1.5-1.5S15.33 5 14.5 5z"];

var handUp = ["M13.65 6.19c-.34 0-.64.11-.88.29-.17-.48-.68-.84-1.29-.84-.41 0-.78.16-1.03.42-.23-.37-.67-.63-1.19-.63-.57 0-1.05.31-1.25.74L8 5.55V1.5C8 .67 7.33 0 6.5 0S5 .67 5 1.5v6.61c-.58-.41-1.55-1.21-2.48-1.3C.96 6.67.7 7.88 1.28 8.13c1.54.67 2.99 2.68 3.7 3.95C5.89 14.05 6.07 16 9.86 16c2.09 0 3.43-.61 4.22-2.12.64-1.24.92-3.09.92-5.71v-.79c0-.65-.6-1.19-1.35-1.19z"];

var hat = ["M15 10c.495 0 .933.379.993.882L16 11v.505c0 1.461-3.524 2.45-7.707 2.493L8 14c-4.31 0-8-1-8-2.495V11c0-.561.466-1 1-1 .895 0 3 1 7 1l.381-.003C12.135 10.937 14.134 10 15 10zm-4-8c1.13 0 2.02 2.153 2.671 6.46-1.063.266-2.644.652-4.887.727l-.403.01L8 9.2c-2.664 0-4.488-.444-5.673-.74C2.98 4.153 3.87 2 5 2c2 0 1.329 2 3 2s1-2 3-2z"];

var header = ["M13 1c-.55 0-1 .45-1 1v5H4V2c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V9h8v5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"];

var headerOne = ["M14.06 8c-.04.23-.12.44-.25.61-.13.17-.29.3-.48.41-.18.11-.39.18-.62.23-.23.04-.46.07-.71.07v1.03h1.74V16H15V8h-.94zM7 0c-.56 0-1 .45-1 1v4H2V1c0-.55-.45-1-1-1-.56 0-1 .45-1 1v10c0 .55.45 1 1 1 .56 0 1-.45 1-1V7h4v4c0 .55.45 1 1 1 .56 0 1-.45 1-1V1c0-.54-.45-1-1-1z"];

var headerThree = ["M1 0C.44 0 0 .45 0 1v10c0 .54.45 1 1 1 .56 0 1-.45 1-1V7h4v4c0 .54.45 1 1 1 .56 0 1-.45 1-1V1c0-.54-.45-1-1-1-.56 0-1 .45-1 1v4H2V1c0-.54-.45-1-1-1zm13.71 11.72c.41.08.72.3.95.65.23.35.34.77.34 1.27 0 .37-.07.7-.2.97-.14.29-.32.54-.55.74-.23.2-.5.36-.8.47-.3.11-.62.16-.96.16-.41 0-.77-.06-1.08-.19-.31-.12-.56-.31-.77-.54-.21-.24-.36-.52-.47-.85-.11-.33-.16-.7-.17-1.1h1.14c-.01.47.09.86.32 1.17.23.31.57.47 1.02.47.39 0 .71-.12.97-.36s.39-.58.39-1.02c0-.3-.05-.53-.16-.71-.11-.17-.25-.31-.43-.4-.17-.09-.37-.15-.59-.17-.22-.02-.44-.03-.67-.02v-.93c.19.01.38 0 .57-.04.19-.03.36-.1.51-.19.14-.09.26-.22.35-.38.09-.16.14-.36.14-.59 0-.33-.1-.59-.31-.79-.2-.2-.47-.3-.79-.3-.21 0-.38.04-.53.13-.15.09-.27.21-.37.36-.1.15-.17.32-.22.51-.05.19-.07.38-.06.58h-1.15c.01-.38.08-.72.19-1.04.11-.32.27-.6.47-.83.19-.23.44-.42.72-.55.28-.13.6-.2.96-.2.28 0 .55.04.82.13.27.08.51.21.72.38.21.17.38.38.51.64s.19.56.19.9c0 .39-.08.73-.24 1.02-.16.29-.42.5-.76.63v.02z"];

var headerTwo = ["M13.17 13.93c-.17.15-.33.29-.46.44-.13.16-.22.32-.27.49h3.55V16H11c.01-.65.16-1.22.44-1.71s.67-.91 1.17-1.27c.24-.18.49-.36.75-.54.25-.18.49-.36.71-.57.21-.2.39-.42.53-.65.14-.24.21-.51.22-.82 0-.14-.02-.29-.05-.45-.03-.16-.09-.31-.18-.45a1.13 1.13 0 00-.37-.35c-.16-.09-.37-.14-.63-.14-.24 0-.43.05-.59.15-.16.1-.29.24-.38.42-.1.17-.17.38-.21.62-.05.24-.07.5-.08.77h-1.19c0-.43.05-.83.16-1.2s.27-.69.49-.96c.21-.25.48-.46.79-.62.31-.15.67-.23 1.07-.23.45 0 .82.08 1.11.23.3.16.55.36.73.6.19.24.32.5.39.79.08.28.12.54.12.79 0 .31-.04.6-.13.85s-.22.49-.37.7c-.15.21-.32.41-.52.59s-.4.35-.61.51l-.63.45c-.21.14-.39.28-.57.42zM0 1c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zm6 0c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zM2 5h4v2H2V5z"];

var headset = ["M14.85 6.34C14.18 2.72 11.37 0 8 0S1.82 2.72 1.15 6.34C.47 6.9 0 8.1 0 9.5 0 11.43.9 13 2 13c0 1.1.9 2 2 2h2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1H4c-.55 0-1-.45-1-1 .55 0 1-.45 1-1V7c0-.45-.3-.81-.71-.94C3.97 3.7 5.81 2 8 2s4.03 1.7 4.71 4.06c-.41.13-.71.49-.71.94v5c0 .55.45 1 1 1h1c1.1 0 2-1.57 2-3.5 0-1.4-.47-2.6-1.15-3.16z"];

var heart = ["M16 5.095c0-2.255-1.88-4.083-4.2-4.083-1.682 0-3.13.964-3.8 2.352a4.206 4.206 0 00-3.8-2.352C1.88 1.012 0 2.84 0 5.095c0 .066.007.13.01.194H.004c.001.047.01.096.014.143l.013.142c.07.8.321 1.663.824 2.573C2.073 10.354 4.232 12.018 8 15c3.767-2.982 5.926-4.647 7.144-6.854.501-.905.752-1.766.823-2.562.007-.055.012-.11.016-.164.003-.043.012-.088.013-.13h-.006c.003-.066.01-.13.01-.195z"];

var heartBroken = ["M7.71 8.87L6.17 6.55l.02-.01A.906.906 0 016 6c0-.07.03-.13.04-.19h-.02l.78-3.92C6.09 1.34 5.19 1 4.2 1 1.88 1 0 2.83 0 5.09c0 .07.01.13.01.19H0c0 .05.01.1.01.14 0 .05.01.1.01.14.07.8.32 1.66.82 2.57 1.07 1.94 2.88 3.47 5.86 5.84l-.68-2.74h.02C6.03 11.16 6 11.08 6 11c0-.28.11-.53.29-.71l1.42-1.42zM16 5.09C16 2.83 14.12 1 11.8 1c-1.2 0-2.27.5-3.04 1.28l-.7 3.51 1.77 2.66-.01.01c.1.15.18.33.18.54 0 .28-.11.53-.29.71l-1.6 1.6.75 3.01c3.23-2.56 5.16-4.15 6.28-6.18.5-.91.75-1.77.82-2.56.01-.05.01-.11.02-.16 0-.04.01-.09.01-.13h-.01c.01-.07.02-.14.02-.2z"];

var heatGrid = ["M0 10h5V7H0v3zm1-2h3v1H1V8zm14-5h-4v3h5V4c0-.55-.45-1-1-1zm0 2h-3V4h3v1zM0 4v2h5V3H1c-.55 0-1 .45-1 1zm0 9c0 .55.45 1 1 1h4v-3H0v2zm6-7h4V3H6v3zm0 8h4v-3H6v3zm1-2h2v1H7v-1zm4 2h4c.55 0 1-.45 1-1v-2h-5v3zm0-4h5V7h-5v3zm-5 0h4V7H6v3z"];

var heatmap = ["M2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3 4.5A2.5 2.5 0 0013.5 6c-.98 0-1.82.57-2.23 1.39-.6-.78-1.51-1.3-2.56-1.36.18-.49.29-.99.29-1.53C9 2.01 6.99 0 4.5 0S0 2.01 0 4.5 2.01 9 4.5 9c.19 0 .37-.03.56-.06-.03.19-.06.37-.06.56C5 11.43 6.57 13 8.5 13c1.63 0 2.98-1.11 3.37-2.62.44.38 1 .62 1.63.62A2.5 2.5 0 0016 8.5zM14.5 13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"];

var helicopter = ["M.5 2a.5.5 0 01.5.5V4h7V3H2.5a.5.5 0 010-1h13a.5.5 0 010 1H10v1h1c2.26 0 4 1.79 4 4 0 1.87-1.247 3.44-3 3.878V13h.382l1.894-.947a.5.5 0 11.448.894L12.618 14H4.5a.5.5 0 010-1H7v-2.306C5.749 9.736 5 8.368 5 7L1 6v1.5a.5.5 0 01-1 0v-5A.5.5 0 01.5 2zM8 11.316V13h3v-1a6.73 6.73 0 01-3-.684zM11 5v3h3a3 3 0 00-3-3z"];

var help = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13H7v-2h2v2zm1.93-6.52c-.14.32-.35.64-.62.97L9.25 8.83c-.12.15-.24.29-.28.42-.04.13-.09.3-.09.52V10H7.12V8.88s.05-.51.21-.71L8.4 6.73c.22-.26.35-.49.44-.68.09-.19.12-.38.12-.58 0-.3-.1-.55-.28-.75-.18-.19-.44-.28-.76-.28-.33 0-.59.1-.78.29-.19.19-.33.46-.4.81-.03.11-.1.15-.2.14l-1.7-.25c-.12-.01-.16-.08-.14-.19.12-.82.46-1.47 1.03-1.94.57-.48 1.32-.72 2.25-.72.47 0 .9.07 1.29.22s.72.34 1 .59c.28.25.49.55.65.89.15.35.22.72.22 1.12s-.07.75-.21 1.08z"];

var helperManagement = ["M13 5h-2v2h2V5zm0 6h-2v2h2v-2zm0-3h-2v2h2V8zm2-8H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12zm-7-3H5v2h2v-2zm3 0H8v2h2v-2z"];

var highPriority = ["M9 14v2H7v-2h2zm1-14L9 12H7L6 0h4z"];

var highVoltagePole = ["M6 0a1 1 0 00-1 1v3H3V3h.5a.5.5 0 000-1h-2a.5.5 0 000 1H2v1a1 1 0 000 2v1h-.5a.5.5 0 000 1h2a.5.5 0 000-1H3V6h2v9a1 1 0 102 0V6h2v9a1 1 0 102 0V6h2v1h-.5a.5.5 0 000 1h2a.5.5 0 000-1H14V6a1 1 0 100-2V3h.5a.5.5 0 000-1h-2a.5.5 0 000 1h.5v1h-2V1a1 1 0 00-1-1H6zm1 2v2h2V2H7z"];

var highlight = ["M9.12 11.07l2-2.02.71.71 4-4.04L10.17 0l-4 4.04.71.71-2 2.02 4.24 4.3zM2 12.97h4c.28 0 .53-.11.71-.3l1-1.01-3.42-3.45-3 3.03c-.18.18-.29.44-.29.72 0 .55.45 1.01 1 1.01zm13 1.01H1c-.55 0-1 .45-1 1.01S.45 16 1 16h14c.55 0 1-.45 1-1.01s-.45-1.01-1-1.01z"];

var history = ["M8 3c-.55 0-1 .45-1 1v4c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L9 7.59V4c0-.55-.45-1-1-1zm0-3a7.95 7.95 0 00-6 2.74V1c0-.55-.45-1-1-1S0 .45 0 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.54C4.64 2.78 6.23 2 8 2c3.31 0 6 2.69 6 6 0 2.61-1.67 4.81-4 5.63v-.01c-.63.23-1.29.38-2 .38-3.31 0-6-2.69-6-6 0-.55-.45-1-1-1s-1 .45-1 1c0 4.42 3.58 8 8 8 .34 0 .67-.03 1-.07.02 0 .04-.01.06-.01C12.98 15.4 16 12.06 16 8c0-4.42-3.58-8-8-8z"];

var home = ["M2 10v5c0 .55.45 1 1 1h3v-5h4v5h3c.55 0 1-.45 1-1v-5L8 4l-6 6zm13.71-2.71L14 5.59V2c0-.55-.45-1-1-1s-1 .45-1 1v1.59L8.71.29C8.53.11 8.28 0 8 0s-.53.11-.71.29l-7 7a1.003 1.003 0 001.42 1.42L8 2.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var horizontalBarChart = ["M4 5h7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM1 1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm14 6H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-6 5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z"];

var horizontalBarChartAsc = ["M1 3h5c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h7c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 11h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z"];

var horizontalBarChartDesc = ["M15 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM8 9H1c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm5-8H1c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z"];

var horizontalDistribution = ["M2 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm13 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-5 2H7c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"];

var horizontalInbetween = ["M0 16V0h1a1 1 0 011 1v14a1 1 0 01-1 1H0zM15 0h1v16h-1a1 1 0 01-1-1V1a1 1 0 011-1zM6.707 6.707a1 1 0 00-1.414-1.414l-2 2a1 1 0 000 1.414l2 2a1 1 0 001.414-1.414L5.414 8l1.293-1.293zm4-1.414a1 1 0 00-1.414 1.414L10.586 8 9.293 9.293a1 1 0 101.414 1.414l2-2a1 1 0 000-1.414l-2-2z"];

var hurricane = ["M3.5 12c-.86 0-2.5-.5-3.5-1 1 3.5 4.506 4 7 4a7 7 0 007-7l-.006-.004a5.974 5.974 0 00-1.29-3.988c.896.066 2.37.53 3.296.992-1-3.5-4.506-4-7-4a6.998 6.998 0 00-6.14 3.635 5.972 5.972 0 00-.859 3.226L2 8l.006.005a5.98 5.98 0 001.771 3.99A7.469 7.469 0 013.5 12zM8 6a2 2 0 100 4 2 2 0 000-4z", "M0 0h16v16H0z"];

var idNumber = ["M2 5v7h12V5H2zm0-2h12c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z", "M7.9 10.48c-.14-.33-.84-.55-1.3-.75-.46-.2-.4-.33-.42-.5v-.07c.16-.14.29-.33.37-.56 0 0 0-.01.01-.02.02-.05.03-.1.05-.15.1-.01.16-.13.19-.23.03-.04.07-.15.06-.27-.02-.16-.08-.24-.15-.26v-.03c0-.2-.02-.48-.05-.67-.01-.05-.02-.1-.03-.16-.07-.23-.21-.44-.4-.58-.2-.15-.48-.23-.73-.23s-.53.08-.72.23c-.19.14-.33.35-.4.58-.02.05-.03.1-.03.16-.05.18-.06.47-.06.67v.03c-.07.03-.14.1-.15.26-.02.12.03.22.06.27.02.1.09.22.2.24.01.05.03.1.05.15v.01c.08.23.22.42.38.56v.07c-.02.17.03.29-.43.5-.46.2-1.16.42-1.3.75s-.09.52-.09.52H8c-.01 0 .05-.19-.1-.52zM10 6h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zM10 9h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1z"];

var imageRotateLeft = ["M13 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C8.11 2.47 8 2.72 8 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H13c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3zm-5.5 9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 6.33L7 12l-1 1-2-3-2 2.67V9h7v4.33z"];

var imageRotateRight = ["M5.71 5.71l2-2C7.89 3.53 8 3.28 8 3c0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H3C1.34 2 0 3.34 0 5v3c0 .55.45 1 1 1s1-.45 1-1V5c0-.55.45-1 1-1h1.59l-.3.29a1.003 1.003 0 001.42 1.42zM12.5 11c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM15 7H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 6.33L12 12l-1 1-2-3-2 2.67V9h7v4.33z"];

var _import = ["M7.29 11.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L9 8.59V1c0-.55-.45-1-1-1S7 .45 7 1v7.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l4 4zM15 11c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"];

var inbox = ["M13.91 2.6c-.16-.36-.51-.61-.92-.61h-10c-.41 0-.77.25-.92.61L-.01 7.45v5.54c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7.45L13.91 2.6zm-1.92 5.39c-.55 0-1 .45-1 1v1h-6v-1c0-.55-.45-1-1-1H1.94l1.71-4h8.68l1.71 4h-2.05z"];

var inboxFiltered = ["M6.432 2c.094.14.202.273.324.394L8.42 4H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6.557c.693 0 1.363-.262 1.837-.736l.103-.102.85-1.14a2.564 2.564 0 00.623-1.682V5.058L16 7.46V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h3.432zm9.048-2c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V3.71L8.17.98A.566.566 0 018 .57c0-.31.26-.57.57-.57h6.91z"];

var inboxGeo = ["M6.341 2A5.99 5.99 0 006 4H3.66L1.95 8H4c.55 0 1 .45 1 1v1h7a5.978 5.978 0 004-1.528V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h3.341zm3.679 2.145c0-.125.075-.23.205-.225h.345l.79.8c.005 0 0 .005 0 .005v.295c0 .13-.085.23-.215.23h-.07v.15c0 .13-.09.2-.215.2v.535c0 .125-.12.225-.245.225s-.245-.1-.245-.225V5.25h-.145c-.125 0-.205-.1-.205-.23v-.875zm2.235-2.195c-.03 0-.055-.005-.06-.035 0-.03.03-.035.06-.035h.11c.035 0 .06.005.06.035 0 .03-.03.035-.06.035h-.11zm-1.165-.025a.094.094 0 01-.13 0l-.25-.25a.094.094 0 010-.13.094.094 0 01.13 0l.25.25a.094.094 0 010 .13zm1.53.445c-.035 0-.07-.025-.07-.06v-.155c0-.03.035-.06.07-.06s.07.025.07.06v.155c0 .03-.035.06-.07.06zM12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 7c1.655 0 3-1.345 3-3 0-.195-.02-.39-.06-.575h-.21c-.125 0-.225-.07-.23-.21h-.215c.075.07.155.14.155.23V3.9c0 .06-.04.115-.075.155h-.015l-.01.005-.015.01-.445.43v.815c0 .13-.07.22-.2.22h-.36c-.125 0-.21-.09-.21-.22v-.84a.627.627 0 00-.36-.345h-.45c-.13 0-.245-.095-.245-.225v-.46c0-.125.115-.23.245-.23l.13-.005.21-.215c.09-.09.24-.09.33 0l.22.225h.47c.105 0 .155-.105.225-.21v-.075h-.205a.106.106 0 01-.105-.105.11.11 0 01.105-.105h.18l.025.005v-.12s-.03-.025-.04-.025h-.2l-.045.05a.235.235 0 01-.33.005l-.045-.06h-.115l.16.175c.015.015.015.06 0 .075-.02.015-.045.02-.06.005l-.195-.185h-.085l-.245.23-.02-.005c-.025.07-.06.055-.095.055-.085 0-.15-.045-.15-.13s.065-.14.15-.14h.115v-.125c0-.06.04-.09.1-.09h.05V2.36c0-.095.095-.2.19-.2h.19c.105 0 .18-.075.18-.185V1.94c0-.015.035.01.035-.06h-.125l-.005.01-.21.22a.085.085 0 01-.115 0 .085.085 0 010-.115l.255-.255c.02-.015.045-.015.065-.015.005 0 .005.015.005.015h.64a2.327 2.327 0 00-.355-.275 2.452 2.452 0 00-.355-.195c-.03-.015-.055-.03-.08-.04a3.025 3.025 0 00-1.735-.175c-.09.02-.175.055-.265.08-.09.03-.18.05-.265.085-.075.03-.145.07-.22.105-.115.06-.235.115-.34.185l-.005.005c-.1.065-.18.145-.27.22h.455c.06 0 .11.045.11.105s-.05.105-.11.105h-.32c0 .07-.025.04-.025.045v.24h.285l.15-.17c.09-.09.235-.105.325-.015.09.09.09.23 0 .32l-.795.79-.01.01c-.005 0-.005 0-.01.005l-.025.015h-.01a.235.235 0 01-.12.025h-.23c-.08.07-.125.1-.125.18v.06c0 .01-.02.02-.02.03l.375.39c.04.04.04.1 0 .14-.04.04-.1.04-.14 0l-.39-.385a.213.213 0 01-.055.01c-.105 0-.195-.085-.195-.185v-.235h-.055A3.1 3.1 0 009 4c0 1.655 1.345 3 3 3zm2.27-2.135c.05 0 .105.04.105.09v.285c0 .05-.055.09-.105.09-.05 0-.105-.04-.105-.09v-.285c0-.05.055-.09.105-.09zm-2.085-3.27c0 .13-.105.21-.225.21h-.25v.07c0 .075-.03.135-.105.135s-.105-.06-.105-.135V1.64c-.075-.02-.025-.025-.025-.04 0-.125.085-.215.21-.215h.27c.13 0 .23.085.23.21z"];

var inboxSearch = ["M5.639 2a5.391 5.391 0 00-.144 2H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6V9c0-.088.012-.174.033-.255.12-.007.238-.019.39-.038.154-.008.252-.03.442-.077a5.34 5.34 0 00.24-.05h.05l.122-.04 1.266 1.271c.425.47 1.116.769 1.847.769.21 0 .414-.025.61-.071V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h2.639zM15.82 7.53c.1.12.17.27.18.44 0 .34-.27.61-.61.61a.57.57 0 01-.43-.18l-2.24-2.25c-.13.08-.26.16-.4.23-.02.01-.05.02-.07.03-.14.06-.27.12-.42.17h-.01c-.14.05-.29.08-.44.11-.04.01-.08.02-.11.02-.15.02-.3.04-.46.04-1.85 0-3.35-1.51-3.35-3.37S8.96.01 10.81 0c1.85 0 3.35 1.51 3.35 3.37 0 .16-.02.31-.04.47-.01.04-.01.07-.02.11-.02.15-.05.29-.1.44v.01c-.05.15-.11.28-.17.42-.01.02-.02.05-.03.07-.07.14-.14.27-.23.4l2.25 2.24zm-5.01-1.94c1.22 0 2.21-.99 2.21-2.22 0-1.23-.99-2.22-2.21-2.22S8.6 2.14 8.6 3.37c0 1.22.99 2.22 2.21 2.22z"];

var inboxUpdate = ["M8.1 2a5.023 5.023 0 000 2H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6V9c0-.55.45-1 1-1h2.05c.708 0 1.352-.241 1.905-.645L16 7.46V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h5.1zM13 6a3 3 0 110-6 3 3 0 010 6z"];

var infoSign = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 3h2v2H7V3zm3 10H6v-1h1V7H6V6h3v6h1v1z"];

var inheritance = ["M5 8c0 1.66 1.34 3 3 3h4.59L11.3 9.71A.965.965 0 0111 9a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42l1.3-1.29H8c-2.76 0-5-2.24-5-5H1a1 1 0 01-1-1V1a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5zM2 2v4h4V2H2z"];

var inheritedGroup = ["M1 7c.51 0 .935.388.993.884L2 8v3c0 .51.388.935.884.993L3 12h1.59l-.3-.29a1.003 1.003 0 011.324-1.504l.096.084 2 2c.18.18.29.43.29.71 0 .233-.076.446-.206.614l-.084.096-2 2A1.003 1.003 0 014 15c0-.24.08-.458.224-.629l.076-.081.29-.29H3a2.996 2.996 0 01-2.995-2.823L0 11V8c0-.55.45-1 1-1zm5.388-7c.629 0 1.338.21 1.838.6.48.38.85.91 1.019 1.52.04.13.07.27.09.4.09.48.14 1.22.14 1.73v.07c.18.08.34.27.37.67.03.32-.09.59-.16.71-.06.28-.21.58-.48.63-.03.13-.07.26-.12.39 0 .01-.01.04-.01.04-.22.58-.55 1.08-.949 1.45v.18c.04.45-.12.77 1.059 1.3 1.179.53 2.947 1.09 3.307 1.95.37.86.22 1.36.22 1.36H9c0-.539-.21-1.045-.583-1.417l-2-2A1.997 1.997 0 005 9c-.149 0-.296-.015-.442-.045.099-.19.082-.37.101-.575 0-.05.01-.11.01-.17-.41-.35-.75-.86-.969-1.45v-.01s-.01-.01-.01-.02c-.04-.12-.09-.26-.12-.39-.28-.05-.44-.36-.5-.64-.06-.12-.19-.39-.16-.71.04-.41.21-.6.39-.68v-.06c0-.51.05-1.26.14-1.74.02-.13.05-.27.09-.4.17-.6.54-1.13 1.02-1.51C5.048.21 5.757 0 6.387 0zm4.625 2.04c.49 0 1.05.16 1.439.46.38.29.67.7.8 1.17.03.1.05.21.07.31.07.37.11.94.11 1.33v.05c.139.06.269.21.289.51.02.25-.07.45-.13.54-.05.21-.16.44-.38.48a1.711 1.711 0 01-.1.33c-.17.44-.43.83-.749 1.11v.14c.03.35-.09.59.83 1 .929.41 2.317.84 2.597 1.5.29.66.17 1.04.17 1.04H13.66v.01c-.05-.24-.14-.5-.25-.76-.36-.86-1.119-1.33-2.687-2-.14-.06-.59-.25-.6-.25-.21-.09-.36-.15-.5-.22.02-.1.02-.2.03-.31 0-.04.01-.08.01-.13-.07-.06-.13-.12-.19-.19.22-.32.4-.67.54-1.05.02-.06.02-.06.03-.1.29-.23.48-.57.59-.96.16-.33.25-.73.21-1.16-.03-.4-.16-.76-.37-1.03-.02-.53-.07-1.13-.15-1.54-.01-.06-.02-.12-.03-.19.23-.06.48-.09.72-.09z"];

var innerJoin = ["M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8s.8 3.6 2.1 4.7c-.5.2-1 .3-1.6.3-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1.1.1 1.6.3zm-1.96 8.68C3.92 10.83 3.5 9.46 3.5 8s.42-2.83 1.14-3.98C2.6 4.2 1 5.91 1 8s1.6 3.8 3.64 3.98zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3zm.35 1.02c.73 1.15 1.14 2.52 1.14 3.98s-.42 2.83-1.14 3.98c2.04-.18 3.64-1.9 3.64-3.98s-1.6-3.8-3.64-3.98z"];

var insert = ["M5 9h2v2c0 .6.4 1 1 1s1-.4 1-1V9h2c.6 0 1-.4 1-1s-.4-1-1-1H9V5c0-.6-.4-1-1-1s-1 .4-1 1v2H5c-.6 0-1 .4-1 1s.4 1 1 1zm10-9H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12z"];

var intersection = ["M10 3c-.92 0-1.76.26-2.5.69C6.76 3.26 5.92 3 5 3 2.24 3 0 5.24 0 8s2.24 5 5 5c.92 0 1.76-.26 2.5-.69.74.43 1.58.69 2.5.69 2.76 0 5-2.24 5-5s-2.24-5-5-5zm-4.1 7.85c-.29.09-.59.15-.9.15-1.66 0-3-1.34-3-3s1.34-3 3-3c.31 0 .61.06.9.15C5.33 5.96 5 6.94 5 8s.33 2.04.9 2.85zM10 11c-.31 0-.61-.06-.9-.15.57-.81.9-1.79.9-2.85s-.33-2.04-.9-2.85c.29-.09.59-.15.9-.15 1.66 0 3 1.34 3 3s-1.34 3-3 3z"];

var ipAddress = ["M5 2.66C5 4.14 8 8 8 8s3-3.86 3-5.34C10.99 1.2 9.66 0 8 0S5 1.2 5 2.66zM7 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM10.5 10H8v5h1v-4h1v1H9v1h2v-3h-.5zM2 9h12c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm4 1v5h1v-5H6z"];

var issue = ["M8 16A8 8 0 118 0a8 8 0 010 16zm0-2A6 6 0 108 2a6 6 0 000 12zm1-2H7v-2h2v2zm0-3H7V4h2v5z"];

var issueClosed = ["M9.296.104a2.99 2.99 0 00-1.003.664 2.987 2.987 0 00-.75 1.25 6 6 0 106.28 4.527c.043-.039.085-.079.127-.12l1.456-1.456A8 8 0 119.296.105zm2.532 5.2a.997.997 0 01-.707-.294L9.707 3.596a1 1 0 011.414-1.414l.707.707 1.768-1.768a1 1 0 111.414 1.415L12.536 5.01a.997.997 0 01-.708.293zM9 12H7v-2h2v2zm0-3H7V4h2v5z"];

var issueNew = ["M10.568.421c-.01.04-.018.08-.026.121-.837.156-1.53.73-1.85 1.497a6 6 0 105.27 5.273 2.51 2.51 0 001.496-1.854c.04-.008.081-.016.121-.026A8 8 0 1110.568.421zM9 12H7v-2h2v2zm0-3H7V4h2v5zm1-6c0-.55.45-1 1-1h1V1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1.005c0 .55-.45 1-1 1s-1-.45-1-1V4h-1c-.55 0-1-.45-1-1z"];

var italic = ["M9.8 4H11c.5 0 1-.4 1-1s-.4-1-1-1H7c-.5 0-1 .4-1 1s.4 1 1 1h.8l-1.6 8H5c-.5 0-1 .4-1 1s.4 1 1 1h4c.5 0 1-.4 1-1s-.4-1-1-1h-.8l1.6-8z"];

var joinTable = ["M15 5h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-5-1v2H6V4h4zm0 6H6V7h4v3zM2 4h3v2H2V4zm0 5V7h3v2H2zm4 4v-2h4v2H6zm8 0h-3v-2h3v2zm0-3h-3V8h3v2z"];

var key$1 = ["M11 0C8.24 0 6 2.24 6 5c0 1.02.31 1.96.83 2.75L.29 14.29a1.003 1.003 0 001.42 1.42L3 14.41l1.29 1.29c.18.19.43.3.71.3s.53-.11.71-.29l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71L6.41 11l1.83-1.83c.8.52 1.74.83 2.76.83 2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-.23 0-.45-.03-.66-.08-.01 0-.02-.01-.03-.01-.21-.05-.41-.12-.6-.21a3.014 3.014 0 01-1.62-2c0-.01-.01-.02-.01-.03C8.03 5.45 8 5.23 8 5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3z"];

var keyBackspace = ["M15 2H6c-.28 0-.53.11-.71.29l-5 5C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l5 5c.18.18.43.29.71.29h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-2.29 7.29a1.003 1.003 0 01-1.42 1.42L10 9.41 8.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71L8.59 8l-1.3-1.29a1.003 1.003 0 011.42-1.42L10 6.59l1.29-1.29c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L11.41 8l1.3 1.29z"];

var keyCommand = ["M12 9h-1V7h1c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3v1H7V4c0-1.66-1.34-3-3-3S1 2.34 1 4s1.34 3 3 3h1v2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-1h2v1c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 4H7V7h2v2zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var keyControl = ["M12.71 5.29l-4-4C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var keyDelete = ["M15.71 7.29l-5-5A.997.997 0 0010 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h9c.28 0 .53-.11.71-.29l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zm-7 2a1.003 1.003 0 01-1.42 1.42L6 9.41 4.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71L4.59 8l-1.3-1.29a1.003 1.003 0 011.42-1.42L6 6.59 7.29 5.3c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L7.41 8l1.3 1.29z"];

var keyEnter = ["M14 2c-.55 0-1 .45-1 1v3c0 1.66-1.34 3-3 3H4.41L5.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L4.41 11H10c2.76 0 5-2.24 5-5V3c0-.55-.45-1-1-1z"];

var keyEscape = ["M2 7c.55 0 1-.45 1-1V4.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 3H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7-5.9v2A5 5 0 113.1 9h-2c.49 3.39 3.38 6 6.9 6 3.87 0 7-3.13 7-7 0-3.52-2.61-6.41-6-6.9z"];

var keyOption = ["M11 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm4 8h-3.43L5.86 2.49h-.02A.975.975 0 005 2H1c-.55 0-1 .45-1 1s.45 1 1 1h3.43l5.71 9.51.01-.01c.18.3.49.5.85.5h4c.55 0 1-.45 1-1s-.45-1-1-1z"];

var keyShift = ["M13.71 7.29l-5-5C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-5 5A1.003 1.003 0 003 9h2v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h2a1.003 1.003 0 00.71-1.71z"];

var keyTab = ["M15 10H4.41L5.7 8.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L2 9.59V8c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 12H15c.55 0 1-.45 1-1s-.45-1-1-1zm0-9c-.55 0-1 .45-1 1v1.59L11.71 1.3A.965.965 0 0011 1a1.003 1.003 0 00-.71 1.71L11.59 4H1c-.55 0-1 .45-1 1s.45 1 1 1h10.59L10.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L14 6.41V8c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"];

var knownVehicle = ["M15 3a.997.997 0 00-.707.293L12 5.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a.997.997 0 001.414 0l3-3A1 1 0 0015 3zm-.879 6.121l-.007-.007c-.313.309-.69.552-1.114.702V10h-.998H12h-1v-.184c-.424-.15-.8-.395-1.112-.704l-.01.01-2-2 .012-.012A2.978 2.978 0 017.184 6H3c-.176 0-.06-.824 0-1l.73-1.63C3.79 3.192 3.823 3 4 3H7.78C8.328 2.39 9.115 2 10 2c.768 0 1.461.293 1.987.77l.844-.844c-.238-.244-.524-.442-.794-.524C12.037 1.402 10.72 1 8 1c-2.72 0-4.037.402-4.037.402-.508.155-1.078.711-1.268 1.237l-.763 2.117H.88c-.484 0-.88.423-.88.939s.396.939.88.939h.375L1 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.384 1 1 1s1-.343 1-1V9l-.003-.754-.876.875zM5.001 10H3V8h2v2z"];

var labTest = ["M11 1a1 1 0 010 2v3l3 7v1.25a.75.75 0 01-.75.75H2.75a.75.75 0 01-.75-.75V13l3-7V3a1 1 0 110-2h6zM9 3H7v3l-1.714 4h5.428L9 6V3z"];

var label = ["M11 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7l-5-5zm3 10H2V4h8v2H3v1h7v1h4v4zm-3-5V4l3 3h-3zm-8 3h10V9H3v1z"];

var layer = ["M16 8c0-.37-.21-.68-.51-.85l.01-.01-7-4-.01.01C8.34 3.06 8.18 3 8 3s-.34.06-.49.15l-.01-.02-7 4 .01.01C.21 7.32 0 7.63 0 8s.21.68.51.85l-.01.01 7 4 .01-.01c.15.09.31.15.49.15s.34-.06.49-.15l.01.01 7-4-.01-.01c.3-.17.51-.48.51-.85z"];

var layerOutline = ["M7.504 3.132l-7 4a1 1 0 000 1.736l7 4a1 1 0 00.992 0l7-4a1 1 0 000-1.736l-7-4a1 1 0 00-.992 0zM8 5.152L12.983 8 8 10.847 3.016 8 8 5.152z"];

var layers = ["M.55 4.89l7 3c.14.07.29.11.45.11.16 0 .31-.04.45-.11l7-3a.998.998 0 00-.06-1.81L8.4.08a1.006 1.006 0 00-.79 0l-6.99 3a.992.992 0 00-.07 1.81zM15 11c-.16 0-.31.04-.45.11L8 14l-6.55-2.9c-.14-.06-.29-.1-.45-.1-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3c.14.07.29.11.45.11.16 0 .31-.04.45-.11l7-3c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1zm0-4c-.16 0-.31.04-.45.11L8 10 1.45 7.11A.997.997 0 001 7c-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3c.14.07.29.11.45.11.16 0 .31-.04.45-.11l7-3c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1z"];

var layout = ["M14 4c-1.1 0-2 .9-2 2 0 .47.17.9.44 1.24l-.68.91A1.996 1.996 0 009.07 9.5H7.93C7.71 8.64 6.93 8 6 8c-.47 0-.9.17-1.24.44l-.91-.68c.1-.23.15-.49.15-.76 0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .37.11.71.28 1.01L3.01 5.28C2.71 5.11 2.37 5 2 5 .9 5 0 5.9 0 7s.9 2 2 2c.47 0 .9-.17 1.24-.44l.91.68c-.1.23-.15.49-.15.76 0 .37.11.71.28 1.01l-1.27 1.27C2.71 12.11 2.37 12 2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.37-.11-.71-.28-1.01l1.27-1.27c.3.17.64.28 1.01.28.93 0 1.71-.64 1.93-1.5h1.14c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2 0-.47-.17-.9-.44-1.24l.68-.91c.23.1.49.15.76.15 1.1 0 2-.9 2-2s-.9-2-2-2z"];

var layoutAuto = ["M14 9.5c-.56 0-1.06.23-1.42.59L8.99 8l3.59-2.09A2.002 2.002 0 0016 4.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .19.03.37.08.54L8.5 7.13v-3.2c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v3.2L3.92 5.04c.05-.17.08-.35.08-.54 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.56 0 1.06-.23 1.42-.59L7.01 8l-3.59 2.09A2.002 2.002 0 000 11.5c0 1.1.9 2 2 2s2-.9 2-2c0-.19-.03-.37-.08-.54L7.5 8.87v3.2c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-3.2l3.58 2.09c-.05.17-.08.35-.08.54 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"];

var layoutBalloon = ["M14 11c-.2 0-.38.04-.56.09L12.42 9.4c.36-.36.58-.85.58-1.4 0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .55.22 1.04.58 1.4l-1.01 1.69C11.38 6.04 11.2 6 11 6c-.93 0-1.71.64-1.93 1.5H6.93C6.71 6.64 5.93 6 5 6c-.2 0-.38.04-.56.09L3.42 4.4C3.78 4.04 4 3.55 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.2 0 .38-.04.56-.09L3.58 6.6C3.22 6.96 3 7.45 3 8c0 .55.22 1.04.58 1.4l-1.01 1.69C2.38 11.04 2.2 11 2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09.93 0 1.71-.64 1.93-1.5h2.14c.22.86 1 1.5 1.93 1.5.2 0 .38-.04.56-.09l1.01 1.69c-.35.36-.57.85-.57 1.4 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"];

var layoutCircle = ["M14.16 6.02c-.12-.36-.26-.7-.43-1.03.17-.29.27-.63.27-.99 0-1.1-.9-2-2-2-.36 0-.7.1-.99.27-.33-.17-.67-.31-1.03-.43A1.987 1.987 0 008 0C6.95 0 6.1.81 6.02 1.84c-.36.12-.7.26-1.03.43C4.7 2.1 4.36 2 4 2c-1.1 0-2 .9-2 2 0 .36.1.7.27.99-.17.33-.31.67-.43 1.03C.81 6.1 0 6.95 0 8c0 1.05.81 1.9 1.84 1.98.12.36.26.7.43 1.03-.17.29-.27.63-.27.99 0 1.1.9 2 2 2 .36 0 .7-.1.99-.27.33.17.67.32 1.03.43C6.1 15.19 6.95 16 8 16c1.05 0 1.9-.81 1.98-1.84.36-.12.7-.26 1.03-.43.29.17.63.27.99.27 1.1 0 2-.9 2-2 0-.36-.1-.7-.27-.99.17-.33.31-.67.43-1.03C15.19 9.9 16 9.05 16 8c0-1.05-.81-1.9-1.84-1.98zm-.99 3.79c-.05.16-.11.31-.17.46-.3-.17-.64-.27-1-.27-1.1 0-2 .9-2 2 0 .36.1.7.27 1-.15.07-.3.12-.46.17C9.5 12.48 8.81 12 8 12s-1.5.48-1.81 1.17c-.16-.06-.32-.11-.46-.17.17-.3.27-.64.27-1 0-1.1-.9-2-2-2-.36 0-.7.1-1 .27-.07-.15-.12-.3-.17-.46C3.52 9.5 4 8.81 4 8s-.48-1.5-1.17-1.81c.06-.16.11-.32.17-.46.3.17.64.27 1 .27 1.1 0 2-.9 2-2 0-.36-.1-.7-.27-1 .15-.07.3-.12.46-.17C6.5 3.52 7.19 4 8 4s1.5-.48 1.81-1.17c.16.06.32.11.46.17-.17.3-.27.64-.27 1 0 1.1.9 2 2 2 .36 0 .7-.1 1-.27.07.15.12.3.17.46C12.48 6.5 12 7.19 12 8s.48 1.5 1.17 1.81z"];

var layoutGrid = ["M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var layoutGroupBy = ["M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 1C.9 1 0 1.9 0 3s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var layoutHierarchy = ["M14.5 12.07V9.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5H9.93c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v2.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8c0 .93.64 1.71 1.5 1.93v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z"];

var layoutLinear = ["M14 6c-.93 0-1.71.64-1.93 1.5H9.93C9.71 6.64 8.93 6 8 6s-1.71.64-1.93 1.5H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.93 0 1.71-.64 1.93-1.5h2.13C6.29 9.36 7.07 10 8 10s1.71-.64 1.93-1.5h2.13c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2C16 6.9 15.1 6 14 6z"];

var layoutSkewGrid = ["M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var layoutSortedClusters = ["M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var learning = ["M8.441 1.104a.985.985 0 00-.882 0L.365 5c-.487.253-.487.747 0 1L7.56 9.896a.985.985 0 00.882 0L15.635 6c.487-.253.487-.747 0-1L8.44 1.104z", "M14 5.5l.016 4.514c.002.548.447.99.994.99a.99.99 0 00.99-.99V5.5h-2zM3.371 9.047l4.387 2.432a.5.5 0 00.485 0l4.39-2.432a.25.25 0 01.371.218v2.955a.25.25 0 01-.134.222l-4.635 2.436a.5.5 0 01-.466 0l-4.635-2.436A.25.25 0 013 12.22V9.265a.25.25 0 01.371-.218z"];

var leftJoin = ["M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3zm.35 1.02c.73 1.15 1.14 2.52 1.14 3.98s-.42 2.83-1.14 3.98c2.04-.18 3.64-1.9 3.64-3.98s-1.6-3.8-3.64-3.98z"];

var lessThan = ["M13.287 5.958a1 1 0 00-.574-1.916l-10 3c-.95.285-.95 1.631 0 1.916l10 3a1 1 0 00.574-1.916L6.48 8l6.807-2.042z"];

var lessThanOrEqualTo = ["M13.287 3.958a1 1 0 00-.575-1.916l-10 3c-.95.285-.95 1.63 0 1.916l10 3a1 1 0 00.575-1.916L6.48 6l6.807-2.042zM13 12H3a1 1 0 000 2h10a1 1 0 000-2z"];

var lifesaver = ["M9.405 11.746C8.968 11.91 8.495 12 8 12c-.494 0-.968-.09-1.405-.254l-.702 1.873C6.548 13.865 7.258 14 8 14c.742 0 1.452-.135 2.107-.38l-.702-1.874zm2.341-2.341l1.873.702C13.865 9.452 14 8.742 14 8c0-.742-.135-1.452-.38-2.107l-1.874.702c.164.437.254.91.254 1.405 0 .494-.09.968-.254 1.405zM9.405 4.254l.702-1.873A5.987 5.987 0 008 2c-.742 0-1.452.135-2.107.38l.702 1.874C7.032 4.09 7.505 4 8 4c.494 0 .968.09 1.405.254zM4.254 6.595L2.38 5.893A5.987 5.987 0 002 8c0 .742.135 1.452.38 2.107l1.874-.702A3.991 3.991 0 014 8c0-.494.09-.968.254-1.405zM8 16A8 8 0 118 0a8 8 0 010 16zm0-6a2 2 0 100-4 2 2 0 000 4z"];

var lightbulb = ["M9.01 14h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.44-1-1-1zm1-3h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.44-1-1-1zm-2-11C5.26 0 3.03 1.95 3.03 4.35c0 2.37 1.63 2.64 1.94 5.22 0 .24.22.44.5.44h5.09c.28 0 .5-.19.5-.44C11.37 6.99 13 6.72 13 4.35 13 1.95 10.77 0 8.01 0z"];

var lightning = ["M7 9H5a1 1 0 01-1-1L4.89.876A1 1 0 015.884 0h4.27a.847.847 0 01.793 1.144L9.125 6h2.05a.825.825 0 01.754 1.16L8.16 15.64A.606.606 0 017 15.394V9z"];

var link = ["M4.99 11.99c.28 0 .53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42l-6 6a1.003 1.003 0 00.71 1.71zm3.85-2.02L6.4 12.41l-1 1-.01-.01c-.36.36-.85.6-1.4.6-1.1 0-2-.9-2-2 0-.55.24-1.04.6-1.4l-.01-.01 1-1 2.44-2.44c-.33-.1-.67-.16-1.03-.16-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.73.72-1.19 1.71-1.19 2.81 0 2.21 1.79 4 4 4 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02c.73-.72 1.19-1.71 1.19-2.81 0-.35-.06-.69-.15-1.02zm7.15-5.98c0-2.21-1.79-4-4-4-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.72.72-1.19 1.71-1.19 2.81 0 .36.06.69.15 1.02l2.44-2.44 1-1 .01.01c.36-.36.85-.6 1.4-.6 1.1 0 2 .9 2 2 0 .55-.24 1.04-.6 1.4l.01.01-1 1-2.43 2.45c.33.09.67.15 1.02.15 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02a3.92 3.92 0 001.19-2.81z"];

var list = ["M1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 10H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var listColumns = ["M6 1c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h5zm9-12c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5zm0 4c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5z"];

var listDetailView = ["M6 9H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm9-12h-5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM6 5H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z"];

var locate = ["M15 7h-.09A6.98 6.98 0 009 1.1V1c0-.55-.45-1-1-1S7 .45 7 1v.09A6.98 6.98 0 001.1 7H1c-.55 0-1 .45-1 1s.45 1 1 1h.1A6.969 6.969 0 007 14.91V15c0 .55.45 1 1 1s1-.45 1-1v-.09A6.98 6.98 0 0014.9 9h.1c.55 0 1-.45 1-1s-.45-1-1-1zm-6.02 5.9c-.05-.5-.46-.9-.98-.9s-.93.4-.98.9A5.017 5.017 0 013.1 8.98c.5-.05.9-.46.9-.98s-.4-.93-.9-.98A5.017 5.017 0 017.02 3.1c.05.5.46.9.98.9s.93-.4.98-.9c1.97.39 3.52 1.95 3.92 3.92-.5.05-.9.46-.9.98s.4.93.9.98a5.017 5.017 0 01-3.92 3.92zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var lock = ["M13.96 7H12V3.95C12 1.77 10.21 0 8 0S4 1.77 4 3.95V7H1.96c-.55 0-.96.35-.96.9v6.91c0 .54.41 1.19.96 1.19h12c.55 0 1.04-.65 1.04-1.19V7.9c0-.55-.49-.9-1.04-.9zM6 7V3.95c0-1.09.9-1.97 2-1.97s2 .88 2 1.97V7H6z"];

var logIn = ["M11 8c0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L7.59 7H1c-.55 0-1 .45-1 1s.45 1 1 1h6.59L6.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71zm4-8H9c-.55 0-1 .45-1 1s.45 1 1 1h5v12H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var logOut = ["M7 14H2V2h5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.71-6.71l-3-3a1.003 1.003 0 00-1.42 1.42L12.59 7H6c-.55 0-1 .45-1 1s.45 1 1 1h6.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var lowVoltagePole = ["M8 0a1 1 0 00-1 1v1H3v-.5a.5.5 0 00-1 0V2a1 1 0 000 2v1h-.5a.5.5 0 000 1h2a.5.5 0 000-1H3V4h4v11a1 1 0 102 0V4h4v1h-.5a.5.5 0 000 1h2a.5.5 0 000-1H14V4a1 1 0 100-2v-.5a.5.5 0 00-1 0V2H9V1a1 1 0 00-1-1z"];

var manual = ["M15.99 1.13c-.02-.41-.33-.77-.78-.87C12.26-.36 9.84.13 8 1.7 6.16.13 3.74-.36.78.26.33.35.03.72.01 1.13H0v12c0 .08 0 .17.02.26.12.51.65.82 1.19.71 2.63-.55 4.59-.04 6.01 1.57.02.03.06.04.08.06.02.02.03.04.05.06.04.03.09.04.13.07.05.03.09.05.14.07.11.04.23.07.35.07h.04c.12 0 .24-.03.35-.07.05-.02.09-.05.14-.07.04-.02.09-.04.13-.07.02-.02.03-.04.05-.06.03-.02.06-.03.08-.06 1.42-1.6 3.39-2.12 6.01-1.57.54.11 1.07-.21 1.19-.71.04-.09.04-.18.04-.26l-.01-12zM7 12.99c-1.4-.83-3.07-1.14-5-.93V1.96c2.11-.28 3.75.2 5 1.46v9.57zm7-.92c-1.93-.21-3.6.1-5 .93V3.42c1.25-1.26 2.89-1.74 5-1.46v10.11z"];

var manuallyEnteredData = ["M1 8h3.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm14.49-4.01c.31-.32.51-.76.51-1.24C16 1.78 15.22 1 14.25 1c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.45-1.43zM1 4h7.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 6c-.55 0-1 .45-1 1 0 .48.35.86.8.96L2.76 10H1zm9.95-6.43l-6.69 6.69 2.47 2.47 6.69-6.69-2.47-2.47zm4.25 2.47L13.24 8H15c.55 0 1-.45 1-1 0-.48-.35-.86-.8-.96zM2 15l3.86-1.39-2.46-2.44L2 15zm13-5h-3.76l-2 2H15c.55 0 1-.45 1-1s-.45-1-1-1z"];

var manyToMany = ["M3 3a1 1 0 100 2 1 1 0 000-2zm3 1c0 .047-.001.094-.003.14.255.081.538.209.832.41.406.28.8.676 1.171 1.225.37-.549.765-.945 1.171-1.224a3.14 3.14 0 01.832-.411 3 3 0 11.77 1.87 1.038 1.038 0 00-.47.19c-.291.2-.752.672-1.227 1.8.475 1.128.936 1.6 1.227 1.8.183.126.336.173.47.19a3 3 0 11-.77 1.87 3.141 3.141 0 01-.832-.41c-.406-.28-.8-.676-1.171-1.225-.37.549-.765.945-1.171 1.224-.294.202-.577.33-.832.411a3 3 0 11-.77-1.87c.134-.017.287-.064.47-.19.291-.2.752-.672 1.227-1.8-.475-1.128-.936-1.6-1.227-1.8a1.038 1.038 0 00-.47-.19A3 3 0 116 4zm6 0a1 1 0 112 0 1 1 0 01-2 0zm-9 7a1 1 0 100 2 1 1 0 000-2zm9 1a1 1 0 112 0 1 1 0 01-2 0z"];

var manyToOne = ["M3 2a1 1 0 100 2 1 1 0 000-2zm0-2c1.385 0 2.551.94 2.896 2.215.168.044.34.096.51.158 1.076.394 2.237 1.242 2.575 2.93.161.809.664 1.211 1.293 1.443a3 3 0 110 2.508c-.629.232-1.132.634-1.293 1.442-.338 1.69-1.499 2.537-2.575 2.93a5.436 5.436 0 01-.51.159A3.001 3.001 0 010 13a3 3 0 015.726-1.254c.629-.232 1.132-.634 1.293-1.442.216-1.076.765-1.81 1.413-2.304-.648-.493-1.197-1.228-1.413-2.304-.161-.808-.664-1.21-1.293-1.442A3 3 0 113 0zm1 13a1 1 0 10-2 0 1 1 0 002 0zm8-5a1 1 0 102 0 1 1 0 00-2 0z"];

var map = ["M15.55 3.17l-4.49-3A.975.975 0 009.99.15L5.53 2.82 1.56.17A1.003 1.003 0 000 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 001.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0016 15V4c0-.35-.18-.65-.45-.83zM5 13.46l-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6zm5-2.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01L10 2.47v8.67zm4 1.99l-2.94-1.96c-.02-.01-.04-.02-.05-.03v-8.6l3 2v8.59z"];

var mapCreate = ["M14 6.82v6.32l-2.94-1.96c-.02-.01-.04-.02-.05-.03V6.22c-.08-.07-.15-.16-.22-.24-.28-.02-.54-.08-.79-.16v5.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01l2.05-1.23C8.02 3.42 8 3.21 8 3c0-.98.47-1.84 1.2-2.39l-3.67 2.2L1.56.17A1.003 1.003 0 000 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 001.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0016 15V5.82c-.25.09-.52.14-.8.16-.33.36-.73.67-1.2.84zm-9 6.64l-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6zM11 4h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1z"];

var mapMarker = ["M8.46 0C5.42 0 2.95 2.39 2.95 5.33 2.95 8.28 8.46 16 8.46 16s5.51-7.72 5.51-10.67C13.96 2.39 11.5 0 8.46 0zm0 8a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"];

var maximize = ["M5.99 8.99c-.28 0-.53.11-.71.29l-3.29 3.29v-1.59c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41L6.7 10.7a1.003 1.003 0 00-.71-1.71zm9-9h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.3a.99.99 0 00-.29.7 1.003 1.003 0 001.71.71l3.29-3.29V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z"];

var media = ["M11.99 6.99c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3-5h-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-10c0-.55-.45-1-1-1zm-1 9l-5-3-1 2-3-4-3 5v-7h12v7z"];

var menu = ["M1 4h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 8H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var menuClosed = ["M14.99 6.99h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm-12-2c-.28 0-.53.11-.71.29l-2 2a1.014 1.014 0 000 1.42l2 2a1.003 1.003 0 001.71-.71v-4c0-.55-.45-1-1-1zm3-1h9c.55 0 1-.45 1-1s-.45-1-1-1h-9c-.55 0-1 .45-1 1s.45 1 1 1zm9 8h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1z"];

var menuOpen = ["M9.99 11.99h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm5.71 5.3l-2-2a1.003 1.003 0 00-1.71.71v4a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71z"];

var mergeColumns = ["M5.71 5.29a1.003 1.003 0 00-1.42 1.42l.3.29H2V2h3v1.51c.52.06.99.29 1.34.65l.66.66V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.82l-.66.66c-.35.35-.82.59-1.34.65V14H2V9h2.59l-.3.29a1.003 1.003 0 001.42 1.42l2-2C7.89 8.53 8 8.28 8 8c0-.28-.11-.53-.29-.71l-2-2zM15 0h-5c-.55 0-1 .45-1 1v3.82l.66-.66c.35-.35.82-.59 1.34-.65V2h3v5h-2.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C8.11 7.47 8 7.72 8 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14v5h-3v-1.51c-.52-.06-.99-.29-1.34-.65L9 11.18V15c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var mergeLinks = ["M8 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 3c-.93 0-1.71.64-1.93 1.5H11V3c0-1.66-1.34-3-3-3S5 1.34 5 3v4.5H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.93 0 1.71-.64 1.93-1.5H5V13c0 1.66 1.34 3 3 3s3-1.34 3-3V8.5h1.07c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2s-.9-2-2-2zm-4 7c0 1.1-.9 2-2 2s-2-.9-2-2V3c0-1.1.9-2 2-2s2 .9 2 2v10z"];

var minimize = ["M15.99.99a1.003 1.003 0 00-1.71-.71l-3.29 3.29V1.99c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H12.4l3.3-3.29c.18-.18.29-.43.29-.71zm-10 8h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.29 14.28a1.003 1.003 0 001.42 1.42L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4a1.02 1.02 0 00-1.01-1.01z"];

var minus = ["M13 7H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z"];

var mobilePhone = ["M12 0H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-3H5V3h6v9z"];

var mobileVideo = ["M15 4c-.28 0-.53.11-.71.29L12 6.59V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V9.41l2.29 2.29c.18.19.43.3.71.3.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"];

var modal = ["M15 1a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h14zm-1 4H2v8h12V5zm-3-3H9v2h2V2zm3 0h-2v2h2V2z"];

var modalFilled = ["M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm1 4H0V3h16v2zm-3-2h-2V1h2v2z"];

var moon = ["M15 11.38A7.835 7.835 0 017.85 16C3.51 16 0 12.49 0 8.15 0 4.97 1.89 2.23 4.62 1c-.45.99-.7 2.08-.7 3.23a7.85 7.85 0 007.85 7.85c1.15 0 2.24-.25 3.23-.7z"];

var more = ["M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z"];

var mountain = ["M16 13H3l6-9h1l2 2h1l3 7zm-2.5-3.5l-1-2.5h-1l-2-2-3 4.5L9 8l1 1 1-1 2.5 1.5zM5.94 7l-4.122 6H0l5-6h.94z"];

var move = ["M15.71 7.29l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9V3.41l.29.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C8.53.11 8.28 0 8 0s-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l.29-.3V7H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 9H7v3.59l-.29-.29A.965.965 0 006 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2a1.003 1.003 0 00-1.42-1.42l-.29.3V9h3.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var mugshot = ["M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14h-.15c-.03-.09-.04-.16-.08-.25-.34-.79-2.01-1.31-3.12-1.8-1.11-.49-.96-.79-1-1.2-.01-.06-.01-.12-.01-.18.38-.34.69-.8.89-1.33 0 0 .01-.03.01-.04.04-.12.08-.24.11-.36.25-.05.4-.33.46-.59.06-.1.18-.36.15-.65-.04-.37-.19-.55-.35-.62v-.06c0-.48-.04-1.16-.13-1.61-.02-.12-.05-.25-.08-.37-.16-.55-.51-1.05-.96-1.39C9.26 3.19 8.6 3 8 3c-.59 0-1.26.19-1.73.55-.45.35-.8.84-.96 1.39-.04.13-.06.25-.08.38-.09.45-.13 1.13-.13 1.61v.06c-.18.06-.33.24-.37.62-.03.29.09.54.15.65.06.26.21.54.47.59.03.12.07.25.11.36 0 .01.01.02.01.02v.01c.21.54.53 1.01.92 1.35 0 .05-.01.11-.01.16-.04.41.08.7-1.03 1.2-1.11.49-2.77 1.01-3.12 1.8-.04.09-.05.16-.08.25H2V2h12v12z"];

var multiSelect = ["M12 3.98H4c-.55 0-1 .45-1 1v1h8v5h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm3-3H7c-.55 0-1 .45-1 1v1h8v5h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm-6 6H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm-1 5H2v-3h6v3z"];

var music = ["M15 0c-.07 0-.13.03-.19.04V.02l-10 2v.02C4.35 2.13 4 2.52 4 3v9.12c-.31-.07-.65-.12-1-.12-1.66 0-3 .9-3 2s1.34 2 3 2 3-.9 3-2V6.32l8-1.6v5.4c-.31-.07-.65-.12-1-.12-1.66 0-3 .9-3 2s1.34 2 3 2 3-.9 3-2V1c0-.55-.45-1-1-1z"];

var nest = ["M2 2c.55 0 1 .45 1 1v3c0 1.66 1.34 3 3 3h5.59L10.3 7.71A.965.965 0 0110 7a1.003 1.003 0 011.71-.71l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-3 3a1.003 1.003 0 01-1.42-1.42l1.3-1.29H6c-2.76 0-5-2.24-5-5V3c0-.55.45-1 1-1z"];

var newDrawing = ["M14.9 11c.6 0 1 .5 1 1 0 .257-.073.44-.22.614l-.08.086-3 3c-.2.2-.4.3-.7.3-.5 0-1-.4-1-1 0-.257.073-.44.22-.614l.08-.086 3-3c.2-.2.4-.3.7-.3zM1.3.1l6.734 2.45a3.005 3.005 0 002.095 3.322 3.005 3.005 0 003.401 2.081L13.9 9.8v.2c0 .257-.073.44-.22.614l-.08.086-3 3c-.171.171-.343.27-.577.294L9.9 14h-.2l-5-1-.1-.01c-.231-.05-.45-.26-.56-.49L4 12.4l-4-11 .3-.3 5.8 5.8c-.1.2-.2.4-.2.6 0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5S8.2 6 7.4 6c-.16 0-.32.064-.48.14l-.12.06L1 .4l.3-.3zM13 0c.55 0 1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .503-.376.922-.861.99l-.013.002A.999.999 0 0113 6l.097-.006-.027.004a1 1 0 01-.037.001L13 6c-.55 0-1-.45-1-1V4h-1a.993.993 0 01-.855-.482A1 1 0 0110 3c0-.55.45-1 1-1h1V1c0-.55.45-1 1-1z"];

var newGridItem = ["M6 0H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm5 14c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zM6 9H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm9 4c-.55 0-1 .45-1 1-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm-4-4h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1c.55 0 1-.45 1-1s-.45-1-1-1zm4-9h-5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm0 9h-1c-.55 0-1 .45-1 1s.45 1 1 1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1z"];

var newLayer = ["M13.982 6.272l1.518.868-.01.01c.3.17.51.48.51.85s-.21.68-.51.85l.01.01-7 4-.01-.01A.94.94 0 018 13a.94.94 0 01-.49-.15l-.01.01-7-4 .01-.01A.977.977 0 010 8c0-.37.21-.68.51-.86L.5 7.13l7-4 .01.02A.94.94 0 018 3c.086 0 .168.014.246.038a2 2 0 105.736 3.234zM14 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1z"];

var newLayers = ["M13 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5H9a1 1 0 110-2h2V1a1 1 0 012 0v2zm-3-1.983V2H9a2 2 0 100 4h1v1c0 .279.057.544.16.785l-1.71.855c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5a.992.992 0 01.07-1.81l6.99-3a1.006 1.006 0 01.79 0l1.6.687zm.91 7.66a2 2 0 003.085-1.54l.555-.277c.14-.07.29-.11.45-.11.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5C.23 8.48 0 8.14 0 7.75c0-.55.45-1 1-1 .16 0 .31.04.45.11L8 10.13l2.91-1.453zM15 10.25c.55 0 1 .45 1 1 0 .39-.23.73-.55.89l-7 3.5c-.14.07-.29.11-.45.11-.16 0-.31-.04-.45-.11l-7-3.5c-.32-.16-.55-.5-.55-.89 0-.55.45-1 1-1 .16 0 .31.04.45.1L8 13.63l6.55-3.27c.14-.07.29-.11.45-.11z"];

var newLink = ["M15 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3.5 6a2.5 2.5 0 00-2.45 2h-4.1a2.5 2.5 0 100 1h4.1a2.5 2.5 0 102.45-3z"];

var newObject = ["M8 4c0 .6.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1V5h2c.6 0 1-.4 1-1s-.4-1-1-1h-2V1c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-.6 0-1 .5-1 1zm6.5 2.5V7c0 1.4-1.1 2.5-2.5 2.5S9.5 8.4 9.5 7v-.5H9C7.6 6.5 6.5 5.4 6.5 4S7.6 1.5 9 1.5h.5V1c0-.3.1-.6.1-.8C9.1.1 8.6 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8c0-.6-.1-1.3-.2-1.9-.4.3-.8.4-1.3.4z"];

var newPerson = ["M9.12 12.69c-1.17-.53-1.01-.85-1.05-1.29-.01-.06-.01-.12-.01-.19.4-.37.73-.87.94-1.44 0 0 .01-.03.01-.04.05-.14.09-.27.12-.4.27-.06.43-.36.49-.63.06-.11.19-.39.16-.7-.04-.41-.2-.6-.38-.68v-.07c0-.51-.05-1.25-.14-1.74-.02-.13-.05-.27-.09-.4-.17-.6-.53-1.14-1.01-1.52C7.66 3.2 6.96 3 6.33 3c-.62 0-1.33.2-1.82.59-.49.38-.85.92-1.02 1.52-.04.13-.07.26-.09.4-.09.49-.13 1.23-.13 1.74v.06c-.19.08-.35.27-.39.68-.03.31.1.59.16.7.06.28.22.59.5.64.03.14.07.27.11.4 0 .01.01.02.01.02v.01c.22.59.55 1.1.96 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.09 1.29-1.17.53-2.93 1.1-3.29 1.95-.35.87-.2 1.37-.2 1.37h12.6s.15-.5-.22-1.36c-.36-.85-2.12-1.42-3.29-1.95zM14.89 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"];

var newPrescription = ["M9.82 11.66l2.48-2.87c.12-.2.13-.37.04-.53-.11-.19-.3-.26-.52-.26h-1.29c-.27 0-.49.13-.63.34L8.44 9.9 6.95 8a.482.482 0 00-.08-.1L5.82 6.55c.57-.24 1.04-.57 1.42-1.01.49-.57.74-1.27.74-2.08 0-.51-.1-.99-.32-1.42-.21-.43-.51-.8-.89-1.11A4.1 4.1 0 005.42.24C4.91.08 4.34 0 3.72 0H.61C.26 0 0 .23 0 .56v9.89c0 .33.26.55.61.55h.8c.36 0 .61-.23.61-.56V6.99H3.3l3.73 4.74-2.71 3.48c-.12.2-.13.37-.04.53.11.19.3.26.52.26h1.27c.27 0 .51-.12.64-.34l1.69-2.15 1.66 2.14c.12.21.34.35.62.35h1.43c.2 0 .39-.08.5-.25.12-.18.09-.38-.02-.55l-2.77-3.54zM4.18 5H1.99V2.02h2.19c.62 0 1.08.13 1.38.37.29.22.44.62.44 1.08 0 .45-.15.94-.44 1.17-.31.23-.76.36-1.38.36zM15 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zM9.99 3.01c0 .02.01.04.01.06V2.95c0 .02-.01.04-.01.06z"];

var newTextBox = ["M5 6.5c0 .28.22.5.5.5H7v3.5c0 .28.22.5.5.5s.5-.22.5-.5V7h1.5c.28 0 .5-.22.5-.5S9.78 6 9.5 6h-4c-.28 0-.5.22-.5.5zM15 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2 5c-.55 0-1 .45-1 1v5H3V4h5c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z"];

var ninja = ["M16 5s-2.52 2.11-4.96 1.99C11.03 4.89 10.39.23 5 0c0 0 2.11 2.54 1.96 4.99C4.86 5.01.23 5.65 0 11c0 0 2.56-2.12 5.02-1.95.02 2.11.67 6.72 5.98 6.95 0 0-2.09-2.54-1.94-4.99 2.11-.02 6.71-.68 6.94-6.01zM8 9.5c-.83 0-1.5-.67-1.5-1.5S7.17 6.5 8 6.5s1.5.67 1.5 1.5S8.83 9.5 8 9.5z"];

var notEqualTo = ["M7.58 5l.44-2.196a1 1 0 011.96.392L9.62 5H13a1 1 0 010 2H9.22l-.4 2H13a1 1 0 010 2H8.42l-.44 2.196a1 1 0 01-1.96-.392L6.38 11H3a1 1 0 010-2h3.78l.4-2H3a1 1 0 110-2h4.58z"];

var notifications = ["M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-5c-.55 0-1-.45-1-1V6c0-2.43-1.73-4.45-4.02-4.9 0-.04.02-.06.02-.1 0-.55-.45-1-1-1S7 .45 7 1c0 .04.02.06.02.1A4.992 4.992 0 003 6v4c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"];

var notificationsSnooze = ["M9 14c0 1.1-.9 2-2 2s-2-.9-2-2zM7 0c.404 0 .755.243.912.59L7.9.6c-.7.6-.9 1.36-.9 1.9 0 .8.267 1.433.8 1.9-.533.6-.795 1.222-.784 1.867l.004.358A2.8 2.8 0 009.82 9.4L12 9.399V10c0 .51.388.935.884.993L13 11c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V6c0-2.43 1.73-4.45 4.02-4.9L6 1c0-.55.45-1 1-1z", "M13 6.702a.632.632 0 00-.632-.632h-1.743l2.208-2.734A.75.75 0 0013 2.864v-.3A.565.565 0 0012.435 2H9.561a.561.561 0 100 1.123h1.814L9.221 5.795A1 1 0 009 6.423v.279c0 .349.283.631.632.631h2.736A.632.632 0 0013 6.702z"];

var notificationsUpdated = ["M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm3.399-13.667l-.413.412A2.99 2.99 0 009 1.99a3 3 0 00-3 2.99c0 .8.32 1.558.876 2.114l2.002 1.992A2.99 2.99 0 0013 9.184V10c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V6c0-2.43 1.73-4.45 4.02-4.9 0-.04-.02-.06-.02-.1 0-.55.45-1 1-1s1 .45 1 1c0 .04-.02.06-.02.1a4.97 4.97 0 012.419 1.233zM10.29 7.67l-2-1.99a.99.99 0 01-.29-.7 1 1 0 011-.99c.27 0 .52.11.7.29l1.29 1.29 3.28-3.28c.18-.18.42-.29.7-.29.55 0 1 .44 1 .99 0 .28-.11.52-.3.7l-3.98 3.98a.99.99 0 01-1.4 0z"];

var numberedList = ["M2.76 7h1.26V0h-.94c-.04.21-.12.39-.25.54-.13.15-.29.27-.48.36-.18.09-.39.16-.62.2-.23.04-.46.06-.71.06v.9h1.74V7zm-.59 7.17c.18-.12.37-.25.58-.37a10.763 10.763 0 001.24-.83c.2-.16.37-.33.52-.51.15-.19.28-.39.37-.61.09-.22.14-.47.14-.74 0-.22-.04-.45-.12-.7-.08-.26-.21-.49-.4-.69-.18-.21-.43-.39-.72-.52-.3-.14-.68-.21-1.12-.21-.41 0-.77.07-1.08.2-.32.14-.58.32-.8.56-.22.23-.38.51-.49.84-.11.32-.16.67-.16 1.05h1.19c.01-.24.03-.47.08-.67.05-.21.11-.39.21-.54.09-.15.22-.27.38-.36.16-.09.35-.13.59-.13.26 0 .47.04.63.12.16.08.29.18.38.3.09.12.15.25.18.39s.05.27.05.4c-.01.27-.08.5-.22.71-.14.21-.32.4-.53.57-.22.18-.45.34-.71.49-.26.15-.51.31-.74.47-.5.31-.89.68-1.17 1.11-.3.41-.44.91-.45 1.48h5v-1H1.43c.05-.15.14-.29.27-.43.14-.13.29-.26.47-.38zM15.01 1.99h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1zm0 9h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1z"];

var numerical = ["M2.79 4.61c-.13.17-.29.3-.48.41-.18.11-.39.18-.62.23-.23.04-.46.07-.71.07v1.03h1.74V12h1.26V4h-.94c-.04.23-.12.44-.25.61zm4.37 5.31c.18-.14.37-.28.58-.42l.63-.45c.21-.16.41-.33.61-.51s.37-.38.52-.59c.15-.21.28-.45.37-.7.09-.25.13-.54.13-.85 0-.25-.04-.52-.12-.8-.07-.29-.2-.55-.39-.79a2.18 2.18 0 00-.73-.6c-.29-.15-.66-.23-1.11-.23-.41 0-.77.08-1.08.23-.31.16-.58.37-.79.64-.22.27-.38.59-.49.96-.11.37-.16.77-.16 1.2h1.19c.01-.27.03-.53.08-.77.04-.24.11-.45.21-.62.09-.18.22-.32.38-.42.16-.1.35-.15.59-.15.26 0 .47.05.63.14.15.09.28.21.37.35.09.14.15.29.18.45.03.16.05.31.05.45-.01.31-.08.58-.22.82-.14.23-.32.45-.53.65-.22.21-.46.39-.71.57-.26.18-.51.36-.75.54-.5.36-.89.78-1.17 1.27-.28.49-.43 1.06-.44 1.71h5v-1.15H6.43c.05-.17.14-.33.27-.49.13-.15.29-.29.46-.44zm8.5-1.56c-.23-.35-.54-.57-.95-.65v-.02c.34-.13.6-.34.76-.63.16-.29.24-.63.24-1.02 0-.34-.06-.64-.19-.9s-.3-.47-.51-.64c-.21-.17-.45-.3-.72-.38-.27-.09-.54-.13-.82-.13-.36 0-.68.07-.96.2-.28.13-.53.32-.72.55-.2.23-.36.51-.47.83-.11.32-.18.66-.19 1.04h1.15c-.01-.2.01-.39.06-.58.05-.19.12-.36.22-.51.1-.15.22-.27.37-.36.15-.09.32-.13.53-.13.32 0 .59.1.79.3.21.2.31.46.31.79 0 .23-.05.43-.14.59-.09.16-.21.29-.35.38-.15.09-.32.16-.51.19-.19.04-.38.05-.57.04v.93c.23-.01.45 0 .67.02.22.02.42.08.59.17.18.09.32.23.43.4.11.18.16.41.16.71 0 .44-.13.78-.39 1.02s-.58.36-.97.36c-.45 0-.79-.16-1.02-.47-.23-.31-.33-.7-.32-1.17H11c.01.4.06.77.17 1.1.11.33.26.61.47.85.21.23.46.42.77.54.31.13.67.19 1.08.19.34 0 .66-.05.96-.16.3-.11.57-.27.8-.47.23-.2.41-.45.55-.74.13-.27.2-.6.2-.97 0-.5-.11-.92-.34-1.27z"];

var office = ["M15 5h-3V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h3v-4h4v4h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM5 10H2V7h3v3zm0-5H2V2h3v3zm5 5H7V7h3v3zm0-5H7V2h3v3zm4 9h-2v-2h2v2zm0-4h-2V7h2v3z"];

var offline = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM6 14l1-5H4l6-7-1 5h3l-6 7z"];

var oilField = ["M15 14h-1.35l-3.34-7.51 2.46-.95 1.45 3.21c.09.2.36.3.6.23.1-.03.18-.08.24-.15.05-.08 1.23-1.56.87-4.2-.11-.79-.52-4.62-3.26-4.62-.93 0-1.68.62-1.67 1.37 0 .14.03.28.09.42l.87 1.92L.64 8.07v.01A.98.98 0 000 9c0 .55.45 1 1 1 .13 0 .25-.03.36-.07v.01l1.04-.4L3.67 14H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM4.27 8.81L7.14 7.7 5.2 12.08l-.93-3.27zM6.54 14L9 8.46 11.46 14H6.54z"];

var oneColumn = ["M11.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm-6 5c-.28 0-.53.11-.71.29l-2 2a1.014 1.014 0 000 1.42l2 2a1.003 1.003 0 001.71-.71v-4c0-.55-.45-1-1-1z"];

var oneToMany = ["M14 3a1 1 0 11-2 0 1 1 0 012 0zm-3.726 1.254a3 3 0 10-.17-2.039 5.467 5.467 0 00-.51.158c-1.076.394-2.237 1.242-2.575 2.93-.161.809-.664 1.211-1.293 1.443a3 3 0 100 2.508c.629.232 1.132.634 1.293 1.442.338 1.69 1.499 2.537 2.575 2.93.17.063.342.115.51.159a3.001 3.001 0 10.17-2.04c-.629-.231-1.132-.633-1.293-1.441C8.765 9.228 8.216 8.494 7.568 8c.648-.493 1.197-1.228 1.413-2.304.161-.808.664-1.21 1.293-1.442zM13 14a1 1 0 110-2 1 1 0 010 2zM4 8a1 1 0 10-2 0 1 1 0 002 0z"];

var oneToOne = ["M2 8a1 1 0 112 0 1 1 0 01-2 0zm3.83-1a3.001 3.001 0 100 2h4.34a3.001 3.001 0 100-2H5.83zM13 7a1 1 0 100 2 1 1 0 000-2z"];

var openApplication = ["M5 0h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H8v-2h6V3H6v5H4V1c0-.55.45-1 1-1zm2.5 5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h2c.28 0 .5-.22.5-.5S9.78 6 9.5 6h-2c-.28 0-.5.22-.5.5s.22.5.5.5zM11 8.5c0 .28-.165.5-.375.5h-2.25C8.165 9 8 8.78 8 8.5s.165-.5.375-.5h2.25c.21 0 .375.22.375.5zM5 14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L5 12.41V14z"];

var outdated = ["M8 0c4.42 0 8 3.58 8 8 0 4.06-3.02 7.4-6.94 7.92-.02 0-.04.01-.06.01-.33.04-.66.07-1 .07-4.42 0-8-3.58-8-8 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .71 0 1.37-.15 2-.38v.01c2.33-.82 4-3.02 4-5.63 0-3.31-2.69-6-6-6-1.78 0-3.36.78-4.46 2H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v1.74A7.95 7.95 0 018 0zm1 12H7v-2h2v2zm0-3H7V4h2v5z"];

var pageLayout = ["M15 .95H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1zm-9 12H2v-6h4v6zm8 0H7v-6h7v6zm0-7H2v-3h12v3z"];

var panelStats = ["M10 4h3v1h-3zM10 6h3v1h-3zM10 8h3v1h-3zM10 10h3v1h-3z", "M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 12H2V3h6v9zm6 0H9V3h5v9z"];

var panelTable = ["M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 9H6V7h2v2zm0-3H6V4h2v2zm-6 6V3h3v9H2zm4 0v-2h2v2H6zm8 0H9v-2h5v2zm0-3H9V7h5v2zm0-3H9V4h5v2z"];

var paperclip = ["M14.68 2.31A4.54 4.54 0 0011.46.99c-1.15 0-2.31.44-3.19 1.32L.95 9.63c-.63.63-.95 1.46-.95 2.28a3.21 3.21 0 003.23 3.22c.83 0 1.66-.31 2.3-.95l7.31-7.32c.76-.77.76-1.98.01-2.73s-1.99-.76-2.75 0l-6.07 6.08c-.24.25-.24.65.01.9s.65.25.91.01l6.07-6.08c.25-.25.67-.25.91-.01.25.25.25.67 0 .92l-7.31 7.32c-.75.75-2.04.74-2.76.01-.75-.75-.73-2.02.01-2.76L9.2 3.21c1.24-1.24 3.35-1.26 4.58-.03 1.24 1.24 1.24 3.36 0 4.6l-7.12 7.13c-.24.25-.24.64.01.88.24.24.63.24.88.01v.01l7.13-7.13A4.41 4.41 0 0016 5.51c0-1.16-.44-2.32-1.32-3.2z"];

var paragraph = ["M13 1H6C3.8 1 2 2.8 2 5s1.8 4 4 4v5c0 .6.4 1 1 1s1-.5 1-1V3h2v11c0 .6.4 1 1 1s1-.5 1-1V3h1c.5 0 1-.4 1-1s-.4-1-1-1z"];

var path = ["M14.5 0h-13C.67 0 0 .67 0 1.5S.67 3 1.5 3H7v3H3.5C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9H7v3H5.5c-.83 0-1.5.67-1.5 1.5S4.67 15 5.5 15h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H9V9h3.5c.83 0 1.5-.67 1.5-1.5S13.33 6 12.5 6H9V3h5.5c.83 0 1.5-.67 1.5-1.5S15.33 0 14.5 0z"];

var pathSearch = ["M15 14.62l-4-2.4V9.77c-.32.09-.66.15-1 .18v2.27l-4 2.4V8.71c-.38-.31-.72-.66-1-1.06v6.97l-4-2.4V8c.55 0 1-.45 1-1s-.45-1-1-1V1.38l3.15 1.89c.08-.34.18-.66.32-.97L.76.07v.01A.496.496 0 00.5 0C.22 0 0 .22 0 .5v12c0 .18.1.33.25.42v.01l5 3v-.01c.07.05.16.08.25.08s.18-.03.25-.08v.01l4.74-2.85 4.74 2.85v-.01c.09.05.18.08.27.08.28 0 .5-.22.5-.5v-3.78c-.3.17-.63.28-1 .28v2.62zM2 5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm6-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm7.75-.92l-1.19-.72c.18.43.29.9.36 1.38l.08.04v3.39l1 1V3.5c0-.18-.1-.33-.25-.42zM10 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.3 4.89c.44-.7.7-1.51.7-2.39C14 2.01 11.99 0 9.5 0S5 2.01 5 4.5 7.01 9 9.5 9c.88 0 1.69-.26 2.39-.7l2.41 2.41c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71l-2.41-2.4zM9.5 8C7.57 8 6 6.43 6 4.5S7.57 1 9.5 1 13 2.57 13 4.5 11.43 8 9.5 8z"];

var pause = ["M6 3H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm6 0h-2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var people = ["M13.69 13.98c-.05-.24-.14-.5-.25-.76-.36-.86-1.12-1.33-2.69-2-.14-.06-.59-.25-.6-.25-.21-.09-.36-.15-.5-.22.02-.1.02-.2.03-.31 0-.04.01-.08.01-.13-.07-.06-.13-.12-.19-.19.22-.32.4-.67.54-1.05.02-.06.02-.06.03-.1.29-.23.48-.57.59-.96.16-.33.25-.73.21-1.16-.03-.4-.16-.76-.37-1.03-.02-.53-.07-1.13-.15-1.54-.01-.06-.02-.12-.03-.19.23-.06.48-.09.72-.09.49 0 1.05.16 1.44.46.38.29.67.7.8 1.17.03.1.05.21.07.31.07.37.11.94.11 1.33v.05c.14.06.27.21.29.51.02.25-.07.45-.13.54-.05.21-.16.44-.38.48-.02.1-.05.2-.09.3 0 .01-.01.03-.01.03-.17.44-.43.83-.75 1.11v.14c.03.35-.09.59.83 1 .93.41 2.32.84 2.6 1.5.29.66.17 1.04.17 1.04h-2.3zm-1.17-.38c.37.86.22 1.36.22 1.36H.06s-.14-.5.22-1.36 2.13-1.43 3.31-1.96c1.17-.54 1.05-.86 1.09-1.3 0-.05.01-.11.01-.17-.41-.35-.75-.86-.97-1.45v-.01s-.01-.01-.01-.02c-.04-.12-.09-.26-.12-.39-.28-.05-.44-.36-.5-.64-.06-.12-.19-.39-.16-.71.04-.41.21-.6.39-.68v-.06c0-.51.05-1.26.14-1.74.02-.13.05-.27.09-.4.17-.6.54-1.13 1.02-1.51.5-.39 1.21-.6 1.84-.6s1.34.21 1.84.6c.48.38.85.91 1.02 1.52.04.13.07.27.09.4.09.48.14 1.22.14 1.73v.07c.18.08.34.27.37.67.03.32-.09.59-.16.71-.06.28-.21.58-.48.63-.03.13-.07.26-.12.39 0 .01-.01.04-.01.04-.22.58-.55 1.08-.95 1.45v.18c.04.45-.12.77 1.06 1.3 1.18.53 2.95 1.09 3.31 1.95z"];

var percentage = ["M6 6V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2zM3.5 6c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1c0 .28-.22.5-.5.5zM13 8h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1zM12 3a1.003 1.003 0 00-1.87-.5l-5.99 9.98c-.09.15-.14.33-.14.52a1.003 1.003 0 001.87.5l5.99-9.98c.09-.15.14-.33.14-.52z"];

var person = ["M15.68 14.32c-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15A3.671 3.671 0 0010.32.72C9.68.25 8.79-.01 8-.01c-.79 0-1.68.25-2.31.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.17 1.51-.17 2.15v.08c-.24.09-.45.32-.5.83-.03.38.13.72.2.86.08.35.28.72.63.78.04.17.09.33.15.49 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.37 1.59-1.48.65-3.7 1.35-4.16 2.4-.46 1.05-.27 1.67-.27 1.67h15.92c-.01.01.18-.61-.28-1.66z"];

var phone = ["M15.9 12.41c-.06-.06-3.37-2-3.48-2.05a.794.794 0 00-.32-.08c-.15 0-.34.11-.57.32-.23.22-.94 1.19-1.15 1.4-.21.22-.38.32-.52.32-.07 0-.15-.02-.25-.06-.1-.04-1.16-.58-3.36-2.52-2.2-1.93-2.49-3.2-2.5-3.55 0-.14.11-.31.32-.52.22-.21.45-.41.7-.6.25-.19.49-.4.7-.62.22-.23.32-.42.32-.57 0-.11-.03-.21-.08-.32C5.66 3.46 3.66.15 3.59.08 3.44-.07 2.85 0 2.55.16.16 1.46-.03 3.2 0 3.89c.04.71.49 4.46 4.16 7.95C8.72 16.17 11.89 16 12.1 16c.69 0 2.82-.38 3.72-2.55.13-.32.25-.87.08-1.04z"];

var pieChart = ["M7 1.08c-3.37.5-5.97 3.4-5.97 6.92 0 3.87 3.13 7 6.98 7 3.52 0 6.42-2.61 6.91-6H7V1.08z", "M8 0v8h8c0-4.42-3.58-8-8-8z"];

var pin = ["M9.41.92c-.51.51-.41 1.5.15 2.56L4.34 7.54C2.8 6.48 1.45 6.05.92 6.58l3.54 3.54-3.54 4.95 4.95-3.54 3.54 3.54c.53-.53.1-1.88-.96-3.42l4.06-5.22c1.06.56 2.04.66 2.55.15L9.41.92z"];

var pivot = ["M4.57 7.02L.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4.27-4.27c-.58-.35-1.07-.84-1.41-1.42zM15 8c-.55 0-1 .45-1 1v.59l-2.57-2.57c-.34.58-.83 1.07-1.41 1.41L12.59 11H12c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-4-3c0-1.66-1.34-3-3-3S5 3.34 5 5s1.34 3 3 3 3-1.34 3-3zM8 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var pivotTable = ["M2 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0-4H1C.45 0 0 .45 0 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm11.71 4.29C13.53 4.11 13.28 4 13 4s-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l.29-.3V9c0 1.66-1.34 3-3 3H7.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H9c2.76 0 5-2.24 5-5V7.41l.29.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2zM15 0H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var play = ["M12 8c0-.35-.19-.64-.46-.82l.01-.02-6-4-.01.02A.969.969 0 005 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 6-4-.01-.02c.27-.18.46-.47.46-.82z"];

var playbook = ["M4.293.293a1 1 0 011.414 1.414L4.414 3l1.293 1.293a1 1 0 01-1.414 1.414L3 4.414 1.707 5.707A1 1 0 01.293 4.293L1.586 3 .293 1.707A1 1 0 011.707.293L3 1.586 4.293.293z", "M14.29 4.71L13 3.41V6a3 3 0 01-3 3H4a1 1 0 00-1 1v5a1 1 0 11-2 0v-5a3 3 0 013-3h6a1 1 0 001-1V3.41L9.71 4.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71l3-3c.18-.18.43-.29.71-.29.28 0 .53.11.71.29l3 3a1.003 1.003 0 01-1.42 1.42z", "M16 13a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z"];

var plus = ["M13 7H9V3c0-.55-.45-1-1-1s-1 .45-1 1v4H3c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V9h4c.55 0 1-.45 1-1s-.45-1-1-1z"];

var polygonFilter = ["M14 5c-.24 0-.47.05-.68.13L9.97 2.34c.01-.11.03-.22.03-.34 0-1.1-.9-2-2-2S6 .9 6 2c0 .04.01.08.01.12L2.88 4.21C2.61 4.08 2.32 4 2 4 .9 4 0 4.9 0 6c0 .74.4 1.38 1 1.72v4.55c-.6.35-1 .99-1 1.73 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1h4.55c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.37-.11-.7-.28-1L14 9c1.11-.01 2-.9 2-2s-.9-2-2-2zm-4.01 7c-.73 0-1.37.41-1.71 1H3.73c-.18-.3-.43-.55-.73-.72V7.72c.6-.34 1-.98 1-1.72 0-.04-.01-.08-.01-.12l3.13-2.09c.27.13.56.21.88.21.24 0 .47-.05.68-.13l3.35 2.79c-.01.11-.03.22-.03.34 0 .37.11.7.28 1l-2.29 4z"];

var power = ["M8 8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v6c0 .55.45 1 1 1zm3-5.32v2.34c1.21.91 2 2.35 2 3.98 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.63.79-3.06 2-3.98V2.68C2.64 3.81 1 6.21 1 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-2.79-1.64-5.19-4-6.32z"];

var predictiveAnalysis = ["M16 6.41c0-1.01-.49-1.94-1.29-2.49-.43-1.92-2.07-3.28-4-3.28-.46 0-.92.08-1.35.24C8.83.31 8.11 0 7.34 0c-.9 0-1.74.44-2.28 1.16-.12-.01-.24-.02-.36-.02-1.31 0-2.42.89-2.77 2.17C.78 3.72 0 4.84 0 6.13c0 .38.07.76.21 1.12C.07 7.6 0 7.98 0 8.36c0 1.11.58 2.11 1.51 2.63.54.56 1.27.87 2.03.87.49 0 .95-.12 1.37-.36a2.85 2.85 0 002.18 1.04c.52 0 1.03-.14 1.47-.42.49.39 1.07.65 1.69.73 1.04 1.15 1.84 2.63 1.84 2.64 0 0 .28.49.26.49.77 0 1.41-.16 1.32-1.04 0 .02-.73-2.31-.73-2.31.41-.21.75-.55.97-.98.9-.52 1.47-1.53 1.47-2.61 0-.24-.03-.48-.08-.71.45-.52.7-1.21.7-1.92zm-1.23 1.02l-.15-.16-.61-.67c-.27-.29-.54-.94-.58-1.39l-.1-1.01c-.05-.59-.94-.58-.91.11 0 .02.1 1.01.1 1.01.03.29.12.62.24.93-.06-.01-.12-.02-.18-.02 0 0-2.06-.1-2.05-.11-.58-.02-.71.97-.04 1l2.05.11c.42.02 1.04.3 1.29.58l.49.54.02.05c.08.21.12.44.12.66 0 .74-.41 1.41-1.07 1.75l-.16.08-.07.18c-.15.38-.48.66-.88.74l-.54.11.7 2.2c-.38-.61-.95-1.43-1.62-2.14l-.12-.13-.17-.01c-.41-.03-.8-.17-1.14-.38l1.36-1.18c.35-.31.83-.44.99-.39 0 0 .63.17.62.18.63.16.83-.74.23-.97l-.62-.18c-.55-.16-1.33.18-1.79.58l-1.53 1.33-.31.26c-.35.29-.75.44-1.2.44-.64 0-1.23-.33-1.58-.86V9.15c0-.4.17-.79.27-.85 0 0 .52-.34.51-.35.71-.53.18-1.23-.49-.89 0-.01-.52.35-.52.35-.26.15-.45.44-.58.77-.11-.11-.22-.2-.34-.28 0 0-1.53-1.01-1.53-1.02-.65-.45-1.2.51-.49.89 0-.01 1.51 1.02 1.51 1.02.37.24.62.78.62 1.09v.67c-.34.19-.63.29-.99.29-.54 0-1.05-.23-1.41-.63l-.05-.06-.07-.04c-.65-.34-1.05-1-1.05-1.73 0-.3.07-.6.2-.87l.12-.25L1.15 7c-.13-.27-.2-.56-.2-.87 0-.9.61-1.68 1.48-1.89l.31-.08.05-.34a1.926 1.926 0 012.38-1.58l.32.08.18-.31c.35-.6.99-.97 1.67-.97.44 0 .86.15 1.2.42l-.36.36v-.01l-.25.26c-.33.27-.74.42-.89.4 0 0-.67-.1-.67-.11-.67-.13-.87.86-.14 1.02.01 0 .67.11.67.11.02 0 .05 0 .07.01-.11.37-.15.77-.1 1.12 0 0 .17.99.15.99.11.52 1.06.36.93-.18 0-.01-.15-.99-.15-.99-.05-.37.12-.94.36-1.19l.39-.4c.05-.05.1-.09.15-.14l.74-.76c.4-.18.83-.27 1.27-.27 1.55 0 2.86 1.12 3.11 2.67l.04.25.21.12c.61.35.98 1 .98 1.7 0 .36-.1.7-.28 1.01z"];

var prescription = ["M10.91 8.34c.14-.21.36-.34.63-.34h1.29c.22 0 .41.07.52.26.09.16.08.33-.04.53l-2.49 2.87 2.77 3.54c.12.17.14.37.02.55-.11.17-.3.25-.5.25h-1.44a.69.69 0 01-.61-.35L9.4 13.51l-1.69 2.15c-.13.21-.36.34-.63.34H5.8c-.22 0-.41-.07-.52-.26-.09-.16-.08-.33.04-.53l2.71-3.48L4.3 6.99H3.03v3.47c0 .33-.26.56-.62.56h-.8c-.35-.01-.61-.23-.61-.56V.56c0-.33.26-.56.62-.56h3.11c.62 0 1.19.08 1.7.24.51.16.96.39 1.34.69a3.194 3.194 0 011.21 2.53c0 .81-.25 1.5-.74 2.08-.37.44-.84.77-1.42 1.01L7.88 7.9c.04.04.07.08.08.1l1.49 1.9 1.46-1.56zM5.18 5c.62 0 1.08-.13 1.39-.37.29-.23.44-.71.44-1.16s-.15-.87-.44-1.1C6.26 2.12 5.8 2 5.18 2H2.99v3h2.19z"];

var presentation = ["M15 1H9c0-.55-.45-1-1-1S7 .45 7 1H1c-.55 0-1 .45-1 1s.45 1 1 1v8c0 .55.45 1 1 1h3.59L3.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 13.41V15c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L10.41 12H14c.55 0 1-.45 1-1V3c.55 0 1-.45 1-1s-.45-1-1-1zm-2 9H3V3h10v7z"];

var print = ["M12 2.02c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h8v-1zm3 2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v-3h12v3h1c.55 0 1-.45 1-1v-6c0-.56-.45-1-1-1zm-1 3h-2v-1h2v1zm-3 6H5v-3H3v4c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-4h-2v3z"];

var projects = ["M14 3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h12V3zm-2-3H4c-.55 0-1 .45-1 1h10c0-.55-.45-1-1-1zm3 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-3 6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9h1v2h6V9h1v2z"];

var properties = ["M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-3h9c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm-4 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm13-5H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0 6H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var property = ["M3 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.5-6.5a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM7 3h8c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm8 10H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zM3 0C1.9 0 1 .9 1 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"];

var publishFunction = ["M12.16 3.76c.15-.11.3-.16.47-.16.06 0 .17.02.34.06.16.04.31.06.43.06a.58.58 0 00.6-.6c0-.19-.06-.33-.17-.44-.11-.11-.28-.16-.49-.16-.19 0-.37.04-.54.13-.17.09-.39.27-.65.55-.2.21-.48.58-.87 1.11a5.22 5.22 0 00-.78-1.79l-2.05.32-.04.21c.15-.03.28-.04.39-.04.2 0 .37.08.5.25.21.26.5 1.03.88 2.33-.29.36-.49.6-.6.71-.18.19-.33.31-.45.36-.09.04-.19.07-.3.07-.09 0-.23-.04-.42-.13a.904.904 0 00-.36-.09c-.2 0-.36.06-.49.18a.59.59 0 00-.19.46c0 .18.06.32.18.43.12.11.28.16.48.16.2 0 .38-.04.55-.12.17-.08.39-.24.65-.49s.62-.65 1.07-1.19c.18.52.33.89.46 1.13.13.24.28.4.44.51.17.1.37.16.62.16.24 0 .49-.08.74-.25.33-.21.66-.58 1.01-1.09l-.21-.11c-.23.31-.41.5-.52.57a.44.44 0 01-.26.07c-.12 0-.24-.07-.36-.21-.2-.24-.46-.91-.8-2 .29-.49.54-.81.74-.96zM6.37 5.83l.68-2.53h.83l.2-.64h-.84c.24-.91.56-1.59.96-2.01.24-.27.48-.4.71-.4.05 0 .08.01.11.04s.04.06.04.1c0 .04-.03.11-.1.21-.06.1-.1.2-.1.29 0 .13.05.24.15.33.1.09.23.14.39.14.17 0 .31-.06.42-.17.12-.12.18-.27.18-.46 0-.21-.08-.39-.25-.52C9.57.07 9.3 0 8.93 0c-.59 0-1.12.16-1.59.48-.48.32-.93.85-1.36 1.59-.15.26-.29.42-.42.49s-.35.11-.64.1l-.19.65h.81L4.35 7.68c-.2.72-.33 1.16-.4 1.33-.1.24-.26.45-.46.62a.48.48 0 01-.31.1c-.03 0-.06-.01-.08-.03l-.03-.03c0-.02.03-.06.09-.11.06-.06.09-.15.09-.26 0-.13-.05-.23-.14-.32-.1-.09-.23-.13-.41-.13-.21 0-.38.05-.51.16A.52.52 0 002 9.4c0 .16.08.3.23.42.16.12.4.18.74.18.53 0 .99-.13 1.4-.39.41-.26.76-.65 1.07-1.19.3-.53.61-1.39.93-2.59zm2.34 3.46A.997.997 0 008 9c-.28 0-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l.29-.3V15c0 .55.45 1 1 1s1-.45 1-1v-2.59l.29.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2z"];

var pulse = ["M15 8h-1.46l-1.7-2.55-.02.01A.984.984 0 0011 5c-.43 0-.79.27-.93.65h-.01l-1.69 4.51-1.38-8.32h-.02A.989.989 0 006 1c-.41 0-.77.25-.92.61L2.34 8H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.41 0 .77-.25.92-.61l1.65-3.86 1.44 8.63h.02c.08.47.47.84.97.84.43 0 .79-.27.93-.65h.01l2.31-6.17.92 1.38.02-.01c.17.26.46.45.81.45h2c.55 0 1-.45 1-1s-.45-1-1-1z"];

var rain = ["M3.5 8a2.5 2.5 0 11.608-4.926 4.002 4.002 0 017.381-1.03A3 3 0 1112 8H3.501zM3 10a1 1 0 012 0v4a1 1 0 11-2 0v-4zm7-1a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm2 1a1 1 0 112 0v2a1 1 0 11-2 0v-2zM7 9a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"];

var random = ["M11.48 4h1.11l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H11c-.32 0-.59.16-.77.38l-.01-.01L8.28 4.8l1.28 1.6L11.48 4zm2.23 6.29a1.003 1.003 0 00-1.42 1.42l.3.29h-1.11l-7.7-9.62h-.01A.996.996 0 003 2H1c-.55 0-1 .45-1 1s.45 1 1 1h1.52l7.7 9.62.01-.01c.18.23.45.39.77.39h1.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2zM2.52 12H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.32 0 .59-.16.77-.38l.01.01 1.94-2.42L4.44 9.6 2.52 12z"];

var record = ["M8 3a5 5 0 100 10A5 5 0 108 3z"];

var rectHeight = ["M3 15V1h10v14H3zm0 1a1 1 0 01-1-1V1a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H3zM8.707 3.293a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414L8 5.414l1.293 1.293a1 1 0 001.414-1.414l-2-2zm-2 6a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L8 10.586 6.707 9.293z"];

var rectWidth = ["M1 3h14v10H1V3zM0 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V3zm10.707 2.293a1 1 0 00-1.414 1.414L10.586 8 9.293 9.293a1 1 0 001.414 1.414l2-2a1 1 0 000-1.414l-2-2zm-4 1.414a1 1 0 00-1.414-1.414l-2 2a1 1 0 000 1.414l2 2a1 1 0 001.414-1.414L5.414 8l1.293-1.293z"];

var rectangle = ["M1 3h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm1 2v6h12V5H2z"];

var redo = ["M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3.71-6.71l-3-3a1.003 1.003 0 00-1.42 1.42L12.59 4H5C2.24 4 0 6.24 0 9s2.24 5 5 5h4v-2H5c-1.66 0-3-1.34-3-3s1.34-3 3-3h7.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var refresh = ["M14.99 6.99c-.55 0-1 .45-1 1 0 3.31-2.69 6-6 6-1.77 0-3.36-.78-4.46-2h1.46c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.74a7.95 7.95 0 006 2.74c4.42 0 8-3.58 8-8 0-.55-.45-1-1-1zm0-7c-.55 0-1 .45-1 1v1.74a7.95 7.95 0 00-6-2.74c-4.42 0-8 3.58-8 8 0 .55.45 1 1 1s1-.45 1-1c0-3.31 2.69-6 6-6 1.77 0 3.36.78 4.46 2h-1.46c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"];

var regex$1 = ["M0 14a2 2 0 114 0 2 2 0 01-4 0zM11 0a1 1 0 00-1 1v2.768L7.603 2.384a1 1 0 10-1 1.732L9 5.5 6.603 6.884a1 1 0 001 1.732L10 7.232V10a1 1 0 102 0V7.232l2.397 1.384a1 1 0 101-1.732L13 5.5l2.397-1.384a1 1 0 10-1-1.732L12 3.768V1a1 1 0 00-1-1z"];

var regressionChart = ["M13 6.5c0 .83.67 1.5 1.5 1.5S16 7.33 16 6.5 15.33 5 14.5 5 13 5.67 13 6.5zM8.5 5c.83 0 1.5-.67 1.5-1.5S9.33 2 8.5 2 7 2.67 7 3.5 7.67 5 8.5 5zM9 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S11.33 8 10.5 8 9 8.67 9 9.5zM4.5 8C5.33 8 6 7.33 6 6.5S5.33 5 4.5 5 3 5.67 3 6.5 3.67 8 4.5 8zM15 12H3.26l12.03-8.59-.58-.81L2 11.67V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var remove = ["M10.99 6.99h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z"];

var removeColumn = ["M14 0H4c-.55 0-1 .45-1 1v3h2V2h3v12H5v-2H3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14h-3V2h3v12zm-8.71-3.29a1.003 1.003 0 001.42-1.42L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 00.29 6.71L1.59 8 .29 9.29a1.003 1.003 0 001.42 1.42L3 9.41l1.29 1.3z"];

var removeColumnLeft = ["M4 9h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm11-9H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12z"];

var removeColumnRight = ["M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 14H2V2h3v12zm9 0H6V2h8v12zM8 9h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z"];

var removeRowBottom = ["M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V6h12v8zm0-9H2V2h12v3zm-8 6h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z"];

var removeRowTop = ["M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2v-3h12v3zm0-4H2V2h12v8zM6 7h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z"];

var repeat = ["M10 5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1.74A7.95 7.95 0 008 0C3.58 0 0 3.58 0 8c0 4.06 3.02 7.4 6.94 7.92.02 0 .04.01.06.01.33.04.66.07 1 .07 4.42 0 8-3.58 8-8 0-.55-.45-1-1-1s-1 .45-1 1c0 3.31-2.69 6-6 6-.71 0-1.37-.15-2-.38v.01C3.67 12.81 2 10.61 2 8c0-3.31 2.69-6 6-6 1.77 0 3.36.78 4.46 2H11c-.55 0-1 .45-1 1z"];

var reset = ["M6 5c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v1.74A7.95 7.95 0 018 0c4.42 0 8 3.58 8 8 0 4.06-3.02 7.4-6.94 7.92-.02 0-.04.01-.06.01-.33.04-.66.07-1 .07-4.42 0-8-3.58-8-8 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .71 0 1.37-.15 2-.38v.01c2.33-.82 4-3.02 4-5.63 0-3.31-2.69-6-6-6-1.77 0-3.36.78-4.46 2H5c.55 0 1 .45 1 1z"];

var resolve = ["M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c-.6 0-1.1.1-1.6.3 1.3 1.2 2.1 2.9 2.1 4.7s-.8 3.6-2.1 4.7c.5.2 1 .3 1.6.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z"];

var rig = ["M5.71 3c0 1.1.96 2 2.14 2C9.04 5 10 3.96 10 3c0-1.96-1.47-3-2.14-3H5c0 1.96 2.68 1.4.71 3zm2.5 3l.01.01s0-.01-.01-.01zm6.5 8.29L10 9.59V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.58l-4.71 4.7c-.18.19-.29.44-.29.72a1.003 1.003 0 001.71.71L6 12.42V15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.58l3.29 3.29a1.003 1.003 0 001.42-1.42z"];

var rightJoin = ["M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8s.8 3.6 2.1 4.7c-.5.2-1 .3-1.6.3-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1.1.1 1.6.3zm-1.96 8.68C3.92 10.83 3.5 9.46 3.5 8s.42-2.83 1.14-3.98C2.6 4.2 1 5.91 1 8s1.6 3.8 3.64 3.98zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3z"];

var ring = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"];

var rocket = ["M6 12C4.397 7.46 4.415 4.465 8 0c3.585 4.485 3.602 7.48 2 12H6zm3-7a1 1 0 11-2 0 1 1 0 012 0zm-7 8.022l3-1-.054-.158C4.636 10.954 4.076 9.317 4 8L3 9l-1 4.022zm9-1l3 1L13 9l-1-1c-.076 1.317-.635 2.954-.946 3.864l-.054.158zM7 13h2c0 1.5-.5 2.5-1 3-.5-.5-1-1.5-1-3z"];

var rocketSlant = ["M3.992 10c2-5 5-9 11-9 0 6-4 9-9 11l-2-2zm7.714-4.285a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zm-6.555-.218L2.992 6l-3 2L3.24 9.195c.542-1.301 1.166-2.556 1.911-3.698zM7.992 16l-1.236-3.232c1.3-.539 2.552-1.158 3.694-1.898L9.992 13l-2 3zm-4.931-4.94L5 13c-.992.991-2.186 1.154-3.001 1-.154-.815.07-1.948 1.06-2.94z"];

var rotateDocument = ["M12 2h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3zM5.71 5.29A.997.997 0 005 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V9c0-.28-.11-.53-.29-.71l-3-3zM7 14H2V7h2v2c0 .55.45 1 1 1h2v4z"];

var rotatePage = ["M8 6H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-1 8H3V8h4v6zm5-12h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 009.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3z"];

var route = ["M11.669 5.066l.099.189c.113.213.236.434.367.661.226.39.468.78.709 1.151l-.198-.004-.48-.004c-1.745.003-2.369.233-2.369.688 0 .053.226.19 1.038.436l.84.24C13.9 9.064 15 9.83 15 11.63c0 2.123-1.607 3.122-4.027 3.366-.651.065-1.266.075-2.043.05l-.958-.035H5.196l.268-.406c.336-.517.672-1.052.998-1.593h1.636l.572.023c.857.036 1.475.034 2.103-.03 1.526-.153 2.227-.59 2.227-1.375 0-.531-.402-.84-1.66-1.22l-.691-.198c-1.04-.293-1.764-.562-2.222-.946C8.8 8.366 9 7.612 9 6.997a5.03 5.03 0 00-.184-1.334c.645-.395 1.598-.562 2.853-.597zM4 3a4.007 4.007 0 014 3.997C8 9.21 4 15 4 15l-.416-.62C2.56 12.827 0 8.767 0 6.997A4.002 4.002 0 014 3zm0 2a2 2 0 10.001 4.001A2 2 0 004 5zm10-4c1.103 0 1.996.896 2 1.999C16 4.105 14 7 14 7l-.293-.44C13.15 5.707 12 3.838 12 2.999 12 1.896 12.897 1 14 1z"];

var satellite = ["M3 9c0-.6.4-1 1-1s1 .4 1 1c0 1.1.9 2 2 2 .6 0 1 .4 1 1s-.4 1-1 1c-2.2 0-4-1.8-4-4zM0 9c0-.6.4-1 1-1s1 .4 1 1c0 2.8 2.2 5 5 5 .6 0 1 .4 1 1s-.4 1-1 1c-3.9 0-7-3.1-7-7zm7 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1.3-2.8c-.4-.4-.4-1 0-1.4l4.5-4.5c.4-.4 1-.4 1.4 0l.5.5c.4.4.4 1 0 1.4l-4.5 4.5c-.4.4-1 .4-1.4 0l-.5-.5zM5.2.3c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-.9.9c-.4.4-1 .4-1.4 0L4.3 2.6c-.4-.4-.4-1 0-1.4l.9-.9zm7 7c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-.9.9c-.4.4-1 .4-1.4 0l-2.1-2.1c-.4-.4-.4-1 0-1.4l.9-.9z"];

var saved = ["M6.71 9.29a1.003 1.003 0 00-1.42 1.42l2 2a.997.997 0 001.6-.27h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1-.39 0-.72.23-.89.56H9.1l-1.38 2.76-1.01-1.03zM9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0zm3 14H4V2h4v4h4v8z"];

var scatterPlot = ["M15 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-.5-7c.83 0 1.5-.67 1.5-1.5S15.33 2 14.5 2 13 2.67 13 3.5 13.67 5 14.5 5zm-3 4c.83 0 1.5-.67 1.5-1.5S12.33 6 11.5 6 10 6.67 10 7.5 10.67 9 11.5 9zm-4-2C8.33 7 9 6.33 9 5.5S8.33 4 7.5 4 6 4.67 6 5.5 6.67 7 7.5 7zm-3 4c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"];

var search = ["M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"];

var searchAround = ["M13.5 11c-.51 0-.98.15-1.38.42l-2.4-2.41c.17-.3.28-.64.28-1.01s-.11-.71-.28-1.01l2.41-2.41c.39.27.86.42 1.37.42a2.5 2.5 0 000-5A2.5 2.5 0 0011 2.5c0 .51.15.98.42 1.38l-2.41 2.4C8.71 6.11 8.37 6 8 6s-.71.11-1.01.28l-2.41-2.4c.27-.4.42-.87.42-1.38a2.5 2.5 0 00-5 0A2.5 2.5 0 002.5 5c.51 0 .98-.15 1.38-.42l2.41 2.41C6.11 7.29 6 7.63 6 8s.11.71.28 1.01l-2.41 2.41c-.39-.27-.86-.42-1.37-.42a2.5 2.5 0 000 5A2.5 2.5 0 005 13.5c0-.51-.15-.98-.42-1.38l2.41-2.41c.3.18.64.29 1.01.29s.71-.11 1.01-.28l2.41 2.41c-.27.39-.42.86-.42 1.37a2.5 2.5 0 005 0 2.5 2.5 0 00-2.5-2.5zm0-10c.83 0 1.5.67 1.5 1.5S14.33 4 13.5 4 12 3.33 12 2.5 12.67 1 13.5 1zm-11 3C1.67 4 1 3.33 1 2.5S1.67 1 2.5 1 4 1.67 4 2.5 3.33 4 2.5 4zm0 11c-.83 0-1.5-.67-1.5-1.5S1.67 12 2.5 12s1.5.67 1.5 1.5S3.33 15 2.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"];

var searchTemplate = ["M15.55 13.43l-2.67-2.67c.7-1.09 1.11-2.38 1.11-3.77 0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm2.5-6h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0-2h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 4h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"];

var searchText = ["M9 4H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1V6h1c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 9.44l-2.67-2.67C13.59 9.68 14 8.39 14 7c0-3.87-3.13-7-7-7S0 3.13 0 7s3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 102.12-2.12zM7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"];

var segmentedControl = ["M15 4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 6H8V6h6v4z"];

var select = ["M16 15c0-.28-.12-.52-.31-.69l.02-.02-3.12-3.12 3.41-.84-8.05-2.86c.03-.09.05-.17.05-.27V2c0-.55-.45-1-1-1H3c0-.55-.45-1-1-1S1 .45 1 1c-.55 0-1 .45-1 1s.45 1 1 1v4c0 .55.45 1 1 1h5.2c.1 0 .18-.02.27-.05L10.33 16l.85-3.41 3.12 3.12.02-.02c.16.19.4.31.68.31.04 0 .07-.02.1-.02s.06.02.1.02c.44 0 .8-.36.8-.8 0-.04-.02-.07-.02-.1s.02-.06.02-.1zM6 6H3V3h3v3z"];

var selection = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"];

var sendMessage = ["M15.399 9.01L1.527 15.875c-.535.267-1.175.081-1.421-.427A.953.953 0 010 15V10l8-2-8-2V1c0-.528.407-1 1.004-1 .169 0 .416.04.567.116L15.403 7.07a1.084 1.084 0 01-.005 1.939z"];

var sendTo = ["M15 7.5c-.8 0-1.5-.4-2-1l-1.2 1.2c-.4.5-1.1.7-1.8.7-1.4.1-2.5-1-2.5-2.4 0-.7.3-1.3.7-1.8L9.5 3c-.6-.5-1-1.2-1-2 0-.3.1-.7.2-1H8C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8v-.7c-.3.1-.6.2-1 .2zM15 0h-4c-.6 0-1 .5-1 1s.4 1 1 1h1.6L9.3 5.3c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3L14 3.4V5c0 .6.4 1 1 1 .5 0 1-.4 1-1V1c0-.5-.4-1-1-1z"];

var sendToGraph = ["M6 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm8 .5c-.56 0-1.06.23-1.42.59l-2.13-1.24L8.99 8l3.59-2.09A2.002 2.002 0 0016 4.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .19.03.37.08.54L8.5 7.13v-3.2c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v3.2l-.88-.52-2.7-1.57c.05-.17.08-.35.08-.54 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.56 0 1.06-.23 1.42-.59l2.13 1.24 3.84 2.24 2.7 1.57c-.06.17-.09.35-.09.54 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"];

var sendToMap = ["M6 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm9.55-5.83l-4.49-3A.975.975 0 009.99.15L5.53 2.82 1.56.17A1.003 1.003 0 000 1v6h2V2.87l2.94 1.96.06.03V7h1V4.86s.01 0 .01-.01L10 2.47v8.67s-.01 0-.01.01l-.99.58v2.33l1.47-.88 3.97 2.65A1.003 1.003 0 0016 15V4c0-.35-.18-.65-.45-.83zM14 13.13l-2.94-1.96c-.02-.01-.04-.02-.05-.03v-8.6l3 2v8.59z"];

var seriesAdd = ["M10.68 7.9c.44.54 1.07.92 1.79 1.05l-2.76 2.76c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l1.68-1.69zM15 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1z"];

var seriesConfiguration = ["M9.94 9.64c.65.23 1.34.36 2.06.36.14 0 .29-.01.43-.01L9.7 12.71c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.3L5 9.41l-3 3V14h12.99c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 7.11 4.72 7 5 7c.28 0 .53.11.71.29L9 10.59l.94-.95zm4.73-6.44h.92c.22 0 .4.18.4.4v.8c0 .22-.18.4-.4.4h-.93c-.06.2-.14.38-.24.55l.66.65c.15.15.15.4 0 .55l-.54.55c-.15.15-.4.15-.55 0l-.65-.65c-.17.1-.36.18-.55.24v.91c0 .22-.18.4-.4.4h-.8c-.22 0-.4-.18-.4-.4v-.93c-.18-.06-.36-.13-.52-.22l-.68.68c-.15.16-.41.16-.57 0l-.56-.56a.417.417 0 010-.57l.68-.68c-.08-.16-.16-.33-.22-.52h-.93c-.22 0-.4-.18-.4-.4v-.8c0-.22.18-.4.4-.4h.93c.06-.2.14-.38.24-.55l-.65-.64a.392.392 0 010-.55l.54-.55a.38.38 0 01.54 0l.65.65c.18-.1.36-.18.55-.24V.4c0-.22.18-.4.4-.4h.8c.22 0 .4.18.4.4v.93c.18.06.35.14.52.22l.68-.68c.15-.16.41-.16.57 0l.57.57c.15.16.15.41 0 .57l-.68.68c.09.16.16.33.22.51zm-4.18.8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5c-.82 0-1.5.67-1.5 1.5z"];

var seriesDerived = ["M10.66 7.92c.44.54 1.07.91 1.8 1.03L9.71 11.7c-.18.19-.43.3-.71.3s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l1.66-1.67zM12.3 5.3l.3-.3H8c-.6 0-1-.4-1-1s.4-1 1-1h4.6l-.3-.3c-.2-.2-.3-.4-.3-.7 0-.6.5-1 1-1 .3 0 .5.1.7.3l2 2c.2.2.3.4.3.7s-.1.5-.3.7l-2 2c-.2.2-.4.3-.7.3-.6 0-1-.4-1-1 0-.3.1-.5.3-.7z"];

var seriesFiltered = ["M9.29 9.3c.3.62.8 1.12 1.42 1.41l-1 1c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l.29-.29zM15.48 1c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V4.71L8.17 1.98A.566.566 0 018 1.57c0-.31.26-.57.57-.57h6.91z"];

var seriesSearch = ["M9.6 8.94a4.937 4.937 0 001.82.01c.1-.01.22-.04.39-.08l.23-.07c.04-.01.08-.02.11-.04l.22.22-2.7 2.72c-.18.19-.43.3-.71.3s-.53-.11-.71-.3L4.98 8.41l-2.99 3V13h12.94c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V3.99c0-.55.45-1 1-1s1 .45 1 1v4.59l2.28-2.3c.17-.18.42-.29.7-.29s.53.11.7.29l3.28 3.3.64-.64zm6.22-.41c.1.12.17.27.18.44 0 .34-.27.61-.61.61a.57.57 0 01-.43-.18l-2.24-2.25c-.13.08-.26.16-.4.23-.02.01-.05.02-.07.03-.14.06-.27.12-.42.17h-.01c-.14.05-.29.08-.44.11-.04.01-.08.02-.11.02-.15.02-.3.04-.46.04-1.85 0-3.35-1.51-3.35-3.37S8.96 1.01 10.81 1c1.85 0 3.35 1.51 3.35 3.37 0 .16-.02.31-.04.47-.01.04-.01.07-.02.11-.02.15-.05.29-.1.44v.01c-.05.15-.11.28-.17.42-.01.02-.02.05-.03.07-.07.14-.14.27-.23.4l2.25 2.24zm-5.01-1.94c1.22 0 2.21-.99 2.21-2.22 0-1.23-.99-2.22-2.21-2.22S8.6 3.14 8.6 4.37c0 1.22.99 2.22 2.21 2.22z"];

var settings = ["M3 1c0-.55-.45-1-1-1S1 .45 1 1v3h2V1zm0 4H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm12-4c0-.55-.45-1-1-1s-1 .45-1 1v2h2V1zM9 1c0-.55-.45-1-1-1S7 .45 7 1v6h2V1zM1 15c0 .55.45 1 1 1s1-.45 1-1v-5H1v5zM15 4h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-2 11c0 .55.45 1 1 1s1-.45 1-1V9h-2v6zM9 8H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-2 7c0 .55.45 1 1 1s1-.45 1-1v-2H7v2z"];

var shapes = ["M5.92 8.139c.44-.282 1.006-.121 1.264.358l2.689 4.988c.083.155.127.33.127.51C10 14.55 9.587 15 9.077 15H3.924a.864.864 0 01-.438-.12c-.449-.263-.617-.873-.376-1.362l2.465-4.989c.08-.162.2-.297.346-.39zM12 4a3 3 0 110 6 3 3 0 010-6zM6 1a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h4z"];

var share = ["M10.99 13.99h-9v-9h4.76l2-2H.99c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V7.24l-2 2v4.75zm4-14h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L7.29 7.28a1 1 0 00-.3.71 1.003 1.003 0 001.71.71l5.29-5.29V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z"];

var sharedFilter = ["M13.843 15.163c.232.53.138.837.138.837H6.017s-.088-.308.138-.837c.226-.53 1.338-.88 2.079-1.206.735-.332.66-.53.685-.8 0-.03.006-.068.006-.105a2.171 2.171 0 01-.61-.892v-.006s-.006-.006-.006-.012c-.025-.074-.056-.16-.075-.24-.176-.031-.276-.222-.314-.394a.8.8 0 01-.1-.437c.025-.253.131-.37.244-.419v-.037c0-.313.032-.775.088-1.07A1.835 1.835 0 018.85 8.37c.315-.24.76-.37 1.156-.37.396 0 .842.13 1.156.37.301.233.534.56.64.935.026.08.045.166.057.246.057.295.088.75.088 1.064v.043c.113.05.214.167.232.413a.75.75 0 01-.1.437c-.038.172-.132.357-.301.387a1.77 1.77 0 01-.076.24.136.136 0 01-.006.025 2.346 2.346 0 01-.597.892v.111c.025.277-.075.474.666.8.741.326 1.853.67 2.079 1.2z", "M14.852 15h1.131s.083-.27-.12-.732c-.16-.373-.82-.641-1.411-.88a15.328 15.328 0 01-.409-.17c-.565-.25-.57-.412-.577-.61-.001-.03-.002-.06-.005-.09v-.097c.22-.2.401-.469.522-.781 0 0 .005-.016.005-.022.028-.07.05-.14.066-.21.149-.026.231-.188.264-.339a.655.655 0 00.088-.382c-.016-.215-.104-.318-.203-.36v-.039c0-.274-.028-.673-.077-.931a1.598 1.598 0 00-.61-1.034 1.736 1.736 0 00-1.285-.3c.236.285.42.622.529.996.038.124.065.248.083.36.048.257.079.578.093.867a1.736 1.736 0 01.08 1.624 1.65 1.65 0 01-.217.453 1.42 1.42 0 01-.176.209c-.08.204-.178.4-.292.585l.202.083c.285.117.64.261.9.387.226.11.475.245.698.414.213.161.476.408.63.764.034.08.065.159.091.235zM12.14 14.12l.09.037zM11 1c.55 0 1 .45 1 1 0 .28-.11.53-.29.7L8 6.41v1.374a2.813 2.813 0 00-.833 1.589 6.925 6.925 0 00-.092.86 1.64 1.64 0 00-.25.739l-.001.004c-.02.217.006.413.046.573L5.71 12.71A1.003 1.003 0 014 12V6.41L.29 2.71A1.003 1.003 0 011 1h10z"];

var shield = ["M8 16c4.667-3.048 7-7.238 7-12.571-1.556 0-3.889-1.143-7-3.429-3.111 2.286-5.444 3.429-7 3.429C1 8.762 3.333 12.952 8 16zM8 2.121c2.005 1.388 3.715 2.304 5.186 2.735-.342 3.702-2.05 6.683-5.186 9.038V2.121z"];

var ship = ["M5.44.804L5.2 2H3a1 1 0 00-1 1v3.714l-1.08.309a.988.988 0 00-.69 1.192c.366 1.432.897 3.324 1.309 4.26a.644.644 0 00.005.01c-.175.01-.356.015-.544.015a.5.5 0 000 1c2.067 0 3.414-.543 4.161-.917.55.373 1.505.917 2.839.917 1.32 0 2.27-.533 2.822-.905l.004.002c.196.105.48.24.856.374.75.268 1.857.529 3.318.529a.5.5 0 000-1c-.295 0-.572-.012-.834-.032a.995.995 0 00.308-.458l1.208-3.74a1 1 0 00-.677-1.269L14 6.714V3a1 1 0 00-1-1h-2.2L10.56.804A1 1 0 009.58 0H6.42a1 1 0 00-.98.804zM4 6.143l3-.857V4H4v2.143zm5-.857l3 .857V4H9v1.286zm-4.036 8.273a.5.5 0 01.527.034c.455.325 1.277.907 2.509.907s2.054-.582 2.51-.907a.5.5 0 01.579-.001l.006.004.036.023c.034.022.09.055.168.097.154.082.394.197.72.313.649.232 1.642.471 2.981.471a.5.5 0 010 1c-1.46 0-2.568-.261-3.318-.53a6.316 6.316 0 01-.856-.373l-.004-.002c-.552.372-1.502.905-2.822.905-1.334 0-2.289-.544-2.839-.917-.747.374-2.094.917-4.161.917a.5.5 0 010-1c2.129 0 3.384-.63 3.964-.94z"];

var shop = ["M3 2h10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm9 11H4v-3H2v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2v3zm4-6l-1.01-3.17C14.9 3.36 14.49 3 14 3H2c-.49 0-.9.36-.98.83L.01 7H0c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2z"];

var shoppingCart = ["M14 10H7.72l-.33-1H13c.39 0 .72-.23.89-.56h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 1.29 4.44 1 4 1H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l2.33 7H4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 5h7.33l-1 2H6.72l-.67-2z"];

var signalSearch = ["M5.474 7.971A5.31 5.31 0 006.66 8.9l.007.019.018.056c.015.038.038.06.045.098l1.5 5.999a.75.75 0 01-1.455.36l-.42-1.68h-.704l-.42 1.68a.746.746 0 01-.907.547.746.746 0 01-.547-.907l1.5-6c.007-.037.03-.06.044-.097.015-.037.015-.075.038-.112a.722.722 0 01-.105-.36c0-.207.084-.394.22-.53zM2.795 5.277a.763.763 0 00-.015-1.065.756.756 0 00-1.065.015c-2.286 2.34-2.286 6.21 0 8.549a.747.747 0 101.072-1.042c-1.709-1.763-1.709-4.702.008-6.457zM7.808 9.388a5.318 5.318 0 001.58.211 2.236 2.236 0 01-.656.98.756.756 0 01-1.057-.098.756.756 0 01.097-1.057l.036-.036zM11.544 9.105l.378.378a6.02 6.02 0 01-1.638 3.285c-.285.3-.757.3-1.057.015a.74.74 0 01-.015-1.057 4.52 4.52 0 001.185-2.24c.4-.083.785-.212 1.147-.381z", "M4.054 9.424c-.427-.352-.352-1.582-.03-1.822a.752.752 0 00.15-1.05.752.752 0 00-1.05-.15c-1.079.802-1.221 3.18-.03 4.177a.75.75 0 10.96-1.155zM9.318 0a4.318 4.318 0 014.317 4.318c0 .206-.02.402-.049.598-.01.05-.01.088-.02.138-.039.196-.078.382-.137.569v.01c-.059.186-.137.363-.216.54l-.039.087a5.285 5.285 0 01-.294.51l2.884 2.886a.878.878 0 01.236.559.787.787 0 01-.785.785.785.785 0 01-.56-.226L11.772 7.89a5.285 5.285 0 01-.51.295l-.089.039c-.176.079-.353.157-.54.216h-.01a3.701 3.701 0 01-.568.137c-.05.01-.099.02-.138.02-.196.03-.392.049-.598.049A4.318 4.318 0 015 4.327 4.332 4.332 0 019.318 0zm-.02 1.1A3.195 3.195 0 006.1 4.298a3.195 3.195 0 003.198 3.198 3.195 3.195 0 003.198-3.198A3.195 3.195 0 009.298 1.1z"];

var simCard = ["M13.71 4.29l-4-4A.997.997 0 009 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.28-.11-.53-.29-.71zM7 6h2v2H7V6zM4 6h2v2H4V6zm2 8H4v-2h2v2zm3 0H7v-2h2v2zm3 0h-2v-2h2v2zm0-3H4V9h8v2zm0-3h-2V6h2v2z"];

var slash = ["M10 2a.99.99 0 00-.96.73l-2.99 9.96A1.003 1.003 0 007 14c.46 0 .85-.31.96-.73l2.99-9.96A1.003 1.003 0 0010 2z"];

var smallCross = ["M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z"];

var smallInfoSign = ["M14 8A6 6 0 112 8a6 6 0 0112 0zM9 4v2H7V4h2zm0 3v4h1v1H6v-1h1V8H6V7h3z"];

var smallMinus = ["M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"];

var smallPlus = ["M11 7H9V5c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V9h2c.55 0 1-.45 1-1s-.45-1-1-1z"];

var smallSquare = ["M5 5v6h6V5H5zM4 3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H4z"];

var smallTick = ["M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z"];

var snowflake = ["M13.364 9l.879.879a1 1 0 11-1.415 1.414l-2.12-2.121A1.003 1.003 0 0110.568 9H9v1.604c.042.03.083.065.121.103l2.122 2.121a1 1 0 01-1.415 1.415L9 13.414V15a1 1 0 01-2 0v-1.636l-.879.879a1 1 0 11-1.414-1.415l2.121-2.12c.054-.054.111-.1.172-.139V9H5.38c-.038.06-.084.118-.137.172l-2.122 2.12A1 1 0 111.707 9.88L2.586 9H1a1 1 0 110-2h1.536l-.829-.828a1 1 0 011.414-1.415L5.243 6.88c.038.038.072.079.103.121H7V5.38a1.003 1.003 0 01-.172-.137L4.708 3.12A1 1 0 016.12 1.707L7 2.586V1a1 1 0 112 0v1.536l.828-.829a1 1 0 011.415 1.414L9.12 5.243A1.007 1.007 0 019 5.346V7h1.604c.03-.042.065-.083.103-.121l2.121-2.122a1 1 0 011.415 1.415L13.414 7H15a1 1 0 010 2h-1.636z"];

var socialMedia = ["M9.5 4c.4 0 .8-.1 1.1-.3C12 4.5 12.9 6 13 7.6c0 .5.5.9 1 .9.6 0 1-.4 1-1v-.2c-.2-2.4-1.5-4.4-3.5-5.5-.1-1-.9-1.8-2-1.8s-2 .9-2 2 .9 2 2 2zM4 8.5c0-.7-.4-1.3-.9-1.7.3-1.4 1.2-2.6 2.5-3.3.3-.1.6-.4.6-.9s-.4-1-1-1c-.2 0-.3 0-.5.1-1.9 1-3.2 2.8-3.6 5C.4 7.1 0 7.8 0 8.5c0 1.1.9 2 2 2s2-.9 2-2zm8.8 1.2c-1.1 0-2 .9-2 2v.3c-.8.6-1.8.9-2.8.9-1.2 0-2.3-.4-3.2-1.1-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.6.3.8C4.6 14.4 6.2 15 8 15c1.5 0 3-.5 4.1-1.3.2.1.5.1.7.1 1.1 0 2-.9 2-2s-.9-2.1-2-2.1z"];

var sort = ["M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm3-9h7c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7 2H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0 8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"];

var sortAlphabetical = ["M6 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 002 12a1.003 1.003 0 00-.71 1.71l2 2c.19.18.44.29.71.29.28 0 .53-.11.71-.29l2-2c.18-.18.29-.43.29-.71a.99.99 0 00-1-1zm7.93-.95v-1.04H9.25v1.11h2.94L9 14.96V16h5.02v-1.11h-3.27l3.18-3.84zm-1.42-4.84l.62 1.78H15L11.94.01H10.1L7 7.99h1.81l.64-1.78h3.06zm-1.52-4.24h.02l1.03 2.93H9.92l1.07-2.93z"];

var sortAlphabeticalDesc = ["M5.99 11.99c-.28 0-.53.11-.71.29l-.29.29V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29a1.003 1.003 0 00-1.42 1.42l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l2-2c.18-.18.29-.43.29-.71 0-.56-.45-1.01-1-1.01zM12.7 10h-1.38L9 15.99h1.36l.48-1.33h2.3l.46 1.33H15L12.7 10zm-1.51 3.67l.8-2.2h.02l.77 2.2h-1.59zm3.8-7.17h-4.57l4.45-5.12V0H8.34v1.48h4.1L7.99 6.59v1.39h7V6.5z"];

var sortAsc = ["M8 7h3c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h1c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 8h5c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm-3 1c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm10 1H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"];

var sortDesc = ["M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 001 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 005 12zm4 1H8c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H8c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"];

var sortNumerical = ["M6 11.99c-.28 0-.53.11-.71.29l-.29.3V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l2-2A1.003 1.003 0 006 11.99zm7.91-.08c-.06-.36-.17-.68-.33-.96-.16-.28-.37-.51-.64-.69-.27-.17-.61-.26-1.03-.26-.28 0-.54.06-.78.17-.23.11-.43.26-.6.45-.17.19-.3.41-.39.67a2.492 2.492 0 00-.04 1.52 1.623 1.623 0 00.89 1.03c.22.11.45.16.68.16.26 0 .5-.05.7-.15s.38-.26.53-.5l.02.02c-.01.16-.03.34-.07.54-.03.2-.09.4-.17.57-.08.18-.18.33-.31.45s-.29.19-.5.19a.63.63 0 01-.48-.21c-.13-.14-.21-.31-.25-.5H10.1c.03.25.1.48.19.68.1.2.22.37.38.5.16.14.33.24.54.31s.42.1.65.1c.39 0 .72-.09.99-.27.27-.18.49-.41.66-.7.17-.29.29-.61.37-.97.08-.36.12-.72.12-1.07 0-.36-.03-.72-.09-1.08zm-1.14.54c-.04.13-.09.24-.16.34a.78.78 0 01-.27.24c-.11.06-.24.09-.39.09a.75.75 0 01-.37-.09.777.777 0 01-.26-.25c-.07-.1-.12-.22-.15-.35-.03-.13-.05-.26-.05-.4 0-.13.02-.26.05-.39.04-.13.09-.24.16-.34.07-.1.16-.18.26-.24s.22-.09.35-.09c.14 0 .26.03.37.09.11.06.2.14.28.24a1.32 1.32 0 01.23.74c0 .15-.02.28-.05.41zm-1.56-4.47H13V0h-1.42c-.05.3-.16.56-.31.76-.16.21-.35.37-.58.5-.23.13-.49.21-.78.26-.3.05-.6.07-.91.06V2.8h2.21v5.18z"];

var sortNumericalDesc = ["M6 11.99c-.28 0-.53.11-.71.29l-.29.3V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29a.982.982 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 006 11.99zm7.86-9.45c-.09-.48-.26-.9-.5-1.28S12.8.58 12.4.35C12 .12 11.49 0 10.86 0c-.43 0-.82.07-1.17.22s-.65.35-.9.6-.44.55-.58.89c-.14.34-.2.71-.2 1.11 0 .31.05.61.15.91.1.3.26.57.48.8.23.24.52.43.85.58.33.14.68.21 1.03.21.4 0 .75-.07 1.05-.2.3-.13.57-.35.79-.66l.02.02c-.02.21-.05.45-.1.73-.05.27-.13.53-.25.76-.12.24-.27.44-.47.6-.19.16-.44.25-.75.25a.98.98 0 01-.72-.29c-.19-.18-.31-.4-.37-.66H8.15c.05.34.14.64.29.9.15.26.34.49.57.67.23.18.5.32.8.41.31.1.63.15.98.15.58 0 1.08-.12 1.48-.36.4-.24.73-.55.99-.93.26-.39.44-.82.56-1.29.12-.48.18-.96.18-1.44s-.05-.96-.14-1.44zm-1.71.72c-.05.17-.14.32-.24.46-.11.13-.24.24-.41.31-.16.08-.36.12-.58.12-.21 0-.39-.04-.55-.13-.16-.08-.29-.19-.39-.33-.12-.14-.19-.29-.24-.46-.05-.17-.08-.35-.08-.54 0-.18.03-.35.08-.52.06-.16.14-.31.25-.44.11-.13.24-.24.4-.32.16-.08.33-.12.52-.12.21 0 .4.04.56.12.16.08.3.19.41.32.11.14.2.29.26.46.06.17.09.35.09.52 0 .2-.03.38-.08.55zm-.46 7.31c-.12.15-.26.28-.44.37-.17.09-.37.16-.58.2-.22.04-.44.05-.67.05v.92h1.65v3.88h1.33V10h-1.06c-.03.23-.11.42-.23.57z"];

var splitColumns = ["M12 10a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9V2h3v1.71c.31-.13.64-.21 1-.21s.69.08 1 .21V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2.71c.31-.13.64-.21 1-.21s.69.08 1 .21V2h3v5H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 9H7v5H4v-1.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V15c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V14H9V9h3.59l-.29.29c-.19.18-.3.43-.3.71z"];

var square = ["M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V2h12v12z"];

var stackedChart = ["M10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm3 10h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zm2-7c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V5zm-5 1H7v3h3V6zM5 7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h3V7zm3 5h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1zm7 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1z"];

var stadiumGeometry = ["M12 6H4a2 2 0 100 4h8a2 2 0 100-4zM4 4a4 4 0 100 8h8a4 4 0 000-8H4z"];

var star = ["M8 0l2.5 5.3 5.5.8-4 4.1.9 5.8L8 13.3 3.1 16l.9-5.8-4-4.1 5.5-.8z"];

var starEmpty = ["M16 6.11l-5.53-.84L8 0 5.53 5.27 0 6.11l4 4.1L3.06 16 8 13.27 12.94 16 12 10.21l4-4.1zM4.91 13.2l.59-3.62L3 7.02l3.45-.53L8 3.2l1.55 3.29 3.45.53-2.5 2.56.59 3.62L8 11.49 4.91 13.2z"];

var stepBackward = ["M12 3c-.24 0-.44.09-.62.23l-.01-.01L7 6.72V4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9.28l4.38 3.5.01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var stepChart = ["M15 12H2v-2h3c.55 0 1-.45 1-1V7h2v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h-2V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var stepForward = ["M12 3h-1c-.55 0-1 .45-1 1v2.72l-4.38-3.5v.01A.987.987 0 005 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01L10 9.28V12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var stop = ["M12 3H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var stopwatch = ["M9 2v1.083A6.002 6.002 0 018 15 6 6 0 017 3.083V2H6a1 1 0 110-2h4a1 1 0 010 2H9zM8 5a4 4 0 104 4H8V5z"];

var strikethrough = ["M14 7H8.65c-.38-.09-.73-.18-1.04-.26-.31-.08-.49-.13-.54-.14-.43-.11-.79-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72s.32-.34.54-.46c.22-.11.46-.19.72-.24.26-.05.52-.07.77-.07.74 0 1.36.15 1.84.46.32.2.55.5.68.9h2.22c-.06-.33-.17-.64-.32-.92-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7S8.59 2 7.95 2c-.55 0-1.1.07-1.63.2-.54.13-1.02.34-1.45.62-.42.28-.76.63-1.02 1.05-.26.42-.39.92-.39 1.5 0 .3.04.59.13.88.08.26.21.51.39.75H2c-.55 0-1 .45-1 1s.45 1 1 1h7.13c.25.07.49.14.71.22.25.09.48.23.7.44.21.21.32.53.32.97 0 .21-.05.43-.14.63-.09.21-.24.39-.45.55-.21.16-.48.29-.81.39-.33.1-.73.15-1.2.15-.44 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.01 0-.01-.01-.02-.02H3.14a3.68 3.68 0 001.39 2.03c.46.34 1 .58 1.62.74.61.15 1.27.23 1.97.23.61 0 1.2-.07 1.79-.2.58-.13 1.11-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.3-.05-.6-.15-.9-.05-.19-.13-.36-.22-.52H14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var style = ["M14 14H2V2h8.76l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6.24l-2 2V14zm1.4-14L9.7 5.7l2.1 2.1L16 3.6V0h-.6zM4 11.92c2.33.15 4.42.15 6.15-1.5.82-.83.82-2.25 0-3.08-.45-.38-.98-.6-1.5-.6-.53 0-1.05.22-1.43.6-.82.91-1.27 3.38-3.22 4.58z"];

var swapHorizontal = ["M0 7.02L.05 7H0v.02zm2-2.03h9.57l-1.29 1.29A1.003 1.003 0 0011.7 7.7l2.99-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2.99-3a1.07 1.07 0 00-.71-.28 1.003 1.003 0 00-.71 1.71L11.57 3H2c-.55 0-1 .45-1 1a1 1 0 001 .99zM15.96 9H16v-.02l-.04.02zM14 11.01H4.43l1.29-1.29A1.003 1.003 0 004.3 8.3l-2.99 3a.99.99 0 00-.29.7c0 .28.11.53.29.71l2.99 3a1.003 1.003 0 001.42-1.42L4.43 13H14c.55 0 1-.45 1-1s-.45-.99-1-.99z"];

var swapVertical = ["M9 0h-.02L9 .04V0zM7 16h.02L7 15.95V16zM4.7 1.31c-.18-.18-.43-.29-.7-.29s-.53.11-.71.29l-3 2.99a1.003 1.003 0 001.42 1.42L3 4.43V14c0 .55.45 1 1 1s1-.45 1-1V4.43l1.29 1.29c.18.18.43.29.7.29A1.003 1.003 0 007.7 4.3l-3-2.99zM15 9.99c-.28 0-.53.11-.71.29L13 11.57V2c0-.55-.45-1-1-1s-1 .45-1 1v9.57l-1.29-1.29a.99.99 0 00-.7-.29 1.003 1.003 0 00-.71 1.71l3 2.99c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-2.99c.18-.18.29-.43.29-.71-.01-.55-.46-1-1.01-1z"];

var _switch = ["M9.293 2.293l1.414 1.414-4.999 5a3 3 0 11-1.415-1.415l5-5zM13 7a3 3 0 110 6 3 3 0 010-6zM3 9a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"];

var symbolCircle = ["M8 3.01a5 5 0 100 10 5 5 0 100-10z"];

var symbolCross = ["M12 6.01h-2v-2c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1v-2c0-.56-.45-1-1-1z"];

var symbolDiamond = ["M12 8.01c0-.19-.07-.36-.16-.51l.01-.01-3-5-.01.01c-.17-.29-.48-.49-.84-.49s-.67.2-.84.49l-.02-.01-3 5 .02.01c-.09.15-.16.32-.16.51s.07.36.16.51h-.02l3 5 .01-.01c.18.29.49.5.85.5s.67-.2.84-.49l.01.01 3-5-.01-.01c.09-.16.16-.32.16-.51z"];

var symbolRectangle = ["M13 4H3c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1h10c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1z"];

var symbolSquare = ["M12 3.01H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.56-.45-1-1-1z"];

var symbolTriangleDown = ["M13 4.01c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 .16.05.31.11.44H3.1l4 8h.01c.16.33.49.56.89.56s.72-.23.89-.56h.01l4-8h-.01c.06-.14.11-.28.11-.44z"];

var symbolTriangleUp = ["M12.89 11.56l-3.99-8h-.01c-.17-.32-.5-.55-.89-.55s-.72.23-.89.55H7.1l-4 8h.01c-.06.14-.11.29-.11.45 0 .55.45 1 1 1h8c.55 0 1-.45 1-1 0-.16-.05-.31-.11-.45z"];

var syringe = ["M11.146.146a.5.5 0 000 .708l.647.646L10.5 2.793 8.854 1.146a.5.5 0 10-.708.708l.647.646-1.146 1.146-5.5 5.5a.5.5 0 000 .708l.646.646-1.647 1.646a.5.5 0 000 .708l.647.646-1.647 1.646a.5.5 0 00.708.708L2.5 14.207l.646.647a.5.5 0 00.708 0L5.5 13.207l.646.647a.5.5 0 00.708 0l5.5-5.5L13.5 7.207l.646.647a.5.5 0 00.708-.708L13.207 5.5 14.5 4.207l.646.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0zM11.293 8l-.793.793-1.646-1.647a.5.5 0 10-.708.708L9.793 9.5 8.5 10.793 6.854 9.146a.5.5 0 10-.708.708L7.793 11.5 6.5 12.793 3.207 9.5 8 4.707 11.293 8zM8.707 4L12 7.293l.793-.793L9.5 3.207 8.707 4zm-6.5 8.5L3.5 13.793 4.793 12.5 3.5 11.207 2.207 12.5zm11.586-9L12.5 2.207 11.207 3.5 12.5 4.793 13.793 3.5z"];

var tag = ["M1 3a2 2 0 012-2h4.584a2 2 0 011.414.586l5.413 5.412a2 2 0 010 2.829L9.827 14.41a2 2 0 01-2.829 0L1.586 8.998A2 2 0 011 7.584V3zm3.487-.007a1.494 1.494 0 100 2.988 1.494 1.494 0 000-2.988z"];

var takeAction = ["M9 11a1.003 1.003 0 001.71.71l4-4a1.003 1.003 0 00-1.42-1.42l-4 4c-.18.18-.29.43-.29.71zM4 6c.28 0 .53-.11.71-.29l4-4A1.003 1.003 0 007.29.29l-4 4A1.003 1.003 0 004 6zm4 4l5-5-.79-.79.5-.5a1.003 1.003 0 00-1.42-1.42l-.5.5L10 2 5 7l.79.79-5.5 5.5a1.003 1.003 0 001.42 1.42l5.5-5.5L8 10zm7 4H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z"];

var tank = ["M3.7 3.4a1 1 0 01.8-.4h5.086a1 1 0 01.707.293L11 4h3a1 1 0 110 2h-3v1h2.5a2.5 2.5 0 010 5h-11a2.5 2.5 0 010-5H3V4.667a1 1 0 01.2-.6l.5-.667zM2.5 9h11a.5.5 0 010 1h-11a.5.5 0 110-1z"];

var target = ["M7 4a1 1 0 012 0v2a1 1 0 01-2 0V4zM10 7a1 1 0 000 2h2a1 1 0 000-2h-2zM3 8a1 1 0 011-1h2a1 1 0 010 2H4a1 1 0 01-1-1zM8 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z", "M8 16A8 8 0 108 0a8 8 0 000 16zm0-2A6 6 0 108 2a6 6 0 000 12z"];

var taxi = ["M15.12 6.63h-.38L15 7c-.01.3-.01.64 0 .98V8c0 .07-.03.13-.04.19h.02L14 13.1v.9c0 .55-.45 1-1 1s-1-.45-1-1v-1H4v1c0 .55-.45 1-1 1s-1-.45-1-1v-.9l-.98-4.9h.02C1.03 8.13 1 8.07 1 8H.99c0-.33 0-.67.01-1l.26-.37H.88C.4 6.63 0 6.21 0 5.69s.4-.94.88-.94h1.05l.77-2.11c.19-.53.76-1.08 1.26-1.24 0 0 .68-.2 2.05-.32C6.01 1.05 6 1.03 6 1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1 0 .03-.01.05-.02.08 1.37.12 2.05.32 2.05.32.51.15 1.08.71 1.27 1.24l.76 2.12h1.05c.49 0 .89.42.89.93 0 .52-.4.94-.88.94zM11 10h2V8h-2v2zm-8 0h2V8H3v2zm10-5l-.73-1.63C12.21 3.19 12.18 3 12 3H4c-.18 0-.21.19-.27.37L3 5c-.06.18-.18 1 0 1h10c.18 0 .06-.82 0-1z"];

var temperature = ["M8.5 0A1.5 1.5 0 007 1.5v7.837a3.5 3.5 0 103 0V1.5A1.5 1.5 0 008.5 0zM2 5.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM2.5 1a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 3.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM4.5 7a.5.5 0 000 1h1a.5.5 0 000-1h-1z"];

var textHighlight = ["M9 10H2V6h7V4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h8v-2zm4 3h-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.37 0-.7.11-1 .28-.3-.17-.63-.28-1-.28H9c-.55 0-1 .45-1 1s.45 1 1 1h1v10H9c-.55 0-1 .45-1 1s.45 1 1 1h1c.37 0 .7-.11 1-.28.3.17.63.28 1 .28h1c.55 0 1-.45 1-1s-.45-1-1-1zm2-9h-2v2h1v4h-1v2h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"];

var th = ["M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1zM6 13H2v-2h4v2zm0-3H2V8h4v2zm0-3H2V5h4v2zm8 6H7v-2h7v2zm0-3H7V8h7v2zm0-3H7V5h7v2z"];

var thDerived = ["M5.6 10l-.3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2-2c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-2-2C6.5 6.1 6.3 6 6 6c-.5 0-1 .4-1 1 0 .3.1.5.3.7l.3.3H1c-.6 0-1 .4-1 1s.4 1 1 1h4.6zM15 1H2c-.5 0-1 .5-1 1v5h2V5h11v2H8.8l.6.6c.1.1.2.3.3.4H14v2H9.7c-.1.1-.2.3-.3.4l-.6.6H14v2H3v-2H1v3c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1z"];

var thDisconnect = ["M12 1h3c.6 0 1 .5 1 1v12c0 .6-.4 1-1 1h-4.97l.286-2H14v-2h-3.398l.143-1H14V8h-2.97l.143-1H14V5h-2.541l.51-3.576C11.99 1.282 12 1.14 12 1zM5.97 1l-.572 4H2v2h3.112L4.97 8H2v2h2.684l-.143 1H2v2h2.255l-.225 1.576c-.02.142-.03.284-.03.424H1c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1h4.97zM8.01.859a1 1 0 111.98.282l-2 14a1 1 0 11-1.98-.282l2-14z"];

var thFiltered = ["M10 10h3l1.78-2.226a1 1 0 00.22-.625V4.3l1-.9V14c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V2c0-.5.4-1 1-1h4.333L9 4.3V5H7v2h2v1H7v2h3zm-4 3v-2H2v2h4zm0-3V8H2v2h4zm0-3V5H2v2h4zm8 6v-2H7v2h7z", "M15.48 0c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V3.71L8.17.98A.566.566 0 018 .57c0-.31.26-.57.57-.57h6.91z"];

var thList = ["M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1zm-1 12H2v-2h12v2zm0-3H2V8h12v2zm0-3H2V5h12v2z"];

var thirdParty = ["M4.448 9h.573c.025-.044.051-.088.079-.13A9.43 9.43 0 015.183 8h-.995A10.424 10.424 0 014 6c0-.717.068-1.391.188-2h3.624c.065.33.114.678.146 1.042A3.42 3.42 0 018.46 5c.168 0 .336.013.502.037A11.089 11.089 0 008.829 4h1.755c.148.338.26.696.33 1.068l.176-.028a2.74 2.74 0 01.5 0c.113 0 .225.006.336.018A6.001 6.001 0 000 6a6 6 0 005.672 5.991 4 4 0 01-.202-.441 1.842 1.842 0 01-.24-.26 1.82 1.82 0 01-.26-.55 2 2 0 01-.185-.92l-.012-.025A6.036 6.036 0 014.448 9zM3.171 8H1.416A4.983 4.983 0 011 6c0-.711.148-1.388.416-2h1.755C3.06 4.626 3 5.299 3 6c0 .701.06 1.374.17 2zM2 9H3.4c.18.618.412 1.167.685 1.62A5.015 5.015 0 012 9zm2.448-6h3.104a6.036 6.036 0 00-.325-.795C6.737 1.225 6.246 1 6 1c-.246 0-.737.225-1.227 1.205-.119.238-.228.504-.325.795zm4.15 0H10a5.016 5.016 0 00-2.086-1.62c.273.453.506 1.002.685 1.62zM4.087 1.38A6.834 6.834 0 003.401 3H2a5.015 5.015 0 012.086-1.62zM13.476 16s.118-.385-.172-1.046c-.228-.533-1.172-.915-2.015-1.257a22.113 22.113 0 01-.584-.243c-.808-.356-.816-.588-.825-.872-.002-.041-.003-.084-.007-.128v-.139c.314-.284.573-.669.745-1.115 0 0 .008-.023.008-.03.04-.1.071-.2.095-.3.212-.04.33-.27.377-.485.054-.093.149-.3.125-.547-.024-.307-.15-.453-.29-.515v-.054c0-.392-.04-.961-.11-1.33a2.16 2.16 0 00-.071-.308 2.283 2.283 0 00-.8-1.17C9.558 6.162 9.001 6 8.506 6c-.495 0-1.052.162-1.445.462A2.294 2.294 0 006.19 7.93c-.07.369-.11.946-.11 1.338v.046c-.14.062-.274.208-.306.523a1 1 0 00.126.547c.047.215.173.453.393.492.02.083.05.172.078.253l.016.047c0 .008.008.015.008.015v.008c.172.454.44.846.761 1.115a.804.804 0 01-.004.072c-.002.02-.004.04-.004.06l-.007.105c-.016.287-.028.523-.848.894-.176.078-.37.156-.568.237-.847.345-1.802.735-2.031 1.27C3.41 15.616 3.52 16 3.52 16h9.955zm2.503-1.25h-1.413a4.05 4.05 0 00-.116-.294c-.192-.445-.52-.753-.787-.955-.278-.21-.59-.38-.873-.517a21.373 21.373 0 00-1.122-.483l-.02-.008-.235-.097c.144-.23.266-.476.366-.731.089-.087.162-.177.22-.26.132-.192.217-.391.271-.568.117-.251.24-.64.199-1.105a2.025 2.025 0 00-.299-.925 8.626 8.626 0 00-.116-1.083 3.426 3.426 0 00-.104-.45 3.476 3.476 0 00-.661-1.246A2.18 2.18 0 0111.63 6c.432 0 .92.141 1.264.404.33.256.584.612.7 1.023.028.087.049.182.062.27.062.322.097.82.097 1.163v.048c.123.053.233.181.254.45a.82.82 0 01-.11.478c-.041.189-.144.391-.33.425a1.92 1.92 0 01-.082.262c0 .007-.007.027-.007.027-.151.39-.378.727-.653.976v.121c.004.038.005.075.006.111v.002c.008.247.015.451.722.762.158.07.332.14.51.213.739.299 1.565.634 1.764 1.1.254.579.151.915.151.915z"];

var thumbsDown = ["M2 2H0v7h2c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm13.99 4.38c.08-.58-.44-1.02-1.15-1.05-.25-.01-.52-.03-.81-.05.02 0 .05-.01.07-.01.7-.1 1.34-.49 1.41-1.07.06-.58-.46-.97-1.17-1.04-.25-.02-.52-.04-.79-.06.47-.15.84-.42.87-.93.04-.58-.79-1.03-1.5-1.09-.27-.02-.51-.04-.73-.05h-.09c-.23-.02-.43-.02-.62-.03C8.35.95 5.66 1.47 4 2.51v6c2.14 1.29 4.76 3.59 4.21 5.51-.18.59.31 1.05.98.98.81-.09 1.37-.91 1.4-1.78.04-1-.15-2.01-.5-2.91-.04-.25.01-.5.37-.53.49-.03 1.11-.06 1.59-.08.26 0 .51-.01.75-.02h.01c.41-.02.8-.05 1.13-.09.7-.09 1.35-.47 1.43-1.05.08-.58-.44-.97-1.15-1.05-.05-.01-.11-.01-.16-.02.17-.01.33-.03.49-.05.72-.08 1.37-.46 1.44-1.04z"];

var thumbsUp = ["M15.99 9.62c-.08-.58-.73-.96-1.43-1.05-.15-.02-.32-.04-.49-.05.06-.01.11-.01.16-.02.71-.08 1.23-.47 1.15-1.05-.08-.58-.73-.96-1.43-1.05-.34-.04-.72-.07-1.13-.09h-.01c-.24-.01-.49-.02-.75-.02-.48-.02-1.11-.04-1.59-.08-.36-.03-.41-.28-.37-.53.35-.9.54-1.91.5-2.91-.04-.85-.6-1.68-1.41-1.77-.67-.07-1.16.39-.99.98C8.76 3.91 6.13 6.2 4 7.49v6c1.66 1.03 4.35 1.56 7.48 1.5.19 0 .39-.01.62-.02h.09c.22-.01.46-.03.73-.05.71-.06 1.54-.51 1.5-1.09-.03-.51-.4-.79-.87-.93.27-.02.54-.04.79-.06.71-.06 1.24-.45 1.17-1.04-.06-.58-.7-.97-1.41-1.07-.02 0-.05-.01-.07-.01.29-.02.57-.03.81-.05.71-.03 1.23-.47 1.15-1.05zM2 7H0v7h2c.55 0 1-.45 1-1V8c0-.56-.45-1-1-1z"];

var tick = ["M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z"];

var tickCircle = ["M8 16c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-11c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z"];

var time$1 = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-6.41V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L9 7.59z"];

var timelineAreaChart = ["M15 2.59L9.91 7.68 6.6 5.2l-.01.01C6.42 5.09 6.23 5 6 5c-.24 0-.44.09-.62.23v-.01L3 7.12V11h12V2.59zM15 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var timelineBarChart = ["M8 12h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zm5 0h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm2 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z"];

var timelineEvents = ["M8 11H7v1h1v-1zm-4 0H3v1h1v-1zm7-8c.6 0 1-.5 1-1V1c0-.5-.4-1-1-1s-1 .5-1 1v1c0 .5.5 1 1 1zM4 3c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1S3 .5 3 1v1c0 .5.5 1 1 1zm10-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zm-1-2h-1v1h1V7z"];

var timelineLineChart = ["M15 12H2V9.41l3-3L8.29 9.7c.18.19.43.3.71.3s.53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42L9 7.59l-3.29-3.3C5.53 4.11 5.28 4 5 4s-.53.11-.71.29L2 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var tint = ["M7.88 1s-4.9 6.28-4.9 8.9c.01 2.82 2.34 5.1 4.99 5.1 2.65-.01 5.03-2.3 5.03-5.13C12.99 7.17 7.88 1 7.88 1z"];

var torch = ["M5 15c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H5v1zm7-15H4c-.55 0-1 .45-1 1v1h10V1c0-.55-.45-1-1-1zM5 7v6h6V7l2-4H3l2 4zm2 0c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V7z"];

var tractor = ["M3.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm9.5 1a3 3 0 110 6 3 3 0 010-6zm-9.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9.5 1a1 1 0 100 2 1 1 0 000-2zM5 0c1.46 0 2.527.668 3 2l.815 3.255a78.9 78.9 0 012.186.195L11 2h2l.001 3.688c.698.095 1.37.198 2.013.312.623.11.986.479.986 1v3.354a4.001 4.001 0 00-6.873 1.645H7.999l-.026-.002A4.5 4.5 0 00.659 9.01l-.654.001v-.829C.003 7.386.002 6.423 0 6.022 0 5.5.376 4.99 1 4.99V1a1 1 0 011-1h3zm1 2H3v2.99c1.29.024 2.554.069 3.781.135L6 2z"];

var train = ["M13 14h-1l1 2H3l1-2H3c-1.1 0-2-.9-2-2V2C1 .9 4.13 0 8 0s7 .9 7 2v10c0 1.1-.9 2-2 2zm-2-2h2v-2h-2v2zM9 7h4V3H9v4zm-6 5h2v-2H3v2zm0-5h4V3H3v4z"];

var translate = ["M15.89 14.56l-3.99-8h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56h-.01L9 8.76 7.17 7.38l.23-.18C8.37 6.47 9 5.31 9 4V3h1c.55 0 1-.45 1-1s-.45-1-1-1H7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H1c-.55 0-1 .45-1 1s.45 1 1 1h6v1c0 .66-.32 1.25-.82 1.61l-.68.51-.68-.5C4.32 5.25 4 4.66 4 4H2c0 1.31.63 2.47 1.6 3.2l.23.17L1.4 9.2l.01.01C1.17 9.4 1 9.67 1 10c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01 2.9-2.17 2.6 1.95-1.99 3.98h.01c-.07.13-.12.28-.12.44 0 .55.45 1 1 1 .39 0 .72-.23.89-.56h.01L8.62 14h4.76l.72 1.45h.01c.17.32.5.55.89.55.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44zM9.62 12L11 9.24 12.38 12H9.62z"];

var trash = ["M14.49 3.99h-13c-.28 0-.5.22-.5.5s.22.5.5.5h.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-8.5 9c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm2-12h-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1h-4c-.55 0-1 .45-1 1v1h14v-1c0-.55-.45-1-1-1z"];

var tree = ["M9 11.857V16H7v-4.143L1 13l3.885-4.44L3 9l3.07-4.297L5 5l3-5 3 5-1.07-.297L13 9l-1.885-.44L15 13l-6-1.143z"];

var trendingDown = ["M15 7c-.55 0-1 .45-1 1v.59l-4.29-4.3A.997.997 0 009 4c-.16 0-.31.05-.44.11V4.1L5 5.88 1.45 4.11v.01C1.31 4.05 1.16 4 1 4c-.55 0-1 .45-1 1 0 .39.23.72.56.89v.01l4 2v-.01c.13.06.28.11.44.11s.31-.05.44-.11v.01L8.8 6.22 12.59 10H12c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z"];

var trendingUp = ["M15 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h.59L8.8 9.78 5.45 8.11v.01C5.31 8.05 5.16 8 5 8s-.31.05-.44.11V8.1l-4 2v.01c-.33.17-.56.5-.56.89 0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L5 10.12l3.55 1.78v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L14 7.41V8c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z"];

var truck = ["M12.5 0a.5.5 0 01.5.5V9a1 1 0 011 1v2h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H13v1a1 1 0 01-2 0v-1H5v1a1 1 0 01-2 0v-1H1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H2v-2a1 1 0 011-1V.5a.5.5 0 011 0V3a2 2 0 012-2h4a2 2 0 012 2V.5a.5.5 0 01.5-.5zM9 8H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1zm3.5 3h-1a.5.5 0 100 1h1a.5.5 0 100-1zm-8 0h-1a.5.5 0 100 1h1a.5.5 0 100-1zM9 9a.5.5 0 01.5.5v1l-.008.09A.5.5 0 019 11H7l-.09-.008a.5.5 0 01-.41-.492v-1l.008-.09A.5.5 0 017 9zm2-5H5v2h6V4z"];

var twoColumns = ["M3.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm11.71 7.3l-2-2a1.003 1.003 0 00-1.71.71v4a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71zM9.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1z"];

var unarchive = ["M13.382 0a1 1 0 01.894.553L16 4v11a1 1 0 01-1 1H1a1 1 0 01-1-1V4L1.724.553A1 1 0 012.618 0h10.764zM8 6c-.28 0-.53.11-.71.29l-2 2-.084.096A1.003 1.003 0 006.71 9.71l.29-.3V12l.007.116c.058.496.482.884.993.884.55 0 1-.45 1-1V9.41l.29.29.081.076A.97.97 0 0010 10a1.003 1.003 0 00.71-1.71l-2-2-.096-.084A1.002 1.002 0 008 6zm5-4H3L2 4h12l-1-2z"];

var underline = ["M8 14c2.8 0 5-2.2 5-5V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 1.7-1.3 3-3 3s-3-1.3-3-3V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 2.8 2.2 5 5 5zM13.5 15h-11c-.3 0-.5.2-.5.5s.2.5.5.5h11c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"];

var undo = ["M4 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H3.41L4.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 4.47 0 4.72 0 5c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 6H11c1.66 0 3 1.34 3 3s-1.34 3-3 3H7v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"];

var ungroupObjects = ["M3.5 5C1.57 5 0 6.57 0 8.5S1.57 12 3.5 12 7 10.43 7 8.5 5.43 5 3.5 5zm9 0C10.57 5 9 6.57 9 8.5s1.57 3.5 3.5 3.5S16 10.43 16 8.5 14.43 5 12.5 5z"];

var unknownVehicle = ["M10.507 9.75v-3.5c0-.089.023-.171.051-.25h-7.55c-.176 0-.061-.824 0-1l.729-1.63c.06-.177.095-.37.27-.37h4.5V1.01c-.166-.003-.32-.01-.5-.01-2.72 0-4.036.402-4.036.402-.508.155-1.079.711-1.268 1.237L1.94 4.756H.887c-.483 0-.88.423-.88.939s.397.939.88.939h.376L1.008 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.383 1 1 1s1-.343 1-1v-3.5h-3.75a.75.75 0 01-.75-.75zm-5.5.25h-2V8h2v2zm11-4.305zM15.34.826a2.807 2.807 0 00-.932-.598c-.386-.16-.868-.241-1.445-.241-.447 0-.851.076-1.213.228-.362.153-.67.364-.926.636s-.456.592-.598.963a3.535 3.535 0 00-.218 1.144V3h1.789c.003-.208.023-.405.069-.588.049-.193.124-.362.225-.506.102-.144.232-.259.39-.345.159-.087.348-.13.567-.13.325 0 .58.09.762.272.183.18.275.46.275.839.008.222-.031.407-.116.555a1.654 1.654 0 01-.335.408 7.4 7.4 0 01-.452.37c-.162.123-.316.27-.463.438a2.556 2.556 0 00-.384.611c-.11.239-.177.535-.2.889V6h1.645v-.1c.032-.248.111-.453.237-.618.126-.164.27-.31.433-.438.163-.128.335-.255.518-.383a2.413 2.413 0 00.878-1.117c.102-.255.152-.58.152-.975A2.241 2.241 0 0015.34.826zM12.007 7v2h2V7h-2z"];

var unlock = ["M11.99-.01c-2.21 0-4 1.79-4 4v3h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-3v-3c0-1.1.9-2 2-2s2 .9 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-2.21-1.79-4-4-4z"];

var unpin = ["M9.39 1c-.5.5-.4 1.48.15 2.53L4.38 7.54C2.85 6.5 1.52 6.07 1 6.59l3.5 3.5c-.02.02-1.4 2.8-1.4 2.8l2.8-1.4 3.5 3.5c.53-.53.1-1.86-.95-3.38l4.02-5.16c1.04.55 2.01.65 2.51.14L9.39 1z"];

var unresolve = ["M11 3c-.55 0-1.07.09-1.57.26a6.46 6.46 0 010 9.48c.5.17 1.02.26 1.57.26 2.76 0 5-2.24 5-5s-2.24-5-5-5zM9.78 9.38l.09-.27c.08-.36.13-.73.13-1.11s-.05-.75-.13-1.11l-.09-.27a5.32 5.32 0 00-.29-.79l-.12-.21c-.14-.27-.31-.52-.51-.76a.7.7 0 00-.08-.1c-.24-.27-.49-.52-.78-.74-.43-.32-.92-.58-1.45-.75l.01-.01c-.1-.03-.2-.05-.3-.08-.12-.03-.23-.07-.36-.09A5.28 5.28 0 005 3C2.24 3 0 5.24 0 8s2.24 5 5 5c.31 0 .61-.04.9-.09.12-.02.24-.06.36-.09.1-.03.21-.04.3-.08l-.01-.01c.88-.29 1.64-.8 2.22-1.49.03-.03.06-.07.09-.1.19-.24.36-.49.51-.76.04-.07.08-.14.11-.21.13-.25.23-.52.3-.79z"];

var updated = ["M8 0a7.95 7.95 0 00-6 2.74V1c0-.55-.45-1-1-1S0 .45 0 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.54C4.64 2.78 6.22 2 8 2c3.31 0 6 2.69 6 6 0 2.61-1.67 4.81-4 5.63-.63.22-1.29.37-2 .37-3.31 0-6-2.69-6-6 0-.55-.45-1-1-1s-1 .45-1 1c0 4.42 3.58 8 8 8 .34 0 .67-.03 1-.07.02 0 .04-.01.06-.01C12.98 15.4 16 12.06 16 8c0-4.42-3.58-8-8-8zm3 5c-.28 0-.53.11-.71.29L7 8.58 5.71 7.29a1.003 1.003 0 00-1.42 1.42l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4A1.003 1.003 0 0011 5z"];

var upload = ["M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 01-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0111 8z"];

var user = ["M7.99-.01A7.998 7.998 0 00.03 8.77c.01.09.03.18.04.28.02.15.04.31.07.47.02.11.05.22.08.34.03.13.06.26.1.38.04.12.08.25.12.37.04.11.08.21.12.32a6.583 6.583 0 00.3.65c.07.14.14.27.22.4.04.07.08.13.12.2l.27.42.1.13a7.973 7.973 0 003.83 2.82c.03.01.05.02.07.03.37.12.75.22 1.14.29l.2.03c.39.06.79.1 1.2.1s.81-.04 1.2-.1l.2-.03c.39-.07.77-.16 1.14-.29.03-.01.05-.02.07-.03a8.037 8.037 0 003.83-2.82c.03-.04.06-.08.09-.13.1-.14.19-.28.28-.42.04-.07.08-.13.12-.2.08-.13.15-.27.22-.41.04-.08.08-.17.12-.26.06-.13.11-.26.17-.39.04-.1.08-.21.12-.32.04-.12.08-.24.12-.37.04-.13.07-.25.1-.38.03-.11.06-.22.08-.34.03-.16.05-.31.07-.47.01-.09.03-.18.04-.28.02-.26.04-.51.04-.78-.03-4.41-3.61-7.99-8.03-7.99zm0 14.4c-1.98 0-3.75-.9-4.92-2.31.67-.36 1.49-.66 2.14-.95 1.16-.52 1.04-.84 1.08-1.27.01-.06.01-.11.01-.17-.41-.36-.74-.86-.96-1.44v-.01c0-.01-.01-.02-.01-.02-.05-.13-.09-.26-.12-.39-.28-.05-.44-.35-.5-.63-.06-.11-.18-.38-.15-.69.04-.41.2-.59.38-.67v-.06c0-.51.05-1.24.14-1.72.02-.13.05-.26.09-.39.17-.59.53-1.12 1.01-1.49.49-.38 1.19-.59 1.82-.59.62 0 1.32.2 1.82.59.48.37.84.9 1.01 1.49.04.13.07.26.09.4.09.48.14 1.21.14 1.72v.07c.18.08.33.26.37.66.03.31-.1.58-.16.69-.06.27-.21.57-.48.62-.03.13-.07.26-.12.38 0 .01-.01.04-.01.04-.21.57-.54 1.06-.94 1.42 0 .06.01.13.01.19.04.43-.12.75 1.05 1.27.65.29 1.47.6 2.14.95a6.415 6.415 0 01-4.93 2.31z"];

var variable = ["M3.94 3.15c.47-.66 1.05-1.24 1.76-1.73l.13-.4c-1.11.45-2.05 1.01-2.84 1.7-1.02.88-1.8 1.9-2.32 3.05C.22 6.76 0 7.75 0 8.75c0 1.75.66 3.5 1.99 5.25l.13-.42c-.39-.94-.59-1.82-.59-2.63 0-1.28.22-2.64.67-4.1.45-1.45 1.03-2.69 1.74-3.7zm7.51 6.41l-.27-.15c-.3.41-.52.66-.66.77-.09.06-.21.1-.33.1-.15 0-.3-.1-.45-.28-.25-.33-.59-1.22-1.01-2.69.38-.65.69-1.08.95-1.28.19-.15.39-.22.59-.22.08 0 .22.03.43.08.2.06.39.08.54.08.22 0 .4-.07.54-.22.15-.15.22-.34.22-.57 0-.25-.07-.45-.22-.59-.15-.15-.35-.22-.63-.22-.24 0-.47.06-.69.17-.21.11-.49.36-.82.74-.25.28-.61.78-1.1 1.48a6.72 6.72 0 00-.97-2.38l-2.59.44-.05.27c.19-.04.36-.06.49-.06.26 0 .47.11.64.33.26.34.63 1.38 1.11 3.12-.37.49-.63.81-.77.96-.23.24-.41.4-.56.47-.11.06-.24.09-.39.09-.11 0-.29-.06-.53-.18-.17-.07-.32-.11-.45-.11-.25 0-.46.08-.62.24-.16.16-.24.37-.24.61 0 .23.08.42.23.57.15.15.35.22.61.22.25 0 .48-.05.7-.15.22-.1.49-.32.82-.65.33-.33.78-.86 1.36-1.59.22.69.42 1.19.58 1.51.16.31.35.54.56.68.21.14.47.21.79.21.31 0 .62-.11.93-.33.4-.29.82-.77 1.26-1.47zm2.56-8.54l-.12.42c.39.95.59 1.82.59 2.64 0 1.09-.17 2.26-.5 3.51-.26.96-.6 1.87-1.02 2.71-.42.85-.82 1.51-1.21 1.98-.39.48-.87.92-1.44 1.32l-.14.4c1.11-.45 2.05-1.02 2.84-1.7 1.03-.89 1.81-1.91 2.33-3.05.44-.99.66-1.99.66-3 0-1.73-.66-3.48-1.99-5.23z"];

var verticalBarChartAsc = ["M6 7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1zM2 9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm8-5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zm4-4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z"];

var verticalBarChartDesc = ["M6 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zM2 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm8 7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1zm4 2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1z"];

var verticalDistribution = ["M1 2h14c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm14 11H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H3z"];

var verticalInbetween = ["M16 0H0v1a1 1 0 001 1h14a1 1 0 001-1V0zM0 15v1h16v-1a1 1 0 00-1-1H1a1 1 0 00-1 1zM8.707 3.293a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414L8 5.414l1.293 1.293a1 1 0 001.414-1.414l-2-2zm-2 6a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L8 10.586 6.707 9.293z"];

var video = ["M15 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM5 11V5l6 3-6 3z"];

var virus = ["M11.918 11.107l.737.737.052-.051A1 1 0 0114.2 13.12l-.078.087-1.414 1.414a1 1 0 01-1.492-1.327l.029-.033-.863-.863c-.426.231-.89.402-1.38.502L9 14l.117.007A1 1 0 019 16H7l-.117-.007A1 1 0 017 14v-1.1a4.967 4.967 0 01-1.447-.539l-.846.846.078.087a1 1 0 01-1.492 1.327l-1.414-1.414-.078-.087a1 1 0 011.492-1.327l.744-.744A4.986 4.986 0 013.23 9.5H2a1 1 0 01-1.993.117L0 9.5v-2a1 1 0 011.993-.117L2 7.5h1.025a4.973 4.973 0 01.905-2.405l-.512-.513-.125.125A1 1 0 011.8 3.38l.078-.087 1.414-1.414a1 1 0 011.529 1.277l.573.575a4.969 4.969 0 011.604-.63V2l-.116-.007a1 1 0 010-1.986L7 0h2a1 1 0 01.117 1.993L9 2l.001 1.1c.639.13 1.233.381 1.757.73l.535-.537-.078-.087a1 1 0 011.492-1.327l1.414 1.414.078.087a1 1 0 01-1.492 1.327l-.535.536a4.97 4.97 0 01.803 2.257H14l.007-.117A1 1 0 0116 7.5v2l-.007.117A1 1 0 0114 9.5h-1.229a4.987 4.987 0 01-.853 1.607zM10 9a1 1 0 100 2 1 1 0 000-2zM6.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"];

var volumeDown = ["M9 2c-.28 0-.53.11-.71.29L5.59 5H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm3.57 1.44l-1.59 1.22C11.62 5.61 12 6.76 12 8s-.38 2.39-1.02 3.34l1.59 1.22C13.47 11.27 14 9.7 14 8c0-1.7-.53-3.27-1.43-4.56z"];

var volumeOff = ["M11 2c-.28 0-.53.11-.71.29L7.59 5H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"];

var volumeUp = ["M7 1.86c-.28 0-.53.11-.71.29l-2.7 2.71H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71a1.003 1.003 0 001.71-.71v-10c-.01-.55-.46-1-1.01-1zm6.74-.99l-1.58 1.22A9.985 9.985 0 0114 7.86c0 2.16-.69 4.15-1.85 5.78l1.58 1.22c1.42-1.97 2.26-4.38 2.26-7 .01-2.61-.84-5.02-2.25-6.99zM8.98 4.52C9.62 5.48 10 6.63 10 7.86s-.38 2.39-1.02 3.34l1.59 1.22c.9-1.29 1.43-2.86 1.43-4.56 0-1.7-.53-3.27-1.43-4.56L8.98 4.52z"];

var walk = ["M13 8h-2c-.16 0-.31-.05-.44-.11v.01l-1.02-.51-.37 1.86 1.38.92-.01.02c.27.17.46.46.46.81v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.46l-1.27-.85-1.8 4.67h-.01A.98.98 0 015 16c-.55 0-1-.45-1-1 0-.13.03-.25.07-.36h-.01L7.39 6H5.62l-.73 1.45h-.01C4.72 7.77 4.39 8 4 8c-.55 0-1-.45-1-1 0-.16.05-.31.11-.44H3.1l1-2h.01c.17-.33.5-.56.89-.56h3.16l.29-.75C8.17 2.9 8 2.47 8 2c0-1.1.9-2 2-2s2 .9 2 2c0 1-.73 1.82-1.69 1.97l-.5 1.32 1.43.71H13c.55 0 1 .45 1 1s-.45 1-1 1z"];

var warningSign = ["M15.84 13.5l.01-.01-7-12-.01.01c-.17-.3-.48-.5-.85-.5s-.67.2-.85.5l-.01-.01-7 12 .01.01c-.09.15-.15.31-.15.5 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 0-.19-.06-.35-.15-.5zm-6.85-.51h-2v-2h2v2zm0-3h-2v-5h2v5z"];

var waterfallChart = ["M8 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 4h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm7-6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zm4-3h-1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 10H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var waves = ["M3 1a1 1 0 01.894.553c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.173.344.38.75.637 1.072.277.347.437.375.469.375a1 1 0 110 2c-.968 0-1.642-.64-2.03-1.125a4.755 4.755 0 01-.076-.097 6.093 6.093 0 01-.221.212C12.175 4.442 11.393 5 10.5 5c-.892 0-1.675-.558-2.173-1.01A6.243 6.243 0 018 3.67c-.105.11-.214.217-.327.32C7.175 4.442 6.393 5 5.5 5c-.892 0-1.675-.558-2.173-1.01a6.119 6.119 0 01-.221-.212l-.075.097C2.64 4.36 1.968 5 1 5a1 1 0 010-2c.032 0 .191-.028.47-.375.256-.321.463-.728.636-1.072A1 1 0 013 1zm0 5a1 1 0 01.894.553c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.102.202.393.607.779.957.419.381.72.49.827.49.108 0 .408-.109.827-.49.386-.35.677-.755.779-.957a1 1 0 011.788 0c.173.344.38.75.637 1.072.277.347.437.375.469.375a1 1 0 110 2c-.968 0-1.642-.639-2.03-1.125a4.726 4.726 0 01-.076-.097 6.093 6.093 0 01-.221.212c-.498.452-1.28 1.01-2.173 1.01-.892 0-1.675-.558-2.173-1.01A6.243 6.243 0 018 8.67c-.105.11-.214.217-.327.32C7.175 9.442 6.393 10 5.5 10c-.892 0-1.675-.558-2.173-1.01a6.119 6.119 0 01-.221-.212l-.075.097C2.64 9.36 1.968 10 1 10a1 1 0 010-2c.032 0 .191-.028.47-.375.256-.321.463-.728.636-1.072A1 1 0 013 6zm.894 5.553a1 1 0 00-1.788 0c-.173.344-.38.75-.637 1.072-.278.347-.437.375-.469.375a1 1 0 100 2c.968 0 1.642-.639 2.03-1.125a4.9 4.9 0 00.076-.097c.072.073.146.143.221.212.498.452 1.28 1.01 2.173 1.01.892 0 1.675-.558 2.173-1.01.113-.103.222-.21.327-.32.105.11.214.217.327.32.498.452 1.28 1.01 2.173 1.01.892 0 1.675-.558 2.173-1.01.075-.069.149-.14.221-.212a4.9 4.9 0 00.075.097C13.36 14.36 14.032 15 15 15a1 1 0 100-2c-.032 0-.191-.028-.47-.375-.256-.321-.463-.728-.636-1.072a1 1 0 00-1.788 0c-.102.202-.393.607-.779.957-.419.381-.72.49-.827.49-.108 0-.408-.109-.827-.49-.386-.35-.677-.755-.779-.957a1 1 0 00-1.788 0c-.102.202-.393.607-.779.957-.419.381-.72.49-.827.49-.108 0-.408-.109-.827-.49-.386-.35-.677-.755-.779-.957z"];

var widget = ["M13 11h2V5h-2v6zM3 5H1v6h2V5zm11-1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 3h6V1H5v2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 15h6v-2H5v2z"];

var widgetButton = ["M1 3h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm1 2v6h12V5H2zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var widgetFooter = ["M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H3v-3h10v3zm0-4H3V2h10v8z"];

var widgetHeader = ["M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H3V6h10v8zm0-9H3V2h10v3z"];

var wind = ["M10 4a2 2 0 112 2H4a1 1 0 000 2h8a4 4 0 10-4-4 1 1 0 002 0zM1 9a1 1 0 100 2h7.5a1.5 1.5 0 010 3c-.749 0-1.386-.538-1.52-1.199a1 1 0 10-1.96.398C5.35 14.82 6.83 16 8.5 16a3.5 3.5 0 100-7H1z"];

var wrench = ["M15.83 3.7l-3.06 3.05-2.84-.7-.7-2.83L12.29.17a5.004 5.004 0 00-4.83 1.29 4.967 4.967 0 00-1.12 5.36L.58 12.58c-.36.36-.58.86-.58 1.41 0 1.1.9 2 2 2 .55 0 1.05-.22 1.41-.59l5.77-5.77c1.79.69 3.91.33 5.35-1.12 1.32-1.3 1.74-3.15 1.3-4.81z"];

var zoomIn = ["M7.99 5.99v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm7.56 7.44l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"];

var zoomOut = ["M3.99 5.99c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-6zm11.56 7.44l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"];

var zoomToFit = ["M11 10a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42L12.59 8 11.3 9.29c-.19.18-.3.43-.3.71zM1 5c.55 0 1-.45 1-1V2h2c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v3c0 .55.45 1 1 1zm4 1a1.003 1.003 0 00-1.71-.71l-2 2C1.11 7.47 1 7.72 1 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 8 4.7 6.71c.19-.18.3-.43.3-.71zm1-1c.28 0 .53-.11.71-.29L8 3.41 9.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-2 2A1.003 1.003 0 006 5zm9 6c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-11h-3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM4 14H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm6-3c-.28 0-.53.11-.71.29L8 12.59 6.71 11.3A.965.965 0 006 11a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0010 11z"];

var IconSvgPaths16 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Add: add,
    AddClip: addClip,
    AddColumnLeft: addColumnLeft,
    AddColumnRight: addColumnRight,
    AddLocation: addLocation,
    AddRowBottom: addRowBottom,
    AddRowTop: addRowTop,
    AddToArtifact: addToArtifact,
    AddToFolder: addToFolder,
    Airplane: airplane,
    AlignCenter: alignCenter,
    AlignJustify: alignJustify,
    AlignLeft: alignLeft,
    AlignRight: alignRight,
    AlignmentBottom: alignmentBottom,
    AlignmentHorizontalCenter: alignmentHorizontalCenter,
    AlignmentLeft: alignmentLeft,
    AlignmentRight: alignmentRight,
    AlignmentTop: alignmentTop,
    AlignmentVerticalCenter: alignmentVerticalCenter,
    Anchor: anchor,
    Annotation: annotation,
    Antenna: antenna,
    AppHeader: appHeader,
    Application: application,
    Applications: applications,
    Archive: archive,
    AreaOfInterest: areaOfInterest,
    Array: array,
    ArrayBoolean: arrayBoolean,
    ArrayDate: arrayDate,
    ArrayFloatingPoint: arrayFloatingPoint,
    ArrayNumeric: arrayNumeric,
    ArrayString: arrayString,
    ArrayTimestamp: arrayTimestamp,
    ArrowBottomLeft: arrowBottomLeft,
    ArrowBottomRight: arrowBottomRight,
    ArrowDown: arrowDown,
    ArrowLeft: arrowLeft,
    ArrowRight: arrowRight,
    ArrowTopLeft: arrowTopLeft,
    ArrowTopRight: arrowTopRight,
    ArrowUp: arrowUp,
    ArrowsHorizontal: arrowsHorizontal,
    ArrowsVertical: arrowsVertical,
    Asterisk: asterisk,
    At: at,
    AutomaticUpdates: automaticUpdates,
    Backlink: backlink,
    Badge: badge,
    BanCircle: banCircle,
    BankAccount: bankAccount,
    Barcode: barcode,
    Blank: p,
    BlockedPerson: blockedPerson,
    Bold: bold,
    Book: book,
    Bookmark: bookmark,
    Box: box,
    Briefcase: briefcase,
    BringData: bringData,
    Bug: bug,
    Buggy: buggy,
    Build: build,
    Calculator: calculator,
    Calendar: calendar,
    Camera: camera,
    CaretDown: caretDown,
    CaretLeft: caretLeft,
    CaretRight: caretRight,
    CaretUp: caretUp,
    CargoShip: cargoShip,
    CellTower: cellTower,
    Changes: changes,
    Chart: chart,
    Chat: chat,
    ChevronBackward: chevronBackward,
    ChevronDown: chevronDown,
    ChevronForward: chevronForward,
    ChevronLeft: chevronLeft,
    ChevronRight: chevronRight,
    ChevronUp: chevronUp,
    Circle: circle,
    CircleArrowDown: circleArrowDown,
    CircleArrowLeft: circleArrowLeft,
    CircleArrowRight: circleArrowRight,
    CircleArrowUp: circleArrowUp,
    Citation: citation,
    Clean: clean,
    Clip: clip,
    Clipboard: clipboard,
    Cloud: cloud,
    CloudDownload: cloudDownload,
    CloudUpload: cloudUpload,
    Code: code,
    CodeBlock: codeBlock,
    Cog: cog,
    CollapseAll: collapseAll,
    ColorFill: colorFill,
    ColumnLayout: columnLayout,
    Comment: comment,
    Comparison: comparison,
    Compass: compass,
    Compressed: compressed,
    Confirm: confirm,
    Console: console$1,
    Contrast: contrast,
    Control: control,
    CreditCard: creditCard,
    Cross: cross,
    Crown: crown,
    Cube: cube,
    CubeAdd: cubeAdd,
    CubeRemove: cubeRemove,
    CurvedRangeChart: curvedRangeChart,
    Cut: cut,
    Cycle: cycle,
    Dashboard: dashboard,
    DataConnection: dataConnection,
    DataLineage: dataLineage,
    Database: database,
    Delete: _delete,
    Delta: delta,
    DeriveColumn: deriveColumn,
    Desktop: desktop,
    Diagnosis: diagnosis,
    DiagramTree: diagramTree,
    DirectionLeft: directionLeft,
    DirectionRight: directionRight,
    Disable: disable,
    Divide: divide,
    Document: document$1,
    DocumentOpen: documentOpen,
    DocumentShare: documentShare,
    Dollar: dollar,
    Dot: dot,
    DoubleCaretHorizontal: doubleCaretHorizontal,
    DoubleCaretVertical: doubleCaretVertical,
    DoubleChevronDown: doubleChevronDown,
    DoubleChevronLeft: doubleChevronLeft,
    DoubleChevronRight: doubleChevronRight,
    DoubleChevronUp: doubleChevronUp,
    DoughnutChart: doughnutChart,
    Download: download,
    DragHandleHorizontal: dragHandleHorizontal,
    DragHandleVertical: dragHandleVertical,
    Draw: draw,
    DrawerLeft: drawerLeft,
    DrawerLeftFilled: drawerLeftFilled,
    DrawerRight: drawerRight,
    DrawerRightFilled: drawerRightFilled,
    DriveTime: driveTime,
    Duplicate: duplicate,
    Edit: edit,
    Eject: eject,
    Emoji: emoji,
    Endorsed: endorsed,
    Envelope: envelope,
    Equals: equals,
    Eraser: eraser,
    Error: error,
    Euro: euro,
    Exchange: exchange,
    ExcludeRow: excludeRow,
    ExpandAll: expandAll,
    Export: _export,
    EyeOff: eyeOff,
    EyeOn: eyeOn,
    EyeOpen: eyeOpen,
    FastBackward: fastBackward,
    FastForward: fastForward,
    Feed: feed,
    FeedSubscribed: feedSubscribed,
    Film: film,
    Filter: filter,
    FilterKeep: filterKeep,
    FilterList: filterList,
    FilterOpen: filterOpen,
    FilterRemove: filterRemove,
    Flag: flag,
    Flame: flame,
    Flash: flash,
    FloatingPoint: floatingPoint,
    FloppyDisk: floppyDisk,
    FlowBranch: flowBranch,
    FlowEnd: flowEnd,
    FlowLinear: flowLinear,
    FlowReview: flowReview,
    FlowReviewBranch: flowReviewBranch,
    Flows: flows,
    FolderClose: folderClose,
    FolderNew: folderNew,
    FolderOpen: folderOpen,
    FolderShared: folderShared,
    FolderSharedOpen: folderSharedOpen,
    Follower: follower,
    Following: following,
    Font: font,
    Fork: fork,
    Form: form,
    Fuel: fuel,
    FullCircle: fullCircle,
    FullStackedChart: fullStackedChart,
    Fullscreen: fullscreen,
    Function: _function,
    GanttChart: ganttChart,
    Geofence: geofence,
    Geolocation: geolocation,
    Geosearch: geosearch,
    GitBranch: gitBranch,
    GitCommit: gitCommit,
    GitMerge: gitMerge,
    GitNewBranch: gitNewBranch,
    GitPull: gitPull,
    GitPush: gitPush,
    GitRepo: gitRepo,
    Glass: glass,
    Globe: globe,
    GlobeNetwork: globeNetwork,
    Graph: graph,
    GraphRemove: graphRemove,
    GreaterThan: greaterThan,
    GreaterThanOrEqualTo: greaterThanOrEqualTo,
    Grid: grid,
    GridView: gridView,
    GroupObjects: groupObjects,
    GroupedBarChart: groupedBarChart,
    Hand: hand,
    HandDown: handDown,
    HandLeft: handLeft,
    HandRight: handRight,
    HandUp: handUp,
    Hat: hat,
    Header: header,
    HeaderOne: headerOne,
    HeaderThree: headerThree,
    HeaderTwo: headerTwo,
    Headset: headset,
    Heart: heart,
    HeartBroken: heartBroken,
    HeatGrid: heatGrid,
    Heatmap: heatmap,
    Helicopter: helicopter,
    Help: help,
    HelperManagement: helperManagement,
    HighPriority: highPriority,
    HighVoltagePole: highVoltagePole,
    Highlight: highlight,
    History: history,
    Home: home,
    HorizontalBarChart: horizontalBarChart,
    HorizontalBarChartAsc: horizontalBarChartAsc,
    HorizontalBarChartDesc: horizontalBarChartDesc,
    HorizontalDistribution: horizontalDistribution,
    HorizontalInbetween: horizontalInbetween,
    Hurricane: hurricane,
    IdNumber: idNumber,
    ImageRotateLeft: imageRotateLeft,
    ImageRotateRight: imageRotateRight,
    Import: _import,
    Inbox: inbox,
    InboxFiltered: inboxFiltered,
    InboxGeo: inboxGeo,
    InboxSearch: inboxSearch,
    InboxUpdate: inboxUpdate,
    InfoSign: infoSign,
    Inheritance: inheritance,
    InheritedGroup: inheritedGroup,
    InnerJoin: innerJoin,
    Insert: insert,
    Intersection: intersection,
    IpAddress: ipAddress,
    Issue: issue,
    IssueClosed: issueClosed,
    IssueNew: issueNew,
    Italic: italic,
    JoinTable: joinTable,
    Key: key$1,
    KeyBackspace: keyBackspace,
    KeyCommand: keyCommand,
    KeyControl: keyControl,
    KeyDelete: keyDelete,
    KeyEnter: keyEnter,
    KeyEscape: keyEscape,
    KeyOption: keyOption,
    KeyShift: keyShift,
    KeyTab: keyTab,
    KnownVehicle: knownVehicle,
    LabTest: labTest,
    Label: label,
    Layer: layer,
    LayerOutline: layerOutline,
    Layers: layers,
    Layout: layout,
    LayoutAuto: layoutAuto,
    LayoutBalloon: layoutBalloon,
    LayoutCircle: layoutCircle,
    LayoutGrid: layoutGrid,
    LayoutGroupBy: layoutGroupBy,
    LayoutHierarchy: layoutHierarchy,
    LayoutLinear: layoutLinear,
    LayoutSkewGrid: layoutSkewGrid,
    LayoutSortedClusters: layoutSortedClusters,
    Learning: learning,
    LeftJoin: leftJoin,
    LessThan: lessThan,
    LessThanOrEqualTo: lessThanOrEqualTo,
    Lifesaver: lifesaver,
    Lightbulb: lightbulb,
    Lightning: lightning,
    Link: link,
    List: list,
    ListColumns: listColumns,
    ListDetailView: listDetailView,
    Locate: locate,
    Lock: lock,
    LogIn: logIn,
    LogOut: logOut,
    LowVoltagePole: lowVoltagePole,
    Manual: manual,
    ManuallyEnteredData: manuallyEnteredData,
    ManyToMany: manyToMany,
    ManyToOne: manyToOne,
    Map: map,
    MapCreate: mapCreate,
    MapMarker: mapMarker,
    Maximize: maximize,
    Media: media,
    Menu: menu,
    MenuClosed: menuClosed,
    MenuOpen: menuOpen,
    MergeColumns: mergeColumns,
    MergeLinks: mergeLinks,
    Minimize: minimize,
    Minus: minus,
    MobilePhone: mobilePhone,
    MobileVideo: mobileVideo,
    Modal: modal,
    ModalFilled: modalFilled,
    Moon: moon,
    More: more,
    Mountain: mountain,
    Move: move,
    Mugshot: mugshot,
    MultiSelect: multiSelect,
    Music: music,
    Nest: nest,
    NewDrawing: newDrawing,
    NewGridItem: newGridItem,
    NewLayer: newLayer,
    NewLayers: newLayers,
    NewLink: newLink,
    NewObject: newObject,
    NewPerson: newPerson,
    NewPrescription: newPrescription,
    NewTextBox: newTextBox,
    Ninja: ninja,
    NotEqualTo: notEqualTo,
    Notifications: notifications,
    NotificationsSnooze: notificationsSnooze,
    NotificationsUpdated: notificationsUpdated,
    NumberedList: numberedList,
    Numerical: numerical,
    Office: office,
    Offline: offline,
    OilField: oilField,
    OneColumn: oneColumn,
    OneToMany: oneToMany,
    OneToOne: oneToOne,
    OpenApplication: openApplication,
    Outdated: outdated,
    PageLayout: pageLayout,
    PanelStats: panelStats,
    PanelTable: panelTable,
    Paperclip: paperclip,
    Paragraph: paragraph,
    Path: path,
    PathSearch: pathSearch,
    Pause: pause,
    People: people,
    Percentage: percentage,
    Person: person,
    Phone: phone,
    PieChart: pieChart,
    Pin: pin,
    Pivot: pivot,
    PivotTable: pivotTable,
    Play: play,
    Playbook: playbook,
    Plus: plus,
    PolygonFilter: polygonFilter,
    Power: power,
    PredictiveAnalysis: predictiveAnalysis,
    Prescription: prescription,
    Presentation: presentation,
    Print: print,
    Projects: projects,
    Properties: properties,
    Property: property,
    PublishFunction: publishFunction,
    Pulse: pulse,
    Rain: rain,
    Random: random,
    Record: record,
    RectHeight: rectHeight,
    RectWidth: rectWidth,
    Rectangle: rectangle,
    Redo: redo,
    Refresh: refresh,
    Regex: regex$1,
    RegressionChart: regressionChart,
    Remove: remove,
    RemoveColumn: removeColumn,
    RemoveColumnLeft: removeColumnLeft,
    RemoveColumnRight: removeColumnRight,
    RemoveRowBottom: removeRowBottom,
    RemoveRowTop: removeRowTop,
    Repeat: repeat,
    Reset: reset,
    Resolve: resolve,
    Rig: rig,
    RightJoin: rightJoin,
    Ring: ring,
    Rocket: rocket,
    RocketSlant: rocketSlant,
    RotateDocument: rotateDocument,
    RotatePage: rotatePage,
    Route: route,
    Satellite: satellite,
    Saved: saved,
    ScatterPlot: scatterPlot,
    Search: search,
    SearchAround: searchAround,
    SearchTemplate: searchTemplate,
    SearchText: searchText,
    SegmentedControl: segmentedControl,
    Select: select,
    Selection: selection,
    SendMessage: sendMessage,
    SendTo: sendTo,
    SendToGraph: sendToGraph,
    SendToMap: sendToMap,
    SeriesAdd: seriesAdd,
    SeriesConfiguration: seriesConfiguration,
    SeriesDerived: seriesDerived,
    SeriesFiltered: seriesFiltered,
    SeriesSearch: seriesSearch,
    Settings: settings,
    Shapes: shapes,
    Share: share,
    SharedFilter: sharedFilter,
    Shield: shield,
    Ship: ship,
    Shop: shop,
    ShoppingCart: shoppingCart,
    SignalSearch: signalSearch,
    SimCard: simCard,
    Slash: slash,
    SmallCross: smallCross,
    SmallInfoSign: smallInfoSign,
    SmallMinus: smallMinus,
    SmallPlus: smallPlus,
    SmallSquare: smallSquare,
    SmallTick: smallTick,
    Snowflake: snowflake,
    SocialMedia: socialMedia,
    Sort: sort,
    SortAlphabetical: sortAlphabetical,
    SortAlphabeticalDesc: sortAlphabeticalDesc,
    SortAsc: sortAsc,
    SortDesc: sortDesc,
    SortNumerical: sortNumerical,
    SortNumericalDesc: sortNumericalDesc,
    SplitColumns: splitColumns,
    Square: square,
    StackedChart: stackedChart,
    StadiumGeometry: stadiumGeometry,
    Star: star,
    StarEmpty: starEmpty,
    StepBackward: stepBackward,
    StepChart: stepChart,
    StepForward: stepForward,
    Stop: stop,
    Stopwatch: stopwatch,
    Strikethrough: strikethrough,
    Style: style,
    SwapHorizontal: swapHorizontal,
    SwapVertical: swapVertical,
    Switch: _switch,
    SymbolCircle: symbolCircle,
    SymbolCross: symbolCross,
    SymbolDiamond: symbolDiamond,
    SymbolRectangle: symbolRectangle,
    SymbolSquare: symbolSquare,
    SymbolTriangleDown: symbolTriangleDown,
    SymbolTriangleUp: symbolTriangleUp,
    Syringe: syringe,
    Tag: tag,
    TakeAction: takeAction,
    Tank: tank,
    Target: target,
    Taxi: taxi,
    Temperature: temperature,
    TextHighlight: textHighlight,
    Th: th,
    ThDerived: thDerived,
    ThDisconnect: thDisconnect,
    ThFiltered: thFiltered,
    ThList: thList,
    ThirdParty: thirdParty,
    ThumbsDown: thumbsDown,
    ThumbsUp: thumbsUp,
    Tick: tick,
    TickCircle: tickCircle,
    Time: time$1,
    TimelineAreaChart: timelineAreaChart,
    TimelineBarChart: timelineBarChart,
    TimelineEvents: timelineEvents,
    TimelineLineChart: timelineLineChart,
    Tint: tint,
    Torch: torch,
    Tractor: tractor,
    Train: train,
    Translate: translate,
    Trash: trash,
    Tree: tree,
    TrendingDown: trendingDown,
    TrendingUp: trendingUp,
    Truck: truck,
    TwoColumns: twoColumns,
    Unarchive: unarchive,
    Underline: underline,
    Undo: undo,
    UngroupObjects: ungroupObjects,
    UnknownVehicle: unknownVehicle,
    Unlock: unlock,
    Unpin: unpin,
    Unresolve: unresolve,
    Updated: updated,
    Upload: upload,
    User: user,
    Variable: variable,
    VerticalBarChartAsc: verticalBarChartAsc,
    VerticalBarChartDesc: verticalBarChartDesc,
    VerticalDistribution: verticalDistribution,
    VerticalInbetween: verticalInbetween,
    Video: video,
    Virus: virus,
    VolumeDown: volumeDown,
    VolumeOff: volumeOff,
    VolumeUp: volumeUp,
    Walk: walk,
    WarningSign: warningSign,
    WaterfallChart: waterfallChart,
    Waves: waves,
    Widget: widget,
    WidgetButton: widgetButton,
    WidgetFooter: widgetFooter,
    WidgetHeader: widgetHeader,
    Wind: wind,
    Wrench: wrench,
    ZoomIn: zoomIn,
    ZoomOut: zoomOut,
    ZoomToFit: zoomToFit
});

var add$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm5-9h-4V5c0-.55-.45-1-1-1s-1 .45-1 1v4H5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z"];

var addClip$1 = ["M15 0a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0V6h-3a1 1 0 110-2h3V1a1 1 0 011-1zM1 4a1 1 0 00-1 1v4a1 1 0 002 0V6h3a1 1 0 000-2H1zM0 19a1 1 0 001 1h4a1 1 0 100-2H2v-3a1 1 0 10-2 0v4zm15 1h-4a1 1 0 110-2h3v-3a1 1 0 112 0v4a1 1 0 01-1 1zm-7-5a3 3 0 100-6 3 3 0 000 6z"];

var addColumnLeft$1 = ["M4 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H8V7c0-.55-.45-1-1-1s-1 .45-1 1v2H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z"];

var addColumnRight$1 = ["M10 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1zm9-11H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H2V2h5v16zm11 0H8V2h10v16z"];

var addLocation$1 = ["M10 0a1 1 0 010 2 8 8 0 108 8 1 1 0 012 0c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 6a4 4 0 110 8 4 4 0 010-8zm6-6c.6 0 1 .4 1 1v2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1s-1-.4-1-1V5h-2c-.6 0-1-.4-1-1 0-.5.4-1 1-1h2V1c0-.6.4-1 1-1z"];

var addRowBottom$1 = ["M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V8h16v10zm0-11H2V2h16v5zM7 14h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H7c-.55 0-1 .45-1 1s.45 1 1 1z"];

var addRowTop$1 = ["M7 8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2H7c-.55 0-1 .45-1 1s.45 1 1 1zm12-8H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2v-5h16v5zm0-6H2V2h16v10z"];

var addToArtifact$1 = ["M13 12H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM1 6h9c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm12 2H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm6-4h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1z"];

var addToFolder$1 = ["M.01 10V6H20v10c0 .55-.45 1-1 1H9.995v-3.99C9.965 11.332 8.635 10 6.987 10H.01zM19 3c.55 0 1 .45.99 1v1H0V2c0-.55.45-1 1-1h5.997c.28 0 .53.11.71.29L9.414 3H19zM6.987 12c.55 0 .999.45 1.009 1.01v5c0 .55-.45 1-1 1s-.999-.45-.999-1v-2.59l-4.288 4.29a1.003 1.003 0 01-1.42-1.42L4.579 14H1.989c-.55 0-1-.45-1-1s.45-1 1-1h4.998z"];

var airplane$1 = ["M20 2c0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-4.84 4.84L2 1 1 3l7.53 5.64L4.17 13H1l-1 1 4 2 2 4 1-1v-3.17l4.36-4.36L17 19l2-1-4.43-9.74 4.84-4.84c.37-.37.59-.87.59-1.42z"];

var alignCenter$1 = ["M5 5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1H5zM1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm12 12c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h6zm4 2H3c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm2-8H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var alignJustify$1 = ["M1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 14H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-12H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var alignLeft$1 = ["M1 7h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 14H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM1 15h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z"];

var alignRight$1 = ["M19 17H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 10h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H9c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z"];

var alignmentBottom$1 = ["M12 16h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1zm7 2H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM4 16h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1z"];

var alignmentHorizontalCenter$1 = ["M19 9h-2V7c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H9V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6H1c-.55 0-1 .45-1 1s.45 1 1 1h2v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6h2v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z"];

var alignmentLeft$1 = ["M1 0C.45 0 0 .45 0 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm11 11H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm7-8H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var alignmentRight$1 = ["M19 0c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-4 11H8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0-8H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var alignmentTop$1 = ["M8 4H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11-4H1C.45 0 0 .45 0 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"];

var alignmentVerticalCenter$1 = ["M17 3h-6V1c0-.55-.45-1-1-1S9 .45 9 1v2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6v2H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2V9h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var anchor$1 = ["M11 5.83a3.001 3.001 0 10-2 0V7H6v2h3v8.917a6.003 6.003 0 01-4.985-5.488l.278.278a1 1 0 001.414-1.414l-2-2a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414l.303-.303a8 8 0 0015.98 0l.303.303a1 1 0 001.414-1.414l-2-2a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414l.278-.278A6.003 6.003 0 0111 17.917V9h3V7h-3V5.83zM11 3a1 1 0 11-2 0 1 1 0 012 0z"];

var annotation$1 = ["M9.41 13.41l7.65-7.65-2.83-2.83-7.65 7.65 2.83 2.83zm10-10c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.64-1.66zM18 18H2V2h8.93l2-2H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7.07l-2 2V18zM4 16l4.41-1.59-2.81-2.79L4 16z"];

var antenna$1 = ["M2.01 10.758a8.025 8.025 0 001.01 3.204l.02.035c.034.058.061.117.084.178.163.44.054.951-.33 1.239-.435.328-1.059.242-1.342-.224a9.797 9.797 0 01-.221-.383 10 10 0 1117.48.106c-.269.474-.89.58-1.335.267-.392-.275-.518-.783-.37-1.228a1.19 1.19 0 01.078-.18l.019-.036A8.026 8.026 0 102.01 10.758zm4.272.772a1.464 1.464 0 01.091.32c.07.425-.052.87-.402 1.128-.44.325-1.068.235-1.316-.252a6 6 0 1110.734-.09c-.24.492-.867.593-1.312.275-.354-.253-.483-.695-.42-1.122a1.462 1.462 0 01.085-.321 4.021 4.021 0 00-5.87-4.878 4.02 4.02 0 00-1.59 4.94zm4.712 2.583A.999.999 0 0011 14v-4a1 1 0 10-2 0v4c0 .038.002.076.006.113l-3.753 4.223a1 1 0 001.494 1.328L10 16.005l3.252 3.66a1 1 0 101.495-1.33l-3.753-4.222z"];

var appHeader$1 = ["M19 0a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h18zM8 6a1 1 0 00-1.993-.117L6 6v8a1 1 0 001.993.117L8 14v-3h4v3a1 1 0 001.993.117L14 14V6a1 1 0 00-1.993-.117L12 6v3H8V6z"];

var application$1 = ["M3.5 9h9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 16H2V6h16v11zM3.5 13h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5z"];

var applications$1 = ["M15 5H1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 13H2V8h12v10zM3.5 10h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 0H5c-.55 0-1 .45-1 1v3h2V3h12v10h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var archive$1 = ["M16.434 0a1 1 0 01.857.486L20 5v14a1 1 0 01-1 1H1a1 1 0 01-1-1V5L2.709.486A1 1 0 013.566 0h12.868zM10 8c-.55 0-1 .45-1 1v4.58l-1.29-1.29-.081-.073A.996.996 0 007 11.99a1.003 1.003 0 00-.71 1.71l3 3 .096.084c.168.13.38.206.614.206.28 0 .53-.11.71-.29l3-3 .084-.096a1.003 1.003 0 00-1.504-1.324L11 13.58V9l-.007-.116A1.004 1.004 0 0010 8zm6-6H4L2 5.002h16L16 2z"];

var areaOfInterest$1 = ["M5 4.664C5 2.09 7.241 0 10 0s4.99 2.091 5 4.664C15 7.245 10 14 10 14S5 7.245 5 4.664zM8 5a2 2 0 104.001-.001A2 2 0 008 5zM.504 12.132l4.302-2.458c.322.576.662 1.145.995 1.681l.025.04-3.294 1.881L6.468 18h7.064l3.936-4.724-3.293-1.882.024-.039c.333-.536.673-1.105.995-1.681l4.302 2.458a1 1 0 01.272 1.508l-5 6A1 1 0 0114 20H6a1 1 0 01-.768-.36l-5-6a1 1 0 01.272-1.508z"];

var array$1 = ["M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm5 9a1 1 0 110 2 1 1 0 010-2zM6 9a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2z"];

var arrayBoolean$1 = ["M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm10 7a1 1 0 01.993.883L16 8v4a1 1 0 01-.883.993L15 13H5a1 1 0 01-.993-.883L4 12V8a1 1 0 01.883-.993L5 7h10zm0 1h-5v4h5V8z"];

var arrayDate$1 = ["M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm2.5 5a.5.5 0 01.5.5V6h4v-.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V6h1a1 1 0 01.993.883L16 7v7a1 1 0 01-.883.993L15 15H5a1 1 0 01-.993-.883L4 14V7a1 1 0 01.883-.993L5 6h1v-.5a.5.5 0 01.5-.5h1zM15 9H5v5h10V9z"];

var arrayFloatingPoint$1 = ["M19.992 1.104A1.25 1.25 0 0018.75 0H15c-.47 0-1 .359-1 1s.5 1 1.023 1h3L18 18h-3c-.5 0-1 .359-1 1 0 .69.5 1 1 1h3.75l.146-.008A1.25 1.25 0 0020 18.75V1.25l-.008-.146zM6 1c0-.69-.5-1-1-1H1.25l-.146.008A1.25 1.25 0 000 1.25v17.5l.008.146A1.25 1.25 0 001.25 20H5c.5 0 1-.359 1-1s-.5-1-1-1H2V2h3c.5 0 1-.359 1-1z", "M5.434 7.325c-.222.039-.45.058-.684.058v.88h1.68v4.825h1.221V6.25h-.908c-.04.208-.124.384-.254.528-.124.143-.277.26-.46.351a2.067 2.067 0 01-.595.196z", "M14.327 6.586c-.294-.219-.677-.329-1.147-.329s-.856.11-1.157.33a2.24 2.24 0 00-.695.827 3.822 3.822 0 00-.339 1.1c-.056.401-.085.79-.085 1.166 0 .376.029.765.085 1.166.063.401.176.77.339 1.11.169.332.4.607.695.827.301.213.687.32 1.157.32s.853-.107 1.147-.32c.301-.22.533-.495.696-.828.17-.338.282-.708.338-1.11a7.55 7.55 0 00.094-1.165 7.55 7.55 0 00-.094-1.166 3.47 3.47 0 00-.338-1.1 2.127 2.127 0 00-.696-.828zm-.564 5.426a.876.876 0 01-.583.197.89.89 0 01-.592-.197 1.516 1.516 0 01-.367-.546 3.485 3.485 0 01-.188-.808 8.056 8.056 0 01-.057-.978c0-.345.02-.668.057-.969.037-.307.1-.576.188-.808.094-.232.216-.414.367-.546a.864.864 0 01.592-.206.85.85 0 01.583.206c.157.132.279.314.367.546.094.232.16.501.197.808.038.301.056.624.056.969s-.018.67-.056.978a3.179 3.179 0 01-.197.808c-.088.226-.21.408-.367.546z", "M8.853 11.807h1.358v1.319H8.853v-1.32z"];

var arrayNumeric$1 = ["M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm8.995 6.09c.32 0 .603.047.85.14a1.679 1.679 0 011.015.985c.09.23.135.482.135.755 0 .287-.063.552-.19.795a1.642 1.642 0 01-.57.615v.02l.101.05c.068.039.138.09.209.155.107.097.203.215.29.355a2.09 2.09 0 01.3 1.09c0 .313-.053.597-.16.85a1.898 1.898 0 01-1.12 1.065 2.42 2.42 0 01-.85.145c-.533 0-.99-.127-1.37-.38a1.702 1.702 0 01-.73-1.08c-.013-.067.013-.11.08-.13l.87-.2.041-.003c.038.004.064.028.079.073.073.2.193.37.36.51.167.14.39.21.67.21.32 0 .567-.095.74-.285.173-.19.26-.432.26-.725 0-.347-.1-.618-.3-.815-.2-.197-.47-.295-.81-.295h-.29l-.044-.006c-.037-.013-.056-.044-.056-.094V9.1l.006-.044c.013-.037.044-.056.094-.056h.27l.145-.008a.925.925 0 00.575-.262c.18-.18.27-.42.27-.72 0-.273-.08-.495-.24-.665-.16-.17-.383-.255-.67-.255-.253 0-.453.063-.6.19-.147.127-.25.297-.31.51-.02.06-.06.083-.12.07l-.85-.2-.042-.015c-.035-.02-.048-.055-.038-.105a1.684 1.684 0 01.645-1.035c.17-.13.37-.232.6-.305.23-.073.482-.11.755-.11zm-7.99.11l.044.006c.037.013.056.044.056.094v6.6l-.006.044c-.013.037-.044.056-.094.056h-.92l-.044-.006c-.037-.013-.056-.044-.056-.094V7.54h-.02l-1.04.73-.04.02c-.047.016-.07-.01-.07-.08V7.19l.008-.051a.196.196 0 01.062-.089l1.09-.79.051-.033a.295.295 0 01.129-.027h.85zm3.34-.11c.32 0 .603.05.85.15.247.1.455.235.625.405.17.17.3.37.39.6.09.23.135.478.135.745 0 .307-.057.588-.17.845a3.16 3.16 0 01-.47.745l-1.98 2.4V12h2.52l.044.006c.037.013.056.044.056.094v.8l-.006.044c-.013.037-.044.056-.094.056h-3.82l-.044-.006c-.037-.013-.056-.044-.056-.094v-.75l.006-.05a.165.165 0 01.044-.08l2.4-2.99.124-.167c.077-.11.143-.222.196-.333.08-.167.12-.347.12-.54a.92.92 0 00-.235-.64c-.157-.173-.378-.26-.665-.26-.273 0-.487.077-.64.23-.153.153-.247.36-.28.62-.013.067-.05.093-.11.08l-.88-.18-.043-.015c-.035-.02-.047-.055-.037-.105a1.78 1.78 0 01.56-1.115c.167-.157.372-.282.615-.375a2.35 2.35 0 01.845-.14z"];

var arrayString$1 = ["M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm2.012 6c.643 0 1.203.266 1.68.797.477.53.715 1.246.715 2.145a4.472 4.472 0 01-.965 2.814c-.644.83-1.66 1.5-3.047 2.011v-.581l.26-.104a3.87 3.87 0 001.624-1.285c.457-.632.686-1.29.686-1.971 0-.148-.023-.256-.07-.326-.023-.047-.054-.07-.093-.07-.038 0-.1.031-.186.093-.248.179-.558.268-.93.268-.45 0-.843-.18-1.18-.541A1.817 1.817 0 015 7.965c0-.527.194-.986.581-1.378A1.934 1.934 0 017.011 6zm5.593 0c.643 0 1.203.266 1.68.797.477.53.715 1.246.715 2.145a4.472 4.472 0 01-.965 2.814c-.644.83-1.659 1.5-3.047 2.011v-.581l.26-.104a3.87 3.87 0 001.624-1.285c.457-.632.686-1.29.686-1.971 0-.148-.023-.256-.07-.326-.023-.047-.054-.07-.093-.07-.038 0-.1.031-.186.093-.248.179-.558.268-.93.268-.45 0-.843-.18-1.18-.541a1.817 1.817 0 01-.506-1.285c0-.527.194-.986.581-1.378A1.934 1.934 0 0112.604 6z"];

var arrayTimestamp$1 = ["M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm5 4a6 6 0 110 12 6 6 0 010-12zm0 1a5 5 0 100 10 5 5 0 000-10zm2.854 2.146a.5.5 0 01.057.638l-.057.07-2.5 2.5a.5.5 0 01-.638.057l-.07-.057-1.5-1.5a.5.5 0 01.638-.765l.07.057L10 9.293l2.146-2.147a.5.5 0 01.708 0z"];

var arrowBottomLeft$1 = ["M18 3a1.003 1.003 0 00-1.71-.71L4 14.59V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1H5.41l12.3-12.29c.18-.18.29-.43.29-.71z"];

var arrowBottomRight$1 = ["M17 6c-.55 0-1 .45-1 1v7.59L3.71 2.29a1.003 1.003 0 00-1.42 1.42L14.59 16H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"];

var arrowDown$1 = ["M16 11c-.3 0-.5.1-.7.3L11 15.6V2c0-.5-.4-1-1-1s-1 .5-1 1v13.6l-4.3-4.3c-.2-.2-.4-.3-.7-.3-.5 0-1 .4-1 1 0 .3.1.5.3.7l6 6c.2.2.4.3.7.3s.5-.1.7-.3l6-6c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z"];

var arrowLeft$1 = ["M18 9H4.41L8.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L4.41 11H18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var arrowRight$1 = ["M18.71 9.29l-6-6a1.003 1.003 0 00-1.42 1.42L15.59 9H2c-.55 0-1 .45-1 1s.45 1 1 1h13.59l-4.29 4.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var arrowTopLeft$1 = ["M17.71 16.29L5.41 4H13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5.41L16.29 17.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var arrowTopRight$1 = ["M17 2H7c-.55 0-1 .45-1 1s.45 1 1 1h7.59L2.29 16.29a1.003 1.003 0 001.42 1.42L16 5.41V13c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z"];

var arrowUp$1 = ["M16.7 7.3l-6-6c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-6 6c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L9 4.4V18c0 .5.4 1 1 1s1-.5 1-1V4.4l4.3 4.3c.2.2.4.3.7.3.5 0 1-.4 1-1 0-.3-.1-.5-.3-.7z"];

var arrowsHorizontal$1 = ["M19.7 9.3l-5-5c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.5.3.7L16.6 9H3.4l3.3-3.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7s.1.5.3.7l5 5c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L3.4 11h13.2l-3.3 3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5-5c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z"];

var arrowsVertical$1 = ["M15 13c-.3 0-.5.1-.7.3L11 16.6V3.4l3.3 3.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-5-5c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L9 3.4v13.2l-3.3-3.3c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.5.3.7l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1z"];

var asterisk$1 = ["M18.52 14.17l.01-.02L11.89 10l6.64-4.15-.01-.02A.97.97 0 0019 5c0-.55-.45-1-1-1-.2 0-.37.07-.52.17l-.01-.02L11 8.2V1c0-.55-.45-1-1-1S9 .45 9 1v7.2L2.53 4.15l-.01.02A.922.922 0 002 4c-.55 0-1 .45-1 1 0 .36.2.66.48.83l-.01.02L8.11 10l-6.64 4.15.01.02A.97.97 0 001 15c0 .55.45 1 1 1 .2 0 .37-.07.52-.17l.01.02L9 11.8V19c0 .55.45 1 1 1s1-.45 1-1v-7.2l6.47 4.04.01-.02c.15.11.32.18.52.18.55 0 1-.45 1-1 0-.36-.2-.66-.48-.83z"];

var at$1 = ["M12.298 6.818a6.507 6.507 0 00-1.672-.207c-1.057 0-1.881.345-2.472 1.036-.589.691-.884 1.63-.884 2.817 0 1.894.755 2.842 2.266 2.842 1.593 0 2.464-1.192 2.614-3.574l.148-2.914zm6.544-2.592C19.614 5.58 20 7.142 20 8.916c0 1.163-.186 2.224-.556 3.189-.374.963-.894 1.713-1.569 2.25a3.64 3.64 0 01-2.333.803c-.651 0-1.218-.17-1.696-.512a2.486 2.486 0 01-.967-1.39h-.148c-.405.635-.904 1.11-1.498 1.427-.596.318-1.264.475-2.007.475-1.345 0-2.405-.425-3.175-1.279-.774-.854-1.159-2.008-1.159-3.463 0-1.676.512-3.036 1.537-4.08 1.021-1.043 2.396-1.567 4.122-1.567.628 0 1.322.055 2.086.164.764.11 1.443.262 2.037.458l-.272 5.67v.294c0 1.3.43 1.951 1.289 1.951.652 0 1.169-.414 1.553-1.245.384-.829.577-1.886.577-3.171 0-1.39-.291-2.611-.868-3.664a5.948 5.948 0 00-2.463-2.433c-1.065-.569-2.287-.853-3.667-.853-1.757 0-3.287.357-4.588 1.072a7.19 7.19 0 00-2.978 3.069C2.571 7.408 2.23 8.953 2.23 10.708c0 2.358.639 4.172 1.92 5.438 1.279 1.27 3.115 1.902 5.509 1.902 1.826 0 3.729-.365 5.71-1.096v2.001c-1.734.698-3.62 1.047-5.66 1.047-3.056 0-5.437-.811-7.144-2.432C.855 15.945 0 13.683 0 10.781 0 8.659.462 6.77 1.388 5.116c.923-1.653 2.206-2.919 3.845-3.798C6.871.44 8.727 0 10.799 0c1.791 0 3.388.367 4.786 1.098a7.865 7.865 0 013.257 3.128z"];

var automaticUpdates$1 = ["M10 18c-4.42 0-8-3.58-8-8 0-2.52 1.18-4.76 3-6.22V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h2.06C1.61 3.82 0 6.71 0 10c0 5.52 4.48 10 10 10 .55 0 1-.45 1-1s-.45-1-1-1zm0-16c1.64 0 3.15.49 4.42 1.34l1.43-1.43A9.869 9.869 0 0010 0c-.55 0-1 .45-1 1s.45 1 1 1zm10 8c0-1.13-.2-2.21-.54-3.22L17.84 8.4A7.962 7.962 0 0115 16.22V15c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-2.06c2.45-1.82 4.06-4.71 4.06-8zm0-7a1.003 1.003 0 00-1.71-.71L12 8.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7c.18-.18.29-.43.29-.71z"];

var backlink$1 = ["M18.387 19.79l-.094-.083L14 15.415V18a1 1 0 01-2 0l.003-5.075.017-.126.03-.111.044-.111.052-.098.067-.096.08-.09a1.01 1.01 0 01.112-.097l.11-.071.114-.054.105-.035.15-.03L13 12h5a1 1 0 110 2h-2.585l4.292 4.293a1 1 0 01-1.32 1.497zM7.036 9.136l-4.45 4.45-.117.127a2 2 0 002.818 2.818l.127-.117 4.45-4.449a4 4 0 01-.885 3.704l-.15.16-2 2A4 4 0 011.02 12.33l.15-.16 2-2a3.998 3.998 0 013.865-1.035zm6.671-3.843a1 1 0 01.083 1.32l-.083.094-7 7a1 1 0 01-1.497-1.32l.083-.094 7-7a1 1 0 011.414 0zm4.121-4.121a4 4 0 01.151 5.497l-.15.16-2 2a3.998 3.998 0 01-3.864 1.036l4.45-4.45.116-.128a2 2 0 00-2.818-2.818l-.127.117-4.45 4.45a4 4 0 01.885-3.705l.15-.16 2-2a4 4 0 015.657 0z"];

var badge$1 = ["M16.94 5.73c-.19-1.41.62-2.52 1.38-3.59L17.03.65C14.89 1.76 11.88 1.48 10 0 8.12 1.48 5.11 1.76 2.97.65L1.68 2.14c.76 1.07 1.57 2.18 1.38 3.59C2.68 8.59 0 10.94 1.4 14.08c.56 1.43 1.81 2.37 3.4 2.75 1.95.46 4.4.91 5.2 3.17.8-2.26 3.25-2.71 5.2-3.17 1.6-.38 2.84-1.32 3.4-2.75 1.4-3.14-1.28-5.49-1.66-8.35z"];

var banCircle$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5 11H5c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"];

var bankAccount$1 = ["M19.2 8.02l-.78-.18C18.03 6.4 17.2 5.08 16.08 4l.5-2.28c.11-.42-.22-.78-.61-.72-1.06.12-2 .54-2.67 1.26-1.06-.42-2.34-.66-3.56-.66-3.12 0-5.79 1.5-7.4 3.72-.23-.05-.45-.11-.67-.11C.72 5.21 0 5.98 0 7c0 .72.39 1.32.95 1.62-.06.42-.12.9-.12 1.38 0 2.16.89 4.08 2.28 5.58l-.33 2.04c-.11.72.45 1.38 1.12 1.38h.72c.56 0 1-.42 1.11-1.02l.06-.48c1.17.54 2.5.9 3.95.9 1.39 0 2.78-.3 3.95-.9l.06.48c.11.6.56 1.02 1.11 1.02h.72c.67 0 1.22-.66 1.11-1.38l-.33-1.98c.78-.78 1.34-1.74 1.73-2.76l1-.24c.5-.12.89-.6.89-1.2V9.22c.11-.6-.28-1.08-.78-1.2zM15 10c-.6 0-1-.7-1-1.5S14.4 7 15 7s1 .7 1 1.5-.4 1.5-1 1.5zM7.55 5.83a.99.99 0 01-1.38-.28.99.99 0 01.28-1.38c2.34-1.56 4.77-1.56 7.11 0 .46.31.58.93.28 1.39-.31.46-.93.58-1.39.28-1.67-1.12-3.23-1.12-4.9-.01z"];

var barcode$1 = ["M6 16.98h2v-14H6v14zm3 0h1v-14H9v14zm-6 0h2v-14H3v14zm-3 0h2v-14H0v14zm16 0h2v-14h-2v14zm-4 0h1v-14h-1v14zm7-14v14h1v-14h-1zm-5 14h1v-14h-1v14z"];

var p$1 = [];

var blockedPerson$1 = ["M11.55 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.06-.11.14-.35.17-.62C10.33 9.42 8.92 7.38 8.92 5c0-.3.05-.58.09-.87-.33-.08-.67-.13-.99-.13-.79 0-1.68.25-2.31.73-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.17 1.51-.17 2.14v.08c-.24.09-.45.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59C3 16.56.77 17.26.32 18.31-.15 19.38.04 20 .04 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.69-1.75-4.17-2.41zM14.97 0c-2.78 0-5.03 2.24-5.03 5s2.25 5 5.03 5S20 7.76 20 5s-2.25-5-5.03-5zm-3.03 5c0-1.66 1.35-3 3.02-3 .47 0 .9.11 1.29.3l-4.01 3.99c-.18-.4-.3-.83-.3-1.29zm3.03 3c-.47 0-.9-.11-1.29-.3l4.01-3.99c.19.39.3.82.3 1.29 0 1.66-1.36 3-3.02 3z"];

var bold$1 = ["M14.3 9c.4-.8.7-1.6.7-2.5C15 4 13 2 10.5 2H5c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h6.5c2.5 0 4.5-2 4.5-4.5 0-1.4-.7-2.7-1.7-3.5zM7 5h3.5c.8 0 1.5.7 1.5 1.5S11.3 8 10.5 8H7V5zm4.5 9H7v-3h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"];

var book$1 = ["M3 1v18c0 .55.45 1 1 1h2V0H4c-.55 0-1 .45-1 1zm14-1h-2v8l-2-2-2 2V0H7v20h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var bookmark$1 = ["M6 0c-.55 0-1 .45-1 1v18c0 .55.32.68.71.29L9.3 15.7a.996.996 0 011.41 0l3.59 3.59c.38.39.7.26.7-.29v-8-4.5V1c0-.55-.45-1-1-1H6z"];

var box$1 = ["M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h16v10zM8 12h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z"];

var briefcase$1 = ["M19 5h-4V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v3H1c-.55 0-1 .45-1 1v5h4v-1h2v1h8v-1h2v1h4V6c0-.55-.45-1-1-1zm-6 0H7V3h6v2zm3 8h-2v-1H6v1H4v-1H0v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6h-4v1z"];

var bringData$1 = ["M18 18a1 1 0 010 2H2a1 1 0 010-2h16zM9.995 3.005c.55 0 1 .45 1 .999v9.584l1.29-1.288a1.002 1.002 0 011.42 1.419l-3 2.996a1.015 1.015 0 01-1.42 0l-3-2.997a1.002 1.002 0 011.42-1.419l1.29 1.29V4.013c0-.55.45-1.009 1-1.009zM16 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zM7 0a1 1 0 110 2 1 1 0 010-2zM4 0a1 1 0 110 2 1 1 0 010-2z"];

var bug$1 = ["M6.006 4.272C6.124 2.136 7.866 0 10 0c2.133 0 3.877 2.136 3.994 4.272.49.438.909.956 1.234 1.532L17 5.017V3a1 1 0 112 0v2.667a1 1 0 01-.594.913l-2.5 1.111c.062.344.094.698.094 1.059V10h3a1 1 0 110 2h-3v.5c0 .604-.09 1.187-.255 1.737l2.661 1.182a1 1 0 01.594.914V19a1 1 0 11-2 0v-2.017l-2.147-.954A5.992 5.992 0 0110 18.5a5.992 5.992 0 01-4.853-2.471L3 16.983V19a1 1 0 11-2 0v-2.667a1 1 0 01.594-.913l2.661-1.183A6 6 0 014 12.5V12H1a1 1 0 110-2h3V8.75c0-.361.032-.715.093-1.059l-2.5-1.11A1 1 0 011 5.666V3a1 1 0 012 0v2.017l1.772.787a6.026 6.026 0 011.234-1.532zM6 11v1.5a4 4 0 008 0V8.75a4 4 0 00-8 0V11z"];

var buggy$1 = ["M15.836 1.014a1 1 0 011.058.539l2.482 4.962.02-.004a.5.5 0 01.604.49v4.5a.5.5 0 01-.5.5h-3.93a1.5 1.5 0 00-1.248.667l-1.406 2.11A.5.5 0 0112.5 15H8a.5.5 0 01-.354-.146l-2.414-2.415A1.5 1.5 0 004.172 12H.5a.5.5 0 01-.5-.5v-3A.5.5 0 01.5 8h.823L3.072 3.63a1 1 0 01.764-.615l12-2zm.289 3.472l1.231 2.462-2.758.591 1.527-3.053zM14.5 3.264l-1.56 3.12-.252-.638-.825-2.043 2.637-.44zm-9.78 1.63l5.122-.854.988 2.445.899 2.27L10.232 11H7.707L4.854 8.147A.5.5 0 004.5 8H3.477l1.242-3.106zM3 19a3 3 0 100-6 3 3 0 000 6zm14 0a3 3 0 100-6 3 3 0 000 6z"];

var build$1 = ["M19.43 16.67L9.31 7.81l1.47-1.56c.41-.44-.15-.8.15-1.6 1.08-2.76 4.19-2.99 4.19-2.99s.45-.47.87-.92C11.98-1 9.26.7 8.04 1.8L3.83 6.25l-.86.92c-.48.51-.48 1.33 0 1.84l-.87.92c-.48-.51-1.26-.51-1.74 0s-.48 1.33 0 1.84l1.74 1.84c.48.51 1.26.51 1.74 0s.48-1.33 0-1.84l.87-.92c.48.51 1.26.51 1.74 0l1.41-1.49 8.81 10.07c.76.76 2 .76 2.76 0 .76-.76.76-2 0-2.76z"];

var calculator$1 = ["M16 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V8h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V8h2v2zm4 8h-2v-6h2v6zm0-8h-2V8h2v2zm0-4H5V2h10v4z"];

var calendar$1 = ["M15 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zM5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm13-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1zM7 17H3v-4h4v4zm0-5H3V8h4v4zm5 5H8v-4h4v4zm0-5H8V8h4v4zm5 5h-4v-4h4v4zm0-5h-4V8h4v4z"];

var camera$1 = ["M10 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm9-4h-3.59L13.7 2.29A.956.956 0 0013 2H7c-.28 0-.53.11-.71.29L4.59 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4.11c1.26 1.24 2.99 2 4.89 2s3.63-.76 4.89-2H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM4 8H2V6h2v2zm6 8c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"];

var caretDown$1 = ["M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63z"];

var caretLeft$1 = ["M13 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"];

var caretRight$1 = ["M14 10c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C7.46 4.1 7.24 4 7 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z"];

var caretUp$1 = ["M15.76 12.37l.01-.01-5-6-.01.01C10.57 6.15 10.31 6 10 6s-.57.15-.76.37l-.01-.01-5 6 .01.01c-.14.17-.24.39-.24.63 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63z"];

var cargoShip$1 = ["M12.5 1.25h4a1 1 0 011 1V5h-5V1.25zM2.75 5a.25.25 0 00-.25.25v6H.883a.5.5 0 00-.429.757l1.672 2.787c.17.284.384.533.63.741-.458.057-.959.09-1.506.09a.625.625 0 100 1.25c2.583 0 4.268-.68 5.202-1.146.687.466 1.88 1.146 3.548 1.146 1.65 0 2.837-.666 3.528-1.132l.005.003c.244.131.6.3 1.07.468.938.335 2.321.661 4.147.661a.625.625 0 100-1.25c-.319 0-.622-.01-.91-.03.398-.318.717-.738.914-1.23l.972-2.43a.5.5 0 00-.464-.685H5v-6A.25.25 0 004.75 5h-2zm3.455 11.95a.625.625 0 01.658.041c.569.407 1.597 1.134 3.137 1.134s2.568-.727 3.137-1.134a.625.625 0 01.724-.001l.007.005.045.029c.044.027.114.069.21.12.194.104.493.247.9.392.812.29 2.053.589 3.727.589a.625.625 0 110 1.25c-1.826 0-3.21-.326-4.148-.661a7.894 7.894 0 01-1.069-.468l-.005-.003c-.691.466-1.878 1.132-3.528 1.132-1.667 0-2.861-.68-3.548-1.146-.934.467-2.619 1.146-5.202 1.146a.625.625 0 110-1.25c2.66 0 4.23-.787 4.955-1.176zM17.5 6.25h-5V10h4a1 1 0 001-1V6.25zm-11.25-4a1 1 0 011-1h4V5h-5V2.25zm5 4h-5V9a1 1 0 001 1h4V6.25z"];

var cellTower$1 = ["M11.5 8.32c.31-.35.51-.81.51-1.32 0-1.1-.9-2-2-2s-2 .9-2 2c0 .51.2.97.51 1.32L5.06 18.69c-.17.52.11 1.09.63 1.26s1.09-.11 1.26-.63L8.39 15h3.23l1.44 4.32c.17.52.74.81 1.26.63s.81-.74.63-1.26L11.5 8.32zM10.95 13H9.06l.95-2.84.94 2.84zM5.31 10.73a.996.996 0 101.37-1.45c-1.4-1.33-1.28-3.35-.01-4.54.4-.38.43-1.01.05-1.41-.36-.41-1-.43-1.4-.06-2.09 1.95-2.28 5.3-.01 7.46z", "M4.6 12.2C3 11.1 2 9 2 7c0-2.1.9-3.9 2.6-5.2.5-.3.5-1 .2-1.4-.3-.5-1-.5-1.4-.2C1.2 1.9-.1 4.2 0 7c.1 2.7 1.4 5.3 3.4 6.8.2.1.4.2.6.2.3 0 .6-.1.8-.4.4-.5.3-1.1-.2-1.4zM13.27 10.69c.38.4 1.01.42 1.41.04 2.27-2.16 2.08-5.51-.01-7.46a.996.996 0 10-1.36 1.46c1.28 1.19 1.39 3.21-.01 4.54-.39.39-.41 1.02-.03 1.42z", "M16.6.2c-.4-.3-1.1-.3-1.4.2-.3.4-.3 1.1.2 1.4C17.1 3.1 18 4.9 18 7c0 2-1 4.1-2.6 5.2-.5.3-.6.9-.2 1.4.2.3.5.4.8.4.2 0 .4-.1.6-.2C18.7 12.3 20 9.7 20 7c.09-2.8-1.2-5.1-3.4-6.8z"];

var changes$1 = ["M18 16H2c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2zM3 5c.28 0 .53-.11.71-.29L5 3.41V13c0 .55.45 1 1 1s1-.45 1-1V3.41L8.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3C6.53.11 6.28 0 6 0s-.53.11-.71.29l-3 3A1.003 1.003 0 003 5zm7.29 5.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L15 10.59V1c0-.55-.45-1-1-1s-1 .45-1 1v9.59L11.71 9.3A.965.965 0 0011 9a1.003 1.003 0 00-.71 1.71z"];

var chart$1 = ["M7 11v8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8l-2 2-4-2zm-7 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8l-6 3v5zM17 7l-3 3v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8.74c-.26.15-.58.26-1 .26-1.92 0-2-2-2-2zm2-6h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59L10.8 8.78 7.45 7.11v.01C7.31 7.05 7.16 7 7 7s-.31.05-.44.11V7.1l-6 3v.01c-.33.17-.56.5-.56.89 0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L7 9.12l3.55 1.78v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L18 4.41V6c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"];

var chat$1 = ["M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 001.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z"];

var chevronBackward$1 = ["M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L7 8.59V4c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1v-4.59l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L8.41 10z"];

var chevronDown$1 = ["M16 6c-.28 0-.53.11-.71.29L10 11.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0016 6z"];

var chevronForward$1 = ["M13 3c-.55 0-1 .45-1 1v4.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l5.29-5.3V16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z"];

var chevronLeft$1 = ["M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L8.41 10z"];

var chevronRight$1 = ["M13.71 9.29l-6-6a1.003 1.003 0 00-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var chevronUp$1 = ["M16.71 12.29l-6-6C10.53 6.11 10.28 6 10 6s-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42L10 8.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var circle$1 = ["M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"];

var circleArrowDown$1 = ["M14 10c-.28 0-.53.11-.71.29L11 12.59V5c0-.55-.45-1-1-1s-1 .45-1 1v7.59L6.71 10.3A.965.965 0 006 10a1.003 1.003 0 00-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0014 10zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"];

var circleArrowLeft$1 = ["M15 9H7.41L9.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L7.41 11H15c.55 0 1-.45 1-1s-.45-1-1-1zm-5-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"];

var circleArrowRight$1 = ["M15.71 9.29l-4-4a1.003 1.003 0 00-1.42 1.42L12.59 9H5c-.55 0-1 .45-1 1s.45 1 1 1h7.59l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"];

var circleArrowUp$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.71-13.71C10.53 4.11 10.28 4 10 4s-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L9 7.41V15c0 .55.45 1 1 1s1-.45 1-1V7.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4z"];

var citation$1 = ["M4 1C1.79 1 0 2.79 0 5s1.79 4 4 4c.1 0 .2-.01.3-.02C3.82 11.32 2.53 13 1 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4zM16 1c-2.21 0-4 1.79-4 4s1.79 4 4 4c.1 0 .2-.01.3-.02C15.82 11.32 14.53 13 13 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4z"];

var clean$1 = ["M7 0L5 5 0 6.998 5 9l2 5 2-5 5-1.995L9 5zM15 10l-1.5 3.496-3.5 1.499 3.5 1.498L15 20l1.5-3.507L20 15l-3.5-1.504z"];

var clip$1 = ["M0 1a1 1 0 011-1h5a1 1 0 010 2H2v4a1 1 0 01-2 0V1zm1 19a1 1 0 01-1-1v-5a1 1 0 112 0v4h4a1 1 0 110 2H1zm18 0a1 1 0 001-1v-5a1 1 0 10-2 0v4h-4a1 1 0 100 2h5zm0-20a1 1 0 011 1v5a1 1 0 11-2 0V2h-4a1 1 0 110-2h5zm-9 14a4 4 0 100-8 4 4 0 000 8z"];

var clipboard$1 = ["M13 2c0-.55-.45-1-1-1h-.78a1.98 1.98 0 00-3.44 0H7c-.55 0-1 .45-1 1v2h7V2z", "M16 2h-2v3H5V2H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"];

var cloud$1 = ["M15 7c-.12 0-.24.03-.36.04C13.83 4.69 11.62 3 9 3 5.69 3 3 5.69 3 9c0 .05.01.09.01.14A3.98 3.98 0 000 13c0 2.21 1.79 4 4 4h11c2.76 0 5-2.24 5-5s-2.24-5-5-5z"];

var cloudDownload$1 = ["M15 4c-.12 0-.24.03-.36.04C13.83 1.69 11.62 0 9 0 5.69 0 3 2.69 3 6c0 .05.01.09.01.14A3.98 3.98 0 000 10c0 2.21 1.79 4 4 4h.78c.55-.61 1.34-1 2.22-1v-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2c.88 0 1.66.38 2.2.98C17.87 13.87 20 11.69 20 9c0-2.76-2.24-5-5-5zm-2 11c-.28 0-.53.11-.71.29L11 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L7.71 15.3A.965.965 0 007 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0013 15z"];

var cloudUpload$1 = ["M10.71 10.29c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L9 13.41V19c0 .55.45 1 1 1s1-.45 1-1v-5.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM15 4c-.12 0-.24.03-.36.04C13.83 1.69 11.62 0 9 0 5.69 0 3 2.69 3 6c0 .05.01.09.01.14A3.98 3.98 0 000 10c0 2.21 1.79 4 4 4 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 014.24 0l3 3-.01.01c.52.52.85 1.23.87 2.02C18.28 13.44 20 11.42 20 9c0-2.76-2.24-5-5-5z"];

var code$1 = ["M6 6a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L2.41 10 5.7 6.71c.19-.18.3-.43.3-.71zm6-4c-.46 0-.83.31-.95.73l-4 14c-.02.09-.05.17-.05.27 0 .55.45 1 1 1 .46 0 .83-.31.95-.73l4-14c.02-.09.05-.17.05-.27 0-.55-.45-1-1-1zm7.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42l3.3 3.29-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var codeBlock$1 = ["M19 5h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H9V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8.71 15.29a1.003 1.003 0 01-1.42 1.42l-4-4C3.11 12.53 3 12.28 3 12s.11-.53.29-.71l4-4a1.003 1.003 0 011.42 1.42L5.41 12l3.3 3.29zm8-2.58l-4 4a1.003 1.003 0 01-1.42-1.42l3.3-3.29-3.29-3.29A.965.965 0 0111 8a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71s-.11.53-.29.71z"];

var cog$1 = ["M19 8h-2.31c-.14-.46-.33-.89-.56-1.3l1.7-1.7a.996.996 0 000-1.41l-1.41-1.41a.996.996 0 00-1.41 0l-1.7 1.7c-.41-.22-.84-.41-1.3-.55V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2.33c-.48.14-.94.34-1.37.58L5 2.28a.972.972 0 00-1.36 0L2.28 3.64c-.37.38-.37.99 0 1.36L3.9 6.62c-.24.44-.44.89-.59 1.38H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2.31c.14.46.33.89.56 1.3L2.17 15a.996.996 0 000 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l1.7-1.7c.41.22.84.41 1.3.55V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.33c.48-.14.94-.35 1.37-.59L15 17.72c.37.37.98.37 1.36 0l1.36-1.36c.37-.37.37-.98 0-1.36l-1.62-1.62c.24-.43.45-.89.6-1.38H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"];

var collapseAll$1 = ["M9.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42L10 6.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6zm1.42 2.58c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6z"];

var colorFill$1 = ["M2.188 9h11.984L8 2.828 3.414 7.414C2.811 8.017 2.405 8.48 2.188 9zM8 0L6.586 1.414 2 6c-1 1-2 2.11-2 4 0 2 1 3 2 4l1 1c1 1 2 2 4 2 2.009 0 2.918-.913 3.868-1.867L11 15l4.586-4.586L17 9l-1.414-1.414-6.172-6.172L8 0zm10.5 13.5L17 11l-1.5 2.5c-.318.53-.5 1-.5 1.5 0 1 .5 2 2 2s2-1 2-2c0-.5-.182-.97-.5-1.5zM1 18a1 1 0 100 2h18a1 1 0 100-2H1z"];

var columnLayout$1 = ["M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM5 17H2V3h3v14zm4 0H6V3h3v14zm9 0h-8V3h8v14z"];

var comment$1 = ["M19 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3v4a1.003 1.003 0 001.71.71l4.7-4.71H19c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"];

var comparison$1 = ["M6 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm13-6h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 3h-5V3h5v2zM6 14H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zM6 2H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm4-2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm9 14h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-5v-2h5v2zm0-9h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm0 3h-5V9h5v2z"];

var compass$1 = ["M15 10c0 .14-.03.28-.09.4l-3.99 8.98-.01.02a.991.991 0 01-1.82 0l-.01-.02-3.99-8.98c-.06-.12-.09-.26-.09-.4s.03-.28.09-.4L9.08.62 9.09.6a.991.991 0 011.82 0l.01.02 3.99 8.98c.06.12.09.26.09.4zm-5-6.54L7.09 10h5.81L10 3.46z"];

var compressed$1 = ["M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h7v4.59L6.71 10.3A.965.965 0 006 10a1.003 1.003 0 00-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 00-1.42-1.42L11 12.59V8h7v10z"];

var confirm$1 = ["M9.71 5.29a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7a1.003 1.003 0 00-1.42-1.42L12 7.59l-2.29-2.3zm7.93 2.32c.23.75.36 1.56.36 2.39 0 4.42-3.58 8-8 8s-8-3.58-8-8a7.998 7.998 0 0111.8-7.04l1.46-1.46C13.73.56 11.93 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-1.4-.29-2.73-.81-3.95l-1.55 1.56z"];

var console$2 = ["M19 19H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1zM18 6H2v11h16V6zM4 8c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 01-1.42-1.42L4.59 11l-1.3-1.29A1.003 1.003 0 014 8zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z"];

var contrast$1 = ["M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 000-1.41l-1.41-1.41a.996.996 0 00-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 00-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 000 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z"];

var control$1 = ["M17 10h-7v7h7v-7zm0-7h-7v6h7V3zM9 3H3v14h6V3zm10-3H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V2h16v16z"];

var creditCard$1 = ["M19 3H1c-.55 0-1 .45-1 1v2h20V4c0-.55-.45-1-1-1zM0 16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8H0v8zm6.5-2h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm-4 0h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"];

var cross$1 = ["M11.41 10l4.29-4.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L10 8.59l-4.29-4.3a1.003 1.003 0 00-1.42 1.42L8.59 10 4.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4.29-4.3 4.29 4.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L11.41 10z"];

var crown$1 = ["M2 8l4 2 4-5 4 5 4-2-1 7H3L2 8zm8-6a1 1 0 110 2 1 1 0 010-2zM1 5a1 1 0 110 2 1 1 0 010-2zm18 0a1 1 0 110 2 1 1 0 010-2zM3 16h14v2H3v-2z"];

var cube$1 = ["M1.953 4.481l7.41-4.02c.394-.215.88-.215 1.275 0l7.409 4.02L10 9.22 1.953 4.48zm-.817.68L9.5 10.085v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547zm17.728 0c.088.166.136.353.136.546v8.35c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281l8.364-4.926z"];

var cubeAdd$1 = ["M17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2zm-3.969 4.435L10 9.22 1.953 4.48l7.41-4.02c.394-.215.88-.215 1.275 0l1.33.721A3.001 3.001 0 0013 7c0 .148.01.293.031.435zm.319.972A3 3 0 0019 7v7.057c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281l2.85-1.679zM1.136 5.16L9.5 10.086v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547z"];

var cubeRemove$1 = ["M11.968 1.182A3.001 3.001 0 0013 7h.77L10 9.22 1.953 4.48l7.41-4.02c.394-.215.88-.215 1.275 0l1.33.721zM19 7v7.057c0 .438-.247.842-.648 1.06l-7.714 4.186c-.045.024-.091.046-.138.064v-9.281L15.74 7H19zM1.136 5.16L9.5 10.086v9.281a1.316 1.316 0 01-.138-.064l-7.714-4.186A1.211 1.211 0 011 14.057v-8.35c0-.193.048-.38.136-.547zM13 3h6a1 1 0 010 2h-6a1 1 0 010-2z"];

var curvedRangeChart$1 = ["M19 16H3.02l2.14-1.74c2.25 1.7 7.33.46 11.83-2.99l-1.29-1.5c-3.56 2.74-7.31 4.03-8.93 3.19l10.55-8.57-.63-.78-10.59 8.6c-.64-1.64 1.46-4.91 5.09-7.7L9.9 3.01c-4.6 3.54-6.91 8.12-5.41 10.51L2 15.54V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var cut$1 = ["M16 2s.72-1.28 0-2l-5.29 6.25 1.28 1.54L16 2zm.08 10c-.55 0-1.07.12-1.54.32L4.31 0c-.7.72 0 2 0 2l4.45 6.56-3.19 3.77C5.09 12.12 4.56 12 4 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.65-.17-1.26-.45-1.8l2.54-3.67 2.49 3.67c-.27.54-.44 1.15-.44 1.8 0 2.21 1.76 4 3.92 4 2.17 0 3.92-1.79 3.92-4 .02-2.21-1.74-4-3.9-4zM4 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12.08 0c-1.08 0-1.96-.9-1.96-2s.88-2 1.96-2 1.96.9 1.96 2-.88 2-1.96 2z"];

var cycle$1 = ["M16 10a4 4 0 110 8 4 4 0 010-8zM4 10a4 4 0 110 8 4 4 0 010-8zm7.299-5.543l.087.089 1.93 2.232 2.048.708a1 1 0 01.65 1.16l-.031.112a1 1 0 01-1.16.65l-.112-.031-2.302-.796a1 1 0 01-.337-.197l-.092-.094-1.387-1.603-1.891 1.982 2.046 2.274a1 1 0 01.25.547l.007.122v4.24a1 1 0 01-1.993.117l-.007-.117-.001-3.857-2.408-2.676a1 1 0 01-.063-1.26l.082-.099 3.29-3.45a1 1 0 011.394-.053zM16 12a2 2 0 100 4 2 2 0 000-4zM4 12a2 2 0 100 4 2 2 0 000-4zm9.5-10a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"];

var dashboard$1 = ["M6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM4 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-5C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8 5c0 1.1.9 2 2 2s2-.9 2-2c0-.33-2-8-2-8s-2 7.67-2 8zm6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"];

var dataConnection$1 = ["M2 11.9c.935.674 2.339 1.217 4.023 1.536A6.996 6.996 0 009.393 20c-3.988-.019-7.231-1.083-7.387-2.4L2 17.5v-5.6zM13 8c3.315 0 6 2.685 6 6s-2.685 6-6 6-6-2.685-6-6 2.685-6 6-6zm1 1l-4 6h2.5l-.5 4 4-6h-2.5l.5-4zm3-4.6v3.855a7.003 7.003 0 00-10.779 3.992c-2.408-.391-4.097-1.202-4.214-2.142L2 10V4.4c1.525 1.1 4.3 1.85 7.5 1.85S15.475 5.5 17 4.4zM9.5 0C13.637 0 17 1.125 17 2.5S13.637 5 9.5 5C5.35 5 2 3.875 2 2.5S5.35 0 9.5 0z"];

var dataLineage$1 = ["M1.053 0C.47 0 0 .471 0 1.053V4.21c0 .58.471 1.052 1.053 1.052h3.275a6.332 6.332 0 003.728 4.738 6.33 6.33 0 00-3.728 4.737l-3.275-.001C.47 14.737 0 15.208 0 15.789v3.158C0 19.53.471 20 1.053 20h7.435c.581 0 1.053-.471 1.053-1.053V15.79c0-.58-.472-1.052-1.053-1.052H5.406a5.293 5.293 0 015.195-4.21v2.105c0 .58.471 1.052 1.052 1.052h7.294c.582 0 1.053-.471 1.053-1.052V7.368c0-.58-.471-1.052-1.053-1.052h-7.294c-.581 0-1.052.471-1.052 1.052v2.106a5.293 5.293 0 01-5.194-4.21h3.081c.581 0 1.053-.472 1.053-1.053V1.053C9.54.47 9.069 0 8.488 0H1.053z"];

var database$1 = ["M2.01 5.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5.1c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9zm8 .9c4.42 0 8-1.12 8-2.5s-3.58-2.5-8-2.5-8 1.12-8 2.5S5.6 6 10.01 6zm-8 6.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5.4c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9z"];

var _delete$1 = ["M15 6a1.003 1.003 0 00-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L11.41 10l3.29-3.29c.19-.18.3-.43.3-.71zm-5-6C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"];

var delta$1 = ["M10 0L0 20h20L10 0zM9 6l6 12H3L9 6z"];

var deriveColumn$1 = ["M7.1 8.2h-.99c.28-1.11.66-1.92 1.12-2.43.28-.32.56-.48.83-.48.05 0 .1.02.13.05.03.03.05.07.05.12 0 .04-.04.13-.11.25a.64.64 0 00-.12.35c0 .15.06.28.18.39.12.11.27.16.45.16.2 0 .36-.07.49-.2s.2-.31.2-.54c0-.26-.1-.47-.3-.63-.19-.16-.51-.24-.95-.24-.68 0-1.3.19-1.85.58-.56.38-1.09 1.02-1.59 1.91-.17.3-.34.5-.49.59-.15.08-.4.13-.74.12l-.23.77h.95l-1.39 5.24c-.23.86-.39 1.39-.47 1.59-.12.29-.3.54-.54.75-.1.08-.21.12-.35.12-.04 0-.07-.01-.1-.03l-.03-.04c0-.02.03-.07.1-.13.07-.07.1-.17.1-.31 0-.15-.05-.28-.16-.38-.11-.1-.27-.15-.47-.15-.25 0-.44.07-.59.2-.15.12-.23.28-.23.46 0 .19.09.36.27.5.19.14.47.21.86.21.61 0 1.16-.15 1.63-.46.48-.31.89-.78 1.25-1.43.35-.64.72-1.68 1.09-3.11l.8-3.03h.96l.24-.77zM19 0h-9c-.55 0-1 .45-1 1v3h2V2h7v16h-7v-2H9v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8.79 13.49c.15.28.32.49.52.61.19.12.44.19.73.19.28 0 .57-.1.86-.3.38-.25.77-.69 1.17-1.31l-.25-.14c-.27.37-.48.6-.61.69-.09.06-.19.09-.31.09-.14 0-.28-.09-.42-.26-.23-.29-.54-1.09-.93-2.4.35-.59.64-.97.87-1.15.17-.13.35-.2.55-.2.07 0 .2.03.39.08s.36.08.5.08c.2 0 .37-.07.5-.2.15-.14.22-.31.22-.52 0-.22-.07-.4-.2-.53s-.33-.2-.58-.2c-.22 0-.43.05-.63.15-.2.1-.45.32-.75.67-.23.25-.56.7-1.01 1.33a6.52 6.52 0 00-.91-2.15l-2.39.39-.05.25c.18-.03.33-.05.45-.05.24 0 .43.1.59.3.25.31.59 1.24 1.02 2.8-.34.44-.58.73-.7.87-.21.22-.38.36-.52.43-.1.05-.22.08-.35.08-.1 0-.26-.05-.49-.16a1.01 1.01 0 00-.42-.11c-.23 0-.42.07-.57.22-.15.14-.23.33-.23.55 0 .21.07.38.21.51.14.13.33.2.56.2.23 0 .44-.05.64-.14.2-.09.45-.29.75-.59s.72-.78 1.25-1.43c.21.61.39 1.06.54 1.35z"];

var desktop$1 = ["M19 0H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h5.67l-.5 3H5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-1.17l-.5-3H19c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 13H2V2h16v11z"];

var diagnosis$1 = ["M4 2a1 1 0 01.117 1.993L4 4v5a2 2 0 001.85 1.995L6 11a2 2 0 001.995-1.85L8 9V4a1 1 0 01-.117-1.993L8 2h1a1 1 0 01.993.883L10 3v6a4.002 4.002 0 01-3 3.874V13a3 3 0 003 3 4 4 0 003.995-3.8L14 12V8.792a2.5 2.5 0 112 0V12a6 6 0 01-6 6 5 5 0 01-4.995-4.783L5 13v-.126A4.002 4.002 0 012.005 9.2L2 9V3a1 1 0 01.883-.993L3 2h1z"];

var diagramTree$1 = ["M19 10v5h-2v-4h-6v4H9v-4H3v4H1v-5a1 1 0 011-1h7V5h2v4h7a1 1 0 011 1zM1 16h2a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1zm16 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1zm-8 0h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1zM9 0h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V1a1 1 0 011-1z"];

var directionLeft$1 = ["M20 3.02l-20 7 20 7-5-7z"];

var directionRight$1 = ["M20 10.02l-20-7 5 7-5 7z"];

var disable$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM2 10c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L3.69 14.9A7.902 7.902 0 012 10zm8 8c-1.85 0-3.55-.63-4.9-1.69L16.31 5.1A7.902 7.902 0 0118 10c0 4.42-3.58 8-8 8z"];

var divide$1 = ["M11.25 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM6 9c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H6zm4 6a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"];

var document$2 = ["M11.98 0h-8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6l-6-6zm4 18h-11V2h6v5h5v11z"];

var documentOpen$1 = ["M8 15c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h2.59L1.3 16.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 12.41V15zm5-15H5c-.55 0-1 .45-1 1v6h2V2h6v5h5v11H6v-.76L4.04 19.2c.1.45.48.8.96.8h13c.55 0 1-.45 1-1V6l-6-6z"];

var documentShare$1 = ["M14.09 10.09c-.31.31-.67.57-1.09.72V18H2V2h6v5h1.18c.15-.42.39-.8.7-1.11v-.01l2.45-2.45c-.42-.29-.78-.65-1.01-1.11L9 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V9.24l-.88.88-.03-.03zM19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z"];

var dollar$1 = ["M15.57 11.19c-.27-.51-.63-.93-1.07-1.26-.44-.33-.95-.6-1.51-.79-.56-.2-1.14-.36-1.72-.5-.6-.14-1.19-.26-1.75-.38-.57-.13-1.07-.27-1.51-.44-.44-.17-.8-.38-1.07-.63s-.41-.59-.41-1c0-.33.09-.6.28-.81.19-.21.42-.36.69-.47.27-.11.57-.18.88-.22.31-.04.58-.06.8-.06.71 0 1.35.14 1.9.41.55.27.91.81 1.06 1.62h3.36c-.09-.84-.32-1.56-.69-2.16-.37-.6-.83-1.08-1.38-1.45-.56-.37-1.18-.64-1.86-.81-.19-.05-.38-.07-.57-.1V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.1c-.22.03-.43.05-.66.1-.73.13-1.39.37-1.98.71-.6.34-1.09.8-1.47 1.35-.39.56-.58 1.25-.58 2.08 0 .76.13 1.41.4 1.93.26.52.62.95 1.06 1.28.44.33.94.6 1.5.79.55.2 1.13.36 1.74.5.58.14 1.16.26 1.72.38s1.07.26 1.51.43c.44.17.8.39 1.09.66.28.27.43.63.45 1.06.02.43-.08.78-.3 1.04-.22.26-.49.47-.83.6-.34.14-.7.23-1.09.28-.39.05-.73.07-1.03.07-.87 0-1.61-.2-2.23-.59-.62-.39-.98-1.08-1.07-2.06H3c.02.9.19 1.68.52 2.34.33.66.78 1.21 1.35 1.65.57.44 1.25.77 2.03.98.35.1.71.16 1.08.21V19c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.13c.25-.04.5-.07.76-.13.77-.18 1.47-.46 2.1-.85.63-.39 1.14-.9 1.54-1.53.4-.63.59-1.39.59-2.29.01-.75-.13-1.37-.4-1.88z"];

var dot$1 = ["M10 6a4 4 0 100 8 4 4 0 100-8z"];

var doubleCaretHorizontal$1 = ["M8 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11 6c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C12.46 4.1 12.24 4 12 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z"];

var doubleCaretVertical$1 = ["M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1zm10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1z"];

var doubleChevronDown$1 = ["M9.29 10.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42L10 8.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6zM16 9c-.28 0-.53.11-.71.29L10 14.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0016 9z"];

var doubleChevronLeft$1 = ["M5.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L5.41 10zm6 0l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 001.42-1.42L11.41 10z"];

var doubleChevronRight$1 = ["M11 10c0-.28-.11-.53-.29-.71l-6-6a1.003 1.003 0 00-1.42 1.42L8.59 10 3.3 15.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71zm5.71-.71l-6-6a1.003 1.003 0 00-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var doubleChevronUp$1 = ["M4 11c.28 0 .53-.11.71-.29L10 5.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6A.997.997 0 0010 3c-.28 0-.53.11-.71.29l-6 6A1.003 1.003 0 004 11zm6.71-1.71A.997.997 0 0010 9c-.28 0-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6z"];

var doughnutChart$1 = ["M16 10c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6V0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10h-4zm-.09-1h4.04C19.48 4.28 15.72.52 11 .05V4.1A5.98 5.98 0 0115.91 9z"];

var download$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4.71 11.71l-4 4c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-4-4a1.003 1.003 0 011.42-1.42L9 12.59V5c0-.55.45-1 1-1s1 .45 1 1v7.59l2.29-2.29c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71z"];

var dragHandleHorizontal$1 = ["M7.5 11c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11zm-5-5C1.67 6 1 6.67 1 7.5S1.67 9 2.5 9 4 8.33 4 7.5 3.33 6 2.5 6zm0 5c-.83 0-1.5.67-1.5 1.5S1.67 14 2.5 14 4 13.33 4 12.5 3.33 11 2.5 11zm15-2c.83 0 1.5-.67 1.5-1.5S18.33 6 17.5 6 16 6.67 16 7.5 16.67 9 17.5 9zm-5 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-10-5C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6zm5 0c-.83 0-1.5.67-1.5 1.5S11.67 9 12.5 9 14 8.33 14 7.5 13.33 6 12.5 6z"];

var dragHandleVertical$1 = ["M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6zm0 5c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11zm0 5c-.83 0-1.5.67-1.5 1.5S6.67 19 7.5 19 9 18.33 9 17.5 8.33 16 7.5 16zm5-12c.83 0 1.5-.67 1.5-1.5S13.33 1 12.5 1 11 1.67 11 2.5 11.67 4 12.5 4zm-5-3C6.67 1 6 1.67 6 2.5S6.67 4 7.5 4 9 3.33 9 2.5 8.33 1 7.5 1zm5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-10c-.83 0-1.5.67-1.5 1.5S11.67 9 12.5 9 14 8.33 14 7.5 13.33 6 12.5 6z"];

var draw$1 = ["M17.7 12.7c0-.1 0-.2-.1-.3l-2-7c-.1-.3-.3-.6-.6-.7L1.8 0l-.6.5L7.7 7c.3-.2.6-.3 1-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.4.1-.7.3-1L.5 1.2l-.5.6L4.7 15c.1.3.4.5.7.6l7 2c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l4-4c.2-.2.3-.5.3-.7zm1 1c-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z"];

var drawerLeft$1 = ["M9 0a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h8zM8 2H2v16h6V2zm2 7h6.59L14.3 6.71A.965.965 0 0114 6a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H10V9z"];

var drawerLeftFilled$1 = ["M1 0h8a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm9 9h6.59L14.3 6.71A.965.965 0 0114 6a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H10V9z"];

var drawerRight$1 = ["M19 0a1 1 0 011 1v18a1 1 0 01-1 1h-8a1 1 0 01-1-1V1a1 1 0 011-1h8zm-1 2h-6v16h6V2zm-8 7H3.41L5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 11H10V9z"];

var drawerRightFilled$1 = ["M11 0h8a1 1 0 011 1v18a1 1 0 01-1 1h-8a1 1 0 01-1-1V1a1 1 0 011-1zm-1 9H3.41L5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 11H10V9z"];

var driveTime$1 = ["M20.01 7.7c0-.63-.5-1.14-1.1-1.14h-1.32l-.95-2.57c-.24-.64-.95-1.31-1.59-1.5 0 0-1.65-.49-5.05-.49s-5.04.49-5.04.49c-.63.19-1.35.86-1.59 1.5l-.95 2.57H1.1C.5 6.56 0 7.07 0 7.7c0 .63.5 1.14 1.1 1.14h.47l-.34.91c-.24.64-.43 1.72-.43 2.4v5.39c0 .8.63 1.45 1.4 1.45.77 0 1.4-.65 1.4-1.45v-.83h12.8v.83c0 .8.63 1.45 1.4 1.45s1.4-.65 1.4-1.45v-5.39c0-.68-.19-1.77-.43-2.4l-.34-.91h.47c.61 0 1.11-.51 1.11-1.14zm-16.47.34l1.12-3.16c.08-.22.32-.39.54-.39h9.6c.22 0 .46.17.54.39l1.12 3.16c.08.21-.04.39-.26.39H3.8c-.22-.01-.34-.18-.26-.39zm.96 4.94c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.68 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"];

var duplicate$1 = ["M15 4H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 14H2V6h12v12zm5-18H5c-.55 0-1 .45-1 1v2h2V2h12v12h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var edit$1 = ["M4.59 12.59l2.83 2.83 7.65-7.65-2.83-2.83-7.65 7.65zM2 18l4.41-1.59-2.81-2.79L2 18zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0016 2z"];

var eject$1 = ["M4 12h12c.55 0 1-.45 1-1 0-.25-.1-.47-.25-.64l.01-.01-6-7-.01.01C10.57 3.14 10.3 3 10 3s-.57.14-.75.36l-.01-.01-6 7 .01.01c-.15.17-.25.39-.25.64 0 .55.45 1 1 1zm12 1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"];

var emoji$1 = ["M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2a8 8 0 100 16 8 8 0 000-16zm-4 8l.015.215C6.219 12.42 7.925 14 10 14a4 4 0 003.995-3.8L14 10h2l-.013.238C15.754 13.552 13.163 16 10 16a6 6 0 01-5.996-5.775L4 10h2zm1.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"];

var endorsed$1 = ["M19.83 9.38L18.81 7.6V5.62c0-.45-.23-.85-.61-1.08l-1.71-1-1.02-1.76a1.25 1.25 0 00-1.08-.61h-2.03l-1.74-1c-.38-.23-.87-.23-1.25 0l-1.74 1H5.65c-.44 0-.85.23-1.08.61L3.58 3.5l-1.8 1.04c-.38.24-.62.64-.62 1.08v2.06L.17 9.4c-.11.19-.17.4-.17.61s.06.42.17.61l.99 1.72v2.06c0 .45.23.85.61 1.08l1.78 1.02.99 1.72c.23.38.63.61 1.08.61h1.99l1.74 1c.19.11.41.17.62.17.21 0 .42-.06.61-.17l1.74-1h2.03c.44 0 .85-.23 1.08-.61l1.02-1.76 1.71-1c.38-.23.61-.64.61-1.08v-1.97l1.02-1.78c.27-.38.27-.85.04-1.25zm-5.08-.71l-5.01 5.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-3.01-3.01a1.003 1.003 0 011.42-1.42l2.3 2.3 4.31-4.3a1.003 1.003 0 011.71.71c0 .28-.12.53-.3.71z"];

var envelope$1 = ["M0 4.01v11.91l6.27-6.27L0 4.01zm18.91-1.03H1.09L10 10.97l8.91-7.99zm-5.18 6.66L20 15.92V4.01l-6.27 5.63zm-3.23 2.9c-.13.12-.31.19-.5.19s-.37-.07-.5-.19l-2.11-1.89-6.33 6.33h17.88l-6.33-6.33-2.11 1.89z"];

var equals$1 = ["M4 7h12a1 1 0 010 2H4a1 1 0 110-2zm0 4h12a1 1 0 010 2H4a1 1 0 010-2z"];

var eraser$1 = ["M18.71 8.43c.39-.4.39-1.05 0-1.45l-5.53-5.72a.967.967 0 00-1.4 0L1.29 12.1c-.39.4-.39 1.05 0 1.45l4.25 4.39 2.13 2.05h9.27c.02 0 .03.01.05.01.55 0 1-.45 1-1s-.45-1-1-1H9.46l.05-.05h.01l.81-.84 8.38-8.68zM7.52 17.94l-4.95-5.12 4.46-4.61 4.95 5.12-4.46 4.61z"];

var error$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z"];

var euro$1 = ["M8.89 4.47c.56-.31 1.23-.47 2.03-.47.44 0 .85.07 1.25.22.4.14.76.35 1.07.6.17.14.33.3.47.47l2.32-2.32c-.16-.15-.3-.32-.47-.46-.62-.49-1.33-.87-2.12-1.13-.8-.25-1.64-.38-2.52-.38-1.24 0-2.35.22-3.33.66-.99.44-1.82 1.05-2.49 1.82-.68.78-1.2 1.68-1.56 2.72-.09.26-.13.54-.2.8H2c-.55 0-1 .45-1 1s.45 1 1 1h1.04c-.01.2-.04.38-.04.58 0 .15.03.28.03.42H2c-.55 0-1 .45-1 1s.45 1 1 1h1.31c.07.3.13.6.23.89.36 1.02.88 1.92 1.56 2.67.68.76 1.51 1.35 2.49 1.79.98.43 2.09.65 3.33.65.99 0 1.9-.15 2.73-.46.83-.3 1.55-.74 2.17-1.32.03-.03.05-.06.08-.09l-2.41-2.15c-.01.01-.02.02-.02.03-.61.67-1.46 1-2.54 1-.8 0-1.47-.16-2.03-.47-.56-.31-1.01-.72-1.35-1.24-.28-.38-.47-.83-.63-1.3H12c.55 0 1-.45 1-1s-.45-1-1-1H6.56c0-.14-.02-.28-.02-.42 0-.2.02-.39.03-.58H13c.55 0 1-.45 1-1s-.45-1-1-1H6.94c.15-.46.34-.9.59-1.28.35-.52.8-.94 1.36-1.25zM18 11.38v0z"];

var exchange$1 = ["M2.5 8a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm10.35 3.15a.495.495 0 10-.7.7L13.3 13H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.79l-1.15 1.15c-.08.09-.14.21-.14.35a.495.495 0 00.85.35l2-2c.09-.09.15-.21.15-.35s-.06-.26-.15-.35l-2-2zM17.5 8a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM7.15 9.85a.495.495 0 10.7-.7L6.71 8h7.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H6.71l1.15-1.15c.08-.09.14-.21.14-.35a.495.495 0 00-.85-.35l-2 2c-.09.09-.15.21-.15.35s.06.26.15.35l2 2z"];

var excludeRow$1 = ["M1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 13a1.003 1.003 0 001.71.71L4 11.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 00.29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71zm18-5h-7c-1.1 0-2 .9-2 2s.9 2 2 2h7c1.1 0 2-.9 2-2s-.9-2-2-2zm1 9H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var expandAll$1 = ["M4 9c.28 0 .53-.11.71-.29L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6A1.003 1.003 0 004 9zm12 2c-.28 0-.53.11-.71.29L10 16.59 4.71 11.3A.965.965 0 004 11a1.003 1.003 0 00-.71 1.71l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0016 11z"];

var _export$1 = ["M5 7c.28 0 .53-.11.71-.29L9 3.41V15c0 .55.45 1 1 1s1-.45 1-1V3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-5-5C10.53.11 10.28 0 10 0s-.53.11-.71.29l-5 5A1.003 1.003 0 005 7zm14 7c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"];

var eyeOff$1 = ["M20 9.96v-.03-.01-.02-.02a.794.794 0 00-.21-.43c-.55-.69-1.19-1.3-1.85-1.87l-3.93 2.62a3.966 3.966 0 01-3.96 3.77c-.47 0-.91-.1-1.33-.24l-2.24 1.49c.52.21 1.05.39 1.6.51 1.21.27 2.43.28 3.64.05 1.11-.21 2.17-.64 3.17-1.18 1.56-.84 2.99-2 4.23-3.3.23-.24.46-.49.67-.75a.87.87 0 00.21-.43v-.02-.02-.01-.03V10v-.04zm-.46-5.14c.27-.18.46-.47.46-.82 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L15 5.46c-.95-.53-1.95-.96-3.01-1.2a9.158 9.158 0 00-3.65-.04c-1.11.21-2.17.64-3.17 1.18-1.56.84-2.99 2-4.23 3.3-.23.24-.46.48-.67.75-.27.34-.27.76 0 1.1.64.79 1.39 1.5 2.16 2.15.26.21.52.41.79.61L.44 15.16l.01.02A1 1 0 000 16c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 18-12-.01-.02zm-8.67 3.4c-.25-.12-.53-.2-.83-.2-1.1 0-1.99.89-1.99 1.99 0 .03.02.06.02.09l-1.78 1.19c-.14-.4-.22-.83-.22-1.28 0-2.19 1.78-3.97 3.98-3.97 1.01 0 1.91.38 2.61 1l-1.79 1.18z"];

var eyeOn$1 = ["M13.3 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4.99-5a1.003 1.003 0 00-1.42-1.42L14 6.58l-2.29-2.29a.956.956 0 00-.7-.29 1.003 1.003 0 00-.71 1.71l3 3zM20 9.96v-.03-.01-.02-.02a.823.823 0 00-.21-.44c-.44-.55-.94-1.05-1.46-1.52l-2.2 2.2c-.55.54-1.3.88-2.12.88-.05 0-.09-.01-.14-.01a3.978 3.978 0 01-3.86 3.02 4.007 4.007 0 01-1.66-7.65A2.97 2.97 0 018.02 5c0-.28.05-.54.12-.8-1.05.22-2.07.64-3.02 1.15-1.57.85-3 2.02-4.24 3.33-.23.25-.46.5-.67.76-.28.35-.28.77 0 1.12.64.8 1.4 1.52 2.17 2.17 1.66 1.41 3.56 2.58 5.66 3.06 1.21.27 2.43.29 3.65.05 1.11-.21 2.18-.65 3.18-1.19 1.57-.85 3-2.02 4.24-3.33.23-.24.46-.49.67-.76.11-.12.18-.27.21-.44v-.02-.02-.01-.03V10c.01-.01.01-.03.01-.04zm-9.99 2.05c1.03 0 1.87-.79 1.98-1.8l-.09-.09-.01.01-2.1-2.11c-1 .11-1.77.95-1.77 1.98-.01 1.11.89 2.01 1.99 2.01z"];

var eyeOpen$1 = ["M10.01 7.984A2.008 2.008 0 008.012 9.99c0 1.103.9 2.006 1.998 2.006a2.008 2.008 0 001.998-2.006c0-1.103-.9-2.006-1.998-2.006zM20 9.96v-.03-.01-.02-.02a.827.827 0 00-.21-.442c-.64-.802-1.398-1.514-2.168-2.166-1.658-1.404-3.566-2.587-5.664-3.058a8.982 8.982 0 00-3.656-.05c-1.11.2-2.178.641-3.177 1.183-1.569.852-2.997 2.016-4.246 3.33-.23.25-.46.49-.67.761-.279.351-.279.773 0 1.124.64.802 1.4 1.514 2.169 2.166 1.658 1.404 3.566 2.577 5.664 3.058 1.209.271 2.438.281 3.656.05 1.11-.21 2.178-.651 3.177-1.193 1.569-.852 2.997-2.016 4.246-3.33.23-.24.46-.49.67-.751.11-.12.179-.271.209-.442v-.02-.02-.01-.03V10v-.04zM10.01 14A4.003 4.003 0 016.014 9.99a4.003 4.003 0 013.996-4.011 4.003 4.003 0 013.996 4.011 4.003 4.003 0 01-3.996 4.011z"];

var fastBackward$1 = ["M18 3c-.23 0-.42.09-.59.21l-.01-.01L11 8V4c0-.55-.45-1-1-1-.23 0-.42.09-.59.21L9.4 3.2l-8 6 .01.01C1.17 9.4 1 9.67 1 10s.17.6.41.79l-.01.01 8 6 .01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1v-4l6.4 4.8.01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var fastForward$1 = ["M19 10c0-.33-.17-.6-.41-.79l.01-.01-8-6-.01.01C10.42 3.09 10.23 3 10 3c-.55 0-1 .45-1 1v4L2.6 3.2l-.01.01C2.42 3.09 2.23 3 2 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01L9 12v4c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01 8-6-.01-.01c.24-.19.41-.46.41-.79z"];

var feed$1 = ["M2.5 15a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm.5-5c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.87-3.13-7-7-7zM3 0c-.55 0-1 .45-1 1s.45 1 1 1c8.28 0 15 6.72 15 15 0 .55.45 1 1 1s1-.45 1-1C20 7.61 12.39 0 3 0zm0 5c-.55 0-1 .45-1 1s.45 1 1 1c5.52 0 10 4.48 10 10 0 .55.45 1 1 1s1-.45 1-1C15 10.37 9.63 5 3 5z"];

var feedSubscribed$1 = ["M2.5 15a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM3 2c1.76 0 3.44.31 5.01.87.03-.71.31-1.35.75-1.85C6.96.37 5.03 0 3 0c-.55 0-1 .45-1 1s.45 1 1 1zm10.32 4.67a.99.99 0 001.4 0l4.98-4.98c.19-.17.3-.42.3-.7 0-.55-.45-1-1-1a.99.99 0 00-.7.29l-4.27 4.27-2.28-2.28a.99.99 0 00-.7-.29c-.55 0-.99.45-.99 1 0 .28.11.52.29.7l2.97 2.99zM3 10c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.87-3.13-7-7-7zm13.94-2.69l-.82.82-.02-.02c-.2.2-.42.37-.67.51A14.8 14.8 0 0118 17c0 .55.45 1 1 1s1-.45 1-1c0-3.61-1.14-6.94-3.06-9.69zM3 5c-.55 0-1 .45-1 1s.45 1 1 1c5.52 0 10 4.48 10 10 0 .55.45 1 1 1s1-.45 1-1C15 10.37 9.63 5 3 5z"];

var film$1 = ["M19 2h-5v3H6V2H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h5v-3h8v3h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM4 17H2v-2h2v2zm0-3H2v-2h2v2zm0-3H2V9h2v2zm0-3H2V6h2v2zm0-3H2V3h2v2zm10 8H6V7h8v6zm4 4h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm0-3h-2V3h2v2z"];

var filter$1 = ["M18 1H2a1.003 1.003 0 00-.71 1.71L7 8.41V18a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71V8.41l5.71-5.71c.18-.17.29-.42.29-.7 0-.55-.45-1-1-1z"];

var filterKeep$1 = ["M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L5 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm4 11c-.28 0-.53.11-.71.29L15 16.59l-1.29-1.29A.965.965 0 0013 15a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0019 13z"];

var filterList$1 = ["M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L5 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm-4 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1zm8 7h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"];

var filterOpen$1 = ["M15 2c0 .28-.11.53-.29.7L10 7.41V13c0 .28-.11.53-.29.71l-3 3A1.003 1.003 0 015 16V7.41L.29 2.71A1.003 1.003 0 011 1h13c.55 0 1 .45 1 1zm4.707 11.293a1 1 0 010 1.414l-4 4c-.63.63-1.707.184-1.707-.707v-8c0-.89 1.077-1.337 1.707-.707l4 4z"];

var filterRemove$1 = ["M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 00-.71 1.71L5 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm2.91 13.5l1.79-1.79c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-1.79 1.79-1.79-1.79a1.003 1.003 0 00-1.42 1.42l1.79 1.79-1.79 1.79a1.003 1.003 0 001.42 1.42l1.79-1.79 1.79 1.79a1.003 1.003 0 001.42-1.42l-1.8-1.79z"];

var flag$1 = ["M3 3c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 4.08v8.28c3.01-2.41 8.67 2.64 13 0V4.08C13.61 7.14 8.01 1 5 4.08z"];

var flame$1 = ["M11.622 0c0 1.71.49 3.077 1.472 4.103C16.364 6.496 18 9.23 18 12.308c0 3.418-1.962 5.983-5.887 7.692 2.887-3 2.453-4.23-.49-8C8.5 13.5 9 14.5 9.5 16.5c-1.048 0-2 0-2.5-.5 0 .684 1.197 2.5 1.952 4-3.924-1.026-8.123-7.18-6.651-7.692.981-.342 2.126-.171 3.434.513C4.1 6.667 6.062 2.393 11.622 0z"];

var flash$1 = ["M4.96 6.37a1.003 1.003 0 001.42-1.42l-2-2a1.07 1.07 0 00-.71-.28 1.003 1.003 0 00-.71 1.71l2 1.99zm9.37.3c.28 0 .53-.11.71-.29l2-2a1.003 1.003 0 00-1.42-1.42l-2 2a1.003 1.003 0 00.71 1.71zM10 5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v3c0 .55.45 1 1 1zm-5 5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1zm14-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm-9-3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.04 1.63a1.003 1.003 0 00-1.42 1.42l2 2a1.003 1.003 0 001.42-1.42l-2-2zM10 15c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1zm-4.33-1.67c-.28 0-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l2-2a1.003 1.003 0 00-.71-1.71z"];

var floatingPoint$1 = ["M1 6.648c.343 0 .676-.028 1-.085.324-.057.614-.152.871-.284.267-.133.49-.303.672-.512.19-.208.314-.464.371-.767h1.329v9.947H3.457v-7.02H1V6.648zm13.965-1.635c.688 0 1.247.16 1.677.478.44.31.78.711 1.018 1.204.247.483.413 1.016.495 1.6.092.583.137 1.149.137 1.696 0 .547-.045 1.112-.137 1.696a5.182 5.182 0 01-.495 1.614 3.234 3.234 0 01-1.018 1.203c-.43.31-.99.465-1.677.465-.688 0-1.251-.155-1.691-.465-.431-.319-.77-.72-1.018-1.203a5.714 5.714 0 01-.495-1.614 12.116 12.116 0 01-.123-1.696c0-.547.04-1.113.123-1.696a5.534 5.534 0 01.495-1.6 3.26 3.26 0 011.018-1.204c.44-.319 1.004-.478 1.691-.478zm0 8.657c.34 0 .623-.096.853-.287.229-.2.407-.465.536-.794a4.61 4.61 0 00.288-1.176c.056-.447.083-.92.083-1.422 0-.502-.027-.971-.083-1.409a4.61 4.61 0 00-.288-1.176c-.129-.337-.307-.602-.536-.793-.23-.2-.514-.301-.853-.301-.348 0-.637.1-.866.3-.22.192-.399.457-.537.794-.128.337-.22.73-.274 1.176-.056.438-.083.907-.083 1.409 0 .501.027.975.082 1.422.055.447.147.84.275 1.176.138.329.317.593.537.794.229.191.518.287.866.287zm-5.104-.588H7.875V15h1.986v-1.918z"];

var floppyDisk$1 = ["M14 1h-3v5h3V1zm5.71 2.29l-3-3A.997.997 0 0016 0h-1v7H5V0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V4c0-.28-.11-.53-.29-.71zM17 19H3v-8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z"];

var flowBranch$1 = ["M14.425 7.953a3.98 3.98 0 01.562 2.045 3.98 3.98 0 01-.583 2.08L18 15.671V12.98c0-.248.097-.496.29-.689.379-.379 1.047-.38 1.426 0a.94.94 0 01.283.696l-.001 5.049a.957.957 0 01-.276.69.955.955 0 01-.69.273h-5.059a.971.971 0 01-.689-.289 1.026 1.026 0 010-1.417.972.972 0 01.69-.29h2.702l-3.634-3.573a3.998 3.998 0 01-5.924-2.431H1a1 1 0 010-2h6.12a3.998 3.998 0 015.96-2.409L16.665 3l-2.694-.001a.972.972 0 01-.689-.29 1.035 1.035 0 010-1.425.94.94 0 01.696-.283l5.05.001c.248 0 .497.083.69.276a.954.954 0 01.272.69l.001 5.052a.971.971 0 01-.29.689 1.028 1.028 0 01-1.419 0 .972.972 0 01-.29-.69V4.323l-3.567 3.63z"];

var flowEnd$1 = ["M12 9.919a3.998 3.998 0 014-3.92c2.21 0 4 1.79 4 3.997a3.998 3.998 0 01-4 3.996 3.998 3.998 0 01-4-3.916.967.967 0 01-.28.612L7.685 14.71a.958.958 0 01-.686.285c-.536 0-.994-.461-.994-.997 0-.273.107-.528.283-.704l2.379-2.302H.98c-.537 0-.976-.46-.976-.996s.44-.992.976-.992h7.676L6.287 6.687a.957.957 0 01-.283-.686c0-.536.458-.996.994-.996.274 0 .51.1.686.285l4.027 4.024c.159.158.27.365.29.605z"];

var flowLinear$1 = ["M5.125 10.997H.976C.439 10.997 0 10.537 0 10c0-.536.44-.993.976-.993h4.148a4.002 4.002 0 017.752 0h3.776L14.293 6.69a.962.962 0 01-.285-.687c0-.537.46-1.001.996-1.001a.96.96 0 01.698.3l4.005 4.015c.176.176.293.41.293.683a.972.972 0 01-.283.693L15.702 14.7a.997.997 0 01-.698.297c-.537 0-.996-.453-.996-.99 0-.273.107-.517.283-.692l2.371-2.318h-3.787a4.002 4.002 0 01-7.75 0z"];

var flowReview$1 = ["M6.13 9.004A4.005 4.005 0 0110.012 6c1.87 0 3.44 1.278 3.881 3.005h2.768l-2.354-2.317a.97.97 0 01-.283-.691c0-.536.462-.995 1-.995.273 0 .517.107.693.283l4 4.041a.97.97 0 01.284.692.956.956 0 01-.293.682l-3.991 3.997a.944.944 0 01-.694.292c-.537 0-1-.46-1-.997a.97.97 0 01.284-.692l2.345-2.29h-2.765a4.005 4.005 0 01-3.875 2.981 4.005 4.005 0 01-3.874-2.981H3.349l2.376 2.308a.97.97 0 01.283.691 1 1 0 01-.994.983.989.989 0 01-.713-.291L.293 10.699A.956.956 0 010 10.017a.97.97 0 01.283-.692l4.03-4.037a.996.996 0 01.701-.283c.537 0 .994.464.994 1a.97.97 0 01-.283.691L3.34 9.004h2.79z"];

var flowReviewBranch$1 = ["M13.04 13.424c-.6.36-1.302.568-2.052.568a4 4 0 01-3.868-2.999H3.342l2.372 2.31c.176.176.283.42.283.694 0 .537-.452.998-.988.998a.935.935 0 01-.691-.289L.292 10.683A.96.96 0 010 9.999c0-.274.107-.518.283-.694l4.035-4.04a.973.973 0 01.691-.288c.536 0 .988.47.988 1.007a.975.975 0 01-.283.694L3.332 8.984h3.786a4 4 0 013.87-3.006c.771 0 1.492.22 2.102.599l3.565-3.57-2.538-.003a.974.974 0 01-.69-.29c-.38-.38-.38-1.052-.002-1.431A.94.94 0 0114.122 1l4.896.005a.96.96 0 01.69.277c.193.193.27.442.27.69l.005 4.9a.971.971 0 01-.289.69 1.023 1.023 0 01-1.416 0 .975.975 0 01-.29-.691l-.003-2.54-3.554 3.62c.351.596.553 1.291.553 2.034 0 .763-.213 1.477-.583 2.084l3.595 3.595.003-2.54c0-.249.097-.497.29-.69.38-.38 1.05-.381 1.429-.002a.94.94 0 01.282.697l-.005 4.9a.927.927 0 01-.277.675.974.974 0 01-.69.291L13.974 19a.97.97 0 01-.69-.29 1.03 1.03 0 01.002-1.42.974.974 0 01.69-.29l2.696-.003-3.632-3.573z"];

var flows$1 = ["M17.5 7.93a2.5 2.5 0 00-2.45 2h-2.3l-4.01-4-.75.75 3.26 3.25h-6.3a2.5 2.5 0 100 1h6.3l-3.26 3.25.75.75 4.01-4h2.3a2.5 2.5 0 102.45-3z"];

var folderClose$1 = ["M0 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7H0v10zM19 4H9.41l-1.7-1.71A.997.997 0 007 2H1c-.55 0-1 .45-1 1v3h20V5c0-.55-.45-1-1-1z"];

var folderNew$1 = ["M12.994 7c0 1.655 1.344 3 2.998 3a3.002 3.002 0 002.999-3H20v10c0 .55-.45 1-1 1H1.01c-.55 0-1-.45-1-1V7h12.984zM10.76 6H0V3c0-.55.45-1 1-1h3.998c.28 0 .53.11.71.29L7.415 4h2.579c0 .768.29 1.469.765 2zm8.23-3c.55 0 1 .45 1 1s-.45 1-1 1h-1.998v2c0 .55-.45 1-1 1s-1-.45-1-1V5h-1.998c-.55 0-1-.45-1-1s.45-1 1-1h1.999V1c0-.55.45-1 .999-1 .55 0 1 .45 1 1v2h1.999z"];

var folderOpen$1 = ["M20 9c0-.55-.45-1-1-1H5c-.43 0-.79.27-.93.65h-.01l-3 8h.01c-.04.11-.07.23-.07.35 0 .55.45 1 1 1h14c.43 0 .79-.27.93-.65h.01l3-8h-.01c.04-.11.07-.23.07-.35zM3.07 7.63C3.22 7.26 3.58 7 4 7h14V5c0-.55-.45-1-1-1H8.41l-1.7-1.71A.997.997 0 006 2H1c-.55 0-1 .45-1 1v12.31l3.07-7.68z"];

var folderShared$1 = ["M11 4H9.41l-1.7-1.71A.997.997 0 007 2H1c-.55 0-1 .45-1 1v3h11.78C11.3 5.47 11 4.77 11 4zm8-1h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L12.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm-2.46 7.7l-1.42 1.42a2.996 2.996 0 11-4.24-4.24l.88-.88H0v10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-5.18c-.31.11-.65.18-1 .18-1.02 0-1.92-.52-2.46-1.3z"];

var folderSharedOpen$1 = ["M3.07 7.63C3.22 7.26 3.58 7 4 7h7.76l.54-.54A2.97 2.97 0 0111 4H8.41l-1.7-1.71A.997.997 0 006 2H1c-.55 0-1 .45-1 1v12.31l3.07-7.68zm13.47 3.07l-1.42 1.42A2.996 2.996 0 0110 10c0-.77.3-1.47.78-2H5c-.43 0-.79.27-.93.65h-.01l-3 8h.01c-.04.11-.07.23-.07.35 0 .55.45 1 1 1h14c.43 0 .79-.27.93-.65h.01l2.01-5.36c-1-.01-1.88-.52-2.41-1.29zM19 3h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L12.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z"];

var follower$1 = ["M11.54 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.69 3.69 0 00-1.29-1.86C9.69 4.25 8.8 4 8.01 4c-.8 0-1.69.25-2.32.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.44.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59-1.48.65-3.71 1.35-4.16 2.4C-.16 19.38.02 20 .02 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.68-1.75-4.16-2.41zm8.15-12.63l-3-3a.956.956 0 00-.7-.29 1.003 1.003 0 00-.71 1.71L16.58 3H13c-.55 0-1 .45-1 1s.45 1 1 1h3.58l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.3-.71z"];

var following$1 = ["M11.55 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.69 3.69 0 00-1.29-1.86C9.7 4.25 8.81 4 8.02 4c-.79 0-1.68.25-2.31.73-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.44.32-.48.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59C3 16.56.77 17.26.32 18.31-.15 19.38.04 20 .04 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.69-1.75-4.17-2.41zM19 3h-3.58l1.29-1.29A1.003 1.003 0 0015.29.29l-3 3c-.17.18-.28.43-.28.71 0 .28.11.53.29.71l3 3c.18.18.43.29.7.29a1.003 1.003 0 00.71-1.71L15.42 5H19c.55 0 1-.45 1-1s-.45-1-1-1z"];

var font$1 = ["M17.93 18.64l-7-18C10.78.27 10.42 0 10 0s-.78.27-.93.64l-7 18c-.04.11-.07.23-.07.36 0 .55.45 1 1 1 .42 0 .78-.27.93-.64L6.41 13h7.19l2.47 6.36c.15.37.51.64.93.64.55 0 1-.45 1-1 0-.13-.03-.25-.07-.36zM7.18 11L10 3.76 12.82 11H7.18z"];

var fork$1 = ["M16.71 11.29a1.003 1.003 0 00-1.42 1.42l1.3 1.29h-2.17l-8-8h10.17L15.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 4H1c-.55 0-1 .45-1 1s.45 1 1 1h2.59l9.71 9.71c.17.18.42.29.7.29h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3z"];

var form$1 = ["M2 13v4h4v-4H2zm-1-2h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm11-7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zM8 1a1.003 1.003 0 01.71 1.71l-5 6C3.53 8.89 3.28 9 3 9s-.53-.11-.71-.29l-2-2a1.003 1.003 0 011.42-1.42L3 6.59l4.29-5.3C7.47 1.11 7.72 1 8 1zm4 13h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1z"];

var fuel$1 = ["M2.196 2H0v2h2c.317 0 .619.139.825.38l3.493 4.075-1.873 1.248a1 1 0 00-.445.832V18c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V7.1c0-.034-.001-.067-.004-.1H20V3s0-1-1-1h-8c-.5 0-1 .5-1 1v3L8.12 7.254 4.463 3.035A3 3 0 002.196 2zM18 4v2h-6V4h6z"];

var fullCircle$1 = ["M9.96 0a10 10 0 100 20 10 10 0 100-20z"];

var fullStackedChart$1 = ["M15 16h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zM12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm6 4h-4v3h4V6zm0-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V2zm-6 5H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm6 0h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1zm10 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3h4V2zm0 4H2v5h4V6z"];

var fullscreen$1 = ["M3.41 2H6c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1s1-.45 1-1V3.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L3.41 2zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1zM19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm0 13c-.55 0-1 .45-1 1v2.59l-5.29-5.29A.965.965 0 0012 11a1.003 1.003 0 00-.71 1.71l5.3 5.29H14c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z"];

var _function$1 = ["M10.14 5.82H8.73c.4-1.66.94-2.87 1.6-3.64.4-.48.8-.72 1.18-.72.08 0 .14.02.19.07.05.05.07.1.07.18 0 .07-.05.19-.16.37s-.16.36-.16.52c0 .23.08.43.25.59a.9.9 0 00.64.25c.28 0 .51-.1.7-.3.19-.2.28-.47.28-.81 0-.39-.14-.7-.42-.94-.28-.24-.74-.36-1.36-.36-.97 0-1.86.29-2.65.87-.79.56-1.54 1.52-2.26 2.85-.24.46-.48.75-.7.88-.22.13-.57.19-1.06.19l-.32 1.15H5.9l-1.99 7.85c-.33 1.29-.56 2.09-.67 2.39-.17.44-.43.81-.77 1.12a.74.74 0 01-.5.19c-.05 0-.1-.02-.14-.05l-.04-.07c0-.03.05-.1.15-.2.1-.1.15-.26.15-.47 0-.23-.08-.42-.23-.57-.16-.15-.38-.23-.67-.23-.35 0-.63.1-.85.29-.21.2-.32.43-.32.7 0 .29.13.54.39.75.25.22.65.33 1.2.33.88 0 1.66-.23 2.33-.69.68-.46 1.27-1.17 1.78-2.14.51-.96 1.03-2.52 1.56-4.66l1.14-4.54H9.8l.34-1.15zm6.8 1.95c.25-.2.51-.29.78-.29.1 0 .29.04.56.11.27.08.51.11.72.11.29 0 .52-.1.72-.3.18-.19.28-.45.28-.77 0-.33-.1-.6-.29-.8-.19-.2-.47-.29-.82-.29-.32 0-.62.08-.9.23-.28.15-.64.49-1.08 1-.33.38-.81 1.05-1.44 2a9.712 9.712 0 00-1.31-3.22l-3.4.59-.07.37c.25-.05.47-.08.64-.08.34 0 .62.15.84.44.35.46.84 1.85 1.46 4.19-.49.66-.82 1.09-1 1.3-.3.33-.55.54-.74.64-.15.08-.32.12-.51.12-.14 0-.38-.08-.7-.24-.22-.1-.42-.16-.59-.16-.33 0-.6.11-.82.32-.21.22-.32.49-.32.83 0 .31.1.57.3.77.2.2.47.29.8.29.32 0 .63-.07.92-.21.29-.14.64-.43 1.08-.88.43-.45 1.03-1.16 1.79-2.14.29.93.55 1.61.76 2.03.21.42.46.73.74.91.28.19.62.28 1.04.28.4 0 .81-.15 1.23-.44.55-.38 1.1-1.04 1.68-1.97l-.35-.21c-.39.55-.68.89-.87 1.03-.12.09-.27.13-.44.13-.2 0-.4-.13-.59-.38-.33-.43-.77-1.63-1.33-3.6.47-.86.89-1.44 1.23-1.71z"];

var ganttChart$1 = ["M4 7h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm3 2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1zm12 3h-6c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var geofence$1 = ["M8 11l.075.003.126.017.111.03.111.044.098.052.096.067.09.08c.036.035.068.073.097.112l.071.11.054.114.035.105.03.148L9 12V18a1 1 0 01-1.993.117L7 18v-3.586l-5.293 5.293a1 1 0 01-1.497-1.32l.083-.094L5.584 13h-3.58a1 1 0 01-.117-1.993L2.004 11H8zm3.018-11a1.003 1.003 0 01.39.087l.12.063.031.02.1.078 8.027 7.026.062.064.068.086.044.068.064.128.04.117.024.113.011.108v.1l-.007.073-.019.103-.037.121-.039.09-.05.087-4.996 7.994c-.06.097-.137.183-.226.254l-.093.067-.095.053-.087.037-.125.037a1.018 1.018 0 01-.218.026H11v-5a3 3 0 00-2.824-2.995L8 9H3V6a1 1 0 01.321-.734l.098-.08 7-5a1.01 1.01 0 01.45-.178L11.018 0z"];

var geolocation$1 = ["M0 8.33l9.17 2.5 2.5 9.17L20 0z"];

var geosearch$1 = ["M8 18.88c-3.79 0-6.88-3.09-6.88-6.88 0-.61.08-1.22.23-1.79.03.01.06-.01.1-.01h.09v.55c0 .23.21.42.44.42.04 0 .09-.01.12-.02l.9.88c.09.09.23.09.32 0s.09-.23 0-.32l-.86-.9c0-.02.05-.04.05-.07v-.13c0-.18.1-.25.29-.41h.53c.1 0 .19-.01.27-.05.01-.01.02 0 .03-.01.02-.01.03-.02.05-.04.01-.01.02-.01.02-.02l.02-.02 1.13-1.13c-.16-.32-.3-.65-.42-.99h-.64v-.53c0-.01.06.06.06-.1h.38c-.04-.16-.08-.32-.1-.48h-.71c.2-.16.42-.31.64-.45C4.02 6.09 4 5.8 4 5.5c0-.14.01-.28.02-.43C1.62 6.46 0 9.04 0 12c0 4.41 3.59 8 8 8 3.87 0 7.09-2.77 7.82-6.44l-.97-1.1c-.26 3.57-3.23 6.42-6.85 6.42zm-2.12-3.67v-.35h.15c.29 0 .49-.23.49-.53v-.68c0-.01.01-.01 0-.02L4.71 11.8h-.77c-.29 0-.47.24-.47.53v2c0 .29.18.53.47.53h.33v2.02c0 .28.28.51.56.51s.56-.23.56-.51v-1.22h-.01c.29 0 .5-.16.5-.45zm13.83-2.92l-3.68-3.68c.14-.21.27-.42.38-.65.02-.04.04-.07.05-.11.11-.22.2-.45.28-.69v-.01c.07-.24.13-.48.17-.73l.03-.17c.04-.24.06-.49.06-.75C17 2.46 14.54 0 11.5 0S6 2.46 6 5.5 8.46 11 11.5 11c.26 0 .51-.02.76-.06l.17-.03c.25-.04.49-.1.73-.17h.01c.24-.08.47-.17.69-.28.04-.02.07-.04.11-.05.23-.11.44-.24.65-.38l3.68 3.68c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71zM11.5 9.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm1.93 5.33v-.65c0-.11-.13-.21-.24-.21-.11 0-.24.09-.24.21v.65c0 .11.13.21.24.21.11 0 .24-.1.24-.21zm-2.41.67h.83c.29 0 .46-.21.46-.5v-1.86l.23-.22c-.34.05-.69.08-1.04.08-.36 0-.7-.03-1.05-.08.03.05.06.1.08.16V15c.01.29.2.5.49.5z"];

var gitBranch$1 = ["M15 2c-1.66 0-3 1.34-3 3 0 1.3.84 2.4 2 2.82V9c0 1.1-.9 2-2 2H8c-.73 0-1.41.21-2 .55V5.82C7.16 5.4 8 4.3 8 3c0-1.66-1.34-3-3-3S2 1.34 2 3c0 1.3.84 2.4 2 2.82v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.25-.77-2.3-1.85-2.75C6.45 13.52 7.16 13 8 13h4c2.21 0 4-1.79 4-4V7.82C17.16 7.4 18 6.3 18 5c0-1.66-1.34-3-3-3zM5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM15 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitCommit$1 = ["M19 9h-4.1a5 5 0 00-9.8 0H1c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 009.8 0H19c.55 0 1-.45 1-1s-.45-1-1-1zm-9 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"];

var gitMerge$1 = ["M15 8c-1.3 0-2.4.84-2.82 2H11c-2.49 0-4.54-1.83-4.92-4.21A2.995 2.995 0 005 0C3.34 0 2 1.34 2 3c0 1.3.84 2.4 2 2.81v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V9.86C7.27 11.17 9.03 12 11 12h1.18A2.996 2.996 0 0018 11c0-1.66-1.34-3-3-3zM5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM5 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitNewBranch$1 = ["M17 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4.86V9c0 1.1-.9 2-2 2H8c-.73 0-1.41.21-2 .55V5.82C7.16 5.4 8 4.3 8 3c0-1.66-1.34-3-3-3S2 1.34 2 3c0 1.3.84 2.4 2 2.82v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.25-.77-2.3-1.85-2.75C6.45 13.52 7.16 13 8 13h4c2.21 0 4-1.79 4-4V7.86c-.32.08-.65.14-1 .14s-.68-.06-1-.14zM5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitPull$1 = ["M17 14.18V7c0-2.21-1.79-4-4-4h-2.59l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C7.11 3.47 7 3.72 7 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L10.41 5H13c1.1 0 2 .9 2 2v7.18A2.996 2.996 0 0016 20c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM16 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 1C2.34 1 1 2.34 1 4c0 1.3.84 2.4 2 2.82v7.37C1.84 14.6 1 15.7 1 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C6.16 6.4 7 5.3 7 4c0-1.66-1.34-3-3-3zm0 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var gitPush$1 = ["M15 11c0-.28-.11-.53-.29-.71l-3-3C11.53 7.11 11.28 7 11 7s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42l1.29-1.3V19c0 .55.45 1 1 1s1-.45 1-1v-8.59l1.29 1.29c.18.19.43.3.71.3.55 0 1-.45 1-1zm4-11H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h7v-2H2v-2h6v-1H4V2h14v11h-4v1h4v2h-4v2h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 8h2V6H5v2zm2-5H5v2h2V3z"];

var gitRepo$1 = ["M7 3H5v2h2V3zm0 6H5v2h2V9zm0-3H5v2h2V6zm12-6H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h4v2l2-1 2 1v-2h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 16H9v-1H5v1H2v-2h16v2zm0-3H4V2h14v11z"];

var glass$1 = ["M17 6V0H3v6c0 3.53 2.61 6.43 6 6.92V18H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-5.08c3.39-.49 6-3.39 6-6.92z"];

var globe$1 = ["M7.53 4.37c.1-.1.1-.26 0-.35l-.68-.68c-.1-.1-.25-.1-.35 0-.1.1-.1.26 0 .35l.68.68c.1.1.25.1.35 0zm3.17.06h.3c.09 0 .16-.01.16-.1 0-.09-.07-.1-.16-.1h-.3c-.09 0-.16.01-.16.1s.07.1.16.1zm.98 1.15c.09 0 .19-.08.19-.17v-.42c0-.09-.1-.17-.19-.17s-.19.08-.19.17v.42c0 .09.1.17.19.17zm-6.5 4.19c-.35 0-.56.28-.56.63v2.37c0 .35.21.62.56.62h.39v2.4c0 .34.33.61.67.61s.67-.27.67-.61v-1.44h-.02c.35 0 .6-.19.6-.54v-.41h.18c.35 0 .58-.28.58-.62v-.81c0-.01.01-.01 0-.02L6.1 9.77h-.92zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8 0-.74.11-1.46.3-2.14h.03v.65c0 .28.25.5.53.5.05 0 .1-.01.15-.02l1.05 1.05c.1.11.28.11.38 0 .1-.1.11-.27 0-.38L3.42 8.59c0-.03.05-.05.05-.08v-.16c0-.22.12-.3.34-.49h.63c.12 0 .23-.01.32-.07.01-.01.02 0 .03-.01.02-.02.04-.03.06-.04.01-.01.02-.01.03-.02l.02-.02 2.15-2.15c.24-.24.24-.63 0-.86-.23-.24-.62-.19-.86.04l-.41.46H5v-.64c0-.01.07.07.07-.12h.87c.17 0 .3-.12.3-.29 0-.17-.13-.29-.3-.29H4.88C6.27 2.7 8.05 2 10 2s3.73.7 5.12 1.86h-1.58l-.01-.04c-.06 0-.12 0-.17.04l-.71.7c-.09.09-.09.23 0 .31.09.09.23.09.32 0l.56-.6.01-.03h.34c0 .19-.1.13-.1.16v.1c0 .29-.2.5-.49.5h-.51c-.25 0-.52.28-.52.54v.23h-.12c-.16 0-.27.08-.27.24v.33h-.32c-.23 0-.41.15-.41.38 0 .22.18.35.41.35.1 0 .19.04.26-.16l.06.01.66-.59h.23l.53.5c.04.04.11.03.16-.01.04-.04.04-.16 0-.2L13 6.15h.32l.12.16c.25.25.65.23.89-.02l.12-.14H15c.02 0 .11.07.11.07v.33s-.06-.01-.07-.01h-.49c-.16 0-.28.13-.28.29 0 .16.13.29.28.29h.49c.01 0 .07-.01.07-.01v.2c-.19.28-.33.57-.62.57h-1.28s0-.01-.01-.01l-.58-.58a.622.622 0 00-.89 0l-.58.58s0 .01-.01.01h-.34c-.35 0-.67.28-.67.63v1.25c0 .35.32.61.67.61h1.22c.46.19.78.48.97.94v2.28c0 .35.23.6.58.6h.98c.35 0 .54-.25.54-.6v-2.2l1.21-1.17.04-.02.02-.01h.04c.1-.11.2-.26.2-.42V8.49c0-.25-.22-.44-.42-.63h.58c.02.38.29.57.63.57h.43c.13.51.18 1.03.18 1.57 0 4.42-3.58 8-8 8zm6.16-5.65c-.14 0-.29.11-.29.25v.77c0 .14.15.25.29.25.14 0 .29-.11.29-.25v-.77c0-.14-.15-.25-.29-.25zM10.5 3.48c0-.34-.28-.57-.62-.57h-.74c-.34 0-.57.25-.57.59 0 .05-.13.06.06.1v.64c0 .2.09.36.29.36.2 0 .29-.16.29-.36v-.19h.68c.33 0 .61-.23.61-.57z"];

var globeNetwork$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm7.39 7h-3.63c-.31-1.99-.92-3.66-1.72-4.73 2.45.65 4.41 2.42 5.35 4.73zM13 10c0 .69-.04 1.36-.11 2H7.11a18.419 18.419 0 010-4h5.77c.08.64.12 1.31.12 2zm-3-8c1.07 0 2.25 2.05 2.75 5h-5.5c.5-2.95 1.68-5 2.75-5zm-2.04.27C7.16 3.34 6.55 5.01 6.24 7H2.61c.94-2.31 2.9-4.08 5.35-4.73zM2 10c0-.69.11-1.36.28-2h3.83a18.419 18.419 0 000 4H2.28c-.17-.64-.28-1.31-.28-2zm.61 3h3.63c.31 1.99.92 3.66 1.72 4.73A7.996 7.996 0 012.61 13zM10 18c-1.07 0-2.25-2.05-2.75-5h5.5c-.5 2.95-1.68 5-2.75 5zm2.04-.27c.79-1.07 1.4-2.74 1.72-4.73h3.63a7.996 7.996 0 01-5.35 4.73zM13.89 12a18.419 18.419 0 000-4h3.83c.17.64.28 1.31.28 2s-.11 1.36-.28 2h-3.83z"];

var graph$1 = ["M17.5 4A2.5 2.5 0 0015 6.5c0 .06.01.12.02.18l-1.9.84C12.38 6.6 11.27 6 10 6c-.83 0-1.59.25-2.23.68L4.91 4.14c.05-.21.09-.42.09-.64a2.5 2.5 0 00-5 0A2.5 2.5 0 002.5 6c.42 0 .81-.11 1.16-.3l2.79 2.48C6.17 8.73 6 9.34 6 10c0 1.41.73 2.64 1.83 3.35l-.56 1.67A2.498 2.498 0 005 17.5a2.5 2.5 0 005 0c0-.74-.32-1.39-.83-1.85l.56-1.68c.09.01.18.03.27.03 2.21 0 4-1.79 4-4 0-.22-.03-.44-.07-.65l2.02-.9c.43.34.96.55 1.55.55a2.5 2.5 0 000-5z"];

var graphRemove$1 = ["M17.41 4l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L16 2.59 13.71.3A.965.965 0 0013 0a1.003 1.003 0 00-.71 1.71L14.59 4 12.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L16 5.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L17.41 4zM19 10c-.83 0-1.55-.36-2.09-.91l-.03.03-.88-.88-.88.88a2.996 2.996 0 11-4.24-4.24l.88-.88-.88-.88.03-.03C10.36 2.55 10 1.83 10 1c0-.35.07-.68.18-.99-.06 0-.12-.01-.18-.01C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-.06-.01-.12-.01-.18-.31.11-.64.18-.99.18z"];

var greaterThan$1 = ["M12.838 10l-9.154 3.051a1 1 0 00.632 1.898l12-4c.912-.304.912-1.594 0-1.898l-12-4a1 1 0 00-.632 1.898L12.838 10z"];

var greaterThanOrEqualTo$1 = ["M3.684 11.051a1 1 0 00.632 1.898l12-4c.912-.304.912-1.594 0-1.898l-12-4a1 1 0 00-.632 1.898L12.838 8l-9.154 3.051zM4 15h12a1 1 0 110 2H4a1 1 0 010-2z"];

var grid$1 = ["M19 11c.55 0 1-.45 1-1s-.45-1-1-1h-2V5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V1c0-.55-.45-1-1-1S9 .45 9 1v2H5V1c0-.55-.45-1-1-1S3 .45 3 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2zM9 15H5v-4h4v4zm0-6H5V5h4v4zm6 6h-4v-4h4v4zm0-6h-4V5h4v4z"];

var gridView$1 = ["M0 19c0 .55.45 1 1 1h8v-9H0v8zM0 1v8h9V0H1C.45 0 0 .45 0 1zm19-1h-8v9h9V1c0-.55-.45-1-1-1zm-8 20h8c.55 0 1-.45 1-1v-8h-9v9z"];

var groupObjects$1 = ["M6 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8-3H6c-3.31 0-6 2.69-6 6s2.69 6 6 6h8c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 11H6c-2.76 0-5-2.24-5-5s2.24-5 5-5h8c2.76 0 5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"];

var groupedBarChart$1 = ["M12 16h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1zm7 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3-1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1zm-9 0h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm-4 0h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1z"];

var hand$1 = ["M17 5c-.42 0-.79.27-.93.64L14.38 10h-.77l1.34-6.67c.03-.1.05-.21.05-.33a.998.998 0 00-1.98-.19h-.01L11.57 10H11V1c0-.55-.45-1-1-1S9 .45 9 1v9h-.2L6.97 2.76a.997.997 0 00-1.73-.41l-.03.03c-.01.02-.02.03-.03.04-.01.02-.01.03-.02.04v.01c-.01.01-.02.02-.02.03v.01c-.02.01-.02.02-.03.03 0 0 0 .01-.01.01 0 .01 0 .02-.01.03 0 0 0 .01-.01.01 0 .01-.01.02-.01.03 0 0 0 .01-.01.01 0 .01-.01.02-.01.03 0 .01 0 .01-.01.02 0 .01-.01.02-.01.03 0 .01 0 .01-.01.02 0 .01-.01.02-.01.03v.02c0 .01 0 .02-.01.03V3c0 .05 0 .09.01.14l1.45 10.25L6 12.7v.01L3.84 9.45h-.01A.98.98 0 003 9c-.55 0-1 .45-1 1 0 .2.06.39.17.55L6 18.44C7.06 19.4 8.46 20 10 20c3.31 0 6-2.69 6-6v-1.84l.01-.03v-.06l1.94-5.75A1.003 1.003 0 0017 5z"];

var handDown$1 = ["M17.68 9.84C15.91 9 14.27 6.49 13.45 4.9 12.41 2.43 12.21 0 7.87 0 5.49 0 3.95.76 3.05 2.65 2.31 4.2 2 5.48 2 9.79v.99c0 .82.69 1.48 1.54 1.48.38 0 .73-.14 1-.36.19.6.78 1.05 1.47 1.05.47 0 .89-.2 1.17-.52.26.47.77.79 1.36.79.65 0 1.2-.39 1.43-.93l.03.77v5.44c0 .48.23.91.59 1.18.21.19.5.32.85.32h.06c.83 0 1.5-.67 1.5-1.5v-8.24l.01-.67c.85.98 1.92 1.76 3.24 1.89 1.79.19 2.09-1.33 1.43-1.64z"];

var handLeft$1 = ["M15.1 6.54c-1.58-.81-4.09-2.46-4.94-4.23-.31-.65-1.82-.35-1.64 1.43.13 1.33.91 2.4 1.89 3.24L9.74 7H1.5C.67 7 0 7.67 0 8.5v.06c0 .36.13.64.32.85.27.36.7.59 1.18.59h5.44l.78.01c-.54.23-.93.78-.93 1.43 0 .59.32 1.1.79 1.36-.32.28-.52.7-.52 1.17 0 .69.44 1.28 1.05 1.47-.22.27-.36.62-.36 1 0 .85.66 1.54 1.48 1.54h.99c4.31 0 5.59-.31 7.14-1.05 1.89-.9 2.65-2.44 2.65-4.82-.01-4.32-2.44-4.52-4.91-5.57z"];

var handRight$1 = ["M20 8.5c0-.83-.67-1.5-1.5-1.5h-8.24l-.67-.01c.98-.85 1.76-1.92 1.89-3.24.18-1.79-1.33-2.08-1.65-1.43-.84 1.76-3.35 3.41-4.93 4.23C2.43 7.59 0 7.79 0 12.13c0 2.38.76 3.92 2.65 4.82C4.2 17.69 5.48 18 9.79 18h.99c.82 0 1.48-.69 1.48-1.54 0-.38-.14-.73-.36-1 .6-.19 1.05-.78 1.05-1.47 0-.47-.2-.89-.52-1.17.47-.26.79-.77.79-1.36 0-.65-.39-1.2-.93-1.43l.77-.03h5.44c.48 0 .91-.23 1.18-.59.19-.21.32-.49.32-.85v-.03-.03z"];

var handUp$1 = ["M16.46 7.74c-.38 0-.73.14-1 .36-.19-.6-.78-1.05-1.47-1.05-.47 0-.89.2-1.17.52-.26-.47-.77-.79-1.36-.79-.65 0-1.2.39-1.43.93L10 6.94V1.5c0-.48-.23-.91-.59-1.18C9.2.13 8.92 0 8.56 0H8.5C7.67 0 7 .67 7 1.5v8.24l-.01.67c-.84-.98-1.92-1.76-3.24-1.89-1.79-.18-2.08 1.33-1.43 1.65 1.77.84 3.41 3.35 4.23 4.94 1.05 2.47 1.25 4.9 5.58 4.9 2.38 0 3.92-.76 4.82-2.65.74-1.56 1.05-2.84 1.05-7.15v-.99c0-.81-.69-1.48-1.54-1.48z"];

var hat$1 = ["M18.5 13c1.118 0 1.466.534 1.498 1.366L20 14.5v.5c0 1.945-5.69 3-10 3S0 16.945 0 15v-.5c0-.908.323-1.5 1.5-1.5.895 0 3.5 1.2 8.5 1.2l.411-.003C15.143 14.134 17.631 13 18.5 13zm-5-10c1.725 0 2.954 2.729 3.688 8.186-1.455.263-3.805.72-6.392.801l-.434.01L10 12c-2.896 0-5.585-.524-7.189-.814C3.546 5.73 4.775 3 6.5 3 8.6 3 8.329 5.5 10 5.5S11.5 3 13.5 3z"];

var header$1 = ["M16 1c-.55 0-1 .45-1 1v7H5V2c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-7h10v7c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"];

var headerOne$1 = ["M10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1zm7.4 10.77c.17-.2.29-.46.34-.77H19v10h-1.5v-7.11H15v-1.24c.32 0 .63-.03.93-.08.31-.06.58-.16.83-.29.26-.12.47-.3.64-.51z"];

var headerThree$1 = ["M10.989 1c0-.55-.45-1-.999-1-.55 0-.999.45-.999 1v6H1.998V1c0-.55-.45-1-.999-1C.449 0 0 .45 0 1v14c0 .55.45 1 .999 1 .55 0 .999-.45.999-1V9h6.993v6c0 .55.45 1 .999 1 .55 0 .999-.45.999-1V1zm7.461 13.645c.49.11.87.38 1.14.82.27.44.41.97.41 1.61a3 3 0 01-.24 1.23c-.16.36-.38.67-.66.92-.27.25-.59.44-.96.58-.37.14-.75.21-1.16.21-.5 0-.93-.08-1.3-.24a2.55 2.55 0 01-.93-.68c-.25-.29-.44-.65-.57-1.06-.13-.42-.2-.88-.21-1.38h1.39c-.02.58.11 1.07.38 1.46.28.39.68.58 1.23.58.47 0 .86-.15 1.17-.45.31-.3.47-.72.47-1.27 0-.37-.07-.67-.2-.89-.13-.22-.3-.39-.51-.5-.21-.11-.45-.18-.71-.21-.26-.03-.53-.04-.81-.03v-1.17c.22.01.45 0 .68-.05.23-.05.43-.13.61-.24.18-.11.32-.27.43-.47.11-.2.16-.45.16-.74 0-.41-.12-.74-.37-.99s-.57-.37-.96-.37c-.24 0-.45.06-.63.17-.18.11-.33.26-.45.45s-.2.4-.26.63c-.05.23-.08.47-.07.72h-1.39c.01-.47.09-.9.23-1.3s.33-.75.57-1.04c.24-.3.53-.53.87-.69.34-.17.73-.25 1.16-.25.33 0 .66.05.98.16.32.11.61.27.87.48.26.21.47.47.62.8.15.32.23.7.23 1.12 0 .48-.09.91-.29 1.27-.2.36-.5.63-.92.79v.02z"];

var headerTwo$1 = ["M16.6 17.41c-.22.17-.4.36-.56.55-.16.19-.27.4-.33.61h4.28V20H14c.01-.81.18-1.52.53-2.13.35-.6.81-1.13 1.41-1.58.28-.23.58-.46.89-.68.31-.22.59-.46.85-.71.26-.26.48-.53.63-.83.16-.3.25-.64.26-1.02 0-.18-.02-.37-.06-.57-.04-.2-.11-.39-.22-.56s-.26-.31-.45-.43-.44-.18-.75-.18c-.28 0-.52.06-.71.19s-.34.3-.45.52c-.11.22-.2.48-.25.78-.05.3-.08.62-.09.97h-1.43c0-.54.07-1.04.2-1.5.13-.47.32-.87.58-1.2.26-.34.58-.6.95-.78.37-.19.81-.29 1.3-.29.54 0 .99.09 1.35.29.36.19.65.44.87.74.22.29.38.62.47.97.09.35.14.68.14 1 0 .4-.05.75-.16 1.07-.11.32-.26.61-.44.88-.19.27-.4.52-.63.74-.24.22-.48.43-.73.63s-.5.38-.75.56c-.26.17-.5.35-.71.53zM10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1z"];

var headset$1 = ["M18.97 9H19A9 9 0 001 9h.03C.41 9.73 0 10.8 0 12c0 1.74.84 3.2 2 3.76V16c0 1.66 1.34 3 3 3h3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H5c-.55 0-1-.45-1-1 .55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-.92C3.57 4.61 6.47 2 10 2s6.43 2.61 6.92 6H16c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c1.66 0 3-1.79 3-4 0-1.2-.41-2.27-1.03-3z"];

var heart$1 = ["M20 6.25C20 3.35 17.65 1 14.75 1c-1.02 0-1.95.31-2.75.82v-.04c-.09.06-.17.12-.26.19-.04.03-.09.06-.14.1-.68.51-1.24 1.18-1.6 1.96-.4-.86-1.04-1.57-1.8-2.1-.04-.02-.07-.05-.1-.08a7 7 0 00-.6-.33c-.13-.04-.23-.1-.35-.15-.05-.02-.1-.05-.15-.07v.02C6.45 1.13 5.87 1 5.25 1A5.25 5.25 0 000 6.25c0 .09.01.17.01.25H0c0 .06.01.12.02.18s.01.12.02.18C.13 7.89.44 9 1.07 10.17 2.23 12.33 4.1 14.11 7 16.53v.01c.9.75 1.89 1.55 3 2.46.71-.58 1.38-1.12 2-1.63 3.48-2.86 5.64-4.78 6.93-7.18.63-1.17.94-2.27 1.03-3.3.01-.07.01-.14.02-.21 0-.06.01-.11.02-.17h-.01c0-.09.01-.17.01-.26z"];

var heartBroken$1 = ["M8.11 7.45C8.05 7.31 8 7.16 8 7c0-.07.03-.13.04-.19h-.02l.86-4.32A5.159 5.159 0 005.25 1 5.25 5.25 0 000 6.25c0 .09.01.17.01.25H0c0 .06.01.12.02.18s.01.12.02.18C.13 7.89.44 9 1.07 10.17c1.38 2.58 3.76 4.6 7.71 7.83l-.76-3.8h.02c-.01-.07-.04-.13-.04-.2 0-.21.08-.39.18-.54l-.02-.01 1.68-2.52-1.73-3.48zM20 6.25C20 3.35 17.65 1 14.75 1c-1.54 0-2.92.67-3.88 1.73l-.83 4.13 1.85 3.69h-.01c.07.14.12.29.12.45 0 .21-.08.39-.18.54l.02.01-1.77 2.66.81 4.07c4.16-3.39 6.63-5.45 8.05-8.1.63-1.17.94-2.27 1.03-3.3.01-.07.01-.14.02-.21 0-.06.01-.11.02-.17h-.01c0-.08.01-.16.01-.25z"];

var heatGrid$1 = ["M14 12h6V8h-6v4zM0 12h6V8H0v4zm1-3h4v2H1V9zm-1 7c0 .55.45 1 1 1h5v-4H0v3zM19 3h-5v4h6V4c0-.55-.45-1-1-1zm0 3h-4V4h4v2zM0 4v3h6V3H1c-.55 0-1 .45-1 1zm7 3h6V3H7v4zm7 10h5c.55 0 1-.45 1-1v-3h-6v4zm-7 0h6v-4H7v4zm1-3h4v2H8v-2zm-1-2h6V8H7v4z"];

var heatmap$1 = ["M6 0a6 6 0 100 12A6 6 0 106 0z", "M10.5 8a4.5 4.5 0 100 9 4.5 4.5 0 100-9z", "M16.5 7a3.5 3.5 0 100 7 3.5 3.5 0 100-7zM18 16a2 2 0 100 4 2 2 0 100-4zM2.5 14a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM16.5 0a2.5 2.5 0 100 5 2.5 2.5 0 100-5z"];

var helicopter$1 = ["M10 3v2H1V3.5a.5.5 0 00-1 0v5a.5.5 0 001 0V7l5 2c0 1.54.824 3.575 3 4.835V16H5.5a.5.5 0 100 1H16.5a.5.5 0 00.224-.053l2-1a.5.5 0 10-.448-.894L16.382 16H15v-1.1A5.002 5.002 0 0014 5h-1V3h6.5a.5.5 0 000-1h-16a.5.5 0 000 1H10zm4 13v-1c-1.608 0-2.928-.258-4-.683V16h4zm0-6V6a4 4 0 014 4h-4z"];

var help$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7.41 4.62c.65-.54 1.51-.82 2.56-.82.54 0 1.03.08 1.48.25.44.17.83.39 1.14.68.32.29.56.63.74 1.02.17.39.26.82.26 1.27s-.08.87-.24 1.23c-.16.37-.4.73-.71 1.11l-1.21 1.58c-.14.17-.28.33-.32.48-.05.15-.11.35-.11.6v.97H9v-2s.06-.58.24-.81l1.21-1.64c.25-.3.41-.56.51-.77s.14-.44.14-.67c0-.35-.11-.63-.32-.85s-.5-.33-.88-.33c-.37 0-.67.11-.89.33-.22.23-.37.54-.46.94-.03.12-.11.17-.23.16l-1.95-.29c-.12-.01-.16-.08-.14-.22.13-.93.52-1.67 1.18-2.22zM9 14h2.02L11 16H9v-2z"];

var helperManagement$1 = ["M17 10h-3v3h3v-3zm0 4h-3v3h3v-3zm0-8h-3v3h3V6zm2-6H1C.4 0 0 .4 0 1v18c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V1c0-.6-.5-1-1-1zm-1 18H2V2h16v16zm-9-4H6v3h3v-3zm4 0h-3v3h3v-3z"];

var highPriority$1 = ["M12 16v4H8v-4h4zm1-16l-1 14H8L7 0h6z"];

var highVoltagePole$1 = ["M7 0a1 1 0 00-1 1v3H4V2a1 1 0 000-2H1a1 1 0 100 2h1v2H1a1 1 0 000 2h1v2H1a1 1 0 100 2h3a1 1 0 000-2V6h2v13a1 1 0 001.928.374L10 14.54l2.073 4.836A1 1 0 0014 19V6h2v2a1 1 0 100 2h3a1 1 0 100-2h-1V6h1a1 1 0 100-2h-1V2h1a1 1 0 100-2h-3a1 1 0 100 2v2h-2V1a1 1 0 00-1-1H7zm1 2v2h4V2H8zm4 12.128L11.088 12 12 9.872v4.256zM8.516 6L10 9.462 11.483 6H8.516zm.396 6L8 9.872v4.256L8.912 12z"];

var highlight$1 = ["M11.22 14.09l3.03-3.03.71.71L20 6.73l-5.71-5.71-5.04 5.04.71.71-3.02 3.04 4.28 4.28zm6.8 3.91h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-15-1h4.04c.28 0 .53-.11.71-.3l2.02-2.02-3.44-3.45-4.04 4.04c-.18.18-.3.44-.3.71.01.57.46 1.02 1.01 1.02z"];

var history$1 = ["M10 0C6.71 0 3.82 1.6 2 4.05V2c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.76C5.23 3.17 7.47 2 10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-.55-.45-1-1-1s-1 .45-1 1c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm0 3c-.55 0-1 .45-1 1v6c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L11 9.59V4c0-.55-.45-1-1-1z"];

var home$1 = ["M2 12v7c0 .55.45 1 1 1h5v-7h4v7h5c.55 0 1-.45 1-1v-7l-8-8-8 8zm17.71-2.71L17 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v1.59L10.71.3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-9 9a1.003 1.003 0 001.42 1.42L10 2.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var horizontalBarChart$1 = ["M1 1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm3 5h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm8 8H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm7-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"];

var horizontalBarChartAsc$1 = ["M1 9h11c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0-5h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm18 12H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM1 14h14c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1z"];

var horizontalBarChartDesc$1 = ["M10 16H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm3-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm4-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"];

var horizontalDistribution$1 = ["M12 2H8c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM1 0C.45 0 0 .45 0 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm18 0c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z"];

var horizontalInbetween$1 = ["M11.293 13.707a.999.999 0 001.412 0l2.963-2.962a1 1 0 000-1.49l-2.963-2.962a.999.999 0 10-1.412 1.412L13.587 10l-2.294 2.295a.999.999 0 000 1.412zM7.295 13.707a.999.999 0 001.412-1.412L6.413 10l2.294-2.295a.999.999 0 10-1.412-1.412L4.332 9.255A.996.996 0 004 10a.996.996 0 00.332.745l2.963 2.962zM0 20V0h1a1 1 0 011 1v18a1 1 0 01-1 1H0zM20 20V0h-1a1 1 0 00-1 1v18a1 1 0 001 1h1z"];

var hurricane$1 = ["M0 14c1.648.775 3 1 4 1-1-1-2-3.112-2-5a5.098 5.098 0 000-.045C2 5.17 6.201 1 11.172 1c3.206 0 6.9.667 8.828 5-1.648-.775-3-1-4-1 1 1 2 3.112 2 5v.045C18 14.83 13.799 19 8.828 19c-3.206 0-6.9-.667-8.828-5zm10-7a3 3 0 100 6 3 3 0 000-6z"];

var idNumber$1 = ["M2 5v10h16V5H2zm0-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z", "M8.88 12.38c-.17-.39-1.01-.66-1.56-.9-.56-.24-.48-.39-.5-.6v-.09c.19-.17.35-.4.45-.67 0 0 0-.02.01-.02l.06-.18c.13-.03.2-.17.23-.29.03-.05.09-.18.08-.33-.04-.18-.11-.27-.2-.3v-.03c0-.24-.02-.58-.06-.81-.01-.06-.02-.12-.04-.19-.08-.27-.25-.52-.48-.7C6.63 7.09 6.3 7 6 7s-.63.09-.87.27c-.23.17-.4.42-.48.7-.02.06-.03.13-.04.19-.04.22-.06.57-.06.81V9c-.09.03-.17.12-.19.31-.01.14.05.27.08.32.03.14.1.27.23.3.02.06.03.12.06.18v.01c.11.27.27.51.47.68v.08c-.02.2.04.35-.51.6-.56.24-1.39.51-1.56.9-.19.39-.12.62-.12.62h5.98c-.01 0 .06-.23-.11-.62zM12 7h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM12 11h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z"];

var imageRotateLeft$1 = ["M10.5 13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM14 7H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 10l-5-3-1 2-2-4-3 4.5V9h11v8zm3-15h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H16c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4z"];

var imageRotateRight$1 = ["M5.29 4.29a1.003 1.003 0 001.42 1.42l2-2C8.89 3.53 9 3.28 9 3c0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H4C1.79 2 0 3.79 0 6v3c0 .55.45 1 1 1s1-.45 1-1V6c0-1.1.9-2 2-2h1.59l-.3.29zM15.5 13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM19 7H6c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 10l-5-3-1 2-2-4-3 4.5V9h11v8z"];

var _import$1 = ["M9.29 15.71c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 00-1.42-1.42L11 12.59V1c0-.55-.45-1-1-1S9 .45 9 1v11.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l5 5zM19 14c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"];

var inbox$1 = ["M16.92 3.56l-.01-.02c-.16-.35-.5-.6-.91-.6H4c-.41 0-.76.25-.91.6l-.01.02L0 10.49v6.46c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6.46l-3.08-6.93zM15 10.95c-.55 0-1 .45-1 1v1H6v-1c0-.55-.45-1-1-1H1.98l2.67-6h10.7l2.67 6H15z"];

var inboxFiltered$1 = ["M10.262 3l1.958 1.958v.05H4.65l-2.67 5.997H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h3.02l-.635-1.426.625-.63c.354-.353.598-.8.707-1.289L20 10.545v6.456c0 .55-.45.999-1 .999H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h6.262zm9.088-3a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V4.13L11.19 1.1a.642.642 0 01.45-1.1h7.71z"];

var inboxGeo$1 = ["M7.427 3a7.467 7.467 0 00-.411 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8V13c.165.01.332 0 .5 0a7.48 7.48 0 005.5-2.4V17c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h3.427zm5.715-.596a.133.133 0 01-.193 0l-.374-.374a.133.133 0 010-.193.133.133 0 01.193 0l.373.374a.133.133 0 010 .193zm1.743.033c-.05 0-.088-.006-.088-.055 0-.05.038-.056.088-.056h.165c.05 0 .088.006.088.055 0 .05-.038.056-.088.056h-.165zm.539.632c-.05 0-.104-.044-.104-.094v-.23c0-.05.054-.094.104-.094.05 0 .104.044.104.094v.23c0 .05-.055.094-.104.094zm-3.575 2.304h.506l1.182 1.2c.006.005 0 .005 0 .01v.446c0 .187-.126.341-.319.341h-.098v.226c0 .192-.138.296-.33.296h.01v.792c0 .188-.181.336-.368.336s-.369-.149-.369-.335v-1.32h-.214c-.193 0-.308-.149-.308-.341V5.72c0-.192.115-.346.308-.346zM14.5 0C17.536 0 20 2.464 20 5.5S17.536 11 14.5 11A5.502 5.502 0 019 5.5C9 2.464 11.464 0 14.5 0zm0 9.9c2.431 0 4.4-1.969 4.4-4.4 0-.297-.027-.583-.099-.864h-.236c-.188 0-.336-.104-.347-.313h-.319c.11.104.231.209.231.346v.705c0 .088-.055.17-.11.23h-.022l-.011.006-.022.011-.666.643v1.21c0 .193-.104.33-.296.33h-.54c-.192 0-.319-.137-.319-.33V6.221a.915.915 0 00-.533-.518h-.671c-.192 0-.368-.143-.368-.335V4.68c0-.192.176-.346.368-.346l.193-.005.319-.32a.342.342 0 01.489 0l.319.32c.005 0 .005.005.005.005h.704c.16 0 .237-.16.341-.313v-.11l-.038.005h-.27a.159.159 0 01-.153-.16c0-.087.066-.159.154-.159h.269l.039.006V3.42s-.05-.038-.061-.038h-.302l-.067.076a.342.342 0 01-.489.011l-.066-.088h-.176l.248.259c.021.022.021.088 0 .11-.028.022-.067.028-.088.006l-.292-.276h-.127l-.363.325-.033-.006c-.038.11-.087.089-.143.089-.126 0-.225-.072-.225-.193 0-.127.099-.209.225-.209h.176v-.182c0-.088.061-.131.149-.131h.066v-.127c0-.143.149-.297.286-.297h.28c.16 0 .27-.115.27-.275V2.42c0-.016.055.017.055-.088h-.187l-.005.017-.308.33a.123.123 0 01-.177 0c-.049-.044-.049-.121 0-.171l.391-.385c.027-.022.06-.022.094-.022l.005.022h.869A4.376 4.376 0 0014.5 1.1a4.402 4.402 0 00-2.816 1.018h.583c.094 0 .165.066.165.159s-.072.16-.165.16h-.478c0 .104-.039.06-.039.066v.351h.429l.226-.252c.132-.127.346-.155.473-.022a.332.332 0 010 .473l-1.183 1.182-.011.011c-.005.005-.011.005-.016.011a.115.115 0 00-.034.022c-.005.006-.01 0-.016.006a.309.309 0 01-.176.038h-.347c-.12.104-.187.148-.187.27v.088c0 .016-.027.027-.027.043l.561.589c.06.06.055.154 0 .209a.143.143 0 01-.209 0l-.578-.578a.425.425 0 01-.082.011c-.154 0-.292-.12-.292-.274v-.358h-.016c-.104.374-.165.77-.165 1.177 0 2.431 1.969 4.4 4.4 4.4zm3.388-3.107c.077 0 .16.06.16.137v.424c0 .077-.083.137-.16.137s-.16-.06-.16-.137V6.93c0-.077.083-.137.16-.137zm-3.113-4.879c0 .187-.154.314-.335.314h-.374v.104c0 .11-.05.198-.16.198s-.16-.088-.16-.198V1.98c-.104-.022-.033-.028-.033-.055 0-.187.127-.325.314-.325h.407c.187 0 .341.127.341.314z"];

var inboxSearch$1 = ["M7.136 3a6.327 6.327 0 00-.098 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h1.076l1.14 1.14a2.767 2.767 0 001.974.806c.282 0 .554-.042.81-.12V17c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h3.136zm3.244 1.33c0 1.62 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93-1.31-2.93-2.93-2.93-2.93 1.31-2.93 2.93zm6.47 2.43l2.89 2.85c.13.15.22.35.23.56 0 .43-.35.78-.78.78-.23 0-.42-.08-.56-.22l-2.87-2.87c-.17.1-.33.2-.51.29-.03.01-.06.03-.09.04-.18.07-.35.15-.55.21-.19.06-.37.11-.57.14-.05.01-.1.02-.14.02-.2.03-.39.05-.6.05A4.3 4.3 0 019 4.31C9 1.93 10.93.01 13.3 0c2.37 0 4.3 1.93 4.3 4.3 0 .21-.02.4-.05.6-.01.05-.01.09-.02.14-.04.2-.08.38-.14.58-.05.19-.13.36-.21.54-.01.03-.03.06-.04.09-.08.18-.18.34-.29.51z"];

var inboxUpdate$1 = ["M10.083 3a6.04 6.04 0 00.001 2.009H4.65l-2.67 5.996H5c.55 0 1 .45 1 .999v1h8v-1c0-.55.45-1 1-1h3.02l-.53-1.19a5.97 5.97 0 001.824-.811L20 10.545v6.456c0 .55-.45.999-1 .999H1c-.55 0-1-.45-1-1v-6.455L3.08 3.62l.01-.02c.15-.35.5-.6.91-.6h6.083zM16 8a4 4 0 110-8 4 4 0 010 8z"];

var infoSign$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM9 4h2v2H9V4zm4 12H7v-1h2V8H8V7h3v8h2v1z"];

var inheritance$1 = ["M6 10c0 2.21 1.79 4 4 4h6.59l-2.29-2.29A.965.965 0 0114 11a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H10c-3.31 0-6-2.69-6-6H1a1 1 0 01-1-1V1a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H6zM2 2v6h6V2H2z"];

var inheritedGroup$1 = ["M1 9c.55 0 1 .45 1 1v4c0 1.1.9 2 2 2h2.59l-.3-.29a1.003 1.003 0 011.42-1.42l2 2c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2 2A1.003 1.003 0 016 19c0-.28.11-.53.3-.71l.29-.29H4c-2.21 0-4-1.79-4-4v-4c0-.55.45-1 1-1zm6.996-9c.79 0 1.68.25 2.309.73a3.63 3.63 0 011.4 2.36c.11.6.17 1.52.17 2.15v.09c.22.09.42.32.47.82.03.39-.12.73-.2.87-.07.34-.27.71-.61.78-.04.16-.09.33-.15.48-.01.01-.02.05-.02.05-.27.71-.68 1.33-1.19 1.78 0 .08 0 .16.01.23.05.55-.15.95 1.33 1.6 1.469.66 3.698 1.35 4.178 2.39.45 1.05.27 1.67.27 1.67h-5.227a1.982 1.982 0 00-.319-.417l-2-2A2.003 2.003 0 005 15H4c-.548 0-1-.452-1-1v-1.462c.511-.213 1.023-.413 1.468-.608 1.479-.65 1.329-1.05 1.379-1.59l.01-.21c-.52-.45-.95-1.08-1.22-1.8l-.01-.01-.01-.03c-.07-.15-.12-.32-.16-.49-.34-.06-.54-.43-.62-.78-.08-.14-.24-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.64.05-1.55.17-2.15a3.648 3.648 0 011.4-2.36C6.317.25 7.207 0 7.996 0zm5.997 3c.59 0 1.26.19 1.73.55.46.35.8.85.97 1.4.04.13.07.25.08.38.08.45.13 1.14.13 1.61v.07c.16.07.31.24.35.62.02.29-.09.55-.15.65-.05.26-.2.53-.46.59-.03.12-.07.25-.11.36-.01.01-.01.04-.01.04-.2.53-.51 1-.89 1.34 0 .06 0 .12.01.17.04.41-.11.71 1 1.19 1.099.5 2.768 1.01 3.128 1.79.34.79.2 1.25.2 1.25h-3.039V15c-.06-.33-.17-.69-.33-1.06-.45-.97-1.37-1.52-3.238-2.3-.17-.07-.76-.31-.77-.32-.1-.04-.2-.08-.28-.12.05-.14.04-.29.06-.45l.01-.16c-.25-.21-.47-.48-.65-.79.22-.34.41-.71.56-1.12l.028-.078-.002.013-.006.035.06-.15c.36-.26.6-.67.72-1.13.18-.37.29-.82.25-1.3-.05-.5-.21-.92-.47-1.22-.02-.53-.06-1.11-.12-1.59.38-.17.83-.26 1.24-.26z"];

var innerJoin$1 = ["M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zm-3.34 9.25c-.55-1.2-.86-2.54-.86-3.95s.31-2.75.86-3.95a4.001 4.001 0 000 7.9zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm.6 2.05c.55 1.2.86 2.54.86 3.95s-.31 2.75-.86 3.95c1.9-.31 3.36-1.96 3.36-3.95S16.5 6.36 14.6 6.05zM10 5.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z"];

var insert$1 = ["M19 0H1C.4 0 0 .4 0 1v18c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V1c0-.6-.5-1-1-1zm-1 18H2V2h16v16zM5 11h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V5c0-.6-.4-1-1-1s-1 .4-1 1v4H5c-.6 0-1 .4-1 1s.4 1 1 1z"];

var intersection$1 = ["M13 4c-1.31 0-2.51.43-3.5 1.14A5.977 5.977 0 006 4c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.31 0 2.51-.43 3.5-1.14.99.71 2.19 1.14 3.5 1.14 3.31 0 6-2.69 6-6s-2.69-6-6-6zm-4.93 9.41c-.61.37-1.31.59-2.07.59-2.21 0-4-1.79-4-4s1.79-4 4-4c.76 0 1.46.22 2.07.59C7.4 7.56 7 8.73 7 10s.4 2.44 1.07 3.41zM13 14c-.76 0-1.46-.22-2.07-.59C11.6 12.44 12 11.27 12 10s-.4-2.44-1.07-3.41C11.54 6.22 12.24 6 13 6c2.21 0 4 1.79 4 4s-1.79 4-4 4z"];

var ipAddress$1 = ["M6 3.66C6 5.69 10 11 10 11s4-5.31 4-7.34C13.99 1.64 12.21 0 10 0S6 1.64 6 3.66zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM14 13.5V13h-4v1h3v2h-2v1h3v-3.5zM3 12h14c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm4 1v6h1v-6H7zm3 1v5h1v-5h-1z"];

var issue$1 = ["M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-2H9v-2h2v2zm0-3H9V4h2v9z"];

var issueClosed$1 = ["M15.364 5.9a.997.997 0 01-.707-.293l-2.121-2.122a1 1 0 111.414-1.414l1.414 1.414L18.192.657a1 1 0 011.414 1.414l-3.535 3.536a.997.997 0 01-.707.292zM11.78.157a3.002 3.002 0 00-1.437 1.85 8 8 0 107.1 5.055l.042-.042 1.472-1.472A9.959 9.959 0 0120 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0c.608 0 1.202.054 1.78.158zM11 16H9v-2h2v2zm0-3H9V4h2v9z"];

var issueNew$1 = ["M13.167.512a2.98 2.98 0 00-.131.524c-.74.115-1.39.5-1.848 1.052a8 8 0 106.724 6.724 2.997 2.997 0 001.052-1.848 2.98 2.98 0 00.524-.13A9.99 9.99 0 0120 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0a9.99 9.99 0 013.167.512zM11 16H9v-2h2v2zm0-3H9V4h2v9zm6-10h1.5a1 1 0 010 2H17v1.5a1 1 0 01-2 0V5h-1.5a1 1 0 010-2H15V1.5a1 1 0 012 0V3z"];

var italic$1 = ["M11.7 4H14c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1h2.2L7.3 15H5c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1H9.8l1.9-11z"];

var joinTable$1 = ["M19 6h-4V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h4v4c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM6 12H2V9h4v3zm0-4H2V5h4v3zm7 9H7v-3h6v3zm0-4H7V9h6v4zm0-5H7V5h6v3zm5 9h-4v-3h4v3zm0-4h-4v-3h4v3z"];

var key$2 = ["M14 0c-3.31 0-6 2.69-6 6 0 1.11.32 2.14.85 3.03L.44 17.44a1.498 1.498 0 102.12 2.12l.79-.79.94.94c.18.18.43.29.71.29s.53-.11.71-.29l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-.94-.94 3.2-3.2A5.9 5.9 0 0014 12c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"];

var keyBackspace$1 = ["M19 3H7c-.28 0-.53.11-.71.29l-6 6C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l6 6c.18.18.43.29.71.29h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-2.29 9.29a1.003 1.003 0 01-1.42 1.42L13 11.41l-2.29 2.29c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71l2.3-2.29-2.3-2.29a1.003 1.003 0 011.42-1.42L13 8.59l2.29-2.29c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L14.41 10l2.3 2.29z"];

var keyCommand$1 = ["M15.5 12H14V8h1.5C17.43 8 19 6.43 19 4.5S17.43 1 15.5 1 12 2.57 12 4.5V6H8V4.5C8 2.57 6.43 1 4.5 1S1 2.57 1 4.5 2.57 8 4.5 8H6v4H4.5C2.57 12 1 13.57 1 15.5S2.57 19 4.5 19 8 17.43 8 15.5V14h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0-9c.83 0 1.5.67 1.5 1.5S16.33 6 15.5 6 14 5.33 14 4.5 14.67 3 15.5 3zm-11 14c-.83 0-1.5-.67-1.5-1.5S3.67 14 4.5 14s1.5.67 1.5 1.5S5.33 17 4.5 17zm0-11C3.67 6 3 5.33 3 4.5S3.67 3 4.5 3 6 3.67 6 4.5 5.33 6 4.5 6zm7.5 6H8V8h4v4zm3.5 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"];

var keyControl$1 = ["M16.71 7.29l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"];

var keyDelete$1 = ["M19.71 9.29l-6-6A.997.997 0 0013 3H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.28 0 .53-.11.71-.29l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zm-9 3a1.003 1.003 0 01-1.42 1.42L7 11.41 4.71 13.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71L5.59 10l-2.3-2.29a1.003 1.003 0 011.42-1.42L7 8.59 9.29 6.3c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L8.41 10l2.3 2.29z"];

var keyEnter$1 = ["M18 2c-.55 0-1 .45-1 1v5c0 2.21-1.79 4-4 4H4.41L6.7 9.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L4.41 14H13c3.31 0 6-2.69 6-6V3c0-.55-.45-1-1-1z"];

var keyEscape$1 = ["M2 8c.55 0 1-.45 1-1V4.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 3H7c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm9-6.94V3.1c3.39.49 6 3.38 6 6.9 0 3.87-3.13 7-7 7-3.52 0-6.41-2.61-6.9-6H1.06c.5 4.5 4.31 8 8.94 8a9 9 0 009-9c0-4.63-3.5-8.44-8-8.94z"];

var keyOption$1 = ["M13 4h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zm6 12h-4.42L6.87 2.5l-.02.01A.977.977 0 006 2H1c-.55 0-1 .45-1 1s.45 1 1 1h4.42l7.71 13.5.01-.01c.18.3.49.51.86.51h5c.55 0 1-.45 1-1s-.45-1-1-1z"];

var keyShift$1 = ["M17.74 10.35l-6.99-8.01-.01.01C10.56 2.14 10.3 2 10 2s-.56.14-.74.35l-.01-.01-7 8 .01.01A.95.95 0 002 11c0 .55.45 1 1 1h3v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5h3c.55 0 1-.45 1-1 0-.25-.1-.48-.26-.65z"];

var keyTab$1 = ["M19 13H4.41l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L2 12.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-2.59l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 15H19c.55 0 1-.45 1-1s-.45-1-1-1zm0-12c-.55 0-1 .45-1 1v2.59L14.71 1.3A.965.965 0 0014 1a1.003 1.003 0 00-.71 1.71L15.59 5H1c-.55 0-1 .45-1 1s.45 1 1 1h14.59L13.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 7.41V10c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"];

var knownVehicle$1 = ["M19 4a.997.997 0 00-.707.293L14 8.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a.997.997 0 001.414 0l5-5A1 1 0 0019 4zm-2.048 7.291c.011.072.048.134.048.209a1.5 1.5 0 01-1.5 1.5c-.225 0-.433-.057-.624-.145-.279.085-.57.145-.876.145a2.99 2.99 0 01-2.121-.879l-3-3 .007-.007A3.027 3.027 0 018.184 8H4V7l1-3h10l.19.568 1.307-1.308c-.336-.356-.758-.658-1.165-.772 0 0-1.74-.488-5.332-.488s-5.332.488-5.332.488c-.67.188-1.424.864-1.674 1.502L2.99 4H3L2 7H1a1 1 0 000 2h.333l-.28.84L1 10v7.5a1.5 1.5 0 103 0V17h12v.5a1.5 1.5 0 003 0V10l-.19-.568-1.858 1.86zM4.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"];

var labTest$1 = ["M13 2a1 1 0 010 2v4l4 8v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1l4-8V4a1 1 0 110-2h6zm-2 2H9v4l-2 4h6l-2-4V4z"];

var label$1 = ["M3 12h14v-1H3v1zm11-9H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V9l-6-6zm4 12H2V5h11v3H3v1h10v1h5v5zm-4-6V5l4 4h-4z"];

var layer$1 = ["M19.5 9.1l-9-5c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-9 5c-.3.2-.5.5-.5.9s.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9s-.2-.7-.5-.9z"];

var layerOutline$1 = ["M9.514 4.126l-9 5a1 1 0 000 1.748l9 5a1 1 0 00.972 0l9-5a1 1 0 000-1.748l-9-5a1 1 0 00-.972 0zM10 6.144l6.94 3.855L10 13.855 3.059 9.999 10 6.144z"];

var layers$1 = ["M.5 6.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9s-.2-.7-.5-.9l-9-5c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-9 5c-.3.2-.5.5-.5.9s.2.7.5.9z", "M19 9c-.2 0-.3 0-.5.1L10 13.9 1.5 9.1C1.3 9 1.2 9 1 9c-.6 0-1 .4-1 1 0 .4.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9 0-.6-.4-1-1-1z", "M19 13c-.2 0-.3 0-.5.1L10 17.9l-8.5-4.7c-.2-.2-.3-.2-.5-.2-.6 0-1 .4-1 1 0 .4.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9 0-.6-.4-1-1-1z"];

var layout$1 = ["M18 6c-1.1 0-2 .9-2 2 0 .37.11.71.28 1.01l-2.27 2.27c-.3-.17-.64-.28-1.01-.28-.93 0-1.71.64-1.93 1.5H8.93c-.22-.86-1-1.5-1.93-1.5-.37 0-.71.11-1.01.28L3.72 9.01C3.89 8.71 4 8.37 4 8c0-.34-.09-.66-.24-.94l3.66-3.38c.31.2.68.32 1.08.32 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .34.09.66.24.94L3.08 6.32C2.77 6.12 2.4 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.37 0 .71-.11 1.01-.28l2.27 2.27c-.17.3-.28.64-.28 1.01s.11.71.28 1.01l-2.27 2.27C2.71 16.11 2.37 16 2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28.93 0 1.71-.64 1.93-1.5h2.14c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2 0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28 1.1 0 2-.9 2-2s-.9-2-2-2z"];

var layoutAuto$1 = ["M18 13c-.53 0-1.01.21-1.37.55L11.9 10.6c.06-.19.1-.39.1-.6s-.04-.41-.1-.6l4.72-2.95c.37.34.85.55 1.38.55 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .21.04.41.1.6l-4.73 2.96c-.24-.23-.54-.4-.87-.48V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.33.09-.63.26-.87.48L3.9 5.6c.06-.19.1-.39.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.53 0 1.01-.21 1.37-.55L8.1 9.4c-.06.19-.1.39-.1.6s.04.41.1.6l-4.72 2.95C3.01 13.21 2.53 13 2 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.21-.04-.41-.1-.6l4.73-2.96c.24.23.54.4.87.48v4.14C8.64 16.29 8 17.07 8 18c0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.33-.09.63-.26.87-.48l4.73 2.96c-.06.18-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"];

var layoutBalloon$1 = ["M18 16c-.14 0-.28.02-.42.05l-1.73-3.45c.69-.45 1.14-1.22 1.14-2.1s-.46-1.65-1.14-2.1l1.73-3.45c.14.03.28.05.42.05 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .6.27 1.13.69 1.5l-1.77 3.54c-.14-.02-.28-.04-.42-.04a2.5 2.5 0 00-2.45 2h-4.1A2.5 2.5 0 005.5 8c-.14 0-.28.02-.42.04L3.31 4.5C3.73 4.13 4 3.6 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.14 0 .28-.02.42-.05L4.14 8.4C3.46 8.85 3 9.62 3 10.5s.46 1.65 1.14 2.1l-1.73 3.45A1.84 1.84 0 002 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.6-.27-1.13-.69-1.5l1.77-3.54c.14.02.28.04.42.04a2.5 2.5 0 002.45-2h4.1a2.5 2.5 0 002.45 2c.14 0 .28-.02.42-.04l1.77 3.54c-.42.37-.69.9-.69 1.5 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"];

var layoutCircle$1 = ["M18.3 8c-.2-.9-.6-1.7-1.1-2.5.2-.3.3-.7.3-1 0-1.1-.9-2-2-2-.4 0-.7.1-1 .3-.8-.5-1.6-.8-2.5-1.1-.1-1-1-1.7-2-1.7S8.2.8 8 1.7c-.9.3-1.7.6-2.5 1.1-.3-.2-.7-.3-1-.3-1.1 0-2 .9-2 2 0 .4.1.7.3 1-.5.8-.8 1.6-1.1 2.5C.8 8.2 0 9 0 10s.8 1.8 1.7 2c.2.9.6 1.7 1.1 2.5-.2.3-.3.7-.3 1 0 1.1.9 2 2 2 .4 0 .7-.1 1-.3.8.5 1.6.8 2.5 1.1.1 1 1 1.7 2 1.7s1.8-.8 2-1.7c.9-.2 1.7-.6 2.5-1.1.3.2.7.3 1 .3 1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1 .5-.8.8-1.6 1.1-2.5 1-.1 1.7-1 1.7-2s-.8-1.8-1.7-2zm-1.8 5.8c-.3-.2-.6-.3-1-.3-1.1 0-2 .9-2 2 0 .4.1.7.3 1-.6.3-1.2.6-1.9.8-.3-.7-1-1.3-1.9-1.3-.8 0-1.6.5-1.9 1.3-.7-.2-1.3-.4-1.9-.8.2-.3.3-.6.3-1 0-1.1-.9-2-2-2-.4 0-.7.1-1 .3-.3-.6-.6-1.2-.8-1.9.8-.3 1.3-1.1 1.3-1.9s-.5-1.6-1.2-1.8c.2-.7.4-1.3.8-1.9.3.2.6.3 1 .3 1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1 .6-.3 1.2-.6 1.9-.8.2.7 1 1.2 1.8 1.2s1.6-.5 1.9-1.3c.7.2 1.3.4 1.9.8-.2.3-.3.6-.3 1 0 1.1.9 2 2 2 .4 0 .7-.1 1-.3.3.6.6 1.2.8 1.9-.8.3-1.3 1.1-1.3 1.9s.5 1.6 1.2 1.8c-.1.7-.4 1.4-.7 2z"];

var layoutGrid$1 = ["M2 0a2 2 0 100 4 2 2 0 100-4zM10 0a2 2 0 100 4 2 2 0 100-4zM18 0a2 2 0 100 4 2 2 0 100-4zM18 8a2 2 0 100 4 2 2 0 100-4zM18 16a2 2 0 100 4 2 2 0 100-4zM10 16a2 2 0 100 4 2 2 0 100-4zM2 16a2 2 0 100 4 2 2 0 100-4zM2 8a2 2 0 100 4 2 2 0 100-4zM10 8a2 2 0 100 4 2 2 0 100-4z"];

var layoutGroupBy$1 = ["M2 2a2 2 0 100 4 2 2 0 100-4zM18 0a2 2 0 100 4 2 2 0 100-4zM18 8a2 2 0 100 4 2 2 0 100-4zM18 16a2 2 0 100 4 2 2 0 100-4zM2 14a2 2 0 100 4 2 2 0 100-4zM2 8a2 2 0 100 4 2 2 0 100-4zM13 12a2 2 0 100 4 2 2 0 100-4zM13 4a2 2 0 100 4 2 2 0 100-4z"];

var layoutHierarchy$1 = ["M18.5 16.07v-4.14c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5h-4.14c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 8.64 2.93 8 2 8c-1.1 0-2 .9-2 2 0 .93.64 1.71 1.5 1.93v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z"];

var layoutLinear$1 = ["M16.5 7a2.5 2.5 0 00-2.45 2h-2.1a2.5 2.5 0 00-4.9 0h-2.1a2.5 2.5 0 100 1h2.1a2.5 2.5 0 004.9 0h2.1a2.5 2.5 0 102.45-3z"];

var layoutSkewGrid$1 = ["M2 0a2 2 0 100 4 2 2 0 100-4zM18 0a2 2 0 100 4 2 2 0 100-4zM18 8a2 2 0 100 4 2 2 0 100-4zM18 16a2 2 0 100 4 2 2 0 100-4zM2 16a2 2 0 100 4 2 2 0 100-4zM2 8a2 2 0 100 4 2 2 0 100-4zM10 12a2 2 0 100 4 2 2 0 100-4zM10 4a2 2 0 100 4 2 2 0 100-4z"];

var layoutSortedClusters$1 = ["M2 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var learning$1 = ["M10.551 1.127a1.256 1.256 0 00-1.102 0L.456 5.89c-.608.309-.608.913 0 1.222l8.993 4.762c.334.17.767.17 1.102 0l8.992-4.762c.61-.309.61-.913 0-1.222l-8.992-4.762z", "M18 6.5l.016 4.514c.002.548.447.99.994.99a.99.99 0 00.99-.99V6.5h-2zM3.366 10.033l6.401 3.358a.5.5 0 00.465 0l6.406-3.358a.25.25 0 01.366.221v5.109a.25.25 0 01-.139.224l-6.64 3.302a.5.5 0 01-.446 0l-6.64-3.302A.25.25 0 013 15.363v-5.108a.25.25 0 01.366-.222z"];

var leftJoin$1 = ["M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm.6 2.05c.55 1.2.86 2.54.86 3.95s-.31 2.75-.86 3.95c1.9-.31 3.36-1.96 3.36-3.95S16.5 6.36 14.6 6.05zM10 5.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z"];

var lessThan$1 = ["M7.162 10l9.154 3.052a1 1 0 01-.632 1.897l-12-4c-.912-.304-.912-1.594 0-1.897l12-4a1 1 0 01.632 1.897L7.162 10z"];

var lessThanOrEqualTo$1 = ["M16.316 11.051L7.162 8l9.154-3.051a1 1 0 10-.632-1.898l-12 4c-.912.304-.912 1.594 0 1.898l12 4a1 1 0 10.632-1.898zM16 15H4a1 1 0 100 2h12a1 1 0 100-2z"];

var lifesaver$1 = ["M8.143 14.644L7.028 17.43c.919.368 1.922.57 2.972.57s2.053-.202 2.972-.57l-1.115-2.786A4.986 4.986 0 0110 15a4.986 4.986 0 01-1.857-.356zm-2.787-2.787A4.986 4.986 0 015 10c0-.656.126-1.283.356-1.857L2.57 7.028A7.978 7.978 0 002 10c0 1.05.202 2.053.57 2.972l2.786-1.115zm2.787-6.5A4.986 4.986 0 0110 5c.656 0 1.283.126 1.857.356l1.115-2.786A7.978 7.978 0 0010 2c-1.05 0-2.053.202-2.972.57l1.115 2.786zm6.5 2.786c.23.574.357 1.2.357 1.857 0 .656-.126 1.283-.356 1.857l2.786 1.115c.368-.919.57-1.922.57-2.972s-.202-2.053-.57-2.972l-2.786 1.115zM10 13a3 3 0 100-6 3 3 0 000 6zm0 7C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"];

var lightbulb$1 = ["M6.33 13.39c0 .34.27.61.6.61h6.13c.33 0 .6-.27.6-.61C14.03 9.78 16 9.4 16 6.09 16 2.72 13.31 0 10 0S4 2.72 4 6.09c0 3.31 1.97 3.69 2.33 7.3zM13 15H7c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-1 3H8c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1z"];

var lightning$1 = ["M9 11H6a1 1 0 01-1-1L5.91.9a1 1 0 01.995-.9h6.256a.839.839 0 01.779 1.15L11.2 8h2.978a.822.822 0 01.748 1.162l-4.764 10.481A.608.608 0 019 19.392V11z"];

var link$1 = ["M10.85 11.98l-4.44 4.44-1 1c-.36.36-.86.58-1.41.58-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41l5.44-5.44C7.69 9.06 7.36 9 7 9c-1.11 0-2.09.46-2.82 1.18l-.01-.01-3 3 .01.01C.46 13.91 0 14.89 0 16c0 2.21 1.79 4 4 4 1.11 0 2.09-.46 2.82-1.18l.01.01 3-3-.01-.01C10.54 15.09 11 14.11 11 13c0-.36-.06-.69-.15-1.02zM20 4c0-2.21-1.79-4-4-4-1.11 0-2.09.46-2.82 1.18l-.01-.01-3 3 .01.01C9.46 4.91 9 5.89 9 7c0 .36.06.69.15 1.02l4.44-4.44 1-1c.36-.36.86-.58 1.41-.58 1.1 0 2 .9 2 2 0 .55-.22 1.05-.59 1.41l-5.44 5.44c.34.09.67.15 1.03.15 1.11 0 2.09-.46 2.82-1.18l.01.01 3-3-.01-.01C19.54 6.09 20 5.11 20 4zM5 14a1.003 1.003 0 001.71.71l8-8a1.003 1.003 0 00-1.42-1.42l-2 2-2 2-2 2-2 2c-.18.18-.29.43-.29.71z"];

var list$1 = ["M1.03 1C.46 1 0 1.46 0 2.03v.95C0 3.54.46 4 1.03 4h17.95C19.54 4 20 3.54 20 2.97v-.94C20 1.46 19.54 1 18.97 1H1.03zM0 17.97C0 18.54.46 19 1.03 19h17.95c.56 0 1.03-.46 1.03-1.03v-.95c0-.56-.46-1.03-1.03-1.03H1.03C.46 16 0 16.46 0 17.03v.94zM0 12.97C0 13.54.46 14 1.03 14h17.95c.56 0 1.03-.46 1.03-1.03v-.95c0-.56-.46-1.03-1.03-1.03H1.03C.46 11 0 11.46 0 12.03v.94zM0 7.97C0 8.54.46 9 1.03 9h17.95C19.54 9 20 8.54 20 7.97v-.94C20 6.46 19.54 6 18.97 6H1.03C.46 6 0 6.46 0 7.03v.94z"];

var listColumns$1 = ["M0 2.973v-.936C0 1.468.46 1.01 1.029 1H7.97C8.541 1 9 1.468 9 2.027v.946C9 3.542 8.53 4 7.971 4H1.03C.459 4 0 3.542 0 2.973zm0 5v-.936C0 6.468.46 6.01 1.029 6H7.97C8.541 6 9 6.468 9 7.027v.946C9 8.542 8.53 9 7.971 9H1.03C.459 9 0 8.542 0 7.973zm0 5v-.936C0 11.468.46 11.01 1.029 11H7.97C8.541 11 9 11.468 9 12.027v.946C9 13.542 8.53 14 7.971 14H1.03C.459 14 0 13.542 0 12.973zm0 5v-.936C0 16.468.46 16.01 1.029 16H7.97C8.541 16 9 16.468 9 17.027v.946C9 18.542 8.53 19 7.971 19H1.03C.459 19 0 18.542 0 17.973zm11-15v-.936c0-.569.46-1.027 1.029-1.037h6.942C19.541 1 20 1.468 20 2.027v.946C20 3.542 19.53 4 18.971 4H12.03C11.459 4 11 3.542 11 2.973zm0 5v-.936c0-.569.46-1.027 1.029-1.037h6.942C19.541 6 20 6.468 20 7.027v.946C20 8.542 19.53 9 18.971 9H12.03C11.459 9 11 8.542 11 7.973zm0 5v-.936c0-.569.46-1.027 1.029-1.037h6.942c.57 0 1.029.468 1.029 1.027v.946c0 .569-.47 1.027-1.029 1.027H12.03c-.57 0-1.029-.458-1.029-1.027zm0 5v-.936c0-.569.46-1.027 1.029-1.037h6.942c.57 0 1.029.468 1.029 1.027v.946c0 .569-.47 1.027-1.029 1.027H12.03c-.57 0-1.029-.458-1.029-1.027z"];

var listDetailView$1 = ["M8 6H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM8 1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm11 0h-7c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"];

var locate$1 = ["M10 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 1h-1.07c-.45-3.61-3.32-6.45-6.93-6.91V1c0-.55-.45-1-1-1S9 .45 9 1v1.09C5.39 2.55 2.52 5.39 2.07 9H1c-.55 0-1 .45-1 1s.45 1 1 1h1.07c.45 3.61 3.32 6.45 6.93 6.91V19c0 .55.45 1 1 1s1-.45 1-1v-1.09c3.61-.46 6.48-3.29 6.93-6.91H19c.55 0 1-.45 1-1s-.45-1-1-1zm-4 2h.9a5.98 5.98 0 01-4.9 4.91V15c0-.55-.45-1-1-1s-1 .45-1 1v.91A5.98 5.98 0 014.1 11H5c.55 0 1-.45 1-1s-.45-1-1-1h-.9A5.98 5.98 0 019 4.09V5c0 .55.45 1 1 1s1-.45 1-1v-.91A5.98 5.98 0 0115.9 9H15c-.55 0-1 .45-1 1s.45 1 1 1z"];

var lock$1 = ["M15.93 9H14V4.99c0-2.21-1.79-4-4-4s-4 1.79-4 4V9H3.93c-.55 0-.93.44-.93.99v8c0 .55.38 1.01.93 1.01h12c.55 0 1.07-.46 1.07-1.01v-8c0-.55-.52-.99-1.07-.99zM8 9V4.99c0-1.1.9-2 2-2s2 .9 2 2V9H8z"];

var logIn$1 = ["M19 0h-8c-.55 0-1 .45-1 1s.45 1 1 1h7v16h-7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 10c0-.28-.11-.53-.29-.71l-5-5a1.003 1.003 0 00-1.42 1.42L11.59 9H1c-.55 0-1 .45-1 1s.45 1 1 1h10.59L8.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l5-5c.18-.18.29-.43.29-.71z"];

var logOut$1 = ["M19.71 9.29l-5-5a1.003 1.003 0 00-1.42 1.42L16.59 9H6c-.55 0-1 .45-1 1s.45 1 1 1h10.59l-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM9 18H2V2h7c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z"];

var lowVoltagePole$1 = ["M10 0a1 1 0 00-1 1v2H5V2a1 1 0 00-2 0v1H2a1 1 0 000 2h1v2H2a1 1 0 000 2h4a1 1 0 000-2H5V5h4v14a1 1 0 102 0V5h4v2h-1a1 1 0 100 2h4a1 1 0 100-2h-1V5h1a1 1 0 100-2h-1V2a1 1 0 10-2 0v1h-4V1a1 1 0 00-1-1z"];

var manual$1 = ["M20 1.1a.976.976 0 00-.83-.88C15.15-.43 12.07.34 10 2.5 7.93.34 4.85-.43.84.22.37.3.03.67 0 1.1v15.01c0 .07 0 .14.01.21.09.52.61.88 1.15.79 3.85-.62 6.4.16 8 2.46.02.02.03.04.05.07.02.02.04.04.06.07l.01.01a1.07 1.07 0 00.28.19c.01 0 .01.01.02.01.03.01.07.03.1.04.01 0 .02.01.04.01.03.01.07.02.1.02.01 0 .02 0 .04.01H10c.04 0 .09 0 .13-.01.01 0 .03 0 .04-.01.03-.01.06-.01.1-.02.01 0 .03-.01.04-.01.03-.01.07-.02.1-.04.01 0 .02-.01.03-.01.07-.03.13-.07.19-.11.01 0 .01-.01.02-.01.02-.02.04-.03.06-.05.01-.01.02-.02.03-.02l.05-.05c.01-.01.02-.02.02-.03.01-.02.02-.03.04-.05 1.61-2.3 4.15-3.09 8-2.46.54.09 1.06-.26 1.15-.79-.01-.05 0-.09 0-.13V1.1zM9 16.63c-1.78-1.31-4.12-1.83-7-1.55V2c3.26-.37 5.51.39 7 2.35v12.28zm9-1.56c-2.88-.28-5.22.24-7 1.55V4.34c1.49-1.96 3.74-2.71 7-2.35v13.08z"];

var manuallyEnteredData$1 = ["M1 12h4.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm16.77-3.94l1.65-1.65c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.82zM1 4h12.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 15c0 .55.45 1 1 1h.34l2-2H1c-.55 0-1 .45-1 1zm1-7h8.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 2h-.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zm0 4h-4.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zM4 19l4.41-1.59-2.81-2.79L4 19zM14.23 5.94l-7.65 7.65 2.83 2.83 7.65-7.65-2.83-2.83z"];

var manyToMany$1 = ["M17 6a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 01-2.73-1.754c-.2.068-.408.154-.617.264-.884.465-1.92 1.418-2.605 3.49.685 2.072 1.721 3.025 2.605 3.49.21.11.416.196.617.264a3 3 0 11-.165 2.034 6.262 6.262 0 01-1.383-.528c-.983-.518-1.948-1.364-2.722-2.705-.774 1.34-1.739 2.187-2.722 2.705-.48.252-.95.419-1.383.528A3.001 3.001 0 010 15a3 3 0 015.73-1.246c.2-.068.408-.154.617-.264.884-.465 1.92-1.418 2.605-3.49-.685-2.072-1.721-3.025-2.605-3.49a4.21 4.21 0 00-.617-.264 3 3 0 11.165-2.034c.433.11.904.276 1.383.528.983.518 1.948 1.364 2.722 2.705.774-1.34 1.739-2.187 2.722-2.705.48-.252.95-.419 1.383-.528A3.001 3.001 0 0120 5a3 3 0 01-3 3zM4 5a1 1 0 10-2 0 1 1 0 002 0zm12 10a1 1 0 102 0 1 1 0 00-2 0zM3 14a1 1 0 110 2 1 1 0 010-2z"];

var manyToOne$1 = ["M3 2a1 1 0 100 2 1 1 0 000-2zm0 4c1.296 0 2.4-.821 2.82-1.972.487.039 1.086.13 1.667.347.947.352 1.773 1 2.032 2.318.323 1.644 1.234 2.675 2.264 3.307-1.03.632-1.941 1.663-2.264 3.307-.259 1.318-1.085 1.966-2.032 2.318a6.244 6.244 0 01-1.668.347 3.001 3.001 0 10.019 2.004c.633-.042 1.491-.158 2.347-.476 1.402-.523 2.867-1.625 3.296-3.807.259-1.318 1.085-1.966 2.032-2.318.24-.09.484-.158.722-.21a3 3 0 100-2.33 5.329 5.329 0 01-.722-.21c-.947-.352-1.773-1-2.032-2.318-.428-2.182-1.894-3.284-3.296-3.807-.856-.318-1.714-.434-2.347-.476A3.001 3.001 0 000 3a3 3 0 003 3zm13 4a1 1 0 102 0 1 1 0 00-2 0zM2 17a1 1 0 112 0 1 1 0 01-2 0z"];

var map$1 = ["M19.54 4.18l.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 001 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82zM6 17.13l-4-2.67V2.87l4 2.67v11.59zm6-2.67l-4 2.67V5.54l4-2.67v11.59zm6 2.67l-4-2.67V2.87l4 2.67v11.59z"];

var mapCreate$1 = ["M18 9.22v7.91l-4-2.67V9.22c-.61-.55-1-1.33-1-2.22-.35 0-.69-.07-1-.18v7.65l-4 2.67V5.54l2.02-1.35c0-.06-.02-.13-.02-.19 0-1.66 1.34-3 3-3 0-.34.07-.66.17-.97C13.12.02 13.06 0 13 0c-.21 0-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 001 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V6.82c-.31.11-.65.18-1 .18 0 .89-.39 1.67-1 2.22zM6 17.13l-4-2.67V2.87l4 2.67v11.59zM12 4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1z"];

var mapMarker$1 = ["M9.98 0c-3.87 0-7 2.98-7 6.67 0 3.68 7 13.33 7 13.33s7-9.65 7-13.33c0-3.68-3.14-6.67-7-6.67zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"];

var maximize$1 = ["M19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1z"];

var media$1 = ["M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"];

var menu$1 = ["M1 6h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 3H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var menuClosed$1 = ["M8 6h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM4 6c-.28 0-.53.11-.71.29l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3A1.003 1.003 0 005 13V7c0-.55-.45-1-1-1zm15 8H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1z"];

var menuOpen$1 = ["M12 9H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0-10H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm7.71 5.29l-3-3A1.003 1.003 0 0015 7v6a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var mergeColumns$1 = ["M6.71 6.29a1.003 1.003 0 00-1.42 1.42L6.59 9H2V2h5v2.18c.42.15.8.39 1.11.7l.01-.01.88.89V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4.76l-.88.88-.01-.01c-.31.31-.69.56-1.11.71V18H2v-7h4.59L5.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM19 0h-7c-.55 0-1 .45-1 1v4.76l.88-.88.01.01c.31-.31.69-.55 1.11-.7V2h5v7h-4.59l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L13.41 11H18v7h-5v-2.18c-.42-.15-.8-.39-1.11-.7l-.01.01-.88-.89V19c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var mergeLinks$1 = ["M10 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8-5c-.93 0-1.71.64-1.93 1.5H14V4c0-2.21-1.79-4-4-4S6 1.79 6 4v5.5H3.93C3.71 8.64 2.93 8 2 8c-1.1 0-2 .9-2 2s.9 2 2 2c.93 0 1.71-.64 1.93-1.5H6V16c0 2.21 1.79 4 4 4s4-1.79 4-4v-5.5h2.07c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2s-.9-2-2-2zm-5 8c0 1.66-1.34 3-3 3s-3-1.34-3-3V4c0-1.66 1.34-3 3-3s3 1.34 3 3v12zM10 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var minimize$1 = ["M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zM20 1a1.003 1.003 0 00-1.71-.71L13 5.59V3c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-2.59l5.29-5.29c.19-.18.3-.43.3-.71z"];

var minus$1 = ["M16 9H4c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"];

var mobilePhone$1 = ["M15 0H5c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-3H6V3h8v13z"];

var mobileVideo$1 = ["M19 5c-.28 0-.53.11-.71.29L15 8.59V5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-3.59l3.29 3.29c.18.19.43.3.71.3.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"];

var modal$1 = ["M19 1a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1h18zm-1 4H2v12h16V5zm-3-3h-2v2h2V2zm3 0h-2v2h2V2z"];

var modalFilled$1 = ["M20 5v13a1 1 0 01-1 1H1a1 1 0 01-1-1V5h20zm-3-4h2a1 1 0 011 1v1h-3V1zm-2 2H0V2a1 1 0 011-1h14v2z"];

var moon$1 = ["M19 14.15A9.94 9.94 0 019.94 20C4.45 20 0 15.55 0 10.06 0 6.03 2.4 2.56 5.85 1a9.811 9.811 0 00-.88 4.09c0 5.49 4.45 9.94 9.94 9.94 1.46 0 2.84-.31 4.09-.88z"];

var more$1 = ["M3.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM17.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM10.5 8a2.5 2.5 0 100 5 2.5 2.5 0 100-5z"];

var mountain$1 = ["M20 16H4l7-11h1l2 2h1l5 9zm-4-5l-1.5-3h-1l-1-1-1-1L8 11.5l3-1.5 1 1 1-1 3 1zM8.055 8L2.79 16H0l7-8h1.055z"];

var move$1 = ["M19.71 9.29l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 9H11V3.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L9 3.41V9H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 11H9v5.59L7.71 15.3A.965.965 0 007 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L11 16.59V11h5.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"];

var mugshot$1 = ["M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-.07c-.05-.2-.12-.42-.22-.67-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.67 3.67 0 00-1.29-1.86C11.7 3.25 10.81 3 10.02 3s-1.68.25-2.31.73c-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.17 1.51-.17 2.14v.08c-.24.09-.44.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59-1.48.65-3.7 1.35-4.16 2.4-.12.27-.18.49-.23.69H2V2h16v16z"];

var multiSelect$1 = ["M19 3H7c-.55 0-1 .45-1 1v1h12v6h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-6 6H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H2v-4h10v4zm4-9H4c-.55 0-1 .45-1 1v1h12v6h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"];

var music$1 = ["M19 0c-.08 0-.16.03-.24.05V.03l-12 3v.02C6.33 3.16 6 3.53 6 4v11.35c-.59-.22-1.27-.35-2-.35-2.21 0-4 1.12-4 2.5S1.79 20 4 20c1.94 0 3.55-.86 3.92-2H8V7.78l10-2.5v7.07c-.59-.22-1.27-.35-2-.35-2.21 0-4 1.12-4 2.5s1.79 2.5 4 2.5c1.94 0 3.55-.86 3.92-2H20V1c0-.55-.45-1-1-1z"];

var nest$1 = ["M2 2c.55 0 1 .45 1 1v5c0 2.21 1.79 4 4 4h8.59L13.3 9.71A.965.965 0 0113 9a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H7c-3.31 0-6-2.69-6-6V3c0-.55.45-1 1-1z"];

var newDrawing$1 = ["M18.7 13.7c.5 0 1 .4 1 1 0 .257-.073.44-.22.614l-.08.086-4 4c-.2.2-.4.3-.7.3-.6 0-1-.5-1-1 0-.257.073-.44.22-.614L14 18l4-4c.2-.2.4-.3.7-.3zM1.8 0l8.378 2.982A3.003 3.003 0 0013 7a3.003 3.003 0 003.877 2.87l.723 2.53.049.06a.41.41 0 01.051.24c0 .167-.07.403-.208.593l-.092.107-4 4c-.2.2-.4.3-.7.3-.075 0-.15-.056-.225-.084L12.4 17.6l-7-2-.112-.042c-.223-.094-.431-.244-.542-.45L4.7 15 0 1.8l.5-.6L7 7.7c-.2.3-.3.6-.3 1 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2a1.68 1.68 0 00-.871.22L7.7 7 1.2.5l.6-.5zM16 0c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .432-.278.803-.664.941l-.01.004A.989.989 0 0116 8c-.55 0-1-.45-1-1V5h-2c-.55 0-1-.45-1-1l.007-.116C12.065 3.388 12.489 3 13 3h2V1c0-.55.45-1 1-1z"];

var newGridItem$1 = ["M8 0H1C.45 0 0 .45 0 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm0 11H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1zm6 7h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm5-7h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm0-11h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 11h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zm5 5c-.55 0-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"];

var newLayer$1 = ["M11.513 2.663A2 2 0 0013 6h1v1a2 2 0 104 0v-.733l1.5.833c.3.2.5.5.5.9s-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 8.7 0 8.4 0 8s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1l1.013.563zM17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2z"];

var newLayers$1 = ["M17 3h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1a1 1 0 012 0v2zm-1.252 5.984L10.5 11.9c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5C.2 6.7 0 6.4 0 6s.2-.7.5-.9l9-5c.2-.1.3-.1.5-.1s.3 0 .5.1L13.92 2H13a2 2 0 100 4h1v1a2 2 0 001.748 1.984zm2.07-1.15C17.935 7.58 18 7.298 18 7V6h1c.353 0 .684-.091.972-.251.018.078.028.162.028.251 0 .4-.2.7-.5.9l-1.682.934zM19 9c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.1l8.5 4.8 8.5-4.8c.2-.1.3-.1.5-.1zm0 4c.6 0 1 .4 1 1 0 .4-.2.7-.5.9l-9 5c-.2.1-.3.1-.5.1s-.3 0-.5-.1l-9-5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .2 0 .3 0 .5.2l8.5 4.7 8.5-4.8c.2-.1.3-.1.5-.1z"];

var newLink$1 = ["M14.5 12a2.5 2.5 0 00-2.45 2h-7.1a2.5 2.5 0 100 1h7.1a2.5 2.5 0 102.45-3zM19 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z"];

var newObject$1 = ["M12 4c0 .6.4 1 1 1h2v2c0 .6.4 1 1 1 .5 0 1-.4 1-1V5h2c.5 0 1-.4 1-1s-.5-1-1-1h-2V1c0-.6-.5-1-1-1-.6 0-1 .4-1 1v2h-2c-.6 0-1 .5-1 1zm7 3c0 1.7-1.3 3-3 3s-3-1.3-3-3c-1.7 0-3-1.3-3-3s1.3-3 3-3c0-.2 0-.4.1-.5-1-.3-2-.5-3.1-.5C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-1.1-.2-2.1-.5-3H19z"];

var newPerson$1 = ["M11.41 15.92c-1.46-.65-1.26-1.05-1.31-1.59-.01-.07-.01-.15-.01-.23.5-.45.91-1.07 1.18-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.33-.07.53-.44.6-.78.08-.14.23-.48.2-.87-.05-.5-.24-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5-.22-.73-.67-1.4-1.27-1.86C9.58 4.25 8.7 4 7.92 4c-.78 0-1.66.25-2.28.73-.61.47-1.06 1.13-1.27 1.86-.05.16-.08.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.43.32-.48.83-.04.39.12.73.2.87.08.35.28.72.62.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.69 1.35 1.21 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.36 1.59-1.46.65-3.66 1.35-4.11 2.4C-.14 19.38.04 20 .04 20h15.75s.18-.62-.27-1.67c-.45-1.06-2.65-1.75-4.11-2.41zM18.87 3h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1z"];

var newPrescription$1 = ["M11.95 10.23c.16-.18.22-.22.46-.22h1.48c.25 0 .47.08.59.33.1.2.09.41-.05.66l-2.71 3.58L14.88 19c.13.21.16.46.03.69-.12.21-.34.31-.57.31H12.7c-.31 0-.56-.17-.7-.44l-1.9-2.67-1.93 2.68c-.15.27-.42.43-.73.43H5.98c-.25 0-.47-.08-.59-.33-.1-.2-.09-.41.05-.66l3.09-4.35L4.26 9H3v4.32c0 .41-.3.69-.7.69H.7c-.41 0-.7-.28-.7-.69V.69C0 .28.3 0 .7 0h4.42c.71 0 1.36.1 1.94.3.59.2 1.11.49 1.54.87.44.38.78.84 1.02 1.39.25.54.37 1.13.37 1.77 0 1.01-.28 1.88-.84 2.6-.43.54-1.35 1.29-2 1.59l3.09 3.94 1.71-2.23zM4.71 6.04c.71 0 1.45-.16 1.81-.46.33-.28.5-.69.5-1.25s-.17-.97-.5-1.25c-.35-.3-1.1-.46-1.81-.46h-1.7v3.42h1.7zM19 3c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1V5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V1c0-.55.45-1 1-1s1 .45 1 1v2h2z"];

var newTextBox$1 = ["M19 3h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1zM5 7.5v1c0 .28.22.5.5.5s.5-.22.5-.5V8h2v7h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H9V8h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-6c-.28 0-.5.22-.5.5zM16 9c-.55 0-1 .45-1 1v8H2V5h8c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"];

var ninja$1 = ["M20 6s-2.98 2.43-6.12 2.19C13.52 5.31 12.05 0 6 0c0 0 2.41 2.99 2.16 6.12C5.27 6.49 0 7.97 0 14c0 0 2.98-2.43 6.11-2.19C6.47 14.69 7.94 20 14 20c0 0-2.42-2.99-2.16-6.13C14.73 13.51 20 12.02 20 6zm-10 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"];

var notEqualTo$1 = ["M9.487 7l.532-3.196a1 1 0 011.962.392L11.513 7H16a1 1 0 010 2h-4.82l-.333 2H16a1 1 0 010 2h-5.487l-.532 3.196a1 1 0 01-1.962-.392L8.487 13H4a1 1 0 010-2h4.82l.333-2H4a1 1 0 110-2h5.487z"];

var notifications$1 = ["M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm7-5c-.55 0-1-.45-1-1V8c0-2.61-1.67-4.81-4-5.63V2c0-1.1-.9-2-2-2S8 .9 8 2v.37C5.67 3.19 4 5.39 4 8v6c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"];

var notificationsSnooze$1 = ["M10 18c0 1.1-.9 2-2 2s-2-.9-2-2zM8 0c.476 0 .914.168 1.258.448C8.508.878 8.09 1.562 8 2.5c-.133 1.4.4 2.367 1.6 2.9C8.533 6.6 8 7.467 8 8v1.2a2.8 2.8 0 002.8 2.8H14v2c0 .51.388.935.884.993L15 15c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V8c0-2.61 1.67-4.81 4-5.63V2c0-1.1.9-2 2-2z", "M16 9.25v-.395a.75.75 0 00-.75-.75h-2.813L15.834 3.9A.75.75 0 0016 3.43v-.68a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.184c0 .414.336.75.75.75h2.813L10.22 7.831a1 1 0 00-.221.627v.792c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75z"];

var notificationsUpdated$1 = ["M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm2-17.834A2.994 2.994 0 008 4.99c0 .808.319 1.557.876 2.114l2.97 2.99a2.99 2.99 0 004.154.072V14c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V8c0-2.61 1.67-4.81 4-5.63V2c0-1.1.9-2 2-2s2 .9 2 2v.166zm1.26 6.514l-2.97-2.99a.973.973 0 01-.29-.7c0-.55.44-1 .99-1 .27 0 .52.11.7.29l2.28 2.28 4.27-4.27a.99.99 0 01.7-.29c.55 0 1 .45 1 1 0 .28-.11.53-.3.7l-4.98 4.98a.99.99 0 01-1.4 0z"];

var numberedList$1 = ["M1.74 9.01h1.27V1h-.95c-.04.24-.12.45-.26.62-.13.17-.29.3-.47.41-.19.11-.4.18-.63.23-.23.04-.46.07-.71.07v1.03h1.75v5.65zm.43 7.93c.18-.14.37-.28.58-.43.21-.14.42-.29.63-.45.21-.16.41-.33.61-.5.2-.18.37-.38.52-.59.15-.21.28-.45.37-.7.09-.25.14-.54.14-.85 0-.25-.04-.52-.12-.8-.08-.28-.21-.54-.39-.78-.19-.24-.43-.44-.73-.59-.3-.17-.68-.25-1.12-.25-.41 0-.77.08-1.08.23-.32.16-.58.37-.8.64-.22.27-.38.59-.49.96-.11.37-.16.77-.16 1.21h1.19c.01-.28.03-.53.08-.77s.12-.45.21-.62c.09-.18.22-.31.38-.42.16-.1.35-.15.59-.15.26 0 .47.05.63.14.16.09.29.21.38.35.09.14.15.29.18.45.03.16.05.31.05.45-.01.31-.08.58-.22.81-.14.24-.32.45-.53.66-.22.2-.45.39-.71.57-.26.18-.51.36-.74.54-.5.36-.89.78-1.17 1.27-.3.47-.45 1.04-.46 1.69H5v-1.14H1.43c.05-.17.14-.33.27-.49.13-.15.29-.3.47-.44zM18 4.02H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1zm0 9H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1z"];

var numerical$1 = ["M2.39 5.75c-.17.21-.38.39-.63.52s-.52.23-.83.29c-.3.05-.61.08-.93.08v1.24h2.49V15h1.49V4.98H2.73c-.05.31-.17.57-.34.77zm17.2 4.71c-.27-.44-.65-.71-1.14-.82v-.02c.42-.16.72-.43.92-.79.2-.36.29-.79.29-1.27 0-.42-.08-.8-.23-1.12-.15-.33-.36-.59-.62-.8-.26-.21-.55-.37-.87-.48-.32-.11-.65-.16-.98-.16-.43 0-.82.08-1.16.25-.34.16-.63.39-.87.69-.24.29-.43.64-.57 1.04-.14.4-.22.83-.23 1.3h1.39c-.01-.25.02-.49.07-.72.06-.23.14-.44.26-.63s.27-.34.45-.45c.18-.11.39-.17.63-.17.39 0 .71.12.96.37s.37.58.37.99c0 .29-.05.54-.16.74-.11.2-.25.36-.43.47-.18.11-.38.19-.61.24-.23.05-.46.06-.68.05v1.17c.28-.01.55 0 .81.03s.5.1.71.21c.21.11.38.28.51.5.13.22.2.52.2.89 0 .55-.16.97-.47 1.27-.31.3-.7.45-1.17.45-.55 0-.95-.19-1.23-.58-.27-.39-.4-.88-.38-1.46h-1.39c.01.5.08.96.21 1.38.13.41.32.77.57 1.06.25.29.56.52.93.68.37.16.8.24 1.3.24.41 0 .79-.07 1.16-.21.37-.14.69-.33.96-.58.28-.25.5-.56.66-.92a3 3 0 00.24-1.23c0-.64-.14-1.17-.41-1.61zM8.58 12.41c.21-.18.45-.36.7-.53.25-.18.5-.36.75-.56.25-.2.49-.41.73-.63.23-.22.44-.47.63-.74.18-.27.33-.56.44-.88.11-.32.16-.67.16-1.07 0-.32-.05-.65-.14-1-.09-.35-.25-.68-.47-.97-.22-.3-.51-.55-.87-.74-.36-.2-.81-.29-1.35-.29-.49 0-.93.1-1.3.29-.37.18-.69.44-.95.78-.26.33-.45.73-.58 1.2-.13.46-.2.96-.2 1.5h1.43c.01-.35.04-.67.09-.97.05-.3.14-.56.25-.78.11-.22.26-.39.45-.52s.43-.19.71-.19c.31 0 .56.06.75.18.19.12.34.26.45.43.11.17.18.36.22.56.04.2.06.39.06.57-.01.38-.1.72-.26 1.02-.15.3-.37.57-.63.83-.26.25-.54.49-.85.71-.31.22-.61.45-.89.68-.6.45-1.06.98-1.41 1.58-.35.61-.52 1.32-.53 2.13h6.01v-1.43H7.69c.06-.21.17-.42.33-.61s.34-.38.56-.55z"];

var office$1 = ["M19 6h-5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4v-6h4v6h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM6 12H2V8h4v4zm0-6H2V2h4v4zm6 6H8V8h4v4zm0-6H8V2h4v4zm6 11h-4v-3h4v3zm0-5h-4V8h4v4z"];

var offline$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7 18l2-7H5l8-9-2 7h4l-8 9z"];

var oilField$1 = ["M19 17.99h-1.36l-4.35-9.57 2.91-.86 1.66 4.1c.11.27.43.4.72.31.12-.04.22-.11.28-.2.06-.11 1.47-2.08 1.05-5.6C19.79 5.12 19.3 0 16.01 0 14.89.01 13.99.83 14 1.84c0 .19.04.38.1.56l1.34 3.31L.72 10.03v.02c-.41.12-.72.49-.72.94 0 .55.45 1 1 1 .1 0 .19-.03.28-.06v.02l2-.59 1.47 6.63H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM5.2 10.8l3.95-1.16-2.83 6.22L5.2 10.8zm2.35 7.19l3.95-8.68 3.95 8.68h-7.9z"];

var oneColumn$1 = ["M14.94 0h-4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8 6c-.28 0-.53.11-.71.29l-3 3c-.18.18-.29.43-.29.71s.11.53.29.71l3 3A1.003 1.003 0 007.94 13V7c0-.55-.45-1-1-1z"];

var oneToMany$1 = ["M18 3a1 1 0 11-2 0 1 1 0 012 0zm-3.82 1.028a6.243 6.243 0 00-1.667.347c-.947.352-1.773 1-2.032 2.318C10.158 8.337 9.247 9.368 8.217 10c1.03.632 1.941 1.663 2.264 3.307.259 1.318 1.085 1.966 2.032 2.318.581.217 1.18.308 1.668.347a3.001 3.001 0 11-.019 2.004c-.633-.042-1.491-.158-2.347-.476-1.402-.523-2.868-1.625-3.296-3.807-.259-1.318-1.085-1.966-2.032-2.318a5.314 5.314 0 00-.722-.21 3 3 0 110-2.33c.238-.052.481-.12.722-.21.947-.352 1.773-1 2.032-2.318.428-2.182 1.894-3.284 3.296-3.807.856-.318 1.714-.434 2.347-.476A3.001 3.001 0 0120 3a3 3 0 01-5.82 1.028zM4 10a1 1 0 100 .002v-.002zM17 18a1 1 0 100-2 1 1 0 000 2z"];

var oneToOne$1 = ["M2 10a1 1 0 112 0 1 1 0 01-2 0zm3.83-1a3.001 3.001 0 100 2h8.34a3.001 3.001 0 100-2H5.83zM17 9a1 1 0 100 2 1 1 0 000-2z"];

var openApplication$1 = ["M4 1h14c.55 0 1 .45 1 1v13c0 .55-.45 1-1 1h-8v-2h7V4H5v6H3V2c0-.55.45-1 1-1zm2.5 5h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h3c.28 0 .5-.22.5-.5S9.78 7 9.5 7h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm5 2h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5zM7 17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17z"];

var outdated$1 = ["M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.22 3.17 3.76 5H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z"];

var pageLayout$1 = ["M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM7 17H2V8h5v9zm11 0H8V8h10v9zm0-10H2V3h16v4z"];

var panelStats$1 = ["M1 1h18a1 1 0 011 1v15a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1zm1 2v13h16V3H2zm9 0h1v13h-1V3zm2 7h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0-6h3.952v1H13V8zm0-2h3.952v1H13V6zm0-2h3.952v1H13V4z"];

var panelTable$1 = ["M19 1H1c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm-9 11H7V9h3v3zm0-4H7V5h3v3zm-8 8V3h4v13H2zm5 0v-3h3v3H7zm11 0h-7v-3h7v3zm0-4h-7V9h7v3zm0-4h-7V5h7v3z"];

var paperclip$1 = ["M18.35 2.67A5.664 5.664 0 0014.33 1c-1.44 0-2.89.56-3.99 1.67l-9.16 9.27C.4 12.73 0 13.78 0 14.83s.39 2.1 1.18 2.9c.78.79 1.82 1.18 2.85 1.18 1.04 0 2.07-.39 2.87-1.2l9.14-9.27c.96-.96.96-2.5.02-3.45-.94-.95-2.49-.96-3.44 0l-7.59 7.69c-.31.32-.3.83.01 1.14.31.31.81.31 1.13.02l7.59-7.69c.31-.31.84-.31 1.13-.02.31.31.31.85 0 1.16l-9.14 9.27c-.93.95-2.54.93-3.45.02-.94-.95-.92-2.55.02-3.49l9.16-9.25c1.55-1.56 4.18-1.59 5.72-.03 1.56 1.57 1.55 4.26 0 5.82l-8.89 9.02c-.3.31-.3.81.01 1.11.3.3.79.31 1.1.01v.01l8.91-9.02A5.645 5.645 0 0020 6.73c0-1.48-.55-2.94-1.65-4.06z"];

var paragraph$1 = ["M16.5 1H7C4.2 1 2 3.2 2 6s2.2 5 5 5v6.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4h2v13.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4h1.5c.8 0 1.5-.7 1.5-1.5S17.3 1 16.5 1z"];

var path$1 = ["M18 0H2C.9 0 0 .9 0 2s.9 2 2 2h7v4H4c-1.1 0-2 .9-2 2s.9 2 2 2h5v4H6c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-3v-4h5c1.1 0 2-.9 2-2s-.9-2-2-2h-5V4h7c1.1 0 2-.9 2-2s-.9-2-2-2z"];

var pathSearch$1 = ["M4 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 11.69l-5-2.5v-3.63c-.32.11-.66.22-1 .29v3.32l-6 2.57v-7.25c-.36-.27-.69-.57-1-.9v8.1l-5-2.5V10c.55 0 1-.45 1-1s-.45-1-1-1V1.31l3.43 1.71c.11-.31.24-.62.39-.92L.72.05A.545.545 0 00.5 0C.22 0 0 .22 0 .5v16c0 .2.12.36.28.44l6 3c.07.04.14.06.22.06.07 0 .14-.01.2-.04l6.79-2.91 5.79 2.9c.07.03.14.05.22.05.28 0 .5-.22.5-.5v-4.21c-.31.13-.64.21-1 .21v3.19zM10 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6.72-.94l-1.43-.72c.2.43.36.89.48 1.36l.23.11V5.5c-.55 0-1 .45-1 1s.45 1 1 1v1.96l1 1V3.5c0-.2-.12-.36-.28-.44zm-3.69 5.56c.14-.21.27-.42.38-.65.02-.04.04-.07.05-.11.11-.22.2-.45.28-.69v-.01c.07-.24.13-.48.17-.73l.03-.17c.04-.25.06-.5.06-.76C17 2.46 14.54 0 11.5 0S6 2.46 6 5.5 8.46 11 11.5 11c.26 0 .51-.02.76-.06l.17-.03c.25-.04.49-.1.73-.17h.01c.24-.08.47-.17.69-.28.04-.02.07-.03.11-.05.23-.11.44-.24.65-.38l.18.18 3.5 3.5c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71l-3.68-3.67zm-4.53.88c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"];

var pause$1 = ["M7 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm9 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var people$1 = ["M16.94 17a4.92 4.92 0 00-.33-1.06c-.45-.97-1.37-1.52-3.24-2.3-.17-.07-.76-.31-.77-.32-.1-.04-.2-.08-.28-.12.05-.14.04-.29.06-.45 0-.05.01-.11.01-.16-.25-.21-.47-.48-.65-.79.22-.34.41-.71.56-1.12l.04-.11c-.01.02-.01.02-.02.08l.06-.15c.36-.26.6-.67.72-1.13.18-.37.29-.82.25-1.3-.05-.5-.21-.92-.47-1.22-.02-.53-.06-1.11-.12-1.59.38-.17.83-.26 1.24-.26.59 0 1.26.19 1.73.55.46.35.8.85.97 1.4.04.13.07.25.08.38.08.45.13 1.14.13 1.61v.07c.16.07.31.24.35.62.02.29-.09.55-.15.65-.05.26-.2.53-.46.59-.03.12-.07.25-.11.36-.01.01-.01.04-.01.04-.2.53-.51 1-.89 1.34 0 .06 0 .12.01.17.04.41-.11.71 1 1.19 1.1.5 2.77 1.01 3.13 1.79.34.79.2 1.25.2 1.25h-3.04zm-5.42-3.06c1.47.66 3.7 1.35 4.18 2.39.45 1.05.27 1.67.27 1.67H.04s-.19-.62.27-1.67c.46-1.05 2.68-1.75 4.16-2.4 1.48-.65 1.33-1.05 1.38-1.59 0-.07.01-.14.01-.21-.52-.45-.95-1.08-1.22-1.8l-.01-.01c0-.01-.01-.02-.01-.03-.07-.15-.12-.32-.16-.49-.34-.06-.54-.43-.62-.78-.08-.14-.24-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.64.05-1.55.17-2.15a3.648 3.648 0 011.4-2.36C6.32 2.25 7.21 2 8 2s1.68.25 2.31.73a3.63 3.63 0 011.4 2.36c.11.6.17 1.52.17 2.15v.09c.22.09.42.32.47.82.03.39-.12.73-.2.87-.07.34-.27.71-.61.78-.04.16-.09.33-.15.48-.01.01-.02.05-.02.05-.27.71-.68 1.33-1.19 1.78 0 .08 0 .16.01.23.05.55-.15.95 1.33 1.6z"];

var percentage$1 = ["M15 10c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3s3-1.34 3-3v-2c0-1.66-1.34-3-3-3zm1 5c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zM8 7V5c0-1.66-1.34-3-3-3S2 3.34 2 5v2c0 1.66 1.34 3 3 3s3-1.34 3-3zM4 7V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm11-4a1.003 1.003 0 00-1.88-.48L5.14 16.49a1.003 1.003 0 101.74.99l7.99-13.97c.08-.15.13-.32.13-.51z"];

var person$1 = ["M19.61 17.91c-.57-1.32-3.35-2.19-5.19-3.01-1.85-.82-1.59-1.31-1.66-1.99-.01-.09-.01-.19-.02-.29.63-.56 1.15-1.33 1.49-2.22 0 0 .02-.05.02-.06.07-.19.13-.39.19-.6.42-.09.67-.55.76-.98.1-.17.29-.6.25-1.08-.06-.62-.31-.91-.59-1.03v-.11c0-.79-.07-1.93-.22-2.68A4.55 4.55 0 0012.9.92C12.11.32 11 0 10.01 0s-2.1.32-2.89.92a4.55 4.55 0 00-1.74 2.94c-.14.75-.22 1.89-.22 2.68v.1c-.29.11-.55.4-.61 1.04-.04.48.15.91.25 1.08.1.44.35.91.79.98.05.21.12.41.19.6 0 .01.01.03.01.04l.01.02c.34.91.87 1.69 1.52 2.25 0 .09-.01.18-.02.26-.07.68.13 1.17-1.72 1.99S.96 16.59.39 17.91C-.18 19.23.05 20 .05 20h19.9s.23-.77-.34-2.09z"];

var phone$1 = ["M19.91 15.51c-.08-.08-4.21-2.5-4.35-2.57a.876.876 0 00-.4-.1c-.19 0-.42.13-.71.4-.28.27-1.17 1.49-1.43 1.76s-.48.4-.65.4c-.08 0-.19-.02-.32-.07s-1.45-.73-4.2-3.15-3.11-4-3.13-4.44c0-.17.13-.39.4-.65.28-.25.57-.51.89-.74.32-.24.61-.5.88-.78s.4-.52.4-.71c0-.13-.03-.27-.1-.4C7.12 4.32 4.62.19 4.53.1c-.19-.18-.92-.1-1.29.1C.25 1.82 0 4 .05 4.86c.05.89.61 5.58 5.2 9.93 5.7 5.41 9.66 5.2 9.92 5.2.87 0 3.52-.48 4.65-3.19.16-.38.31-1.07.09-1.29z"];

var pieChart$1 = ["M9 .98c-4.5.5-8 4.31-8 8.94 0 4.97 4.03 9.04 9 9.04 4.63 0 8.44-3.96 8.94-7.96H9V.98z", "M10-.08V10h10C20 4 15.52-.08 10-.08z"];

var pin$1 = ["M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-4.95 6.36 6.36-4.95 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.07-7.07z"];

var pivot$1 = ["M5.83 9.75L.29 15.29a1.003 1.003 0 001.42 1.42l5.54-5.54c-.57-.37-1.05-.85-1.42-1.42zM19 11c-.55 0-1 .45-1 1v1.59l-3.83-3.83c-.37.56-.85 1.04-1.41 1.41L16.59 15H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-5-4c0-2.21-1.79-4-4-4S6 4.79 6 7s1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"];

var pivotTable$1 = ["M3 5H1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm0-5H1C.45 0 0 .45 0 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm13.71 5.29C16.53 5.11 16.28 5 16 5s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L15 8.41V11c0 2.21-1.79 4-4 4H8.41l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L8.41 17H11c3.31 0 6-2.69 6-6V8.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zM19 0H6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var play$1 = ["M16 10c0-.36-.2-.67-.49-.84l.01-.01-10-6-.01.01A.991.991 0 005 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .19 0 .36-.07.51-.16l.01.01 10-6-.01-.01c.29-.17.49-.48.49-.84z"];

var playbook$1 = ["M1.707.293A1 1 0 00.293 1.707L2.086 3.5.293 5.293a1 1 0 001.414 1.414L3.5 4.914l1.793 1.793a1 1 0 001.414-1.414L4.914 3.5l1.793-1.793A1 1 0 005.293.293L3.5 2.086 1.707.293z", "M16 20a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z", "M18.29 5.7L16 3.41V8a3 3 0 01-3 3H4a1 1 0 00-1 1v7a1 1 0 11-2 0v-7a3 3 0 013-3h9a1 1 0 001-1V3.41l-2.29 2.3a1.003 1.003 0 01-1.42-1.42l4-4c.18-.18.43-.29.71-.29.28 0 .53.11.71.29l4 4A1.003 1.003 0 0119 6c-.28 0-.53-.11-.71-.3z"];

var plus$1 = ["M16 9h-5V4c0-.55-.45-1-1-1s-1 .45-1 1v5H4c-.55 0-1 .45-1 1s.45 1 1 1h5v5c0 .55.45 1 1 1s1-.45 1-1v-5h5c.55 0 1-.45 1-1s-.45-1-1-1z"];

var polygonFilter$1 = ["M18 7c-.27 0-.52.05-.75.15l-6.28-4.88c.01-.09.03-.18.03-.27 0-1.1-.9-2-2-2S7 .9 7 2c0 .06.01.12.02.19l-4.19 3C2.57 5.07 2.29 5 2 5 .9 5 0 5.9 0 7c0 .74.4 1.38 1 1.72v7.55c-.6.35-1 .99-1 1.73 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1h7.55c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.37-.11-.72-.29-1.02L18.03 11A2 2 0 0018 7zm-5.03 9c-.72.01-1.35.41-1.69 1H3.72c-.17-.3-.42-.55-.72-.72V8.72c.6-.34 1-.98 1-1.72 0-.06-.01-.12-.02-.19l4.19-3c.26.12.54.19.83.19.27 0 .52-.05.75-.15l6.28 4.88c-.01.09-.03.18-.03.27 0 .37.11.72.29 1.02L12.97 16z"];

var power$1 = ["M10 10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v8c0 .55.45 1 1 1zm3-7.45v2.16c2.36 1.12 4 3.5 4 6.29 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.17 4-6.29V2.55C3.51 3.79 1 7.09 1 11a9 9 0 0018 0c0-3.91-2.51-7.21-6-8.45z"];

var predictiveAnalysis$1 = ["M20 8.01c0-1.26-.61-2.43-1.61-3.12C17.86 2.5 15.8.79 13.4.79c-.58 0-1.14.1-1.69.29A3.533 3.533 0 009.17 0C8.05 0 7 .55 6.32 1.45c-.15-.02-.3-.03-.45-.03-1.63 0-3.03 1.12-3.46 2.71C.97 4.65 0 6.05 0 7.66c0 .48.09.95.26 1.4-.17.44-.26.91-.26 1.39 0 1.38.72 2.64 1.89 3.29.67.7 1.59 1.09 2.54 1.09.61 0 1.19-.15 1.71-.45.68.82 1.68 1.3 2.73 1.3.66 0 1.28-.18 1.83-.52.61.49 1.34.81 2.11.91 1.3 1.43 2.3 3.28 2.31 3.3 0 0 .35.61.33.61.96-.01 1.77-.2 1.64-1.3.01.02-.92-2.89-.92-2.89.52-.26.94-.69 1.21-1.23 1.12-.66 1.84-1.91 1.84-3.26 0-.3-.03-.6-.1-.89.57-.64.88-1.51.88-2.4zm-1.54 1.28l-.18-.2-.77-.84c-.33-.37-.67-1.17-.73-1.73 0 0-.13-1.25-.13-1.26-.06-.74-1.17-.73-1.13.14 0 .02.13 1.26.13 1.26.04.36.15.77.3 1.17-.08-.01-.15-.02-.22-.02 0 0-2.57-.12-2.57-.13-.73-.03-.89 1.22-.05 1.25l2.57.13c.53.03 1.29.37 1.61.72l.61.67.02.06c.1.27.14.55.14.83 0 .93-.51 1.77-1.34 2.18l-.2.1-.09.23c-.19.48-.6.82-1.1.93l-.67.14.87 2.75c-.48-.76-1.19-1.79-2.02-2.67l-.15-.16-.21-.02c-.51-.04-.99-.21-1.42-.48l1.7-1.48c.44-.39 1.04-.55 1.24-.49 0 0 .78.22.78.23.78.2 1.03-.92.29-1.21l-.78-.23c-.69-.2-1.67.22-2.24.72l-1.91 1.66-.39.32c-.44.36-.93.55-1.5.55-.8 0-1.54-.41-1.97-1.07v-1.88c0-.5.21-.98.34-1.07 0 0 .65-.43.64-.43.87-.69.21-1.57-.64-1.14 0-.01-.65.43-.65.43-.31.2-.54.56-.7.97-.13-.13-.28-.25-.43-.35 0 0-1.91-1.26-1.91-1.28-.81-.56-1.5.63-.61 1.11 0-.02 1.89 1.28 1.89 1.28.46.31.77.97.77 1.36v.84c-.43.24-.78.36-1.24.36-.67 0-1.31-.29-1.77-.79l-.07-.08-.09-.05a2.425 2.425 0 01-1.31-2.16c0-.38.09-.74.25-1.08l.15-.31-.14-.33c-.17-.34-.25-.7-.25-1.08 0-1.13.76-2.1 1.85-2.37l.39-.09.07-.43a2.41 2.41 0 012.39-2.05c.19 0 .39.02.58.07l.4.1.22-.38A2.41 2.41 0 019.17 1.3c.55 0 1.08.19 1.5.53l-.44.45-.01-.01-.31.31c-.41.35-.92.53-1.11.5 0 0-.84-.13-.84-.14-.83-.15-1.09 1.08-.18 1.29.01 0 .84.14.84.14.03 0 .06 0 .09.01-.14.46-.18.96-.12 1.4 0 0 .21 1.24.19 1.23.13.65 1.32.44 1.16-.22 0-.01-.19-1.23-.19-1.23-.07-.48.15-1.19.45-1.5l.48-.5c.07-.06.13-.12.19-.18l.93-.95c.5-.23 1.04-.34 1.59-.34 1.93 0 3.57 1.4 3.89 3.34l.05.31.26.15a2.445 2.445 0 01.87 3.4z"];

var prescription$1 = ["M13.95 10.23c.16-.18.22-.22.46-.22h1.48c.25 0 .47.08.59.33.1.2.09.41-.05.66l-2.71 3.58L16.88 19c.13.21.16.46.03.69-.12.21-.34.31-.57.31H14.7c-.31 0-.56-.17-.7-.44l-1.9-2.67-1.93 2.68c-.15.27-.42.43-.73.43H7.98c-.25 0-.47-.08-.59-.33-.1-.2-.09-.41.05-.66l3.09-4.35L6.26 9H5v4.32c0 .41-.3.69-.7.69H2.7c-.41 0-.7-.28-.7-.69V.69c0-.41.3-.69.7-.69h4.42c.71 0 1.36.1 1.94.3.59.2 1.11.49 1.54.87.44.38.78.84 1.02 1.39.24.54.36 1.14.36 1.78 0 1.01-.28 1.88-.84 2.6-.43.54-1.35 1.29-2 1.59l3.09 3.94 1.72-2.24zM6.71 6.04c.71 0 1.45-.16 1.81-.46.33-.28.5-.69.5-1.25s-.17-.97-.5-1.25c-.35-.3-1.1-.46-1.81-.46h-1.7v3.42h1.7z"];

var presentation$1 = ["M19 1h-8c0-.55-.45-1-1-1S9 .45 9 1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v11c0 .55.45 1 1 1h4.59L4.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L9 16.41V19c0 .55.45 1 1 1s1-.45 1-1v-2.59l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L12.41 15H17c.55 0 1-.45 1-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3 12H4V3h12v10z"];

var print$1 = ["M14 16H6v-4H4v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2v4zm2-13c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V3zm3 2H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2v-3h14v3h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 4h-2V7h2v2z"];

var projects$1 = ["M18 4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h16V4zm-2-3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V1zm3 6H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-5 7c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2h1v2h6v-2h1v2z"];

var properties$1 = ["M2 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5-4h12c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zM2 1C.9 1 0 1.9 0 3s.9 2 2 2 2-.9 2-2-.9-2-2-2zm17 8H7c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm0 7H7c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"];

var property$1 = ["M3 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5-1h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM3 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-1-8H9c-1.1 0-2 .9-2 2s.9 2 2 2h9c1.1 0 2-.9 2-2s-.9-2-2-2zM3 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"];

var publishFunction$1 = ["M7.01 10.11c.35-.64.72-1.68 1.09-3.11l.8-3.03h.96l.24-.77h-.99c.28-1.11.66-1.92 1.12-2.43.28-.32.56-.48.83-.48.05 0 .1.02.13.05.03.03.05.07.05.12 0 .04-.04.13-.11.25-.08.12-.11.24-.11.35 0 .15.06.28.18.39.12.11.27.16.45.16.2 0 .36-.07.49-.2s.2-.31.2-.54c0-.26-.1-.47-.3-.63-.2-.16-.52-.24-.96-.24-.68 0-1.3.19-1.86.58-.55.38-1.08 1.02-1.58 1.91-.17.3-.34.5-.49.59-.15.08-.4.13-.74.12l-.23.77h.95L5.74 9.21c-.23.86-.39 1.39-.47 1.59-.12.29-.3.54-.54.75-.1.08-.21.12-.35.12-.04 0-.07-.01-.1-.03l-.03-.04c0-.02.03-.07.1-.13.07-.07.1-.17.1-.31 0-.15-.05-.28-.16-.38-.11-.1-.27-.15-.47-.15-.25 0-.44.07-.59.2-.15.12-.23.28-.23.46 0 .19.09.36.27.5.19.14.47.21.86.21.61 0 1.16-.15 1.63-.46.48-.31.89-.79 1.25-1.43zm3.7 1.18c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L9 14.41V19c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3zm4.15-6.78c.17-.13.36-.2.55-.2.07 0 .2.03.39.08s.36.08.5.08c.2 0 .37-.07.5-.2.13-.14.2-.31.2-.52 0-.22-.07-.4-.2-.53s-.33-.2-.58-.2c-.22 0-.43.05-.63.15-.2.1-.45.32-.75.67-.23.25-.56.7-1.01 1.33a6.52 6.52 0 00-.91-2.15l-2.38.39-.05.25c.18-.03.33-.05.45-.05.24 0 .43.1.59.3.25.31.59 1.24 1.02 2.79-.34.44-.58.73-.7.87-.21.22-.38.36-.52.43-.1.05-.22.08-.35.08-.1 0-.26-.05-.49-.16a1.01 1.01 0 00-.42-.11c-.23 0-.42.07-.57.22-.17.14-.24.32-.24.55 0 .21.07.38.21.51.14.13.33.2.56.2.23 0 .44-.05.64-.14.2-.09.45-.29.75-.59s.72-.78 1.25-1.43c.2.62.38 1.07.53 1.35.15.28.32.49.52.61.19.12.44.19.73.19.28 0 .57-.1.86-.3.38-.25.77-.69 1.17-1.31l-.25-.14c-.27.37-.48.6-.61.69-.09.06-.19.09-.31.09-.14 0-.28-.09-.42-.26-.23-.29-.54-1.09-.93-2.4.37-.58.66-.96.9-1.14z"];

var pulse$1 = ["M19 10h-2.38L14.9 6.55h-.01c-.17-.32-.5-.55-.89-.55-.43 0-.79.28-.93.66h-.01l-2.75 7.57L7.98 1.82h-.02A.978.978 0 007 1c-.44 0-.8.29-.94.69h-.01L3.28 10H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.44 0 .8-.29.94-.69h.01l1.78-5.34 2.29 12.21h.02c.08.46.47.82.96.82.43 0 .79-.28.93-.66h.01l3.21-8.82.96 1.92h.01c.16.33.49.56.88.56h3c.55 0 1-.45 1-1s-.45-1-1-1z"];

var rain$1 = ["M4 10a3 3 0 111.065-5.806A5.001 5.001 0 0114.63 3.11 3.5 3.5 0 1115.5 10H4zm0 2a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm9 1a1 1 0 10-2 0v6a1 1 0 102 0v-6zm3-1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-7 1a1 1 0 10-2 0v3a1 1 0 102 0v-3z"];

var random$1 = ["M14.47 5h2.12L15.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 3H14c-.31 0-.57.15-.76.37l-.01-.01-2.93 3.52 1.3 1.56L14.47 5zm2.24 7.29a1.003 1.003 0 00-1.42 1.42l1.3 1.29h-2.12L4.77 3.36l-.01.01A.998.998 0 004 3H1c-.55 0-1 .45-1 1s.45 1 1 1h2.53l9.7 11.64.01-.01c.19.22.45.37.76.37h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM3.53 15H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.31 0 .57-.15.76-.37l.01.01 2.93-3.52-1.3-1.56L3.53 15z"];

var record$1 = ["M10 3a7 7 0 100 14 7 7 0 100-14z"];

var rectHeight$1 = ["M4 18V2h12v16H4zM2 1a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V1zm4.293 11.705a.999.999 0 111.412-1.412L10 13.587l2.295-2.294a.999.999 0 011.412 1.412l-2.962 2.963a1 1 0 01-1.49 0l-2.962-2.963zm0-3.998a.999.999 0 010-1.412l2.962-2.963A1.008 1.008 0 0110 4a.996.996 0 01.745.332l2.962 2.963a.999.999 0 01-1.412 1.412L10 6.413 7.705 8.707a.999.999 0 01-1.412 0z"];

var rectWidth$1 = ["M18 16H2V4h16v12zM1 18a1 1 0 01-1-1V3a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H1zM7.295 6.293a.999.999 0 111.412 1.412L6.413 10l2.294 2.295a.999.999 0 11-1.412 1.412l-2.963-2.962A.992.992 0 014 10a.996.996 0 01.332-.745l2.963-2.962zm3.998 0a.999.999 0 011.412 0l2.963 2.962.04.038A.996.996 0 0116 10a.996.996 0 01-.332.745l-2.963 2.962a.999.999 0 01-1.412-1.412L13.587 10l-2.294-2.295a.999.999 0 010-1.412z"];

var rectangle$1 = ["M1 4h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm1 2v8h16V6H2z"];

var redo$1 = ["M19.71 5.29l-4-4a1.003 1.003 0 00-1.42 1.42L16.59 5H6c-3.31 0-6 2.69-6 6s2.69 6 6 6h5v-2H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h10.59L14.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM15 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"];

var refresh$1 = ["M19 1c-.55 0-1 .45-1 1v2.06C16.18 1.61 13.29 0 10 0 4.48 0 0 4.48 0 10c0 .55.45 1 1 1s1-.45 1-1c0-4.42 3.58-8 8-8 2.52 0 4.76 1.18 6.22 3H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 8c-.55 0-1 .45-1 1 0 4.42-3.58 8-8 8-2.52 0-4.76-1.18-6.22-3H5c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-2.06C3.82 18.39 6.71 20 10 20c5.52 0 10-4.48 10-10 0-.55-.45-1-1-1z"];

var regex$2 = ["M0 17.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM14 0a1 1 0 00-1 1v3.768L9.737 2.884a1 1 0 10-1 1.732L12 6.5 8.737 8.384a1 1 0 001 1.732L13 8.232V12a1 1 0 102 0V8.232l3.263 1.884a1 1 0 001-1.732L16 6.5l3.263-1.884a1 1 0 10-1-1.732L15 4.768V1a1 1 0 00-1-1z"];

var regressionChart$1 = ["M19 16H3.1L19.31 3.39l-.61-.79L2 15.59V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-9-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10-2c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-5 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"];

var remove$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm5-9H5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z"];

var removeColumn$1 = ["M19 0H5c-.55 0-1 .45-1 1v4h2V2h5v16H6v-3H4v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-5V2h5v16zM6.29 13.71a1.003 1.003 0 001.42-1.42L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 00.29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L4 11.41l2.29 2.3z"];

var removeColumnLeft$1 = ["M4 11h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z"];

var removeColumnRight$1 = ["M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H2V2h5v16zm11 0H8V2h10v16zm-8-7h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1z"];

var removeRowBottom$1 = ["M7 14h6c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V8h16v10zm0-11H2V2h16v5z"];

var removeRowTop$1 = ["M7 8h6c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm12-8H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2v-5h16v5zm0-6H2V2h16v10z"];

var repeat$1 = ["M14 6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2.05C16.18 1.6 13.29 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-.55-.45-1-1-1s-1 .45-1 1c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c2.53 0 4.77 1.17 6.24 3H15c-.55 0-1 .45-1 1z"];

var reset$1 = ["M6 6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.23 3.17 3.76 5H5c.55 0 1 .45 1 1z"];

var resolve$1 = ["M8.7 4.7C7.9 4.2 7 4 6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6c1 0 1.9-.2 2.7-.7C7.3 14 6.5 12.1 6.5 10s.9-4 2.2-5.3zM14 4c-1 0-1.9.2-2.7.7 1.4 1.4 2.2 3.2 2.2 5.3s-.9 4-2.2 5.3c.8.5 1.7.7 2.7.7 3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z"];

var rig$1 = ["M7 4.2C7 5.75 8.34 7 10 7s3-1.46 3-2.8C13 1.45 10.94 0 10 0H6c0 2.74 3.76 1.96 1 4.2zm11.71 14.09L13 12.59V9.01c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3.58l-5.71 5.7a1.003 1.003 0 001.42 1.42L7 15.42V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3.58l4.29 4.29a1.003 1.003 0 001.42-1.42zM10.21 8c.01 0 .01.01 0 0 .01.01.01 0 0 0z"];

var rightJoin$1 = ["M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zm-3.34 9.25c-.55-1.2-.86-2.54-.86-3.95s.31-2.75.86-3.95a4.001 4.001 0 000 7.9zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z"];

var ring$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"];

var rocket$1 = ["M7 7.5c0-3 1.857-6.25 3-7.5 1.143 1.25 3 4.5 3 7.5s-.714 6.25-1 7.5H8c-.286-1.25-1-4.5-1-7.5zm6.84 2.5c-.139 1.62-.47 3.405-.84 5.01l4 .99-1-4-2.16-2zm-4.832 6C9 16.139 9 16.284 9 16.429 9 17.143 9 17.5 10 20c1-2.5 1-2.857 1-3.571 0-.145 0-.29-.008-.429H9.008zM7 15.011c-.37-1.605-.701-3.39-.84-5.011L4 12l-1 4 4-.989zM10 5a1 1 0 100 2 1 1 0 000-2z"];

var rocketSlant$1 = ["M10 5c2.121-2.121 6.308-2.924 8-3-.076 1.692-.879 5.879-3 8-1.192 1.192-2.543 1.823-3.748 2.384-.442.207-.865.404-1.252.616-.203.111-.597.302-.986.49-.444.215-.88.426-1.014.51l-2-2c.158-.252 1-2 1-2s1.37-3.37 3-5zm5 1a1 1 0 11-2 0 1 1 0 012 0zM3 17s0-2 2-4l2 2c-2 2-4 2-4 2zm11-2l-4 4-1.298-4.233c1.033-.56 1.881-.962 2.643-1.322 1.275-.604 2.307-1.092 3.554-2.015L14 15zM1 10l4-4 3.557-.899c-.923 1.247-1.412 2.28-2.015 3.554-.36.762-.762 1.61-1.322 2.643L1 10z"];

var rotateDocument$1 = ["M8.71 6.29A.997.997 0 008 6H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-8c0-.28-.11-.53-.29-.71l-4-4zM11 18H4V8h3v3c0 .55.45 1 1 1h3v6zm3-16h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4z"];

var rotatePage$1 = ["M14 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4zm-2 5H3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 11H4V9h7v9z"];

var route$1 = ["M14.028 6.016c.146.275.31.57.485.872.304.524.628 1.047.952 1.545l.118.178-.208-.006-.577-.005c-2.093.004-2.841.303-2.841.895 0 .069.271.248 1.245.567l1.008.313c2.671.831 3.99 1.827 3.99 4.167 0 2.76-1.928 4.059-4.832 4.376-.782.085-1.52.098-2.452.066l-1.15-.046H6.221l.535-.811a67.46 67.46 0 001.122-1.787h2.04l.686.03c1.028.046 1.77.043 2.523-.039 1.832-.2 2.673-.767 2.673-1.789 0-.69-.483-1.09-1.992-1.585l-.83-.257c-1.192-.364-2.037-.7-2.59-1.165.399-1 .612-1.844.612-2.538a6.018 6.018 0 00-.382-2.098c.745-.573 1.884-.822 3.41-.883zM5 4.2c2.648 0 4.791 2.151 4.8 4.797C9.8 11.652 5 18.6 5 18.6l-.5-.744C3.273 15.993.2 11.121.2 8.997A4.802 4.802 0 015 4.2zm0 2.4a2.4 2.4 0 10.002 4.802A2.4 2.4 0 005 6.6zM17 .333a2.671 2.671 0 012.667 2.665C19.667 4.473 17 8.333 17 8.333l-.391-.587c-.741-1.137-2.276-3.629-2.276-4.748A2.668 2.668 0 0117 .333z"];

var satellite$1 = ["M9 18c.6 0 1 .4 1 1s-.4 1-1 1c-5 0-9-4-9-9 0-.6.4-1 1-1s1 .4 1 1c0 3.9 3.1 7 7 7zm0-4c.6 0 1 .4 1 1s-.4 1-1 1c-2.8 0-5-2.2-5-5 0-.6.4-1 1-1s1 .4 1 1c0 1.7 1.3 3 3 3zm5.7-3.7c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0l-3.6-3.6c-.4-.4-.4-1 0-1.4l1.4-1.4zM4.7.3c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4L8.3 6.7c-.4.4-1 .4-1.4 0L3.3 3.1c-.4-.4-.4-1 0-1.4L4.7.3zm11.1 1c.4-.4 1-.4 1.4 0l1.6 1.6c.4.4.4 1 0 1.4l-6.5 6.5c-.4.4-1 .4-1.4 0L9.3 9.2c-.4-.4-.4-1 0-1.4l6.5-6.5zM9 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"];

var saved$1 = ["M12 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6l-6-6zm4 18H5V2h6v5h5v11zm-8.29-6.71a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.32 0 .59-.16.77-.38l.01.01 4-5-.01-.01c.14-.18.23-.38.23-.62 0-.55-.45-1-1-1-.32 0-.59.16-.77.38l-.01-.01-3.3 4.13-2.21-2.21z"];

var scatterPlot$1 = ["M9 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1 10H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM5 15c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"];

var search$1 = ["M19.56 17.44l-4.94-4.94A8.004 8.004 0 0016 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 102.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"];

var searchAround$1 = ["M9.9 6.9a3 3 0 100 6 3 3 0 100-6zM3 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM10 10L5 5", "M5.379 4.671l5.02 5.02-.707.708-5.02-5.02zM10 10l5-5", "M14.621 4.671l.707.708-5.02 5.02-.707-.707z", "M10 10l5 5M10.379 9.671l5.02 5.02-.707.708-5.02-5.02z", "M10 10l-5 5M9.621 9.671l.707.708-5.02 5.02-.707-.707z"];

var searchTemplate$1 = ["M13 8H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0 3H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0-6H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 12.44l-3.23-3.23A8.939 8.939 0 0018 9a9 9 0 10-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 102.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"];

var searchText$1 = ["M19.56 17.44l-3.23-3.23A8.939 8.939 0 0018 9a9 9 0 10-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 102.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3.5-11h-7c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5V7h2v6h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-.28-.22-.5-.5-.5z"];

var segmentedControl$1 = ["M19 5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 8h-8V7h8v6z"];

var select$1 = ["M19.71 18.29l-4.25-4.25L20 12.91 9.93 9.33c.04-.1.07-.21.07-.33V3c0-.55-.45-1-1-1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 .55.45 1 1 1h6c.12 0 .23-.03.34-.07L12.91 20l1.14-4.54 4.25 4.25c.17.18.42.29.7.29a1.003 1.003 0 00.71-1.71zM8 8H4V4h4v4z"];

var selection$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z", "M10 6a4 4 0 100 8 4 4 0 100-8z"];

var sendMessage$1 = ["M1.754.135L19.393 9.06c.57.288.775.943.458 1.462-.107.176-.266.32-.458.418l-17.64 8.925c-.57.288-1.288.1-1.604-.418C.05 19.287 0 19.183 0 19v-7l11-2L0 8V1.075C0 .481.529 0 1.18 0c.201 0 .399.047.574.135z"];

var sendTo$1 = ["M19 0h-5c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-4.3 4.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L18 3.4V6c0 .5.5 1 1 1s1-.5 1-1V1c0-.6-.5-1-1-1zm0 9c-1 0-1.9-.5-2.5-1.3l-1.4 1.4c-.5.6-1.3.9-2.1.9-1.7 0-3-1.3-3-3 0-.8.3-1.6.9-2.1l1.4-1.4C11.5 2.9 11 2 11 1c0-.3.1-.6.2-.9-.4-.1-.8-.1-1.2-.1C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-.4 0-.8-.1-1.2-.3.1-.6.2-.9.2z"];

var sendToGraph$1 = ["M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm10 2c-.53 0-1.01.21-1.37.55L11.9 10.6c.06-.19.1-.39.1-.6 0-.21-.04-.41-.1-.6l4.72-2.95c.37.34.85.55 1.38.55 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .21.04.41.1.6l-4.73 2.96c-.24-.23-.54-.4-.87-.48V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.33.09-.63.26-.87.48L7.6 7.91 5.42 6.55 3.9 5.6c.06-.19.1-.39.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.53 0 1.01-.21 1.37-.55L9 9.96V10h.06L12 11.84l.4.25 1.51.94 2.19 1.37c-.06.19-.1.39-.1.6 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zm-7-2.96l-.06-.04H11v.04z"];

var sendToMap$1 = ["M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm11.54-6.82l.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 001 0C.45 0 0 .45 0 1v9c0-.55.45-1 1-1h1V2.87l4 2.67V9h2V5.54l4-2.67v11.6l-1 .67v2.4l2-1.33 5.45 3.63.01-.02c.15.1.33.18.54.18.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82zM18 17.13l-4-2.67V2.87l4 2.67v11.59z"];

var seriesAdd$1 = ["M13.29 9.29c.3.62.8 1.12 1.42 1.42l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 2.29-2.3zM12 5c0-.5.4-1 1-1h2V2c0-.6.4-1 1-1 .5 0 1 .4 1 1v2h2c.5 0 1 .4 1 1s-.5 1-1 1h-2v2c0 .6-.5 1-1 1-.6 0-1-.4-1-1V6h-2c-.6 0-1-.4-1-1z"];

var seriesConfiguration$1 = ["M11.91 10.67c.52.45 1.13.8 1.8 1.03l-2.01 2.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.3L7 10.41l-5 5V17h16.99c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8c.28 0 .53.11.71.29l3.29 3.3.91-.92zM18.5 4.6h1.04c.25 0 .45.2.46.44v.9c0 .25-.2.45-.45.45h-1.04c-.07.22-.16.42-.27.62l.73.73c.17.17.17.44 0 .61l-.61.61c-.17.17-.44.17-.61 0l-.73-.73c-.2.11-.4.2-.62.26v1.05c0 .25-.2.45-.45.45h-.9c-.25 0-.45-.2-.45-.45V8.51c-.21-.06-.4-.15-.58-.25l-.76.77c-.17.17-.46.17-.64 0l-.64-.64a.465.465 0 010-.64l.76-.77c-.1-.19-.19-.38-.25-.59h-1.04c-.25 0-.45-.2-.45-.45v-.9c0-.25.2-.45.45-.45h1.04c.07-.22.16-.42.27-.61l-.73-.73a.429.429 0 010-.61l.61-.61c.17-.17.44-.17.61 0l.73.73c.2-.11.4-.2.62-.26V1.45a.44.44 0 01.44-.45h.9c.25 0 .45.2.45.45V2.5c.21.06.4.15.58.25l.76-.77c.17-.17.46-.17.64 0l.64.64c.17.17.17.46 0 .64l-.76.77c.1.17.19.36.25.57zm-4.69.9c0 .93.75 1.69 1.69 1.69.93 0 1.69-.75 1.69-1.69s-.75-1.69-1.69-1.69-1.69.76-1.69 1.69z"];

var seriesDerived$1 = ["M18.82 6.58c-.03.05-.07.09-.11.13 0 0 0-.01-.01-.01l-2 2c-.2.2-.4.3-.7.3-.6 0-1-.4-1-1 0-.3.1-.5.3-.7L16.6 6H11c-.6 0-1-.4-1-1s.4-1 1-1h5.6l-1.3-1.3c-.2-.2-.3-.4-.3-.7 0-.6.4-1 1-1 .3 0 .5.1.7.3l3 3c.2.2.3.4.3.7s-.1.5-.3.7l-.88.88zm-5.53 2.71c.3.62.8 1.12 1.42 1.42l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 2.29-2.3z"];

var seriesFiltered$1 = ["M12.14 10.45c.21.67.65 1.23 1.22 1.61l-1.65 1.65c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 01-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 1.14-1.14zM19.35 1a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V5.13L11.19 2.1a.642.642 0 01.45-1.1h7.71z"];

var seriesSearch$1 = ["M11.28 11.31l-.28.28-3.29-3.3C7.53 8.11 7.28 8 7 8s-.53.11-.71.29L2 12.59V4c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1H2v-1.59l5-5 3.29 3.29c.18.19.43.3.71.3s.53-.11.71-.29l2.09-2.09c-.17.02-.34.02-.51.02-.7 0-1.38-.12-2.01-.33zm-.93-6c0-1.62 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93-2.93-1.31-2.93-2.93zm6.47 2.43c.11-.17.21-.33.29-.51.01-.03.03-.06.04-.09.08-.18.16-.35.21-.54.06-.2.1-.38.14-.58.01-.05.01-.09.02-.14.03-.2.05-.39.05-.6 0-2.37-1.93-4.3-4.3-4.3-2.37.01-4.3 1.93-4.3 4.31s1.93 4.3 4.3 4.3c.21 0 .4-.02.6-.05.04 0 .09-.01.14-.02.2-.03.38-.08.57-.14.2-.06.37-.14.55-.21.03-.01.06-.03.09-.04.18-.09.34-.19.51-.29l2.87 2.87c.14.14.33.22.56.22.43 0 .78-.35.78-.78a.938.938 0 00-.23-.56l-2.89-2.85z"];

var settings$1 = ["M4 1c0-.55-.45-1-1-1S2 .45 2 1v5h2V1zM2 19c0 .55.45 1 1 1s1-.45 1-1v-6H2v6zm9-18c0-.55-.45-1-1-1S9 .45 9 1v8h2V1zm7 0c0-.55-.45-1-1-1s-1 .45-1 1v3h2V1zM9 19c0 .55.45 1 1 1s1-.45 1-1v-3H9v3zm9-14h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-2 14c0 .55.45 1 1 1s1-.45 1-1v-8h-2v8zM4 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm7 3H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"];

var shapes$1 = ["M7.88 11.12a.958.958 0 011.277.33l3.719 6.207c.081.136.124.29.124.447 0 .495-.419.896-.936.896H4.936a.969.969 0 01-.436-.103.878.878 0 01-.392-1.21l3.409-6.208a.915.915 0 01.362-.36zM15 5a4 4 0 110 8 4 4 0 010-8zM8 1a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h6z"];

var share$1 = ["M15 18H2V5h8.76l2-2H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V7.24l-2 2V18zm4-18h-7c-.55 0-1 .45-1 1s.45 1 1 1h4.59l-7.3 7.29a1.003 1.003 0 001.42 1.42L18 3.41V8c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z"];

var sharedFilter$1 = ["M13.917 17.209c1.01.454 2.543.928 2.873 1.643.31.722.186 1.148.186 1.148H6.026s-.13-.426.186-1.148 1.842-1.203 2.86-1.65c1.017-.447.914-.722.948-1.093 0-.048.007-.097.007-.145a3.067 3.067 0 01-.839-1.237l-.007-.007c0-.007-.006-.014-.006-.02a1.757 1.757 0 01-.11-.337c-.234-.042-.372-.296-.426-.537a1.045 1.045 0 01-.138-.598c.034-.35.179-.509.337-.57v-.056c0-.44.034-1.065.117-1.478a2.508 2.508 0 01.962-1.623c.426-.33 1.038-.501 1.58-.501.544 0 1.155.172 1.588.502a2.496 2.496 0 01.963 1.622c.075.413.117 1.045.117 1.478v.062c.15.062.288.22.323.564.02.268-.083.502-.138.598-.048.234-.185.488-.42.537a2.635 2.635 0 01-.116.364 3.094 3.094 0 01-.818 1.224c0 .055 0 .11.007.158.034.378-.103.653.914 1.1z", "M14.976 16.57c-.24-.099-.455-.186-.65-.273l-.007-.004a3.801 3.801 0 01-.194-.091c.224-.288.41-.609.554-.946l.001-.002.013-.033c.018-.043.036-.087.052-.13l.011-.027.016-.04c.105-.092.19-.19.256-.284.129-.184.213-.38.265-.563.105-.226.225-.592.192-1.026l-.001-.011-.002-.011a1.854 1.854 0 00-.325-.91 9.924 9.924 0 00-.12-1.246 3.09 3.09 0 00-.106-.475l-.001-.006a3.543 3.543 0 00-.763-1.353c.27-.092.56-.139.83-.139.495 0 1.05.156 1.444.456a2.269 2.269 0 01.875 1.475c.069.375.106.95.106 1.344v.056c.138.056.263.2.294.513.019.244-.075.456-.125.543-.044.213-.169.444-.381.488-.025.1-.056.206-.094.3a2.815 2.815 0 01-.756 1.144c0 .05 0 .1.006.144.004.043.006.086.007.127.01.283.018.518.824.872.192.087.404.173.623.263.83.34 1.752.717 1.99 1.231.28.657.168 1.044.168 1.044h-2.081a3.864 3.864 0 00-.188-.542l-.005-.013-.006-.012c-.183-.397-.491-.681-.76-.88a5.614 5.614 0 00-.896-.522 17.36 17.36 0 00-.916-.4l-.15-.061zM14 1c.55 0 1 .45 1 1 0 .28-.11.53-.29.7L10 7.41v.897a3.182 3.182 0 00-.69.4 3.508 3.508 0 00-1.343 2.259c-.07.37-.107.836-.122 1.237a1.836 1.836 0 00-.339.926c-.046.458.09.84.195 1.06.053.178.138.376.27.56.055.08.125.162.21.242v.143l.053.052L6.71 16.71A1.003 1.003 0 015 16V7.41L.29 2.71A1.003 1.003 0 011 1h13z", "M9.059 14.361c-.23-.044-.366-.296-.42-.535a1.045 1.045 0 01-.138-.598c.034-.35.179-.509.337-.57v-.056c0-.44.034-1.065.117-1.478A2.508 2.508 0 0110 9.441V13c0 .28-.11.53-.29.71l-.651.651z"];

var shield$1 = ["M10 20c6-3.81 9-9.048 9-15.714-2 0-5-1.429-9-4.286-4 2.857-7 4.286-9 4.286C1 10.952 4 16.19 10 20zm0-17.348c2.577 1.734 4.776 2.88 6.667 3.419-.44 4.627-2.636 8.353-6.667 11.297V2.652z"];

var ship$1 = ["M6.84.804L6.5 2.5h-3a1 1 0 00-1 1v4.893l-1.58.451a.99.99 0 00-.691 1.192c.46 1.82 1.163 4.356 1.701 5.571-.218.012-.445.018-.68.018a.625.625 0 100 1.25c2.583 0 4.268-.68 5.202-1.146.687.466 1.88 1.146 3.548 1.146 1.65 0 2.837-.666 3.528-1.132l.005.003c.244.131.6.3 1.07.468.938.335 2.321.661 4.147.661a.625.625 0 100-1.25c-.323 0-.63-.011-.922-.031a.996.996 0 00.184-.334l1.67-5.168a1 1 0 00-.677-1.27l-1.505-.43V3.5a1 1 0 00-1-1h-3L13.16.804A1 1 0 0012.18 0H7.82a1 1 0 00-.98.804zM5 7.679l3.75-1.072V5H5v2.679zm6.25-1.072L15 7.68V5h-3.75v1.607zM6.205 16.95a.625.625 0 01.658.042c.569.407 1.597 1.134 3.137 1.134s2.568-.727 3.137-1.134a.625.625 0 01.724-.001l.007.005.045.029c.044.027.114.069.21.12.194.104.493.247.9.392.811.29 2.053.589 3.727.589a.625.625 0 110 1.25c-1.826 0-3.21-.326-4.148-.661a7.894 7.894 0 01-1.069-.468l-.005-.003c-.691.466-1.878 1.132-3.528 1.132-1.667 0-2.861-.68-3.548-1.146-.934.467-2.619 1.146-5.202 1.146a.625.625 0 110-1.25c2.66 0 4.23-.787 4.955-1.176z"];

var shop$1 = ["M17.94 3.63c-.01-.02-.01-.03-.02-.04l-.03-.09h-.01c-.18-.3-.49-.5-.86-.5h-14c-.42 0-.77.25-.92.61L0 8.5h.02a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0l-2.08-4.87zM3.02 2h14c.55 0 1-.45 1-1s-.45-1-1-1h-14c-.55 0-1 .45-1 1s.44 1 1 1zm13 14h-12v-4h-2v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h-2v4z"];

var shoppingCart$1 = ["M18 14H8.72l-.67-2H17c.44 0 .8-.29.94-.69h.01l2-6h-.01c.03-.1.06-.2.06-.31 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 2.29 4.44 2 4 2H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l3.33 10H5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 6h11.56l-1.33 4H7.39L6.05 6z"];

var signalSearch$1 = ["M7.15 10.33c.888.8 1.999 1.36 3.228 1.574l2.326 6.98a.846.846 0 01-.535 1.07.844.844 0 01-1.072-.535l-1.225-3.671H7.125L5.9 19.419a.85.85 0 01-1.072.536.85.85 0 01-.536-1.071l2.857-8.555zm1.353 1.305l-.808 2.413h1.607l-.8-2.413zM5 5.5c0 .76.13 1.49.37 2.17-.496 1.056-.313 2.356.704 3.29.385.353.404.94.038 1.311a.982.982 0 01-1.356.038c-2.183-2.01-2-5.125.01-6.94a.95.95 0 01.24-.156A6.421 6.421 0 005 5.5z", "M3.874 13.185c-1.346-.918-2.187-2.67-2.187-4.34 0-1.752.757-3.254 2.187-4.339.42-.25.42-.834.168-1.168-.252-.418-.84-.418-1.177-.167C1.014 4.59-.08 6.509.005 8.846c.084 2.253 1.177 4.423 2.86 5.675.168.083.336.166.504.166.253 0 .505-.083.673-.333.337-.418.253-.918-.168-1.169zM12.246 12.309a.98.98 0 01-1.354-.037.917.917 0 01-.206-.324 6.54 6.54 0 001.959-.049 5.125 5.125 0 01-.399.41zM14.631 11.476l1.228 1.229a6.6 6.6 0 01-1.723 1.816c-.169.083-.337.166-.505.166-.253 0-.505-.083-.673-.333-.337-.418-.253-.918.168-1.169.62-.422 1.133-1.022 1.505-1.709z", "M11.5 0C14.54 0 17 2.46 17 5.5c0 .26-.02.51-.06.75l-.03.17c-.04.25-.1.49-.17.73v.01c-.08.24-.17.47-.28.69-.01.04-.03.07-.05.11-.11.23-.24.44-.38.65l3.68 3.68A1.003 1.003 0 0119 14c-.28 0-.53-.11-.7-.29l-3.68-3.68c-.21.14-.42.27-.65.38-.04.01-.07.03-.11.05-.22.11-.45.2-.69.28h-.01c-.24.07-.48.13-.73.17l-.17.03c-.25.04-.5.06-.76.06C8.46 11 6 8.54 6 5.5S8.46 0 11.5 0zm0 1.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"];

var simCard$1 = ["M16.71 5.29l-5-5A.997.997 0 0011 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.28-.11-.53-.29-.71zM9 7h2v3H9V7zM6 7h2v3H6V7zm2 11H6v-3h2v3zm3 0H9v-3h2v3zm3 0h-2v-3h2v3zm0-4H6v-3h8v3zm0-4h-2V7h2v3z"];

var slash$1 = ["M12 2c-.46 0-.85.32-.97.74L7.04 16.7c-.02.1-.04.2-.04.3 0 .55.45 1 1 1 .46 0 .85-.32.97-.74L12.96 3.3c.02-.1.04-.2.04-.3 0-.55-.45-1-1-1z"];

var smallCross$1 = ["M11.41 10l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L11.41 10z"];

var smallInfoSign$1 = ["M17 10a7 7 0 11-14 0 7 7 0 0114 0zm-6-5v2H9V5h2zm0 3v6h1v1H8v-1h1V9H8V8h3z"];

var smallMinus$1 = ["M14 9H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z"];

var smallPlus$1 = ["M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z"];

var smallSquare$1 = ["M5 5v10h10V5H5zM4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z"];

var smallTick$1 = ["M15 5c-.28 0-.53.11-.71.29L8 11.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7A1.003 1.003 0 0015 5z"];

var snowflake$1 = ["M11 11.776v2.81l2.31 2.242a.987.987 0 010 1.415c-.399.39-1.044.39-1.442 0L11 17.414V19a.99.99 0 01-.996 1A.996.996 0 019 19v-1.636l-.912.879c-.398.39-1.043.39-1.441 0a.987.987 0 010-1.415L9 14.536v-2.79l-2.548 1.435-.837 3.063c-.146.534-.705.85-1.248.707a.998.998 0 01-.721-1.224l.309-1.132-1.4.793a1.03 1.03 0 01-1.393-.366.99.99 0 01.373-1.366l1.445-.818-1.224-.322a.998.998 0 01-.72-1.225c.145-.533.704-.85 1.248-.707l3.193.84 2.462-1.395-2.532-1.434-3.123.82a1.022 1.022 0 01-1.249-.706.998.998 0 01.721-1.225L2.91 7.18l-1.4-.793a.99.99 0 01-.373-1.366 1.03 1.03 0 011.392-.366l1.445.818-.328-1.2a.998.998 0 01.72-1.225 1.022 1.022 0 011.25.707l.855 3.132L9 8.311V5.414L6.647 3.121a.987.987 0 010-1.414 1.033 1.033 0 011.441 0L9 2.586V1c0-.552.44-1 1.004-1A.99.99 0 0111 1l-.007 1.536.875-.829a1.033 1.033 0 011.441 0 .987.987 0 010 1.414L11 5.364v2.918l2.53-1.42.855-3.131c.146-.534.705-.85 1.249-.707a.998.998 0 01.72 1.224l-.327 1.2 1.4-.792a1.03 1.03 0 011.392.366.99.99 0 01-.373 1.366l-1.355.768 1.153.303a.998.998 0 01.721 1.225c-.146.533-.705.85-1.249.707l-3.123-.821-2.576 1.459 2.506 1.42 3.193-.84a1.022 1.022 0 011.249.707.998.998 0 01-.72 1.225l-1.224.322 1.4.793a.99.99 0 01.373 1.366 1.03 1.03 0 01-1.393.366l-1.356-.768.31 1.132a.998.998 0 01-.721 1.224 1.022 1.022 0 01-1.249-.707l-.837-3.063L11 11.776z"];

var socialMedia$1 = ["M11.5 5c.8 0 1.6-.4 2-1 2 1.2 3.3 3.3 3.5 5.7 0 .5.5.9 1 .9.6 0 1-.5 1-1v-.1c-.2-3.3-2.2-6.2-5.1-7.6C13.7.8 12.7 0 11.5 0 10.1 0 9 1.1 9 2.5S10.1 5 11.5 5zm5 7c-1.4 0-2.5 1.1-2.5 2.5 0 .4.1.7.2 1.1-1.1.9-2.6 1.4-4.2 1.4-1.9 0-3.6-.8-4.9-2-.2-.2-.5-.4-.8-.4-.5 0-1 .5-1 1 0 .3.1.5.3.7C5.3 18 7.5 19 10 19c2.2 0 4.2-.8 5.8-2.1.2.1.5.1.7.1 1.4 0 2.5-1.1 2.5-2.5S17.9 12 16.5 12zM5 10.5c0-1.1-.7-2.1-1.7-2.4.5-1.9 1.9-3.5 3.6-4.4.3-.2.6-.5.6-.9 0-.5-.4-1-1-1-.2 0-.4.1-.6.2-2.4 1.2-4.2 3.6-4.7 6.4C.5 8.9 0 9.6 0 10.5 0 11.9 1.1 13 2.5 13S5 11.9 5 10.5z"];

var sort$1 = ["M19 16h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 15c-.28 0-.53.11-.71.29L5 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 15.3A.965.965 0 001 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 15zM19 1h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"];

var sortAlphabetical$1 = ["M8 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 008 15zm8.89-.79v-1.22H11.3v1.3h3.51L11 18.78V20h5.99v-1.3h-3.91l3.81-4.49zM14.97 0h-1.95L9.01 11.01h1.89l.98-2.92h4.17l.98 2.92h1.96L14.97 0zm-2.59 6.63l1.58-4.74H14l1.57 4.74h-3.19z"];

var sortAlphabeticalDesc$1 = ["M8.01 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3a1.014 1.014 0 001.42 0l3-3c.18-.18.29-.43.29-.71.01-.55-.44-1-.99-1zm4.44-5.65l6.4-7.88V0H10.5v1.67h5.91L10 9.44v1.57h9V9.35h-6.55zm1.27 3.64L11 20h1.59l.56-1.56h2.68l.55 1.56h1.64l-2.68-7.01h-1.62zm-.16 4.3l.93-2.57h.02l.9 2.57h-1.85z"];

var sortAsc$1 = ["M10 8h5c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0 5h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0-10h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm9 12h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 14c-.28 0-.53.11-.71.29L5 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 14.3A.965.965 0 001 14a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 14z"];

var sortDesc$1 = ["M13 15h-3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm-6-1c-.28 0-.53.11-.71.29L5 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 14.3A.965.965 0 001 14a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 007 14zM19 0h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 10h-5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"];

var sortNumerical$1 = ["M9 14.99c-.28 0-.53.11-.71.29L7 16.58v-5.59c0-.55-.45-1-1-1s-1 .45-1 1v5.59l-1.29-1.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3c.18-.18.29-.43.29-.71a.99.99 0 00-1-1zm8.88.23c-.08-.42-.22-.79-.42-1.12-.2-.33-.47-.6-.8-.8-.33-.2-.76-.3-1.28-.3a2.333 2.333 0 00-1.72.71c-.21.22-.37.48-.49.78-.11.3-.17.62-.17.97 0 .27.04.54.13.8.08.26.22.5.4.7.19.21.43.38.71.5a2.142 2.142 0 001.72.02c.25-.12.47-.31.66-.58l.02.02c-.01.19-.04.4-.08.63-.04.24-.11.46-.21.67-.1.21-.23.38-.39.53a.92.92 0 01-.62.22c-.24 0-.44-.08-.6-.25-.16-.17-.27-.36-.31-.59h-1.31c.04.29.12.56.24.79.12.23.28.43.48.59.19.16.42.28.67.36.25.08.52.12.82.12.49 0 .9-.1 1.23-.31.34-.21.61-.48.82-.82.21-.34.37-.71.47-1.13.1-.42.15-.83.15-1.25 0-.43-.04-.85-.12-1.26zm-1.42.63c-.05.15-.11.28-.2.4-.09.12-.2.21-.34.27s-.3.1-.49.1c-.17 0-.33-.04-.46-.11s-.24-.17-.33-.29c-.08-.12-.15-.25-.19-.4-.04-.15-.06-.31-.06-.47 0-.15.02-.3.07-.45.05-.15.11-.28.2-.39.09-.12.2-.21.33-.28.13-.07.27-.11.44-.11.17 0 .33.04.47.11.14.07.25.17.34.28a1.387 1.387 0 01.28.86c.01.17-.02.33-.06.48zM15.32 11H17V0h-1.25c-.05.34-.17.62-.34.85-.17.23-.39.42-.63.57-.25.15-.52.25-.83.31-.3.06-.62.09-.94.09v1.41h2.31V11z"];

var sortNumericalDesc$1 = ["M9 15c-.28 0-.53.11-.71.29L7 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L3.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3A1.003 1.003 0 009 15zm6.7-1.33a1.5 1.5 0 01-.44.43c-.17.11-.37.19-.58.23-.22.04-.44.06-.67.05v1.07h1.66V20H17v-6.99h-1.06c-.04.26-.12.48-.24.66zm3.15-10.3c-.11-.68-.29-1.26-.55-1.76-.26-.5-.62-.89-1.08-1.18C16.75.14 16.17 0 15.46 0c-.54 0-1.03.09-1.46.27-.43.18-.79.44-1.09.76-.3.33-.52.71-.67 1.15-.16.44-.24.92-.24 1.43 0 .54.08 1.04.23 1.47.15.44.37.81.65 1.12.28.31.61.55 1 .72.39.17.82.26 1.3.26.46 0 .88-.11 1.26-.33.38-.22.68-.53.9-.94l.03.03c-.03.35-.07.74-.12 1.16-.05.42-.15.81-.29 1.18-.14.37-.35.68-.61.92-.26.25-.62.37-1.06.37-.43 0-.77-.13-1.03-.4-.25-.27-.4-.62-.44-1.05h-1.64c.02.43.11.83.29 1.18.17.35.39.66.67.91a3.027 3.027 0 002.07.8c.71 0 1.3-.17 1.79-.5.48-.33.87-.76 1.17-1.29.3-.53.51-1.12.64-1.76.13-.64.19-1.28.19-1.92.01-.77-.05-1.49-.15-2.17zM17.1 4.44c-.08.27-.19.5-.34.71-.15.21-.34.37-.57.49-.23.12-.5.18-.8.18-.3 0-.56-.06-.78-.19-.22-.13-.4-.29-.55-.49-.14-.2-.25-.44-.32-.7-.07-.27-.11-.55-.11-.84 0-.28.04-.55.11-.82.07-.26.18-.49.32-.7.14-.2.33-.36.55-.48.22-.12.48-.17.78-.17.31 0 .57.06.8.18.23.12.42.28.57.48.15.2.26.43.34.69.08.26.11.53.11.82 0 .29-.04.57-.11.84z"];

var splitColumns$1 = ["M15 13a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 9H11V2h5v2c.77 0 1.47.3 2 .78V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.78C2.53 4.3 3.23 4 4 4V2h5v7H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 11H9v7H4v-2c-.77 0-1.47-.3-2-.78V19c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.78c-.53.48-1.23.78-2 .78v2h-5v-7h5.59l-1.29 1.29c-.19.18-.3.43-.3.71z"];

var square$1 = ["M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V2h16v16z"];

var stackedChart$1 = ["M12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm3 14h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zm3-10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V6zm-6 1H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm16 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h4V9zm3 7h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1z"];

var stadiumGeometry$1 = ["M15 7H5a3 3 0 000 6h10a3 3 0 100-6zM5 5a5 5 0 000 10h10a5 5 0 000-10H5z"];

var star$1 = ["M10 0l3.1 6.6 6.9 1-5 5.1 1.2 7.3-6.2-3.4L3.8 20 5 12.7 0 7.6l6.9-1z"];

var starEmpty$1 = ["M20 7.6l-6.9-1.1L10 0 6.9 6.6 0 7.6l5 5.1L3.8 20l6.2-3.4 6.2 3.4-1.2-7.2 5-5.2zM10 15l-4.5 2.4.9-5.2-3.6-3.6 5-.8L10 3.1l2.2 4.7 5 .8-3.6 3.7.9 5.2L10 15z"];

var stepBackward$1 = ["M15 3c-.23 0-.42.09-.59.21l-.01-.01L8 8V4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4l6.4 4.8.01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var stepChart$1 = ["M19 16H2v-3h4c.55 0 1-.45 1-1V8h3v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v4h-3V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var stepForward$1 = ["M15 3h-2c-.55 0-1 .45-1 1v4L5.6 3.2l-.01.01C5.42 3.09 5.23 3 5 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01L12 12v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var stop$1 = ["M16 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var stopwatch$1 = ["M10 6a6 6 0 106 6h-6V6zm-.998-1.938A1.015 1.015 0 019 4V2H7a1 1 0 110-2h6a1 1 0 010 2h-2v2c0 .02 0 .041-.002.062A8.001 8.001 0 0110 20a8 8 0 01-.998-15.938z"];

var strikethrough$1 = ["M18 9h-4.46a4.7 4.7 0 00-.4-.14c-.19-.05-.51-.14-.96-.25-.45-.11-.9-.23-1.37-.35-.47-.12-.89-.23-1.27-.33s-.6-.16-.65-.17c-.53-.15-.95-.37-1.27-.66-.32-.28-.49-.68-.49-1.19 0-.36.09-.66.26-.9s.39-.43.65-.57c.26-.14.55-.24.87-.3s.63-.09.93-.09c.89 0 1.63.19 2.21.57.45.3.75.76.89 1.38h2.63c-.06-.52-.2-.98-.42-1.4-.3-.57-.71-1.05-1.23-1.43a5.33 5.33 0 00-1.79-.87c-.7-.2-1.42-.3-2.19-.3-.66 0-1.31.08-1.96.25s-1.22.43-1.73.77-.92.79-1.23 1.32c-.31.52-.46 1.15-.46 1.87 0 .37.05.74.15 1.1.1.36.28.7.53 1.02.18.24.41.47.69.67H2c-.55 0-1 .45-1 1s.45 1 1 1h10.14c.02.01.05.02.07.02.3.11.58.29.84.55.25.26.38.67.38 1.21 0 .27-.06.53-.17.79-.11.26-.29.49-.54.69-.25.2-.57.36-.97.49s-.88.19-1.44.19c-.52 0-1.01-.06-1.45-.17-.45-.11-.84-.29-1.19-.54s-.61-.56-.8-.95c-.05-.08-.09-.18-.12-.28H4.11c.09.43.22.82.4 1.18.33.65.77 1.18 1.32 1.59.55.41 1.2.72 1.94.92.74.2 1.53.3 2.37.3.73 0 1.44-.08 2.14-.25.7-.17 1.33-.43 1.88-.79.55-.36.99-.83 1.33-1.39.34-.56.51-1.25.51-2.05 0-.37-.06-.75-.18-1.12a3.12 3.12 0 00-.15-.39H18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var style$1 = ["M18 18H2V2h12.3l2-2H1C.4 0 0 .4 0 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.7l-2 2V18zm1.2-18l-7.6 7.6 2.8 2.8L20 4.8V0h-.8zM4 15.9c3.1.2 5.9.2 8.2-2 1.1-1.1 1.1-3 0-4.1-.6-.5-1.3-.8-2-.8s-1.4.3-1.9.8C7.2 11 6.6 14.3 4 15.9z"];

var swapHorizontal$1 = ["M16.02 10c-.01 0-.01 0 0 0H16h.02zM2 6h13.58l-2.29 2.29a1 1 0 00-.3.71 1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 00-1.42 1.42L15.58 4H2c-.55 0-1 .45-1 1s.45 1 1 1zm2 4h-.02H4zm14 4H4.42l2.29-2.29a1 1 0 00.3-.71 1.003 1.003 0 00-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L4.42 16H18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var swapVertical$1 = ["M9.71 5.3l-4-4A.997.997 0 005 1.01c-.28 0-.53.11-.71.29l-4 4a1.003 1.003 0 001.42 1.42L4 4.42V18c0 .55.45 1 1 1s1-.45 1-1V4.42l2.29 2.29a1 1 0 00.71.3 1.003 1.003 0 00.71-1.71zM10 3.98c0 .01 0 .01 0 0V4v-.02zm0 12.04c0-.01 0-.01 0 0V16v.02zm9-3.03c-.28 0-.53.11-.71.29L16 15.58V2c0-.55-.45-1-1-1s-1 .45-1 1v13.58l-2.29-2.29a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4c.18-.18.29-.43.29-.71 0-.56-.45-1.01-1-1.01z"];

var _switch$1 = ["M12.293 2.293l1.414 1.414-7.127 7.129a3.5 3.5 0 11-1.415-1.415l7.128-7.128zM16.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-13 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"];

var symbolCircle$1 = ["M10 4.01a6 6 0 100 12 6 6 0 100-12z"];

var symbolCross$1 = ["M15 8.01h-3v-3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h3c.55 0 1-.45 1-1v-2c0-.56-.45-1-1-1z"];

var symbolDiamond$1 = ["M15 10.01c0-.21-.08-.39-.18-.54l.02-.01-4-6-.02.01c-.18-.28-.47-.46-.82-.46s-.64.18-.82.45l-.01-.01-4 6 .02.01c-.11.16-.19.34-.19.55s.08.39.18.54l-.02.01 4 6 .02-.01c.18.27.47.46.82.46s.64-.19.82-.46l.02.01 4-6-.02-.01c.1-.16.18-.34.18-.54z"];

var symbolRectangle$1 = ["M16 5H4c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h12c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1z"];

var symbolSquare$1 = ["M15 4.01H5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10c0-.56-.45-1-1-1z"];

var symbolTriangleDown$1 = ["M16 5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .16.05.31.11.44H4.1l5 10h.01c.17.33.5.56.89.56s.72-.23.89-.56h.01l5-10h-.01c.06-.13.11-.28.11-.44z"];

var symbolTriangleUp$1 = ["M15.89 14.56l-4.99-10h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56H9.1l-5 10h.01c-.06.13-.11.28-.11.44 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44z"];

var syringe$1 = ["M15.146.854a.5.5 0 01.708-.708l4 4a.5.5 0 01-.708.708l-.646-.647L17.207 5.5l1.647 1.646a.5.5 0 01-.708.708l-.646-.647-1.146 1.146-7.5 7.5a.5.5 0 01-.708 0l-.646-.646-2.646 2.647a.5.5 0 01-.708 0l-.646-.647-2.646 2.647a.5.5 0 01-.708-.708L2.793 16.5l-.647-.646a.5.5 0 010-.708L4.793 12.5l-.647-.646a.5.5 0 010-.708l7.5-7.5L12.794 2.5l-.647-.646a.5.5 0 01.708-.708L14.5 2.793 15.793 1.5l-.647-.646zM12.707 4l.793-.793L16.793 6.5 16 7.293 12.707 4zm2.586 4l-.793.793-1.646-1.647a.5.5 0 00-.708.708L13.793 9.5 12.5 10.793l-1.646-1.647a.5.5 0 00-.708.708l1.647 1.646-1.293 1.293-1.646-1.647a.5.5 0 00-.708.708L9.793 13.5 8.5 14.793 5.207 11.5 12 4.707 15.293 8zM3.207 15.5L5.5 13.207 6.793 14.5 4.5 16.793 3.207 15.5zM16.5 2.207L17.793 3.5 16.5 4.793 15.207 3.5 16.5 2.207z"];

var tag$1 = ["M2 4a2 2 0 012-2h4.588a2 2 0 011.414.586l7.41 7.41a2 2 0 010 2.828l-4.588 4.588a2 2 0 01-2.829 0l-7.41-7.41A2 2 0 012 8.588V4zm3.489-.006a1.495 1.495 0 100 2.99 1.495 1.495 0 000-2.99z"];

var takeAction$1 = ["M5 7c.28 0 .53-.11.71-.29l5-5A1.003 1.003 0 009.29.29l-5 5A1.003 1.003 0 005 7zm6 6a1.003 1.003 0 001.71.71l5-5a1.003 1.003 0 00-1.42-1.42l-5 5c-.18.18-.29.43-.29.71zm8 5h-1c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-9-6l6-6-1.29-1.29a1.003 1.003 0 00-1.42-1.42L12 2 6 8l1.29 1.29-7 7a1.003 1.003 0 001.42 1.42l7-7L10 12z"];

var tank$1 = ["M3.956 4.47A1 1 0 014.804 4h6.392a1 1 0 01.848.47L13 6h5a1 1 0 010 2h-5v1h4a3 3 0 110 6H3a3 3 0 010-6V6.287a1 1 0 01.152-.53l.804-1.287zM3 11h14a1 1 0 110 2H3a1 1 0 110-2z"];

var target$1 = ["M9 5a1 1 0 012 0v3a1 1 0 01-2 0V5zM12 9a1 1 0 000 2h3a1 1 0 000-2h-3zM4 10a1 1 0 011-1h3a1 1 0 010 2H5a1 1 0 01-1-1zM10 11a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z", "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"];

var taxi$1 = ["M19 9h-.33l.33 1v.5c0 .15-.03.3-.07.44h.01L17 17.23v.27c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V17H6v.5c0 .83-.67 1.5-1.5 1.5S3 18.33 3 17.5v-.27l-1.93-6.28h.01c-.05-.15-.08-.3-.08-.45V10s.02-.06.05-.16c.06-.17.16-.47.28-.84H1c-.55 0-1-.45-1-1s.45-1 1-1h1l1-3h-.01v-.01c.25-.64 1-1.31 1.67-1.5 0 0 .78-.21 2.33-.36V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.13c1.55.14 2.33.36 2.33.36.67.19 1.42.86 1.67 1.5V4H17l1 3h1c.55 0 1 .45 1 1s-.45 1-1 1zM3 11.5c0 .83.67 1.5 1.5 1.5S6 12.33 6 11.5 5.33 10 4.5 10 3 10.67 3 11.5zM16 7l-1-3H5L4 7v1h12V7zm-.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"];

var temperature$1 = ["M11 0a2 2 0 00-2 2v10.535a4 4 0 104 0V2a2 2 0 00-2-2zM3 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM3.5 8a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 5.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm.5 5.5a.5.5 0 000 1h2a.5.5 0 000-1h-2z"];

var textHighlight$1 = ["M16 17c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1-.45 1-1-.45-1-1-1c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78-.55 0-1 .45-1 1s.45 1 1 1 1 .45 1 1v12c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1c.77 0 1.47-.3 2-.78.53.48 1.23.78 2 .78.55 0 1-.45 1-1s-.45-1-1-1zm-4-4H2V7h10V5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h11v-2zm7-8h-3v2h2v6h-2v2h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"];

var th$1 = ["M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zM7 17H2v-3h5v3zm0-4H2v-3h5v3zm0-4H2V6h5v3zm11 8H8v-3h10v3zm0-4H8v-3h10v3zm0-4H8V6h10v3z"];

var thDerived$1 = ["M5.3 13.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-3-3C6.5 7.1 6.3 7 6 7c-.6 0-1 .4-1 1 0 .3.1.5.3.7L6.6 10H1c-.6 0-1 .4-1 1s.4 1 1 1h5.6l-1.3 1.3zM19 1H3c-.5 0-1 .5-1 1v6h1c0-1.7 1.3-3 3-3 .8 0 1.6.3 2.1.9l.1.1H9v.8l1 1V6h8v3h-6.8c.3.3.5.6.6 1H18v3h-6.8l-.1.1-.9.9H18v3h-8v-2.8l-1 1V17H4v-.8c-.6-.5-1-1.3-1-2.2H2v4c0 .5.5 1 1 1h16c.6 0 1-.5 1-1V2c0-.5-.5-1-1-1z"];

var thDisconnect$1 = ["M14.25 1H19c.5 0 1 .5 1 1v16c0 .5-.5 1-1 1h-7.221l.278-2H18v-3h-5.527l.14-1H18v-3h-4.971l.139-1H18V6h-4.416l.637-4.587c.02-.139.03-.277.03-.413zM8.221 1l-.694 5H2v3h5.11l-.139 1H2v3h4.555l-.14 1H2v3h3.999l-.22 1.587c-.02.139-.03.277-.03.413H1c-.6 0-1-.5-1-1V2c0-.5.4-1 1-1h7.221zM10.26.862a1 1 0 011.98.276l-2.5 18a1 1 0 01-1.98-.276l2.5-18z"];

var thFiltered$1 = ["M17.333 10l1.435-1.722a1 1 0 00.232-.64V4.85l1-.9V18c0 .5-.5 1-1 1H1c-.6 0-1-.5-1-1V2c0-.5.4-1 1-1h6.722L12 4.85V6H8v3h4v1H8v3h10v-3h-.667zM7 17v-3H2v3h5zm0-4v-3H2v3h5zm0-4V6H2v3h5zm11 8v-3H8v3h10z", "M19.35 0a.642.642 0 01.46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V4.13L11.19 1.1a.642.642 0 01.45-1.1h7.71z"];

var thList$1 = ["M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm-1 16H2v-3h16v3zm0-4H2v-3h16v3zm0-4H2V6h16v3z"];

var thirdParty$1 = ["M8 0C3.58 0 0 3.58 0 8a8 8 0 005.856 7.71c.064-.057.129-.109.19-.156.278-.209.595-.383.896-.53.358-.174.81-.358 1.193-.515.206-.084.393-.16.534-.223a3.93 3.93 0 00.203-.095 4.1 4.1 0 01-.305-.45C8.382 13.911 8.19 14 8 14c-.67 0-1.36-1.1-1.73-3h1.252c.047-.296.153-.571.323-.797l.01-.203H6.12C6.05 9.39 6 8.73 6 8s.05-1.39.12-2h3.76l.037.344c.315-.145.65-.242.979-.295L10.89 6h2.76c.027.077.052.155.076.233l.118-.04A3.62 3.62 0 0114.998 6c.247 0 .51.028.772.086A8 8 0 008 0zm5.17 5h-2.44c-.21-1.11-.51-2.03-.91-2.69 1.43.46 2.61 1.43 3.35 2.69zM8 2c.67 0 1.36 1.1 1.73 3H6.27C6.64 3.1 7.33 2 8 2zm-1.82.31c-.4.66-.71 1.58-.91 2.69H2.83a6.025 6.025 0 013.35-2.69zM2 8c0-.7.13-1.37.35-2h2.76C5.04 6.62 5 7.28 5 8s.04 1.38.11 2H2.35C2.13 9.37 2 8.7 2 8zm.83 3h2.44c.21 1.11.51 2.03.91 2.69A6.025 6.025 0 012.83 11z", "M13.917 15.209c.21.094.444.19.685.288.912.374 1.927.789 2.188 1.355.31.722.186 1.148.186 1.148H6.026s-.13-.426.186-1.148c.256-.584 1.305-1.011 2.234-1.39.22-.088.432-.175.626-.26.909-.4.923-.662.94-.978.002-.037.004-.076.008-.115l.003-.072c.002-.025.004-.049.004-.073a3.067 3.067 0 01-.839-1.237l-.007-.007a.024.024 0 00-.003-.01 1.757 1.757 0 01-.113-.347c-.234-.042-.372-.296-.427-.537a1.045 1.045 0 01-.137-.598c.034-.35.179-.509.337-.57v-.056c0-.44.034-1.065.117-1.478a2.508 2.508 0 01.962-1.623c.426-.33 1.038-.501 1.58-.501.544 0 1.155.172 1.588.502a2.496 2.496 0 01.963 1.622c.075.413.117 1.045.117 1.478v.062c.15.062.288.22.323.564.02.268-.083.502-.138.598-.048.234-.185.488-.42.537a2.635 2.635 0 01-.116.364 3.094 3.094 0 01-.818 1.224c0 .055 0 .11.007.158.004.048.006.095.007.14.011.311.02.57.907.96z", "M14.976 14.57c-.24-.098-.455-.186-.65-.274l-.007-.003a3.801 3.801 0 01-.194-.091c.224-.288.41-.609.554-.946l.001-.002.013-.033c.018-.043.036-.087.052-.13l.011-.027.016-.04c.105-.092.19-.19.256-.284.129-.184.213-.38.265-.563.105-.226.225-.592.192-1.026l-.001-.011-.002-.011a1.855 1.855 0 00-.325-.91 9.924 9.924 0 00-.12-1.246 3.088 3.088 0 00-.106-.474l-.001-.007a3.543 3.543 0 00-.763-1.353c.27-.092.56-.139.83-.139.495 0 1.05.156 1.444.456a2.269 2.269 0 01.875 1.475c.069.375.106.95.106 1.344v.056c.138.056.263.2.294.513.019.244-.075.456-.125.543-.044.213-.169.444-.381.488-.025.1-.056.206-.094.3a2.815 2.815 0 01-.756 1.144c0 .05 0 .1.006.144.004.043.006.086.007.127.01.283.018.518.824.873.192.086.404.172.623.262.83.34 1.752.717 1.99 1.231.28.657.168 1.044.168 1.044h-2.081a3.864 3.864 0 00-.188-.542l-.005-.013-.006-.012c-.183-.397-.491-.681-.76-.88a5.614 5.614 0 00-.896-.522 17.36 17.36 0 00-.916-.4l-.15-.061z"];

var thumbsDown$1 = ["M18.55 6.56c-.31-.01-.65-.03-1.02-.06.03 0 .06-.01.09-.01.88-.12 1.68-.63 1.76-1.37.08-.75-.58-1.25-1.46-1.33-.32-.03-.65-.05-.99-.08.59-.19 1.05-.54 1.09-1.2.05-.75-.99-1.32-1.87-1.41-.34-.03-.64-.05-.91-.07h-.11c-.28-.02-.54-.02-.77-.02-3.92-.08-7.29.6-9.36 1.93v7.72c2.67 1.66 5.95 4.61 5.26 7.08-.21.76.39 1.35 1.23 1.26 1.01-.11 1.71-1.18 1.75-2.28.05-1.29-.19-2.59-.62-3.74-.05-.32.01-.65.47-.68.61-.04 1.39-.08 1.99-.1.32 0 .64-.01.94-.03h.01c.52-.03 1-.07 1.42-.12.88-.11 1.69-.6 1.79-1.35.1-.75-.55-1.25-1.44-1.35-.07-.01-.13-.02-.2-.02.21-.02.42-.04.61-.06.88-.11 1.69-.6 1.79-1.35.09-.75-.56-1.31-1.45-1.36zM3 3H0v8h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var thumbsUp$1 = ["M3 9H0v8h3c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm16.99 3.09c-.1-.75-.91-1.24-1.79-1.35-.19-.02-.4-.05-.61-.06.07-.01.14-.01.2-.02.88-.1 1.53-.61 1.44-1.35-.1-.74-.91-1.24-1.79-1.35-.42-.05-.9-.09-1.42-.12h-.01l-.94-.03c-.6-.02-1.39-.05-1.99-.1-.45-.03-.51-.36-.47-.68.43-1.15.67-2.45.62-3.74-.04-1.11-.74-2.17-1.75-2.28-.84-.09-1.45.5-1.23 1.26.7 2.47-2.58 5.43-5.25 7.08v7.72c2.08 1.33 5.44 2.01 9.35 1.93.24 0 .49-.01.77-.02h.11c.27-.02.57-.04.91-.07.88-.08 1.92-.66 1.87-1.41-.04-.65-.5-1.01-1.09-1.2.34-.03.67-.05.99-.08.89-.08 1.55-.58 1.46-1.33-.08-.75-.88-1.25-1.76-1.37-.03 0-.06-.01-.09-.01.37-.02.71-.04 1.02-.06.91-.05 1.55-.61 1.45-1.36z"];

var tick$1 = ["M17 4c-.28 0-.53.11-.71.29L7 13.59 3.71 10.3A.965.965 0 003 10a1.003 1.003 0 00-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l10-10A1.003 1.003 0 0017 4z"];

var tickCircle$1 = ["M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10zm5-14c-.28 0-.53.11-.71.29L8 12.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l7-7A1.003 1.003 0 0015 6z"];

var time$2 = ["M11 9.59V4c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L11 9.59zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"];

var timelineAreaChart$1 = ["M19 16H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-13.41l-7.07 7.07-4.3-3.44-.01.01A.987.987 0 007 6c-.24 0-.46.1-.63.24l-.01-.01L3 9.03V15h16V2.59z"];

var timelineBarChart$1 = ["M19 17H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM9 16h2c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1zm6 0h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zM3 16h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z"];

var timelineEvents$1 = ["M5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm10 0c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm-9 9H4v2h2v-2zM17 3v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1h-1zM7 17H3v-4h4v4zm0-5H3V8h4v4zm5 5H8v-4h4v4zm0-5H8V8h4v4zm5 5h-4v-4h4v4zm0-5h-4V8h4v4zm-6 2H9v2h2v-2zm5-5h-2v2h2V9z"];

var timelineLineChart$1 = ["M19 16H2v-1.59l5-5 3.29 3.29c.18.19.43.3.71.3s.53-.11.71-.29l7-7a1.003 1.003 0 00-1.42-1.42L11 10.59l-3.29-3.3C7.53 7.11 7.28 7 7 7s-.53.11-.71.29L2 11.59V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var tint$1 = ["M9.86 2S3.98 9.18 3.98 12.17C3.99 15.4 6.78 18 9.96 18c3.18-.01 6.04-2.63 6.03-5.86C15.99 9.05 9.86 2 9.86 2z"];

var torch$1 = ["M6.97 19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h-6v2zm-3-15l3 4v8h6V8l3-4h-12zm5 5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V9zm6-9h-10c-.55 0-1 .45-1 1v2h12V1c0-.55-.45-1-1-1z"];

var tractor$1 = ["M4.5 11a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm11.499 1a4 4 0 110 8 4 4 0 010-8zm-11.5 1.571a1.928 1.928 0 100 3.857 1.928 1.928 0 000-3.857zM16 14.667a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zM5.999 0C7.46 0 8.527.668 9 2l.851 4.256c1.433.096 2.82.217 4.147.362V2h2L16 6.862c.962.13 1.886.275 2.767.435.779.141 1.232.614 1.232 1.284L20 13a4.995 4.995 0 00-4-1.997A5.001 5.001 0 0011.099 15h-1.12a5.499 5.499 0 00-5.478-4.994 5.482 5.482 0 00-3.377 1.157H.004v-1.18L0 7.327c-.002-.597.37-1.18.999-1.302V1a1 1 0 011-1h4zm1 2H3v4h.75c1.386.027 2.749.073 4.079.139L6.999 2z"];

var train$1 = ["M16 18h-2l2 2H4l.12-.12L6 18H4c-1.1 0-2-.9-2-2V2c0-1.1 3.58-2 8-2s8 .9 8 2v14c0 1.1-.9 2-2 2zM5.5 15c.83 0 1.5-.67 1.5-1.5S6.33 12 5.5 12 4 12.67 4 13.5 4.67 15 5.5 15zM9 3H4v6h5V3zm7 0h-5v6h5V3zm-1.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"];

var translate$1 = ["M19.89 18.56l-4.99-10h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56h-.01l-1.73 3.46-2.8-2.3 1.99-1.64C11.44 7.34 12 6.23 12 5V4h1c.55 0 1-.45 1-1s-.45-1-1-1H8V1c0-.55-.45-1-1-1S6 .45 6 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h9v1c0 .62-.28 1.18-.73 1.54L7 8.42 4.73 6.54C4.28 6.18 4 5.62 4 5H2c0 1.23.56 2.34 1.44 3.07l1.99 1.64-3.06 2.52.01.01c-.23.18-.38.45-.38.76 0 .55.45 1 1 1 .24 0 .45-.1.63-.24l.01.01L7 11l3.36 2.77.01-.01c.02.02.05.03.08.05.01 0 .01.01.02.02l-2.36 4.73h.01c-.07.13-.12.28-.12.44 0 .55.45 1 1 1 .39 0 .72-.23.89-.56h.01L11.12 17h5.76l1.22 2.45h.01c.17.32.5.55.89.55.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44zM12.12 15L14 11.24 15.88 15h-3.76z"];

var trash$1 = ["M17 1h-5c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H3c-.55 0-1 .45-1 1v1h16V2c0-.55-.45-1-1-1zm.5 3h-15c-.28 0-.5.22-.5.5s.22.5.5.5H3v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM7 16c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8z"];

var tree$1 = ["M11 15.542V20H9v-4.458L2 17l4.5-5.625L4 12l3.655-5.483L6 7l4-7 4 7-1.655-.483L16 12l-2.5-.625L18 17l-7-1.458z"];

var trendingDown$1 = ["M19 10c-.55 0-1 .45-1 1v1.37l-6.25-7.03-.01.01A.971.971 0 0011 5c-.23 0-.42.09-.59.21l-.01-.01-3.43 2.58-5.42-3.61-.01.01A.969.969 0 001 4c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01 6 4 .01-.02c.15.11.33.19.54.19.23 0 .42-.09.59-.21l.01.01 3.26-2.45L16.77 14H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"];

var trendingUp$1 = ["M19 4h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.77l-5.91 6.65L7.6 10.2l-.01.01C7.42 10.09 7.23 10 7 10c-.21 0-.39.08-.54.18l-.01-.02-6 4 .01.02c-.27.18-.46.47-.46.82 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 5.41-3.61 3.43 2.58.01-.01c.18.11.37.2.6.2.3 0 .56-.14.74-.34l.01.01L18 7.63V9c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z"];

var truck$1 = ["M16 0a1 1 0 011 1v11a1 1 0 011 1v3h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H17v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1H1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H2v-3a1 1 0 011-1V1a1 1 0 112 0v3a2 2 0 012-2h6a2 2 0 012 2V1a1 1 0 011-1zm-4 10H8a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-7 4H4a1 1 0 000 2h1a1 1 0 000-2zm11 0h-1a1 1 0 000 2h1a1 1 0 000-2zm-4.5 0a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 14zm0-1.5a.5.5 0 110 1h-3l-.09-.008a.5.5 0 01.09-.992zm0-1.5a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 11zM14 5H6v3h8V5z"];

var twoColumns$1 = ["M5 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm14.71 9.29l-3-3A1.003 1.003 0 0015 7v6a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM12 0H8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var unarchive$1 = ["M16.434 0a1 1 0 01.857.486L20 5v14a1 1 0 01-1 1H1a1 1 0 01-1-1V5L2.709.486A1 1 0 013.566 0h12.868zM10 8c-.28 0-.53.11-.71.29l-3 3-.084.096A1.003 1.003 0 007.71 12.71L9 11.41v4.58l.007.116c.058.496.482.884.993.884.55 0 1-.45 1-1v-4.58l1.29 1.29.081.073c.171.139.389.227.629.227a1.003 1.003 0 00.71-1.71l-3-3-.096-.084A1.002 1.002 0 0010 8zm6-6H4L2 5.002h16L16 2z"];

var underline$1 = ["M10 17c3.3 0 6-2.7 6-6V3.5c0-.8-.7-1.5-1.5-1.5S13 2.7 13 3.5V11c0 1.7-1.3 3-3 3s-3-1.3-3-3V3.5C7 2.7 6.3 2 5.5 2S4 2.7 4 3.5V11c0 3.3 2.7 6 6 6zM16.5 19h-13c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"];

var undo$1 = ["M5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9-9H3.41L5.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C.11 5.47 0 5.72 0 6c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L3.41 7H14c2.21 0 4 1.79 4 4s-1.79 4-4 4H9v2h5c3.31 0 6-2.69 6-6s-2.69-6-6-6z"];

var ungroupObjects$1 = ["M4.5 6C2.01 6 0 8.01 0 10.5S2.01 15 4.5 15 9 12.99 9 10.5 6.99 6 4.5 6zm11 0C13.01 6 11 8.01 11 10.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S17.99 6 15.5 6z"];

var unknownVehicle$1 = ["M13 11.988v-4H4v-1l1-3h6V2.003a35.867 35.867 0 00-1-.015c-3.593 0-5.332.488-5.332.488-.67.188-1.424.864-1.674 1.503l-.004.009H3l-1 3H1a1 1 0 100 2h.333l-.28.84-.053.16v7.5a1.5 1.5 0 103 0v-.5h12v.5a1.5 1.5 0 103 0v-4.5h-5a1 1 0 01-1-1zm-8.5 1a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19.83 2.782a2.392 2.392 0 00-.592-.853c-.276-.264-.64-.485-1.09-.663C17.695 1.09 17.132 1 16.457 1c-.523 0-.996.084-1.418.253a3.157 3.157 0 00-1.084.703c-.299.3-.532.656-.698 1.065-.166.41-.254.861-.264 1.353h2.096c0-.246.028-.476.085-.69.057-.214.145-.4.264-.56.119-.16.27-.287.456-.383.185-.095.406-.143.663-.143.38 0 .677.1.89.3.215.2.321.51.321.93.01.245-.035.45-.135.614-.1.164-.23.314-.392.45a8.598 8.598 0 01-.527.41 3.53 3.53 0 00-.542.485c-.171.187-.32.412-.45.676-.127.265-.206.592-.234.984v.614h1.924v-.519c.038-.273.13-.5.278-.683.147-.182.316-.343.506-.484a13.5 13.5 0 01.606-.424c.214-.14.408-.312.584-.512s.323-.442.442-.724.178-.642.178-1.079c0-.264-.059-.548-.178-.854zm-4.54 6.099v2.103h2.237V8.881H15.29z"];

var unlock$1 = ["M14 1c-2.21 0-4 1.79-4 4v4H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-2V5c0-1.1.9-2 2-2s2 .9 2 2v2c0 .55.45 1 1 1s1-.45 1-1V5c0-2.21-1.79-4-4-4z"];

var unpin$1 = ["M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-2.12 3.54 3.54-2.12 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.08-7.08z"];

var unresolve$1 = ["M11.47 12.46c.16-.36.29-.74.38-1.14 0-.02.01-.04.01-.06.09-.4.14-.82.14-1.26 0-.44-.05-.86-.14-1.27 0-.02-.01-.04-.01-.06-.09-.4-.22-.78-.38-1.14-.01-.02-.02-.03-.02-.05a5.94 5.94 0 00-.61-1.03c0-.01-.01-.01-.01-.02a6.308 6.308 0 00-2.1-1.77c-.19-.1-.39-.18-.59-.26-.03-.01-.06-.02-.1-.03-.17-.07-.34-.12-.52-.17-.05-.01-.1-.03-.15-.04a4.34 4.34 0 00-.52-.09c-.05-.01-.11-.02-.17-.03C6.46 4.02 6.23 4 6 4c-3.31 0-6 2.69-6 6s2.69 6 6 6c.23 0 .46-.02.68-.04l.17-.03c.17-.02.34-.06.51-.09.05-.01.1-.03.15-.04.18-.05.36-.1.53-.17l.09-.03a5.973 5.973 0 002.68-2.04c0-.01.01-.01.01-.02.24-.32.44-.66.61-1.03.02-.01.03-.03.04-.05zM14 4c-.99 0-1.91.24-2.73.66a7.51 7.51 0 010 10.68c.82.42 1.74.66 2.73.66 3.31 0 6-2.69 6-6s-2.69-6-6-6z"];

var updated$1 = ["M10 0C6.71 0 3.82 1.6 2 4.05V2c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.76C5.22 3.17 7.47 2 10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-.55-.45-1-1-1s-1 .45-1 1c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm4 7c-.28 0-.53.11-.71.29L9 11.58 6.71 9.29a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l5-5A1.003 1.003 0 0014 7z"];

var upload$1 = ["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4 10c-.28 0-.53-.11-.71-.29L11 7.41V15c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-2.29 2.3a1.003 1.003 0 01-1.42-1.42l4-4c.18-.18.43-.29.71-.29s.53.11.71.29l4 4A1.003 1.003 0 0114 10z"];

var user$1 = ["M10 0C4.48 0 0 4.48 0 10c0 .33.02.65.05.97.01.12.03.23.05.35.03.2.05.4.09.59.03.14.06.28.1.42l.12.48c.05.16.1.31.15.46.05.13.09.27.15.4.06.16.13.32.21.48.05.11.1.22.16.33.09.17.17.34.27.5.05.09.1.17.15.25.11.18.22.35.34.52.04.06.08.11.12.17 1.19 1.62 2.85 2.86 4.78 3.53l.09.03c.46.15.93.27 1.42.36.08.01.17.03.25.04.49.07.99.12 1.5.12s1.01-.05 1.5-.12c.08-.01.17-.02.25-.04.49-.09.96-.21 1.42-.36l.09-.03c1.93-.67 3.59-1.91 4.78-3.53.04-.05.08-.1.12-.16.12-.17.23-.35.34-.53.05-.08.1-.16.15-.25.1-.17.19-.34.27-.51.05-.11.1-.21.15-.32.07-.16.14-.32.21-.49.05-.13.1-.26.14-.39.05-.15.11-.31.15-.46.05-.16.08-.32.12-.48.03-.14.07-.28.1-.42.04-.19.06-.39.09-.59.02-.12.04-.23.05-.35.05-.32.07-.64.07-.97 0-5.52-4.48-10-10-10zm0 18a7.94 7.94 0 01-6.15-2.89c.84-.44 1.86-.82 2.67-1.19 1.45-.65 1.3-1.05 1.35-1.59.01-.07.01-.14.01-.21-.51-.45-.93-1.08-1.2-1.8l-.01-.01c0-.01-.01-.02-.01-.03a4.42 4.42 0 01-.15-.48c-.33-.07-.53-.44-.61-.79-.08-.14-.23-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.63.06-1.55.17-2.15.02-.17.06-.33.11-.5.21-.73.66-1.4 1.26-1.86.62-.47 1.5-.72 2.28-.72.78 0 1.65.25 2.27.73.6.46 1.05 1.12 1.26 1.86.05.16.08.33.11.5.11.6.17 1.51.17 2.15v.09c.22.1.42.33.46.82.04.39-.12.73-.2.87-.07.34-.27.71-.6.78-.04.16-.09.33-.15.48 0 .01-.02.05-.02.05-.26.71-.67 1.33-1.17 1.78 0 .08.01.16.01.23.05.54-.15.94 1.31 1.59.81.36 1.84.74 2.68 1.19A7.958 7.958 0 0110 18z"];

var variable$1 = ["M4.93 3.79a9.1 9.1 0 012.2-2.27L7.29 1c-1.38.59-2.57 1.33-3.55 2.22C2.46 4.39 1.49 5.72.83 7.23.28 8.51 0 9.81 0 11.12c0 2.28.83 4.57 2.49 6.86l.16-.55c-.49-1.23-.73-2.38-.73-3.44 0-1.67.28-3.46.84-5.36.55-1.9 1.28-3.51 2.17-4.84zm9.38 8.39l-.33-.2c-.37.54-.65.87-.82 1a.74.74 0 01-.42.12c-.19 0-.38-.12-.57-.37-.31-.42-.73-1.59-1.26-3.5.47-.85.86-1.41 1.19-1.67.23-.19.48-.29.74-.29.1 0 .28.04.53.11.26.07.48.11.68.11.27 0 .5-.1.68-.29.18-.19.27-.44.27-.75 0-.33-.09-.58-.27-.77-.18-.19-.44-.29-.78-.29-.3 0-.59.07-.86.22s-.61.47-1.02.97c-.31.37-.77 1.02-1.37 1.94a9.683 9.683 0 00-1.24-3.14l-3.24.59-.06.36c.24-.05.44-.07.61-.07.32 0 .59.14.8.43.33.45.8 1.8 1.39 4.07-.47.64-.78 1.06-.96 1.26-.28.32-.52.53-.7.62-.14.08-.3.11-.48.11-.14 0-.36-.08-.67-.23-.21-.1-.4-.15-.57-.15-.31 0-.57.11-.78.32s-.31.48-.31.8c0 .31.09.55.28.75.19.19.44.29.76.29.31 0 .6-.07.87-.2s.61-.42 1.02-.86c.41-.44.98-1.13 1.7-2.08.28.9.52 1.56.72 1.97.2.41.44.71.7.89.26.18.59.27.99.27.38 0 .77-.14 1.17-.43.54-.36 1.07-1 1.61-1.91zM17.51 1l-.15.54c.49 1.24.73 2.39.73 3.45 0 1.43-.21 2.96-.63 4.6-.33 1.26-.75 2.45-1.27 3.55-.52 1.11-1.02 1.97-1.51 2.6-.49.62-1.09 1.2-1.8 1.72l-.17.53c1.38-.59 2.57-1.34 3.55-2.23 1.29-1.17 2.26-2.5 2.91-4 .55-1.28.83-2.59.83-3.91 0-2.27-.83-4.56-2.49-6.85z"];

var verticalBarChartAsc$1 = ["M8 7H7c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zM3 9H2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm10-5h-1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm5-4h-1c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"];

var verticalBarChartDesc$1 = ["M3 0H2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm5 4H7c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm5 3h-1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm5 2h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"];

var verticalDistribution$1 = ["M1 2h18c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm2 5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H3zm16 11H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var verticalInbetween$1 = ["M0 0h20v1a1 1 0 01-1 1H1a1 1 0 01-1-1V0zm6.293 11.293a.999.999 0 000 1.412l2.962 2.963.038.04A.996.996 0 0010 16a.996.996 0 00.745-.332l2.962-2.963a.999.999 0 00-1.412-1.412L10 13.587l-2.295-2.294a.999.999 0 00-1.412 0zm0-3.998a.999.999 0 101.412 1.412L10 6.413l2.295 2.294a.999.999 0 101.412-1.412l-2.962-2.963A.996.996 0 0010 4a.996.996 0 00-.745.332L6.293 7.295zM20 19v1H0v-1a1 1 0 011-1h18a1 1 0 011 1z"];

var video$1 = ["M19 2H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM7 14V6l6 4-6 4z"];

var virus$1 = ["M15.249 13.835l1.251 1.251.354-.354.087-.077a1 1 0 011.327 1.491l-2.122 2.122-.087.077a1 1 0 01-1.327-1.491l.354-.354-1.251-1.251A6.466 6.466 0 0111 16.424L10.999 18h.501a1 1 0 01.117 1.993L11.5 20h-3a1 1 0 01-.117-1.993L8.5 18h.499v-1.577a6.46 6.46 0 01-2.538-.97L5.414 16.5l.354.354a1 1 0 01-1.327 1.491l-.087-.077-2.122-2.122a1 1 0 011.327-1.491l.087.077.354.354.97-.97a6.472 6.472 0 01-1.384-3.057l-.025.002L2 11.06v.44a1 1 0 01-1.993.117L0 11.5v-3a1 1 0 011.993-.117L2 8.5v.56h1.567A6.471 6.471 0 014.97 5.883l-.971-.969-.353.354-.087.077a1 1 0 01-1.327-1.491l2.122-2.122.087-.077a1 1 0 011.327 1.491l-.354.353 1.047 1.048A6.46 6.46 0 019 3.577L9 2h-.5A1 1 0 018.383.007L8.5 0h3a1 1 0 01.117 1.993L11.5 2H11v1.577a6.466 6.466 0 012.838 1.176l.04-.046L15.086 3.5l-.353-.353a1 1 0 011.327-1.491l.087.077 2.122 2.122a1 1 0 01-1.327 1.491l-.087-.077-.354-.354-1.207 1.207-.046.041a6.467 6.467 0 011.16 2.733H18V8.5a1 1 0 011.993-.117L20 8.5v3a1 1 0 01-1.993.117L18 11.5v-.605h-1.561a6.466 6.466 0 01-1.19 2.94zM12.5 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 6a2 2 0 100 4 2 2 0 000-4z"];

var volumeDown$1 = ["M15.92 3.93l-1.6 1.18A7.948 7.948 0 0116 10c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.878 9.878 0 0018 10c0-2.29-.78-4.39-2.08-6.07zM11 3c-.28 0-.53.11-.71.29L7.59 6H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var volumeOff$1 = ["M14 3c-.28 0-.53.11-.71.29L10.59 6H6c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"];

var volumeUp$1 = ["M9 3.43c-.28 0-.53.11-.71.29l-2.7 2.71H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71a1.003 1.003 0 001.71-.71v-12c-.01-.55-.46-1-1.01-1zm8.31-1.56l-1.62 1.2C17.14 5.16 18 7.69 18 10.43s-.86 5.27-2.31 7.37l1.62 1.2C19 16.57 20 13.62 20 10.43c0-3.18-1-6.13-2.69-8.56zm-3.39 2.49l-1.6 1.18A7.948 7.948 0 0114 10.43c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.94 9.94 0 0016 10.43c0-2.28-.78-4.38-2.08-6.07z"];

var walk$1 = ["M16 10h-2c-.23 0-.42-.09-.59-.21l-.01.01-1.69-1.27-.63 3.14 2.62 2.62c.19.18.3.43.3.71v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.59L9.39 12.8l-2.45 6.55h-.01c-.14.38-.5.65-.93.65-.55 0-1-.45-1-1 0-.12.03-.24.07-.35h-.01L9.43 7h-2.9l-1.7 2.55-.01-.01c-.18.27-.47.46-.82.46-.55 0-1-.45-1-1 0-.21.08-.39.18-.54l-.01-.01 2-3 .02.01C5.36 5.19 5.65 5 6 5h4.18l.36-.96c-.33-.43-.54-.96-.54-1.54a2.5 2.5 0 015 0A2.5 2.5 0 0112.5 5c-.06 0-.12-.01-.18-.02l-.44 1.18L14.33 8H16c.55 0 1 .45 1 1s-.45 1-1 1z"];

var warningSign$1 = ["M19.86 17.52l.01-.01-9-16-.01.01C10.69 1.21 10.37 1 10 1s-.69.21-.86.52l-.01-.01-9 16 .01.01c-.08.14-.14.3-.14.48 0 .55.45 1 1 1h18c.55 0 1-.45 1-1 0-.18-.06-.34-.14-.48zM11 17H9v-2h2v2zm0-3H9V6h2v8z"];

var waterfallChart$1 = ["M13 7h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm-9 8h1c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm4-6h2c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm11-5h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 001 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"];

var waves$1 = ["M4.948 2.682a1 1 0 00-1.897.001l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172C1.958 4.635 1.468 5 .999 5a1 1 0 000 2c1.457 0 2.442-1.027 3-1.825C4.558 5.973 5.543 7 7 7s2.442-1.027 3-1.825C10.558 5.973 11.543 7 13 7s2.442-1.027 3-1.825C16.558 5.973 17.544 7 19 7a1 1 0 100-2c-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.896 0l-.006.016a5.868 5.868 0 01-.147.364c-.11.246-.272.568-.481.882C13.958 4.635 13.469 5 13 5c-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.897 0l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172C7.958 4.635 7.468 5 6.999 5c-.47 0-.958-.365-1.418-1.055A6.05 6.05 0 014.954 2.7l-.006-.016v-.001zm0 6a1 1 0 00-1.897.001l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172c-.46.69-.95 1.055-1.419 1.055a1 1 0 100 2c1.457 0 2.442-1.027 3-1.825C4.558 11.973 5.543 13 7 13s2.442-1.027 3-1.825c.558.798 1.543 1.825 3 1.825s2.442-1.027 3-1.825c.558.798 1.544 1.825 3 1.825a1 1 0 100-2c-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.896 0l-.006.016a5.868 5.868 0 01-.147.364c-.11.246-.272.568-.481.882-.46.69-.949 1.055-1.418 1.055-.47 0-.958-.365-1.418-1.055a6.048 6.048 0 01-.628-1.246l-.006-.016a1 1 0 00-1.897 0l-.005.016-.027.074a6.05 6.05 0 01-.6 1.172c-.46.69-.95 1.055-1.419 1.055-.47 0-.958-.365-1.418-1.055A6.05 6.05 0 014.954 8.7l-.006-.016zm-1.896-6zm1.896 12l.006.017.027.074a6.053 6.053 0 00.6 1.172c.46.69.95 1.055 1.419 1.055.47 0 .958-.365 1.418-1.055a6.053 6.053 0 00.628-1.246l.005-.016a1 1 0 011.897 0l.006.016.027.074a6.051 6.051 0 00.6 1.172c.46.69.95 1.055 1.419 1.055.47 0 .958-.365 1.418-1.055a6.051 6.051 0 00.628-1.246l.006-.016a1 1 0 011.896 0l.006.016.027.074a6.051 6.051 0 00.6 1.172c.46.69.95 1.055 1.419 1.055a1 1 0 110 2c-1.456 0-2.442-1.027-3-1.825-.558.798-1.543 1.825-3 1.825s-2.442-1.027-3-1.825C9.442 17.973 8.457 19 7 19s-2.442-1.027-3-1.825C3.442 17.973 2.457 19 1 19a1 1 0 110-2c.47 0 .958-.365 1.418-1.055a6.053 6.053 0 00.628-1.246l.005-.016a1 1 0 011.897-.001z"];

var widget$1 = ["M18 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15-1h2V5h-2v10zM3 5H1v10h2V5zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 3h10V1H5v2zm13 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 19h10v-2H5v2z"];

var widgetButton$1 = ["M1 4h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm1 2v8h16V6H2zm4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"];

var widgetFooter$1 = ["M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H4v-4h12v4zm0-5H4V2h12v11z"];

var widgetHeader$1 = ["M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H4V7h12v11zm0-12H4V2h12v4z"];

var wind$1 = ["M12 6a3 3 0 113 3H4a1 1 0 000 2h11a5 5 0 10-5-5 1 1 0 102 0zM1 12a1 1 0 100 2h10a2 2 0 110 4c-.934 0-1.803-.614-2.057-1.333a1 1 0 10-1.886.666C7.627 18.944 9.321 20 11 20a4 4 0 000-8H1z"];

var wrench$1 = ["M19.8 4.44L16.13 8.1l-3.55-.71-.71-3.53L15.54.21c-2.01-.53-4.23-.03-5.8 1.53-1.86 1.85-2.23 4.6-1.14 6.83L.59 16.59C.22 16.95 0 17.45 0 18a2 2 0 002 2c.55 0 1.05-.22 1.41-.59l8.03-8.04c2.23 1.05 4.97.67 6.82-1.16 1.57-1.56 2.07-3.77 1.54-5.77z"];

var zoomIn$1 = ["M19.56 17.44l-4.94-4.94A8.004 8.004 0 0016 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 102.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7H9V5c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V9h2c.55 0 1-.45 1-1s-.45-1-1-1z"];

var zoomOut$1 = ["M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.56 10.44l-4.94-4.94A8.004 8.004 0 0016 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 102.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"];

var zoomToFit$1 = ["M1 7c.55 0 1-.45 1-1V2h4c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1zm5 1a1.003 1.003 0 00-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L4.41 10 5.7 8.71c.19-.18.3-.43.3-.71zm2-2c.28 0 .53-.11.71-.29L10 4.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C10.53 2.11 10.28 2 10 2s-.53.11-.71.29l-2 2A1.003 1.003 0 008 6zM6 18H2v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm8-6a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 00-1.42 1.42l1.3 1.29-1.29 1.29c-.19.18-.3.43-.3.71zm5-12h-5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-7 14c-.28 0-.53.11-.71.29L10 15.59 8.71 14.3A.965.965 0 008 14a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0012 14zm7-1c-.55 0-1 .45-1 1v4h-4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z"];

var IconSvgPaths20 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Add: add$1,
    AddClip: addClip$1,
    AddColumnLeft: addColumnLeft$1,
    AddColumnRight: addColumnRight$1,
    AddLocation: addLocation$1,
    AddRowBottom: addRowBottom$1,
    AddRowTop: addRowTop$1,
    AddToArtifact: addToArtifact$1,
    AddToFolder: addToFolder$1,
    Airplane: airplane$1,
    AlignCenter: alignCenter$1,
    AlignJustify: alignJustify$1,
    AlignLeft: alignLeft$1,
    AlignRight: alignRight$1,
    AlignmentBottom: alignmentBottom$1,
    AlignmentHorizontalCenter: alignmentHorizontalCenter$1,
    AlignmentLeft: alignmentLeft$1,
    AlignmentRight: alignmentRight$1,
    AlignmentTop: alignmentTop$1,
    AlignmentVerticalCenter: alignmentVerticalCenter$1,
    Anchor: anchor$1,
    Annotation: annotation$1,
    Antenna: antenna$1,
    AppHeader: appHeader$1,
    Application: application$1,
    Applications: applications$1,
    Archive: archive$1,
    AreaOfInterest: areaOfInterest$1,
    Array: array$1,
    ArrayBoolean: arrayBoolean$1,
    ArrayDate: arrayDate$1,
    ArrayFloatingPoint: arrayFloatingPoint$1,
    ArrayNumeric: arrayNumeric$1,
    ArrayString: arrayString$1,
    ArrayTimestamp: arrayTimestamp$1,
    ArrowBottomLeft: arrowBottomLeft$1,
    ArrowBottomRight: arrowBottomRight$1,
    ArrowDown: arrowDown$1,
    ArrowLeft: arrowLeft$1,
    ArrowRight: arrowRight$1,
    ArrowTopLeft: arrowTopLeft$1,
    ArrowTopRight: arrowTopRight$1,
    ArrowUp: arrowUp$1,
    ArrowsHorizontal: arrowsHorizontal$1,
    ArrowsVertical: arrowsVertical$1,
    Asterisk: asterisk$1,
    At: at$1,
    AutomaticUpdates: automaticUpdates$1,
    Backlink: backlink$1,
    Badge: badge$1,
    BanCircle: banCircle$1,
    BankAccount: bankAccount$1,
    Barcode: barcode$1,
    Blank: p$1,
    BlockedPerson: blockedPerson$1,
    Bold: bold$1,
    Book: book$1,
    Bookmark: bookmark$1,
    Box: box$1,
    Briefcase: briefcase$1,
    BringData: bringData$1,
    Bug: bug$1,
    Buggy: buggy$1,
    Build: build$1,
    Calculator: calculator$1,
    Calendar: calendar$1,
    Camera: camera$1,
    CaretDown: caretDown$1,
    CaretLeft: caretLeft$1,
    CaretRight: caretRight$1,
    CaretUp: caretUp$1,
    CargoShip: cargoShip$1,
    CellTower: cellTower$1,
    Changes: changes$1,
    Chart: chart$1,
    Chat: chat$1,
    ChevronBackward: chevronBackward$1,
    ChevronDown: chevronDown$1,
    ChevronForward: chevronForward$1,
    ChevronLeft: chevronLeft$1,
    ChevronRight: chevronRight$1,
    ChevronUp: chevronUp$1,
    Circle: circle$1,
    CircleArrowDown: circleArrowDown$1,
    CircleArrowLeft: circleArrowLeft$1,
    CircleArrowRight: circleArrowRight$1,
    CircleArrowUp: circleArrowUp$1,
    Citation: citation$1,
    Clean: clean$1,
    Clip: clip$1,
    Clipboard: clipboard$1,
    Cloud: cloud$1,
    CloudDownload: cloudDownload$1,
    CloudUpload: cloudUpload$1,
    Code: code$1,
    CodeBlock: codeBlock$1,
    Cog: cog$1,
    CollapseAll: collapseAll$1,
    ColorFill: colorFill$1,
    ColumnLayout: columnLayout$1,
    Comment: comment$1,
    Comparison: comparison$1,
    Compass: compass$1,
    Compressed: compressed$1,
    Confirm: confirm$1,
    Console: console$2,
    Contrast: contrast$1,
    Control: control$1,
    CreditCard: creditCard$1,
    Cross: cross$1,
    Crown: crown$1,
    Cube: cube$1,
    CubeAdd: cubeAdd$1,
    CubeRemove: cubeRemove$1,
    CurvedRangeChart: curvedRangeChart$1,
    Cut: cut$1,
    Cycle: cycle$1,
    Dashboard: dashboard$1,
    DataConnection: dataConnection$1,
    DataLineage: dataLineage$1,
    Database: database$1,
    Delete: _delete$1,
    Delta: delta$1,
    DeriveColumn: deriveColumn$1,
    Desktop: desktop$1,
    Diagnosis: diagnosis$1,
    DiagramTree: diagramTree$1,
    DirectionLeft: directionLeft$1,
    DirectionRight: directionRight$1,
    Disable: disable$1,
    Divide: divide$1,
    Document: document$2,
    DocumentOpen: documentOpen$1,
    DocumentShare: documentShare$1,
    Dollar: dollar$1,
    Dot: dot$1,
    DoubleCaretHorizontal: doubleCaretHorizontal$1,
    DoubleCaretVertical: doubleCaretVertical$1,
    DoubleChevronDown: doubleChevronDown$1,
    DoubleChevronLeft: doubleChevronLeft$1,
    DoubleChevronRight: doubleChevronRight$1,
    DoubleChevronUp: doubleChevronUp$1,
    DoughnutChart: doughnutChart$1,
    Download: download$1,
    DragHandleHorizontal: dragHandleHorizontal$1,
    DragHandleVertical: dragHandleVertical$1,
    Draw: draw$1,
    DrawerLeft: drawerLeft$1,
    DrawerLeftFilled: drawerLeftFilled$1,
    DrawerRight: drawerRight$1,
    DrawerRightFilled: drawerRightFilled$1,
    DriveTime: driveTime$1,
    Duplicate: duplicate$1,
    Edit: edit$1,
    Eject: eject$1,
    Emoji: emoji$1,
    Endorsed: endorsed$1,
    Envelope: envelope$1,
    Equals: equals$1,
    Eraser: eraser$1,
    Error: error$1,
    Euro: euro$1,
    Exchange: exchange$1,
    ExcludeRow: excludeRow$1,
    ExpandAll: expandAll$1,
    Export: _export$1,
    EyeOff: eyeOff$1,
    EyeOn: eyeOn$1,
    EyeOpen: eyeOpen$1,
    FastBackward: fastBackward$1,
    FastForward: fastForward$1,
    Feed: feed$1,
    FeedSubscribed: feedSubscribed$1,
    Film: film$1,
    Filter: filter$1,
    FilterKeep: filterKeep$1,
    FilterList: filterList$1,
    FilterOpen: filterOpen$1,
    FilterRemove: filterRemove$1,
    Flag: flag$1,
    Flame: flame$1,
    Flash: flash$1,
    FloatingPoint: floatingPoint$1,
    FloppyDisk: floppyDisk$1,
    FlowBranch: flowBranch$1,
    FlowEnd: flowEnd$1,
    FlowLinear: flowLinear$1,
    FlowReview: flowReview$1,
    FlowReviewBranch: flowReviewBranch$1,
    Flows: flows$1,
    FolderClose: folderClose$1,
    FolderNew: folderNew$1,
    FolderOpen: folderOpen$1,
    FolderShared: folderShared$1,
    FolderSharedOpen: folderSharedOpen$1,
    Follower: follower$1,
    Following: following$1,
    Font: font$1,
    Fork: fork$1,
    Form: form$1,
    Fuel: fuel$1,
    FullCircle: fullCircle$1,
    FullStackedChart: fullStackedChart$1,
    Fullscreen: fullscreen$1,
    Function: _function$1,
    GanttChart: ganttChart$1,
    Geofence: geofence$1,
    Geolocation: geolocation$1,
    Geosearch: geosearch$1,
    GitBranch: gitBranch$1,
    GitCommit: gitCommit$1,
    GitMerge: gitMerge$1,
    GitNewBranch: gitNewBranch$1,
    GitPull: gitPull$1,
    GitPush: gitPush$1,
    GitRepo: gitRepo$1,
    Glass: glass$1,
    Globe: globe$1,
    GlobeNetwork: globeNetwork$1,
    Graph: graph$1,
    GraphRemove: graphRemove$1,
    GreaterThan: greaterThan$1,
    GreaterThanOrEqualTo: greaterThanOrEqualTo$1,
    Grid: grid$1,
    GridView: gridView$1,
    GroupObjects: groupObjects$1,
    GroupedBarChart: groupedBarChart$1,
    Hand: hand$1,
    HandDown: handDown$1,
    HandLeft: handLeft$1,
    HandRight: handRight$1,
    HandUp: handUp$1,
    Hat: hat$1,
    Header: header$1,
    HeaderOne: headerOne$1,
    HeaderThree: headerThree$1,
    HeaderTwo: headerTwo$1,
    Headset: headset$1,
    Heart: heart$1,
    HeartBroken: heartBroken$1,
    HeatGrid: heatGrid$1,
    Heatmap: heatmap$1,
    Helicopter: helicopter$1,
    Help: help$1,
    HelperManagement: helperManagement$1,
    HighPriority: highPriority$1,
    HighVoltagePole: highVoltagePole$1,
    Highlight: highlight$1,
    History: history$1,
    Home: home$1,
    HorizontalBarChart: horizontalBarChart$1,
    HorizontalBarChartAsc: horizontalBarChartAsc$1,
    HorizontalBarChartDesc: horizontalBarChartDesc$1,
    HorizontalDistribution: horizontalDistribution$1,
    HorizontalInbetween: horizontalInbetween$1,
    Hurricane: hurricane$1,
    IdNumber: idNumber$1,
    ImageRotateLeft: imageRotateLeft$1,
    ImageRotateRight: imageRotateRight$1,
    Import: _import$1,
    Inbox: inbox$1,
    InboxFiltered: inboxFiltered$1,
    InboxGeo: inboxGeo$1,
    InboxSearch: inboxSearch$1,
    InboxUpdate: inboxUpdate$1,
    InfoSign: infoSign$1,
    Inheritance: inheritance$1,
    InheritedGroup: inheritedGroup$1,
    InnerJoin: innerJoin$1,
    Insert: insert$1,
    Intersection: intersection$1,
    IpAddress: ipAddress$1,
    Issue: issue$1,
    IssueClosed: issueClosed$1,
    IssueNew: issueNew$1,
    Italic: italic$1,
    JoinTable: joinTable$1,
    Key: key$2,
    KeyBackspace: keyBackspace$1,
    KeyCommand: keyCommand$1,
    KeyControl: keyControl$1,
    KeyDelete: keyDelete$1,
    KeyEnter: keyEnter$1,
    KeyEscape: keyEscape$1,
    KeyOption: keyOption$1,
    KeyShift: keyShift$1,
    KeyTab: keyTab$1,
    KnownVehicle: knownVehicle$1,
    LabTest: labTest$1,
    Label: label$1,
    Layer: layer$1,
    LayerOutline: layerOutline$1,
    Layers: layers$1,
    Layout: layout$1,
    LayoutAuto: layoutAuto$1,
    LayoutBalloon: layoutBalloon$1,
    LayoutCircle: layoutCircle$1,
    LayoutGrid: layoutGrid$1,
    LayoutGroupBy: layoutGroupBy$1,
    LayoutHierarchy: layoutHierarchy$1,
    LayoutLinear: layoutLinear$1,
    LayoutSkewGrid: layoutSkewGrid$1,
    LayoutSortedClusters: layoutSortedClusters$1,
    Learning: learning$1,
    LeftJoin: leftJoin$1,
    LessThan: lessThan$1,
    LessThanOrEqualTo: lessThanOrEqualTo$1,
    Lifesaver: lifesaver$1,
    Lightbulb: lightbulb$1,
    Lightning: lightning$1,
    Link: link$1,
    List: list$1,
    ListColumns: listColumns$1,
    ListDetailView: listDetailView$1,
    Locate: locate$1,
    Lock: lock$1,
    LogIn: logIn$1,
    LogOut: logOut$1,
    LowVoltagePole: lowVoltagePole$1,
    Manual: manual$1,
    ManuallyEnteredData: manuallyEnteredData$1,
    ManyToMany: manyToMany$1,
    ManyToOne: manyToOne$1,
    Map: map$1,
    MapCreate: mapCreate$1,
    MapMarker: mapMarker$1,
    Maximize: maximize$1,
    Media: media$1,
    Menu: menu$1,
    MenuClosed: menuClosed$1,
    MenuOpen: menuOpen$1,
    MergeColumns: mergeColumns$1,
    MergeLinks: mergeLinks$1,
    Minimize: minimize$1,
    Minus: minus$1,
    MobilePhone: mobilePhone$1,
    MobileVideo: mobileVideo$1,
    Modal: modal$1,
    ModalFilled: modalFilled$1,
    Moon: moon$1,
    More: more$1,
    Mountain: mountain$1,
    Move: move$1,
    Mugshot: mugshot$1,
    MultiSelect: multiSelect$1,
    Music: music$1,
    Nest: nest$1,
    NewDrawing: newDrawing$1,
    NewGridItem: newGridItem$1,
    NewLayer: newLayer$1,
    NewLayers: newLayers$1,
    NewLink: newLink$1,
    NewObject: newObject$1,
    NewPerson: newPerson$1,
    NewPrescription: newPrescription$1,
    NewTextBox: newTextBox$1,
    Ninja: ninja$1,
    NotEqualTo: notEqualTo$1,
    Notifications: notifications$1,
    NotificationsSnooze: notificationsSnooze$1,
    NotificationsUpdated: notificationsUpdated$1,
    NumberedList: numberedList$1,
    Numerical: numerical$1,
    Office: office$1,
    Offline: offline$1,
    OilField: oilField$1,
    OneColumn: oneColumn$1,
    OneToMany: oneToMany$1,
    OneToOne: oneToOne$1,
    OpenApplication: openApplication$1,
    Outdated: outdated$1,
    PageLayout: pageLayout$1,
    PanelStats: panelStats$1,
    PanelTable: panelTable$1,
    Paperclip: paperclip$1,
    Paragraph: paragraph$1,
    Path: path$1,
    PathSearch: pathSearch$1,
    Pause: pause$1,
    People: people$1,
    Percentage: percentage$1,
    Person: person$1,
    Phone: phone$1,
    PieChart: pieChart$1,
    Pin: pin$1,
    Pivot: pivot$1,
    PivotTable: pivotTable$1,
    Play: play$1,
    Playbook: playbook$1,
    Plus: plus$1,
    PolygonFilter: polygonFilter$1,
    Power: power$1,
    PredictiveAnalysis: predictiveAnalysis$1,
    Prescription: prescription$1,
    Presentation: presentation$1,
    Print: print$1,
    Projects: projects$1,
    Properties: properties$1,
    Property: property$1,
    PublishFunction: publishFunction$1,
    Pulse: pulse$1,
    Rain: rain$1,
    Random: random$1,
    Record: record$1,
    RectHeight: rectHeight$1,
    RectWidth: rectWidth$1,
    Rectangle: rectangle$1,
    Redo: redo$1,
    Refresh: refresh$1,
    Regex: regex$2,
    RegressionChart: regressionChart$1,
    Remove: remove$1,
    RemoveColumn: removeColumn$1,
    RemoveColumnLeft: removeColumnLeft$1,
    RemoveColumnRight: removeColumnRight$1,
    RemoveRowBottom: removeRowBottom$1,
    RemoveRowTop: removeRowTop$1,
    Repeat: repeat$1,
    Reset: reset$1,
    Resolve: resolve$1,
    Rig: rig$1,
    RightJoin: rightJoin$1,
    Ring: ring$1,
    Rocket: rocket$1,
    RocketSlant: rocketSlant$1,
    RotateDocument: rotateDocument$1,
    RotatePage: rotatePage$1,
    Route: route$1,
    Satellite: satellite$1,
    Saved: saved$1,
    ScatterPlot: scatterPlot$1,
    Search: search$1,
    SearchAround: searchAround$1,
    SearchTemplate: searchTemplate$1,
    SearchText: searchText$1,
    SegmentedControl: segmentedControl$1,
    Select: select$1,
    Selection: selection$1,
    SendMessage: sendMessage$1,
    SendTo: sendTo$1,
    SendToGraph: sendToGraph$1,
    SendToMap: sendToMap$1,
    SeriesAdd: seriesAdd$1,
    SeriesConfiguration: seriesConfiguration$1,
    SeriesDerived: seriesDerived$1,
    SeriesFiltered: seriesFiltered$1,
    SeriesSearch: seriesSearch$1,
    Settings: settings$1,
    Shapes: shapes$1,
    Share: share$1,
    SharedFilter: sharedFilter$1,
    Shield: shield$1,
    Ship: ship$1,
    Shop: shop$1,
    ShoppingCart: shoppingCart$1,
    SignalSearch: signalSearch$1,
    SimCard: simCard$1,
    Slash: slash$1,
    SmallCross: smallCross$1,
    SmallInfoSign: smallInfoSign$1,
    SmallMinus: smallMinus$1,
    SmallPlus: smallPlus$1,
    SmallSquare: smallSquare$1,
    SmallTick: smallTick$1,
    Snowflake: snowflake$1,
    SocialMedia: socialMedia$1,
    Sort: sort$1,
    SortAlphabetical: sortAlphabetical$1,
    SortAlphabeticalDesc: sortAlphabeticalDesc$1,
    SortAsc: sortAsc$1,
    SortDesc: sortDesc$1,
    SortNumerical: sortNumerical$1,
    SortNumericalDesc: sortNumericalDesc$1,
    SplitColumns: splitColumns$1,
    Square: square$1,
    StackedChart: stackedChart$1,
    StadiumGeometry: stadiumGeometry$1,
    Star: star$1,
    StarEmpty: starEmpty$1,
    StepBackward: stepBackward$1,
    StepChart: stepChart$1,
    StepForward: stepForward$1,
    Stop: stop$1,
    Stopwatch: stopwatch$1,
    Strikethrough: strikethrough$1,
    Style: style$1,
    SwapHorizontal: swapHorizontal$1,
    SwapVertical: swapVertical$1,
    Switch: _switch$1,
    SymbolCircle: symbolCircle$1,
    SymbolCross: symbolCross$1,
    SymbolDiamond: symbolDiamond$1,
    SymbolRectangle: symbolRectangle$1,
    SymbolSquare: symbolSquare$1,
    SymbolTriangleDown: symbolTriangleDown$1,
    SymbolTriangleUp: symbolTriangleUp$1,
    Syringe: syringe$1,
    Tag: tag$1,
    TakeAction: takeAction$1,
    Tank: tank$1,
    Target: target$1,
    Taxi: taxi$1,
    Temperature: temperature$1,
    TextHighlight: textHighlight$1,
    Th: th$1,
    ThDerived: thDerived$1,
    ThDisconnect: thDisconnect$1,
    ThFiltered: thFiltered$1,
    ThList: thList$1,
    ThirdParty: thirdParty$1,
    ThumbsDown: thumbsDown$1,
    ThumbsUp: thumbsUp$1,
    Tick: tick$1,
    TickCircle: tickCircle$1,
    Time: time$2,
    TimelineAreaChart: timelineAreaChart$1,
    TimelineBarChart: timelineBarChart$1,
    TimelineEvents: timelineEvents$1,
    TimelineLineChart: timelineLineChart$1,
    Tint: tint$1,
    Torch: torch$1,
    Tractor: tractor$1,
    Train: train$1,
    Translate: translate$1,
    Trash: trash$1,
    Tree: tree$1,
    TrendingDown: trendingDown$1,
    TrendingUp: trendingUp$1,
    Truck: truck$1,
    TwoColumns: twoColumns$1,
    Unarchive: unarchive$1,
    Underline: underline$1,
    Undo: undo$1,
    UngroupObjects: ungroupObjects$1,
    UnknownVehicle: unknownVehicle$1,
    Unlock: unlock$1,
    Unpin: unpin$1,
    Unresolve: unresolve$1,
    Updated: updated$1,
    Upload: upload$1,
    User: user$1,
    Variable: variable$1,
    VerticalBarChartAsc: verticalBarChartAsc$1,
    VerticalBarChartDesc: verticalBarChartDesc$1,
    VerticalDistribution: verticalDistribution$1,
    VerticalInbetween: verticalInbetween$1,
    Video: video$1,
    Virus: virus$1,
    VolumeDown: volumeDown$1,
    VolumeOff: volumeOff$1,
    VolumeUp: volumeUp$1,
    Walk: walk$1,
    WarningSign: warningSign$1,
    WaterfallChart: waterfallChart$1,
    Waves: waves$1,
    Widget: widget$1,
    WidgetButton: widgetButton$1,
    WidgetFooter: widgetFooter$1,
    WidgetHeader: widgetHeader$1,
    Wind: wind$1,
    Wrench: wrench$1,
    ZoomIn: zoomIn$1,
    ZoomOut: zoomOut$1,
    ZoomToFit: zoomToFit$1
});

/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type safe string literal conversion of snake-case icon names to PascalCase icon names.
 * This is useful for indexing into the SVG paths record to extract a single icon's SVG path definition.
 */
function iconNameToPathsRecordKey(name) {
    return pascalCase(name);
}

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IconSize;
(function (IconSize) {
    IconSize[IconSize["STANDARD"] = 16] = "STANDARD";
    IconSize[IconSize["LARGE"] = 20] = "LARGE";
})(IconSize || (IconSize = {}));
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var icon = this.props.icon;
        if (icon == null || typeof icon === "boolean") {
            return null;
        }
        else if (typeof icon !== "string") {
            return icon;
        }
        var _a = this.props, className = _a.className, color = _a.color, htmlTitle = _a.htmlTitle, 
        // eslint-disable-next-line deprecation/deprecation
        iconSize = _a.iconSize, intent = _a.intent, _b = _a.size, size = _b === void 0 ? iconSize !== null && iconSize !== void 0 ? iconSize : IconSize.STANDARD : _b, title = _a.title, _c = _a.tagName, tagName = _c === void 0 ? "span" : _c, htmlprops = __rest(_a, ["className", "color", "htmlTitle", "iconSize", "intent", "size", "title", "tagName"]);
        // choose which pixel grid is most appropriate for given icon size
        var pixelGridSize = size >= IconSize.LARGE ? IconSize.LARGE : IconSize.STANDARD;
        // render path elements, or nothing if icon name is unknown.
        var paths = this.renderSvgPaths(pixelGridSize, icon);
        var classes = classnames(ICON, iconClass(icon), intentClass(intent), className);
        var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);
        var titleId = uniqueId("iconTitle");
        return react.createElement(tagName, __assign(__assign({}, htmlprops), { "aria-hidden": title ? undefined : true, className: classes, title: htmlTitle }), react.createElement("svg", { fill: color, "data-icon": icon, width: size, height: size, viewBox: viewBox, "aria-labelledby": title ? titleId : undefined, role: "img" },
            title && react.createElement("title", { id: titleId }, title),
            paths));
    };
    /** Render `<path>` elements for the given icon name. Returns `null` if name is unknown. */
    Icon.prototype.renderSvgPaths = function (pathsSize, iconName) {
        var svgPathsRecord = pathsSize === IconSize.STANDARD ? IconSvgPaths16 : IconSvgPaths20;
        var paths = svgPathsRecord[iconNameToPathsRecordKey(iconName)];
        if (paths == null) {
            return null;
        }
        return paths.map(function (path, i) { return react.createElement("path", { key: i, d: path, fillRule: "evenodd" }); });
    };
    Icon.displayName = "".concat(DISPLAYNAME_PREFIX, ".Icon");
    return Icon;
}(AbstractPureComponent2));

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpinnerSize;
(function (SpinnerSize) {
    SpinnerSize[SpinnerSize["SMALL"] = 20] = "SMALL";
    SpinnerSize[SpinnerSize["STANDARD"] = 50] = "STANDARD";
    SpinnerSize[SpinnerSize["LARGE"] = 100] = "LARGE";
})(SpinnerSize || (SpinnerSize = {}));
// see http://stackoverflow.com/a/18473154/3124288 for calculating arc path
var R = 45;
var SPINNER_TRACK$1 = "M 50,50 m 0,-".concat(R, " a ").concat(R, ",").concat(R, " 0 1 1 0,").concat(R * 2, " a ").concat(R, ",").concat(R, " 0 1 1 0,-").concat(R * 2);
// unitless total length of SVG path, to which stroke-dash* properties are relative.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
// this value is the result of `<path d={SPINNER_TRACK} />.getTotalLength()` and works in all browsers:
var PATH_LENGTH = 280;
var MIN_SIZE = 10;
var STROKE_WIDTH = 4;
var MIN_STROKE_WIDTH = 16;
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.value !== this.props.value) {
            // IE/Edge: re-render after changing value to force SVG update
            this.forceUpdate();
        }
    };
    Spinner.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, intent = _b.intent, value = _b.value, _c = _b.tagName, tagName = _c === void 0 ? "div" : _c, htmlProps = __rest(_b, ["className", "intent", "value", "tagName"]);
        var size = this.getSize();
        var classes = classnames(SPINNER, intentClass(intent), (_a = {}, _a[SPINNER_NO_SPIN] = value != null, _a), className);
        // keep spinner track width consistent at all sizes (down to about 10px).
        var strokeWidth = Math.min(MIN_STROKE_WIDTH, (STROKE_WIDTH * SpinnerSize.LARGE) / size);
        var strokeOffset = PATH_LENGTH - PATH_LENGTH * (value == null ? 0.25 : clamp(value, 0, 1));
        // multiple DOM elements around SVG are necessary to properly isolate animation:
        // - SVG elements in IE do not support anim/trans so they must be set on a parent HTML element.
        // - SPINNER_ANIMATION isolates svg from parent display and is always centered inside root element.
        return react.createElement(tagName, __assign({ "aria-valuemax": 100, "aria-valuemin": 0, "aria-valuenow": value === undefined ? undefined : value * 100, className: classes, role: "progressbar" }, htmlProps), react.createElement(tagName, { className: SPINNER_ANIMATION }, react.createElement("svg", { width: size, height: size, strokeWidth: strokeWidth.toFixed(2), viewBox: this.getViewBox(strokeWidth) },
            react.createElement("path", { className: SPINNER_TRACK, d: SPINNER_TRACK$1 }),
            react.createElement("path", { className: SPINNER_HEAD, d: SPINNER_TRACK$1, pathLength: PATH_LENGTH, strokeDasharray: "".concat(PATH_LENGTH, " ").concat(PATH_LENGTH), strokeDashoffset: strokeOffset }))));
    };
    Spinner.prototype.validateProps = function (_a) {
        var _b = _a.className, className = _b === void 0 ? "" : _b, size = _a.size;
        if (size != null && (className.indexOf(SMALL) >= 0 || className.indexOf(LARGE) >= 0)) {
            console.warn(SPINNER_WARN_CLASSES_SIZE);
        }
    };
    /**
     * Resolve size to a pixel value.
     * Size can be set by className, props, default, or minimum constant.
     */
    Spinner.prototype.getSize = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? "" : _b, size = _a.size;
        if (size == null) {
            // allow Classes constants to determine default size.
            if (className.indexOf(SMALL) >= 0) {
                return SpinnerSize.SMALL;
            }
            else if (className.indexOf(LARGE) >= 0) {
                return SpinnerSize.LARGE;
            }
            return SpinnerSize.STANDARD;
        }
        return Math.max(MIN_SIZE, size);
    };
    /** Compute viewbox such that stroked track sits exactly at edge of image frame. */
    Spinner.prototype.getViewBox = function (strokeWidth) {
        var radius = R + strokeWidth / 2;
        var viewBoxX = (50 - radius).toFixed(2);
        var viewBoxWidth = (radius * 2).toFixed(2);
        return "".concat(viewBoxX, " ").concat(viewBoxX, " ").concat(viewBoxWidth, " ").concat(viewBoxWidth);
    };
    Spinner.displayName = "".concat(DISPLAYNAME_PREFIX, ".Spinner");
    return Spinner;
}(AbstractPureComponent2));

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var AbstractButton = /** @class */ (function (_super) {
    __extends(AbstractButton, _super);
    function AbstractButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        // we're casting as `any` to get around a somewhat opaque safeInvoke error
        // that "Type argument candidate 'KeyboardEvent<T>' is not a valid type
        // argument because it is not a supertype of candidate
        // 'KeyboardEvent<HTMLElement>'."
        _this.handleKeyDown = function (e) {
            var _a, _b;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable deprecation/deprecation */
            if (isKeyboardClick(e.which)) {
                e.preventDefault();
                if (e.which !== _this.currentKeyDown) {
                    _this.setState({ isActive: true });
                }
            }
            _this.currentKeyDown = e.which;
            (_b = (_a = _this.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleKeyUp = function (e) {
            var _a, _b, _c;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            /* eslint-disable deprecation/deprecation */
            if (isKeyboardClick(e.which)) {
                _this.setState({ isActive: false });
                (_a = _this.buttonRef) === null || _a === void 0 ? void 0 : _a.click();
            }
            _this.currentKeyDown = undefined;
            (_c = (_b = _this.props).onKeyUp) === null || _c === void 0 ? void 0 : _c.call(_b, e);
        };
        _this.handleBlur = function (e) {
            var _a, _b;
            if (_this.state.isActive) {
                _this.setState({ isActive: false });
            }
            (_b = (_a = _this.props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        return _this;
    }
    AbstractButton.prototype.getCommonButtonProps = function () {
        var _a;
        var _b = this.props, _c = _b.active, active = _c === void 0 ? false : _c, alignText = _b.alignText, fill = _b.fill, large = _b.large, _d = _b.loading, loading = _d === void 0 ? false : _d, outlined = _b.outlined, minimal = _b.minimal, small = _b.small, tabIndex = _b.tabIndex;
        var disabled = this.props.disabled || loading;
        var className = classnames(BUTTON, (_a = {},
            _a[ACTIVE] = !disabled && (active || this.state.isActive),
            _a[DISABLED] = disabled,
            _a[FILL] = fill,
            _a[LARGE] = large,
            _a[LOADING] = loading,
            _a[MINIMAL] = minimal,
            _a[OUTLINED] = outlined,
            _a[SMALL] = small,
            _a), alignmentClass(alignText), intentClass(this.props.intent), this.props.className);
        return {
            className: className,
            disabled: disabled,
            onBlur: this.handleBlur,
            onClick: disabled ? undefined : this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            tabIndex: disabled ? -1 : tabIndex,
        };
    };
    AbstractButton.prototype.renderChildren = function () {
        var _a = this.props, children = _a.children, icon = _a.icon, loading = _a.loading, rightIcon = _a.rightIcon, text = _a.text;
        var maybeHasText = !isReactNodeEmpty(text) || !isReactNodeEmpty(children);
        return [
            loading && react.createElement(Spinner, { key: "loading", className: BUTTON_SPINNER, size: IconSize.LARGE }),
            // The icon is purely decorative if text is provided
            react.createElement(Icon, { key: "leftIcon", icon: icon, "aria-hidden": maybeHasText, tabIndex: maybeHasText ? -1 : undefined }),
            maybeHasText && (react.createElement("span", { key: "text", className: BUTTON_TEXT },
                text,
                children)),
            react.createElement(Icon, { key: "rightIcon", icon: rightIcon }),
        ];
    };
    return AbstractButton;
}(AbstractPureComponent2));

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // need to keep this ref so that we can access it in AbstractButton#handleKeyUp
        _this.buttonRef = null;
        _this.handleRef = refHandler(_this, "buttonRef", _this.props.elementRef);
        return _this;
    }
    Button.prototype.render = function () {
        return (react.createElement("button", __assign({ type: "button", ref: this.handleRef }, removeNonHTMLProps(this.props), this.getCommonButtonProps()), this.renderChildren()));
    };
    Button.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.elementRef !== this.props.elementRef) {
            setRef(prevProps.elementRef, null);
            this.handleRef = refHandler(this, "buttonRef", this.props.elementRef);
            setRef(this.props.elementRef, this.buttonRef);
        }
    };
    Button.displayName = "".concat(DISPLAYNAME_PREFIX, ".Button");
    return Button;
}(AbstractButton));
var AnchorButton = /** @class */ (function (_super) {
    __extends(AnchorButton, _super);
    function AnchorButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // need to keep this ref so that we can access it in AbstractButton#handleKeyUp
        _this.buttonRef = null;
        _this.handleRef = refHandler(_this, "buttonRef", _this.props.elementRef);
        return _this;
    }
    AnchorButton.prototype.render = function () {
        var _a = this.props, href = _a.href, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b;
        var commonProps = this.getCommonButtonProps();
        return (react.createElement("a", __assign({ role: "button", ref: this.handleRef }, removeNonHTMLProps(this.props), commonProps, { href: commonProps.disabled ? undefined : href, tabIndex: commonProps.disabled ? -1 : tabIndex }), this.renderChildren()));
    };
    AnchorButton.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.elementRef !== this.props.elementRef) {
            setRef(prevProps.elementRef, null);
            this.handleRef = refHandler(this, "buttonRef", this.props.elementRef);
            setRef(this.props.elementRef, this.buttonRef);
        }
    };
    AnchorButton.displayName = "".concat(DISPLAYNAME_PREFIX, ".AnchorButton");
    return AnchorButton;
}(AbstractButton));

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, children = _b.children, large = _b.large, ulRef = _b.ulRef, htmlProps = __rest(_b, ["className", "children", "large", "ulRef"]);
        var classes = classnames(MENU, (_a = {}, _a[LARGE] = large, _a), className);
        return (react.createElement("ul", __assign({ role: "menu" }, htmlProps, { className: classes, ref: ulRef }), children));
    };
    Menu.displayName = "".concat(DISPLAYNAME_PREFIX, ".Menu");
    return Menu;
}(AbstractPureComponent2));

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContentOverflowing: false,
            textContent: "",
        };
        _this.textRef = null;
        return _this;
    }
    Text.prototype.componentDidMount = function () {
        this.update();
    };
    Text.prototype.componentDidUpdate = function () {
        this.update();
    };
    Text.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, children = _b.children, className = _b.className, ellipsize = _b.ellipsize, _c = _b.tagName, tagName = _c === void 0 ? "div" : _c, title = _b.title, htmlProps = __rest(_b, ["children", "className", "ellipsize", "tagName", "title"]);
        var classes = classnames(className, (_a = {},
            _a[TEXT_OVERFLOW_ELLIPSIS] = ellipsize,
            _a));
        return react.createElement(tagName, __assign(__assign({}, htmlProps), { className: classes, ref: function (ref) { return (_this.textRef = ref); }, title: title !== null && title !== void 0 ? title : (this.state.isContentOverflowing ? this.state.textContent : undefined) }), children);
    };
    Text.prototype.update = function () {
        var _a;
        if (((_a = this.textRef) === null || _a === void 0 ? void 0 : _a.textContent) == null) {
            return;
        }
        var newState = {
            isContentOverflowing: this.props.ellipsize && this.textRef.scrollWidth > this.textRef.clientWidth,
            textContent: this.textRef.textContent,
        };
        this.setState(newState);
    };
    Text.displayName = "".concat(DISPLAYNAME_PREFIX, ".Text");
    Text.defaultProps = {
        ellipsize: false,
    };
    return Text;
}(AbstractPureComponent2));

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItem.prototype.render = function () {
        var _a, _b;
        var _c = this.props, 
        // eslint-disable-next-line deprecation/deprecation
        active = _c.active, className = _c.className, children = _c.children, disabled = _c.disabled, icon = _c.icon, intent = _c.intent, labelClassName = _c.labelClassName, labelElement = _c.labelElement, multiline = _c.multiline, popoverProps = _c.popoverProps, _d = _c.roleStructure, roleStructure = _d === void 0 ? "menuitem" : _d, selected = _c.selected, shouldDismissPopover = _c.shouldDismissPopover, submenuProps = _c.submenuProps, text = _c.text, textClassName = _c.textClassName, _e = _c.tagName, tagName = _e === void 0 ? "a" : _e, htmlTitle = _c.htmlTitle, htmlProps = __rest(_c, ["active", "className", "children", "disabled", "icon", "intent", "labelClassName", "labelElement", "multiline", "popoverProps", "roleStructure", "selected", "shouldDismissPopover", "submenuProps", "text", "textClassName", "tagName", "htmlTitle"]);
        var hasIcon = icon != null;
        var hasSubmenu = children != null;
        var intentClass$1 = intentClass(intent);
        var anchorClasses = classnames(MENU_ITEM, intentClass$1, (_a = {},
            _a[ACTIVE] = active,
            _a[DISABLED] = disabled,
            // prevent popover from closing when clicking on submenu trigger or disabled item
            _a[POPOVER_DISMISS] = shouldDismissPopover && !disabled && !hasSubmenu,
            _a[SELECTED] = selected || (active && intentClass$1 === undefined),
            _a), className);
        var _f = roleStructure === "listoption"
            ? ["option", undefined, active || selected] // parent has listbox role, or is a <select>
            : ["none", "menuitem", undefined], liRole = _f[0], targetRole = _f[1], ariaSelected = _f[2]; // parent has menu role
        var target = react.createElement(tagName, __assign(__assign(__assign({ role: targetRole, tabIndex: 0 }, htmlProps), (disabled ? DISABLED_PROPS : {})), { className: anchorClasses }), hasIcon ? (
        // wrap icon in a <span> in case `icon` is a custom element rather than a built-in icon identifier,
        // so that we always render this class
        react.createElement("span", { className: MENU_ITEM_ICON },
            react.createElement(Icon, { icon: icon, "aria-hidden": true, tabIndex: -1 }))) : undefined, react.createElement(Text, { className: classnames(FILL, textClassName), ellipsize: !multiline, title: htmlTitle }, text), this.maybeRenderLabel(labelElement), hasSubmenu ? react.createElement(Icon, { className: MENU_SUBMENU_ICON, icon: "caret-right" }) : undefined);
        var liClasses = classnames((_b = {}, _b[MENU_SUBMENU] = hasSubmenu, _b));
        return (react.createElement("li", { className: liClasses, role: liRole, "aria-selected": ariaSelected }, this.maybeRenderPopover(target, children)));
    };
    MenuItem.prototype.maybeRenderLabel = function (labelElement) {
        var _a = this.props, label = _a.label, labelClassName = _a.labelClassName;
        if (label == null && labelElement == null) {
            return null;
        }
        return (react.createElement("span", { className: classnames(MENU_ITEM_LABEL, labelClassName) },
            label,
            labelElement));
    };
    MenuItem.prototype.maybeRenderPopover = function (target, children) {
        if (children == null) {
            return target;
        }
        var _a = this.props, disabled = _a.disabled, popoverProps = _a.popoverProps, submenuProps = _a.submenuProps;
        return (react.createElement(Popover, __assign({ autoFocus: false, captureDismiss: false, disabled: disabled, enforceFocus: false, hoverCloseDelay: 0, interactionKind: PopoverInteractionKind.HOVER, modifiers: SUBMENU_POPOVER_MODIFIERS, position: Position.RIGHT_TOP, usePortal: false }, popoverProps, { content: react.createElement(Menu, __assign({}, submenuProps), children), minimal: true, popoverClassName: classnames(MENU_SUBMENU, popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.popoverClassName), target: target })));
    };
    MenuItem.defaultProps = {
        active: false,
        disabled: false,
        multiline: false,
        popoverProps: {},
        selected: false,
        shouldDismissPopover: true,
        text: "",
    };
    MenuItem.displayName = "".concat(DISPLAYNAME_PREFIX, ".MenuItem");
    return MenuItem;
}(AbstractPureComponent2));
var SUBMENU_POPOVER_MODIFIERS = {
    // 20px padding - scrollbar width + a bit
    flip: { boundariesElement: "viewport", padding: 20 },
    // shift popover up 5px so MenuItems align
    offset: { offset: -5 },
    preventOverflow: { boundariesElement: "viewport", padding: 20 },
};
// props to ignore when disabled
var DISABLED_PROPS = {
    href: undefined,
    onClick: undefined,
    onMouseDown: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    tabIndex: -1,
};

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.tagName, tagName = _b === void 0 ? "div" : _b, htmlProps = __rest(_a, ["className", "tagName"]);
        var classes = classnames(DIVIDER, className);
        return react.createElement(tagName, __assign(__assign({}, htmlProps), { className: classes }));
    };
    Divider.displayName = "".concat(DISPLAYNAME_PREFIX, ".Divider");
    return Divider;
}(AbstractPureComponent2));

/* !
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A stateful wrapper around the low-level <input> component which works around a
 * [React bug](https://github.com/facebook/react/issues/3926). This bug is reproduced when an input
 * receives CompositionEvents (for example, through IME composition) and has its value prop updated
 * asychronously. This might happen if a component chooses to do async validation of a value
 * returned by the input's `onChange` callback.
 *
 * Note: this component does not apply any Blueprint-specific styling.
 */
var AsyncControllableInput = /** @class */ (function (_super) {
    __extends(AsyncControllableInput, _super);
    function AsyncControllableInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasPendingUpdate: false,
            isComposing: false,
            nextValue: _this.props.value,
            value: _this.props.value,
        };
        _this.cancelPendingCompositionEnd = null;
        _this.handleCompositionStart = function (e) {
            var _a, _b, _c;
            (_a = _this.cancelPendingCompositionEnd) === null || _a === void 0 ? void 0 : _a.call(_this);
            _this.setState({ isComposing: true });
            (_c = (_b = _this.props).onCompositionStart) === null || _c === void 0 ? void 0 : _c.call(_b, e);
        };
        _this.handleCompositionEnd = function (e) {
            var _a, _b;
            // In some non-latin languages, a keystroke can end a composition event and immediately afterwards start another.
            // This can lead to unexpected characters showing up in the text input. In order to circumvent this problem, we
            // use a timeout which creates a delay which merges the two composition events, creating a more natural and predictable UX.
            // `this.state.nextValue` will become "locked" (it cannot be overwritten by the `value` prop) until a delay (10ms) has
            // passed without a new composition event starting.
            _this.cancelPendingCompositionEnd = _this.setTimeout(function () { return _this.setState({ isComposing: false }); }, AsyncControllableInput.COMPOSITION_END_DELAY);
            (_b = (_a = _this.props).onCompositionEnd) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        _this.handleChange = function (e) {
            var _a, _b;
            var value = e.target.value;
            _this.setState({ nextValue: value });
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        return _this;
    }
    AsyncControllableInput.getDerivedStateFromProps = function (nextProps, nextState) {
        if (nextState.isComposing || nextProps.value === undefined) {
            // don't derive anything from props if:
            // - in uncontrolled mode, OR
            // - currently composing, since we'll do that after composition ends
            return null;
        }
        var userTriggeredUpdate = nextState.nextValue !== nextState.value;
        if (userTriggeredUpdate) {
            if (nextProps.value === nextState.nextValue) {
                // parent has processed and accepted our update
                if (nextState.hasPendingUpdate) {
                    return { value: nextProps.value, hasPendingUpdate: false };
                }
                else {
                    return { value: nextState.nextValue };
                }
            }
            else {
                if (nextProps.value === nextState.value) {
                    // we have sent the update to our parent, but it has not been processed yet. just wait.
                    // DO NOT set nextValue here, since that will temporarily render a potentially stale controlled value,
                    // causing the cursor to jump once the new value is accepted
                    return { hasPendingUpdate: true };
                }
                // accept controlled update overriding user action
                return { value: nextProps.value, nextValue: nextProps.value, hasPendingUpdate: false };
            }
        }
        else {
            // accept controlled update, could be confirming or denying user action
            return { value: nextProps.value, nextValue: nextProps.value, hasPendingUpdate: false };
        }
    };
    AsyncControllableInput.prototype.render = function () {
        var _a = this.state, isComposing = _a.isComposing, hasPendingUpdate = _a.hasPendingUpdate, value = _a.value, nextValue = _a.nextValue;
        var _b = this.props, inputRef = _b.inputRef, restProps = __rest(_b, ["inputRef"]);
        return (react.createElement("input", __assign({}, restProps, { ref: inputRef, 
            // render the pending value even if it is not confirmed by a parent's async controlled update
            // so that the cursor does not jump to the end of input as reported in
            // https://github.com/palantir/blueprint/issues/4298
            value: isComposing || hasPendingUpdate ? nextValue : value, onCompositionStart: this.handleCompositionStart, onCompositionEnd: this.handleCompositionEnd, onChange: this.handleChange })));
    };
    AsyncControllableInput.displayName = "".concat(DISPLAYNAME_PREFIX, ".AsyncControllableInput");
    /**
     * The amount of time (in milliseconds) which the input will wait after a compositionEnd event before
     * unlocking its state value for external updates via props. See `handleCompositionEnd` for more details.
     */
    AsyncControllableInput.COMPOSITION_END_DELAY = 10;
    return AsyncControllableInput;
}(AbstractPureComponent2));

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var InputGroup = /** @class */ (function (_super) {
    __extends(InputGroup, _super);
    function InputGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.leftElement = null;
        _this.rightElement = null;
        _this.refHandlers = {
            leftElement: function (ref) { return (_this.leftElement = ref); },
            rightElement: function (ref) { return (_this.rightElement = ref); },
        };
        return _this;
    }
    InputGroup.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.asyncControl, asyncControl = _c === void 0 ? false : _c, className = _b.className, disabled = _b.disabled, fill = _b.fill, inputRef = _b.inputRef, intent = _b.intent, large = _b.large, small = _b.small, round = _b.round;
        var inputGroupClasses = classnames(INPUT_GROUP, intentClass(intent), (_a = {},
            _a[DISABLED] = disabled,
            _a[FILL] = fill,
            _a[LARGE] = large,
            _a[SMALL] = small,
            _a[ROUND] = round,
            _a), className);
        var style = __assign(__assign({}, this.props.style), { paddingLeft: this.state.leftElementWidth, paddingRight: this.state.rightElementWidth });
        var inputProps = __assign(__assign({ type: "text" }, removeNonHTMLProps(this.props)), { className: INPUT, style: style });
        return (react.createElement("div", { className: inputGroupClasses },
            this.maybeRenderLeftElement(),
            asyncControl ? (react.createElement(AsyncControllableInput, __assign({}, inputProps, { inputRef: inputRef }))) : (react.createElement("input", __assign({}, inputProps, { ref: inputRef }))),
            this.maybeRenderRightElement()));
    };
    InputGroup.prototype.componentDidMount = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, leftElement = _a.leftElement, rightElement = _a.rightElement;
        if (prevProps.leftElement !== leftElement || prevProps.rightElement !== rightElement) {
            this.updateInputWidth();
        }
    };
    InputGroup.prototype.validateProps = function (props) {
        if (props.leftElement != null && props.leftIcon != null) {
            console.warn(INPUT_WARN_LEFT_ELEMENT_LEFT_ICON_MUTEX);
        }
    };
    InputGroup.prototype.maybeRenderLeftElement = function () {
        var _a = this.props, leftElement = _a.leftElement, leftIcon = _a.leftIcon;
        if (leftElement != null) {
            return (react.createElement("span", { className: INPUT_LEFT_CONTAINER, ref: this.refHandlers.leftElement }, leftElement));
        }
        else if (leftIcon != null) {
            return react.createElement(Icon, { icon: leftIcon, "aria-hidden": true, tabIndex: -1 });
        }
        return undefined;
    };
    InputGroup.prototype.maybeRenderRightElement = function () {
        var rightElement = this.props.rightElement;
        if (rightElement == null) {
            return undefined;
        }
        return (react.createElement("span", { className: INPUT_ACTION, ref: this.refHandlers.rightElement }, rightElement));
    };
    InputGroup.prototype.updateInputWidth = function () {
        var _a = this.state, leftElementWidth = _a.leftElementWidth, rightElementWidth = _a.rightElementWidth;
        if (this.leftElement != null) {
            var clientWidth = this.leftElement.clientWidth;
            // small threshold to prevent infinite loops
            if (leftElementWidth === undefined || Math.abs(clientWidth - leftElementWidth) > 2) {
                this.setState({ leftElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ leftElementWidth: undefined });
        }
        if (this.rightElement != null) {
            var clientWidth = this.rightElement.clientWidth;
            // small threshold to prevent infinite loops
            if (rightElementWidth === undefined || Math.abs(clientWidth - rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ rightElementWidth: undefined });
        }
    };
    InputGroup.displayName = "".concat(DISPLAYNAME_PREFIX, ".InputGroup");
    return InputGroup;
}(AbstractPureComponent2));

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var HTMLSelect = /** @class */ (function (_super) {
    __extends(HTMLSelect, _super);
    function HTMLSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLSelect.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, disabled = _b.disabled, elementRef = _b.elementRef, fill = _b.fill, iconProps = _b.iconProps, large = _b.large, minimal = _b.minimal, _c = _b.options, options = _c === void 0 ? [] : _c, htmlProps = __rest(_b, ["className", "disabled", "elementRef", "fill", "iconProps", "large", "minimal", "options"]);
        var classes = classnames(HTML_SELECT, (_a = {},
            _a[DISABLED] = disabled,
            _a[FILL] = fill,
            _a[LARGE] = large,
            _a[MINIMAL] = minimal,
            _a), className);
        var optionChildren = options.map(function (option) {
            var props = typeof option === "object" ? option : { value: option };
            return react.createElement("option", __assign({}, props, { key: props.value, children: props.label || props.value }));
        });
        return (react.createElement("div", { className: classes },
            react.createElement("select", __assign({ disabled: disabled, ref: elementRef, value: this.props.value }, htmlProps, { multiple: false }),
                optionChildren,
                htmlProps.children),
            react.createElement(Icon, __assign({ icon: "double-caret-vertical", title: "Open dropdown" }, iconProps))));
    };
    return HTMLSelect;
}(AbstractPureComponent2));

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var NS$1 = getClassNamespace();
var DATEINPUT = "".concat(NS$1, "-dateinput");
var DATEINPUT_POPOVER = "".concat(DATEINPUT, "-popover");
var DATEPICKER = "".concat(NS$1, "-datepicker");
var DATEPICKER_CAPTION = "".concat(DATEPICKER, "-caption");
var DATEPICKER_CAPTION_MEASURE = "".concat(DATEPICKER_CAPTION, "-measure");
var DATEPICKER_CONTENT = "".concat(DATEPICKER, "-content");
var DATEPICKER_DAY_WRAPPER = "".concat(DATEPICKER, "-day-wrapper");
var DATEPICKER_FOOTER = "".concat(DATEPICKER, "-footer");
var DATEPICKER_MONTH_SELECT = "".concat(DATEPICKER, "-month-select");
var DATEPICKER_YEAR_SELECT = "".concat(DATEPICKER, "-year-select");
var DATEPICKER_NAVBAR = "".concat(DATEPICKER, "-navbar");
var DATEPICKER_TIMEPICKER_WRAPPER = "".concat(DATEPICKER, "-timepicker-wrapper");
var DATERANGEPICKER = "".concat(NS$1, "-daterangepicker");
var DATERANGEPICKER_SHORTCUTS = "".concat(DATERANGEPICKER, "-shortcuts");
var TIMEPICKER = "".concat(NS$1, "-timepicker");
var TIMEPICKER_ARROW_BUTTON = "".concat(TIMEPICKER, "-arrow-button");
var TIMEPICKER_ARROW_ROW = "".concat(TIMEPICKER, "-arrow-row");
var TIMEPICKER_DIVIDER_TEXT = "".concat(TIMEPICKER, "-divider-text");
var TIMEPICKER_HOUR = "".concat(TIMEPICKER, "-hour");
var TIMEPICKER_INPUT = "".concat(TIMEPICKER, "-input");
var TIMEPICKER_INPUT_ROW = "".concat(TIMEPICKER, "-input-row");
var TIMEPICKER_MILLISECOND = "".concat(TIMEPICKER, "-millisecond");
var TIMEPICKER_MINUTE = "".concat(TIMEPICKER, "-minute");
var TIMEPICKER_SECOND = "".concat(TIMEPICKER, "-second");
var TIMEPICKER_AMPM_SELECT = "".concat(TIMEPICKER, "-ampm-select");

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Enumeration of calendar months.
 *
 * Note that the enum values are numbers (with January as `0`) so they can be
 * easily compared to `date.getMonth()`.
 */
var Months;
(function (Months) {
    Months[Months["JANUARY"] = 0] = "JANUARY";
    Months[Months["FEBRUARY"] = 1] = "FEBRUARY";
    Months[Months["MARCH"] = 2] = "MARCH";
    Months[Months["APRIL"] = 3] = "APRIL";
    Months[Months["MAY"] = 4] = "MAY";
    Months[Months["JUNE"] = 5] = "JUNE";
    Months[Months["JULY"] = 6] = "JULY";
    Months[Months["AUGUST"] = 7] = "AUGUST";
    Months[Months["SEPTEMBER"] = 8] = "SEPTEMBER";
    Months[Months["OCTOBER"] = 9] = "OCTOBER";
    Months[Months["NOVEMBER"] = 10] = "NOVEMBER";
    Months[Months["DECEMBER"] = 11] = "DECEMBER";
})(Months || (Months = {}));

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isDateValid(date) {
    return date instanceof Date && !isNaN(date.valueOf());
}
function areSameDay(date1, date2) {
    return areSameMonth(date1, date2) && date1.getDate() === date2.getDate();
}
function areSameMonth(date1, date2) {
    return (date1 != null &&
        date2 != null &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear());
}
function areSameTime(date1, date2) {
    return (date1 != null &&
        date2 != null &&
        date1.getHours() === date2.getHours() &&
        date1.getMinutes() === date2.getMinutes() &&
        date1.getSeconds() === date2.getSeconds() &&
        date1.getMilliseconds() === date2.getMilliseconds());
}
function clone(d) {
    return new Date(d.getTime());
}
function isDayInRange(date, dateRange, exclusive) {
    if (exclusive === void 0) { exclusive = false; }
    if (date == null) {
        return false;
    }
    var day = clone(date);
    var start = clone(dateRange[0]);
    var end = clone(dateRange[1]);
    day.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return start <= day && day <= end && (!exclusive || (!areSameDay(start, day) && !areSameDay(day, end)));
}
function isDayRangeInRange(innerRange, outerRange) {
    return ((innerRange[0] == null || isDayInRange(innerRange[0], outerRange)) &&
        (innerRange[1] == null || isDayInRange(innerRange[1], outerRange)));
}
function isMonthInRange(date, dateRange) {
    if (date == null) {
        return false;
    }
    var day = clone(date);
    var start = clone(dateRange[0]);
    var end = clone(dateRange[1]);
    day.setDate(1);
    start.setDate(1);
    end.setDate(1);
    day.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return start <= day && day <= end;
}
var isTimeEqualOrGreaterThan = function (time, timeToCompare) { return time.getTime() >= timeToCompare.getTime(); };
var isTimeEqualOrSmallerThan = function (time, timeToCompare) { return time.getTime() <= timeToCompare.getTime(); };
function isTimeInRange(date, minDate, maxDate) {
    var time = getDateOnlyWithTime(date);
    var minTime = getDateOnlyWithTime(minDate);
    var maxTime = getDateOnlyWithTime(maxDate);
    var isTimeGreaterThanMinTime = isTimeEqualOrGreaterThan(time, minTime);
    var isTimeSmallerThanMaxTime = isTimeEqualOrSmallerThan(time, maxTime);
    if (isTimeEqualOrSmallerThan(maxTime, minTime)) {
        return isTimeGreaterThanMinTime || isTimeSmallerThanMaxTime;
    }
    return isTimeGreaterThanMinTime && isTimeSmallerThanMaxTime;
}
function getTimeInRange(time, minTime, maxTime) {
    if (areSameTime(minTime, maxTime)) {
        return maxTime;
    }
    else if (isTimeInRange(time, minTime, maxTime)) {
        return time;
    }
    else if (isTimeSameOrAfter(time, maxTime)) {
        return maxTime;
    }
    return minTime;
}
/**
 * Returns true if the time part of `date` is later than or equal to the time
 * part of `dateToCompare`. The day, month, and year parts will not be compared.
 */
function isTimeSameOrAfter(date, dateToCompare) {
    var time = getDateOnlyWithTime(date);
    var timeToCompare = getDateOnlyWithTime(dateToCompare);
    return isTimeEqualOrGreaterThan(time, timeToCompare);
}
/**
 * @returns a Date at the exact time-wise midpoint between startDate and endDate
 */
function getDateBetween(dateRange) {
    var start = dateRange[0].getTime();
    var end = dateRange[1].getTime();
    var middle = start + (end - start) * 0.5;
    return new Date(middle);
}
function getDateTime(date, time) {
    if (date == null) {
        return null;
    }
    else if (time == null) {
        // cannot use default argument because `null` is a common value in this package.
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    }
    else {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());
    }
}
function getDateOnlyWithTime(date) {
    return new Date(0, 0, 0, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
function convert24HourMeridiem(hour, toPm) {
    if (hour < 0 || hour > 23) {
        throw new Error("hour must be between [0,23] inclusive: got ".concat(hour));
    }
    return toPm ? (hour % 12) + 12 : hour % 12;
}
function getIsPmFrom24Hour(hour) {
    if (hour < 0 || hour > 23) {
        throw new Error("hour must be between [0,23] inclusive: got ".concat(hour));
    }
    return hour >= 12;
}
function get12HourFrom24Hour(hour) {
    if (hour < 0 || hour > 23) {
        throw new Error("hour must be between [0,23] inclusive: got ".concat(hour));
    }
    var newHour = hour % 12;
    return newHour === 0 ? 12 : newHour;
}
function get24HourFrom12Hour(hour, isPm) {
    if (hour < 1 || hour > 12) {
        throw new Error("hour must be between [1,12] inclusive: got ".concat(hour));
    }
    var newHour = hour === 12 ? 0 : hour;
    return isPm ? newHour + 12 : newHour;
}
function isToday(date) {
    return areSameDay(date, new Date());
}

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
/** describes a component of time. `H:MM:SS.MS` */
var TimeUnit;
(function (TimeUnit) {
    // NOTE: string enum so we can use it in Record<> type at the end of this file, which requires string keys
    TimeUnit["HOUR_24"] = "hour24";
    TimeUnit["HOUR_12"] = "hour12";
    TimeUnit["MINUTE"] = "minute";
    TimeUnit["SECOND"] = "second";
    TimeUnit["MS"] = "ms";
})(TimeUnit || (TimeUnit = {}));
/** Gets a descriptive label representing the plural of the given time unit. */
function getTimeUnitPrintStr(unit) {
    var _a;
    var timeUnitToPrintstr = (_a = {},
        _a[TimeUnit.HOUR_24] = "hours (24hr clock)",
        _a[TimeUnit.HOUR_12] = "hours (12hr clock)",
        _a[TimeUnit.MINUTE] = "minutes",
        _a[TimeUnit.SECOND] = "seconds",
        _a[TimeUnit.MS] = "milliseconds",
        _a);
    return timeUnitToPrintstr[unit];
}
/** Returns the given time unit component of the date. */
function getTimeUnit(unit, date) {
    switch (unit) {
        case TimeUnit.HOUR_24:
            return date.getHours();
        case TimeUnit.HOUR_12:
            return get12HourFrom24Hour(date.getHours());
        case TimeUnit.MINUTE:
            return date.getMinutes();
        case TimeUnit.SECOND:
            return date.getSeconds();
        case TimeUnit.MS:
            return date.getMilliseconds();
        default:
            throw Error("Invalid TimeUnit");
    }
}
/** Sets the given time unit to the given time in date object. Modifies given `date` object and returns it. */
function setTimeUnit(unit, time, date, isPm) {
    switch (unit) {
        case TimeUnit.HOUR_24:
            date.setHours(time);
            break;
        case TimeUnit.HOUR_12:
            date.setHours(get24HourFrom12Hour(time, isPm));
            break;
        case TimeUnit.MINUTE:
            date.setMinutes(time);
            break;
        case TimeUnit.SECOND:
            date.setSeconds(time);
            break;
        case TimeUnit.MS:
            date.setMilliseconds(time);
            break;
        default:
            throw Error("Invalid TimeUnit");
    }
    return date;
}
/** Returns true if `time` is a valid value */
function isTimeUnitValid(unit, time) {
    return time != null && !isNaN(time) && getTimeUnitMin(unit) <= time && time <= getTimeUnitMax(unit);
}
/** If unit of time is greater than max, returns min. If less than min, returns max. Otherwise, returns time. */
function wrapTimeAtUnit(unit, time) {
    var max = getTimeUnitMax(unit);
    var min = getTimeUnitMin(unit);
    if (time > max) {
        return min;
    }
    else if (time < min) {
        return max;
    }
    return time;
}
function getTimeUnitClassName(unit) {
    return TimeUnitMetadata[unit].className;
}
function getTimeUnitMax(unit) {
    return TimeUnitMetadata[unit].max;
}
function getTimeUnitMin(unit) {
    return TimeUnitMetadata[unit].min;
}
function getDefaultMinTime() {
    return new Date(0, 0, 0, DEFAULT_MIN_HOUR, DEFAULT_MIN_MINUTE, DEFAULT_MIN_SECOND, DEFAULT_MIN_MILLISECOND);
}
function getDefaultMaxTime() {
    return new Date(0, 0, 0, DEFAULT_MAX_HOUR, DEFAULT_MAX_MINUTE, DEFAULT_MAX_SECOND, DEFAULT_MAX_MILLISECOND);
}
var DEFAULT_MIN_HOUR = 0;
var MERIDIEM_MIN_HOUR = 1;
var DEFAULT_MIN_MINUTE = 0;
var DEFAULT_MIN_SECOND = 0;
var DEFAULT_MIN_MILLISECOND = 0;
var DEFAULT_MAX_HOUR = 23;
var MERIDIEM_MAX_HOUR = 12;
var DEFAULT_MAX_MINUTE = 59;
var DEFAULT_MAX_SECOND = 59;
var DEFAULT_MAX_MILLISECOND = 999;
/**
 * A datastore (internal to this file) mapping TimeUnits to useful information about them.
 * Use the `get*` methods above to access these fields.
 */
var TimeUnitMetadata = (_a$1 = {},
    _a$1[TimeUnit.HOUR_24] = {
        className: TIMEPICKER_HOUR,
        max: DEFAULT_MAX_HOUR,
        min: DEFAULT_MIN_HOUR,
    },
    _a$1[TimeUnit.HOUR_12] = {
        className: TIMEPICKER_HOUR,
        max: MERIDIEM_MAX_HOUR,
        min: MERIDIEM_MIN_HOUR,
    },
    _a$1[TimeUnit.MINUTE] = {
        className: TIMEPICKER_MINUTE,
        max: DEFAULT_MAX_MINUTE,
        min: DEFAULT_MIN_MINUTE,
    },
    _a$1[TimeUnit.SECOND] = {
        className: TIMEPICKER_SECOND,
        max: DEFAULT_MAX_SECOND,
        min: DEFAULT_MIN_SECOND,
    },
    _a$1[TimeUnit.MS] = {
        className: TIMEPICKER_MILLISECOND,
        max: DEFAULT_MAX_MILLISECOND,
        min: DEFAULT_MIN_MILLISECOND,
    },
    _a$1);

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getFormattedDateString(date, props, ignoreRange) {
    if (ignoreRange === void 0) { ignoreRange = false; }
    if (date == null) {
        return "";
    }
    else if (!isDateValid(date)) {
        return props.invalidDateMessage;
    }
    else if (ignoreRange || isDayInRange(date, [props.minDate, props.maxDate])) {
        return props.formatDate(date, props.locale);
    }
    else {
        return props.outOfRangeMessage;
    }
}

var LocaleUtils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
var WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDay(day) {
  return day.toDateString();
}

function formatMonthTitle(d) {
  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths
};

});

var keys = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;
var ENTER = exports.ENTER = 13;
var SPACE = exports.SPACE = 32;
var ESC = exports.ESC = 27;
var TAB = exports.TAB = 9;

});

var Caption_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _LocaleUtils2 = _interopRequireDefault(LocaleUtils);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption(props) {
    _classCallCheck(this, Caption);

    var _this = _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(Caption, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.locale !== this.props.locale || nextProps.classNames !== this.props.classNames || nextProps.date.getMonth() !== this.props.date.getMonth() || nextProps.date.getFullYear() !== this.props.date.getFullYear();
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === keys.ENTER) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          date = _props.date,
          months = _props.months,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { className: classNames.caption, role: 'heading', 'aria-live': 'polite' },
        _react2.default.createElement(
          'div',
          { onClick: onClick, onKeyUp: this.handleKeyUp },
          months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
        )
      );
    }
  }]);

  return Caption;
}(react.Component);

Caption.defaultProps = {
  localeUtils: _LocaleUtils2.default
};
exports.default = Caption;

});

var classNames = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Proxy object to map classnames when css modules are not used

exports.default = {
  container: 'DayPicker',
  wrapper: 'DayPicker-wrapper',
  interactionDisabled: 'DayPicker--interactionDisabled',
  months: 'DayPicker-Months',
  month: 'DayPicker-Month',

  navBar: 'DayPicker-NavBar',
  navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
  navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
  navButtonInteractionDisabled: 'DayPicker-NavButton--interactionDisabled',

  caption: 'DayPicker-Caption',
  weekdays: 'DayPicker-Weekdays',
  weekdaysRow: 'DayPicker-WeekdaysRow',
  weekday: 'DayPicker-Weekday',
  body: 'DayPicker-Body',
  week: 'DayPicker-Week',
  weekNumber: 'DayPicker-WeekNumber',
  day: 'DayPicker-Day',
  footer: 'DayPicker-Footer',
  todayButton: 'DayPicker-TodayButton',

  // default modifiers
  today: 'today',
  selected: 'selected',
  disabled: 'disabled',
  outside: 'outside'
};

});

var Navbar_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _classNames2 = _interopRequireDefault(classNames);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== keys.ENTER && e.keyCode !== keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== keys.ENTER && e.keyCode !== keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          className = _props.className,
          showPreviousButton = _props.showPreviousButton,
          showNextButton = _props.showNextButton,
          labels = _props.labels,
          dir = _props.dir;


      var previousClickHandler = void 0;
      var nextClickHandler = void 0;
      var previousKeyDownHandler = void 0;
      var nextKeyDownHandler = void 0;
      var shouldShowPrevious = void 0;
      var shouldShowNext = void 0;

      if (dir === 'rtl') {
        previousClickHandler = this.handleNextClick;
        nextClickHandler = this.handlePreviousClick;
        previousKeyDownHandler = this.handleNextKeyDown;
        nextKeyDownHandler = this.handlePreviousKeyDown;
        shouldShowNext = showPreviousButton;
        shouldShowPrevious = showNextButton;
      } else {
        previousClickHandler = this.handlePreviousClick;
        nextClickHandler = this.handleNextClick;
        previousKeyDownHandler = this.handlePreviousKeyDown;
        nextKeyDownHandler = this.handleNextKeyDown;
        shouldShowNext = showNextButton;
        shouldShowPrevious = showPreviousButton;
      }

      var previousClassName = shouldShowPrevious ? classNames.navButtonPrev : classNames.navButtonPrev + ' ' + classNames.navButtonInteractionDisabled;

      var nextClassName = shouldShowNext ? classNames.navButtonNext : classNames.navButtonNext + ' ' + classNames.navButtonInteractionDisabled;

      var previousButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.previousMonth,
        key: 'previous',
        className: previousClassName,
        onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
        onClick: shouldShowPrevious ? previousClickHandler : undefined
      });

      var nextButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.nextMonth,
        key: 'right',
        className: nextClassName,
        onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
        onClick: shouldShowNext ? nextClickHandler : undefined
      });

      return _react2.default.createElement(
        'div',
        { className: className || classNames.navBar },
        dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
      );
    }
  }]);

  return Navbar;
}(react.Component);

Navbar.defaultProps = {
  classNames: _classNames2.default,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
exports.default = Navbar;

});

var Weekdays_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekdays = function (_Component) {
  _inherits(Weekdays, _Component);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
  }

  _createClass(Weekdays, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          firstDayOfWeek = _props.firstDayOfWeek,
          showWeekNumbers = _props.showWeekNumbers,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdayElement = _props.weekdayElement;

      var days = [];
      for (var i = 0; i < 7; i += 1) {
        var weekday = (i + firstDayOfWeek) % 7;
        var elementProps = {
          key: i,
          className: classNames.weekday,
          weekday: weekday,
          weekdaysLong: weekdaysLong,
          weekdaysShort: weekdaysShort,
          localeUtils: localeUtils,
          locale: locale
        };
        var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
        days.push(element);
      }

      return _react2.default.createElement(
        'div',
        { className: classNames.weekdays, role: 'rowgroup' },
        _react2.default.createElement(
          'div',
          { className: classNames.weekdaysRow, role: 'row' },
          showWeekNumbers && _react2.default.createElement('div', { className: classNames.weekday }),
          days
        )
      );
    }
  }]);

  return Weekdays;
}(react.Component);

exports.default = Weekdays;

});

var DateUtils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.isDate = isDate;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.isDayBefore = isDayBefore;
exports.isDayAfter = isDayAfter;
exports.isPastDay = isPastDay;
exports.isFutureDay = isFutureDay;
exports.isDayBetween = isDayBetween;
exports.addDayToRange = addDayToRange;
exports.isDayInRange = isDayInRange;
exports.getWeekNumber = getWeekNumber;
/**
 * Clone a date object.
 *
 * @export
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `true` if the passed value is a valid JavaScript Date object.
 *
 * @export
 * @param {any} value
 * @returns {Boolean}
 */
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * Return `d` as a new date with `n` months added.
 *
 * @export
 * @param {Date} d
 * @param {number} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if two dates fall in the same month.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameMonth(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Returns `true` if the first day is before the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayBefore(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

/**
 * Returns `true` if the first day is after the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayAfter(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 > day2;
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return isDayBefore(d, today);
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @export
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  date.setHours(0, 0, 0, 0);
  return isDayAfter(date, d1) && isDayBefore(date, d2) || isDayAfter(date, d2) && isDayBefore(date, d1);
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @export
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && isDayBefore(day, from)) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (isDayBefore(to, from)) {
      to = from;
      from = day;
    }
  }

  return { from: from, to: to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

/**
 * Return the year's week number (as per ISO, i.e. with the week starting from monday)
 * for the given day.
 *
 * @export
 * @param {Date} day
 * @returns {Number}
 */
function getWeekNumber(day) {
  var date = clone(day);
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  return Math.ceil(((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
}

exports.default = {
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  getWeekNumber: getWeekNumber,
  isDate: isDate,
  isDayAfter: isDayAfter,
  isDayBefore: isDayBefore,
  isDayBetween: isDayBetween,
  isDayInRange: isDayInRange,
  isFutureDay: isFutureDay,
  isPastDay: isPastDay,
  isSameDay: isSameDay,
  isSameMonth: isSameMonth
};

});

var Helpers = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cancelEvent = cancelEvent;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDaysInMonth = getDaysInMonth;
exports.getModifiersFromProps = getModifiersFromProps;
exports.getFirstDayOfWeekFromProps = getFirstDayOfWeekFromProps;
exports.isRangeOfDates = isRangeOfDates;
exports.getMonthsDiff = getMonthsDiff;
exports.getWeekArray = getWeekArray;
exports.startOfMonth = startOfMonth;
exports.getDayNodes = getDayNodes;
exports.nodeListToArray = nodeListToArray;
exports.hasOwnProp = hasOwnProp;







var _classNames2 = _interopRequireDefault(classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getModifiersFromProps(props) {
  var modifiers = _extends({}, props.modifiers);
  if (props.selectedDays) {
    modifiers[props.classNames.selected] = props.selectedDays;
  }
  if (props.disabledDays) {
    modifiers[props.classNames.disabled] = props.disabledDays;
  }
  return modifiers;
}

function getFirstDayOfWeekFromProps(props) {
  var firstDayOfWeek = props.firstDayOfWeek,
      _props$locale = props.locale,
      locale = _props$locale === undefined ? 'en' : _props$locale,
      _props$localeUtils = props.localeUtils,
      localeUtils = _props$localeUtils === undefined ? {} : _props$localeUtils;

  if (!isNaN(firstDayOfWeek)) {
    return firstDayOfWeek;
  }
  if (localeUtils.getFirstDayOfWeek) {
    return localeUtils.getFirstDayOfWeek(locale);
  }
  return 0;
}

function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}

function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
}

function getWeekArray(d) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, LocaleUtils.getFirstDayOfWeek)();
  var fixedWeeks = arguments[2];

  var daysInMonth = getDaysInMonth(d);
  var dayArray = [];

  var week = [];
  var weekArray = [];

  for (var i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  var firstWeek = weekArray[0];
  for (var _i = 7 - firstWeek.length; _i > 0; _i -= 1) {
    var outsideDate = (0, DateUtils.clone)(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2 += 1) {
    var _outsideDate = (0, DateUtils.clone)(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  // add extra weeks to reach 6 weeks
  if (fixedWeeks && weekArray.length < 6) {
    var lastExtraWeek = void 0;

    for (var _i3 = weekArray.length; _i3 < 6; _i3 += 1) {
      lastExtraWeek = weekArray[weekArray.length - 1];
      var lastDay = lastExtraWeek[lastExtraWeek.length - 1];
      var extraWeek = [];

      for (var j = 0; j < 7; j += 1) {
        var _outsideDate2 = (0, DateUtils.clone)(lastDay);
        _outsideDate2.setDate(lastDay.getDate() + j + 1);
        extraWeek.push(_outsideDate2);
      }

      weekArray.push(extraWeek);
    }
  }

  return weekArray;
}

function startOfMonth(d) {
  var newDate = (0, DateUtils.clone)(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}

function getDayNodes(node, classNames) {
  var outsideClassName = void 0;
  if (classNames === _classNames2.default) {
    // When using CSS modules prefix the modifier as required by the BEM syntax
    outsideClassName = classNames.day + '--' + classNames.outside;
  } else {
    outsideClassName = '' + classNames.outside;
  }
  var dayQuery = classNames.day.replace(/ /g, '.');
  var outsideDayQuery = outsideClassName.replace(/ /g, '.');
  var selector = '.' + dayQuery + ':not(.' + outsideDayQuery + ')';
  return node.querySelectorAll(selector);
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList, 0);
}

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

});

var Day_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);







var _classNames2 = _interopRequireDefault(classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var propNames = Object.keys(this.props);
      var nextPropNames = Object.keys(nextProps);
      if (propNames.length !== nextPropNames.length) {
        return true;
      }
      return propNames.some(function (name) {
        if (name === 'modifiers' || name === 'modifiersStyles' || name === 'classNames') {
          var prop = _this2.props[name];
          var nextProp = nextProps[name];
          var modifiers = Object.keys(prop);
          var nextModifiers = Object.keys(nextProp);
          if (modifiers.length !== nextModifiers.length) {
            return true;
          }
          return modifiers.some(function (mod) {
            return !(0, Helpers.hasOwnProp)(nextProp, mod) || prop[mod] !== nextProp[mod];
          });
        }
        if (name === 'day') {
          return !(0, DateUtils.isSameDay)(_this2.props[name], nextProps[name]);
        }
        return !(0, Helpers.hasOwnProp)(nextProps, name) || _this2.props[name] !== nextProps[name];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          modifiersStyles = _props.modifiersStyles,
          day = _props.day,
          tabIndex = _props.tabIndex,
          empty = _props.empty,
          modifiers = _props.modifiers,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onFocus = _props.onFocus,
          ariaLabel = _props.ariaLabel,
          ariaDisabled = _props.ariaDisabled,
          ariaSelected = _props.ariaSelected,
          children = _props.children;


      var className = classNames.day;
      if (classNames !== _classNames2.default) {
        // When using CSS modules prefix the modifier as required by the BEM syntax
        className += ' ' + Object.keys(modifiers).join(' ');
      } else {
        className += Object.keys(modifiers).map(function (modifier) {
          return ' ' + className + '--' + modifier;
        }).join('');
      }

      var style = void 0;
      if (modifiersStyles) {
        Object.keys(modifiers).filter(function (modifier) {
          return !!modifiersStyles[modifier];
        }).forEach(function (modifier) {
          style = _extends({}, style, modifiersStyles[modifier]);
        });
      }

      if (empty) {
        return _react2.default.createElement('div', { 'aria-disabled': true, className: className, style: style });
      }
      return _react2.default.createElement(
        'div',
        {
          className: className,
          tabIndex: tabIndex,
          style: style,
          role: 'gridcell',
          'aria-label': ariaLabel,
          'aria-disabled': ariaDisabled,
          'aria-selected': ariaSelected,
          onClick: handleEvent(onClick, day, modifiers),
          onKeyDown: handleEvent(onKeyDown, day, modifiers),
          onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
          onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
          onMouseUp: handleEvent(onMouseUp, day, modifiers),
          onMouseDown: handleEvent(onMouseDown, day, modifiers),
          onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
          onTouchStart: handleEvent(onTouchStart, day, modifiers),
          onFocus: handleEvent(onFocus, day, modifiers)
        },
        children
      );
    }
  }]);

  return Day;
}(react.Component);

Day.defaultProps = {
  tabIndex: -1
};
Day.defaultProps = {
  modifiers: {},
  modifiersStyles: {},
  empty: false
};
exports.default = Day;

});

var ModifiersUtils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayMatchesModifier = dayMatchesModifier;
exports.getModifiersForDay = getModifiersForDay;





/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function dayMatchesModifier(day, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function (mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return (0, DateUtils.isSameDay)(day, mod);
    }
    if ((0, Helpers.isRangeOfDates)(mod)) {
      return (0, DateUtils.isDayInRange)(day, mod);
    }
    if (mod.after && mod.before && (0, DateUtils.isDayAfter)(mod.before, mod.after)) {
      return (0, DateUtils.isDayAfter)(day, mod.after) && (0, DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after && mod.before && ((0, DateUtils.isDayAfter)(mod.after, mod.before) || (0, DateUtils.isSameDay)(mod.after, mod.before))) {
      return (0, DateUtils.isDayAfter)(day, mod.after) || (0, DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after) {
      return (0, DateUtils.isDayAfter)(day, mod.after);
    }
    if (mod.before) {
      return (0, DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return mod.daysOfWeek.some(function (dayOfWeek) {
        return day.getDay() === dayOfWeek;
      });
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

exports.default = { dayMatchesModifier: dayMatchesModifier, getModifiersForDay: getModifiersForDay };

});

var Month_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _Weekdays2 = _interopRequireDefault(Weekdays_1);



var _Day2 = _interopRequireDefault(Day_1);





var ModifiersUtils$1 = _interopRequireWildcard(ModifiersUtils);



var Helpers$1 = _interopRequireWildcard(Helpers);



var DateUtils$1 = _interopRequireWildcard(DateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.renderDay = function (day) {
      var monthNumber = _this.props.month.getMonth();
      var propModifiers = Helpers$1.getModifiersFromProps(_this.props);
      var dayModifiers = ModifiersUtils$1.getModifiersForDay(day, propModifiers);
      if (DateUtils$1.isSameDay(day, new Date()) && !Object.prototype.hasOwnProperty.call(propModifiers, _this.props.classNames.today)) {
        dayModifiers.push(_this.props.classNames.today);
      }
      if (day.getMonth() !== monthNumber) {
        dayModifiers.push(_this.props.classNames.outside);
      }

      var isOutside = day.getMonth() !== monthNumber;
      var tabIndex = -1;
      // Focus on the first day of the month
      if (_this.props.onDayClick && !isOutside && day.getDate() === 1) {
        tabIndex = _this.props.tabIndex; // eslint-disable-line prefer-destructuring
      }
      var key = '' + day.getFullYear() + day.getMonth() + day.getDate();
      var modifiers = {};
      dayModifiers.forEach(function (modifier) {
        modifiers[modifier] = true;
      });

      return _react2.default.createElement(
        _Day2.default,
        {
          key: '' + (isOutside ? 'outside-' : '') + key,
          classNames: _this.props.classNames,
          day: day,
          modifiers: modifiers,
          modifiersStyles: _this.props.modifiersStyles,
          empty: isOutside && !_this.props.showOutsideDays && !_this.props.fixedWeeks,
          tabIndex: tabIndex,
          ariaLabel: _this.props.localeUtils.formatDay(day, _this.props.locale),
          ariaDisabled: isOutside || dayModifiers.indexOf(_this.props.classNames.disabled) > -1,
          ariaSelected: dayModifiers.indexOf(_this.props.classNames.selected) > -1,
          onClick: _this.props.onDayClick,
          onFocus: _this.props.onDayFocus,
          onKeyDown: _this.props.onDayKeyDown,
          onMouseEnter: _this.props.onDayMouseEnter,
          onMouseLeave: _this.props.onDayMouseLeave,
          onMouseDown: _this.props.onDayMouseDown,
          onMouseUp: _this.props.onDayMouseUp,
          onTouchEnd: _this.props.onDayTouchEnd,
          onTouchStart: _this.props.onDayTouchStart
        },
        _this.props.renderDay(day, modifiers)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Month, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classNames = _props.classNames,
          month = _props.month,
          months = _props.months,
          fixedWeeks = _props.fixedWeeks,
          captionElement = _props.captionElement,
          weekdayElement = _props.weekdayElement,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          firstDayOfWeek = _props.firstDayOfWeek,
          onCaptionClick = _props.onCaptionClick,
          showWeekNumbers = _props.showWeekNumbers,
          showWeekDays = _props.showWeekDays,
          onWeekClick = _props.onWeekClick;


      var captionProps = {
        date: month,
        classNames: classNames,
        months: months,
        localeUtils: localeUtils,
        locale: locale,
        onClick: onCaptionClick ? function (e) {
          return onCaptionClick(month, e);
        } : undefined
      };
      var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

      var weeks = Helpers$1.getWeekArray(month, firstDayOfWeek, fixedWeeks);
      return _react2.default.createElement(
        'div',
        { className: classNames.month, role: 'grid' },
        caption,
        showWeekDays && _react2.default.createElement(_Weekdays2.default, {
          classNames: classNames,
          weekdaysShort: weekdaysShort,
          weekdaysLong: weekdaysLong,
          firstDayOfWeek: firstDayOfWeek,
          showWeekNumbers: showWeekNumbers,
          locale: locale,
          localeUtils: localeUtils,
          weekdayElement: weekdayElement
        }),
        _react2.default.createElement(
          'div',
          { className: classNames.body, role: 'rowgroup' },
          weeks.map(function (week) {
            var weekNumber = void 0;
            if (showWeekNumbers) {
              weekNumber = DateUtils$1.getWeekNumber(week[6]);
            }
            return _react2.default.createElement(
              'div',
              {
                key: week[0].getTime(),
                className: classNames.week,
                role: 'row'
              },
              showWeekNumbers && _react2.default.createElement(
                'div',
                {
                  className: classNames.weekNumber,
                  tabIndex: onWeekClick ? 0 : -1,
                  role: 'gridcell',
                  onClick: onWeekClick ? function (e) {
                    return onWeekClick(weekNumber, week, e);
                  } : undefined,
                  onKeyUp: onWeekClick ? function (e) {
                    return e.keyCode === keys.ENTER && onWeekClick(weekNumber, week, e);
                  } : undefined
                },
                _this2.props.renderWeek(weekNumber, week, month)
              ),
              week.map(_this2.renderDay)
            );
          })
        )
      );
    }
  }]);

  return Month;
}(react.Component);

exports.default = Month;

});

var Weekday_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekday = function (_Component) {
  _inherits(Weekday, _Component);

  function Weekday() {
    _classCallCheck(this, Weekday);

    return _possibleConstructorReturn(this, (Weekday.__proto__ || Object.getPrototypeOf(Weekday)).apply(this, arguments));
  }

  _createClass(Weekday, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          weekday = _props.weekday,
          className = _props.className,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          localeUtils = _props.localeUtils,
          locale = _props.locale;

      var title = void 0;
      if (weekdaysLong) {
        title = weekdaysLong[weekday];
      } else {
        title = localeUtils.formatWeekdayLong(weekday, locale);
      }
      var content = void 0;
      if (weekdaysShort) {
        content = weekdaysShort[weekday];
      } else {
        content = localeUtils.formatWeekdayShort(weekday, locale);
      }

      return _react2.default.createElement(
        'div',
        { className: className, role: 'columnheader' },
        _react2.default.createElement(
          'abbr',
          { title: title },
          content
        )
      );
    }
  }]);

  return Weekday;
}(react.Component);

exports.default = Weekday;

});

var DayPicker_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifiersUtils = exports.LocaleUtils = exports.DateUtils = exports.DayPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _Caption2 = _interopRequireDefault(Caption_1);



var _Navbar2 = _interopRequireDefault(Navbar_1);



var _Month2 = _interopRequireDefault(Month_1);



var _Weekday2 = _interopRequireDefault(Weekday_1);



var Helpers$1 = _interopRequireWildcard(Helpers);



var DateUtils$1 = _interopRequireWildcard(DateUtils);



var LocaleUtils$1 = _interopRequireWildcard(LocaleUtils);



var ModifiersUtils$1 = _interopRequireWildcard(ModifiersUtils);



var _classNames2 = _interopRequireDefault(classNames);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = exports.DayPicker = function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _this.dayPicker = null;

    _this.showNextMonth = function (callback) {
      if (!_this.allowNextMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var nextMonth = DateUtils$1.addMonths(_this.state.currentMonth, deltaMonths);
      _this.showMonth(nextMonth, callback);
    };

    _this.showPreviousMonth = function (callback) {
      if (!_this.allowPreviousMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var previousMonth = DateUtils$1.addMonths(_this.state.currentMonth, -deltaMonths);
      _this.showMonth(previousMonth, callback);
    };

    _this.handleKeyDown = function (e) {
      e.persist();

      switch (e.keyCode) {
        case keys.LEFT:
          if (_this.props.dir === 'rtl') {
            _this.showNextMonth();
          } else {
            _this.showPreviousMonth();
          }
          Helpers$1.cancelEvent(e);
          break;
        case keys.RIGHT:
          if (_this.props.dir === 'rtl') {
            _this.showPreviousMonth();
          } else {
            _this.showNextMonth();
          }
          Helpers$1.cancelEvent(e);
          break;
        case keys.UP:
          _this.showPreviousYear();
          Helpers$1.cancelEvent(e);
          break;
        case keys.DOWN:
          _this.showNextYear();
          Helpers$1.cancelEvent(e);
          break;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.handleDayKeyDown = function (day, modifiers, e) {
      e.persist();

      switch (e.keyCode) {
        case keys.LEFT:
          Helpers$1.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusNextDay(e.target);
          } else {
            _this.focusPreviousDay(e.target);
          }
          break;
        case keys.RIGHT:
          Helpers$1.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusPreviousDay(e.target);
          } else {
            _this.focusNextDay(e.target);
          }
          break;
        case keys.UP:
          Helpers$1.cancelEvent(e);
          _this.focusPreviousWeek(e.target);
          break;
        case keys.DOWN:
          Helpers$1.cancelEvent(e);
          _this.focusNextWeek(e.target);
          break;
        case keys.ENTER:
        case keys.SPACE:
          Helpers$1.cancelEvent(e);
          if (_this.props.onDayClick) {
            _this.handleDayClick(day, modifiers, e);
          }
          break;
      }
      if (_this.props.onDayKeyDown) {
        _this.props.onDayKeyDown(day, modifiers, e);
      }
    };

    _this.handleDayClick = function (day, modifiers, e) {
      e.persist();

      if (modifiers[_this.props.classNames.outside] && _this.props.enableOutsideDaysClick) {
        _this.handleOutsideDayClick(day);
      }
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, modifiers, e);
      }
    };

    _this.handleTodayButtonClick = function (e) {
      var today = new Date();
      var month = new Date(today.getFullYear(), today.getMonth());
      _this.showMonth(month);
      e.target.blur();
      if (_this.props.onTodayButtonClick) {
        e.persist();
        _this.props.onTodayButtonClick(new Date(today.getFullYear(), today.getMonth(), today.getDate()), ModifiersUtils$1.getModifiersForDay(today, _this.props.modifiers), e);
      }
    };

    var currentMonth = _this.getCurrentMonthFromProps(props);
    _this.state = { currentMonth: currentMonth };
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Changing the `month` props means changing the current displayed month
      if (prevProps.month !== this.props.month && !DateUtils$1.isSameMonth(prevProps.month, this.props.month)) {
        var currentMonth = this.getCurrentMonthFromProps(this.props);
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ currentMonth: currentMonth });
      }
    }
  }, {
    key: 'getCurrentMonthFromProps',


    /**
     * Return the month to be shown in the calendar based on the component props.
     *
     * @param {Object} props
     * @returns Date
     * @memberof DayPicker
     * @private
     */
    value: function getCurrentMonthFromProps(props) {
      var initialMonth = Helpers$1.startOfMonth(props.month || props.initialMonth || new Date());
      var currentMonth = initialMonth;

      if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
        var fromMonth = Helpers$1.startOfMonth(props.fromMonth);
        var diffInMonths = Helpers$1.getMonthsDiff(fromMonth, currentMonth);
        currentMonth = DateUtils$1.addMonths(fromMonth, Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths);
      } else if (props.toMonth && props.numberOfMonths > 1 && Helpers$1.getMonthsDiff(currentMonth, props.toMonth) <= 0) {
        currentMonth = DateUtils$1.addMonths(Helpers$1.startOfMonth(props.toMonth), 1 - this.props.numberOfMonths);
      }
      return currentMonth;
    }
  }, {
    key: 'getNextNavigableMonth',
    value: function getNextNavigableMonth() {
      return DateUtils$1.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    }
  }, {
    key: 'getPreviousNavigableMonth',
    value: function getPreviousNavigableMonth() {
      return DateUtils$1.addMonths(this.state.currentMonth, -1);
    }
  }, {
    key: 'allowPreviousMonth',
    value: function allowPreviousMonth() {
      var previousMonth = DateUtils$1.addMonths(this.state.currentMonth, -1);
      return this.allowMonth(previousMonth);
    }
  }, {
    key: 'allowNextMonth',
    value: function allowNextMonth() {
      var nextMonth = DateUtils$1.addMonths(this.state.currentMonth, this.props.numberOfMonths);
      return this.allowMonth(nextMonth);
    }
  }, {
    key: 'allowMonth',
    value: function allowMonth(d) {
      var _props = this.props,
          fromMonth = _props.fromMonth,
          toMonth = _props.toMonth,
          canChangeMonth = _props.canChangeMonth;

      if (!canChangeMonth || fromMonth && Helpers$1.getMonthsDiff(fromMonth, d) < 0 || toMonth && Helpers$1.getMonthsDiff(toMonth, d) > 0) {
        return false;
      }
      return true;
    }
  }, {
    key: 'allowYearChange',
    value: function allowYearChange() {
      return this.props.canChangeMonth;
    }
  }, {
    key: 'showMonth',
    value: function showMonth(d, callback) {
      var _this2 = this;

      if (!this.allowMonth(d)) {
        return;
      }
      this.setState({ currentMonth: Helpers$1.startOfMonth(d) }, function () {
        if (callback) {
          callback();
        }
        if (_this2.props.onMonthChange) {
          _this2.props.onMonthChange(_this2.state.currentMonth);
        }
      });
    }
  }, {
    key: 'showNextYear',
    value: function showNextYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils$1.addMonths(this.state.currentMonth, 12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'showPreviousYear',
    value: function showPreviousYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils$1.addMonths(this.state.currentMonth, -12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.wrapper.focus();
    }
  }, {
    key: 'focusFirstDayOfMonth',
    value: function focusFirstDayOfMonth() {
      Helpers$1.getDayNodes(this.dayPicker, this.props.classNames)[0].focus();
    }
  }, {
    key: 'focusLastDayOfMonth',
    value: function focusLastDayOfMonth() {
      var dayNodes = Helpers$1.getDayNodes(this.dayPicker, this.props.classNames);
      dayNodes[dayNodes.length - 1].focus();
    }
  }, {
    key: 'focusPreviousDay',
    value: function focusPreviousDay(dayNode) {
      var _this3 = this;

      var dayNodes = Helpers$1.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers$1.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === 0) {
        this.showPreviousMonth(function () {
          return _this3.focusLastDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex - 1].focus();
      }
    }
  }, {
    key: 'focusNextDay',
    value: function focusNextDay(dayNode) {
      var _this4 = this;

      var dayNodes = Helpers$1.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers$1.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === dayNodes.length - 1) {
        this.showNextMonth(function () {
          return _this4.focusFirstDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex + 1].focus();
      }
    }
  }, {
    key: 'focusNextWeek',
    value: function focusNextWeek(dayNode) {
      var _this5 = this;

      var dayNodes = Helpers$1.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers$1.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

      if (isInLastWeekOfMonth) {
        this.showNextMonth(function () {
          var daysAfterIndex = dayNodes.length - dayNodeIndex;
          var nextMonthDayNodeIndex = 7 - daysAfterIndex;
          Helpers$1.getDayNodes(_this5.dayPicker, _this5.props.classNames)[nextMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex + 7].focus();
      }
    }
  }, {
    key: 'focusPreviousWeek',
    value: function focusPreviousWeek(dayNode) {
      var _this6 = this;

      var dayNodes = Helpers$1.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers$1.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInFirstWeekOfMonth = dayNodeIndex <= 6;

      if (isInFirstWeekOfMonth) {
        this.showPreviousMonth(function () {
          var previousMonthDayNodes = Helpers$1.getDayNodes(_this6.dayPicker, _this6.props.classNames);
          var startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
          var previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
          previousMonthDayNodes[previousMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex - 7].focus();
      }
    }

    // Event handlers

  }, {
    key: 'handleOutsideDayClick',
    value: function handleOutsideDayClick(day) {
      var currentMonth = this.state.currentMonth;
      var numberOfMonths = this.props.numberOfMonths;

      var diffInMonths = Helpers$1.getMonthsDiff(currentMonth, day);
      if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
        this.showNextMonth();
      } else if (diffInMonths < 0) {
        this.showPreviousMonth();
      }
    }
  }, {
    key: 'renderNavbar',
    value: function renderNavbar() {
      var _props2 = this.props,
          labels = _props2.labels,
          locale = _props2.locale,
          localeUtils = _props2.localeUtils,
          canChangeMonth = _props2.canChangeMonth,
          navbarElement = _props2.navbarElement,
          attributes = _objectWithoutProperties(_props2, ['labels', 'locale', 'localeUtils', 'canChangeMonth', 'navbarElement']);

      if (!canChangeMonth) return null;

      var props = {
        month: this.state.currentMonth,
        classNames: this.props.classNames,
        className: this.props.classNames.navBar,
        nextMonth: this.getNextNavigableMonth(),
        previousMonth: this.getPreviousNavigableMonth(),
        showPreviousButton: this.allowPreviousMonth(),
        showNextButton: this.allowNextMonth(),
        onNextClick: this.showNextMonth,
        onPreviousClick: this.showPreviousMonth,
        dir: attributes.dir,
        labels: labels,
        locale: locale,
        localeUtils: localeUtils
      };
      return _react2.default.isValidElement(navbarElement) ? _react2.default.cloneElement(navbarElement, props) : _react2.default.createElement(navbarElement, props);
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var months = [];
      var firstDayOfWeek = Helpers$1.getFirstDayOfWeekFromProps(this.props);
      for (var i = 0; i < this.props.numberOfMonths; i += 1) {
        var month = DateUtils$1.addMonths(this.state.currentMonth, i);
        months.push(_react2.default.createElement(_Month2.default, _extends({
          key: i
        }, this.props, {
          month: month,
          firstDayOfWeek: firstDayOfWeek,
          onDayKeyDown: this.handleDayKeyDown,
          onDayClick: this.handleDayClick
        })));
      }

      if (this.props.reverseMonths) {
        months.reverse();
      }
      return months;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      if (this.props.todayButton) {
        return _react2.default.createElement(
          'div',
          { className: this.props.classNames.footer },
          this.renderTodayButton()
        );
      }
      return null;
    }
  }, {
    key: 'renderTodayButton',
    value: function renderTodayButton() {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          tabIndex: 0,
          className: this.props.classNames.todayButton,
          'aria-label': this.props.todayButton,
          onClick: this.handleTodayButtonClick
        },
        this.props.todayButton
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var className = this.props.classNames.container;

      if (!this.props.onDayClick) {
        className = className + ' ' + this.props.classNames.interactionDisabled;
      }
      if (this.props.className) {
        className = className + ' ' + this.props.className;
      }
      return _react2.default.createElement(
        'div',
        _extends({}, this.props.containerProps, {
          className: className,
          ref: function ref(el) {
            return _this7.dayPicker = el;
          },
          lang: this.props.locale
        }),
        _react2.default.createElement(
          'div',
          {
            className: this.props.classNames.wrapper,
            ref: function ref(el) {
              return _this7.wrapper = el;
            },
            tabIndex: this.props.canChangeMonth && typeof this.props.tabIndex !== 'undefined' ? this.props.tabIndex : -1,
            onKeyDown: this.handleKeyDown,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur
          },
          this.renderNavbar(),
          _react2.default.createElement(
            'div',
            { className: this.props.classNames.months },
            this.renderMonths()
          ),
          this.renderFooter()
        )
      );
    }
  }]);

  return DayPicker;
}(react.Component);

DayPicker.defaultProps = {
  classNames: _classNames2.default,
  tabIndex: 0,
  numberOfMonths: 1,
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  locale: 'en',
  localeUtils: LocaleUtils$1,
  showOutsideDays: false,
  enableOutsideDaysClick: true,
  fixedWeeks: false,
  canChangeMonth: true,
  reverseMonths: false,
  pagedNavigation: false,
  showWeekNumbers: false,
  showWeekDays: true,
  renderDay: function renderDay(day) {
    return day.getDate();
  },
  renderWeek: function renderWeek(weekNumber) {
    return weekNumber;
  },
  weekdayElement: _react2.default.createElement(_Weekday2.default, null),
  navbarElement: _react2.default.createElement(_Navbar2.default, { classNames: _classNames2.default }),
  captionElement: _react2.default.createElement(_Caption2.default, { classNames: _classNames2.default })
};
DayPicker.VERSION = '7.4.8';


DayPicker.DateUtils = DateUtils$1;
DayPicker.LocaleUtils = LocaleUtils$1;
DayPicker.ModifiersUtils = ModifiersUtils$1;

exports.DateUtils = DateUtils$1;
exports.LocaleUtils = LocaleUtils$1;
exports.ModifiersUtils = ModifiersUtils$1;
exports.default = DayPicker;

});

var build$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DayPicker_1).default;
  }
});



Object.defineProperty(exports, 'DateUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(DateUtils).default;
  }
});



Object.defineProperty(exports, 'LocaleUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(LocaleUtils).default;
  }
});



Object.defineProperty(exports, 'ModifiersUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(ModifiersUtils).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

});

var DayPicker = /*@__PURE__*/getDefaultExportFromCjs(build$2);

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ns$1 = "[Blueprint]";
var DATEPICKER_DEFAULT_VALUE_INVALID = ns$1 + " <DatePicker> defaultValue must be within minDate and maxDate bounds.";
var DATEPICKER_INITIAL_MONTH_INVALID = ns$1 + " <DatePicker> initialMonth must be within minDate and maxDate bounds.";
var DATEPICKER_MAX_DATE_INVALID = ns$1 + " <DatePicker> maxDate must be later than minDate.";
var DATEPICKER_VALUE_INVALID = ns$1 + " <DatePicker> value prop must be within minDate and maxDate bounds.";
var DATERANGEPICKER_DEFAULT_VALUE_INVALID = DATEPICKER_DEFAULT_VALUE_INVALID.replace("DatePicker", "DateRangePicker");
var DATERANGEPICKER_INITIAL_MONTH_INVALID = DATEPICKER_INITIAL_MONTH_INVALID.replace("DatePicker", "DateRangePicker");
var DATERANGEPICKER_MAX_DATE_INVALID = DATEPICKER_MAX_DATE_INVALID.replace("DatePicker", "DateRangePicker");
var DATERANGEPICKER_VALUE_INVALID = DATEPICKER_VALUE_INVALID.replace("DatePicker", "DateRangePicker");

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Measure width in pixels of a string displayed with styles provided by `className`.
 * Should only be used if measuring can't be done with existing DOM elements.
 */
function measureTextWidth(text, className, containerElement) {
    if (className === void 0) { className = ""; }
    if (containerElement === void 0) { containerElement = document.body; }
    if (containerElement == null) {
        return 0;
    }
    var span = document.createElement("span");
    span.classList.add(className);
    span.textContent = text;
    containerElement.appendChild(span);
    var spanWidth = span.offsetWidth;
    span.remove();
    return spanWidth;
}
function padWithZeroes(str, minLength) {
    if (str.length < minLength) {
        return "".concat(stringRepeat("0", minLength - str.length)).concat(str);
    }
    else {
        return str;
    }
}
function stringRepeat(str, numTimes) {
    return new Array(numTimes + 1).join(str);
}

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DatePickerCaption = /** @class */ (function (_super) {
    __extends(DatePickerCaption, _super);
    function DatePickerCaption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { monthRightOffset: 0 };
        _this.handleMonthSelectChange = _this.dateChangeHandler(function (d, month) { return d.setMonth(month); }, _this.props.onMonthChange);
        _this.handleYearSelectChange = _this.dateChangeHandler(function (d, year) { return d.setFullYear(year); }, _this.props.onYearChange);
        return _this;
    }
    DatePickerCaption.prototype.render = function () {
        var _this = this;
        var _a = this.props, date = _a.date, locale = _a.locale, localeUtils = _a.localeUtils, minDate = _a.minDate, maxDate = _a.maxDate, _b = _a.months, months = _b === void 0 ? localeUtils.getMonths(locale) : _b;
        var minYear = minDate.getFullYear();
        var maxYear = maxDate.getFullYear();
        var displayMonth = date.getMonth();
        var displayYear = date.getFullYear();
        // build the list of available months, limiting based on minDate and maxDate as necessary
        var startMonth = displayYear === minYear ? minDate.getMonth() : 0;
        var endMonth = displayYear === maxYear ? maxDate.getMonth() + 1 : undefined;
        var monthOptionElements = months
            .map(function (month, i) { return ({ label: month, value: i }); })
            .slice(startMonth, endMonth);
        var years = [minYear];
        for (var year = minYear + 1; year <= maxYear; ++year) {
            years.push(year);
        }
        // allow out-of-bounds years but disable the option. this handles the Dec 2016 case in #391.
        if (displayYear > maxYear) {
            years.push({ value: displayYear, disabled: true });
        }
        this.displayedMonthText = months[displayMonth];
        var monthSelect = (react.createElement(HTMLSelect, { "aria-label": "Month", iconProps: { style: { right: this.state.monthRightOffset } }, className: DATEPICKER_MONTH_SELECT, key: "month", minimal: true, onChange: this.handleMonthSelectChange, value: displayMonth, options: monthOptionElements }));
        var yearSelect = (react.createElement(HTMLSelect, { "aria-label": "Year", className: DATEPICKER_YEAR_SELECT, key: "year", minimal: true, onChange: this.handleYearSelectChange, value: displayYear, options: years }));
        var orderedSelects = this.props.reverseMonthAndYearMenus
            ? [yearSelect, monthSelect]
            : [monthSelect, yearSelect];
        return (react.createElement("div", { className: this.props.classNames.caption },
            react.createElement("div", { className: DATEPICKER_CAPTION, ref: function (ref) { return (_this.containerElement = ref); } }, orderedSelects),
            react.createElement(Divider, null)));
    };
    DatePickerCaption.prototype.componentDidMount = function () {
        var _this = this;
        this.requestAnimationFrame(function () { return _this.positionArrows(); });
    };
    DatePickerCaption.prototype.componentDidUpdate = function () {
        this.positionArrows();
    };
    DatePickerCaption.prototype.positionArrows = function () {
        // measure width of text as rendered inside our container element.
        var monthTextWidth = measureTextWidth(this.displayedMonthText, DATEPICKER_CAPTION_MEASURE, this.containerElement);
        var monthSelectWidth = this.containerElement == null ? 0 : this.containerElement.firstElementChild.clientWidth;
        var rightOffset = Math.max(2, monthSelectWidth - monthTextWidth - IconSize.STANDARD - 2);
        this.setState({ monthRightOffset: rightOffset });
    };
    DatePickerCaption.prototype.dateChangeHandler = function (updater, handler) {
        var _this = this;
        return function (e) {
            var _a, _b;
            var value = parseInt(e.target.value, 10);
            // ignore change events with invalid values to prevent crash on iOS Safari (#4178)
            if (isNaN(value)) {
                return;
            }
            var newDate = clone(_this.props.date);
            updater(newDate, value);
            (_b = (_a = _this.props).onDateChange) === null || _b === void 0 ? void 0 : _b.call(_a, newDate);
            handler === null || handler === void 0 ? void 0 : handler(value);
        };
    };
    return DatePickerCaption;
}(AbstractPureComponent2));

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getDefaultMaxDate() {
    var date = new Date();
    date.setMonth(date.getMonth() + 6);
    return date;
}
function getDefaultMinDate() {
    var date = new Date();
    date.setFullYear(date.getFullYear() - 20);
    date.setMonth(Months.JANUARY, 1);
    return date;
}

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DatePickerNavbar = /** @class */ (function (_super) {
    __extends(DatePickerNavbar, _super);
    function DatePickerNavbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleNextClick = function () { return _this.props.onNextClick(); };
        _this.handlePreviousClick = function () { return _this.props.onPreviousClick(); };
        return _this;
    }
    DatePickerNavbar.prototype.render = function () {
        var _a = this.props, classes = _a.classNames, month = _a.month, maxDate = _a.maxDate, minDate = _a.minDate;
        return (react.createElement("div", { className: classnames(DATEPICKER_NAVBAR, classes.navBar) },
            this.props.hideLeftNavButton || (react.createElement(Button, { "aria-label": "Go to previous month", className: classes.navButtonPrev, disabled: areSameMonth(month, minDate), icon: "chevron-left", minimal: true, onClick: this.handlePreviousClick })),
            this.props.hideRightNavButton || (react.createElement(Button, { "aria-label": "Go to next month", className: classes.navButtonNext, disabled: areSameMonth(month, maxDate), icon: "chevron-right", minimal: true, onClick: this.handleNextClick }))));
    };
    return DatePickerNavbar;
}(react.PureComponent));

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Shortcuts = /** @class */ (function (_super) {
    __extends(Shortcuts, _super);
    function Shortcuts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getShorcutClickHandler = function (shortcut, index) { return function () {
            var onShortcutClick = _this.props.onShortcutClick;
            onShortcutClick(shortcut, index);
        }; };
        _this.isShortcutInRange = function (shortcutDateRange) {
            var _a = _this.props, minDate = _a.minDate, maxDate = _a.maxDate;
            return isDayRangeInRange(shortcutDateRange, [minDate, maxDate]);
        };
        return _this;
    }
    Shortcuts.prototype.render = function () {
        var _this = this;
        var shortcuts = this.props.shortcuts === true
            ? createDefaultShortcuts(this.props.allowSingleDayRange, this.props.timePrecision !== undefined, this.props.useSingleDateShortcuts === true)
            : this.props.shortcuts;
        var shortcutElements = shortcuts.map(function (shortcut, index) { return (
        // ok to use this here because it doesn't have a submenu
        // eslint-disable-next-line deprecation/deprecation, @blueprintjs/no-deprecated-components
        react.createElement(MenuItem, { active: _this.props.selectedShortcutIndex === index, disabled: !_this.isShortcutInRange(shortcut.dateRange), key: index, onClick: _this.getShorcutClickHandler(shortcut, index), shouldDismissPopover: false, text: shortcut.label })); });
        return (react.createElement(Menu, { "aria-label": "Date picker shortcuts", className: DATERANGEPICKER_SHORTCUTS, tabIndex: 0 }, shortcutElements));
    };
    Shortcuts.defaultProps = {
        selectedShortcutIndex: -1,
    };
    return Shortcuts;
}(react.PureComponent));
function createShortcut(label, dateRange) {
    return { dateRange: dateRange, label: label };
}
function createDefaultShortcuts(allowSingleDayRange, hasTimePrecision, useSingleDateShortcuts) {
    var today = new Date();
    var makeDate = function (action) {
        var returnVal = clone(today);
        action(returnVal);
        returnVal.setDate(returnVal.getDate() + 1);
        return returnVal;
    };
    var tomorrow = makeDate(function () { return null; });
    var yesterday = makeDate(function (d) { return d.setDate(d.getDate() - 2); });
    var oneWeekAgo = makeDate(function (d) { return d.setDate(d.getDate() - 7); });
    var oneMonthAgo = makeDate(function (d) { return d.setMonth(d.getMonth() - 1); });
    var threeMonthsAgo = makeDate(function (d) { return d.setMonth(d.getMonth() - 3); });
    var sixMonthsAgo = makeDate(function (d) { return d.setMonth(d.getMonth() - 6); });
    var oneYearAgo = makeDate(function (d) { return d.setFullYear(d.getFullYear() - 1); });
    var twoYearsAgo = makeDate(function (d) { return d.setFullYear(d.getFullYear() - 2); });
    var singleDayShortcuts = allowSingleDayRange || useSingleDateShortcuts
        ? [
            createShortcut("Today", [today, hasTimePrecision ? tomorrow : today]),
            createShortcut("Yesterday", [yesterday, hasTimePrecision ? today : yesterday]),
        ]
        : [];
    return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], singleDayShortcuts, true), [
        createShortcut(useSingleDateShortcuts ? "1 week ago" : "Past week", [oneWeekAgo, today]),
        createShortcut(useSingleDateShortcuts ? "1 month ago" : "Past month", [oneMonthAgo, today]),
        createShortcut(useSingleDateShortcuts ? "3 months ago" : "Past 3 months", [threeMonthsAgo, today])
    ], false), (useSingleDateShortcuts ? [] : [createShortcut("Past 6 months", [sixMonthsAgo, today])]), true), [
        createShortcut(useSingleDateShortcuts ? "1 year ago" : "Past year", [oneYearAgo, today])
    ], false), (useSingleDateShortcuts ? [] : [createShortcut("Past 2 years", [twoYearsAgo, today])]), true);
}

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TimePrecision = {
    MILLISECOND: "millisecond",
    MINUTE: "minute",
    SECOND: "second",
};
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker(props, context) {
        var _a;
        var _this = _super.call(this, props, context) || this;
        _this.timeInputIds = (_a = {},
            _a[TimeUnit.HOUR_24] = uniqueId(TimeUnit.HOUR_24 + "-input"),
            _a[TimeUnit.HOUR_12] = uniqueId(TimeUnit.HOUR_12 + "-input"),
            _a[TimeUnit.MINUTE] = uniqueId(TimeUnit.MINUTE + "-input"),
            _a[TimeUnit.SECOND] = uniqueId(TimeUnit.SECOND + "-input"),
            _a[TimeUnit.MS] = uniqueId(TimeUnit.MS + "-input"),
            _a);
        // begin method definitions: event handlers
        _this.getInputChangeHandler = function (unit) { return function (e) {
            var text = getStringValueFromInputEvent(e);
            switch (unit) {
                case TimeUnit.HOUR_12:
                case TimeUnit.HOUR_24:
                    _this.setState({ hourText: text });
                    break;
                case TimeUnit.MINUTE:
                    _this.setState({ minuteText: text });
                    break;
                case TimeUnit.SECOND:
                    _this.setState({ secondText: text });
                    break;
                case TimeUnit.MS:
                    _this.setState({ millisecondText: text });
                    break;
            }
        }; };
        _this.getInputBlurHandler = function (unit) { return function (e) {
            var _a, _b;
            var text = getStringValueFromInputEvent(e);
            _this.updateTime(parseInt(text, 10), unit);
            (_b = (_a = _this.props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, e, unit);
        }; };
        _this.getInputFocusHandler = function (unit) { return function (e) {
            var _a, _b;
            if (_this.props.selectAllOnFocus) {
                e.currentTarget.select();
            }
            (_b = (_a = _this.props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, e, unit);
        }; };
        _this.getInputKeyDownHandler = function (unit) { return function (e) {
            var _a;
            var _b, _c;
            handleKeyEvent(e, (_a = {},
                _a[ARROW_UP] = function () { return _this.incrementTime(unit); },
                _a[ARROW_DOWN] = function () { return _this.decrementTime(unit); },
                _a[ENTER] = function () {
                    e.currentTarget.blur();
                },
                _a));
            (_c = (_b = _this.props).onKeyDown) === null || _c === void 0 ? void 0 : _c.call(_b, e, unit);
        }; };
        _this.getInputKeyUpHandler = function (unit) { return function (e) {
            var _a, _b;
            (_b = (_a = _this.props).onKeyUp) === null || _b === void 0 ? void 0 : _b.call(_a, e, unit);
        }; };
        _this.handleAmPmChange = function (e) {
            var isNextPm = e.currentTarget.value === "pm";
            if (isNextPm !== _this.state.isPm) {
                var hour_1 = convert24HourMeridiem(_this.state.value.getHours(), isNextPm);
                _this.setState({ isPm: isNextPm }, function () { return _this.updateTime(hour_1, TimeUnit.HOUR_24); });
            }
        };
        _this.incrementTime = function (unit) { return _this.shiftTime(unit, 1); };
        _this.decrementTime = function (unit) { return _this.shiftTime(unit, -1); };
        _this.state = _this.getFullStateFromValue(_this.getInitialValue(), props.useAmPm);
        return _this;
    }
    TimePicker.prototype.render = function () {
        var _a;
        var shouldRenderMilliseconds = this.props.precision === TimePrecision.MILLISECOND;
        var shouldRenderSeconds = shouldRenderMilliseconds || this.props.precision === TimePrecision.SECOND;
        var hourUnit = this.props.useAmPm ? TimeUnit.HOUR_12 : TimeUnit.HOUR_24;
        var classes = classnames(TIMEPICKER, this.props.className, (_a = {},
            _a[DISABLED] = this.props.disabled,
            _a));
        return (react.createElement("div", { className: classes },
            react.createElement("div", { className: TIMEPICKER_ARROW_ROW },
                this.maybeRenderArrowButton(true, hourUnit),
                this.maybeRenderArrowButton(true, TimeUnit.MINUTE),
                shouldRenderSeconds && this.maybeRenderArrowButton(true, TimeUnit.SECOND),
                shouldRenderMilliseconds && this.maybeRenderArrowButton(true, TimeUnit.MS)),
            react.createElement("div", { className: TIMEPICKER_INPUT_ROW },
                this.renderInput(TIMEPICKER_HOUR, hourUnit, this.state.hourText),
                this.renderDivider(),
                this.renderInput(TIMEPICKER_MINUTE, TimeUnit.MINUTE, this.state.minuteText),
                shouldRenderSeconds && this.renderDivider(),
                shouldRenderSeconds &&
                    this.renderInput(TIMEPICKER_SECOND, TimeUnit.SECOND, this.state.secondText),
                shouldRenderMilliseconds && this.renderDivider("."),
                shouldRenderMilliseconds &&
                    this.renderInput(TIMEPICKER_MILLISECOND, TimeUnit.MS, this.state.millisecondText)),
            this.maybeRenderAmPm(),
            react.createElement("div", { className: TIMEPICKER_ARROW_ROW },
                this.maybeRenderArrowButton(false, hourUnit),
                this.maybeRenderArrowButton(false, TimeUnit.MINUTE),
                shouldRenderSeconds && this.maybeRenderArrowButton(false, TimeUnit.SECOND),
                shouldRenderMilliseconds && this.maybeRenderArrowButton(false, TimeUnit.MS))));
    };
    TimePicker.prototype.componentDidUpdate = function (prevProps) {
        var didMinTimeChange = prevProps.minTime !== this.props.minTime;
        var didMaxTimeChange = prevProps.maxTime !== this.props.maxTime;
        var didBoundsChange = didMinTimeChange || didMaxTimeChange;
        var didPropValueChange = prevProps.value !== this.props.value;
        var shouldStateUpdate = didBoundsChange || didPropValueChange;
        var value = this.state.value;
        if (this.props.value == null) {
            value = this.getInitialValue();
        }
        if (didBoundsChange) {
            value = getTimeInRange(this.state.value, this.props.minTime, this.props.maxTime);
        }
        if (this.props.value != null && !areSameTime(this.props.value, prevProps.value)) {
            value = this.props.value;
        }
        if (shouldStateUpdate) {
            this.setState(this.getFullStateFromValue(value, this.props.useAmPm));
        }
    };
    // begin method definitions: rendering
    TimePicker.prototype.maybeRenderArrowButton = function (isDirectionUp, timeUnit) {
        var _this = this;
        if (!this.props.showArrowButtons) {
            return null;
        }
        var classes = classnames(TIMEPICKER_ARROW_BUTTON, getTimeUnitClassName(timeUnit));
        var onClick = function () { return (isDirectionUp ? _this.incrementTime : _this.decrementTime)(timeUnit); };
        var label = "".concat(isDirectionUp ? "Increase" : "Decrease", " ").concat(getTimeUnitPrintStr(timeUnit));
        // set tabIndex=-1 to ensure a valid FocusEvent relatedTarget when focused
        return (react.createElement("span", { "aria-controls": this.timeInputIds[timeUnit], "aria-label": label, tabIndex: -1, className: classes, onClick: onClick },
            react.createElement(Icon, { icon: isDirectionUp ? "chevron-up" : "chevron-down", title: label })));
    };
    TimePicker.prototype.renderDivider = function (text) {
        if (text === void 0) { text = ":"; }
        return react.createElement("span", { className: TIMEPICKER_DIVIDER_TEXT }, text);
    };
    TimePicker.prototype.renderInput = function (className, unit, value) {
        var _a;
        var valueNumber = parseInt(value, 10);
        var isValid = isTimeUnitValid(unit, valueNumber);
        var isHour = unit === TimeUnit.HOUR_12 || unit === TimeUnit.HOUR_24;
        return (react.createElement("input", { "aria-label": getTimeUnitPrintStr(unit), "aria-valuemin": 0, "aria-valuenow": valueNumber, "aria-valuemax": getTimeUnitMax(unit), className: classnames(TIMEPICKER_INPUT, (_a = {}, _a[intentClass(Intent.DANGER)] = !isValid, _a), className), id: this.timeInputIds[unit], onBlur: this.getInputBlurHandler(unit), onChange: this.getInputChangeHandler(unit), onFocus: this.getInputFocusHandler(unit), onKeyDown: this.getInputKeyDownHandler(unit), onKeyUp: this.getInputKeyUpHandler(unit), role: this.props.showArrowButtons ? "spinbutton" : undefined, value: value, disabled: this.props.disabled, autoFocus: isHour && this.props.autoFocus }));
    };
    TimePicker.prototype.maybeRenderAmPm = function () {
        if (!this.props.useAmPm) {
            return null;
        }
        return (react.createElement(HTMLSelect, { className: TIMEPICKER_AMPM_SELECT, disabled: this.props.disabled, onChange: this.handleAmPmChange, value: this.state.isPm ? "pm" : "am" },
            react.createElement("option", { value: "am" }, "AM"),
            react.createElement("option", { value: "pm" }, "PM")));
    };
    // begin method definitions: state modification
    /**
     * Generates a full ITimePickerState object with all text fields set to formatted strings based on value
     */
    TimePicker.prototype.getFullStateFromValue = function (value, useAmPm) {
        var timeInRange = getTimeInRange(value, this.props.minTime, this.props.maxTime);
        var hourUnit = useAmPm ? TimeUnit.HOUR_12 : TimeUnit.HOUR_24;
        /* tslint:disable:object-literal-sort-keys */
        return {
            hourText: formatTime(timeInRange.getHours(), hourUnit),
            minuteText: formatTime(timeInRange.getMinutes(), TimeUnit.MINUTE),
            secondText: formatTime(timeInRange.getSeconds(), TimeUnit.SECOND),
            millisecondText: formatTime(timeInRange.getMilliseconds(), TimeUnit.MS),
            value: timeInRange,
            isPm: getIsPmFrom24Hour(timeInRange.getHours()),
        };
        /* tslint:enable:object-literal-sort-keys */
    };
    TimePicker.prototype.shiftTime = function (unit, amount) {
        if (this.props.disabled) {
            return;
        }
        var newTime = getTimeUnit(unit, this.state.value) + amount;
        this.updateTime(wrapTimeAtUnit(unit, newTime), unit);
    };
    TimePicker.prototype.updateTime = function (time, unit) {
        var newValue = clone(this.state.value);
        if (isTimeUnitValid(unit, time)) {
            setTimeUnit(unit, time, newValue, this.state.isPm);
            if (isTimeInRange(newValue, this.props.minTime, this.props.maxTime)) {
                this.updateState({ value: newValue });
            }
            else {
                this.updateState(this.getFullStateFromValue(this.state.value, this.props.useAmPm));
            }
        }
        else {
            this.updateState(this.getFullStateFromValue(this.state.value, this.props.useAmPm));
        }
    };
    TimePicker.prototype.updateState = function (state) {
        var _a, _b;
        var newState = state;
        var hasNewValue = newState.value != null && !areSameTime(newState.value, this.state.value);
        if (this.props.value == null) {
            // component is uncontrolled
            if (hasNewValue) {
                newState = this.getFullStateFromValue(newState.value, this.props.useAmPm);
            }
            this.setState(newState);
        }
        else {
            // component is controlled, and there's a new value
            // so set inputs' text based off of _old_ value and later fire onChange with new value
            if (hasNewValue) {
                this.setState(this.getFullStateFromValue(this.state.value, this.props.useAmPm));
            }
            else {
                // no new value, this means only text has changed (from user typing)
                // we want inputs to change, so update state with new text for the inputs
                // but don't change actual value
                this.setState(__assign(__assign({}, newState), { value: clone(this.state.value) }));
            }
        }
        if (hasNewValue) {
            (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, newState.value);
        }
    };
    TimePicker.prototype.getInitialValue = function () {
        var value = this.props.minTime;
        if (this.props.value != null) {
            value = this.props.value;
        }
        else if (this.props.defaultValue != null) {
            value = this.props.defaultValue;
        }
        return value;
    };
    TimePicker.defaultProps = {
        autoFocus: false,
        disabled: false,
        maxTime: getDefaultMaxTime(),
        minTime: getDefaultMinTime(),
        precision: TimePrecision.MINUTE,
        selectAllOnFocus: false,
        showArrowButtons: false,
        useAmPm: false,
    };
    TimePicker.displayName = "".concat(DISPLAYNAME_PREFIX, ".TimePicker");
    return TimePicker;
}(react.Component));
function formatTime(time, unit) {
    switch (unit) {
        case TimeUnit.HOUR_24:
            return time.toString();
        case TimeUnit.HOUR_12:
            return get12HourFrom24Hour(time).toString();
        case TimeUnit.MINUTE:
        case TimeUnit.SECOND:
            return padWithZeroes(time.toString(), 2);
        case TimeUnit.MS:
            return padWithZeroes(time.toString(), 3);
        default:
            throw Error("Invalid TimeUnit");
    }
}
function getStringValueFromInputEvent(e) {
    return e.target.value;
}
function handleKeyEvent(e, actions, preventDefault) {
    if (preventDefault === void 0) { preventDefault = true; }
    for (var _i = 0, _a = Object.keys(actions); _i < _a.length; _i++) {
        var k = _a[_i];
        var key = Number(k);
        // HACKHACK: https://github.com/palantir/blueprint/issues/4165
        // eslint-disable-next-line deprecation/deprecation
        if (e.which === key) {
            if (preventDefault) {
                e.preventDefault();
            }
            actions[key]();
        }
    }
}

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.ignoreNextMonthChange = false;
        _this.shouldHighlightCurrentDay = function (date) {
            var highlightCurrentDay = _this.props.highlightCurrentDay;
            return highlightCurrentDay && isToday(date);
        };
        _this.getDatePickerModifiers = function () {
            var modifiers = _this.props.modifiers;
            return __assign({ isToday: _this.shouldHighlightCurrentDay }, modifiers);
        };
        _this.renderDay = function (day) {
            var date = day.getDate();
            return react.createElement("div", { className: DATEPICKER_DAY_WRAPPER }, date);
        };
        _this.disabledDays = function (day) { return !isDayInRange(day, [_this.props.minDate, _this.props.maxDate]); };
        _this.getDisabledDaysModifier = function () {
            var disabledDays = _this.props.dayPickerProps.disabledDays;
            return Array.isArray(disabledDays) ? __spreadArray([_this.disabledDays], disabledDays, true) : [_this.disabledDays, disabledDays];
        };
        _this.renderCaption = function (props) { return (react.createElement(DatePickerCaption, __assign({}, props, { maxDate: _this.props.maxDate, minDate: _this.props.minDate, onDateChange: _this.handleMonthChange, reverseMonthAndYearMenus: _this.props.reverseMonthAndYearMenus }))); };
        _this.renderNavbar = function (props) { return (react.createElement(DatePickerNavbar, __assign({}, props, { maxDate: _this.props.maxDate, minDate: _this.props.minDate }))); };
        _this.handleDayClick = function (day, modifiers, e) {
            var _a, _b;
            (_b = (_a = _this.props.dayPickerProps).onDayClick) === null || _b === void 0 ? void 0 : _b.call(_a, day, modifiers, e);
            if (modifiers.disabled) {
                return;
            }
            _this.updateDay(day);
            // allow toggling selected date by clicking it again (if prop enabled)
            var newValue = _this.props.canClearSelection && modifiers.selected ? null : getDateTime(day, _this.state.value);
            _this.updateValue(newValue, true);
        };
        _this.handleShortcutClick = function (shortcut, selectedShortcutIndex) {
            var _a = _this.props, onShortcutChange = _a.onShortcutChange, currentShortcutIndex = _a.selectedShortcutIndex;
            var dateRange = shortcut.dateRange, includeTime = shortcut.includeTime;
            var newDate = dateRange[0];
            var newValue = includeTime ? newDate : getDateTime(newDate, _this.state.value);
            _this.updateDay(newDate);
            _this.updateValue(newValue, true);
            if (currentShortcutIndex === undefined) {
                _this.setState({ selectedShortcutIndex: selectedShortcutIndex });
            }
            var datePickerShortcut = __assign(__assign({}, shortcut), { date: shortcut.dateRange[0] });
            onShortcutChange === null || onShortcutChange === void 0 ? void 0 : onShortcutChange(datePickerShortcut, selectedShortcutIndex);
        };
        _this.updateDay = function (day) {
            if (_this.props.value === undefined) {
                // set now if uncontrolled, otherwise they'll be updated in `componentDidUpdate`
                _this.setState({
                    displayMonth: day.getMonth(),
                    displayYear: day.getFullYear(),
                    selectedDay: day.getDate(),
                });
            }
            if (_this.state.value != null && _this.state.value.getMonth() !== day.getMonth()) {
                _this.ignoreNextMonthChange = true;
            }
        };
        _this.handleClearClick = function () { return _this.updateValue(null, true); };
        _this.handleMonthChange = function (newDate) {
            var _a, _b;
            var date = _this.computeValidDateInSpecifiedMonthYear(newDate.getFullYear(), newDate.getMonth());
            _this.setState({ displayMonth: date.getMonth(), displayYear: date.getFullYear() });
            if (_this.state.value !== null) {
                // if handleDayClick just got run (so this flag is set), then the
                // user selected a date in a new month, so don't invoke onChange a
                // second time
                _this.updateValue(date, false, _this.ignoreNextMonthChange);
                _this.ignoreNextMonthChange = false;
            }
            (_b = (_a = _this.props.dayPickerProps).onMonthChange) === null || _b === void 0 ? void 0 : _b.call(_a, date);
        };
        _this.handleTodayClick = function () {
            var value = new Date();
            var displayMonth = value.getMonth();
            var displayYear = value.getFullYear();
            var selectedDay = value.getDate();
            _this.setState({ displayMonth: displayMonth, displayYear: displayYear, selectedDay: selectedDay });
            _this.updateValue(value, true);
        };
        _this.handleTimeChange = function (time) {
            var _a, _b;
            (_b = (_a = _this.props.timePickerProps) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, time);
            var value = _this.state.value;
            var newValue = getDateTime(value != null ? value : new Date(), time);
            _this.updateValue(newValue, true);
        };
        var value = getInitialValue(props);
        var initialMonth = getInitialMonth(props, value);
        _this.state = {
            displayMonth: initialMonth.getMonth(),
            displayYear: initialMonth.getFullYear(),
            selectedDay: value == null ? null : value.getDate(),
            selectedShortcutIndex: _this.props.selectedShortcutIndex !== undefined ? _this.props.selectedShortcutIndex : -1,
            value: value,
        };
        return _this;
    }
    DatePicker.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, dayPickerProps = _b.dayPickerProps, footerElement = _b.footerElement, locale = _b.locale, localeUtils = _b.localeUtils, maxDate = _b.maxDate, minDate = _b.minDate, showActionsBar = _b.showActionsBar;
        var _c = this.state, displayMonth = _c.displayMonth, displayYear = _c.displayYear;
        return (react.createElement("div", { className: classnames(DATEPICKER, className) },
            this.maybeRenderShortcuts(),
            react.createElement("div", { className: DATEPICKER_CONTENT },
                react.createElement(DayPicker, __assign({ showOutsideDays: true, locale: locale, localeUtils: localeUtils, modifiers: this.getDatePickerModifiers() }, dayPickerProps, { canChangeMonth: true, captionElement: this.renderCaption, navbarElement: this.renderNavbar, disabledDays: this.getDisabledDaysModifier(), fromMonth: minDate, month: new Date(displayYear, displayMonth), onDayClick: this.handleDayClick, onMonthChange: this.handleMonthChange, selectedDays: this.state.value, toMonth: maxDate, renderDay: (_a = dayPickerProps === null || dayPickerProps === void 0 ? void 0 : dayPickerProps.renderDay) !== null && _a !== void 0 ? _a : this.renderDay })),
                this.maybeRenderTimePicker(),
                showActionsBar && this.renderOptionsBar(),
                footerElement)));
    };
    DatePicker.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var value = this.props.value;
        if (value === prevProps.value) {
            // no action needed
            return;
        }
        else if (value == null) {
            // clear the value
            this.setState({ value: value });
        }
        else {
            this.setState({
                displayMonth: value.getMonth(),
                displayYear: value.getFullYear(),
                selectedDay: value.getDate(),
                value: value,
            });
        }
        if (this.props.selectedShortcutIndex !== prevProps.selectedShortcutIndex) {
            this.setState({ selectedShortcutIndex: this.props.selectedShortcutIndex });
        }
    };
    DatePicker.prototype.validateProps = function (props) {
        var defaultValue = props.defaultValue, initialMonth = props.initialMonth, maxDate = props.maxDate, minDate = props.minDate, value = props.value;
        if (defaultValue != null && !isDayInRange(defaultValue, [minDate, maxDate])) {
            console.error(DATEPICKER_DEFAULT_VALUE_INVALID);
        }
        if (initialMonth != null && !isMonthInRange(initialMonth, [minDate, maxDate])) {
            console.error(DATEPICKER_INITIAL_MONTH_INVALID);
        }
        if (maxDate != null && minDate != null && maxDate < minDate && !areSameDay(maxDate, minDate)) {
            console.error(DATEPICKER_MAX_DATE_INVALID);
        }
        if (value != null && !isDayInRange(value, [minDate, maxDate])) {
            console.error(DATEPICKER_VALUE_INVALID);
        }
    };
    DatePicker.prototype.renderOptionsBar = function () {
        var _a = this.props, clearButtonText = _a.clearButtonText, todayButtonText = _a.todayButtonText, minDate = _a.minDate, maxDate = _a.maxDate, canClearSelection = _a.canClearSelection;
        var todayEnabled = isTodayEnabled(minDate, maxDate);
        return [
            react.createElement(Divider, { key: "div" }),
            react.createElement("div", { className: DATEPICKER_FOOTER, key: "footer" },
                react.createElement(Button, { minimal: true, disabled: !todayEnabled, onClick: this.handleTodayClick, text: todayButtonText }),
                react.createElement(Button, { disabled: !canClearSelection, minimal: true, onClick: this.handleClearClick, text: clearButtonText })),
        ];
    };
    DatePicker.prototype.maybeRenderTimePicker = function () {
        var _a = this.props, timePrecision = _a.timePrecision, timePickerProps = _a.timePickerProps, minDate = _a.minDate, maxDate = _a.maxDate;
        if (timePrecision == null && timePickerProps === undefined) {
            return null;
        }
        var applyMin = areSameDay(this.state.value, minDate);
        var applyMax = areSameDay(this.state.value, maxDate);
        return (react.createElement("div", { className: DATEPICKER_TIMEPICKER_WRAPPER },
            react.createElement(TimePicker, __assign({ precision: timePrecision, minTime: applyMin ? minDate : undefined, maxTime: applyMax ? maxDate : undefined }, timePickerProps, { onChange: this.handleTimeChange, value: this.state.value }))));
    };
    DatePicker.prototype.maybeRenderShortcuts = function () {
        var shortcuts = this.props.shortcuts;
        if (shortcuts == null || shortcuts === false) {
            return null;
        }
        var selectedShortcutIndex = this.state.selectedShortcutIndex;
        var _a = this.props, maxDate = _a.maxDate, minDate = _a.minDate, timePrecision = _a.timePrecision;
        // Reuse the existing date range shortcuts and only care about start date
        var dateRangeShortcuts = shortcuts === true
            ? true
            : shortcuts.map(function (shortcut) { return (__assign(__assign({}, shortcut), { dateRange: [shortcut.date, undefined] })); });
        return [
            react.createElement(Shortcuts, __assign({ key: "shortcuts" }, {
                allowSingleDayRange: true,
                maxDate: maxDate,
                minDate: minDate,
                selectedShortcutIndex: selectedShortcutIndex,
                shortcuts: dateRangeShortcuts,
                timePrecision: timePrecision,
            }, { onShortcutClick: this.handleShortcutClick, useSingleDateShortcuts: true })),
            react.createElement(Divider, { key: "div" }),
        ];
    };
    DatePicker.prototype.computeValidDateInSpecifiedMonthYear = function (displayYear, displayMonth) {
        var _a = this.props, minDate = _a.minDate, maxDate = _a.maxDate;
        var selectedDay = this.state.selectedDay;
        // month is 0-based, date is 1-based. date 0 is last day of previous month.
        var maxDaysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
        var displayDate = selectedDay == null ? 1 : Math.min(selectedDay, maxDaysInMonth);
        // 12:00 matches the underlying react-day-picker timestamp behavior
        var value = getDateTime(new Date(displayYear, displayMonth, displayDate, 12), this.state.value);
        // clamp between min and max dates
        if (value < minDate) {
            return minDate;
        }
        else if (value > maxDate) {
            return maxDate;
        }
        return value;
    };
    /**
     * Update `value` by invoking `onChange` (always) and setting state (if uncontrolled).
     */
    DatePicker.prototype.updateValue = function (value, isUserChange, skipOnChange) {
        var _a, _b;
        if (skipOnChange === void 0) { skipOnChange = false; }
        if (!skipOnChange) {
            (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value, isUserChange);
        }
        if (this.props.value === undefined) {
            this.setState({ value: value });
        }
    };
    DatePicker.defaultProps = {
        canClearSelection: true,
        clearButtonText: "Clear",
        dayPickerProps: {},
        highlightCurrentDay: false,
        maxDate: getDefaultMaxDate(),
        minDate: getDefaultMinDate(),
        reverseMonthAndYearMenus: false,
        shortcuts: false,
        showActionsBar: false,
        todayButtonText: "Today",
    };
    DatePicker.displayName = "".concat(DISPLAYNAME_PREFIX, ".DatePicker");
    return DatePicker;
}(AbstractPureComponent2));
function getInitialValue(props) {
    // !== because `null` is a valid value (no date)
    if (props.value !== undefined) {
        return props.value;
    }
    if (props.defaultValue !== undefined) {
        return props.defaultValue;
    }
    return null;
}
function getInitialMonth(props, value) {
    var today = new Date();
    // != because we must have a real `Date` to begin the calendar on.
    if (props.initialMonth != null) {
        return props.initialMonth;
    }
    else if (value != null) {
        return value;
    }
    else if (isDayInRange(today, [props.minDate, props.maxDate])) {
        return today;
    }
    else {
        return getDateBetween([props.minDate, props.maxDate]);
    }
}
function isTodayEnabled(minDate, maxDate) {
    var today = new Date();
    return isDayInRange(today, [minDate, maxDate]);
}

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @deprecated use { DateInput2 } from "@blueprintjs/datetime2" */
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput() {
        var _this = this;
        var _a;
        _this = _super.apply(this, arguments) || this;
        _this.state = {
            isInputFocused: false,
            isOpen: false,
            value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue,
            valueString: null,
        };
        _this.inputElement = null;
        _this.popoverContentElement = null;
        _this.handleInputRef = refHandler(_this, "inputElement", (_a = _this.props.inputProps) === null || _a === void 0 ? void 0 : _a.inputRef);
        _this.handlePopoverContentRef = refHandler(_this, "popoverContentElement");
        _this.handleClosePopover = function (e) {
            var _a;
            var _b = _this.props.popoverProps, popoverProps = _b === void 0 ? {} : _b;
            (_a = popoverProps.onClose) === null || _a === void 0 ? void 0 : _a.call(popoverProps, e);
            _this.setState({ isOpen: false });
        };
        _this.handleDateChange = function (newDate, isUserChange, didSubmitWithEnter) {
            var _a, _b;
            if (didSubmitWithEnter === void 0) { didSubmitWithEnter = false; }
            var prevDate = _this.state.value;
            // this change handler was triggered by a change in month, day, or (if
            // enabled) time. for UX purposes, we want to close the popover only if
            // the user explicitly clicked a day within the current month.
            var isOpen = !isUserChange ||
                !_this.props.closeOnSelection ||
                (prevDate != null && (_this.hasMonthChanged(prevDate, newDate) || _this.hasTimeChanged(prevDate, newDate)));
            // if selecting a date via click or Tab, the input will already be
            // blurred by now, so sync isInputFocused to false. if selecting via
            // Enter, setting isInputFocused to false won't do anything by itself,
            // plus we want the field to retain focus anyway.
            // (note: spelling out the ternary explicitly reads more clearly.)
            var isInputFocused = didSubmitWithEnter ? true : false;
            if (_this.props.value === undefined) {
                var valueString = getFormattedDateString(newDate, _this.props);
                _this.setState({ isInputFocused: isInputFocused, isOpen: isOpen, value: newDate, valueString: valueString });
            }
            else {
                _this.setState({ isInputFocused: isInputFocused, isOpen: isOpen });
            }
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, newDate, isUserChange);
        };
        _this.handleInputFocus = function (e) {
            var valueString = _this.state.value == null ? "" : _this.formatDate(_this.state.value);
            _this.setState({ isInputFocused: true, isOpen: true, valueString: valueString });
            _this.safeInvokeInputProp("onFocus", e);
        };
        _this.handleInputClick = function (e) {
            // stop propagation to the Popover's internal handleTargetClick handler;
            // otherwise, the popover will flicker closed as soon as it opens.
            e.stopPropagation();
            _this.safeInvokeInputProp("onClick", e);
        };
        _this.handleInputChange = function (e) {
            var _a, _b, _c, _d;
            var valueString = e.target.value;
            var value = _this.parseDate(valueString);
            if (isDateValid(value) && _this.isDateInRange(value)) {
                if (_this.props.value === undefined) {
                    _this.setState({ value: value, valueString: valueString });
                }
                else {
                    _this.setState({ valueString: valueString });
                }
                (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value, true);
            }
            else {
                if (valueString.length === 0) {
                    (_d = (_c = _this.props).onChange) === null || _d === void 0 ? void 0 : _d.call(_c, null, true);
                }
                _this.setState({ valueString: valueString });
            }
            _this.safeInvokeInputProp("onChange", e);
        };
        _this.handleInputBlur = function (e) {
            var _a, _b, _c, _d, _e, _f;
            var valueString = _this.state.valueString;
            var date = _this.parseDate(valueString);
            if (valueString.length > 0 &&
                valueString !== getFormattedDateString(_this.state.value, _this.props) &&
                (!isDateValid(date) || !_this.isDateInRange(date))) {
                if (_this.props.value === undefined) {
                    _this.setState({ isInputFocused: false, value: date, valueString: null });
                }
                else {
                    _this.setState({ isInputFocused: false });
                }
                if (isNaN(date.valueOf())) {
                    (_b = (_a = _this.props).onError) === null || _b === void 0 ? void 0 : _b.call(_a, new Date(undefined));
                }
                else if (!_this.isDateInRange(date)) {
                    (_d = (_c = _this.props).onError) === null || _d === void 0 ? void 0 : _d.call(_c, date);
                }
                else {
                    (_f = (_e = _this.props).onChange) === null || _f === void 0 ? void 0 : _f.call(_e, date, true);
                }
            }
            else {
                if (valueString.length === 0) {
                    _this.setState({ isInputFocused: false, value: null, valueString: null });
                }
                else {
                    _this.setState({ isInputFocused: false });
                }
            }
            _this.safeInvokeInputProp("onBlur", e);
        };
        _this.handleInputKeyDown = function (e) {
            var _a, _b;
            // HACKHACK: https://github.com/palantir/blueprint/issues/4165
            if (e.which === ENTER) {
                var nextDate = _this.parseDate(_this.state.valueString);
                _this.handleDateChange(nextDate, true, true);
            }
            else if (e.which === TAB && e.shiftKey) {
                // close popover on SHIFT+TAB key press
                _this.handleClosePopover();
            }
            else if (e.which === TAB && _this.state.isOpen) {
                (_a = _this.getKeyboardFocusableElements().shift()) === null || _a === void 0 ? void 0 : _a.focus();
                // necessary to prevent focusing the second focusable element
                e.preventDefault();
            }
            else if (e.which === ESCAPE) {
                _this.setState({ isOpen: false });
                (_b = _this.inputElement) === null || _b === void 0 ? void 0 : _b.blur();
            }
            _this.safeInvokeInputProp("onKeyDown", e);
        };
        _this.getKeyboardFocusableElements = function () {
            var _a;
            var elements = Array.from((_a = _this.popoverContentElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll("button:not([disabled]),input,[tabindex]:not([tabindex='-1'])"));
            // Remove focus boundary div elements
            elements.pop();
            elements.shift();
            return elements;
        };
        _this.handleStartFocusBoundaryFocusIn = function (e) {
            var _a, _b;
            if (_this.popoverContentElement.contains(_this.getRelatedTarget(e))) {
                // Not closing Popover to allow user to freely switch between manually entering a date
                // string in the input and selecting one via the Popover
                (_a = _this.inputElement) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                (_b = _this.getKeyboardFocusableElements().shift()) === null || _b === void 0 ? void 0 : _b.focus();
            }
        };
        _this.handleEndFocusBoundaryFocusIn = function (e) {
            var _a, _b;
            if (_this.popoverContentElement.contains(_this.getRelatedTarget(e))) {
                (_a = _this.inputElement) === null || _a === void 0 ? void 0 : _a.focus();
                _this.handleClosePopover();
            }
            else {
                (_b = _this.getKeyboardFocusableElements().pop()) === null || _b === void 0 ? void 0 : _b.focus();
            }
        };
        _this.handleShortcutChange = function (_, selectedShortcutIndex) {
            _this.setState({ selectedShortcutIndex: selectedShortcutIndex });
        };
        return _this;
    }
    DateInput.prototype.render = function () {
        var _this = this;
        var _a = this.state, value = _a.value, valueString = _a.valueString;
        var dateString = this.state.isInputFocused ? valueString : getFormattedDateString(value, this.props);
        var dateValue = isDateValid(value) ? value : null;
        var dayPickerProps = __assign(__assign({}, this.props.dayPickerProps), { onDayKeyDown: function (day, modifiers, e) {
                var _a, _b;
                (_b = (_a = _this.props.dayPickerProps).onDayKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, day, modifiers, e);
            }, onMonthChange: function (month) {
                var _a, _b;
                (_b = (_a = _this.props.dayPickerProps).onMonthChange) === null || _b === void 0 ? void 0 : _b.call(_a, month);
            } });
        // React's onFocus prop listens to the focusin browser event under the hood, so it's safe to
        // provide it the focusIn event handlers instead of using a ref and manually adding the
        // event listeners ourselves.
        var wrappedPopoverContent = (react.createElement("div", { ref: this.handlePopoverContentRef },
            react.createElement("div", { onFocus: this.handleStartFocusBoundaryFocusIn, tabIndex: 0 }),
            react.createElement(DatePicker, __assign({}, this.props, { dayPickerProps: dayPickerProps, onChange: this.handleDateChange, value: dateValue, onShortcutChange: this.handleShortcutChange, selectedShortcutIndex: this.state.selectedShortcutIndex })),
            react.createElement("div", { onFocus: this.handleEndFocusBoundaryFocusIn, tabIndex: 0 })));
        // assign default empty object here to prevent mutation
        var _b = this.props, _c = _b.inputProps, inputProps = _c === void 0 ? {} : _c, _d = _b.popoverProps, popoverProps = _d === void 0 ? {} : _d;
        var isErrorState = value != null && (!isDateValid(value) || !this.isDateInRange(value));
        return (react.createElement(Popover, __assign({ isOpen: this.state.isOpen && !this.props.disabled, fill: this.props.fill }, popoverProps, { autoFocus: false, className: classnames(popoverProps.className, this.props.className), content: wrappedPopoverContent, enforceFocus: false, onClose: this.handleClosePopover, popoverClassName: classnames(DATEINPUT_POPOVER, popoverProps.popoverClassName) }),
            react.createElement(InputGroup, __assign({ autoComplete: "off", intent: isErrorState ? Intent.DANGER : Intent.NONE, placeholder: this.props.placeholder, rightElement: this.props.rightElement, type: "text" }, inputProps, { disabled: this.props.disabled, inputRef: this.handleInputRef, onBlur: this.handleInputBlur, onChange: this.handleInputChange, onClick: this.handleInputClick, onFocus: this.handleInputFocus, onKeyDown: this.handleInputKeyDown, value: dateString }))));
    };
    DateInput.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b, _c, _d, _e;
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (((_a = prevProps.inputProps) === null || _a === void 0 ? void 0 : _a.inputRef) !== ((_b = this.props.inputProps) === null || _b === void 0 ? void 0 : _b.inputRef)) {
            setRef((_c = prevProps.inputProps) === null || _c === void 0 ? void 0 : _c.inputRef, null);
            this.handleInputRef = refHandler(this, "inputElement", (_d = this.props.inputProps) === null || _d === void 0 ? void 0 : _d.inputRef);
            setRef((_e = this.props.inputProps) === null || _e === void 0 ? void 0 : _e.inputRef, this.inputElement);
        }
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    };
    DateInput.prototype.isDateInRange = function (value) {
        return isDayInRange(value, [this.props.minDate, this.props.maxDate]);
    };
    DateInput.prototype.hasMonthChanged = function (prevDate, nextDate) {
        return (prevDate == null) !== (nextDate == null) || nextDate.getMonth() !== prevDate.getMonth();
    };
    DateInput.prototype.hasTimeChanged = function (prevDate, nextDate) {
        if (this.props.timePrecision == null) {
            return false;
        }
        return ((prevDate == null) !== (nextDate == null) ||
            nextDate.getHours() !== prevDate.getHours() ||
            nextDate.getMinutes() !== prevDate.getMinutes() ||
            nextDate.getSeconds() !== prevDate.getSeconds() ||
            nextDate.getMilliseconds() !== prevDate.getMilliseconds());
    };
    DateInput.prototype.getRelatedTarget = function (e) {
        var _a;
        // Support IE11 (#2924)
        return ((_a = e.relatedTarget) !== null && _a !== void 0 ? _a : document.activeElement);
    };
    /** safe wrapper around invoking input props event handler (prop defaults to undefined) */
    DateInput.prototype.safeInvokeInputProp = function (name, e) {
        var _a;
        var _b = this.props.inputProps, inputProps = _b === void 0 ? {} : _b;
        (_a = inputProps[name]) === null || _a === void 0 ? void 0 : _a.call(inputProps, e);
    };
    DateInput.prototype.parseDate = function (dateString) {
        if (dateString === this.props.outOfRangeMessage || dateString === this.props.invalidDateMessage) {
            return null;
        }
        var _a = this.props, locale = _a.locale, parseDate = _a.parseDate;
        var newDate = parseDate(dateString, locale);
        return newDate === false ? new Date(undefined) : newDate;
    };
    DateInput.prototype.formatDate = function (date) {
        if (!isDateValid(date) || !this.isDateInRange(date)) {
            return "";
        }
        var _a = this.props, locale = _a.locale, formatDate = _a.formatDate;
        return formatDate(date, locale);
    };
    DateInput.displayName = "".concat(DISPLAYNAME_PREFIX, ".DateInput");
    DateInput.defaultProps = {
        closeOnSelection: true,
        dayPickerProps: {},
        disabled: false,
        invalidDateMessage: "Invalid date",
        maxDate: getDefaultMaxDate(),
        minDate: getDefaultMinDate(),
        outOfRangeMessage: "Out of range",
        reverseMonthAndYearMenus: false,
    };
    return DateInput;
}(AbstractPureComponent2));

export { DateInput, TimePicker, TimePrecision };
