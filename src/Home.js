import React, { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import Index from "./components/index";
import Environment from './components/Environment';

function Home() {
    return (
        <div className='Main'>
            <h1>Brain Anatomy</h1>
            <p>Click the annotations to learn more
                about different parts of the brain.
            </p>
            <Canvas>
            <ambientLight intensity={0.25} />
                
                {/* Need to add loading screen here */}
                <Suspense fallback={null}>

                    {/* Camera */}
                    <PerspectiveCamera makeDefault position={[0.8,0.5, 1]} />
                    <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    maxAzimuthAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI}
                    minAzimuthAngle={-Math.PI / 4}
                    minPolarAngle={0}/>

                    {/* Enviorment */}
                    <Environment/>
                    
                    {/* Model/Text */}
                    <Index/>

                    <EffectComposer>
                      <Bloom intensity={0.4} kernelSize={1} luminanceThreshold={0} luminanceSmoothing={0.4} />
                    </EffectComposer>

                </Suspense>
            </Canvas>

            <div className='empty-info'>
                <h1>Infomation will be displayed here</h1>
            </div>
        </div> 
    )
}


export default Home;