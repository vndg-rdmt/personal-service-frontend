import { CaptureTargetElement } from "./elements/capture-target";
import { CoordinatesElement } from "./elements/coordinates";
import { FilmicGridElement } from "./elements/filmic-grid";
import style from './style.module.css'

export class DecoderComponent extends HTMLElement {
    constructor() {
        super();
        this.className = style.decoder;
        this.append(
            new CoordinatesElement(),
            new CaptureTargetElement(),
            new FilmicGridElement(9),
        )
    }
}

customElements.define('decoder-component', DecoderComponent);