import style from "./style.module.css"

/**
 * Coordinates block on top of the 'Decoder component'
 */
export class CoordinatesElement extends HTMLElement {
    constructor() {
        super();
        this.className = style.coordinates;
        this.append(
            this.createCoordinatorBlock(
                this.calculateSinCos(...this.randomValues()), (e) => this.calculateSinCos(e.clientX, e.clientY)
            ),
            this.createCoordinatorBlock(
                this.calculatePercent(...this.randomValues()), (e) => this.calculatePercent(e.clientX, e.clientY)
            ),
        );
    }

    /**
     * Calculate current user cursor sin and cos values, based
     * on x and y values, which are clientX nad clientY.
     * 
     * @param x - user x coordinate
     * @param y - user y coordinate
     * @returns Already decorated values for coodinator block as a string
     */
    private calculateSinCos(x: number, y: number): string {
        const angle = Math.atan2(
            y - (window.innerHeight / 2),
            x - (window.innerWidth / 2),
        );
        return `${Math.sin(angle).toFixed(2)}'${Math.cos(angle).toFixed(2)}"`;
    }

    /**
     * Calculates percentage of a current clientX and clientY
     * compared to the actual window width and height values.
     * 
     * @param x - user x coordinate
     * @param y - user y coordinate
     * @returns Already decorated values for coodinator block as a string
     */
    private calculatePercent(x: number, y: number): string { 
        return `${Math.floor(x * 100 / window.innerWidth)}'${Math.floor(y * 100 / window.innerHeight)}"`;
    }

    /**
     * Calculates random valid values
     * of clientX and clientY.
     * 
     * @returns random clientX, random clientY
     */
    private randomValues(): [number, number] {
        return [
            Math.floor(Math.random() * window.innerWidth),
            Math.floor(Math.random() * window.innerHeight),
        ];
    }

    /**
     * Creates a new element, which updates its
     * textcontent each time user moves cursor.
     * 
     * @param initial - initial elelement content to set when it's created
     * @param callback function that calculates actual content of the element on mousemove
     * @returns 
     */
    private createCoordinatorBlock(initial: string, callback: (event: MouseEvent) => string): HTMLElement {
        const node = document.createElement('div');
        node.textContent = initial;
        window.addEventListener('mousemove', (e) => node.textContent = callback(e));
        return node;
    }
}

customElements.define('coordinates-element', CoordinatesElement)