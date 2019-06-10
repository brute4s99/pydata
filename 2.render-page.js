exports.ids = [2];
exports.modules = {

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(17);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _config = __webpack_require__(450);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = function styles(theme) {
	  var _share, _label;
	
	  return {
	    share: (_share = {
	      display: "flex",
	      flexDirection: "column",
	      justifyContent: "center",
	      alignItems: "center",
	      padding: "1em 0 0"
	    }, _share["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      flexDirection: "row"
	    }, _share),
	    links: {
	      display: "flex",
	      flexDirection: "row",
	      "& .SocialMediaShareButton": {
	        margin: "0 .8em",
	        cursor: "pointer"
	      }
	    },
	    label: (_label = {
	      fontSize: "1.2em",
	      margin: "0 1em 1em"
	    }, _label["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 1em"
	    }, _label)
	  };
	};
	
	var PostShare = function (_React$Component) {
	  _inherits(PostShare, _React$Component);
	
	  function PostShare() {
	    _classCallCheck(this, PostShare);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  PostShare.prototype.render = function render() {
	    var _props = this.props,
	        post = _props.post,
	        classes = _props.classes,
	        slug = _props.slug;
	    var excerpt = post.excerpt,
	        frontmatter = post.frontmatter;
	    var title = frontmatter.title;
	
	    var url = _config2.default.siteUrl + slug;
	
	    var iconSize = 36;
	    var filter = function filter(count) {
	      return count > 0 ? count : "";
	    };
	
	    return _react2.default.createElement(
	      "div",
	      { className: classes.share },
	      _react2.default.createElement(
	        "span",
	        { className: classes.label },
	        _react2.default.createElement(
	          "a",
	          { href: url },
	          "SHARE "
	        ),
	        " "
	      )
	    );
	  };
	
	  return PostShare;
	}(_react2.default.Component);
	
	PostShare.propTypes = {
	  post: _propTypes2.default.object.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  slug: _propTypes2.default.string.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(PostShare);
	module.exports = exports["default"];

/***/ })

};;
//# sourceMappingURL=2.render-page.js.map