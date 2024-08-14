import './Hero.css'; 

const Hero = () => {
  return (
     <div className='hero-main'>
            <div className='hero-text'>
                    <h6 className='hero-sub-title'>Welcome to Cyborg</h6>
                    <h4 className='hero-title'>
                            <span>Browse </span>
                             Our Popular Game Here
                    </h4>
                    <div className='main-button'>
                            <a href='browse.html'>Browse Now</a>
                    </div>
            </div>
     </div>
  )
}

export default Hero