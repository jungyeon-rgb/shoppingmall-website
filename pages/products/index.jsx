import Image from 'next/image';
import Link from 'next/link';
import styles from './productItem.module.css';

function ProductItem(props) {
  const { title, image, price } = props.post;

  const imagePath = `./images/products/${image}`;
  return (
    <li className={styles.post}>
      <Link>
        <a>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width={300} height={300} />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default ProductItem;
