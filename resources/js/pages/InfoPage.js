import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const InfoPage = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '8e0a4645c6748adbf8a9ff5551754bac',
    lat: '37.3756',
    lon: '27.2678',
    lang: 'tr',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className='container'>
      <div className='row mt-2'>
        <AnimationOnScroll className='col col-md-6 col-sm-12' animateIn="animate__fadeInBottomLeft" delay={1} duration={2}>
          <div>          
            <h1>Some info sjfsjf skfsf sifjsf sfiijsif sijfsjnf</h1>                    
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll className='col col-md-6 col-sm-12' animateIn="animate__fadeInBottomRight" delay={1} duration={2}>    
          <div>              
            <ReactWeather
              isLoading={isLoading}
              errorMessage={errorMessage}
              data={data}
              lang="tr"
              locationLabel="Didim"
              unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
              showForecast
            />         
          </div>
        </AnimationOnScroll>
      </div>      
    </div>    
  );
}

export default InfoPage;