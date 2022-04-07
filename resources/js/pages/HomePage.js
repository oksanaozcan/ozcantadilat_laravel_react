import ReactPlayer from 'react-player';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ListTask } from 'react-bootstrap-icons';
import HomeSlider from '../components/HomeSlider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/posts/PostCard';
import MyTitle from '../components/MyTitle';

const HomePage = () => {
  const [randomPosts, setRandomPosts] = useState([]);

  const getRandomPosts = () => {
    axios.get('/api/posts')
    .then(res => {
      setRandomPosts(res.data.data)
    })
    .catch(err => console.log(err.res))
  }

  useEffect(() => {
    getRandomPosts();
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-center mt-1'>     
          <ReactPlayer url={`https://www.youtube.com/embed/TvxL0HLLu2A`} />                         
        </div>
      </div>      
      <MyTitle title={'Services'}/>                                  
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
        <MyTitle title={'Places where we works'}/>                
      </div>
      <div className='row'>       
        <div className='col d-flex justify-content-around flex-wrap'>                 
          <h3>Didim</h3>           
          <h3>Didim</h3>           
          <h3>Didim</h3>                                           
        </div>     
      </div>
      <div className='row'>
        <MyTitle title={'Advantage List'}/>           
        <small>Birçok kişi tüm tadilat şirketlerinin aynı olduğunu ve sadece fiyat farkının olduğunu düşünüyor... Ama bu doğru değil.</small>          
      </div>
      <div className='row'>      
        <div className="col col-md-6 col-sm-12">   
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.7}>
            <div className="card mt-1 mb-1">
              <ListTask size={60}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>             
              </div>                      
            </div>            
          </AnimationOnScroll>                
        </div>  
        <div className="col col-md-6 col-sm-12">   
          <AnimationOnScroll animateIn="animate__fadeInRight" duration={1.7} delay={2}>
            <div className="card mt-1 mb-1">
              <ListTask size={60}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>             
              </div>                      
            </div>            
          </AnimationOnScroll>                
        </div>  
        <div className="col col-md-6 col-sm-12">   
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.7} delay={3}>
            <div className="card mt-1 mb-1">
              <ListTask size={60}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>             
              </div>                      
            </div>            
          </AnimationOnScroll>                
        </div>  
        <div className="col col-md-6 col-sm-12">   
          <AnimationOnScroll animateIn="animate__fadeInRight" duration={1.7} delay={4}>
            <div className="card mt-1 mb-1">
              <ListTask size={60}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>             
              </div>                      
            </div>            
          </AnimationOnScroll>                
        </div>  
        <div className="col col-md-6 col-sm-12">   
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.7} delay={5}>
            <div className="card mt-1 mb-1">
              <ListTask size={60}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>             
              </div>                      
            </div>            
          </AnimationOnScroll>                
        </div>  
        <div className="col col-md-6 col-sm-12">   
          <AnimationOnScroll animateIn="animate__fadeInRight" duration={1.7} delay={6}>
            <div className="card mt-1 mb-1">
              <ListTask size={60}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>             
              </div>                      
            </div>            
          </AnimationOnScroll>                
        </div>  
        <MyTitle title={'Our Works'}/>         
        <div className='w-100 mb-3'></div>
        <div className='row'>          
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.7}>
            <HomeSlider/>
          </AnimationOnScroll>
        </div>
        <MyTitle title={'Random Posts'}/> 
        <AnimationOnScroll  animateIn="animate__fadeInUp" duration={1.7}>
          <div className='row'>       
            {
              randomPosts.map(item => (             
                <PostCard key={item.id} item={item}/>                           
              ))
            }                            
          </div>     
        </AnimationOnScroll>   
        </div>        
    </div>
  )
}

export default HomePage;