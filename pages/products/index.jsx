import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  StyledProductAnchor,
  StyledProductContainer,
  StyledProductInfo,
  StyledProductPrice,
  StyledProductsContainer,
  StyledProductTitle,
} from '@/pages/products/products.styles';
import axios from 'axios';
import {console} from 'next/dist/compiled/@edge-runtime/primitives/console';

export default function Products(props) {
  const router = useRouter();
  const { products } = props;

  const handleProductClick = (e, targetUrl) => {
    e.preventDefault();
    router.push(`/products/${targetUrl}`);
  };

  return (
    <StyledProductsContainer>
      {products && products.length > 0 &&
          products.map((product) => {
          // 상품 정보 렌더링
          return (
            <StyledProductAnchor
              key={product.id}
              onClick={(e) => handleProductClick(e, product.slug)}
            >
              {/* 함수를 호출하여 상품의 'slug' 값으로 라우팅 */}
              <StyledProductContainer>
                <Image
                  src={product.image}
                  alt="product-image"
                  width={200}
                  height={200}
                />
                <StyledProductInfo>
                  <StyledProductTitle>{product.title}</StyledProductTitle>
                  {/* 렌더링하려면 `/${product.id}`이런 식으로 수정해야하나요? */}
                  <StyledProductPrice>
                    {product.price.toLocaleString()}
                  </StyledProductPrice>
                </StyledProductInfo>
              </StyledProductContainer>
            </StyledProductAnchor>
          );
        })}
    </StyledProductsContainer>
  );
}

export async function getServerSideProps({ params }) {
  
  try {
    const result = await axios.get('http://localhost:3001/api/products');
    if (result.status === 200) {
      return {
        props: {
          products: result.data,
        },
      };
    } else {
      return {
        props: {
          products: null,
          error: {
            statusCode: result.status,
            title: `${result.statusText} - ${result.request.url}`,
          },
        },
      };
    }
  } catch (err) {
    console.error(err);
    console.error(err.response);
    const statusCode = err.response ? err.response.status : '에발발';
    return {
      props: {
        products: null,
        error: {
          statusCode,
          title: err.response ? err.response.status : '에러발생',
        },
      },
    };
  }
}
