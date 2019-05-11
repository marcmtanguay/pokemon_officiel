var coveotest =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Coveo;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! aXe v3.0.2
 * Copyright (c) 2018 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
(function axeFunction(window) {
  var global = window;
  var document = window.document;
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  var axe = axe || {};
  axe.version = '3.0.2';
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      'use strict';
      return axe;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports && typeof axeFunction.toString === 'function') {
    axe.source = '(' + axeFunction.toString() + ')(typeof window === "object" ? window : this);';
    module.exports = axe;
  }
  if (typeof window.getComputedStyle === 'function') {
    window.axe = axe;
  }
  var commons;
  function SupportError(error) {
    this.name = 'SupportError';
    this.cause = error.cause;
    this.message = '`' + error.cause + '` - feature unsupported in your environment.';
    if (error.ruleId) {
      this.ruleId = error.ruleId;
      this.message += ' Skipping ' + this.ruleId + ' rule.';
    }
    this.stack = new Error().stack;
  }
  SupportError.prototype = Object.create(Error.prototype);
  SupportError.prototype.constructor = SupportError;
  'use strict';
  var utils = axe.utils = {};
  'use strict';
  var helpers = {};
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  function getDefaultConfiguration(audit) {
    'use strict';
    var config;
    if (audit) {
      config = axe.utils.clone(audit);
      config.commons = audit.commons;
    } else {
      config = {};
    }
    config.reporter = config.reporter || null;
    config.rules = config.rules || [];
    config.checks = config.checks || [];
    config.data = Object.assign({
      checks: {},
      rules: {}
    }, config.data);
    return config;
  }
  function unpackToObject(collection, audit, method) {
    'use strict';
    var i, l;
    for (i = 0, l = collection.length; i < l; i++) {
      audit[method](collection[i]);
    }
  }
  function Audit(audit) {
    this.brand = 'axe';
    this.application = 'axeAPI';
    this.tagExclude = [ 'experimental' ];
    this.defaultConfig = audit;
    this._init();
  }
  Audit.prototype._init = function() {
    var audit = getDefaultConfiguration(this.defaultConfig);
    axe.commons = commons = audit.commons;
    this.reporter = audit.reporter;
    this.commands = {};
    this.rules = [];
    this.checks = {};
    unpackToObject(audit.rules, this, 'addRule');
    unpackToObject(audit.checks, this, 'addCheck');
    this.data = {};
    this.data.checks = audit.data && audit.data.checks || {};
    this.data.rules = audit.data && audit.data.rules || {};
    this.data.failureSummaries = audit.data && audit.data.failureSummaries || {};
    this.data.incompleteFallbackMessage = audit.data && audit.data.incompleteFallbackMessage || '';
    this._constructHelpUrls();
  };
  Audit.prototype.registerCommand = function(command) {
    'use strict';
    this.commands[command.id] = command.callback;
  };
  Audit.prototype.addRule = function(spec) {
    'use strict';
    if (spec.metadata) {
      this.data.rules[spec.id] = spec.metadata;
    }
    var rule = this.getRule(spec.id);
    if (rule) {
      rule.configure(spec);
    } else {
      this.rules.push(new Rule(spec, this));
    }
  };
  Audit.prototype.addCheck = function(spec) {
    'use strict';
    var metadata = spec.metadata;
    if ((typeof metadata === 'undefined' ? 'undefined' : _typeof(metadata)) === 'object') {
      this.data.checks[spec.id] = metadata;
      if (_typeof(metadata.messages) === 'object') {
        Object.keys(metadata.messages).filter(function(prop) {
          return metadata.messages.hasOwnProperty(prop) && typeof metadata.messages[prop] === 'string';
        }).forEach(function(prop) {
          if (metadata.messages[prop].indexOf('function') === 0) {
            metadata.messages[prop] = new Function('return ' + metadata.messages[prop] + ';')();
          }
        });
      }
    }
    if (this.checks[spec.id]) {
      this.checks[spec.id].configure(spec);
    } else {
      this.checks[spec.id] = new Check(spec);
    }
  };
  Audit.prototype.run = function(context, options, resolve, reject) {
    'use strict';
    this.normalizeOptions(options);
    axe._selectCache = [];
    var q = axe.utils.queue();
    this.rules.forEach(function(rule) {
      if (axe.utils.ruleShouldRun(rule, context, options)) {
        if (options.performanceTimer) {
          var markEnd = 'mark_rule_end_' + rule.id;
          var markStart = 'mark_rule_start_' + rule.id;
          axe.utils.performanceTimer.mark(markStart);
        }
        q.defer(function(res, rej) {
          rule.run(context, options, function(out) {
            if (options.performanceTimer) {
              axe.utils.performanceTimer.mark(markEnd);
              axe.utils.performanceTimer.measure('rule_' + rule.id, markStart, markEnd);
            }
            res(out);
          }, function(err) {
            if (!options.debug) {
              var errResult = Object.assign(new RuleResult(rule), {
                result: axe.constants.CANTTELL,
                description: 'An error occured while running this rule',
                message: err.message,
                stack: err.stack,
                error: err
              });
              res(errResult);
            } else {
              rej(err);
            }
          });
        });
      }
    });
    q.then(function(results) {
      axe._selectCache = undefined;
      resolve(results.filter(function(result) {
        return !!result;
      }));
    }).catch(reject);
  };
  Audit.prototype.after = function(results, options) {
    'use strict';
    var rules = this.rules;
    return results.map(function(ruleResult) {
      var rule = axe.utils.findBy(rules, 'id', ruleResult.id);
      if (!rule) {
        throw new Error('Result for unknown rule. You may be running mismatch aXe-core versions');
      }
      return rule.after(ruleResult, options);
    });
  };
  Audit.prototype.getRule = function(ruleId) {
    return this.rules.find(function(rule) {
      return rule.id === ruleId;
    });
  };
  Audit.prototype.normalizeOptions = function(options) {
    'use strict';
    var audit = this;
    if (_typeof(options.runOnly) === 'object') {
      if (Array.isArray(options.runOnly)) {
        options.runOnly = {
          type: 'tag',
          values: options.runOnly
        };
      }
      var only = options.runOnly;
      if (only.value && !only.values) {
        only.values = only.value;
        delete only.value;
      }
      if (!Array.isArray(only.values) || only.values.length === 0) {
        throw new Error('runOnly.values must be a non-empty array');
      }
      if ([ 'rule', 'rules' ].includes(only.type)) {
        only.type = 'rule';
        only.values.forEach(function(ruleId) {
          if (!audit.getRule(ruleId)) {
            throw new Error('unknown rule `' + ruleId + '` in options.runOnly');
          }
        });
      } else if ([ 'tag', 'tags', undefined ].includes(only.type)) {
        only.type = 'tag';
        var unmatchedTags = audit.rules.reduce(function(unmatchedTags, rule) {
          return unmatchedTags.length ? unmatchedTags.filter(function(tag) {
            return !rule.tags.includes(tag);
          }) : unmatchedTags;
        }, only.values);
        if (unmatchedTags.length !== 0) {
          throw new Error('Could not find tags `' + unmatchedTags.join('`, `') + '`');
        }
      } else {
        throw new Error('Unknown runOnly type \'' + only.type + '\'');
      }
    }
    if (_typeof(options.rules) === 'object') {
      Object.keys(options.rules).forEach(function(ruleId) {
        if (!audit.getRule(ruleId)) {
          throw new Error('unknown rule `' + ruleId + '` in options.rules');
        }
      });
    }
    return options;
  };
  Audit.prototype.setBranding = function(branding) {
    'use strict';
    var previous = {
      brand: this.brand,
      application: this.application
    };
    if (branding && branding.hasOwnProperty('brand') && branding.brand && typeof branding.brand === 'string') {
      this.brand = branding.brand;
    }
    if (branding && branding.hasOwnProperty('application') && branding.application && typeof branding.application === 'string') {
      this.application = branding.application;
    }
    this._constructHelpUrls(previous);
  };
  function getHelpUrl(_ref, ruleId, version) {
    var brand = _ref.brand, application = _ref.application;
    return axe.constants.helpUrlBase + brand + '/' + (version || axe.version.substring(0, axe.version.lastIndexOf('.'))) + '/' + ruleId + '?application=' + application;
  }
  Audit.prototype._constructHelpUrls = function() {
    var _this = this;
    var previous = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var version = (axe.version.match(/^[1-9][0-9]*\.[0-9]+/) || [ 'x.y' ])[0];
    this.rules.forEach(function(rule) {
      if (!_this.data.rules[rule.id]) {
        _this.data.rules[rule.id] = {};
      }
      var metaData = _this.data.rules[rule.id];
      if (typeof metaData.helpUrl !== 'string' || previous && metaData.helpUrl === getHelpUrl(previous, rule.id, version)) {
        metaData.helpUrl = getHelpUrl(_this, rule.id, version);
      }
    });
  };
  Audit.prototype.resetRulesAndChecks = function() {
    'use strict';
    this._init();
  };
  'use strict';
  function CheckResult(check) {
    'use strict';
    this.id = check.id;
    this.data = null;
    this.relatedNodes = [];
    this.result = null;
  }
  'use strict';
  function createExecutionContext(spec) {
    'use strict';
    if (typeof spec === 'string') {
      return new Function('return ' + spec + ';')();
    }
    return spec;
  }
  function Check(spec) {
    if (spec) {
      this.id = spec.id;
      this.configure(spec);
    }
  }
  Check.prototype.enabled = true;
  Check.prototype.run = function(node, options, resolve, reject) {
    'use strict';
    options = options || {};
    var enabled = options.hasOwnProperty('enabled') ? options.enabled : this.enabled, checkOptions = options.options || this.options;
    if (enabled) {
      var checkResult = new CheckResult(this);
      var checkHelper = axe.utils.checkHelper(checkResult, options, resolve, reject);
      var result;
      try {
        result = this.evaluate.call(checkHelper, node.actualNode, checkOptions, node);
      } catch (e) {
        reject(e);
        return;
      }
      if (!checkHelper.isAsync) {
        checkResult.result = result;
        setTimeout(function() {
          resolve(checkResult);
        }, 0);
      }
    } else {
      resolve(null);
    }
  };
  Check.prototype.configure = function(spec) {
    var _this = this;
    [ 'options', 'enabled' ].filter(function(prop) {
      return spec.hasOwnProperty(prop);
    }).forEach(function(prop) {
      return _this[prop] = spec[prop];
    });
    [ 'evaluate', 'after' ].filter(function(prop) {
      return spec.hasOwnProperty(prop);
    }).forEach(function(prop) {
      return _this[prop] = createExecutionContext(spec[prop]);
    });
  };
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  function pushUniqueFrame(collection, frame) {
    'use strict';
    if (axe.utils.isHidden(frame)) {
      return;
    }
    var fr = axe.utils.findBy(collection, 'node', frame);
    if (!fr) {
      collection.push({
        node: frame,
        include: [],
        exclude: []
      });
    }
  }
  function pushUniqueFrameSelector(context, type, selectorArray) {
    'use strict';
    context.frames = context.frames || [];
    var result, frame;
    var frames = document.querySelectorAll(selectorArray.shift());
    frameloop: for (var i = 0, l = frames.length; i < l; i++) {
      frame = frames[i];
      for (var j = 0, l2 = context.frames.length; j < l2; j++) {
        if (context.frames[j].node === frame) {
          context.frames[j][type].push(selectorArray);
          break frameloop;
        }
      }
      result = {
        node: frame,
        include: [],
        exclude: []
      };
      if (selectorArray) {
        result[type].push(selectorArray);
      }
      context.frames.push(result);
    }
  }
  function normalizeContext(context) {
    'use strict';
    if (context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object' || context instanceof NodeList) {
      if (context instanceof Node) {
        return {
          include: [ context ],
          exclude: []
        };
      }
      if (context.hasOwnProperty('include') || context.hasOwnProperty('exclude')) {
        return {
          include: context.include && +context.include.length ? context.include : [ document ],
          exclude: context.exclude || []
        };
      }
      if (context.length === +context.length) {
        return {
          include: context,
          exclude: []
        };
      }
    }
    if (typeof context === 'string') {
      return {
        include: [ context ],
        exclude: []
      };
    }
    return {
      include: [ document ],
      exclude: []
    };
  }
  function parseSelectorArray(context, type) {
    'use strict';
    var item, result = [], nodeList;
    for (var i = 0, l = context[type].length; i < l; i++) {
      item = context[type][i];
      if (typeof item === 'string') {
        nodeList = Array.from(document.querySelectorAll(item));
        result = result.concat(nodeList.map(function(node) {
          return axe.utils.getNodeFromTree(context.flatTree[0], node);
        }));
        break;
      } else if (item && item.length && !(item instanceof Node)) {
        if (item.length > 1) {
          pushUniqueFrameSelector(context, type, item);
        } else {
          nodeList = Array.from(document.querySelectorAll(item[0]));
          result = result.concat(nodeList.map(function(node) {
            return axe.utils.getNodeFromTree(context.flatTree[0], node);
          }));
        }
      } else if (item instanceof Node) {
        if (item.documentElement instanceof Node) {
          result.push(context.flatTree[0]);
        } else {
          result.push(axe.utils.getNodeFromTree(context.flatTree[0], item));
        }
      }
    }
    return result.filter(function(r) {
      return r;
    });
  }
  function validateContext(context) {
    'use strict';
    if (context.include.length === 0) {
      if (context.frames.length === 0) {
        var env = axe.utils.respondable.isInFrame() ? 'frame' : 'page';
        return new Error('No elements found for include in ' + env + ' Context');
      }
      context.frames.forEach(function(frame, i) {
        if (frame.include.length === 0) {
          return new Error('No elements found for include in Context of frame ' + i);
        }
      });
    }
  }
  function getRootNode(_ref) {
    var include = _ref.include, exclude = _ref.exclude;
    var selectors = Array.from(include).concat(Array.from(exclude));
    var localDocument = selectors.reduce(function(result, item) {
      if (result) {
        return result;
      } else if (item instanceof Element) {
        return item.ownerDocument;
      } else if (item instanceof Document) {
        return item;
      }
    }, null);
    return (localDocument || document).documentElement;
  }
  function Context(spec) {
    'use strict';
    var _this = this;
    this.frames = [];
    this.initiator = spec && typeof spec.initiator === 'boolean' ? spec.initiator : true;
    this.page = false;
    spec = normalizeContext(spec);
    this.flatTree = axe.utils.getFlattenedTree(getRootNode(spec));
    this.exclude = spec.exclude;
    this.include = spec.include;
    this.include = parseSelectorArray(this, 'include');
    this.exclude = parseSelectorArray(this, 'exclude');
    axe.utils.select('frame, iframe', this).forEach(function(frame) {
      if (isNodeInContext(frame, _this)) {
        pushUniqueFrame(_this.frames, frame.actualNode);
      }
    });
    if (this.include.length === 1 && this.include[0].actualNode === document.documentElement) {
      this.page = true;
    }
    var err = validateContext(this);
    if (err instanceof Error) {
      throw err;
    }
    if (!Array.isArray(this.include)) {
      this.include = Array.from(this.include);
    }
    this.include.sort(axe.utils.nodeSorter);
  }
  'use strict';
  function RuleResult(rule) {
    'use strict';
    this.id = rule.id;
    this.result = axe.constants.NA;
    this.pageLevel = rule.pageLevel;
    this.impact = null;
    this.nodes = [];
  }
  'use strict';
  function Rule(spec, parentAudit) {
    'use strict';
    this._audit = parentAudit;
    this.id = spec.id;
    this.selector = spec.selector || '*';
    this.excludeHidden = typeof spec.excludeHidden === 'boolean' ? spec.excludeHidden : true;
    this.enabled = typeof spec.enabled === 'boolean' ? spec.enabled : true;
    this.pageLevel = typeof spec.pageLevel === 'boolean' ? spec.pageLevel : false;
    this.any = spec.any || [];
    this.all = spec.all || [];
    this.none = spec.none || [];
    this.tags = spec.tags || [];
    if (spec.matches) {
      this.matches = createExecutionContext(spec.matches);
    }
  }
  Rule.prototype.matches = function() {
    'use strict';
    return true;
  };
  Rule.prototype.gather = function(context) {
    'use strict';
    var elements = axe.utils.select(this.selector, context);
    if (this.excludeHidden) {
      return elements.filter(function(element) {
        return !axe.utils.isHidden(element.actualNode);
      });
    }
    return elements;
  };
  Rule.prototype.runChecks = function(type, node, options, resolve, reject) {
    'use strict';
    var self = this;
    var checkQueue = axe.utils.queue();
    this[type].forEach(function(c) {
      var check = self._audit.checks[c.id || c];
      var option = axe.utils.getCheckOption(check, self.id, options);
      checkQueue.defer(function(res, rej) {
        check.run(node, option, res, rej);
      });
    });
    checkQueue.then(function(results) {
      results = results.filter(function(check) {
        return check;
      });
      resolve({
        type: type,
        results: results
      });
    }).catch(reject);
  };
  Rule.prototype.run = function(context, options, resolve, reject) {
    var _this = this;
    var q = axe.utils.queue();
    var ruleResult = new RuleResult(this);
    var markStart = 'mark_runchecks_start_' + this.id;
    var markEnd = 'mark_runchecks_end_' + this.id;
    var nodes = void 0;
    try {
      nodes = this.gather(context).filter(function(node) {
        return _this.matches(node.actualNode, node);
      });
    } catch (error) {
      reject(new SupportError({
        cause: error,
        ruleId: this.id
      }));
      return;
    }
    if (options.performanceTimer) {
      axe.log('gather (', nodes.length, '):', axe.utils.performanceTimer.timeElapsed() + 'ms');
      axe.utils.performanceTimer.mark(markStart);
    }
    nodes.forEach(function(node) {
      q.defer(function(resolveNode, rejectNode) {
        var checkQueue = axe.utils.queue();
        checkQueue.defer(function(res, rej) {
          _this.runChecks('any', node, options, res, rej);
        });
        checkQueue.defer(function(res, rej) {
          _this.runChecks('all', node, options, res, rej);
        });
        checkQueue.defer(function(res, rej) {
          _this.runChecks('none', node, options, res, rej);
        });
        checkQueue.then(function(results) {
          if (results.length) {
            var hasResults = false, result = {};
            results.forEach(function(r) {
              var res = r.results.filter(function(result) {
                return result;
              });
              result[r.type] = res;
              if (res.length) {
                hasResults = true;
              }
            });
            if (hasResults) {
              result.node = new axe.utils.DqElement(node.actualNode, options);
              ruleResult.nodes.push(result);
            }
          }
          resolveNode();
        }).catch(function(err) {
          return rejectNode(err);
        });
      });
    });
    if (options.performanceTimer) {
      axe.utils.performanceTimer.mark(markEnd);
      axe.utils.performanceTimer.measure('runchecks_' + this.id, markStart, markEnd);
    }
    q.then(function() {
      return resolve(ruleResult);
    }).catch(function(error) {
      return reject(error);
    });
  };
  function findAfterChecks(rule) {
    'use strict';
    return axe.utils.getAllChecks(rule).map(function(c) {
      var check = rule._audit.checks[c.id || c];
      return check && typeof check.after === 'function' ? check : null;
    }).filter(Boolean);
  }
  function findCheckResults(nodes, checkID) {
    'use strict';
    var checkResults = [];
    nodes.forEach(function(nodeResult) {
      var checks = axe.utils.getAllChecks(nodeResult);
      checks.forEach(function(checkResult) {
        if (checkResult.id === checkID) {
          checkResults.push(checkResult);
        }
      });
    });
    return checkResults;
  }
  function filterChecks(checks) {
    'use strict';
    return checks.filter(function(check) {
      return check.filtered !== true;
    });
  }
  function sanitizeNodes(result) {
    'use strict';
    var checkTypes = [ 'any', 'all', 'none' ];
    var nodes = result.nodes.filter(function(detail) {
      var length = 0;
      checkTypes.forEach(function(type) {
        detail[type] = filterChecks(detail[type]);
        length += detail[type].length;
      });
      return length > 0;
    });
    if (result.pageLevel && nodes.length) {
      nodes = [ nodes.reduce(function(a, b) {
        if (a) {
          checkTypes.forEach(function(type) {
            a[type].push.apply(a[type], b[type]);
          });
          return a;
        }
      }) ];
    }
    return nodes;
  }
  Rule.prototype.after = function(result, options) {
    'use strict';
    var afterChecks = findAfterChecks(this);
    var ruleID = this.id;
    afterChecks.forEach(function(check) {
      var beforeResults = findCheckResults(result.nodes, check.id);
      var option = axe.utils.getCheckOption(check, ruleID, options);
      var afterResults = check.after(beforeResults, option);
      beforeResults.forEach(function(item) {
        if (afterResults.indexOf(item) === -1) {
          item.filtered = true;
        }
      });
    });
    result.nodes = sanitizeNodes(result);
    return result;
  };
  Rule.prototype.configure = function(spec) {
    'use strict';
    if (spec.hasOwnProperty('selector')) {
      this.selector = spec.selector;
    }
    if (spec.hasOwnProperty('excludeHidden')) {
      this.excludeHidden = typeof spec.excludeHidden === 'boolean' ? spec.excludeHidden : true;
    }
    if (spec.hasOwnProperty('enabled')) {
      this.enabled = typeof spec.enabled === 'boolean' ? spec.enabled : true;
    }
    if (spec.hasOwnProperty('pageLevel')) {
      this.pageLevel = typeof spec.pageLevel === 'boolean' ? spec.pageLevel : false;
    }
    if (spec.hasOwnProperty('any')) {
      this.any = spec.any;
    }
    if (spec.hasOwnProperty('all')) {
      this.all = spec.all;
    }
    if (spec.hasOwnProperty('none')) {
      this.none = spec.none;
    }
    if (spec.hasOwnProperty('tags')) {
      this.tags = spec.tags;
    }
    if (spec.hasOwnProperty('matches')) {
      if (typeof spec.matches === 'string') {
        this.matches = new Function('return ' + spec.matches + ';')();
      } else {
        this.matches = spec.matches;
      }
    }
  };
  'use strict';
  (function(axe) {
    var definitions = [ {
      name: 'NA',
      value: 'inapplicable',
      priority: 0,
      group: 'inapplicable'
    }, {
      name: 'PASS',
      value: 'passed',
      priority: 1,
      group: 'passes'
    }, {
      name: 'CANTTELL',
      value: 'cantTell',
      priority: 2,
      group: 'incomplete'
    }, {
      name: 'FAIL',
      value: 'failed',
      priority: 3,
      group: 'violations'
    } ];
    var constants = {
      helpUrlBase: 'https://dequeuniversity.com/rules/',
      results: [],
      resultGroups: [],
      resultGroupMap: {},
      impact: Object.freeze([ 'minor', 'moderate', 'serious', 'critical' ])
    };
    definitions.forEach(function(definition) {
      var name = definition.name;
      var value = definition.value;
      var priority = definition.priority;
      var group = definition.group;
      constants[name] = value;
      constants[name + '_PRIO'] = priority;
      constants[name + '_GROUP'] = group;
      constants.results[priority] = value;
      constants.resultGroups[priority] = group;
      constants.resultGroupMap[value] = group;
    });
    Object.freeze(constants.results);
    Object.freeze(constants.resultGroups);
    Object.freeze(constants.resultGroupMap);
    Object.freeze(constants);
    Object.defineProperty(axe, 'constants', {
      value: constants,
      enumerable: true,
      configurable: false,
      writable: false
    });
  })(axe);
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  axe.log = function() {
    'use strict';
    if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && console.log) {
      Function.prototype.apply.call(console.log, console, arguments);
    }
  };
  'use strict';
  function cleanupPlugins(resolve, reject) {
    'use strict';
    resolve = resolve || function() {};
    reject = reject || axe.log;
    if (!axe._audit) {
      throw new Error('No audit configured');
    }
    var q = axe.utils.queue();
    var cleanupErrors = [];
    Object.keys(axe.plugins).forEach(function(key) {
      q.defer(function(res) {
        var rej = function rej(err) {
          cleanupErrors.push(err);
          res();
        };
        try {
          axe.plugins[key].cleanup(res, rej);
        } catch (err) {
          rej(err);
        }
      });
    });
    var flattenedTree = axe.utils.getFlattenedTree(document.body);
    axe.utils.querySelectorAll(flattenedTree, 'iframe, frame').forEach(function(node) {
      q.defer(function(res, rej) {
        return axe.utils.sendCommandToFrame(node.actualNode, {
          command: 'cleanup-plugin'
        }, res, rej);
      });
    });
    q.then(function(results) {
      if (cleanupErrors.length === 0) {
        resolve(results);
      } else {
        reject(cleanupErrors);
      }
    }).catch(reject);
  }
  axe.cleanup = cleanupPlugins;
  'use strict';
  function configureChecksRulesAndBranding(spec) {
    'use strict';
    var audit;
    audit = axe._audit;
    if (!audit) {
      throw new Error('No audit configured');
    }
    if (spec.reporter && (typeof spec.reporter === 'function' || reporters[spec.reporter])) {
      audit.reporter = spec.reporter;
    }
    if (spec.checks) {
      spec.checks.forEach(function(check) {
        audit.addCheck(check);
      });
    }
    var modifiedRules = [];
    if (spec.rules) {
      spec.rules.forEach(function(rule) {
        modifiedRules.push(rule.id);
        audit.addRule(rule);
      });
    }
    if (spec.disableOtherRules) {
      audit.rules.forEach(function(rule) {
        if (modifiedRules.includes(rule.id) === false) {
          rule.enabled = false;
        }
      });
    }
    if (typeof spec.branding !== 'undefined') {
      audit.setBranding(spec.branding);
    } else {
      audit._constructHelpUrls();
    }
    if (spec.tagExclude) {
      audit.tagExclude = spec.tagExclude;
    }
  }
  axe.configure = configureChecksRulesAndBranding;
  'use strict';
  axe.getRules = function(tags) {
    'use strict';
    tags = tags || [];
    var matchingRules = !tags.length ? axe._audit.rules : axe._audit.rules.filter(function(item) {
      return !!tags.filter(function(tag) {
        return item.tags.indexOf(tag) !== -1;
      }).length;
    });
    var ruleData = axe._audit.data.rules || {};
    return matchingRules.map(function(matchingRule) {
      var rd = ruleData[matchingRule.id] || {};
      return {
        ruleId: matchingRule.id,
        description: rd.description,
        help: rd.help,
        helpUrl: rd.helpUrl,
        tags: matchingRule.tags
      };
    });
  };
  'use strict';
  function runCommand(data, keepalive, callback) {
    'use strict';
    var resolve = callback;
    var reject = function reject(err) {
      if (err instanceof Error === false) {
        err = new Error(err);
      }
      callback(err);
    };
    var context = data && data.context || {};
    if (context.hasOwnProperty('include') && !context.include.length) {
      context.include = [ document ];
    }
    var options = data && data.options || {};
    switch (data.command) {
     case 'rules':
      return runRules(context, options, function(results, cleanup) {
        resolve(results);
        cleanup();
      }, reject);

     case 'cleanup-plugin':
      return cleanupPlugins(resolve, reject);

     default:
      if (axe._audit && axe._audit.commands && axe._audit.commands[data.command]) {
        return axe._audit.commands[data.command](data, callback);
      }
    }
  }
  axe._load = function(audit) {
    'use strict';
    axe.utils.respondable.subscribe('axe.ping', function(data, keepalive, respond) {
      respond({
        axe: true
      });
    });
    axe.utils.respondable.subscribe('axe.start', runCommand);
    axe._audit = new Audit(audit);
  };
  'use strict';
  var axe = axe || {};
  axe.plugins = {};
  function Plugin(spec) {
    'use strict';
    this._run = spec.run;
    this._collect = spec.collect;
    this._registry = {};
    spec.commands.forEach(function(command) {
      axe._audit.registerCommand(command);
    });
  }
  Plugin.prototype.run = function() {
    'use strict';
    return this._run.apply(this, arguments);
  };
  Plugin.prototype.collect = function() {
    'use strict';
    return this._collect.apply(this, arguments);
  };
  Plugin.prototype.cleanup = function(done) {
    'use strict';
    var q = axe.utils.queue();
    var that = this;
    Object.keys(this._registry).forEach(function(key) {
      q.defer(function(done) {
        that._registry[key].cleanup(done);
      });
    });
    q.then(function() {
      done();
    });
  };
  Plugin.prototype.add = function(impl) {
    'use strict';
    this._registry[impl.id] = impl;
  };
  axe.registerPlugin = function(plugin) {
    'use strict';
    axe.plugins[plugin.id] = new Plugin(plugin);
  };
  'use strict';
  var reporters = {};
  var defaultReporter;
  axe.getReporter = function(reporter) {
    'use strict';
    if (typeof reporter === 'string' && reporters[reporter]) {
      return reporters[reporter];
    }
    if (typeof reporter === 'function') {
      return reporter;
    }
    return defaultReporter;
  };
  axe.addReporter = function registerReporter(name, cb, isDefault) {
    'use strict';
    reporters[name] = cb;
    if (isDefault) {
      defaultReporter = cb;
    }
  };
  'use strict';
  function resetConfiguration() {
    'use strict';
    var audit = axe._audit;
    if (!audit) {
      throw new Error('No audit configured');
    }
    audit.resetRulesAndChecks();
  }
  axe.reset = resetConfiguration;
  'use strict';
  function cleanup() {
    axe._tree = undefined;
    axe._selectorData = undefined;
  }
  function runRules(context, options, resolve, reject) {
    'use strict';
    try {
      context = new Context(context);
      axe._tree = context.flatTree;
      axe._selectorData = axe.utils.getSelectorData(context.flatTree);
    } catch (e) {
      cleanup();
      return reject(e);
    }
    var q = axe.utils.queue();
    var audit = axe._audit;
    if (options.performanceTimer) {
      axe.utils.performanceTimer.auditStart();
    }
    if (context.frames.length && options.iframes !== false) {
      q.defer(function(res, rej) {
        axe.utils.collectResultsFromFrames(context, options, 'rules', null, res, rej);
      });
    }
    var scrollState = void 0;
    q.defer(function(res, rej) {
      if (options.restoreScroll) {
        scrollState = axe.utils.getScrollState();
      }
      audit.run(context, options, res, rej);
    });
    q.then(function(data) {
      try {
        if (scrollState) {
          axe.utils.setScrollState(scrollState);
        }
        if (options.performanceTimer) {
          axe.utils.performanceTimer.auditEnd();
        }
        var results = axe.utils.mergeResults(data.map(function(results) {
          return {
            results: results
          };
        }));
        if (context.initiator) {
          results = audit.after(results, options);
          results.forEach(axe.utils.publishMetaData);
          results = results.map(axe.utils.finalizeRuleResult);
        }
        try {
          resolve(results, cleanup);
        } catch (e) {
          cleanup();
          axe.log(e);
        }
      } catch (e) {
        cleanup();
        reject(e);
      }
    }).catch(function(e) {
      cleanup();
      reject(e);
    });
  }
  axe._runRules = runRules;
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  function isContext(potential) {
    'use strict';
    switch (true) {
     case typeof potential === 'string':
     case Array.isArray(potential):
     case Node && potential instanceof Node:
     case NodeList && potential instanceof NodeList:
      return true;

     case (typeof potential === 'undefined' ? 'undefined' : _typeof(potential)) !== 'object':
      return false;

     case potential.include !== undefined:
     case potential.exclude !== undefined:
     case typeof potential.length === 'number':
      return true;

     default:
      return false;
    }
  }
  var noop = function noop() {};
  function normalizeRunParams(context, options, callback) {
    'use strict';
    var typeErr = new TypeError('axe.run arguments are invalid');
    if (!isContext(context)) {
      if (callback !== undefined) {
        throw typeErr;
      }
      callback = options;
      options = context;
      context = document;
    }
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      if (callback !== undefined) {
        throw typeErr;
      }
      callback = options;
      options = {};
    }
    if (typeof callback !== 'function' && callback !== undefined) {
      throw typeErr;
    }
    return {
      context: context,
      options: options,
      callback: callback || noop
    };
  }
  axe.run = function(context, options, callback) {
    'use strict';
    if (!axe._audit) {
      throw new Error('No audit configured');
    }
    var args = normalizeRunParams(context, options, callback);
    context = args.context;
    options = args.options;
    callback = args.callback;
    options.reporter = options.reporter || axe._audit.reporter || 'v1';
    if (options.performanceTimer) {
      axe.utils.performanceTimer.start();
    }
    var p = void 0;
    var reject = noop;
    var resolve = noop;
    if (window.Promise && callback === noop) {
      p = new Promise(function(_resolve, _reject) {
        reject = _reject;
        resolve = _resolve;
      });
    }
    axe._runRules(context, options, function(rawResults, cleanup) {
      var respond = function respond(results) {
        cleanup();
        try {
          callback(null, results);
        } catch (e) {
          axe.log(e);
        }
        resolve(results);
      };
      if (options.performanceTimer) {
        axe.utils.performanceTimer.end();
      }
      try {
        var reporter = axe.getReporter(options.reporter);
        var results = reporter(rawResults, options, respond);
        if (results !== undefined) {
          respond(results);
        }
      } catch (err) {
        cleanup();
        callback(err);
        reject(err);
      }
    }, function(err) {
      callback(err);
      reject(err);
    });
    return p;
  };
  'use strict';
  helpers.failureSummary = function failureSummary(nodeData) {
    'use strict';
    var failingChecks = {};
    failingChecks.none = nodeData.none.concat(nodeData.all);
    failingChecks.any = nodeData.any;
    return Object.keys(failingChecks).map(function(key) {
      if (!failingChecks[key].length) {
        return;
      }
      var sum = axe._audit.data.failureSummaries[key];
      if (sum && typeof sum.failureMessage === 'function') {
        return sum.failureMessage(failingChecks[key].map(function(check) {
          return check.message || '';
        }));
      }
    }).filter(function(i) {
      return i !== undefined;
    }).join('\n\n');
  };
  'use strict';
  helpers.incompleteFallbackMessage = function incompleteFallbackMessage() {
    'use strict';
    return axe._audit.data.incompleteFallbackMessage();
  };
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  function normalizeRelatedNodes(node, options) {
    'use strict';
    [ 'any', 'all', 'none' ].forEach(function(type) {
      if (!Array.isArray(node[type])) {
        return;
      }
      node[type].filter(function(checkRes) {
        return Array.isArray(checkRes.relatedNodes);
      }).forEach(function(checkRes) {
        checkRes.relatedNodes = checkRes.relatedNodes.map(function(relatedNode) {
          var res = {
            html: relatedNode.source
          };
          if (options.elementRef && !relatedNode.fromFrame) {
            res.element = relatedNode.element;
          }
          if (options.selectors !== false || relatedNode.fromFrame) {
            res.target = relatedNode.selector;
          }
          if (options.xpath) {
            res.xpath = relatedNode.xpath;
          }
          return res;
        });
      });
    });
  }
  var resultKeys = axe.constants.resultGroups;
  helpers.processAggregate = function(results, options) {
    var resultObject = axe.utils.aggregateResult(results);
    resultObject.timestamp = new Date().toISOString();
    resultObject.url = window.location.href;
    resultKeys.forEach(function(key) {
      if (options.resultTypes && !options.resultTypes.includes(key)) {
        (resultObject[key] || []).forEach(function(ruleResult) {
          if (Array.isArray(ruleResult.nodes) && ruleResult.nodes.length > 0) {
            ruleResult.nodes = [ ruleResult.nodes[0] ];
          }
        });
      }
      resultObject[key] = (resultObject[key] || []).map(function(ruleResult) {
        ruleResult = Object.assign({}, ruleResult);
        if (Array.isArray(ruleResult.nodes) && ruleResult.nodes.length > 0) {
          ruleResult.nodes = ruleResult.nodes.map(function(subResult) {
            if (_typeof(subResult.node) === 'object') {
              subResult.html = subResult.node.source;
              if (options.elementRef && !subResult.node.fromFrame) {
                subResult.element = subResult.node.element;
              }
              if (options.selectors !== false || subResult.node.fromFrame) {
                subResult.target = subResult.node.selector;
              }
              if (options.xpath) {
                subResult.xpath = subResult.node.xpath;
              }
            }
            delete subResult.result;
            delete subResult.node;
            normalizeRelatedNodes(subResult, options);
            return subResult;
          });
        }
        resultKeys.forEach(function(key) {
          return delete ruleResult[key];
        });
        delete ruleResult.pageLevel;
        delete ruleResult.result;
        return ruleResult;
      });
    });
    return resultObject;
  };
  'use strict';
  axe.addReporter('na', function(results, options, callback) {
    'use strict';
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    var out = helpers.processAggregate(results, options);
    callback({
      violations: out.violations,
      passes: out.passes,
      incomplete: out.incomplete,
      inapplicable: out.inapplicable,
      timestamp: out.timestamp,
      url: out.url
    });
  });
  'use strict';
  axe.addReporter('no-passes', function(results, options, callback) {
    'use strict';
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    options.resultTypes = [ 'violations' ];
    var out = helpers.processAggregate(results, options);
    callback({
      violations: out.violations,
      timestamp: out.timestamp,
      url: out.url
    });
  });
  'use strict';
  axe.addReporter('raw', function(results, options, callback) {
    'use strict';
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    callback(results);
  });
  'use strict';
  axe.addReporter('v1', function(results, options, callback) {
    'use strict';
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    var out = helpers.processAggregate(results, options);
    out.violations.forEach(function(result) {
      return result.nodes.forEach(function(nodeResult) {
        nodeResult.failureSummary = helpers.failureSummary(nodeResult);
      });
    });
    callback({
      violations: out.violations,
      passes: out.passes,
      incomplete: out.incomplete,
      inapplicable: out.inapplicable,
      timestamp: out.timestamp,
      url: out.url
    });
  });
  'use strict';
  axe.addReporter('v2', function(results, options, callback) {
    'use strict';
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    var out = helpers.processAggregate(results, options);
    callback({
      violations: out.violations,
      passes: out.passes,
      incomplete: out.incomplete,
      inapplicable: out.inapplicable,
      timestamp: out.timestamp,
      url: out.url
    });
  }, true);
  'use strict';
  axe.utils.aggregate = function(map, values, initial) {
    values = values.slice();
    if (initial) {
      values.push(initial);
    }
    var sorting = values.map(function(val) {
      return map.indexOf(val);
    }).sort();
    return map[sorting.pop()];
  };
  'use strict';
  var _axe$constants = axe.constants, CANTTELL_PRIO = _axe$constants.CANTTELL_PRIO, FAIL_PRIO = _axe$constants.FAIL_PRIO;
  var checkMap = [];
  checkMap[axe.constants.PASS_PRIO] = true;
  checkMap[axe.constants.CANTTELL_PRIO] = null;
  checkMap[axe.constants.FAIL_PRIO] = false;
  var checkTypes = [ 'any', 'all', 'none' ];
  function anyAllNone(obj, functor) {
    return checkTypes.reduce(function(out, type) {
      out[type] = (obj[type] || []).map(function(val) {
        return functor(val, type);
      });
      return out;
    }, {});
  }
  axe.utils.aggregateChecks = function(nodeResOriginal) {
    var nodeResult = Object.assign({}, nodeResOriginal);
    anyAllNone(nodeResult, function(check, type) {
      var i = checkMap.indexOf(check.result);
      check.priority = i !== -1 ? i : axe.constants.CANTTELL_PRIO;
      if (type === 'none') {
        check.priority = 4 - check.priority;
      }
    });
    var priorities = {
      all: nodeResult.all.reduce(function(a, b) {
        return Math.max(a, b.priority);
      }, 0),
      none: nodeResult.none.reduce(function(a, b) {
        return Math.max(a, b.priority);
      }, 0),
      any: nodeResult.any.reduce(function(a, b) {
        return Math.min(a, b.priority);
      }, 4) % 4
    };
    nodeResult.priority = Math.max(priorities.all, priorities.none, priorities.any);
    var impacts = [];
    checkTypes.forEach(function(type) {
      nodeResult[type] = nodeResult[type].filter(function(check) {
        return check.priority === nodeResult.priority && check.priority === priorities[type];
      });
      nodeResult[type].forEach(function(check) {
        return impacts.push(check.impact);
      });
    });
    if ([ CANTTELL_PRIO, FAIL_PRIO ].includes(nodeResult.priority)) {
      nodeResult.impact = axe.utils.aggregate(axe.constants.impact, impacts);
    } else {
      nodeResult.impact = null;
    }
    anyAllNone(nodeResult, function(c) {
      delete c.result;
      delete c.priority;
    });
    nodeResult.result = axe.constants.results[nodeResult.priority];
    delete nodeResult.priority;
    return nodeResult;
  };
  'use strict';
  (function() {
    axe.utils.aggregateNodeResults = function(nodeResults) {
      var ruleResult = {};
      nodeResults = nodeResults.map(function(nodeResult) {
        if (nodeResult.any && nodeResult.all && nodeResult.none) {
          return axe.utils.aggregateChecks(nodeResult);
        } else if (Array.isArray(nodeResult.node)) {
          return axe.utils.finalizeRuleResult(nodeResult);
        } else {
          throw new TypeError('Invalid Result type');
        }
      });
      if (nodeResults && nodeResults.length) {
        var resultList = nodeResults.map(function(node) {
          return node.result;
        });
        ruleResult.result = axe.utils.aggregate(axe.constants.results, resultList, ruleResult.result);
      } else {
        ruleResult.result = 'inapplicable';
      }
      axe.constants.resultGroups.forEach(function(group) {
        return ruleResult[group] = [];
      });
      nodeResults.forEach(function(nodeResult) {
        var groupName = axe.constants.resultGroupMap[nodeResult.result];
        ruleResult[groupName].push(nodeResult);
      });
      var impactGroup = axe.constants.FAIL_GROUP;
      if (ruleResult[impactGroup].length === 0) {
        impactGroup = axe.constants.CANTTELL_GROUP;
      }
      if (ruleResult[impactGroup].length > 0) {
        var impactList = ruleResult[impactGroup].map(function(failure) {
          return failure.impact;
        });
        ruleResult.impact = axe.utils.aggregate(axe.constants.impact, impactList) || null;
      } else {
        ruleResult.impact = null;
      }
      return ruleResult;
    };
  })();
  'use strict';
  function copyToGroup(resultObject, subResult, group) {
    var resultCopy = Object.assign({}, subResult);
    resultCopy.nodes = (resultCopy[group] || []).concat();
    axe.constants.resultGroups.forEach(function(group) {
      delete resultCopy[group];
    });
    resultObject[group].push(resultCopy);
  }
  axe.utils.aggregateResult = function(results) {
    var resultObject = {};
    axe.constants.resultGroups.forEach(function(groupName) {
      return resultObject[groupName] = [];
    });
    results.forEach(function(subResult) {
      if (subResult.error) {
        copyToGroup(resultObject, subResult, axe.constants.CANTTELL_GROUP);
      } else if (subResult.result === axe.constants.NA) {
        copyToGroup(resultObject, subResult, axe.constants.NA_GROUP);
      } else {
        axe.constants.resultGroups.forEach(function(group) {
          if (Array.isArray(subResult[group]) && subResult[group].length > 0) {
            copyToGroup(resultObject, subResult, group);
          }
        });
      }
    });
    return resultObject;
  };
  'use strict';
  function areStylesSet(el, styles, stopAt) {
    'use strict';
    var styl = window.getComputedStyle(el, null);
    var set = false;
    if (!styl) {
      return false;
    }
    styles.forEach(function(att) {
      if (styl.getPropertyValue(att.property) === att.value) {
        set = true;
      }
    });
    if (set) {
      return true;
    }
    if (el.nodeName.toUpperCase() === stopAt.toUpperCase() || !el.parentNode) {
      return false;
    }
    return areStylesSet(el.parentNode, styles, stopAt);
  }
  axe.utils.areStylesSet = areStylesSet;
  'use strict';
  axe.utils.checkHelper = function checkHelper(checkResult, options, resolve, reject) {
    'use strict';
    return {
      isAsync: false,
      async: function async() {
        this.isAsync = true;
        return function(result) {
          if (result instanceof Error === false) {
            checkResult.result = result;
            resolve(checkResult);
          } else {
            reject(result);
          }
        };
      },
      data: function data(_data) {
        checkResult.data = _data;
      },
      relatedNodes: function relatedNodes(nodes) {
        nodes = nodes instanceof Node ? [ nodes ] : axe.utils.toArray(nodes);
        checkResult.relatedNodes = nodes.map(function(element) {
          return new axe.utils.DqElement(element, options);
        });
      }
    };
  };
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  axe.utils.clone = function(obj) {
    'use strict';
    var index, length, out = obj;
    if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
      if (Array.isArray(obj)) {
        out = [];
        for (index = 0, length = obj.length; index < length; index++) {
          out[index] = axe.utils.clone(obj[index]);
        }
      } else {
        out = {};
        for (index in obj) {
          out[index] = axe.utils.clone(obj[index]);
        }
      }
    }
    return out;
  };
  'use strict';
  function err(message, node) {
    'use strict';
    var selector;
    if (axe._tree) {
      selector = axe.utils.getSelector(node);
    }
    return new Error(message + ': ' + (selector || node));
  }
  axe.utils.sendCommandToFrame = function(node, parameters, resolve, reject) {
    'use strict';
    var win = node.contentWindow;
    if (!win) {
      axe.log('Frame does not have a content window', node);
      resolve(null);
      return;
    }
    var timeout = setTimeout(function() {
      timeout = setTimeout(function() {
        if (!parameters.debug) {
          resolve(null);
        } else {
          reject(err('No response from frame', node));
        }
      }, 0);
    }, 500);
    axe.utils.respondable(win, 'axe.ping', null, undefined, function() {
      clearTimeout(timeout);
      var frameWaitTime = parameters.options && parameters.options.frameWaitTime || 6e4;
      timeout = setTimeout(function() {
        reject(err('Axe in frame timed out', node));
      }, frameWaitTime);
      axe.utils.respondable(win, 'axe.start', parameters, undefined, function(data) {
        clearTimeout(timeout);
        if (data instanceof Error === false) {
          resolve(data);
        } else {
          reject(data);
        }
      });
    });
  };
  function collectResultsFromFrames(context, options, command, parameter, resolve, reject) {
    'use strict';
    var q = axe.utils.queue();
    var frames = context.frames;
    frames.forEach(function(frame) {
      var params = {
        options: options,
        command: command,
        parameter: parameter,
        context: {
          initiator: false,
          page: context.page,
          include: frame.include || [],
          exclude: frame.exclude || []
        }
      };
      q.defer(function(res, rej) {
        var node = frame.node;
        axe.utils.sendCommandToFrame(node, params, function(data) {
          if (data) {
            return res({
              results: data,
              frameElement: node,
              frame: axe.utils.getSelector(node)
            });
          }
          res(null);
        }, rej);
      });
    });
    q.then(function(data) {
      resolve(axe.utils.mergeResults(data, options));
    }).catch(reject);
  }
  axe.utils.collectResultsFromFrames = collectResultsFromFrames;
  'use strict';
  axe.utils.contains = function(node, otherNode) {
    'use strict';
    function containsShadowChild(node, otherNode) {
      if (node.shadowId === otherNode.shadowId) {
        return true;
      }
      return !!node.children.find(function(child) {
        return containsShadowChild(child, otherNode);
      });
    }
    if (node.shadowId || otherNode.shadowId) {
      return containsShadowChild(node, otherNode);
    }
    if (typeof node.actualNode.contains === 'function') {
      return node.actualNode.contains(otherNode.actualNode);
    }
    return !!(node.actualNode.compareDocumentPosition(otherNode.actualNode) & 16);
  };
  'use strict';
  (function(axe) {
    /*!
  * The copyright below covers the code within this function block only
  *
  * Copyright (c) 2013 Dulin Marat
  * 
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  * 
  * The above copyright notice and this permission notice shall be included in
  * all copies or substantial portions of the Software.
  * 
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  * THE SOFTWARE.
  */
    function CssSelectorParser() {
      this.pseudos = {};
      this.attrEqualityMods = {};
      this.ruleNestingOperators = {};
      this.substitutesEnabled = false;
    }
    CssSelectorParser.prototype.registerSelectorPseudos = function(name) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        name = arguments[j];
        this.pseudos[name] = 'selector';
      }
      return this;
    };
    CssSelectorParser.prototype.unregisterSelectorPseudos = function(name) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        name = arguments[j];
        delete this.pseudos[name];
      }
      return this;
    };
    CssSelectorParser.prototype.registerNumericPseudos = function(name) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        name = arguments[j];
        this.pseudos[name] = 'numeric';
      }
      return this;
    };
    CssSelectorParser.prototype.unregisterNumericPseudos = function(name) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        name = arguments[j];
        delete this.pseudos[name];
      }
      return this;
    };
    CssSelectorParser.prototype.registerNestingOperators = function(operator) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        operator = arguments[j];
        this.ruleNestingOperators[operator] = true;
      }
      return this;
    };
    CssSelectorParser.prototype.unregisterNestingOperators = function(operator) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        operator = arguments[j];
        delete this.ruleNestingOperators[operator];
      }
      return this;
    };
    CssSelectorParser.prototype.registerAttrEqualityMods = function(mod) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        mod = arguments[j];
        this.attrEqualityMods[mod] = true;
      }
      return this;
    };
    CssSelectorParser.prototype.unregisterAttrEqualityMods = function(mod) {
      for (var j = 0, len = arguments.length; j < len; j++) {
        mod = arguments[j];
        delete this.attrEqualityMods[mod];
      }
      return this;
    };
    CssSelectorParser.prototype.enableSubstitutes = function() {
      this.substitutesEnabled = true;
      return this;
    };
    CssSelectorParser.prototype.disableSubstitutes = function() {
      this.substitutesEnabled = false;
      return this;
    };
    function isIdentStart(c) {
      return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c === '-' || c === '_';
    }
    function isIdent(c) {
      return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9' || c === '-' || c === '_';
    }
    function isHex(c) {
      return c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F' || c >= '0' && c <= '9';
    }
    function isDecimal(c) {
      return c >= '0' && c <= '9';
    }
    function isAttrMatchOperator(chr) {
      return chr === '=' || chr === '^' || chr === '$' || chr === '*' || chr === '~';
    }
    var identSpecialChars = {
      '!': true,
      '"': true,
      '#': true,
      $: true,
      '%': true,
      '&': true,
      '\'': true,
      '(': true,
      ')': true,
      '*': true,
      '+': true,
      ',': true,
      '.': true,
      '/': true,
      ';': true,
      '<': true,
      '=': true,
      '>': true,
      '?': true,
      '@': true,
      '[': true,
      '\\': true,
      ']': true,
      '^': true,
      '`': true,
      '{': true,
      '|': true,
      '}': true,
      '~': true
    };
    var strReplacementsRev = {
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\f': '\\f',
      '\v': '\\v'
    };
    var singleQuoteEscapeChars = {
      n: '\n',
      r: '\r',
      t: '\t',
      f: '\f',
      '\\': '\\',
      '\'': '\''
    };
    var doubleQuotesEscapeChars = {
      n: '\n',
      r: '\r',
      t: '\t',
      f: '\f',
      '\\': '\\',
      '"': '"'
    };
    function ParseContext(str, pos, pseudos, attrEqualityMods, ruleNestingOperators, substitutesEnabled) {
      var chr, getIdent, getStr, l, skipWhitespace;
      l = str.length;
      chr = null;
      getStr = function getStr(quote, escapeTable) {
        var esc, hex, result;
        result = '';
        pos++;
        chr = str.charAt(pos);
        while (pos < l) {
          if (chr === quote) {
            pos++;
            return result;
          } else if (chr === '\\') {
            pos++;
            chr = str.charAt(pos);
            if (chr === quote) {
              result += quote;
            } else if (esc = escapeTable[chr]) {
              result += esc;
            } else if (isHex(chr)) {
              hex = chr;
              pos++;
              chr = str.charAt(pos);
              while (isHex(chr)) {
                hex += chr;
                pos++;
                chr = str.charAt(pos);
              }
              if (chr === ' ') {
                pos++;
                chr = str.charAt(pos);
              }
              result += String.fromCharCode(parseInt(hex, 16));
              continue;
            } else {
              result += chr;
            }
          } else {
            result += chr;
          }
          pos++;
          chr = str.charAt(pos);
        }
        return result;
      };
      getIdent = function getIdent() {
        var result = '';
        chr = str.charAt(pos);
        while (pos < l) {
          if (isIdent(chr)) {
            result += chr;
          } else if (chr === '\\') {
            pos++;
            if (pos >= l) {
              throw Error('Expected symbol but end of file reached.');
            }
            chr = str.charAt(pos);
            if (identSpecialChars[chr]) {
              result += chr;
            } else if (isHex(chr)) {
              var hex = chr;
              pos++;
              chr = str.charAt(pos);
              while (isHex(chr)) {
                hex += chr;
                pos++;
                chr = str.charAt(pos);
              }
              if (chr === ' ') {
                pos++;
                chr = str.charAt(pos);
              }
              result += String.fromCharCode(parseInt(hex, 16));
              continue;
            } else {
              result += chr;
            }
          } else {
            return result;
          }
          pos++;
          chr = str.charAt(pos);
        }
        return result;
      };
      skipWhitespace = function skipWhitespace() {
        chr = str.charAt(pos);
        var result = false;
        while (chr === ' ' || chr === '\t' || chr === '\n' || chr === '\r' || chr === '\f') {
          result = true;
          pos++;
          chr = str.charAt(pos);
        }
        return result;
      };
      this.parse = function() {
        var res = this.parseSelector();
        if (pos < l) {
          throw Error('Rule expected but "' + str.charAt(pos) + '" found.');
        }
        return res;
      };
      this.parseSelector = function() {
        var res;
        var selector = res = this.parseSingleSelector();
        chr = str.charAt(pos);
        while (chr === ',') {
          pos++;
          skipWhitespace();
          if (res.type !== 'selectors') {
            res = {
              type: 'selectors',
              selectors: [ selector ]
            };
          }
          selector = this.parseSingleSelector();
          if (!selector) {
            throw Error('Rule expected after ",".');
          }
          res.selectors.push(selector);
        }
        return res;
      };
      this.parseSingleSelector = function() {
        skipWhitespace();
        var selector = {
          type: 'ruleSet'
        };
        var rule = this.parseRule();
        if (!rule) {
          return null;
        }
        var currentRule = selector;
        while (rule) {
          rule.type = 'rule';
          currentRule.rule = rule;
          currentRule = rule;
          skipWhitespace();
          chr = str.charAt(pos);
          if (pos >= l || chr === ',' || chr === ')') {
            break;
          }
          if (ruleNestingOperators[chr]) {
            var op = chr;
            pos++;
            skipWhitespace();
            rule = this.parseRule();
            if (!rule) {
              throw Error('Rule expected after "' + op + '".');
            }
            rule.nestingOperator = op;
          } else {
            rule = this.parseRule();
            if (rule) {
              rule.nestingOperator = null;
            }
          }
        }
        return selector;
      };
      this.parseRule = function() {
        var rule = null;
        while (pos < l) {
          chr = str.charAt(pos);
          if (chr === '*') {
            pos++;
            (rule = rule || {}).tagName = '*';
          } else if (isIdentStart(chr) || chr === '\\') {
            (rule = rule || {}).tagName = getIdent();
          } else if (chr === '.') {
            pos++;
            rule = rule || {};
            (rule.classNames = rule.classNames || []).push(getIdent());
          } else if (chr === '#') {
            pos++;
            (rule = rule || {}).id = getIdent();
          } else if (chr === '[') {
            pos++;
            skipWhitespace();
            var attr = {
              name: getIdent()
            };
            skipWhitespace();
            if (chr === ']') {
              pos++;
            } else {
              var operator = '';
              if (attrEqualityMods[chr]) {
                operator = chr;
                pos++;
                chr = str.charAt(pos);
              }
              if (pos >= l) {
                throw Error('Expected "=" but end of file reached.');
              }
              if (chr !== '=') {
                throw Error('Expected "=" but "' + chr + '" found.');
              }
              attr.operator = operator + '=';
              pos++;
              skipWhitespace();
              var attrValue = '';
              attr.valueType = 'string';
              if (chr === '"') {
                attrValue = getStr('"', doubleQuotesEscapeChars);
              } else if (chr === '\'') {
                attrValue = getStr('\'', singleQuoteEscapeChars);
              } else if (substitutesEnabled && chr === '$') {
                pos++;
                attrValue = getIdent();
                attr.valueType = 'substitute';
              } else {
                while (pos < l) {
                  if (chr === ']') {
                    break;
                  }
                  attrValue += chr;
                  pos++;
                  chr = str.charAt(pos);
                }
                attrValue = attrValue.trim();
              }
              skipWhitespace();
              if (pos >= l) {
                throw Error('Expected "]" but end of file reached.');
              }
              if (chr !== ']') {
                throw Error('Expected "]" but "' + chr + '" found.');
              }
              pos++;
              attr.value = attrValue;
            }
            rule = rule || {};
            (rule.attrs = rule.attrs || []).push(attr);
          } else if (chr === ':') {
            pos++;
            var pseudoName = getIdent();
            var pseudo = {
              name: pseudoName
            };
            if (chr === '(') {
              pos++;
              var value = '';
              skipWhitespace();
              if (pseudos[pseudoName] === 'selector') {
                pseudo.valueType = 'selector';
                value = this.parseSelector();
              } else {
                pseudo.valueType = pseudos[pseudoName] || 'string';
                if (chr === '"') {
                  value = getStr('"', doubleQuotesEscapeChars);
                } else if (chr === '\'') {
                  value = getStr('\'', singleQuoteEscapeChars);
                } else if (substitutesEnabled && chr === '$') {
                  pos++;
                  value = getIdent();
                  pseudo.valueType = 'substitute';
                } else {
                  while (pos < l) {
                    if (chr === ')') {
                      break;
                    }
                    value += chr;
                    pos++;
                    chr = str.charAt(pos);
                  }
                  value = value.trim();
                }
                skipWhitespace();
              }
              if (pos >= l) {
                throw Error('Expected ")" but end of file reached.');
              }
              if (chr !== ')') {
                throw Error('Expected ")" but "' + chr + '" found.');
              }
              pos++;
              pseudo.value = value;
            }
            rule = rule || {};
            (rule.pseudos = rule.pseudos || []).push(pseudo);
          } else {
            break;
          }
        }
        return rule;
      };
      return this;
    }
    CssSelectorParser.prototype.parse = function(str) {
      var context = new ParseContext(str, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
      return context.parse();
    };
    CssSelectorParser.prototype.escapeIdentifier = function(s) {
      var result = '';
      var i = 0;
      var len = s.length;
      while (i < len) {
        var chr = s.charAt(i);
        if (identSpecialChars[chr]) {
          result += '\\' + chr;
        } else {
          if (!(chr === '_' || chr === '-' || chr >= 'A' && chr <= 'Z' || chr >= 'a' && chr <= 'z' || i !== 0 && chr >= '0' && chr <= '9')) {
            var charCode = chr.charCodeAt(0);
            if ((charCode & 63488) === 55296) {
              var extraCharCode = s.charCodeAt(i++);
              if ((charCode & 64512) !== 55296 || (extraCharCode & 64512) !== 56320) {
                throw Error('UCS-2(decode): illegal sequence');
              }
              charCode = ((charCode & 1023) << 10) + (extraCharCode & 1023) + 65536;
            }
            result += '\\' + charCode.toString(16) + ' ';
          } else {
            result += chr;
          }
        }
        i++;
      }
      return result;
    };
    CssSelectorParser.prototype.escapeStr = function(s) {
      var result = '';
      var i = 0;
      var len = s.length;
      var chr, replacement;
      while (i < len) {
        chr = s.charAt(i);
        if (chr === '"') {
          chr = '\\"';
        } else if (chr === '\\') {
          chr = '\\\\';
        } else if (replacement = strReplacementsRev[chr]) {
          chr = replacement;
        }
        result += chr;
        i++;
      }
      return '"' + result + '"';
    };
    CssSelectorParser.prototype.render = function(path) {
      return this._renderEntity(path).trim();
    };
    CssSelectorParser.prototype._renderEntity = function(entity) {
      var currentEntity, parts, res;
      res = '';
      switch (entity.type) {
       case 'ruleSet':
        currentEntity = entity.rule;
        parts = [];
        while (currentEntity) {
          if (currentEntity.nestingOperator) {
            parts.push(currentEntity.nestingOperator);
          }
          parts.push(this._renderEntity(currentEntity));
          currentEntity = currentEntity.rule;
        }
        res = parts.join(' ');
        break;

       case 'selectors':
        res = entity.selectors.map(this._renderEntity, this).join(', ');
        break;

       case 'rule':
        if (entity.tagName) {
          if (entity.tagName === '*') {
            res = '*';
          } else {
            res = this.escapeIdentifier(entity.tagName);
          }
        }
        if (entity.id) {
          res += '#' + this.escapeIdentifier(entity.id);
        }
        if (entity.classNames) {
          res += entity.classNames.map(function(cn) {
            return '.' + this.escapeIdentifier(cn);
          }, this).join('');
        }
        if (entity.attrs) {
          res += entity.attrs.map(function(attr) {
            if (attr.operator) {
              if (attr.valueType === 'substitute') {
                return '[' + this.escapeIdentifier(attr.name) + attr.operator + '$' + attr.value + ']';
              } else {
                return '[' + this.escapeIdentifier(attr.name) + attr.operator + this.escapeStr(attr.value) + ']';
              }
            } else {
              return '[' + this.escapeIdentifier(attr.name) + ']';
            }
          }, this).join('');
        }
        if (entity.pseudos) {
          res += entity.pseudos.map(function(pseudo) {
            if (pseudo.valueType) {
              if (pseudo.valueType === 'selector') {
                return ':' + this.escapeIdentifier(pseudo.name) + '(' + this._renderEntity(pseudo.value) + ')';
              } else if (pseudo.valueType === 'substitute') {
                return ':' + this.escapeIdentifier(pseudo.name) + '($' + pseudo.value + ')';
              } else if (pseudo.valueType === 'numeric') {
                return ':' + this.escapeIdentifier(pseudo.name) + '(' + pseudo.value + ')';
              } else {
                return ':' + this.escapeIdentifier(pseudo.name) + '(' + this.escapeIdentifier(pseudo.value) + ')';
              }
            } else {
              return ':' + this.escapeIdentifier(pseudo.name);
            }
          }, this).join('');
        }
        break;

       default:
        throw Error('Unknown entity type: "' + entity.type(+'".'));
      }
      return res;
    };
    var parser = new CssSelectorParser();
    parser.registerNestingOperators('>');
    axe.utils.cssParser = parser;
  })(axe);
  'use strict';
  function truncate(str, maxLength) {
    maxLength = maxLength || 300;
    if (str.length > maxLength) {
      var index = str.indexOf('>');
      str = str.substring(0, index + 1);
    }
    return str;
  }
  function getSource(element) {
    var source = element.outerHTML;
    if (!source && typeof XMLSerializer === 'function') {
      source = new XMLSerializer().serializeToString(element);
    }
    return truncate(source || '');
  }
  function DqElement(element, options, spec) {
    this._fromFrame = !!spec;
    this.spec = spec || {};
    if (options && options.absolutePaths) {
      this._options = {
        toRoot: true
      };
    }
    this.source = this.spec.source !== undefined ? this.spec.source : getSource(element);
    this._element = element;
  }
  DqElement.prototype = {
    get selector() {
      return this.spec.selector || [ axe.utils.getSelector(this.element, this._options) ];
    },
    get xpath() {
      return this.spec.xpath || [ axe.utils.getXpath(this.element) ];
    },
    get element() {
      return this._element;
    },
    get fromFrame() {
      return this._fromFrame;
    },
    toJSON: function toJSON() {
      'use strict';
      return {
        selector: this.selector,
        source: this.source,
        xpath: this.xpath
      };
    }
  };
  DqElement.fromFrame = function(node, options, frame) {
    node.selector.unshift(frame.selector);
    node.xpath.unshift(frame.xpath);
    return new axe.utils.DqElement(frame.element, options, node);
  };
  axe.utils.DqElement = DqElement;
  'use strict';
  axe.utils.matchesSelector = function() {
    'use strict';
    var method;
    function getMethod(win) {
      var index, candidate, elProto = win.Element.prototype, candidates = [ 'matches', 'matchesSelector', 'mozMatchesSelector', 'webkitMatchesSelector', 'msMatchesSelector' ], length = candidates.length;
      for (index = 0; index < length; index++) {
        candidate = candidates[index];
        if (elProto[candidate]) {
          return candidate;
        }
      }
    }
    return function(node, selector) {
      if (!method || !node[method]) {
        method = getMethod(node.ownerDocument.defaultView);
      }
      return node[method](selector);
    };
  }();
  'use strict';
  axe.utils.escapeSelector = function(value) {
    'use strict';
    var string = String(value);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = '';
    var firstCodeUnit = string.charCodeAt(0);
    while (++index < length) {
      codeUnit = string.charCodeAt(index);
      if (codeUnit == 0) {
        throw new Error('INVALID_CHARACTER_ERR');
      }
      if (codeUnit >= 1 && codeUnit <= 31 || codeUnit >= 127 && codeUnit <= 159 || index == 0 && codeUnit >= 48 && codeUnit <= 57 || index == 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit == 45) {
        result += '\\' + codeUnit.toString(16) + ' ';
        continue;
      }
      if (index == 1 && codeUnit == 45 && firstCodeUnit == 45) {
        result += '\\' + string.charAt(index);
        continue;
      }
      if (codeUnit >= 128 || codeUnit == 45 || codeUnit == 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
        result += string.charAt(index);
        continue;
      }
      result += '\\' + string.charAt(index);
    }
    return result;
  };
  'use strict';
  axe.utils.extendMetaData = function(to, from) {
    Object.assign(to, from);
    Object.keys(from).filter(function(prop) {
      return typeof from[prop] === 'function';
    }).forEach(function(prop) {
      to[prop] = null;
      try {
        to[prop] = from[prop](to);
      } catch (e) {}
    });
  };
  'use strict';
  axe.utils.finalizeRuleResult = function(ruleResult) {
    Object.assign(ruleResult, axe.utils.aggregateNodeResults(ruleResult.nodes));
    delete ruleResult.nodes;
    return ruleResult;
  };
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  axe.utils.findBy = function(array, key, value) {
    if (Array.isArray(array)) {
      return array.find(function(obj) {
        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj[key] === value;
      });
    }
  };
  'use strict';
  var axe = axe || {
    utils: {}
  };
  function virtualDOMfromNode(node, shadowId) {
    return {
      shadowId: shadowId,
      children: [],
      actualNode: node
    };
  }
  function getSlotChildren(node) {
    var retVal = [];
    node = node.firstChild;
    while (node) {
      retVal.push(node);
      node = node.nextSibling;
    }
    return retVal;
  }
  axe.utils.getFlattenedTree = function(node, shadowId) {
    var retVal, realArray, nodeName;
    function reduceShadowDOM(res, child) {
      var replacements = axe.utils.getFlattenedTree(child, shadowId);
      if (replacements) {
        res = res.concat(replacements);
      }
      return res;
    }
    if (node.documentElement) {
      node = node.documentElement;
    }
    nodeName = node.nodeName.toLowerCase();
    if (axe.utils.isShadowRoot(node)) {
      retVal = virtualDOMfromNode(node, shadowId);
      shadowId = 'a' + Math.random().toString().substring(2);
      realArray = Array.from(node.shadowRoot.childNodes);
      retVal.children = realArray.reduce(reduceShadowDOM, []);
      return [ retVal ];
    } else {
      if (nodeName === 'content') {
        realArray = Array.from(node.getDistributedNodes());
        return realArray.reduce(reduceShadowDOM, []);
      } else if (nodeName === 'slot') {
        realArray = Array.from(node.assignedNodes());
        if (!realArray.length) {
          realArray = getSlotChildren(node);
        }
        var styl = window.getComputedStyle(node);
        if (false) {
          retVal = virtualDOMfromNode(node, shadowId);
          retVal.children = realArray.reduce(reduceShadowDOM, []);
          return [ retVal ];
        } else {
          return realArray.reduce(reduceShadowDOM, []);
        }
      } else {
        if (node.nodeType === 1) {
          retVal = virtualDOMfromNode(node, shadowId);
          realArray = Array.from(node.childNodes);
          retVal.children = realArray.reduce(reduceShadowDOM, []);
          return [ retVal ];
        } else if (node.nodeType === 3) {
          return [ virtualDOMfromNode(node) ];
        }
        return undefined;
      }
    }
  };
  axe.utils.getNodeFromTree = function(vNode, node) {
    var found;
    if (vNode.actualNode === node) {
      return vNode;
    }
    vNode.children.forEach(function(candidate) {
      var retVal;
      if (candidate.actualNode === node) {
        found = candidate;
      } else {
        retVal = axe.utils.getNodeFromTree(candidate, node);
        if (retVal) {
          found = retVal;
        }
      }
    });
    return found;
  };
  'use strict';
  axe.utils.getAllChecks = function getAllChecks(object) {
    'use strict';
    var result = [];
    return result.concat(object.any || []).concat(object.all || []).concat(object.none || []);
  };
  'use strict';
  axe.utils.getCheckOption = function(check, ruleID, options) {
    var ruleCheckOption = ((options.rules && options.rules[ruleID] || {}).checks || {})[check.id];
    var checkOption = (options.checks || {})[check.id];
    var enabled = check.enabled;
    var opts = check.options;
    if (checkOption) {
      if (checkOption.hasOwnProperty('enabled')) {
        enabled = checkOption.enabled;
      }
      if (checkOption.hasOwnProperty('options')) {
        opts = checkOption.options;
      }
    }
    if (ruleCheckOption) {
      if (ruleCheckOption.hasOwnProperty('enabled')) {
        enabled = ruleCheckOption.enabled;
      }
      if (ruleCheckOption.hasOwnProperty('options')) {
        opts = ruleCheckOption.options;
      }
    }
    return {
      enabled: enabled,
      options: opts,
      absolutePaths: options.absolutePaths
    };
  };
  'use strict';
  var _slicedToArray = function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) {
            break;
          }
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i['return']) {
            _i['return']();
          }
        } finally {
          if (_d) {
            throw _e;
          }
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();
  function isMostlyNumbers() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return str.length !== 0 && (str.match(/[0-9]/g) || '').length >= str.length / 2;
  }
  function splitString(str, splitIndex) {
    return [ str.substring(0, splitIndex), str.substring(splitIndex) ];
  }
  function uriParser(url) {
    var original = url;
    var protocol = '', domain = '', port = '', path = '', query = '', hash = '';
    if (url.includes('#')) {
      var _splitString = splitString(url, url.indexOf('#'));
      var _splitString2 = _slicedToArray(_splitString, 2);
      url = _splitString2[0];
      hash = _splitString2[1];
    }
    if (url.includes('?')) {
      var _splitString3 = splitString(url, url.indexOf('?'));
      var _splitString4 = _slicedToArray(_splitString3, 2);
      url = _splitString4[0];
      query = _splitString4[1];
    }
    if (url.includes('://')) {
      var _url$split = url.split('://');
      var _url$split2 = _slicedToArray(_url$split, 2);
      protocol = _url$split2[0];
      url = _url$split2[1];
      var _splitString5 = splitString(url, url.indexOf('/'));
      var _splitString6 = _slicedToArray(_splitString5, 2);
      domain = _splitString6[0];
      url = _splitString6[1];
    } else if (url.substr(0, 2) === '//') {
      url = url.substr(2);
      var _splitString7 = splitString(url, url.indexOf('/'));
      var _splitString8 = _slicedToArray(_splitString7, 2);
      domain = _splitString8[0];
      url = _splitString8[1];
    }
    if (domain.substr(0, 4) === 'www.') {
      domain = domain.substr(4);
    }
    if (domain && domain.includes(':')) {
      var _splitString9 = splitString(domain, domain.indexOf(':'));
      var _splitString10 = _slicedToArray(_splitString9, 2);
      domain = _splitString10[0];
      port = _splitString10[1];
    }
    path = url;
    return {
      original: original,
      protocol: protocol,
      domain: domain,
      port: port,
      path: path,
      query: query,
      hash: hash
    };
  }
  axe.utils.getFriendlyUriEnd = function getFriendlyUriEnd() {
    var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (uri.length <= 1 || uri.substr(0, 5) === 'data:' || uri.substr(0, 11) === 'javascript:' || uri.includes('?')) {
      return;
    }
    var currentDomain = options.currentDomain, _options$maxLength = options.maxLength, maxLength = _options$maxLength === undefined ? 25 : _options$maxLength;
    var _uriParser = uriParser(uri), path = _uriParser.path, domain = _uriParser.domain, hash = _uriParser.hash;
    var pathEnd = path.substr(path.substr(0, path.length - 2).lastIndexOf('/') + 1);
    if (hash) {
      if (pathEnd && (pathEnd + hash).length <= maxLength) {
        return pathEnd + hash;
      } else if (pathEnd.length < 2 && hash.length > 2 && hash.length <= maxLength) {
        return hash;
      } else {
        return;
      }
    } else if (domain && domain.length < maxLength && path.length <= 1) {
      return domain + path;
    }
    if (path === '/' + pathEnd && domain && currentDomain && domain !== currentDomain && (domain + path).length <= maxLength) {
      return domain + path;
    }
    var lastDotIndex = pathEnd.lastIndexOf('.');
    if ((lastDotIndex === -1 || lastDotIndex > 1) && (lastDotIndex !== -1 || pathEnd.length > 2) && pathEnd.length <= maxLength && !pathEnd.match(/index(\.[a-zA-Z]{2-4})?/) && !isMostlyNumbers(pathEnd)) {
      return pathEnd;
    }
  };
  'use strict';
  var escapeSelector = axe.utils.escapeSelector;
  var isXHTML = void 0;
  var ignoredAttributes = [ 'class', 'style', 'id', 'selected', 'checked', 'disabled', 'tabindex', 'aria-checked', 'aria-selected', 'aria-invalid', 'aria-activedescendant', 'aria-busy', 'aria-disabled', 'aria-expanded', 'aria-grabbed', 'aria-pressed', 'aria-valuenow' ];
  var MAXATTRIBUTELENGTH = 31;
  function getAttributeNameValue(node, at) {
    var name = at.name;
    var atnv = void 0;
    if (name.indexOf('href') !== -1 || name.indexOf('src') !== -1) {
      var friendly = axe.utils.getFriendlyUriEnd(node.getAttribute(name));
      if (friendly) {
        var value = encodeURI(friendly);
        if (value) {
          atnv = escapeSelector(at.name) + '$="' + value + '"';
        } else {
          return;
        }
      } else {
        atnv = escapeSelector(at.name) + '="' + node.getAttribute(name) + '"';
      }
    } else {
      atnv = escapeSelector(name) + '="' + escapeSelector(at.value) + '"';
    }
    return atnv;
  }
  function countSort(a, b) {
    return a.count < b.count ? -1 : a.count === b.count ? 0 : 1;
  }
  function filterAttributes(at) {
    return !ignoredAttributes.includes(at.name) && at.name.indexOf(':') === -1 && (!at.value || at.value.length < MAXATTRIBUTELENGTH);
  }
  axe.utils.getSelectorData = function(domTree) {
    var data = {
      classes: {},
      tags: {},
      attributes: {}
    };
    domTree = Array.isArray(domTree) ? domTree : [ domTree ];
    var currentLevel = domTree.slice();
    var stack = [];
    var _loop = function _loop() {
      var current = currentLevel.pop();
      var node = current.actualNode;
      if (!!node.querySelectorAll) {
        var tag = node.nodeName;
        if (data.tags[tag]) {
          data.tags[tag]++;
        } else {
          data.tags[tag] = 1;
        }
        if (node.classList) {
          Array.from(node.classList).forEach(function(cl) {
            var ind = escapeSelector(cl);
            if (data.classes[ind]) {
              data.classes[ind]++;
            } else {
              data.classes[ind] = 1;
            }
          });
        }
        if (node.attributes) {
          Array.from(node.attributes).filter(filterAttributes).forEach(function(at) {
            var atnv = getAttributeNameValue(node, at);
            if (atnv) {
              if (data.attributes[atnv]) {
                data.attributes[atnv]++;
              } else {
                data.attributes[atnv] = 1;
              }
            }
          });
        }
      }
      if (current.children.length) {
        stack.push(currentLevel);
        currentLevel = current.children.slice();
      }
      while (!currentLevel.length && stack.length) {
        currentLevel = stack.pop();
      }
    };
    while (currentLevel.length) {
      _loop();
    }
    return data;
  };
  function uncommonClasses(node, selectorData) {
    var retVal = [];
    var classData = selectorData.classes;
    var tagData = selectorData.tags;
    if (node.classList) {
      Array.from(node.classList).forEach(function(cl) {
        var ind = escapeSelector(cl);
        if (classData[ind] < tagData[node.nodeName]) {
          retVal.push({
            name: ind,
            count: classData[ind],
            species: 'class'
          });
        }
      });
    }
    return retVal.sort(countSort);
  }
  function getNthChildString(elm, selector) {
    var siblings = elm.parentNode && Array.from(elm.parentNode.children || '') || [];
    var hasMatchingSiblings = siblings.find(function(sibling) {
      return sibling !== elm && axe.utils.matchesSelector(sibling, selector);
    });
    if (hasMatchingSiblings) {
      var nthChild = 1 + siblings.indexOf(elm);
      return ':nth-child(' + nthChild + ')';
    } else {
      return '';
    }
  }
  function getElmId(elm) {
    if (!elm.getAttribute('id')) {
      return;
    }
    var doc = elm.getRootNode && elm.getRootNode() || document;
    var id = '#' + escapeSelector(elm.getAttribute('id') || '');
    if (!id.match(/player_uid_/) && doc.querySelectorAll(id).length === 1) {
      return id;
    }
  }
  function getBaseSelector(elm) {
    if (typeof isXHTML === 'undefined') {
      isXHTML = axe.utils.isXHTML(document);
    }
    return escapeSelector(isXHTML ? elm.localName : elm.nodeName.toLowerCase());
  }
  function uncommonAttributes(node, selectorData) {
    var retVal = [];
    var attData = selectorData.attributes;
    var tagData = selectorData.tags;
    if (node.attributes) {
      Array.from(node.attributes).filter(filterAttributes).forEach(function(at) {
        var atnv = getAttributeNameValue(node, at);
        if (atnv && attData[atnv] < tagData[node.nodeName]) {
          retVal.push({
            name: atnv,
            count: attData[atnv],
            species: 'attribute'
          });
        }
      });
    }
    return retVal.sort(countSort);
  }
  function getThreeLeastCommonFeatures(elm, selectorData) {
    var selector = '';
    var features = void 0;
    var clss = uncommonClasses(elm, selectorData);
    var atts = uncommonAttributes(elm, selectorData);
    if (clss.length && clss[0].count === 1) {
      features = [ clss[0] ];
    } else if (atts.length && atts[0].count === 1) {
      features = [ atts[0] ];
      selector = getBaseSelector(elm);
    } else {
      features = clss.concat(atts);
      features.sort(countSort);
      features = features.slice(0, 3);
      if (!features.some(function(feat) {
        return feat.species === 'class';
      })) {
        selector = getBaseSelector(elm);
      } else {
        features.sort(function(a, b) {
          return a.species !== b.species && a.species === 'class' ? -1 : a.species === b.species ? 0 : 1;
        });
      }
    }
    return selector += features.reduce(function(val, feat) {
      switch (feat.species) {
       case 'class':
        return val + '.' + feat.name;

       case 'attribute':
        return val + '[' + feat.name + ']';
      }
      return val;
    }, '');
  }
  function generateSelector(elm, options, doc) {
    if (!axe._selectorData) {
      throw new Error('Expect axe._selectorData to be set up');
    }
    var _options$toRoot = options.toRoot, toRoot = _options$toRoot === undefined ? false : _options$toRoot;
    var selector = void 0;
    var similar = void 0;
    do {
      var features = getElmId(elm);
      if (!features) {
        features = getThreeLeastCommonFeatures(elm, axe._selectorData);
        features += getNthChildString(elm, features);
      }
      if (selector) {
        selector = features + ' > ' + selector;
      } else {
        selector = features;
      }
      if (!similar) {
        similar = Array.from(doc.querySelectorAll(selector));
      } else {
        similar = similar.filter(function(item) {
          return axe.utils.matchesSelector(item, selector);
        });
      }
      elm = elm.parentElement;
    } while ((similar.length > 1 || toRoot) && elm && elm.nodeType !== 11);
    if (similar.length === 1) {
      return selector;
    } else if (selector.indexOf(' > ') !== -1) {
      return ':root' + selector.substring(selector.indexOf(' > '));
    }
    return ':root';
  }
  axe.utils.getSelector = function createUniqueSelector(elm) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!elm) {
      return '';
    }
    var doc = elm.getRootNode && elm.getRootNode() || document;
    if (doc.nodeType === 11) {
      var stack = [];
      while (doc.nodeType === 11) {
        stack.push({
          elm: elm,
          doc: doc
        });
        elm = doc.host;
        doc = elm.getRootNode();
      }
      stack.push({
        elm: elm,
        doc: doc
      });
      return stack.reverse().map(function(comp) {
        return generateSelector(comp.elm, options, comp.doc);
      });
    } else {
      return generateSelector(elm, options, doc);
    }
  };
  'use strict';
  function getXPathArray(node, path) {
    var sibling, count;
    if (!node) {
      return [];
    }
    if (!path && node.nodeType === 9) {
      path = [ {
        str: 'html'
      } ];
      return path;
    }
    path = path || [];
    if (node.parentNode && node.parentNode !== node) {
      path = getXPathArray(node.parentNode, path);
    }
    if (node.previousSibling) {
      count = 1;
      sibling = node.previousSibling;
      do {
        if (sibling.nodeType === 1 && sibling.nodeName === node.nodeName) {
          count++;
        }
        sibling = sibling.previousSibling;
      } while (sibling);
      if (count === 1) {
        count = null;
      }
    } else if (node.nextSibling) {
      sibling = node.nextSibling;
      do {
        if (sibling.nodeType === 1 && sibling.nodeName === node.nodeName) {
          count = 1;
          sibling = null;
        } else {
          count = null;
          sibling = sibling.previousSibling;
        }
      } while (sibling);
    }
    if (node.nodeType === 1) {
      var element = {};
      element.str = node.nodeName.toLowerCase();
      var id = node.getAttribute && axe.utils.escapeSelector(node.getAttribute('id'));
      if (id && node.ownerDocument.querySelectorAll('#' + id).length === 1) {
        element.id = node.getAttribute('id');
      }
      if (count > 1) {
        element.count = count;
      }
      path.push(element);
    }
    return path;
  }
  function xpathToString(xpathArray) {
    return xpathArray.reduce(function(str, elm) {
      if (elm.id) {
        return '/' + elm.str + '[@id=\'' + elm.id + '\']';
      } else {
        return str + ('/' + elm.str) + (elm.count > 0 ? '[' + elm.count + ']' : '');
      }
    }, '');
  }
  axe.utils.getXpath = function getXpath(node) {
    var xpathArray = getXPathArray(node);
    return xpathToString(xpathArray);
  };
  'use strict';
  var styleSheet;
  function injectStyle(style) {
    'use strict';
    if (styleSheet && styleSheet.parentNode) {
      if (styleSheet.styleSheet === undefined) {
        styleSheet.appendChild(document.createTextNode(style));
      } else {
        styleSheet.styleSheet.cssText += style;
      }
      return styleSheet;
    }
    if (!style) {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    if (styleSheet.styleSheet === undefined) {
      styleSheet.appendChild(document.createTextNode(style));
    } else {
      styleSheet.styleSheet.cssText = style;
    }
    head.appendChild(styleSheet);
    return styleSheet;
  }
  axe.utils.injectStyle = injectStyle;
  'use strict';
  axe.utils.isHidden = function isHidden(el, recursed) {
    'use strict';
    var parent;
    if (el.nodeType === 9) {
      return false;
    }
    if (el.nodeType === 11) {
      el = el.host;
    }
    var style = window.getComputedStyle(el, null);
    if (!style || !el.parentNode || style.getPropertyValue('display') === 'none' || !recursed && style.getPropertyValue('visibility') === 'hidden' || el.getAttribute('aria-hidden') === 'true') {
      return true;
    }
    parent = el.assignedSlot ? el.assignedSlot : el.parentNode;
    return axe.utils.isHidden(parent, true);
  };
  'use strict';
  var possibleShadowRoots = [ 'article', 'aside', 'blockquote', 'body', 'div', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'main', 'nav', 'p', 'section', 'span' ];
  axe.utils.isShadowRoot = function isShadowRoot(node) {
    var nodeName = node.nodeName.toLowerCase();
    if (node.shadowRoot) {
      if (/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(nodeName) || possibleShadowRoots.includes(nodeName)) {
        return true;
      }
    }
    return false;
  };
  'use strict';
  axe.utils.isXHTML = function(doc) {
    'use strict';
    if (!doc.createElement) {
      return false;
    }
    return doc.createElement('A').localName === 'A';
  };
  'use strict';
  function pushFrame(resultSet, options, frameElement, frameSelector) {
    'use strict';
    var frameXpath = axe.utils.getXpath(frameElement);
    var frameSpec = {
      element: frameElement,
      selector: frameSelector,
      xpath: frameXpath
    };
    resultSet.forEach(function(res) {
      res.node = axe.utils.DqElement.fromFrame(res.node, options, frameSpec);
      var checks = axe.utils.getAllChecks(res);
      if (checks.length) {
        checks.forEach(function(check) {
          check.relatedNodes = check.relatedNodes.map(function(node) {
            return axe.utils.DqElement.fromFrame(node, options, frameSpec);
          });
        });
      }
    });
  }
  function spliceNodes(target, to) {
    'use strict';
    var firstFromFrame = to[0].node, sorterResult, t;
    for (var i = 0, l = target.length; i < l; i++) {
      t = target[i].node;
      sorterResult = axe.utils.nodeSorter({
        actualNode: t.element
      }, {
        actualNode: firstFromFrame.element
      });
      if (sorterResult > 0 || sorterResult === 0 && firstFromFrame.selector.length < t.selector.length) {
        target.splice.apply(target, [ i, 0 ].concat(to));
        return;
      }
    }
    target.push.apply(target, to);
  }
  function normalizeResult(result) {
    'use strict';
    if (!result || !result.results) {
      return null;
    }
    if (!Array.isArray(result.results)) {
      return [ result.results ];
    }
    if (!result.results.length) {
      return null;
    }
    return result.results;
  }
  axe.utils.mergeResults = function mergeResults(frameResults, options) {
    'use strict';
    var result = [];
    frameResults.forEach(function(frameResult) {
      var results = normalizeResult(frameResult);
      if (!results || !results.length) {
        return;
      }
      results.forEach(function(ruleResult) {
        if (ruleResult.nodes && frameResult.frame) {
          pushFrame(ruleResult.nodes, options, frameResult.frameElement, frameResult.frame);
        }
        var res = axe.utils.findBy(result, 'id', ruleResult.id);
        if (!res) {
          result.push(ruleResult);
        } else {
          if (ruleResult.nodes.length) {
            spliceNodes(res.nodes, ruleResult.nodes);
          }
        }
      });
    });
    return result;
  };
  'use strict';
  axe.utils.nodeSorter = function nodeSorter(a, b) {
    'use strict';
    if (a.actualNode === b.actualNode) {
      return 0;
    }
    if (a.actualNode.compareDocumentPosition(b.actualNode) & 4) {
      return -1;
    }
    return 1;
  };
  'use strict';
  utils.performanceTimer = function() {
    'use strict';
    function now() {
      if (window.performance && window.performance) {
        return window.performance.now();
      }
    }
    var originalTime = null;
    var lastRecordedTime = now();
    return {
      start: function start() {
        this.mark('mark_axe_start');
      },
      end: function end() {
        this.mark('mark_axe_end');
        this.measure('axe', 'mark_axe_start', 'mark_axe_end');
        this.logMeasures('axe');
      },
      auditStart: function auditStart() {
        this.mark('mark_audit_start');
      },
      auditEnd: function auditEnd() {
        this.mark('mark_audit_end');
        this.measure('audit_start_to_end', 'mark_audit_start', 'mark_audit_end');
        this.logMeasures();
      },
      mark: function mark(markName) {
        if (window.performance && window.performance.mark !== undefined) {
          window.performance.mark(markName);
        }
      },
      measure: function measure(measureName, startMark, endMark) {
        if (window.performance && window.performance.measure !== undefined) {
          window.performance.measure(measureName, startMark, endMark);
        }
      },
      logMeasures: function logMeasures(measureName) {
        function log(req) {
          axe.log('Measure ' + req.name + ' took ' + req.duration + 'ms');
        }
        if (window.performance && window.performance.getEntriesByType !== undefined) {
          var measures = window.performance.getEntriesByType('measure');
          for (var i = 0; i < measures.length; ++i) {
            var req = measures[i];
            if (req.name === measureName) {
              log(req);
              return;
            }
            log(req);
          }
        }
      },
      timeElapsed: function timeElapsed() {
        return now() - lastRecordedTime;
      },
      reset: function reset() {
        if (!originalTime) {
          originalTime = now();
        }
        lastRecordedTime = now();
      }
    };
  }();
  'use strict';
  if (typeof Object.assign !== 'function') {
    (function() {
      Object.assign = function(target) {
        'use strict';
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source !== undefined && source !== null) {
            for (var nextKey in source) {
              if (source.hasOwnProperty(nextKey)) {
                output[nextKey] = source[nextKey];
              }
            }
          }
        }
        return output;
      };
    })();
  }
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        if (this === null) {
          throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
        return undefined;
      }
    });
  }
  axe.utils.pollyfillElementsFromPoint = function() {
    if (document.elementsFromPoint) {
      return document.elementsFromPoint;
    }
    if (document.msElementsFromPoint) {
      return document.msElementsFromPoint;
    }
    var usePointer = function() {
      var element = document.createElement('x');
      element.style.cssText = 'pointer-events:auto';
      return element.style.pointerEvents === 'auto';
    }();
    var cssProp = usePointer ? 'pointer-events' : 'visibility';
    var cssDisableVal = usePointer ? 'none' : 'hidden';
    var style = document.createElement('style');
    style.innerHTML = usePointer ? '* { pointer-events: all }' : '* { visibility: visible }';
    return function(x, y) {
      var current, i, d;
      var elements = [];
      var previousPointerEvents = [];
      document.head.appendChild(style);
      while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1) {
        elements.push(current);
        previousPointerEvents.push({
          value: current.style.getPropertyValue(cssProp),
          priority: current.style.getPropertyPriority(cssProp)
        });
        current.style.setProperty(cssProp, cssDisableVal, 'important');
      }
      if (elements.indexOf(document.documentElement) < elements.length - 1) {
        elements.splice(elements.indexOf(document.documentElement), 1);
        elements.push(document.documentElement);
      }
      for (i = previousPointerEvents.length; !!(d = previousPointerEvents[--i]); ) {
        elements[i].style.setProperty(cssProp, d.value ? d.value : '', d.priority);
      }
      document.head.removeChild(style);
      return elements;
    };
  };
  if (typeof window.addEventListener === 'function') {
    document.elementsFromPoint = axe.utils.pollyfillElementsFromPoint();
  }
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement) {
        'use strict';
        var O = Object(this);
        var len = parseInt(O.length, 10) || 0;
        if (len === 0) {
          return false;
        }
        var n = parseInt(arguments[1], 10) || 0;
        var k;
        if (n >= 0) {
          k = n;
        } else {
          k = len + n;
          if (k < 0) {
            k = 0;
          }
        }
        var currentElement;
        while (k < len) {
          currentElement = O[k];
          if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }
  if (!Array.prototype.some) {
    Object.defineProperty(Array.prototype, 'some', {
      value: function value(fun) {
        'use strict';
        if (this == null) {
          throw new TypeError('Array.prototype.some called on null or undefined');
        }
        if (typeof fun !== 'function') {
          throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
          if (i in t && fun.call(thisArg, t[i], i, t)) {
            return true;
          }
        }
        return false;
      }
    });
  }
  if (!Array.from) {
    Object.defineProperty(Array, 'from', {
      value: function() {
        var toStr = Object.prototype.toString;
        var isCallable = function isCallable(fn) {
          return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function toInteger(value) {
          var number = Number(value);
          if (isNaN(number)) {
            return 0;
          }
          if (number === 0 || !isFinite(number)) {
            return number;
          }
          return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function toLength(value) {
          var len = toInteger(value);
          return Math.min(Math.max(len, 0), maxSafeInteger);
        };
        return function from(arrayLike) {
          var C = this;
          var items = Object(arrayLike);
          if (arrayLike == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          }
          var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
          var T;
          if (typeof mapFn !== 'undefined') {
            if (!isCallable(mapFn)) {
              throw new TypeError('Array.from: when provided, the second argument must be a function');
            }
            if (arguments.length > 2) {
              T = arguments[2];
            }
          }
          var len = toLength(items.length);
          var A = isCallable(C) ? Object(new C(len)) : new Array(len);
          var k = 0;
          var kValue;
          while (k < len) {
            kValue = items[k];
            if (mapFn) {
              A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }
            k += 1;
          }
          A.length = len;
          return A;
        };
      }()
    });
  }
  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }
      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  function getIncompleteReason(checkData, messages) {
    function getDefaultMsg(messages) {
      if (messages.incomplete && messages.incomplete.default) {
        return messages.incomplete.default;
      } else {
        return helpers.incompleteFallbackMessage();
      }
    }
    if (checkData && checkData.missingData) {
      try {
        var msg = messages.incomplete[checkData.missingData[0].reason];
        if (!msg) {
          throw new Error();
        }
        return msg;
      } catch (e) {
        if (typeof checkData.missingData === 'string') {
          return messages.incomplete[checkData.missingData];
        } else {
          return getDefaultMsg(messages);
        }
      }
    } else {
      return getDefaultMsg(messages);
    }
  }
  function extender(checksData, shouldBeTrue) {
    'use strict';
    return function(check) {
      var sourceData = checksData[check.id] || {};
      var messages = sourceData.messages || {};
      var data = Object.assign({}, sourceData);
      delete data.messages;
      if (check.result === undefined) {
        if (_typeof(messages.incomplete) === 'object') {
          data.message = function() {
            return getIncompleteReason(check.data, messages);
          };
        } else {
          data.message = messages.incomplete;
        }
      } else {
        data.message = check.result === shouldBeTrue ? messages.pass : messages.fail;
      }
      axe.utils.extendMetaData(check, data);
    };
  }
  axe.utils.publishMetaData = function(ruleResult) {
    'use strict';
    var checksData = axe._audit.data.checks || {};
    var rulesData = axe._audit.data.rules || {};
    var rule = axe.utils.findBy(axe._audit.rules, 'id', ruleResult.id) || {};
    ruleResult.tags = axe.utils.clone(rule.tags || []);
    var shouldBeTrue = extender(checksData, true);
    var shouldBeFalse = extender(checksData, false);
    ruleResult.nodes.forEach(function(detail) {
      detail.any.forEach(shouldBeTrue);
      detail.all.forEach(shouldBeTrue);
      detail.none.forEach(shouldBeFalse);
    });
    axe.utils.extendMetaData(ruleResult, axe.utils.clone(rulesData[ruleResult.id] || {}));
  };
  'use strict';
  var convertExpressions = function convertExpressions() {};
  var matchExpressions = function matchExpressions() {};
  function matchesTag(node, exp) {
    return node.nodeType === 1 && (exp.tag === '*' || node.nodeName.toLowerCase() === exp.tag);
  }
  function matchesClasses(node, exp) {
    return !exp.classes || exp.classes.reduce(function(result, cl) {
      return result && node.className && node.className.match(cl.regexp);
    }, true);
  }
  function matchesAttributes(node, exp) {
    return !exp.attributes || exp.attributes.reduce(function(result, att) {
      var nodeAtt = node.getAttribute(att.key);
      return result && nodeAtt !== null && (!att.value || att.test(nodeAtt));
    }, true);
  }
  function matchesId(node, exp) {
    return !exp.id || node.id === exp.id;
  }
  function matchesPseudos(target, exp) {
    if (!exp.pseudos || exp.pseudos.reduce(function(result, pseudo) {
      if (pseudo.name === 'not') {
        return result && !matchExpressions([ target ], pseudo.expressions, false).length;
      }
      throw new Error('the pseudo selector ' + pseudo.name + ' has not yet been implemented');
    }, true)) {
      return true;
    }
    return false;
  }
  var escapeRegExp = function() {
    /*! Credit: XRegExp 0.6.1 (c) 2007-2008 Steven Levithan <http://stevenlevithan.com/regex/xregexp/> MIT License */
    var from = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g;
    var to = '\\';
    return function(string) {
      return string.replace(from, to);
    };
  }();
  var reUnescape = /\\/g;
  function convertAttributes(atts) {
    /*! Credit Mootools Copyright Mootools, MIT License */
    if (!atts) {
      return;
    }
    return atts.map(function(att) {
      var attributeKey = att.name.replace(reUnescape, '');
      var attributeValue = (att.value || '').replace(reUnescape, '');
      var test, regexp;
      switch (att.operator) {
       case '^=':
        regexp = new RegExp('^' + escapeRegExp(attributeValue));
        break;

       case '$=':
        regexp = new RegExp(escapeRegExp(attributeValue) + '$');
        break;

       case '~=':
        regexp = new RegExp('(^|\\s)' + escapeRegExp(attributeValue) + '(\\s|$)');
        break;

       case '|=':
        regexp = new RegExp('^' + escapeRegExp(attributeValue) + '(-|$)');
        break;

       case '=':
        test = function test(value) {
          return attributeValue === value;
        };
        break;

       case '*=':
        test = function test(value) {
          return value && value.includes(attributeValue);
        };
        break;

       case '!=':
        test = function test(value) {
          return attributeValue !== value;
        };
        break;

       default:
        test = function test(value) {
          return !!value;
        };
      }
      if (attributeValue === '' && /^[*$^]=$/.test(att.operator)) {
        test = function test() {
          return false;
        };
      }
      if (!test) {
        test = function test(value) {
          return value && regexp.test(value);
        };
      }
      return {
        key: attributeKey,
        value: attributeValue,
        test: test
      };
    });
  }
  function convertClasses(classes) {
    if (!classes) {
      return;
    }
    return classes.map(function(className) {
      className = className.replace(reUnescape, '');
      return {
        value: className,
        regexp: new RegExp('(^|\\s)' + escapeRegExp(className) + '(\\s|$)')
      };
    });
  }
  function convertPseudos(pseudos) {
    if (!pseudos) {
      return;
    }
    return pseudos.map(function(p) {
      var expressions;
      if (p.name === 'not') {
        expressions = axe.utils.cssParser.parse(p.value);
        expressions = expressions.selectors ? expressions.selectors : [ expressions ];
        expressions = convertExpressions(expressions);
      }
      return {
        name: p.name,
        expressions: expressions,
        value: p.value
      };
    });
  }
  convertExpressions = function convertExpressions(expressions) {
    return expressions.map(function(exp) {
      var newExp = [];
      var rule = exp.rule;
      while (rule) {
        newExp.push({
          tag: rule.tagName ? rule.tagName.toLowerCase() : '*',
          combinator: rule.nestingOperator ? rule.nestingOperator : ' ',
          id: rule.id,
          attributes: convertAttributes(rule.attrs),
          classes: convertClasses(rule.classNames),
          pseudos: convertPseudos(rule.pseudos)
        });
        rule = rule.rule;
      }
      return newExp;
    });
  };
  function createLocalVariables(nodes, anyLevel, thisLevel, parentShadowId) {
    var retVal = {
      nodes: nodes.slice(),
      anyLevel: anyLevel,
      thisLevel: thisLevel,
      parentShadowId: parentShadowId
    };
    retVal.nodes.reverse();
    return retVal;
  }
  function matchesSelector(node, exp) {
    return matchesTag(node.actualNode, exp[0]) && matchesClasses(node.actualNode, exp[0]) && matchesAttributes(node.actualNode, exp[0]) && matchesId(node.actualNode, exp[0]) && matchesPseudos(node, exp[0]);
  }
  matchExpressions = function matchExpressions(domTree, expressions, recurse, filter) {
    var stack = [];
    var nodes = Array.isArray(domTree) ? domTree : [ domTree ];
    var currentLevel = createLocalVariables(nodes, expressions, [], domTree[0].shadowId);
    var result = [];
    while (currentLevel.nodes.length) {
      var node = currentLevel.nodes.pop();
      var childOnly = [];
      var childAny = [];
      var combined = currentLevel.anyLevel.slice().concat(currentLevel.thisLevel);
      var added = false;
      for (var i = 0; i < combined.length; i++) {
        var exp = combined[i];
        if (matchesSelector(node, exp) && (!exp[0].id || node.shadowId === currentLevel.parentShadowId)) {
          if (exp.length === 1) {
            if (!added && (!filter || filter(node))) {
              result.push(node);
              added = true;
            }
          } else {
            var rest = exp.slice(1);
            if ([ ' ', '>' ].includes(rest[0].combinator) === false) {
              throw new Error('axe.utils.querySelectorAll does not support the combinator: ' + exp[1].combinator);
            }
            if (rest[0].combinator === '>') {
              childOnly.push(rest);
            } else {
              childAny.push(rest);
            }
          }
        }
        if (currentLevel.anyLevel.includes(exp) && (!exp[0].id || node.shadowId === currentLevel.parentShadowId)) {
          childAny.push(exp);
        }
      }
      if (node.children && node.children.length && recurse) {
        stack.push(currentLevel);
        currentLevel = createLocalVariables(node.children, childAny, childOnly, node.shadowId);
      }
      while (!currentLevel.nodes.length && stack.length) {
        currentLevel = stack.pop();
      }
    }
    return result;
  };
  axe.utils.querySelectorAll = function(domTree, selector) {
    return axe.utils.querySelectorAllFilter(domTree, selector);
  };
  axe.utils.querySelectorAllFilter = function(domTree, selector, filter) {
    domTree = Array.isArray(domTree) ? domTree : [ domTree ];
    var expressions = axe.utils.cssParser.parse(selector);
    expressions = expressions.selectors ? expressions.selectors : [ expressions ];
    expressions = convertExpressions(expressions);
    return matchExpressions(domTree, expressions, true, filter);
  };
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  (function() {
    'use strict';
    function noop() {}
    function funcGuard(f) {
      if (typeof f !== 'function') {
        throw new TypeError('Queue methods require functions as arguments');
      }
    }
    function queue() {
      var tasks = [];
      var started = 0;
      var remaining = 0;
      var completeQueue = noop;
      var complete = false;
      var err;
      var defaultFail = function defaultFail(e) {
        err = e;
        setTimeout(function() {
          if (err !== undefined && err !== null) {
            axe.log('Uncaught error (of queue)', err);
          }
        }, 1);
      };
      var failed = defaultFail;
      function createResolve(i) {
        return function(r) {
          tasks[i] = r;
          remaining -= 1;
          if (!remaining && completeQueue !== noop) {
            complete = true;
            completeQueue(tasks);
          }
        };
      }
      function abort(msg) {
        completeQueue = noop;
        failed(msg);
        return tasks;
      }
      function pop() {
        var length = tasks.length;
        for (;started < length; started++) {
          var task = tasks[started];
          try {
            task.call(null, createResolve(started), abort);
          } catch (e) {
            abort(e);
          }
        }
      }
      var q = {
        defer: function defer(fn) {
          if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === 'object' && fn.then && fn.catch) {
            var defer = fn;
            fn = function fn(resolve, reject) {
              defer.then(resolve).catch(reject);
            };
          }
          funcGuard(fn);
          if (err !== undefined) {
            return;
          } else if (complete) {
            throw new Error('Queue already completed');
          }
          tasks.push(fn);
          ++remaining;
          pop();
          return q;
        },
        then: function then(fn) {
          funcGuard(fn);
          if (completeQueue !== noop) {
            throw new Error('queue `then` already set');
          }
          if (!err) {
            completeQueue = fn;
            if (!remaining) {
              complete = true;
              completeQueue(tasks);
            }
          }
          return q;
        },
        catch: function _catch(fn) {
          funcGuard(fn);
          if (failed !== defaultFail) {
            throw new Error('queue `catch` already set');
          }
          if (!err) {
            failed = fn;
          } else {
            fn(err);
            err = null;
          }
          return q;
        },
        abort: abort
      };
      return q;
    }
    axe.utils.queue = queue;
  })();
  'use strict';
  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
  };
  (function(exports) {
    'use strict';
    var messages = {}, subscribers = {}, errorTypes = Object.freeze([ 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError' ]);
    function _getSource() {
      var application = 'axeAPI', version = '', src;
      if (typeof axe !== 'undefined' && axe._audit && axe._audit.application) {
        application = axe._audit.application;
      }
      if (typeof axe !== 'undefined') {
        version = axe.version;
      }
      src = application + '.' + version;
      return src;
    }
    function verify(postedMessage) {
      if ((typeof postedMessage === 'undefined' ? 'undefined' : _typeof(postedMessage)) === 'object' && typeof postedMessage.uuid === 'string' && postedMessage._respondable === true) {
        var messageSource = _getSource();
        return postedMessage._source === messageSource || postedMessage._source === 'axeAPI.x.y.z' || messageSource === 'axeAPI.x.y.z';
      }
      return false;
    }
    function post(win, topic, message, uuid, keepalive, callback) {
      var error;
      if (message instanceof Error) {
        error = {
          name: message.name,
          message: message.message,
          stack: message.stack
        };
        message = undefined;
      }
      var data = {
        uuid: uuid,
        topic: topic,
        message: message,
        error: error,
        _respondable: true,
        _source: _getSource(),
        _keepalive: keepalive
      };
      if (typeof callback === 'function') {
        messages[uuid] = callback;
      }
      win.postMessage(JSON.stringify(data), '*');
    }
    function respondable(win, topic, message, keepalive, callback) {
      var id = uuid.v1();
      post(win, topic, message, id, keepalive, callback);
    }
    respondable.subscribe = function(topic, callback) {
      subscribers[topic] = callback;
    };
    respondable.isInFrame = function(win) {
      win = win || window;
      return !!win.frameElement;
    };
    function createResponder(source, topic, uuid) {
      return function(message, keepalive, callback) {
        post(source, topic, message, uuid, keepalive, callback);
      };
    }
    function publish(source, data, keepalive) {
      var topic = data.topic;
      var subscriber = subscribers[topic];
      if (subscriber) {
        var responder = createResponder(source, null, data.uuid);
        subscriber(data.message, keepalive, responder);
      }
    }
    function buildErrorObject(error) {
      var msg = error.message || 'Unknown error occurred';
      var errorName = errorTypes.includes(error.name) ? error.name : 'Error';
      var ErrConstructor = window[errorName] || Error;
      if (error.stack) {
        msg += '\n' + error.stack.replace(error.message, '');
      }
      return new ErrConstructor(msg);
    }
    function parseMessage(dataString) {
      var data;
      if (typeof dataString !== 'string') {
        return;
      }
      try {
        data = JSON.parse(dataString);
      } catch (ex) {}
      if (!verify(data)) {
        return;
      }
      if (_typeof(data.error) === 'object') {
        data.error = buildErrorObject(data.error);
      } else {
        data.error = undefined;
      }
      return data;
    }
    if (typeof window.addEventListener === 'function') {
      window.addEventListener('message', function(e) {
        var data = parseMessage(e.data);
        if (!data) {
          return;
        }
        var uuid = data.uuid;
        var keepalive = data._keepalive;
        var callback = messages[uuid];
        if (callback) {
          var result = data.error || data.message;
          var responder = createResponder(e.source, data.topic, uuid);
          callback(result, keepalive, responder);
          if (!keepalive) {
            delete messages[uuid];
          }
        }
        if (!data.error) {
          try {
            publish(e.source, data, keepalive);
          } catch (err) {
            post(e.source, data.topic, err, uuid, false);
          }
        }
      }, false);
    }
    exports.respondable = respondable;
  })(utils);
  'use strict';
  function matchTags(rule, runOnly) {
    'use strict';
    var include, exclude, matching;
    var defaultExclude = axe._audit && axe._audit.tagExclude ? axe._audit.tagExclude : [];
    if (runOnly.hasOwnProperty('include') || runOnly.hasOwnProperty('exclude')) {
      include = runOnly.include || [];
      include = Array.isArray(include) ? include : [ include ];
      exclude = runOnly.exclude || [];
      exclude = Array.isArray(exclude) ? exclude : [ exclude ];
      exclude = exclude.concat(defaultExclude.filter(function(tag) {
        return include.indexOf(tag) === -1;
      }));
    } else {
      include = Array.isArray(runOnly) ? runOnly : [ runOnly ];
      exclude = defaultExclude.filter(function(tag) {
        return include.indexOf(tag) === -1;
      });
    }
    matching = include.some(function(tag) {
      return rule.tags.indexOf(tag) !== -1;
    });
    if (matching || include.length === 0 && rule.enabled !== false) {
      return exclude.every(function(tag) {
        return rule.tags.indexOf(tag) === -1;
      });
    } else {
      return false;
    }
  }
  axe.utils.ruleShouldRun = function(rule, context, options) {
    'use strict';
    var runOnly = options.runOnly || {};
    var ruleOptions = (options.rules || {})[rule.id];
    if (rule.pageLevel && !context.page) {
      return false;
    } else if (runOnly.type === 'rule') {
      return runOnly.values.indexOf(rule.id) !== -1;
    } else if (ruleOptions && typeof ruleOptions.enabled === 'boolean') {
      return ruleOptions.enabled;
    } else if (runOnly.type === 'tag' && runOnly.values) {
      return matchTags(rule, runOnly.values);
    } else {
      return matchTags(rule, []);
    }
  };
  'use strict';
  function getScroll(elm) {
    var style = window.getComputedStyle(elm);
    var visibleOverflowY = style.getPropertyValue('overflow-y') === 'visible';
    var visibleOverflowX = style.getPropertyValue('overflow-x') === 'visible';
    if (!visibleOverflowY && elm.scrollHeight > elm.clientHeight || !visibleOverflowX && elm.scrollWidth > elm.clientWidth) {
      return {
        elm: elm,
        top: elm.scrollTop,
        left: elm.scrollLeft
      };
    }
  }
  function setScroll(elm, top, left) {
    if (elm === window) {
      return elm.scroll(top, left);
    } else {
      elm.scrollTop = top;
      elm.scrollLeft = left;
    }
  }
  function getElmScrollRecursive(root) {
    return Array.from(root.children).reduce(function(scrolls, elm) {
      var scroll = getScroll(elm);
      if (scroll) {
        scrolls.push(scroll);
      }
      return scrolls.concat(getElmScrollRecursive(elm));
    }, []);
  }
  axe.utils.getScrollState = function getScrollState() {
    var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    var root = win.document.documentElement;
    var windowScroll = [ win.pageXOffset !== undefined ? {
      elm: win,
      top: win.pageYOffset,
      left: win.pageXOffset
    } : {
      elm: root,
      top: root.scrollTop,
      left: root.scrollLeft
    } ];
    return windowScroll.concat(getElmScrollRecursive(document.body));
  };
  axe.utils.setScrollState = function setScrollState(scrollState) {
    scrollState.forEach(function(_ref) {
      var elm = _ref.elm, top = _ref.top, left = _ref.left;
      return setScroll(elm, top, left);
    });
  };
  'use strict';
  function getDeepest(collection) {
    'use strict';
    return collection.sort(function(a, b) {
      if (axe.utils.contains(a, b)) {
        return 1;
      }
      return -1;
    })[0];
  }
  function isNodeInContext(node, context) {
    'use strict';
    var include = context.include && getDeepest(context.include.filter(function(candidate) {
      return axe.utils.contains(candidate, node);
    }));
    var exclude = context.exclude && getDeepest(context.exclude.filter(function(candidate) {
      return axe.utils.contains(candidate, node);
    }));
    if (!exclude && include || exclude && axe.utils.contains(exclude, include)) {
      return true;
    }
    return false;
  }
  function pushNode(result, nodes) {
    'use strict';
    var temp;
    if (result.length === 0) {
      return nodes;
    }
    if (result.length < nodes.length) {
      temp = result;
      result = nodes;
      nodes = temp;
    }
    for (var i = 0, l = nodes.length; i < l; i++) {
      if (!result.includes(nodes[i])) {
        result.push(nodes[i]);
      }
    }
    return result;
  }
  function reduceIncludes(includes) {
    return includes.reduce(function(res, el) {
      if (!res.length || !res[res.length - 1].actualNode.contains(el.actualNode)) {
        res.push(el);
      }
      return res;
    }, []);
  }
  axe.utils.select = function select(selector, context) {
    'use strict';
    var result = [], candidate;
    if (axe._selectCache) {
      for (var j = 0, l = axe._selectCache.length; j < l; j++) {
        var item = axe._selectCache[j];
        if (item.selector === selector) {
          return item.result;
        }
      }
    }
    var curried = function(context) {
      return function(node) {
        return isNodeInContext(node, context);
      };
    }(context);
    var reducedIncludes = reduceIncludes(context.include);
    for (var i = 0; i < reducedIncludes.length; i++) {
      candidate = reducedIncludes[i];
      if (candidate.actualNode.nodeType === candidate.actualNode.ELEMENT_NODE && axe.utils.matchesSelector(candidate.actualNode, selector) && curried(candidate)) {
        result = pushNode(result, [ candidate ]);
      }
      result = pushNode(result, axe.utils.querySelectorAllFilter(candidate, selector, curried));
    }
    if (axe._selectCache) {
      axe._selectCache.push({
        selector: selector,
        result: result
      });
    }
    return result;
  };
  'use strict';
  axe.utils.toArray = function(thing) {
    'use strict';
    return Array.prototype.slice.call(thing);
  };
  axe.utils.uniqueArray = function(arr1, arr2) {
    return arr1.concat(arr2).filter(function(elem, pos, arr) {
      return arr.indexOf(elem) === pos;
    });
  };
  'use strict';
  var uuid;
  (function(_global) {
    var _rng;
    var _crypto = _global.crypto || _global.msCrypto;
    if (!_rng && _crypto && _crypto.getRandomValues) {
      var _rnds8 = new Uint8Array(16);
      _rng = function whatwgRNG() {
        _crypto.getRandomValues(_rnds8);
        return _rnds8;
      };
    }
    if (!_rng) {
      var _rnds = new Array(16);
      _rng = function _rng() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 3) === 0) {
            r = Math.random() * 4294967296;
          }
          _rnds[i] = r >>> ((i & 3) << 3) & 255;
        }
        return _rnds;
      };
    }
    var BufferClass = typeof _global.Buffer == 'function' ? _global.Buffer : Array;
    var _byteToHex = [];
    var _hexToByte = {};
    for (var i = 0; i < 256; i++) {
      _byteToHex[i] = (i + 256).toString(16).substr(1);
      _hexToByte[_byteToHex[i]] = i;
    }
    function parse(s, buf, offset) {
      var i = buf && offset || 0, ii = 0;
      buf = buf || [];
      s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
        if (ii < 16) {
          buf[i + ii++] = _hexToByte[oct];
        }
      });
      while (ii < 16) {
        buf[i + ii++] = 0;
      }
      return buf;
    }
    function unparse(buf, offset) {
      var i = offset || 0, bth = _byteToHex;
      return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
    }
    var _seedBytes = _rng();
    var _nodeId = [ _seedBytes[0] | 1, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5] ];
    var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 16383;
    var _lastMSecs = 0, _lastNSecs = 0;
    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || [];
      options = options || {};
      var clockseq = options.clockseq != null ? options.clockseq : _clockseq;
      var msecs = options.msecs != null ? options.msecs : new Date().getTime();
      var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;
      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq == null) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      var tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      var node = options.node || _nodeId;
      for (var n = 0; n < 6; n++) {
        b[i + n] = node[n];
      }
      return buf ? buf : unparse(b);
    }
    function v4(options, buf, offset) {
      var i = buf && offset || 0;
      if (typeof options == 'string') {
        buf = options == 'binary' ? new BufferClass(16) : null;
        options = null;
      }
      options = options || {};
      var rnds = options.random || (options.rng || _rng)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        for (var ii = 0; ii < 16; ii++) {
          buf[i + ii] = rnds[ii];
        }
      }
      return buf || unparse(rnds);
    }
    uuid = v4;
    uuid.v1 = v1;
    uuid.v4 = v4;
    uuid.parse = parse;
    uuid.unparse = unparse;
    uuid.BufferClass = BufferClass;
  })(window);
  'use strict';
  axe._load({
    data: {
      rules: {
        accesskeys: {
          description: 'Ensures every accesskey attribute value is unique',
          help: 'accesskey attribute value must be unique'
        },
        'area-alt': {
          description: 'Ensures <area> elements of image maps have alternate text',
          help: 'Active <area> elements must have alternate text'
        },
        'aria-allowed-attr': {
          description: 'Ensures ARIA attributes are allowed for an element\'s role',
          help: 'Elements must only use allowed ARIA attributes'
        },
        'aria-dpub-role-fallback': {
          description: 'Ensures unsupported DPUB roles are only used on elements with implicit fallback roles',
          help: 'Unsupported DPUB ARIA roles should be used on elements with implicit fallback roles'
        },
        'aria-hidden-body': {
          description: 'Ensures aria-hidden=\'true\' is not present on the document body.',
          help: 'aria-hidden=\'true\' must not be present on the document body'
        },
        'aria-required-attr': {
          description: 'Ensures elements with ARIA roles have all required ARIA attributes',
          help: 'Required ARIA attributes must be provided'
        },
        'aria-required-children': {
          description: 'Ensures elements with an ARIA role that require child roles contain them',
          help: 'Certain ARIA roles must contain particular children'
        },
        'aria-required-parent': {
          description: 'Ensures elements with an ARIA role that require parent roles are contained by them',
          help: 'Certain ARIA roles must be contained by particular parents'
        },
        'aria-roles': {
          description: 'Ensures all elements with a role attribute use a valid value',
          help: 'ARIA roles used must conform to valid values'
        },
        'aria-valid-attr-value': {
          description: 'Ensures all ARIA attributes have valid values',
          help: 'ARIA attributes must conform to valid values'
        },
        'aria-valid-attr': {
          description: 'Ensures attributes that begin with aria- are valid ARIA attributes',
          help: 'ARIA attributes must conform to valid names'
        },
        'audio-caption': {
          description: 'Ensures <audio> elements have captions',
          help: '<audio> elements must have a captions track'
        },
        blink: {
          description: 'Ensures <blink> elements are not used',
          help: '<blink> elements are deprecated and must not be used'
        },
        'button-name': {
          description: 'Ensures buttons have discernible text',
          help: 'Buttons must have discernible text'
        },
        bypass: {
          description: 'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
          help: 'Page must have means to bypass repeated blocks'
        },
        checkboxgroup: {
          description: 'Ensures related <input type="checkbox"> elements have a group and that the group designation is consistent',
          help: 'Checkbox inputs with the same name attribute value must be part of a group'
        },
        'color-contrast': {
          description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
          help: 'Elements must have sufficient color contrast'
        },
        'definition-list': {
          description: 'Ensures <dl> elements are structured correctly',
          help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script> or <template> elements'
        },
        dlitem: {
          description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
          help: '<dt> and <dd> elements must be contained by a <dl>'
        },
        'document-title': {
          description: 'Ensures each HTML document contains a non-empty <title> element',
          help: 'Documents must have <title> element to aid in navigation'
        },
        'duplicate-id': {
          description: 'Ensures every id attribute value is unique',
          help: 'id attribute value must be unique'
        },
        'empty-heading': {
          description: 'Ensures headings have discernible text',
          help: 'Headings must not be empty'
        },
        'focus-order-semantics': {
          description: 'Ensures elements in the focus order have an appropriate role',
          help: 'Elements in the focus order need a role appropriate for interactive content'
        },
        'frame-tested': {
          description: 'Ensures <iframe> and <frame> elements contain the axe-core script',
          help: 'Frames must be tested with axe-core'
        },
        'frame-title-unique': {
          description: 'Ensures <iframe> and <frame> elements contain a unique title attribute',
          help: 'Frames must have a unique title attribute'
        },
        'frame-title': {
          description: 'Ensures <iframe> and <frame> elements contain a non-empty title attribute',
          help: 'Frames must have title attribute'
        },
        'heading-order': {
          description: 'Ensures the order of headings is semantically correct',
          help: 'Heading levels should only increase by one'
        },
        'hidden-content': {
          description: 'Informs users about hidden content.',
          help: 'Hidden content on the page cannot be analyzed'
        },
        'html-has-lang': {
          description: 'Ensures every HTML document has a lang attribute',
          help: '<html> element must have a lang attribute'
        },
        'html-lang-valid': {
          description: 'Ensures the lang attribute of the <html> element has a valid value',
          help: '<html> element must have a valid value for the lang attribute'
        },
        'image-alt': {
          description: 'Ensures <img> elements have alternate text or a role of none or presentation',
          help: 'Images must have alternate text'
        },
        'image-redundant-alt': {
          description: 'Ensure button and link text is not repeated as image alternative',
          help: 'Text of buttons and links should not be repeated in the image alternative'
        },
        'input-image-alt': {
          description: 'Ensures <input type="image"> elements have alternate text',
          help: 'Image buttons must have alternate text'
        },
        'label-title-only': {
          description: 'Ensures that every form element is not solely labeled using the title or aria-describedby attributes',
          help: 'Form elements should have a visible label'
        },
        label: {
          description: 'Ensures every form element has a label',
          help: 'Form elements must have labels'
        },
        'landmark-banner-is-top-level': {
          description: 'The banner landmark should not be contained in another landmark',
          help: 'Banner landmark must be at top level'
        },
        'landmark-contentinfo-is-top-level': {
          description: 'The contentinfo landmark should not be contained in another landmark',
          help: 'Contentinfo landmark must be at top level'
        },
        'landmark-main-is-top-level': {
          description: 'The main landmark should not be contained in another landmark',
          help: 'Main landmark is not at top level'
        },
        'landmark-no-duplicate-banner': {
          description: 'Ensures the document has no more than one banner landmark',
          help: 'Document contain at most one banner landmark'
        },
        'landmark-no-duplicate-contentinfo': {
          description: 'Ensures the document has no more than one contentinfo landmark',
          help: 'Document contain at most one contentinfo landmark'
        },
        'landmark-one-main': {
          description: 'Ensures a navigation point to the primary content of the page. If the page contains iframes, each iframe should contain either no main landmarks or just one',
          help: 'Page must contain one main landmark'
        },
        'layout-table': {
          description: 'Ensures presentational <table> elements do not use <th>, <caption> elements or the summary attribute',
          help: 'Layout tables must not use data table elements'
        },
        'link-in-text-block': {
          description: 'Links can be distinguished without relying on color',
          help: 'Links must be distinguished from surrounding text in a way that does not rely on color'
        },
        'link-name': {
          description: 'Ensures links have discernible text',
          help: 'Links must have discernible text'
        },
        list: {
          description: 'Ensures that lists are structured correctly',
          help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements'
        },
        listitem: {
          description: 'Ensures <li> elements are used semantically',
          help: '<li> elements must be contained in a <ul> or <ol>'
        },
        marquee: {
          description: 'Ensures <marquee> elements are not used',
          help: '<marquee> elements are deprecated and must not be used'
        },
        'meta-refresh': {
          description: 'Ensures <meta http-equiv="refresh"> is not used',
          help: 'Timed refresh must not exist'
        },
        'meta-viewport-large': {
          description: 'Ensures <meta name="viewport"> can scale a significant amount',
          help: 'Users should be able to zoom and scale the text up to 500%'
        },
        'meta-viewport': {
          description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
          help: 'Zooming and scaling must not be disabled'
        },
        'object-alt': {
          description: 'Ensures <object> elements have alternate text',
          help: '<object> elements must have alternate text'
        },
        'p-as-heading': {
          description: 'Ensure p elements are not used to style headings',
          help: 'Bold, italic text and font-size are not used to style p elements as a heading'
        },
        'page-has-heading-one': {
          description: 'Ensure that the page, or at least one of its frames contains a level-one heading',
          help: 'Page must contain a level-one heading'
        },
        radiogroup: {
          description: 'Ensures related <input type="radio"> elements have a group and that the group designation is consistent',
          help: 'Radio inputs with the same name attribute value must be part of a group'
        },
        region: {
          description: 'Ensures all content is contained within a landmark region',
          help: 'Content should be contained in a landmark region'
        },
        'scope-attr-valid': {
          description: 'Ensures the scope attribute is used correctly on tables',
          help: 'scope attribute should be used correctly'
        },
        'server-side-image-map': {
          description: 'Ensures that server-side image maps are not used',
          help: 'Server-side image maps must not be used'
        },
        'skip-link': {
          description: 'Ensure all skip links have a focusable target',
          help: 'The skip-link target should exist and be focusable'
        },
        tabindex: {
          description: 'Ensures tabindex attribute values are not greater than 0',
          help: 'Elements should not have tabindex greater than zero'
        },
        'table-duplicate-name': {
          description: 'Ensure that tables do not have the same summary and caption',
          help: 'The <caption> element should not contain the same text as the summary attribute'
        },
        'table-fake-caption': {
          description: 'Ensure that tables with a caption use the <caption> element.',
          help: 'Data or header cells should not be used to give caption to a data table.'
        },
        'td-has-header': {
          description: 'Ensure that each non-empty data cell in a large table has one or more table headers',
          help: 'All non-empty td element in table larger than 3 by 3 must have an associated table header'
        },
        'td-headers-attr': {
          description: 'Ensure that each cell in a table using the headers refers to another cell in that table',
          help: 'All cells in a table element that use the headers attribute must only refer to other cells of that same table'
        },
        'th-has-data-cells': {
          description: 'Ensure that each table header in a data table refers to data cells',
          help: 'All th elements and elements with role=columnheader/rowheader must have data cells they describe'
        },
        'valid-lang': {
          description: 'Ensures lang attributes have valid values',
          help: 'lang attribute must have a valid value'
        },
        'video-caption': {
          description: 'Ensures <video> elements have captions',
          help: '<video> elements must have captions'
        },
        'video-description': {
          description: 'Ensures <video> elements have audio descriptions',
          help: '<video> elements must have an audio description track'
        }
      },
      checks: {
        accesskeys: {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Accesskey attribute value is unique';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Document has multiple elements with the same accesskey';
              return out;
            }
          }
        },
        'non-empty-alt': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has a non-empty alt attribute';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element has no alt attribute or the alt attribute is empty';
              return out;
            }
          }
        },
        'non-empty-title': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has a title attribute';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element has no title attribute or the title attribute is empty';
              return out;
            }
          }
        },
        'aria-label': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'aria-label attribute exists and is not empty';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'aria-label attribute does not exist or is empty';
              return out;
            }
          }
        },
        'aria-labelledby': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'aria-labelledby attribute exists and references elements that are visible to screen readers';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible';
              return out;
            }
          }
        },
        'aria-allowed-attr': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'ARIA attributes are used correctly for the defined role';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'ARIA attribute' + (it.data && it.data.length > 1 ? 's are' : ' is') + ' not allowed:';
              var arr1 = it.data;
              if (arr1) {
                var value, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  value = arr1[i1 += 1];
                  out += ' ' + value;
                }
              }
              return out;
            }
          }
        },
        'implicit-role-fallback': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element’s implicit ARIA role is an appropriate fallback';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element’s implicit ARIA role is not a good fallback for the (unsupported) role';
              return out;
            }
          }
        },
        'aria-hidden-body': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'No aria-hidden attribute is present on document body';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'aria-hidden=true should not be present on the document body';
              return out;
            }
          }
        },
        'aria-required-attr': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'All required ARIA attributes are present';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Required ARIA attribute' + (it.data && it.data.length > 1 ? 's' : '') + ' not present:';
              var arr1 = it.data;
              if (arr1) {
                var value, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  value = arr1[i1 += 1];
                  out += ' ' + value;
                }
              }
              return out;
            }
          }
        },
        'aria-required-children': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Required ARIA children are present';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Required ARIA ' + (it.data && it.data.length > 1 ? 'children' : 'child') + ' role not present:';
              var arr1 = it.data;
              if (arr1) {
                var value, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  value = arr1[i1 += 1];
                  out += ' ' + value;
                }
              }
              return out;
            }
          }
        },
        'aria-required-parent': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Required ARIA parent role present';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Required ARIA parent' + (it.data && it.data.length > 1 ? 's' : '') + ' role not present:';
              var arr1 = it.data;
              if (arr1) {
                var value, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  value = arr1[i1 += 1];
                  out += ' ' + value;
                }
              }
              return out;
            }
          }
        },
        invalidrole: {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'ARIA role is valid';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Role must be one of the valid ARIA roles';
              return out;
            }
          }
        },
        abstractrole: {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Abstract roles are not used';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Abstract roles cannot be directly used';
              return out;
            }
          }
        },
        'aria-valid-attr-value': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'ARIA attribute values are valid';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Invalid ARIA attribute value' + (it.data && it.data.length > 1 ? 's' : '') + ':';
              var arr1 = it.data;
              if (arr1) {
                var value, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  value = arr1[i1 += 1];
                  out += ' ' + value;
                }
              }
              return out;
            }
          }
        },
        'aria-errormessage': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Uses a supported aria-errormessage technique';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'aria-errormessage value' + (it.data && it.data.length > 1 ? 's' : '') + ' ';
              var arr1 = it.data;
              if (arr1) {
                var value, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  value = arr1[i1 += 1];
                  out += ' `' + value;
                }
              }
              out += '` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)';
              return out;
            }
          }
        },
        'aria-valid-attr': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'ARIA attribute name' + (it.data && it.data.length > 1 ? 's' : '') + ' are valid';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Invalid ARIA attribute name' + (it.data && it.data.length > 1 ? 's' : '') + ':';
              var arr1 = it.data;
              if (arr1) {
                var value, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  value = arr1[i1 += 1];
                  out += ' ' + value;
                }
              }
              return out;
            }
          }
        },
        caption: {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'The multimedia element has a captions track';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The multimedia element does not have a captions track';
              return out;
            },
            incomplete: function anonymous(it) {
              var out = 'A captions track for this element could not be found';
              return out;
            }
          }
        },
        'is-on-screen': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element is not visible';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element is visible';
              return out;
            }
          }
        },
        'non-empty-if-present': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element ';
              if (it.data) {
                out += 'has a non-empty value attribute';
              } else {
                out += 'does not have a value attribute';
              }
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element has a value attribute and the value attribute is empty';
              return out;
            }
          }
        },
        'non-empty-value': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has a non-empty value attribute';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element has no value attribute or the value attribute is empty';
              return out;
            }
          }
        },
        'button-has-visible-text': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has inner text that is visible to screen readers';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element does not have inner text that is visible to screen readers';
              return out;
            }
          }
        },
        'role-presentation': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element\'s default semantics were overriden with role="presentation"';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element\'s default semantics were not overridden with role="presentation"';
              return out;
            }
          }
        },
        'role-none': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element\'s default semantics were overriden with role="none"';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element\'s default semantics were not overridden with role="none"';
              return out;
            }
          }
        },
        'focusable-no-name': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element is not in tab order or has accessible text';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element is in tab order and does not have accessible text';
              return out;
            }
          }
        },
        'internal-link-present': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Valid skip link found';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'No valid skip link found';
              return out;
            }
          }
        },
        'header-present': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Page has a header';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Page does not have a header';
              return out;
            }
          }
        },
        landmark: {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Page has a landmark region';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Page does not have a landmark region';
              return out;
            }
          }
        },
        'group-labelledby': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'All elements with the name "' + it.data.name + '" reference the same element with aria-labelledby';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'All elements with the name "' + it.data.name + '" do not reference the same element with aria-labelledby';
              return out;
            }
          }
        },
        fieldset: {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element is contained in a fieldset';
              return out;
            },
            fail: function anonymous(it) {
              var out = '';
              var code = it.data && it.data.failureCode;
              if (code === 'no-legend') {
                out += 'Fieldset does not have a legend as its first child';
              } else if (code === 'empty-legend') {
                out += 'Legend does not have text that is visible to screen readers';
              } else if (code === 'mixed-inputs') {
                out += 'Fieldset contains unrelated inputs';
              } else if (code === 'no-group-label') {
                out += 'ARIA group does not have aria-label or aria-labelledby';
              } else if (code === 'group-mixed-inputs') {
                out += 'ARIA group contains unrelated inputs';
              } else {
                out += 'Element does not have a containing fieldset or ARIA group';
              }
              return out;
            }
          }
        },
        'color-contrast': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has sufficient color contrast of ' + it.data.contrastRatio;
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element has insufficient color contrast of ' + it.data.contrastRatio + ' (foreground color: ' + it.data.fgColor + ', background color: ' + it.data.bgColor + ', font size: ' + it.data.fontSize + ', font weight: ' + it.data.fontWeight + '). Expected contrast ratio of ' + it.data.expectedContrastRatio;
              return out;
            },
            incomplete: {
              bgImage: 'Element\'s background color could not be determined due to a background image',
              bgGradient: 'Element\'s background color could not be determined due to a background gradient',
              imgNode: 'Element\'s background color could not be determined because element contains an image node',
              bgOverlap: 'Element\'s background color could not be determined because it is overlapped by another element',
              fgAlpha: 'Element\'s foreground color could not be determined because of alpha transparency',
              elmPartiallyObscured: 'Element\'s background color could not be determined because it\'s partially obscured by another element',
              elmPartiallyObscuring: 'Element\'s background color could not be determined because it partially overlaps other elements',
              outsideViewport: 'Element\'s background color could not be determined because it\'s outside the viewport',
              equalRatio: 'Element has a 1:1 contrast ratio with the background',
              default: 'Unable to determine contrast ratio'
            }
          }
        },
        'structured-dlitems': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'When not empty, element has both <dt> and <dd> elements';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'When not empty, element does not have at least one <dt> element followed by at least one <dd> element';
              return out;
            }
          }
        },
        'only-dlitems': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'List element only has direct children that are allowed inside <dt> or <dd> elements';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'List element has direct children that are not allowed inside <dt> or <dd> elements';
              return out;
            }
          }
        },
        dlitem: {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Description list item has a <dl> parent element';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Description list item does not have a <dl> parent element';
              return out;
            }
          }
        },
        'doc-has-title': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Document has a non-empty <title> element';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Document does not have a non-empty <title> element';
              return out;
            }
          }
        },
        'duplicate-id': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Document has no elements that share the same id attribute';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Document has multiple elements with the same id attribute: ' + it.data;
              return out;
            }
          }
        },
        'has-visible-text': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has text that is visible to screen readers';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element does not have text that is visible to screen readers';
              return out;
            }
          }
        },
        'has-widget-role': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has a widget role.';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element does not have a widget role.';
              return out;
            }
          }
        },
        'valid-scrollable-semantics': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has valid semantics for an element in the focus order.';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element has invalid semantics for an element in the focus order.';
              return out;
            }
          }
        },
        'frame-tested': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'The iframe was tested with axe-core';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The iframe could not be tested with axe-core';
              return out;
            },
            incomplete: function anonymous(it) {
              var out = 'The iframe still has to be tested with axe-core';
              return out;
            }
          }
        },
        'unique-frame-title': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element\'s title attribute is unique';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element\'s title attribute is not unique';
              return out;
            }
          }
        },
        'heading-order': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Heading order valid';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Heading order invalid';
              return out;
            }
          }
        },
        'hidden-content': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'All content on the page has been analyzed.';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'There were problems analyzing the content on this page.';
              return out;
            },
            incomplete: function anonymous(it) {
              var out = 'There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it.';
              return out;
            }
          }
        },
        'has-lang': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'The <html> element has a lang attribute';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The <html> element does not have a lang attribute';
              return out;
            }
          }
        },
        'valid-lang': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Value of lang attribute is included in the list of valid languages';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Value of lang attribute not included in the list of valid languages';
              return out;
            }
          }
        },
        'has-alt': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element has an alt attribute';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element does not have an alt attribute';
              return out;
            }
          }
        },
        'duplicate-img-label': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element does not duplicate existing text in <img> alt text';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element contains <img> element with alt text that duplicates existing text';
              return out;
            }
          }
        },
        'title-only': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Form element does not solely use title attribute for its label';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Only title used to generate label for form element';
              return out;
            }
          }
        },
        'implicit-label': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Form element has an implicit (wrapped) <label>';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Form element does not have an implicit (wrapped) <label>';
              return out;
            }
          }
        },
        'explicit-label': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Form element has an explicit <label>';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Form element does not have an explicit <label>';
              return out;
            }
          }
        },
        'help-same-as-label': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Help text (title or aria-describedby) does not duplicate label text';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Help text (title or aria-describedby) text is the same as the label text';
              return out;
            }
          }
        },
        'multiple-label': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Form element does not have multiple <label> elements';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Form element has multiple <label> elements';
              return out;
            }
          }
        },
        'landmark-is-top-level': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'The ' + it.data.role + ' landmark is at the top level.';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The ' + it.data.role + ' landmark is contained in another landmark.';
              return out;
            }
          }
        },
        'page-no-duplicate-banner': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Document has no more than one banner landmark';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Document has more than one banner landmark';
              return out;
            }
          }
        },
        'page-no-duplicate-contentinfo': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Document has no more than one contentinfo landmark';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Document has more than one contentinfo landmark';
              return out;
            }
          }
        },
        'page-has-main': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Page has at least one main landmark';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Page must have a main landmark';
              return out;
            }
          }
        },
        'page-no-duplicate-main': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Document has no more than one main landmark';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Document has more than one main landmark';
              return out;
            }
          }
        },
        'has-th': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Layout table does not use <th> elements';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Layout table uses <th> elements';
              return out;
            }
          }
        },
        'has-caption': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Layout table does not use <caption> element';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Layout table uses <caption> element';
              return out;
            }
          }
        },
        'has-summary': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Layout table does not use summary attribute';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Layout table uses summary attribute';
              return out;
            }
          }
        },
        'link-in-text-block': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Links can be distinguished from surrounding text in some way other than by color';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Links need to be distinguished from surrounding text in some way other than by color';
              return out;
            },
            incomplete: {
              bgContrast: 'Element\'s contrast ratio could not be determined. Check for a distinct hover/focus style',
              bgImage: 'Element\'s contrast ratio could not be determined due to a background image',
              bgGradient: 'Element\'s contrast ratio could not be determined due to a background gradient',
              imgNode: 'Element\'s contrast ratio could not be determined because element contains an image node',
              bgOverlap: 'Element\'s contrast ratio could not be determined because of element overlap',
              default: 'Unable to determine contrast ratio'
            }
          }
        },
        'only-listitems': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'List element only has direct children that are allowed inside <li> elements';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'List element has direct children that are not allowed inside <li> elements';
              return out;
            }
          }
        },
        listitem: {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'List item has a <ul>, <ol> or role="list" parent element';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'List item does not have a <ul>, <ol> or role="list" parent element';
              return out;
            }
          }
        },
        'meta-refresh': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = '<meta> tag does not immediately refresh the page';
              return out;
            },
            fail: function anonymous(it) {
              var out = '<meta> tag forces timed refresh of page';
              return out;
            }
          }
        },
        'meta-viewport-large': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = '<meta> tag does not prevent significant zooming on mobile devices';
              return out;
            },
            fail: function anonymous(it) {
              var out = '<meta> tag limits zooming on mobile devices';
              return out;
            }
          }
        },
        'meta-viewport': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = '<meta> tag does not disable zooming on mobile devices';
              return out;
            },
            fail: function anonymous(it) {
              var out = '<meta> tag disables zooming on mobile devices';
              return out;
            }
          }
        },
        'p-as-heading': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = '<p> elements are not styled as headings';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Heading elements should be used instead of styled p elements';
              return out;
            }
          }
        },
        'page-has-heading-one': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Page has at least one level-one heading';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Page must have a level-one heading';
              return out;
            }
          }
        },
        region: {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Content contained by ARIA landmark';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Content not contained by an ARIA landmark';
              return out;
            }
          }
        },
        'html5-scope': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Scope attribute is only used on table header elements (<th>)';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'In HTML 5, scope attributes may only be used on table header elements (<th>)';
              return out;
            }
          }
        },
        'scope-value': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'Scope attribute is used correctly';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The value of the scope attribute may only be \'row\' or \'col\'';
              return out;
            }
          }
        },
        exists: {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element does not exist';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element exists';
              return out;
            }
          }
        },
        'skip-link': {
          impact: 'moderate',
          messages: {
            pass: function anonymous(it) {
              var out = 'Skip link target exists';
              return out;
            },
            incomplete: function anonymous(it) {
              var out = 'Skip link target should become visible on activation';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'No skip link target';
              return out;
            }
          }
        },
        tabindex: {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'Element does not have a tabindex greater than 0';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Element has a tabindex greater than 0';
              return out;
            }
          }
        },
        'same-caption-summary': {
          impact: 'minor',
          messages: {
            pass: function anonymous(it) {
              var out = 'Content of summary attribute and <caption> are not duplicated';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Content of summary attribute and <caption> element are identical';
              return out;
            }
          }
        },
        'caption-faked': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'The first row of a table is not used as a caption';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The first row of the table should be a caption instead of a table cell';
              return out;
            }
          }
        },
        'td-has-header': {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'All non-empty data cells have table headers';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Some non-empty data cells do not have table headers';
              return out;
            }
          }
        },
        'td-headers-attr': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'The headers attribute is exclusively used to refer to other cells in the table';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The headers attribute is not exclusively used to refer to other cells in the table';
              return out;
            }
          }
        },
        'th-has-data-cells': {
          impact: 'serious',
          messages: {
            pass: function anonymous(it) {
              var out = 'All table header cells refer to data cells';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'Not all table header cells refer to data cells';
              return out;
            },
            incomplete: function anonymous(it) {
              var out = 'Table data cells are missing or empty';
              return out;
            }
          }
        },
        description: {
          impact: 'critical',
          messages: {
            pass: function anonymous(it) {
              var out = 'The multimedia element has an audio description track';
              return out;
            },
            fail: function anonymous(it) {
              var out = 'The multimedia element does not have an audio description track';
              return out;
            },
            incomplete: function anonymous(it) {
              var out = 'An audio description track for this element could not be found';
              return out;
            }
          }
        }
      },
      failureSummaries: {
        any: {
          failureMessage: function anonymous(it) {
            var out = 'Fix any of the following:';
            var arr1 = it;
            if (arr1) {
              var value, i1 = -1, l1 = arr1.length - 1;
              while (i1 < l1) {
                value = arr1[i1 += 1];
                out += '\n  ' + value.split('\n').join('\n  ');
              }
            }
            return out;
          }
        },
        none: {
          failureMessage: function anonymous(it) {
            var out = 'Fix all of the following:';
            var arr1 = it;
            if (arr1) {
              var value, i1 = -1, l1 = arr1.length - 1;
              while (i1 < l1) {
                value = arr1[i1 += 1];
                out += '\n  ' + value.split('\n').join('\n  ');
              }
            }
            return out;
          }
        }
      },
      incompleteFallbackMessage: function anonymous(it) {
        var out = 'aXe couldn\'t tell the reason. Time to break out the element inspector!';
        return out;
      }
    },
    rules: [ {
      id: 'accesskeys',
      selector: '[accesskey]',
      excludeHidden: false,
      tags: [ 'wcag2a', 'wcag211', 'cat.keyboard' ],
      all: [],
      any: [],
      none: [ 'accesskeys' ]
    }, {
      id: 'area-alt',
      selector: 'map area[href]',
      excludeHidden: false,
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a' ],
      all: [],
      any: [ 'non-empty-alt', 'non-empty-title', 'aria-label', 'aria-labelledby' ],
      none: []
    }, {
      id: 'aria-allowed-attr',
      matches: function matches(node, virtualNode) {
        var role = node.getAttribute('role');
        if (!role) {
          role = axe.commons.aria.implicitRole(node);
        }
        var allowed = axe.commons.aria.allowedAttr(role);
        if (role && allowed) {
          var aria = /^aria-/;
          if (node.hasAttributes()) {
            var attrs = node.attributes;
            for (var i = 0, l = attrs.length; i < l; i++) {
              if (aria.test(attrs[i].name)) {
                return true;
              }
            }
          }
        }
        return false;
      },
      tags: [ 'cat.aria', 'wcag2a', 'wcag411', 'wcag412' ],
      all: [],
      any: [ 'aria-allowed-attr' ],
      none: []
    }, {
      id: 'aria-dpub-role-fallback',
      selector: '[role]',
      matches: function matches(node, virtualNode) {
        var role = node.getAttribute('role');
        return [ 'doc-backlink', 'doc-biblioentry', 'doc-biblioref', 'doc-cover', 'doc-endnote', 'doc-glossref', 'doc-noteref' ].includes(role);
      },
      tags: [ 'cat.aria', 'wcag2a', 'wcag131' ],
      all: [ 'implicit-role-fallback' ],
      any: [],
      none: []
    }, {
      id: 'aria-hidden-body',
      selector: 'body',
      excludeHidden: false,
      tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
      all: [],
      any: [ 'aria-hidden-body' ],
      none: []
    }, {
      id: 'aria-required-attr',
      selector: '[role]',
      tags: [ 'cat.aria', 'wcag2a', 'wcag411', 'wcag412' ],
      all: [],
      any: [ 'aria-required-attr' ],
      none: []
    }, {
      id: 'aria-required-children',
      selector: '[role]',
      tags: [ 'cat.aria', 'wcag2a', 'wcag131' ],
      all: [],
      any: [ 'aria-required-children' ],
      none: []
    }, {
      id: 'aria-required-parent',
      selector: '[role]',
      tags: [ 'cat.aria', 'wcag2a', 'wcag131' ],
      all: [],
      any: [ 'aria-required-parent' ],
      none: []
    }, {
      id: 'aria-roles',
      selector: '[role]',
      tags: [ 'cat.aria', 'wcag2a', 'wcag131', 'wcag411', 'wcag412' ],
      all: [],
      any: [],
      none: [ 'invalidrole', 'abstractrole' ]
    }, {
      id: 'aria-valid-attr-value',
      matches: function matches(node, virtualNode) {
        var aria = /^aria-/;
        if (node.hasAttributes()) {
          var attrs = node.attributes;
          for (var i = 0, l = attrs.length; i < l; i++) {
            if (aria.test(attrs[i].name)) {
              return true;
            }
          }
        }
        return false;
      },
      tags: [ 'cat.aria', 'wcag2a', 'wcag131', 'wcag411', 'wcag412' ],
      all: [ {
        options: [],
        id: 'aria-valid-attr-value'
      }, 'aria-errormessage' ],
      any: [],
      none: []
    }, {
      id: 'aria-valid-attr',
      matches: function matches(node, virtualNode) {
        var aria = /^aria-/;
        if (node.hasAttributes()) {
          var attrs = node.attributes;
          for (var i = 0, l = attrs.length; i < l; i++) {
            if (aria.test(attrs[i].name)) {
              return true;
            }
          }
        }
        return false;
      },
      tags: [ 'cat.aria', 'wcag2a', 'wcag411' ],
      all: [],
      any: [ {
        options: [],
        id: 'aria-valid-attr'
      } ],
      none: []
    }, {
      id: 'audio-caption',
      selector: 'audio',
      excludeHidden: false,
      tags: [ 'cat.time-and-media', 'wcag2a', 'wcag121', 'section508', 'section508.22.a' ],
      all: [],
      any: [],
      none: [ 'caption' ]
    }, {
      id: 'blink',
      selector: 'blink',
      excludeHidden: false,
      tags: [ 'cat.time-and-media', 'wcag2a', 'wcag222', 'section508', 'section508.22.j' ],
      all: [],
      any: [],
      none: [ 'is-on-screen' ]
    }, {
      id: 'button-name',
      selector: 'button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"]',
      tags: [ 'cat.name-role-value', 'wcag2a', 'wcag412', 'section508', 'section508.22.a' ],
      all: [],
      any: [ 'non-empty-if-present', 'non-empty-value', 'button-has-visible-text', 'aria-label', 'aria-labelledby', 'role-presentation', 'role-none', 'non-empty-title' ],
      none: [ 'focusable-no-name' ]
    }, {
      id: 'bypass',
      selector: 'html',
      pageLevel: true,
      matches: function matches(node, virtualNode) {
        return !!node.querySelector('a[href]');
      },
      tags: [ 'cat.keyboard', 'wcag2a', 'wcag241', 'section508', 'section508.22.o' ],
      all: [],
      any: [ 'internal-link-present', 'header-present', 'landmark' ],
      none: []
    }, {
      id: 'checkboxgroup',
      selector: 'input[type=checkbox][name]',
      tags: [ 'cat.forms', 'best-practice' ],
      all: [],
      any: [ 'group-labelledby', 'fieldset' ],
      none: []
    }, {
      id: 'color-contrast',
      matches: function matches(node, virtualNode) {
        var nodeName = node.nodeName.toUpperCase(), nodeType = node.type;
        if (node.getAttribute('aria-disabled') === 'true' || axe.commons.dom.findUpVirtual(virtualNode, '[aria-disabled="true"]')) {
          return false;
        }
        if (nodeName === 'INPUT') {
          return [ 'hidden', 'range', 'color', 'checkbox', 'radio', 'image' ].indexOf(nodeType) === -1 && !node.disabled;
        }
        if (nodeName === 'SELECT') {
          return !!node.options.length && !node.disabled;
        }
        if (nodeName === 'TEXTAREA') {
          return !node.disabled;
        }
        if (nodeName === 'OPTION') {
          return false;
        }
        if (nodeName === 'BUTTON' && node.disabled || axe.commons.dom.findUpVirtual(virtualNode, 'button[disabled]')) {
          return false;
        }
        if (nodeName === 'FIELDSET' && node.disabled || axe.commons.dom.findUpVirtual(virtualNode, 'fieldset[disabled]')) {
          return false;
        }
        var nodeParentLabel = axe.commons.dom.findUpVirtual(virtualNode, 'label');
        if (nodeName === 'LABEL' || nodeParentLabel) {
          var relevantNode = node;
          var relevantVirtualNode = virtualNode;
          if (nodeParentLabel) {
            relevantNode = nodeParentLabel;
            relevantVirtualNode = axe.utils.getNodeFromTree(axe._tree[0], nodeParentLabel);
          }
          var doc = axe.commons.dom.getRootNode(relevantNode);
          var candidate = relevantNode.htmlFor && doc.getElementById(relevantNode.htmlFor);
          if (candidate && candidate.disabled) {
            return false;
          }
          var candidate = axe.utils.querySelectorAll(relevantVirtualNode, 'input:not([type="hidden"]):not([type="image"])' + ':not([type="button"]):not([type="submit"]):not([type="reset"]), select, textarea');
          if (candidate.length && candidate[0].actualNode.disabled) {
            return false;
          }
        }
        if (node.getAttribute('id')) {
          var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
          var _doc = axe.commons.dom.getRootNode(node);
          var candidate = _doc.querySelector('[aria-labelledby~=' + id + ']');
          if (candidate && candidate.disabled) {
            return false;
          }
        }
        if (axe.commons.text.visibleVirtual(virtualNode, false, true) === '') {
          return false;
        }
        var range = document.createRange(), childNodes = virtualNode.children, length = childNodes.length, child, index;
        for (index = 0; index < length; index++) {
          child = childNodes[index];
          if (child.actualNode.nodeType === 3 && axe.commons.text.sanitize(child.actualNode.nodeValue) !== '') {
            range.selectNodeContents(child.actualNode);
          }
        }
        var rects = range.getClientRects();
        length = rects.length;
        for (index = 0; index < length; index++) {
          if (axe.commons.dom.visuallyOverlaps(rects[index], node)) {
            return true;
          }
        }
        return false;
      },
      excludeHidden: false,
      options: {
        noScroll: false
      },
      tags: [ 'cat.color', 'wcag2aa', 'wcag143' ],
      all: [],
      any: [ 'color-contrast' ],
      none: []
    }, {
      id: 'definition-list',
      selector: 'dl',
      matches: function matches(node, virtualNode) {
        return !node.getAttribute('role');
      },
      tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
      all: [],
      any: [],
      none: [ 'structured-dlitems', 'only-dlitems' ]
    }, {
      id: 'dlitem',
      selector: 'dd, dt',
      matches: function matches(node, virtualNode) {
        return !node.getAttribute('role');
      },
      tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
      all: [],
      any: [ 'dlitem' ],
      none: []
    }, {
      id: 'document-title',
      selector: 'html',
      matches: function matches(node, virtualNode) {
        return node.ownerDocument.defaultView.self === node.ownerDocument.defaultView.top;
      },
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag242' ],
      all: [],
      any: [ 'doc-has-title' ],
      none: []
    }, {
      id: 'duplicate-id',
      selector: '[id]',
      excludeHidden: false,
      tags: [ 'cat.parsing', 'wcag2a', 'wcag411' ],
      all: [],
      any: [ 'duplicate-id' ],
      none: []
    }, {
      id: 'empty-heading',
      selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
      matches: function matches(node, virtualNode) {
        var explicitRoles = void 0;
        if (node.hasAttribute('role')) {
          explicitRoles = node.getAttribute('role').split(/\s+/i).filter(axe.commons.aria.isValidRole);
        }
        if (explicitRoles && explicitRoles.length > 0) {
          return explicitRoles.includes('heading');
        } else {
          return axe.commons.aria.implicitRole(node) === 'heading';
        }
      },
      tags: [ 'cat.name-role-value', 'best-practice' ],
      all: [],
      any: [ 'has-visible-text' ],
      none: []
    }, {
      id: 'focus-order-semantics',
      selector: 'div, h1, h2, h3, h4, h5, h6, [role=heading], p, span',
      matches: function matches(node, virtualNode) {
        return axe.commons.dom.insertedIntoFocusOrder(node);
      },
      tags: [ 'cat.keyboard', 'best-practice', 'experimental' ],
      all: [],
      any: [ {
        options: [],
        id: 'has-widget-role'
      }, {
        options: [],
        id: 'valid-scrollable-semantics'
      } ],
      none: []
    }, {
      id: 'frame-tested',
      selector: 'frame, iframe',
      tags: [ 'cat.structure', 'review-item' ],
      all: [ {
        options: {
          isViolation: false
        },
        id: 'frame-tested'
      } ],
      any: [],
      none: []
    }, {
      id: 'frame-title-unique',
      selector: 'frame[title], iframe[title]',
      matches: function matches(node, virtualNode) {
        var title = node.getAttribute('title');
        return !!(title ? axe.commons.text.sanitize(title).trim() : '');
      },
      tags: [ 'cat.text-alternatives', 'best-practice' ],
      all: [],
      any: [],
      none: [ 'unique-frame-title' ]
    }, {
      id: 'frame-title',
      selector: 'frame, iframe',
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag241', 'section508', 'section508.22.i' ],
      all: [],
      any: [ 'aria-label', 'aria-labelledby', 'non-empty-title', 'role-presentation', 'role-none' ],
      none: []
    }, {
      id: 'heading-order',
      selector: 'h1, h2, h3, h4, h5, h6, [role=heading]',
      matches: function matches(node, virtualNode) {
        var explicitRoles = void 0;
        if (node.hasAttribute('role')) {
          explicitRoles = node.getAttribute('role').split(/\s+/i).filter(axe.commons.aria.isValidRole);
        }
        if (explicitRoles && explicitRoles.length > 0) {
          return explicitRoles.includes('heading');
        } else {
          return axe.commons.aria.implicitRole(node) === 'heading';
        }
      },
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [],
      any: [ 'heading-order' ],
      none: []
    }, {
      id: 'hidden-content',
      selector: '*',
      excludeHidden: false,
      tags: [ 'cat.structure', 'experimental', 'review-item' ],
      all: [],
      any: [ 'hidden-content' ],
      none: []
    }, {
      id: 'html-has-lang',
      selector: 'html',
      tags: [ 'cat.language', 'wcag2a', 'wcag311' ],
      all: [],
      any: [ 'has-lang' ],
      none: []
    }, {
      id: 'html-lang-valid',
      selector: 'html[lang]',
      tags: [ 'cat.language', 'wcag2a', 'wcag311' ],
      all: [],
      any: [],
      none: [ 'valid-lang' ]
    }, {
      id: 'image-alt',
      selector: 'img, [role=\'img\']:not(svg)',
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a' ],
      all: [],
      any: [ 'has-alt', 'aria-label', 'aria-labelledby', 'non-empty-title', 'role-presentation', 'role-none' ],
      none: []
    }, {
      id: 'image-redundant-alt',
      selector: 'button, [role="button"], a[href], p, li, td, th',
      tags: [ 'cat.text-alternatives', 'best-practice' ],
      all: [],
      any: [],
      none: [ 'duplicate-img-label' ]
    }, {
      id: 'input-image-alt',
      selector: 'input[type="image"]',
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a' ],
      all: [],
      any: [ 'non-empty-alt', 'aria-label', 'aria-labelledby', 'non-empty-title' ],
      none: []
    }, {
      id: 'label-title-only',
      selector: 'input, select, textarea',
      matches: function matches(node, virtualNode) {
        if (node.nodeName.toLowerCase() !== 'input' || node.hasAttribute('type') === false) {
          return true;
        }
        var type = node.getAttribute('type').toLowerCase();
        return [ 'hidden', 'image', 'button', 'submit', 'reset' ].includes(type) === false;
      },
      tags: [ 'cat.forms', 'best-practice' ],
      all: [],
      any: [],
      none: [ 'title-only' ]
    }, {
      id: 'label',
      selector: 'input, select, textarea',
      matches: function matches(node, virtualNode) {
        if (node.nodeName.toLowerCase() !== 'input' || node.hasAttribute('type') === false) {
          return true;
        }
        var type = node.getAttribute('type').toLowerCase();
        return [ 'hidden', 'image', 'button', 'submit', 'reset' ].includes(type) === false;
      },
      tags: [ 'cat.forms', 'wcag2a', 'wcag332', 'wcag131', 'section508', 'section508.22.n' ],
      all: [],
      any: [ 'aria-label', 'aria-labelledby', 'implicit-label', 'explicit-label', 'non-empty-title' ],
      none: [ 'help-same-as-label', 'multiple-label' ]
    }, {
      id: 'landmark-banner-is-top-level',
      selector: 'header:not([role]), [role=banner]',
      matches: function matches(node, virtualNode) {
        var nativeScopeFilter = 'article, aside, main, nav, section';
        return node.hasAttribute('role') || !axe.commons.dom.findUpVirtual(virtualNode, nativeScopeFilter);
      },
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [],
      any: [ 'landmark-is-top-level' ],
      none: []
    }, {
      id: 'landmark-contentinfo-is-top-level',
      selector: 'footer:not([role]), [role=contentinfo]',
      matches: function matches(node, virtualNode) {
        var nativeScopeFilter = 'article, aside, main, nav, section';
        return node.hasAttribute('role') || !axe.commons.dom.findUpVirtual(virtualNode, nativeScopeFilter);
      },
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [],
      any: [ 'landmark-is-top-level' ],
      none: []
    }, {
      id: 'landmark-main-is-top-level',
      selector: 'main:not([role]), [role=main]',
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [],
      any: [ 'landmark-is-top-level' ],
      none: []
    }, {
      id: 'landmark-no-duplicate-banner',
      selector: 'html',
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [],
      any: [ {
        options: {
          selector: 'header:not([role]), [role=banner]',
          nativeScopeFilter: 'article, aside, main, nav, section'
        },
        id: 'page-no-duplicate-banner'
      } ],
      none: []
    }, {
      id: 'landmark-no-duplicate-contentinfo',
      selector: 'html',
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [],
      any: [ {
        options: {
          selector: 'footer:not([role]), [role=contentinfo]',
          nativeScopeFilter: 'article, aside, main, nav, section'
        },
        id: 'page-no-duplicate-contentinfo'
      } ],
      none: []
    }, {
      id: 'landmark-one-main',
      selector: 'html',
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [ {
        options: {
          selector: 'main:not([role]), [role=\'main\']'
        },
        id: 'page-has-main'
      }, {
        options: {
          selector: 'main:not([role]), [role=\'main\']'
        },
        id: 'page-no-duplicate-main'
      } ],
      any: [],
      none: []
    }, {
      id: 'layout-table',
      selector: 'table',
      matches: function matches(node, virtualNode) {
        var role = (node.getAttribute('role') || '').toLowerCase();
        return !((role === 'presentation' || role === 'none') && !axe.commons.dom.isFocusable(node)) && !axe.commons.table.isDataTable(node);
      },
      tags: [ 'cat.semantics', 'wcag2a', 'wcag131' ],
      all: [],
      any: [],
      none: [ 'has-th', 'has-caption', 'has-summary' ]
    }, {
      id: 'link-in-text-block',
      selector: 'a[href], [role=link]',
      matches: function matches(node, virtualNode) {
        var text = axe.commons.text.sanitize(node.textContent);
        var role = node.getAttribute('role');
        if (role && role !== 'link') {
          return false;
        }
        if (!text) {
          return false;
        }
        if (!axe.commons.dom.isVisible(node, false)) {
          return false;
        }
        return axe.commons.dom.isInTextBlock(node);
      },
      excludeHidden: false,
      tags: [ 'cat.color', 'experimental', 'wcag2a', 'wcag141' ],
      all: [ 'link-in-text-block' ],
      any: [],
      none: []
    }, {
      id: 'link-name',
      selector: 'a[href], [role=link][href]',
      matches: function matches(node, virtualNode) {
        return node.getAttribute('role') !== 'button';
      },
      tags: [ 'cat.name-role-value', 'wcag2a', 'wcag111', 'wcag412', 'wcag244', 'section508', 'section508.22.a' ],
      all: [],
      any: [ 'has-visible-text', 'aria-label', 'aria-labelledby', 'role-presentation', 'role-none' ],
      none: [ 'focusable-no-name' ]
    }, {
      id: 'list',
      selector: 'ul, ol',
      matches: function matches(node, virtualNode) {
        return !node.getAttribute('role');
      },
      tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
      all: [],
      any: [],
      none: [ 'only-listitems' ]
    }, {
      id: 'listitem',
      selector: 'li',
      matches: function matches(node, virtualNode) {
        return !node.getAttribute('role');
      },
      tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
      all: [],
      any: [ 'listitem' ],
      none: []
    }, {
      id: 'marquee',
      selector: 'marquee',
      excludeHidden: false,
      tags: [ 'cat.parsing', 'wcag2a', 'wcag222' ],
      all: [],
      any: [],
      none: [ 'is-on-screen' ]
    }, {
      id: 'meta-refresh',
      selector: 'meta[http-equiv="refresh"]',
      excludeHidden: false,
      tags: [ 'cat.time', 'wcag2a', 'wcag2aaa', 'wcag221', 'wcag224', 'wcag325' ],
      all: [],
      any: [ 'meta-refresh' ],
      none: []
    }, {
      id: 'meta-viewport-large',
      selector: 'meta[name="viewport"]',
      excludeHidden: false,
      tags: [ 'cat.sensory-and-visual-cues', 'best-practice' ],
      all: [],
      any: [ {
        options: {
          scaleMinimum: 5,
          lowerBound: 2
        },
        id: 'meta-viewport-large'
      } ],
      none: []
    }, {
      id: 'meta-viewport',
      selector: 'meta[name="viewport"]',
      excludeHidden: false,
      tags: [ 'cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144' ],
      all: [],
      any: [ {
        options: {
          scaleMinimum: 2
        },
        id: 'meta-viewport'
      } ],
      none: []
    }, {
      id: 'object-alt',
      selector: 'object',
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag111', 'section508', 'section508.22.a' ],
      all: [],
      any: [ 'has-visible-text', 'aria-label', 'aria-labelledby', 'non-empty-title' ],
      none: []
    }, {
      id: 'p-as-heading',
      selector: 'p',
      matches: function matches(node, virtualNode) {
        var children = Array.from(node.parentNode.childNodes);
        var nodeText = node.textContent.trim();
        var isSentence = /[.!?:;](?![.!?:;])/g;
        if (nodeText.length === 0 || (nodeText.match(isSentence) || []).length >= 2) {
          return false;
        }
        var siblingsAfter = children.slice(children.indexOf(node) + 1).filter(function(elm) {
          return elm.nodeName.toUpperCase() === 'P' && elm.textContent.trim() !== '';
        });
        return siblingsAfter.length !== 0;
      },
      tags: [ 'cat.semantics', 'wcag2a', 'wcag131', 'experimental' ],
      all: [ {
        options: {
          margins: [ {
            weight: 150,
            italic: true
          }, {
            weight: 150,
            size: 1.15
          }, {
            italic: true,
            size: 1.15
          }, {
            size: 1.4
          } ]
        },
        id: 'p-as-heading'
      } ],
      any: [],
      none: []
    }, {
      id: 'page-has-heading-one',
      selector: 'html',
      tags: [ 'cat.semantics', 'best-practice' ],
      all: [ {
        options: {
          selector: 'h1:not([role]), [role="heading"][aria-level="1"]'
        },
        id: 'page-has-heading-one'
      } ],
      any: [],
      none: []
    }, {
      id: 'radiogroup',
      selector: 'input[type=radio][name]',
      tags: [ 'cat.forms', 'best-practice' ],
      all: [],
      any: [ 'group-labelledby', 'fieldset' ],
      none: []
    }, {
      id: 'region',
      selector: 'html',
      pageLevel: true,
      tags: [ 'cat.keyboard', 'best-practice' ],
      all: [],
      any: [ 'region' ],
      none: []
    }, {
      id: 'scope-attr-valid',
      selector: 'td[scope], th[scope]',
      tags: [ 'cat.tables', 'best-practice' ],
      all: [ 'html5-scope', 'scope-value' ],
      any: [],
      none: []
    }, {
      id: 'server-side-image-map',
      selector: 'img[ismap]',
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag211', 'section508', 'section508.22.f' ],
      all: [],
      any: [],
      none: [ 'exists' ]
    }, {
      id: 'skip-link',
      selector: 'a[href]',
      matches: function matches(node, virtualNode) {
        return /^#[^\/!]/.test(node.getAttribute('href'));
      },
      tags: [ 'cat.keyboard', 'best-practice' ],
      all: [],
      any: [ 'skip-link' ],
      none: []
    }, {
      id: 'tabindex',
      selector: '[tabindex]',
      tags: [ 'cat.keyboard', 'best-practice' ],
      all: [],
      any: [ 'tabindex' ],
      none: []
    }, {
      id: 'table-duplicate-name',
      selector: 'table',
      tags: [ 'cat.tables', 'best-practice' ],
      all: [],
      any: [],
      none: [ 'same-caption-summary' ]
    }, {
      id: 'table-fake-caption',
      selector: 'table',
      matches: function matches(node, virtualNode) {
        return axe.commons.table.isDataTable(node);
      },
      tags: [ 'cat.tables', 'experimental', 'wcag2a', 'wcag131', 'section508', 'section508.22.g' ],
      all: [ 'caption-faked' ],
      any: [],
      none: []
    }, {
      id: 'td-has-header',
      selector: 'table',
      matches: function matches(node, virtualNode) {
        if (axe.commons.table.isDataTable(node)) {
          var tableArray = axe.commons.table.toArray(node);
          return tableArray.length >= 3 && tableArray[0].length >= 3 && tableArray[1].length >= 3 && tableArray[2].length >= 3;
        }
        return false;
      },
      tags: [ 'cat.tables', 'experimental', 'wcag2a', 'wcag131', 'section508', 'section508.22.g' ],
      all: [ 'td-has-header' ],
      any: [],
      none: []
    }, {
      id: 'td-headers-attr',
      selector: 'table',
      tags: [ 'cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g' ],
      all: [ 'td-headers-attr' ],
      any: [],
      none: []
    }, {
      id: 'th-has-data-cells',
      selector: 'table',
      matches: function matches(node, virtualNode) {
        return axe.commons.table.isDataTable(node);
      },
      tags: [ 'cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g' ],
      all: [ 'th-has-data-cells' ],
      any: [],
      none: []
    }, {
      id: 'valid-lang',
      selector: '[lang], [xml\\:lang]',
      matches: function matches(node, virtualNode) {
        return node.nodeName.toLowerCase() !== 'html';
      },
      tags: [ 'cat.language', 'wcag2aa', 'wcag312' ],
      all: [],
      any: [],
      none: [ 'valid-lang' ]
    }, {
      id: 'video-caption',
      selector: 'video',
      excludeHidden: false,
      tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag122', 'section508', 'section508.22.a' ],
      all: [],
      any: [],
      none: [ 'caption' ]
    }, {
      id: 'video-description',
      selector: 'video',
      excludeHidden: false,
      tags: [ 'cat.text-alternatives', 'wcag2aa', 'wcag125', 'section508', 'section508.22.b' ],
      all: [],
      any: [],
      none: [ 'description' ]
    } ],
    checks: [ {
      id: 'abstractrole',
      evaluate: function evaluate(node, options, virtualNode) {
        return axe.commons.aria.getRoleType(node.getAttribute('role')) === 'abstract';
      }
    }, {
      id: 'aria-allowed-attr',
      evaluate: function evaluate(node, options, virtualNode) {
        options = options || {};
        var invalid = [];
        var attr, attrName, allowed, role = node.getAttribute('role'), attrs = node.attributes;
        if (!role) {
          role = axe.commons.aria.implicitRole(node);
        }
        allowed = axe.commons.aria.allowedAttr(role);
        if (Array.isArray(options[role])) {
          allowed = axe.utils.uniqueArray(options[role].concat(allowed));
        }
        if (role && allowed) {
          for (var i = 0, l = attrs.length; i < l; i++) {
            attr = attrs[i];
            attrName = attr.name;
            if (axe.commons.aria.validateAttr(attrName) && !allowed.includes(attrName)) {
              invalid.push(attrName + '="' + attr.nodeValue + '"');
            }
          }
        }
        if (invalid.length) {
          this.data(invalid);
          return false;
        }
        return true;
      }
    }, {
      id: 'aria-hidden-body',
      evaluate: function evaluate(node, options, virtualNode) {
        return node.getAttribute('aria-hidden') !== 'true';
      }
    }, {
      id: 'aria-errormessage',
      evaluate: function evaluate(node, options, virtualNode) {
        options = Array.isArray(options) ? options : [];
        var attr = node.getAttribute('aria-errormessage'), hasAttr = node.hasAttribute('aria-errormessage');
        var doc = axe.commons.dom.getRootNode(node);
        function validateAttrValue() {
          var idref = attr && doc.getElementById(attr);
          if (idref) {
            return idref.getAttribute('role') === 'alert' || idref.getAttribute('aria-live') === 'assertive' || axe.utils.tokenList(node.getAttribute('aria-describedby') || '').indexOf(attr) > -1;
          }
        }
        if (options.indexOf(attr) === -1 && hasAttr) {
          if (!validateAttrValue()) {
            this.data(attr);
            return false;
          }
        }
        return true;
      }
    }, {
      id: 'has-widget-role',
      evaluate: function evaluate(node, options, virtualNode) {
        var role = node.getAttribute('role');
        if (role === null) {
          return false;
        }
        var roleType = axe.commons.aria.getRoleType(role);
        return roleType === 'widget' || roleType === 'composite';
      },
      options: []
    }, {
      id: 'implicit-role-fallback',
      evaluate: function evaluate(node, options, virtualNode) {
        var role = node.getAttribute('role');
        if (role === null || !axe.commons.aria.isValidRole(role)) {
          return true;
        }
        var roleType = axe.commons.aria.getRoleType(role);
        return axe.commons.aria.implicitRole(node) === roleType;
      }
    }, {
      id: 'invalidrole',
      evaluate: function evaluate(node, options, virtualNode) {
        return !axe.commons.aria.isValidRole(node.getAttribute('role'));
      }
    }, {
      id: 'aria-required-attr',
      evaluate: function evaluate(node, options, virtualNode) {
        options = options || {};
        var missing = [];
        if (node.hasAttributes()) {
          var attr, role = node.getAttribute('role'), required = axe.commons.aria.requiredAttr(role);
          if (Array.isArray(options[role])) {
            required = axe.utils.uniqueArray(options[role], required);
          }
          if (role && required) {
            for (var i = 0, l = required.length; i < l; i++) {
              attr = required[i];
              if (!node.getAttribute(attr)) {
                missing.push(attr);
              }
            }
          }
        }
        if (missing.length) {
          this.data(missing);
          return false;
        }
        return true;
      }
    }, {
      id: 'aria-required-children',
      evaluate: function evaluate(node, options, virtualNode) {
        var requiredOwned = axe.commons.aria.requiredOwned, implicitNodes = axe.commons.aria.implicitNodes, matchesSelector = axe.commons.utils.matchesSelector, idrefs = axe.commons.dom.idrefs;
        function owns(node, virtualTree, role, ariaOwned) {
          if (node === null) {
            return false;
          }
          var implicit = implicitNodes(role), selector = [ '[role="' + role + '"]' ];
          if (implicit) {
            selector = selector.concat(implicit);
          }
          selector = selector.join(',');
          return ariaOwned ? matchesSelector(node, selector) || !!axe.utils.querySelectorAll(virtualTree, selector)[0] : !!axe.utils.querySelectorAll(virtualTree, selector)[0];
        }
        function ariaOwns(nodes, role) {
          var index, length;
          for (index = 0, length = nodes.length; index < length; index++) {
            if (nodes[index] === null) {
              continue;
            }
            var virtualTree = axe.utils.getNodeFromTree(axe._tree[0], nodes[index]);
            if (owns(nodes[index], virtualTree, role, true)) {
              return true;
            }
          }
          return false;
        }
        function missingRequiredChildren(node, childRoles, all, role) {
          var i, l = childRoles.length, missing = [], ownedElements = idrefs(node, 'aria-owns');
          for (i = 0; i < l; i++) {
            var r = childRoles[i];
            if (owns(node, virtualNode, r) || ariaOwns(ownedElements, r)) {
              if (!all) {
                return null;
              }
            } else {
              if (all) {
                missing.push(r);
              }
            }
          }
          if (role === 'combobox') {
            var textboxIndex = missing.indexOf('textbox');
            var textTypeInputs = [ 'text', 'search', 'email', 'url', 'tel' ];
            if (textboxIndex >= 0 && node.tagName === 'INPUT' && textTypeInputs.includes(node.type)) {
              missing.splice(textboxIndex, 1);
            }
            var listboxIndex = missing.indexOf('listbox');
            var expanded = node.getAttribute('aria-expanded');
            if (listboxIndex >= 0 && (!expanded || expanded === 'false')) {
              missing.splice(listboxIndex, 1);
            }
          }
          if (missing.length) {
            return missing;
          }
          if (!all && childRoles.length) {
            return childRoles;
          }
          return null;
        }
        var role = node.getAttribute('role');
        var required = requiredOwned(role);
        if (!required) {
          return true;
        }
        var all = false;
        var childRoles = required.one;
        if (!childRoles) {
          var all = true;
          childRoles = required.all;
        }
        var missing = missingRequiredChildren(node, childRoles, all, role);
        if (!missing) {
          return true;
        }
        this.data(missing);
        return false;
      }
    }, {
      id: 'aria-required-parent',
      evaluate: function evaluate(node, options, virtualNode) {
        function getSelector(role) {
          var impliedNative = axe.commons.aria.implicitNodes(role) || [];
          return impliedNative.concat('[role="' + role + '"]').join(',');
        }
        function getMissingContext(virtualNode, requiredContext, includeElement) {
          var index, length, role = virtualNode.actualNode.getAttribute('role'), missing = [];
          if (!requiredContext) {
            requiredContext = axe.commons.aria.requiredContext(role);
          }
          if (!requiredContext) {
            return null;
          }
          for (index = 0, length = requiredContext.length; index < length; index++) {
            if (includeElement && axe.utils.matchesSelector(virtualNode.actualNode, getSelector(requiredContext[index]))) {
              return null;
            }
            if (axe.commons.dom.findUpVirtual(virtualNode, getSelector(requiredContext[index]))) {
              return null;
            } else {
              missing.push(requiredContext[index]);
            }
          }
          return missing;
        }
        function getAriaOwners(element) {
          var owners = [], o = null;
          while (element) {
            if (element.getAttribute('id')) {
              var id = axe.commons.utils.escapeSelector(element.getAttribute('id'));
              var doc = axe.commons.dom.getRootNode(element);
              o = doc.querySelector('[aria-owns~=' + id + ']');
              if (o) {
                owners.push(o);
              }
            }
            element = element.parentElement;
          }
          return owners.length ? owners : null;
        }
        var missingParents = getMissingContext(virtualNode);
        if (!missingParents) {
          return true;
        }
        var owners = getAriaOwners(node);
        if (owners) {
          for (var i = 0, l = owners.length; i < l; i++) {
            missingParents = getMissingContext(axe.utils.getNodeFromTree(axe._tree[0], owners[i]), missingParents, true);
            if (!missingParents) {
              return true;
            }
          }
        }
        this.data(missingParents);
        return false;
      }
    }, {
      id: 'aria-valid-attr-value',
      evaluate: function evaluate(node, options, virtualNode) {
        options = Array.isArray(options) ? options : [];
        var invalid = [], aria = /^aria-/;
        var attr, attrName, attrs = node.attributes;
        var skipAttrs = [ 'aria-errormessage' ];
        for (var i = 0, l = attrs.length; i < l; i++) {
          attr = attrs[i];
          attrName = attr.name;
          if (!skipAttrs.includes(attrName)) {
            if (options.indexOf(attrName) === -1 && aria.test(attrName) && !axe.commons.aria.validateAttrValue(node, attrName)) {
              invalid.push(attrName + '="' + attr.nodeValue + '"');
            }
          }
        }
        if (invalid.length) {
          this.data(invalid);
          return false;
        }
        return true;
      },
      options: []
    }, {
      id: 'aria-valid-attr',
      evaluate: function evaluate(node, options, virtualNode) {
        options = Array.isArray(options) ? options : [];
        var invalid = [], aria = /^aria-/;
        var attr, attrs = node.attributes;
        for (var i = 0, l = attrs.length; i < l; i++) {
          attr = attrs[i].name;
          if (options.indexOf(attr) === -1 && aria.test(attr) && !axe.commons.aria.validateAttr(attr)) {
            invalid.push(attr);
          }
        }
        if (invalid.length) {
          this.data(invalid);
          return false;
        }
        return true;
      },
      options: []
    }, {
      id: 'valid-scrollable-semantics',
      evaluate: function evaluate(node, options, virtualNode) {
        var VALID_TAG_NAMES_FOR_SCROLLABLE_REGIONS = {
          ARTICLE: true,
          ASIDE: true,
          NAV: true,
          SECTION: true
        };
        var VALID_ROLES_FOR_SCROLLABLE_REGIONS = {
          banner: false,
          complementary: true,
          contentinfo: true,
          form: true,
          main: true,
          navigation: true,
          region: true,
          search: false
        };
        function validScrollableTagName(node) {
          var tagName = node.tagName.toUpperCase();
          return VALID_TAG_NAMES_FOR_SCROLLABLE_REGIONS[tagName] || false;
        }
        function validScrollableRole(node) {
          var role = node.getAttribute('role');
          if (!role) {
            return false;
          }
          return VALID_ROLES_FOR_SCROLLABLE_REGIONS[role.toLowerCase()] || false;
        }
        function validScrollableSemantics(node) {
          return validScrollableRole(node) || validScrollableTagName(node);
        }
        return validScrollableSemantics(node);
      },
      options: []
    }, {
      id: 'color-contrast',
      evaluate: function evaluate(node, options, virtualNode) {
        if (!axe.commons.dom.isVisible(node, false)) {
          return true;
        }
        var noScroll = !!(options || {}).noScroll;
        var bgNodes = [], bgColor = axe.commons.color.getBackgroundColor(node, bgNodes, noScroll), fgColor = axe.commons.color.getForegroundColor(node, noScroll);
        var nodeStyle = window.getComputedStyle(node);
        var fontSize = parseFloat(nodeStyle.getPropertyValue('font-size'));
        var fontWeight = nodeStyle.getPropertyValue('font-weight');
        var bold = [ 'bold', 'bolder', '600', '700', '800', '900' ].indexOf(fontWeight) !== -1;
        var cr = axe.commons.color.hasValidContrastRatio(bgColor, fgColor, fontSize, bold);
        var truncatedResult = Math.floor(cr.contrastRatio * 100) / 100;
        var missing;
        if (bgColor === null) {
          missing = axe.commons.color.incompleteData.get('bgColor');
        }
        var equalRatio = false;
        if (truncatedResult === 1) {
          equalRatio = true;
          missing = axe.commons.color.incompleteData.set('bgColor', 'equalRatio');
        }
        var data = {
          fgColor: fgColor ? fgColor.toHexString() : undefined,
          bgColor: bgColor ? bgColor.toHexString() : undefined,
          contrastRatio: cr ? truncatedResult : undefined,
          fontSize: (fontSize * 72 / 96).toFixed(1) + 'pt',
          fontWeight: bold ? 'bold' : 'normal',
          missingData: missing,
          expectedContrastRatio: cr.expectedContrastRatio + ':1'
        };
        this.data(data);
        if (fgColor === null || bgColor === null || equalRatio) {
          missing = null;
          axe.commons.color.incompleteData.clear();
          this.relatedNodes(bgNodes);
          return undefined;
        } else if (!cr.isValid) {
          this.relatedNodes(bgNodes);
        }
        return cr.isValid;
      }
    }, {
      id: 'link-in-text-block',
      evaluate: function evaluate(node, options, virtualNode) {
        var _axe$commons = axe.commons, color = _axe$commons.color, dom = _axe$commons.dom;
        function getContrast(color1, color2) {
          var c1lum = color1.getRelativeLuminance();
          var c2lum = color2.getRelativeLuminance();
          return (Math.max(c1lum, c2lum) + .05) / (Math.min(c1lum, c2lum) + .05);
        }
        var blockLike = [ 'block', 'list-item', 'table', 'flex', 'grid', 'inline-block' ];
        function isBlock(elm) {
          var display = window.getComputedStyle(elm).getPropertyValue('display');
          return blockLike.indexOf(display) !== -1 || display.substr(0, 6) === 'table-';
        }
        if (isBlock(node)) {
          return false;
        }
        var parentBlock = dom.getComposedParent(node);
        while (parentBlock.nodeType === 1 && !isBlock(parentBlock)) {
          parentBlock = dom.getComposedParent(parentBlock);
        }
        this.relatedNodes([ parentBlock ]);
        if (color.elementIsDistinct(node, parentBlock)) {
          return true;
        } else {
          var nodeColor, parentColor;
          nodeColor = color.getForegroundColor(node);
          parentColor = color.getForegroundColor(parentBlock);
          if (!nodeColor || !parentColor) {
            return undefined;
          }
          var contrast = getContrast(nodeColor, parentColor);
          if (contrast === 1) {
            return true;
          } else if (contrast >= 3) {
            axe.commons.color.incompleteData.set('fgColor', 'bgContrast');
            this.data({
              missingData: axe.commons.color.incompleteData.get('fgColor')
            });
            axe.commons.color.incompleteData.clear();
            return undefined;
          }
          nodeColor = color.getBackgroundColor(node);
          parentColor = color.getBackgroundColor(parentBlock);
          if (!nodeColor || !parentColor || getContrast(nodeColor, parentColor) >= 3) {
            var reason = void 0;
            if (!nodeColor || !parentColor) {
              reason = axe.commons.color.incompleteData.get('bgColor');
            } else {
              reason = 'bgContrast';
            }
            axe.commons.color.incompleteData.set('fgColor', reason);
            this.data({
              missingData: axe.commons.color.incompleteData.get('fgColor')
            });
            axe.commons.color.incompleteData.clear();
            return undefined;
          }
        }
        return false;
      }
    }, {
      id: 'fieldset',
      evaluate: function evaluate(node, options, virtualNode) {
        var failureCode, self = this;
        function getUnrelatedElements(parent, name) {
          return axe.commons.utils.toArray(parent.querySelectorAll('select,textarea,button,input:not([name="' + name + '"]):not([type="hidden"])'));
        }
        function checkFieldset(group, name) {
          var firstNode = group.firstElementChild;
          if (!firstNode || firstNode.nodeName.toUpperCase() !== 'LEGEND') {
            self.relatedNodes([ group ]);
            failureCode = 'no-legend';
            return false;
          }
          if (!axe.commons.text.accessibleText(firstNode)) {
            self.relatedNodes([ firstNode ]);
            failureCode = 'empty-legend';
            return false;
          }
          var otherElements = getUnrelatedElements(group, name);
          if (otherElements.length) {
            self.relatedNodes(otherElements);
            failureCode = 'mixed-inputs';
            return false;
          }
          return true;
        }
        function checkARIAGroup(group, name) {
          var hasLabelledByText = axe.commons.dom.idrefs(group, 'aria-labelledby').some(function(element) {
            return element && axe.commons.text.accessibleText(element);
          });
          var ariaLabel = group.getAttribute('aria-label');
          if (!hasLabelledByText && !(ariaLabel && axe.commons.text.sanitize(ariaLabel))) {
            self.relatedNodes(group);
            failureCode = 'no-group-label';
            return false;
          }
          var otherElements = getUnrelatedElements(group, name);
          if (otherElements.length) {
            self.relatedNodes(otherElements);
            failureCode = 'group-mixed-inputs';
            return false;
          }
          return true;
        }
        function spliceCurrentNode(nodes, current) {
          return axe.commons.utils.toArray(nodes).filter(function(candidate) {
            return candidate !== current;
          });
        }
        function runCheck(virtualNode) {
          var name = axe.commons.utils.escapeSelector(virtualNode.actualNode.name);
          var root = axe.commons.dom.getRootNode(virtualNode.actualNode);
          var matchingNodes = root.querySelectorAll('input[type="' + axe.commons.utils.escapeSelector(virtualNode.actualNode.type) + '"][name="' + name + '"]');
          if (matchingNodes.length < 2) {
            return true;
          }
          var fieldset = axe.commons.dom.findUpVirtual(virtualNode, 'fieldset');
          var group = axe.commons.dom.findUpVirtual(virtualNode, '[role="group"]' + (virtualNode.actualNode.type === 'radio' ? ',[role="radiogroup"]' : ''));
          if (!group && !fieldset) {
            failureCode = 'no-group';
            self.relatedNodes(spliceCurrentNode(matchingNodes, virtualNode.actualNode));
            return false;
          } else if (fieldset) {
            return checkFieldset(fieldset, name);
          } else {
            return checkARIAGroup(group, name);
          }
        }
        var data = {
          name: node.getAttribute('name'),
          type: node.getAttribute('type')
        };
        var result = runCheck(virtualNode);
        if (!result) {
          data.failureCode = failureCode;
        }
        this.data(data);
        return result;
      },
      after: function after(results, options) {
        var seen = {};
        return results.filter(function(result) {
          if (result.result) {
            return true;
          }
          var data = result.data;
          if (data) {
            seen[data.type] = seen[data.type] || {};
            if (!seen[data.type][data.name]) {
              seen[data.type][data.name] = [ data ];
              return true;
            }
            var hasBeenSeen = seen[data.type][data.name].some(function(candidate) {
              return candidate.failureCode === data.failureCode;
            });
            if (!hasBeenSeen) {
              seen[data.type][data.name].push(data);
            }
            return !hasBeenSeen;
          }
          return false;
        });
      }
    }, {
      id: 'group-labelledby',
      evaluate: function evaluate(node, options, virtualNode) {
        this.data({
          name: node.getAttribute('name'),
          type: node.getAttribute('type')
        });
        var doc = axe.commons.dom.getRootNode(node);
        var matchingNodes = doc.querySelectorAll('input[type="' + axe.commons.utils.escapeSelector(node.type) + '"][name="' + axe.commons.utils.escapeSelector(node.name) + '"]');
        if (matchingNodes.length <= 1) {
          return true;
        }
        return [].map.call(matchingNodes, function(m) {
          var l = m.getAttribute('aria-labelledby');
          return l ? l.split(/\s+/) : [];
        }).reduce(function(prev, curr) {
          return prev.filter(function(n) {
            return curr.includes(n);
          });
        }).filter(function(n) {
          var labelNode = doc.getElementById(n);
          return labelNode && axe.commons.text.accessibleText(labelNode, true);
        }).length !== 0;
      },
      after: function after(results, options) {
        var seen = {};
        return results.filter(function(result) {
          var data = result.data;
          if (data) {
            seen[data.type] = seen[data.type] || {};
            if (!seen[data.type][data.name]) {
              seen[data.type][data.name] = true;
              return true;
            }
          }
          return false;
        });
      }
    }, {
      id: 'accesskeys',
      evaluate: function evaluate(node, options, virtualNode) {
        if (axe.commons.dom.isVisible(node, false)) {
          this.data(node.getAttribute('accesskey'));
          this.relatedNodes([ node ]);
        }
        return true;
      },
      after: function after(results, options) {
        var seen = {};
        return results.filter(function(r) {
          if (!r.data) {
            return false;
          }
          var key = r.data.toUpperCase();
          if (!seen[key]) {
            seen[key] = r;
            r.relatedNodes = [];
            return true;
          }
          seen[key].relatedNodes.push(r.relatedNodes[0]);
          return false;
        }).map(function(r) {
          r.result = !!r.relatedNodes.length;
          return r;
        });
      }
    }, {
      id: 'focusable-no-name',
      evaluate: function evaluate(node, options, virtualNode) {
        var tabIndex = node.getAttribute('tabindex'), inFocusOrder = axe.commons.dom.isFocusable(node) && tabIndex > -1;
        if (!inFocusOrder) {
          return false;
        }
        return !axe.commons.text.accessibleTextVirtual(virtualNode);
      }
    }, {
      id: 'landmark-is-top-level',
      evaluate: function evaluate(node, options, virtualNode) {
        var landmarks = axe.commons.aria.getRolesByType('landmark');
        var parent = axe.commons.dom.getComposedParent(node);
        this.data({
          role: node.getAttribute('role') || axe.commons.aria.implicitRole(node)
        });
        while (parent) {
          var role = parent.getAttribute('role');
          if (!role && parent.tagName.toLowerCase() !== 'form') {
            role = axe.commons.aria.implicitRole(parent);
          }
          if (role && landmarks.includes(role)) {
            return false;
          }
          parent = axe.commons.dom.getComposedParent(parent);
        }
        return true;
      }
    }, {
      id: 'page-has-heading-one',
      evaluate: function evaluate(node, options, virtualNode) {
        if (!options || !options.selector || typeof options.selector !== 'string') {
          throw new TypeError('visible-in-page requires options.selector to be a string');
        }
        var matchingElms = axe.utils.querySelectorAll(virtualNode, options.selector);
        this.relatedNodes(matchingElms.map(function(vNode) {
          return vNode.actualNode;
        }));
        return matchingElms.length > 0;
      },
      after: function after(results, options) {
        var elmUsedAnywhere = results.some(function(frameResult) {
          return frameResult.result === true;
        });
        if (elmUsedAnywhere) {
          results.forEach(function(result) {
            result.result = true;
          });
        }
        return results;
      },
      options: {
        selector: 'h1:not([role]), [role="heading"][aria-level="1"]'
      }
    }, {
      id: 'page-has-main',
      evaluate: function evaluate(node, options, virtualNode) {
        if (!options || !options.selector || typeof options.selector !== 'string') {
          throw new TypeError('visible-in-page requires options.selector to be a string');
        }
        var matchingElms = axe.utils.querySelectorAll(virtualNode, options.selector);
        this.relatedNodes(matchingElms.map(function(vNode) {
          return vNode.actualNode;
        }));
        return matchingElms.length > 0;
      },
      after: function after(results, options) {
        var elmUsedAnywhere = results.some(function(frameResult) {
          return frameResult.result === true;
        });
        if (elmUsedAnywhere) {
          results.forEach(function(result) {
            result.result = true;
          });
        }
        return results;
      },
      options: {
        selector: 'main:not([role]), [role=\'main\']'
      }
    }, {
      id: 'page-no-duplicate-banner',
      evaluate: function evaluate(node, options, virtualNode) {
        if (!options || !options.selector || typeof options.selector !== 'string') {
          throw new TypeError('visible-in-page requires options.selector to be a string');
        }
        var elms = axe.utils.querySelectorAll(virtualNode, options.selector);
        if (typeof options.nativeScopeFilter === 'string') {
          elms = elms.filter(function(elm) {
            return elm.actualNode.hasAttribute('role') || !axe.commons.dom.findUpVirtual(elm, options.nativeScopeFilter);
          });
        }
        this.relatedNodes(elms.map(function(elm) {
          return elm.actualNode;
        }));
        return elms.length <= 1;
      },
      options: {
        selector: 'header:not([role]), [role=banner]',
        nativeScopeFilter: 'article, aside, main, nav, section'
      }
    }, {
      id: 'page-no-duplicate-contentinfo',
      evaluate: function evaluate(node, options, virtualNode) {
        if (!options || !options.selector || typeof options.selector !== 'string') {
          throw new TypeError('visible-in-page requires options.selector to be a string');
        }
        var elms = axe.utils.querySelectorAll(virtualNode, options.selector);
        if (typeof options.nativeScopeFilter === 'string') {
          elms = elms.filter(function(elm) {
            return elm.actualNode.hasAttribute('role') || !axe.commons.dom.findUpVirtual(elm, options.nativeScopeFilter);
          });
        }
        this.relatedNodes(elms.map(function(elm) {
          return elm.actualNode;
        }));
        return elms.length <= 1;
      },
      options: {
        selector: 'footer:not([role]), [role=contentinfo]',
        nativeScopeFilter: 'article, aside, main, nav, section'
      }
    }, {
      id: 'page-no-duplicate-main',
      evaluate: function evaluate(node, options, virtualNode) {
        if (!options || !options.selector || typeof options.selector !== 'string') {
          throw new TypeError('visible-in-page requires options.selector to be a string');
        }
        var elms = axe.utils.querySelectorAll(virtualNode, options.selector);
        if (typeof options.nativeScopeFilter === 'string') {
          elms = elms.filter(function(elm) {
            return elm.actualNode.hasAttribute('role') || !axe.commons.dom.findUpVirtual(elm, options.nativeScopeFilter);
          });
        }
        this.relatedNodes(elms.map(function(elm) {
          return elm.actualNode;
        }));
        return elms.length <= 1;
      },
      options: {
        selector: 'main:not([role]), [role=\'main\']'
      }
    }, {
      id: 'tabindex',
      evaluate: function evaluate(node, options, virtualNode) {
        return node.tabIndex <= 0;
      }
    }, {
      id: 'duplicate-img-label',
      evaluate: function evaluate(node, options, virtualNode) {
        var text = axe.commons.text.visibleVirtual(virtualNode, true).toLowerCase();
        if (text === '') {
          return false;
        }
        var images = axe.utils.querySelectorAll(virtualNode, 'img').filter(function(_ref) {
          var actualNode = _ref.actualNode;
          return axe.commons.dom.isVisible(actualNode) && ![ 'none', 'presentation' ].includes(actualNode.getAttribute('role'));
        });
        return images.some(function(img) {
          return text === axe.commons.text.accessibleTextVirtual(img).toLowerCase();
        });
      }
    }, {
      id: 'explicit-label',
      evaluate: function evaluate(node, options, virtualNode) {
        if (node.getAttribute('id')) {
          var root = axe.commons.dom.getRootNode(node);
          var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
          var label = root.querySelector('label[for="' + id + '"]');
          if (label) {
            return !!axe.commons.text.accessibleText(label);
          }
        }
        return false;
      }
    }, {
      id: 'help-same-as-label',
      evaluate: function evaluate(node, options, virtualNode) {
        var labelText = axe.commons.text.labelVirtual(virtualNode), check = node.getAttribute('title');
        if (!labelText) {
          return false;
        }
        if (!check) {
          check = '';
          if (node.getAttribute('aria-describedby')) {
            var ref = axe.commons.dom.idrefs(node, 'aria-describedby');
            check = ref.map(function(thing) {
              return thing ? axe.commons.text.accessibleText(thing) : '';
            }).join('');
          }
        }
        return axe.commons.text.sanitize(check) === axe.commons.text.sanitize(labelText);
      },
      enabled: false
    }, {
      id: 'implicit-label',
      evaluate: function evaluate(node, options, virtualNode) {
        var label = axe.commons.dom.findUpVirtual(virtualNode, 'label');
        if (label) {
          return !!axe.commons.text.accessibleTextVirtual(label);
        }
        return false;
      }
    }, {
      id: 'multiple-label',
      evaluate: function evaluate(node, options, virtualNode) {
        var id = axe.commons.utils.escapeSelector(node.getAttribute('id'));
        var labels = Array.from(document.querySelectorAll('label[for="' + id + '"]'));
        var parent = node.parentNode;
        if (labels.length) {
          labels = labels.filter(function(label, index) {
            if (index === 0 && !axe.commons.dom.isVisible(label, true) || axe.commons.dom.isVisible(label, true)) {
              return label;
            }
          });
        }
        while (parent) {
          if (parent.tagName === 'LABEL' && labels.indexOf(parent) === -1) {
            labels.push(parent);
          }
          parent = parent.parentNode;
        }
        this.relatedNodes(labels);
        return labels.length > 1;
      }
    }, {
      id: 'title-only',
      evaluate: function evaluate(node, options, virtualNode) {
        var labelText = axe.commons.text.labelVirtual(virtualNode);
        return !labelText && !!(node.getAttribute('title') || node.getAttribute('aria-describedby'));
      }
    }, {
      id: 'has-lang',
      evaluate: function evaluate(node, options, virtualNode) {
        return !!(node.getAttribute('lang') || node.getAttribute('xml:lang') || '').trim();
      }
    }, {
      id: 'valid-lang',
      evaluate: function evaluate(node, options, virtualNode) {
        function getBaseLang(lang) {
          return lang.trim().split('-')[0].toLowerCase();
        }
        var langs, invalid;
        langs = (options ? options : axe.commons.utils.validLangs()).map(getBaseLang);
        invalid = [ 'lang', 'xml:lang' ].reduce(function(invalid, langAttr) {
          var langVal = node.getAttribute(langAttr);
          if (typeof langVal !== 'string') {
            return invalid;
          }
          var baselangVal = getBaseLang(langVal);
          if (baselangVal !== '' && langs.indexOf(baselangVal) === -1) {
            invalid.push(langAttr + '="' + node.getAttribute(langAttr) + '"');
          }
          return invalid;
        }, []);
        if (invalid.length) {
          this.data(invalid);
          return true;
        }
        return false;
      }
    }, {
      id: 'dlitem',
      evaluate: function evaluate(node, options, virtualNode) {
        var parent = axe.commons.dom.getComposedParent(node);
        return parent.nodeName.toUpperCase() === 'DL';
      }
    }, {
      id: 'has-listitem',
      evaluate: function evaluate(node, options, virtualNode) {
        return virtualNode.children.every(function(_ref2) {
          var actualNode = _ref2.actualNode;
          return actualNode.nodeName.toUpperCase() !== 'LI';
        });
      }
    }, {
      id: 'listitem',
      evaluate: function evaluate(node, options, virtualNode) {
        var parent = axe.commons.dom.getComposedParent(node);
        return [ 'UL', 'OL' ].includes(parent.nodeName.toUpperCase()) || (parent.getAttribute('role') || '').toLowerCase() === 'list';
      }
    }, {
      id: 'only-dlitems',
      evaluate: function evaluate(node, options, virtualNode) {
        var bad = [], permitted = [ 'STYLE', 'META', 'LINK', 'MAP', 'AREA', 'SCRIPT', 'DATALIST', 'TEMPLATE' ], hasNonEmptyTextNode = false;
        virtualNode.children.forEach(function(_ref3) {
          var actualNode = _ref3.actualNode;
          var nodeName = actualNode.nodeName.toUpperCase();
          if (actualNode.nodeType === 1 && nodeName !== 'DT' && nodeName !== 'DD' && permitted.indexOf(nodeName) === -1) {
            bad.push(actualNode);
          } else if (actualNode.nodeType === 3 && actualNode.nodeValue.trim() !== '') {
            hasNonEmptyTextNode = true;
          }
        });
        if (bad.length) {
          this.relatedNodes(bad);
        }
        var retVal = !!bad.length || hasNonEmptyTextNode;
        return retVal;
      }
    }, {
      id: 'only-listitems',
      evaluate: function evaluate(node, options, virtualNode) {
        var bad = [], permitted = [ 'STYLE', 'META', 'LINK', 'MAP', 'AREA', 'SCRIPT', 'DATALIST', 'TEMPLATE' ], hasNonEmptyTextNode = false;
        virtualNode.children.forEach(function(_ref4) {
          var actualNode = _ref4.actualNode;
          var nodeName = actualNode.nodeName.toUpperCase();
          if (actualNode.nodeType === 1 && nodeName !== 'LI' && permitted.indexOf(nodeName) === -1) {
            bad.push(actualNode);
          } else if (actualNode.nodeType === 3 && actualNode.nodeValue.trim() !== '') {
            hasNonEmptyTextNode = true;
          }
        });
        if (bad.length) {
          this.relatedNodes(bad);
        }
        return !!bad.length || hasNonEmptyTextNode;
      }
    }, {
      id: 'structured-dlitems',
      evaluate: function evaluate(node, options, virtualNode) {
        var children = virtualNode.children;
        if (!children || !children.length) {
          return false;
        }
        var hasDt = false, hasDd = false, nodeName;
        for (var i = 0; i < children.length; i++) {
          nodeName = children[i].actualNode.nodeName.toUpperCase();
          if (nodeName === 'DT') {
            hasDt = true;
          }
          if (hasDt && nodeName === 'DD') {
            return false;
          }
          if (nodeName === 'DD') {
            hasDd = true;
          }
        }
        return hasDt || hasDd;
      }
    }, {
      id: 'caption',
      evaluate: function evaluate(node, options, virtualNode) {
        var tracks = axe.utils.querySelectorAll(virtualNode, 'track');
        if (tracks.length) {
          return !tracks.some(function(_ref5) {
            var actualNode = _ref5.actualNode;
            return (actualNode.getAttribute('kind') || '').toLowerCase() === 'captions';
          });
        }
        return undefined;
      }
    }, {
      id: 'description',
      evaluate: function evaluate(node, options, virtualNode) {
        var tracks = axe.utils.querySelectorAll(virtualNode, 'track');
        if (tracks.length) {
          var out = !tracks.some(function(_ref6) {
            var actualNode = _ref6.actualNode;
            return (actualNode.getAttribute('kind') || '').toLowerCase() === 'descriptions';
          });
          return out;
        }
        return undefined;
      }
    }, {
      id: 'frame-tested',
      evaluate: function evaluate(node, options, virtualNode) {
        var resolve = this.async();
        var _Object$assign = Object.assign({
          isViolation: false,
          timeout: 500
        }, options), isViolation = _Object$assign.isViolation, timeout = _Object$assign.timeout;
        var timer = setTimeout(function() {
          timer = setTimeout(function() {
            timer = null;
            resolve(isViolation ? false : undefined);
          }, 0);
        }, timeout);
        axe.utils.respondable(node.contentWindow, 'axe.ping', null, undefined, function() {
          if (timer !== null) {
            clearTimeout(timer);
            resolve(true);
          }
        });
      },
      options: {
        isViolation: false
      }
    }, {
      id: 'meta-viewport-large',
      evaluate: function evaluate(node, options, virtualNode) {
        options = options || {};
        var params, content = node.getAttribute('content') || '', parsedParams = content.split(/[;,]/), result = {}, minimum = options.scaleMinimum || 2, lowerBound = options.lowerBound || false;
        for (var i = 0, l = parsedParams.length; i < l; i++) {
          params = parsedParams[i].split('=');
          var key = params.shift().toLowerCase();
          if (key && params.length) {
            result[key.trim()] = params.shift().trim().toLowerCase();
          }
        }
        if (lowerBound && result['maximum-scale'] && parseFloat(result['maximum-scale']) < lowerBound) {
          return true;
        }
        if (!lowerBound && result['user-scalable'] === 'no') {
          return false;
        }
        if (result['maximum-scale'] && parseFloat(result['maximum-scale']) < minimum) {
          return false;
        }
        return true;
      },
      options: {
        scaleMinimum: 5,
        lowerBound: 2
      }
    }, {
      id: 'meta-viewport',
      evaluate: function evaluate(node, options, virtualNode) {
        options = options || {};
        var params, content = node.getAttribute('content') || '', parsedParams = content.split(/[;,]/), result = {}, minimum = options.scaleMinimum || 2, lowerBound = options.lowerBound || false;
        for (var i = 0, l = parsedParams.length; i < l; i++) {
          params = parsedParams[i].split('=');
          var key = params.shift().toLowerCase();
          if (key && params.length) {
            result[key.trim()] = params.shift().trim().toLowerCase();
          }
        }
        if (lowerBound && result['maximum-scale'] && parseFloat(result['maximum-scale']) < lowerBound) {
          return true;
        }
        if (!lowerBound && result['user-scalable'] === 'no') {
          return false;
        }
        if (result['maximum-scale'] && parseFloat(result['maximum-scale']) < minimum) {
          return false;
        }
        return true;
      },
      options: {
        scaleMinimum: 2
      }
    }, {
      id: 'header-present',
      evaluate: function evaluate(node, options, virtualNode) {
        return !!axe.utils.querySelectorAll(virtualNode, 'h1, h2, h3, h4, h5, h6, [role="heading"]')[0];
      }
    }, {
      id: 'heading-order',
      evaluate: function evaluate(node, options, virtualNode) {
        var ariaHeadingLevel = node.getAttribute('aria-level');
        if (ariaHeadingLevel !== null) {
          this.data(parseInt(ariaHeadingLevel, 10));
          return true;
        }
        var headingLevel = node.tagName.match(/H(\d)/);
        if (headingLevel) {
          this.data(parseInt(headingLevel[1], 10));
          return true;
        }
        return true;
      },
      after: function after(results, options) {
        if (results.length < 2) {
          return results;
        }
        var prevLevel = results[0].data;
        for (var i = 1; i < results.length; i++) {
          if (results[i].result && results[i].data > prevLevel + 1) {
            results[i].result = false;
          }
          prevLevel = results[i].data;
        }
        return results;
      }
    }, {
      id: 'internal-link-present',
      evaluate: function evaluate(node, options, virtualNode) {
        var links = axe.utils.querySelectorAll(virtualNode, 'a[href]');
        return links.some(function(vLink) {
          return /^#[^\/!]/.test(vLink.actualNode.getAttribute('href'));
        });
      }
    }, {
      id: 'landmark',
      evaluate: function evaluate(node, options, virtualNode) {
        return axe.utils.querySelectorAll(virtualNode, 'main, [role="main"]').length > 0;
      }
    }, {
      id: 'meta-refresh',
      evaluate: function evaluate(node, options, virtualNode) {
        var content = node.getAttribute('content') || '', parsedParams = content.split(/[;,]/);
        return content === '' || parsedParams[0] === '0';
      }
    }, {
      id: 'p-as-heading',
      evaluate: function evaluate(node, options, virtualNode) {
        var siblings = Array.from(node.parentNode.children);
        var currentIndex = siblings.indexOf(node);
        options = options || {};
        var margins = options.margins || [];
        var nextSibling = siblings.slice(currentIndex + 1).find(function(elm) {
          return elm.nodeName.toUpperCase() === 'P';
        });
        var prevSibling = siblings.slice(0, currentIndex).reverse().find(function(elm) {
          return elm.nodeName.toUpperCase() === 'P';
        });
        function getTextContainer(elm) {
          var nextNode = elm;
          var outerText = elm.textContent.trim();
          var innerText = outerText;
          while (innerText === outerText && nextNode !== undefined) {
            var i = -1;
            elm = nextNode;
            if (elm.children.length === 0) {
              return elm;
            }
            do {
              i++;
              innerText = elm.children[i].textContent.trim();
            } while (innerText === '' && i + 1 < elm.children.length);
            nextNode = elm.children[i];
          }
          return elm;
        }
        function normalizeFontWeight(weight) {
          switch (weight) {
           case 'lighter':
            return 100;

           case 'normal':
            return 400;

           case 'bold':
            return 700;

           case 'bolder':
            return 900;
          }
          weight = parseInt(weight);
          return !isNaN(weight) ? weight : 400;
        }
        function getStyleValues(node) {
          var style = window.getComputedStyle(getTextContainer(node));
          return {
            fontWeight: normalizeFontWeight(style.getPropertyValue('font-weight')),
            fontSize: parseInt(style.getPropertyValue('font-size')),
            isItalic: style.getPropertyValue('font-style') === 'italic'
          };
        }
        function isHeaderStyle(styleA, styleB, margins) {
          return margins.reduce(function(out, margin) {
            return out || (!margin.size || styleA.fontSize / margin.size > styleB.fontSize) && (!margin.weight || styleA.fontWeight - margin.weight > styleB.fontWeight) && (!margin.italic || styleA.isItalic && !styleB.isItalic);
          }, false);
        }
        var currStyle = getStyleValues(node);
        var nextStyle = nextSibling ? getStyleValues(nextSibling) : null;
        var prevStyle = prevSibling ? getStyleValues(prevSibling) : null;
        if (!nextStyle || !isHeaderStyle(currStyle, nextStyle, margins)) {
          return true;
        }
        var blockquote = axe.commons.dom.findUpVirtual(virtualNode, 'blockquote');
        if (blockquote && blockquote.nodeName.toUpperCase() === 'BLOCKQUOTE') {
          return undefined;
        }
        if (prevStyle && !isHeaderStyle(currStyle, prevStyle, margins)) {
          return undefined;
        }
        return false;
      },
      options: {
        margins: [ {
          weight: 150,
          italic: true
        }, {
          weight: 150,
          size: 1.15
        }, {
          italic: true,
          size: 1.15
        }, {
          size: 1.4
        } ]
      }
    }, {
      id: 'region',
      evaluate: function evaluate(node, options, virtualNode) {
        var _axe$commons2 = axe.commons, dom = _axe$commons2.dom, aria = _axe$commons2.aria;
        function getSkiplink(virtualNode) {
          var firstLink = axe.utils.querySelectorAll(virtualNode, 'a[href]')[0];
          if (firstLink && axe.commons.dom.getElementByReference(firstLink.actualNode, 'href')) {
            return firstLink.actualNode;
          }
        }
        var skipLink = getSkiplink(virtualNode);
        var landmarkRoles = aria.getRolesByType('landmark');
        var implicitLandmarks = landmarkRoles.reduce(function(arr, role) {
          return arr.concat(aria.implicitNodes(role));
        }, []).filter(function(r) {
          return r !== null;
        });
        function isSkipLink(vNode) {
          return skipLink && skipLink === vNode.actualNode;
        }
        function isLandmark(virtualNode) {
          var node = virtualNode.actualNode;
          var explictRole = (node.getAttribute('role') || '').trim().toLowerCase();
          if (explictRole) {
            if (explictRole === 'form') {
              return !!aria.labelVirtual(virtualNode);
            }
            return landmarkRoles.includes(explictRole);
          } else {
            return implicitLandmarks.some(function(implicitSelector) {
              var matches = axe.utils.matchesSelector(node, implicitSelector);
              if (node.tagName.toLowerCase() === 'form') {
                return matches && !!aria.labelVirtual(virtualNode);
              }
              return matches;
            });
          }
        }
        function findRegionlessElms(virtualNode) {
          var node = virtualNode.actualNode;
          if (isLandmark(virtualNode) || isSkipLink(virtualNode) || !dom.isVisible(node, true)) {
            return [];
          } else if (dom.hasContent(node, true)) {
            return [ node ];
          } else {
            return virtualNode.children.filter(function(_ref7) {
              var actualNode = _ref7.actualNode;
              return actualNode.nodeType === 1;
            }).map(findRegionlessElms).reduce(function(a, b) {
              return a.concat(b);
            }, []);
          }
        }
        var regionlessNodes = findRegionlessElms(virtualNode);
        this.relatedNodes(regionlessNodes);
        return regionlessNodes.length === 0;
      },
      after: function after(results, options) {
        return [ results[0] ];
      }
    }, {
      id: 'skip-link',
      evaluate: function evaluate(node, options, virtualNode) {
        var target = axe.commons.dom.getElementByReference(node, 'href');
        if (target) {
          return axe.commons.dom.isVisible(target, true) || undefined;
        }
        return false;
      }
    }, {
      id: 'unique-frame-title',
      evaluate: function evaluate(node, options, virtualNode) {
        var title = axe.commons.text.sanitize(node.title).trim().toLowerCase();
        this.data(title);
        return true;
      },
      after: function after(results, options) {
        var titles = {};
        results.forEach(function(r) {
          titles[r.data] = titles[r.data] !== undefined ? ++titles[r.data] : 0;
        });
        results.forEach(function(r) {
          r.result = !!titles[r.data];
        });
        return results;
      }
    }, {
      id: 'aria-label',
      evaluate: function evaluate(node, options, virtualNode) {
        var label = node.getAttribute('aria-label');
        return !!(label ? axe.commons.text.sanitize(label).trim() : '');
      }
    }, {
      id: 'aria-labelledby',
      evaluate: function evaluate(node, options, virtualNode) {
        var getIdRefs = axe.commons.dom.idrefs;
        return getIdRefs(node, 'aria-labelledby').some(function(elm) {
          return elm && axe.commons.text.accessibleText(elm, true);
        });
      }
    }, {
      id: 'button-has-visible-text',
      evaluate: function evaluate(node, options, virtualNode) {
        var nodeName = node.nodeName.toUpperCase();
        var role = node.getAttribute('role');
        var label = void 0;
        if (nodeName === 'BUTTON' || role === 'button' && nodeName !== 'INPUT') {
          label = axe.commons.text.accessibleTextVirtual(virtualNode);
          this.data(label);
          return !!label;
        } else {
          return false;
        }
      }
    }, {
      id: 'doc-has-title',
      evaluate: function evaluate(node, options, virtualNode) {
        var title = document.title;
        return !!(title ? axe.commons.text.sanitize(title).trim() : '');
      }
    }, {
      id: 'duplicate-id',
      evaluate: function evaluate(node, options, virtualNode) {
        var id = node.getAttribute('id').trim();
        if (!id) {
          return true;
        }
        var root = axe.commons.dom.getRootNode(node);
        var matchingNodes = Array.from(root.querySelectorAll('[id="' + axe.commons.utils.escapeSelector(id) + '"]')).filter(function(foundNode) {
          return foundNode !== node;
        });
        if (matchingNodes.length) {
          this.relatedNodes(matchingNodes);
        }
        this.data(id);
        return matchingNodes.length === 0;
      },
      after: function after(results, options) {
        var uniqueIds = [];
        return results.filter(function(r) {
          if (uniqueIds.indexOf(r.data) === -1) {
            uniqueIds.push(r.data);
            return true;
          }
          return false;
        });
      }
    }, {
      id: 'exists',
      evaluate: function evaluate(node, options, virtualNode) {
        return true;
      }
    }, {
      id: 'has-alt',
      evaluate: function evaluate(node, options, virtualNode) {
        var nn = node.nodeName.toLowerCase();
        return node.hasAttribute('alt') && (nn === 'img' || nn === 'input' || nn === 'area');
      }
    }, {
      id: 'has-visible-text',
      evaluate: function evaluate(node, options, virtualNode) {
        return axe.commons.text.accessibleTextVirtual(virtualNode).length > 0;
      }
    }, {
      id: 'is-on-screen',
      evaluate: function evaluate(node, options, virtualNode) {
        return axe.commons.dom.isVisible(node, false) && !axe.commons.dom.isOffscreen(node);
      }
    }, {
      id: 'non-empty-alt',
      evaluate: function evaluate(node, options, virtualNode) {
        var label = node.getAttribute('alt');
        return !!(label ? axe.commons.text.sanitize(label).trim() : '');
      }
    }, {
      id: 'non-empty-if-present',
      evaluate: function evaluate(node, options, virtualNode) {
        var nodeName = node.nodeName.toUpperCase();
        var type = (node.getAttribute('type') || '').toLowerCase();
        var label = node.getAttribute('value');
        this.data(label);
        if (nodeName === 'INPUT' && [ 'submit', 'reset' ].includes(type)) {
          return label === null;
        }
        return false;
      }
    }, {
      id: 'non-empty-title',
      evaluate: function evaluate(node, options, virtualNode) {
        var title = node.getAttribute('title');
        return !!(title ? axe.commons.text.sanitize(title).trim() : '');
      }
    }, {
      id: 'non-empty-value',
      evaluate: function evaluate(node, options, virtualNode) {
        var label = node.getAttribute('value');
        return !!(label ? axe.commons.text.sanitize(label).trim() : '');
      }
    }, {
      id: 'role-none',
      evaluate: function evaluate(node, options, virtualNode) {
        return node.getAttribute('role') === 'none';
      }
    }, {
      id: 'role-presentation',
      evaluate: function evaluate(node, options, virtualNode) {
        return node.getAttribute('role') === 'presentation';
      }
    }, {
      id: 'caption-faked',
      evaluate: function evaluate(node, options, virtualNode) {
        var table = axe.commons.table.toGrid(node);
        var firstRow = table[0];
        if (table.length <= 1 || firstRow.length <= 1 || node.rows.length <= 1) {
          return true;
        }
        return firstRow.reduce(function(out, curr, i) {
          return out || curr !== firstRow[i + 1] && firstRow[i + 1] !== undefined;
        }, false);
      }
    }, {
      id: 'has-caption',
      evaluate: function evaluate(node, options, virtualNode) {
        return !!node.caption;
      }
    }, {
      id: 'has-summary',
      evaluate: function evaluate(node, options, virtualNode) {
        return !!node.summary;
      }
    }, {
      id: 'has-th',
      evaluate: function evaluate(node, options, virtualNode) {
        var row, cell, badCells = [];
        for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
          row = node.rows[rowIndex];
          for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
            cell = row.cells[cellIndex];
            if (cell.nodeName.toUpperCase() === 'TH' || [ 'rowheader', 'columnheader' ].indexOf(cell.getAttribute('role')) !== -1) {
              badCells.push(cell);
            }
          }
        }
        if (badCells.length) {
          this.relatedNodes(badCells);
          return true;
        }
        return false;
      }
    }, {
      id: 'html5-scope',
      evaluate: function evaluate(node, options, virtualNode) {
        if (!axe.commons.dom.isHTML5(document)) {
          return true;
        }
        return node.nodeName.toUpperCase() === 'TH';
      }
    }, {
      id: 'same-caption-summary',
      evaluate: function evaluate(node, options, virtualNode) {
        return !!(node.summary && node.caption) && node.summary.toLowerCase() === axe.commons.text.accessibleText(node.caption).toLowerCase();
      }
    }, {
      id: 'scope-value',
      evaluate: function evaluate(node, options, virtualNode) {
        options = options || {};
        var value = node.getAttribute('scope').toLowerCase();
        var validVals = [ 'row', 'col', 'rowgroup', 'colgroup' ] || options.values;
        return validVals.indexOf(value) !== -1;
      }
    }, {
      id: 'td-has-header',
      evaluate: function evaluate(node, options, virtualNode) {
        var tableUtils = axe.commons.table;
        var badCells = [];
        var cells = tableUtils.getAllCells(node);
        cells.forEach(function(cell) {
          if (axe.commons.dom.hasContent(cell) && tableUtils.isDataCell(cell) && !axe.commons.aria.label(cell)) {
            var hasHeaders = tableUtils.getHeaders(cell);
            hasHeaders = hasHeaders.reduce(function(hasHeaders, header) {
              return hasHeaders || header !== null && !!axe.commons.dom.hasContent(header);
            }, false);
            if (!hasHeaders) {
              badCells.push(cell);
            }
          }
        });
        if (badCells.length) {
          this.relatedNodes(badCells);
          return false;
        }
        return true;
      }
    }, {
      id: 'td-headers-attr',
      evaluate: function evaluate(node, options, virtualNode) {
        var cells = [];
        for (var rowIndex = 0, rowLength = node.rows.length; rowIndex < rowLength; rowIndex++) {
          var row = node.rows[rowIndex];
          for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
            cells.push(row.cells[cellIndex]);
          }
        }
        var ids = cells.reduce(function(ids, cell) {
          if (cell.getAttribute('id')) {
            ids.push(cell.getAttribute('id'));
          }
          return ids;
        }, []);
        var badCells = cells.reduce(function(badCells, cell) {
          var isSelf, notOfTable;
          var headers = (cell.getAttribute('headers') || '').split(/\s/).reduce(function(headers, header) {
            header = header.trim();
            if (header) {
              headers.push(header);
            }
            return headers;
          }, []);
          if (headers.length !== 0) {
            if (cell.getAttribute('id')) {
              isSelf = headers.indexOf(cell.getAttribute('id').trim()) !== -1;
            }
            notOfTable = headers.reduce(function(fail, header) {
              return fail || ids.indexOf(header) === -1;
            }, false);
            if (isSelf || notOfTable) {
              badCells.push(cell);
            }
          }
          return badCells;
        }, []);
        if (badCells.length > 0) {
          this.relatedNodes(badCells);
          return false;
        } else {
          return true;
        }
      }
    }, {
      id: 'th-has-data-cells',
      evaluate: function evaluate(node, options, virtualNode) {
        var tableUtils = axe.commons.table;
        var cells = tableUtils.getAllCells(node);
        var checkResult = this;
        var reffedHeaders = [];
        cells.forEach(function(cell) {
          var headers = cell.getAttribute('headers');
          if (headers) {
            reffedHeaders = reffedHeaders.concat(headers.split(/\s+/));
          }
          var ariaLabel = cell.getAttribute('aria-labelledby');
          if (ariaLabel) {
            reffedHeaders = reffedHeaders.concat(ariaLabel.split(/\s+/));
          }
        });
        var headers = cells.filter(function(cell) {
          if (axe.commons.text.sanitize(cell.textContent) === '') {
            return false;
          }
          return cell.nodeName.toUpperCase() === 'TH' || [ 'rowheader', 'columnheader' ].indexOf(cell.getAttribute('role')) !== -1;
        });
        var tableGrid = tableUtils.toGrid(node);
        var out = headers.reduce(function(res, header) {
          if (header.getAttribute('id') && reffedHeaders.includes(header.getAttribute('id'))) {
            return !res ? res : true;
          }
          var hasCell = false;
          var pos = tableUtils.getCellPosition(header, tableGrid);
          if (tableUtils.isColumnHeader(header)) {
            hasCell = tableUtils.traverse('down', pos, tableGrid).reduce(function(out, cell) {
              return out || axe.commons.dom.hasContent(cell) && !tableUtils.isColumnHeader(cell);
            }, false);
          }
          if (!hasCell && tableUtils.isRowHeader(header)) {
            hasCell = tableUtils.traverse('right', pos, tableGrid).reduce(function(out, cell) {
              return out || axe.commons.dom.hasContent(cell) && !tableUtils.isRowHeader(cell);
            }, false);
          }
          if (!hasCell) {
            checkResult.relatedNodes(header);
          }
          return res && hasCell;
        }, true);
        return out ? true : undefined;
      }
    }, {
      id: 'hidden-content',
      evaluate: function evaluate(node, options, virtualNode) {
        var whitelist = [ 'SCRIPT', 'HEAD', 'TITLE', 'NOSCRIPT', 'STYLE', 'TEMPLATE' ];
        if (!whitelist.includes(node.tagName.toUpperCase()) && axe.commons.dom.hasContentVirtual(virtualNode)) {
          var styles = window.getComputedStyle(node);
          if (styles.getPropertyValue('display') === 'none') {
            return undefined;
          } else if (styles.getPropertyValue('visibility') === 'hidden') {
            var parent = axe.commons.dom.getComposedParent(node);
            var parentStyle = parent && window.getComputedStyle(parent);
            if (!parentStyle || parentStyle.getPropertyValue('visibility') !== 'hidden') {
              return undefined;
            }
          }
        }
        return true;
      }
    } ],
    commons: function() {
      var commons = {};
      var aria = commons.aria = {}, lookupTable = aria.lookupTable = {};
      lookupTable.attributes = {
        'aria-activedescendant': {
          type: 'idref'
        },
        'aria-atomic': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-autocomplete': {
          type: 'nmtoken',
          values: [ 'inline', 'list', 'both', 'none' ]
        },
        'aria-busy': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-checked': {
          type: 'nmtoken',
          values: [ 'true', 'false', 'mixed', 'undefined' ]
        },
        'aria-colcount': {
          type: 'int'
        },
        'aria-colindex': {
          type: 'int'
        },
        'aria-colspan': {
          type: 'int'
        },
        'aria-controls': {
          type: 'idrefs'
        },
        'aria-current': {
          type: 'nmtoken',
          values: [ 'page', 'step', 'location', 'date', 'time', 'true', 'false' ]
        },
        'aria-describedby': {
          type: 'idrefs'
        },
        'aria-disabled': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-dropeffect': {
          type: 'nmtokens',
          values: [ 'copy', 'move', 'reference', 'execute', 'popup', 'none' ]
        },
        'aria-errormessage': {
          type: 'idref'
        },
        'aria-expanded': {
          type: 'nmtoken',
          values: [ 'true', 'false', 'undefined' ]
        },
        'aria-flowto': {
          type: 'idrefs'
        },
        'aria-grabbed': {
          type: 'nmtoken',
          values: [ 'true', 'false', 'undefined' ]
        },
        'aria-haspopup': {
          type: 'nmtoken',
          values: [ 'true', 'false', 'menu', 'listbox', 'tree', 'grid', 'dialog' ]
        },
        'aria-hidden': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-invalid': {
          type: 'nmtoken',
          values: [ 'true', 'false', 'spelling', 'grammar' ]
        },
        'aria-keyshortcuts': {
          type: 'string'
        },
        'aria-label': {
          type: 'string'
        },
        'aria-labelledby': {
          type: 'idrefs',
          values: [ '' ]
        },
        'aria-level': {
          type: 'int'
        },
        'aria-live': {
          type: 'nmtoken',
          values: [ 'off', 'polite', 'assertive' ]
        },
        'aria-modal': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-multiline': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-multiselectable': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-orientation': {
          type: 'nmtoken',
          values: [ 'horizontal', 'vertical' ]
        },
        'aria-owns': {
          type: 'idrefs'
        },
        'aria-placeholder': {
          type: 'string'
        },
        'aria-posinset': {
          type: 'int'
        },
        'aria-pressed': {
          type: 'nmtoken',
          values: [ 'true', 'false', 'mixed', 'undefined' ]
        },
        'aria-readonly': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-relevant': {
          type: 'nmtokens',
          values: [ 'additions', 'removals', 'text', 'all' ]
        },
        'aria-required': {
          type: 'boolean',
          values: [ 'true', 'false' ]
        },
        'aria-rowcount': {
          type: 'int'
        },
        'aria-rowindex': {
          type: 'int'
        },
        'aria-rowspan': {
          type: 'int'
        },
        'aria-selected': {
          type: 'nmtoken',
          values: [ 'true', 'false', 'undefined' ]
        },
        'aria-setsize': {
          type: 'int'
        },
        'aria-sort': {
          type: 'nmtoken',
          values: [ 'ascending', 'descending', 'other', 'none' ]
        },
        'aria-valuemax': {
          type: 'decimal'
        },
        'aria-valuemin': {
          type: 'decimal'
        },
        'aria-valuenow': {
          type: 'decimal'
        },
        'aria-valuetext': {
          type: 'string'
        }
      };
      lookupTable.globalAttributes = [ 'aria-atomic', 'aria-busy', 'aria-controls', 'aria-current', 'aria-describedby', 'aria-disabled', 'aria-dropeffect', 'aria-flowto', 'aria-grabbed', 'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-live', 'aria-owns', 'aria-relevant' ];
      lookupTable.role = {
        alert: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        alertdialog: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-modal' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        application: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        article: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-posinset', 'aria-setsize' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'article' ]
        },
        banner: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'header' ]
        },
        button: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-pressed' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null,
          implicit: [ 'button', 'input[type="button"]', 'input[type="image"]', 'input[type="reset"]', 'input[type="submit"]', 'summary' ]
        },
        cell: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-colindex', 'aria-colspan', 'aria-rowindex', 'aria-rowspan' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'row' ],
          implicit: [ 'td', 'th' ]
        },
        checkbox: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-checked', 'aria-required' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null,
          implicit: [ 'input[type="checkbox"]' ]
        },
        columnheader: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-colindex', 'aria-colspan', 'aria-expanded', 'aria-rowindex', 'aria-rowspan', 'aria-required', 'aria-readonly', 'aria-selected', 'aria-sort' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'row' ],
          implicit: [ 'th' ]
        },
        combobox: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-autocomplete', 'aria-required', 'aria-activedescendant', 'aria-orientation' ]
          },
          owned: {
            all: [ 'listbox', 'textbox' ]
          },
          nameFrom: [ 'author' ],
          context: null
        },
        command: {
          nameFrom: [ 'author' ],
          type: 'abstract'
        },
        complementary: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'aside' ]
        },
        composite: {
          nameFrom: [ 'author' ],
          type: 'abstract'
        },
        contentinfo: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'footer' ]
        },
        definition: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'dd', 'dfn' ]
        },
        dialog: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-modal' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'dialog' ]
        },
        directory: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null
        },
        document: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'body' ]
        },
        'doc-abstract': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        'doc-acknowledgments': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        'doc-afterword': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        'doc-appendix': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        'doc-backlink': {
          type: 'link',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null
        },
        'doc-biblioentry': {
          type: 'listitem',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-level', 'aria-posinset', 'aria-setsize' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: [ 'doc-bibliography' ]
        },
        'doc-bibliography': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        'doc-biblioref': {
          type: 'link',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null
        },
        'doc-chapter': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-colophon': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-conclusion': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-cover': {
          type: 'img',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-credit': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-credits': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-dedication': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-endnote': {
          type: 'listitem',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-level', 'aria-posinset', 'aria-setsize' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: [ 'doc-endnotes' ]
        },
        'doc-endnotes': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: [ 'doc-endnote' ],
          namefrom: [ 'author' ],
          context: null
        },
        'doc-epigraph': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-epilogue': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-errata': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-example': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-footnote': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-foreword': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-glossary': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: [ 'term', 'definition' ],
          namefrom: [ 'author' ],
          context: null
        },
        'doc-glossref': {
          type: 'link',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author', 'contents' ],
          context: null
        },
        'doc-index': {
          type: 'navigation',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-introduction': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-noteref': {
          type: 'link',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author', 'contents' ],
          context: null
        },
        'doc-notice': {
          type: 'note',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-pagebreak': {
          type: 'separator',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-pagelist': {
          type: 'navigation',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-part': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-preface': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-prologue': {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-pullquote': {
          type: 'none',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-qna': {
          type: 'section',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-subtitle': {
          type: 'sectionhead',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-tip': {
          type: 'note',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        'doc-toc': {
          type: 'navigation',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          namefrom: [ 'author' ],
          context: null
        },
        feed: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: {
            one: [ 'article' ]
          },
          nameFrom: [ 'author' ],
          context: null
        },
        form: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'form' ]
        },
        grid: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-expanded', 'aria-colcount', 'aria-level', 'aria-multiselectable', 'aria-readonly', 'aria-rowcount' ]
          },
          owned: {
            one: [ 'rowgroup', 'row' ]
          },
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'table' ]
        },
        gridcell: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-colindex', 'aria-colspan', 'aria-expanded', 'aria-rowindex', 'aria-rowspan', 'aria-selected', 'aria-readonly', 'aria-required' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'row' ],
          implicit: [ 'td', 'th' ]
        },
        group: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'details', 'optgroup' ]
        },
        heading: {
          type: 'structure',
          attributes: {
            required: [ 'aria-level' ],
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null,
          implicit: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]
        },
        img: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'img' ]
        },
        input: {
          nameFrom: [ 'author' ],
          type: 'abstract'
        },
        landmark: {
          nameFrom: [ 'author' ],
          type: 'abstract'
        },
        link: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null,
          implicit: [ 'a[href]' ]
        },
        list: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: {
            all: [ 'listitem' ]
          },
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'ol', 'ul', 'dl' ]
        },
        listbox: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-multiselectable', 'aria-required', 'aria-expanded', 'aria-orientation' ]
          },
          owned: {
            all: [ 'option' ]
          },
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'select' ]
        },
        listitem: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-level', 'aria-posinset', 'aria-setsize', 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'list' ],
          implicit: [ 'li', 'dt' ]
        },
        log: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        main: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'main' ]
        },
        marquee: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        math: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'math' ]
        },
        menu: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-expanded', 'aria-orientation' ]
          },
          owned: {
            one: [ 'menuitem', 'menuitemradio', 'menuitemcheckbox' ]
          },
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'menu[type="context"]' ]
        },
        menubar: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-expanded', 'aria-orientation' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        menuitem: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-posinset', 'aria-setsize', 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'menu', 'menubar' ],
          implicit: [ 'menuitem[type="command"]' ]
        },
        menuitemcheckbox: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-checked', 'aria-posinset', 'aria-setsize' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'menu', 'menubar' ],
          implicit: [ 'menuitem[type="checkbox"]' ]
        },
        menuitemradio: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-checked', 'aria-selected', 'aria-posinset', 'aria-setsize' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'menu', 'menubar' ],
          implicit: [ 'menuitem[type="radio"]' ]
        },
        navigation: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'nav' ]
        },
        none: {
          type: 'structure',
          attributes: null,
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        note: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        option: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-selected', 'aria-posinset', 'aria-setsize', 'aria-checked' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'listbox' ],
          implicit: [ 'option' ]
        },
        presentation: {
          type: 'structure',
          attributes: null,
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        progressbar: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-valuetext', 'aria-valuenow', 'aria-valuemax', 'aria-valuemin' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'progress' ]
        },
        radio: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-checked', 'aria-selected', 'aria-posinset', 'aria-setsize', 'aria-required' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null,
          implicit: [ 'input[type="radio"]' ]
        },
        radiogroup: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-required', 'aria-expanded' ]
          },
          owned: {
            all: [ 'radio' ]
          },
          nameFrom: [ 'author' ],
          context: null
        },
        range: {
          nameFrom: [ 'author' ],
          type: 'abstract'
        },
        region: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'section[aria-label]', 'section[aria-labelledby]', 'section[title]' ]
        },
        roletype: {
          type: 'abstract'
        },
        row: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-colindex', 'aria-expanded', 'aria-level', 'aria-selected', 'aria-rowindex' ]
          },
          owned: {
            one: [ 'cell', 'columnheader', 'rowheader', 'gridcell' ]
          },
          nameFrom: [ 'author', 'contents' ],
          context: [ 'rowgroup', 'grid', 'treegrid', 'table' ],
          implicit: [ 'tr' ]
        },
        rowgroup: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-expanded' ]
          },
          owned: {
            all: [ 'row' ]
          },
          nameFrom: [ 'author', 'contents' ],
          context: [ 'grid', 'table' ],
          implicit: [ 'tbody', 'thead', 'tfoot' ]
        },
        rowheader: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-colindex', 'aria-colspan', 'aria-expanded', 'aria-rowindex', 'aria-rowspan', 'aria-required', 'aria-readonly', 'aria-selected', 'aria-sort' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'row' ],
          implicit: [ 'th' ]
        },
        scrollbar: {
          type: 'widget',
          attributes: {
            required: [ 'aria-controls', 'aria-valuenow', 'aria-valuemax', 'aria-valuemin' ],
            allowed: [ 'aria-valuetext', 'aria-orientation' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        search: {
          type: 'landmark',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        searchbox: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-autocomplete', 'aria-multiline', 'aria-readonly', 'aria-required', 'aria-placeholder' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'input[type="search"]' ]
        },
        section: {
          nameFrom: [ 'author', 'contents' ],
          type: 'abstract'
        },
        sectionhead: {
          nameFrom: [ 'author', 'contents' ],
          type: 'abstract'
        },
        select: {
          nameFrom: [ 'author' ],
          type: 'abstract'
        },
        separator: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded', 'aria-orientation' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'hr' ]
        },
        slider: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-valuetext', 'aria-orientation' ],
            required: [ 'aria-valuenow', 'aria-valuemax', 'aria-valuemin' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'input[type="range"]' ]
        },
        spinbutton: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-valuetext', 'aria-required' ],
            required: [ 'aria-valuenow', 'aria-valuemax', 'aria-valuemin' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'input[type="number"]' ]
        },
        status: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'output' ]
        },
        structure: {
          type: 'abstract'
        },
        switch: {
          type: 'widget',
          attributes: {
            required: [ 'aria-checked' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null
        },
        tab: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-selected', 'aria-expanded', 'aria-setsize', 'aria-posinset' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'tablist' ]
        },
        table: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-colcount', 'aria-rowcount' ]
          },
          owned: {
            one: [ 'rowgroup', 'row' ]
          },
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'table' ]
        },
        tablist: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-expanded', 'aria-level', 'aria-multiselectable', 'aria-orientation' ]
          },
          owned: {
            all: [ 'tab' ]
          },
          nameFrom: [ 'author' ],
          context: null
        },
        tabpanel: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        term: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null,
          implicit: [ 'dt' ]
        },
        text: {
          type: 'structure',
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null
        },
        textbox: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-autocomplete', 'aria-multiline', 'aria-readonly', 'aria-required', 'aria-placeholder' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="tel"]', 'input[type="url"]', 'input:not([type])', 'textarea' ]
        },
        timer: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null
        },
        toolbar: {
          type: 'structure',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author' ],
          context: null,
          implicit: [ 'menu[type="toolbar"]' ]
        },
        tooltip: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-expanded' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: null
        },
        tree: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-multiselectable', 'aria-required', 'aria-expanded', 'aria-orientation' ]
          },
          owned: {
            all: [ 'treeitem' ]
          },
          nameFrom: [ 'author' ],
          context: null
        },
        treegrid: {
          type: 'composite',
          attributes: {
            allowed: [ 'aria-activedescendant', 'aria-colcount', 'aria-expanded', 'aria-level', 'aria-multiselectable', 'aria-readonly', 'aria-required', 'aria-rowcount', 'aria-orientation' ]
          },
          owned: {
            one: [ 'rowgroup', 'row' ]
          },
          nameFrom: [ 'author' ],
          context: null
        },
        treeitem: {
          type: 'widget',
          attributes: {
            allowed: [ 'aria-checked', 'aria-selected', 'aria-expanded', 'aria-level', 'aria-posinset', 'aria-setsize' ]
          },
          owned: null,
          nameFrom: [ 'author', 'contents' ],
          context: [ 'group', 'tree' ]
        },
        widget: {
          type: 'abstract'
        },
        window: {
          nameFrom: [ 'author' ],
          type: 'abstract'
        }
      };
      var color = {};
      commons.color = color;
      var dom = commons.dom = {};
      var table = commons.table = {};
      var text = commons.text = {
        EdgeFormDefaults: {}
      };
      var utils = commons.utils = axe.utils;
      aria.requiredAttr = function(role) {
        'use strict';
        var roles = aria.lookupTable.role[role], attr = roles && roles.attributes && roles.attributes.required;
        return attr || [];
      };
      aria.allowedAttr = function(role) {
        'use strict';
        var roles = aria.lookupTable.role[role], attr = roles && roles.attributes && roles.attributes.allowed || [], requiredAttr = roles && roles.attributes && roles.attributes.required || [];
        return attr.concat(aria.lookupTable.globalAttributes).concat(requiredAttr);
      };
      aria.validateAttr = function(att) {
        'use strict';
        return !!aria.lookupTable.attributes[att];
      };
      aria.validateAttrValue = function(node, attr) {
        'use strict';
        var matches, list, value = node.getAttribute(attr), attrInfo = aria.lookupTable.attributes[attr];
        var doc = dom.getRootNode(node);
        if (!attrInfo) {
          return true;
        }
        switch (attrInfo.type) {
         case 'boolean':
         case 'nmtoken':
          return typeof value === 'string' && attrInfo.values.indexOf(value.toLowerCase()) !== -1;

         case 'nmtokens':
          list = axe.utils.tokenList(value);
          return list.reduce(function(result, token) {
            return result && attrInfo.values.indexOf(token) !== -1;
          }, list.length !== 0);

         case 'idref':
          return !!(value && doc.getElementById(value));

         case 'idrefs':
          if (attrInfo.values && attrInfo.values.indexOf('') !== -1 && value.trim().length === 0) {
            return true;
          }
          list = axe.utils.tokenList(value);
          return list.reduce(function(result, token) {
            return !!(result && doc.getElementById(token));
          }, list.length !== 0);

         case 'string':
          return true;

         case 'decimal':
          matches = value.match(/^[-+]?([0-9]*)\.?([0-9]*)$/);
          return !!(matches && (matches[1] || matches[2]));

         case 'int':
          return /^[-+]?[0-9]+$/.test(value);
        }
      };
      aria.labelVirtual = function(_ref8) {
        var actualNode = _ref8.actualNode;
        var ref = void 0, candidate = void 0;
        if (actualNode.getAttribute('aria-labelledby')) {
          ref = dom.idrefs(actualNode, 'aria-labelledby');
          candidate = ref.map(function(thing) {
            var vNode = axe.utils.getNodeFromTree(axe._tree[0], thing);
            return vNode ? text.visibleVirtual(vNode, true) : '';
          }).join(' ').trim();
          if (candidate) {
            return candidate;
          }
        }
        candidate = actualNode.getAttribute('aria-label');
        if (candidate) {
          candidate = text.sanitize(candidate).trim();
          if (candidate) {
            return candidate;
          }
        }
        return null;
      };
      aria.label = function(node) {
        node = axe.utils.getNodeFromTree(axe._tree[0], node);
        return aria.labelVirtual(node);
      };
      aria.isValidRole = function(role) {
        'use strict';
        if (aria.lookupTable.role[role]) {
          return true;
        }
        return false;
      };
      aria.getRolesWithNameFromContents = function() {
        return Object.keys(aria.lookupTable.role).filter(function(r) {
          return aria.lookupTable.role[r].nameFrom && aria.lookupTable.role[r].nameFrom.indexOf('contents') !== -1;
        });
      };
      aria.getRolesByType = function(roleType) {
        return Object.keys(aria.lookupTable.role).filter(function(r) {
          return aria.lookupTable.role[r].type === roleType;
        });
      };
      aria.getRoleType = function(role) {
        var r = aria.lookupTable.role[role];
        return r && r.type || null;
      };
      aria.requiredOwned = function(role) {
        'use strict';
        var owned = null, roles = aria.lookupTable.role[role];
        if (roles) {
          owned = axe.utils.clone(roles.owned);
        }
        return owned;
      };
      aria.requiredContext = function(role) {
        'use strict';
        var context = null, roles = aria.lookupTable.role[role];
        if (roles) {
          context = axe.utils.clone(roles.context);
        }
        return context;
      };
      aria.implicitNodes = function(role) {
        'use strict';
        var implicit = null, roles = aria.lookupTable.role[role];
        if (roles && roles.implicit) {
          implicit = axe.utils.clone(roles.implicit);
        }
        return implicit;
      };
      aria.implicitRole = function(node) {
        'use strict';
        var isValidImplicitRole = function isValidImplicitRole(set, role) {
          var validForNodeType = function validForNodeType(implicitNodeTypeSelector) {
            return axe.utils.matchesSelector(node, implicitNodeTypeSelector);
          };
          if (role.implicit && role.implicit.some(validForNodeType)) {
            set.push(role.name);
          }
          return set;
        };
        var sortRolesByOptimalAriaContext = function sortRolesByOptimalAriaContext(roles, ariaAttributes) {
          var getScore = function getScore(role) {
            var allowedAriaAttributes = aria.allowedAttr(role);
            return allowedAriaAttributes.reduce(function(score, attribute) {
              return score + (ariaAttributes.indexOf(attribute) > -1 ? 1 : 0);
            }, 0);
          };
          var scored = roles.map(function(role) {
            return {
              score: getScore(role),
              name: role
            };
          });
          var sorted = scored.sort(function(scoredRoleA, scoredRoleB) {
            return scoredRoleB.score - scoredRoleA.score;
          });
          return sorted.map(function(sortedRole) {
            return sortedRole.name;
          });
        };
        var roles = Object.keys(aria.lookupTable.role).map(function(role) {
          var lookup = aria.lookupTable.role[role];
          return {
            name: role,
            implicit: lookup && lookup.implicit
          };
        });
        var availableImplicitRoles = roles.reduce(isValidImplicitRole, []);
        if (!availableImplicitRoles.length) {
          return null;
        }
        var nodeAttributes = node.attributes;
        var ariaAttributes = [];
        for (var i = 0, j = nodeAttributes.length; i < j; i++) {
          var attr = nodeAttributes[i];
          if (attr.name.match(/^aria-/)) {
            ariaAttributes.push(attr.name);
          }
        }
        return sortRolesByOptimalAriaContext(availableImplicitRoles, ariaAttributes).shift();
      };
      color.Color = function(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        this.toHexString = function() {
          var redString = Math.round(this.red).toString(16);
          var greenString = Math.round(this.green).toString(16);
          var blueString = Math.round(this.blue).toString(16);
          return '#' + (this.red > 15.5 ? redString : '0' + redString) + (this.green > 15.5 ? greenString : '0' + greenString) + (this.blue > 15.5 ? blueString : '0' + blueString);
        };
        var rgbRegex = /^rgb\((\d+), (\d+), (\d+)\)$/;
        var rgbaRegex = /^rgba\((\d+), (\d+), (\d+), (\d*(\.\d+)?)\)/;
        this.parseRgbString = function(colorString) {
          if (colorString === 'transparent') {
            this.red = 0;
            this.green = 0;
            this.blue = 0;
            this.alpha = 0;
            return;
          }
          var match = colorString.match(rgbRegex);
          if (match) {
            this.red = parseInt(match[1], 10);
            this.green = parseInt(match[2], 10);
            this.blue = parseInt(match[3], 10);
            this.alpha = 1;
            return;
          }
          match = colorString.match(rgbaRegex);
          if (match) {
            this.red = parseInt(match[1], 10);
            this.green = parseInt(match[2], 10);
            this.blue = parseInt(match[3], 10);
            this.alpha = parseFloat(match[4]);
            return;
          }
        };
        this.getRelativeLuminance = function() {
          var rSRGB = this.red / 255;
          var gSRGB = this.green / 255;
          var bSRGB = this.blue / 255;
          var r = rSRGB <= .03928 ? rSRGB / 12.92 : Math.pow((rSRGB + .055) / 1.055, 2.4);
          var g = gSRGB <= .03928 ? gSRGB / 12.92 : Math.pow((gSRGB + .055) / 1.055, 2.4);
          var b = bSRGB <= .03928 ? bSRGB / 12.92 : Math.pow((bSRGB + .055) / 1.055, 2.4);
          return .2126 * r + .7152 * g + .0722 * b;
        };
      };
      color.flattenColors = function(fgColor, bgColor) {
        var alpha = fgColor.alpha;
        var r = (1 - alpha) * bgColor.red + alpha * fgColor.red;
        var g = (1 - alpha) * bgColor.green + alpha * fgColor.green;
        var b = (1 - alpha) * bgColor.blue + alpha * fgColor.blue;
        var a = fgColor.alpha + bgColor.alpha * (1 - fgColor.alpha);
        return new color.Color(r, g, b, a);
      };
      color.getContrast = function(bgColor, fgColor) {
        if (!fgColor || !bgColor) {
          return null;
        }
        if (fgColor.alpha < 1) {
          fgColor = color.flattenColors(fgColor, bgColor);
        }
        var bL = bgColor.getRelativeLuminance();
        var fL = fgColor.getRelativeLuminance();
        return (Math.max(fL, bL) + .05) / (Math.min(fL, bL) + .05);
      };
      color.hasValidContrastRatio = function(bg, fg, fontSize, isBold) {
        var contrast = color.getContrast(bg, fg);
        var isSmallFont = isBold && Math.ceil(fontSize * 72) / 96 < 14 || !isBold && Math.ceil(fontSize * 72) / 96 < 18;
        var expectedContrastRatio = isSmallFont ? 4.5 : 3;
        return {
          isValid: contrast > expectedContrastRatio,
          contrastRatio: contrast,
          expectedContrastRatio: expectedContrastRatio
        };
      };
      function _getFonts(style) {
        return style.getPropertyValue('font-family').split(/[,;]/g).map(function(font) {
          return font.trim().toLowerCase();
        });
      }
      function elementIsDistinct(node, ancestorNode) {
        var nodeStyle = window.getComputedStyle(node);
        if (nodeStyle.getPropertyValue('background-image') !== 'none') {
          return true;
        }
        var hasBorder = [ 'border-bottom', 'border-top', 'outline' ].reduce(function(result, edge) {
          var borderClr = new color.Color();
          borderClr.parseRgbString(nodeStyle.getPropertyValue(edge + '-color'));
          return result || nodeStyle.getPropertyValue(edge + '-style') !== 'none' && parseFloat(nodeStyle.getPropertyValue(edge + '-width')) > 0 && borderClr.alpha !== 0;
        }, false);
        if (hasBorder) {
          return true;
        }
        var parentStyle = window.getComputedStyle(ancestorNode);
        if (_getFonts(nodeStyle)[0] !== _getFonts(parentStyle)[0]) {
          return true;
        }
        var hasStyle = [ 'text-decoration-line', 'text-decoration-style', 'font-weight', 'font-style', 'font-size' ].reduce(function(result, cssProp) {
          return result || nodeStyle.getPropertyValue(cssProp) !== parentStyle.getPropertyValue(cssProp);
        }, false);
        var tDec = nodeStyle.getPropertyValue('text-decoration');
        if (tDec.split(' ').length < 3) {
          hasStyle = hasStyle || tDec !== parentStyle.getPropertyValue('text-decoration');
        }
        return hasStyle;
      }
      color.elementIsDistinct = elementIsDistinct;
      var graphicNodes = [ 'IMG', 'CANVAS', 'OBJECT', 'IFRAME', 'VIDEO', 'SVG' ];
      function elmHasImage(elm, style) {
        var nodeName = elm.nodeName.toUpperCase();
        if (graphicNodes.includes(nodeName)) {
          axe.commons.color.incompleteData.set('bgColor', 'imgNode');
          return true;
        }
        style = style || window.getComputedStyle(elm);
        var bgImageStyle = style.getPropertyValue('background-image');
        var hasBgImage = bgImageStyle !== 'none';
        if (hasBgImage) {
          var hasGradient = /gradient/.test(bgImageStyle);
          axe.commons.color.incompleteData.set('bgColor', hasGradient ? 'bgGradient' : 'bgImage');
        }
        return hasBgImage;
      }
      function getBgColor(elm, elmStyle) {
        elmStyle = elmStyle || window.getComputedStyle(elm);
        var bgColor = new color.Color();
        bgColor.parseRgbString(elmStyle.getPropertyValue('background-color'));
        if (bgColor.alpha !== 0) {
          var opacity = elmStyle.getPropertyValue('opacity');
          bgColor.alpha = bgColor.alpha * opacity;
        }
        return bgColor;
      }
      function contentOverlapping(targetElement, bgNode) {
        var targetRect = targetElement.getClientRects()[0];
        var obscuringElements = dom.shadowElementsFromPoint(targetRect.left, targetRect.top);
        if (obscuringElements) {
          for (var i = 0; i < obscuringElements.length; i++) {
            if (obscuringElements[i] !== targetElement && obscuringElements[i] === bgNode) {
              return true;
            }
          }
        }
        return false;
      }
      function calculateObscuringAlpha(elmIndex, elmStack, originalElm) {
        var totalAlpha = 0;
        if (elmIndex > 0) {
          for (var i = elmIndex - 1; i >= 0; i--) {
            var bgElm = elmStack[i];
            var bgElmStyle = window.getComputedStyle(bgElm);
            var bgColor = getBgColor(bgElm, bgElmStyle);
            if (bgColor.alpha && contentOverlapping(originalElm, bgElm)) {
              totalAlpha += bgColor.alpha;
            } else {
              elmStack.splice(i, 1);
            }
          }
        }
        return totalAlpha;
      }
      function elmPartiallyObscured(elm, bgElm, bgColor) {
        var obscured = elm !== bgElm && !dom.visuallyContains(elm, bgElm) && bgColor.alpha !== 0;
        if (obscured) {
          axe.commons.color.incompleteData.set('bgColor', 'elmPartiallyObscured');
        }
        return obscured;
      }
      function includeMissingElements(elmStack, elm) {
        var elementMap = {
          TD: [ 'TR', 'TBODY' ],
          TH: [ 'TR', 'THEAD' ],
          INPUT: [ 'LABEL' ]
        };
        var tagArray = elmStack.map(function(elm) {
          return elm.tagName;
        });
        var bgNodes = elmStack;
        for (var candidate in elementMap) {
          if (tagArray.includes(candidate)) {
            for (var candidateIndex in elementMap[candidate]) {
              if (candidate.hasOwnProperty(candidateIndex)) {
                var ancestorMatch = axe.commons.dom.findUp(elm, elementMap[candidate][candidateIndex]);
                if (ancestorMatch && elmStack.indexOf(ancestorMatch) === -1) {
                  var overlaps = axe.commons.dom.visuallyOverlaps(elm.getBoundingClientRect(), ancestorMatch);
                  if (overlaps) {
                    bgNodes.splice(tagArray.indexOf(candidate) + 1, 0, ancestorMatch);
                  }
                }
                if (elm.tagName === elementMap[candidate][candidateIndex] && tagArray.indexOf(elm.tagName) === -1) {
                  bgNodes.splice(tagArray.indexOf(candidate) + 1, 0, elm);
                }
              }
            }
          }
        }
        return bgNodes;
      }
      function sortPageBackground(elmStack) {
        var bodyIndex = elmStack.indexOf(document.body);
        var bgNodes = elmStack;
        if (bodyIndex > 1 && !elmHasImage(document.documentElement) && getBgColor(document.documentElement).alpha === 0) {
          bgNodes.splice(bodyIndex, 1);
          bgNodes.splice(elmStack.indexOf(document.documentElement), 1);
          bgNodes.push(document.body);
        }
        return bgNodes;
      }
      color.getCoords = function(rect) {
        var x = void 0, y = void 0;
        if (rect.left > window.innerWidth) {
          return;
        }
        if (rect.top > window.innerHeight) {
          return;
        }
        x = Math.min(Math.ceil(rect.left + rect.width / 2), window.innerWidth - 1);
        y = Math.min(Math.ceil(rect.top + rect.height / 2), window.innerHeight - 1);
        return {
          x: x,
          y: y
        };
      };
      color.getRectStack = function(elm) {
        var boundingCoords = color.getCoords(elm.getBoundingClientRect());
        if (boundingCoords) {
          var boundingStack = dom.shadowElementsFromPoint(boundingCoords.x, boundingCoords.y);
          var rects = Array.from(elm.getClientRects());
          if (rects && rects.length > 1) {
            var filteredArr = rects.filter(function(rect) {
              return rect.width && rect.width > 0;
            }).map(function(rect) {
              var coords = color.getCoords(rect);
              if (coords) {
                return dom.shadowElementsFromPoint(coords.x, coords.y);
              }
            });
            filteredArr.splice(0, 0, boundingStack);
            return filteredArr;
          } else {
            return [ boundingStack ];
          }
        }
        return null;
      };
      color.filteredRectStack = function(elm) {
        var rectStack = color.getRectStack(elm);
        if (rectStack && rectStack.length === 1) {
          return rectStack[0];
        } else if (rectStack && rectStack.length > 1) {
          var boundingStack = rectStack.shift();
          var isSame = void 0;
          rectStack.forEach(function(rectList, index) {
            if (index === 0) {
              return;
            }
            var rectA = rectStack[index - 1], rectB = rectStack[index];
            isSame = rectA.every(function(element, elementIndex) {
              return element === rectB[elementIndex];
            }) || boundingStack.includes(elm);
          });
          if (!isSame) {
            axe.commons.color.incompleteData.set('bgColor', 'elmPartiallyObscuring');
            return null;
          }
          return rectStack[0];
        } else {
          axe.commons.color.incompleteData.set('bgColor', 'outsideViewport');
          return null;
        }
      };
      color.getBackgroundStack = function(elm) {
        var elmStack = color.filteredRectStack(elm);
        if (elmStack === null) {
          return null;
        }
        elmStack = includeMissingElements(elmStack, elm);
        elmStack = dom.reduceToElementsBelowFloating(elmStack, elm);
        elmStack = sortPageBackground(elmStack);
        var elmIndex = elmStack.indexOf(elm);
        if (calculateObscuringAlpha(elmIndex, elmStack, elm) >= .99) {
          axe.commons.color.incompleteData.set('bgColor', 'bgOverlap');
          return null;
        }
        return elmIndex !== -1 ? elmStack : null;
      };
      color.getBackgroundColor = function(elm) {
        var bgElms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var noScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (noScroll !== true) {
          var alignToTop = elm.clientHeight - 2 >= window.innerHeight * 2;
          elm.scrollIntoView(alignToTop);
        }
        var bgColors = [];
        var elmStack = color.getBackgroundStack(elm);
        (elmStack || []).some(function(bgElm) {
          var bgElmStyle = window.getComputedStyle(bgElm);
          var bgColor = getBgColor(bgElm, bgElmStyle);
          if (elmPartiallyObscured(elm, bgElm, bgColor) || elmHasImage(bgElm, bgElmStyle)) {
            bgColors = null;
            bgElms.push(bgElm);
            return true;
          }
          if (bgColor.alpha !== 0) {
            bgElms.push(bgElm);
            bgColors.push(bgColor);
            return bgColor.alpha === 1;
          } else {
            return false;
          }
        });
        if (bgColors !== null && elmStack !== null) {
          bgColors.push(new color.Color(255, 255, 255, 1));
          var colors = bgColors.reduce(color.flattenColors);
          return colors;
        }
        return null;
      };
      dom.isOpaque = function(node) {
        var style = window.getComputedStyle(node);
        return elmHasImage(node, style) || getBgColor(node, style).alpha === 1;
      };
      color.getForegroundColor = function(node, noScroll) {
        var nodeStyle = window.getComputedStyle(node);
        var fgColor = new color.Color();
        fgColor.parseRgbString(nodeStyle.getPropertyValue('color'));
        var opacity = nodeStyle.getPropertyValue('opacity');
        fgColor.alpha = fgColor.alpha * opacity;
        if (fgColor.alpha === 1) {
          return fgColor;
        }
        var bgColor = color.getBackgroundColor(node, [], noScroll);
        if (bgColor === null) {
          var reason = axe.commons.color.incompleteData.get('bgColor');
          axe.commons.color.incompleteData.set('fgColor', reason);
          return null;
        }
        return color.flattenColors(fgColor, bgColor);
      };
      color.incompleteData = function() {
        var data = {};
        return {
          set: function set(key, reason) {
            if (typeof key !== 'string') {
              throw new Error('Incomplete data: key must be a string');
            }
            if (reason) {
              data[key] = reason;
            }
            return data[key];
          },
          get: function get(key) {
            return data[key];
          },
          clear: function clear() {
            data = {};
          }
        };
      }();
      dom.reduceToElementsBelowFloating = function(elements, targetNode) {
        var floatingPositions = [ 'fixed', 'sticky' ], finalElements = [], targetFound = false, index, currentNode, style;
        for (index = 0; index < elements.length; ++index) {
          currentNode = elements[index];
          if (currentNode === targetNode) {
            targetFound = true;
          }
          style = window.getComputedStyle(currentNode);
          if (!targetFound && floatingPositions.indexOf(style.position) !== -1) {
            finalElements = [];
            continue;
          }
          finalElements.push(currentNode);
        }
        return finalElements;
      };
      dom.findElmsInContext = function(_ref9) {
        var context = _ref9.context, value = _ref9.value, attr = _ref9.attr, _ref9$elm = _ref9.elm, elm = _ref9$elm === undefined ? '' : _ref9$elm;
        var root = void 0;
        var escapedValue = axe.utils.escapeSelector(value);
        if (context.nodeType === 9 || context.nodeType === 11) {
          root = context;
        } else {
          root = dom.getRootNode(context);
        }
        return Array.from(root.querySelectorAll(elm + '[' + attr + '=' + escapedValue + ']'));
      };
      dom.findUp = function(element, target) {
        return dom.findUpVirtual(axe.utils.getNodeFromTree(axe._tree[0], element), target);
      };
      dom.findUpVirtual = function(element, target) {
        var parent = void 0;
        parent = element.actualNode;
        if (!element.shadowId && typeof element.actualNode.closest === 'function') {
          var match = element.actualNode.closest(target);
          if (match) {
            return match;
          }
          return null;
        }
        do {
          parent = parent.assignedSlot ? parent.assignedSlot : parent.parentNode;
          if (parent && parent.nodeType === 11) {
            parent = parent.host;
          }
        } while (parent && !axe.utils.matchesSelector(parent, target) && parent !== document.documentElement);
        if (!axe.utils.matchesSelector(parent, target)) {
          return null;
        }
        return parent;
      };
      dom.getComposedParent = function getComposedParent(element) {
        if (element.assignedSlot) {
          return getComposedParent(element.assignedSlot);
        } else if (element.parentNode) {
          var parentNode = element.parentNode;
          if (parentNode.nodeType === 1) {
            return parentNode;
          } else if (parentNode.host) {
            return parentNode.host;
          }
        }
        return null;
      };
      dom.getElementByReference = function(node, attr) {
        var fragment = node.getAttribute(attr);
        if (fragment && fragment.charAt(0) === '#') {
          fragment = decodeURIComponent(fragment.substring(1));
          var candidate = document.getElementById(fragment);
          if (candidate) {
            return candidate;
          }
          candidate = document.getElementsByName(fragment);
          if (candidate.length) {
            return candidate[0];
          }
        }
        return null;
      };
      dom.getElementCoordinates = function(element) {
        'use strict';
        var scrollOffset = dom.getScrollOffset(document), xOffset = scrollOffset.left, yOffset = scrollOffset.top, coords = element.getBoundingClientRect();
        return {
          top: coords.top + yOffset,
          right: coords.right + xOffset,
          bottom: coords.bottom + yOffset,
          left: coords.left + xOffset,
          width: coords.right - coords.left,
          height: coords.bottom - coords.top
        };
      };
      dom.getRootNode = function(node) {
        var doc = node.getRootNode && node.getRootNode() || document;
        if (doc === node) {
          doc = document;
        }
        return doc;
      };
      dom.getScrollOffset = function(element) {
        'use strict';
        if (!element.nodeType && element.document) {
          element = element.document;
        }
        if (element.nodeType === 9) {
          var docElement = element.documentElement, body = element.body;
          return {
            left: docElement && docElement.scrollLeft || body && body.scrollLeft || 0,
            top: docElement && docElement.scrollTop || body && body.scrollTop || 0
          };
        }
        return {
          left: element.scrollLeft,
          top: element.scrollTop
        };
      };
      dom.getViewportSize = function(win) {
        'use strict';
        var body, doc = win.document, docElement = doc.documentElement;
        if (win.innerWidth) {
          return {
            width: win.innerWidth,
            height: win.innerHeight
          };
        }
        if (docElement) {
          return {
            width: docElement.clientWidth,
            height: docElement.clientHeight
          };
        }
        body = doc.body;
        return {
          width: body.clientWidth,
          height: body.clientHeight
        };
      };
      var hiddenTextElms = [ 'HEAD', 'TITLE', 'TEMPLATE', 'SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'VIDEO', 'AUDIO', 'NOSCRIPT' ];
      function hasChildTextNodes(elm) {
        if (!hiddenTextElms.includes(elm.actualNode.nodeName.toUpperCase())) {
          return elm.children.some(function(_ref10) {
            var actualNode = _ref10.actualNode;
            return actualNode.nodeType === 3 && actualNode.nodeValue.trim();
          });
        }
      }
      dom.hasContentVirtual = function(elm, noRecursion) {
        return hasChildTextNodes(elm) || dom.isVisualContent(elm.actualNode) || !!aria.labelVirtual(elm) || !noRecursion && elm.children.some(function(child) {
          return child.actualNode.nodeType === 1 && dom.hasContentVirtual(child);
        });
      };
      dom.hasContent = function hasContent(elm, noRecursion) {
        elm = axe.utils.getNodeFromTree(axe._tree[0], elm);
        return dom.hasContentVirtual(elm, noRecursion);
      };
      dom.idrefs = function(node, attr) {
        'use strict';
        var index, length, doc = dom.getRootNode(node), result = [], idrefs = node.getAttribute(attr);
        if (idrefs) {
          idrefs = axe.utils.tokenList(idrefs);
          for (index = 0, length = idrefs.length; index < length; index++) {
            result.push(doc.getElementById(idrefs[index]));
          }
        }
        return result;
      };
      function focusDisabled(el) {
        return el.disabled || !dom.isVisible(el, true) && el.nodeName.toUpperCase() !== 'AREA';
      }
      dom.isFocusable = function(el) {
        'use strict';
        if (focusDisabled(el)) {
          return false;
        } else if (dom.isNativelyFocusable(el)) {
          return true;
        }
        var tabindex = el.getAttribute('tabindex');
        if (tabindex && !isNaN(parseInt(tabindex, 10))) {
          return true;
        }
        return false;
      };
      dom.isNativelyFocusable = function(el) {
        'use strict';
        if (!el || focusDisabled(el)) {
          return false;
        }
        switch (el.nodeName.toUpperCase()) {
         case 'A':
         case 'AREA':
          if (el.href) {
            return true;
          }
          break;

         case 'INPUT':
          return el.type !== 'hidden';

         case 'TEXTAREA':
         case 'SELECT':
         case 'DETAILS':
         case 'BUTTON':
          return true;
        }
        return false;
      };
      dom.insertedIntoFocusOrder = function(el) {
        return el.tabIndex > -1 && dom.isFocusable(el) && !dom.isNativelyFocusable(el);
      };
      dom.isHTML5 = function(doc) {
        var node = doc.doctype;
        if (node === null) {
          return false;
        }
        return node.name === 'html' && !node.publicId && !node.systemId;
      };
      function walkDomNode(node, functor) {
        if (functor(node.actualNode) !== false) {
          node.children.forEach(function(child) {
            return walkDomNode(child, functor);
          });
        }
      }
      var blockLike = [ 'block', 'list-item', 'table', 'flex', 'grid', 'inline-block' ];
      function isBlock(elm) {
        var display = window.getComputedStyle(elm).getPropertyValue('display');
        return blockLike.includes(display) || display.substr(0, 6) === 'table-';
      }
      function getBlockParent(node) {
        var parentBlock = dom.getComposedParent(node);
        while (parentBlock && !isBlock(parentBlock)) {
          parentBlock = dom.getComposedParent(parentBlock);
        }
        return axe.utils.getNodeFromTree(axe._tree[0], parentBlock);
      }
      dom.isInTextBlock = function isInTextBlock(node) {
        if (isBlock(node)) {
          return false;
        }
        var virtualParent = getBlockParent(node);
        var parentText = '';
        var linkText = '';
        var inBrBlock = 0;
        walkDomNode(virtualParent, function(currNode) {
          if (inBrBlock === 2) {
            return false;
          }
          if (currNode.nodeType === 3) {
            parentText += currNode.nodeValue;
          }
          if (currNode.nodeType !== 1) {
            return;
          }
          var nodeName = (currNode.nodeName || '').toUpperCase();
          if ([ 'BR', 'HR' ].includes(nodeName)) {
            if (inBrBlock === 0) {
              parentText = '';
              linkText = '';
            } else {
              inBrBlock = 2;
            }
          } else if (currNode.style.display === 'none' || currNode.style.overflow === 'hidden' || ![ '', null, 'none' ].includes(currNode.style.float) || ![ '', null, 'relative' ].includes(currNode.style.position)) {
            return false;
          } else if (nodeName === 'A' && currNode.href || (currNode.getAttribute('role') || '').toLowerCase() === 'link') {
            if (currNode === node) {
              inBrBlock = 1;
            }
            linkText += currNode.textContent;
            return false;
          }
        });
        parentText = axe.commons.text.sanitize(parentText);
        linkText = axe.commons.text.sanitize(linkText);
        return parentText.length > linkText.length;
      };
      dom.isNode = function(element) {
        'use strict';
        return element instanceof Node;
      };
      function noParentScrolled(element, offset) {
        element = dom.getComposedParent(element);
        while (element && element.nodeName.toLowerCase() !== 'html') {
          if (element.scrollTop) {
            offset += element.scrollTop;
            if (offset >= 0) {
              return false;
            }
          }
          element = dom.getComposedParent(element);
        }
        return true;
      }
      dom.isOffscreen = function(element) {
        var leftBoundary = void 0;
        var docElement = document.documentElement;
        var styl = window.getComputedStyle(element);
        var dir = window.getComputedStyle(document.body || docElement).getPropertyValue('direction');
        var coords = dom.getElementCoordinates(element);
        if (coords.bottom < 0 && (noParentScrolled(element, coords.bottom) || styl.position === 'absolute')) {
          return true;
        }
        if (coords.left === 0 && coords.right === 0) {
          return false;
        }
        if (dir === 'ltr') {
          if (coords.right <= 0) {
            return true;
          }
        } else {
          leftBoundary = Math.max(docElement.scrollWidth, dom.getViewportSize(window).width);
          if (coords.left >= leftBoundary) {
            return true;
          }
        }
        return false;
      };
      function isClipped(clip) {
        'use strict';
        var matches = clip.match(/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/);
        if (matches && matches.length === 5) {
          return matches[3] - matches[1] <= 0 && matches[2] - matches[4] <= 0;
        }
        return false;
      }
      dom.isVisible = function(el, screenReader, recursed) {
        'use strict';
        var style, nodeName, parent;
        if (el.nodeType === 9) {
          return true;
        }
        if (el.nodeType === 11) {
          el = el.host;
        }
        style = window.getComputedStyle(el, null);
        if (style === null) {
          return false;
        }
        nodeName = el.nodeName.toUpperCase();
        if (style.getPropertyValue('display') === 'none' || nodeName.toUpperCase() === 'STYLE' || nodeName.toUpperCase() === 'SCRIPT' || !screenReader && isClipped(style.getPropertyValue('clip')) || !recursed && (style.getPropertyValue('visibility') === 'hidden' || !screenReader && dom.isOffscreen(el)) || screenReader && el.getAttribute('aria-hidden') === 'true') {
          return false;
        }
        parent = el.assignedSlot ? el.assignedSlot : el.parentNode;
        if (parent) {
          return dom.isVisible(parent, screenReader, true);
        }
        return false;
      };
      var visualRoles = [ 'checkbox', 'img', 'radio', 'range', 'slider', 'spinbutton', 'textbox' ];
      dom.isVisualContent = function(element) {
        var role = element.getAttribute('role');
        if (role) {
          return visualRoles.indexOf(role) !== -1;
        }
        switch (element.tagName.toUpperCase()) {
         case 'IMG':
         case 'IFRAME':
         case 'OBJECT':
         case 'VIDEO':
         case 'AUDIO':
         case 'CANVAS':
         case 'SVG':
         case 'MATH':
         case 'BUTTON':
         case 'SELECT':
         case 'TEXTAREA':
         case 'KEYGEN':
         case 'PROGRESS':
         case 'METER':
          return true;

         case 'INPUT':
          return element.type !== 'hidden';

         default:
          return false;
        }
      };
      dom.shadowElementsFromPoint = function(nodeX, nodeY) {
        var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (i > 999) {
          throw new Error('Infinite loop detected');
        }
        return Array.from(root.elementsFromPoint(nodeX, nodeY)).filter(function(nodes) {
          return dom.getRootNode(nodes) === root;
        }).reduce(function(stack, elm) {
          if (axe.utils.isShadowRoot(elm)) {
            var shadowStack = dom.shadowElementsFromPoint(nodeX, nodeY, elm.shadowRoot, i + 1);
            stack = stack.concat(shadowStack);
            if (stack.length && axe.commons.dom.visuallyContains(stack[0], elm)) {
              stack.push(elm);
            }
          } else {
            stack.push(elm);
          }
          return stack;
        }, []);
      };
      dom.visuallyContains = function(node, parent) {
        var rectBound = node.getBoundingClientRect();
        var margin = .01;
        var rect = {
          top: rectBound.top + margin,
          bottom: rectBound.bottom - margin,
          left: rectBound.left + margin,
          right: rectBound.right - margin
        };
        var parentRect = parent.getBoundingClientRect();
        var parentTop = parentRect.top;
        var parentLeft = parentRect.left;
        var parentScrollArea = {
          top: parentTop - parent.scrollTop,
          bottom: parentTop - parent.scrollTop + parent.scrollHeight,
          left: parentLeft - parent.scrollLeft,
          right: parentLeft - parent.scrollLeft + parent.scrollWidth
        };
        var style = window.getComputedStyle(parent);
        if (style.getPropertyValue('display') === 'inline') {
          return true;
        }
        if (rect.left < parentScrollArea.left && rect.left < parentRect.left || rect.top < parentScrollArea.top && rect.top < parentRect.top || rect.right > parentScrollArea.right && rect.right > parentRect.right || rect.bottom > parentScrollArea.bottom && rect.bottom > parentRect.bottom) {
          return false;
        }
        if (rect.right > parentRect.right || rect.bottom > parentRect.bottom) {
          return style.overflow === 'scroll' || style.overflow === 'auto' || style.overflow === 'hidden' || parent instanceof HTMLBodyElement || parent instanceof HTMLHtmlElement;
        }
        return true;
      };
      dom.visuallyOverlaps = function(rect, parent) {
        var parentRect = parent.getBoundingClientRect();
        var parentTop = parentRect.top;
        var parentLeft = parentRect.left;
        var parentScrollArea = {
          top: parentTop - parent.scrollTop,
          bottom: parentTop - parent.scrollTop + parent.scrollHeight,
          left: parentLeft - parent.scrollLeft,
          right: parentLeft - parent.scrollLeft + parent.scrollWidth
        };
        if (rect.left > parentScrollArea.right && rect.left > parentRect.right || rect.top > parentScrollArea.bottom && rect.top > parentRect.bottom || rect.right < parentScrollArea.left && rect.right < parentRect.left || rect.bottom < parentScrollArea.top && rect.bottom < parentRect.top) {
          return false;
        }
        var style = window.getComputedStyle(parent);
        if (rect.left > parentRect.right || rect.top > parentRect.bottom) {
          return style.overflow === 'scroll' || style.overflow === 'auto' || parent instanceof HTMLBodyElement || parent instanceof HTMLHtmlElement;
        }
        return true;
      };
      table.getAllCells = function(tableElm) {
        var rowIndex, cellIndex, rowLength, cellLength;
        var cells = [];
        for (rowIndex = 0, rowLength = tableElm.rows.length; rowIndex < rowLength; rowIndex++) {
          for (cellIndex = 0, cellLength = tableElm.rows[rowIndex].cells.length; cellIndex < cellLength; cellIndex++) {
            cells.push(tableElm.rows[rowIndex].cells[cellIndex]);
          }
        }
        return cells;
      };
      table.getCellPosition = function(cell, tableGrid) {
        var rowIndex, index;
        if (!tableGrid) {
          tableGrid = table.toGrid(dom.findUp(cell, 'table'));
        }
        for (rowIndex = 0; rowIndex < tableGrid.length; rowIndex++) {
          if (tableGrid[rowIndex]) {
            index = tableGrid[rowIndex].indexOf(cell);
            if (index !== -1) {
              return {
                x: index,
                y: rowIndex
              };
            }
          }
        }
      };
      table.getHeaders = function(cell) {
        if (cell.hasAttribute('headers')) {
          return commons.dom.idrefs(cell, 'headers');
        }
        var tableGrid = commons.table.toGrid(commons.dom.findUp(cell, 'table'));
        var position = commons.table.getCellPosition(cell, tableGrid);
        var rowHeaders = table.traverse('left', position, tableGrid).filter(function(cell) {
          return table.isRowHeader(cell);
        });
        var colHeaders = table.traverse('up', position, tableGrid).filter(function(cell) {
          return table.isColumnHeader(cell);
        });
        return [].concat(rowHeaders, colHeaders).reverse();
      };
      table.getScope = function(cell) {
        var scope = cell.getAttribute('scope');
        var role = cell.getAttribute('role');
        if (cell instanceof Element === false || [ 'TD', 'TH' ].indexOf(cell.nodeName.toUpperCase()) === -1) {
          throw new TypeError('Expected TD or TH element');
        }
        if (role === 'columnheader') {
          return 'col';
        } else if (role === 'rowheader') {
          return 'row';
        } else if (scope === 'col' || scope === 'row') {
          return scope;
        } else if (cell.nodeName.toUpperCase() !== 'TH') {
          return false;
        }
        var tableGrid = table.toGrid(dom.findUp(cell, 'table'));
        var pos = table.getCellPosition(cell);
        var headerRow = tableGrid[pos.y].reduce(function(headerRow, cell) {
          return headerRow && cell.nodeName.toUpperCase() === 'TH';
        }, true);
        if (headerRow) {
          return 'col';
        }
        var headerCol = tableGrid.map(function(col) {
          return col[pos.x];
        }).reduce(function(headerCol, cell) {
          return headerCol && cell.nodeName.toUpperCase() === 'TH';
        }, true);
        if (headerCol) {
          return 'row';
        }
        return 'auto';
      };
      table.isColumnHeader = function(element) {
        return [ 'col', 'auto' ].indexOf(table.getScope(element)) !== -1;
      };
      table.isDataCell = function(cell) {
        if (!cell.children.length && !cell.textContent.trim()) {
          return false;
        }
        return cell.nodeName.toUpperCase() === 'TD';
      };
      table.isDataTable = function(node) {
        var role = (node.getAttribute('role') || '').toLowerCase();
        if ((role === 'presentation' || role === 'none') && !dom.isFocusable(node)) {
          return false;
        }
        if (node.getAttribute('contenteditable') === 'true' || dom.findUp(node, '[contenteditable="true"]')) {
          return true;
        }
        if (role === 'grid' || role === 'treegrid' || role === 'table') {
          return true;
        }
        if (commons.aria.getRoleType(role) === 'landmark') {
          return true;
        }
        if (node.getAttribute('datatable') === '0') {
          return false;
        }
        if (node.getAttribute('summary')) {
          return true;
        }
        if (node.tHead || node.tFoot || node.caption) {
          return true;
        }
        for (var childIndex = 0, childLength = node.children.length; childIndex < childLength; childIndex++) {
          if (node.children[childIndex].nodeName.toUpperCase() === 'COLGROUP') {
            return true;
          }
        }
        var cells = 0;
        var rowLength = node.rows.length;
        var row, cell;
        var hasBorder = false;
        for (var rowIndex = 0; rowIndex < rowLength; rowIndex++) {
          row = node.rows[rowIndex];
          for (var cellIndex = 0, cellLength = row.cells.length; cellIndex < cellLength; cellIndex++) {
            cell = row.cells[cellIndex];
            if (cell.nodeName.toUpperCase() === 'TH') {
              return true;
            }
            if (!hasBorder && (cell.offsetWidth !== cell.clientWidth || cell.offsetHeight !== cell.clientHeight)) {
              hasBorder = true;
            }
            if (cell.getAttribute('scope') || cell.getAttribute('headers') || cell.getAttribute('abbr')) {
              return true;
            }
            if ([ 'columnheader', 'rowheader' ].includes((cell.getAttribute('role') || '').toLowerCase())) {
              return true;
            }
            if (cell.children.length === 1 && cell.children[0].nodeName.toUpperCase() === 'ABBR') {
              return true;
            }
            cells++;
          }
        }
        if (node.getElementsByTagName('table').length) {
          return false;
        }
        if (rowLength < 2) {
          return false;
        }
        var sampleRow = node.rows[Math.ceil(rowLength / 2)];
        if (sampleRow.cells.length === 1 && sampleRow.cells[0].colSpan === 1) {
          return false;
        }
        if (sampleRow.cells.length >= 5) {
          return true;
        }
        if (hasBorder) {
          return true;
        }
        var bgColor, bgImage;
        for (rowIndex = 0; rowIndex < rowLength; rowIndex++) {
          row = node.rows[rowIndex];
          if (bgColor && bgColor !== window.getComputedStyle(row).getPropertyValue('background-color')) {
            return true;
          } else {
            bgColor = window.getComputedStyle(row).getPropertyValue('background-color');
          }
          if (bgImage && bgImage !== window.getComputedStyle(row).getPropertyValue('background-image')) {
            return true;
          } else {
            bgImage = window.getComputedStyle(row).getPropertyValue('background-image');
          }
        }
        if (rowLength >= 20) {
          return true;
        }
        if (dom.getElementCoordinates(node).width > dom.getViewportSize(window).width * .95) {
          return false;
        }
        if (cells < 10) {
          return false;
        }
        if (node.querySelector('object, embed, iframe, applet')) {
          return false;
        }
        return true;
      };
      table.isHeader = function(cell) {
        if (table.isColumnHeader(cell) || table.isRowHeader(cell)) {
          return true;
        }
        if (cell.getAttribute('id')) {
          var id = axe.utils.escapeSelector(cell.getAttribute('id'));
          return !!document.querySelector('[headers~="' + id + '"]');
        }
        return false;
      };
      table.isRowHeader = function(cell) {
        return [ 'row', 'auto' ].includes(table.getScope(cell));
      };
      table.toGrid = function(node) {
        var table = [];
        var rows = node.rows;
        for (var i = 0, rowLength = rows.length; i < rowLength; i++) {
          var cells = rows[i].cells;
          table[i] = table[i] || [];
          var columnIndex = 0;
          for (var j = 0, cellLength = cells.length; j < cellLength; j++) {
            for (var colSpan = 0; colSpan < cells[j].colSpan; colSpan++) {
              for (var rowSpan = 0; rowSpan < cells[j].rowSpan; rowSpan++) {
                table[i + rowSpan] = table[i + rowSpan] || [];
                while (table[i + rowSpan][columnIndex]) {
                  columnIndex++;
                }
                table[i + rowSpan][columnIndex] = cells[j];
              }
              columnIndex++;
            }
          }
        }
        return table;
      };
      table.toArray = table.toGrid;
      (function(table) {
        var traverseTable = function traverseTable(dir, position, tableGrid, callback) {
          var result;
          var cell = tableGrid[position.y] ? tableGrid[position.y][position.x] : undefined;
          if (!cell) {
            return [];
          }
          if (typeof callback === 'function') {
            result = callback(cell, position, tableGrid);
            if (result === true) {
              return [ cell ];
            }
          }
          result = traverseTable(dir, {
            x: position.x + dir.x,
            y: position.y + dir.y
          }, tableGrid, callback);
          result.unshift(cell);
          return result;
        };
        table.traverse = function(dir, startPos, tableGrid, callback) {
          if (Array.isArray(startPos)) {
            callback = tableGrid;
            tableGrid = startPos;
            startPos = {
              x: 0,
              y: 0
            };
          }
          if (typeof dir === 'string') {
            switch (dir) {
             case 'left':
              dir = {
                x: -1,
                y: 0
              };
              break;

             case 'up':
              dir = {
                x: 0,
                y: -1
              };
              break;

             case 'right':
              dir = {
                x: 1,
                y: 0
              };
              break;

             case 'down':
              dir = {
                x: 0,
                y: 1
              };
              break;
            }
          }
          return traverseTable(dir, {
            x: startPos.x + dir.x,
            y: startPos.y + dir.y
          }, tableGrid, callback);
        };
      })(table);
      var defaultButtonValues = {
        submit: 'Submit',
        reset: 'Reset'
      };
      var inputTypes = [ 'text', 'search', 'tel', 'url', 'email', 'date', 'time', 'number', 'range', 'color' ];
      var phrasingElements = [ 'A', 'EM', 'STRONG', 'SMALL', 'MARK', 'ABBR', 'DFN', 'I', 'B', 'S', 'U', 'CODE', 'VAR', 'SAMP', 'KBD', 'SUP', 'SUB', 'Q', 'CITE', 'SPAN', 'BDO', 'BDI', 'BR', 'WBR', 'INS', 'DEL', 'IMG', 'EMBED', 'OBJECT', 'IFRAME', 'MAP', 'AREA', 'SCRIPT', 'NOSCRIPT', 'RUBY', 'VIDEO', 'AUDIO', 'INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'LABEL', 'OUTPUT', 'DATALIST', 'KEYGEN', 'PROGRESS', 'COMMAND', 'CANVAS', 'TIME', 'METER' ];
      function findLabel(virtualNode) {
        var label = void 0;
        if (virtualNode.actualNode.id) {
          label = dom.findElmsInContext({
            elm: 'label',
            attr: 'for',
            value: virtualNode.actualNode.id,
            context: virtualNode.actualNode
          })[0];
        } else {
          label = dom.findUpVirtual(virtualNode, 'label');
        }
        return axe.utils.getNodeFromTree(axe._tree[0], label);
      }
      function isButton(_ref11) {
        var actualNode = _ref11.actualNode;
        return [ 'button', 'reset', 'submit' ].includes(actualNode.type.toLowerCase());
      }
      function isInput(_ref12) {
        var actualNode = _ref12.actualNode;
        var nodeName = actualNode.nodeName.toUpperCase();
        return nodeName === 'TEXTAREA' || nodeName === 'SELECT' || nodeName === 'INPUT' && actualNode.type.toLowerCase() !== 'hidden';
      }
      function shouldCheckSubtree(_ref13) {
        var actualNode = _ref13.actualNode;
        return [ 'BUTTON', 'SUMMARY', 'A' ].includes(actualNode.nodeName.toUpperCase());
      }
      function shouldNeverCheckSubtree(_ref14) {
        var actualNode = _ref14.actualNode;
        return [ 'TABLE', 'FIGURE' ].includes(actualNode.nodeName.toUpperCase());
      }
      function formValueText(_ref15) {
        var actualNode = _ref15.actualNode;
        var nodeName = actualNode.nodeName.toUpperCase();
        if (nodeName === 'INPUT') {
          if (!actualNode.hasAttribute('type') || inputTypes.includes(actualNode.type.toLowerCase())) {
            return actualNode.value;
          }
          return '';
        }
        if (nodeName === 'SELECT') {
          var opts = actualNode.options;
          if (opts && opts.length) {
            var returnText = '';
            for (var i = 0; i < opts.length; i++) {
              if (opts[i].selected) {
                returnText += ' ' + opts[i].text;
              }
            }
            return text.sanitize(returnText);
          }
          return '';
        }
        if (nodeName === 'TEXTAREA' && actualNode.value) {
          return actualNode.value;
        }
        return '';
      }
      function checkDescendant(_ref16, nodeName) {
        var actualNode = _ref16.actualNode;
        var candidate = actualNode.querySelector(nodeName.toLowerCase());
        if (candidate) {
          return text.accessibleText(candidate);
        }
        return '';
      }
      function isEmbeddedControl(elm) {
        if (!elm) {
          return false;
        }
        var actualNode = elm.actualNode;
        switch (actualNode.nodeName.toUpperCase()) {
         case 'SELECT':
         case 'TEXTAREA':
          return true;

         case 'INPUT':
          return !actualNode.hasAttribute('type') || inputTypes.includes(actualNode.getAttribute('type').toLowerCase());

         default:
          return false;
        }
      }
      function shouldCheckAlt(_ref17) {
        var actualNode = _ref17.actualNode;
        var nodeName = actualNode.nodeName.toUpperCase();
        return [ 'IMG', 'APPLET', 'AREA' ].includes(nodeName) || nodeName === 'INPUT' && actualNode.type.toLowerCase() === 'image';
      }
      function nonEmptyText(t) {
        return !!text.sanitize(t);
      }
      text.accessibleText = function accessibleText(element, inLabelledByContext) {
        var virtualNode = axe.utils.getNodeFromTree(axe._tree[0], element);
        return axe.commons.text.accessibleTextVirtual(virtualNode, inLabelledByContext);
      };
      text.accessibleTextVirtual = function accessibleTextVirtual(element, inLabelledByContext) {
        var accessibleNameComputation = void 0;
        var encounteredNodes = [];
        if (element instanceof Node) {
          element = axe.utils.getNodeFromTree(axe._tree[0], element);
        }
        function getInnerText(element, inLabelledByContext, inControlContext) {
          return element.children.reduce(function(returnText, child) {
            var actualNode = child.actualNode;
            if (actualNode.nodeType === 3) {
              returnText += actualNode.nodeValue;
            } else if (actualNode.nodeType === 1) {
              if (!phrasingElements.includes(actualNode.nodeName.toUpperCase())) {
                returnText += ' ';
              }
              returnText += accessibleNameComputation(child, inLabelledByContext, inControlContext);
            }
            return returnText;
          }, '');
        }
        function getLayoutTableText(element) {
          if (!axe.commons.table.isDataTable(element.actualNode) && axe.commons.table.getAllCells(element.actualNode).length === 1) {
            return getInnerText(element, false, false).trim();
          }
          return '';
        }
        function checkNative(element, inLabelledByContext, inControlContext) {
          var returnText = '';
          var actualNode = element.actualNode;
          var nodeName = actualNode.nodeName.toUpperCase();
          if (shouldCheckSubtree(element)) {
            returnText = getInnerText(element, false, false) || '';
            if (nonEmptyText(returnText)) {
              return returnText;
            }
          }
          if (nodeName === 'FIGURE') {
            returnText = checkDescendant(element, 'figcaption');
            if (nonEmptyText(returnText)) {
              return returnText;
            }
          }
          if (nodeName === 'TABLE') {
            returnText = checkDescendant(element, 'caption');
            if (nonEmptyText(returnText)) {
              return returnText;
            }
            returnText = actualNode.getAttribute('title') || actualNode.getAttribute('summary') || getLayoutTableText(element) || '';
            if (nonEmptyText(returnText)) {
              return returnText;
            }
          }
          if (shouldCheckAlt(element)) {
            return actualNode.getAttribute('alt') || '';
          }
          if (isInput(element) && !inControlContext) {
            if (isButton(element)) {
              return actualNode.value || actualNode.title || defaultButtonValues[actualNode.type] || '';
            }
            var labelElement = findLabel(element);
            if (labelElement) {
              return accessibleNameComputation(labelElement, inLabelledByContext, true);
            }
          }
          return '';
        }
        function checkARIA(element, inLabelledByContext, inControlContext) {
          var returnText = '';
          var actualNode = element.actualNode;
          if (!inLabelledByContext && actualNode.hasAttribute('aria-labelledby')) {
            returnText = text.sanitize(dom.idrefs(actualNode, 'aria-labelledby').map(function(label) {
              if (label !== null) {
                if (actualNode === label) {
                  encounteredNodes.pop();
                }
                var vLabel = axe.utils.getNodeFromTree(axe._tree[0], label);
                return accessibleNameComputation(vLabel, true, actualNode !== label);
              } else {
                return '';
              }
            }).join(' '));
          }
          if (!returnText && !(inControlContext && isEmbeddedControl(element)) && actualNode.hasAttribute('aria-label')) {
            return text.sanitize(actualNode.getAttribute('aria-label'));
          }
          return returnText;
        }
        accessibleNameComputation = function accessibleNameComputation(element, inLabelledByContext, inControlContext) {
          var returnText = void 0;
          if (!element || encounteredNodes.includes(element)) {
            return '';
          } else if (element !== null && element.actualNode instanceof Node !== true) {
            throw new Error('Invalid argument. Virtual Node must be provided');
          } else if (!inLabelledByContext && !dom.isVisible(element.actualNode, true)) {
            return '';
          }
          encounteredNodes.push(element);
          var role = element.actualNode.getAttribute('role');
          returnText = checkARIA(element, inLabelledByContext, inControlContext);
          if (nonEmptyText(returnText)) {
            return returnText;
          }
          returnText = checkNative(element, inLabelledByContext, inControlContext);
          if (nonEmptyText(returnText)) {
            return returnText;
          }
          if (inControlContext) {
            returnText = formValueText(element);
            if (nonEmptyText(returnText)) {
              return returnText;
            }
          }
          if (!shouldNeverCheckSubtree(element) && (!role || aria.getRolesWithNameFromContents().indexOf(role) !== -1)) {
            returnText = getInnerText(element, inLabelledByContext, inControlContext);
            if (nonEmptyText(returnText)) {
              return returnText;
            }
          }
          if (element.actualNode.hasAttribute('title')) {
            return element.actualNode.getAttribute('title');
          }
          return '';
        };
        return text.sanitize(accessibleNameComputation(element, inLabelledByContext));
      };
      text.labelVirtual = function(node) {
        var ref, candidate, doc;
        candidate = aria.labelVirtual(node);
        if (candidate) {
          return candidate;
        }
        if (node.actualNode.id) {
          var id = axe.commons.utils.escapeSelector(node.actualNode.getAttribute('id'));
          doc = axe.commons.dom.getRootNode(node.actualNode);
          ref = doc.querySelector('label[for="' + id + '"]');
          candidate = ref && text.visible(ref, true);
          if (candidate) {
            return candidate;
          }
        }
        ref = dom.findUpVirtual(node, 'label');
        candidate = ref && text.visible(ref, true);
        if (candidate) {
          return candidate;
        }
        return null;
      };
      text.label = function(node) {
        node = axe.utils.getNodeFromTree(axe._tree[0], node);
        return text.labelVirtual(node);
      };
      text.sanitize = function(str) {
        'use strict';
        return str.replace(/\r\n/g, '\n').replace(/\u00A0/g, ' ').replace(/[\s]{2,}/g, ' ').trim();
      };
      text.visibleVirtual = function(element, screenReader, noRecursing) {
        var result = element.children.map(function(child) {
          if (child.actualNode.nodeType === 3) {
            var nodeValue = child.actualNode.nodeValue;
            if (nodeValue && dom.isVisible(element.actualNode, screenReader)) {
              return nodeValue;
            }
          } else if (!noRecursing) {
            return text.visibleVirtual(child, screenReader);
          }
        }).join('');
        return text.sanitize(result);
      };
      text.visible = function(element, screenReader, noRecursing) {
        element = axe.utils.getNodeFromTree(axe._tree[0], element);
        return text.visibleVirtual(element, screenReader, noRecursing);
      };
      axe.utils.tokenList = function(str) {
        'use strict';
        return str.trim().replace(/\s{2,}/g, ' ').split(' ');
      };
      var langs = [ 'aa', 'ab', 'ae', 'af', 'ak', 'am', 'an', 'ar', 'as', 'av', 'ay', 'az', 'ba', 'be', 'bg', 'bh', 'bi', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'ce', 'ch', 'co', 'cr', 'cs', 'cu', 'cv', 'cy', 'da', 'de', 'dv', 'dz', 'ee', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'ff', 'fi', 'fj', 'fo', 'fr', 'fy', 'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'ho', 'hr', 'ht', 'hu', 'hy', 'hz', 'ia', 'id', 'ie', 'ig', 'ii', 'ik', 'in', 'io', 'is', 'it', 'iu', 'iw', 'ja', 'ji', 'jv', 'jw', 'ka', 'kg', 'ki', 'kj', 'kk', 'kl', 'km', 'kn', 'ko', 'kr', 'ks', 'ku', 'kv', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln', 'lo', 'lt', 'lu', 'lv', 'mg', 'mh', 'mi', 'mk', 'ml', 'mn', 'mo', 'mr', 'ms', 'mt', 'my', 'na', 'nb', 'nd', 'ne', 'ng', 'nl', 'nn', 'no', 'nr', 'nv', 'ny', 'oc', 'oj', 'om', 'or', 'os', 'pa', 'pi', 'pl', 'ps', 'pt', 'qu', 'rm', 'rn', 'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw', 'ty', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'wo', 'xh', 'yi', 'yo', 'za', 'zh', 'zu', 'aaa', 'aab', 'aac', 'aad', 'aae', 'aaf', 'aag', 'aah', 'aai', 'aak', 'aal', 'aam', 'aan', 'aao', 'aap', 'aaq', 'aas', 'aat', 'aau', 'aav', 'aaw', 'aax', 'aaz', 'aba', 'abb', 'abc', 'abd', 'abe', 'abf', 'abg', 'abh', 'abi', 'abj', 'abl', 'abm', 'abn', 'abo', 'abp', 'abq', 'abr', 'abs', 'abt', 'abu', 'abv', 'abw', 'abx', 'aby', 'abz', 'aca', 'acb', 'acd', 'ace', 'acf', 'ach', 'aci', 'ack', 'acl', 'acm', 'acn', 'acp', 'acq', 'acr', 'acs', 'act', 'acu', 'acv', 'acw', 'acx', 'acy', 'acz', 'ada', 'adb', 'add', 'ade', 'adf', 'adg', 'adh', 'adi', 'adj', 'adl', 'adn', 'ado', 'adp', 'adq', 'adr', 'ads', 'adt', 'adu', 'adw', 'adx', 'ady', 'adz', 'aea', 'aeb', 'aec', 'aed', 'aee', 'aek', 'ael', 'aem', 'aen', 'aeq', 'aer', 'aes', 'aeu', 'aew', 'aey', 'aez', 'afa', 'afb', 'afd', 'afe', 'afg', 'afh', 'afi', 'afk', 'afn', 'afo', 'afp', 'afs', 'aft', 'afu', 'afz', 'aga', 'agb', 'agc', 'agd', 'age', 'agf', 'agg', 'agh', 'agi', 'agj', 'agk', 'agl', 'agm', 'agn', 'ago', 'agp', 'agq', 'agr', 'ags', 'agt', 'agu', 'agv', 'agw', 'agx', 'agy', 'agz', 'aha', 'ahb', 'ahg', 'ahh', 'ahi', 'ahk', 'ahl', 'ahm', 'ahn', 'aho', 'ahp', 'ahr', 'ahs', 'aht', 'aia', 'aib', 'aic', 'aid', 'aie', 'aif', 'aig', 'aih', 'aii', 'aij', 'aik', 'ail', 'aim', 'ain', 'aio', 'aip', 'aiq', 'air', 'ais', 'ait', 'aiw', 'aix', 'aiy', 'aja', 'ajg', 'aji', 'ajn', 'ajp', 'ajt', 'aju', 'ajw', 'ajz', 'akb', 'akc', 'akd', 'ake', 'akf', 'akg', 'akh', 'aki', 'akj', 'akk', 'akl', 'akm', 'ako', 'akp', 'akq', 'akr', 'aks', 'akt', 'aku', 'akv', 'akw', 'akx', 'aky', 'akz', 'ala', 'alc', 'ald', 'ale', 'alf', 'alg', 'alh', 'ali', 'alj', 'alk', 'all', 'alm', 'aln', 'alo', 'alp', 'alq', 'alr', 'als', 'alt', 'alu', 'alv', 'alw', 'alx', 'aly', 'alz', 'ama', 'amb', 'amc', 'ame', 'amf', 'amg', 'ami', 'amj', 'amk', 'aml', 'amm', 'amn', 'amo', 'amp', 'amq', 'amr', 'ams', 'amt', 'amu', 'amv', 'amw', 'amx', 'amy', 'amz', 'ana', 'anb', 'anc', 'and', 'ane', 'anf', 'ang', 'anh', 'ani', 'anj', 'ank', 'anl', 'anm', 'ann', 'ano', 'anp', 'anq', 'anr', 'ans', 'ant', 'anu', 'anv', 'anw', 'anx', 'any', 'anz', 'aoa', 'aob', 'aoc', 'aod', 'aoe', 'aof', 'aog', 'aoh', 'aoi', 'aoj', 'aok', 'aol', 'aom', 'aon', 'aor', 'aos', 'aot', 'aou', 'aox', 'aoz', 'apa', 'apb', 'apc', 'apd', 'ape', 'apf', 'apg', 'aph', 'api', 'apj', 'apk', 'apl', 'apm', 'apn', 'apo', 'app', 'apq', 'apr', 'aps', 'apt', 'apu', 'apv', 'apw', 'apx', 'apy', 'apz', 'aqa', 'aqc', 'aqd', 'aqg', 'aql', 'aqm', 'aqn', 'aqp', 'aqr', 'aqt', 'aqz', 'arb', 'arc', 'ard', 'are', 'arh', 'ari', 'arj', 'ark', 'arl', 'arn', 'aro', 'arp', 'arq', 'arr', 'ars', 'art', 'aru', 'arv', 'arw', 'arx', 'ary', 'arz', 'asa', 'asb', 'asc', 'asd', 'ase', 'asf', 'asg', 'ash', 'asi', 'asj', 'ask', 'asl', 'asn', 'aso', 'asp', 'asq', 'asr', 'ass', 'ast', 'asu', 'asv', 'asw', 'asx', 'asy', 'asz', 'ata', 'atb', 'atc', 'atd', 'ate', 'atg', 'ath', 'ati', 'atj', 'atk', 'atl', 'atm', 'atn', 'ato', 'atp', 'atq', 'atr', 'ats', 'att', 'atu', 'atv', 'atw', 'atx', 'aty', 'atz', 'aua', 'aub', 'auc', 'aud', 'aue', 'auf', 'aug', 'auh', 'aui', 'auj', 'auk', 'aul', 'aum', 'aun', 'auo', 'aup', 'auq', 'aur', 'aus', 'aut', 'auu', 'auw', 'aux', 'auy', 'auz', 'avb', 'avd', 'avi', 'avk', 'avl', 'avm', 'avn', 'avo', 'avs', 'avt', 'avu', 'avv', 'awa', 'awb', 'awc', 'awd', 'awe', 'awg', 'awh', 'awi', 'awk', 'awm', 'awn', 'awo', 'awr', 'aws', 'awt', 'awu', 'awv', 'aww', 'awx', 'awy', 'axb', 'axe', 'axg', 'axk', 'axl', 'axm', 'axx', 'aya', 'ayb', 'ayc', 'ayd', 'aye', 'ayg', 'ayh', 'ayi', 'ayk', 'ayl', 'ayn', 'ayo', 'ayp', 'ayq', 'ayr', 'ays', 'ayt', 'ayu', 'ayx', 'ayy', 'ayz', 'aza', 'azb', 'azc', 'azd', 'azg', 'azj', 'azm', 'azn', 'azo', 'azt', 'azz', 'baa', 'bab', 'bac', 'bad', 'bae', 'baf', 'bag', 'bah', 'bai', 'baj', 'bal', 'ban', 'bao', 'bap', 'bar', 'bas', 'bat', 'bau', 'bav', 'baw', 'bax', 'bay', 'baz', 'bba', 'bbb', 'bbc', 'bbd', 'bbe', 'bbf', 'bbg', 'bbh', 'bbi', 'bbj', 'bbk', 'bbl', 'bbm', 'bbn', 'bbo', 'bbp', 'bbq', 'bbr', 'bbs', 'bbt', 'bbu', 'bbv', 'bbw', 'bbx', 'bby', 'bbz', 'bca', 'bcb', 'bcc', 'bcd', 'bce', 'bcf', 'bcg', 'bch', 'bci', 'bcj', 'bck', 'bcl', 'bcm', 'bcn', 'bco', 'bcp', 'bcq', 'bcr', 'bcs', 'bct', 'bcu', 'bcv', 'bcw', 'bcy', 'bcz', 'bda', 'bdb', 'bdc', 'bdd', 'bde', 'bdf', 'bdg', 'bdh', 'bdi', 'bdj', 'bdk', 'bdl', 'bdm', 'bdn', 'bdo', 'bdp', 'bdq', 'bdr', 'bds', 'bdt', 'bdu', 'bdv', 'bdw', 'bdx', 'bdy', 'bdz', 'bea', 'beb', 'bec', 'bed', 'bee', 'bef', 'beg', 'beh', 'bei', 'bej', 'bek', 'bem', 'beo', 'bep', 'beq', 'ber', 'bes', 'bet', 'beu', 'bev', 'bew', 'bex', 'bey', 'bez', 'bfa', 'bfb', 'bfc', 'bfd', 'bfe', 'bff', 'bfg', 'bfh', 'bfi', 'bfj', 'bfk', 'bfl', 'bfm', 'bfn', 'bfo', 'bfp', 'bfq', 'bfr', 'bfs', 'bft', 'bfu', 'bfw', 'bfx', 'bfy', 'bfz', 'bga', 'bgb', 'bgc', 'bgd', 'bge', 'bgf', 'bgg', 'bgi', 'bgj', 'bgk', 'bgl', 'bgm', 'bgn', 'bgo', 'bgp', 'bgq', 'bgr', 'bgs', 'bgt', 'bgu', 'bgv', 'bgw', 'bgx', 'bgy', 'bgz', 'bha', 'bhb', 'bhc', 'bhd', 'bhe', 'bhf', 'bhg', 'bhh', 'bhi', 'bhj', 'bhk', 'bhl', 'bhm', 'bhn', 'bho', 'bhp', 'bhq', 'bhr', 'bhs', 'bht', 'bhu', 'bhv', 'bhw', 'bhx', 'bhy', 'bhz', 'bia', 'bib', 'bic', 'bid', 'bie', 'bif', 'big', 'bij', 'bik', 'bil', 'bim', 'bin', 'bio', 'bip', 'biq', 'bir', 'bit', 'biu', 'biv', 'biw', 'bix', 'biy', 'biz', 'bja', 'bjb', 'bjc', 'bjd', 'bje', 'bjf', 'bjg', 'bjh', 'bji', 'bjj', 'bjk', 'bjl', 'bjm', 'bjn', 'bjo', 'bjp', 'bjq', 'bjr', 'bjs', 'bjt', 'bju', 'bjv', 'bjw', 'bjx', 'bjy', 'bjz', 'bka', 'bkb', 'bkc', 'bkd', 'bkf', 'bkg', 'bkh', 'bki', 'bkj', 'bkk', 'bkl', 'bkm', 'bkn', 'bko', 'bkp', 'bkq', 'bkr', 'bks', 'bkt', 'bku', 'bkv', 'bkw', 'bkx', 'bky', 'bkz', 'bla', 'blb', 'blc', 'bld', 'ble', 'blf', 'blg', 'blh', 'bli', 'blj', 'blk', 'bll', 'blm', 'bln', 'blo', 'blp', 'blq', 'blr', 'bls', 'blt', 'blv', 'blw', 'blx', 'bly', 'blz', 'bma', 'bmb', 'bmc', 'bmd', 'bme', 'bmf', 'bmg', 'bmh', 'bmi', 'bmj', 'bmk', 'bml', 'bmm', 'bmn', 'bmo', 'bmp', 'bmq', 'bmr', 'bms', 'bmt', 'bmu', 'bmv', 'bmw', 'bmx', 'bmy', 'bmz', 'bna', 'bnb', 'bnc', 'bnd', 'bne', 'bnf', 'bng', 'bni', 'bnj', 'bnk', 'bnl', 'bnm', 'bnn', 'bno', 'bnp', 'bnq', 'bnr', 'bns', 'bnt', 'bnu', 'bnv', 'bnw', 'bnx', 'bny', 'bnz', 'boa', 'bob', 'boe', 'bof', 'bog', 'boh', 'boi', 'boj', 'bok', 'bol', 'bom', 'bon', 'boo', 'bop', 'boq', 'bor', 'bot', 'bou', 'bov', 'bow', 'box', 'boy', 'boz', 'bpa', 'bpb', 'bpd', 'bpg', 'bph', 'bpi', 'bpj', 'bpk', 'bpl', 'bpm', 'bpn', 'bpo', 'bpp', 'bpq', 'bpr', 'bps', 'bpt', 'bpu', 'bpv', 'bpw', 'bpx', 'bpy', 'bpz', 'bqa', 'bqb', 'bqc', 'bqd', 'bqf', 'bqg', 'bqh', 'bqi', 'bqj', 'bqk', 'bql', 'bqm', 'bqn', 'bqo', 'bqp', 'bqq', 'bqr', 'bqs', 'bqt', 'bqu', 'bqv', 'bqw', 'bqx', 'bqy', 'bqz', 'bra', 'brb', 'brc', 'brd', 'brf', 'brg', 'brh', 'bri', 'brj', 'brk', 'brl', 'brm', 'brn', 'bro', 'brp', 'brq', 'brr', 'brs', 'brt', 'bru', 'brv', 'brw', 'brx', 'bry', 'brz', 'bsa', 'bsb', 'bsc', 'bse', 'bsf', 'bsg', 'bsh', 'bsi', 'bsj', 'bsk', 'bsl', 'bsm', 'bsn', 'bso', 'bsp', 'bsq', 'bsr', 'bss', 'bst', 'bsu', 'bsv', 'bsw', 'bsx', 'bsy', 'bta', 'btb', 'btc', 'btd', 'bte', 'btf', 'btg', 'bth', 'bti', 'btj', 'btk', 'btl', 'btm', 'btn', 'bto', 'btp', 'btq', 'btr', 'bts', 'btt', 'btu', 'btv', 'btw', 'btx', 'bty', 'btz', 'bua', 'bub', 'buc', 'bud', 'bue', 'buf', 'bug', 'buh', 'bui', 'buj', 'buk', 'bum', 'bun', 'buo', 'bup', 'buq', 'bus', 'but', 'buu', 'buv', 'buw', 'bux', 'buy', 'buz', 'bva', 'bvb', 'bvc', 'bvd', 'bve', 'bvf', 'bvg', 'bvh', 'bvi', 'bvj', 'bvk', 'bvl', 'bvm', 'bvn', 'bvo', 'bvp', 'bvq', 'bvr', 'bvt', 'bvu', 'bvv', 'bvw', 'bvx', 'bvy', 'bvz', 'bwa', 'bwb', 'bwc', 'bwd', 'bwe', 'bwf', 'bwg', 'bwh', 'bwi', 'bwj', 'bwk', 'bwl', 'bwm', 'bwn', 'bwo', 'bwp', 'bwq', 'bwr', 'bws', 'bwt', 'bwu', 'bww', 'bwx', 'bwy', 'bwz', 'bxa', 'bxb', 'bxc', 'bxd', 'bxe', 'bxf', 'bxg', 'bxh', 'bxi', 'bxj', 'bxk', 'bxl', 'bxm', 'bxn', 'bxo', 'bxp', 'bxq', 'bxr', 'bxs', 'bxu', 'bxv', 'bxw', 'bxx', 'bxz', 'bya', 'byb', 'byc', 'byd', 'bye', 'byf', 'byg', 'byh', 'byi', 'byj', 'byk', 'byl', 'bym', 'byn', 'byo', 'byp', 'byq', 'byr', 'bys', 'byt', 'byv', 'byw', 'byx', 'byy', 'byz', 'bza', 'bzb', 'bzc', 'bzd', 'bze', 'bzf', 'bzg', 'bzh', 'bzi', 'bzj', 'bzk', 'bzl', 'bzm', 'bzn', 'bzo', 'bzp', 'bzq', 'bzr', 'bzs', 'bzt', 'bzu', 'bzv', 'bzw', 'bzx', 'bzy', 'bzz', 'caa', 'cab', 'cac', 'cad', 'cae', 'caf', 'cag', 'cah', 'cai', 'caj', 'cak', 'cal', 'cam', 'can', 'cao', 'cap', 'caq', 'car', 'cas', 'cau', 'cav', 'caw', 'cax', 'cay', 'caz', 'cba', 'cbb', 'cbc', 'cbd', 'cbe', 'cbg', 'cbh', 'cbi', 'cbj', 'cbk', 'cbl', 'cbn', 'cbo', 'cbq', 'cbr', 'cbs', 'cbt', 'cbu', 'cbv', 'cbw', 'cby', 'cca', 'ccc', 'ccd', 'cce', 'ccg', 'cch', 'ccj', 'ccl', 'ccm', 'ccn', 'cco', 'ccp', 'ccq', 'ccr', 'ccs', 'cda', 'cdc', 'cdd', 'cde', 'cdf', 'cdg', 'cdh', 'cdi', 'cdj', 'cdm', 'cdn', 'cdo', 'cdr', 'cds', 'cdy', 'cdz', 'cea', 'ceb', 'ceg', 'cek', 'cel', 'cen', 'cet', 'cfa', 'cfd', 'cfg', 'cfm', 'cga', 'cgc', 'cgg', 'cgk', 'chb', 'chc', 'chd', 'chf', 'chg', 'chh', 'chj', 'chk', 'chl', 'chm', 'chn', 'cho', 'chp', 'chq', 'chr', 'cht', 'chw', 'chx', 'chy', 'chz', 'cia', 'cib', 'cic', 'cid', 'cie', 'cih', 'cik', 'cim', 'cin', 'cip', 'cir', 'ciw', 'ciy', 'cja', 'cje', 'cjh', 'cji', 'cjk', 'cjm', 'cjn', 'cjo', 'cjp', 'cjr', 'cjs', 'cjv', 'cjy', 'cka', 'ckb', 'ckh', 'ckl', 'ckn', 'cko', 'ckq', 'ckr', 'cks', 'ckt', 'cku', 'ckv', 'ckx', 'cky', 'ckz', 'cla', 'clc', 'cld', 'cle', 'clh', 'cli', 'clj', 'clk', 'cll', 'clm', 'clo', 'clt', 'clu', 'clw', 'cly', 'cma', 'cmc', 'cme', 'cmg', 'cmi', 'cmk', 'cml', 'cmm', 'cmn', 'cmo', 'cmr', 'cms', 'cmt', 'cna', 'cnb', 'cnc', 'cng', 'cnh', 'cni', 'cnk', 'cnl', 'cno', 'cnr', 'cns', 'cnt', 'cnu', 'cnw', 'cnx', 'coa', 'cob', 'coc', 'cod', 'coe', 'cof', 'cog', 'coh', 'coj', 'cok', 'col', 'com', 'con', 'coo', 'cop', 'coq', 'cot', 'cou', 'cov', 'cow', 'cox', 'coy', 'coz', 'cpa', 'cpb', 'cpc', 'cpe', 'cpf', 'cpg', 'cpi', 'cpn', 'cpo', 'cpp', 'cps', 'cpu', 'cpx', 'cpy', 'cqd', 'cqu', 'cra', 'crb', 'crc', 'crd', 'crf', 'crg', 'crh', 'cri', 'crj', 'crk', 'crl', 'crm', 'crn', 'cro', 'crp', 'crq', 'crr', 'crs', 'crt', 'crv', 'crw', 'crx', 'cry', 'crz', 'csa', 'csb', 'csc', 'csd', 'cse', 'csf', 'csg', 'csh', 'csi', 'csj', 'csk', 'csl', 'csm', 'csn', 'cso', 'csq', 'csr', 'css', 'cst', 'csu', 'csv', 'csw', 'csy', 'csz', 'cta', 'ctc', 'ctd', 'cte', 'ctg', 'cth', 'ctl', 'ctm', 'ctn', 'cto', 'ctp', 'cts', 'ctt', 'ctu', 'ctz', 'cua', 'cub', 'cuc', 'cug', 'cuh', 'cui', 'cuj', 'cuk', 'cul', 'cum', 'cuo', 'cup', 'cuq', 'cur', 'cus', 'cut', 'cuu', 'cuv', 'cuw', 'cux', 'cuy', 'cvg', 'cvn', 'cwa', 'cwb', 'cwd', 'cwe', 'cwg', 'cwt', 'cya', 'cyb', 'cyo', 'czh', 'czk', 'czn', 'czo', 'czt', 'daa', 'dac', 'dad', 'dae', 'daf', 'dag', 'dah', 'dai', 'daj', 'dak', 'dal', 'dam', 'dao', 'dap', 'daq', 'dar', 'das', 'dau', 'dav', 'daw', 'dax', 'day', 'daz', 'dba', 'dbb', 'dbd', 'dbe', 'dbf', 'dbg', 'dbi', 'dbj', 'dbl', 'dbm', 'dbn', 'dbo', 'dbp', 'dbq', 'dbr', 'dbt', 'dbu', 'dbv', 'dbw', 'dby', 'dcc', 'dcr', 'dda', 'ddd', 'dde', 'ddg', 'ddi', 'ddj', 'ddn', 'ddo', 'ddr', 'dds', 'ddw', 'dec', 'ded', 'dee', 'def', 'deg', 'deh', 'dei', 'dek', 'del', 'dem', 'den', 'dep', 'deq', 'der', 'des', 'dev', 'dez', 'dga', 'dgb', 'dgc', 'dgd', 'dge', 'dgg', 'dgh', 'dgi', 'dgk', 'dgl', 'dgn', 'dgo', 'dgr', 'dgs', 'dgt', 'dgu', 'dgw', 'dgx', 'dgz', 'dha', 'dhd', 'dhg', 'dhi', 'dhl', 'dhm', 'dhn', 'dho', 'dhr', 'dhs', 'dhu', 'dhv', 'dhw', 'dhx', 'dia', 'dib', 'dic', 'did', 'dif', 'dig', 'dih', 'dii', 'dij', 'dik', 'dil', 'dim', 'din', 'dio', 'dip', 'diq', 'dir', 'dis', 'dit', 'diu', 'diw', 'dix', 'diy', 'diz', 'dja', 'djb', 'djc', 'djd', 'dje', 'djf', 'dji', 'djj', 'djk', 'djl', 'djm', 'djn', 'djo', 'djr', 'dju', 'djw', 'dka', 'dkk', 'dkl', 'dkr', 'dks', 'dkx', 'dlg', 'dlk', 'dlm', 'dln', 'dma', 'dmb', 'dmc', 'dmd', 'dme', 'dmg', 'dmk', 'dml', 'dmm', 'dmn', 'dmo', 'dmr', 'dms', 'dmu', 'dmv', 'dmw', 'dmx', 'dmy', 'dna', 'dnd', 'dne', 'dng', 'dni', 'dnj', 'dnk', 'dnn', 'dnr', 'dnt', 'dnu', 'dnv', 'dnw', 'dny', 'doa', 'dob', 'doc', 'doe', 'dof', 'doh', 'doi', 'dok', 'dol', 'don', 'doo', 'dop', 'doq', 'dor', 'dos', 'dot', 'dov', 'dow', 'dox', 'doy', 'doz', 'dpp', 'dra', 'drb', 'drc', 'drd', 'dre', 'drg', 'drh', 'dri', 'drl', 'drn', 'dro', 'drq', 'drr', 'drs', 'drt', 'dru', 'drw', 'dry', 'dsb', 'dse', 'dsh', 'dsi', 'dsl', 'dsn', 'dso', 'dsq', 'dta', 'dtb', 'dtd', 'dth', 'dti', 'dtk', 'dtm', 'dtn', 'dto', 'dtp', 'dtr', 'dts', 'dtt', 'dtu', 'dty', 'dua', 'dub', 'duc', 'dud', 'due', 'duf', 'dug', 'duh', 'dui', 'duj', 'duk', 'dul', 'dum', 'dun', 'duo', 'dup', 'duq', 'dur', 'dus', 'duu', 'duv', 'duw', 'dux', 'duy', 'duz', 'dva', 'dwa', 'dwl', 'dwr', 'dws', 'dwu', 'dww', 'dwy', 'dya', 'dyb', 'dyd', 'dyg', 'dyi', 'dym', 'dyn', 'dyo', 'dyu', 'dyy', 'dza', 'dzd', 'dze', 'dzg', 'dzl', 'dzn', 'eaa', 'ebg', 'ebk', 'ebo', 'ebr', 'ebu', 'ecr', 'ecs', 'ecy', 'eee', 'efa', 'efe', 'efi', 'ega', 'egl', 'ego', 'egx', 'egy', 'ehu', 'eip', 'eit', 'eiv', 'eja', 'eka', 'ekc', 'eke', 'ekg', 'eki', 'ekk', 'ekl', 'ekm', 'eko', 'ekp', 'ekr', 'eky', 'ele', 'elh', 'eli', 'elk', 'elm', 'elo', 'elp', 'elu', 'elx', 'ema', 'emb', 'eme', 'emg', 'emi', 'emk', 'emm', 'emn', 'emo', 'emp', 'ems', 'emu', 'emw', 'emx', 'emy', 'ena', 'enb', 'enc', 'end', 'enf', 'enh', 'enl', 'enm', 'enn', 'eno', 'enq', 'enr', 'enu', 'env', 'enw', 'enx', 'eot', 'epi', 'era', 'erg', 'erh', 'eri', 'erk', 'ero', 'err', 'ers', 'ert', 'erw', 'ese', 'esg', 'esh', 'esi', 'esk', 'esl', 'esm', 'esn', 'eso', 'esq', 'ess', 'esu', 'esx', 'esy', 'etb', 'etc', 'eth', 'etn', 'eto', 'etr', 'ets', 'ett', 'etu', 'etx', 'etz', 'euq', 'eve', 'evh', 'evn', 'ewo', 'ext', 'eya', 'eyo', 'eza', 'eze', 'faa', 'fab', 'fad', 'faf', 'fag', 'fah', 'fai', 'faj', 'fak', 'fal', 'fam', 'fan', 'fap', 'far', 'fat', 'fau', 'fax', 'fay', 'faz', 'fbl', 'fcs', 'fer', 'ffi', 'ffm', 'fgr', 'fia', 'fie', 'fil', 'fip', 'fir', 'fit', 'fiu', 'fiw', 'fkk', 'fkv', 'fla', 'flh', 'fli', 'fll', 'fln', 'flr', 'fly', 'fmp', 'fmu', 'fnb', 'fng', 'fni', 'fod', 'foi', 'fom', 'fon', 'for', 'fos', 'fox', 'fpe', 'fqs', 'frc', 'frd', 'frk', 'frm', 'fro', 'frp', 'frq', 'frr', 'frs', 'frt', 'fse', 'fsl', 'fss', 'fub', 'fuc', 'fud', 'fue', 'fuf', 'fuh', 'fui', 'fuj', 'fum', 'fun', 'fuq', 'fur', 'fut', 'fuu', 'fuv', 'fuy', 'fvr', 'fwa', 'fwe', 'gaa', 'gab', 'gac', 'gad', 'gae', 'gaf', 'gag', 'gah', 'gai', 'gaj', 'gak', 'gal', 'gam', 'gan', 'gao', 'gap', 'gaq', 'gar', 'gas', 'gat', 'gau', 'gav', 'gaw', 'gax', 'gay', 'gaz', 'gba', 'gbb', 'gbc', 'gbd', 'gbe', 'gbf', 'gbg', 'gbh', 'gbi', 'gbj', 'gbk', 'gbl', 'gbm', 'gbn', 'gbo', 'gbp', 'gbq', 'gbr', 'gbs', 'gbu', 'gbv', 'gbw', 'gbx', 'gby', 'gbz', 'gcc', 'gcd', 'gce', 'gcf', 'gcl', 'gcn', 'gcr', 'gct', 'gda', 'gdb', 'gdc', 'gdd', 'gde', 'gdf', 'gdg', 'gdh', 'gdi', 'gdj', 'gdk', 'gdl', 'gdm', 'gdn', 'gdo', 'gdq', 'gdr', 'gds', 'gdt', 'gdu', 'gdx', 'gea', 'geb', 'gec', 'ged', 'geg', 'geh', 'gei', 'gej', 'gek', 'gel', 'gem', 'geq', 'ges', 'gev', 'gew', 'gex', 'gey', 'gez', 'gfk', 'gft', 'gfx', 'gga', 'ggb', 'ggd', 'gge', 'ggg', 'ggk', 'ggl', 'ggn', 'ggo', 'ggr', 'ggt', 'ggu', 'ggw', 'gha', 'ghc', 'ghe', 'ghh', 'ghk', 'ghl', 'ghn', 'gho', 'ghr', 'ghs', 'ght', 'gia', 'gib', 'gic', 'gid', 'gie', 'gig', 'gih', 'gil', 'gim', 'gin', 'gio', 'gip', 'giq', 'gir', 'gis', 'git', 'giu', 'giw', 'gix', 'giy', 'giz', 'gji', 'gjk', 'gjm', 'gjn', 'gjr', 'gju', 'gka', 'gkd', 'gke', 'gkn', 'gko', 'gkp', 'gku', 'glc', 'gld', 'glh', 'gli', 'glj', 'glk', 'gll', 'glo', 'glr', 'glu', 'glw', 'gly', 'gma', 'gmb', 'gmd', 'gme', 'gmg', 'gmh', 'gml', 'gmm', 'gmn', 'gmq', 'gmu', 'gmv', 'gmw', 'gmx', 'gmy', 'gmz', 'gna', 'gnb', 'gnc', 'gnd', 'gne', 'gng', 'gnh', 'gni', 'gnj', 'gnk', 'gnl', 'gnm', 'gnn', 'gno', 'gnq', 'gnr', 'gnt', 'gnu', 'gnw', 'gnz', 'goa', 'gob', 'goc', 'god', 'goe', 'gof', 'gog', 'goh', 'goi', 'goj', 'gok', 'gol', 'gom', 'gon', 'goo', 'gop', 'goq', 'gor', 'gos', 'got', 'gou', 'gow', 'gox', 'goy', 'goz', 'gpa', 'gpe', 'gpn', 'gqa', 'gqi', 'gqn', 'gqr', 'gqu', 'gra', 'grb', 'grc', 'grd', 'grg', 'grh', 'gri', 'grj', 'grk', 'grm', 'gro', 'grq', 'grr', 'grs', 'grt', 'gru', 'grv', 'grw', 'grx', 'gry', 'grz', 'gse', 'gsg', 'gsl', 'gsm', 'gsn', 'gso', 'gsp', 'gss', 'gsw', 'gta', 'gti', 'gtu', 'gua', 'gub', 'guc', 'gud', 'gue', 'guf', 'gug', 'guh', 'gui', 'guk', 'gul', 'gum', 'gun', 'guo', 'gup', 'guq', 'gur', 'gus', 'gut', 'guu', 'guv', 'guw', 'gux', 'guz', 'gva', 'gvc', 'gve', 'gvf', 'gvj', 'gvl', 'gvm', 'gvn', 'gvo', 'gvp', 'gvr', 'gvs', 'gvy', 'gwa', 'gwb', 'gwc', 'gwd', 'gwe', 'gwf', 'gwg', 'gwi', 'gwj', 'gwm', 'gwn', 'gwr', 'gwt', 'gwu', 'gww', 'gwx', 'gxx', 'gya', 'gyb', 'gyd', 'gye', 'gyf', 'gyg', 'gyi', 'gyl', 'gym', 'gyn', 'gyo', 'gyr', 'gyy', 'gza', 'gzi', 'gzn', 'haa', 'hab', 'hac', 'had', 'hae', 'haf', 'hag', 'hah', 'hai', 'haj', 'hak', 'hal', 'ham', 'han', 'hao', 'hap', 'haq', 'har', 'has', 'hav', 'haw', 'hax', 'hay', 'haz', 'hba', 'hbb', 'hbn', 'hbo', 'hbu', 'hca', 'hch', 'hdn', 'hds', 'hdy', 'hea', 'hed', 'heg', 'heh', 'hei', 'hem', 'hgm', 'hgw', 'hhi', 'hhr', 'hhy', 'hia', 'hib', 'hid', 'hif', 'hig', 'hih', 'hii', 'hij', 'hik', 'hil', 'him', 'hio', 'hir', 'hit', 'hiw', 'hix', 'hji', 'hka', 'hke', 'hkk', 'hkn', 'hks', 'hla', 'hlb', 'hld', 'hle', 'hlt', 'hlu', 'hma', 'hmb', 'hmc', 'hmd', 'hme', 'hmf', 'hmg', 'hmh', 'hmi', 'hmj', 'hmk', 'hml', 'hmm', 'hmn', 'hmp', 'hmq', 'hmr', 'hms', 'hmt', 'hmu', 'hmv', 'hmw', 'hmx', 'hmy', 'hmz', 'hna', 'hnd', 'hne', 'hnh', 'hni', 'hnj', 'hnn', 'hno', 'hns', 'hnu', 'hoa', 'hob', 'hoc', 'hod', 'hoe', 'hoh', 'hoi', 'hoj', 'hok', 'hol', 'hom', 'hoo', 'hop', 'hor', 'hos', 'hot', 'hov', 'how', 'hoy', 'hoz', 'hpo', 'hps', 'hra', 'hrc', 'hre', 'hrk', 'hrm', 'hro', 'hrp', 'hrr', 'hrt', 'hru', 'hrw', 'hrx', 'hrz', 'hsb', 'hsh', 'hsl', 'hsn', 'hss', 'hti', 'hto', 'hts', 'htu', 'htx', 'hub', 'huc', 'hud', 'hue', 'huf', 'hug', 'huh', 'hui', 'huj', 'huk', 'hul', 'hum', 'huo', 'hup', 'huq', 'hur', 'hus', 'hut', 'huu', 'huv', 'huw', 'hux', 'huy', 'huz', 'hvc', 'hve', 'hvk', 'hvn', 'hvv', 'hwa', 'hwc', 'hwo', 'hya', 'hyw', 'hyx', 'iai', 'ian', 'iap', 'iar', 'iba', 'ibb', 'ibd', 'ibe', 'ibg', 'ibh', 'ibi', 'ibl', 'ibm', 'ibn', 'ibr', 'ibu', 'iby', 'ica', 'ich', 'icl', 'icr', 'ida', 'idb', 'idc', 'idd', 'ide', 'idi', 'idr', 'ids', 'idt', 'idu', 'ifa', 'ifb', 'ife', 'iff', 'ifk', 'ifm', 'ifu', 'ify', 'igb', 'ige', 'igg', 'igl', 'igm', 'ign', 'igo', 'igs', 'igw', 'ihb', 'ihi', 'ihp', 'ihw', 'iin', 'iir', 'ijc', 'ije', 'ijj', 'ijn', 'ijo', 'ijs', 'ike', 'iki', 'ikk', 'ikl', 'iko', 'ikp', 'ikr', 'iks', 'ikt', 'ikv', 'ikw', 'ikx', 'ikz', 'ila', 'ilb', 'ilg', 'ili', 'ilk', 'ill', 'ilm', 'ilo', 'ilp', 'ils', 'ilu', 'ilv', 'ilw', 'ima', 'ime', 'imi', 'iml', 'imn', 'imo', 'imr', 'ims', 'imy', 'inb', 'inc', 'ine', 'ing', 'inh', 'inj', 'inl', 'inm', 'inn', 'ino', 'inp', 'ins', 'int', 'inz', 'ior', 'iou', 'iow', 'ipi', 'ipo', 'iqu', 'iqw', 'ira', 'ire', 'irh', 'iri', 'irk', 'irn', 'iro', 'irr', 'iru', 'irx', 'iry', 'isa', 'isc', 'isd', 'ise', 'isg', 'ish', 'isi', 'isk', 'ism', 'isn', 'iso', 'isr', 'ist', 'isu', 'itb', 'itc', 'itd', 'ite', 'iti', 'itk', 'itl', 'itm', 'ito', 'itr', 'its', 'itt', 'itv', 'itw', 'itx', 'ity', 'itz', 'ium', 'ivb', 'ivv', 'iwk', 'iwm', 'iwo', 'iws', 'ixc', 'ixl', 'iya', 'iyo', 'iyx', 'izh', 'izi', 'izr', 'izz', 'jaa', 'jab', 'jac', 'jad', 'jae', 'jaf', 'jah', 'jaj', 'jak', 'jal', 'jam', 'jan', 'jao', 'jaq', 'jar', 'jas', 'jat', 'jau', 'jax', 'jay', 'jaz', 'jbe', 'jbi', 'jbj', 'jbk', 'jbn', 'jbo', 'jbr', 'jbt', 'jbu', 'jbw', 'jcs', 'jct', 'jda', 'jdg', 'jdt', 'jeb', 'jee', 'jeg', 'jeh', 'jei', 'jek', 'jel', 'jen', 'jer', 'jet', 'jeu', 'jgb', 'jge', 'jgk', 'jgo', 'jhi', 'jhs', 'jia', 'jib', 'jic', 'jid', 'jie', 'jig', 'jih', 'jii', 'jil', 'jim', 'jio', 'jiq', 'jit', 'jiu', 'jiv', 'jiy', 'jje', 'jjr', 'jka', 'jkm', 'jko', 'jkp', 'jkr', 'jku', 'jle', 'jls', 'jma', 'jmb', 'jmc', 'jmd', 'jmi', 'jml', 'jmn', 'jmr', 'jms', 'jmw', 'jmx', 'jna', 'jnd', 'jng', 'jni', 'jnj', 'jnl', 'jns', 'job', 'jod', 'jog', 'jor', 'jos', 'jow', 'jpa', 'jpr', 'jpx', 'jqr', 'jra', 'jrb', 'jrr', 'jrt', 'jru', 'jsl', 'jua', 'jub', 'juc', 'jud', 'juh', 'jui', 'juk', 'jul', 'jum', 'jun', 'juo', 'jup', 'jur', 'jus', 'jut', 'juu', 'juw', 'juy', 'jvd', 'jvn', 'jwi', 'jya', 'jye', 'jyy', 'kaa', 'kab', 'kac', 'kad', 'kae', 'kaf', 'kag', 'kah', 'kai', 'kaj', 'kak', 'kam', 'kao', 'kap', 'kaq', 'kar', 'kav', 'kaw', 'kax', 'kay', 'kba', 'kbb', 'kbc', 'kbd', 'kbe', 'kbf', 'kbg', 'kbh', 'kbi', 'kbj', 'kbk', 'kbl', 'kbm', 'kbn', 'kbo', 'kbp', 'kbq', 'kbr', 'kbs', 'kbt', 'kbu', 'kbv', 'kbw', 'kbx', 'kby', 'kbz', 'kca', 'kcb', 'kcc', 'kcd', 'kce', 'kcf', 'kcg', 'kch', 'kci', 'kcj', 'kck', 'kcl', 'kcm', 'kcn', 'kco', 'kcp', 'kcq', 'kcr', 'kcs', 'kct', 'kcu', 'kcv', 'kcw', 'kcx', 'kcy', 'kcz', 'kda', 'kdc', 'kdd', 'kde', 'kdf', 'kdg', 'kdh', 'kdi', 'kdj', 'kdk', 'kdl', 'kdm', 'kdn', 'kdo', 'kdp', 'kdq', 'kdr', 'kdt', 'kdu', 'kdv', 'kdw', 'kdx', 'kdy', 'kdz', 'kea', 'keb', 'kec', 'ked', 'kee', 'kef', 'keg', 'keh', 'kei', 'kej', 'kek', 'kel', 'kem', 'ken', 'keo', 'kep', 'keq', 'ker', 'kes', 'ket', 'keu', 'kev', 'kew', 'kex', 'key', 'kez', 'kfa', 'kfb', 'kfc', 'kfd', 'kfe', 'kff', 'kfg', 'kfh', 'kfi', 'kfj', 'kfk', 'kfl', 'kfm', 'kfn', 'kfo', 'kfp', 'kfq', 'kfr', 'kfs', 'kft', 'kfu', 'kfv', 'kfw', 'kfx', 'kfy', 'kfz', 'kga', 'kgb', 'kgc', 'kgd', 'kge', 'kgf', 'kgg', 'kgh', 'kgi', 'kgj', 'kgk', 'kgl', 'kgm', 'kgn', 'kgo', 'kgp', 'kgq', 'kgr', 'kgs', 'kgt', 'kgu', 'kgv', 'kgw', 'kgx', 'kgy', 'kha', 'khb', 'khc', 'khd', 'khe', 'khf', 'khg', 'khh', 'khi', 'khj', 'khk', 'khl', 'khn', 'kho', 'khp', 'khq', 'khr', 'khs', 'kht', 'khu', 'khv', 'khw', 'khx', 'khy', 'khz', 'kia', 'kib', 'kic', 'kid', 'kie', 'kif', 'kig', 'kih', 'kii', 'kij', 'kil', 'kim', 'kio', 'kip', 'kiq', 'kis', 'kit', 'kiu', 'kiv', 'kiw', 'kix', 'kiy', 'kiz', 'kja', 'kjb', 'kjc', 'kjd', 'kje', 'kjf', 'kjg', 'kjh', 'kji', 'kjj', 'kjk', 'kjl', 'kjm', 'kjn', 'kjo', 'kjp', 'kjq', 'kjr', 'kjs', 'kjt', 'kju', 'kjv', 'kjx', 'kjy', 'kjz', 'kka', 'kkb', 'kkc', 'kkd', 'kke', 'kkf', 'kkg', 'kkh', 'kki', 'kkj', 'kkk', 'kkl', 'kkm', 'kkn', 'kko', 'kkp', 'kkq', 'kkr', 'kks', 'kkt', 'kku', 'kkv', 'kkw', 'kkx', 'kky', 'kkz', 'kla', 'klb', 'klc', 'kld', 'kle', 'klf', 'klg', 'klh', 'kli', 'klj', 'klk', 'kll', 'klm', 'kln', 'klo', 'klp', 'klq', 'klr', 'kls', 'klt', 'klu', 'klv', 'klw', 'klx', 'kly', 'klz', 'kma', 'kmb', 'kmc', 'kmd', 'kme', 'kmf', 'kmg', 'kmh', 'kmi', 'kmj', 'kmk', 'kml', 'kmm', 'kmn', 'kmo', 'kmp', 'kmq', 'kmr', 'kms', 'kmt', 'kmu', 'kmv', 'kmw', 'kmx', 'kmy', 'kmz', 'kna', 'knb', 'knc', 'knd', 'kne', 'knf', 'kng', 'kni', 'knj', 'knk', 'knl', 'knm', 'knn', 'kno', 'knp', 'knq', 'knr', 'kns', 'knt', 'knu', 'knv', 'knw', 'knx', 'kny', 'knz', 'koa', 'koc', 'kod', 'koe', 'kof', 'kog', 'koh', 'koi', 'koj', 'kok', 'kol', 'koo', 'kop', 'koq', 'kos', 'kot', 'kou', 'kov', 'kow', 'kox', 'koy', 'koz', 'kpa', 'kpb', 'kpc', 'kpd', 'kpe', 'kpf', 'kpg', 'kph', 'kpi', 'kpj', 'kpk', 'kpl', 'kpm', 'kpn', 'kpo', 'kpp', 'kpq', 'kpr', 'kps', 'kpt', 'kpu', 'kpv', 'kpw', 'kpx', 'kpy', 'kpz', 'kqa', 'kqb', 'kqc', 'kqd', 'kqe', 'kqf', 'kqg', 'kqh', 'kqi', 'kqj', 'kqk', 'kql', 'kqm', 'kqn', 'kqo', 'kqp', 'kqq', 'kqr', 'kqs', 'kqt', 'kqu', 'kqv', 'kqw', 'kqx', 'kqy', 'kqz', 'kra', 'krb', 'krc', 'krd', 'kre', 'krf', 'krh', 'kri', 'krj', 'krk', 'krl', 'krm', 'krn', 'kro', 'krp', 'krr', 'krs', 'krt', 'kru', 'krv', 'krw', 'krx', 'kry', 'krz', 'ksa', 'ksb', 'ksc', 'ksd', 'kse', 'ksf', 'ksg', 'ksh', 'ksi', 'ksj', 'ksk', 'ksl', 'ksm', 'ksn', 'kso', 'ksp', 'ksq', 'ksr', 'kss', 'kst', 'ksu', 'ksv', 'ksw', 'ksx', 'ksy', 'ksz', 'kta', 'ktb', 'ktc', 'ktd', 'kte', 'ktf', 'ktg', 'kth', 'kti', 'ktj', 'ktk', 'ktl', 'ktm', 'ktn', 'kto', 'ktp', 'ktq', 'ktr', 'kts', 'ktt', 'ktu', 'ktv', 'ktw', 'ktx', 'kty', 'ktz', 'kub', 'kuc', 'kud', 'kue', 'kuf', 'kug', 'kuh', 'kui', 'kuj', 'kuk', 'kul', 'kum', 'kun', 'kuo', 'kup', 'kuq', 'kus', 'kut', 'kuu', 'kuv', 'kuw', 'kux', 'kuy', 'kuz', 'kva', 'kvb', 'kvc', 'kvd', 'kve', 'kvf', 'kvg', 'kvh', 'kvi', 'kvj', 'kvk', 'kvl', 'kvm', 'kvn', 'kvo', 'kvp', 'kvq', 'kvr', 'kvs', 'kvt', 'kvu', 'kvv', 'kvw', 'kvx', 'kvy', 'kvz', 'kwa', 'kwb', 'kwc', 'kwd', 'kwe', 'kwf', 'kwg', 'kwh', 'kwi', 'kwj', 'kwk', 'kwl', 'kwm', 'kwn', 'kwo', 'kwp', 'kwq', 'kwr', 'kws', 'kwt', 'kwu', 'kwv', 'kww', 'kwx', 'kwy', 'kwz', 'kxa', 'kxb', 'kxc', 'kxd', 'kxe', 'kxf', 'kxh', 'kxi', 'kxj', 'kxk', 'kxl', 'kxm', 'kxn', 'kxo', 'kxp', 'kxq', 'kxr', 'kxs', 'kxt', 'kxu', 'kxv', 'kxw', 'kxx', 'kxy', 'kxz', 'kya', 'kyb', 'kyc', 'kyd', 'kye', 'kyf', 'kyg', 'kyh', 'kyi', 'kyj', 'kyk', 'kyl', 'kym', 'kyn', 'kyo', 'kyp', 'kyq', 'kyr', 'kys', 'kyt', 'kyu', 'kyv', 'kyw', 'kyx', 'kyy', 'kyz', 'kza', 'kzb', 'kzc', 'kzd', 'kze', 'kzf', 'kzg', 'kzh', 'kzi', 'kzj', 'kzk', 'kzl', 'kzm', 'kzn', 'kzo', 'kzp', 'kzq', 'kzr', 'kzs', 'kzt', 'kzu', 'kzv', 'kzw', 'kzx', 'kzy', 'kzz', 'laa', 'lab', 'lac', 'lad', 'lae', 'laf', 'lag', 'lah', 'lai', 'laj', 'lak', 'lal', 'lam', 'lan', 'lap', 'laq', 'lar', 'las', 'lau', 'law', 'lax', 'lay', 'laz', 'lba', 'lbb', 'lbc', 'lbe', 'lbf', 'lbg', 'lbi', 'lbj', 'lbk', 'lbl', 'lbm', 'lbn', 'lbo', 'lbq', 'lbr', 'lbs', 'lbt', 'lbu', 'lbv', 'lbw', 'lbx', 'lby', 'lbz', 'lcc', 'lcd', 'lce', 'lcf', 'lch', 'lcl', 'lcm', 'lcp', 'lcq', 'lcs', 'lda', 'ldb', 'ldd', 'ldg', 'ldh', 'ldi', 'ldj', 'ldk', 'ldl', 'ldm', 'ldn', 'ldo', 'ldp', 'ldq', 'lea', 'leb', 'lec', 'led', 'lee', 'lef', 'leg', 'leh', 'lei', 'lej', 'lek', 'lel', 'lem', 'len', 'leo', 'lep', 'leq', 'ler', 'les', 'let', 'leu', 'lev', 'lew', 'lex', 'ley', 'lez', 'lfa', 'lfn', 'lga', 'lgb', 'lgg', 'lgh', 'lgi', 'lgk', 'lgl', 'lgm', 'lgn', 'lgq', 'lgr', 'lgt', 'lgu', 'lgz', 'lha', 'lhh', 'lhi', 'lhl', 'lhm', 'lhn', 'lhp', 'lhs', 'lht', 'lhu', 'lia', 'lib', 'lic', 'lid', 'lie', 'lif', 'lig', 'lih', 'lii', 'lij', 'lik', 'lil', 'lio', 'lip', 'liq', 'lir', 'lis', 'liu', 'liv', 'liw', 'lix', 'liy', 'liz', 'lja', 'lje', 'lji', 'ljl', 'ljp', 'ljw', 'ljx', 'lka', 'lkb', 'lkc', 'lkd', 'lke', 'lkh', 'lki', 'lkj', 'lkl', 'lkm', 'lkn', 'lko', 'lkr', 'lks', 'lkt', 'lku', 'lky', 'lla', 'llb', 'llc', 'lld', 'lle', 'llf', 'llg', 'llh', 'lli', 'llj', 'llk', 'lll', 'llm', 'lln', 'llo', 'llp', 'llq', 'lls', 'llu', 'llx', 'lma', 'lmb', 'lmc', 'lmd', 'lme', 'lmf', 'lmg', 'lmh', 'lmi', 'lmj', 'lmk', 'lml', 'lmm', 'lmn', 'lmo', 'lmp', 'lmq', 'lmr', 'lmu', 'lmv', 'lmw', 'lmx', 'lmy', 'lmz', 'lna', 'lnb', 'lnd', 'lng', 'lnh', 'lni', 'lnj', 'lnl', 'lnm', 'lnn', 'lno', 'lns', 'lnu', 'lnw', 'lnz', 'loa', 'lob', 'loc', 'loe', 'lof', 'log', 'loh', 'loi', 'loj', 'lok', 'lol', 'lom', 'lon', 'loo', 'lop', 'loq', 'lor', 'los', 'lot', 'lou', 'lov', 'low', 'lox', 'loy', 'loz', 'lpa', 'lpe', 'lpn', 'lpo', 'lpx', 'lra', 'lrc', 'lre', 'lrg', 'lri', 'lrk', 'lrl', 'lrm', 'lrn', 'lro', 'lrr', 'lrt', 'lrv', 'lrz', 'lsa', 'lsd', 'lse', 'lsg', 'lsh', 'lsi', 'lsl', 'lsm', 'lso', 'lsp', 'lsr', 'lss', 'lst', 'lsy', 'ltc', 'ltg', 'lth', 'lti', 'ltn', 'lto', 'lts', 'ltu', 'lua', 'luc', 'lud', 'lue', 'luf', 'lui', 'luj', 'luk', 'lul', 'lum', 'lun', 'luo', 'lup', 'luq', 'lur', 'lus', 'lut', 'luu', 'luv', 'luw', 'luy', 'luz', 'lva', 'lvk', 'lvs', 'lvu', 'lwa', 'lwe', 'lwg', 'lwh', 'lwl', 'lwm', 'lwo', 'lws', 'lwt', 'lwu', 'lww', 'lya', 'lyg', 'lyn', 'lzh', 'lzl', 'lzn', 'lzz', 'maa', 'mab', 'mad', 'mae', 'maf', 'mag', 'mai', 'maj', 'mak', 'mam', 'man', 'map', 'maq', 'mas', 'mat', 'mau', 'mav', 'maw', 'max', 'maz', 'mba', 'mbb', 'mbc', 'mbd', 'mbe', 'mbf', 'mbh', 'mbi', 'mbj', 'mbk', 'mbl', 'mbm', 'mbn', 'mbo', 'mbp', 'mbq', 'mbr', 'mbs', 'mbt', 'mbu', 'mbv', 'mbw', 'mbx', 'mby', 'mbz', 'mca', 'mcb', 'mcc', 'mcd', 'mce', 'mcf', 'mcg', 'mch', 'mci', 'mcj', 'mck', 'mcl', 'mcm', 'mcn', 'mco', 'mcp', 'mcq', 'mcr', 'mcs', 'mct', 'mcu', 'mcv', 'mcw', 'mcx', 'mcy', 'mcz', 'mda', 'mdb', 'mdc', 'mdd', 'mde', 'mdf', 'mdg', 'mdh', 'mdi', 'mdj', 'mdk', 'mdl', 'mdm', 'mdn', 'mdp', 'mdq', 'mdr', 'mds', 'mdt', 'mdu', 'mdv', 'mdw', 'mdx', 'mdy', 'mdz', 'mea', 'meb', 'mec', 'med', 'mee', 'mef', 'meg', 'meh', 'mei', 'mej', 'mek', 'mel', 'mem', 'men', 'meo', 'mep', 'meq', 'mer', 'mes', 'met', 'meu', 'mev', 'mew', 'mey', 'mez', 'mfa', 'mfb', 'mfc', 'mfd', 'mfe', 'mff', 'mfg', 'mfh', 'mfi', 'mfj', 'mfk', 'mfl', 'mfm', 'mfn', 'mfo', 'mfp', 'mfq', 'mfr', 'mfs', 'mft', 'mfu', 'mfv', 'mfw', 'mfx', 'mfy', 'mfz', 'mga', 'mgb', 'mgc', 'mgd', 'mge', 'mgf', 'mgg', 'mgh', 'mgi', 'mgj', 'mgk', 'mgl', 'mgm', 'mgn', 'mgo', 'mgp', 'mgq', 'mgr', 'mgs', 'mgt', 'mgu', 'mgv', 'mgw', 'mgx', 'mgy', 'mgz', 'mha', 'mhb', 'mhc', 'mhd', 'mhe', 'mhf', 'mhg', 'mhh', 'mhi', 'mhj', 'mhk', 'mhl', 'mhm', 'mhn', 'mho', 'mhp', 'mhq', 'mhr', 'mhs', 'mht', 'mhu', 'mhw', 'mhx', 'mhy', 'mhz', 'mia', 'mib', 'mic', 'mid', 'mie', 'mif', 'mig', 'mih', 'mii', 'mij', 'mik', 'mil', 'mim', 'min', 'mio', 'mip', 'miq', 'mir', 'mis', 'mit', 'miu', 'miw', 'mix', 'miy', 'miz', 'mja', 'mjb', 'mjc', 'mjd', 'mje', 'mjg', 'mjh', 'mji', 'mjj', 'mjk', 'mjl', 'mjm', 'mjn', 'mjo', 'mjp', 'mjq', 'mjr', 'mjs', 'mjt', 'mju', 'mjv', 'mjw', 'mjx', 'mjy', 'mjz', 'mka', 'mkb', 'mkc', 'mke', 'mkf', 'mkg', 'mkh', 'mki', 'mkj', 'mkk', 'mkl', 'mkm', 'mkn', 'mko', 'mkp', 'mkq', 'mkr', 'mks', 'mkt', 'mku', 'mkv', 'mkw', 'mkx', 'mky', 'mkz', 'mla', 'mlb', 'mlc', 'mld', 'mle', 'mlf', 'mlh', 'mli', 'mlj', 'mlk', 'mll', 'mlm', 'mln', 'mlo', 'mlp', 'mlq', 'mlr', 'mls', 'mlu', 'mlv', 'mlw', 'mlx', 'mlz', 'mma', 'mmb', 'mmc', 'mmd', 'mme', 'mmf', 'mmg', 'mmh', 'mmi', 'mmj', 'mmk', 'mml', 'mmm', 'mmn', 'mmo', 'mmp', 'mmq', 'mmr', 'mmt', 'mmu', 'mmv', 'mmw', 'mmx', 'mmy', 'mmz', 'mna', 'mnb', 'mnc', 'mnd', 'mne', 'mnf', 'mng', 'mnh', 'mni', 'mnj', 'mnk', 'mnl', 'mnm', 'mnn', 'mno', 'mnp', 'mnq', 'mnr', 'mns', 'mnt', 'mnu', 'mnv', 'mnw', 'mnx', 'mny', 'mnz', 'moa', 'moc', 'mod', 'moe', 'mof', 'mog', 'moh', 'moi', 'moj', 'mok', 'mom', 'moo', 'mop', 'moq', 'mor', 'mos', 'mot', 'mou', 'mov', 'mow', 'mox', 'moy', 'moz', 'mpa', 'mpb', 'mpc', 'mpd', 'mpe', 'mpg', 'mph', 'mpi', 'mpj', 'mpk', 'mpl', 'mpm', 'mpn', 'mpo', 'mpp', 'mpq', 'mpr', 'mps', 'mpt', 'mpu', 'mpv', 'mpw', 'mpx', 'mpy', 'mpz', 'mqa', 'mqb', 'mqc', 'mqe', 'mqf', 'mqg', 'mqh', 'mqi', 'mqj', 'mqk', 'mql', 'mqm', 'mqn', 'mqo', 'mqp', 'mqq', 'mqr', 'mqs', 'mqt', 'mqu', 'mqv', 'mqw', 'mqx', 'mqy', 'mqz', 'mra', 'mrb', 'mrc', 'mrd', 'mre', 'mrf', 'mrg', 'mrh', 'mrj', 'mrk', 'mrl', 'mrm', 'mrn', 'mro', 'mrp', 'mrq', 'mrr', 'mrs', 'mrt', 'mru', 'mrv', 'mrw', 'mrx', 'mry', 'mrz', 'msb', 'msc', 'msd', 'mse', 'msf', 'msg', 'msh', 'msi', 'msj', 'msk', 'msl', 'msm', 'msn', 'mso', 'msp', 'msq', 'msr', 'mss', 'mst', 'msu', 'msv', 'msw', 'msx', 'msy', 'msz', 'mta', 'mtb', 'mtc', 'mtd', 'mte', 'mtf', 'mtg', 'mth', 'mti', 'mtj', 'mtk', 'mtl', 'mtm', 'mtn', 'mto', 'mtp', 'mtq', 'mtr', 'mts', 'mtt', 'mtu', 'mtv', 'mtw', 'mtx', 'mty', 'mua', 'mub', 'muc', 'mud', 'mue', 'mug', 'muh', 'mui', 'muj', 'muk', 'mul', 'mum', 'mun', 'muo', 'mup', 'muq', 'mur', 'mus', 'mut', 'muu', 'muv', 'mux', 'muy', 'muz', 'mva', 'mvb', 'mvd', 'mve', 'mvf', 'mvg', 'mvh', 'mvi', 'mvk', 'mvl', 'mvm', 'mvn', 'mvo', 'mvp', 'mvq', 'mvr', 'mvs', 'mvt', 'mvu', 'mvv', 'mvw', 'mvx', 'mvy', 'mvz', 'mwa', 'mwb', 'mwc', 'mwd', 'mwe', 'mwf', 'mwg', 'mwh', 'mwi', 'mwj', 'mwk', 'mwl', 'mwm', 'mwn', 'mwo', 'mwp', 'mwq', 'mwr', 'mws', 'mwt', 'mwu', 'mwv', 'mww', 'mwx', 'mwy', 'mwz', 'mxa', 'mxb', 'mxc', 'mxd', 'mxe', 'mxf', 'mxg', 'mxh', 'mxi', 'mxj', 'mxk', 'mxl', 'mxm', 'mxn', 'mxo', 'mxp', 'mxq', 'mxr', 'mxs', 'mxt', 'mxu', 'mxv', 'mxw', 'mxx', 'mxy', 'mxz', 'myb', 'myc', 'myd', 'mye', 'myf', 'myg', 'myh', 'myi', 'myj', 'myk', 'myl', 'mym', 'myn', 'myo', 'myp', 'myq', 'myr', 'mys', 'myt', 'myu', 'myv', 'myw', 'myx', 'myy', 'myz', 'mza', 'mzb', 'mzc', 'mzd', 'mze', 'mzg', 'mzh', 'mzi', 'mzj', 'mzk', 'mzl', 'mzm', 'mzn', 'mzo', 'mzp', 'mzq', 'mzr', 'mzs', 'mzt', 'mzu', 'mzv', 'mzw', 'mzx', 'mzy', 'mzz', 'naa', 'nab', 'nac', 'nad', 'nae', 'naf', 'nag', 'nah', 'nai', 'naj', 'nak', 'nal', 'nam', 'nan', 'nao', 'nap', 'naq', 'nar', 'nas', 'nat', 'naw', 'nax', 'nay', 'naz', 'nba', 'nbb', 'nbc', 'nbd', 'nbe', 'nbf', 'nbg', 'nbh', 'nbi', 'nbj', 'nbk', 'nbm', 'nbn', 'nbo', 'nbp', 'nbq', 'nbr', 'nbs', 'nbt', 'nbu', 'nbv', 'nbw', 'nbx', 'nby', 'nca', 'ncb', 'ncc', 'ncd', 'nce', 'ncf', 'ncg', 'nch', 'nci', 'ncj', 'nck', 'ncl', 'ncm', 'ncn', 'nco', 'ncp', 'ncq', 'ncr', 'ncs', 'nct', 'ncu', 'ncx', 'ncz', 'nda', 'ndb', 'ndc', 'ndd', 'ndf', 'ndg', 'ndh', 'ndi', 'ndj', 'ndk', 'ndl', 'ndm', 'ndn', 'ndp', 'ndq', 'ndr', 'nds', 'ndt', 'ndu', 'ndv', 'ndw', 'ndx', 'ndy', 'ndz', 'nea', 'neb', 'nec', 'ned', 'nee', 'nef', 'neg', 'neh', 'nei', 'nej', 'nek', 'nem', 'nen', 'neo', 'neq', 'ner', 'nes', 'net', 'neu', 'nev', 'new', 'nex', 'ney', 'nez', 'nfa', 'nfd', 'nfl', 'nfr', 'nfu', 'nga', 'ngb', 'ngc', 'ngd', 'nge', 'ngf', 'ngg', 'ngh', 'ngi', 'ngj', 'ngk', 'ngl', 'ngm', 'ngn', 'ngo', 'ngp', 'ngq', 'ngr', 'ngs', 'ngt', 'ngu', 'ngv', 'ngw', 'ngx', 'ngy', 'ngz', 'nha', 'nhb', 'nhc', 'nhd', 'nhe', 'nhf', 'nhg', 'nhh', 'nhi', 'nhk', 'nhm', 'nhn', 'nho', 'nhp', 'nhq', 'nhr', 'nht', 'nhu', 'nhv', 'nhw', 'nhx', 'nhy', 'nhz', 'nia', 'nib', 'nic', 'nid', 'nie', 'nif', 'nig', 'nih', 'nii', 'nij', 'nik', 'nil', 'nim', 'nin', 'nio', 'niq', 'nir', 'nis', 'nit', 'niu', 'niv', 'niw', 'nix', 'niy', 'niz', 'nja', 'njb', 'njd', 'njh', 'nji', 'njj', 'njl', 'njm', 'njn', 'njo', 'njr', 'njs', 'njt', 'nju', 'njx', 'njy', 'njz', 'nka', 'nkb', 'nkc', 'nkd', 'nke', 'nkf', 'nkg', 'nkh', 'nki', 'nkj', 'nkk', 'nkm', 'nkn', 'nko', 'nkp', 'nkq', 'nkr', 'nks', 'nkt', 'nku', 'nkv', 'nkw', 'nkx', 'nkz', 'nla', 'nlc', 'nle', 'nlg', 'nli', 'nlj', 'nlk', 'nll', 'nlm', 'nln', 'nlo', 'nlq', 'nlr', 'nlu', 'nlv', 'nlw', 'nlx', 'nly', 'nlz', 'nma', 'nmb', 'nmc', 'nmd', 'nme', 'nmf', 'nmg', 'nmh', 'nmi', 'nmj', 'nmk', 'nml', 'nmm', 'nmn', 'nmo', 'nmp', 'nmq', 'nmr', 'nms', 'nmt', 'nmu', 'nmv', 'nmw', 'nmx', 'nmy', 'nmz', 'nna', 'nnb', 'nnc', 'nnd', 'nne', 'nnf', 'nng', 'nnh', 'nni', 'nnj', 'nnk', 'nnl', 'nnm', 'nnn', 'nnp', 'nnq', 'nnr', 'nns', 'nnt', 'nnu', 'nnv', 'nnw', 'nnx', 'nny', 'nnz', 'noa', 'noc', 'nod', 'noe', 'nof', 'nog', 'noh', 'noi', 'noj', 'nok', 'nol', 'nom', 'non', 'noo', 'nop', 'noq', 'nos', 'not', 'nou', 'nov', 'now', 'noy', 'noz', 'npa', 'npb', 'npg', 'nph', 'npi', 'npl', 'npn', 'npo', 'nps', 'npu', 'npx', 'npy', 'nqg', 'nqk', 'nql', 'nqm', 'nqn', 'nqo', 'nqq', 'nqy', 'nra', 'nrb', 'nrc', 'nre', 'nrf', 'nrg', 'nri', 'nrk', 'nrl', 'nrm', 'nrn', 'nrp', 'nrr', 'nrt', 'nru', 'nrx', 'nrz', 'nsa', 'nsc', 'nsd', 'nse', 'nsf', 'nsg', 'nsh', 'nsi', 'nsk', 'nsl', 'nsm', 'nsn', 'nso', 'nsp', 'nsq', 'nsr', 'nss', 'nst', 'nsu', 'nsv', 'nsw', 'nsx', 'nsy', 'nsz', 'ntd', 'nte', 'ntg', 'nti', 'ntj', 'ntk', 'ntm', 'nto', 'ntp', 'ntr', 'nts', 'ntu', 'ntw', 'ntx', 'nty', 'ntz', 'nua', 'nub', 'nuc', 'nud', 'nue', 'nuf', 'nug', 'nuh', 'nui', 'nuj', 'nuk', 'nul', 'num', 'nun', 'nuo', 'nup', 'nuq', 'nur', 'nus', 'nut', 'nuu', 'nuv', 'nuw', 'nux', 'nuy', 'nuz', 'nvh', 'nvm', 'nvo', 'nwa', 'nwb', 'nwc', 'nwe', 'nwg', 'nwi', 'nwm', 'nwo', 'nwr', 'nwx', 'nwy', 'nxa', 'nxd', 'nxe', 'nxg', 'nxi', 'nxk', 'nxl', 'nxm', 'nxn', 'nxo', 'nxq', 'nxr', 'nxu', 'nxx', 'nyb', 'nyc', 'nyd', 'nye', 'nyf', 'nyg', 'nyh', 'nyi', 'nyj', 'nyk', 'nyl', 'nym', 'nyn', 'nyo', 'nyp', 'nyq', 'nyr', 'nys', 'nyt', 'nyu', 'nyv', 'nyw', 'nyx', 'nyy', 'nza', 'nzb', 'nzd', 'nzi', 'nzk', 'nzm', 'nzs', 'nzu', 'nzy', 'nzz', 'oaa', 'oac', 'oar', 'oav', 'obi', 'obk', 'obl', 'obm', 'obo', 'obr', 'obt', 'obu', 'oca', 'och', 'oco', 'ocu', 'oda', 'odk', 'odt', 'odu', 'ofo', 'ofs', 'ofu', 'ogb', 'ogc', 'oge', 'ogg', 'ogo', 'ogu', 'oht', 'ohu', 'oia', 'oin', 'ojb', 'ojc', 'ojg', 'ojp', 'ojs', 'ojv', 'ojw', 'oka', 'okb', 'okd', 'oke', 'okg', 'okh', 'oki', 'okj', 'okk', 'okl', 'okm', 'okn', 'oko', 'okr', 'oks', 'oku', 'okv', 'okx', 'ola', 'old', 'ole', 'olk', 'olm', 'olo', 'olr', 'olt', 'olu', 'oma', 'omb', 'omc', 'ome', 'omg', 'omi', 'omk', 'oml', 'omn', 'omo', 'omp', 'omq', 'omr', 'omt', 'omu', 'omv', 'omw', 'omx', 'ona', 'onb', 'one', 'ong', 'oni', 'onj', 'onk', 'onn', 'ono', 'onp', 'onr', 'ons', 'ont', 'onu', 'onw', 'onx', 'ood', 'oog', 'oon', 'oor', 'oos', 'opa', 'opk', 'opm', 'opo', 'opt', 'opy', 'ora', 'orc', 'ore', 'org', 'orh', 'orn', 'oro', 'orr', 'ors', 'ort', 'oru', 'orv', 'orw', 'orx', 'ory', 'orz', 'osa', 'osc', 'osi', 'oso', 'osp', 'ost', 'osu', 'osx', 'ota', 'otb', 'otd', 'ote', 'oti', 'otk', 'otl', 'otm', 'otn', 'oto', 'otq', 'otr', 'ots', 'ott', 'otu', 'otw', 'otx', 'oty', 'otz', 'oua', 'oub', 'oue', 'oui', 'oum', 'oun', 'ovd', 'owi', 'owl', 'oyb', 'oyd', 'oym', 'oyy', 'ozm', 'paa', 'pab', 'pac', 'pad', 'pae', 'paf', 'pag', 'pah', 'pai', 'pak', 'pal', 'pam', 'pao', 'pap', 'paq', 'par', 'pas', 'pat', 'pau', 'pav', 'paw', 'pax', 'pay', 'paz', 'pbb', 'pbc', 'pbe', 'pbf', 'pbg', 'pbh', 'pbi', 'pbl', 'pbm', 'pbn', 'pbo', 'pbp', 'pbr', 'pbs', 'pbt', 'pbu', 'pbv', 'pby', 'pbz', 'pca', 'pcb', 'pcc', 'pcd', 'pce', 'pcf', 'pcg', 'pch', 'pci', 'pcj', 'pck', 'pcl', 'pcm', 'pcn', 'pcp', 'pcr', 'pcw', 'pda', 'pdc', 'pdi', 'pdn', 'pdo', 'pdt', 'pdu', 'pea', 'peb', 'ped', 'pee', 'pef', 'peg', 'peh', 'pei', 'pej', 'pek', 'pel', 'pem', 'peo', 'pep', 'peq', 'pes', 'pev', 'pex', 'pey', 'pez', 'pfa', 'pfe', 'pfl', 'pga', 'pgd', 'pgg', 'pgi', 'pgk', 'pgl', 'pgn', 'pgs', 'pgu', 'pgy', 'pgz', 'pha', 'phd', 'phg', 'phh', 'phi', 'phk', 'phl', 'phm', 'phn', 'pho', 'phq', 'phr', 'pht', 'phu', 'phv', 'phw', 'pia', 'pib', 'pic', 'pid', 'pie', 'pif', 'pig', 'pih', 'pii', 'pij', 'pil', 'pim', 'pin', 'pio', 'pip', 'pir', 'pis', 'pit', 'piu', 'piv', 'piw', 'pix', 'piy', 'piz', 'pjt', 'pka', 'pkb', 'pkc', 'pkg', 'pkh', 'pkn', 'pko', 'pkp', 'pkr', 'pks', 'pkt', 'pku', 'pla', 'plb', 'plc', 'pld', 'ple', 'plf', 'plg', 'plh', 'plj', 'plk', 'pll', 'pln', 'plo', 'plp', 'plq', 'plr', 'pls', 'plt', 'plu', 'plv', 'plw', 'ply', 'plz', 'pma', 'pmb', 'pmc', 'pmd', 'pme', 'pmf', 'pmh', 'pmi', 'pmj', 'pmk', 'pml', 'pmm', 'pmn', 'pmo', 'pmq', 'pmr', 'pms', 'pmt', 'pmu', 'pmw', 'pmx', 'pmy', 'pmz', 'pna', 'pnb', 'pnc', 'pne', 'png', 'pnh', 'pni', 'pnj', 'pnk', 'pnl', 'pnm', 'pnn', 'pno', 'pnp', 'pnq', 'pnr', 'pns', 'pnt', 'pnu', 'pnv', 'pnw', 'pnx', 'pny', 'pnz', 'poc', 'pod', 'poe', 'pof', 'pog', 'poh', 'poi', 'pok', 'pom', 'pon', 'poo', 'pop', 'poq', 'pos', 'pot', 'pov', 'pow', 'pox', 'poy', 'poz', 'ppa', 'ppe', 'ppi', 'ppk', 'ppl', 'ppm', 'ppn', 'ppo', 'ppp', 'ppq', 'ppr', 'pps', 'ppt', 'ppu', 'pqa', 'pqe', 'pqm', 'pqw', 'pra', 'prb', 'prc', 'prd', 'pre', 'prf', 'prg', 'prh', 'pri', 'prk', 'prl', 'prm', 'prn', 'pro', 'prp', 'prq', 'prr', 'prs', 'prt', 'pru', 'prw', 'prx', 'pry', 'prz', 'psa', 'psc', 'psd', 'pse', 'psg', 'psh', 'psi', 'psl', 'psm', 'psn', 'pso', 'psp', 'psq', 'psr', 'pss', 'pst', 'psu', 'psw', 'psy', 'pta', 'pth', 'pti', 'ptn', 'pto', 'ptp', 'ptq', 'ptr', 'ptt', 'ptu', 'ptv', 'ptw', 'pty', 'pua', 'pub', 'puc', 'pud', 'pue', 'puf', 'pug', 'pui', 'puj', 'puk', 'pum', 'puo', 'pup', 'puq', 'pur', 'put', 'puu', 'puw', 'pux', 'puy', 'puz', 'pwa', 'pwb', 'pwg', 'pwi', 'pwm', 'pwn', 'pwo', 'pwr', 'pww', 'pxm', 'pye', 'pym', 'pyn', 'pys', 'pyu', 'pyx', 'pyy', 'pzn', 'qaa..qtz', 'qua', 'qub', 'quc', 'qud', 'quf', 'qug', 'quh', 'qui', 'quk', 'qul', 'qum', 'qun', 'qup', 'quq', 'qur', 'qus', 'quv', 'quw', 'qux', 'quy', 'quz', 'qva', 'qvc', 'qve', 'qvh', 'qvi', 'qvj', 'qvl', 'qvm', 'qvn', 'qvo', 'qvp', 'qvs', 'qvw', 'qvy', 'qvz', 'qwa', 'qwc', 'qwe', 'qwh', 'qwm', 'qws', 'qwt', 'qxa', 'qxc', 'qxh', 'qxl', 'qxn', 'qxo', 'qxp', 'qxq', 'qxr', 'qxs', 'qxt', 'qxu', 'qxw', 'qya', 'qyp', 'raa', 'rab', 'rac', 'rad', 'raf', 'rag', 'rah', 'rai', 'raj', 'rak', 'ral', 'ram', 'ran', 'rao', 'rap', 'raq', 'rar', 'ras', 'rat', 'rau', 'rav', 'raw', 'rax', 'ray', 'raz', 'rbb', 'rbk', 'rbl', 'rbp', 'rcf', 'rdb', 'rea', 'reb', 'ree', 'reg', 'rei', 'rej', 'rel', 'rem', 'ren', 'rer', 'res', 'ret', 'rey', 'rga', 'rge', 'rgk', 'rgn', 'rgr', 'rgs', 'rgu', 'rhg', 'rhp', 'ria', 'rie', 'rif', 'ril', 'rim', 'rin', 'rir', 'rit', 'riu', 'rjg', 'rji', 'rjs', 'rka', 'rkb', 'rkh', 'rki', 'rkm', 'rkt', 'rkw', 'rma', 'rmb', 'rmc', 'rmd', 'rme', 'rmf', 'rmg', 'rmh', 'rmi', 'rmk', 'rml', 'rmm', 'rmn', 'rmo', 'rmp', 'rmq', 'rmr', 'rms', 'rmt', 'rmu', 'rmv', 'rmw', 'rmx', 'rmy', 'rmz', 'rna', 'rnd', 'rng', 'rnl', 'rnn', 'rnp', 'rnr', 'rnw', 'roa', 'rob', 'roc', 'rod', 'roe', 'rof', 'rog', 'rol', 'rom', 'roo', 'rop', 'ror', 'rou', 'row', 'rpn', 'rpt', 'rri', 'rro', 'rrt', 'rsb', 'rsi', 'rsl', 'rsm', 'rtc', 'rth', 'rtm', 'rts', 'rtw', 'rub', 'ruc', 'rue', 'ruf', 'rug', 'ruh', 'rui', 'ruk', 'ruo', 'rup', 'ruq', 'rut', 'ruu', 'ruy', 'ruz', 'rwa', 'rwk', 'rwm', 'rwo', 'rwr', 'rxd', 'rxw', 'ryn', 'rys', 'ryu', 'rzh', 'saa', 'sab', 'sac', 'sad', 'sae', 'saf', 'sah', 'sai', 'saj', 'sak', 'sal', 'sam', 'sao', 'sap', 'saq', 'sar', 'sas', 'sat', 'sau', 'sav', 'saw', 'sax', 'say', 'saz', 'sba', 'sbb', 'sbc', 'sbd', 'sbe', 'sbf', 'sbg', 'sbh', 'sbi', 'sbj', 'sbk', 'sbl', 'sbm', 'sbn', 'sbo', 'sbp', 'sbq', 'sbr', 'sbs', 'sbt', 'sbu', 'sbv', 'sbw', 'sbx', 'sby', 'sbz', 'sca', 'scb', 'sce', 'scf', 'scg', 'sch', 'sci', 'sck', 'scl', 'scn', 'sco', 'scp', 'scq', 'scs', 'sct', 'scu', 'scv', 'scw', 'scx', 'sda', 'sdb', 'sdc', 'sde', 'sdf', 'sdg', 'sdh', 'sdj', 'sdk', 'sdl', 'sdm', 'sdn', 'sdo', 'sdp', 'sdr', 'sds', 'sdt', 'sdu', 'sdv', 'sdx', 'sdz', 'sea', 'seb', 'sec', 'sed', 'see', 'sef', 'seg', 'seh', 'sei', 'sej', 'sek', 'sel', 'sem', 'sen', 'seo', 'sep', 'seq', 'ser', 'ses', 'set', 'seu', 'sev', 'sew', 'sey', 'sez', 'sfb', 'sfe', 'sfm', 'sfs', 'sfw', 'sga', 'sgb', 'sgc', 'sgd', 'sge', 'sgg', 'sgh', 'sgi', 'sgj', 'sgk', 'sgl', 'sgm', 'sgn', 'sgo', 'sgp', 'sgr', 'sgs', 'sgt', 'sgu', 'sgw', 'sgx', 'sgy', 'sgz', 'sha', 'shb', 'shc', 'shd', 'she', 'shg', 'shh', 'shi', 'shj', 'shk', 'shl', 'shm', 'shn', 'sho', 'shp', 'shq', 'shr', 'shs', 'sht', 'shu', 'shv', 'shw', 'shx', 'shy', 'shz', 'sia', 'sib', 'sid', 'sie', 'sif', 'sig', 'sih', 'sii', 'sij', 'sik', 'sil', 'sim', 'sio', 'sip', 'siq', 'sir', 'sis', 'sit', 'siu', 'siv', 'siw', 'six', 'siy', 'siz', 'sja', 'sjb', 'sjd', 'sje', 'sjg', 'sjk', 'sjl', 'sjm', 'sjn', 'sjo', 'sjp', 'sjr', 'sjs', 'sjt', 'sju', 'sjw', 'ska', 'skb', 'skc', 'skd', 'ske', 'skf', 'skg', 'skh', 'ski', 'skj', 'skk', 'skm', 'skn', 'sko', 'skp', 'skq', 'skr', 'sks', 'skt', 'sku', 'skv', 'skw', 'skx', 'sky', 'skz', 'sla', 'slc', 'sld', 'sle', 'slf', 'slg', 'slh', 'sli', 'slj', 'sll', 'slm', 'sln', 'slp', 'slq', 'slr', 'sls', 'slt', 'slu', 'slw', 'slx', 'sly', 'slz', 'sma', 'smb', 'smc', 'smd', 'smf', 'smg', 'smh', 'smi', 'smj', 'smk', 'sml', 'smm', 'smn', 'smp', 'smq', 'smr', 'sms', 'smt', 'smu', 'smv', 'smw', 'smx', 'smy', 'smz', 'snb', 'snc', 'sne', 'snf', 'sng', 'snh', 'sni', 'snj', 'snk', 'snl', 'snm', 'snn', 'sno', 'snp', 'snq', 'snr', 'sns', 'snu', 'snv', 'snw', 'snx', 'sny', 'snz', 'soa', 'sob', 'soc', 'sod', 'soe', 'sog', 'soh', 'soi', 'soj', 'sok', 'sol', 'son', 'soo', 'sop', 'soq', 'sor', 'sos', 'sou', 'sov', 'sow', 'sox', 'soy', 'soz', 'spb', 'spc', 'spd', 'spe', 'spg', 'spi', 'spk', 'spl', 'spm', 'spn', 'spo', 'spp', 'spq', 'spr', 'sps', 'spt', 'spu', 'spv', 'spx', 'spy', 'sqa', 'sqh', 'sqj', 'sqk', 'sqm', 'sqn', 'sqo', 'sqq', 'sqr', 'sqs', 'sqt', 'squ', 'sra', 'srb', 'src', 'sre', 'srf', 'srg', 'srh', 'sri', 'srk', 'srl', 'srm', 'srn', 'sro', 'srq', 'srr', 'srs', 'srt', 'sru', 'srv', 'srw', 'srx', 'sry', 'srz', 'ssa', 'ssb', 'ssc', 'ssd', 'sse', 'ssf', 'ssg', 'ssh', 'ssi', 'ssj', 'ssk', 'ssl', 'ssm', 'ssn', 'sso', 'ssp', 'ssq', 'ssr', 'sss', 'sst', 'ssu', 'ssv', 'ssx', 'ssy', 'ssz', 'sta', 'stb', 'std', 'ste', 'stf', 'stg', 'sth', 'sti', 'stj', 'stk', 'stl', 'stm', 'stn', 'sto', 'stp', 'stq', 'str', 'sts', 'stt', 'stu', 'stv', 'stw', 'sty', 'sua', 'sub', 'suc', 'sue', 'sug', 'sui', 'suj', 'suk', 'sul', 'sum', 'suq', 'sur', 'sus', 'sut', 'suv', 'suw', 'sux', 'suy', 'suz', 'sva', 'svb', 'svc', 'sve', 'svk', 'svm', 'svr', 'svs', 'svx', 'swb', 'swc', 'swf', 'swg', 'swh', 'swi', 'swj', 'swk', 'swl', 'swm', 'swn', 'swo', 'swp', 'swq', 'swr', 'sws', 'swt', 'swu', 'swv', 'sww', 'swx', 'swy', 'sxb', 'sxc', 'sxe', 'sxg', 'sxk', 'sxl', 'sxm', 'sxn', 'sxo', 'sxr', 'sxs', 'sxu', 'sxw', 'sya', 'syb', 'syc', 'syd', 'syi', 'syk', 'syl', 'sym', 'syn', 'syo', 'syr', 'sys', 'syw', 'syx', 'syy', 'sza', 'szb', 'szc', 'szd', 'sze', 'szg', 'szl', 'szn', 'szp', 'szs', 'szv', 'szw', 'taa', 'tab', 'tac', 'tad', 'tae', 'taf', 'tag', 'tai', 'taj', 'tak', 'tal', 'tan', 'tao', 'tap', 'taq', 'tar', 'tas', 'tau', 'tav', 'taw', 'tax', 'tay', 'taz', 'tba', 'tbb', 'tbc', 'tbd', 'tbe', 'tbf', 'tbg', 'tbh', 'tbi', 'tbj', 'tbk', 'tbl', 'tbm', 'tbn', 'tbo', 'tbp', 'tbq', 'tbr', 'tbs', 'tbt', 'tbu', 'tbv', 'tbw', 'tbx', 'tby', 'tbz', 'tca', 'tcb', 'tcc', 'tcd', 'tce', 'tcf', 'tcg', 'tch', 'tci', 'tck', 'tcl', 'tcm', 'tcn', 'tco', 'tcp', 'tcq', 'tcs', 'tct', 'tcu', 'tcw', 'tcx', 'tcy', 'tcz', 'tda', 'tdb', 'tdc', 'tdd', 'tde', 'tdf', 'tdg', 'tdh', 'tdi', 'tdj', 'tdk', 'tdl', 'tdm', 'tdn', 'tdo', 'tdq', 'tdr', 'tds', 'tdt', 'tdu', 'tdv', 'tdx', 'tdy', 'tea', 'teb', 'tec', 'ted', 'tee', 'tef', 'teg', 'teh', 'tei', 'tek', 'tem', 'ten', 'teo', 'tep', 'teq', 'ter', 'tes', 'tet', 'teu', 'tev', 'tew', 'tex', 'tey', 'tez', 'tfi', 'tfn', 'tfo', 'tfr', 'tft', 'tga', 'tgb', 'tgc', 'tgd', 'tge', 'tgf', 'tgg', 'tgh', 'tgi', 'tgj', 'tgn', 'tgo', 'tgp', 'tgq', 'tgr', 'tgs', 'tgt', 'tgu', 'tgv', 'tgw', 'tgx', 'tgy', 'tgz', 'thc', 'thd', 'the', 'thf', 'thh', 'thi', 'thk', 'thl', 'thm', 'thn', 'thp', 'thq', 'thr', 'ths', 'tht', 'thu', 'thv', 'thw', 'thx', 'thy', 'thz', 'tia', 'tic', 'tid', 'tie', 'tif', 'tig', 'tih', 'tii', 'tij', 'tik', 'til', 'tim', 'tin', 'tio', 'tip', 'tiq', 'tis', 'tit', 'tiu', 'tiv', 'tiw', 'tix', 'tiy', 'tiz', 'tja', 'tjg', 'tji', 'tjl', 'tjm', 'tjn', 'tjo', 'tjs', 'tju', 'tjw', 'tka', 'tkb', 'tkd', 'tke', 'tkf', 'tkg', 'tkk', 'tkl', 'tkm', 'tkn', 'tkp', 'tkq', 'tkr', 'tks', 'tkt', 'tku', 'tkv', 'tkw', 'tkx', 'tkz', 'tla', 'tlb', 'tlc', 'tld', 'tlf', 'tlg', 'tlh', 'tli', 'tlj', 'tlk', 'tll', 'tlm', 'tln', 'tlo', 'tlp', 'tlq', 'tlr', 'tls', 'tlt', 'tlu', 'tlv', 'tlw', 'tlx', 'tly', 'tma', 'tmb', 'tmc', 'tmd', 'tme', 'tmf', 'tmg', 'tmh', 'tmi', 'tmj', 'tmk', 'tml', 'tmm', 'tmn', 'tmo', 'tmp', 'tmq', 'tmr', 'tms', 'tmt', 'tmu', 'tmv', 'tmw', 'tmy', 'tmz', 'tna', 'tnb', 'tnc', 'tnd', 'tne', 'tnf', 'tng', 'tnh', 'tni', 'tnk', 'tnl', 'tnm', 'tnn', 'tno', 'tnp', 'tnq', 'tnr', 'tns', 'tnt', 'tnu', 'tnv', 'tnw', 'tnx', 'tny', 'tnz', 'tob', 'toc', 'tod', 'toe', 'tof', 'tog', 'toh', 'toi', 'toj', 'tol', 'tom', 'too', 'top', 'toq', 'tor', 'tos', 'tou', 'tov', 'tow', 'tox', 'toy', 'toz', 'tpa', 'tpc', 'tpe', 'tpf', 'tpg', 'tpi', 'tpj', 'tpk', 'tpl', 'tpm', 'tpn', 'tpo', 'tpp', 'tpq', 'tpr', 'tpt', 'tpu', 'tpv', 'tpw', 'tpx', 'tpy', 'tpz', 'tqb', 'tql', 'tqm', 'tqn', 'tqo', 'tqp', 'tqq', 'tqr', 'tqt', 'tqu', 'tqw', 'tra', 'trb', 'trc', 'trd', 'tre', 'trf', 'trg', 'trh', 'tri', 'trj', 'trk', 'trl', 'trm', 'trn', 'tro', 'trp', 'trq', 'trr', 'trs', 'trt', 'tru', 'trv', 'trw', 'trx', 'try', 'trz', 'tsa', 'tsb', 'tsc', 'tsd', 'tse', 'tsf', 'tsg', 'tsh', 'tsi', 'tsj', 'tsk', 'tsl', 'tsm', 'tsp', 'tsq', 'tsr', 'tss', 'tst', 'tsu', 'tsv', 'tsw', 'tsx', 'tsy', 'tsz', 'tta', 'ttb', 'ttc', 'ttd', 'tte', 'ttf', 'ttg', 'tth', 'tti', 'ttj', 'ttk', 'ttl', 'ttm', 'ttn', 'tto', 'ttp', 'ttq', 'ttr', 'tts', 'ttt', 'ttu', 'ttv', 'ttw', 'tty', 'ttz', 'tua', 'tub', 'tuc', 'tud', 'tue', 'tuf', 'tug', 'tuh', 'tui', 'tuj', 'tul', 'tum', 'tun', 'tuo', 'tup', 'tuq', 'tus', 'tut', 'tuu', 'tuv', 'tuw', 'tux', 'tuy', 'tuz', 'tva', 'tvd', 'tve', 'tvk', 'tvl', 'tvm', 'tvn', 'tvo', 'tvs', 'tvt', 'tvu', 'tvw', 'tvy', 'twa', 'twb', 'twc', 'twd', 'twe', 'twf', 'twg', 'twh', 'twl', 'twm', 'twn', 'two', 'twp', 'twq', 'twr', 'twt', 'twu', 'tww', 'twx', 'twy', 'txa', 'txb', 'txc', 'txe', 'txg', 'txh', 'txi', 'txj', 'txm', 'txn', 'txo', 'txq', 'txr', 'txs', 'txt', 'txu', 'txx', 'txy', 'tya', 'tye', 'tyh', 'tyi', 'tyj', 'tyl', 'tyn', 'typ', 'tyr', 'tys', 'tyt', 'tyu', 'tyv', 'tyx', 'tyz', 'tza', 'tzh', 'tzj', 'tzl', 'tzm', 'tzn', 'tzo', 'tzx', 'uam', 'uan', 'uar', 'uba', 'ubi', 'ubl', 'ubr', 'ubu', 'uby', 'uda', 'ude', 'udg', 'udi', 'udj', 'udl', 'udm', 'udu', 'ues', 'ufi', 'uga', 'ugb', 'uge', 'ugn', 'ugo', 'ugy', 'uha', 'uhn', 'uis', 'uiv', 'uji', 'uka', 'ukg', 'ukh', 'ukk', 'ukl', 'ukp', 'ukq', 'uks', 'uku', 'ukw', 'uky', 'ula', 'ulb', 'ulc', 'ule', 'ulf', 'uli', 'ulk', 'ull', 'ulm', 'uln', 'ulu', 'ulw', 'uma', 'umb', 'umc', 'umd', 'umg', 'umi', 'umm', 'umn', 'umo', 'ump', 'umr', 'ums', 'umu', 'una', 'und', 'une', 'ung', 'unk', 'unm', 'unn', 'unp', 'unr', 'unu', 'unx', 'unz', 'uok', 'upi', 'upv', 'ura', 'urb', 'urc', 'ure', 'urf', 'urg', 'urh', 'uri', 'urj', 'urk', 'url', 'urm', 'urn', 'uro', 'urp', 'urr', 'urt', 'uru', 'urv', 'urw', 'urx', 'ury', 'urz', 'usa', 'ush', 'usi', 'usk', 'usp', 'usu', 'uta', 'ute', 'utp', 'utr', 'utu', 'uum', 'uun', 'uur', 'uuu', 'uve', 'uvh', 'uvl', 'uwa', 'uya', 'uzn', 'uzs', 'vaa', 'vae', 'vaf', 'vag', 'vah', 'vai', 'vaj', 'val', 'vam', 'van', 'vao', 'vap', 'var', 'vas', 'vau', 'vav', 'vay', 'vbb', 'vbk', 'vec', 'ved', 'vel', 'vem', 'veo', 'vep', 'ver', 'vgr', 'vgt', 'vic', 'vid', 'vif', 'vig', 'vil', 'vin', 'vis', 'vit', 'viv', 'vka', 'vki', 'vkj', 'vkk', 'vkl', 'vkm', 'vko', 'vkp', 'vkt', 'vku', 'vlp', 'vls', 'vma', 'vmb', 'vmc', 'vmd', 'vme', 'vmf', 'vmg', 'vmh', 'vmi', 'vmj', 'vmk', 'vml', 'vmm', 'vmp', 'vmq', 'vmr', 'vms', 'vmu', 'vmv', 'vmw', 'vmx', 'vmy', 'vmz', 'vnk', 'vnm', 'vnp', 'vor', 'vot', 'vra', 'vro', 'vrs', 'vrt', 'vsi', 'vsl', 'vsv', 'vto', 'vum', 'vun', 'vut', 'vwa', 'waa', 'wab', 'wac', 'wad', 'wae', 'waf', 'wag', 'wah', 'wai', 'waj', 'wak', 'wal', 'wam', 'wan', 'wao', 'wap', 'waq', 'war', 'was', 'wat', 'wau', 'wav', 'waw', 'wax', 'way', 'waz', 'wba', 'wbb', 'wbe', 'wbf', 'wbh', 'wbi', 'wbj', 'wbk', 'wbl', 'wbm', 'wbp', 'wbq', 'wbr', 'wbs', 'wbt', 'wbv', 'wbw', 'wca', 'wci', 'wdd', 'wdg', 'wdj', 'wdk', 'wdu', 'wdy', 'wea', 'wec', 'wed', 'weg', 'weh', 'wei', 'wem', 'wen', 'weo', 'wep', 'wer', 'wes', 'wet', 'weu', 'wew', 'wfg', 'wga', 'wgb', 'wgg', 'wgi', 'wgo', 'wgu', 'wgw', 'wgy', 'wha', 'whg', 'whk', 'whu', 'wib', 'wic', 'wie', 'wif', 'wig', 'wih', 'wii', 'wij', 'wik', 'wil', 'wim', 'win', 'wir', 'wit', 'wiu', 'wiv', 'wiw', 'wiy', 'wja', 'wji', 'wka', 'wkb', 'wkd', 'wkl', 'wku', 'wkw', 'wky', 'wla', 'wlc', 'wle', 'wlg', 'wli', 'wlk', 'wll', 'wlm', 'wlo', 'wlr', 'wls', 'wlu', 'wlv', 'wlw', 'wlx', 'wly', 'wma', 'wmb', 'wmc', 'wmd', 'wme', 'wmh', 'wmi', 'wmm', 'wmn', 'wmo', 'wms', 'wmt', 'wmw', 'wmx', 'wnb', 'wnc', 'wnd', 'wne', 'wng', 'wni', 'wnk', 'wnm', 'wnn', 'wno', 'wnp', 'wnu', 'wnw', 'wny', 'woa', 'wob', 'woc', 'wod', 'woe', 'wof', 'wog', 'woi', 'wok', 'wom', 'won', 'woo', 'wor', 'wos', 'wow', 'woy', 'wpc', 'wra', 'wrb', 'wrd', 'wrg', 'wrh', 'wri', 'wrk', 'wrl', 'wrm', 'wrn', 'wro', 'wrp', 'wrr', 'wrs', 'wru', 'wrv', 'wrw', 'wrx', 'wry', 'wrz', 'wsa', 'wsg', 'wsi', 'wsk', 'wsr', 'wss', 'wsu', 'wsv', 'wtf', 'wth', 'wti', 'wtk', 'wtm', 'wtw', 'wua', 'wub', 'wud', 'wuh', 'wul', 'wum', 'wun', 'wur', 'wut', 'wuu', 'wuv', 'wux', 'wuy', 'wwa', 'wwb', 'wwo', 'wwr', 'www', 'wxa', 'wxw', 'wya', 'wyb', 'wyi', 'wym', 'wyr', 'wyy', 'xaa', 'xab', 'xac', 'xad', 'xae', 'xag', 'xai', 'xaj', 'xak', 'xal', 'xam', 'xan', 'xao', 'xap', 'xaq', 'xar', 'xas', 'xat', 'xau', 'xav', 'xaw', 'xay', 'xba', 'xbb', 'xbc', 'xbd', 'xbe', 'xbg', 'xbi', 'xbj', 'xbm', 'xbn', 'xbo', 'xbp', 'xbr', 'xbw', 'xbx', 'xby', 'xcb', 'xcc', 'xce', 'xcg', 'xch', 'xcl', 'xcm', 'xcn', 'xco', 'xcr', 'xct', 'xcu', 'xcv', 'xcw', 'xcy', 'xda', 'xdc', 'xdk', 'xdm', 'xdo', 'xdy', 'xeb', 'xed', 'xeg', 'xel', 'xem', 'xep', 'xer', 'xes', 'xet', 'xeu', 'xfa', 'xga', 'xgb', 'xgd', 'xgf', 'xgg', 'xgi', 'xgl', 'xgm', 'xgn', 'xgr', 'xgu', 'xgw', 'xha', 'xhc', 'xhd', 'xhe', 'xhr', 'xht', 'xhu', 'xhv', 'xia', 'xib', 'xii', 'xil', 'xin', 'xip', 'xir', 'xis', 'xiv', 'xiy', 'xjb', 'xjt', 'xka', 'xkb', 'xkc', 'xkd', 'xke', 'xkf', 'xkg', 'xkh', 'xki', 'xkj', 'xkk', 'xkl', 'xkn', 'xko', 'xkp', 'xkq', 'xkr', 'xks', 'xkt', 'xku', 'xkv', 'xkw', 'xkx', 'xky', 'xkz', 'xla', 'xlb', 'xlc', 'xld', 'xle', 'xlg', 'xli', 'xln', 'xlo', 'xlp', 'xls', 'xlu', 'xly', 'xma', 'xmb', 'xmc', 'xmd', 'xme', 'xmf', 'xmg', 'xmh', 'xmj', 'xmk', 'xml', 'xmm', 'xmn', 'xmo', 'xmp', 'xmq', 'xmr', 'xms', 'xmt', 'xmu', 'xmv', 'xmw', 'xmx', 'xmy', 'xmz', 'xna', 'xnb', 'xnd', 'xng', 'xnh', 'xni', 'xnk', 'xnn', 'xno', 'xnr', 'xns', 'xnt', 'xnu', 'xny', 'xnz', 'xoc', 'xod', 'xog', 'xoi', 'xok', 'xom', 'xon', 'xoo', 'xop', 'xor', 'xow', 'xpa', 'xpc', 'xpe', 'xpg', 'xpi', 'xpj', 'xpk', 'xpm', 'xpn', 'xpo', 'xpp', 'xpq', 'xpr', 'xps', 'xpt', 'xpu', 'xpy', 'xqa', 'xqt', 'xra', 'xrb', 'xrd', 'xre', 'xrg', 'xri', 'xrm', 'xrn', 'xrq', 'xrr', 'xrt', 'xru', 'xrw', 'xsa', 'xsb', 'xsc', 'xsd', 'xse', 'xsh', 'xsi', 'xsj', 'xsl', 'xsm', 'xsn', 'xso', 'xsp', 'xsq', 'xsr', 'xss', 'xsu', 'xsv', 'xsy', 'xta', 'xtb', 'xtc', 'xtd', 'xte', 'xtg', 'xth', 'xti', 'xtj', 'xtl', 'xtm', 'xtn', 'xto', 'xtp', 'xtq', 'xtr', 'xts', 'xtt', 'xtu', 'xtv', 'xtw', 'xty', 'xtz', 'xua', 'xub', 'xud', 'xug', 'xuj', 'xul', 'xum', 'xun', 'xuo', 'xup', 'xur', 'xut', 'xuu', 'xve', 'xvi', 'xvn', 'xvo', 'xvs', 'xwa', 'xwc', 'xwd', 'xwe', 'xwg', 'xwj', 'xwk', 'xwl', 'xwo', 'xwr', 'xwt', 'xww', 'xxb', 'xxk', 'xxm', 'xxr', 'xxt', 'xya', 'xyb', 'xyj', 'xyk', 'xyl', 'xyt', 'xyy', 'xzh', 'xzm', 'xzp', 'yaa', 'yab', 'yac', 'yad', 'yae', 'yaf', 'yag', 'yah', 'yai', 'yaj', 'yak', 'yal', 'yam', 'yan', 'yao', 'yap', 'yaq', 'yar', 'yas', 'yat', 'yau', 'yav', 'yaw', 'yax', 'yay', 'yaz', 'yba', 'ybb', 'ybd', 'ybe', 'ybh', 'ybi', 'ybj', 'ybk', 'ybl', 'ybm', 'ybn', 'ybo', 'ybx', 'yby', 'ych', 'ycl', 'ycn', 'ycp', 'yda', 'ydd', 'yde', 'ydg', 'ydk', 'yds', 'yea', 'yec', 'yee', 'yei', 'yej', 'yel', 'yen', 'yer', 'yes', 'yet', 'yeu', 'yev', 'yey', 'yga', 'ygi', 'ygl', 'ygm', 'ygp', 'ygr', 'ygs', 'ygu', 'ygw', 'yha', 'yhd', 'yhl', 'yhs', 'yia', 'yif', 'yig', 'yih', 'yii', 'yij', 'yik', 'yil', 'yim', 'yin', 'yip', 'yiq', 'yir', 'yis', 'yit', 'yiu', 'yiv', 'yix', 'yiy', 'yiz', 'yka', 'ykg', 'yki', 'ykk', 'ykl', 'ykm', 'ykn', 'yko', 'ykr', 'ykt', 'yku', 'yky', 'yla', 'ylb', 'yle', 'ylg', 'yli', 'yll', 'ylm', 'yln', 'ylo', 'ylr', 'ylu', 'yly', 'yma', 'ymb', 'ymc', 'ymd', 'yme', 'ymg', 'ymh', 'ymi', 'ymk', 'yml', 'ymm', 'ymn', 'ymo', 'ymp', 'ymq', 'ymr', 'yms', 'ymt', 'ymx', 'ymz', 'yna', 'ynd', 'yne', 'yng', 'ynh', 'ynk', 'ynl', 'ynn', 'yno', 'ynq', 'yns', 'ynu', 'yob', 'yog', 'yoi', 'yok', 'yol', 'yom', 'yon', 'yos', 'yot', 'yox', 'yoy', 'ypa', 'ypb', 'ypg', 'yph', 'ypk', 'ypm', 'ypn', 'ypo', 'ypp', 'ypz', 'yra', 'yrb', 'yre', 'yri', 'yrk', 'yrl', 'yrm', 'yrn', 'yro', 'yrs', 'yrw', 'yry', 'ysc', 'ysd', 'ysg', 'ysl', 'ysn', 'yso', 'ysp', 'ysr', 'yss', 'ysy', 'yta', 'ytl', 'ytp', 'ytw', 'yty', 'yua', 'yub', 'yuc', 'yud', 'yue', 'yuf', 'yug', 'yui', 'yuj', 'yuk', 'yul', 'yum', 'yun', 'yup', 'yuq', 'yur', 'yut', 'yuu', 'yuw', 'yux', 'yuy', 'yuz', 'yva', 'yvt', 'ywa', 'ywg', 'ywl', 'ywn', 'ywq', 'ywr', 'ywt', 'ywu', 'yww', 'yxa', 'yxg', 'yxl', 'yxm', 'yxu', 'yxy', 'yyr', 'yyu', 'yyz', 'yzg', 'yzk', 'zaa', 'zab', 'zac', 'zad', 'zae', 'zaf', 'zag', 'zah', 'zai', 'zaj', 'zak', 'zal', 'zam', 'zao', 'zap', 'zaq', 'zar', 'zas', 'zat', 'zau', 'zav', 'zaw', 'zax', 'zay', 'zaz', 'zbc', 'zbe', 'zbl', 'zbt', 'zbw', 'zca', 'zch', 'zdj', 'zea', 'zeg', 'zeh', 'zen', 'zga', 'zgb', 'zgh', 'zgm', 'zgn', 'zgr', 'zhb', 'zhd', 'zhi', 'zhn', 'zhw', 'zhx', 'zia', 'zib', 'zik', 'zil', 'zim', 'zin', 'zir', 'ziw', 'ziz', 'zka', 'zkb', 'zkd', 'zkg', 'zkh', 'zkk', 'zkn', 'zko', 'zkp', 'zkr', 'zkt', 'zku', 'zkv', 'zkz', 'zle', 'zlj', 'zlm', 'zln', 'zlq', 'zls', 'zlw', 'zma', 'zmb', 'zmc', 'zmd', 'zme', 'zmf', 'zmg', 'zmh', 'zmi', 'zmj', 'zmk', 'zml', 'zmm', 'zmn', 'zmo', 'zmp', 'zmq', 'zmr', 'zms', 'zmt', 'zmu', 'zmv', 'zmw', 'zmx', 'zmy', 'zmz', 'zna', 'znd', 'zne', 'zng', 'znk', 'zns', 'zoc', 'zoh', 'zom', 'zoo', 'zoq', 'zor', 'zos', 'zpa', 'zpb', 'zpc', 'zpd', 'zpe', 'zpf', 'zpg', 'zph', 'zpi', 'zpj', 'zpk', 'zpl', 'zpm', 'zpn', 'zpo', 'zpp', 'zpq', 'zpr', 'zps', 'zpt', 'zpu', 'zpv', 'zpw', 'zpx', 'zpy', 'zpz', 'zqe', 'zra', 'zrg', 'zrn', 'zro', 'zrp', 'zrs', 'zsa', 'zsk', 'zsl', 'zsm', 'zsr', 'zsu', 'zte', 'ztg', 'ztl', 'ztm', 'ztn', 'ztp', 'ztq', 'zts', 'ztt', 'ztu', 'ztx', 'zty', 'zua', 'zuh', 'zum', 'zun', 'zuy', 'zwa', 'zxx', 'zyb', 'zyg', 'zyj', 'zyn', 'zyp', 'zza', 'zzj' ];
      axe.utils.validLangs = function() {
        'use strict';
        return langs;
      };
      return commons;
    }()
  });
})(typeof window === 'object' ? window : this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(0);
var underscore_1 = __webpack_require__(3);
exports.getRoot = function () {
    return document.querySelector('.CoveoSearchInterface');
};
exports.getModal = function () {
    return document.querySelector('.coveo-modal-container');
};
exports.getSearchSection = function () {
    return document.body.querySelector('.coveo-search-section');
};
exports.getSortSection = function () {
    return document.body.querySelector('.coveo-sort-section');
};
exports.getResultsColumn = function () {
    return document.body.querySelector('.coveo-results-column');
};
exports.getFacetColumn = function () {
    return document.body.querySelector('.coveo-facet-column');
};
exports.getTabSection = function () {
    return document.body.querySelector('.coveo-tab-section');
};
exports.getResultList = function () {
    var resultListAlreadyExists = document.body.querySelector('.CoveoResultList');
    if (resultListAlreadyExists) {
        return resultListAlreadyExists;
    }
    var newResultList = coveo_search_ui_1.$$('div', {
        className: 'CoveoResultList'
    });
    exports.getResultsColumn().appendChild(newResultList.el);
    return newResultList.el;
};
exports.getTemplate = function () {
    var resultList = exports.getResultList();
    var alreadyExistingScript = coveo_search_ui_1.$$(resultList).find('script');
    if (alreadyExistingScript) {
        return alreadyExistingScript;
    }
    var script = coveo_search_ui_1.$$('script', {
        type: 'text/html',
        className: 'result-template'
    });
    resultList.appendChild(script.el);
    return script.el;
};
exports.testResultElement = function (element) {
    var tmpl = exports.getTemplate();
    tmpl.textContent = element.outerHTML;
};
exports.testSettingsElement = function (element) {
    var settingsComponent = coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Settings) });
    exports.getResultsColumn().appendChild(settingsComponent.el);
    exports.getResultsColumn().appendChild(element);
    return settingsComponent;
};
exports.inDesktopMode = function () {
    document.body.style.width = '1200px';
};
exports.inMobileMode = function () {
    document.body.style.width = '500px';
};
exports.resetMode = function () {
    document.body.style.width = '';
};
exports.addFieldEqualFilter = function (field, filter) {
    var expression = new coveo_search_ui_1.ExpressionBuilder();
    expression.addFieldExpression(field, '==', underscore_1.isArray(filter) ? filter : [filter]);
    return exports.addQueryFilter(expression.build());
};
exports.addQueryFilter = function (filter) {
    coveo_search_ui_1.$$(exports.getRoot()).on(coveo_search_ui_1.QueryEvents.buildingQuery, function (e, args) {
        args.queryBuilder.advancedExpression.add(filter);
    });
};
exports.addBasicExpression = function (filter) {
    coveo_search_ui_1.$$(exports.getRoot()).on(coveo_search_ui_1.QueryEvents.buildingQuery, function (e, args) {
        args.queryBuilder.expression.add(filter);
    });
};
exports.afterInit = function () {
    if (!exports.isInit()) {
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coveo_search_ui_1.$$(exports.getRoot()).on(coveo_search_ui_1.InitializationEvents.afterInitialization, function () {
                            resolve();
                        });
                        return [4 /*yield*/, coveo_search_ui_1.init(exports.getRoot())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    return Promise.resolve();
};
exports.afterQuerySuccess = function () {
    return afterEvent('querySuccess');
};
exports.afterQueryError = function () {
    return afterEvent('queryError');
};
exports.afterDeferredQuerySuccess = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, afterEvent('deferredQuerySuccess')];
    });
}); };
exports.afterDelay = function (delayMs) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(); }, delayMs);
    });
};
exports.isInit = function () {
    return coveo_search_ui_1.get(exports.getRoot(), coveo_search_ui_1.SearchInterface) != null;
};
var afterEvent = function (event) {
    var resolvesAfterEvent = function (resolve) {
        coveo_search_ui_1.$$(exports.getRoot()).one(event, function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.afterDelay(0)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    if (!exports.isInit()) {
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coveo_search_ui_1.$$(exports.getRoot()).on(coveo_search_ui_1.InitializationEvents.afterInitialization, function () {
                            resolvesAfterEvent(resolve);
                        });
                        return [4 /*yield*/, coveo_search_ui_1.init(exports.getRoot())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            resolvesAfterEvent(resolve);
            return [2 /*return*/];
        });
    }); });
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../bin/ts/CoveoJsSearch.d.ts" />
/// <reference path="./CustomMatcher.d.ts" />
var coveo_search_ui_1 = __webpack_require__(0);
var AccessibilityAdvancedSearch_1 = __webpack_require__(7);
var AccessibilityAggregate_1 = __webpack_require__(9);
var AccessibilityBackdrop_1 = __webpack_require__(10);
var AccessibilityBadge_1 = __webpack_require__(11);
var AccessibilityBreadcrumb_1 = __webpack_require__(12);
var AccessibilityCardActionBar_1 = __webpack_require__(13);
var AccessibilityCardOverlay_1 = __webpack_require__(14);
var AccessibilityChatterLikedBy_1 = __webpack_require__(15);
var AccessibilityChatterPostAttachment_1 = __webpack_require__(16);
var AccessibilityChatterPostedBy_1 = __webpack_require__(17);
var AccessibilityChatterTopic_1 = __webpack_require__(18);
var AccessibilityDidYouMean_1 = __webpack_require__(19);
var AccessibilityErrorReport_1 = __webpack_require__(20);
var AccessibilityExcerpt_1 = __webpack_require__(21);
var AccessibilityExportToExcel_1 = __webpack_require__(22);
var AccessibilityFacet_1 = __webpack_require__(23);
var AccessibilityFacetRange_1 = __webpack_require__(24);
var AccessibilityFacetSlider_1 = __webpack_require__(25);
var AccessibilityFieldTable_1 = __webpack_require__(26);
var AccessibilityFieldValue_1 = __webpack_require__(27);
var AccessibilityIcon_1 = __webpack_require__(28);
var AccessibilityLogo_1 = __webpack_require__(29);
var AccessibilityMatrix_1 = __webpack_require__(30);
var AccessibilityPager_1 = __webpack_require__(31);
var AccessibilityQuerybox_1 = __webpack_require__(32);
var CustomMatcher_1 = __webpack_require__(33);
var DefaultTestPage_1 = __webpack_require__(34);
var AccessibilityOmnibox_1 = __webpack_require__(35);
var AccessibilityPreferencesPanel_1 = __webpack_require__(38);
var AccessibilityPrintableUri_1 = __webpack_require__(39);
var AccessibilityQueryDuration_1 = __webpack_require__(40);
var AccessibilityQuickview_1 = __webpack_require__(41);
var AccessibilityRecommendation_1 = __webpack_require__(42);
var AccessibilityResultActionMenu_1 = __webpack_require__(43);
var AccessibilityResultLayoutSelector_1 = __webpack_require__(44);
var AccessibilityResultLink_1 = __webpack_require__(45);
var AccessibilityResultsPerPage_1 = __webpack_require__(46);
var AccessibilitySearchbox_1 = __webpack_require__(47);
var AccessibilitySearchbutton_1 = __webpack_require__(48);
var AccessibilityShareQuery_1 = __webpack_require__(49);
var AccessibilitySimpleFilter_1 = __webpack_require__(50);
var AccessibilityResultList_1 = __webpack_require__(51);
var AccessibilitySort_1 = __webpack_require__(52);
var AccessibilityTab_1 = __webpack_require__(53);
var AccessibilityTimespanFacet_1 = __webpack_require__(54);
var AccessibilityYouTubeThumbnail_1 = __webpack_require__(55);
var initialHTMLSetup = function () {
    var body = jasmine['getGlobal']().document.body;
    if (!coveo_search_ui_1.$$(body).find('#jasmine-report')) {
        var jasmineReport = coveo_search_ui_1.$$('div', { id: 'jasmine-report' });
        coveo_search_ui_1.$$(body).append(jasmineReport.el);
    }
    if (!coveo_search_ui_1.$$(body).find('#search-page')) {
        var searchPage = coveo_search_ui_1.$$('div', { id: 'search-page' });
        coveo_search_ui_1.$$(body).append(searchPage.el);
    }
};
exports.setupPageBetweenTest = function () {
    jasmine.addMatchers(CustomMatcher_1.customMatcher);
    document.querySelector('#search-page').innerHTML = DefaultTestPage_1.defaultPage;
};
exports.teardownPageBetweenTest = function () {
    Coveo.nuke(coveo_search_ui_1.$$(document.body).find('.CoveoSearchInterface'));
    coveo_search_ui_1.$$(coveo_search_ui_1.$$(document.body).find('#search-page')).empty();
    var everything = coveo_search_ui_1.$$(document.body).children();
    everything.forEach(function (element) {
        if (element.id != 'jasmine-report' && element.id != 'search-page') {
            element.remove();
        }
    });
};
describe('Testing ...', function () {
    beforeAll(function (done) {
        initialHTMLSetup();
        Coveo.Logger.disable();
        Coveo.SearchEndpoint.configureSampleEndpointV2();
        done();
    });
    beforeEach(function () {
        exports.setupPageBetweenTest();
    });
    afterEach(function () {
        exports.teardownPageBetweenTest();
    });
    AccessibilityAdvancedSearch_1.AccessibilityAdvancedSearch();
    AccessibilityAggregate_1.AccessibilityAggregate();
    AccessibilityBackdrop_1.AccessibilityBackdrop();
    AccessibilityBadge_1.AccessibilityBadge();
    AccessibilityBreadcrumb_1.AccessibilityBreadcrumb();
    AccessibilityCardActionBar_1.AccessibilityCardActionBar();
    AccessibilityCardOverlay_1.AccessibilityCardOverlay();
    AccessibilityChatterLikedBy_1.AccessibilityChatterLikedBy();
    AccessibilityChatterPostAttachment_1.AccessibilityChatterPostAttachment();
    AccessibilityChatterPostedBy_1.AccessibilityChatterPostedBy();
    AccessibilityChatterTopic_1.AccessibilityChatterTopic();
    AccessibilityDidYouMean_1.AccessibilityDidYouMean();
    AccessibilityErrorReport_1.AccessibilityErrorReport();
    AccessibilityExcerpt_1.AccessibilityExcerpt();
    AccessibilityExportToExcel_1.AccessibilityExportToExcel();
    AccessibilityFacet_1.AccessibilityFacet();
    AccessibilityFacetRange_1.AccessibilityFacetRange();
    AccessibilityFacetSlider_1.AccessibilityFacetSlider();
    AccessibilityFieldTable_1.AccessibilityFieldTable();
    AccessibilityFieldValue_1.AccessibilityFieldValue();
    AccessibilityIcon_1.AccessibilityIcon();
    AccessibilityLogo_1.AccessibilityLogo();
    AccessibilityMatrix_1.AccessibilityMatrix();
    AccessibilityOmnibox_1.AccessibilityOmnibox();
    AccessibilityPager_1.AccessibilityPager();
    AccessibilityPreferencesPanel_1.AccessibilityPreferencesPanel();
    AccessibilityPrintableUri_1.AccessibilityPrintableUri();
    AccessibilityQuerybox_1.AccessibilityQuerybox();
    AccessibilityQueryDuration_1.AccessibilityQueryDuration();
    AccessibilityQuickview_1.AccessibilityQuickview();
    AccessibilityRecommendation_1.AccessibilityRecommendation();
    AccessibilityResultActionMenu_1.AccessibilityResultActionMenu();
    AccessibilityResultLayoutSelector_1.AccessibilityResultLayoutSelector();
    AccessibilityResultLink_1.AccessibilityResultLink();
    AccessibilityResultList_1.AccessibilityResultList();
    AccessibilityResultsPerPage_1.AccessibilityResultsPerPage();
    AccessibilitySearchbox_1.AccessibilitySearchbox();
    AccessibilitySearchbutton_1.AccessibilitySearchButton();
    AccessibilityShareQuery_1.AccessibilityShareQuery();
    AccessibilitySimpleFilter_1.AccessibilitySimpleFilter();
    AccessibilitySort_1.AccessibilitySort();
    AccessibilityTab_1.AccessibilityTab();
    AccessibilityTimespanFacet_1.AccessibilityTimespanFacet();
    AccessibilityYouTubeThumbnail_1.AccessibilityYouTubeThumbnail();
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityAdvancedSearch = function () {
    describe('AdvancedSearch', function () {
        var getAdvancedSearchElement = function () {
            return coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.AdvancedSearch) });
        };
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var advancedSearchElement, advancedSearch, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        advancedSearchElement = getAdvancedSearchElement();
                        Testing_1.getResultsColumn().appendChild(advancedSearchElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        advancedSearch = coveo_search_ui_1.get(advancedSearchElement.el);
                        advancedSearch.open();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityAggregate = function () {
    describe('Aggregate', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getResultsColumn().appendChild(coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Aggregate), 'data-field': '@objecttype' }).el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityBackdrop = function () {
    describe('Backdrop', function () {
        beforeEach(function () {
            Testing_1.addFieldEqualFilter('@filetype', 'youtubevideo');
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var backdrop, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        backdrop = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Backdrop),
                            'data-image-field': '@ytthumbnailurl',
                            'data-overlay-gradient': true,
                            'data-overlay-color': 'rgb(38, 62, 85)'
                        });
                        backdrop.el.style.width = '100px';
                        backdrop.el.style.height = '100px';
                        Testing_1.testResultElement(backdrop.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        // Give some time for images to load
                        return [4 /*yield*/, Testing_1.afterDelay(500)];
                    case 2:
                        // Give some time for images to load
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityBadge = function () {
    describe('Badge', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var badgeElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        badgeElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Badge),
                            'data-field': '@filetype'
                        });
                        Testing_1.testResultElement(badgeElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityBreadcrumb = function () {
    describe('Breadcrumb', function () {
        var getBreadcrumbElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Breadcrumb)
            });
        };
        it('should be accessible for facets', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var breadcrumbElement, facetElement, facet, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        breadcrumbElement = getBreadcrumbElement();
                        facetElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Facet),
                            'data-field': '@filetype'
                        });
                        Testing_1.getFacetColumn().appendChild(facetElement.el);
                        Testing_1.getResultsColumn().appendChild(breadcrumbElement.el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        facet = coveo_search_ui_1.get(facetElement.el);
                        facet.selectValue(facet.getDisplayedFacetValues()[0]);
                        coveo_search_ui_1.executeQuery(Testing_1.getRoot());
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible for advanced search', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var breadcrumbElement, advancedSearchElement, advancedSearch, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        breadcrumbElement = getBreadcrumbElement();
                        advancedSearchElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.AdvancedSearch)
                        });
                        Testing_1.getResultsColumn().appendChild(advancedSearchElement.el);
                        Testing_1.getResultsColumn().appendChild(breadcrumbElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        advancedSearch = coveo_search_ui_1.get(advancedSearchElement.el);
                        advancedSearch.inputs[0]['input'].setValue('test');
                        coveo_search_ui_1.executeQuery(Testing_1.getRoot());
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible for hidden query', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var breadcrumbElement, hiddenQueryElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        breadcrumbElement = getBreadcrumbElement();
                        hiddenQueryElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.HiddenQuery)
                        });
                        Testing_1.getResultsColumn().appendChild(breadcrumbElement.el);
                        Testing_1.getResultsColumn().appendChild(hiddenQueryElement.el);
                        return [4 /*yield*/, Testing_1.afterInit()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.state(Testing_1.getRoot(), 'hq', 'hidden query');
                        coveo_search_ui_1.state(Testing_1.getRoot(), 'hd', 'hidden description');
                        coveo_search_ui_1.executeQuery(Testing_1.getRoot());
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible for simple filter', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var breadcrumbElement, simpleFilterElement, simpleFilter, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        breadcrumbElement = getBreadcrumbElement();
                        simpleFilterElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.SimpleFilter),
                            'data-field': '@objecttype'
                        });
                        Testing_1.getResultsColumn().appendChild(breadcrumbElement.el);
                        Testing_1.getResultsColumn().appendChild(simpleFilterElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        simpleFilter = coveo_search_ui_1.get(simpleFilterElement.el);
                        simpleFilter.selectValue('Board', true);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityCardActionBar = function () {
    describe('CardActionBar', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var cardActionBarElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardActionBarElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.CardActionBar)
                        });
                        Testing_1.testResultElement(cardActionBarElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityCardOverlay = function () {
    describe('CardOverlay', function () {
        var getOverlayElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.CardOverlay)
            });
        };
        var getOverlayInstance = function () {
            var cardOverlayInDocument = coveo_search_ui_1.$$(Testing_1.getRoot()).find("." + coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.CardOverlay));
            return coveo_search_ui_1.get(cardOverlayInDocument);
        };
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var cardOverlay, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardOverlay = getOverlayElement();
                        Testing_1.testResultElement(cardOverlay.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when opened', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var cardOverlayElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardOverlayElement = getOverlayElement();
                        Testing_1.testResultElement(cardOverlayElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        getOverlayInstance().openOverlay();
                        return [4 /*yield*/, Testing_1.afterDelay(1000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('with a complex clickable field table element inside', function () {
            beforeEach(function () {
                Testing_1.addFieldEqualFilter('@filetype', 'youtubevideo');
                var cardOverlayElement = getOverlayElement();
                var fieldTableElement = coveo_search_ui_1.$$('table', {
                    className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.FieldTable),
                    'data-allow-minimization': 'false'
                }, coveo_search_ui_1.$$('tr', { 'data-field': '@author', 'data-caption': 'Author' }));
                var facetElement = coveo_search_ui_1.$$('div', {
                    className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Facet),
                    'data-field': '@author'
                });
                cardOverlayElement.append(fieldTableElement.el);
                Testing_1.getFacetColumn().appendChild(facetElement.el);
                Testing_1.testResultElement(cardOverlayElement.el);
            });
            it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                        case 1:
                            _a.sent();
                            getOverlayInstance().openOverlay();
                            return [4 /*yield*/, Testing_1.afterDelay(1000)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 3:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible when the clickable element is focused', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                        case 1:
                            _a.sent();
                            getOverlayInstance().openOverlay();
                            return [4 /*yield*/, Testing_1.afterDelay(1000)];
                        case 2:
                            _a.sent();
                            coveo_search_ui_1.$$(Testing_1.getRoot())
                                .find('span.coveo-accessible-button')
                                .focus();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 3:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
var underscore_1 = __webpack_require__(3);
exports.AccessibilityChatterLikedBy = function () {
    describe('ChatterLikedBy', function () {
        beforeEach(function () {
            Testing_1.addFieldEqualFilter('@objecttype', ['FeedItem', 'FeedComment']);
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var chatterLikedBy, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatterLikedBy = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ChatterLikedBy)
                        });
                        Testing_1.testResultElement(chatterLikedBy.el);
                        coveo_search_ui_1.$$(Testing_1.getRoot()).on('preprocessResults', function (e, args) {
                            args.results.results.forEach(function (res) {
                                var amountOfLike = Math.floor(Math.random() * 15);
                                var likedBy = underscore_1.map(underscore_1.range(0, amountOfLike), function (val) { return val; }).join(';') || null;
                                res.raw.sflikedby = likedBy;
                                res.raw.sflikedbyid = likedBy;
                                res.raw.sflikecount = amountOfLike;
                            });
                        });
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityChatterPostAttachment = function () {
    describe('ChatterPostAttachment', function () {
        beforeEach(function () {
            Testing_1.addFieldEqualFilter('@objecttype', ['FeedItem', 'FeedComment']);
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var chatterLikedBy, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatterLikedBy = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ChatterPostAttachment)
                        });
                        Testing_1.testResultElement(chatterLikedBy.el);
                        coveo_search_ui_1.$$(Testing_1.getRoot()).on('preprocessResults', function (e, args) {
                            args.results.results.forEach(function (res) {
                                res.raw.sfcontentversionid = Math.random().toString();
                            });
                        });
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityChatterPostedBy = function () {
    describe('ChatterPostedBy', function () {
        beforeEach(function () {
            Testing_1.addFieldEqualFilter('@objecttype', ['FeedItem', 'FeedComment']);
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var chatterPostedBy, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatterPostedBy = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ChatterPostedBy)
                        });
                        Testing_1.testResultElement(chatterPostedBy.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityChatterTopic = function () {
    describe('ChatterTopic', function () {
        beforeEach(function () {
            Testing_1.addFieldEqualFilter('@objecttype', ['FeedItem', 'FeedComment']);
            Testing_1.addQueryFilter('@coveochatterfeedtopics<>""');
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var chatterTopic, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chatterTopic = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ChatterTopic)
                        });
                        Testing_1.testResultElement(chatterTopic.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityDidYouMean = function () {
    describe('DidYouMean', function () {
        beforeEach(function () {
            Testing_1.addBasicExpression('testt');
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var didYouMeanElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        didYouMeanElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.DidYouMean),
                            'data-enable-auto-correction': false
                        });
                        Testing_1.getResultsColumn().appendChild(didYouMeanElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityErrorReport = function () {
    describe('ErrorReport', function () {
        var buildErrortReportElement = function () {
            var errorReportElement = coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ErrorReport)
            });
            Testing_1.getResultsColumn().appendChild(errorReportElement.el);
        };
        it('should be accessible when a query triggers an error', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // !BOOM
                        Testing_1.addQueryFilter('$qre()');
                        buildErrortReportElement();
                        return [4 /*yield*/, Testing_1.afterQueryError()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when a query does not trigger an error', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.addQueryFilter('@uri');
                        buildErrortReportElement();
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityExcerpt = function () {
    describe('Excerpt', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var excerptElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        excerptElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Excerpt)
                        });
                        Testing_1.testResultElement(excerptElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityExportToExcel = function () {
    describe('ExportToExcel', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var exportToExcelElement, settingsElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        exportToExcelElement = coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ExportToExcel) });
                        settingsElement = Testing_1.testSettingsElement(exportToExcelElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(settingsElement.el).open();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityFacet = function () {
    describe('Facet', function () {
        var getFacetElement = function () {
            return coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Facet), 'data-field': '@objecttype' });
        };
        beforeEach(function () {
            Testing_1.inDesktopMode();
        });
        afterEach(function () {
            Testing_1.resetMode();
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getFacetColumn().appendChild(getFacetElement().el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('search should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var facetElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        facetElement = getFacetElement();
                        Testing_1.getFacetColumn().appendChild(facetElement.el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(facetElement.el).facetSearch.focus();
                        return [4 /*yield*/, Testing_1.afterDelay(500)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should still be accessible when search has been opened', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var facetElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        facetElement = getFacetElement();
                        Testing_1.getFacetColumn().appendChild(facetElement.el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(facetElement.el).facetSearch.focus();
                        return [4 /*yield*/, Testing_1.afterDelay(500)];
                    case 2:
                        _a.sent();
                        coveo_search_ui_1.get(facetElement.el).facetSearch.dismissSearchResults();
                        return [4 /*yield*/, Testing_1.afterDelay(500)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 4:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('settings should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var facetElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        facetElement = getFacetElement();
                        Testing_1.getFacetColumn().appendChild(facetElement.el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        facetElement.find('.coveo-facet-header-settings').click();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityFacetRange = function () {
    describe('FacetRange', function () {
        var getFacetElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.FacetRange),
                'data-field': '@date',
                'data-date-field': true
            });
        };
        beforeEach(function () {
            Testing_1.inDesktopMode();
        });
        afterEach(function () {
            Testing_1.resetMode();
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getFacetColumn().appendChild(getFacetElement().el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityFacetSlider = function () {
    describe('FacetSlider', function () {
        var getFacetElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.FacetSlider),
                'data-field': '@date',
                'data-date-field': true,
                'data-graph-steps': 10
            });
        };
        beforeEach(function () {
            Testing_1.inDesktopMode();
        });
        afterEach(function () {
            Testing_1.resetMode();
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getFacetColumn().appendChild(getFacetElement().el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityFieldTable = function () {
    describe('FieldTable', function () {
        var tableContent = "\n    <tbody>\n      <tr data-field=\"@objecttype\" data-caption=\"Object type\">\n      </tr>\n      <tr data-field=\"@filetype\" data-caption=\"File type\">\n      </tr>\n    </tbody>";
        it('should be accessible when expanded', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var fieldTableElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldTableElement = coveo_search_ui_1.$$('table', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.FieldTable),
                            'data-allow-minimization': false
                        }, tableContent);
                        Testing_1.testResultElement(fieldTableElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when minimized', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var fieldTableElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldTableElement = coveo_search_ui_1.$$('table', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.FieldTable),
                            'data-allow-minimization': true
                        }, tableContent);
                        Testing_1.testResultElement(fieldTableElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityFieldValue = function () {
    describe('FieldValue', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var fieldValueElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldValueElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.FieldValue),
                            'data-field': '@filetype'
                        });
                        Testing_1.testResultElement(fieldValueElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible with an associated facet', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var fieldValueElement, facetElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldValueElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.FieldValue),
                            'data-field': '@filetype'
                        });
                        facetElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Facet),
                            'data-field': '@filetype'
                        });
                        Testing_1.getResultsColumn().appendChild(facetElement.el);
                        Testing_1.testResultElement(fieldValueElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityIcon = function () {
    describe('Icon', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var iconElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        iconElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Icon)
                        });
                        Testing_1.testResultElement(iconElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityLogo = function () {
    describe('Logo', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var logoElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logoElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Logo)
                        });
                        Testing_1.getResultsColumn().appendChild(logoElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityMatrix = function () {
    describe('Matrix', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var matrixElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        matrixElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Matrix),
                            'data-row-field': '@author',
                            'data-column-field': '@filetype',
                            'data-computed-field': '@size'
                        });
                        Testing_1.getResultsColumn().appendChild(matrixElement.el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityPager = function () {
    describe('Pager', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getResultsColumn().appendChild(coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Pager) }).el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityQuerybox = function () {
    describe('Querybox', function () {
        var queryBox;
        beforeEach(function () {
            queryBox = coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Querybox) }).el;
            Testing_1.getSearchSection().appendChild(queryBox);
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when focused', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        queryBox.querySelector('input').focus();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should be accessible when there's text", function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(queryBox).setText('test');
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customMatcher = {
    toBeAccessible: function (util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                var pass = actual.violations.length == 0;
                var message = actual.violations
                    .map(function (violation) {
                    var nodeSummary = violation.nodes.map(function (node) {
                        return "\n          " + node.html + "\n\n          " + node.failureSummary
                            .split('\n')
                            .map(function (line) { return line.trim(); })
                            .join('\n          ') + "\n            ";
                    });
                    return "\n          Impact: " + violation.impact + "\n\n          " + violation.description + "\n\n          " + violation.helpUrl + "\n          " + nodeSummary + "\n          ";
                })
                    .join('\n');
                return { pass: pass, message: message };
            }
        };
    }
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPage = "<div class=\"CoveoSearchInterface\">\n\n  <div class=\"coveo-tab-section\"></div>\n\n  <div class=\"coveo-search-section\"></div>\n\n  <div class=\"coveo-main-section\">\n\n    <div class=\"coveo-facet-column\"></div>\n\n    <div class=\"coveo-results-column\">\n\n      <div class=\"coveo-results-header\">\n\n        <div class=\"coveo-summary-section\"></div>\n\n        <div class=\"coveo-result-layout-section\"></div>\n        <div class=\"coveo-sort-section\"></div>\n\n      </div>\n    </div>\n  </div>\n</div>";


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
var KeyboardUtils_1 = __webpack_require__(36);
var underscore_1 = __webpack_require__(3);
exports.AccessibilityOmnibox = function () {
    describe('Omnibox', function () {
        var getOmniboxElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Omnibox)
            });
        };
        var showSuggestions = function (omniboxElement) {
            coveo_search_ui_1.get(omniboxElement.el)['magicBox'].inputManager.onfocus();
        };
        var setText = function (omniboxElement, text) {
            coveo_search_ui_1.get(omniboxElement.el).setText(text);
        };
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var omniboxElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        omniboxElement = getOmniboxElement();
                        Testing_1.getSearchSection().appendChild(omniboxElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible with standard query suggestion', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var omniboxElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        omniboxElement = getOmniboxElement();
                        Testing_1.getSearchSection().appendChild(omniboxElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        showSuggestions(omniboxElement);
                        return [4 /*yield*/, Testing_1.afterDelay(500)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('with keyboard navigation', function () {
            var input;
            var triggerEvent = function (key) {
                var event = new KeyboardEvent('keyup');
                Object.defineProperty(event, 'keyCode', {
                    get: function () {
                        return key;
                    }
                });
                Object.defineProperty(event, 'which', {
                    get: function () {
                        return key;
                    }
                });
                input.dispatchEvent(event);
            };
            var down = function () { return triggerEvent(KeyboardUtils_1.KEYBOARD.DOWN_ARROW); };
            var up = function () { return triggerEvent(KeyboardUtils_1.KEYBOARD.UP_ARROW); };
            beforeEach(function (done) { return __awaiter(_this, void 0, void 0, function () {
                var omniboxElement;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            omniboxElement = getOmniboxElement();
                            Testing_1.getSearchSection().appendChild(omniboxElement.el);
                            return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                        case 1:
                            _a.sent();
                            showSuggestions(omniboxElement);
                            return [4 /*yield*/, Testing_1.afterDelay(500)];
                        case 2:
                            _a.sent();
                            input = omniboxElement.find('input');
                            input.focus();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible when navigating using keyboard down arrow once', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            down();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 1:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible when navigating using keyboard up arrow once', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            up();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 1:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible when navigating using keyboard down arrow multiple time (wrapping around)', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            underscore_1.times(10, function () { return down(); });
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 1:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible when navigating using keyboard up arrow multiple time (wrapping around)', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            underscore_1.times(10, function () { return up(); });
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 1:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe('with disabled standard query suggestions', function () {
            var omniboxElement;
            beforeEach(function () {
                omniboxElement = getOmniboxElement();
                omniboxElement.setAttribute('data-enable-query-suggest-addon', 'false');
                Testing_1.getSearchSection().appendChild(omniboxElement.el);
            });
            it('should be accessible with facet suggestion', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var facetElement, axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            facetElement = coveo_search_ui_1.$$('div', {
                                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Facet),
                                'data-field': '@objecttype',
                                'data-include-in-omnibox': true
                            });
                            Testing_1.getResultsColumn().appendChild(facetElement.el);
                            return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                        case 1:
                            _a.sent();
                            setText(omniboxElement, 'm');
                            showSuggestions(omniboxElement);
                            return [4 /*yield*/, Testing_1.afterDelay(500)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 3:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible with analytics suggestions', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var analyticsSuggestionsElement, analyticsElement, axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            analyticsSuggestionsElement = coveo_search_ui_1.$$('div', {
                                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.AnalyticsSuggestions)
                            });
                            analyticsElement = coveo_search_ui_1.$$('div', {
                                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Analytics)
                            });
                            Testing_1.getResultsColumn().appendChild(analyticsSuggestionsElement.el);
                            Testing_1.getResultsColumn().appendChild(analyticsElement.el);
                            return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                        case 1:
                            _a.sent();
                            setText(omniboxElement, 'm');
                            showSuggestions(omniboxElement);
                            return [4 /*yield*/, Testing_1.afterDelay(1000)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 3:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible with omnibox result list', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var omniboxResultListElement, axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            omniboxResultListElement = coveo_search_ui_1.$$('div', {
                                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.OmniboxResultList)
                            });
                            Testing_1.getResultsColumn().appendChild(omniboxResultListElement.el);
                            return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                        case 1:
                            _a.sent();
                            setText(omniboxElement, 'm');
                            showSuggestions(omniboxElement);
                            return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 3:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(37);
var _ = __webpack_require__(3);
var KEYBOARD;
(function (KEYBOARD) {
    KEYBOARD[KEYBOARD["BACKSPACE"] = 8] = "BACKSPACE";
    KEYBOARD[KEYBOARD["TAB"] = 9] = "TAB";
    KEYBOARD[KEYBOARD["ENTER"] = 13] = "ENTER";
    KEYBOARD[KEYBOARD["SHIFT"] = 16] = "SHIFT";
    KEYBOARD[KEYBOARD["CTRL"] = 17] = "CTRL";
    KEYBOARD[KEYBOARD["ALT"] = 18] = "ALT";
    KEYBOARD[KEYBOARD["ESCAPE"] = 27] = "ESCAPE";
    KEYBOARD[KEYBOARD["SPACEBAR"] = 32] = "SPACEBAR";
    KEYBOARD[KEYBOARD["PAGE_UP"] = 33] = "PAGE_UP";
    KEYBOARD[KEYBOARD["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEYBOARD[KEYBOARD["HOME"] = 36] = "HOME";
    KEYBOARD[KEYBOARD["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEYBOARD[KEYBOARD["UP_ARROW"] = 38] = "UP_ARROW";
    KEYBOARD[KEYBOARD["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEYBOARD[KEYBOARD["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    KEYBOARD[KEYBOARD["INSERT"] = 45] = "INSERT";
    KEYBOARD[KEYBOARD["DELETE"] = 46] = "DELETE";
})(KEYBOARD = exports.KEYBOARD || (exports.KEYBOARD = {}));
var KeyboardUtils = /** @class */ (function () {
    function KeyboardUtils() {
    }
    KeyboardUtils.keysEqual = function (key, code) {
        if (!Utils_1.Utils.isNullOrUndefined(key.keyCode)) {
            return key.keyCode == code;
        }
        else if (!Utils_1.Utils.isNullOrUndefined(key.which)) {
            return key.which == code;
        }
        return false;
    };
    KeyboardUtils.isAllowedKeyForOmnibox = function (e) {
        var keycode = e.keyCode;
        var valid = KeyboardUtils.isNumberKeyPushed(keycode) ||
            (keycode == 32 || keycode == 13) || // spacebar & return key(s)
            KeyboardUtils.isLetterKeyPushed(keycode) ||
            (keycode > 95 && keycode < 112) || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 223) || // [\]' (in order)
            (keycode == KEYBOARD.BACKSPACE || keycode == KEYBOARD.DELETE) ||
            KeyboardUtils.isArrowKeyPushed(keycode);
        return valid;
    };
    KeyboardUtils.isAllowedKeyForSearchAsYouType = function (e) {
        return KeyboardUtils.isAllowedKeyForOmnibox(e) && !KeyboardUtils.isArrowKeyPushed(e.keyCode);
    };
    KeyboardUtils.isDeleteOrBackspace = function (e) {
        return KeyboardUtils.keysEqual(e, KEYBOARD.BACKSPACE) || KeyboardUtils.keysEqual(e, KEYBOARD.DELETE);
    };
    KeyboardUtils.isArrowKeyPushed = function (keycode) {
        return (keycode == KEYBOARD.LEFT_ARROW || keycode == KEYBOARD.UP_ARROW || keycode == KEYBOARD.RIGHT_ARROW || keycode == KEYBOARD.DOWN_ARROW);
    };
    KeyboardUtils.isNumberKeyPushed = function (keycode) {
        return keycode > 47 && keycode < 58;
    };
    KeyboardUtils.isLetterKeyPushed = function (keycode) {
        return keycode > 64 && keycode < 91;
    };
    // Return a keyboard event listener that only executes the function if certain keys are pressed.
    KeyboardUtils.keypressAction = function (keyCode, action) {
        return function (e) {
            var data = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                data[_i - 1] = arguments[_i];
            }
            if (e) {
                var eventCode = e.charCode || e.keyCode;
                if (eventCode) {
                    if (_.isArray(keyCode) && _.contains(keyCode, eventCode)) {
                        action(e);
                    }
                    else if (eventCode === keyCode) {
                        action(e);
                    }
                }
            }
        };
    };
    return KeyboardUtils;
}());
exports.KeyboardUtils = KeyboardUtils;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(3);
var isCoveoFieldRegex = /^@[a-zA-Z0-9_\.]+$/;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isUndefined = function (obj) {
        return typeof obj == 'undefined';
    };
    Utils.isNull = function (obj) {
        return obj === null;
    };
    Utils.isNullOrUndefined = function (obj) {
        return Utils.isUndefined(obj) || Utils.isNull(obj);
    };
    Utils.exists = function (obj) {
        return !Utils.isNullOrUndefined(obj);
    };
    Utils.toNotNullString = function (str) {
        return _.isString(str) ? str : '';
    };
    Utils.anyTypeToString = function (value) {
        return value ? value.toString() : '';
    };
    Utils.isNullOrEmptyString = function (str) {
        return Utils.isNullOrUndefined(str) || !Utils.isNonEmptyString(str);
    };
    Utils.isNonEmptyString = function (str) {
        return _.isString(str) && str !== '';
    };
    Utils.isEmptyString = function (str) {
        return !Utils.isNonEmptyString(str);
    };
    Utils.stringStartsWith = function (str, startWith) {
        return str.slice(0, startWith.length) == startWith;
    };
    Utils.isNonEmptyArray = function (obj) {
        return _.isArray(obj) && obj.length > 0;
    };
    Utils.isEmptyArray = function (obj) {
        return !Utils.isNonEmptyArray(obj);
    };
    Utils.isHtmlElement = function (obj) {
        if (window['HTMLElement'] != undefined) {
            return obj instanceof HTMLElement;
        }
        else {
            // IE 8 FIX
            return obj && obj.nodeType && obj.nodeType == 1;
        }
    };
    Utils.parseIntIfNotUndefined = function (str) {
        if (Utils.isNonEmptyString(str)) {
            return parseInt(str, 10);
        }
        else {
            return undefined;
        }
    };
    Utils.parseFloatIfNotUndefined = function (str) {
        var a = 't';
        a instanceof HTMLDocument;
        if (Utils.isNonEmptyString(str)) {
            return parseFloat(str);
        }
        else {
            return undefined;
        }
    };
    Utils.round = function (num, decimals) {
        return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    };
    Utils.parseBooleanIfNotUndefined = function (str) {
        if (Utils.isNonEmptyString(str)) {
            switch (str.toLowerCase()) {
                case 'true':
                case '1':
                case 'yes':
                    return true;
                case 'false':
                case '0':
                case 'no':
                    return false;
                default:
                    return undefined;
            }
        }
        else {
            return undefined;
        }
    };
    Utils.trim = function (value) {
        if (value == null) {
            return null;
        }
        return value.replace(/^\s+|\s+$/g, '');
    };
    Utils.encodeHTMLEntities = function (rawStr) {
        var ret = [];
        for (var i = rawStr.length - 1; i >= 0; i--) {
            if (/^[a-z0-9]/i.test(rawStr[i])) {
                ret.unshift(rawStr[i]);
            }
            else {
                ret.unshift(['&#', rawStr.charCodeAt(i), ';'].join(''));
            }
        }
        return ret.join('');
    };
    Utils.decodeHTMLEntities = function (rawString) {
        return rawString.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
    };
    Utils.safeEncodeURIComponent = function (rawString) {
        // yiiip...
        // Explanation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        // Solution : https://stackoverflow.com/a/17109094
        // Basically some unicode character (low-high surrogate) will throw an "invalid malformed URI" error when being encoded as an URI component, and the pair of character is incomplete.
        // This simply removes those pesky characters
        if (_.isString(rawString)) {
            return encodeURIComponent(rawString
                .replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])/g, '')
                .split('')
                .reverse()
                .join('')
                .replace(/[\uDC00-\uDFFF](?![\uD800-\uDBFF])/g, '')
                .split('')
                .reverse()
                .join(''));
        }
        else {
            // If the passed value is not a string, we probably don't want to do anything here...
            // The base browser function should be resilient enough
            return encodeURIComponent(rawString);
        }
    };
    Utils.arrayEqual = function (array1, array2, sameOrder) {
        if (sameOrder === void 0) { sameOrder = true; }
        if (sameOrder) {
            return _.isEqual(array1, array2);
        }
        else {
            var arrays_1 = [array1, array2];
            return _.all(arrays_1, function (array) {
                return array.length == arrays_1[0].length && _.difference(array, arrays_1[0]).length == 0;
            });
        }
    };
    Utils.objectEqual = function (obj1, obj2) {
        return _.isEqual(obj1, obj2);
    };
    Utils.isCoveoField = function (field) {
        return isCoveoFieldRegex.test(field);
    };
    Utils.escapeRegexCharacter = function (str) {
        var ret = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        return ret;
    };
    Utils.getCaseInsensitiveProperty = function (object, name) {
        // First try using a fast case-sensitive lookup
        var value = object[name];
        // Then try a fast case-sensitive lookup with lowercase name
        if (value == null) {
            var lowerCaseName_1 = name.toLowerCase();
            value = object[lowerCaseName_1];
            // Then try a slow scanning of all the properties
            if (value == null) {
                var matchingKey = _.find(_.keys(object), function (key) { return key.toLowerCase() == lowerCaseName_1; });
                if (matchingKey != null) {
                    value = object[matchingKey];
                }
            }
        }
        return value;
    };
    /**
     * Get the value of the first field from the array and defined in the result.
     *
     * @param result a QueryResult in which to ge the fieldvalue.
     * @param name One or multiple fieldNames to get the value.
     */
    Utils.getFirstAvailableFieldValue = function (result, fieldNames) {
        for (var i = 0; i < fieldNames.length; i++) {
            var value = Utils.getFieldValue(result, fieldNames[i]);
            if (value !== undefined) {
                return value;
            }
        }
        return undefined;
    };
    Utils.getFieldValue = function (result, name) {
        // Be as forgiving as possible about the field name, since we expect
        // user provided values.
        if (name == null) {
            return undefined;
        }
        name = Utils.trim(name);
        if (name[0] == '@') {
            name = name.substr(1);
        }
        if (name == '') {
            return undefined;
        }
        // At this point the name should be well formed
        if (!Utils.isCoveoField('@' + name)) {
            throw "Not a valid field : " + name;
        }
        // Handle namespace field values of the form sf.Foo.Bar
        var parts = name.split('.').reverse();
        var obj = result.raw;
        while (parts.length > 1) {
            obj = Utils.getCaseInsensitiveProperty(obj, parts.pop());
            if (Utils.isUndefined(obj)) {
                return undefined;
            }
        }
        var value = Utils.getCaseInsensitiveProperty(obj, parts[0]);
        // If still nothing, look at the root of the result
        if (value == null) {
            value = Utils.getCaseInsensitiveProperty(result, name);
        }
        return value;
    };
    Utils.throttle = function (func, wait, options, context, args) {
        if (options === void 0) { options = {}; }
        var result;
        var timeout = null;
        var previous = 0;
        var later = function () {
            previous = options.leading === false ? 0 : new Date().getTime();
            timeout = null;
            result = func.apply(context, args);
        };
        return function () {
            var now = new Date().getTime();
            if (!previous && options.leading === false) {
                previous = now;
            }
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            }
            else if (!timeout && options.trailing !== false) {
                timeout = window.setTimeout(later, remaining);
            }
            return result;
        };
    };
    Utils.extendDeep = function (target, src) {
        if (!target) {
            target = {};
        }
        var isArray = _.isArray(src);
        var toReturn = (isArray && []) || {};
        if (isArray) {
            target = target || [];
            toReturn = toReturn['concat'](target);
            _.each(src, function (e, i, obj) {
                if (typeof target[i] === 'undefined') {
                    toReturn[i] = e;
                }
                else if (typeof e === 'object' && !_.isElement(e)) {
                    toReturn[i] = Utils.extendDeep(target[i], e);
                }
                else {
                    if (target.indexOf(e) === -1) {
                        toReturn['push'](e);
                    }
                }
            });
        }
        else {
            if (target && typeof target === 'object' && !_.isElement(target)) {
                _.each(_.keys(target), function (key) {
                    toReturn[key] = target[key];
                });
            }
            _.each(_.keys(src), function (key) {
                if (typeof src[key] !== 'object' || !src[key]) {
                    toReturn[key] = src[key];
                }
                else {
                    if (!target[key]) {
                        toReturn[key] = src[key];
                    }
                    else {
                        toReturn[key] = Utils.extendDeep(target[key], src[key]);
                    }
                }
            });
        }
        return toReturn;
    };
    Utils.getQueryStringValue = function (key, queryString) {
        if (queryString === void 0) { queryString = window.location.search; }
        return queryString.replace(new RegExp('^(?:.*[&\\?]' + key.replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1');
    };
    Utils.isValidUrl = function (str) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(str);
    };
    Utils.debounce = function (func, wait) {
        var timeout;
        var stackTraceTimeout;
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (timeout == null) {
                timeout = window.setTimeout(function () {
                    timeout = null;
                }, wait);
                stackTraceTimeout = setTimeout(function () {
                    func.apply(_this, args);
                    stackTraceTimeout = null;
                });
            }
            else if (stackTraceTimeout == null) {
                clearTimeout(timeout);
                timeout = window.setTimeout(function () {
                    func.apply(_this, args);
                    timeout = null;
                }, wait);
            }
        };
    };
    Utils.readCookie = function (name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    };
    Utils.toDashCase = function (camelCased) {
        return camelCased.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase(); });
    };
    Utils.toCamelCase = function (dashCased) {
        return dashCased.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    };
    // Based on http://stackoverflow.com/a/8412989
    Utils.parseXml = function (xml) {
        if (typeof DOMParser != 'undefined') {
            return new DOMParser().parseFromString(xml, 'text/xml');
        }
        else if (typeof ActiveXObject != 'undefined' && new ActiveXObject('Microsoft.XMLDOM')) {
            var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
            xmlDoc.async = 'false';
            xmlDoc.loadXML(xml);
            return xmlDoc;
        }
        else {
            throw new Error('No XML parser found');
        }
    };
    Utils.copyObject = function (target, src) {
        var _this = this;
        _.each(_.keys(src), function (key) {
            if (typeof src[key] !== 'object' || !src[key]) {
                target[key] = src[key];
            }
            else if (!target[key]) {
                target[key] = src[key];
            }
            else {
                _this.copyObject(target[key], src[key]);
            }
        });
    };
    Utils.copyObjectAttributes = function (target, src, attributes) {
        var _this = this;
        _.each(_.keys(src), function (key) {
            if (_.contains(attributes, key)) {
                if (typeof src[key] !== 'object' || !src[key]) {
                    target[key] = src[key];
                }
                else if (!target[key]) {
                    target[key] = src[key];
                }
                else {
                    _this.copyObject(target[key], src[key]);
                }
            }
        });
    };
    Utils.concatWithoutDuplicate = function (firstArray, secondArray) {
        var diff = _.difference(secondArray, firstArray);
        if (diff && diff.length > 0) {
            firstArray = firstArray.concat(diff);
        }
        return firstArray;
    };
    Utils.differenceBetweenObjects = function (firstObject, secondObject) {
        var difference = {};
        var addDiff = function (first, second) {
            for (var key in first) {
                if (first[key] !== second[key] && difference[key] == null) {
                    difference[key] = first[key];
                }
            }
        };
        addDiff(firstObject, secondObject);
        addDiff(secondObject, firstObject);
        return difference;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityPreferencesPanel = function () {
    describe('PreferencesPanel', function () {
        it('should be accessible in settings menu', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var preferencesPanelElement, settingsElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        preferencesPanelElement = coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.PreferencesPanel) });
                        settingsElement = Testing_1.testSettingsElement(preferencesPanelElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(settingsElement.el).open();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when opened', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var preferencesPanelElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        preferencesPanelElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.PreferencesPanel)
                        }, "\n        <div class=\"CoveoResultsPreferences\"></div>\n        <div class=\"CoveoResultsFiltersPreferences\"></div>\n      ");
                        Testing_1.testSettingsElement(preferencesPanelElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(preferencesPanelElement.el).open();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityPrintableUri = function () {
    describe('PrintableUri', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var printableUriElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        printableUriElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.PrintableUri)
                        });
                        Testing_1.testResultElement(printableUriElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityQueryDuration = function () {
    describe('QueryDuration', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var queryDurationElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryDurationElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.QueryDuration)
                        });
                        Testing_1.getResultsColumn().appendChild(queryDurationElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityQuickview = function () {
    describe('Quickview', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var quickviewElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        quickviewElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Quickview)
                        });
                        Testing_1.testResultElement(quickviewElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when opened', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var quickviewElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        quickviewElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Quickview)
                        });
                        Testing_1.testResultElement(quickviewElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(document.querySelector("." + coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Quickview))).open();
                        return [4 /*yield*/, Testing_1.afterDelay(500)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityRecommendation = function () {
    describe('Recommendation', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var recommendationElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        recommendationElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Recommendation)
                        }, coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultList)
                        }));
                        Testing_1.getResultsColumn().appendChild(recommendationElement.el);
                        coveo_search_ui_1.initRecommendation(recommendationElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Testing_1.afterDelay(1000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 3:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityResultActionMenu = function () {
    describe('ResultActionMenu', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var resultActionMenuElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultActionMenuElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultActionsMenu)
                        }, coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Quickview)
                        }));
                        Testing_1.testResultElement(resultActionMenuElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityResultLayoutSelector = function () {
    describe('ResultLayoutSelector', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var resultLayoutSelectorElement, resultListAsListLayout, resultListAsCardLayout, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultLayoutSelectorElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultLayoutSelector)
                        });
                        resultListAsListLayout = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultList),
                            'data-layout': 'list'
                        });
                        resultListAsCardLayout = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultList),
                            'data-layout': 'card'
                        });
                        Testing_1.getResultsColumn().appendChild(resultLayoutSelectorElement.el);
                        Testing_1.getResultsColumn().appendChild(resultListAsListLayout.el);
                        Testing_1.getResultsColumn().appendChild(resultListAsCardLayout.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityResultLink = function () {
    describe('ResultLink', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var badgeElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        badgeElement = coveo_search_ui_1.$$('a', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultLink)
                        });
                        Testing_1.testResultElement(badgeElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityResultsPerPage = function () {
    describe('ResultsPerPage', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getResultsColumn().appendChild(coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultsPerPage) }).el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilitySearchbox = function () {
    describe('Searchbox', function () {
        var searchBoxElement;
        beforeEach(function () {
            searchBoxElement = coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Searchbox) }).el;
            Testing_1.getSearchSection().appendChild(searchBoxElement);
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when focused', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        searchBoxElement.querySelector('input').focus();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should be accessible when there's text", function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(searchBoxElement).searchbox.setText('test');
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilitySearchButton = function () {
    describe('SearchButton', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getSearchSection().appendChild(coveo_search_ui_1.$$('div', { className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.SearchButton) }).el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityShareQuery = function () {
    describe('ShareQuery', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var shareQueryElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareQueryElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ShareQuery)
                        });
                        Testing_1.testSettingsElement(shareQueryElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when opened', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var shareQueryElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareQueryElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ShareQuery)
                        });
                        Testing_1.testSettingsElement(shareQueryElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        coveo_search_ui_1.get(shareQueryElement.el).open();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilitySimpleFilter = function () {
    describe('SimpleFilter', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var simpleFilterElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        simpleFilterElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.SimpleFilter),
                            'data-field': '@filetype'
                        });
                        Testing_1.getResultsColumn().appendChild(simpleFilterElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityResultList = function () {
    describe('ResultList', function () {
        var getResultListStandardElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultList)
            });
        };
        var getResultListCardElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.ResultList),
                'data-layout': 'card'
            });
        };
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var resultListElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultListElement = getResultListStandardElement();
                        Testing_1.getResultsColumn().appendChild(resultListElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('with youtube files', function () {
            beforeEach(function () {
                Testing_1.addFieldEqualFilter('@filetype', 'youtubevideo');
            });
            it('should be accessible with default card template', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var resultListElement, axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            resultListElement = getResultListCardElement();
                            Testing_1.getResultsColumn().appendChild(resultListElement.el);
                            return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 2:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should be accessible with default list template', function (done) { return __awaiter(_this, void 0, void 0, function () {
                var resultListElement, axeResults;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            resultListElement = getResultListStandardElement();
                            Testing_1.getResultsColumn().appendChild(resultListElement.el);
                            return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                        case 2:
                            axeResults = _a.sent();
                            expect(axeResults).toBeAccessible();
                            done();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilitySort = function () {
    describe('Sort', function () {
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var sortElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sortElement = coveo_search_ui_1.$$('span', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Sort),
                            'data-sort-criteria': 'relevancy',
                            'data-caption': 'Relevance'
                        });
                        Testing_1.getSortSection().appendChild(sortElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible with multiple consecutive sort element', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var firstSortElement, secondSortElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstSortElement = coveo_search_ui_1.$$('span', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Sort),
                            'data-sort-criteria': 'relevancy',
                            'data-caption': 'Relevance'
                        });
                        secondSortElement = coveo_search_ui_1.$$('span', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Sort),
                            'data-sort-criteria': '@date ascending, @date descending',
                            'data-caption': 'Date'
                        });
                        Testing_1.getSortSection().appendChild(firstSortElement.el);
                        Testing_1.getSortSection().appendChild(secondSortElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityTab = function () {
    describe('Tab', function () {
        it('should be accessible when configured as an anchor', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var tab, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tab = coveo_search_ui_1.$$('a', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Tab),
                            'data-caption': 'All Content',
                            'data-id': 'All'
                        });
                        Testing_1.getTabSection().appendChild(tab.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when configured as a div', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var tab, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tab = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Tab),
                            'data-caption': 'All Content',
                            'data-id': 'All'
                        });
                        Testing_1.getTabSection().appendChild(tab.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be accessible when configured as a span', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var tab, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tab = coveo_search_ui_1.$$('span', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.Tab),
                            'data-caption': 'All Content',
                            'data-id': 'All'
                        });
                        Testing_1.getTabSection().appendChild(tab.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityTimespanFacet = function () {
    describe('FacetTimespan', function () {
        var getFacetElement = function () {
            return coveo_search_ui_1.$$('div', {
                className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.TimespanFacet)
            });
        };
        beforeEach(function () {
            Testing_1.inDesktopMode();
        });
        afterEach(function () {
            Testing_1.resetMode();
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Testing_1.getFacetColumn().appendChild(getFacetElement().el);
                        return [4 /*yield*/, Testing_1.afterDeferredQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axe = __webpack_require__(1);
var coveo_search_ui_1 = __webpack_require__(0);
var Testing_1 = __webpack_require__(2);
exports.AccessibilityYouTubeThumbnail = function () {
    describe('YouTubeThumbnail', function () {
        beforeEach(function () {
            Testing_1.addFieldEqualFilter('@filetype', 'youtubevideo');
        });
        it('should be accessible', function (done) { return __awaiter(_this, void 0, void 0, function () {
            var badgeElement, axeResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        badgeElement = coveo_search_ui_1.$$('div', {
                            className: coveo_search_ui_1.Component.computeCssClassName(coveo_search_ui_1.YouTubeThumbnail),
                            'data-field': '@filetype'
                        });
                        Testing_1.testResultElement(badgeElement.el);
                        return [4 /*yield*/, Testing_1.afterQuerySuccess()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, axe.run(Testing_1.getRoot())];
                    case 2:
                        axeResults = _a.sent();
                        expect(axeResults).toBeAccessible();
                        done();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};


/***/ })
/******/ ]);
//# sourceMappingURL=accessibilityTests.js.map