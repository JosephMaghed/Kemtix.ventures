// components/Navbar.js

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav.css';
const Studio = () => {
  return (
    <div style={{ backgroundImage: 'url("/picture.jpg")', backgroundSize: 'cover', overflow: 'hidden',marginTop:'50px'}}>
    <div style={{ width: '33.33%', backgroundColor: 'rgb(24,21,124)', float: 'left',opacity:'0.9',height:'500px '}}>


      <p style={{ color: 'white', textAlign: 'center', fontSize: '30px',marginTop:'50px' }}>An Entrepreneur</p>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}>
        We complete you
        <br />
        <br />
        Either you have an idea or no
        <br />
        Either you are alone or along with a group
        <br />
        Either you have a startup or not yet
        <br />
        <br />
        We will support you to grow through our program
      </p>
    </div>

    <div style={{ width: '33.33%', backgroundColor: 'grey', float: 'left',opacity:'0.9',height:'500px ',marginBottom:'0px'}}>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '30px' ,marginTop:'50px'}}>A Venture Studio</p>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}>
        Together we can make an impact
        <br />
        <br />
        Either you have an established venture studio or still building it up
        <br />
        <br />
        We will provide you with tailored services to grow your venture studio in a sustainable way and join our network of angel investing and venture studios
      </p>
    </div>

    <div style={{ width: '33.33%', backgroundColor: 'green', float: 'left' ,opacity:'0.9',height:'500px'}}>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '30px',marginTop:'50px' }}>A Sponsor</p>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}>
        We believe in win-win partnerships
        <br />
        <br />
        Either you are an angel investor or a corporate or a venture capital or an institution
        <br />
        <br />
        We bring to you a bundle of benefits through our sponsorship packages
      </p>
    </div>
  </div>
  );
};

export default Studio;
