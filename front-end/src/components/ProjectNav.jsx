const Navigation = () => {
  let i = 0
  let leftNav = document.getElementById("left-arrow")
  let rightNav = document.getElementById("right-arrow")

  function handleIterators(e) {
    let button, allProjects, project, limit, projectNames
    button = e.target
    allProjects = document.getElementsByClassName("project")
    limit = allProjects.length
    projectNames = document.getElementsByClassName("project-nav-li")


    if (button.id == "left-arrow") {
      if (i <= 0) {
        console.log("stahhp")
      } else {
        project = allProjects[i].id
        document.getElementById(project).style.display = "inherit"
        console.log(allProjects[i])
        i--
      }
    } else if (button.id == "right-arrow") {
      if (i == limit) {
        console.log("STAHHP")
      } else {
        project = allProjects[i].id
        document.getElementById(project).style.display = "inherit"
        console.log(allProjects[i])
        i++
      }
    }
  }

  return (
    <div id="project-nav-container">
      <style>
        {
          `
          #projects {
            display: flex;
            flex-direction: column;
            font-family: 'Sansita', sans-serif;
            height: 100vh;
          }

          #projects h2 {
            color: #4fff19;
          }

          #projects-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 70vw;
            height: 80vh;
            border: 1px solid #bbb
          }

          .project {
            display: none;
            width: 100%;
            height: 80%;
            border: 1px solid #bbb
          }

          .project-image-text-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
          }

          .project-image-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 65%;
            height: 100%;
            border: 1px solid #bbb;
          }

          .project-image {
            width: 75%;
            height: 75%;
            border: 1px solid #bbb;
            border-radius: 30px;;
          }

          .project-text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 35%;
            height: 100%;
          }

          .project-title-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 30%;
          }

          .project-title-container h1 {
            font-size: 9vh;
            color: white;
          }

          .project-description-container {
            display: flex;
            flex-direction: column;
            height: 70%;
          }

          .description {
            font-size: 3vh;
            height: 45%;
          }

          .project-tools {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 2vh;
            height: 30%;
          }

          .project-tools ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            column-count: 1;
            height: 100%;
            list-style-type: none;

          }

          .project-tools li {
            margin: 0 1vw 0 1vw;
            width: 10vw;
            text-align: left;
            padding: 0 0 0 0.5vw;
          }

          .project-tools li::marker {
            content: "◈";
          }

          .project-links {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            font-size: 2vh;
            height: 25%;
          }

          #tadlab {
            display: inherit;
          }

          /* project navigation */
            #project-nav-container {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-evenly;
              width: 100%;
              height: 20%;
            }

            .arrow-container {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
            }

            .arrow-container button {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: transparent;
              font-size: 3vw;
              color: #4fff19;
              padding: 3vw;
              height: 3vw;
              margin: 1vw;
            }

            #projects-list-container {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: 70%;
            }

            .project-nav-li {
              font-size: 3vh;
              color: #082d34;
              margin: 1vh;
            }
          `
        }
      </style>
      <div className="arrow-container">
        <button id="left-arrow" onClick={(e) => handleIterators(e)}>{"<"}</button>
      </div>
      <div id="projects-list-container">
        <span id="tadlab" className="project-nav-li">TADLAB</span>
        <span id="sequinzer" className="project-nav-li">Sequinzer-6001</span>
        <span id="cheekers" className="project-nav-li">Cheekers</span>
      </div>
      <div className="arrow-container">
        <button id="right-arrow" onClick={(e) => handleIterators(e)}>{">"}</button>
      </div>
    </div>
  )
}