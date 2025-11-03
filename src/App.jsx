import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const response = await searchImages(term);
    setImages(response);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};
export default App;
