import "./Skills.css"
import { skills } from '../../Data'




const Skills = () => {
  return (
    <div id="Skills" className="container">
      <div className="Wrapper">
        <div  data-aos="fade-right" className="Desc">Here are some of my skills on which I have been working on for the past 6 Months.
        </div>
        <div className="SkillsContainer"  >
          {skills.map((skill) => (
             <div className="Skill">
              <div data-aos="fade-right" className="SkillTitle">{skill.title}</div>
              <div className="SkillList">
                {skill.skills.map((item) => (
                  <div data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" className="SkillItem">
                    <img src={item.image}/>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills