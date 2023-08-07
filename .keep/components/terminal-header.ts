import style from './style.module.css'

export interface TerminalHeaderConfig {
    loaded: number,
};

export function TerminalHeader(config: TerminalHeaderConfig) {
    const container = document.createElement('div');
    
    const header = document.createElement('div');
    header.className = style.terminalConf;
    header.textContent = 'VNDG';

    container.append(header);
    return {
        container,
    };
};