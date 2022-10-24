import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card/index.js";
import api from "../../services/api.js";
import { Launch } from "../../types/Launch.js";

export default function HomePage() {
  const [launches, setLaunches] = useState<Launch[] | []>([]);
  const [hasMore, setHasMore] = useState({ more: false, nextPage: 1 });

  function fetchData() {
    const promisse = api.get(`/past?page=${hasMore.nextPage}`);

    promisse.then((obj) => {
      const { docs, hasNextPage, nextPage } = obj.data;
      setLaunches([...launches, ...docs]);
      setHasMore({ more: hasNextPage, nextPage });
    });

    promisse.catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main id="scrollableMain">
      <InfiniteScroll
        scrollableTarget="scrollableMain"
        className="scroller"
        hasMore={hasMore.more}
        next={fetchData}
        dataLength={launches.length}
        loader={<h4>Loading...</h4>}
        endMessage={<p className="text-center text-lg">You have seen it all</p>}
      >
        {launches?.map((item, index) => {
          const { crew, name, success, date_unix, links, id } = item;
          return (
            <Card
              key={index}
              crew={crew}
              name={name}
              success={success}
              date={date_unix}
              image={links.patch.small}
              id={id}
            />
          );
        })}
      </InfiniteScroll>
    </main>
  );
}
