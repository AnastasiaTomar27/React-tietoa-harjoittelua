import Kuva from "./kuva";

function Navigointipalkki() {
  return (
    <nav className='navbar'>
      <Kuva />
      <ul className='lista'>
        <li>Koti</li>
        <li>Meistä</li>
        <li>Ota yhteyttä</li>
      </ul>
    </nav>
  )
  }

  export default Navigointipalkki;