import { Link } from "react-router-dom";
import { useState } from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaLinkedin } from 'react-icons/fa';
import Button from "./Buttons/Button";


export default function Footer(){
    const [newsletterData, setNewsletterData] = useState({
        value: '',
    })

    const handleChange = (e) => {
        const {value} = e.target;
        setNewsletterData(prevData => (
            {
                ...prevData,
                value: value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newsletterData)
    }

    return (
        <footer className="footer flow grid fs-300 bg-pale text-center">

            <div className="footer-logo">
                <Link to='/'>
                    <img src="/assets/images/logo.png" alt="Haru Furniture Logo" />
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="newsletter-form grid">
                <input 
                type="text"
                id="newsletter-input" 
                value={newsletterData.value}
                name={newsletterData.name}
                onChange={handleChange}
                autoComplete="off"
                />
                <Button className="sm bg-transparent text-brown bold-1">Subscribe</Button>
                <p>By subscribing you agree with our Privacy Policy and provide conscent to receive updates from our company.</p>
            </form>

            <div className="footer-company flex">
                <h4 className="text-underline">Company</h4>
                <Link>About Us</Link>
                <Link>Blog</Link>
                <Link>Contact Us</Link>
                <Link>Career</Link>
                <Link>Shipping</Link>
            </div>

            <div className="footer-customer flex">
                <h4 className="text-underline">Customer Support</h4>
                <Link>My Account</Link>
                <Link>Track Your Order</Link>
                <Link>Returns</Link>
                <Link>Returns Policy</Link>
                <Link>FAQ</Link>
            </div>

            <div className="footer-follow flex">
                <h4 className="text-underline">Follow Us</h4>
                <div className="flex fs-600">
                    <Link><FaFacebookSquare /></Link>
                    <Link><FaInstagramSquare /></Link>
                    <Link><FaYoutubeSquare /></Link>
                    <Link><FaLinkedin /></Link>
                    <Link><FaTwitterSquare /></Link>
                </div>
            </div>

            <div className="footer-copyright">
                <p>&copy; 2024 Haru Furniture. All rights reserved.</p>
            </div>
        </footer>
    )
}