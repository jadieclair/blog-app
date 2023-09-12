import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const [bioIndex, setBioIndex] = useState(0);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/categories");
        setCats(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCats();
  }, []);

  const bios = [
    {
      imgSrc:
        "https://app.melsoftacademy.com/wp-content/uploads/avatars/1816/6484f8351564f-bpfull.jpg",
      text: "I am Tionne, a college student currently residing in the picturesque landscapes of Italy. My passion lies in the art of photography, where I find joy in capturing the beauty that surrounds me and sharing my discoveries with the world.",
    },
    {
      imgSrc:
        "https://app.melsoftacademy.com/wp-content/uploads/avatars/67/644ba10b53cf2-bpfull.jpg",
      text: "My name is Teboho (Tebs) I am a mother of 3 and find love in cooking and music!",
    },
    {
      imgSrc:
        "https://app.melsoftacademy.com/wp-content/uploads/avatars/1413/644934f6ea2e5-bpfull.jpg",
      text: "My name is William, I am a CEO of a large home maintenance company in London. I love to share cool tips and tricks on this blog from our onsite teams",
    },
    {
      imgSrc:
        " https://app.melsoftacademy.com/wp-content/uploads/avatars/53/6419961307946-bpfull.jpg",
      text: "Hi, I am Theo! I am the coach for the South African Fencing team. We are training for the next Olympic Games, and we would love you all to follow our blogs and support us!",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBioIndex((prevIndex) =>
        prevIndex === bios.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []); // Empty dependency array to run this effect once

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={bios[bioIndex].imgSrc}
          alt="Profile Image"
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
        <p>{bios[bioIndex].text}</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link key={c._id} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
