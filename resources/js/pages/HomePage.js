import ReactPlayer from 'react-player'

const HomePage = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-center mt-1'>
          <ReactPlayer url={`https://www.youtube.com/embed/TvxL0HLLu2A`} />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;