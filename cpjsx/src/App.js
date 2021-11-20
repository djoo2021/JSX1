import image from './imageInSrc.jpg';
import video from './video/myVideo.mp4';
import './Style.css';
import './App.css';

function App() {
  return (

    <div className="App">

    <div className="logo" >

    <h1 className="title-red">Mejri Wajdi</h1>
    <br />
    <img src={image} />
    <br />
    <img src= "/images/imageInPublic.jpg" alt="Image1" />

    </div>

<div>
<video style={{width:"320", height:"240"}} controls />
 <source src={video} type="video/mp4"/ >
 </div>
    </div>
  );
}

export default App;
