function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) : typeof define === 'function' && define.amd ? define(['jquery'], factory) : (global = global || self, factory(global.jQuery));
})(this, function ($) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var O = 'object';

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global_1 = // eslint-disable-next-line no-undef
  check((typeof globalThis === "undefined" ? "undefined" : _typeof2(globalThis)) == O && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof2(window)) == O && window) || check((typeof self === "undefined" ? "undefined" : _typeof2(self)) == O && self) || check(_typeof2(commonjsGlobal) == O && commonjsGlobal) || // eslint-disable-next-line no-new-func
  Function('return this')();

  var fails = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  }; // Thank's IE8 for his funny defineProperty


  var descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });
  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;
  var objectPropertyIsEnumerable = {
    f: f
  };

  var createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function classofRaw(it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object; // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible = function requireObjectCoercible(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  }; // toObject with fallback for non-array-like ES3 strings


  var toIndexedObject = function toIndexedObject(it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function isObject(it) {
    return _typeof2(it) === 'object' ? it !== null : typeof it === 'function';
  }; // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive = function toPrimitive(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function has(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function documentCreateElement(it) {
    return EXISTS ? document$1.createElement(it) : {};
  }; // Thank's IE8 for his funny defineProperty


  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });
  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };
  var objectGetOwnPropertyDescriptor = {
    f: f$1
  };

  var anObject = function anObject(it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty

  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var objectDefineProperty = {
    f: f$2
  };
  var hide = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function setGlobal(key, value) {
    try {
      hide(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    }

    return value;
  };

  var shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = global_1[SHARED] || setGlobal(SHARED, {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.2.1',
      mode: 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  });
  var functionToString = shared('native-function-to-string', Function.toString);
  var WeakMap = global_1.WeakMap;
  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));
  var id = 0;
  var postfix = Math.random();

  var uid = function uid(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function sharedKey(key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};
  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function enforce(it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap) {
    var store = new WeakMap$1();
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;

    set = function set(it, metadata) {
      wmset.call(store, it, metadata);
      return metadata;
    };

    get = function get(it) {
      return wmget.call(store, it) || {};
    };

    has$1 = function has$1(it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;

    set = function set(it, metadata) {
      hide(it, STATE, metadata);
      return metadata;
    };

    get = function get(it) {
      return has(it, STATE) ? it[STATE] : {};
    };

    has$1 = function has$1(it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };
  var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(functionToString).split('toString');
    shared('inspectSource', function (it) {
      return functionToString.call(it);
    });
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;

      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }

      if (O === global_1) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
    });
  });
  var path = global_1;

  var aFunction = function aFunction(variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var ceil = Math.ceil;
  var floor = Math.floor; // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger

  var toInteger = function toInteger(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min; // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength

  var toLength = function toLength(argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

  var toAbsoluteIndex = function toAbsoluteIndex(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  }; // `Array.prototype.{ indexOf, includes }` methods implementation


  var createMethod = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  var indexOf = arrayIncludes.indexOf;

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !has(hiddenKeys, key) && has(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (has(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
    }

    return result;
  }; // IE8- don't enum bug keys


  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
    f: f$3
  };
  var f$4 = Object.getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f$4
  }; // all object keys, includes non-enumerable and symbols

  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function copyConstructorProperties(target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (_typeof2(sourceProperty) === _typeof2(targetProperty)) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        hide(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  };

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });
  var Symbol$1 = global_1.Symbol;
  var store$1 = shared('wks');

  var wellKnownSymbol = function wellKnownSymbol(name) {
    return store$1[name] || (store$1[name] = nativeSymbol && Symbol$1[name] || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
  }; // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys


  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  }; // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties


  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) {
      objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    }

    return O;
  };
  var html = getBuiltIn('document', 'documentElement');
  var IE_PROTO = sharedKey('IE_PROTO');
  var PROTOTYPE = 'prototype';

  var Empty = function Empty() {
    /* empty */
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var length = enumBugKeys.length;
    var lt = '<';
    var script = 'script';
    var gt = '>';
    var js = 'java' + script + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = String(js);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;

    while (length--) {
      delete _createDict[PROTOTYPE][enumBugKeys[length]];
    }

    return _createDict();
  }; // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create


  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO] = O;
    } else result = _createDict();

    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  hiddenKeys[IE_PROTO] = true;
  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    hide(ArrayPrototype, UNSCOPABLES, objectCreate(null));
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables = function addToUnscopables(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $includes = arrayIncludes.includes; // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes

  _export({
    target: 'Array',
    proto: true
  }, {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables


  addToUnscopables('includes'); // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject

  var toObject = function toObject(argument) {
    return Object(requireObjectCoercible(argument));
  };

  var nativeAssign = Object.assign; // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  // should work with symbols and should have deterministic property order (V8 bug)

  var objectAssign = !nativeAssign || fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;

    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    }

    return T;
  } : nativeAssign; // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign

  _export({
    target: 'Object',
    stat: true,
    forced: Object.assign !== objectAssign
  }, {
    assign: objectAssign
  });

  var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp

  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var notARegexp = function notARegexp(it) {
    if (isRegexp(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    }

    return it;
  };

  var MATCH$1 = wellKnownSymbol('match');

  var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
    var regexp = /./;

    try {
      '/./'[METHOD_NAME](regexp);
    } catch (e) {
      try {
        regexp[MATCH$1] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (f) {
        /* empty */
      }
    }

    return false;
  }; // `String.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.includes


  _export({
    target: 'String',
    proto: true,
    forced: !correctIsRegexpLogic('includes')
  }, {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len


  var whitespaces = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$1 = function createMethod$1(TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
    start: createMethod$1(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
    end: createMethod$1(2),
    // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim
    trim: createMethod$1(3)
  };
  var non = "\u200B\x85\u180E"; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var forcedStringTrimMethod = function forcedStringTrimMethod(METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim; // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim

  _export({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var VERSION = '1.5.2';
  var BLOCK_ROWS = 50;
  var CLUSTER_BLOCKS = 4;
  var DEFAULTS = {
    name: '',
    placeholder: '',
    data: undefined,
    locale: undefined,
    selectAll: true,
    single: undefined,
    singleRadio: false,
    multiple: false,
    hideOptgroupCheckboxes: false,
    multipleWidth: 80,
    width: undefined,
    dropWidth: undefined,
    maxHeight: 250,
    maxHeightUnit: 'px',
    position: 'bottom',
    displayValues: false,
    displayTitle: false,
    displayDelimiter: ', ',
    minimumCountSelected: 3,
    ellipsis: false,
    isOpen: false,
    keepOpen: false,
    openOnHover: false,
    container: null,
    filter: false,
    filterGroup: false,
    filterPlaceholder: '',
    filterAcceptOnEnter: false,
    filterByDataLength: undefined,
    customFilter: function customFilter(label, text) {
      // originalLabel, originalText
      return label.includes(text);
    },
    showClear: false,
    animate: undefined,
    styler: function styler() {
      return false;
    },
    textTemplate: function textTemplate($elm) {
      return $elm[0].innerHTML.trim();
    },
    labelTemplate: function labelTemplate($elm) {
      return $elm[0].getAttribute('label');
    },
    onOpen: function onOpen() {
      return false;
    },
    onClose: function onClose() {
      return false;
    },
    onCheckAll: function onCheckAll() {
      return false;
    },
    onUncheckAll: function onUncheckAll() {
      return false;
    },
    onFocus: function onFocus() {
      return false;
    },
    onBlur: function onBlur() {
      return false;
    },
    onOptgroupClick: function onOptgroupClick() {
      return false;
    },
    onClick: function onClick() {
      return false;
    },
    onFilter: function onFilter() {
      return false;
    },
    onClear: function onClear() {
      return false;
    },
    onAfterCreate: function onAfterCreate() {
      return false;
    }
  };
  var EN = {
    formatSelectAll: function formatSelectAll() {
      return '[Select all]';
    },
    formatAllSelected: function formatAllSelected() {
      return 'All selected';
    },
    formatCountSelected: function formatCountSelected(count, total) {
      return count + ' of ' + total + ' selected';
    },
    formatNoMatchesFound: function formatNoMatchesFound() {
      return 'No matches found';
    }
  };
  var METHODS = ['getOptions', 'refreshOptions', 'getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'check', 'uncheck', 'checkAll', 'uncheckAll', 'checkInvert', 'focus', 'blur', 'refresh', 'destroy'];
  Object.assign(DEFAULTS, EN);
  var Constants = {
    VERSION: VERSION,
    BLOCK_ROWS: BLOCK_ROWS,
    CLUSTER_BLOCKS: CLUSTER_BLOCKS,
    DEFAULTS: DEFAULTS,
    METHODS: METHODS,
    LOCALES: {
      en: EN,
      'en-US': EN
    }
  }; // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray

  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;
  var toString$1 = {}.toString;
  var windowNames = (typeof window === "undefined" ? "undefined" : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return nativeGetOwnPropertyNames(it);
    } catch (error) {
      return windowNames.slice();
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
  };

  var objectGetOwnPropertyNamesExternal = {
    f: f$5
  };
  var f$6 = wellKnownSymbol;
  var wrappedWellKnownSymbol = {
    f: f$6
  };
  var defineProperty = objectDefineProperty.f;

  var defineWellKnownSymbol = function defineWellKnownSymbol(NAME) {
    var _Symbol = path.Symbol || (path.Symbol = {});

    if (!has(_Symbol, NAME)) defineProperty(_Symbol, NAME, {
      value: wrappedWellKnownSymbol.f(NAME)
    });
  };

  var defineProperty$1 = objectDefineProperty.f;
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  var setToStringTag = function setToStringTag(it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
      defineProperty$1(it, TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }
  };

  var aFunction$1 = function aFunction$1(it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  }; // optional / simple context binding


  var bindContext = function bindContext(fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };

      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate = function arraySpeciesCreate(originalArray, length) {
    var C;

    if (isArray(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }

    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

  var createMethod$2 = function createMethod$2(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = bindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return value;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  push.call(target, value);
                // filter
              } else if (IS_EVERY) return false; // every
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6)
  };
  var $forEach = arrayIteration.forEach;
  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE$1];
  var $Symbol = global_1.Symbol;
  var JSON = global_1.JSON;
  var nativeJSONStringify = JSON && JSON.stringify;
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var nativeDefineProperty$1 = objectDefineProperty.f;
  var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks');
  var QObject = global_1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = descriptors && fails(function () {
    return objectCreate(nativeDefineProperty$1({}, 'a', {
      get: function get() {
        return nativeDefineProperty$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty$1(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
      nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty$1;

  var wrap = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!descriptors) symbol.description = description;
    return symbol;
  };

  var isSymbol = nativeSymbol && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
    return _typeof2(it) == 'symbol';
  } : function (it) {
    return Object(it) instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPrimitive(P, true);
    anObject(Attributes);

    if (has(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = objectCreate(Attributes, {
          enumerable: createPropertyDescriptor(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty$1(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true);
    var enumerable = nativePropertyIsEnumerable$1.call(this, P);
    if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPrimitive(P, true);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.github.io/ecma262/#sec-symbol-constructor


  if (!nativeSymbol) {
    $Symbol = function _Symbol2() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
      var tag = uid(description);

      var setter = function setter(value) {
        if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };

      if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
        configurable: true,
        set: setter
      });
      return wrap(tag, description);
    };

    redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
      return getInternalState(this).tag;
    });
    objectPropertyIsEnumerable.f = $propertyIsEnumerable;
    objectDefineProperty.f = $defineProperty;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

    if (descriptors) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });
      {
        redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }

    wrappedWellKnownSymbol.f = function (name) {
      return wrap(wellKnownSymbol(name), name);
    };
  }

  _export({
    global: true,
    wrap: true,
    forced: !nativeSymbol,
    sham: !nativeSymbol
  }, {
    Symbol: $Symbol
  });

  $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol(name);
  });

  _export({
    target: SYMBOL,
    stat: true,
    forced: !nativeSymbol
  }, {
    // `Symbol.for` method
    // https://tc39.github.io/ecma262/#sec-symbol.for
    'for': function _for(key) {
      var string = String(key);
      if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.github.io/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });

  _export({
    target: 'Object',
    stat: true,
    forced: !nativeSymbol,
    sham: !descriptors
  }, {
    // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });

  _export({
    target: 'Object',
    stat: true,
    forced: !nativeSymbol
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443


  _export({
    target: 'Object',
    stat: true,
    forced: fails(function () {
      objectGetOwnPropertySymbols.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return objectGetOwnPropertySymbols.f(toObject(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.github.io/ecma262/#sec-json.stringify


  JSON && _export({
    target: 'JSON',
    stat: true,
    forced: !nativeSymbol || fails(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

      return nativeJSONStringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || nativeJSONStringify({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || nativeJSONStringify(Object(symbol)) != '{}';
    })
  }, {
    stringify: function stringify(it) {
      var args = [it];
      var index = 1;
      var replacer, $replacer;

      while (arguments.length > index) {
        args.push(arguments[index++]);
      }

      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return nativeJSONStringify.apply(JSON, args);
    }
  }); // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive

  if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf); // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag

  setToStringTag($Symbol, SYMBOL);
  hiddenKeys[HIDDEN] = true;
  var defineProperty$2 = objectDefineProperty.f;
  var NativeSymbol = global_1.Symbol;

  if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

    var SymbolWrapper = function _Symbol3() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;
    var symbolToString = symbolPrototype.toString;

    var _native = String(NativeSymbol('test')) == 'Symbol(test)';

    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$2(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has(EmptyStringDescriptionStore, symbol)) return '';
        var desc = _native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    _export({
      global: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  } // `Symbol.iterator` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.iterator


  defineWellKnownSymbol('iterator');

  var createProperty = function createProperty(object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var SPECIES$1 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
    return !fails(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$1] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
  var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  _export({
    target: 'Array',
    proto: true,
    forced: FORCED
  }, {
    concat: function concat(arg) {
      // eslint-disable-line no-unused-vars
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var $filter = arrayIteration.filter; // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !arrayMethodHasSpeciesSupport('filter')
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $find = arrayIteration.find;
  var FIND = 'find';
  var SKIPS_HOLES = true; // Shouldn't skip holes

  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES = false;
  }); // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find

  _export({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables


  addToUnscopables(FIND);
  var correctPrototypeGetter = !fails(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var IE_PROTO$1 = sharedKey('IE_PROTO');
  var ObjectPrototype$1 = Object.prototype; // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof

  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectPrototype$1 : null;
  };
  var ITERATOR = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS = false;

  var returnThis = function returnThis() {
    return this;
  }; // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  if (!has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };
  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

  var createIteratorConstructor = function createIteratorConstructor(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    return IteratorConstructor;
  };

  var aPossiblePrototype = function aPossiblePrototype(it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  }; // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.

  /* eslint-disable no-proto */


  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis$1 = function returnThis$1() {
    return this;
  };

  var defineIterator = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
            hide(CurrentIteratorPrototype, ITERATOR$1, returnThis$1);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    } // define iterator


    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      hide(IterablePrototype, ITERATOR$1, defaultIterator);
    } // export additional methods


    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
      }, methods);
    }

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = internalState.set;
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.github.io/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var sloppyArrayMethod = function sloppyArrayMethod(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !method || !fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  var nativeJoin = [].join;
  var ES3_STRINGS = indexedObject != Object;
  var SLOPPY_METHOD = sloppyArrayMethod('join', ','); // `Array.prototype.join` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.join

  _export({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || SLOPPY_METHOD
  }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  var $map = arrayIteration.map; // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !arrayMethodHasSpeciesSupport('map')
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var SPECIES$2 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max; // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  _export({
    target: 'Array',
    proto: true,
    forced: !arrayMethodHasSpeciesSupport('slice')
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var defineProperty$3 = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name'; // Function instances `.name` property
  // https://tc39.github.io/ecma262/#sec-function-instances-name

  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty$3(FunctionPrototype, NAME, {
      configurable: true,
      get: function get() {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

  var createMethod$3 = function createMethod$3(TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject(it);
      var keys = objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!descriptors || propertyIsEnumerable.call(O, key)) {
          result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.github.io/ecma262/#sec-object.entries
    entries: createMethod$3(true),
    // `Object.values` method
    // https://tc39.github.io/ecma262/#sec-object.values
    values: createMethod$3(false)
  };
  var $entries = objectToArray.entries; // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries

  _export({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var FAILS_ON_PRIMITIVES = fails(function () {
    objectKeys(1);
  }); // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
  }, {
    keys: function keys(it) {
      return objectKeys(toObject(it));
    }
  });

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof = function classof(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG$2] = 'z'; // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

  var objectToString = String(test) !== '[object z]' ? function toString() {
    return '[object ' + classof(this) + ']';
  } : test.toString;
  var ObjectPrototype$2 = Object.prototype; // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

  if (objectToString !== ObjectPrototype$2.toString) {
    redefine(ObjectPrototype$2, 'toString', objectToString, {
      unsafe: true
    });
  } // `String.prototype.{ codePointAt, at }` methods implementation


  var createMethod$4 = function createMethod$4(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$4(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$4(true)
  };
  var charAt = stringMultibyte.charAt;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = internalState.set;
  var getInternalState$2 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  }); // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags

  var regexpFlags = function regexpFlags() {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.

  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;
  var SPECIES$3 = wellKnownSymbol('species');
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  }); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      re.exec = function () {
        execCalled = true;
        return null;
      };

      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};

        re.constructor[SPECIES$3] = function () {
          return re;
        };
      }

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];
      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return regexMethod.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return regexMethod.call(string, this);
      });
      if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
    }
  };

  var SPECIES$4 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.github.io/ecma262/#sec-speciesconstructor

  var speciesConstructor = function speciesConstructor(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction$1(S);
  };

  var charAt$1 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex

  var advanceStringIndex = function advanceStringIndex(S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  }; // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec


  var regexpExecAbstract = function regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (_typeof2(result) !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var arrayPush = [].push;
  var min$2 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

  var SUPPORTS_Y = !fails(function () {
    return !RegExp(MAX_UINT32, 'y');
  }); // @@split logic

  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output.length > lim ? output.slice(0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;

        if (z === null || (e = min$2(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  }, !SUPPORTS_Y); // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  var $forEach$1 = arrayIteration.forEach; // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

  var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      hide(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME$1 in domIterables) {
    var Collection$1 = global_1[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;

    if (CollectionPrototype$1) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[ITERATOR$2] !== ArrayValues) try {
        hide(CollectionPrototype$1, ITERATOR$2, ArrayValues);
      } catch (error) {
        CollectionPrototype$1[ITERATOR$2] = ArrayValues;
      }
      if (!CollectionPrototype$1[TO_STRING_TAG$3]) hide(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
      if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          hide(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  var VirtualScroll = /*#__PURE__*/function () {
    function VirtualScroll(options) {
      var _this = this;

      _classCallCheck(this, VirtualScroll);

      this.rows = options.rows;
      this.scrollEl = options.scrollEl;
      this.contentEl = options.contentEl;
      this.callback = options.callback;
      this.cache = {};
      this.scrollTop = this.scrollEl.scrollTop;
      this.initDOM(this.rows);
      this.scrollEl.scrollTop = this.scrollTop;
      this.lastCluster = 0;

      var onScroll = function onScroll() {
        if (_this.lastCluster !== (_this.lastCluster = _this.getNum())) {
          _this.initDOM(_this.rows);

          _this.callback();
        }
      };

      this.scrollEl.addEventListener('scroll', onScroll, false);

      this.destroy = function () {
        _this.contentEl.innerHtml = '';

        _this.scrollEl.removeEventListener('scroll', onScroll, false);
      };
    }

    _createClass(VirtualScroll, [{
      key: "initDOM",
      value: function initDOM(rows) {
        if (typeof this.clusterHeight === 'undefined') {
          this.cache.scrollTop = this.scrollEl.scrollTop;
          this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0];
          this.getRowsHeight(rows);
        }

        var data = this.initData(rows, this.getNum());
        var thisRows = data.rows.join('');
        var dataChanged = this.checkChanges('data', thisRows);
        var topOffsetChanged = this.checkChanges('top', data.topOffset);
        var bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset);
        var html = [];

        if (dataChanged && topOffsetChanged) {
          if (data.topOffset) {
            html.push(this.getExtra('top', data.topOffset));
          }

          html.push(thisRows);

          if (data.bottomOffset) {
            html.push(this.getExtra('bottom', data.bottomOffset));
          }

          this.contentEl.innerHTML = html.join('');
        } else if (bottomOffsetChanged) {
          this.contentEl.lastChild.style.height = "".concat(data.bottomOffset, "px");
        }
      }
    }, {
      key: "getRowsHeight",
      value: function getRowsHeight() {
        if (typeof this.itemHeight === 'undefined') {
          var nodes = this.contentEl.children;
          var node = nodes[Math.floor(nodes.length / 2)];
          this.itemHeight = node.offsetHeight;
        }

        this.blockHeight = this.itemHeight * Constants.BLOCK_ROWS;
        this.clusterRows = Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS;
        this.clusterHeight = this.blockHeight * Constants.CLUSTER_BLOCKS;
      }
    }, {
      key: "getNum",
      value: function getNum() {
        this.scrollTop = this.scrollEl.scrollTop;
        return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0;
      }
    }, {
      key: "initData",
      value: function initData(rows, num) {
        if (rows.length < Constants.BLOCK_ROWS) {
          return {
            topOffset: 0,
            bottomOffset: 0,
            rowsAbove: 0,
            rows: rows
          };
        }

        var start = Math.max((this.clusterRows - Constants.BLOCK_ROWS) * num, 0);
        var end = start + this.clusterRows;
        var topOffset = Math.max(start * this.itemHeight, 0);
        var bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0);
        var thisRows = [];
        var rowsAbove = start;

        if (topOffset < 1) {
          rowsAbove++;
        }

        for (var i = start; i < end; i++) {
          rows[i] && thisRows.push(rows[i]);
        }

        this.dataStart = start;
        this.dataEnd = end;
        return {
          topOffset: topOffset,
          bottomOffset: bottomOffset,
          rowsAbove: rowsAbove,
          rows: thisRows
        };
      }
    }, {
      key: "checkChanges",
      value: function checkChanges(type, value) {
        var changed = value !== this.cache[type];
        this.cache[type] = value;
        return changed;
      }
    }, {
      key: "getExtra",
      value: function getExtra(className, height) {
        var tag = document.createElement('li');
        tag.className = "virtual-scroll-".concat(className);

        if (height) {
          tag.style.height = "".concat(height, "px");
        }

        return tag.outerHTML;
      }
    }]);

    return VirtualScroll;
  }();

  var max$2 = Math.max;
  var min$3 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // @@replace logic


  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$2(min$3(toInteger(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          captures.push(maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;

        switch (ch.charAt(0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return str.slice(0, position);

          case "'":
            return str.slice(tailPos);

          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;

            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    }
  });

  var compareObjects = function compareObjects(objectA, objectB, compareLength) {
    var aKeys = Object.keys(objectA);
    var bKeys = Object.keys(objectB);

    if (compareLength && aKeys.length !== bKeys.length) {
      return false;
    }

    for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
      var key = _aKeys[_i];

      if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
        return false;
      }
    }

    return true;
  };

  var removeDiacritics = function removeDiacritics(str) {
    if (str.normalize) {
      return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
    }

    var defaultDiacriticsRemovalMap = [{
      'base': 'A',
      'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
    }, {
      'base': 'AA',
      'letters': /[\uA732]/g
    }, {
      'base': 'AE',
      'letters': /[\u00C6\u01FC\u01E2]/g
    }, {
      'base': 'AO',
      'letters': /[\uA734]/g
    }, {
      'base': 'AU',
      'letters': /[\uA736]/g
    }, {
      'base': 'AV',
      'letters': /[\uA738\uA73A]/g
    }, {
      'base': 'AY',
      'letters': /[\uA73C]/g
    }, {
      'base': 'B',
      'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
    }, {
      'base': 'C',
      'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
    }, {
      'base': 'D',
      'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
    }, {
      'base': 'DZ',
      'letters': /[\u01F1\u01C4]/g
    }, {
      'base': 'Dz',
      'letters': /[\u01F2\u01C5]/g
    }, {
      'base': 'E',
      'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
    }, {
      'base': 'F',
      'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
    }, {
      'base': 'G',
      'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
    }, {
      'base': 'H',
      'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
    }, {
      'base': 'I',
      'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
    }, {
      'base': 'J',
      'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g
    }, {
      'base': 'K',
      'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
    }, {
      'base': 'L',
      'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
    }, {
      'base': 'LJ',
      'letters': /[\u01C7]/g
    }, {
      'base': 'Lj',
      'letters': /[\u01C8]/g
    }, {
      'base': 'M',
      'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
    }, {
      'base': 'N',
      'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
    }, {
      'base': 'NJ',
      'letters': /[\u01CA]/g
    }, {
      'base': 'Nj',
      'letters': /[\u01CB]/g
    }, {
      'base': 'O',
      'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
    }, {
      'base': 'OI',
      'letters': /[\u01A2]/g
    }, {
      'base': 'OO',
      'letters': /[\uA74E]/g
    }, {
      'base': 'OU',
      'letters': /[\u0222]/g
    }, {
      'base': 'P',
      'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
    }, {
      'base': 'Q',
      'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
    }, {
      'base': 'R',
      'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
    }, {
      'base': 'S',
      'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
    }, {
      'base': 'T',
      'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
    }, {
      'base': 'TZ',
      'letters': /[\uA728]/g
    }, {
      'base': 'U',
      'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
    }, {
      'base': 'V',
      'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
    }, {
      'base': 'VY',
      'letters': /[\uA760]/g
    }, {
      'base': 'W',
      'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
    }, {
      'base': 'X',
      'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
    }, {
      'base': 'Y',
      'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
    }, {
      'base': 'Z',
      'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
    }, {
      'base': 'a',
      'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
    }, {
      'base': 'aa',
      'letters': /[\uA733]/g
    }, {
      'base': 'ae',
      'letters': /[\u00E6\u01FD\u01E3]/g
    }, {
      'base': 'ao',
      'letters': /[\uA735]/g
    }, {
      'base': 'au',
      'letters': /[\uA737]/g
    }, {
      'base': 'av',
      'letters': /[\uA739\uA73B]/g
    }, {
      'base': 'ay',
      'letters': /[\uA73D]/g
    }, {
      'base': 'b',
      'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
    }, {
      'base': 'c',
      'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
    }, {
      'base': 'd',
      'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
    }, {
      'base': 'dz',
      'letters': /[\u01F3\u01C6]/g
    }, {
      'base': 'e',
      'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
    }, {
      'base': 'f',
      'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
    }, {
      'base': 'g',
      'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
    }, {
      'base': 'h',
      'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
    }, {
      'base': 'hv',
      'letters': /[\u0195]/g
    }, {
      'base': 'i',
      'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
    }, {
      'base': 'j',
      'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
    }, {
      'base': 'k',
      'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
    }, {
      'base': 'l',
      'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
    }, {
      'base': 'lj',
      'letters': /[\u01C9]/g
    }, {
      'base': 'm',
      'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
    }, {
      'base': 'n',
      'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
    }, {
      'base': 'nj',
      'letters': /[\u01CC]/g
    }, {
      'base': 'o',
      'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
    }, {
      'base': 'oi',
      'letters': /[\u01A3]/g
    }, {
      'base': 'ou',
      'letters': /[\u0223]/g
    }, {
      'base': 'oo',
      'letters': /[\uA74F]/g
    }, {
      'base': 'p',
      'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
    }, {
      'base': 'q',
      'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
    }, {
      'base': 'r',
      'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
    }, {
      'base': 's',
      'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
    }, {
      'base': 't',
      'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
    }, {
      'base': 'tz',
      'letters': /[\uA729]/g
    }, {
      'base': 'u',
      'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
    }, {
      'base': 'v',
      'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
    }, {
      'base': 'vy',
      'letters': /[\uA761]/g
    }, {
      'base': 'w',
      'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
    }, {
      'base': 'x',
      'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
    }, {
      'base': 'y',
      'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
    }, {
      'base': 'z',
      'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
    }];
    return defaultDiacriticsRemovalMap.reduce(function (string, _ref) {
      var letters = _ref.letters,
          base = _ref.base;
      return string.replace(letters, base);
    }, str);
  };

  var setDataKeys = function setDataKeys(data) {
    var total = 0;
    data.forEach(function (row, i) {
      if (row.type === 'optgroup') {
        row._key = "group_".concat(i);
        row.visible = typeof row.visible === 'undefined' ? true : row.visible;
        row.children.forEach(function (child, j) {
          child._key = "option_".concat(i, "_").concat(j);
          child.visible = typeof child.visible === 'undefined' ? true : child.visible;
        });
        total += row.children.length;
      } else {
        row._key = "option_".concat(i);
        row.visible = typeof row.visible === 'undefined' ? true : row.visible;
        total += 1;
      }
    });
    return total;
  };

  var findByParam = function findByParam(data, param, value) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var row = _step.value;

        if (row[param] === value || row[param] === +row[param] + '' && +row[param] === value) {
          return row;
        }

        if (row.type === 'optgroup') {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = row.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var child = _step2.value;

              if (child[param] === value || child[param] === +child[param] + '' && +child[param] === value) {
                return child;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var removeUndefined = function removeUndefined(obj) {
    Object.keys(obj).forEach(function (key) {
      return obj[key] === undefined ? delete obj[key] : '';
    });
    return obj;
  };

  var getDocumentClickEvent = function getDocumentClickEvent() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    id = id || "".concat(+new Date()).concat(~~(Math.random() * 1000000));
    return "click.multiple-select-".concat(id);
  };

  var MultipleSelect = /*#__PURE__*/function () {
    function MultipleSelect($el, options) {
      _classCallCheck(this, MultipleSelect);

      this.$el = $el;
      this.options = $.extend({}, Constants.DEFAULTS, options);
    }

    _createClass(MultipleSelect, [{
      key: "init",
      value: function init() {
        this.initLocale();
        this.initContainer();
        this.initData();
        this.initSelected(true);
        this.initFilter();
        this.initDrop();
        this.initView();
        this.options.onAfterCreate();
      }
    }, {
      key: "initLocale",
      value: function initLocale() {
        if (this.options.locale) {
          var locales = $.fn.multipleSelect.locales;
          var parts = this.options.locale.split(/-|_/);
          parts[0] = parts[0].toLowerCase();

          if (parts[1]) {
            parts[1] = parts[1].toUpperCase();
          }

          if (locales[this.options.locale]) {
            $.extend(this.options, locales[this.options.locale]);
          } else if (locales[parts.join('-')]) {
            $.extend(this.options, locales[parts.join('-')]);
          } else if (locales[parts[0]]) {
            $.extend(this.options, locales[parts[0]]);
          }
        }
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        var _this = this;

        var el = this.$el[0];
        var name = el.getAttribute('name') || this.options.name || ''; // hide select element

        this.$el.hide(); // label element

        this.$label = this.$el.closest('label');

        if (!this.$label.length && this.$el.attr('id')) {
          this.$label = $("label[for=\"".concat(this.$el.attr('id'), "\"]"));
        }

        if (this.$label.find('>input').length) {
          this.$label = null;
        } // single or multiple


        if (typeof this.options.single === 'undefined') {
          this.options.single = el.getAttribute('multiple') === null;
        } // restore class and title from select element


        this.$parent = $("\n      <div class=\"ms-parent ".concat(el.getAttribute('class') || '', "\"\n      title=\"").concat(el.getAttribute('title') || '', "\" />\n    ")); // add placeholder to choice button

        this.options.placeholder = this.options.placeholder || el.getAttribute('placeholder') || '';
        this.tabIndex = el.getAttribute('tabindex');
        var tabIndex = '';

        if (this.tabIndex !== null) {
          this.$el.attr('tabindex', -1);
          tabIndex = this.tabIndex && "tabindex=\"".concat(this.tabIndex, "\"");
        }

        this.$choice = $("\n      <button type=\"button\" class=\"ms-choice\"".concat(tabIndex, ">\n      <span class=\"placeholder\">").concat(this.options.placeholder, "</span>\n      ").concat(this.options.showClear ? '<div class="icon-close"></div>' : '', "\n      <div class=\"icon-caret\"></div>\n      </button>\n    ")); // default position is bottom

        this.$drop = $("<div class=\"ms-drop ".concat(this.options.position, "\" />"));
        this.$close = this.$choice.find('.icon-close');

        if (this.options.dropWidth) {
          this.$drop.css('width', this.options.dropWidth);
        }

        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (el.disabled) {
          this.$choice.addClass('disabled');
        }

        this.selectAllName = "data-name=\"selectAll".concat(name, "\"");
        this.selectGroupName = "data-name=\"selectGroup".concat(name, "\"");
        this.selectItemName = "data-name=\"selectItem".concat(name, "\"");

        if (!this.options.keepOpen) {
          var clickEvent = getDocumentClickEvent(this.$el.attr('id'));
          $(document).off(clickEvent).on(clickEvent, function (e) {
            if ($(e.target)[0] === _this.$choice[0] || $(e.target).parents('.ms-choice')[0] === _this.$choice[0]) {
              return;
            }

            if (($(e.target)[0] === _this.$drop[0] || $(e.target).parents('.ms-drop')[0] !== _this.$drop[0] && e.target !== el) && _this.options.isOpen) {
              _this.close();
            }
          });
        }
      }
    }, {
      key: "initData",
      value: function initData() {
        var _this2 = this;

        var data = [];

        if (this.options.data) {
          if (Array.isArray(this.options.data)) {
            this.data = this.options.data.map(function (it) {
              if (typeof it === 'string' || typeof it === 'number') {
                return {
                  text: it,
                  value: it
                };
              }

              return it;
            });
          } else if (_typeof(this.options.data) === 'object') {
            for (var _i = 0, _Object$entries = Object.entries(this.options.data); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  value = _Object$entries$_i[0],
                  text = _Object$entries$_i[1];

              data.push({
                value: value,
                text: text
              });
            }

            this.data = data;
          }
        } else {
          $.each(this.$el.children(), function (i, elm) {
            var row = _this2.initRow(i, elm);

            if (row) {
              data.push(_this2.initRow(i, elm));
            }
          });
          this.options.data = data;
          this.data = data;
          this.fromHtml = true;
        }

        this.dataTotal = setDataKeys(this.data);
      }
    }, {
      key: "initRow",
      value: function initRow(i, elm, groupDisabled) {
        var _this3 = this;

        var row = {};
        var $elm = $(elm);

        if ($elm.is('option')) {
          row.type = 'option';
          row.text = this.options.textTemplate($elm);
          row.value = elm.value;
          row.visible = true;
          row.selected = !!elm.selected;
          row.disabled = groupDisabled || elm.disabled;
          row.classes = elm.getAttribute('class') || '';
          row.title = elm.getAttribute('title') || '';

          if ($elm.data('value')) {
            row._value = $elm.data('value'); // value for object
          }

          if (Object.keys($elm.data()).length) {
            row._data = $elm.data();
          }

          return row;
        }

        if ($elm.is('optgroup')) {
          row.type = 'optgroup';
          row.label = this.options.labelTemplate($elm);
          row.visible = true;
          row.selected = !!elm.selected;
          row.disabled = elm.disabled;
          row.children = [];

          if (Object.keys($elm.data()).length) {
            row._data = $elm.data();
          }

          $.each($elm.children(), function (j, elem) {
            row.children.push(_this3.initRow(j, elem, row.disabled));
          });
          return row;
        }

        return null;
      }
    }, {
      key: "initSelected",
      value: function initSelected(ignoreTrigger) {
        var selectedTotal = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var row = _step.value;

            if (row.type === 'optgroup') {
              var selectedCount = row.children.filter(function (child) {
                return child.selected && !child.disabled && child.visible;
              }).length;
              row.selected = selectedCount && selectedCount === row.children.filter(function (child) {
                return !child.disabled && child.visible;
              }).length;
              selectedTotal += selectedCount;
            } else {
              selectedTotal += row.selected && !row.disabled && row.visible ? 1 : 0;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.allSelected = this.data.filter(function (row) {
          return row.selected && !row.disabled && row.visible;
        }).length === this.data.filter(function (row) {
          return !row.disabled && row.visible;
        }).length;

        if (!ignoreTrigger) {
          if (this.allSelected) {
            this.options.onCheckAll();
          } else if (selectedTotal === 0) {
            this.options.onUncheckAll();
          }
        }
      }
    }, {
      key: "initFilter",
      value: function initFilter() {
        this.filterText = '';

        if (this.options.filter || !this.options.filterByDataLength) {
          return;
        }

        var length = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var option = _step2.value;

            if (option.type === 'optgroup') {
              length += option.children.length;
            } else {
              length += 1;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.options.filter = length > this.options.filterByDataLength;
      }
    }, {
      key: "initDrop",
      value: function initDrop() {
        var _this4 = this;

        this.initList();
        this.update(true);

        if (this.options.isOpen) {
          setTimeout(function () {
            _this4.open();
          }, 50);
        }

        if (this.options.openOnHover) {
          this.$parent.hover(function () {
            _this4.open();
          }, function () {
            _this4.close();
          });
        }
      }
    }, {
      key: "initList",
      value: function initList() {
        var html = [];

        if (this.options.filter) {
          html.push("\n        <div class=\"ms-search\">\n          <input type=\"text\" autocomplete=\"off\" autocorrect=\"off\"\n            autocapitalize=\"off\" spellcheck=\"false\"\n            placeholder=\"".concat(this.options.filterPlaceholder, "\">\n        </div>\n      "));
        }

        html.push('<ul></ul>');
        this.$drop.html(html.join(''));
        this.$ul = this.$drop.find('>ul');
        this.initListItems();
      }
    }, {
      key: "initListItems",
      value: function initListItems() {
        var _this5 = this;

        var rows = this.getListRows();
        var offset = 0;

        if (this.options.selectAll && !this.options.single) {
          offset = -1;
        }

        if (rows.length > Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS) {
          if (this.virtualScroll) {
            this.virtualScroll.destroy();
          }

          var dropVisible = this.$drop.is(':visible');

          if (!dropVisible) {
            this.$drop.css('left', -10000).show();
          }

          var updateDataOffset = function updateDataOffset() {
            _this5.updateDataStart = _this5.virtualScroll.dataStart + offset;
            _this5.updateDataEnd = _this5.virtualScroll.dataEnd + offset;

            if (_this5.updateDataStart < 0) {
              _this5.updateDataStart = 0;
            }

            if (_this5.updateDataEnd > _this5.data.length) {
              _this5.updateDataEnd = _this5.data.length;
            }
          };

          this.virtualScroll = new VirtualScroll({
            rows: rows,
            scrollEl: this.$ul[0],
            contentEl: this.$ul[0],
            callback: function callback() {
              updateDataOffset();

              _this5.events();
            }
          });
          updateDataOffset();

          if (!dropVisible) {
            this.$drop.css('left', 0).hide();
          }
        } else {
          this.$ul.html(rows.join(''));
          this.updateDataStart = 0;
          this.updateDataEnd = this.updateData.length;
          this.virtualScroll = null;
        }

        this.events();
      }
    }, {
      key: "getListRows",
      value: function getListRows() {
        var _this6 = this;

        var rows = [];

        if (this.options.selectAll && !this.options.single) {
          rows.push("\n        <li class=\"ms-select-all\">\n        <label>\n        <input type=\"checkbox\" ".concat(this.selectAllName).concat(this.allSelected ? ' checked="checked"' : '', " />\n        <span>").concat(this.options.formatSelectAll(), "</span>\n        </label>\n        </li>\n      "));
        }

        this.updateData = [];
        this.data.forEach(function (row) {
          rows.push.apply(rows, _toConsumableArray(_this6.initListItem(row)));
        });
        rows.push("<li class=\"ms-no-results\">".concat(this.options.formatNoMatchesFound(), "</li>"));
        return rows;
      }
    }, {
      key: "initListItem",
      value: function initListItem(row) {
        var _this7 = this;

        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var title = row.title ? "title=\"".concat(row.title, "\"") : '';
        var multiple = this.options.multiple ? 'multiple' : '';
        var type = this.options.single ? 'radio' : 'checkbox';
        var classes = '';

        if (!row.visible) {
          return [];
        }

        this.updateData.push(row);

        if (this.options.single && !this.options.singleRadio) {
          classes = 'hide-radio ';
        }

        if (row.selected) {
          classes += 'selected ';
        }

        if (row.type === 'optgroup') {
          var _customStyle = this.options.styler(row);

          var _style = _customStyle ? "style=\"".concat(_customStyle, "\"") : '';

          var html = [];
          var group = this.options.hideOptgroupCheckboxes || this.options.single ? "<span ".concat(this.selectGroupName, " data-key=\"").concat(row._key, "\"></span>") : "<input type=\"checkbox\"\n          ".concat(this.selectGroupName, "\n          data-key=\"").concat(row._key, "\"\n          ").concat(row.selected ? ' checked="checked"' : '', "\n          ").concat(row.disabled ? ' disabled="disabled"' : '', "\n        >");

          if (!classes.includes('hide-radio') && (this.options.hideOptgroupCheckboxes || this.options.single)) {
            classes += 'hide-radio ';
          }

          html.push("\n        <li class=\"group ".concat(classes, "\" ").concat(_style, ">\n        <label class=\"optgroup").concat(this.options.single || row.disabled ? ' disabled' : '', "\">\n        ").concat(group).concat(row.label, "\n        </label>\n        </li>\n      "));
          row.children.forEach(function (child) {
            html.push.apply(html, _toConsumableArray(_this7.initListItem(child, 1)));
          });
          return html;
        }

        var customStyle = this.options.styler(row);
        var style = customStyle ? "style=\"".concat(customStyle, "\"") : '';
        classes += row.classes || '';

        if (level && this.options.single) {
          classes += "option-level-".concat(level, " ");
        }

        return ["\n      <li class=\"".concat(multiple, " ").concat(classes, "\" ").concat(title, " ").concat(style, ">\n      <label class=\"").concat(row.disabled ? 'disabled' : '', "\">\n      <input type=\"").concat(type, "\"\n        value=\"").concat(row.value, "\"\n        data-key=\"").concat(row._key, "\"\n        ").concat(this.selectItemName, "\n        ").concat(row.selected ? ' checked="checked"' : '', "\n        ").concat(row.disabled ? ' disabled="disabled"' : '', "\n      >\n      <span>").concat(row.text, "</span>\n      </label>\n      </li>\n    ")];
      }
    }, {
      key: "events",
      value: function events() {
        var _this8 = this;

        this.$searchInput = this.$drop.find('.ms-search input');
        this.$selectAll = this.$drop.find("input[".concat(this.selectAllName, "]"));
        this.$selectGroups = this.$drop.find("input[".concat(this.selectGroupName, "],span[").concat(this.selectGroupName, "]"));
        this.$selectItems = this.$drop.find("input[".concat(this.selectItemName, "]:enabled"));
        this.$disableItems = this.$drop.find("input[".concat(this.selectItemName, "]:disabled"));
        this.$noResults = this.$drop.find('.ms-no-results');

        var toggleOpen = function toggleOpen(e) {
          e.preventDefault();

          if ($(e.target).hasClass('icon-close')) {
            return;
          }

          _this8[_this8.options.isOpen ? 'close' : 'open']();
        };

        if (this.$label && this.$label.length) {
          this.$label.off('click').on('click', function (e) {
            if (e.target.nodeName.toLowerCase() !== 'label') {
              return;
            }

            toggleOpen(e);

            if (!_this8.options.filter || !_this8.options.isOpen) {
              _this8.focus();
            }

            e.stopPropagation(); // Causes lost focus otherwise
          });
        }

        this.$choice.off('click').on('click', toggleOpen).off('focus').on('focus', this.options.onFocus).off('blur').on('blur', this.options.onBlur);
        this.$parent.off('keydown').on('keydown', function (e) {
          // esc key
          if (e.which === 27 && !_this8.options.keepOpen) {
            _this8.close();

            _this8.$choice.focus();
          }
        });
        this.$close.off('click').on('click', function (e) {
          e.preventDefault();

          _this8._checkAll(false, true);

          _this8.initSelected(false);

          _this8.updateSelected();

          _this8.update();

          _this8.options.onClear();
        });
        this.$searchInput.off('keydown').on('keydown', function (e) {
          // Ensure shift-tab causes lost focus from filter as with clicking away
          if (e.keyCode === 9 && e.shiftKey) {
            _this8.close();
          }
        }).off('keyup').on('keyup', function (e) {
          // enter or space
          // Avoid selecting/deselecting if no choices made
          if (_this8.options.filterAcceptOnEnter && [13, 32].includes(e.which) && _this8.$searchInput.val()) {
            if (_this8.options.single) {
              var $items = _this8.$selectItems.closest('li').filter(':visible');

              if ($items.length) {
                _this8.setSelects([$items.first().find("input[".concat(_this8.selectItemName, "]")).val()]);
              }
            } else {
              _this8.$selectAll.click();
            }

            _this8.close();

            _this8.focus();

            return;
          }

          _this8.filter();
        });
        this.$selectAll.off('click').on('click', function (e) {
          _this8._checkAll($(e.currentTarget).prop('checked'));
        });
        this.$selectGroups.off('click').on('click', function (e) {
          var $this = $(e.currentTarget);
          var checked = $this.prop('checked');
          var group = findByParam(_this8.data, '_key', $this.data('key'));

          _this8._checkGroup(group, checked);

          _this8.options.onOptgroupClick(removeUndefined({
            label: group.label,
            selected: group.selected,
            data: group._data,
            children: group.children.map(function (child) {
              return removeUndefined({
                text: child.text,
                value: child.value,
                selected: child.selected,
                disabled: child.disabled,
                data: child._data
              });
            })
          }));
        });
        this.$selectItems.off('click').on('click', function (e) {
          var $this = $(e.currentTarget);
          var checked = $this.prop('checked');
          var option = findByParam(_this8.data, '_key', $this.data('key'));

          _this8._check(option, checked);

          _this8.options.onClick(removeUndefined({
            text: option.text,
            value: option.value,
            selected: option.selected,
            data: option._data
          }));

          if (_this8.options.single && _this8.options.isOpen && !_this8.options.keepOpen) {
            _this8.close();
          }
        });
      }
    }, {
      key: "initView",
      value: function initView() {
        var computedWidth;

        if (window.getComputedStyle) {
          computedWidth = window.getComputedStyle(this.$el[0]).width;

          if (computedWidth === 'auto') {
            computedWidth = this.$drop.outerWidth() + 20;
          }
        } else {
          computedWidth = this.$el.outerWidth() + 20;
        }

        this.$parent.css('width', this.options.width || computedWidth);
        this.$el.show().addClass('ms-offscreen');
      }
    }, {
      key: "open",
      value: function open() {
        if (this.$choice.hasClass('disabled')) {
          return;
        }

        this.options.isOpen = true;
        this.$choice.find('>div').addClass('open');
        this.$drop[this.animateMethod('show')](); // fix filter bug: no results show

        this.$selectAll.parent().show();
        this.$noResults.hide(); // Fix #77: 'All selected' when no options

        if (!this.data.length) {
          this.$selectAll.parent().hide();
          this.$noResults.show();
        }

        if (this.options.container) {
          var offset = this.$drop.offset();
          this.$drop.appendTo($(this.options.container));
          this.$drop.offset({
            top: offset.top,
            left: offset.left
          }).css('min-width', 'auto').outerWidth(this.$parent.outerWidth());
        }

        var maxHeight = this.options.maxHeight;

        if (this.options.maxHeightUnit === 'row') {
          maxHeight = this.$drop.find('>ul>li').first().outerHeight() * this.options.maxHeight;
        }

        this.$drop.find('>ul').css('max-height', "".concat(maxHeight, "px"));
        this.$drop.find('.multiple').css('width', "".concat(this.options.multipleWidth, "px"));

        if (this.data.length && this.options.filter) {
          this.$searchInput.val('');
          this.$searchInput.focus();
          this.filter(true);
        }

        this.options.onOpen();
      }
    }, {
      key: "close",
      value: function close() {
        this.options.isOpen = false;
        this.$choice.find('>div').removeClass('open');
        this.$drop[this.animateMethod('hide')]();

        if (this.options.container) {
          this.$parent.append(this.$drop);
          this.$drop.css({
            'top': 'auto',
            'left': 'auto'
          });
        }

        this.options.onClose();
      }
    }, {
      key: "animateMethod",
      value: function animateMethod(method) {
        var methods = {
          show: {
            fade: 'fadeIn',
            slide: 'slideDown'
          },
          hide: {
            fade: 'fadeOut',
            slide: 'slideUp'
          }
        };
        return methods[method][this.options.animate] || method;
      }
    }, {
      key: "update",
      value: function update(ignoreTrigger) {
        var valueSelects = this.getSelects();
        var textSelects = this.getSelects('text');

        if (this.options.displayValues) {
          textSelects = valueSelects;
        }

        var $span = this.$choice.find('>span');
        var sl = valueSelects.length;
        var html = '';

        if (sl === 0) {
          $span.addClass('placeholder').html(this.options.placeholder);
        } else if (sl < this.options.minimumCountSelected) {
          html = textSelects.join(this.options.displayDelimiter);
        } else if (this.options.formatAllSelected() && sl === this.dataTotal) {
          html = this.options.formatAllSelected();
        } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
          html = "".concat(textSelects.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter), "...");
        } else if (this.options.formatCountSelected() && sl > this.options.minimumCountSelected) {
          html = this.options.formatCountSelected(sl, this.dataTotal);
        } else {
          html = textSelects.join(this.options.displayDelimiter);
        }

        if (html) {
          $span.removeClass('placeholder').html(html);
        }

        if (this.options.displayTitle) {
          $span.prop('title', this.getSelects('text'));
        } // set selects to select


        this.$el.val(this.getSelects()); // trigger <select> change event

        if (!ignoreTrigger) {
          this.$el.trigger('change');
        }
      }
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        for (var i = this.updateDataStart; i < this.updateDataEnd; i++) {
          var row = this.updateData[i];
          this.$drop.find("input[data-key=".concat(row._key, "]")).prop('checked', row.selected).closest('li').toggleClass('selected', row.selected);
        }

        var noResult = this.data.filter(function (row) {
          return row.visible;
        }).length === 0;

        if (this.$selectAll.length) {
          this.$selectAll.prop('checked', this.allSelected).closest('li').toggle(!noResult);
        }

        this.$noResults.toggle(noResult);

        if (this.virtualScroll) {
          this.virtualScroll.rows = this.getListRows();
        }
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        // deep copy and remove data
        var options = $.extend({}, this.options);
        delete options.data;
        return $.extend(true, {}, options);
      }
    }, {
      key: "refreshOptions",
      value: function refreshOptions(options) {
        // If the objects are equivalent then avoid the call of destroy / init methods
        if (compareObjects(this.options, options, true)) {
          return;
        }

        this.options = $.extend(this.options, options);
        this.destroy();
        this.init();
      } // value html, or text, default: 'value'

    }, {
      key: "getSelects",
      value: function getSelects() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
        var values = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var row = _step3.value;

            if (row.type === 'optgroup') {
              var selectedChildren = row.children.filter(function (child) {
                return child.selected;
              });

              if (!selectedChildren.length) {
                continue;
              }

              if (type === 'value' || this.options.single) {
                values.push.apply(values, _toConsumableArray(selectedChildren.map(function (child) {
                  return type === 'value' ? child._value || child[type] : child[type];
                })));
              } else {
                var value = [];
                value.push('[');
                value.push(row.label);
                value.push(": ".concat(selectedChildren.map(function (child) {
                  return child[type];
                }).join(', ')));
                value.push(']');
                values.push(value.join(''));
              }
            } else if (row.selected) {
              values.push(type === 'value' ? row._value || row[type] : row[type]);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return values;
      }
    }, {
      key: "setSelects",
      value: function setSelects(values, ignoreTrigger) {
        var hasChanged = false;

        var _setSelects = function _setSelects(rows) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = rows[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var row = _step4.value;
              var selected = values.includes(row._value || row.value);

              if (!selected && row.value === +row.value + '') {
                selected = values.includes(+row.value);
              }

              if (row.selected !== selected) {
                hasChanged = true;
              }

              row.selected = selected;
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        };

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = this.data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var row = _step5.value;

            if (row.type === 'optgroup') {
              _setSelects(row.children);
            } else {
              _setSelects([row]);
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        if (hasChanged) {
          this.initSelected(ignoreTrigger);
          this.updateSelected();
          this.update(ignoreTrigger);
        }
      }
    }, {
      key: "enable",
      value: function enable() {
        this.$choice.removeClass('disabled');
      }
    }, {
      key: "disable",
      value: function disable() {
        this.$choice.addClass('disabled');
      }
    }, {
      key: "check",
      value: function check(value) {
        var option = findByParam(this.data, 'value', value);

        if (!option) {
          return;
        }

        this._check(option, true);
      }
    }, {
      key: "uncheck",
      value: function uncheck(value) {
        var option = findByParam(this.data, 'value', value);

        if (!option) {
          return;
        }

        this._check(option, false);
      }
    }, {
      key: "_check",
      value: function _check(option, checked) {
        if (this.options.single) {
          this._checkAll(false, true);
        }

        option.selected = checked;
        this.initSelected();
        this.updateSelected();
        this.update();
      }
    }, {
      key: "checkAll",
      value: function checkAll() {
        this._checkAll(true);
      }
    }, {
      key: "uncheckAll",
      value: function uncheckAll() {
        this._checkAll(false);
      }
    }, {
      key: "_checkAll",
      value: function _checkAll(checked, ignoreUpdate) {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this.data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var row = _step6.value;

            if (row.type === 'optgroup') {
              this._checkGroup(row, checked, true);
            } else if (!row.disabled && (ignoreUpdate || row.visible)) {
              row.selected = checked;
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        if (!ignoreUpdate) {
          this.initSelected();
          this.updateSelected();
          this.update();
        }
      }
    }, {
      key: "_checkGroup",
      value: function _checkGroup(group, checked, ignoreUpdate) {
        group.selected = checked;
        group.children.forEach(function (row) {
          if (!row.disabled && (ignoreUpdate || row.visible)) {
            row.selected = checked;
          }
        });

        if (!ignoreUpdate) {
          this.initSelected();
          this.updateSelected();
          this.update();
        }
      }
    }, {
      key: "checkInvert",
      value: function checkInvert() {
        if (this.options.single) {
          return;
        }

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this.data[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var row = _step7.value;

            if (row.type === 'optgroup') {
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                for (var _iterator8 = row.children[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var child = _step8.value;
                  child.selected = !child.selected;
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                    _iterator8["return"]();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
              }
            } else {
              row.selected = !row.selected;
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        this.initSelected();
        this.updateSelected();
        this.update();
      }
    }, {
      key: "focus",
      value: function focus() {
        this.$choice.focus();
        this.options.onFocus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.$choice.blur();
        this.options.onBlur();
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.destroy();
        this.init();
      }
    }, {
      key: "filter",
      value: function filter(ignoreTrigger) {
        var originalText = $.trim(this.$searchInput.val());
        var text = originalText.toLowerCase();

        if (this.filterText === text) {
          return;
        }

        this.filterText = text;
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this.data[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var row = _step9.value;

            if (row.type === 'optgroup') {
              if (this.options.filterGroup) {
                var visible = this.options.customFilter(removeDiacritics(row.label.toLowerCase()), removeDiacritics(text), row.label, originalText);
                row.visible = visible;
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                  for (var _iterator10 = row.children[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var child = _step10.value;
                    child.visible = visible;
                  }
                } catch (err) {
                  _didIteratorError10 = true;
                  _iteratorError10 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                      _iterator10["return"]();
                    }
                  } finally {
                    if (_didIteratorError10) {
                      throw _iteratorError10;
                    }
                  }
                }
              } else {
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                  for (var _iterator11 = row.children[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var _child = _step11.value;
                    _child.visible = this.options.customFilter(removeDiacritics(_child.text.toLowerCase()), removeDiacritics(text), _child.text, originalText);
                  }
                } catch (err) {
                  _didIteratorError11 = true;
                  _iteratorError11 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                      _iterator11["return"]();
                    }
                  } finally {
                    if (_didIteratorError11) {
                      throw _iteratorError11;
                    }
                  }
                }

                row.visible = row.children.filter(function (child) {
                  return child.visible;
                }).length > 0;
              }
            } else {
              row.visible = this.options.customFilter(removeDiacritics(row.text.toLowerCase()), removeDiacritics(text), row.text, originalText);
            }
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        this.initListItems();
        this.initSelected(ignoreTrigger);
        this.updateSelected();

        if (!ignoreTrigger) {
          this.options.onFilter(text);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (!this.$parent) {
          return;
        }

        this.$el.before(this.$parent).removeClass('ms-offscreen');

        if (this.tabIndex !== null) {
          this.$el.attr('tabindex', this.tabIndex);
        }

        this.$parent.remove();

        if (this.fromHtml) {
          delete this.options.data;
          this.fromHtml = false;
        }
      }
    }]);

    return MultipleSelect;
  }();

  $.fn.multipleSelect = function (option) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var value;
    this.each(function (i, el) {
      var $this = $(el);
      var data = $this.data('multipleSelect');
      var options = $.extend({}, $this.data(), _typeof(option) === 'object' && option);

      if (!data) {
        data = new MultipleSelect($this, options);
        $this.data('multipleSelect', data);
      }

      if (typeof option === 'string') {
        var _data;

        if ($.inArray(option, Constants.METHODS) < 0) {
          throw new Error("Unknown method: ".concat(option));
        }

        value = (_data = data)[option].apply(_data, args);

        if (option === 'destroy') {
          $this.removeData('multipleSelect');
        }
      } else {
        data.init();
      }
    });
    return typeof value !== 'undefined' ? value : this;
  };

  $.fn.multipleSelect.defaults = Constants.DEFAULTS;
  $.fn.multipleSelect.locales = Constants.LOCALES;
  $.fn.multipleSelect.methods = Constants.METHODS;
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Typeahead
 * Copyright (C) 2020 RunningCoder.org
 * Licensed under the MIT license
 *
 * @author Tom Bertrand
 * @version 2.11.1 (2020-5-18)
 * @link http://www.runningcoder.org/jquerytypeahead/
 */
!function (e) {
  var t;
  "function" == typeof define && define.amd ? define("jquery-typeahead", ["jquery"], function (t) {
    return e(t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = (void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(void 0)), e(t)) : e(jQuery);
}(function (j) {
  "use strict";

  function r(t, e) {
    this.rawQuery = t.val() || "", this.query = t.val() || "", this.selector = t[0].selector, this.deferred = null, this.tmpSource = {}, this.source = {}, this.dynamicGroups = [], this.hasDynamicGroups = !1, this.generatedGroupCount = 0, this.groupBy = "group", this.groups = [], this.searchGroups = [], this.generateGroups = [], this.requestGroups = [], this.result = [], this.tmpResult = {}, this.groupTemplate = "", this.resultHtml = null, this.resultCount = 0, this.resultCountPerGroup = {}, this.options = e, this.node = t, this.namespace = "." + this.helper.slugify.call(this, this.selector) + ".typeahead", this.isContentEditable = void 0 !== this.node.attr("contenteditable") && "false" !== this.node.attr("contenteditable"), this.container = null, this.resultContainer = null, this.item = null, this.items = null, this.comparedItems = null, this.xhr = {}, this.hintIndex = null, this.filters = {
      dropdown: {},
      dynamic: {}
    }, this.dropdownFilter = {
      "static": [],
      dynamic: []
    }, this.dropdownFilterAll = null, this.isDropdownEvent = !1, this.requests = {}, this.backdrop = {}, this.hint = {}, this.label = {}, this.hasDragged = !1, this.focusOnly = !1, this.displayEmptyTemplate, this.__construct();
  }

  var i,
      s = {
    input: null,
    minLength: 2,
    maxLength: !(window.Typeahead = {
      version: "2.11.1"
    }),
    maxItem: 8,
    dynamic: !1,
    delay: 300,
    order: null,
    offset: !1,
    hint: !1,
    accent: !1,
    highlight: !0,
    multiselect: null,
    group: !1,
    groupOrder: null,
    maxItemPerGroup: null,
    dropdownFilter: !1,
    dynamicFilter: null,
    backdrop: !1,
    backdropOnFocus: !1,
    cache: !1,
    ttl: 36e5,
    compression: !1,
    searchOnFocus: !1,
    blurOnTab: !0,
    resultContainer: null,
    generateOnLoad: null,
    mustSelectItem: !1,
    href: null,
    display: ["display"],
    template: null,
    templateValue: null,
    groupTemplate: null,
    correlativeTemplate: !1,
    emptyTemplate: !1,
    cancelButton: !0,
    loadingAnimation: !0,
    asyncResult: !1,
    filter: !0,
    matcher: null,
    source: null,
    callback: {
      onInit: null,
      onReady: null,
      onShowLayout: null,
      onHideLayout: null,
      onSearch: null,
      onResult: null,
      onLayoutBuiltBefore: null,
      onLayoutBuiltAfter: null,
      onNavigateBefore: null,
      onNavigateAfter: null,
      onEnter: null,
      onLeave: null,
      onClickBefore: null,
      onClickAfter: null,
      onDropdownFilter: null,
      onSendRequest: null,
      onReceiveRequest: null,
      onPopulateSource: null,
      onCacheSave: null,
      onSubmit: null,
      onCancel: null
    },
    selector: {
      container: "typeahead__container",
      result: "typeahead__result",
      list: "typeahead__list",
      group: "typeahead__group",
      item: "typeahead__item",
      empty: "typeahead__empty",
      display: "typeahead__display",
      query: "typeahead__query",
      filter: "typeahead__filter",
      filterButton: "typeahead__filter-button",
      dropdown: "typeahead__dropdown",
      dropdownItem: "typeahead__dropdown-item",
      labelContainer: "typeahead__label-container",
      label: "typeahead__label",
      button: "typeahead__button",
      backdrop: "typeahead__backdrop",
      hint: "typeahead__hint",
      cancelButton: "typeahead__cancel-button"
    },
    debug: !1
  },
      o = {
    from: "ãàáäâẽèéëêìíïîõòóöôùúüûñç",
    to: "aaaaaeeeeeiiiiooooouuuunc"
  },
      n = ~window.navigator.appVersion.indexOf("MSIE 9."),
      a = ~window.navigator.appVersion.indexOf("MSIE 10"),
      l = !!~window.navigator.userAgent.indexOf("Trident") && ~window.navigator.userAgent.indexOf("rv:11");
  r.prototype = {
    _validateCacheMethod: function _validateCacheMethod(t) {
      var e;
      if (!0 === t) t = "localStorage";else if ("string" == typeof t && !~["localStorage", "sessionStorage"].indexOf(t)) return !1;
      e = void 0 !== window[t];

      try {
        window[t].setItem("typeahead", "typeahead"), window[t].removeItem("typeahead");
      } catch (t) {
        e = !1;
      }

      return e && t || !1;
    },
    extendOptions: function extendOptions() {
      if (this.options.cache = this._validateCacheMethod(this.options.cache), this.options.compression && ("object" == (typeof LZString === "undefined" ? "undefined" : _typeof(LZString)) && this.options.cache || (this.options.compression = !1)), this.options.maxLength && !isNaN(this.options.maxLength) || (this.options.maxLength = 1 / 0), void 0 !== this.options.maxItem && ~[0, !1].indexOf(this.options.maxItem) && (this.options.maxItem = 1 / 0), this.options.maxItemPerGroup && !/^\d+$/.test(this.options.maxItemPerGroup) && (this.options.maxItemPerGroup = null), this.options.display && !Array.isArray(this.options.display) && (this.options.display = [this.options.display]), this.options.multiselect && (this.items = [], this.comparedItems = [], "string" == typeof this.options.multiselect.matchOn && (this.options.multiselect.matchOn = [this.options.multiselect.matchOn])), this.options.group && (Array.isArray(this.options.group) || ("string" == typeof this.options.group ? this.options.group = {
        key: this.options.group
      } : "boolean" == typeof this.options.group && (this.options.group = {
        key: "group"
      }), this.options.group.key = this.options.group.key || "group")), this.options.highlight && !~["any", !0].indexOf(this.options.highlight) && (this.options.highlight = !1), this.options.dropdownFilter && this.options.dropdownFilter instanceof Object) {
        Array.isArray(this.options.dropdownFilter) || (this.options.dropdownFilter = [this.options.dropdownFilter]);

        for (var t = 0, e = this.options.dropdownFilter.length; t < e; ++t) {
          this.dropdownFilter[this.options.dropdownFilter[t].value ? "static" : "dynamic"].push(this.options.dropdownFilter[t]);
        }
      }

      this.options.dynamicFilter && !Array.isArray(this.options.dynamicFilter) && (this.options.dynamicFilter = [this.options.dynamicFilter]), this.options.accent && ("object" == _typeof(this.options.accent) ? this.options.accent.from && this.options.accent.to && (this.options.accent.from.length, this.options.accent.to.length) : this.options.accent = o), this.options.groupTemplate && (this.groupTemplate = this.options.groupTemplate), this.options.resultContainer && ("string" == typeof this.options.resultContainer && (this.options.resultContainer = j(this.options.resultContainer)), this.options.resultContainer instanceof j && this.options.resultContainer[0] && (this.resultContainer = this.options.resultContainer)), this.options.group && this.options.group.key && (this.groupBy = this.options.group.key), this.options.callback && this.options.callback.onClick && (this.options.callback.onClickBefore = this.options.callback.onClick, delete this.options.callback.onClick), this.options.callback && this.options.callback.onNavigate && (this.options.callback.onNavigateBefore = this.options.callback.onNavigate, delete this.options.callback.onNavigate), this.options = j.extend(!0, {}, s, this.options);
    },
    unifySourceFormat: function unifySourceFormat() {
      var t, e, i;

      for (t in this.dynamicGroups = [], Array.isArray(this.options.source) && (this.options.source = {
        group: {
          data: this.options.source
        }
      }), "string" == typeof this.options.source && (this.options.source = {
        group: {
          ajax: {
            url: this.options.source
          }
        }
      }), this.options.source.ajax && (this.options.source = {
        group: {
          ajax: this.options.source.ajax
        }
      }), (this.options.source.url || this.options.source.data) && (this.options.source = {
        group: this.options.source
      }), this.options.source) {
        if (this.options.source.hasOwnProperty(t)) {
          if ("string" == typeof (e = this.options.source[t]) && (e = {
            ajax: {
              url: e
            }
          }), i = e.url || e.ajax, Array.isArray(i) ? (e.ajax = "string" == typeof i[0] ? {
            url: i[0]
          } : i[0], e.ajax.path = e.ajax.path || i[1] || null) : "object" == _typeof(e.url) ? e.ajax = e.url : "string" == typeof e.url && (e.ajax = {
            url: e.url
          }), delete e.url, !e.data && !e.ajax) return !1;
          e.display && !Array.isArray(e.display) && (e.display = [e.display]), e.minLength = "number" == typeof e.minLength ? e.minLength : this.options.minLength, e.maxLength = "number" == typeof e.maxLength ? e.maxLength : this.options.maxLength, e.dynamic = "boolean" == typeof e.dynamic || this.options.dynamic, e.minLength > e.maxLength && (e.minLength = e.maxLength), this.options.source[t] = e, this.options.source[t].dynamic && this.dynamicGroups.push(t), e.cache = void 0 !== e.cache ? this._validateCacheMethod(e.cache) : this.options.cache, e.compression && ("object" == (typeof LZString === "undefined" ? "undefined" : _typeof(LZString)) && e.cache || (e.compression = !1));
        }
      }

      return this.hasDynamicGroups = this.options.dynamic || !!this.dynamicGroups.length, !0;
    },
    init: function init() {
      this.helper.executeCallback.call(this, this.options.callback.onInit, [this.node]), this.container = this.node.closest("." + this.options.selector.container);
    },
    delegateEvents: function delegateEvents() {
      var i = this,
          t = ["focus" + this.namespace, "input" + this.namespace, "propertychange" + this.namespace, "keydown" + this.namespace, "keyup" + this.namespace, "search" + this.namespace, "generate" + this.namespace];
      j("html").on("touchmove", function () {
        i.hasDragged = !0;
      }).on("touchstart", function () {
        i.hasDragged = !1;
      }), this.node.closest("form").on("submit", function (t) {
        if (!i.options.mustSelectItem || !i.helper.isEmpty(i.item)) return i.options.backdropOnFocus || i.hideLayout(), i.options.callback.onSubmit ? i.helper.executeCallback.call(i, i.options.callback.onSubmit, [i.node, this, i.item || i.items, t]) : void 0;
        t.preventDefault();
      }).on("reset", function () {
        setTimeout(function () {
          i.node.trigger("input" + i.namespace), i.hideLayout();
        });
      });
      var s = !1;

      if (this.node.attr("placeholder") && (a || l)) {
        var e = !0;
        this.node.on("focusin focusout", function () {
          e = !(this.value || !this.placeholder);
        }), this.node.on("input", function (t) {
          e && (t.stopImmediatePropagation(), e = !1);
        });
      }

      this.node.off(this.namespace).on(t.join(" "), function (t, e) {
        switch (t.type) {
          case "generate":
            i.generateSource(Object.keys(i.options.source));
            break;

          case "focus":
            if (i.focusOnly) {
              i.focusOnly = !1;
              break;
            }

            i.options.backdropOnFocus && (i.buildBackdropLayout(), i.showLayout()), i.options.searchOnFocus && !i.item && (i.deferred = j.Deferred(), i.assignQuery(), i.generateSource());
            break;

          case "keydown":
            8 === t.keyCode && i.options.multiselect && i.options.multiselect.cancelOnBackspace && "" === i.query && i.items.length ? i.cancelMultiselectItem(i.items.length - 1, null, t) : t.keyCode && ~[9, 13, 27, 38, 39, 40].indexOf(t.keyCode) && (s = !0, i.navigate(t));
            break;

          case "keyup":
            n && i.node[0].value.replace(/^\s+/, "").toString().length < i.query.length && i.node.trigger("input" + i.namespace);
            break;

          case "propertychange":
            if (s) {
              s = !1;
              break;
            }

          case "input":
            i.deferred = j.Deferred(), i.assignQuery(), "" === i.rawQuery && "" === i.query && (t.originalEvent = e || {}, i.helper.executeCallback.call(i, i.options.callback.onCancel, [i.node, i.item, t]), i.item = null), i.options.cancelButton && i.toggleCancelButtonVisibility(), i.options.hint && i.hint.container && "" !== i.hint.container.val() && 0 !== i.hint.container.val().indexOf(i.rawQuery) && (i.hint.container.val(""), i.isContentEditable && i.hint.container.text("")), i.hasDynamicGroups ? i.helper.typeWatch(function () {
              i.generateSource();
            }, i.options.delay) : i.generateSource();
            break;

          case "search":
            i.searchResult(), i.buildLayout(), i.result.length || i.searchGroups.length && i.displayEmptyTemplate ? i.showLayout() : i.hideLayout(), i.deferred && i.deferred.resolve();
        }

        return i.deferred && i.deferred.promise();
      }), this.options.generateOnLoad && this.node.trigger("generate" + this.namespace);
    },
    assignQuery: function assignQuery() {
      this.isContentEditable ? this.rawQuery = this.node.text() : this.rawQuery = this.node.val().toString(), this.rawQuery = this.rawQuery.replace(/^\s+/, ""), this.rawQuery !== this.query && (this.query = this.rawQuery);
    },
    filterGenerateSource: function filterGenerateSource() {
      if (this.searchGroups = [], this.generateGroups = [], !this.focusOnly || this.options.multiselect) for (var t in this.options.source) {
        if (this.options.source.hasOwnProperty(t) && this.query.length >= this.options.source[t].minLength && this.query.length <= this.options.source[t].maxLength) {
          if (this.filters.dropdown && "group" === this.filters.dropdown.key && this.filters.dropdown.value !== t) continue;
          if (this.searchGroups.push(t), !this.options.source[t].dynamic && this.source[t]) continue;
          this.generateGroups.push(t);
        }
      }
    },
    generateSource: function generateSource(t) {
      if (this.filterGenerateSource(), this.generatedGroupCount = 0, Array.isArray(t) && t.length) this.generateGroups = t;else if (!this.generateGroups.length) return void this.node.trigger("search" + this.namespace);

      if (this.requestGroups = [], this.options.loadingAnimation && this.container.addClass("loading"), !this.helper.isEmpty(this.xhr)) {
        for (var e in this.xhr) {
          this.xhr.hasOwnProperty(e) && this.xhr[e].abort();
        }

        this.xhr = {};
      }

      for (var i, s, o, n, r, a, l, h = this, c = (e = 0, this.generateGroups.length); e < c; ++e) {
        if (i = this.generateGroups[e], n = (o = this.options.source[i]).cache, r = o.compression, this.options.asyncResult && delete this.source[i], n && (a = window[n].getItem("TYPEAHEAD_" + this.selector + ":" + i))) {
          r && (a = LZString.decompressFromUTF16(a)), l = !1;

          try {
            (a = JSON.parse(a + "")).data && a.ttl > new Date().getTime() ? (this.populateSource(a.data, i), l = !0) : window[n].removeItem("TYPEAHEAD_" + this.selector + ":" + i);
          } catch (t) {}

          if (l) continue;
        }

        !o.data || o.ajax ? o.ajax && (this.requests[i] || (this.requests[i] = this.generateRequestObject(i)), this.requestGroups.push(i)) : "function" == typeof o.data ? (s = o.data.call(this), Array.isArray(s) ? h.populateSource(s, i) : "function" == typeof s.promise && function (e) {
          j.when(s).then(function (t) {
            t && Array.isArray(t) && h.populateSource(t, e);
          });
        }(i)) : this.populateSource(j.extend(!0, [], o.data), i);
      }

      return this.requestGroups.length && this.handleRequests(), this.options.asyncResult && this.searchGroups.length !== this.generateGroups && this.node.trigger("search" + this.namespace), !!this.generateGroups.length;
    },
    generateRequestObject: function generateRequestObject(s) {
      var o = this,
          n = this.options.source[s],
          t = {
        request: {
          url: n.ajax.url || null,
          dataType: "json",
          beforeSend: function beforeSend(t, e) {
            o.xhr[s] = t;
            var i = o.requests[s].callback.beforeSend || n.ajax.beforeSend;
            "function" == typeof i && i.apply(null, arguments);
          }
        },
        callback: {
          beforeSend: null,
          done: null,
          fail: null,
          then: null,
          always: null
        },
        extra: {
          path: n.ajax.path || null,
          group: s
        },
        validForGroup: [s]
      };
      if ("function" != typeof n.ajax && (n.ajax instanceof Object && (t = this.extendXhrObject(t, n.ajax)), 1 < Object.keys(this.options.source).length)) for (var e in this.requests) {
        this.requests.hasOwnProperty(e) && (this.requests[e].isDuplicated || t.request.url && t.request.url === this.requests[e].request.url && (this.requests[e].validForGroup.push(s), t.isDuplicated = !0, delete t.validForGroup));
      }
      return t;
    },
    extendXhrObject: function extendXhrObject(t, e) {
      return "object" == _typeof(e.callback) && (t.callback = e.callback, delete e.callback), "function" == typeof e.beforeSend && (t.callback.beforeSend = e.beforeSend, delete e.beforeSend), t.request = j.extend(!0, t.request, e), "jsonp" !== t.request.dataType.toLowerCase() || t.request.jsonpCallback || (t.request.jsonpCallback = "callback_" + t.extra.group), t;
    },
    handleRequests: function handleRequests() {
      var t,
          h = this,
          c = this.requestGroups.length;
      if (!1 !== this.helper.executeCallback.call(this, this.options.callback.onSendRequest, [this.node, this.query])) for (var e = 0, i = this.requestGroups.length; e < i; ++e) {
        t = this.requestGroups[e], this.requests[t].isDuplicated || function (t, r) {
          if ("function" == typeof h.options.source[t].ajax) {
            var e = h.options.source[t].ajax.call(h, h.query);
            if ("object" != _typeof((r = h.extendXhrObject(h.generateRequestObject(t), "object" == _typeof(e) ? e : {})).request) || !r.request.url) return h.populateSource([], t);
            h.requests[t] = r;
          }

          var a,
              i = !1,
              l = {};
          if (~r.request.url.indexOf("{{query}}") && (i || (r = j.extend(!0, {}, r), i = !0), r.request.url = r.request.url.replace("{{query}}", encodeURIComponent(h.query))), r.request.data) for (var s in r.request.data) {
            if (r.request.data.hasOwnProperty(s) && ~String(r.request.data[s]).indexOf("{{query}}")) {
              i || (r = j.extend(!0, {}, r), i = !0), r.request.data[s] = r.request.data[s].replace("{{query}}", h.query);
              break;
            }
          }
          j.ajax(r.request).done(function (t, e, i) {
            for (var s, o = 0, n = r.validForGroup.length; o < n; o++) {
              s = r.validForGroup[o], "function" == typeof (a = h.requests[s]).callback.done && (l[s] = a.callback.done.call(h, t, e, i));
            }
          }).fail(function (t, e, i) {
            for (var s = 0, o = r.validForGroup.length; s < o; s++) {
              (a = h.requests[r.validForGroup[s]]).callback.fail instanceof Function && a.callback.fail.call(h, t, e, i);
            }
          }).always(function (t, e, i) {
            for (var s, o = 0, n = r.validForGroup.length; o < n; o++) {
              if (s = r.validForGroup[o], (a = h.requests[s]).callback.always instanceof Function && a.callback.always.call(h, t, e, i), "abort" === e) return;
              h.populateSource(null !== t && "function" == typeof t.promise && [] || l[s] || t, a.extra.group, a.extra.path || a.request.path), 0 === (c -= 1) && h.helper.executeCallback.call(h, h.options.callback.onReceiveRequest, [h.node, h.query]);
            }
          }).then(function (t, e) {
            for (var i = 0, s = r.validForGroup.length; i < s; i++) {
              (a = h.requests[r.validForGroup[i]]).callback.then instanceof Function && a.callback.then.call(h, t, e);
            }
          });
        }(t, this.requests[t]);
      }
    },
    populateSource: function populateSource(i, t, e) {
      var s = this,
          o = this.options.source[t],
          n = o.ajax && o.data;
      e && "string" == typeof e && (i = this.helper.namespace.call(this, e, i)), Array.isArray(i) || (i = []), n && ("function" == typeof n && (n = n()), Array.isArray(n) && (i = i.concat(n)));

      for (var r, a = o.display ? "compiled" === o.display[0] ? o.display[1] : o.display[0] : "compiled" === this.options.display[0] ? this.options.display[1] : this.options.display[0], l = 0, h = i.length; l < h; l++) {
        null !== i[l] && "boolean" != typeof i[l] && ("string" == typeof i[l] && ((r = {})[a] = i[l], i[l] = r), i[l].group = t);
      }

      if (!this.hasDynamicGroups && this.dropdownFilter.dynamic.length) {
        var c,
            p,
            u = {};

        for (l = 0, h = i.length; l < h; l++) {
          for (var d = 0, f = this.dropdownFilter.dynamic.length; d < f; d++) {
            c = this.dropdownFilter.dynamic[d].key, (p = i[l][c]) && (this.dropdownFilter.dynamic[d].value || (this.dropdownFilter.dynamic[d].value = []), u[c] || (u[c] = []), ~u[c].indexOf(p.toLowerCase()) || (u[c].push(p.toLowerCase()), this.dropdownFilter.dynamic[d].value.push(p)));
          }
        }
      }

      if (this.options.correlativeTemplate) {
        var m = o.template || this.options.template,
            g = "";

        if ("function" == typeof m && (m = m.call(this, "", {})), m) {
          if (Array.isArray(this.options.correlativeTemplate)) for (l = 0, h = this.options.correlativeTemplate.length; l < h; l++) {
            g += "{{" + this.options.correlativeTemplate[l] + "}} ";
          } else g = m.replace(/<.+?>/g, " ").replace(/\s{2,}/, " ").trim();

          for (l = 0, h = i.length; l < h; l++) {
            i[l].compiled = j("<textarea />").html(g.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g, function (t, e) {
              return s.helper.namespace.call(s, e, i[l], "get", "");
            }).trim()).text();
          }

          o.display ? ~o.display.indexOf("compiled") || o.display.unshift("compiled") : ~this.options.display.indexOf("compiled") || this.options.display.unshift("compiled");
        } else ;
      }

      this.options.callback.onPopulateSource && (i = this.helper.executeCallback.call(this, this.options.callback.onPopulateSource, [this.node, i, t, e])), this.tmpSource[t] = Array.isArray(i) && i || [];
      var y = this.options.source[t].cache,
          v = this.options.source[t].compression,
          b = this.options.source[t].ttl || this.options.ttl;

      if (y && !window[y].getItem("TYPEAHEAD_" + this.selector + ":" + t)) {
        this.options.callback.onCacheSave && (i = this.helper.executeCallback.call(this, this.options.callback.onCacheSave, [this.node, i, t, e]));
        var k = JSON.stringify({
          data: i,
          ttl: new Date().getTime() + b
        });
        v && (k = LZString.compressToUTF16(k)), window[y].setItem("TYPEAHEAD_" + this.selector + ":" + t, k);
      }

      this.incrementGeneratedGroup(t);
    },
    incrementGeneratedGroup: function incrementGeneratedGroup(t) {
      if (this.generatedGroupCount++, this.generatedGroupCount === this.generateGroups.length || this.options.asyncResult) {
        this.xhr && this.xhr[t] && delete this.xhr[t];

        for (var e = 0, i = this.generateGroups.length; e < i; e++) {
          this.source[this.generateGroups[e]] = this.tmpSource[this.generateGroups[e]];
        }

        this.hasDynamicGroups || this.buildDropdownItemLayout("dynamic"), this.generatedGroupCount === this.generateGroups.length && (this.xhr = {}, this.options.loadingAnimation && this.container.removeClass("loading")), this.node.trigger("search" + this.namespace);
      }
    },
    navigate: function navigate(t) {
      if (this.helper.executeCallback.call(this, this.options.callback.onNavigateBefore, [this.node, this.query, t]), 27 === t.keyCode) return t.preventDefault(), void (this.query.length ? (this.resetInput(), this.node.trigger("input" + this.namespace, [t])) : (this.node.blur(), this.hideLayout()));

      if (this.result.length) {
        var e,
            i = this.resultContainer.find("." + this.options.selector.item).not("[disabled]"),
            s = i.filter(".active"),
            o = s[0] ? i.index(s) : null,
            n = s[0] ? s.attr("data-index") : null,
            r = null;
        if (this.clearActiveItem(), this.helper.executeCallback.call(this, this.options.callback.onLeave, [this.node, null !== o && i.eq(o) || void 0, null !== n && this.result[n] || void 0, t]), 13 === t.keyCode) return t.preventDefault(), void (0 < s.length ? "javascript:;" === s.find("a:first")[0].href ? s.find("a:first").trigger("click", t) : s.find("a:first")[0].click() : this.node.closest("form").trigger("submit"));

        if (39 !== t.keyCode) {
          9 === t.keyCode ? this.options.blurOnTab ? this.hideLayout() : 0 < s.length ? o + 1 < i.length ? (t.preventDefault(), r = o + 1, this.addActiveItem(i.eq(r))) : this.hideLayout() : i.length ? (t.preventDefault(), r = 0, this.addActiveItem(i.first())) : this.hideLayout() : 38 === t.keyCode ? (t.preventDefault(), 0 < s.length ? 0 <= o - 1 && (r = o - 1, this.addActiveItem(i.eq(r))) : i.length && (r = i.length - 1, this.addActiveItem(i.last()))) : 40 === t.keyCode && (t.preventDefault(), 0 < s.length ? o + 1 < i.length && (r = o + 1, this.addActiveItem(i.eq(r))) : i.length && (r = 0, this.addActiveItem(i.first()))), e = null !== r ? i.eq(r).attr("data-index") : null, this.helper.executeCallback.call(this, this.options.callback.onEnter, [this.node, null !== r && i.eq(r) || void 0, null !== e && this.result[e] || void 0, t]), t.preventInputChange && ~[38, 40].indexOf(t.keyCode) && this.buildHintLayout(null !== e && e < this.result.length ? [this.result[e]] : null), this.options.hint && this.hint.container && this.hint.container.css("color", t.preventInputChange ? this.hint.css.color : null === e && this.hint.css.color || this.hint.container.css("background-color") || "fff");
          var a = null === e || t.preventInputChange ? this.rawQuery : this.getTemplateValue.call(this, this.result[e]);
          this.node.val(a), this.isContentEditable && this.node.text(a), this.helper.executeCallback.call(this, this.options.callback.onNavigateAfter, [this.node, i, null !== r && i.eq(r).find("a:first") || void 0, null !== e && this.result[e] || void 0, this.query, t]);
        } else null !== o ? i.eq(o).find("a:first")[0].click() : this.options.hint && "" !== this.hint.container.val() && this.helper.getCaret(this.node[0]) >= this.query.length && i.filter('[data-index="' + this.hintIndex + '"]').find("a:first")[0].click();
      }
    },
    getTemplateValue: function getTemplateValue(i) {
      if (i) {
        var t = i.group && this.options.source[i.group].templateValue || this.options.templateValue;
        if ("function" == typeof t && (t = t.call(this)), !t) return this.helper.namespace.call(this, i.matchedKey, i).toString();
        var s = this;
        return t.replace(/\{\{([\w\-.]+)}}/gi, function (t, e) {
          return s.helper.namespace.call(s, e, i, "get", "");
        });
      }
    },
    clearActiveItem: function clearActiveItem() {
      this.resultContainer.find("." + this.options.selector.item).removeClass("active");
    },
    addActiveItem: function addActiveItem(t) {
      t.addClass("active");
    },
    searchResult: function searchResult() {
      this.resetLayout(), !1 !== this.helper.executeCallback.call(this, this.options.callback.onSearch, [this.node, this.query]) && (!this.searchGroups.length || this.options.multiselect && this.options.multiselect.limit && this.items.length >= this.options.multiselect.limit || this.searchResultData(), this.helper.executeCallback.call(this, this.options.callback.onResult, [this.node, this.query, this.result, this.resultCount, this.resultCountPerGroup]), this.isDropdownEvent && (this.helper.executeCallback.call(this, this.options.callback.onDropdownFilter, [this.node, this.query, this.filters.dropdown, this.result]), this.isDropdownEvent = !1));
    },
    searchResultData: function searchResultData() {
      var t,
          e,
          i,
          s,
          o,
          n,
          r,
          a,
          l,
          h,
          c,
          p = this.groupBy,
          u = null,
          d = this.query.toLowerCase(),
          f = this.options.maxItem,
          m = this.options.maxItemPerGroup,
          g = this.filters.dynamic && !this.helper.isEmpty(this.filters.dynamic),
          y = "function" == typeof this.options.matcher && this.options.matcher;
      this.options.accent && (d = this.helper.removeAccent.call(this, d));

      for (var v = 0, b = this.searchGroups.length; v < b; ++v) {
        if (F = this.searchGroups[v], (!this.filters.dropdown || "group" !== this.filters.dropdown.key || this.filters.dropdown.value === F) && (o = void 0 !== this.options.source[F].filter ? this.options.source[F].filter : this.options.filter, r = "function" == typeof this.options.source[F].matcher && this.options.source[F].matcher || y, this.source[F])) for (var k = 0, w = this.source[F].length; k < w && (!(this.resultItemCount >= f) || this.options.callback.onResult); k++) {
          if ((!g || this.dynamicFilter.validate.apply(this, [this.source[F][k]])) && null !== (t = this.source[F][k]) && "boolean" != typeof t && (!this.options.multiselect || this.isMultiselectUniqueData(t)) && (!this.filters.dropdown || (t[this.filters.dropdown.key] || "").toLowerCase() === (this.filters.dropdown.value || "").toLowerCase())) {
            if ((u = "group" === p ? F : t[p] ? t[p] : t.group) && !this.tmpResult[u] && (this.tmpResult[u] = [], this.resultCountPerGroup[u] = 0), m && "group" === p && this.tmpResult[u].length >= m && !this.options.callback.onResult) break;

            for (var x = 0, C = (S = this.options.source[F].display || this.options.display).length; x < C; ++x) {
              if (!1 !== o) {
                if (void 0 === (s = /\./.test(S[x]) ? this.helper.namespace.call(this, S[x], t) : t[S[x]]) || "" === s) continue;
                s = this.helper.cleanStringFromScript(s);
              }

              if ("function" == typeof o) {
                if (void 0 === (n = o.call(this, t, s))) break;
                if (!n) continue;
                "object" == _typeof(n) && (t = n);
              }

              if (~[void 0, !0].indexOf(o)) {
                if (null === s) continue;

                if (i = (i = s).toString().toLowerCase(), this.options.accent && (i = this.helper.removeAccent.call(this, i)), e = i.indexOf(d), this.options.correlativeTemplate && "compiled" === S[x] && e < 0 && /\s/.test(d)) {
                  l = !0, c = i;

                  for (var q = 0, A = (h = d.split(" ")).length; q < A; q++) {
                    if ("" !== h[q]) {
                      if (!~c.indexOf(h[q])) {
                        l = !1;
                        break;
                      }

                      c = c.replace(h[q], "");
                    }
                  }
                }

                if (e < 0 && !l) continue;
                if (this.options.offset && 0 !== e) continue;

                if (r) {
                  if (void 0 === (a = r.call(this, t, s))) break;
                  if (!a) continue;
                  "object" == _typeof(a) && (t = a);
                }
              }

              if (this.resultCount++, this.resultCountPerGroup[u]++, this.resultItemCount < f) {
                if (m && this.tmpResult[u].length >= m) break;
                this.tmpResult[u].push(j.extend(!0, {
                  matchedKey: S[x]
                }, t)), this.resultItemCount++;
              }

              break;
            }

            if (!this.options.callback.onResult) {
              if (this.resultItemCount >= f) break;
              if (m && this.tmpResult[u].length >= m && "group" === p) break;
            }
          }
        }
      }

      if (this.options.order) {
        var O,
            S = [];

        for (var F in this.tmpResult) {
          if (this.tmpResult.hasOwnProperty(F)) {
            for (v = 0, b = this.tmpResult[F].length; v < b; v++) {
              O = this.options.source[this.tmpResult[F][v].group].display || this.options.display, ~S.indexOf(O[0]) || S.push(O[0]);
            }

            this.tmpResult[F].sort(this.helper.sort(S, "asc" === this.options.order, function (t) {
              return t ? t.toString().toUpperCase() : "";
            }));
          }
        }
      }

      var L = [],
          I = [];

      for (v = 0, b = (I = "function" == typeof this.options.groupOrder ? this.options.groupOrder.apply(this, [this.node, this.query, this.tmpResult, this.resultCount, this.resultCountPerGroup]) : Array.isArray(this.options.groupOrder) ? this.options.groupOrder : "string" == typeof this.options.groupOrder && ~["asc", "desc"].indexOf(this.options.groupOrder) ? Object.keys(this.tmpResult).sort(this.helper.sort([], "asc" === this.options.groupOrder, function (t) {
        return t.toString().toUpperCase();
      })) : Object.keys(this.tmpResult)).length; v < b; v++) {
        L = L.concat(this.tmpResult[I[v]] || []);
      }

      this.groups = JSON.parse(JSON.stringify(I)), this.result = L;
    },
    buildLayout: function buildLayout() {
      this.buildHtmlLayout(), this.buildBackdropLayout(), this.buildHintLayout(), this.options.callback.onLayoutBuiltBefore && (this.tmpResultHtml = this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltBefore, [this.node, this.query, this.result, this.resultHtml])), this.tmpResultHtml instanceof j ? this.resultContainer.html(this.tmpResultHtml) : this.resultHtml instanceof j && this.resultContainer.html(this.resultHtml), this.options.callback.onLayoutBuiltAfter && this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltAfter, [this.node, this.query, this.result]);
    },
    buildHtmlLayout: function buildHtmlLayout() {
      if (!1 !== this.options.resultContainer) {
        var h;
        if (this.resultContainer || (this.resultContainer = j("<div/>", {
          "class": this.options.selector.result
        }), this.container.append(this.resultContainer)), !this.result.length && this.generatedGroupCount === this.generateGroups.length) if (this.options.multiselect && this.options.multiselect.limit && this.items.length >= this.options.multiselect.limit) h = this.options.multiselect.limitTemplate ? "function" == typeof this.options.multiselect.limitTemplate ? this.options.multiselect.limitTemplate.call(this, this.query) : this.options.multiselect.limitTemplate.replace(/\{\{query}}/gi, j("<div>").text(this.helper.cleanStringFromScript(this.query)).html()) : "Can't select more than " + this.items.length + " items.";else {
          if (!this.options.emptyTemplate || "" === this.query) return;
          h = "function" == typeof this.options.emptyTemplate ? this.options.emptyTemplate.call(this, this.query) : this.options.emptyTemplate.replace(/\{\{query}}/gi, j("<div>").text(this.helper.cleanStringFromScript(this.query)).html());
        }
        this.displayEmptyTemplate = !!h;
        var o = this.query.toLowerCase();
        this.options.accent && (o = this.helper.removeAccent.call(this, o));
        var c = this,
            t = this.groupTemplate || "<ul></ul>",
            p = !1;
        this.groupTemplate ? t = j(t.replace(/<([^>]+)>\{\{(.+?)}}<\/[^>]+>/g, function (t, e, i, s, o) {
          var n = "",
              r = "group" === i ? c.groups : [i];
          if (!c.result.length) return !0 === p ? "" : (p = !0, "<" + e + ' class="' + c.options.selector.empty + '">' + h + "</" + e + ">");

          for (var a = 0, l = r.length; a < l; ++a) {
            n += "<" + e + ' data-group-template="' + r[a] + '"><ul></ul></' + e + ">";
          }

          return n;
        })) : (t = j(t), this.result.length || t.append(h instanceof j ? h : '<li class="' + c.options.selector.empty + '">' + h + "</li>")), t.addClass(this.options.selector.list + (this.helper.isEmpty(this.result) ? " empty" : ""));

        for (var e, i, n, s, r, a, l, u, d, f, m, g, y, v = this.groupTemplate && this.result.length && c.groups || [], b = 0, k = this.result.length; b < k; ++b) {
          e = (n = this.result[b]).group, s = !this.options.multiselect && this.options.source[n.group].href || this.options.href, u = [], d = this.options.source[n.group].display || this.options.display, this.options.group && (e = n[this.options.group.key], this.options.group.template && ("function" == typeof this.options.group.template ? i = this.options.group.template.call(this, n) : "string" == typeof this.options.group.template && (i = this.options.group.template.replace(/\{\{([\w\-\.]+)}}/gi, function (t, e) {
            return c.helper.namespace.call(c, e, n, "get", "");
          }))), t.find('[data-search-group="' + e + '"]')[0] || (this.groupTemplate ? t.find('[data-group-template="' + e + '"] ul') : t).append(j("<li/>", {
            "class": c.options.selector.group,
            html: j("<a/>", {
              href: "javascript:;",
              html: i || e,
              tabindex: -1
            }),
            "data-search-group": e
          }))), this.groupTemplate && v.length && ~(m = v.indexOf(e || n.group)) && v.splice(m, 1), r = j("<li/>", {
            "class": c.options.selector.item + " " + c.options.selector.group + "-" + this.helper.slugify.call(this, e),
            disabled: !!n.disabled,
            "data-group": e,
            "data-index": b,
            html: j("<a/>", {
              href: s && !n.disabled ? (g = s, y = n, y.href = c.generateHref.call(c, g, y)) : "javascript:;",
              html: function html() {
                if (a = n.group && c.options.source[n.group].template || c.options.template) "function" == typeof a && (a = a.call(c, c.query, n)), l = a.replace(/\{\{([^\|}]+)(?:\|([^}]+))*}}/gi, function (t, e, i) {
                  var s = c.helper.cleanStringFromScript(String(c.helper.namespace.call(c, e, n, "get", "")));
                  return ~(i = i && i.split("|") || []).indexOf("slugify") && (s = c.helper.slugify.call(c, s)), ~i.indexOf("raw") || !0 === c.options.highlight && o && ~d.indexOf(e) && (s = c.helper.highlight.call(c, s, o.split(" "), c.options.accent)), s;
                });else {
                  for (var t = 0, e = d.length; t < e; t++) {
                    void 0 !== (f = /\./.test(d[t]) ? c.helper.namespace.call(c, d[t], n, "get", "") : n[d[t]]) && "" !== f && u.push(f);
                  }

                  l = '<span class="' + c.options.selector.display + '">' + c.helper.cleanStringFromScript(String(u.join(" "))) + "</span>";
                }
                (!0 === c.options.highlight && o && !a || "any" === c.options.highlight) && (l = c.helper.highlight.call(c, l, o.split(" "), c.options.accent)), j(this).append(l);
              }
            })
          }), function (t, i, e) {
            e.on("click", function (t, e) {
              i.disabled ? t.preventDefault() : (e && "object" == _typeof(e) && (t.originalEvent = e), c.options.mustSelectItem && c.helper.isEmpty(i) ? t.preventDefault() : (c.options.multiselect || (c.item = i), !1 !== c.helper.executeCallback.call(c, c.options.callback.onClickBefore, [c.node, j(this), i, t]) && (t.originalEvent && t.originalEvent.defaultPrevented || t.isDefaultPrevented() || (c.options.multiselect ? (c.query = c.rawQuery = "", c.addMultiselectItemLayout(i)) : (c.focusOnly = !0, c.query = c.rawQuery = c.getTemplateValue.call(c, i), c.isContentEditable && (c.node.text(c.query), c.helper.setCaretAtEnd(c.node[0]))), c.hideLayout(), c.node.val(c.query).focus(), c.options.cancelButton && c.toggleCancelButtonVisibility(), c.helper.executeCallback.call(c, c.options.callback.onClickAfter, [c.node, j(this), i, t])))));
            }), e.on("mouseenter", function (t) {
              i.disabled || (c.clearActiveItem(), c.addActiveItem(j(this))), c.helper.executeCallback.call(c, c.options.callback.onEnter, [c.node, j(this), i, t]);
            }), e.on("mouseleave", function (t) {
              i.disabled || c.clearActiveItem(), c.helper.executeCallback.call(c, c.options.callback.onLeave, [c.node, j(this), i, t]);
            });
          }(0, n, r), (this.groupTemplate ? t.find('[data-group-template="' + e + '"] ul') : t).append(r);
        }

        if (this.result.length && v.length) for (b = 0, k = v.length; b < k; ++b) {
          t.find('[data-group-template="' + v[b] + '"]').remove();
        }
        this.resultHtml = t;
      }
    },
    generateHref: function generateHref(t, o) {
      var n = this;
      return "string" == typeof t ? t = t.replace(/\{\{([^\|}]+)(?:\|([^}]+))*}}/gi, function (t, e, i) {
        var s = n.helper.namespace.call(n, e, o, "get", "");
        return ~(i = i && i.split("|") || []).indexOf("slugify") && (s = n.helper.slugify.call(n, s)), s;
      }) : "function" == typeof t && (t = t.call(this, o)), t;
    },
    getMultiselectComparedData: function getMultiselectComparedData(t) {
      var e = "";
      if (Array.isArray(this.options.multiselect.matchOn)) for (var i = 0, s = this.options.multiselect.matchOn.length; i < s; ++i) {
        e += void 0 !== t[this.options.multiselect.matchOn[i]] ? t[this.options.multiselect.matchOn[i]] : "";
      } else {
        var o = JSON.parse(JSON.stringify(t)),
            n = ["group", "matchedKey", "compiled", "href"];

        for (i = 0, s = n.length; i < s; ++i) {
          delete o[n[i]];
        }

        e = JSON.stringify(o);
      }
      return e;
    },
    buildBackdropLayout: function buildBackdropLayout() {
      this.options.backdrop && (this.backdrop.container || (this.backdrop.css = j.extend({
        opacity: .6,
        filter: "alpha(opacity=60)",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        "z-index": 1040,
        "background-color": "#000"
      }, this.options.backdrop), this.backdrop.container = j("<div/>", {
        "class": this.options.selector.backdrop,
        css: this.backdrop.css
      }).insertAfter(this.container)), this.container.addClass("backdrop").css({
        "z-index": this.backdrop.css["z-index"] + 1,
        position: "relative"
      }));
    },
    buildHintLayout: function buildHintLayout(t) {
      if (this.options.hint) if (this.node[0].scrollWidth > Math.ceil(this.node.innerWidth())) this.hint.container && this.hint.container.val("");else {
        var e = this,
            i = "",
            s = (t = t || this.result, this.query.toLowerCase());

        if (this.options.accent && (s = this.helper.removeAccent.call(this, s)), this.hintIndex = null, this.searchGroups.length) {
          if (this.hint.container || (this.hint.css = j.extend({
            "border-color": "transparent",
            position: "absolute",
            top: 0,
            display: "inline",
            "z-index": -1,
            "float": "none",
            color: "silver",
            "box-shadow": "none",
            cursor: "default",
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none"
          }, this.options.hint), this.hint.container = j("<" + this.node[0].nodeName + "/>", {
            type: this.node.attr("type"),
            "class": this.node.attr("class"),
            readonly: !0,
            unselectable: "on",
            "aria-hidden": "true",
            tabindex: -1,
            click: function click() {
              e.node.focus();
            }
          }).addClass(this.options.selector.hint).css(this.hint.css).insertAfter(this.node), this.node.parent().css({
            position: "relative"
          })), this.hint.container.css("color", this.hint.css.color), s) for (var o, n, r, a = 0, l = t.length; a < l; a++) {
            if (!t[a].disabled) {
              n = t[a].group;

              for (var h = 0, c = (o = this.options.source[n].display || this.options.display).length; h < c; h++) {
                if (r = String(t[a][o[h]]).toLowerCase(), this.options.accent && (r = this.helper.removeAccent.call(this, r)), 0 === r.indexOf(s)) {
                  i = String(t[a][o[h]]), this.hintIndex = a;
                  break;
                }
              }

              if (null !== this.hintIndex) break;
            }
          }
          var p = 0 < i.length && this.rawQuery + i.substring(this.query.length) || "";
          this.hint.container.val(p), this.isContentEditable && this.hint.container.text(p);
        }
      }
    },
    buildDropdownLayout: function buildDropdownLayout() {
      if (this.options.dropdownFilter) {
        var i = this;
        j("<span/>", {
          "class": this.options.selector.filter,
          html: function html() {
            j(this).append(j("<button/>", {
              type: "button",
              "class": i.options.selector.filterButton,
              style: "display: none;",
              click: function click() {
                i.container.toggleClass("filter");
                var e = i.namespace + "-dropdown-filter";
                j("html").off(e), i.container.hasClass("filter") && j("html").on("click" + e + " touchend" + e, function (t) {
                  j(t.target).closest("." + i.options.selector.filter)[0] && j(t.target).closest(i.container)[0] || i.hasDragged || (i.container.removeClass("filter"), j("html").off(e));
                });
              }
            })), j(this).append(j("<ul/>", {
              "class": i.options.selector.dropdown
            }));
          }
        }).insertAfter(i.container.find("." + i.options.selector.query));
      }
    },
    buildDropdownItemLayout: function buildDropdownItemLayout(t) {
      if (this.options.dropdownFilter) {
        var e,
            i,
            o = this,
            n = "string" == typeof this.options.dropdownFilter && this.options.dropdownFilter || "All",
            r = this.container.find("." + this.options.selector.dropdown);
        "static" !== t || !0 !== this.options.dropdownFilter && "string" != typeof this.options.dropdownFilter || this.dropdownFilter["static"].push({
          key: "group",
          template: "{{group}}",
          all: n,
          value: Object.keys(this.options.source)
        });

        for (var s = 0, a = this.dropdownFilter[t].length; s < a; s++) {
          i = this.dropdownFilter[t][s], Array.isArray(i.value) || (i.value = [i.value]), i.all && (this.dropdownFilterAll = i.all);

          for (var l = 0, h = i.value.length; l <= h; l++) {
            l === h && s !== a - 1 || l === h && s === a - 1 && "static" === t && this.dropdownFilter.dynamic.length || (e = this.dropdownFilterAll || n, i.value[l] ? e = i.template ? i.template.replace(new RegExp("{{" + i.key + "}}", "gi"), i.value[l]) : i.value[l] : this.container.find("." + o.options.selector.filterButton).html(e), function (e, i, s) {
              r.append(j("<li/>", {
                "class": o.options.selector.dropdownItem + " " + o.helper.slugify.call(o, i.key + "-" + (i.value[e] || n)),
                html: j("<a/>", {
                  href: "javascript:;",
                  html: s,
                  click: function click(t) {
                    t.preventDefault(), c.call(o, {
                      key: i.key,
                      value: i.value[e] || "*",
                      template: s
                    });
                  }
                })
              }));
            }(l, i, e));
          }
        }

        this.dropdownFilter[t].length && this.container.find("." + o.options.selector.filterButton).removeAttr("style");
      }

      function c(t) {
        "*" === t.value ? delete this.filters.dropdown : this.filters.dropdown = t, this.container.removeClass("filter").find("." + this.options.selector.filterButton).html(t.template), this.isDropdownEvent = !0, this.node.trigger("input" + this.namespace), this.options.multiselect && this.adjustInputSize(), this.node.focus();
      }
    },
    dynamicFilter: {
      init: function init() {
        this.options.dynamicFilter && (this.dynamicFilter.bind.call(this), this.isDynamicFilterEnabled = !0);
      },
      validate: function validate(t) {
        var e,
            i,
            s = null,
            o = null;

        for (var n in this.filters.dynamic) {
          if (this.filters.dynamic.hasOwnProperty(n) && (i = ~n.indexOf(".") ? this.helper.namespace.call(this, n, t, "get") : t[n], "|" !== this.filters.dynamic[n].modifier || s || (s = i == this.filters.dynamic[n].value || !1), "&" === this.filters.dynamic[n].modifier)) {
            if (i != this.filters.dynamic[n].value) {
              o = !1;
              break;
            }

            o = !0;
          }
        }

        return e = s, null !== o && !0 === (e = o) && null !== s && (e = s), !!e;
      },
      set: function set(t, e) {
        var i = t.match(/^([|&])?(.+)/);
        e ? this.filters.dynamic[i[2]] = {
          modifier: i[1] || "|",
          value: e
        } : delete this.filters.dynamic[i[2]], this.isDynamicFilterEnabled && this.generateSource();
      },
      bind: function bind() {
        for (var t, e = this, i = 0, s = this.options.dynamicFilter.length; i < s; i++) {
          "string" == typeof (t = this.options.dynamicFilter[i]).selector && (t.selector = j(t.selector)), t.selector instanceof j && t.selector[0] && t.key && function (t) {
            t.selector.off(e.namespace).on("change" + e.namespace, function () {
              e.dynamicFilter.set.apply(e, [t.key, e.dynamicFilter.getValue(this)]);
            }).trigger("change" + e.namespace);
          }(t);
        }
      },
      getValue: function getValue(t) {
        var e;
        return "SELECT" === t.tagName ? e = t.value : "INPUT" === t.tagName && ("checkbox" === t.type ? e = t.checked && t.getAttribute("value") || t.checked || null : "radio" === t.type && t.checked && (e = t.value)), e;
      }
    },
    buildMultiselectLayout: function buildMultiselectLayout() {
      if (this.options.multiselect) {
        var t,
            e = this;
        this.label.container = j("<span/>", {
          "class": this.options.selector.labelContainer,
          "data-padding-left": parseFloat(this.node.css("padding-left")) || 0,
          "data-padding-right": parseFloat(this.node.css("padding-right")) || 0,
          "data-padding-top": parseFloat(this.node.css("padding-top")) || 0,
          click: function click(t) {
            j(t.target).hasClass(e.options.selector.labelContainer) && e.node.focus();
          }
        }), this.node.closest("." + this.options.selector.query).prepend(this.label.container), this.options.multiselect.data && (Array.isArray(this.options.multiselect.data) ? this.populateMultiselectData(this.options.multiselect.data) : "function" == typeof this.options.multiselect.data && (t = this.options.multiselect.data.call(this), Array.isArray(t) ? this.populateMultiselectData(t) : "function" == typeof t.promise && j.when(t).then(function (t) {
          t && Array.isArray(t) && e.populateMultiselectData(t);
        })));
      }
    },
    isMultiselectUniqueData: function isMultiselectUniqueData(t) {
      for (var e = !0, i = 0, s = this.comparedItems.length; i < s; ++i) {
        if (this.comparedItems[i] === this.getMultiselectComparedData(t)) {
          e = !1;
          break;
        }
      }

      return e;
    },
    populateMultiselectData: function populateMultiselectData(t) {
      for (var e = 0, i = t.length; e < i; ++e) {
        this.addMultiselectItemLayout(t[e]);
      }

      this.node.trigger("search" + this.namespace, {
        origin: "populateMultiselectData"
      });
    },
    addMultiselectItemLayout: function addMultiselectItemLayout(t) {
      if (this.isMultiselectUniqueData(t)) {
        this.items.push(t), this.comparedItems.push(this.getMultiselectComparedData(t));
        var e,
            i = this.getTemplateValue(t),
            s = this,
            o = this.options.multiselect.href ? "a" : "span",
            n = j("<span/>", {
          "class": this.options.selector.label,
          html: j("<" + o + "/>", {
            text: i,
            click: function click(t) {
              var e = j(this).closest("." + s.options.selector.label),
                  i = s.label.container.find("." + s.options.selector.label).index(e);
              s.options.multiselect.callback && s.helper.executeCallback.call(s, s.options.multiselect.callback.onClick, [s.node, s.items[i], t]);
            },
            href: this.options.multiselect.href ? (e = s.items[s.items.length - 1], s.generateHref.call(s, s.options.multiselect.href, e)) : null
          })
        });
        return n.append(j("<span/>", {
          "class": this.options.selector.cancelButton,
          html: "×",
          click: function click(t) {
            var e = j(this).closest("." + s.options.selector.label),
                i = s.label.container.find("." + s.options.selector.label).index(e);
            s.cancelMultiselectItem(i, e, t);
          }
        })), this.label.container.append(n), this.adjustInputSize(), !0;
      }
    },
    cancelMultiselectItem: function cancelMultiselectItem(t, e, i) {
      var s = this.items[t];
      (e = e || this.label.container.find("." + this.options.selector.label).eq(t)).remove(), this.items.splice(t, 1), this.comparedItems.splice(t, 1), this.options.multiselect.callback && this.helper.executeCallback.call(this, this.options.multiselect.callback.onCancel, [this.node, s, i]), this.adjustInputSize(), this.focusOnly = !0, this.node.focus().trigger("input" + this.namespace, {
        origin: "cancelMultiselectItem"
      });
    },
    adjustInputSize: function adjustInputSize() {
      var i = this.node[0].getBoundingClientRect().width - (parseFloat(this.label.container.data("padding-right")) || 0) - (parseFloat(this.label.container.css("padding-left")) || 0),
          s = 0,
          o = 0,
          n = 0,
          r = !1,
          a = 0;
      this.label.container.find("." + this.options.selector.label).filter(function (t, e) {
        0 === t && (a = j(e)[0].getBoundingClientRect().height + parseFloat(j(e).css("margin-bottom") || 0)), s = j(e)[0].getBoundingClientRect().width + parseFloat(j(e).css("margin-right") || 0), .7 * i < n + s && !r && (o++, r = !0), n + s < i ? n += s : (r = !1, n = s);
      });
      var t = parseFloat(this.label.container.data("padding-left") || 0) + (r ? 0 : n),
          e = o * a + parseFloat(this.label.container.data("padding-top") || 0);
      this.container.find("." + this.options.selector.query).find("input, textarea, [contenteditable], .typeahead__hint").css({
        paddingLeft: t,
        paddingTop: e
      });
    },
    showLayout: function showLayout() {
      !this.container.hasClass("result") && (this.result.length || this.displayEmptyTemplate || this.options.backdropOnFocus) && (function () {
        var e = this;
        j("html").off("keydown" + this.namespace).on("keydown" + this.namespace, function (t) {
          t.keyCode && 9 === t.keyCode && setTimeout(function () {
            j(":focus").closest(e.container).find(e.node)[0] || e.hideLayout();
          }, 0);
        }), j("html").off("click" + this.namespace + " touchend" + this.namespace).on("click" + this.namespace + " touchend" + this.namespace, function (t) {
          j(t.target).closest(e.container)[0] || j(t.target).closest("." + e.options.selector.item)[0] || t.target.className === e.options.selector.cancelButton || e.hasDragged || e.hideLayout();
        });
      }.call(this), this.container.addClass([this.result.length || this.searchGroups.length && this.displayEmptyTemplate ? "result " : "", this.options.hint && this.searchGroups.length ? "hint" : "", this.options.backdrop || this.options.backdropOnFocus ? "backdrop" : ""].join(" ")), this.helper.executeCallback.call(this, this.options.callback.onShowLayout, [this.node, this.query]));
    },
    hideLayout: function hideLayout() {
      (this.container.hasClass("result") || this.container.hasClass("backdrop")) && (this.container.removeClass("result hint filter" + (this.options.backdropOnFocus && j(this.node).is(":focus") ? "" : " backdrop")), this.options.backdropOnFocus && this.container.hasClass("backdrop") || (j("html").off(this.namespace), this.helper.executeCallback.call(this, this.options.callback.onHideLayout, [this.node, this.query])));
    },
    resetLayout: function resetLayout() {
      this.result = [], this.tmpResult = {}, this.groups = [], this.resultCount = 0, this.resultCountPerGroup = {}, this.resultItemCount = 0, this.resultHtml = null, this.options.hint && this.hint.container && (this.hint.container.val(""), this.isContentEditable && this.hint.container.text(""));
    },
    resetInput: function resetInput() {
      this.node.val(""), this.isContentEditable && this.node.text(""), this.query = "", this.rawQuery = "";
    },
    buildCancelButtonLayout: function buildCancelButtonLayout() {
      if (this.options.cancelButton) {
        var e = this;
        j("<span/>", {
          "class": this.options.selector.cancelButton,
          html: "×",
          mousedown: function mousedown(t) {
            t.stopImmediatePropagation(), t.preventDefault(), e.resetInput(), e.node.trigger("input" + e.namespace, [t]);
          }
        }).insertBefore(this.node);
      }
    },
    toggleCancelButtonVisibility: function toggleCancelButtonVisibility() {
      this.container.toggleClass("cancel", !!this.query.length);
    },
    __construct: function __construct() {
      this.extendOptions(), this.unifySourceFormat() && (this.dynamicFilter.init.apply(this), this.init(), this.buildDropdownLayout(), this.buildDropdownItemLayout("static"), this.buildMultiselectLayout(), this.delegateEvents(), this.buildCancelButtonLayout(), this.helper.executeCallback.call(this, this.options.callback.onReady, [this.node]));
    },
    helper: {
      isEmpty: function isEmpty(t) {
        for (var e in t) {
          if (t.hasOwnProperty(e)) return !1;
        }

        return !0;
      },
      removeAccent: function removeAccent(t) {
        if ("string" == typeof t) {
          var e = o;
          return "object" == _typeof(this.options.accent) && (e = this.options.accent), t = t.toLowerCase().replace(new RegExp("[" + e.from + "]", "g"), function (t) {
            return e.to[e.from.indexOf(t)];
          });
        }
      },
      slugify: function slugify(t) {
        return "" !== (t = String(t)) && (t = (t = this.helper.removeAccent.call(this, t)).replace(/[^-a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")), t;
      },
      sort: function sort(s, i, o) {
        function n(t) {
          for (var e = 0, i = s.length; e < i; e++) {
            if (void 0 !== t[s[e]]) return o(t[s[e]]);
          }

          return t;
        }

        return i = [-1, 1][+!!i], function (t, e) {
          return t = n(t), e = n(e), i * ((e < t) - (t < e));
        };
      },
      replaceAt: function replaceAt(t, e, i, s) {
        return t.substring(0, e) + s + t.substring(e + i);
      },
      highlight: function highlight(t, e, i) {
        t = String(t);
        var s = i && this.helper.removeAccent.call(this, t) || t,
            o = [];
        Array.isArray(e) || (e = [e]), e.sort(function (t, e) {
          return e.length - t.length;
        });

        for (var n = e.length - 1; 0 <= n; n--) {
          "" !== e[n].trim() ? e[n] = e[n].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e.splice(n, 1);
        }

        s.replace(new RegExp("(?:" + e.join("|") + ")(?!([^<]+)?>)", "gi"), function (t, e, i) {
          o.push({
            offset: i,
            length: t.length
          });
        });

        for (n = o.length - 1; 0 <= n; n--) {
          t = this.helper.replaceAt(t, o[n].offset, o[n].length, "<strong>" + t.substr(o[n].offset, o[n].length) + "</strong>");
        }

        return t;
      },
      getCaret: function getCaret(t) {
        var e = 0;
        if (t.selectionStart) return t.selectionStart;

        if (document.selection) {
          var i = document.selection.createRange();
          if (null === i) return e;
          var s = t.createTextRange(),
              o = s.duplicate();
          s.moveToBookmark(i.getBookmark()), o.setEndPoint("EndToStart", s), e = o.text.length;
        } else if (window.getSelection) {
          var n = window.getSelection();

          if (n.rangeCount) {
            var r = n.getRangeAt(0);
            r.commonAncestorContainer.parentNode == t && (e = r.endOffset);
          }
        }

        return e;
      },
      setCaretAtEnd: function setCaretAtEnd(t) {
        if (void 0 !== window.getSelection && void 0 !== document.createRange) {
          var e = document.createRange();
          e.selectNodeContents(t), e.collapse(!1);
          var i = window.getSelection();
          i.removeAllRanges(), i.addRange(e);
        } else if (void 0 !== document.body.createTextRange) {
          var s = document.body.createTextRange();
          s.moveToElementText(t), s.collapse(!1), s.select();
        }
      },
      cleanStringFromScript: function cleanStringFromScript(t) {
        return "string" == typeof t && t.replace(/<\/?(?:script|iframe)\b[^>]*>/gm, "") || t;
      },
      executeCallback: function executeCallback(t, e) {
        if (t) {
          var i;
          if ("function" == typeof t) i = t;else if (("string" == typeof t || Array.isArray(t)) && ("string" == typeof t && (t = [t, []]), "function" != typeof (i = this.helper.namespace.call(this, t[0], window)))) return;
          return i.apply(this, (t[1] || []).concat(e || []));
        }
      },
      namespace: function namespace(t, e, i, s) {
        if ("string" != typeof t || "" === t) return !1;
        var o = void 0 !== s ? s : void 0;
        if (!~t.indexOf(".")) return e[t] || o;

        for (var n = t.split("."), r = e || window, a = (i = i || "get", ""), l = 0, h = n.length; l < h; l++) {
          if (void 0 === r[a = n[l]]) {
            if (~["get", "delete"].indexOf(i)) return void 0 !== s ? s : void 0;
            r[a] = {};
          }

          if (~["set", "create", "delete"].indexOf(i) && l === h - 1) {
            if ("set" !== i && "create" !== i) return delete r[a], !0;
            r[a] = o;
          }

          r = r[a];
        }

        return r;
      },
      typeWatch: (i = 0, function (t, e) {
        clearTimeout(i), i = setTimeout(t, e);
      })
    }
  }, j.fn.typeahead = j.typeahead = function (t) {
    return e.typeahead(this, t);
  };
  var e = {
    typeahead: function typeahead(t, e) {
      if (e && e.source && "object" == _typeof(e.source)) {
        if ("function" == typeof t) {
          if (!e.input) return;
          t = j(e.input);
        }

        if (t.length) {
          if (void 0 === t[0].value && (t[0].value = t.text()), 1 === t.length) return t[0].selector = t.selector || e.input || t[0].nodeName.toLowerCase(), window.Typeahead[t[0].selector] = new r(t, e);

          for (var i, s = {}, o = 0, n = t.length; o < n; ++o) {
            void 0 !== s[i = t[o].nodeName.toLowerCase()] && (i += o), t[o].selector = i, window.Typeahead[i] = s[i] = new r(t.eq(o), e);
          }

          return s;
        }
      }
    }
  };
  return window.console = window.console || {
    log: function log() {}
  }, Array.isArray || (Array.isArray = function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  }), "trim" in String.prototype || (String.prototype.trim = function () {
    return this.replace(/^\s+/, "").replace(/\s+$/, "");
  }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function (t, e) {
    void 0 === e && (e = 0), e < 0 && (e += this.length), e < 0 && (e = 0);

    for (var i = this.length; e < i; e++) {
      if (e in this && this[e] === t) return e;
    }

    return -1;
  }), Object.keys || (Object.keys = function (t) {
    var e,
        i = [];

    for (e in t) {
      Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
    }

    return i;
  }), r;
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! JsRender v1.0.6: http://jsviews.com/#jsrender */

/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function (t, e) {
  var n = e.jQuery;
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = n ? t(e, n) : function (n) {
    if (n && !n.fn) throw "Provide jQuery or null";
    return t(e, n);
  } : "function" == typeof define && define.amd ? define(function () {
    return t(e);
  }) : t(e, !1);
}(function (t, e) {
  "use strict";

  function n(t, e) {
    return function () {
      var n,
          r = this,
          i = r.base;
      return r.base = t, n = e.apply(r, arguments), r.base = i, n;
    };
  }

  function r(t, e) {
    return st(e) && (e = n(t ? t._d ? t : n(a, t) : a, e), e._d = (t && t._d || 0) + 1), e;
  }

  function i(t, e) {
    var n,
        i = e.props;

    for (n in i) {
      !$t.test(n) || t[n] && t[n].fix || (t[n] = "convert" !== n ? r(t.constructor.prototype[n], i[n]) : i[n]);
    }
  }

  function o(t) {
    return t;
  }

  function a() {
    return "";
  }

  function s(t) {
    try {
      throw console.log("JsRender dbg breakpoint: " + t), "dbg breakpoint";
    } catch (e) {}

    return this.base ? this.baseApply(arguments) : t;
  }

  function l(t) {
    this.name = (e.link ? "JsViews" : "JsRender") + " Error", this.message = t || this.name;
  }

  function d(t, e) {
    if (t) {
      for (var n in e) {
        t[n] = e[n];
      }

      return t;
    }
  }

  function p(t, e, n) {
    return t ? lt(t) ? p.apply(ot, t) : (wt = n ? n[0] : wt, /^(\W|_){5}$/.test(t + e + wt) || S("Invalid delimiters"), ht = t[0], _t = t[1], xt = e[0], bt = e[1], gt.delimiters = [ht + _t, xt + bt, wt], t = "\\" + ht + "(\\" + wt + ")?\\" + _t, e = "\\" + xt + "\\" + bt, rt = "(?:(\\w+(?=[\\/\\s\\" + xt + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + xt + "]|\\" + xt + "(?!\\" + bt + "))*?)", ft.rTag = "(?:" + rt + ")", rt = new RegExp("(?:" + t + rt + "(\\/)?|\\" + ht + "(\\" + wt + ")?\\" + _t + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + e, "g"), ft.rTmpl = new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|" + t + ".*" + e), mt) : gt.delimiters;
  }

  function u(t, e) {
    e || t === !0 || (e = t, t = void 0);
    var n,
        r,
        i,
        o,
        a = this,
        s = "root" === e;

    if (t) {
      if (o = e && a.type === e && a, !o) if (n = a.views, a._.useKey) {
        for (r in n) {
          if (o = e ? n[r].get(t, e) : n[r]) break;
        }
      } else for (r = 0, i = n.length; !o && r < i; r++) {
        o = e ? n[r].get(t, e) : n[r];
      }
    } else if (s) o = a.root;else if (e) for (; a && !o;) {
      o = a.type === e ? a : void 0, a = a.parent;
    } else o = a.parent;

    return o || void 0;
  }

  function c() {
    var t = this.get("item");
    return t ? t.index : void 0;
  }

  function f() {
    return this.index;
  }

  function g(t, e, n, r) {
    var i,
        o,
        s,
        l = 0;
    if (1 === n && (r = 1, n = void 0), e) for (o = e.split("."), s = o.length; t && l < s; l++) {
      i = t, t = o[l] ? t[o[l]] : t;
    }
    return n && (n.lt = n.lt || l < s), void 0 === t ? r ? a : "" : r ? function () {
      return t.apply(i, arguments);
    } : t;
  }

  function v(n, r, i) {
    var o,
        a,
        s,
        l,
        p,
        u,
        c,
        f = this,
        g = !kt && arguments.length > 1,
        v = f.ctx;

    if (n) {
      if (f._ || (p = f.index, f = f.tag), u = f, v && v.hasOwnProperty(n) || (v = ut).hasOwnProperty(n)) {
        if (s = v[n], "tag" === n || "tagCtx" === n || "root" === n || "parentTags" === n) return s;
      } else v = void 0;

      if ((!kt && f.tagCtx || f.linked) && (s && s._cxp || (f = f.tagCtx || st(s) ? f : (f = f.scope || f, !f.isTop && f.ctx.tag || f), void 0 !== s && f.tagCtx && (f = f.tagCtx.view.scope), v = f._ocps, s = v && v.hasOwnProperty(n) && v[n] || s, s && s._cxp || !i && !g || ((v || (f._ocps = f._ocps || {}))[n] = s = [{
        _ocp: s,
        _vw: u,
        _key: n
      }], s._cxp = {
        path: Tt,
        ind: 0,
        updateValue: function updateValue(t, n) {
          return e.observable(s[0]).setProperty(Tt, t), this;
        }
      })), l = s && s._cxp)) {
        if (arguments.length > 2) return a = s[1] ? ft._ceo(s[1].deps) : [Tt], a.unshift(s[0]), a._cxp = l, a;
        if (p = l.tagElse, c = s[1] ? l.tag && l.tag.cvtArgs ? l.tag.cvtArgs(p, 1)[l.ind] : s[1](s[0].data, s[0], ft) : s[0]._ocp, g) return ft._ucp(n, r, f, l), f;
        s = c;
      }

      return s && st(s) && (o = function o() {
        return s.apply(this && this !== t ? this : u, arguments);
      }, d(o, s)), o || s;
    }
  }

  function m(t) {
    return t && (t.fn ? t : this.getRsc("templates", t) || dt(t));
  }

  function h(t, e, n, r) {
    var o,
        a,
        s,
        l,
        p,
        u = "number" == typeof n && e.tmpl.bnds[n - 1];

    if (void 0 === r && u && u._lr && (r = ""), void 0 !== r ? n = r = {
      props: {},
      args: [r]
    } : u && (n = u(e.data, e, ft)), u = u._bd && u, t || u) {
      if (a = e._lc, o = a && a.tag, n.view = e, !o) {
        if (o = d(new ft._tg(), {
          _: {
            bnd: u,
            unlinked: !0,
            lt: n.lt
          },
          inline: !a,
          tagName: ":",
          convert: t,
          onArrayChange: !0,
          flow: !0,
          tagCtx: n,
          tagCtxs: [n],
          _is: "tag"
        }), l = n.args.length, l > 1) for (p = o.bindTo = []; l--;) {
          p.unshift(l);
        }
        a && (a.tag = o, o.linkCtx = a), n.ctx = Q(n.ctx, (a ? a.view : e).ctx), i(o, n);
      }

      o._er = r && s, o.ctx = n.ctx || o.ctx || {}, n.ctx = void 0, s = o.cvtArgs()[0], o._er = r && s;
    } else s = n.args[0];

    return s = u && e._.onRender ? e._.onRender(s, e, o) : s, void 0 != s ? s : "";
  }

  function _(t, e) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        d = this;

    if (d.tagName) {
      if (s = d, d = (s.tagCtxs || [d])[t || 0], !d) return;
    } else s = d.tag;

    if (a = s.bindFrom, o = d.args, (l = s.convert) && "" + l === l && (l = "true" === l ? void 0 : d.view.getRsc("converters", l) || S("Unknown converter: '" + l + "'")), l && !e && (o = o.slice()), a) {
      for (i = [], n = a.length; n--;) {
        r = a[n], i.unshift(x(d, r));
      }

      e && (o = i);
    }

    if (l) {
      if (l = l.apply(s, i || o), void 0 === l) return o;
      if (a = a || [0], n = a.length, lt(l) && l.length === n || (l = [l], a = [0], n = 1), e) o = l;else for (; n--;) {
        r = a[n], +r === r && (o[r] = l[n]);
      }
    }

    return o;
  }

  function x(t, e) {
    return t = t[+e === e ? "args" : "props"], t && t[e];
  }

  function b(t) {
    return this.cvtArgs(t, 1);
  }

  function w(t, e) {
    var n,
        r,
        i = this;

    if ("" + e === e) {
      for (; void 0 === n && i;) {
        r = i.tmpl && i.tmpl[t], n = r && r[e], i = i.parent;
      }

      return n || ot[t][e];
    }
  }

  function y(t, e, n, r, o, a) {
    function s(t) {
      var e = l[t];
      if (void 0 !== e) for (e = lt(e) ? e : [e], m = e.length; m--;) {
        J = e[m], isNaN(parseInt(J)) || (e[m] = parseInt(J));
      }
      return e || [0];
    }

    e = e || it;
    var l,
        d,
        p,
        u,
        c,
        f,
        g,
        m,
        h,
        w,
        y,
        k,
        C,
        T,
        j,
        A,
        P,
        R,
        N,
        M,
        F,
        V,
        $,
        I,
        D,
        J,
        U,
        q,
        K,
        L,
        B = 0,
        H = "",
        W = e._lc || !1,
        Z = e.ctx,
        z = n || e.tmpl,
        G = "number" == typeof r && e.tmpl.bnds[r - 1];

    for ("tag" === t._is ? (l = t, t = l.tagName, r = l.tagCtxs, p = l.template) : (d = e.getRsc("tags", t) || S("Unknown tag: {{" + t + "}} "), p = d.template), void 0 === a && G && (G._lr = d.lateRender && G._lr !== !1 || G._lr) && (a = ""), void 0 !== a ? (H += a, r = a = [{
      props: {},
      args: [],
      params: {
        props: {}
      }
    }]) : G && (r = G(e.data, e, ft)), g = r.length; B < g; B++) {
      y = r[B], P = y.tmpl, (!W || !W.tag || B && !W.tag.inline || l._er || P && +P === P) && (P && z.tmpls && (y.tmpl = y.content = z.tmpls[P - 1]), y.index = B, y.ctxPrm = v, y.render = E, y.cvtArgs = _, y.bndArgs = b, y.view = e, y.ctx = Q(Q(y.ctx, d && d.ctx), Z)), (n = y.props.tmpl) && (y.tmpl = e._getTmpl(n), y.content = y.content || y.tmpl), l ? W && W.fn._lr && (R = !!l.init) : (l = new d._ctr(), R = !!l.init, l.parent = f = Z && Z.tag, l.tagCtxs = r, W && (l.inline = !1, W.tag = l), l.linkCtx = W, (l._.bnd = G || W.fn) ? (l._.ths = y.params.props["this"], l._.lt = r.lt, l._.arrVws = {}) : l.dataBoundOnly && S(t + " must be data-bound:\n{^{" + t + "}}")), I = l.dataMap, y.tag = l, I && r && (y.map = r[B].map), l.flow || (k = y.ctx = y.ctx || {}, u = l.parents = k.parentTags = Z && Q(k.parentTags, Z.parentTags) || {}, f && (u[f.tagName] = f), u[l.tagName] = k.tag = l, k.tagCtx = y);
    }

    if (!(l._er = a)) {
      for (i(l, r[0]), l.rendering = {
        rndr: l.rendering
      }, B = 0; B < g; B++) {
        if (y = l.tagCtx = r[B], $ = y.props, l.ctx = y.ctx, !B) {
          if (R && (l.init(y, W, l.ctx), R = void 0), y.args.length || y.argDefault === !1 || l.argDefault === !1 || (y.args = F = [y.view.data], y.params.args = ["#data"]), T = s("bindTo"), void 0 !== l.bindTo && (l.bindTo = T), void 0 !== l.bindFrom ? l.bindFrom = s("bindFrom") : l.bindTo && (l.bindFrom = l.bindTo = T), j = l.bindFrom || T, q = T.length, U = j.length, l._.bnd && (K = l.linkedElement) && (l.linkedElement = K = lt(K) ? K : [K], q !== K.length && S("linkedElement not same length as bindTo")), (K = l.linkedCtxParam) && (l.linkedCtxParam = K = lt(K) ? K : [K], U !== K.length && S("linkedCtxParam not same length as bindFrom/bindTo")), j) for (l._.fromIndex = {}, l._.toIndex = {}, h = U; h--;) {
            for (J = j[h], m = q; m--;) {
              J === T[m] && (l._.fromIndex[m] = h, l._.toIndex[h] = m);
            }
          }
          W && (W.attr = l.attr = W.attr || l.attr || W._dfAt), c = l.attr, l._.noVws = c && c !== Kt;
        }

        if (F = l.cvtArgs(B), l.linkedCtxParam) for (V = l.cvtArgs(B, 1), m = U, L = l.constructor.prototype.ctx; m--;) {
          (C = l.linkedCtxParam[m]) && (J = j[m], A = V[m], y.ctx[C] = ft._cp(L && void 0 === A ? L[C] : A, void 0 !== A && x(y.params, J), y.view, l._.bnd && {
            tag: l,
            cvt: l.convert,
            ind: m,
            tagElse: B
          }));
        }
        (N = $.dataMap || I) && (F.length || $.dataMap) && (M = y.map, M && M.src === F[0] && !o || (M && M.src && M.unmap(), N.map(F[0], y, M, !l._.bnd), M = y.map), F = [M.tgt]), w = void 0, l.render && (w = l.render.apply(l, F), e.linked && w && !Et.test(w) && (n = {
          links: []
        }, n.render = n.fn = function () {
          return w;
        }, w = O(n, e.data, void 0, !0, e, void 0, void 0, l))), F.length || (F = [e]), void 0 === w && (D = F[0], l.contentCtx && (D = l.contentCtx === !0 ? e : l.contentCtx(D)), w = y.render(D, !0) || (o ? void 0 : "")), H = H ? H + (w || "") : void 0 !== w ? "" + w : void 0;
      }

      l.rendering = l.rendering.rndr;
    }

    return l.tagCtx = r[0], l.ctx = l.tagCtx.ctx, l._.noVws && l.inline && (H = "text" === c ? pt.html(H) : ""), G && e._.onRender ? e._.onRender(H, e, l) : H;
  }

  function k(t, e, n, r, i, o, a, s) {
    var l,
        d,
        p,
        u = this,
        f = "array" === e;
    u.content = s, u.views = f ? [] : {}, u.data = r, u.tmpl = i, p = u._ = {
      key: 0,
      useKey: f ? 0 : 1,
      id: "" + Jt++,
      onRender: a,
      bnds: {}
    }, u.linked = !!a, u.type = e || "top", n && "top" !== n.type || ((u.ctx = t || {}).root = u.data), (u.parent = n) ? (u.root = n.root || u, l = n.views, d = n._, u.isTop = d.scp, u.scope = (!t.tag || t.tag === n.ctx.tag) && !u.isTop && n.scope || u, d.useKey ? (l[p.key = "_" + d.useKey++] = u, u.index = Ht, u.getIndex = c) : l.length === (p.key = u.index = o) ? l.push(u) : l.splice(o, 0, u), u.ctx = t || n.ctx) : e && (u.root = u);
  }

  function C(t) {
    var e, n, r;

    for (e in Gt) {
      n = e + "s", t[n] && (r = t[n], t[n] = {}, ot[n](r, t));
    }
  }

  function T(t, e, n) {
    function i() {
      var e = this;
      e._ = {
        unlinked: !0
      }, e.inline = !0, e.tagName = t;
    }

    var o,
        a,
        s,
        l = new ft._tg();

    if (st(e) ? e = {
      depends: e.depends,
      render: e
    } : "" + e === e && (e = {
      template: e
    }), a = e.baseTag) {
      e.flow = !!e.flow, a = "" + a === a ? n && n.tags[a] || ct[a] : a, a || S('baseTag: "' + e.baseTag + '" not found'), l = d(l, a);

      for (s in e) {
        l[s] = r(a[s], e[s]);
      }
    } else l = d(l, e);

    return void 0 !== (o = l.template) && (l.template = "" + o === o ? dt[o] || dt(o) : o), (i.prototype = l).constructor = l._ctr = i, n && (l._parentTmpl = n), l;
  }

  function j(t) {
    return this.base.apply(this, t);
  }

  function A(t, n, r, i) {
    function o(n) {
      var o, s;

      if ("" + n === n || n.nodeType > 0 && (a = n)) {
        if (!a) if (/^\.\/[^\\:*?"<>]*$/.test(n)) (s = dt[t = t || n]) ? n = s : a = document.getElementById(n);else if (e.fn && !ft.rTmpl.test(n)) try {
          a = e(n, document)[0];
        } catch (l) {}
        a && ("SCRIPT" !== a.tagName && S(n + ": Use script block, not " + a.tagName), i ? n = a.innerHTML : (o = a.getAttribute(Bt), o && (o !== Qt ? (n = dt[o], delete dt[o]) : e.fn && (n = e.data(a)[Qt])), o && n || (t = t || (e.fn ? Qt : n), n = A(t, a.innerHTML, r, i)), n.tmplName = t = t || o, t !== Qt && (dt[t] = n), a.setAttribute(Bt, t), e.fn && e.data(a, Qt, n))), a = void 0;
      } else n.fn || (n = void 0);

      return n;
    }

    var a,
        s,
        l = n = n || "";
    if (ft._html = pt.html, 0 === i && (i = void 0, l = o(l)), i = i || (n.markup ? n.bnds ? d({}, n) : n : {}), i.tmplName = i.tmplName || t || "unnamed", r && (i._parentTmpl = r), !l && n.markup && (l = o(n.markup)) && l.fn && (l = l.markup), void 0 !== l) return l.render || n.render ? l.tmpls && (s = l) : (n = M(l, i), J(l.replace(Pt, "\\$&"), n)), s || (s = d(function () {
      return s.render.apply(s, arguments);
    }, n), C(s)), s;
  }

  function P(t, e) {
    return st(t) ? t.call(e) : t;
  }

  function R(t, e, n) {
    Object.defineProperty(t, e, {
      value: n,
      configurable: !0
    });
  }

  function N(t, n) {
    function r(t) {
      p.apply(this, t);
    }

    function i() {
      return new r(arguments);
    }

    function o(t, e) {
      for (var n, r, i, o, a, s = 0; s < x; s++) {
        i = f[s], n = void 0, i + "" !== i && (n = i, i = n.getter, a = n.parentRef), void 0 === (o = t[i]) && n && void 0 !== (r = n.defaultVal) && (o = P(r, t)), e(o, n && c[n.type], i, a);
      }
    }

    function a(e) {
      e = e + "" === e ? JSON.parse(e) : e;
      var n,
          r,
          i,
          a,
          d = 0,
          p = e,
          u = [];

      if (lt(e)) {
        for (e = e || [], n = e.length; d < n; d++) {
          u.push(this.map(e[d]));
        }

        return u._is = t, u.unmap = l, u.merge = s, u;
      }

      if (e) {
        for (o(e, function (t, e) {
          e && (t = e.map(t)), u.push(t);
        }), p = this.apply(this, u), d = x; d--;) {
          if (i = u[d], a = f[d].parentRef, a && i && i.unmap) if (lt(i)) for (n = i.length; n--;) {
            R(i[n], a, p);
          } else R(i, a, p);
        }

        for (r in e) {
          r === at || w[r] || (p[r] = e[r]);
        }
      }

      return p;
    }

    function s(t, e, n) {
      t = t + "" === t ? JSON.parse(t) : t;
      var r,
          a,
          s,
          l,
          d,
          p,
          u,
          c,
          f,
          g,
          m = 0,
          h = this;

      if (lt(h)) {
        for (u = {}, f = [], a = t.length, s = h.length; m < a; m++) {
          for (c = t[m], p = !1, r = 0; r < s && !p; r++) {
            u[r] || (d = h[r], v && (u[r] = p = v + "" === v ? c[v] && (w[v] ? d[v]() : d[v]) === c[v] : v(d, c)));
          }

          p ? (d.merge(c), f.push(d)) : (f.push(g = i.map(c)), n && R(g, n, e));
        }

        return void (b ? b(h).refresh(f, !0) : h.splice.apply(h, [0, h.length].concat(f)));
      }

      o(t, function (t, e, n, r) {
        e ? h[n]().merge(t, h, r) : h[n]() !== t && h[n](t);
      });

      for (l in t) {
        l === at || w[l] || (h[l] = t[l]);
      }
    }

    function l() {
      function t(t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) {
          e.push(t[n].unmap());
        }

        return e;
      }

      var e,
          n,
          r,
          i,
          o = 0,
          a = this;
      if (lt(a)) return t(a);

      for (e = {}; o < x; o++) {
        n = f[o], r = void 0, n + "" !== n && (r = n, n = r.getter), i = a[n](), e[n] = r && i && c[r.type] ? lt(i) ? t(i) : i.unmap() : i;
      }

      for (n in a) {
        !a.hasOwnProperty(n) || "_" === n.charAt(0) && w[n.slice(1)] || n === at || st(a[n]) || (e[n] = a[n]);
      }

      return e;
    }

    var d,
        p,
        u,
        c = this,
        f = n.getters,
        g = n.extend,
        v = n.id,
        m = e.extend({
      _is: t || "unnamed",
      unmap: l,
      merge: s
    }, g),
        h = "",
        _ = "",
        x = f ? f.length : 0,
        b = e.observable,
        w = {};

    for (r.prototype = m, d = 0; d < x; d++) {
      !function (t) {
        t = t.getter || t, w[t] = d + 1;
        var e = "_" + t;
        h += (h ? "," : "") + t, _ += "this." + e + " = " + t + ";\n", m[t] = m[t] || function (n) {
          return arguments.length ? void (b ? b(this).setProperty(t, n) : this[e] = n) : this[e];
        }, b && (m[t].set = m[t].set || function (t) {
          this[e] = t;
        });
      }(f[d]);
    }

    return _ = new Function(h, _), p = function p() {
      _.apply(this, arguments), (u = arguments[x + 1]) && R(this, arguments[x], u);
    }, p.prototype = m, m.constructor = p, i.map = a, i.getters = f, i.extend = g, i.id = v, i;
  }

  function M(t, n) {
    var r,
        i = vt._wm || {},
        o = {
      tmpls: [],
      links: {},
      bnds: [],
      _is: "template",
      render: E
    };
    return n && (o = d(o, n)), o.markup = t, o.htmlTag || (r = Mt.exec(t), o.htmlTag = r ? r[1].toLowerCase() : ""), r = i[o.htmlTag], r && r !== i.div && (o.markup = e.trim(o.markup)), o;
  }

  function F(t, e) {
    function n(i, o, a) {
      var s,
          l,
          d,
          p = ft.onStore[t];

      if (i && _typeof(i) === Lt && !i.nodeType && !i.markup && !i.getTgt && !("viewModel" === t && i.getters || i.extend)) {
        for (l in i) {
          n(l, i[l], o);
        }

        return o || ot;
      }

      return i && "" + i !== i && (a = o, o = i, i = void 0), d = a ? "viewModel" === t ? a : a[r] = a[r] || {} : n, s = e.compile, void 0 === o && (o = s ? i : d[i], i = void 0), null === o ? i && delete d[i] : (s && (o = s.call(d, i, o, a, 0) || {}, o._is = t), i && (d[i] = o)), p && p(i, o, a, s), o;
    }

    var r = t + "s";
    ot[r] = n;
  }

  function V(t) {
    mt[t] = mt[t] || function (e) {
      return arguments.length ? (gt[t] = e, mt) : gt[t];
    };
  }

  function $(t) {
    function e(e, n) {
      this.tgt = t.getTgt(e, n), n.map = this;
    }

    return st(t) && (t = {
      getTgt: t
    }), t.baseMap && (t = d(d({}, t.baseMap), t)), t.map = function (t, n) {
      return new e(t, n);
    }, t;
  }

  function E(t, e, n, r, i, o) {
    var a,
        s,
        l,
        d,
        p,
        u,
        c,
        f,
        g = r,
        v = "";

    if (e === !0 ? (n = e, e = void 0) : _typeof(e) !== Lt && (e = void 0), (l = this.tag) ? (p = this, g = g || p.view, d = g._getTmpl(l.template || p.tmpl), arguments.length || (t = l.contentCtx && st(l.contentCtx) ? t = l.contentCtx(t) : g)) : d = this, d) {
      if (!r && t && "view" === t._is && (g = t), g && t === g && (t = g.data), u = !g, kt = kt || u, g || ((e = e || {}).root = t), !kt || vt.useViews || d.useViews || g && g !== it) v = O(d, t, e, n, g, i, o, l);else {
        if (g ? (c = g.data, f = g.index, g.index = Ht) : (g = it, c = g.data, g.data = t, g.ctx = e), lt(t) && !n) for (a = 0, s = t.length; a < s; a++) {
          g.index = a, g.data = t[a], v += d.fn(t[a], g, ft);
        } else g.data = t, v += d.fn(t, g, ft);
        g.data = c, g.index = f;
      }
      u && (kt = void 0);
    }

    return v;
  }

  function O(t, e, n, r, i, o, a, s) {
    var l,
        p,
        u,
        c,
        f,
        g,
        v,
        m,
        h,
        _,
        x,
        b,
        w,
        y = "";

    if (s && (h = s.tagName, b = s.tagCtx, n = n ? Q(n, s.ctx) : s.ctx, t === i.content ? v = t !== i.ctx._wrp ? i.ctx._wrp : void 0 : t !== b.content ? t === s.template ? (v = b.tmpl, n._wrp = b.content) : v = b.content || i.content : v = i.content, b.props.link === !1 && (n = n || {}, n.link = !1)), i && (a = a || i._.onRender, w = n && n.link === !1, w && i._.nl && (a = void 0), n = Q(n, i.ctx), b = !s && i.tag ? i.tag.tagCtxs[i.tagElse] : b), (_ = b && b.props.itemVar) && ("~" !== _[0] && D("Use itemVar='~myItem'"), _ = _.slice(1)), o === !0 && (g = !0, o = 0), a && s && s._.noVws && (a = void 0), m = a, a === !0 && (m = void 0, a = i._.onRender), n = t.helpers ? Q(t.helpers, n) : n, x = n, lt(e) && !r) for (u = g ? i : void 0 !== o && i || new k(n, "array", i, e, t, o, a, v), u._.nl = w, i && i._.useKey && (u._.bnd = !s || s._.bnd && s, u.tag = s), l = 0, p = e.length; l < p; l++) {
      c = new k(x, "item", u, e[l], t, (o || 0) + l, a, u.content), _ && ((c.ctx = d({}, x))[_] = ft._cp(e[l], "#data", c)), f = t.fn(e[l], c, ft), y += u._.onRender ? u._.onRender(f, c) : f;
    } else u = g ? i : new k(x, h || "data", i, e, t, o, a, v), _ && ((u.ctx = d({}, x))[_] = ft._cp(e, "#data", u)), u.tag = s, u._.nl = w, y += t.fn(e, u, ft);
    return s && (u.tagElse = b.index, b.contentView = u), m ? m(y, u) : y;
  }

  function I(t, e, n) {
    var r = void 0 !== n ? st(n) ? n.call(e.data, t, e) : n || "" : "{Error: " + (t.message || t) + "}";
    return gt.onError && void 0 !== (n = gt.onError.call(e.data, t, n && r, e)) && (r = n), e && !e._lc ? pt.html(r) : r;
  }

  function S(t) {
    throw new ft.Err(t);
  }

  function D(t) {
    S("Syntax error\n" + t);
  }

  function J(t, e, n, r, i) {
    function o(e) {
      e -= v, e && h.push(t.substr(v, e).replace(jt, "\\n"));
    }

    function a(e, n) {
      e && (e += "}}", D((n ? "{{" + n + "}} block has {{/" + e + " without {{" + e : "Unmatched or missing {{/" + e) + ", in template:\n" + t));
    }

    function s(s, l, d, c, g, x, b, w, y, k, C, T) {
      (b && l || y && !d || w && ":" === w.slice(-1) || k) && D(s), x && (g = ":", c = Kt), y = y || n && !i;
      var j,
          A,
          P,
          R = (l || n) && [[]],
          N = "",
          M = "",
          F = "",
          V = "",
          $ = "",
          E = "",
          O = "",
          I = "",
          S = !y && !g;
      d = d || (w = w || "#data", g), o(T), v = T + s.length, b ? f && h.push(["*", "\n" + w.replace(/^:/, "ret+= ").replace(At, "$1") + ";\n"]) : d ? ("else" === d && (Nt.test(w) && D('For "{{else if expr}}" use "{{else expr}}"'), R = _[9] && [[]], _[10] = t.substring(_[10], T), A = _[11] || _[0] || D("Mismatched: " + s), _ = m.pop(), h = _[2], S = !0), w && L(w.replace(jt, " "), R, e, n).replace(Rt, function (t, e, n, r, i, o, a, s) {
        return "this:" === r && (o = "undefined"), s && (P = P || "@" === s[0]), r = "'" + i + "':", a ? (M += n + o + ",", V += "'" + s + "',") : n ? (F += r + "j._cp(" + o + ',"' + s + '",view),', E += r + "'" + s + "',") : e ? O += o : ("trigger" === i && (I += o), "lateRender" === i && (j = "false" !== s), N += r + o + ",", $ += r + "'" + s + "',", u = u || $t.test(i)), "";
      }).slice(0, -1), R && R[0] && R.pop(), p = [d, c || !!r || u || "", S && [], q(V || (":" === d ? "'#data'," : ""), $, E), q(M || (":" === d ? "data," : ""), N, F), O, I, j, P, R || 0], h.push(p), S && (m.push(_), _ = p, _[10] = v, _[11] = A)) : C && (a(C !== _[0] && C !== _[11] && C, _[0]), _[10] = t.substring(_[10], T), _ = m.pop()), a(!_ && C), h = _[2];
    }

    var l,
        d,
        p,
        u,
        c,
        f = gt.allowCode || e && e.allowCode || mt.allowCode === !0,
        g = [],
        v = 0,
        m = [],
        h = g,
        _ = [,, g];

    if (f && e._is && (e.allowCode = f), n && (void 0 !== r && (t = t.slice(0, -r.length - 2) + xt), t = ht + t + bt), a(m[0] && m[0][2].pop()[0]), t.replace(rt, s), o(t.length), (v = g[g.length - 1]) && a("" + v !== v && +v[10] === v[10] && v[0]), n) {
      for (d = B(g, t, n), c = [], l = g.length; l--;) {
        c.unshift(g[l][9]);
      }

      U(d, c);
    } else d = B(g, e);

    return d;
  }

  function U(t, e) {
    var n,
        r,
        i = 0,
        o = e.length;

    for (t.deps = [], t.paths = []; i < o; i++) {
      t.paths.push(r = e[i]);

      for (n in r) {
        "_jsvto" !== n && r.hasOwnProperty(n) && r[n].length && !r[n].skp && (t.deps = t.deps.concat(r[n]));
      }
    }
  }

  function q(t, e, n) {
    return [t.slice(0, -1), e.slice(0, -1), n.slice(0, -1)];
  }

  function K(t, e) {
    return "\n\t" + (e ? e + ":{" : "") + "args:[" + t[0] + "],\n\tprops:{" + t[1] + "}" + (t[2] ? ",\n\tctx:{" + t[2] + "}" : "");
  }

  function L(t, e, n, r) {
    function i(i, p, x, b, w, y, k, C, T, j, A, P, R, N, M, F, V, $, E, O, I) {
      function S(t, n, i, s, l, d, p, f) {
        var g = "." === i;

        if (i && (w = w.slice(n.length), /^\.?constructor$/.test(f || w) && D(t), g || (t = (j ? (r ? "" : "(ltOb.lt=ltOb.lt||") + "(ob=" : "") + (s ? 'view.ctxPrm("' + s + '")' : l ? "view" : "data") + (j ? ")===undefined" + (r ? "" : ")") + '?"":view._getOb(ob,"' : "") + (f ? (d ? "." + d : s ? "" : l ? "" : "." + i) + (p || "") : (f = s ? "" : l ? d || "" : i, "")), t += f ? "." + f : "", t = n + ("view.data" === t.slice(0, 9) ? t.slice(5) : t) + (j ? (r ? '"' : '",ltOb') + (A ? ",1)" : ")") : "")), u)) {
          if (K = "_linkTo" === o ? a = e._jsvto = e._jsvto || [] : c.bd, L = g && K[K.length - 1]) {
            if (L._cpfn) {
              for (; L.sb;) {
                L = L.sb;
              }

              L.bnd && (w = "^" + w.slice(1)), L.sb = w, L.bnd = L.bnd || "^" === w[0];
            }
          } else K.push(w);

          _[m] = O + (g ? 1 : 0);
        }

        return t;
      }

      b && !C && (w = b + w), y = y || "", x = x || p || R, w = w || T, j && (j = !/\)|]/.test(I[O - 1])) && (w = w.slice(1).split(".").join("^")), A = A || $ || "";
      var U,
          q,
          K,
          L,
          B,
          Q = ")";

      if ("[" === A && (A = "[j._sq(", Q = ")]"), !k || d || l) {
        if (u && V && !d && !l && m && (U = _[m - 1], I.length - 1 > O - (U || 0))) {
          if (U = I.slice(U, O + i.length), q !== !0) if (K = a || f[m - 1].bd, L = K[K.length - 1], L && L.prm) {
            for (; L.sb && L.sb.prm;) {
              L = L.sb;
            }

            B = L.sb = {
              path: L.sb,
              bnd: L.bnd
            };
          } else K.push(B = {
            path: K.pop()
          });
          V = _t + ":" + U + " onerror=''" + xt, q = v[V], q || (v[V] = !0, v[V] = q = J(V, n, !0)), q !== !0 && B && (B._cpfn = q, B.prm = c.bd, B.bnd = B.bnd || B.path && B.path.indexOf("^") >= 0);
        }

        return d ? (d = !N, d ? i : R + '"') : l ? (l = !M, l ? i : R + '"') : (x ? (_[m] = O++, c = f[++m] = {
          bd: []
        }, x) : "") + (E ? m ? "" : (g = I.slice(g, O), (o ? (o = s = a = !1, "\b") : "\b,") + g + (g = O + i.length, u && e.push(c.bd = []), "\b")) : C ? (m && D(t), u && e.pop(), o = "_" + w, s = b, g = O + i.length, u && (u = c.bd = e[o] = [], u.skp = !b), w + ":") : w ? w.split("^").join(".").replace(ft.rPath, S) + (A ? (c = f[++m] = {
          bd: []
        }, h[m] = Q, A) : y) : y ? y : F ? (F = h[m] || F, h[m] = !1, c = f[--m], F + (A ? (c = f[++m], h[m] = Q, A) : "")) : P ? (h[m] || D(t), ",") : p ? "" : (d = N, l = M, '"'));
      }

      D(t);
    }

    var o,
        a,
        s,
        l,
        d,
        p,
        u = e && e[0],
        c = {
      bd: u
    },
        f = {
      0: c
    },
        g = 0,
        v = (n ? n.links : u && (u.links = u.links || {})) || it.tmpl.links,
        m = 0,
        h = {},
        _ = {};
    return "@" === t[0] && (t = t.replace(Dt, ".")), p = (t + (n ? " " : "")).replace(ft.rPrm, i), !m && p || D(t);
  }

  function B(t, e, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        d,
        p,
        u,
        c,
        f,
        g,
        v,
        m,
        h,
        _,
        x,
        b,
        w,
        y,
        k,
        C,
        T,
        j,
        A,
        P,
        R,
        N,
        F,
        V,
        $,
        E,
        O,
        I = 0,
        S = vt.useViews || e.useViews || e.tags || e.templates || e.helpers || e.converters,
        J = "",
        q = {},
        L = t.length;

    for ("" + e === e ? (b = n ? 'data-link="' + e.replace(jt, " ").slice(1, -1) + '"' : e, e = 0) : (b = e.tmplName || "unnamed", e.allowCode && (q.allowCode = !0), e.debug && (q.debug = !0), f = e.bnds, x = e.tmpls), r = 0; r < L; r++) {
      if (i = t[r], "" + i === i) J += '\n+"' + i + '"';else if (o = i[0], "*" === o) J += ";\n" + i[1] + "\nret=ret";else {
        if (a = i[1], k = !n && i[2], s = K(i[3], "params") + "}," + K(v = i[4]), V = i[6], $ = i[7], i[8] ? (E = "\nvar ob,ltOb={},ctxs=", O = ";\nctxs.lt=ltOb.lt;\nreturn ctxs;") : (E = "\nreturn ", O = ""), C = i[10] && i[10].replace(At, "$1"), (A = "else" === o) ? g && g.push(i[9]) : (N = i[5] || gt.debugMode !== !1 && "undefined", f && (g = i[9]) && (g = [g], I = f.push(1))), S = S || v[1] || v[2] || g || /view.(?!index)/.test(v[0]), (P = ":" === o) ? a && (o = a === Kt ? ">" : a + o) : (k && (w = M(C, q), w.tmplName = b + "/" + o, w.useViews = w.useViews || S, B(k, w), S = w.useViews, x.push(w)), A || (y = o, S = S || o && (!ct[o] || !ct[o].flow), j = J, J = ""), T = t[r + 1], T = T && "else" === T[0]), F = N ? ";\ntry{\nret+=" : "\n+", m = "", h = "", P && (g || V || a && a !== Kt || $)) {
          if (R = new Function("data,view,j,u", "// " + b + " " + ++I + " " + o + E + "{" + s + "};" + O), R._er = N, R._tag = o, R._bd = !!g, R._lr = $, n) return R;
          U(R, g), _ = 'c("' + a + '",view,', c = !0, m = _ + I + ",", h = ")";
        }

        if (J += P ? (n ? (N ? "try{\n" : "") + "return " : F) + (c ? (c = void 0, S = u = !0, _ + (R ? (f[I - 1] = R, I) : "{" + s + "}") + ")") : ">" === o ? (d = !0, "h(" + v[0] + ")") : (p = !0, "((v=" + v[0] + ")!=null?v:" + (n ? "null)" : '"")'))) : (l = !0, "\n{view:view,content:false,tmpl:" + (k ? x.length : "false") + "," + s + "},"), y && !T) {
          if (J = "[" + J.slice(0, -1) + "]", _ = 't("' + y + '",view,this,', n || g) {
            if (J = new Function("data,view,j,u", " // " + b + " " + I + " " + y + E + J + O), J._er = N, J._tag = y, g && U(f[I - 1] = J, g), J._lr = $, n) return J;
            m = _ + I + ",undefined,", h = ")";
          }

          J = j + F + _ + (g && I || J) + ")", g = 0, y = 0;
        }

        N && !T && (S = !0, J += ";\n}catch(e){ret" + (n ? "urn " : "+=") + m + "j._err(e,view," + N + ")" + h + ";}" + (n ? "" : "ret=ret"));
      }
    }

    J = "// " + b + (q.debug ? "\ndebugger;" : "") + "\nvar v" + (l ? ",t=j._tag" : "") + (u ? ",c=j._cnvt" : "") + (d ? ",h=j._html" : "") + (n ? (i[8] ? ", ob" : "") + ";\n" : ',ret=""') + J + (n ? "\n" : ";\nreturn ret;");

    try {
      J = new Function("data,view,j,u", J);
    } catch (Q) {
      D("Compiled template code:\n\n" + J + '\n: "' + (Q.message || Q) + '"');
    }

    return e && (e.fn = J, e.useViews = !!S), J;
  }

  function Q(t, e) {
    return t && t !== e ? e ? d(d({}, e), t) : t : e && d({}, e);
  }

  function H(t, n) {
    var r,
        i,
        o = n.map,
        a = o && o.propsArr;

    if (!a) {
      if (a = [], _typeof(t) === Lt || st(t)) for (r in t) {
        i = t[r], r === at || !t.hasOwnProperty(r) || n.props.noFunctions && e.isFunction(i) || a.push({
          key: r,
          prop: i
        });
      }
      o && (o.propsArr = o.options && a);
    }

    return W(a, n);
  }

  function W(t, n) {
    var r,
        i,
        o,
        a = n.tag,
        s = n.props,
        l = n.params.props,
        d = s.filter,
        p = s.sort,
        u = p === !0,
        c = parseInt(s.step),
        f = s.reverse ? -1 : 1;
    if (!lt(t)) return t;

    if (u || p && "" + p === p ? (r = t.map(function (t, e) {
      return t = u ? t : g(t, p), {
        i: e,
        v: "" + t === t ? t.toLowerCase() : t
      };
    }), r.sort(function (t, e) {
      return t.v > e.v ? f : t.v < e.v ? -f : 0;
    }), t = r.map(function (e) {
      return t[e.i];
    })) : (p || f < 0) && !a.dataMap && (t = t.slice()), st(p) && (t = t.sort(function () {
      return p.apply(n, arguments);
    })), f < 0 && (!p || st(p)) && (t = t.reverse()), t.filter && d && (t = t.filter(d, n), n.tag.onFilter && n.tag.onFilter(n)), l.sorted && (r = p || f < 0 ? t : t.slice(), a.sorted ? e.observable(a.sorted).refresh(r) : n.map.sorted = r), i = s.start, o = s.end, (l.start && void 0 === i || l.end && void 0 === o) && (i = o = 0), isNaN(i) && isNaN(o) || (i = +i || 0, o = void 0 === o || o > t.length ? t.length : +o, t = t.slice(i, o)), c > 1) {
      for (i = 0, o = t.length, r = []; i < o; i += c) {
        r.push(t[i]);
      }

      t = r;
    }

    return l.paged && a.paged && $observable(a.paged).refresh(t), t;
  }

  function Z(t, n, r) {
    var i = this.jquery && (this[0] || S("Unknown template")),
        o = i.getAttribute(Bt);
    return E.call(o && e.data(i)[Qt] || dt(i), t, n, r);
  }

  function z(t) {
    return Ut[t] || (Ut[t] = "&#" + t.charCodeAt(0) + ";");
  }

  function G(t, e) {
    return qt[e] || "";
  }

  function X(t) {
    return void 0 != t ? Vt.test(t) && ("" + t).replace(Ot, z) || t : "";
  }

  function Y(t) {
    return "" + t === t ? t.replace(It, z) : t;
  }

  function tt(t) {
    return "" + t === t ? t.replace(St, G) : t;
  }

  var et = e === !1;
  e = e && e.fn ? e : t.jQuery;

  var nt,
      rt,
      it,
      ot,
      at,
      st,
      lt,
      dt,
      pt,
      ut,
      ct,
      ft,
      gt,
      vt,
      mt,
      ht,
      _t,
      xt,
      bt,
      wt,
      yt,
      kt,
      Ct = "v1.0.6",
      Tt = "_ocp",
      jt = /[ \t]*(\r\n|\n|\r)/g,
      At = /\\(['"])/g,
      Pt = /['"\\]/g,
      Rt = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
      Nt = /^if\s/,
      Mt = /<(\w+)[>\s]/,
      Ft = /[\x00`><"'&=]/g,
      Vt = /[\x00`><\"'&=]/,
      $t = /^on[A-Z]|^convert(Back)?$/,
      Et = /^\#\d+_`[\s\S]*\/\d+_`$/,
      Ot = Ft,
      It = /[&<>]/g,
      St = /&(amp|gt|lt);/g,
      Dt = /\[['"]?|['"]?\]/g,
      Jt = 0,
      Ut = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\0": "&#0;",
    "'": "&#39;",
    '"': "&#34;",
    "`": "&#96;",
    "=": "&#61;"
  },
      qt = {
    amp: "&",
    gt: ">",
    lt: "<"
  },
      Kt = "html",
      Lt = "object",
      Bt = "data-jsv-tmpl",
      Qt = "jsvTmpl",
      Ht = "For #index in nested block use #getIndex().",
      Wt = {},
      Zt = t.jsrender,
      zt = Zt && e && !e.render,
      Gt = {
    template: {
      compile: A
    },
    tag: {
      compile: T
    },
    viewModel: {
      compile: N
    },
    helper: {},
    converter: {}
  };

  if (ot = {
    jsviews: Ct,
    sub: {
      rPath: /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
      rPrm: /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      View: k,
      Err: l,
      tmplFn: J,
      parse: L,
      extend: d,
      extendCtx: Q,
      syntaxErr: D,
      onStore: {
        template: function template(t, e) {
          null === e ? delete Wt[t] : t && (Wt[t] = e);
        }
      },
      addSetting: V,
      settings: {
        allowCode: !1
      },
      advSet: a,
      _thp: i,
      _gm: r,
      _tg: function _tg() {},
      _cnvt: h,
      _tag: y,
      _er: S,
      _err: I,
      _cp: o,
      _sq: function _sq(t) {
        return "constructor" === t && D(""), t;
      }
    },
    settings: {
      delimiters: p,
      advanced: function advanced(t) {
        return t ? (d(vt, t), ft.advSet(), mt) : vt;
      }
    },
    map: $
  }, (l.prototype = new Error()).constructor = l, c.depends = function () {
    return [this.get("item"), "index"];
  }, f.depends = "index", k.prototype = {
    get: u,
    getIndex: f,
    ctxPrm: v,
    getRsc: w,
    _getTmpl: m,
    _getOb: g,
    _is: "view"
  }, ft = ot.sub, mt = ot.settings, !(Zt || e && e.render)) {
    for (nt in Gt) {
      F(nt, Gt[nt]);
    }

    if (pt = ot.converters, ut = ot.helpers, ct = ot.tags, ft._tg.prototype = {
      baseApply: j,
      cvtArgs: _,
      bndArgs: b,
      ctxPrm: v
    }, it = ft.topView = new k(), e) {
      if (e.fn.render = Z, at = e.expando, e.observable) {
        if (Ct !== (Ct = e.views.jsviews)) throw "JsObservable requires JsRender " + Ct;
        d(ft, e.views.sub), ot.map = e.views.map;
      }
    } else e = {}, et && (t.jsrender = e), e.renderFile = e.__express = e.compile = function () {
      throw "Node.js: use npm jsrender, or jsrender-node.js";
    }, e.isFunction = function (t) {
      return "function" == typeof t;
    }, e.isArray = Array.isArray || function (t) {
      return "[object Array]" === {}.toString.call(t);
    }, ft._jq = function (t) {
      t !== e && (d(t, e), e = t, e.fn.render = Z, delete e.jsrender, at = e.expando);
    }, e.jsrender = Ct;

    gt = ft.settings, gt.allowCode = !1, st = e.isFunction, e.render = Wt, e.views = ot, e.templates = dt = ot.templates;

    for (yt in gt) {
      V(yt);
    }

    (mt.debugMode = function (t) {
      return void 0 === t ? gt.debugMode : (gt.debugMode = t, gt.onError = t + "" === t ? function () {
        return t;
      } : st(t) ? t : void 0, mt);
    })(!1), vt = gt.advanced = {
      useViews: !1,
      _jsv: !1
    }, ct({
      "if": {
        render: function render(t) {
          var e = this,
              n = e.tagCtx,
              r = e.rendering.done || !t && (n.args.length || !n.index) ? "" : (e.rendering.done = !0, void (e.selected = n.index));
          return r;
        },
        contentCtx: !0,
        flow: !0
      },
      "for": {
        sortDataMap: $(W),
        init: function init(t, e) {
          this.setDataMap(this.tagCtxs);
        },
        render: function render(t) {
          var e,
              n,
              r,
              i,
              o,
              a = this,
              s = a.tagCtx,
              l = s.argDefault === !1,
              d = s.props,
              p = l || s.args.length,
              u = "",
              c = 0;

          if (!a.rendering.done) {
            if (e = p ? t : s.view.data, l) for (l = d.reverse ? "unshift" : "push", i = +d.end, o = +d.step || 1, e = [], r = +d.start || 0; (i - r) * o > 0; r += o) {
              e[l](r);
            }
            void 0 !== e && (n = lt(e), u += s.render(e, !p || d.noIteration), c += n ? e.length : 1), (a.rendering.done = c) && (a.selected = s.index);
          }

          return u;
        },
        setDataMap: function setDataMap(t) {
          for (var e, n, r, i = this, o = t.length; o--;) {
            e = t[o], n = e.props, r = e.params.props, e.argDefault = void 0 === n.end || e.args.length > 0, n.dataMap = e.argDefault !== !1 && lt(e.args[0]) && (r.sort || r.start || r.end || r.step || r.filter || r.reverse || n.sort || n.start || n.end || n.step || n.filter || n.reverse) && i.sortDataMap;
          }
        },
        flow: !0
      },
      props: {
        baseTag: "for",
        dataMap: $(H),
        init: a,
        flow: !0
      },
      include: {
        flow: !0
      },
      "*": {
        render: o,
        flow: !0
      },
      ":*": {
        render: o,
        flow: !0
      },
      dbg: ut.dbg = pt.dbg = s
    }), pt({
      html: X,
      attr: X,
      encode: Y,
      unencode: tt,
      url: function url(t) {
        return void 0 != t ? encodeURI("" + t) : null === t ? t : "";
      }
    });
  }

  return gt = ft.settings, lt = (e || Zt).isArray, mt.delimiters("{{", "}}", "^"), zt && Zt.views.sub._jq(e), e || Zt;
}, window);