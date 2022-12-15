import React from 'react';
import { SkillBar } from 'react-skillbars';

const Skills = () => {

  // const allSkill = [
  //   {
  //     id: 1,
  //     name: "HTML",
  //     position: "70"
  //   },
  //   {
  //     id: 2,
  //     name: "CSS",
  //     position: "60"
  //   },
  //   {
  //     id: 3,
  //     name: "GitHub",
  //     position: "50"
  //   },
  //   {
  //     id: 4,
  //     name: "Bootstrap",
  //     position: "60"
  //   },
  //   {
  //     id: 5,
  //     name: "Tailwind",
  //     position: "60"
  //   },
  //   {
  //     id: 6,
  //     name: "JavaScript",
  //     position: "50"
  //   },
  //   {
  //     id: 7,
  //     name: "React",
  //     position: "60"
  //   },
  //   {
  //     id: 8,
  //     name: "Firebase",
  //     position: "50"
  //   },
  //   {
  //     id: 9,
  //     name: "Node JS",
  //     position: "40"
  //   },
  //   {
  //     id: 10,
  //     name: "Express JS",
  //     position: "40"
  //   },
  //   {
  //     id: 11,
  //     name: "MongoDB",
  //     position: "40"
  //   },
  // ];

  const colors = {
    bar: 'rgb(74 222 128)',
    title: {
      text: ' #fff',
      background: 'rgb(31 41 55)'
    }
  };

  const skill = [
    { type: 'HTML', level: 70 },
    { type: 'CSS', level: 60 },
    { type: 'GitHub', level: 50 },
    { type: 'Bootstrap', level: 60 },
    { type: 'Tailwind', level: 60 },
    { type: 'JavaScript', level: 50 },
    { type: 'React', level: 60 },
    { type: 'Firebase', level: 50 },
    { type: 'Node JS', level: 40 },
    { type: 'Express JS', level: 40 },
    { type: 'MongoDB', level: 40 },
  ]

  return (
    <div className='mt-16' id='skill'>
      <h2 className='text-center text-white text-3xl'>MY <span className='text-primary'>SKILLS</span></h2>
      <div className='divider w-24 mx-auto'></div>
      <div className='divider w-16 mx-auto'></div>

      <div className='w-[90%] lg:pt-10 lg:w-[70%] mx-auto'>
        {/* {
          allSkill.map(skill => <div key={skill.id}
            className='bg-gray-800 py-6 pl-6 rounded-md text-2xl text-white'>
            <h3>{skill.name}</h3>
            <progress className="progress progress-primary w-56" value={skill.position} max="100"></progress>
          </div>)
        } */}
        <SkillBar skills={skill} colors={colors} />
      </div>

    </div>
  );
};

export default Skills;