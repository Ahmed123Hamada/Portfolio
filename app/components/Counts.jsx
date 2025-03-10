
// "use client";

// import { useEffect, useState } from "react";
// import { Smile, FolderKanban, Headphones, Users } from "lucide-react";

// const Counter = ({ endValue, duration }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const stepTime = duration / endValue;
//     const interval = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start >= endValue) clearInterval(interval);
//     }, stepTime);

//     return () => clearInterval(interval);
//   }, [endValue, duration]);

//   return <span className="text-3xl font-bold text-blue-500">{count}</span>;
// };

// const StatsSection = () => {
//   const stats = [
//     {
//       icon: <Smile size={48} className="text-blue-500 max-md:size-[32px]" />,
//       label: "Happy Clients",
//       description: "consequuntur quae",
//       value: 232,
//       duration: 3000,
//     },
//     {
//       icon: <FolderKanban size={48} className="text-blue-500 max-md:size-[32px]" />,
//       label: "Projects",
//       description: "adipisci atque cum quia aut",
//       value: 521,
//       duration: 1200,
//     },
//     {
//       icon: <Headphones size={48} className="text-blue-500 max-md:size-[32px]" />,
//       label: "Hours Of Support",
//       description: "aut commodi quaerat",
//       value: 1453,
//       duration: 1000,
//     },
//     {
//       icon: <Users size={48} className="text-blue-500 max-md:size-[32px]" />,
//       label: "Hard Workers",
//       description: "rerum asperiores dolor",
//       value: 32,
//       duration: 3000,
//     },
//   ];

//   return (
//     <div data-aos="fade-up" data-aos-delay="400"  className=" w-full grid grid-cols-4 max-md:grid-cols-2  max-md:gap-2 max-md:py-2  py-2 bg-white ">
//       {stats.map((stat, index) => (
//         <div key={index} className="flex  items-start text-center gap-x-1 gap-y-4 max-md:w-full">
//           {stat.icon}
//           <div className="flex flex-col justify-start items-start gap-1">
//           <Counter endValue={stat.value} duration={stat.duration} />
//           <h3 className="text-lg font-bold text-gray-800 text-start">{stat.label}</h3>
//           <p className="text-gray-500 text-sm text-start">{stat.description}</p>            
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsSection;
"use client";

import { useEffect, useState, useRef } from "react";
import { Smile, FolderKanban, Headphones, Users } from "lucide-react";

const Counter = ({ endValue, duration, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // تشغيل العدّ فقط عند رؤية العنصر

    let start = 0;
    const stepTime = duration / endValue;
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [endValue, duration, isVisible]);

  return <span className="text-3xl font-bold text-blue-500">{count}</span>;
};

const StatsSection = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: <Smile size={48} className="text-blue-500 max-md:size-[32px]" />,
      label: "Happy Clients",
      description: "consequuntur quae",
      value: 232,
      duration: 3000,
    },
    {
      icon: <FolderKanban size={48} className="text-blue-500 max-md:size-[32px]" />,
      label: "Projects",
      description: "adipisci atque cum quia aut",
      value: 521,
      duration: 1200,
    },
    {
      icon: <Headphones size={48} className="text-blue-500 max-md:size-[32px]" />,
      label: "Hours Of Support",
      description: "aut commodi quaerat",
      value: 1453,
      duration: 1000,
    },
    {
      icon: <Users size={48} className="text-blue-500 max-md:size-[32px]" />,
      label: "Hard Workers",
      description: "rerum asperiores dolor",
      value: 32,
      duration: 3000,
    },
  ];

  return (
    <div
      ref={statsRef}
      className="w-full grid grid-cols-4 max-md:grid-cols-2 max-md:gap-2 max-md:py-2 py-2 bg-white"
    >
      {stats.map((stat, index) => (
        <div key={index} className="flex items-start text-center gap-x-1 gap-y-4 max-md:w-full">
          {stat.icon}
          <div className="flex flex-col justify-start items-start gap-1">
            <Counter endValue={stat.value} duration={stat.duration} isVisible={isVisible} />
            <h3 className="text-lg font-bold text-gray-800 text-start">{stat.label}</h3>
            <p className="text-gray-500 text-sm text-start">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
