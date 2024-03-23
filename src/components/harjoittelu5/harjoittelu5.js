import Navigointipalkki from './navigointipalkki';
import Sisalto from './sisalto';

function Ylatunniste() {
  return (
    <Navigointipalkki />
  )
 } 

function Paateksti() {
  return (
    <Sisalto />
  )
}

function Alatunniste() {
  return (
    <footer className='footer'>
      &copy;Anastasia Tomar 2024, kaikki oikeudet pidätetään
    </footer>
  )
}

export default function ReactSivu() {
    return(
        <div>
            {<Ylatunniste/>}
            {<Paateksti/>}
            {<Alatunniste/>}
        </div>
    )
}