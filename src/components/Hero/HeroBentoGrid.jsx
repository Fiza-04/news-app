import { useEffect, useState } from "react";
import "./HeroBentoGrid.css";
import fetchData from "../../api/newsApi";
import notFound from "../../../public/assets/not-found.jpg";

const HeroBentoGrid = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const imageHandling = (index) => {
    if (newsData[index]?.image === "None") {
      return notFound;
    } else {
      return newsData[index]?.image;
    }
  };

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const data = await fetchData();
        console.log(data);
        setNewsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setIsLoading(false);
      }
    };

    getNewsData();
  }, []);

  if (isLoading) {
    return <h6>Loading ....</h6>;
  }

  if (newsData.length === 0) {
    return <p>No news available.</p>;
  }

  return (
    <main className="main-bento-wrapper">
      <div className="bento-wrapper">
        <section className="bento-box-1">
          <img src={imageHandling(0)} alt="" />
          <div className="main-news">
            <h1>{newsData[0]?.title}</h1>
            <div className="bento-box-1-data">
              <p>{newsData[0]?.description}</p>
              <a href="">Read More</a>
            </div>
          </div>
        </section>
        <section className="bento-box-2">
          <h3 className="bento-box-2-heading">Hot Topics</h3>
          {newsData.slice(4, 7).map((data, index) => (
            <article key={index}>
              <h4>{data?.title}</h4>
              <p>{data?.description}</p>
            </article>
          ))}
        </section>
        <section className="bento-box-3">
          {newsData.slice(0, 3).map((newsItem, index) => (
            <article key={index}>
              <img
                src={imageHandling(index)}
                alt="no image"
                className="bento-box-3-image"
              />
              <div className="bento-box-3-data">
                <h4>{index + 1}</h4>
                <h3>{newsItem?.title}</h3>
                <p>{newsItem?.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default HeroBentoGrid;
