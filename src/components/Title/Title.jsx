import "./Title.css"

const Title = ({ title , subtitle, hr }) => {
  return (
    <div>
          <div className="abt-heading">
        <div className="abt-slide">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
        <h1 className="slide2" style={{ color: "#951af1" }}>{hr}<span><hr /></span></h1>
        </div>
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Title