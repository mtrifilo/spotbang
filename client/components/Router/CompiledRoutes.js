'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Home = require('../Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Login = require('../Login/Login');

var _Login2 = _interopRequireDefault(_Login);

var _MemberPage = require('../MemberPage/MemberPage');

var _MemberPage2 = _interopRequireDefault(_MemberPage);

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _SetToken = require('../Login/SetToken');

var _SetToken2 = _interopRequireDefault(_SetToken);

var _AccountPage = require('../Account/AccountPage');

var _AccountPage2 = _interopRequireDefault(_AccountPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run `yarn run compile-routes` after altering any Routes in this file.
 *
 * CompiledRoutes.js is the transpiled version of this file
 * which gets used when the app renders on the server.
 */

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/t/:token', component: _SetToken2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/memberpage', component: _MemberPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/u/:username', component: _AccountPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
  );
};

exports.default = Routes;
