import { KUBPage } from "kuebox";
import { DrawingConfig, GetDrawFunction, NavigationButton, NavigationContainer } from "../../.keep/components/navigation-buttons";
import style from './style.module.css'
import { TerminalHeader, TerminalHeaderConfig } from "../../.keep/components/terminal-header";

export class MainPage extends KUBPage {
    public constructor() {
        super();
        this.pageViewRoot.className = style.mainPage; 
    };

    protected onAfterRender: () => void = () => {
        const navigationButtons = MainPage.navConf.map(
            value => NavigationButton(value.route, GetDrawFunction(value.config)));
        const terminalHeader = TerminalHeader(
            MainPage.termConf);

        this.pageViewRoot.append(
            NavigationContainer(...navigationButtons.map(e => e.container)),
            terminalHeader.container,
        );

        navigationButtons.forEach(b => b.Play());
    };




    private static navConf: {route: string, config: DrawingConfig}[] = [
        {route: '/aboutme', config: {
            classname: style.drawBox,
            amount: 100,
            timeout: 0.05,
        }},
        {route: '/aboutme', config: {
            classname: style.drawBox,
            amount: 100,
            timeout: 0.08,
        }},
        {route: '/aboutme', config: {
            classname: style.drawBox,
            amount: 100,
            timeout: 0.03,
        }},
        {route: '/aboutme', config: {
            classname: style.drawBox,
            amount: 100,
            timeout: 0.1,
        }},
    ];

    private static termConf: TerminalHeaderConfig = {
        loaded: 4,
    };
};