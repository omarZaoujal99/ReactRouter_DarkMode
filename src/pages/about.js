import React from 'react';
// navigation
import { Nav } from '../nav';
// css (I'll use the same style as the home)
import "../styles/home.css";
// dark mode toggle
import DarkMode from '../darkMode'

export default function About() {
    return (
        <>
            <Nav />
            <div className="divMain">
                <h1>About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A minima itaque asperiores, voluptas 
                repudiandae qui mollitia vero? Voluptas quibusdam odit, praesentium quidem iusto tenetur adipisci 
                facilis quo cupiditate architecto neque ratione, perspiciatis, sunt dolor. Tempora obcaecati accusamus 
                quisquam at ex quidem omnis dolorum aliquid ducimus voluptatem dignissimos quod, accusantium facere?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quo sequi illo repudiandae 
                doloremque quod laboriosam exercitationem blanditiis nam quia expedita adipisci, voluptate sed! Dicta
                adipisci deserunt placeat? Sequi, minima amet. Amet illum, reprehenderit consequatur officia labore 
                veritatis dicta et neque doloribus magni ipsum, quisquam, ea ipsa ab illo temporibus voluptatibus
                necessitatibus assumenda deleniti voluptate modi dolorum tempore? Reprehenderit eaque, voluptate 
                magni veniam explicabo facilis accusantium consequatur excepturi veritatis dignissimos commodi sint 
                dolore quas sed tempora vitae quos. Ex in incidunt reprehenderit magnam voluptatum nam. Adipisci
                voluptatum molestias mollitia ea, laborum soluta quasi, neque recusandae dolorum natus, iusto quas.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, odio id. Aspernatur culpa nesciunt
                molestias veritatis explicabo quas rerum ipsum maxime itaque commodi eligendi fuga minima facere impedit, 
                in at.</p>
            </div>
            <DarkMode />
        </>
    )
}
