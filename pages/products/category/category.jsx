import { useRouter } from "next/router";
import Image from "next/image";
import {
  StyledProductAnchor,
  StyledProductContainer,
  StyledProductInfo,
  StyledProductPrice,
  StyledProductsContainer,
  StyledProductTitle,
} from "@/pages/products/products.styles";
import axios from "axios";

function searchParam(key) {
  return new URLSearchParams(location.search).get(key);
}
// 체크하

export default function Products(props) {
  const { product } = props;
  const router = useRouter();
  const categoryValue = searchParam("category");

  const handleProductClick = (e, targetUrl) => {
    e.preventDefault();
    router.push(`/products?=category${targetUrl}`);
    // 체크하기
  };

  const filteredProduct = categoryValue
    ? product.filter((p) => p.category === categoryValue)
    : product;

  return (
    <StyledProductsContainer>
      {filteredProduct &&
        filteredProduct.map((product) => {
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

export async function getServerSideProps(context) {
  const { query } = context;
  const categoryValue = query.category;

  try {
    const result = await axios.get(
      `http://localhost:3000/api/products?category=${query.id}`
    );
    if (result.status === 200) {
      const filteredData = categoryValue
        ? result.data.filter((p) => p.category === categoryValue)
        : result.data;
      return {
        props: {
          product: filteredData,
        },
      };
    } else {
      return {
        props: {
          product: null,
          error: {
            statusCode: result.status,
            title: `${result.statusText} - ${result.request.url}`,
          },
        },
      };
    }
  } catch (err) {
    const statusCode = err.response ? err.response.status : "에러발생";
    console.error(err.response);
    return {
      props: {
        product: null,
        error: {
          statusCode,
          title: err.response ? err.response.status : "에러발생",
        },
      },
    };
  }
}
