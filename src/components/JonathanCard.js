import React from 'react';
import JonathanAvatar from '../assets/images/image-jonathan.jpg';
import './JonathanCard.css';
import VanillaTilt from 'vanilla-tilt';



const JonathanCard = (props) => {

  const { options, ...rest } = props;
    const tilt = React.useRef(null);

    React.useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

  return (
    <section className="jonathan card" ref={tilt} {...rest}>
      <figure className="jonathanInfos">
        <img src={JonathanAvatar} alt="imagem Jonathan" />
        <figcaption>
          <p className="jonathanName">Jonathan Walters</p>
          <p className="jonathanGraduate">Verified Graduate</p>
        </figcaption>
      </figure>
      <div className="jonathanComment">
        <h1 className="jonathanText">The teasm was very supportive and kept me motivated</h1>
      </div>
      <div className="jonathanDeclaration">
        <blockquote className="jonathanCite">" I started as a total newbie with virtually no coding skills.
          I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."
        </blockquote>
      </div>
    </section>
  )
}

export default JonathanCard