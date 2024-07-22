import React from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div style={{ padding: '6rem', backgroundColor: '#ECF8F9' }}>
      <h1 className='text-2xl mx-auto text-green-800' style={{ fontSize: '40px', paddingBottom: '3rem', textAlign: 'left' }}>
        CONTACT
      </h1>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="text-left">
            <h4 className="text-left mb-6 mt-4" style={{ color: '#000', fontWeight: 'bold', textAlign: 'left' }}>Get in Touch</h4>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <MDBIcon fas icon="map-marker-alt" className="me-2" style={{ fontSize: '24px', color: '#007bff' }} />
              <div style={{ textAlign: 'left' }}>
                <p className="mb-0" style={{ fontWeight: 'bold' }}>Address:</p>
                <p>F6, Islamabad</p>
              </div>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <MDBIcon fas icon="envelope" className="me-2" style={{ fontSize: '24px', color: '#007bff' }} />
              <div style={{ textAlign: 'left' }}>
                <p className="mb-0" style={{ fontWeight: 'bold' }}>Mail:</p>
                <p>fatimamohsin@gmail.com</p>
              </div>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <MDBIcon fas icon="phone" className="me-2" style={{ fontSize: '24px', color: '#007bff' }} />
              <div style={{ textAlign: 'left' }}>
                <p className="mb-0" style={{ fontWeight: 'bold' }}>Phone:</p>
                <p>+92 333 155 33 33</p>
              </div>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <MDBIcon fas icon="share-alt" className="me-2" style={{ fontSize: '24px', color: '#007bff' }} />
              <div style={{ textAlign: 'left' }}>
                <p className="mb-0" style={{ fontWeight: 'bold' }}>Social:</p>
                <p>Fb. Tw. In. Be.</p>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="6" style={{ marginTop: '7rem', marginBottom: '7rem' }}>
            <form>
              <MDBInput style={{ marginBottom: '3rem' }} id='form4Example1' wrapperClass='mb-4' label='Name' />
              <MDBInput style={{ marginBottom: '3rem' }} type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
              <MDBInput style={{ marginBottom: '3rem' }} wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
              <MDBBtn type='submit' className='mb-4' block style={{ backgroundColor: '#007bff' }}>
                SEND MESSAGE
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
