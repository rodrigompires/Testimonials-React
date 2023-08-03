import React from 'react';
import DanielAvatar from '../assets/images/image-daniel.jpg';
import './DanielCard.css';
import VanillaTilt from 'vanilla-tilt';


const DanielCard = (props) => {

  const { options, ...rest } = props;
    const tilt = React.useRef(null);

    React.useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

  return (
    <section className='daniel card' ref={tilt} {...rest}  >
      <figure className='danielInfos'>
        <img src={DanielAvatar} alt="imagem Daniel" />
        <figcaption>
            <p className="danielName">Daniel Clifford</p>
            <p className="danielGraduate">Verified Graduate</p>
        </figcaption>
      </figure>
      <div className='danielComment'>
        <h1 className='danielText'>
            I received a job offer mid-course, and the subjects I learned were current, if not more
            so,
            in the company I joined. I honestly feel I got every penny’s worth.
        </h1>
      </div>
      <div className="danielDeclaration">
        <blockquote className="danielCite">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to
          make a
          transition and have heard some people who had an amazing experience here. I signed up
          for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
          The next 12 weeks was the best - and most grueling - time of my life. Since completing
          the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </blockquote>
      </div>
    </section>
  )
}

export default DanielCard
