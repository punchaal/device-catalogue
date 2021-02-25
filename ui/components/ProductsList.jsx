import React, { useEffect, useState } from "react";

import FlexGrid from "@tds/core-flex-grid";
import Card from "@tds/core-card";
import Image from "@tds/core-image";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import PriceLockup from "@tds/core-price-lockup";
import HairlineDivider from "@tds/core-hairline-divider";
import Paragraph from "@tds/core-paragraph";

const ProductList = ({items, type}) => {

  return (
    <div>
      <FlexGrid>
        <FlexGrid.Row>
          {items.map((product, index) => (
            <FlexGrid.Col key={index}>
              <Card>
                <FlexGrid.Row horizontalAlign="center">
                 <Image
                    src= {type==="watches" ? "public/images/watch.jpg" :"public/images/iphone.jpg"}
                    width={200}
                    height={250}
                    alt={ `Image of ${product.name}`} 
                  />

                </FlexGrid.Row>
                <Box vertical={3} between={1}>
                  <Heading level="h3" tag="h2">
                    {" "}
                    {product.brand}
                  </Heading>
                  <Heading level="h2" tag="h3">
                    {" "}
                    {product.name}
                  </Heading>
                </Box>
                <Box vertical={3}>
                  <PriceLockup
                    size="medium"
                    price={`${product.price}`}
                    signDirection="left"
                  />
                </Box>
                <Box between={3}>
                  <HairlineDivider />

                  <Paragraph>
                    TELUS Easy Payment and Bring-It-Back applied. Read legal
                    footnote Taxes due upfront.{" "}
                  </Paragraph>
                  <Paragraph>Retail price: $1130</Paragraph>
                </Box>
              </Card>
            </FlexGrid.Col>
          ))}
        </FlexGrid.Row>
      </FlexGrid>
    </div>
  );
};

export default ProductList;
