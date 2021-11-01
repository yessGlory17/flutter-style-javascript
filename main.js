// import {
//   Button,
//   Text,
//   TextTypes,
//   Style,
//   Div,
//   DisplayTypes,
//   FlexDirectionTypes,
// } from "./dist/FlutterStyleJavascript.js";

// let counter = 3;

// Text({
//   content: "Başlık",
//   type: TextTypes.H1,
// });
// //Counter Text
// let counterText = Text({
//   content: counter.toString(),
//   type: TextTypes.H1,
// });

// Div({
//   childs: [
//     Button({
//       text: Text({ content: "-", type: TextTypes.Paragraph }),
//       onClick: (e) => {
//         counter--;
//         console.log(`Hello World! ${counter}`);
//         console.log(e.target.parentNode);
//         counterText.element.textContent = counter.toString();
//         console.log(counterText);
//       },
//       style: Style({
//         width: "100px",
//         height: "50px",
//         color: "green",
//         backgroundColor: "red",
//         border: "none",
//         borderRadius: "50px",
//         boxShadow: "0px 0px 10px",
//       }),
//     }),
//     Button({
//       text: Text({ content: "+", type: TextTypes.Paragraph }),
//       onClick: (e) => {
//         counter++;
//         console.log(`Hello World! ${counter}`);
//         console.log(e.target.parentNode);
//         counterText.element.textContent = counter.toString();
//         console.log(counterText);
//         console.log(FlexDirectionTypes.FLEX)
//       },
//       style: Style({
//         width: "100px",
//         height: "50px",
//         color: "red",
//         backgroundColor: "green",
//       }),
//     }),
//     Div({
//       childs: [
//         Div({
//           childs: [],
//           style: Style({
//             width: "50px",
//             height: "50px",
//             backgroundColor: "yellow",
//           }),
//         }),
//       ],
//       style: Style({
//         width: "100px",
//         height: "100px",
//         backgroundColor: "purple",
//       }),
//     }),
//   ],
//   style: Style({
//     width: "100%",
//     height: "300px",
//     backgroundColor: "cyan",
//     display: DisplayTypes.Flex,
//     flexDirection: FlexDirectionTypes.Row,
//   }),
// });


// import {
//     Text, TextTypes,Button,Div,Style,
// } from './fsjs.js';

// let header = Text({
//     content:'Heeey',
//     type:TextTypes.H1
// });

// Div({
//     childs:[
//         header,
//         Button({
//             text: Text({content:'tıkla',type:TextTypes.H1}),
//             onClick:()=>console.log('hello world'),
//             style:Style({
//                 backgroundColor:'green'
//             })
//         })
//     ],
//     style:Style({
//         width:'300px',
//         height:'200px',
//         backgroundColor:'red'
//     })
// })

