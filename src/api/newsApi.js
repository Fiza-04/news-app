const fetchData = async () => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const startDate = new Date().toISOString();

  try {
    const url = `https://api.currentsapi.services/v1/latest-news?language=en&country=GB&start_date=${startDate}&page_size=7&apiKey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Data wasn't found!");
      }
    }

    const data = await response.json();

    return data.news;
  } catch (error) {
    console.log("error: ", error);
  }
};

export default fetchData;
