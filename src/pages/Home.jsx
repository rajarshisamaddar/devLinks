import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Mobile from "../components/Home/Mobile";
import Form from "../components/Home/Form";
import { useSelector } from "react-redux";

const Home = () => {
  const links = useSelector((state) => state.global.links);

  return (
    <div>
      <Navbar isHome />
      <div
        className={`grid grid-cols-[31.5rem,auto]
        gap-x-[2rem] w-[96.5%] m-auto mb-[2rem] mb:grid-cols-1 sm:grid-cols-1`}
      >
        <Mobile data={links} />
        <Form
          heading="Customize your links"
          description="Add/edit/remove links below and then share all your profiles with the
          world!"
        />
      </div>
    </div>
  );
};

export default Home;
