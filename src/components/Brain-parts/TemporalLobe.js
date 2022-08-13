import { Html } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// Modal
import Modal from 'react-bootstrap/Modal';

// Images
import Temporal from "../../img/Temporal.webp";

export default function TemporalLobe() {
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
                <img src={Temporal} className="modal-img" alt=""/>
                <p>
                The temporal lobe is the second largest part of the brain being located 
                on the right and left side of the brain sitting comfortably behind the 
                ears as well as sitting above the brainstem. Because of the different 
                functions of the temporal lobe, damage can result in impaired speech to 
                even a possible link to schizophrenia.
                </p>
                <h3>What Does The Temporal Lobe Do?</h3>
                <p>
                The temporal lobe is mainly responsible for processing auditory information 
                but also has some functions with memory, emotions, and even some visual processing.
                </p>
                <h3>Auditory</h3>
                <p>
                The temporal lobe is the first layer of processing audio information being 
                located behind the ears. It captures the different frequencies and sounds 
                and processes them into something understandable. This also acts as a filter 
                removing unnecessary frequencies so a person can focus on more important sounds 
                within a given environment.
                </p>
                <h3>Visual</h3>
                <p>
                While this part of the brain's main function is audio processing, there is some 
                visual processing here as well. This helps with object recognition. For example, 
                being able to see a car and recognize and understand that what you're looking at 
                is a car. This feature also helps with more complex visuals like human faces being 
                able to process even the smallest detail.
                </p>
                <h3>Limbic System</h3>
                <p>
                The temporal lobe has connections to what is called the limbic system, a very 
                important system that helps with long term memory, emotion and learning. The limbic 
                system interacts with many different parts of the brain but mainly interacts with the 
                temporal lobe. Because of this connection the temporal lobe becomes a key area with 
                daily activities.
                </p>
                <h1>Medical Conditions</h1>
                <h3>Schizophrenia</h3>
                <p>
                Schizophrenia is a serious mental health condition that can cause delusions, hallucinations, 
                and confusion among other conditions. With the temporal lobe being responsible for processing 
                audio and visual, studies have shown that there are links from schizophrenia being caused by 
                corruption with the temporal lobe. This corruption can cause a person to hear external voices, 
                not be able to process visual objects, trouble with memory, not properly being able to process 
                one's emotions and even trouble with speech or direction.
                </p>
                <p>
                While schizophrenia is a lifetime condition, health care professionals have found ways to help 
                the condition with treatment. One way doctors treat the condition is with antipsychotic drugs 
                like Risperdal, Zyprexa, and Seroquel with some being administered by injection. There is also 
                counseling and special care available to help cope with daily living.
                </p>
                <h3>Dyslexia</h3>
                <p>
                Another possible link to the temporal lobe is Dyslexia. Dyslexia is a learning impairment that impacts 
                a persons ability to read and write. Like with many other mental health conditions, there are different layers
                to the conditions ranging from acute to extreme. Some symptoms include  problems with reading comprehension, 
                processing audio, and even hand-eye coordination.
                </p>
                <p>
                While there is no cure, there are options available to help cope with the condition like special learning tools 
                and support.
                </p>
                <h4>
                <a href="https://www.medicalnewstoday.com/articles/temporal-lobe" target="_blank" rel="noreferrer">Medical News Today</a>
                <p>Article medically reviewed by Heidi Moawad, M.D.</p>
                </h4>
                <h4>
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK519512/" target="_blank" rel="noreferrer">National Library of Medicine</a>
                <p>Written by Anand Patel, Grace Marie Nicole R. Biso, James B. Fowler</p>
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