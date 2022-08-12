import { Html } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// Modal
import Modal from 'react-bootstrap/Modal';

// Images
import Frontal from "../../img/Frontal.webp";

export default function FrontLobe() {
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
                <img src={Frontal} className="modal-img" alt=""/>
                <p>
                Of the four major parts of the brain, 
                the frontal lobe is the biggest part being one of the most important 
                parts but also being the most vulnerable. The frontal lobe is located 
                at the front of the head taking up one third of the human brain. 
                This part of the brain is the most likely area for any kind of damage 
                to occur, damage could lead to many symptoms from trouble speaking to 
                trouble with movement. There is both a right and left side that affect 
                and control different parts of the body, these two sides are part of the 
                cerebral cortex. The right side of the brain controls the left side of 
                the body, the left side of the brain controls the right side of the body.
                </p>
                <h2>What Does The Frontal Lobe Do?</h2>
                <p>
                The frontal lobe is responsible for body movement, the control of speech,
                personality, dopamine reward system, memory, and attention. These things are 
                very important for day to day activities. All of these systems shows just how 
                vital the frontal lobe is how many problems can occur if this area is damaged.
                </p>
                <h3>Speech</h3>
                <p>
                Speech is one of the main methods humans interact and communicate to each other, 
                this is processed in the Broca area of the frontal lobe that helps translate 
                thoughts into physically spoken words. 
                </p>
                <h3>Personality</h3>
                <p>
                When interacting with another person one thing that can stand out is somebody's 
                personality. With a mixture of memories, emotions and experiences, these things 
                can define a person's characteristics. Thanks to the frontal lobe it helps what 
                makes you who you are.
                </p>
                <h3>Dopamine Reward System</h3>
                <p>
                Dopamine is a system within the brain that helps give you that feeling of reward 
                and motivation. For example, getting a good grade on a test or finally eating your 
                favorite food that you've been craving. This very important system is just another 
                daily function within the frontal lobe.
                </p>
                <h3>Memory</h3>
                <p>
                Every region of the brain has its function when it comes to memory but the frontal 
                lobe is no exception. More research needs to be done but the frontal lobe could be 
                important for long term memory.
                </p>
                <h3>Attention</h3>
                <p>
                Studies show that these days more and more people live and deal with having some 
                sort of attention problem. This problem is known as (ADHD) Attention Deficit 
                Hyperactivity Disorder or (ADD) Attention Deficit Disorder. Most doctors try to 
                mitigate this by prescribing medication most commonly Adderall or Vyvanse. If someone 
                has these attention problems, this is the frontal lobe not properly managing attention.
                </p>
                <h3>Sources</h3>
                <h4>
                <a href="https://www.medicalnewstoday.com/articles/318139#functions" target="_blank" rel="noreferrer">Medical News Today</a>
                <p>Article medically reviewed by Heidi Moawad, M.D.</p>
                </h4>
                <h4>
                <a href="https://www.webmd.com/brain/what-you-need-to-know-about-the-frontal-lobe" target="_blank" rel="noreferrer">WebMD</a>
                <p>Article medically reviewed by Dan Brennan, M.D.</p>
                </h4>
                <button className="modal-button" onClick={handleClose}>Close</button>
                </div>
            </Modal>
          </Html>
      </group>
    );
}