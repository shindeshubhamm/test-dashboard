interface StatsCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  variant?: "default" | "danger";
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, count, label, variant = "default" }) => {
  return (
    <div className={`stats-card ${variant === "danger" ? "stats-card--danger" : ""}`}>
      <div className={`stats-card__icon stats-card__icon--${variant}`}>{icon}</div>
      <div className="stats-card__content">
        <h2 className="stats-card__count">{count}</h2>
        <p className="stats-card__label">{label}</p>
      </div>
    </div>
  );
};

export default StatsCard;
