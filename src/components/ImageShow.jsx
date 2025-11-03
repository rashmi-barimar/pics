const ImageShow = ({ image, className }) => {
  return (
    <img
      className={className}
      src={image.urls.small}
      alt={image.alt_description}
    />
  );
};
export default ImageShow;
