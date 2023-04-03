import { useEffect, useState } from "react"

const Projects = () => {
  const auto = document.getElementById("auto-scroll")
  let channels = [
    { ch: "1" }, { ch: "2" }, { ch: "3" }, { ch: "" }, { ch: "" },
    { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" },
    { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" },
    { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }
  ]
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [power, setPower] = useState(true)
  const [sound, setSound] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  // fetch projects from the db
  useEffect(() => {
    getProjectData()
  },[])

  const getProjectData = async () => {
    const request = await fetch('http://localhost:3000/projects')
    .then((request => request.json()))
    .then((data) => {
      setProjects(data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }

  // handle power button
  function powerOnOff(e) {
    let on = document.getElementById("on-btn")
    let inactiveElements = document.getElementsByClassName(" off")
    let activeElements = document.getElementsByClassName("pwr-on")
    if (e.target.id === "on-btn") {
      if(on.className != "pwr-on"){
        on.className = "pwr-on"
        setPower(true)
        powerUp(inactiveElements)
        // add tv on effect for screen
      } else {
        return
      }
    } else if (e.target.id === "off-btn") {
      if (on.className === "pwr-on") {
        on.className = "";
        setPower(false)
        powerDown(activeElements)
        // add tv off effect for screen
      }
    }
  }

  // handle power-up of viewer
  function powerUp(inactiveElements) {
    for (let element of inactiveElements) {
      console.log(element)
      element.className = "pwr-on"
    }
    if (auto.className === "pwr-on") {
      setAutoScroll(true)
    }
  }

  // handle power-down of viewer
  function powerDown(activeElements) {
    for (let element of activeElements) {
      console.log(element)
      element.className = "off"
    }
    if (autoScroll) {
      setAutoScroll(false)
    }
  }

  // handle sound button
  function soundOnOff() {
    let sound = document.getElementById("sound-btn")
    if (power) {
      if (sound.className != "pwr-on") {
        sound.className = "pwr-on"
        setSound(true)
        // add sound unmute for video
      } else {
        sound.className = ""
        setSound(false)
        // add sound mute for video
      }
    } else {
      return
    }
  }

  // handle iterating through projects
  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = channels.length - 1;
    } else if (newIndex >= channels.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex)
  }
  
  // handle auto scroll timing for projects
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll) {
        updateIndex(activeIndex + 1);
        console.log(projects[activeIndex])
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // handle auto-scroll toggle
  function handleAutoScroll() {
    // let auto = document.getElementById("auto-scroll")
    if (power) {
      if (auto.className != "pwr-on") {
        setAutoScroll(true)
        auto.className = "pwr-on"
      } else {
        setAutoScroll(false)
        auto.className = ""
      }
    } else {
      return
    }
  }

  // iteration handler
  function handleIteration(direction) {
    if (direction === "prev") {
      updateIndex(activeIndex -1)
    } else if (direction === "next") {
      updateIndex(activeIndex +1)
    }
  }

  // handle iterator buttons
  function handlePrevNext(e) {
    // let auto = document.getElementById("auto-scroll")
    let direction = e.target.id
    if (auto.className === "pwr-on") {
      auto.className = ""
      setAutoScroll(false)
      handleIteration(direction)
    } else {
      handleIteration(direction)
    }
    console.log(activeIndex)
  }

  if (loading) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div id="projects-container">
        <div id="chasis">
          <div id="screen-container">
            <div id="bar-top" className="black-bar">
              <div id="screen">
                <img 
                  src={projects[0].img}
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "1%"}}
                  />
                <div id="image-efx"></div>
                <div id="screen-efx"></div>
                <div id="screen-flare"></div>
              </div>
            </div>
          </div>
          <div id="control-panel-container">
            <div id="control-panel">
              <div id="selector-indicator-container">
                {/* <h1 id="selector-label">Ch.</h1> */}
                <div id="selector-container">
                  <div id="channel-btn-container">
                    <span id="prev" onClick={(e) => handlePrevNext(e)}>Prev</span>
                    <span id="auto-scroll" className="pwr-on" onClick={() => handleAutoScroll()}>Auto</span>
                    <span id="next" onClick={(e) => handlePrevNext(e)}>Next</span>
                  </div>
                  <div id="indicator-container">
                    <div id="indicators">
                        {channels.map((channel, index) => {
                          return (
                            <span 
                              id={`pos${index}`}
                              // className={`${index === activeIndex ? "active" : ""}`}
                              >{channel.ch}</span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div id="power-control-container">
                <div id="switch-light-container">
                  <div id="power-switch-container">
                      <span id="on-btn" className="pwr-on" onClick={(e) => powerOnOff(e)}>I</span>
                      <span id="off-btn" onClick={(e) => powerOnOff(e)}>O</span>
                      <span id="sound-btn" className={sound ? (power ? "pwr-on" : "off") : ""} onClick={() => soundOnOff()}>🕪</span>
                  </div>
                  <div id="power-light-container">
                    <div id="power-light" className={power ? "pwr-on" : ""}>
                      <div id="middle-ring">
                        <div id="inner-ring"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="text-container">
              <div id="description-container">
                <div id="title">
                  <h1>{projects[0].title}</h1>
                </div>
                <div id="text">
                  <p>{projects[0].description}</p>
                </div>
              </div>
              <div id="tool-link-container">
                <div id="tool-link-1" className="tool-link">
                  <p>{projects[0].tools.map((tool, i) => {
                    if (i == (projects[0].tools.length) -1) {
                      return (tool)
                    } else {
                      return (`${tool}, `)
                    }
                  })}</p>
                </div>
                <div id="tool-link-2" className="tool-link">
                  <a href={`${projects[0].links.github}`}>GitHub Repository</a>
                </div>
                <div id="tool-link-3" className="tool-link">
                  <a href={`${projects[0].links.tonejs}`}>Tone.js API</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects