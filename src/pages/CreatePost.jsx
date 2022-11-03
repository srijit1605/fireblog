import { addDoc, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfiguration";

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const postsRef = collection(db, "posts");
  let navigate = useNavigate();
  const submitPost = async () => {
    await addDoc(postsRef, {
      title,
      postBody,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(()=>{
    if(!isAuth) {
        navigate('/login');
    }
  }, [])
  return (
    <div>
      <div>
        <h2>Create a post</h2>
        <br />
        <div>
          <label>Post Title</label>
          <input
            type="text"
            placeholder="Enter a title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <br />
        </div>
        <div>
          <label>Post body</label>
          <textarea
            placeholder="Write the post..."
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          />
          <br />
        </div>
        <button
          onClick={submitPost}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
