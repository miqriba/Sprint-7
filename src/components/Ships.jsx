import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShips } from "./shipsSlicer";

const Ships = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ships);
  useEffect(() => {
    dispatch(fetchShips());
  }, []);

  console.log(data);

  return (
    <div>
      {data.isLoading ? (
        <h1>Loading....</h1>
      ) : (
        data.map((e, index) => {
          <div key={index}>
            <h1>{e.name}</h1>
            <h2>{e.model}</h2>
          </div>;
        })
      )}
    </div>
  );
};

export default Ships;
