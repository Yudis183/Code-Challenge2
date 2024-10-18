import { useEffect, useState } from 'react';

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => setTeamMembers(data.results));
  }, []);

  return (
    <div>
      <h1>Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.picture.large} alt={member.name.first} />
            <h2>{member.name.first} {member.name.last}</h2>
            <p>{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';

<Image src="/images/hero.jpg" alt="Company Banner" width={1200} height={800} />
