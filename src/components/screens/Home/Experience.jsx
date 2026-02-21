import React from 'react'
import Container from '../../common/Container'
import image from "../../../assets/image.png"

const data = [
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },

  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    contentImage: image,
  },
]

const Experience = () => {
  return (
    <section className='py-24.75'>
      <Container>
        <div>
          <h2 className='font-bold lg:text-[50px] lg:leading-21.25 text-black'>
            Our Expertise and Experience
          </h2>
        </div>

        <div className='mt-[25px] flex flex-col md:flex-wrap md:flex-row items-center justify-between gap-7'>
          {data.map((card, index) => (
            <div className='w-full md:w-[48%] lg:w-auto relative overflow-hidden'>
              <img 
                className='w-full h-full rounded-2xl'
                src={card.contentImage}
                alt={card.title}
              />
              <div className='py-6 px-5 absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(19,19,19,1)_11%,rgba(19,19,19,0.21)_100%)]'>
                <h3 className='font-bold text-[24px] leading-[31px] text-white'>
                  {card.title}
                </h3>
                <p className='text-base font-normal leading-[22px] text-white mt-[18px]'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience