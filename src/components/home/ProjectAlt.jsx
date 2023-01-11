import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import PortfolioCard from "./ProjectCardAlt";

const Portfolio = ({ heading, list, note }) => {
    const Apps = list.filter((x) => x.category === 'App')
    return (
        <Jumbotron fluid id="portfolio" className="bg-light m-0  target-section">
          <Container className="">
          
            <h2 className="display-4 pb-5 text-center">{heading}
            <div style={{"font-size": "1rem"}}><span>{note}</span></div>
            </h2>
           
            <PortfolioCategory products = {Apps} title="Apps" imgHeight="250" />
           </Container>
        </Jumbotron>);
};

const PortfolioCategory = ({ products, title, imgHeight }) => {
    return (
      <Container className="mb-2">
        <Row>
        {
            products.length &&
            products.map((app, index) =>  (
                <PortfolioCard
                key={`app-${index}`}
                id={`app-${index}`}
                imgHeight={imgHeight}
                value={app}
                />
            ))
        }
        </Row>
      </Container>
    );
  };
  
export default Portfolio;