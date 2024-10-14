import React, { useEffect } from 'react';
import { handleModalClass } from '../utils/handle-modal-class';
import { ModalBody, ModalContent } from '../../modal/ModalContent';
import xBtn from '../../../Assets/x.png';

export const RecipeImageModal = ({ closeModal, name, image, images, show }) => {
    useEffect(() => {
        handleModalClass(show, '.recipe-image-modal', 'recipe-image-modal-overlay');
    }, [show]);

    return (
        <div className="recipe-image-modal-container">
            <div
                id="recipe-image-modal-overlay"
                className="overlay"
                onClick={() => closeModal()}
            />
            <div className="recipe-image-modal">
                <ModalContent>
                    <ModalBody>
                        <img className="recipe-image-modal-image" src={image} alt={name} />
                        <button className="close" onClick={closeModal}>
                            <img src={xBtn} alt="close" />
                        </button>
                        {/* <div></div> */}
                    </ModalBody>
                </ModalContent>
            </div>
        </div>
    );
}