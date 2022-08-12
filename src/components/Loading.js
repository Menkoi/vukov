import { Html } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame} from "@react-three/fiber";

export default function Loading() {
    const ref = useRef()

    useFrame(() => {
        ref.current.scale.set(1,1,1)
        ref.current.rotation.y += 0.01;
        ref.current.rotation.x += 0.01;
    })
    return (
        <group ref ={ref}>
            <mesh>
            <boxBufferGeometry/>
            <meshBasicMaterial color={"#657ced"}/>
            </mesh>
            <Html position={[0.5,0.5,0.5]}>
                <h1>Loading...</h1>
            </Html>
        </group>
    )
}