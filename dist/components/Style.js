var _Style = (function () {
    function _Style(_a) {
        var width = _a.width, height = _a.height, color = _a.color, backgroundColor = _a.backgroundColor, borderRadius = _a.borderRadius, border = _a.border, boxShadow = _a.boxShadow, display = _a.display, flexDirection = _a.flexDirection;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.width = width;
        this.height = height;
        this.border = border;
        this.borderRadius = borderRadius;
        this.boxShadow = boxShadow;
        this.display = display;
        this.flexDirection = flexDirection;
    }
    _Style.prototype.load = function (parent) {
        parent.style.color = this.color;
        parent.style.backgroundColor = this.backgroundColor;
        parent.style.width = this.width;
        parent.style.height = this.height;
        parent.style.borderRadius = this.borderRadius;
        parent.style.border = this.border;
        parent.style.boxShadow = this.boxShadow;
        parent.style.display = this.display;
        parent.style.flexDirection = this.flexDirection;
    };
    return _Style;
}());
export default _Style;
export var Style = function (_a) {
    var width = _a.width, height = _a.height, color = _a.color, backgroundColor = _a.backgroundColor, borderRadius = _a.borderRadius, border = _a.border, display = _a.display, flexDirection = _a.flexDirection;
    return new _Style({ width: width, height: height, color: color, backgroundColor: backgroundColor, borderRadius: borderRadius, border: border, display: display, flexDirection: flexDirection });
};
