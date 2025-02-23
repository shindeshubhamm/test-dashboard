import {
  FaProjectDiagram,
  FaCheckCircle,
  FaSync,
  FaExclamationTriangle,
  FaUsers,
} from "react-icons/fa";
import Layout from "./components/Layout";
import StatsCard from "./components/StatsCard";
import RevenueChart from "./components/RevenueChart";
// import BudgetStatus from "./components/BudgetStatus";
import BudgetChart from "./components/BudgetChart";
import TeamMood from "./components/TeamMood";
import "./global.scss";

function App() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard__top">
          <div className="dashboard__main">
            <div className="dashboard__stats">
              <StatsCard icon={<FaProjectDiagram />} count={5} label="Total Projects" />
              <StatsCard icon={<FaCheckCircle />} count={1} label="Completed" />
              <StatsCard icon={<FaSync />} count={3} label="Ongoing" />
              <StatsCard
                icon={<FaExclamationTriangle />}
                count={1}
                label="Delayed"
                variant="danger"
              />
              <StatsCard icon={<FaUsers />} count={5} label="Employees" />
            </div>
            <div className="dashboard__charts">
              <RevenueChart />
              <BudgetChart />
            </div>
          </div>
          <div className="dashboard__team">
            <TeamMood />
          </div>
        </div>
        <div className="dashboard__bottom">{/* <BudgetStatus /> */}</div>
      </div>
    </Layout>
  );
}

export default App;
