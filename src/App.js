import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchTerm } from "./actions";
import SearchBar from "./components/SearchBar";
import PostsList from "./components/PostsList";

const baseUrl = `https://hn.algolia.com/api/v1/search?query=`;
const DEFAULT_HITS = 20;

function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  async function getData() {
    const response = await fetch(
      `${baseUrl}${query}&page=${page}&hitsPerPage=${DEFAULT_HITS}`
    );
    const data = await response.json();
    setPosts(data);
    console.log(data);
    dispatch(addSearchTerm(query));
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} getData={getData} setPage={setPage}/>
      <PostsList posts={posts} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
