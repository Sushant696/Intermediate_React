import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function DataFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      {data.map((p, i) => {
        return (
          <div key={i}>
            <h3>{p.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default DataFetch;
