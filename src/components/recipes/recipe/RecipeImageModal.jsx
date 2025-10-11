import { useEffect, useMemo, useState } from 'react';

import arrow from '../../../Assets/arrow.png';
import disabledArrow from '../../../Assets/disabled-arrow.png';
import xBtn from '../../../Assets/x.png';
import { ModalBody, ModalContent } from '../../modal/ModalContent';
import { useRecipeContext } from './RecipeContext';

export const RecipeImageModal = () => {
    const { figures, handleCloseImageModal, item, selectedRecipeImage } = useRecipeContext();
    const name = item?.name;
    const images = useMemo(() => [item?.img, ...figures.flatMap(figure => figure.img)], [item?.img, figures]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const index = images.indexOf(selectedRecipeImage);
        if (index > -1) setCurrentImageIndex(index);
    }, [images, selectedRecipeImage]);

    const nonEmptyImages = images.filter(image => !!image).length > 0;

    return (
        <div className="recipe-image-modal-container">
            <div
                id="recipe-image-modal-overlay"
                className="overlay"
                onClick={handleCloseImageModal}
            />
            {nonEmptyImages && (
                <div className="recipe-image-modal">
                    <ModalContent>
                        <ModalBody>
                            <img className="recipe-image-modal-image" src={images[currentImageIndex]} alt={name} />
                            <button className="close" onClick={handleCloseImageModal}>
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
            )}
        </div>
    );
}