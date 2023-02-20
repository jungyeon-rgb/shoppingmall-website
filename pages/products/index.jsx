<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import styles from "./productItem.modules.css";
=======
import Image from 'next/image';
import Link from 'next/link';
import styles from './productItem.module.css';
>>>>>>> 8171babb3a1b3efd1c1f647aec1d6fc25f52edd8

export default function Products(props) {
  const { title, image, price } = props.post;

  return (
    <li className={styles.post}>
<<<<<<< HEAD
      <Link>
        <a>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width={300} height={300} />
          </div>
          <div className={styles.content}>
=======
      <Link href={'/'}>
        <div>
          <div>
            <Image src={image} alt={title} width={300} height={300} />
          </div>
          <div>
>>>>>>> 8171babb3a1b3efd1c1f647aec1d6fc25f52edd8
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export async function getServerSideProps() {
  // const res = await fetch('http://localhost:3000/api/products');
  // const posts = await res.json();
  const post = {
    title: 'test',
    image: 'https://picsum.photos/500',
    price:  1000,
  };

  return { props: { post } };
}