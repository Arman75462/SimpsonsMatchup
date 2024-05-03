import "../styles/componentsStyles/InformationCard.css";

function InformationCard({ text }) {
  return (
    <div className="InformationCard">
      <p>{text}</p>
    </div>
  );
}

export default InformationCard;
