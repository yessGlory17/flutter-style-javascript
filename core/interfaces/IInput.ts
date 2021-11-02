import _Style from "../components/Style";
import InputTypes from "../constant/InputTypes";

interface IInput {
  type:InputTypes;
  style?:_Style;
  placeholder?: string;
  onChange?:EventListener;
}

export default IInput;