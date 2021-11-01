var _Text = (function () {
    function _Text(_a) {
        var content = _a.content, type = _a.type;
        this.content = content;
        this.type = type;
        console.log(content);
        this.render(this.type);
    }
    _Text.prototype.addEvent = function () {
        console.log('addEvent');
    };
    _Text.prototype.render = function (type) {
        var element = document.createElement(type);
        element.textContent = this.content;
        document.getElementById('app').append(element);
        this.element = element;
        console.log('Rendered Text element 🚀');
    };
    return _Text;
}());
export default _Text;
export var Text = function (_a) {
    var content = _a.content, type = _a.type;
    var element = new _Text({ content: content, type: type });
    return element;
};
