import style from './style.module.css'

export class CaptureTargetElement extends HTMLElement {
    constructor() {
        super();
        this.className = style.capture_target;
    }
}

customElements.define('capture-target', CaptureTargetElement)