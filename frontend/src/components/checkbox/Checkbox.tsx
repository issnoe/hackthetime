import React from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox(props: { id: string, status: boolean, onChange: () => void }) {
    return (<div className={styles.round} >
        <input id={`${props.id}`} type="checkbox" checked={Boolean(props.status)} onChange={props.onChange} />
        <label htmlFor={`${props.id}`}></label>
    </div>)
}

export function CheckboxSwitch(props: { id: string, status: boolean, onChange: () => void }) {
    return (<label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
    </label >)
}


export function CheckboxCubeOld(props: { id: string, status: boolean, onChange: () => void }) {
    return <div >
        <div className={styles.toggle_button_cover}>
            <div className={styles.button_cover}>
                <div className={`${styles.button18} ${styles.button} ${styles.b2}`} >
                    <input type="checkbox" className={styles.checkbox} />
                    <div className={styles.knobs}>
                        <span></span>
                    </div>
                    <div className={styles.layer}></div>
                </div>
            </div>
        </div>
    </div>
}

export function CheckboxCube(props: { id: string, status: boolean, onChange: () => void }) {
    return <div style={{ padding: "1rem", background: "gray" }}>
        <label className={styles.buttonbox} htmlFor="toggle" >
            <input id="toggle" className={styles.toggle} type="checkbox" />
            <span className={styles.sliderCube}></span>
        </label>
    </div >
}