function Valikko() {
    return (
      <div>
        <ul>
          <li>Koti</li>
          <li>Meistä</li>
          <li>Ota yhteyttä</li>
        </ul>
      </div>
    )
  }
      
  function Sisalto() {  
    return <h2>Sisältö</h2>
  }
  
  function Alatunniste() {
    return(
      <small>
        &copy;Anastasia Tomar 2024, kaikki oikeudet pidätetään
      </small>
    )
  }
  
  
function Sivu() {
    return(
        <div>
            {<Valikko/>}
            {<Sisalto/>}
            {<Alatunniste/>}
        </div>
        
    )
}

export default Sivu 

  