import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../config.jsx";
import DisplayHeading from "@tds/core-display-heading";
import ProductList from "../components/ProductsList.jsx";
import Box from "@tds/core-box";

const PhonesPage = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        const getPhones = async () => {
          try {
            let phonesData = await axios.get(`${config.API_ENDPOINT}/iphones`);
            setPhones(phonesData.data.data);
          } catch (e) {
            console.log(e);
          }
        };
        getPhones();
      }, []);
    
  return (
    <Box between={5} inset={4}>
      <DisplayHeading>iPhones</DisplayHeading>
      <Box tag="section" inset={4} between={3}>
        <ProductList items={phones} type="phones"  />
      </Box>
    </Box>
  );
};

export default PhonesPage;
