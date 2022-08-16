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
                The parietal lobe is located at the upper back area of the skull 
                like many other parts of the brain, being broken up into 2 different 
                parts, right and left.  Neuropsychologists say that the right side of 
                the brain helps keep track of the space around the body, whereas the 
                left side of the brain keeps track of the location of body parts. The 
                parietal lobe is heavily dependent on other parts of the body to 
                function properly.
                </p>
                <h3>What Does The Parietal Lobe Do?</h3>
                <p>
                The parietal lobe in the main processor for the senses of the body. 
                These senses include touch, pain, temperature, and even movement coordination. 
                With the parietal lobes main function being responsible for the body senses, 
                it is the most important part to help us navigate the world.
                </p>
                <h3>Somatosensory Cortex</h3>
                <p>
                The somatosensory cortex is the main part that processes the different senses 
                of the body. For example the touch of hot water is felt on your hands and that 
                information travels to the brain stem and to the somatosensory cortex to be 
                processed. Because this coretex is localized, this means that it can pinpoint 
                an exact location where there is sensation. Like being able to feel a small pinch 
                from a needle injection.
                </p>
                <p>
                This cortex is also responsible for being able to recognize the weight of an object 
                shape and size with touch. It's also responsible for recognizing your own body within 
                an environment.
                </p>
                <h3>Precuneus</h3>
                <p>
                Located at the middle of the parietal lobe, neuropsychologists suggest that this area 
                is responsible for analyzing, perceiving and some level of pattern recognition. There 
                is also some speculation that this part plays some role in self reflection and consciousness.
                </p>
                <h1>Medical Conditions</h1>
                <p>
                With the parietal lobe being responsible with senses, damage to this part of the brain can cause 
                problems with coordination, disorientation, ability to read and write, and problems with being 
                able to recognize locations and objects. These problems can also lead to issues with being able to 
                recognize one's own body. Damage can also lead to tumors, vascular disease and even a tumor.
                </p>
                <h3>Sources</h3>
                <h4>
                <a href="https://www.medicalnewstoday.com/articles/parietal-lobe" target="_blank" rel="noreferrer">
                  <p>Medical News Today - Article medically reviewed by Nancy Hammond, M.D.</p>
                </a>
                </h4>
                <h4>
                <a href="https://www.simplypsychology.org/parietal-lobe.html" target="_blank" rel="noreferrer">
                  <p>Simply Psychology - Article medically reviewed by Saul Mcleod, PhD</p>
                </a>
                </h4>

                <button className="modal-button" onClick={handleClose}>
                   Close
                </button>
                </div>
            </Modal>
          </Html>
      </group>
    );
}