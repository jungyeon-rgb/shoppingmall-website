import ReactMarkdown from "react-markdown";

// import ProductHeader from './post-header';
import classes from "./product-content.styles";
import ProductHeader from "@/components/Product/product-detail/product-header";

export default function ProductContent(productId) {
  const imagePath = `/images/posts/${DUMMY_PRODUCT.slug}/${DUMMY_PRODUCT.image}`;

  return (
    <article className={classes.content}>
      <ProductHeader title={DUMMY_PRODUCT.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_PRODUCT.content}</ReactMarkdown>
      <h3>{DUMMY_PRODUCT.price}</h3>
      <p>{DUMMY_PRODUCT.maker}</p>
    </article>
  );
}

const DUMMY_PRODUCT = [
  {
    id: 1,
    title: "Product 1",
    image: "https://picsum.photos/500",
    price: 1000,
    slug: "product-1",
    content: "# 완전 멋진 물건이다",
    maker: "경은문구사",
  },
];
