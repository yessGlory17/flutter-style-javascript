var _Button = (function () {
    function _Button(_a) {
        var width = _a.width, height = _a.height, text = _a.text, onClick = _a.onClick, style = _a.style;
        console.log("Button oluşturuldu");
        this.text = text;
        console.log(style);
        this.id = "test-button";
        this.render(this.text, style);
        this.addEvent(onClick);
    }
    _Button.prototype.addEvent = function (click) {
        this.element.addEventListener("click", click);
    };
    _Button.prototype.render = function (text, style) {
        var element = document.createElement("button");
        this.element = element;
        style.load(this.element);
        this.element.appendChild(text.element);
        document.getElementById("app").appendChild(element);
    };
    return _Button;
}());
export default _Button;
export var Button = function (_a) {
    var width = _a.width, height = _a.height, text = _a.text, onClick = _a.onClick, style = _a.style;
    return new _Button({ width: width, height: height, text: text, onClick: onClick, style: style });
};
