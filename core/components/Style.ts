import AlignContentTypes from "../constant/style/AlignContentTypes";
import AlignItemsTypes from "../constant/style/AlignItems";
import DisplayTypes from "../constant/style/DisplayTypes";
import FlexDirectionTypes from "../constant/style/FlexDirectionTypes";
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
  alignContent:AlignContentTypes;
  alignItems:AlignItemsTypes;
  borderStyle:string;
  font:string;
  fontFamily:string;
  fontWeight:string;
  fontStyle:string;
  fontSize:string;
  position:string;
  zIndex:string;

  constructor({ width,height,color, backgroundColor,borderRadius,border,boxShadow,display,flexDirection,alignContent,alignItems,borderStyle,font,fontFamily,fontWeigth,fontStyle,fontSize,position,zIndex }: IStyle) {
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.width = width;
    this.height = height;
    this.border = border;
    this.borderRadius = borderRadius;
    this.boxShadow = boxShadow;
    this.display = display;
    this.flexDirection = flexDirection;
    this.alignContent = alignContent;
    this.alignItems = alignItems;
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
export const Style = ({width,height, color, backgroundColor,borderRadius,border,display,flexDirection, alignContent,alignItems,borderStyle,font,fontFamily,fontWeigth,fontStyle,fontSize,position,zIndex }: IStyle) =>
  new _Style({width,height, color, backgroundColor,borderRadius,border,display,flexDirection, alignContent,alignItems,borderStyle,font,fontFamily,fontWeigth,fontStyle,fontSize,position,zIndex });
