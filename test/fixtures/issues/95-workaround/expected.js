'use strict';

var _jsxWrapper = function _jsxWrapper(func, args) {
  return {
    __jsxDOMWrapper: true,
    func: func,
    args: args
  };
};

var _templateObject = _taggedTemplateLiteral(['My bar is: ', ''], ['My bar is: ', '']);

var _span$wrapper = function _span$wrapper(_workAround) {
  elementOpen('span', null, null, 'foo', _workAround);
  text('one');
  return elementClose('span');
},
    _span$wrapper2 = function _span$wrapper2(_foo) {
  elementOpen('span', null, null, 'foo', _foo);
  text('two');
  return elementClose('span');
},
    _span$wrapper3 = function _span$wrapper3(_foo2) {
  elementOpen('span', null, null, 'foo', _foo2);
  text('three');
  return elementClose('span');
};

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function renderMain() {
  function renderState(_ref) {
    var bar = _ref.bar;

    var workAround = function workAround(t) {
      return t;
    };
    return [_jsxWrapper(_span$wrapper, [workAround(_templateObject, bar)]), _jsxWrapper(_span$wrapper2, [workAround(_templateObject, bar)]), _jsxWrapper(_span$wrapper3, [workAround(_templateObject, bar)])];
  }

  var state = {
    bar: 'Hello World'
  };

  return renderState(state);
}