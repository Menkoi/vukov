import { Html } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// Modal
import Modal from 'react-bootstrap/Modal';

// Images
import Occipital from "../../img/Occipital.webp";

export default function OccipitalLobe() {
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
                <img src={Occipital} className="modal-img" alt=""/>
                <p>
                The occipital lobe is located at the back of the skull and 
                is the smallest lobe out of all the lobes of the human brain.
                This part of the brain is crucial for navigating the world 
                allowing you to process what you see visually in an environment. 
                This part is highly complex being able to see an object and 
                processing the depth, color, and understanding what exactly the 
                object is.
                </p>
                <h3>What Does The Occipital Lobe Do?</h3>
                <p>
                The occipital lobe is responsible for mainly handling visual 
                processing. Specifically the rentias in the eyes process the 
                information and then sends that data for further processing to 
                the occipital lobe. This means that the lobe helps determine colors
                , recognize faces, transmitting that information to other parts of 
                the brain, and mapping the visual world.
                </p>
                <h3>Primary Visual Cortex</h3>
                <p>
                The primary visual cortex is the main part that receives information 
                from the retina and sends that data to the cortex. It is essential to 
                the conscious processing of visual stimuli. Information leaves the 
                retina and via the optic nerve, sends that information to a nucleus 
                called the lateral geniculate nucleus. From there it sends the data to 
                a tract called the optic radiation and then to the occipital lobe.
                </p>
                <h1>Medical Conditions</h1>
                <h3>Blindness</h3>
                <p>
                Because the occipital lobe handles vision, damage to this part 
                can possibly cause partial or full blindness.
                </p>
                <h3>Epilepsy</h3>
                <p>
                There are some cases that epilepsy might have a link to the occipital lobe. 
                If a person has an occipital type seizure or is photosensitive, this can 
                occur because of damage to the occipital lobe.
                </p>
                <h3>Sources</h3>
                <h4>
                <a href="https://www.medicalnewstoday.com/articles/occipital-lobe" target="_blank" rel="noreferrer">
                  <p>Medical News Today - Article medically reviewed by Seunggu Han, M.D.</p>
                </a>
                </h4>
                <h4>
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK544320/" target="_blank" rel="noreferrer">
                  <p>National Library of Medicine - Written by Amna Rehman, Yasir Al Khalili</p>
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