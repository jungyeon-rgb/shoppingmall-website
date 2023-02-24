/* 선택한 게시물의 메인 제목이나 이미지를 포함하는
 메인 헤더 데이터가 들어갈 파일까지 생성 */
import Image from 'next/image';

export default function ProductHeader(props) {
  const { id, maker, slug, title, content, price, image } = props;

  return (
    <header>
      <h1>{title}</h1>
      <Image scr={image} alt={title} width={200} height={150} />
    </header>
  );
}
