import style from './style.module.css'

export function getVHSFilterView(): HTMLElement {
    const view = document.createElement('div');
    view.className = style["vhs-noise-filter"];
    return view;
}

export function getGridFilterView(): HTMLElement {
    const view = document.createElement('div');
    view.className = style["grid-filter"];
    return view;
}
