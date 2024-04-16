import "./Title.css"

const Title = ({ title , subtitle, hr }) => {
  return (
    <div>
          <div  className="abt-heading">
        <div data-aos="fade-up"
     data-aos-duration="1000" className="abt-slide">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
        <h1 className="slide2" style={{ color: "#951af1" }}>{hr}<span><hr /></span></h1>
        </div>
        </div>
        <p data-aos="fade-right">{subtitle}</p>
      </div>
    </div>
  )
}

export default Title