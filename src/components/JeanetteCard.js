import React from 'react';
import JeanetteAvatar from '../assets/images/image-jeanette.jpg';
import './JeanetteCard.css';
import VanillaTilt from 'vanilla-tilt';



const JeanetteCard = (props) => {

  const { options, ...rest } = props;
    const tilt = React.useRef(null);

    React.useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

  return (
    <section className="jeanette card" ref={tilt} {...rest}>
    <figure className="jeanetteInfos">
      <img src={JeanetteAvatar} alt="imagem Jeanette" />
      <figcaption>
        <p className="jeanetteName">Jeanette Harmon</p>
        <p className="jeanetteGraduate">Verified Graduate</p>
      </figcaption>
    </figure>
    <div className="jeanetteComment">
      <h1 className="jeanetteText">An overall wonderful and rewarding experience</h1>
    </div>
    <div className="jeanetteDeclaration">
      <blockquote className="jeanetteCite">“ Thank you for the wonderful experience! I now have a job I really enjoy, and
        make a good living
        while doing something I love. ”
      </blockquote>
    </div>
  </section>
  )
}

export default JeanetteCard
