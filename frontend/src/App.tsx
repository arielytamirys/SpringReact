import Header from "./compomentes/Header"
import NotifictionButtons from "./compomentes/NotifictionButtons"
import SalesCard from "./compomentes/SalesCard"


function App() {
  return(
    <>
<h4>Feito por Ariely Santos, com as aulas da DevSuperior.  </h4>
<Header/>

<main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>

        </div>
      </section>
</main>

</>  
  )
}

export default App
