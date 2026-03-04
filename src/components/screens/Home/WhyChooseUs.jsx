import React from 'react'
import Container from './../../common/Container';

const whyChooseData = [
  {
    number: "01",
    title: "Expertise and Experience",
    description: "Years of industry knowledge and expertise.",
  },
  {
    number: "02",
    title: "Extensive Network",
    description: "Strong relationships with leading companies.",
  },
  {
    number: "03",
    title: "Personalized Approach",
    description: "Solutions tailored for each customer.",
  },
  {
    number: "04",
    title: "Cost Savings",
    description: "Helping you reduce overall costs.",
  },
  {
    number: "05",
    title: "Hassle-Free Process",
    description: "We manage everything end to end.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10">

            {/* LEFT COLUMN */}
            <div>LEFT</div>

            {/* RIGHT COLUMN */}
            <div>RIGHT</div>

        </div>
    </section>
  )
}

export default WhyChooseUs