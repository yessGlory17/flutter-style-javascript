import DisplayTypes from "../constant/DisplayTypes";
import FlexDirectionTypes from "../constant/FlexDirectionTypes";

interface IStyle {
    width?:string,
    height?:string,
    color?:string,
    backgroundColor?:string,
    borderRadius?:string,
    border?:string,
    boxShadow?:string,
    display:DisplayTypes,
    flexDirection:FlexDirectionTypes,
}

export default IStyle;