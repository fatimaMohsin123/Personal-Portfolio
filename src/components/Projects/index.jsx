import React from "react";
import { Card } from 'antd';
import Flood from '../../images/flood.png'
import busres from '../../images/busres.png'
import medicine from '../../images/medicine.png'

const { Meta } = Card;

const FloodSafe = () => (
  <div>
    <div>Technologies Used: MERN, Flask, Python</div><br />
    <div>This innovation modernizes flood management
      by offering real-time alerts, personalized action
      plans, and interactive features, revolutionizing
      disaster preparedness and response in
      vulnerable communities.</div>
  </div>
);
const Bus = () => (
  <div>
    <div>Technologies Used: MySQL, JAVA</div><br />
    <div>Built as a desktop application ensuring
      smooth booking processes and streamlined
      scheduling.</div>
  </div>
);
const Pharmacy = () => (
  <div>
    <div>Technologies Used: OOP JAVA</div><br />
    <div>Effortlessly track inventory, manage
      prescriptions, and enhance customer service
      for smoother operations.</div>
  </div>
);

export default function Projects() {
  return (
    <div>
      <div style={{ paddingLeft: '6rem ', paddingBottom: '9rem', paddingTop: '6rem' }}>
        <h1 className='text-2xl mx-auto text-green-800' style={{ marginBottom: '4.5rem', color: 'black', fontSize: '40px', paddingBottom: '2rem', textAlign: 'left' }}>
          MY PROJECTS
        </h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap', // Allow wrapping for smaller screens
          gap: '20px', // Add space between cards
          justifyContent: 'flex-start' // Align cards to the left
        }}>
          <Card
            hoverable
            style={{
              width: '300px',
            }}
            cover={
              <img
                alt="example"
                src={Flood}
                style={{
                  height: '250px', // Adjust the height here
                  objectFit: 'cover', // Ensure the image covers the area properly
                  width: '100%' // Make sure the image covers the full width of the card
                }}
              />
            }
          >
            <Meta title={<span style={{ fontSize: '20px' }}>FloodSafe Hub</span>} description={<FloodSafe />} />
          </Card>

          <Card
            hoverable
            style={{
              width: '300px',
            }}
            cover={
              <img
                alt="example"
                src={busres}
                style={{
                  height: '250px', // Adjust the height here
                  objectFit: 'cover', // Ensure the image covers the area properly
                  width: '100%' // Make sure the image covers the full width of the card
                }}
              />
            }
          >
            <Meta title={<span style={{ fontSize: '20px' }}>Bus Reservation System</span>} description={<Bus />} />
          </Card>

          <Card
            hoverable
            style={{
              width: '340px',
            }}
            cover={
              <img
                alt="example"
                src={medicine}
                style={{
                  height: '250px', // Adjust the height here
                  objectFit: 'cover', // Ensure the image covers the area properly
                  width: '100%' // Make sure the image covers the full width of the card
                }}
              />
            }
          >
            <Meta title={<span style={{ fontSize: '20px' }}>
              Pharmacy Management System
            </span>} description={<Pharmacy />} />
          </Card>

        </div>
      </div>
    </div>
  );
}
