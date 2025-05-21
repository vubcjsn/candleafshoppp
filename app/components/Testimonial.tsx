"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  text: string;
  avatar: string;
  stars: number; // 4.5 = 4 full stars, 1 half
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
    text: "Raccomended for everyone",
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

// SVG for star (full and half)
function Star({ filled }: { filled: boolean }) {
  return filled ? (
    <svg width={22} height={22} viewBox="0 0 20 20" fill="#3DC47E">
      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
    </svg>
  ) : (
    <svg width={22} height={22} viewBox="0 0 20 20" fill="#3DC47E">
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

function Stars({ value }: { value: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<Star key={i} filled={true} />);
    } else if (value >= i - 0.5) {
      stars.push(<Star key={i} filled={false} />);
    }
  }
  return <div className="flex items-center justify-center mb-2">{stars}</div>;
}

export default function TestimonialsSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-[#EAF6F1]">
      <h2 className="text-4xl font-medium text-[#0B254B] mb-2">Testimonials</h2>
      <p className="text-[#5E6E89] text-lg mb-10">
        Some quotes from our happy customers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center p-8 min-h-[280px]"
          >
            <div className="w-[64px] h-[64px] rounded-full overflow-hidden mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={64}
                height={64}
                style={{ objectFit: "cover" }}
              />
            </div>
            <Stars value={t.stars} />
            <blockquote className="text-xl text-[#243046] font-medium text-center mb-2">
              “{t.text}”
            </blockquote>
            <span className="text-[#8A94A6] mt-2">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
