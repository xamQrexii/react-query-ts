import axios from "axios";
import { useQuery } from "react-query";

const fetchPosts = () => axios.get("http://st-posts.herokuapp.com/api/v1/posts").then((res) => res.data);

export default function usePosts() {
  return useQuery("posts", fetchPosts);
}
