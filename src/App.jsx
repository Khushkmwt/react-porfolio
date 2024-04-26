import React from 'react';
import {Header,Resume,About,Projects,Contact} from './components';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
                <Resume />
            </main>
        </div>
    );
};

export default App;
