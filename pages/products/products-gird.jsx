import Products from "./products/index";
import classes from "./products/products-grid.module.css";

function ProductsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Products key={post.slug} post={post} />
        /* map을 사용하고 있기 때문에 key를 지정. 
  해당 리스트에 대한 업데이트를 렌더링할 때 react.js에서 필요로 하기 때문*/
        /* 모든 게시물에는 각 게시물의 고유 식별자인 slug 프로퍼티가 있어야함 */
        /* 이 이후에 featured-posts.js에서 PostsGrid를 사용할 수 있게 됨 */
      ))}
    </ul>
  );
}
/* 해당 게시물의 데이터는 외부로부터 전달받아야 하니 props를 전달받는다고 지정 */
/* 해당 리스트의 개별 게시물에는 PostItem에 필요한 모든 데이터가 있다고 가정 */
export default ProductsGrid;
