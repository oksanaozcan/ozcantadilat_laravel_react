import ReactPlayer from 'react-player';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HomePage = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-center mt-1'>     
          <ReactPlayer url={`https://www.youtube.com/embed/TvxL0HLLu2A`} />                         
        </div>
      </div>      
      <div className='d-flex w-75 align-items-center mt-5 mb-2'>
        <div className="dropdown-divider w-25 m-1"></div>
        <h5 className='w-100' >Services</h5>
      </div>                        
      <div className='row'>
      
        <div className="col">
        <AnimationOnScroll animateIn="animate__fadeInBottomLeft" delay={1} duration={2}>
          <h1>100+ customers...</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod tempor incididunt ut labore aliqua. Ut enim que minim veniam, quis nostrud exercitation.
          </p>
          <ul>
            <li>Powerful and flexible theme</li>
            <li>Powerful and flexible theme</li>
            <li>Powerful and flexible theme</li>
            <li>Powerful and flexible theme</li>
          </ul>
          </AnimationOnScroll>
        </div>     
        <div className="col">
          <AnimationOnScroll animateIn="animate__fadeInBottomRight" delay={1} duration={2}>
            <img src='https://doganerinsaat.com/wp-content/uploads/2020/10/Tadilat.jpg' alt='example img'/>
          </AnimationOnScroll>          
        </div>          
      </div>      
      <div className='row'>
        <div className='d-flex w-75 align-items-center mt-5 mb-2'>
          <div className="dropdown-divider w-25 m-1"></div>
          <h5 className='w-100' >Places where we works</h5>          
        </div>       
      </div>
      <div className='row'>       
        <div className='col d-flex justify-content-around flex-wrap'>                 
          <h3>Didim</h3>           
          <h3>Didim</h3>           
          <h3>Didim</h3>                                           
        </div>     
      </div>
    </div>
  )
}

export default HomePage;