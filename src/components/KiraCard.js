import React from 'react';
import KiraAvatar from '../assets/images/image-kira.jpg';
import './KiraCard.css';
import VanillaTilt from 'vanilla-tilt';





const KiraCard = (props) => {

    const { options, ...rest } = props;
    const tilt = React.useRef(null);

    React.useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);
  

  return (
    <section className="kira card" ref={tilt} {...rest}>
      <figure className="kiraInfos">
        <img src={KiraAvatar} alt="imagem Kira" />
        <figcaption>
          <p className="kiraName">Kira Whittle</p>
          <p className="kiraGraduate">Verified Graduate</p>
        </figcaption>
      </figure>
      <div className="kiraComment">
        <h1 className="kiraText">Such a life-changing experience. Highly recommended!
        </h1>
      </div>
      <div className="kiraDeclaration">
        <blockquote className="kiraCite">“ Before joining the bootcamp, I’ve never written a line of code. I needed some
          structure from
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
          could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
          100% recommend! ”
        </blockquote>
      </div>
    </section>
  )
}

export default KiraCard