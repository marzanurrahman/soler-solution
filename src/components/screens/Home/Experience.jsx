import { useRef } from "react";
import Container from "../../common/Container";
import image from "../../../assets/image.png";

// Swiper core
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Swiper modules
import { Autoplay, Navigation } from "swiper/modules";

// Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

const Experience = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-[115px]">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-3xl leading-[40px] lg:text-[50px] lg:leading-[85px] text-black">
            Our Expertise and Experience
          </h2>

          {/* Custom Navigation */}
          <div className="flex gap-5">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-[25px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {data.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden">
                  <img
                    src={card.contentImage}
                    alt={card.title}
                    className="w-full rounded-[10px]"
                  />

                  <div className="absolute inset-0 rounded-[10px] py-6 px-5 bg-[linear-gradient(180deg,rgba(19,19,19,1)_11%,rgba(19,19,19,0.21)_100%)]">
                    <h3 className="font-bold text-[24px] leading-[31px] text-white w-[134px]">
                      {card.title}
                    </h3>

                    <p className="font-normal text-base leading-[22px] text-white mt-[18px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Experience;