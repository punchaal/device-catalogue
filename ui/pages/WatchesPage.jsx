import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../config.jsx";
import DisplayHeading from "@tds/core-display-heading";
import ProductList from "../components/ProductsList.jsx";
import Box from "@tds/core-box";

const WatchesPage = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        const getWatches = async () => {
          try {
            let watchesData = await axios.get(`${config.API_ENDPOINT}/watches`);
            setWatches(watchesData.data.data);
          } catch (e) {
            console.log(e);
          }
        };
        getWatches();
      }, []);
    
  return (
    <Box between={5} inset={4}>
      <DisplayHeading>Watches</DisplayHeading>
      <Box tag="section" inset={4} between={3}>
        <ProductList items={watches} type="watches" />
      </Box>
    </Box>
  );
};

export default WatchesPage;
