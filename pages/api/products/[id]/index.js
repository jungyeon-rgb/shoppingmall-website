export default function handler(req, res) {
  const productId = req.query.id;
  res.status(200).json({ id: productId, title: "상품명", price: 1000 });
}

export async function getServerSideProps({ params }) {
  //API를 호출해서 가져오는 경우
  const { id } = params;

  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const data = await response.json();

    return {
      props: {
        product: data,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
        error: {
          statusCode: error.statusCode,
          title: error.message,
        },
      },
    };
  }
}
