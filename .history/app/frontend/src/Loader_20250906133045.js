import React from "react";
import "./Loader.css";

export default function Loader() {
    return (
        <div className="loader-container">
            <div className="loader-logo">
                {/* The animation is handled by ::before and ::after pseudo-elements in CSS */}
            </div>
        </div>
    );
}