import React from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox(props: { id: string, status: boolean, onChange: () => void }) {
    return (<div className={styles.round} >
        <input id={`${props.id}`} type="checkbox" checked={Boolean(props.status)} onChange={props.onChange} />
        <label htmlFor={`${props.id}`}></label>
    </div>)
}
