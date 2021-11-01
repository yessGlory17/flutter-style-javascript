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
export default _Text;
export const Text = ({ content, type }) => { let element = new _Text({ content, type }); return element; };
