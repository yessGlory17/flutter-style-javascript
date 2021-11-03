class _Style {
    constructor({ width, height, color, backgroundColor, borderRadius, border, boxShadow, display, flexDirection, alignContent }) {
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
export default _Style;
export const Style = ({ width, height, color, backgroundColor, borderRadius, border, display, flexDirection, alignContent }) => new _Style({ width, height, color, backgroundColor, borderRadius, border, display, flexDirection, alignContent });
