import Accordion from './Accordion';
import { useState } from 'react';

const Func = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: 'BACHELORS IN SOFTWARE ENGINEERING',
      data: `A Bachelor's in Software Engineering is a comprehensive program that focuses on the principles and practices of designing, developing, and maintaining software systems. The curriculum covers various aspects of software development, including programming, software design, algorithms, data structures, software testing, and project management. Students gain hands-on experience through projects and internships, preparing them for careers in the tech industry as software developers, engineers, and analysts. The program also emphasizes problem-solving skills, teamwork, and effective communication, essential for success in the dynamic field of software engineering.`,
      isOpen: false
    },
    {
      key: 2,
      title: 'HIGH SCHOOL SECONDARY EDUCATION',
      data: `I have completed my high school from FFCG located in islamabad. i did my pre-medical after which i switched to engineering feild by taking additional maths exams.`,
      isOpen: false
    },

  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>

      {/* Funcs section */}

      <div style={{ padding: '6rem' }}>
        <h1 className='text-2xl mx-auto text-green-800' style={{ color: 'black', fontSize: '40px', paddingBottom: '2rem', textAlign: 'left', marginBottom: '4.5rem' }}>MY EDUCATION</h1>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}

      </div>

    </div>
  );
};

export default Func; 
