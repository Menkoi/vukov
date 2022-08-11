import React from "react";

// 3D Brain Model
import BrainModel from "./BrainModel";

// Different parts of brain
import FrontalLobe from './Brain-parts/FrontalLobe';
import TemporalLobe from "./Brain-parts/TemporalLobe";
import OccipitalLobe from "./Brain-parts/OccipitalLobe";
import ParietalLobe from "./Brain-parts/ParietalLobe";
import BrainStem from "./Brain-parts/BrainStem";

export default function BrainParts() {
    return (
        <group>
            <BrainModel position={[0,-0.2,0]}/>
            <FrontalLobe/>
            <TemporalLobe/>
            <OccipitalLobe/>
            <ParietalLobe/>
            <BrainStem/>
        </group>
    )
}