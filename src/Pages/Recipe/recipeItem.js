import { Link } from "react-router-dom";
import { PostList } from "../../common/recipe";
import { BasicImg } from "../../common/img";
const RecipeItem = ({ recipe }) => {
  return (
    <Link to={`/recipe/post/${recipe.recipe_key}`}>
      <PostList>
        {/* 낱개 게시글 설정 */}
        <BasicImg
          src={`http://localhost:8080/recipe/${recipe.recipe_image_path}`}
          alt="이미지 없음"
        ></BasicImg>
        <h3>{recipe.recipe_title}</h3>
        <div>조회수 {recipe.recipe_views}</div>
        <p>⭐({recipe.recipe_value})/5</p>
      </PostList>
    </Link>
  );
};

export default RecipeItem;
