import style from './style.module.css'

export class FilmicGridElement extends HTMLElement {
    constructor(pointsNumber: number) {
        super();
        this.className = style.filmic_grid;
        while (pointsNumber > 0) {
            this.append(this.createPointElement());
            pointsNumber--;
        };
    }

    private createPointElement(): HTMLElement {
        const point = document.createElement('div');
        point.className = style.point;
        point.innerHTML = `<div class="${style.pointpart}"></div><div class="${style.pointpart}"></div>`
        return point
    }
}

customElements.define('filmic-grid', FilmicGridElement)