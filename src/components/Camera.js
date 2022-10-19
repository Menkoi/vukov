import React, { useRef } from "react";
import { useFrame} from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';

export default function Camera() {
    const ref = useRef()

    useFrame(() => {
        ref.current.position.y = 0.01;
        ref.current.position.x = 0.01;
    })
    return (
        <group ref ={ref}>
            <PerspectiveCamera makeDefault position={[3,0.5,3]} />
        </group>
    )
}