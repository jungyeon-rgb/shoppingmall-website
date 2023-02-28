export default function handler(req, res) {
  const productId = req.query.id;
  res.status(200).json({ id: productId, title: "상품명", price: 1000 });
}
