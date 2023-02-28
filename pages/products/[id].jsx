import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductContent from '@/components/Products/ProductContent/productContent';
import axios from 'axios';

export default function PostDetailPage(props) {
  const { product, error } = props;
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect( () => {
    router.isReady && setIsLoading(false);
  }, []);

  if (error !== null)
    return (
      <div>
        Error {error.statusCode} {error.statusText}
      </div>
    );

  return (
    <div>
      {isLoading ? (
        <p>미아내요 조굼만 더 기다려줘유</p>
      ) : (
        <ul>
          <ProductContent
              {...product}
          />
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {

  try {
    const result = await axios.get(
      `http://localhost:3000/api/products/${params.id}`
    );

    if (result.status === 200) {
      return {
        props: {
          product: result.data,
          error: null,
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
    console.error(err.response);
    return {
      props: {
        product: null,
        error: {
          statusCode: err.response.status,
          title: err.response.statusText,
        },
      },
    };
  }
}
