import "./ImageList.css";
import ImageShow from "./ImageShow";
const ImageList = ({ images }) => {
  const renderImageShow = images.map((image) => {
    return <ImageShow className="image-show" image={image} key={image.id} />;
  });
  return <div className="image-list">{renderImageShow}</div>;
};
export default ImageList;
