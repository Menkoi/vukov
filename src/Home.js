import React, {Suspense} from 'react';
import {Sky, OrbitControls, PerspectiveCamera} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import Index from "./components/index";

// Add sphere to different parts of brain
// give spheres HTML titles 
// make spheres clickable to display more information
// make more information appear from the right side of window

// Add camera controls

function Home() {
    //const textureDef = useLoader(TextureLoader, Default)
    return (
        <div className='Main'>
            <h1>Brain Anatomy</h1>
            <Canvas>
            <ambientLight intensity={1} />
                
                {/* Need to add loading screen here */}
                <Suspense fallback={null}>

                    {/* Camera */}
                    <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
                    <OrbitControls/>

                    {/* SkyBox */}
                    <Sky/>

                    {/* Index */}
                    <Index/>


                </Suspense>
            </Canvas>
        </div>  
    )
}


export default Home;