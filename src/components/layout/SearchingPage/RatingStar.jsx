import RatingStars from "../../../assets/images/RatingStar/RatingStar.svg";

function RatingStar() {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "8px",
        marginTop: "8px",
        marginRight: "8px",
      }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <img style={{ marginLeft: "2px" }} key={index} src={RatingStars} />
      ))}
    </div>
  );
}

export default RatingStar;
