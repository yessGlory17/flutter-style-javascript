import _Text from "../components/Text";
import IStyle from './IStyle';
import Style from '../components/Style';
import _Style from '../components/Style';

interface IButtonParameters {
    width:number,
    height:number,
    text:_Text,
    onClick?:EventListener,
    style:_Style,
}
export default IButtonParameters;