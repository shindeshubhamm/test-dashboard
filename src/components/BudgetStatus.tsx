import { FC } from "react";
import { FaPlus, FaDownload, FaCalendarAlt, FaFilter } from "react-icons/fa";

interface Project {
  name: string;
  company: string;
  totalBudget: number;
  profitability: number;
  actualHours: number;
  totalHours: number;
  status: "over" | "on" | "under";
  avatar: string;
}

const BudgetStatus: FC = () => {
  const projects: Project[] = [
    {
      name: "Insurance App",
      company: "Verti",
      totalBudget: 70000,
      profitability: -2500,
      actualHours: 100,
      totalHours: 100,
      status: "over",
      avatar: "/team/alvaro.jpg",
    },
    {
      name: "Neo",
      company: "Bankia",
      totalBudget: 70000,
      profitability: 4000,
      actualHours: 600,
      totalHours: 1000,
      status: "on",
      avatar: "/team/juan.jpg",
    },
    {
      name: "VR Website",
      company: "Bankia",
      totalBudget: 70000,
      profitability: 4000,
      actualHours: 1100,
      totalHours: 2000,
      status: "under",
      avatar: "/team/jose.jpeg",
    },
    {
      name: "VR Website",
      company: "Bankia",
      totalBudget: 70000,
      profitability: 4000,
      actualHours: 800,
      totalHours: 1000,
      status: "under",
      avatar: "/team/maria.jpg",
    },
  ];

  const getProgressWidth = (actual: number, total: number) => {
    return (actual / total) * 100;
  };

  return (
    <div className="budget-status">
      <div className="budget-status__header">
        <h3>Budget status</h3>
        <div className="budget-status__actions">
          <button className="btn btn--primary">
            <FaPlus /> Add New Project
          </button>
          <button className="btn">
            <FaDownload /> Download report
          </button>
          <button className="btn">
            <FaCalendarAlt /> dd/mm/yyyy - dd/mm/yyyy
          </button>
          <button className="btn">
            <FaFilter /> Filter
          </button>
        </div>
      </div>
      <div className="budget-status__list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card__header">
              <div className="project-card__title">
                <h4>{project.name}</h4>
                <span>{project.company}</span>
              </div>
              <img src={project.avatar} alt={project.company} className="project-card__avatar" />
            </div>
            <div className="project-card__stats">
              <div className="project-card__budget">
                <span>Total Budget</span>
                <strong>{project.totalBudget}€</strong>
              </div>
              <div className="project-card__profitability">
                <span>Profitability</span>
                <strong className={project.profitability < 0 ? "negative" : "positive"}>
                  {project.profitability > 0 ? "+" : ""}
                  {project.profitability}€
                </strong>
              </div>
            </div>
            <div className="project-card__progress">
              <div className="project-card__progress-bar">
                <div
                  className={`progress-bar progress-bar--${project.status}`}
                  style={{ width: `${getProgressWidth(project.actualHours, project.totalHours)}%` }}
                />
              </div>
              <div className="project-card__hours">
                <span>Actual hours: {project.actualHours}</span>
                {project.status === "over" && (
                  <span className="project-card__hours-over">
                    {project.totalHours} hours over Budget!
                  </span>
                )}
                {project.status !== "over" && <span>{project.totalHours} total hours</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetStatus;
