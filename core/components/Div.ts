import IDiv from "../interfaces/IDiv";
import _Style from "./Style";

class _Div {
  childs: any[];
  style: _Style;
  element: HTMLElement;

  constructor({ childs, style }: IDiv) {
    this.childs = childs;
    this.style = style;

    this.render(childs, style);
  }

  render(childs: any, style: _Style) {
    let element = document.createElement("div");

    this.element = element;

    style.load(this.element);

    for (let i = 0; i < childs.length; i++) {
      this.element.appendChild(childs[i].element);
    }

    document.getElementById("app").appendChild(this.element);
  }
}

export default _Div;

export const Div = ({ childs, style }: IDiv) => new _Div({ childs, style });
