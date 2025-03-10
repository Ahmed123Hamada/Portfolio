import { BusinessCenter, BarChart, Settings, Lightbulb, PhoneIphone } from "@mui/icons-material";

const services = [
  {
    icon: <BusinessCenter fontSize="md" className="group-hover:text-blue-600" />, 
    title: "Lorem Ipsum",
    description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
  },
  {
    icon: <BarChart fontSize="md" className="group-hover:text-blue-600" />, 
    title: "Dolor Sitema",
    description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    icon: <Settings fontSize="md" className="group-hover:text-blue-600" />, 
    title: "Sed ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    icon: <Lightbulb fontSize="md" className="group-hover:text-blue-600" />, 
    title: "Magni Dolores",
    description: "Exceptetur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    icon: <PhoneIphone fontSize="md" className="group-hover:text-blue-600" />, 
    title: "Nemo Enim",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
  },
  {
    icon: <Settings fontSize="md" className="group-hover:text-blue-600" />, 
    title: "Eiusmod Tempor",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi."
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-white container ">
      <div className="container mx-auto px-4 text-start ">
        <h2 className="text-3xl font-bold text-black inline-block  py-2 ">Services</h2>
        <div className="w-[5%] h-1 bg-blue-600 rounded mt-2"></div> 
        <p className="mt-4 text-gray-600 max-w-xl text-start ">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 group cursor-pointer ">
              <div className="p-4 rounded-full bg-blue-400 border group-hover:border-blue-600 group-hover:bg-white text-white flex items-center justify-center duration-500">{service.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-black group-hover:text-blue-600 duration-500">{service.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}