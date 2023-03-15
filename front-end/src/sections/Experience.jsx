const Experience = () => {

  const handleCard = (e) => {
    let i, cards, tablinks
    let tabID = e.target.id.split("-")[0]
    cards = document.getElementsByClassName("experience-cards")
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(tabID).style.display = "inherit"
    e.target.className += "active"
  }

  return (
    <div id="experience-container">
      <div id="side-menu" role="tablist">
        <a id="flatiron-link" className="tablinks" onClick={handleCard}>Flatiron School</a>
        <a id="piano-link" className="tablinks" onClick={handleCard}>Piano Technician</a>
        <a id="masters-link" className="tablinks" onClick={handleCard}>CUNY Brooklyn College</a>
        <a id="roli-link" className="tablinks" onClick={handleCard}>ROLI</a>
      </div>
      <div id="experiences">
        <div id="flatiron" className="experience-cards">
          <h1>Flatiron School</h1>
          <div className="photo-blurb">
            <img id="flatiron-logo"></img>
            <p className="experience-blurbs"></p>
          </div>
        </div>
        <div id="piano" className="experience-cards">
          <h1>Piano Technician</h1>
          <div className="photo-blurb">
            <img id="piano-logo"></img>
            <p id="piano-blurb" className="experience-blurbs"> Provided piano tuning, regulation and repair services 
            to an average of 10 clients a week using electronic and ear techniques with 
            standard piano tuning and repair tools in order to bring their instrument 
            to its designed specs, allowing it to sound its best, and resolve or prevent 
            performance issues in client pianos.<br/><br/>

            Maintained a database of clients as well as payment and invoicing tooling using 
            Google Sheets, Xero invoicing, and Square payments in order keep track of client 
            service records, payments, and future service needs.
            </p>
          </div>
        </div>
        <div id="masters" className="experience-cards">
          <h1>CUNY Brooklyn College</h1>
          <div className="photo-blurb">
            <img id="bc-logo"></img>
            <p className="experience-blurbs"></p>
          </div>
        </div>
        <div id="roli" className="experience-cards">
          <h1>ROLI</h1>
          <div className="photo-blurb">
            <p id="roli-blurb" className="experience-blurbs">Designed and implemented a system to track and catalog 
            product shipments and returns using Google Sheets and Google Docs significantly 
            reducing the turnover period of returns from 5 weeks to 2 weeks and reducing lost 
            shipments from 4% to 1%.<br/><br/>

            Coordinated between Tech Support, Sales, Logistics, and Package Carriers in order 
            to provide a smooth transaction for customers by providing accurate updates using 
            the aforementioned cataloging system and reducing interdepartmental lead times 
            from 5 to 2 business days.<br/><br/>

            Created documentation and project description outlining the returns process and 
            how it should continue to expand in order to provide a guideline for a future RMA 
            system and returns department.<br/><br/>

            Initiated and performed repairs of MIDI instruments in New York reducing the 
            turnaround for faulty products within the US and Canada from 8 weeks to 2 weeks.
            </p>
          </div>
          <img id="roli-logo"></img>
        </div>
      </div>
    </div>
  )
}

export default Experience