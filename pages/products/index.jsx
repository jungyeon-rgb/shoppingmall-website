import Image from 'next/image';
import Link from 'next/link';
import styles from './productItem.module.css';

export default function Products(props) {
  const { title, image, price } = props.post;

  return (
    <li className={styles.post}>
      <Link href={'/'}>
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