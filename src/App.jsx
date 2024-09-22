import './App.css';
import Experience from "./components/Experience.jsx";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {Environment, Html, ScrollControls, useProgress} from "@react-three/drei";
import Proba from "./components/Proba.jsx";

function App() {

    const Loader = () => {
        const {progress} = useProgress()
        return <Html>{Math.floor(progress)}% Loaded ...</Html>
    }

    return (
        <>
            <Canvas>
                <ScrollControls pages={5} damping={0.3}>
                    <Suspense fallback={<Loader/>}>
                        <Environment preset="sunset"/>
                        <Experience/>
                        {/*<Proba/>*/}
                    </Suspense>
                </ScrollControls>
            </Canvas>
        </>
    )
}

export default App
