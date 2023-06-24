import { createContext, useContext, useState } from "react";
import { forumData } from "../db/posts";
const PostContext = createContext(null);
const PostContextProvider = ({ children }) => {
  const [data, setData] = useState(forumData);
  return (
    <PostContext.Provider value={{ data, setData }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);
export { usePostContext, PostContextProvider };
