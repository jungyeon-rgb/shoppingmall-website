import ReactMarkdown from 'react-markdown';
import classes from './ProductContent.styles';
import ProductHeader from '@/components/Products/ProductContent/ProductContentHeader/ProductContentHeader';
import { ProductContentContainer } from '@/components/Products/ProductContent/ProductContent.styles';

export default function ProductContent(props) {
  const { id, maker, title, content, price, image } = props;

  return (
    <ProductContentContainer>
      <ProductHeader title={title} image={image} />
      <ReactMarkdown>{content}</ReactMarkdown>
      <h3>{price}</h3>
      <p>{maker}</p>
    </ProductContentContainer>
  );
}
