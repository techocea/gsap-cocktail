import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main className="flex-center h-[100vh]">
                <h1 className="text-3xl uppercase">HEllo GSAP</h1>
        </main>
    )
}
export default App;
