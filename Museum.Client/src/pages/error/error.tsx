import React from 'react';
import styles from './styles/error.module.css';

interface ErrorProps {
    errorNum: number;
}

const Error = ({ errorNum }: ErrorProps) => {
    const numString = errorNum.toString();
    const numArray = numString.split('');

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <div className={styles.header}>
                        {numArray.map((digit, index) => (
                            <span key={index}>{digit}</span>
                        ))}
                    </div>
                </div>

                <div style={{
                    position: 'fixed',
                    bottom: '5em',
                    width: '100%',
                    display: 'flex',
                    fontSize: '2vh',
                    justifyContent: 'center'
                }}>
                    <span>
                        <p>
                            <a href='/'>Seems you are lost, come back to home</a>
                        </p>
                    </span>
                    <div className={styles.footerWrapper}></div>
                </div>
            </div>

        </div>
    );
};

export default Error;