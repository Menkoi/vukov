import React, { useRef } from 'react';
import { Sky, Shadow } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Ground Render
function Floor() {
    const ref = useRef();
    useFrame(() => {
        ref.current.position.y = -0.5;
        ref.current.rotation.x = -1.57;
    });

    return (
        <group ref={ref}>
        <mesh>
            <planeGeometry args={[1009, 1000]}/>
            <meshStandardMaterial color='#424549' />
        </mesh>
        </group>
    )
}

// Background Skybox
export default function Environment() {
    return (
        <group>
            <directionalLight position={[3, 1, 0]} intensity={1}/>
                    <Sky azimuth={0.5} inclination={0.52} turbidity={100}/>
                    <Floor/>
                    
                    <Shadow
                    color="black"
                    colorStop={0}
                    opacity={0.8}
                    position={[0,-0.49,0]}
                    />
        </group>
    )
}