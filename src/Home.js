import React, {Suspense} from 'react';
import {Sky, OrbitControls, PerspectiveCamera, Html} from '@react-three/drei';
import {Canvas, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Default from './img/default.png';

// Create main menu JS
// Create seperate file for box 


function Home() {
    const textureDef = useLoader(TextureLoader, Default)
    return (
        <div className='Main'>
            <h1>VUKOV</h1>
            <Canvas>
            <ambientLight intensity={1} />
                
                {/* Need to add loading screen here */}
                <Suspense fallback={null}>

                    {/* Camera */}
                    <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
                    <OrbitControls/>

                    {/* SkyBox */}
                    <Sky/>
                    

                    {/* Default Box */}
                    <mesh>
                        <boxBufferGeometry/>
                        <meshStandardMaterial map={textureDef}/>
                    </mesh>

                    {/* Floor */}
                    <mesh rotation={[4.7 , 0, 0]} position={[0, -0.5,0]}>
                        <Html></Html>
                        <planeGeometry args={[10, 10, 10]}></planeGeometry>
                        <meshStandardMaterial color={'grey'}/>
                    </mesh>

                </Suspense>
            </Canvas>
        </div>  
    )
}


export default Home;