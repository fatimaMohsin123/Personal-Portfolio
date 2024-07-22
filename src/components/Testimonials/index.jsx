import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div style={{ padding: '6rem', paddingBottom: '3rem' }}>
      <h1 className='text-2xl mx-auto text-green-800' style={{ fontSize: '40px', paddingBottom: '1rem', textAlign: 'left' }}>
        TESTEMONIALS
      </h1>
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">

            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              I specialize in creating dynamic, user-friendly web applications. My passion for coding drives me to stay updated with the latest technologies and best practices. I love collaborating with teams to turn innovative ideas into impactful digital solutions. Let's connect and build something amazing together!
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="t1"
              />
            </div>
            <h5 className="mb-3"> Aqsa Azhar</h5>
            <h6 className="text-primary mb-3">Web Developer</h6>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon
                  fas
                  icon="star-half-alt"
                  size="sm"
                  className="text-warning"
                />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="t2"
              />
            </div>
            <h5 className="mb-3">Amna Noor</h5>
            <h6 className="text-primary mb-3">Frontend Web Developer</h6>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="t3"
              />
            </div>
            <h5 className="mb-3">Abbas Mohsin</h5>
            <h6 className="text-primary mb-3">Full-Stack Web Developer</h6>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}