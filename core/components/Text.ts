import Widget from "../lib/Widget";
import TextTypes from '../constant/TextTypes';
import {ITextParameters} from "../interfaces/Interfaces";


class _Text {

    content:string;
    type:TextTypes;
    element: HTMLHeadingElement;
    constructor({content,type}:ITextParameters){
        this.content = content;
        this.type = type;

        console.log(content);
        this.render(this.type);
    }

    addEvent():void{
        console.log('addEvent');
    }

    render(type:TextTypes):void {
        let element = document.createElement(type);
        element.textContent = this.content;
        document.getElementById('app').append(element);
        this.element = element;
        console.log('Rendered Text element 🚀');  
    }

}

export default _Text;

//type Text = _Text;
export const Text = ({content, type}:ITextParameters) => {let element = new _Text({content,type}); return element;}