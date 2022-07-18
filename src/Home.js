import React, {Suspense} from 'react';
import {Sky, PerspectiveCamera, Stage} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';


function Home() {
    return (
        <div className='Main'>
            <Canvas>
                <Suspense fallback={null}>

                    <PerspectiveCamera/>
                    <Sky/>
                    <Stage/>

                </Suspense>
            </Canvas>
        </div>
        
    )
}


export default Home;