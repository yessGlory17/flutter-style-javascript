import AlignContentTypes from "../constant/style/AlignContentTypes";
import DisplayTypes from "../constant/style/DisplayTypes";
import FlexDirectionTypes from "../constant/style/FlexDirectionTypes";

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
    alignContent:AlignContentTypes,
}

export default IStyle;