import ReactMarkdown from 'react-markdown';
import classes from './ProductContent.styles';
import ProductHeader from '@/components/Products/ProductContent/ProductContentHeader/ProductContentHeader';

export default function ProductContent(props) {
  const { id, maker, title, content, price, image } = props;

  return (
    <article className={classes.content}>
      <ProductHeader title={title} image={image} />
      <ReactMarkdown>{content}</ReactMarkdown>
      <h3>{price}</h3>
      <p>{maker}</p>
    </article>
  );
}
