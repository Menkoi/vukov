import React, { useRef }from "react";
import { useGLTF} from "@react-three/drei";

import Brain from "../models/brain.glb";

export default function BrainModel({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF(Brain);
    return (
    <group ref={group} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} castShadow/>
          </group>
        </group>
      </group>
    </group>
    )
}

useGLTF.preload(Brain)
