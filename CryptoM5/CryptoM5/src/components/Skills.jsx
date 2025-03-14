import React from 'react'

const Skills = () => {
    const skills=[
        {name:"Analysis", percentage:"80%"},
        {name:"Exchange", percentage:"70%"},
        {name:"Marketing", percentage:"90%"},
        {name:"Trade", percentage:"50%"},
        {name:"Processing", percentage:"75%"},
        {name:"Margin Trade", percentage:"60%"},
    ]
  return (
    <div className='flex flex-col items-center py-10 px-6'>
        <h1 className='text-4xl font-bold mb-8'>Our Skills</h1>
        <div className='grid grid-cols-3 lg-grid-cols-3 gap-6 w-full max-w-4xl'>
            {skills.map((skill,index)=>(
                <div key={index} className='w-full'>
                    <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                        {skill.name}
                    </h2>
                    <div className='w-full bg-gray-300 rounded-full h-3'>
                        <div className='bg-indigo-900 h-3 rounded-full' style={{width:skill.percentage}}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills