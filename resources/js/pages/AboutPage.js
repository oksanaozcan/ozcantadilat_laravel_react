import { AnimationOnScroll } from 'react-animation-on-scroll';
import AboutSlider from '../components/AboutSlider';
import MyTitle from '../components/MyTitle';

const AboutPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-2">
         <AnimationOnScroll animateIn="animate__fadeInBottomLeft" duration={2}>
           <h3>Merhaba, ben Erdal Özcan, size Özcan tadilat'ı tanıtmak istiyorum</h3>
           <p>2007 yılından buyana siz müşterilerimize tadilat ve dekorasyon dalında hizmet vermekteyiz. İşin büyüyü küçüğü olmaz prensibi ile müşterilerimizin her       isteğini yerine  getirmeye gayret gösteriyoruz. İş deneyimimi birçok büyük firmayla çalışarak geliştirdik. Bu firmalar dünya devleri arasında yer almaktadır Enka, Antyapı, Rönesans gibi firmalarla çalışıp büyük işler yaptık. Siz müşterilerimizi memnun edecek deneyime ve teknolojiye sahibiz sizlerle çalışmak bizim için bir onurdur.
           </p>
           <p> Didim/Akbük ve çevresinde siz müşterilerimize hizmet vermekteyiz Didim ve çevresinde birçok projeyi bitirdik ve halihazırda devam eden projelerimiz vardır bizi internet sayfamız sik müşteri yorumlarını yapılan işlerin adım adım takibini görebilirsiniz.
           </p>
         </AnimationOnScroll>
        </div>
        <div className="col mt-2">
          <AnimationOnScroll animateIn="animate__fadeInBottomRight" delay={1} duration={2}>
            <img src='https://doganerinsaat.com/wp-content/uploads/2020/10/Tadilat.jpg' alt='example img'/>
          </AnimationOnScroll>    
        </div>
      </div>

      <div className='row'>
        <MyTitle title={'Bazı çalışma günleri bakarsınız'}/>
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.7}>
          <AboutSlider/>
        </AnimationOnScroll>        
      </div>
      <div className='row'>
        <MyTitle title={'Çalışma aşamaları'}/>        
      </div>
    </div>
      
  )
}

export default AboutPage;