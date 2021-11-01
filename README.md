# flutter-style-javascript


## Usage

- Create a HTML file and put body tag id 'app'
- Create Javscript file and connect HTML file ('<script src="main.js" tpye="module"></script>')
- Paste fsjs.min.js cdn

### CDN

``` js
<script src="https://cdn.jsdelivr.net/gh/yessGlory17/flutter-style-javascript/fsjs.min.js"></script>

```

### Example

```js 

import {Text, TextTypes,Button,Div,Style} from './fsjs.js';

Div({
    childs:[
        Text({
        content:'Heeey',
        type:TextTypes.H1
        }),
        Button({
            text: Text({content:'press',type:TextTypes.H1}),
            onClick:()=>console.log('hello world'),
            style:Style({
                backgroundColor:'green'
            })
        })
    ],
    style:Style({
        width:'300px',
        height:'200px',
        backgroundColor:'red'
    })
})

```

Output

![Example 1](/ss/ss1.png)

## Components

- [x] Div
- [x] Button
- [x] Text (H1,H2,H3,H4,H5,H6,p)
- [x] Style (width,height,border,border-radius,background-color)
- [ ] Image
- [ ] Input (text, file, password, etc.)
- [ ] Navbar


## State
- [ ] State Pattern Implementation



