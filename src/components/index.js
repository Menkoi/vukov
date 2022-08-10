import React from 'react';
import BrainImport from './Brain';
import SphereClick from './3dClick';


export default function Index() {
return (
    <group>
        <BrainImport position={[0,-0.2,0]}/>
        <SphereClick/>
    </group>

 )
}