/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

function CategoryPath({ realData }) {
  const firstFeCategory = realData?.fe_category_path[0].display_name;
  const secondFeCategory = realData?.fe_category_path[1].display_name;
  const thirdFeCategory = realData?.fe_category_path[2].display_name;
  console.log(firstFeCategory, secondFeCategory, thirdFeCategory);
  return (
    <div>
      <div>
        <a></a>
      </div>
    </div>
  );
}

export default CategoryPath;

CategoryPath.propTypes = {
  realData: PropTypes.object,
};
