import Image from "next/image";
import Link from "next/link";

function ProductItem(props) {
  const { title, image, price } = props.post;

  const imagePath = `./images/products/${image}`;
  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={300} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default ProductItem;
