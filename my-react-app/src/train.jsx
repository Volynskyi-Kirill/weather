/* eslint-disable */
import React from 'react';
import { useContext } from 'react';

function Train() {
    const themes = {
        light: {
            foreground: '#000000',
            background: '#eeeeee',
        },
        dark: {
            foreground: '#ffffff',
            background: '#222222',
        },
    };

    const ThemeContext = React.createContext(themes.light);

    const App = () => {
        return (
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
        );
    };

    const Toolbar = () => {
        return (
            <div className="">
                <ThemedButton />
            </div>
        );
    };

    const ThemedButton = () => {
        const theme = useContext(ThemeContext);
        return (
            <button
                style={{
                    background: theme.background,
                    color: theme.foreground,
                }}
            >
                я стилизован темой из контекста!
            </button>
        );
    };

    return (
        <div className="">
            <App />
        </div>
    );
}

export default Train;
