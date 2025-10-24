import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="text-white py-4 mt-auto w-100"
      style={{
        position: 'relative',
        backgroundColor: '#0b5aa7',
        left: 0,
        right: 0,
        width: '100%',
        margin: 0,
        overflowX: 'hidden',
      }}
    >
      <div className="container-fluid px-0">
        <div className="row align-items-center mx-0">
          <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0 px-4">
            <p className="mb-0 fs-6">
              &copy; {new Date().getFullYear()} Ezekiel Wabwoba. All rights reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end px-4">
            <p className="mb-0 fs-6">
              <strong>Phone:</strong> 0746976573 | <strong>Email:</strong> ewwabwoba@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
