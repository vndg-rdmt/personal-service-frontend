import {UCECursorEngine} from "cursor-engine"
import style from './style.module.css'
import { App } from "../../app";

class Cursor extends UCECursorEngine {
    constructor() {
        super();
        this.ui.className = style.default;
        this.insertElements(this.ui);
        this.cursorScreen.style.zIndex = '0';
        App.renderOnDesktop(this.cursorScreen)
    }
    protected attributeTag: string = "cursor";
    protected ui: HTMLElement = document.createElement('div');
}

export const cursor = new Cursor()