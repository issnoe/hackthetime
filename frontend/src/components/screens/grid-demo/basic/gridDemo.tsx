import styles from './gridDemo.module.css'
import React from 'react'
export function GridDemo() {
    return <div className={styles.wrapper}>
        <header className={styles.mainhead}>The header</header>
        <nav className={styles.mainnav}>
            <ul>
                <li><a href="">Nav 1</a></li>
                <li><a href="">Nav 2</a></li>
                <li><a href="">Nav 3</a></li>
            </ul>
        </nav>
        <article className={styles.content}>
            <h1>Main article area</h1>
            <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
        </article>
        <aside className={styles.side}>Sidebar</aside>
        <div className={styles.ad}>Advertising</div>
        <footer className={styles.mainfooter}>The footer</footer> </div>
}