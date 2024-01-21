import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/sidebar/Sidebar';
import Posts from '../../Components/posts/Posts';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";



const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
      <Header />
      <div className="home">
      <Posts posts={posts} />
        <Sidebar/>
      </div>
    </div>
  );
}

export default Home;
