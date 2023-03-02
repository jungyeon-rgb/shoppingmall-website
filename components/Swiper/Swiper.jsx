import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import penImage from '../../public/img/swiper/pen.png';
import postcardImage from '../../public/img/swiper/postcard.png';
import stickerImage from '../../public/img/swiper/sticker.png';
import writeImage from '../../public/img/swiper/write.png';

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
          <Image src={penImage} alt="펜" fill />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=postcard">
          <Image src={postcardImage} alt="엽서" fill />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=sticker">
          <Image src={stickerImage} alt="스티커" fill />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=write">
          <Image src={writeImage} alt="필기구" fill />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
