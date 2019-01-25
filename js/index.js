var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var layout = _.range(0, 16).map(function (n) {
    var row = Math.floor(n / 4);
    var col = n % 4;
    return [80 * col, 80 * row];
});var
APP = function (_React$Component) {_inherits(APP, _React$Component);
    function APP(props) {_classCallCheck(this, APP);var _this = _possibleConstructorReturn(this, (APP.__proto__ || Object.getPrototypeOf(APP)).call(this,
        props));
        _this.state = {
            positions: _.shuffle(_.range(0, 16)) };return _this;

    }_createClass(APP, [{ key: "updatePosition", value: function updatePosition(
        index) {var
            positions = this.state.positions;
            var emptyIndex = positions.indexOf(0);
            var targetIndex = positions.indexOf(index);
            var dif = Math.abs(targetIndex - emptyIndex);
            if (dif == 1 || dif == 4) {
                positions[emptyIndex] = index;
                positions[targetIndex] = 0;
                this.setState({ positions: positions });
                var win = _.every(positions, function (value, index, array) {
                    value = value || 16;
                    return index === 0 || parseInt(array[index - 1]) <= parseInt(value);
                });
                if (win) {
                    window.alert('U Win!!!');
                }
            }
        } }, { key: "render", value: function render()
        {var _this2 = this;
            return React.createElement("div", { className: "game" },
                this.state.positions.map(function (i, key) {
                    var cellClass = key ? "cell" : 'empty cell';var _layout$state$positio = _slicedToArray(
                    layout[_this2.state.positions.indexOf(key)], 2),x = _layout$state$positio[0],y = _layout$state$positio[1];
                    return React.createElement("div", { key: key,
                            className: cellClass,
                            onClick: _this2.updatePosition.bind(_this2, key),
                            style: { transform: "translate3d(" + x + "px," + y + "px,0) scale(1.1)" } }, key);
                }));

        } }]);return APP;}(React.Component);

ReactDOM.render(React.createElement(APP, null), document.getElementById('main'));