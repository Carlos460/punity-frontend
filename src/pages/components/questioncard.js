import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function questionCards() {
  return (
    <div>
      <Card className="w-5 m-2 border rounded-0" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>
            <Link className="title-link" href="/hello">
              Card Title
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Author - Date published
          </Card.Subtitle>
          <Card.Text className="">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the
            card title and make up the bulk of the card'Some quick example text
            to build on the card title and make
          </Card.Text>
          <div className="link-container">
            <Link className="link" to="#">
              Read More
            </Link>
            <Link className="link" to="#">
              Reply
            </Link>
          </div>
        </Card.Body>
      </Card>
      <style jsx>{`
        .link-container {
          position: absolute;
          bottom: 0.4rem;
        }
        .link,
        .link:hover {
          color: var(--primary-color);
          margin-right: 0.8rem;
        }
        .title-link {
          color: black;
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.2;
        }
        .title-link:hover {
          color: var(--primary-color);
        }
      `}</style>
    </div>
  );
}

export default questionCards;
