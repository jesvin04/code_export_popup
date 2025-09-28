import { useState } from "react";
import "./PopUp.css";

export default function Popup({ onClose }) {
  const [activeTab, setActiveTab] = useState("nextjs");

  const Checkbox = ({ label, defaultChecked = false }) => (
  <label className="checkbox-label">
    <input type="checkbox" defaultChecked={defaultChecked} />
    <span className="custom-checkbox"></span>
    {label}
  </label>
  );

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h3>Code Export</h3>
          <p className="subtitle">Manage how you download your website's code.</p>
          <button className="close-btn" onClick={onClose}> <img src="x.png" alt="Close" className="close-icon" /></button>
        </div>
        <div className="popup-subcontainer">
            <div className="popup-tabs">
            <button
                className={activeTab === "html" ? "tab active" : "tab"} onClick={() => setActiveTab("html")}>HTML & CSS</button>
            <button className={activeTab === "nextjs" ? "tab active" : "tab"} onClick={() => setActiveTab("nextjs")}> Next JS</button>
            </div>

            <div className="popup-body">{activeTab === "html" && 
                (
                <div className="tab-content">
                <div className="export-title">
                    <img src="HTML.png" alt="HTML Icon" className="export-icon" />
                    <p>Export as HTML & CSS</p>
                    <span className="zipped-tag">Zipped</span>
                </div>
                <div className="checkbox-group">
                    <Checkbox label="Include assets (images, styles, fonts, etc.)" />
                    <Checkbox label="Include custom code" />
                </div>
                </div>
            )}
            
            {activeTab === "nextjs" && 
                (
                <div className="tab-content">
                <div className="export-title">
                    <img src="BRAND.png" alt="Next JS Icon" className="export-icon" />
                    <p>Export as Next JS Project</p>
                    <span className="zipped-tag">Zipped</span>
                </div>
                <div className="checkbox-group">
                    <Checkbox label="Use 'app' directory (NextJS v13+)" />
                    <Checkbox label="Include assets locally (images, styles, fonts, etc.)"/>
                    <Checkbox label="Include custom code"/>
                </div>
                </div>
            )}
            </div>
        </div>
        <div className="popup-footer">
          <button className="download-btn">Download {activeTab === "html" ? "HTML CSS Project" : "Next JS Project"}</button>
        </div>
      </div>
    </div>
  );
}