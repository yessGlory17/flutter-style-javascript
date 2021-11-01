import TextTypes from '../constant/TextTypes';

interface Widget{
    addEvent()  : void;
    render<Type> (type:Type) : void;
}

export default Widget;