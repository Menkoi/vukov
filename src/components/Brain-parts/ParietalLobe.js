import { Html } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// Modal
import Modal from 'react-bootstrap/Modal';

// Images
import Parietal from "../../img/Parietal.webp";

export default function ParietalLobe() {
    //Sound/Speech Processing
    const ref = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    useFrame(() => {
      ref.current.scale.set(0,0,0)
      ref.current.position.x = 0;
      ref.current.position.y = 0.4;
      ref.current.position.z = -0.1;
    });

    return (
      <group ref={ref}>
          <Html>
          <button onClick={handleOpen}>Parietal Lobe</button>
            {/* Modal Display */}
            <Modal show={show} onHide={handleClose} aria-labelledby="modal">
                <div className="modal-body">
                <h1>Parietal Lobe</h1>
                <img src={Parietal} className="modal-img" alt=""/>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>

                <button className="modal-button" onClick={handleClose}>
                   Close
                </button>

                </div>
            </Modal>
          </Html>
      </group>
    );
}