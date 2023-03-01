import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/components/Layout/Swiper";

import Image from "next/image";
import Link from "next/link";

export default function SwiperComponent() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      direction={"horizontal"}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      //      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <Link href="/products/category?category=pen">
          <Image src="/img/swiper/pen.jpg" alt="펜" width={250} height={200} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products/category?category=postcard">
          <Image
            src="/img/swiper/postcard.jpg"
            alt="엽서"
            width={250}
            height={200}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products/category?category=sticker">
          <Image
            src="/img/swiper/sticker.jpg"
            alt="스티커"
            width={250}
            height={200}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products/category?category=watch">
          <Image
            src="/img/swiper/watch.jpg"
            alt="시계"
            width={250}
            height={200}
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
