import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
function Createblog() {
  let url = window.location.href;
  let urla = url.split("/");
  let len = urla.length - 1;
  console.log(urla);
  const [obj, Setobj] = useState({
    author: "",
    email: "",
    blog: "",
    blogtype: "",
    image: "",
  });
  const blogref = collection(db, "Blogs");
  useEffect(() => {
    if (String(urla[len]) !== "createblog") {
      const getBlogs = async () => {
        const data = await getDocs(blogref);
        const arr = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const items = arr.filter((element) => {
          return String(element.id) === String(urla[len]);
        });
        Setobj({
          author: items[0].author,
          email: items[0].email,
          blog: items[0].blog,
          blogtype: items[0].blogtype,
          image: items[0].image,
        });
      };
      getBlogs();
    }
    // eslint-disable-next-line
  }, [url]);
  const onDelete = async () => {
    await deleteDoc(doc(db, "Blogs", urla[len]));
  };
  let name, value;
  const updateDetails = (e) => {
    name = e.target.name;
    value = e.target.value;
    Setobj({ ...obj, [name]: value });
  };
  const publishBlog = async (e) => {
    e.preventDefault();
    onDelete();
    const { author, email, blog, blogtype, image } = obj;
    if (
      author !== "" &&
      email !== "" &&
      blog !== "" &&
      blogtype !== "" &&
      image !== ""
    ) {
      await addDoc(collection(db, "Blogs"), {
        author,
        email,
        blog,
        blogtype,
        image,
      })
        .then(() => {
          urla[len] === "createblog"
            ? alert("Your Blog Is Published Successfuly")
            : alert("Your Data Is Updated Successfuly");
        })
        .catch((err) => {
          alert(err.message);
        });
      Setobj({
        author: "",
        email: "",
        blog: "",
        blogtype: "",
        image: "",
      });
    } else {
      alert("Kindly fill all the given fields");
      Setobj({
        author: "",
        email: "",
        blog: "",
        blogtype: "",
        image: "",
      });
    }
  };
  return (
    <div
      className="container justify-content-center"
      style={{ marginTop: "200px", width: "50%" }}
    >
      <form className="row g-3" autoComplete="off">
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="form-control"
            value={obj.email}
            placeholder="Enter your email-id here"
            onChange={updateDetails}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="author"
            className="form-control"
            placeholder="Enter Your name"
            value={obj.author}
            onChange={updateDetails}
            required
          />
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Write your blog here"
            name="blog"
            value={obj.blog}
            onChange={updateDetails}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            name="blogtype"
            placeholder="Type of Blog i.e Sports,Food Reciepes,Fitness..."
            onChange={updateDetails}
            value={obj.blogtype}
            required
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="Provide the url for blog image"
            onChange={updateDetails}
            value={obj.image}
            required
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              publishBlog(e);
            }}
          >
            {urla[len] === "createblog" ? "Publish Your blog" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Createblog;
