'use strict';

var _jsxWrapper = function _jsxWrapper(func, args) {
  return {
    __jsxDOMWrapper: true,
    func: func,
    args: args
  };
};

var _span$wrapper = function _span$wrapper(_foo) {
  elementOpen('span', null, null, 'foo', _foo);
  text('one');
  return elementClose('span');
},
    _span$statics = ['foo', 'My bar is: ' + bar],
    _span$wrapper2 = function _span$wrapper2() {
  elementOpen('span', '__uuid__0__', _span$statics);
  text('two');
  return elementClose('span');
},
    _span$statics2 = ['foo', 'My bar is: ' + bar],
    _span$wrapper3 = function _span$wrapper3() {
  elementOpen('span', '__uuid__1__', _span$statics2);
  text('three');
  return elementClose('span');
};

function renderMain() {
  function renderState(_ref) {
    var bar = _ref.bar;

    return [_jsxWrapper(_span$wrapper, ['My bar is: ' + bar]), _jsxWrapper(_span$wrapper2), _jsxWrapper(_span$wrapper3)];
  }

  var state = {
    bar: 'Hello World'
  };

  return renderState(state);
}