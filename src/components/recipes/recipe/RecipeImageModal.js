import React, { useEffect, useState } from 'react';
import { handleModalClass } from '../utils/handle-modal-class';
import { ModalBody, ModalContent } from '../../modal/ModalContent';
import xBtn from '../../../Assets/x.png';
import arrow from '../../../Assets/arrow.png';
import disabledArrow from '../../../Assets/disabled-arrow.png';

export const RecipeImageModal = ({ closeModal, name, image: initialImage, images, show }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        handleModalClass(show, '.recipe-image-modal', 'recipe-image-modal-overlay');
    }, [show]);

    useEffect(() => {
        const index = images.indexOf(initialImage);
        if (index > -1) setCurrentImageIndex(index);
    }, [images, initialImage]);

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
                        <img className="recipe-image-modal-image" src={images[currentImageIndex]} alt={name} />
                        <button className="close" onClick={closeModal}>
                            <img src={xBtn} alt="close" />
                        </button>
                        <div className="arrows-container">
                            <button
                                className="arrow-btn"
                                disabled={currentImageIndex <= 0}
                                onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                            >
                                {currentImageIndex <= 0 ? (
                                    <img className="disabled-arrow" src={disabledArrow} alt="previous" />
                                ) : (
                                    <img className="prev-arrow" src={arrow} alt="previous" />
                                )}
                            </button>
                            <button
                                className="arrow-btn"
                                disabled={currentImageIndex >= images.length - 1}
                                onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                            >
                                {currentImageIndex >= images.length - 1 ? (
                                    <img className="disabled-arrow next" src={disabledArrow} alt="next" />
                                ) : (
                                    <img className="next-arrow" src={arrow} alt="next" />
                                )}
                            </button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </div>
        </div>
    );
}