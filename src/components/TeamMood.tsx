import { FC } from "react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  mood: "happy" | "neutral" | "sad";
}

const TeamMood: FC = () => {
  const team: TeamMember[] = [
    {
      name: "Andrea",
      role: "UX/UI",
      avatar: "/team/andrea.jpeg",
      mood: "happy",
    },
    {
      name: "Alvaro",
      role: "Dev and Manager",
      avatar: "/team/alvaro.jpg",
      mood: "happy",
    },
    {
      name: "Juan",
      role: "UX Senior",
      avatar: "/team/juan.jpg",
      mood: "neutral",
    },
    {
      name: "Jose",
      role: "Marketing",
      avatar: "/team/jose.jpeg",
      mood: "happy",
    },
    {
      name: "Maria",
      role: "UX Junior",
      avatar: "/team/maria.jpg",
      mood: "happy",
    },
  ];

  const getMoodEmoji = (mood: TeamMember["mood"]) => {
    switch (mood) {
      case "happy":
        return "😊";
      case "neutral":
        return "😐";
      case "sad":
        return "😢";
      default:
        return "😊";
    }
  };

  return (
    <div className="team-mood">
      <h3 className="team-mood__title">Team mood</h3>
      <div className="team-mood__list">
        {team.map((member) => (
          <div key={member.name} className="team-mood__member">
            <img src={member.avatar} alt={member.name} className="team-mood__avatar" />
            <div className="team-mood__info">
              <span className="team-mood__name">{member.name}</span>
              <span className="team-mood__role">{member.role}</span>
            </div>
            <span className="team-mood__emoji">{getMoodEmoji(member.mood)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMood;
