import React, { useState } from 'react'

const About = () => {
    const tabs=[
        {
            name:"Wallets",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut placerat felis. Etiam nec rhoncus purus, a sollicitudin turpis. Pellentesque sit amet justo purus. Cras ac interdum dui. Mauris placerat non metus eu venenatis. Nam eget ornare lorem, quis pulvinar lacus. Etiam mauris lorem, molestie eu sapien sed, suscipit faucibus nisi. Proin lobortis blandit mauris, sit amet tempus felis finibus fringilla. Phasellus mattis consectetur sagittis. Aenean bibendum scelerisque nulla in consequat. Nam sed lobortis velit, non porta sem. Vestibulum pharetra, lorem et malesuada volutpat, leo augue rhoncus dui, et auctor dolor arcu non ligula."
        },
        {
            name:"Trade",
            content:"Nullam eu ipsum nibh. Aenean egestas nibh eros, sit amet egestas turpis luctus ac. Nam euismod ac orci a congue. Nam ultricies rutrum nunc id sagittis. Phasellus varius in nibh non ullamcorper. Duis sit amet est nunc. Suspendisse potenti. Morbi rhoncus sagittis metus id tincidunt. Sed ut est commodo, euismod purus et, rutrum augue. Maecenas varius malesuada sem, nec ultrices dolor euismod eget. Donec sed luctus lacus, id venenatis libero. Maecenas tempor metus eget mauris commodo posuere. Nulla lacinia enim in congue venenatis. Morbi sit amet lacus eu nunc semper imperdiet. Morbi auctor metus at felis fringilla dignissim. Cras nec nunc id lectus pellentesque interdum."
        },
        {
            name:"Exchange",
            content:"Praesent imperdiet ligula non ligula egestas, et pretium metus tristique. Sed porta leo accumsan lacus lacinia, nec malesuada eros finibus. Donec rhoncus hendrerit nunc. Fusce accumsan leo quam. Vivamus eget euismod magna. Quisque id nulla at arcu vehicula laoreet. Etiam mattis eros in mauris faucibus, sed iaculis justo bibendum.Suspendisse potenti. In lobortis ipsum non hendrerit aliquet. Sed varius lacus et ex rhoncus porttitor. Sed pellentesque nunc lorem, vel suscipit neque vulputate ac. Vestibulum in rhoncus neque. Nam rutrum venenatis ante ultrices suscipit."
        },
    ]
    const [Tab,setTab]=useState(0);
  return (
    <div className='py-10 bg-white max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-6'>About Us</h2>
        <div className='flex flex-row items-start gap-6'>
            <div className='flex flex-col space-y-2 w-1/4'>
                {tabs.map((tab,index)=>(
                    <button key={index} className={`px-4 py-2 text-left font-bold rounded-lg ${Tab===index ? 'bg-purple-700 text-white':'text-black'}    `} onClick={()=>setTab(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className='w-3/4 text-gray-600 text-lg pl-4'>{tabs[Tab].content}</div>
        </div>
    </div> 
  )
}

export default About