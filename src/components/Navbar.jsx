import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-scroll";

const { Sider } = Layout;

const items = [
    {
        key: "1",
        label: (
            <Link to="home" smooth={true} duration={500}>
                HOME
            </Link>
        ),
    },
    {
        key: "2",
        label: (
            <Link to="education" smooth={true} duration={500}>
                EDUCATION
            </Link>
        ),
    },
    {
        key: "3",
        label: (

            <Link to="skills" smooth={true} duration={500}>
                SKILLS
            </Link>
        ),
    },
    {
        key: "4",
        label: (
            <Link to="projects" smooth={true} duration={500}>
                PROJECTS
            </Link>
        ),
    },
    {
        key: "5",
        label: (
            <Link to="experience" smooth={true} duration={500}>
                EXPERIENCE
            </Link>
        ),
    },
    {
        key: "6",
        label: (
            <Link to="testimonials" smooth={true} duration={500}>
                TESTIMONIALS
            </Link>
        ),
    },

    {
        key: "7",
        label: (
            <Link to="contact" smooth={true} duration={500}>
                CONTACT
            </Link>
        ),
    },
];

const Navbar = () => {
    return (
        <Sider
            width={430}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                textAlign: "center",
            }}
        >
            <div style={{ padding: "60px 20px 20px 20px" }}>
                <img
                    src="https://www.aihmas.com/wp-content/uploads/2023/05/Hospitality-Professional-At-Work-web-2.jpg"
                    alt="Profile"
                    style={{
                        borderRadius: "50%",
                        width: "170px",
                        height: "170px",
                    }}
                />
                <div
                    style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "30px",
                        paddingTop: "30px",
                    }}
                >
                    Fatima Mohsin
                </div>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={items}
                style={{ fontSize: "20px", marginTop: "20px" }}
            />
        </Sider>
    );
};

export default Navbar;
