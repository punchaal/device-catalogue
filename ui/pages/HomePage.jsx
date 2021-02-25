import React from "react";
import Box from "@tds/core-box";
import FlexGrid from "@tds/core-flex-grid";
import Card from "@tds/core-card";
import Image from "@tds/core-image";
import ChevronLink from "@tds/core-chevron-link";

const HomePage = () => {
  return (
    <div>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col>
            <Box vertical={5} between={1}>
              <Card>
                <FlexGrid.Row horizontalAlign="center">
                  <Image
                    src="public/images/watch.jpg"
                    width={191}
                    height={238}
                    alt="Image of a watch"
                  />
                </FlexGrid.Row>
                <FlexGrid.Row horizontalAlign="center">
                  <Box vertical={5} between={1}>
                    <ChevronLink href="/watches"> Watches</ChevronLink>
                  </Box>
                </FlexGrid.Row>
              </Card>
            </Box>
          </FlexGrid.Col>

          <FlexGrid.Col>
            <Box vertical={5} between={1}>
              <Card>
                <FlexGrid.Row horizontalAlign="center">
                  <Image
                    src="public/images/iphone.jpg"
                    width={191}
                    height={238}
                    alt="Image of an iphone"
                  />
                </FlexGrid.Row>
                <FlexGrid.Row horizontalAlign="center">
                  <Box vertical={5} between={1}>
                    <ChevronLink href="/phones"> iPhones</ChevronLink>
                  </Box>
                </FlexGrid.Row>
              </Card>
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </div>
  );
};

export default HomePage;
