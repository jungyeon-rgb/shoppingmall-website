import Image from "next/image";
import Link from "next/link";
import styles from "./productItem.module.css";
import ProductsGrid from "./products-grid";

export default function Products(props) {
  const { title, image, price, slug } = props.post;
  let imagePath = `/img/products/${slug}`;
  return (
    <li className={styles.post}>
      <Link href={"/"}>
        <div>
          <div>
            <Image src={image} alt={title} width={300} height={300} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
        </div>
      </Link>
      <ProductsGrid />
    </li>
  );
}

export async function getServerSideProps() {
  // API를 호출해서 상품 데이터를 가져오는 경우
  // const res = await fetch('http://localhost:3000/api/products');
  // const products = await res.json();

  // 임시 데이터로 대체
  const post = [
    {
      title: "Product 1",
      image: "item01",
      price: 1000,
      slug: "product-1",
    },
    {
      title: "Product 2",
      image: "https://picsum.photos/500",
      price: 2000,
      slug: "product-2",
    },
    {
      title: "Product 3",
      image: "item01",
      price: 3000,
      slug: "product-3",
    },
  ];

  return {
    props: {
      post,
    },
  };
}
