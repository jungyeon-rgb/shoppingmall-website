import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css/bundle";

export default function SwiperComponent() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      //navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
    >
      <SwiperSlide>
        <Link href="/products?category=pen">
          <Image src="/img/swiper/pen.jpg" alt="펜" fill />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=postcard">
          <Image src="/img/swiper/postcard.jpg" alt="엽서" fill />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=sticker">
          <Image src="/img/swiper/sticker.jpg" alt="스티커" fill />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=watch">
          <Image src="/img/swiper/watch.jpg" alt="시계" fill />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
