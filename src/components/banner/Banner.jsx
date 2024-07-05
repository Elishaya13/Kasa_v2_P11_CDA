import "./banner.scss";

const Banner = ({ banner, text }) => {
  return (
    <div className="banner">
      <img src={banner} alt="banner"></img>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;