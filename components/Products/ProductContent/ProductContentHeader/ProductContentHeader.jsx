import Image from 'next/image';
export default function ProductContentHeader({ title, image }) {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={image} alt="상품 이미지" width={200} height={150} />
    </header>
  );
}
