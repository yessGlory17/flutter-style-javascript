# flutter-style-javascript

 This project is for experimental purposes only.

## Usage

- Create a HTML file and put body tag id 'app'
- Create Javscript file and connect HTML file ('<script src="main.js" type="module"></script>')
- import fsjs.minjs with cdn
### CDN

``` 
    https://cdn.jsdelivr.net/gh/yessGlory17/flutter-style-javascript/fsjs.min.js
```

### Example

```js 

import {
    Div,
    Button,
    Text,
    TextTypes,
    Style
} from 'https://cdn.jsdelivr.net/gh/yessGlory17/flutter-style-javascript/fsjs.min.js';

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
- [x] Picture
- [ ] Input (text, file, password, etc.)
- [ ] Navbar
- [ ] Bottom Navigation Bar
- [ ] Animation

## Library
- [ ] Main Widget Class
- [ ] Statefull Widget
- [ ] Stateless Widget


## State
- [ ] State Pattern Implementation


## Examples
- [ ] Counter App
- [ ] CRUD App







