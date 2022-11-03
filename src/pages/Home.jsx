import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfiguration";

const Home = ({isAuth}) => {
  const [postList, setPostList] = useState([]);
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const postsRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);
  return (
    <div>
      {postList.map((post) => {
        return (
          <div>
            <div style={{ display: "flex" }}>
              <h2>{post.title} &nbsp;</h2>{" "}
              {isAuth && post.author.id === auth.currentUser.uid?<button onClick={() => {deletePost(post.id)}}> move to trash &#128465;</button>: null}
            </div>
            <div>
              <h5>by: {post.author.name}</h5>
            </div>
            <div>{post.postBody}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
