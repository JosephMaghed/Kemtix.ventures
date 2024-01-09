// components/Navbar.js

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav.css';
const Video = () => {
  return (
    <video autoPlay loop muted style={{ height: '100%' }} class="first-element">
    <source src="/your-video-file.mp4" type="video/mp4" />
  
  </video>
  );
};

export default Video;
