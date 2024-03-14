import { useState } from "react";
import classnames from "classnames";
import "./App.css";

function App() {
  const [spacerHeight, setSpacerHeight] = useState(0);

  return (
    <div
      className={classnames(
        "w-screen h-screen flex flex-col items-center bg-slate-200 transition-all relative z-0",
        { "bg-white": spacerHeight > 0 }
      )}
    >
      {/* 一排大字，HIDING MENU， */}
      <div className=" top-0 gap-8 flex absolute z-10">
        <div className="text-5xl font-bold text-gray-800 mt-2">HIDING </div>
        <div className="text-5xl font-bold text-gray-800 mt-2"> 👀</div>
        <div className="text-5xl font-bold text-gray-800 mt-2">HIDING</div>
        <div className="text-5xl font-bold text-gray-800 mt-2"> 👀</div>
        <div className="text-5xl font-bold text-gray-800 mt-2">HIDING</div>
        <div className="text-5xl font-bold text-gray-800 mt-2"> 👀</div>
        <div className="text-5xl font-bold text-gray-800 mt-2">HIDING </div>
        <div className="text-5xl font-bold text-gray-800 mt-2"> 👀</div>
      </div>
      <div
        className={classnames(
          "transition-all mb-1 w-full flex justify-center z-10",
          {
            "pt-16": spacerHeight > 0,
          }
        )}
        onMouseEnter={() => setSpacerHeight(60)}
        onMouseLeave={() => setSpacerHeight(0)}
      >
        <div
          className={classnames("h-1 rounded-full bg-gray-400 w-32 mt-0.5")}
        ></div>
      </div>
      <div></div>
      <div
        className={classnames(
          "bg-slate-200 h-full w-full flex flex-col items-center justify-center z-10",
          {
            "rounded-t-3xl": spacerHeight > 0,
          }
        )}
      >
        <h1 className="text-4xl font-bold text-gray-800 mt-10">
          Hello Vite + React!
        </h1>
        {/* // 随便来点页面内容 */}
        <p className="text-gray-600 mt-5">
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p className="text-gray-600">
          <a
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Vite documentation
          </a>

          {" | "}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            React documentation
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
