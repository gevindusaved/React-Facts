import "../src/assets/css/Main.css";
import WallpaperHeader from "./lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg";
import ScrollbarCard from "./ScrollbarCard";
import BackgroundLogo from "./icons8-react-native-500.png"

export default function Main() {
  return (
      <main className="main-container">
        <header className="wallpaper-Header-Container">
          <img
            src={WallpaperHeader}
            alt="Wallpaper-header"
            className="Wallpaper-Header"
          />
        </header>
        <div className="main-text">
          <h1 className="Header-text">Reasons I’m excited to learn React</h1>
          <ul>
            <li className="Facts-Main">
              React is one of the most popular frontend frameworks...
            </li>
            <li className="Facts-Main">
              React's component-based structure allows reusable UI elements...
            </li>
            <li className="Facts-Main">
              The Virtual DOM optimizes rendering, improving performance...
            </li>
            <li className="Facts-Main">
              If you know JavaScript, picking up React is easy...
            </li>
            <li className="Facts-Main">
              With React Native, you can build cross-platform mobile apps...
            </li>
          </ul>
        </div>
        <ScrollbarCard />
      </main>
  );
}
