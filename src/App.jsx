import React, { useState } from 'react';
import './App.css';

function App() {
  // Family member data with image placeholders - replace with your own image URLs
  const familyData = {
    grandmother: {
      name: "Sonia",
      image: "/teta.JPG", // Replace with your grandmother's image
      message: "La personne sans qui aucun de nous serait ici, allah ykhallilna yekeh teta!"
    },
    mother: {
      name: "Mira",
      image: "/mom.JPG", // Replace with your mother's image
      message: "Your constant belief and support throughout even in times where I felt at my lowest is what made where I am today possible. "
    },
    aunt1: {
      name: "Farah",
      image: "/farah.JPG", // Replace with your aunt's image
      message: "I'd say the voice of reason of the family in large part. Your forever young soul and positive vibes always motivate me to keep going"
    },
    aunt2: {
      name: "Nadine",
      image: "/nadine.jpg", // Replace with your aunt's image
      message: "Your open-mindedness and free spirit makes it so easy to talk to you about anything and feel extremely comfortable around you."
    },
    groupPhoto: {
      image: "/daheristas.jpg", // Replace with your actual group photo
      caption: "The incredible women who shaped our family with their strength and love"
    }
  };

  const [expandedNodes, setExpandedNodes] = useState({
    grandmother: true,
    mother: false,
    aunt1: false,
    aunt2: false
  });

  const toggleNode = (nodeId) => {
    setExpandedNodes({
      ...expandedNodes,
      [nodeId]: !expandedNodes[nodeId]
    });
  };

  return (
    <div className="family-tree-container">
      <div className="family-tree-content">
        <header className="family-tree-header">
          <h1>The Daheristas</h1>
          <h2>Happy Mother's Day!</h2>
          <p> We often take for granted how lucky we are to have such incredible, caring and high-achieving women in our family. Click on the arrows below to see a special message I wrote each of you!</p>
        </header>

        {/* Grandmother */}
        <div className="family-tree">
          <div className="person grandmother" onClick={() => toggleNode('grandmother')}>
            <div className="gift-box-ribbon"></div>
            <div className="person-content">
              <img 
                src={familyData.grandmother.image} 
                alt={familyData.grandmother.name} 
                className="person-image"
              />
              <h3>{familyData.grandmother.name}</h3>
              <div className="toggle-icon">
                <span className={expandedNodes.grandmother ? "expanded" : ""}>▼</span>
              </div>
            </div>
          </div>
          
          {/* Grandmother's message when expanded */}
          {expandedNodes.grandmother && (
            <div className="person-message grandmother-message">
              <p>"{familyData.grandmother.message}"</p>
            </div>
          )}
          
          {/* Children */}
          {expandedNodes.grandmother && (
            <div className="children-container">
              <div className="tree-connector-vertical"></div>
              <div className="tree-connector-horizontal"></div>
              
              <div className="children">
                <div className="child">
                  <div className="tree-connector-vertical"></div>
                  <div className="person aunt" onClick={() => toggleNode('aunt1')}>
                    <div className="gift-box-ribbon"></div>
                    <div className="person-content">
                      <img 
                        src={familyData.aunt1.image} 
                        alt={familyData.aunt1.name} 
                        className="person-image"
                      />
                      <h3>{familyData.aunt1.name}</h3>
                      <div className="toggle-icon">
                        <span className={expandedNodes.aunt1 ? "expanded" : ""}>▼</span>
                      </div>
                    </div>
                  </div>
                  {expandedNodes.aunt1 && (
                    <div className="person-message aunt-message">
                      <p>"{familyData.aunt1.message}"</p>
                    </div>
                  )}
                </div>
                
                <div className="child">
                  <div className="tree-connector-vertical"></div>
                  <div className="person mother" onClick={() => toggleNode('mother')}>
                    <div className="gift-box-ribbon"></div>
                    <div className="person-content">
                      <img 
                        src={familyData.mother.image} 
                        alt={familyData.mother.name} 
                        className="person-image"
                      />
                      <h3>{familyData.mother.name}</h3>
                      <div className="toggle-icon">
                        <span className={expandedNodes.mother ? "expanded" : ""}>▼</span>
                      </div>
                    </div>
                  </div>
                  {expandedNodes.mother && (
                    <div className="person-message mother-message">
                      <p>"{familyData.mother.message}"</p>
                    </div>
                  )}
                </div>
                
                <div className="child">
                  <div className="tree-connector-vertical"></div>
                  <div className="person aunt" onClick={() => toggleNode('aunt2')}>
                    <div className="gift-box-ribbon"></div>
                    <div className="person-content">
                      <img 
                        src={familyData.aunt2.image} 
                        alt={familyData.aunt2.name} 
                        className="person-image"
                      />
                      <h3>{familyData.aunt2.name}</h3>
                      <div className="toggle-icon">
                        <span className={expandedNodes.aunt2 ? "expanded" : ""}>▼</span>
                      </div>
                    </div>
                  </div>
                  {expandedNodes.aunt2 && (
                    <div className="person-message aunt-message">
                      <p>"{familyData.aunt2.message}"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Group Photo Section */}
        <div className="group-photo-section">
          <div className="section-divider">
            <span>♥</span>
          </div>
          <h2 className="section-title">Together Forever</h2>
          <div className="group-photo-container">
            <img 
              src={familyData.groupPhoto.image} 
              alt="Family group photo" 
              className="group-photo"
            />
            <p className="group-photo-caption">{familyData.groupPhoto.caption}</p>
          </div>
        </div>

        <footer className="family-tree-footer">
          <p>Our lives would be incomplete without each one of you </p>
        </footer>
      </div>
    </div>
  );
}

export default App;