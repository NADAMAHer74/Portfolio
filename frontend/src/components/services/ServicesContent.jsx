import SerOne from "../../assets/service-num-1.png"
import SerTwo from "../../assets/service-num-2.png"
import SerThree from "../../assets/service-num-3.png"
import SerFour from "../../assets/service-num-4.png"

const ServicesContent = () => {
  const services = [
    {
      id: 1,
      imageSrc: SerOne,
      title: "Custom Web Application Development",
      description:
        "Transform your unique business ideas into powerful, tailor-made web applications. Our custom web application development service is designed to deliver solutions that align perfectly with your business goals and workflows.",
    },
    {
      id: 2,
      imageSrc: SerTwo,
      title: "Profiles & Portfolios",
      description:
        "Showcase your brand, expertise, and achievements with stunning portfolio and profile applications designed to make a lasting impression. Whether you're an individual looking to highlight your skills or a business aiming to present your story and values, we create sleek, tailored solutions that resonate with your audience.",
    },
    {
      id: 3,
      imageSrc: SerThree,
      title: "E-Commerce Solutions",
      description:
        "Empower your business with a feature-rich, scalable, and secure e-commerce platform that delivers exceptional shopping experiences. Our e-commerce solutions are designed to help you sell more effectively, reach a wider audience, and grow your online presence. We create tailored e-commerce websites that align with your brand and goals.",
    },
    {
      id: 4,
      imageSrc: SerFour,
      title: "Blog Applications",
      description:
        "Share your ideas, stories, and expertise with a modern, feature-rich blog application tailored to your needs. Whether you’re a personal blogger, a business, or a media outlet, we build intuitive platforms that make content creation and management effortless while ensuring an engaging experience for your readers.",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={service.imageSrc}
                alt={service.title}
                className="h-60 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;