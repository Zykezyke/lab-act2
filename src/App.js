import "./App.css";
import Header from "./Header";
import Album from "./Album";
import React, { useState, useEffect } from "react";
import { albumData } from "./data";

function App() {
  const [pageColor, setPageColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const newTime = new Date();

      const hour = newTime.getHours();
      let newBgColor;
      let newPageColor;
      if (hour >= 6 && hour < 12) {
        newBgColor = "morning-bg";
        newPageColor = "morning-page";
      } else if (hour >= 12 && hour < 18) {
        newBgColor = "afternoon-bg";
        newPageColor = "afternoon-page";
      } else {
        newBgColor = "GalleryPage-bg";
        newPageColor = "GalleryPage";
      }
      setPageColor(newPageColor);
      setBgColor(newBgColor);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="desktop-app App">
      <div className={`Cover GalleryCover ${pageColor}`}>
        <div className={bgColor}></div>
        <Header />
        <Album images={albumData} />
      </div>
    </div>
  );
}

export default App;
