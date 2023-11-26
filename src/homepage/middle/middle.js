import React from 'react';
import './middle.css';
import coffee1 from './coffee1.jpg'
import restaurant1 from './restauran1.jpg'
import entertainment1 from './entertainment.jpg'
import TextTitle from '../../stylingComponents/Texts/Title';


const colors = ["#000000", "#000000", "#000000"];
const delay = 2500;
const images = [
    coffee1,
    restaurant1,
    entertainment1,
    // Add more image paths as needed
];
function Middle() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className='slide-parent'>
            <TextTitle name="feel free to browse our discounts:"></TextTitle>
            <h1 className="slide-head">Food and beverages</h1>
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {colors.map((backgroundColor, index) => (
                        <div className="slide" key={index} style={{ backgroundColor }}>
                            <img className='slide-image' src={images[index]} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="slideshowDots">
                    {colors.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <h1 className="slide-head">Entertainment and events</h1>
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {colors.map((backgroundColor, index) => (
                        <div className="slide" key={index} style={{ backgroundColor }}>
                            <img className='slide-image' src={images[index]} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="slideshowDots">
                    {colors.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Middle;