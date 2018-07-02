import React from 'react';
import styles from './style.css';
import { ThemeContext } from './context';

const ThemedButton = (props) => (
    <ThemeContext.Consumer>
        {(theme) => (
            <button
                className={styles.btn}
                {...props}
                style={{
                    backgroundColor: theme.background,
                    color: theme.color,
                }}
            >
                {`${Object.keys(theme)[0]}: ${theme.background}`}
            </button>
        )}
    </ThemeContext.Consumer>
);

export default ThemedButton;
