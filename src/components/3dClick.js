import {Sphere, Html } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// Modal
import Modal from 'react-bootstrap/Modal';

function FrontLobe() {
    //Thinking/Imagination
    const ref = useRef();

    // Handle modal popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    
    useFrame(() => {
      ref.current.scale.set(0,0,0)
      ref.current.position.x = 0;
      ref.current.position.y = 0.3;
      ref.current.position.z = 0.46;
    });

    return (
      <group ref={ref}>

        <Html>
        <button onClick={handleOpen}>Frontal Lobe</button>

            {/* Modal Display */}
            <Modal show={show} onHide={handleClose} id="modal">
                
                <div className="modal-body">
                <h1>Frontal Lobe</h1>
                <p>*Show image of diagram here*</p>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>

                <button onClick={handleClose}>Close</button>
                </div>
            </Modal>
          </Html>
      </group>
    );
}


function TemporalLobe() {
    //Sound/Speech Processing
    const ref = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    useFrame(() => {
      ref.current.scale.set(0,0,0)
      ref.current.position.x = 0.37;
      ref.current.position.y = 0;
      ref.current.position.z = 0.1;
    });

    return (
      <group ref={ref}>
        <Html>
        <button onClick={handleOpen}>Temporal Lobe</button>

            {/* Modal Display */}
            <Modal show={show} onHide={handleClose} aria-labelledby="modal">
            <div className="modal-body">
                <h1>Temporal Lobe</h1>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>

                <button variant="secondary" onClick={handleClose}>
                   Close
                </button>
            </div>
            </Modal>
          </Html>
      </group>
    );
}

function OccipitalLobe() {
    //visual Processing
    const ref = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    useFrame(() => {
      ref.current.scale.set(0,0,0)
      ref.current.position.x = 0;
      ref.current.position.y = 0.06;
      ref.current.position.z = -0.4;
    });

    return (
      <group ref={ref}>
          <Html>
          <button onClick={handleOpen}>Occipital Lobe</button>

            {/* Modal Display */}
            <Modal show={show} onHide={handleClose} aria-labelledby="modal">
                <div className="modal-body">
                <h1>Occipital Lobe</h1>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>

                <button onClick={handleClose}>
                   Close
                </button>
                </div>    
            </Modal>
          </Html>
      </group>
    );
}

function ParietalLobe() {
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
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>

                <button variant="secondary" onClick={handleClose}>
                   Close
                </button>

                </div>
            </Modal>
          </Html>
      </group>
    );
}

function BrainStem() {
    //Sound/Speech Processing
    const ref = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useFrame(() => {
      ref.current.scale.set(0,0,0)
      ref.current.position.x = 0;
      ref.current.position.y = -0.40;
      ref.current.position.z = 0.03;
    });

    return (
      <group ref={ref}>
        <Sphere/>
          <Html>
            <button onClick={handleShow}>Brain Stem</button>

            {/* Modal Display */}
            <Modal show={show} onHide={handleClose} aria-labelledby="modal">
                <div className="modal-body">
                <h1>Brain Stem</h1>
                <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
                </p>

                <button variant="secondary" onClick={handleClose}>
                   Close
                </button>
                </div>
            </Modal>
          </Html>
      </group>
    );
}

export default function SphereClick() {
    return (
        <group>
            <FrontLobe/>
            <TemporalLobe/>
            <OccipitalLobe/>
            <ParietalLobe/>
            <BrainStem/>
        </group>
    )
}