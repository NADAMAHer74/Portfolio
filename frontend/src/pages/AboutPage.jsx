import Heading from '../components/Heading'
import aboutBg from '../assets/about-bg.png';
import AboutContent from '../components/about/AboutContent';

const AboutPage = () => {
  return (
    <div>
      <Heading
        bgImg={aboutBg}
        title="ABOUT US"
        subtitle="We are a team of experienced developers and designers who specialize in creating user-friendly and visually stunning websites and applications." 
      />
      <AboutContent />
    </div>
  )
}

export default AboutPage