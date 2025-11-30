import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Banner from "../components/Banner";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Banner />
      <CreatePost />

      <PostCard
        user={{ name: "Lum Faith", avatar: "/profile1.jpg" }}
        time="1h"
        text="Had a great time at the CATUC matriculation!"
        image="/matriculation.jpg"
      />
    </DashboardLayout>
  );
}
