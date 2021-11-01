import Widget from "../lib/Widget";
import _Text from "./Text";
import { IButtonParameters } from "../interfaces/Interfaces";
import IStyle from "../interfaces/IStyle";
import { Style } from "./Style";
import _Style from "./Style";

class _Button {
  text: _Text;
  element: HTMLButtonElement;
  id: string;
  style: _Style;

  constructor({ width, height, text, onClick, style }: IButtonParameters) {
    console.log("Button oluşturuldu");

    this.text = text;
    console.log(style);
    this.id = "test-button";

    this.render(this.text, style);
    this.addEvent(onClick);
  }

  addEvent(click: EventListener): void {
    this.element.addEventListener("click", click);
  }

  render(text: _Text, style: _Style): void {
    let element = document.createElement("button");

    this.element = element;

    style.load(this.element);

    this.element.appendChild(text.element);
    document.getElementById("app").appendChild(element);
  }
}

export default _Button;

export const Button = ({
  width,
  height,
  text,
  onClick,
  style,
}: IButtonParameters) => new _Button({ width, height, text, onClick, style });
