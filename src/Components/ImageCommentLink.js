import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const ImageCommentLink = ({ imageSrc, comment, link }) => (
    <div style={{display:'inline-block'}}>
        <Link to={link} style={{ padding: '30px 0px 0px 20px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={imageSrc} alt="Thumbnail" style={{ objectFit: 'cover', marginRight: '10px' }} />
            <span style={{ marginLeft: "10px", fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", lineHeight: "21px" }}>{comment}</span>
        </Link>
    </div>
);

export default ImageCommentLink;