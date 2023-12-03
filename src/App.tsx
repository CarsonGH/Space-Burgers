// App.tsx

import { useEffect, useRef, useState } from 'react';
import './App.css'
import Modal from 'react-modal'

const App = () => {
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }


  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveBackground = (e: MouseEvent) => {
      if (bgRef.current) {
        bgRef.current.style.backgroundPositionX = `${e.clientX * 0.03}px`;
        bgRef.current.style.backgroundPositionY = `${e.clientY * 0.03}px`;
      }
    };

    window.addEventListener("mousemove", moveBackground);
    
    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveBackground);
    }
  }, []); 


  return (
    <div ref={bgRef} className='background'>

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        contentLabel="Modal 1"
      >
        <div className='modal-close' onClick={closeModal1}>
        X
        </div>
        <div className='menu-modal'>
          <img src='./aliennaut.png'/>
          <div className='space-club'>
            <h1>Join the Space Club!</h1>
            <h2>Get updates, info on new releases, and secret coupon codes!</h2>
            <div className='space-club-joinbox'><input placeholder='spacemanbob@gmail.com' className='space-club-input'/><div className='space-club-button'> Join</div></div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        contentLabel="Modal 2">
        <div className='modal-close' onClick={closeModal2}>
        X
        </div>
        <div className='menu-text'>
          <h1>Here is our menu!</h1>
          <h2> We Guarentee everything is out of this world!</h2>
          <div className='menu-modal'>
            <img  src='./alienchef.png'/>
            <img src='./menu.png'/>
          </div>
        </div>
      </Modal>

      <div className='container'>
        <div className='spaceclub' onClick={openModal1}><img className='top-button' src='./sclub.png'/></div>
        <div className='logo'><div className='logosign'>
          <img width='500px' className='logoimg' src='./topsign2.png'/>
        </div></div>
        <div className={'menu-button'} onClick={openModal2}>
          <img className='top-button' src='./menusign.png'/>
        </div>
      </div>
      <div className='container'>
        <div className='left section'>
          left
          <div className='tvimage'> </div>
        </div>

        <div className='middle section'>
        <div className='ufoburger'>
          <div className='ufo bobble'>
            <img width='300px' src='./ufo2.png'/>
            <div className='beam'></div>
          </div>
          <div className='burger'>
            <img width='250px' src='./closedburger.png'/>
          </div>
          </div>
        </div>
        <div className='right section'>
         Open 2pm-1am M-F <br/>
         Call: <a href='tel:707-298-9470'>707-298-9470</a><br/>
          Located At: <a href="https://www.google.com/maps/dir//No+Brand+Burger+Stand,+1400+Main+St+C,+Ferndale,+CA+95536/">1472 Wallaby Lane,<br/> Eureka, CA</a>
        </div>
      </div>
    </div>
  )
}

export default App;
