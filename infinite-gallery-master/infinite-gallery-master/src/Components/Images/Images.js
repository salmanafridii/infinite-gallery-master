import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "../Image/Image";
import "./styles.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Images() {
  const [images, setImages] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_APIKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoaded(true);
      });
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_APIKEY}`,
      },
    });

    setImages(response.data.results);
  };

  return (
    <div>
      <SearchBar userSubmit={onSearchSubmit} />{" "}
      <InfiniteScroll
        dataLength={images}
        next={() => fetchImages(5)}
        hasMore={true}
        loader={
          <img
            src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
            alt="loading"
            style={{
              width: "100px",
            }}
          />
        }
      >
        <div
          className="image-grid"
          style={{
            marginTop: "30px",
          }}
        >
          {" "}
          {isLoaded
            ? images.map((image, index) => (
                <Image
                  url={image.urls.regular}
                  key={index}
                  className="image-item"
                />
              ))
            : ""}{" "}
        </div>{" "}
      </InfiniteScroll>{" "}
    </div>
  );
}
