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
<<<<<<< HEAD
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
=======
  const posts = [
    {
      id: 1,
      title: 'Product 1',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-1',
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://picsum.photos/500',
      price: 2000,
      slug: 'product-2',
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
        id: 4,
      title: 'Product 4',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
        id: 5,
      title: 'Product 5',
      image: 'https://picsum.photos/500',
      price: 7777,
      slug: 'product-3',
    },
    {
        id: 6,
      title: 'Product 6',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
        id: 7,
      title: 'Product 7',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
        id: 8,
      title: 'Product 8',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      title: 'Product 9',
      image: 'https://picsum.photos/500',
      price: 2000,
      slug: 'product-3',
    },
    {
        id: 9,
      title: 'Product 10',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-3',
>>>>>>> 906d0016af37d18aa3c2c705e4d290596cb1b15b
    },
  ];

  return {
    props: {
<<<<<<< HEAD
      post,
=======
      posts,
>>>>>>> 906d0016af37d18aa3c2c705e4d290596cb1b15b
    },
  };
}
