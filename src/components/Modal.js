import React from 'react';
import './Modal.css';

const Modal = ({isOpen, setOpenModal}) => {



    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
          setOpenModal(false); 
        }
      }

      const challenges = [
        {
            data: "30/07/2023",
            name: "Notification Page",
            description: "Building the app via React and using the UseFetch() Custom Hook to consume data from data.json. Several animations implemented and new message on my Avatar's click.",
            src: "images/Notification.gif",
            alt: "Notification image",
            id: "1",
            identification: "notif",
            background: "#052c67",
            border: "#00509a",
            link: "https://github.com/rodrigompires/Notification",
            technologies: ["ReactJS", "CSS", "data.json"] 
        },
        {
            data: "26/07/2023",
            name: "Rating Component",
            description: "Work done with React and inclusion of animations in CSS. Animations with Hover and rotation of the main card on clicking the button when submitting the rating.",
            src: "images/Rating.gif",
            alt: "Rating image",
            id: "2",
            identification: "rating",
            background: "#df2061",
            border: "#d11b56",
            link: "https://github.com/rodrigompires/rating",
            technologies: ["ReactJS", "CSS", "Animations"] 
        },
        {
            data: "17/02/2023",
            name: "QR Code",
            description: "Created in pure JavaScript, the transformation of the QR Code card into an mp3 music player was added, with features to change music, increase the volume, animated equalizer, advance or rewind the music.",
            src: "images/QRCode.gif",
            alt: "QRCode image",
            id: "3",
            identification: "qrcode",
            background: "#e45003",
            border: "#c74400",
            link: "https://github.com/rodrigompires/DesafioQRCode",
            technologies: ["JavaScript", "HTML", "CSS"] 
        },
        {
            data: "30/12/2022",
            name: "Game Mario",
            description: "Creating a Mario game with pure JavaScript. Rotation of enemies and other animations. 2 different endings and keyboard mapping to be used in the game. Used the Game Boy Advanced background",
            src: "images/Mario.gif",
            alt: "Game Mario image",
            id: "4",
            identification: "mario",
            background: "#009039",
            border: "#00812f",
            link: "https://github.com/rodrigompires/Game-Mario",
            technologies: ["JavaScript", "HTML", "CSS"] 
        }
      ]
  

      if (isOpen) {
          return (
              <div className={`modal ${isOpen ? 'animeOpenModal' : ''}`} onClick={handleOutsideClick}>
                <h1 className='modalTitle'>Some challenges posted on GitHub</h1>
                <div  className='containerModal'>
    
                {challenges.map(({data, description, id, name, src, alt, technologies, link, background, border, identification}) => <div style={{gridArea: identification}} className={`cardRodrigo ${identification}`} key={id} >
                    <img src={src} alt={alt} />
                    <div className='cardInfos'>
                        <p className='cardProfession'>{data}</p>
                        <h1 className='cardName'>{name}</h1>
                        <p className='cardDescription'>{description}</p>
                    </div>
                    <div className='cardLinks'>
                        {technologies.map((technologie) => <a key={technologie} style={{backgroundColor: background, borderRight: `1px solid ${border}`}} className={`link ${technologie}`} href={link} target="_blank" rel="noopener noreferrer"><div className='link' key={technologie}>
                            <p className='linkName'>{technologie}</p>
                        </div></a> )}
                    </div>
                </div>
              )}
                </div>
            </div>
          ) 
      } else {
        return null;
      }
}

export default Modal