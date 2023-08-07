import { CoordinatesElement } from "./elements/coordinates";


export class DecoderComponent extends HTMLElement {
    constructor() {
        super();
        this.append(new CoordinatesElement())
    }
}

customElements.define('screen-interface', DecoderComponent);