import React from 'react';
import PatricknAvatar from '../assets/images/image-patrick.jpg';
import './PatrickCard.css';
import VanillaTilt from 'vanilla-tilt';


const PatrickCard = (props) => {
    const { options, ...rest } = props;
    const tilt = React.useRef(null);

    React.useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    
  return (
    <section className="patrick card" ref={tilt} {...rest}>
      <figure className="patrickInfos">
        <img src={PatricknAvatar} alt="imagem Patrick" />
        <figcaption>
          <p className="patrickName">Patrick Abrams</p>
          <p className="patrickGraduate">Verified Graduate</p>
        </figcaption>
      </figure>
      <div className="patrickComment">
        <h1 className="patrickText">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance
          from them and
          learning from their experiences was easy.
        </h1>
      </div>
      <div className="patrickDeclaration">
        <blockquote className="patrickCite">“ The staff seem genuinely concerned about my progress which I find really
          refreshing. The program
          gave me the confidence necessary to be able to go out in the world and present myself as a capable
          junior developer. The standard is above the rest. You will get the personal attention you need from
          an incredible community of smart and amazing people. ”
        </blockquote>
      </div>
    </section>
  )
}

export default PatrickCard
