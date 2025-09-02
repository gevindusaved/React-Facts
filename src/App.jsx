import logo from "./logo.svg";
import "./App.css";
import Header from './Header';
import Footer from './Footer';
// import { Fragment} from "react"

function App() {
  return (
    <>
      {/* <Fragment> */}
      <div>
        <Header />
        {" "}
        {/* with fragment we dont need this */}
        <main>
          <h1 className="Header-text">Reasons I m excited to learn React</h1>
          <ol>
            <li>
              React is one of the most popular frontend frameworks. Many top
              companies (Facebook, Netflix, Airbnb, Uber, Instagram) use React.
              There are high-paying job opportunities for React developers.
            </li>
            <li>
              React's component-based structure allows you to create reusable UI
              elements, making development faster and more efficient.
            </li>
            <li>
              The Virtual DOM optimizes rendering, improving performance and
              creating smooth user experiences.
            </li>
            <li>
              If you know JavaScript, picking up React is relatively
              straightforward, especially with JSX making UI development
              intuitive.
            </li>
            <li>
              With React Native, you can use the same React skills to build
              cross-platform mobile apps.
            </li>
          </ol>
        </main>
        <Footer />
      </div>
      {/* </Fragment> */}
    </>
  );
}

export default App;
