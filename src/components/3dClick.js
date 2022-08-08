import { Sphere, Html } from "@react-three/drei";
import React, {useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

//Placeholder img (Need to remove)
import placeholder from '../img/default.png'

function FrontLobe() {
    const ref = useRef();
    const texture = useLoader(TextureLoader, placeholder)
    useFrame(() => {
    // Need to make scale = 0 to hide
      ref.current.scale.set(0.01,0.01,0.01)
      ref.current.position.x = 0;
      ref.current.position.y = 0.5;
      ref.current.position.z = 0.45;
    });

    return (
      <group ref={ref}>
        <Sphere/>
        <mesh>
          <sphereBufferGeometry />
          
          <meshStandardMaterial map={texture}/>
          <Html>
            <button onClick={FrontLobeText}
            >Frontal Lobe</button>
          </Html>
        </mesh>
      </group>
    );
}

function FrontLobeText() {
    alert("Frontal Lobe Clicked")
}




export default function SphereClick() {
    return (
        <group>
            <FrontLobe/>
        </group>
    )
}