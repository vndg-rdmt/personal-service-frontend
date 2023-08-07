window.addEventListener('DOMContentLoaded', main)

import { App } from './app';
import { DecoderComponent } from './components/decoder';
import { MainPage } from './pages/main/page';
import { cursor } from './services/cursor';
import { getGridFilterView, getVHSFilterView } from './services/filters';
import './style.css'


function applyCursor(): void {
    cursor.Render();
    cursor.Display();
}

function applyFilters(): void {
    const root = document.createElement('div')
    root.className = 'filters'
    root.append(
        getGridFilterView(),
        getVHSFilterView(),
    );

    document.body.appendChild(root);
}

function applyInterface(): void {
    document.body.append(
        new DecoderComponent(),
    )
}

function main(): void {
    if (window.sessionStorage.getItem('already_visited') !== 'true') {
        window.history.replaceState([], '', '/');
        window.sessionStorage.setItem('already_visited', 'true');
    };

    App.configurePage('/', MainPage);

    App.launchApp();
    applyCursor();
    applyFilters();
    applyInterface();
};