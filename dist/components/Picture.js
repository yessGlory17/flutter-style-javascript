class _Picture {
    constructor({ src, style }) {
        this.src = src;
        this.style = style;
        this.render();
    }
    render() {
        let element = document.createElement('img');
        element.src = this.src;
        this.element = element;
        this.style.load(this.element);
        document.getElementById('app').appendChild(this.element);
    }
}
export default _Picture;
export const Picture = ({ src, style }) => new _Picture({ src, style });
