import Heading from '../components/Heading'
import servicesBg from '../assets/services-bg.png';
import ServicesContent from '../components/services/ServicesContent';
const ContactPage = () => {
  return (
    <div>
      <Heading
        bgImg={servicesBg}
        title="SERVICES"
        subtitle="Comprehensive Web Development Services to Build, Enhance, and Transform Your Online Presence" 
        />
        <ServicesContent />
    </div>
  )
}

export default ContactPage