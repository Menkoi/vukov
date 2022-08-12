import React from 'react';
import { Sky, Shadow } from '@react-three/drei';

// Background Skybox
export default function Environment() {
    return (
        <group>
            <directionalLight position={[3, 1, 0]} intensity={1}/>
                    <Sky azimuth={0.5} inclination={0.49} turbidity={100} rayleigh={0.8}/>     
                    
                    <Shadow
                    color="black"
                    colorStop={0}
                    opacity={0.8}
                    position={[0,-0.49,0]}
                    />
        </group>
    )
}