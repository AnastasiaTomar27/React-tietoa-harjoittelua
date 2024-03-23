function Ylatunniste() {
    return (
      <div>
        <img src="./logo512.png" width="40px" alt="react_logo" />
          <ul>
            <li>Koti</li>
            <li>Meistä</li>
            <li>Ota yhteyttä</li>
          </ul>
      </div>
    )
   } 
  
  function Paateksti() {
    return (
      <div>
        <h2>Tietoa Reactista</h2>
        <ul>
          <li>Julkaistiin vuonna 2013</li>
          <li>Alunperin Jordan Walken luomus</li>
          <li>Reactilla on yli 100K tähteä GitHubissa</li>
          <li>On Facebookin ylläpitämä</li>
          <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
        </ul>
      </div>
    )
  }
  
  function Alatunniste() {
    return (
      <small>
        &copy;Anastasia Tomar 2024, kaikki oikeudet pidätetään
      </small>
    )
  }

  function Tietoa_Reactista() {
    return(
        <div>
            {<Ylatunniste/>}
            {<Paateksti/>}
            {<Alatunniste/>}
        </div>
    )
  }
  export default Tietoa_Reactista