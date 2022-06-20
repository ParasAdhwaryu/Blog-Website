import React from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
import { Parallax } from "react-parallax";
import parallaxbg from "../components/parallaxbg.jpg";
import Typewriter from 'typewriter-effect';
function Items(props) {
  const [blogs, Setblogs] = useState([]);
  const [refresh, Setrefresh] = useState([]);
  const [allBlogs, Setall] = useState([]);
  const blogref = collection(db, "Blogs");
  const [search, Setsearch] = useState("");
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogref);
      const arr = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      Setall(arr);
      if (props.type === "home") {
        Setblogs(arr);
        Setrefresh(arr);
      } else {
        const items = arr.filter((element) => {
          return element.blogtype.toLowerCase() === props.type.toLowerCase();
        });
        Setblogs(items);
        Setrefresh(items);
      }
    };
    getBlogs();
    // eslint-disable-next-line
  }, [props.type]);
  const onChangehandler = (e) => {
    if (!e.target.value) {
      Setblogs(blogs);
    }
    Setsearch(e.target.value);
  };
  const onClickhandler = (e) => {
    e.preventDefault();
    const items = allBlogs?.filter((element) => {
      return (
        element.blogtype.toLowerCase() === search.toLowerCase() ||
        element.author.toLowerCase() === search.toLowerCase()
      );
    });
    Setblogs(items);
    Setsearch("");
  };
  const reload = (e) => {
    e.preventDefault();
    Setblogs(refresh);
    Setsearch("");
  };
  
  return (
    <>
      <Parallax bgImage={parallaxbg}>
        <div
          className="d-flex flex-wrap"
          style={{
            height: "300px",
            marginTop: "200px",
            marginLeft: "150px",
          }}
        >
          <Search
            handleChange={onChangehandler}
            clickHandler={onClickhandler}
            val={search}
          />
        </div>
        <div className="d-flex flex-wrap" style={{marginLeft:'450px' }}>
        <div className="d-flex flx-wrap justify-content-center" style={{ width: "50%", marginTop: "-150px",color:'white',fontWeight:'bold',fontSize:'30px' }}>
          <Typewriter
            options={{
              strings: ["Welcome to the","World of blogs.","“The first step in blogging is not...", "writing them but reading them.“","“Blogging is a communications...","mechanism handed to us by the...", "long tail of the Internet.”"],
              autoStart: true,
              loop: true,
              delay:60,
              deleteSpeed:60,
              cursor:'_',
            }}
          />
          </div>
        </div>
      </Parallax>
      {blogs.length !== 0 ? (
        <>
          <div className="container ">
            <div className="row row-cols-auto" style={{ marginTop: "50px" }}>
              {blogs.map((element,indx) => {
                return (
                  <div className="col-sm-4 d-flex justify-space-evenly my-5">
                    <Card
                      author={element.author}
                      blog={element.blog}
                      blogtype={element.blogtype}
                      image={element.image}
                      email={element.email}
                      id={element.id}
                      key={indx}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="container justify-content-center"
            style={{ textAlign: "center", marginTop: "150px" }}
          >
            <h1>Oops!! your search value is not present</h1>
            <br />
            <button
              className="btn btn-dark"
              style={{ textDecoration: "none", color: "white" }}
              onClick={(e) => {
                reload(e);
              }}
            >
              Go back
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Items;
