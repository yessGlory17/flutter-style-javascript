var _Div = (function () {
    function _Div(_a) {
        var childs = _a.childs, style = _a.style;
        this.childs = childs;
        this.style = style;
        this.render(childs, style);
    }
    _Div.prototype.render = function (childs, style) {
        var element = document.createElement("div");
        this.element = element;
        style.load(this.element);
        for (var i = 0; i < childs.length; i++) {
            this.element.appendChild(childs[i].element);
        }
        document.getElementById("app").appendChild(this.element);
    };
    return _Div;
}());
export default _Div;
export var Div = function (_a) {
    var childs = _a.childs, style = _a.style;
    return new _Div({ childs: childs, style: style });
};
