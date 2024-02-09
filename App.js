// App.js

import React from 'react';
import './App.css';

// Team Member Card component
const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-member-card">
      <img src={member.photoUrl} alt={member.name} />
      <h2>{member.name}</h2>
      <p>{member.role}</p>
    </div>
  );
};

// Team Section component
const TeamSection = ({ title, teamMembers }) => {
  // Add conditions to check if it's the Leadership, Development, or Sales and Marketing Team sections
  const isLeadershipTeam = title === "Leadership / Management Team";
  const isDevelopmentTeam = title === "Development Team";
  const isSalesAndMarketingTeam = title === "Sales and Marketing Team";

  // Define a function to handle the click event
  const handleClick = () => {
    // Do something when the title is clicked
    console.log(`Title "${title}" clicked!`);
  };

  let topMembers = [];
  let bottomMembers = [];

  if (isLeadershipTeam) {
    // Slice the leadership team members to get top 2 and bottom 3
    topMembers = teamMembers.slice(0, 2);
    bottomMembers = teamMembers.slice(-3);
  }
  else if (isDevelopmentTeam || isSalesAndMarketingTeam) {
    // Slice the team members to get top 4 and bottom 3
    topMembers = teamMembers.slice(0, 4);
    bottomMembers = teamMembers.slice(-3);
  }

  const sectionClass = isLeadershipTeam
    ? "leadership-section"
    : isDevelopmentTeam
    ? "development-section"
    : isSalesAndMarketingTeam
    ? "sales-section"
    : "";


  return (
    <div className={isLeadershipTeam || isDevelopmentTeam || isSalesAndMarketingTeam ? "section-box" : "team-section"}>
      <div className="section-header" onClick={handleClick}>
        <h2><a href="#">{title}</a></h2>
      </div>
      <div className="team-members">
        {/* Display top members */}
        {topMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
        {/* Display a separator */}
        <div className="separator"></div>
        {/* Display bottom members */}
        {bottomMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};


function App() {
  // Sample data for team members
  const leadershipTeam = [
    { name: '[Founder Name]', role: 'Founder CEO', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Founder Name]', role: 'Founder CEO', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[VP Name]', role: 'VP,Development&Growth', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[VP Name]', role: 'VP,Sales&Marketing', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[VP Name]', role: 'Vp,Finanace&Operation', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    
  ];

  const developmentTeam = [
    { name: '[Developer Name]', role: 'Team Lead, SE', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Developer Name]', role: 'Software Engineer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Developer Name]', role: 'Software Engineer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Developer Name]', role: 'Software Engineer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Developer Name]', role: 'Software Engineer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Developer Name]', role: 'Software Engineer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Developer Name]', role: 'Software Engineer', photoUrl: ' https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png'},
    
    
  ];

  const salesAndMarketingTeam = [
    { name: '[Employee Name]', role: 'Sales Manager', photoUrl:'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Employee Name]', role: 'Sales Officer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Employee Name]', role: 'Sales Officer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Employee Name]', role: 'Sales Officer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Founder Name]', role: 'Marketing Officer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Founder Name]', role: 'Marketing Officer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png' },
    { name: '[Founder Name]npx', role: 'Marketing Officer', photoUrl: 'https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png'},
    
    
  ];

  

  return (
    <div className="App">
      <div className="company-name-box">
      <h1>Company Name</h1>
      </div>
      <h2>Welcome to [Your Company Name],where a dedicated team of professionals works together to bring innovation, creativity and expertise to software industry get to know the individuals who make our company thrive.</h2>
      <div className="border"></div>
      <h2>Meet Our Team</h2>
      <TeamSection title="Leadership / Management Team" teamMembers={leadershipTeam} />
      <TeamSection title="Development Team" teamMembers={developmentTeam} />
      <TeamSection title="Sales and Marketing Team" teamMembers={salesAndMarketingTeam} />
    </div>
  );
}

export default App;