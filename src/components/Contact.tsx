// This is the contact section component for the tourism website
// It includes contact methods like email, phone, and address with icons
// I used react-icons for the icons and Tailwind CSS for styling
// The design is clean and matches the overall theme of the site
// I ensured responsiveness and accessibility in the layout
// I hope this helps visitors get in touch easily
// bg-cr-secondary for section background
// text-cr-primary for headings
// text-cr-light for descriptive text
// bg-cr-light for card backgrounds
// border-cr-light for card borders
// All colors are defined in the tailwind.config.js file
import { IconType } from "react-icons";// For icon types
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";// Icons for contact methods
interface ContactItemProps {
  icon: IconType;
  title: string;
  content: string;
}// Interface for individual contact items
// Contact item component
function ContactItem({ icon: Icon, title, content }: ContactItemProps) {
  return (
    <div className="text-center p-6 bg-cr-light rounded-xl border border-cr-light">
      <div className="text-4xl mb-4"><Icon /></div>
      <h3 className="text-xl font-bold text-cr-primary mb-2 font-display">{title}</h3>
      <p className="text-cr-light">{content}</p>
    </div>
  );
}

export default function Contact() {
  const contactItems = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "tourism@crossriverstate.gov.ng"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      content: "+234 (0) 8888888888"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      content: "Calabar, Cross River State, Nigeria"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cr-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cr-primary mb-4 font-display">Plan Your Visit</h2>
          <p className="text-xl text-cr-light">Get in touch with our tourism board for assistance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <ContactItem
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

