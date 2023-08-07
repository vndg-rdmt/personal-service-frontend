import style from "./style.module.css"

export class CoordinatesElement extends HTMLElement {
    constructor() {
        super();
        this.className = style.coordinates;
        
        this.insertCoordinatorBlock(
            this.calculateSpeed(...this.randomValues()),
            (e) => this.calculateSpeed(e.clientX, e.clientY)
        );

        this.insertCoordinatorBlock(
            this.calculatePercent(...this.randomValues()),
            (e) => this.calculatePercent(e.clientX, e.clientY)
        );
    }

    private calculateSpeed(x: number, y: number): string {
        const angle = Math.atan2(
            y - (window.innerHeight / 2),
            x - (window.innerWidth / 2),
        );
        return `${Math.sin(angle).toFixed(2)}'${Math.cos(angle).toFixed(2)}"`;
    }

    private calculatePercent(x: number, y: number): string { 
        return `${Math.floor(x * 100 / window.innerWidth)}'${Math.floor(y * 100 / window.innerHeight)}"`;
    }

    private randomValues(): [number, number] {
        return [
            Math.floor(Math.random() * window.innerWidth),
            Math.floor(Math.random() * window.innerHeight),
        ];
    }

    private insertCoordinatorBlock(initial: string, callback: (event: MouseEvent) => string): void {
        const node = document.createElement('div');
        node.textContent = initial;
        window.addEventListener('mousemove', (e) => node.textContent = callback(e));
        this.appendChild(node);
    }
}

customElements.define('coordinates-element', CoordinatesElement)