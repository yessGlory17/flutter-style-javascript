import AlignContentTypes from "../constant/style/AlignContentTypes";
import AlignItemsTypes from "../constant/style/AlignItems";
import DisplayTypes from "../constant/style/DisplayTypes";
import FlexDirectionTypes from "../constant/style/FlexDirectionTypes";

interface IStyle {
    width?:string,
    height?:string,
    color?:string,
    backgroundColor?:string,
    borderRadius?:string,
    border?:string,
    borderStyle?:string,
    boxShadow?:string,
    display?:DisplayTypes,
    flexDirection?:FlexDirectionTypes,
    alignContent?:AlignContentTypes,
    alignItems?:AlignItemsTypes,
    font?:string,
    fontFamily?:string,
    fontStyle?:string,
    fontSize?:string,
    fontWeigth?:string,
    position?:string,
    zIndex?:string
}

export default IStyle;