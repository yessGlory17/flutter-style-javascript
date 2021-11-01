class _Style {
    constructor({ width, height, color, backgroundColor, borderRadius, border, boxShadow, display, flexDirection }) {
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
    load(parent) {
        parent.style.color = this.color;
        parent.style.backgroundColor = this.backgroundColor;
        parent.style.width = this.width;
        parent.style.height = this.height;
        parent.style.borderRadius = this.borderRadius;
        parent.style.border = this.border;
        parent.style.boxShadow = this.boxShadow;
        parent.style.display = this.display;
        parent.style.flexDirection = this.flexDirection;
    }
}
const Style = ({ width, height, color, backgroundColor, borderRadius, border, display, flexDirection }) => new _Style({ width, height, color, backgroundColor, borderRadius, border, display, flexDirection });
class _Button {
    constructor({ width, height, text, onClick, style }) {
        console.log("Button oluşturuldu");
        this.text = text;
        console.log(style);
        this.id = "test-button";
        this.render(this.text, style);
        this.addEvent(onClick);
    }
    addEvent(click) {
        this.element.addEventListener("click", click);
    }
    render(text, style) {
        let element = document.createElement("button");
        this.element = element;
        style.load(this.element);
        this.element.appendChild(text.element);
        document.getElementById("app").appendChild(element);
    }
}
const Button = ({ width, height, text, onClick, style, }) => new _Button({ width, height, text, onClick, style });
class _Div {
    constructor({ childs, style }) {
        this.childs = childs;
        this.style = style;
        this.render(childs, style);
    }
    render(childs, style) {
        let element = document.createElement("div");
        this.element = element;
        style.load(this.element);
        for (let i = 0; i < childs.length; i++) {
            this.element.appendChild(childs[i].element);
        }
        document.getElementById("app").appendChild(this.element);
    }
}
const Div = ({ childs, style }) => new _Div({ childs, style });
class _Text {
    constructor({ content, type }) {
        this.content = content;
        this.type = type;
        console.log(content);
        this.render(this.type);
    }
    addEvent() {
        console.log('addEvent');
    }
    render(type) {
        let element = document.createElement(type);
        element.textContent = this.content;
        document.getElementById('app').append(element);
        this.element = element;
        console.log('Rendered Text element 🚀');
    }
}
const Text = ({ content, type }) => { let element = new _Text({ content, type }); return element; };
var FlexDirectionTypes;
(function (FlexDirectionTypes) {
    FlexDirectionTypes["Row"] = "row";
    FlexDirectionTypes["Column"] = "column";
})(FlexDirectionTypes || (FlexDirectionTypes = {}));

var DisplayTypes;
(function (DisplayTypes) {
    DisplayTypes["None"] = "none";
    DisplayTypes["Inline"] = "inline";
    DisplayTypes["Block"] = "block";
    DisplayTypes["InlineBlock"] = "inline-block";
})(DisplayTypes || (DisplayTypes = {}));
var FlexDirectionTypes;
(function (FlexDirectionTypes) {
    FlexDirectionTypes["ROW"] = "row";
    FlexDirectionTypes["COLUMN"] = "column";
})(FlexDirectionTypes || (FlexDirectionTypes = {}));
var TextTypes;
(function (TextTypes) {
    TextTypes["H1"] = "h1";
    TextTypes["H2"] = "h2";
    TextTypes["H3"] = "h3";
    TextTypes["H4"] = "h4";
    TextTypes["H5"] = "h5";
    TextTypes["H6"] = "h6";
    TextTypes["Paragraph"] = "p";
})(TextTypes || (TextTypes = {}));
export { Text, TextTypes, Button, Style, Div, DisplayTypes, FlexDirectionTypes };
