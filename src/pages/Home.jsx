import React, { useState, useEffect } from "react";
import { banner, styles, ImageCard, Loader, FormField } from "../index.js";
import { useSelector } from 'react-redux'
import axios from "axios";
const RenderCard = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((img) => <ImageCard key={img._id} {...img} />);
  }
  return <h1 className="mt-5 font-bold text-xl uppercase"> {title}</h1>;
};

const Home = () => {
  const langage = useSelector((state) => state.langage.value)
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const handleSerachChange = (e) => {
    clearTimeout(searchTimeout )
    setSearch(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const result = allPost.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.prompt.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(result);
      }, 500)
    );
  };
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const posts = await axios.get("http://localhost:8080/api/v1/post");
        setAllPost(posts.data.reverse());
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="max-w-7xl  mx-auto min-h-full md:p-2 p-5">
      <div>
        <h1 className="font-extrabold text-white text-2xl mt-4">
          {langage.home_header}
        </h1>
        <p className="mt-2 text-lg">
      {langage.home_title}
        </p>
      </div>
      <div className="mt-16 ">
        <FormField labelName={langage.home_search_label}
        type="text"
        name="text"
        home
        placeholder={langage.home_search_placeholder}
        handleChange={handleSerachChange}/>
      </div>
      <div className="mt-10 ">
        {loading ? (
          <div className={`${styles.flex_box_row} justify-center`}>
            <Loader />
          </div>
        ) : (
          <>
            {search && (
              <h2 className="font-medium my-5 mr-3">
           {langage. home_showing_result} :  {" "}
                <span className="text-primary">{search}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {search ? (
                <RenderCard data={searchResult} title={langage.home_eror} />
              ) : (
                <RenderCard data={allPost} title={langage.home_eror}/>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
