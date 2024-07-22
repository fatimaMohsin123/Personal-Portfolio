import React from "react";
import { Button } from "antd";
import { Link } from "react-scroll";

export default function Home() {
    return (
        <div style={{ position: "relative", textAlign: "center" }}>
            <img
                src="https://t3.ftcdn.net/jpg/02/97/91/38/240_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg"
                alt="Profile"
                style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "43%",
                    left: "10%", // Adjust the left property to position it on the left side
                    transform: "translateY(-50%)", // Center vertically
                    color: "white",
                    textAlign: "left",
                }}
            >
                <h1 style={{ fontWeight: "bold", fontSize: '80px' }}>Hi!</h1>
                <h1 style={{ fontWeight: "bold", fontSize: '80px' }}>I'm</h1>
                <h1 style={{ fontWeight: "bold", fontSize: '80px' }}>Fatima</h1>
                <p style={{ fontWeight: "normal", fontSize: '22px', lineHeight: '1.2' }}>A software developer passionate about</p>
                <p style={{ fontWeight: "normal", fontSize: '22px', lineHeight: '0.8' }}>creating innovative solutions.</p>
                <Link to="contact" smooth={true} duration={500}>
                    <Button type="primary" style={{ marginTop: "20px", width: '130px', height: '50px', fontSize: '19px' }}>
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div>
    );
}
