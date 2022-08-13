import React, { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Import brain parts, annotations, and modals
import BrainParts from "./components/BrainParts";

// Import 3D scene
import Environment from './components/Environment';

// Fallback
import Loading from './components/Loading'

function Home() {
    return (
        <div className='Main'>
            <h1>Neuroanatomy</h1>
            <h2>Cerebral Cortex Lobes</h2>
            <p>Click the annotations to learn more
                about different parts of the brain.
            </p>
            <Canvas>
            <ambientLight intensity={0.25} />
                <Suspense fallback={<Loading/>}>

                    {/* Landing Camera */}
                    <PerspectiveCamera makeDefault position={[0.8,0.5, 1]} />

                    {/* Camera Control */}
                    <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    maxAzimuthAngle={Math.PI / 1}
                    maxPolarAngle={Math.PI}
                    minAzimuthAngle={-Math.PI / 1}
                    minPolarAngle={0}/>

                    {/* Skybox */}
                    <Environment/>
                    
                    {/* Brain Model/Annotations */}
                    <BrainParts/>

                    {/* Bloom Effect */}
                    <EffectComposer>
                      <Bloom intensity={0.4} kernelSize={1} luminanceThreshold={0} luminanceSmoothing={0.4} />
                    </EffectComposer>

                </Suspense>
            </Canvas>

            {/* Need to change */}
            <div className='empty-info'>
                <h1>Information will be displayed here</h1>
            </div>
        </div> 
    )
}


export default Home;