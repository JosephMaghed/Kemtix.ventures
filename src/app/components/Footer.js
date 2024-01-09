// components/Navbar.js
import { useState } from 'react';

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav.css';

const Footer = () => {
    const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('/api/storeEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Handle success, reset the form, show a success message, etc.
      console.log('Email submitted successfully!');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };
  return (
    <footer style={{ marginTop: '96px', marginLeft: '20%', marginRight: '20%', overflow: 'hidden' }}>
    <span style={{ width: '50%', float: 'left', marginRight: '15%'}}>
      <p style={{ fontSize: '31px', marginBottom: '20px' }}>About Us</p>
      <p style={{ fontSize: '16px', color: 'rgb(24, 21, 124)' }}>
        Kemtix is an impact Venture Studio. We build world-changing tech ventures for a better future.
      </p>

      <p style={{ fontSize: '16px', color: 'rgb(24, 21, 124)' }}>
        The world is changing, and more people are becoming concerned about the challenges we will necessarily face in the near future, from climate change to social and economic injustices.
      </p>

      <p style={{ fontSize: '16px', color: 'rgb(24, 21, 124)' }}>
        We believe that together we can make an impact. We welcome everyone to find their way to success.
      </p>
      <p style={{ fontSize: '16px', color: 'rgb(24, 21, 124)' }}>
      <br/>
      <br/>
      <br/>

    Subscribe to Our Newsletter

</p>
<form  onSubmit={handleSubmit}>
      

      <input style={{border:'solid rgb(24, 21, 124)'}}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      
        required
      />

     

      <input type="submit" value="Subscribe Now" style={{ backgroundColor: 'darkblue',marginLeft:'10px', color: 'white',padding:'5px',paddingRight:'10px',paddingLeft:'10px' }} />
    </form>

    </span>

    <span>
      <p style={{ fontSize: '31px', marginBottom: '20px' }}>Contact</p>
      <p style={{ fontSize: '16px', color: 'rgb(24, 21, 124)' }}>
        T: 123-456-7890
      </p>
      <p style={{ fontSize: '16px', color: 'rgb(24, 21, 124)' }}>
        F: 123-456-7890
      </p>
      <a href="mailto:info@mysite.com" style={{ fontSize: '16px', color: 'rgb(24, 21, 124)', textDecoration: 'none' }}>
        E: info@mysite.com
      </a>
    </span>


  </footer>
  );
};

export default Footer;
