import { KUBApplication } from "kuebox";

export const App = KUBApplication.createApp();

export abstract class Colors {
    private constructor() {};

    private static g = (cssVar: string) =>
        getComputedStyle(document.body).getPropertyValue(cssVar);

    public static readonly RoyalCrimson = () => Colors.g('--royal-crimson');
}
