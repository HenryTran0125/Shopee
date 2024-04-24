/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import Header from "../ui/Header";
import SearchingBody from "../ui/SearchingBody";

function SearchingPage() {
  return (
    <div>
      <Header />
      <SearchingBody />
    </div>
  );
}

export default SearchingPage;
