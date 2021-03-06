/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(16);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(17);
var buildURL = __webpack_require__(3);
var buildFullPath = __webpack_require__(19);
var parseHeaders = __webpack_require__(22);
var isURLSameOrigin = __webpack_require__(23);
var createError = __webpack_require__(7);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(24);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(18);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(11);
var mergeConfig = __webpack_require__(8);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9);
axios.CancelToken = __webpack_require__(25);
axios.isCancel = __webpack_require__(4);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(26);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(3);
var InterceptorManager = __webpack_require__(12);
var dispatchRequest = __webpack_require__(13);
var mergeConfig = __webpack_require__(8);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(14);
var isCancel = __webpack_require__(4);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(20);
var combineURLs = __webpack_require__(21);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/components/menutoggle.component.js
class MenuToogle extends HTMLAnchorElement {
  constructor(...args) {
    super(args);
    this.innerText = "Filter";
  }

  connectedCallback() {
    this.addEventListener("click", e => {
      e.preventDefault();
      const filterMenu = document.getElementById("main-div");
      if (filterMenu.style.display === "block") {
        filterMenu.style.display = "none";
      } else {
        filterMenu.style.display = "block";
      }
    });
  }
}

customElements.define("menu-toggle-component", MenuToogle, { extends: "a" });
/* harmony default export */ var menutoggle_component = (MenuToogle);

// CONCATENATED MODULE: ./src/classes/KeyWords.js
class KeyWords {
  constructor(api, commentsList) {
    this.api = api;
    this.list = [];
    this.subscribers = [];
    this.commentsList = commentsList;
    this.load();
  }

  add(word) {
    if (this.list.find(kw => kw === word)) return;
    this.list.push(word);
    this.commentsList.blockForKeyword(word);
    return this.api.addWordToList(word, this.commentsList.tag);
  }

  delete(word) {
    if (!this.list.find(kw => kw === word)) return;
    this.list = this.list.filter(kw => kw !== word);
    this.commentsList.unblockForKeyword(word);
    this.list.forEach(kw => this.commentsList.blockForKeyword(kw));
    return this.api.deleteWordFromList(word);
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifyAll(event) {
    this.subscribers.forEach(subscriber => {
      subscriber.notify({event: event})
    });
  }
  load() {
    this.api.getUserWordsList()
      .then(wordList => {
        this.list = wordList;
        this.notifyAll('loaded');
        this.list.forEach(word => this.commentsList.blockForKeyword(word));
      });
  }
  
}

/* harmony default export */ var classes_KeyWords = (KeyWords);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(1);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/classes/Connector.js


class Connector_Connector {
    async post(uri, payload) {
        try {
            const response = await axios_default.a.post(Connector_Connector.url + uri, payload);
            console.debug("post", response.data, response.status, uri, payload);
            return {success: response.status < 300, data: response.data};
        } catch (e) {   
            console.error(e.message);
            return {success: false, data: {}};
        }
    }

    async get(uri) {
        try {
            const response = await axios_default.a.get(Connector_Connector.url + uri);
            console.debug("get", response.data, response.status, uri);
            return {success: response.status < 300, data: response.data};
        }catch (e) {   
            console.error(e.message);
            return {success: false, data: {}};
        }
    }    
    
    async delete(uri, payload) {
        try {
            const response = await axios_default.a.delete(Connector_Connector.url + uri, {data: payload});
            console.debug("delete", response.data, response.status, uri, payload);
            return {success: response.status < 300, data: response.data};
        } catch (e) {
            console.error(e.message);
            return {success: false, data: {}};  
        }
    }
}

Connector_Connector.keywords = 'keywords';
Connector_Connector.users = 'blocks';
Connector_Connector.register = 'user';
Connector_Connector.detection = 'detection';
Connector_Connector.login = 'users/login';
Connector_Connector.logout = 'users/logout';
Connector_Connector.comments_word = 'comments_word';
Connector_Connector.comments_user = 'comments_user';
Connector_Connector.url = "http://127.0.0.1/"
/* harmony default export */ var classes_Connector = (Connector_Connector);
// CONCATENATED MODULE: ./src/classes/Api.js


class Api_Api {
    constructor(connector) {
        this.connector = connector;
    }

    async register(username, password, reapeatPassword) {
        const body = {username: username, password: password, repeat_password: reapeatPassword}
        return await this.connector.post(classes_Connector.register, body);
    }

    async login(username, password) {
        const body = {username: username, password: password}
        return await this.connector.post(classes_Connector.login, body);
    }

    async logout() {
        return await this.connector.post(classes_Connector.logout, null);
    }

    async isLogged() {
        const result =  await this.connector.get(classes_Connector.keywords, null);
        return result.success && !result.data.Response; 
        
    }

    async getUserWordsList() {
        return (await this.connector.get(classes_Connector.keywords, null)).data.map(word => word.word)
    }

    async addWordToList(word, tag) {
        return (await this.connector.post(classes_Connector.keywords, {keyword: word, word_topic: tag})).success;
    }

    async deleteWordFromList(word) {
        return (await this.connector.delete(classes_Connector.keywords, {keyword: word})).success;
    } 

    async addUserToList(user, tag) {
        return (await this.connector.post(classes_Connector.users, {user_name: user, word_topic: tag})).success;
    }

    async deleteUserFromList(user) {
        return (await this.connector.delete(classes_Connector.users, {blocked_user: user})).success;
    }

    async getBlockedUserList() {
        return (await this.connector.get(classes_Connector.users, null)).data.Response.map(user => user.user_name);
    }

    async addCommentsWord(word) {
        return (await this.connector.post(classes_Connector.comments_word, {keyword: word})).success;
    }

    async addCommentsUser(user) {
        return (await this.connector.post(classes_Connector.comments_user, {blocked_user: user})).success;
    }

    async getDetections() {
        // result = (await this.connector.get(Connector.detection)).data.Response;
        // return result !== '--' ? [result] || [];
        return ['wacek', 'biurokrata', '1', '2', '3', '33'];
    }
}

/* harmony default export */ var classes_Api = (Api_Api);
// CONCATENATED MODULE: ./src/classes/Users.js
class Users {
    constructor(api, commentsList) {
        this.api = api;
        this.list = [];
        this.subscribers = [];
        this.commentsList = commentsList;
        this.load();
      }
    
      add(user) {
        if (this.list.find(lu => lu === user)) return;
        this.list.push(user);
        this.commentsList.blockForAuthor(user);
        return this.api.addUserToList(user, this.commentsList.tag);
      }
    
      delete(user) {
        if (!this.list.find(lu => lu === user)) return;
        this.list = this.list.filter(lu => lu !== user);
        this.commentsList.unblockForAuthor(user);
        this.list.forEach(lu => this.commentsList.blockForAuthor(lu));
        return this.api.deleteUserFromList(user);
      }
    
      subscribe(subscriber) {
        this.subscribers.push(subscriber);
      }
    
      notifyAll(event) {
        this.subscribers.forEach(subscriber => {
          subscriber.notify({event: event})
        });
      }
      load() {
        this.api.getBlockedUserList()
          .then(userlist => {
            this.list = userlist;
            this.notifyAll('loaded');
            this.list.forEach(word => this.commentsList.blockForAuthor(word));
          });
      }
}

/* harmony default export */ var classes_Users = (Users);
// CONCATENATED MODULE: ./src/classes/Detecteds.js


class Detecteds_Detecteds {
    constructor(api) {
      this.api = api;
      this.list = [];
      this.subscribers = [];
      this.load();
    }
  
    delete(detected) {
      if (!this.list.find(dw => dw === detected)) return;
      this.list = this.list.filter(dw => dw !== detected);
      getKeyWords().add(detected).then(() =>  {
        this.notifyAll('detection-matched');
      });
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    notifyAll(event) {
      this.subscribers.forEach(subscriber => {
        subscriber.notify({event: event})
      });
    }

    notify() {
        this.load();
    }
    load() {
      this.api.getDetections()
        .then(detections => {
          this.list = detections.filter(detected => !getKeyWords().list.includes(detected));
          this.notifyAll('loaded2');
        });
    }
    
  }
  
  /* harmony default export */ var classes_Detecteds = (Detecteds_Detecteds);

// CONCATENATED MODULE: ./src/classes/Repository.js






let Repository_keywords = null;
let api = null;
let Repository_users = null;
let Repository_detecteds = null;

function getKeyWords(commentList) {
    if (!Repository_keywords) {
        Repository_keywords = new classes_KeyWords(getApi(), commentList);
    }
    return Repository_keywords;
}

function getApi() {
    if (!api) {
        const connector = new classes_Connector();
        api = new classes_Api(connector);
    }
    return api;
}

function getUsersList(commentList) {
    if (!Repository_users) {
        Repository_users = new classes_Users(getApi(), commentList);
    }
    return Repository_users;
}

function getDetected() {
    if (!Repository_detecteds) {
        Repository_detecteds = new classes_Detecteds(getApi());
    }
    return Repository_detecteds;
}


// CONCATENATED MODULE: ./src/components/keyword.component.js


const template = `
    <a class="tag affect create" style="margin-rigth:10px;">
        <p class="inlblk"></p>
        <i class="fa fa-times red" style="margin-left:5px;"></i>
    </a>
`;

class keyword_component_KeyWord extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("inlblk");
    this.innerHTML = template;
    this.querySelector("p").innerText = this.dataset.name;
    const closeIcon = this.querySelector("i");
    closeIcon.addEventListener("click", () => {
      getKeyWords().delete(closeIcon.parentElement.innerText.trim());
      closeIcon.parentElement.parentElement.remove();
    });
  }
}

customElements.define("keyword-component", keyword_component_KeyWord, { extends: "div" });
/* harmony default export */ var keyword_component = (keyword_component_KeyWord);

// CONCATENATED MODULE: ./src/components/wordlist.component.js



const wordlist_component_template = `
<div style="padding: 15px; border-bottom: 1px solid grey;">
<h3 style="margin-bottom: 5px">Zablokowane słowa</h3>
<div  id="add-keyword-button" class="inlblk vertical-top m-reset-width">
    <input style="margin-bottom: 2px;" /><input type="button" value="Dodaj">
</div>
<div id="keyword-list" class="inlblk vertical-top m-reset-width"></div>
</div>
`;

class wordlist_component_WordList extends HTMLLIElement {
  constructor() {
    super();
    getKeyWords().subscribe(this);
    getDetected().subscribe(this);
    this.innerHTML = wordlist_component_template;

    this.reload = () => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "word-list-component" }),
        this
      );
    }

    this.handleAddWordList = () => {
      const regex = /[^\w\.!@#$%^&*()\[\]{};:'",<>]/;
      const word = this.querySelector(
        "#add-keyword-button input"
      ).value.replace(regex, "");
      if (word.length === 0) return;
      this.querySelector("#add-keyword-button input").value = "";
      getKeyWords().add(word).then(() => this.reload());
    };

    this.notify =  ({event}) => {
      if (event === 'loaded2') return;
      this.reload();
    }

    getKeyWords().load();
    
  }

  connectedCallback() {
    const keywords = getKeyWords();
    
    const list = this.querySelector("#keyword-list");
    list.innerHTML = keywords.list
      .map(keyword => `<div is="keyword-component" data-name="${keyword}"></div>`)
      .join("");
    document
      .querySelector("#add-keyword-button")
      .addEventListener("click", () => this.handleAddWordList());
    document
      .querySelector("#add-keyword-button")
      .addEventListener(
        "keydown",
        e => e.keyCode === 13 && this.handleAddWordList()
      );
  }
}

customElements.define("word-list-component", wordlist_component_WordList, { extends: "li" });
/* harmony default export */ var wordlist_component = (wordlist_component_WordList);

// CONCATENATED MODULE: ./src/components/user.component.js


const user_component_template = `
    <a class="tag affect create" style="margin-rigth:10px;">
        <p class="inlblk"></p>
        <i class="fa fa-times red" style="margin-left:5px;"></i>
    </a>
`;

class user_component_User extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("inlblk");
    this.innerHTML = user_component_template;
    this.querySelector("p").innerText = this.dataset.name;
    const closeIcon = this.querySelector("i");
    closeIcon.addEventListener("click", () => {
      getUsersList().delete(closeIcon.parentElement.innerText.trim());
      closeIcon.parentElement.parentElement.remove();
    });
  }
}

customElements.define("user-component", user_component_User, { extends: "div" });
/* harmony default export */ var user_component = (user_component_User);

// CONCATENATED MODULE: ./src/components/userlist.component.js



const userlist_component_template = `
<div style="padding: 15px; border-bottom: 1px solid grey;">
<h3 style="margin-bottom: 5px">Zablokowani użytkownicy</h3>
<div  id="add-user-button" class="inlblk vertical-top m-reset-width">
    <input style="margin-bottom: 2px;" /><input type="button" value="Dodaj">
</div>
<div id="user-list" class="inlblk vertical-top m-reset-width"></div>
</div>
`;

class userlist_component_UserList extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = userlist_component_template;
    getUsersList().subscribe(this);

    this.reload = () => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "user-list-component" }),
        this
      );
    }

    this.handleAddUser = () => {
      const regex = /[^\w\.!@#$%^&*()\[\]{};:'",<>]/;
      const user = this.querySelector(
        "#add-user-button input"
      ).value.replace(regex, "");
      if (user.length === 0) return;
      this.querySelector("#add-user-button input").value = "";
      getUsersList().add(user).then(() => this.reload());
    };

    this.notify =  ({event}) => {
      if (event !== 'loaded') return;
      this.reload();
    }

   getUsersList().load();
  }

  connectedCallback() {
    const users = getUsersList();
    const list = this.querySelector("#user-list");
    list.innerHTML = users.list
      .map(user => `<div is="user-component" data-name="${user}"></div>`)
      .join("");
    document
      .querySelector("#add-user-button")
      .addEventListener("click", () => {
        this.handleAddUser();
      });
    document
      .querySelector("#add-user-button")
      .addEventListener(
        "keydown",
        e => e.keyCode === 13 && this.handleAddUser()
      );
  }
}

customElements.define("user-list-component", userlist_component_UserList, { extends: "li" });
/* harmony default export */ var userlist_component = (userlist_component_UserList);

// CONCATENATED MODULE: ./src/components/register.component.js


const register_component_template = `
<form id="filterRegisterForm">
  <div>
  <label for="newregister-login">Username</label>
    <input type="text" name="username" id="newregister-login">
  </div>
  <div>
    <label for="newregister-pass">Hasło</label>
    <input type="password" name="password" id="newregister-pass">
  </div>
  <div>
    <label for="newregister-pass-repeat">Powtórz hasło</label>
    <input type="password" name="repeat_password" id="newregister-pass-repeat">
  </div>
  <fieldset class="row buttons">
    <p> 
      <input type="submit" value="Rejestruj">
    </p>
  </fieldset>
</form>
<a id="filterBack">Powrót</a>
`;

const templateSuccess = `
<div style="margin-top:10px;margin-bottom:10px;text-align: center; font-size: 30px;">
  <span class="results hot">
    <i class="icon tiny hot"></i>
    <strong>Pomyślnie zarejestrowano!</strong>
  </span>
</div>
<a id="filterBack">Powrót</a>
`;
class register_component_Register extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = register_component_template;
    this.addReturnToButton = e => {
      this.querySelector("#filterBack").addEventListener("click", e => {
        e.preventDefault();
        this.parentElement.replaceChild(
          document.createElement("li", { is: "login-component" }),
          this
        );
      });
    }
  }

  connectedCallback() {
    this.addReturnToButton();
    this.querySelector('#filterRegisterForm').addEventListener('submit', e => {
      e.preventDefault();
      const username = e.target['username'].value,
      password = e.target['password'].value,
      repeat_password = e.target['repeat_password'].value;
      getApi().register(username, password, repeat_password).then(result => {
        if (result.data.status && result.data.status === 'success') {
          this.innerHTML = templateSuccess;
          this.addReturnToButton();
        }
      });
    });
  }
}

customElements.define("register-component", register_component_Register, { extends: "li" });
/* harmony default export */ var register_component = (register_component_Register);

// CONCATENATED MODULE: ./src/components/logout.component.js


const logout_component_template = `<a>Wyloguj</a>`;

class logout_component_Logout extends HTMLLIElement
{
    constructor() {
        super();
        this.innerHTML = logout_component_template;
        this.subscribers = [];
        this.subscribe = (subscriber) => {
            this.subscribers.push(subscriber);
        }
  
        this.notifyAll = (event) => {
            this.subscribers.forEach(subscriber => {
                subscriber.notify({event: event})
            });
        }
    }

    connectedCallback() {
        this.querySelector('a').addEventListener('click', e => {
            e.preventDefault();
            getApi().logout().then(result => {
                if (!result.success) {
                    return;
                }
                this.notifyAll('loggedOut');
            });
        })
    }
}

customElements.define("logout-component", logout_component_Logout, { extends: "li" });
/* harmony default export */ var logout_component = (logout_component_Logout);

// CONCATENATED MODULE: ./src/components/login.component.js




const login_component_template = `
<form id="filterLoginForm">
  <div>
  <label for="newregister-login">Login</label>
    <input type="text" name="username" id="newregister-login">
  </div>
  <div>
    <label for="newregister-pass">Hasło</label>
    <input type="password" name="password" id="newregister-pass">
  </div>
  <fieldset class="row buttons">
    <p> 
      <input type="submit" value="Zaloguj się">
    </p>
  </fieldset>
</form>
<a id="filterRegister">Rejestracja</a>
`;

class login_component_Login extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = login_component_template; 
    this.subscribers = [];
    this.subscribe = (subscriber) => {
      this.subscribers.push(subscriber);
    }
  
    this.notifyAll = (event) => {
      this.subscribers.forEach(subscriber => {
        subscriber.notify({event: event})
      });
    }
  }

  connectedCallback() {
    this.querySelector("#filterLoginForm").addEventListener("submit", e => {
      e.preventDefault();
      const username = e.target['username'].value;
      const password = e.target['password'].value;
      getApi().login(username, password).then(result => {
        if (!result.success) return;
        this.notifyAll('loggedIn');
      });
    });
    this.querySelector("#filterRegister").addEventListener("click", e => {
        e.preventDefault();
        this.parentElement.replaceChild(
          document.createElement("li", { is: "register-component" }),
          this
        );
      });
  }
}

customElements.define("login-component", login_component_Login, { extends: "li" });
/* harmony default export */ var login_component = (login_component_Login);

// CONCATENATED MODULE: ./src/components/detected.component.js


const detected_component_template = `
    <a class="tag affect create" style="margin-rigth:10px;">
        <p class="inlblk"></p>
    </a>
`;

class detected_component_Detected extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("inlblk");
    this.innerHTML = detected_component_template;
    this.querySelector("p").innerText = this.dataset.name;
    const detectedWord = this.querySelector("p");
    detectedWord.addEventListener("click", () => {
      getDetected().delete(detectedWord.innerText.trim());
      detectedWord.parentElement.remove();
    });
  }
}

customElements.define("detected-component", detected_component_Detected, { extends: "div" });
/* harmony default export */ var detected_component = (detected_component_Detected);

// CONCATENATED MODULE: ./src/components/detectedlist.component.js



const detectedlist_component_template = `
<div style="padding: 15px; border-bottom: 1px solid grey;">
<h3 style="margin-bottom: 5px">Sugerowane słowa</h3>
<div id="detected-list" class="inlblk vertical-top m-reset-width"></div>
</div>
`;

class detectedlist_component_DetectedList extends HTMLLIElement {
  constructor() {
    super();
    getDetected().subscribe(this);
    this.innerHTML = detectedlist_component_template;

    this.reload = () => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "detected-list-component" }),
        this
      );
    }

    this.notify =  ({event}) => {
      if (event !== 'loaded2') return;
      this.reload();
    }
  }

  connectedCallback() {
    const detecteds = getDetected().list ||  [];
    const list = this.querySelector("#detected-list");
    list.innerHTML = detecteds
      .map(detected => `<div is="detected-component" data-name="${detected}"></div>`)
      .join("");
  }
}

customElements.define("detected-list-component", detectedlist_component_DetectedList, { extends: "li" });
/* harmony default export */ var detectedlist_component = (detectedlist_component_DetectedList);

// CONCATENATED MODULE: ./src/components/app.component.js








const app_component_template = `
<div id="main-div" class="dropdown right" style="margin-left:-230px;">
  <div>
    <ul id="filter-components" class="newregister-drop">
    </ul>
  <div>
</div>
`;

class app_component_App extends HTMLLIElement {
  constructor() {
    super();
    this.innerHTML = app_component_template;
    this.appendChild(
      document.createElement("a", { is: "menu-toggle-component" })
    );
    this.notify = ({event}) => {
      this.parentElement.replaceChild(
        document.createElement("li", { is: "filter-app-component" }),
        this
      );
    }
  }

  connectedCallback() {
    getApi().isLogged().then(success => {
      if (success) {
        this.querySelector('#filter-components').appendChild(
          document.createElement('li', { is: 'word-list-component'})
        );

        this.querySelector('#filter-components').appendChild(
          document.createElement('li', { is: 'user-list-component'})
        );

        this.querySelector('#filter-components').appendChild(
          document.createElement('li', { is: 'detected-list-component'})
        );
        
        const logoutComponent = document.createElement('li', { is: 'logout-component'});
        logoutComponent.subscribe(this);
        this.querySelector('#filter-components').appendChild(logoutComponent);
      } else {
        const loginComponent = document.createElement('li', { is: "login-component" });
        loginComponent.subscribe(this);
        this.querySelector('#filter-components').appendChild(loginComponent);
      }
    });
  }
}
customElements.define("filter-app-component", app_component_App, { extends: "li" });
/* harmony default export */ var app_component = (app_component_App);

// CONCATENATED MODULE: ./src/classes/CommentsList.js


class CommentsList {
    constructor() {
        this.list = [];
        this.tag = '';
    }


    append(comment) {
        this.list.push(comment);
    }

    blockForKeyword(keyword) {
        this.list
            .filter(comment => !comment.blocked)
            .forEach(comment => comment.checkKeyword(keyword))
    }

    unblockForKeyword(keyword) {
        this.list
            .filter(comment => comment.blocked)
            .forEach(comment => comment.unblockForKeyword(keyword))
    }


    blockForAuthor(author) {
        this.list
            .filter(comment => !comment.blocked)
            .forEach(comment => comment.checkAuthor(author))
    }

    unblockForAuthor(author) {
        this.list
            .filter(comment => comment.blocked)
            .forEach(comment => comment.unblockForAuthor(author))
    }
}

CommentsList.blocked_message = 'Ten komentarz został zablokowany';
    

class CommentsList_Comment {
    constructor(element, author) {
        this.element = element;
        this.blocked = false;
        this.oryginalContent = element.innerHTML;
        this.author = author;
    }

    checkKeyword(keyword) {
        if (!this.blocked && this.oryginalContent.toLowerCase().includes(keyword.toLowerCase())) {
            this.blocked = true;
            this.element.innerHTML  = CommentsList.blocked_message;
            getApi().addCommentsWord(keyword);
        }
    }
    
    checkAuthor(author) {
        if (!this.blocked && this.author.toLowerCase() === author.toLowerCase()) {
            this.blocked = true;
            this.element.innerHTML  = CommentsList.blocked_message;
            getApi().addCommentsUser(author);
        } 
    }

    change() {
        this.element.innerHTML =
            this.blocked 
            ? this.oryginalContent 
            : CommentsList.blocked_message; 
        this.blocked = !this.blocked;
    }

    unblockForKeyword(keyword) {
        if (this.blocked && this.oryginalContent.toLowerCase().includes(keyword.toLowerCase())) {
            this.blocked = false;
            this.element.innerHTML  = this.oryginalContent;
        }
    }

    unblockForAuthor(author) {
        if (this.blocked && this.author.toLowerCase() === author.toLowerCase()) {
            this.blocked = false;
            this.element.innerHTML  = this.oryginalContent;
        }
    }
}


// CONCATENATED MODULE: ./src/parsers/wykop-parser.js


function parse(list) {
    list.tag = document.querySelectorAll('.tag')[2].textContent;
    [...document.querySelectorAll('#itemsStream .dC') || []]
        .filter(element => element.querySelector('.author .showProfileSummary'))
        .forEach(function (element) {
            const author = element.querySelector('.author .showProfileSummary').textContent;
            const contentElement = element.querySelector('.text');
            const comment = new CommentsList_Comment(contentElement, author);
            list.append(comment);
            addPicker(contentElement, comment);
    });
}

function addPicker(element, comment) {
    const color = element.style.color;
    element.parentNode.addEventListener("mouseover", function() {
        element.style.color = "red";
    });
    element.parentNode.addEventListener("mouseout", function() {
        element.style.color = color;
    });
    element.parentNode.addEventListener("click", function() {
      comment.change();
    });
  };

  /* harmony default export */ var wykop_parser = (parse);
// CONCATENATED MODULE: ./src/app.js
// ==UserScript==
// @name     FilterApp
// @version  1
// @grant    none
// ==/UserScript==





const app_list = new CommentsList();
wykop_parser(app_list);

const wordList = getKeyWords(app_list);
const userList = getUsersList(app_list);

const menu = document.getElementById("openNaturalSearch");
const menuElement = document.createElement("li", {
  is: "filter-app-component"
});
menu.parentNode.parentNode.appendChild(menuElement);


/***/ })
/******/ ]);