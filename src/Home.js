import React, {Suspense} from 'react';
import {Sky, OrbitControls, PerspectiveCamera} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import Index from "./components/index";

// Add camera controls

function Home() {
    return (
        <div className='Main'>
            <h1>Brain Anatomy</h1>
            <p>Click the annotations to learn more
                about different parts of the brain.
            </p>
            <Canvas >
            <ambientLight intensity={1} />
                
                {/* Need to add loading screen here */}
                <Suspense fallback={null}>

                    {/* Camera */}
                    <PerspectiveCamera makeDefault position={[0.8,0.5, 1]}/>
                    <OrbitControls/>

                    {/* SkyBox */}
                    <Sky/>

                    {/* Model/Text */}
                    <Index/>

                </Suspense>
            </Canvas>

            <div className='empty-info'>
                <h1>Infomation will be displayed here</h1>
            </div>
        </div> 
    )
}


export default Home;