// components/Navbar.js

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav.css';
const Navbar = () => {
  return (
    <div >
    <nav style={{width:'100%',backgroundColor:'white',margin:'0px', height:'100px'}}>
      <h1 className='Title'>Achieve your dream</h1>
      <div class='NavLinks'> <a href="/">
        Home
      </a>
      <a href="/about">
        About Us
      </a>
        
          <a href="/contact">
            Venture Studio
          </a>
          <a href="/contact">
                Service Catalogue
                          </a>
                          <div class="dropdown">


  <a class="dropbtn">More</a>
  <div class="dropdown-content">
    <a href="#"> Entrepreneurship Fellowship Program</a>
    <a href="#">Kemtech Valley</a>
    <a href="#"> OUR PORTFOLIO COMPANIES
</a>
<a href="#"> INTIATIVES WE SUPPORT

</a>

<a href="#"> Contact

</a>
  </div>
</div>   
     </div>
      <button class="NavBtn">Make a difference</button> 
    </nav>
    </div>
  );
};

export default Navbar;
