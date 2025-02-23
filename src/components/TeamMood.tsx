import { FC } from "react";
import MoodSlider from "./MoodSlider";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  mood: number; // Values: 0, 25, 50, 75, 100
}

const TeamMood: FC = () => {
  const team: TeamMember[] = [
    {
      name: "Andrea",
      role: "UX/UI",
      avatar: "/team/andrea.jpeg",
      mood: 100, // 😊
    },
    {
      name: "Alvaro",
      role: "Dev and Manager",
      avatar: "/team/alvaro.jpg",
      mood: 75, // 🙂
    },
    {
      name: "Juan",
      role: "UX Senior",
      avatar: "/team/juan.jpg",
      mood: 25, // 😕
    },
    {
      name: "Jose",
      role: "Marketing",
      avatar: "/team/jose.jpeg",
      mood: 0, // 😢
    },
    {
      name: "Maria",
      role: "UX Junior",
      avatar: "/team/maria.jpg",
      mood: 75, // 🙂
    },
  ];

  return (
    <div className="team-mood">
      <h3 className="team-mood__title">Team mood</h3>
      <div className="team-mood__list">
        {team.map((member) => (
          <div key={member.name} className="team-mood__member">
            <div className="team-mood__details">
              <img src={member.avatar} alt={member.name} className="team-mood__avatar" />
              <div className="team-mood__info">
                <span className="team-mood__name">{member.name}</span>
                <span className="team-mood__role">{member.role}</span>
              </div>
            </div>
            <div className="team-mood__slider">
              <MoodSlider value={member.mood} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMood;
