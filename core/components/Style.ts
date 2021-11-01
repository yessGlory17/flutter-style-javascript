import DisplayTypes from "../constant/DisplayTypes";
import FlexDirectionTypes from "../constant/FlexDirectionTypes";
import IStyle from "../interfaces/IStyle";
class _Style {
  element: HTMLStyleElement;
  color:string;
  backgroundColor:string;
  width:string;
  height:string;
  borderRadius:string;
  border:string;
  boxShadow:string;
  display:DisplayTypes;
  flexDirection:FlexDirectionTypes;

  constructor({ width,height,color, backgroundColor,borderRadius,border,boxShadow,display,flexDirection }: IStyle) {
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

  load(parent:HTMLElement) {
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
export const Style = ({width,height, color, backgroundColor,borderRadius,border,display,flexDirection }: IStyle) =>
  new _Style({width,height, color, backgroundColor,borderRadius,border,display,flexDirection });
