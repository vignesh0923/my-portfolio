import React from 'react'

const Titlelft = ({ titlee , subtitlee, hrr }) => {
  return (
    <div>
         <div className="abt-heading2">
        <div data-aos="fade-up"
     data-aos-duration="1000" className="abt-slide2">
        <div>
        <h1 className="slide22" style={{ color: "#951af1" }}><span><hr /></span>{titlee}</h1>
        </div>
        <div>
          <h1>{hrr}</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Titlelft