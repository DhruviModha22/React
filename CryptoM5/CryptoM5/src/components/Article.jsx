import React from 'react'

const article=[
    {
        id:1,
        title:"Crypto Wallets",
        description:"Lorem ipsum dolor",
        image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features1.jpg",
        authorImage:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face1.jpg",
    },
    {
        id:2,
        title:"Margin Trades",
        description:"Lorem ipsum dolor",
        image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features2.jpg",
        authorImage:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face2.jpg",
    },
    {
        id:3,
        title:"Exchange",
        description:"Lorem ipsum dolor",
        image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features3.jpg",
        authorImage:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face3.jpg",
    },
    {
        id:4,
        title:"Cryptocurrency",
        description:"Lorem ipsum dolor",
        image:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg",
        authorImage:"https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face4.jpg",
    },

]
const Article = () => {
  return (
    <section className='py-12 bg-gray-50 text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Article</h2>
        <div className='w-16 h-1 bg-purple-500 mx-auto mb-8'></div>
        <div className='grid md:grid-cols-4 gap-3 px-4 md:px-12'>
            {article.map((article)=>(
                <div key={article.id} className='bg-white p-4 rounded-lg shadow-lg relative'>
                    <div className='relative'>
                        <img src={article.image} alt="" className='rounded-lg w-full h-92 object-cover'/>
                        <img src={article.authorImage} alt="" className='absolute top-2 left-2 w-12 h-12 rounded-full border-2 border-white' />
                        <span className='absolute top-10 left-9 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        ✓
                        </span>
                    </div>
                    <div className='mt-4 text-left'>
                        <h3 className='text-2xl font-bold text-gray-900'>{article.title}</h3>
                        <p className='text-gray-500 text-lg'>{article.description}</p>
                        <a href="#" className='text-purple-600 font-bold mt-3 block text-lg'>
                            Read More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Article