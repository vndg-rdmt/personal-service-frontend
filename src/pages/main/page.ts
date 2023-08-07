import { KUBPage } from "kuebox";
import { StrokedLogo } from "./ui-components/background-logo";

import styles from './styling.module.css'
import { Colors } from "../../app";
import { gsap } from "gsap";


export class MainPage extends KUBPage {
    public constructor() {
        super();
        this.pageViewRoot.className = styles.page;
        this.pageViewRoot.append(this.elementLogotype);

        if (MainPage.getAlreadyVisitedFlag()) {
            this.onAfterRender = this.renderDefaultState
        } else {
            MainPage.setAlreadyVisitedVFlag();
            this.onAfterRender = this.renderFirstVisitState;
        };
    };

    private static readonly visitedFlag = typeof this + 'visited';
    private static getAlreadyVisitedFlag(): boolean {
        return sessionStorage.getItem(this.visitedFlag) === 'true';
    };
    private static setAlreadyVisitedVFlag(): void {
        return sessionStorage.setItem(this.visitedFlag, 'true');
    };

    private readonly elementLogotype = StrokedLogo.createElement();

    private setBackgroundColor(delay: number): Promise<void> {
        return new Promise((resolvePromise) => {
            gsap.to(this.pageViewRoot, {
                delay: delay,
                backgroundColor: Colors.RoyalCrimson(),
                duration: 1,
            }).then(() => resolvePromise(undefined));
        })
    };

    private showBorders() {};

    private renderFirstVisitState(): void {
        this.setBackgroundColor(0.5).then(() => {
            this.elementLogotype.appear().then(() => this.elementLogotype.sendToBackground(0.6, 1));
        });
        return;
    };
    private renderDefaultState(): void {
        this.setBackgroundColor(0).then(() => {
            this.elementLogotype.appear();
            this.elementLogotype.sendToBackground(0, 0.9);
            this.showBorders();
        });
        return;
    };
};