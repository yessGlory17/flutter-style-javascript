import IPicture from "../interfaces/IPicture";
import _Style from "./Style";

class _Picture {
    src:string;
    style:_Style;
    element:HTMLElement;

    constructor({src,style}:IPicture){
        this.src = src;
        this.style = style;
        this.render();
    }

    render(){
        let element = document.createElement('img');
        element.src = this.src;

        this.element = element;

        this.style.load(this.element);
        
        document.getElementById('app').appendChild(this.element);

    }
}
export default _Picture;

export const Picture=({src,style}:IPicture) => new _Picture({src,style});