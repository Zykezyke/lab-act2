import "./App.css";
import Header from "./Header";
import Album from "./Album";
import { albumData } from "./data";

function App() {
  return (
    <div className="desktop-app App">
      <div className="GalleryPage Cover GalleryCover">
        <div className="GalleryPage-bg"></div>
        <Header />
        <Album images={albumData} />
      </div>
    </div>
  );
}

export default App;
