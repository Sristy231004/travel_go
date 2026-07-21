import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import { testimonials } from "../data/travelData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-sm">
            Read honest feedback and experiences shared by our recent travelers.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 mb-3 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                    "{item.review}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-blue-500"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;