import Otsikko from "./otsikko"

function Sisalto() {
    return (
      <div className="content">
        <Otsikko />
        <ul className="sisalto_lista">
          <li>Julkaistiin vuonna 2013</li>
          <li>Alunperin Jordan Walken luomus</li>
          <li>Reactilla on yli 100K tähteä GitHubissa</li>
          <li>On Facebookin ylläpitämä</li>
          <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
        </ul>
      </div>
    )
  }

  export default Sisalto