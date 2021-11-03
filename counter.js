import {
  Div,
  Style,
  Picture,
  Input,
  InputTypes,
  DisplayTypes,
  Text,
  TextTypes,
  FlexDirectionTypes,
  Button,
} from "./dist/FlutterStyleJavascript.js";




const counterText = Text({
    content:'0',
    type:TextTypes.H3,
});



const buttons = Div({
    childs:[
        Button({
            text:Text({content:'+',type:TextTypes.H3}),
            onClick:()=>{
                counterText.element.textContent = (parseInt(counterText.element.textContent)+1).toString() 
            },
            style:Style({
                width:'100px',
                height:'30px',
                backgroundColor:'#26de81',
                border:'none',
            })
        }),
        Button({
            text:Text({content:'-',type:TextTypes.H3}),
            onClick:()=>{
                counterText.element.textContent = (parseInt(counterText.element.textContent)-1).toString() 
            },
            style:Style({
                width:'100px',
                height:'30px',
                backgroundColor:'#eb3b5a',
                border:'none',
            })
        })
    ],
    style:Style({
        display:DisplayTypes.Flex,
        flexDirection:FlexDirectionTypes.Row,
    })
})

Div({
    childs:[
        counterText,
        buttons
    ],
    style:Style({
        width:'100vw',
        height:'100vh',
        backgroundColor:'#fd9644',
        display:DisplayTypes.Flex,
        flexDirection:FlexDirectionTypes.Column,
    })
})