export const Sequinzer = () => {

  return (
    < div id = "sequinzer" className = "project" >
      <div className="project-image-text-container">
        <div className="project-image-container">
          <img className="project-image" src="../../public/sequinzer_demo.gif"/>
        </div>
        <div className="project-text-container">
          <div className="project-title-container">
            <h1>Sequinzer-6001</h1>
          </div>
          <div className="project-description-container">
            <div className="description">
              <p>Blah Blah Blah</p>
            </div>
            <div className="project-tools">
              <p>Tools:</p>
              <ul className="tools">
                <li>Tool 1</li>
                <li>Tool 2</li>
                <li>Tool 3</li>
              </ul>
            </div>
            <div className="project-links">
              <a href="#">Link 1 </a>
              <a href="#">Link 2 </a>
              <a href="#">Link 3 </a>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}