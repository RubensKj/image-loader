import React from 'react';

import Image from 'react-shimmer';

// Can change to your Spinner or Loader (This is just the loading before image);
import ClipLoader from "react-spinners/ClipLoader";

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="images-area">
          <Image
            src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
            fallback={<ClipLoader css="loading" size={150} loading={true} color={"#123abc"} />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
