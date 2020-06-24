import React from "react";
import Post from "./Post";
import Button from "@material-ui/core/Button";

export default function PostsList({ posts, setPage, page }) {
  const handleNextButton = () => {
    setPage((prevState) => prevState + 1);
  };

  const handlePrevButton = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div>
      {posts.hits ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          {posts.hits.map((post, id) => (
            <Post post={post} key={id} />
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
      <div style={{ display: "flex", marginLeft: 100, marginTop:30 }}>
        {page ? (
          <div>
          <Button variant="contained" onClick={handlePrevButton}>
            Prev
          </Button>
          </div>
        ) : null}
        <div style={{marginLeft:10}}>
        <Button variant="contained" onClick={handleNextButton}>
          Next
        </Button>
        </div>
        <p style={{marginLeft: 20}}>page {page + 1}</p>
      </div>
    </div>
  );
}
