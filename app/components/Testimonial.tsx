"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  text: string;
  avatar: string;
  stars: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Luisa",
    text: "I love it! No more air fresheners",
    avatar: "/images/testimonials/luisa.jpg",
    stars: 4.5,
  },
  {
    name: "Edoardo",
    text: "Romended for everyone",
    avatar: "/images/testimonials/edoardo.jpg",
    stars: 5,
  },
  {
    name: "Mart",
    text: "Looks very natural, the smell is awesome",
    avatar: "/images/testimonials/mart.jpg",
    stars: 4.5,
  },
];

function Star({ filled, size = 22 }: { filled: boolean; size?: number }) {
  return filled ? (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="#3DC47E">
      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="#3DC47E">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="#3DC47E" />
          <stop offset="50%" stopColor="#E4ECE8" />
        </linearGradient>
      </defs>
      <path
        d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"
        fill="url(#half)"
      />
    </svg>
  );
}

function Stars({ value, size = 22 }: { value: number; size?: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<Star key={i} filled={true} size={size} />);
    } else if (value >= i - 0.5) {
      stars.push(<Star key={i} filled={false} size={size} />);
    }
  }
  return (
    <div className="flex items-center justify-center mb-2 sm:mb-3">{stars}</div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-[#EAF6F1] px-4">
      <h2 className="text-4xl font-medium text-[#0B254B]  mb-1 sm:mb-2">
        Testimonials
      </h2>
      <p className="text-[#5E6E89]  text-sm sm:text-lg mb-6 sm:mb-10 text-center ">
        Some quotes from our happy customers
      </p>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-5xl">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 sm:p-8  min-h-[200px]  sm:min-h-[280px]"
          >
            <div className="w-12 h-12 sm:w-[64px] sm:h-[64px] rounded-full overflow-hidden mb-2 sm:mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={64}
                height={64}
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
            </div>
            <Stars value={t.stars} size={18} />
            <blockquote className="text-base sm:text-xl text-[#243046] font-medium text-center mb-1 sm:mb-2">
              “{t.text}”
            </blockquote>
            <span className="text-[#8A94A6] text-sm sm:text-base mt-1 sm:mt-2">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
