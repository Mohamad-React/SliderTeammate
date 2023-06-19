import React from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Main = ({ person, personIndex, index, setIndex, people }) => {
    const { id, image, name, title, quote  } = person;
    
    //   let position = "nextSlide";
    //   if (personIndex === index) {
    //     position = "activeSlide";
    //   }
    //   if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
    //     position = "lastSlide";
    //   }

    return (
        <div>
            <article className={
                personIndex === index
                    ? "activeSlide"
                    : (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1))
                        ? "lastSlide"
                        : "nextSlide"
            } key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="quote">{quote}</p>
            </article>
            <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
            </button>
            <button className="prev" onClick={() => setIndex(index - 1)}>
                <FiChevronLeft />
            </button>
        </div>
    );
};

export default Main;
