import InputTypes from "../constant/InputTypes";
import IInput from "../interfaces/IInput";
import _Style from "./Style";


class _Input {
    type:InputTypes;
    style:_Style;
    placeholder: string;
    element:any;
    value:string;
    
    constructor({type,style,placeholder,onChange}:IInput){
        this.type = type;
        this.style = style;
        this.placeholder = placeholder;
        this.render();
        this.event(onChange);
    }

    event(change:EventListener){
        switch (this.type){
            case InputTypes.Text:
                this.element.addEventListener('keyup',change);
                break;
            case InputTypes.Password:
                this.element.addEventListener('keyup',change);
                break;
            default:
                this.element.addEventListener('change',change);
        }
    }

    render(){
        let element = document.createElement('input');
        element.type = this.type;
        element.placeholder = this.placeholder;
        
        this.element = element;
        
        this.style.load(this.element);
    }
}

export default _Input;

export const Input = ({type,style,placeholder,onChange} : IInput) => new _Input({type,style,placeholder,onChange});