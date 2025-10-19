
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import TestClass from './Components/TestClass/TestClass.jsx'
import LifeCycle from './Components/LifeCycle/LifeCycle.jsx'
function App() {
  return (
    <>
    <Navbar />
    <LifeCycle />
    <TestClass currency={' L.E'} val={200}/>
    <hr/>
    <TestClass currency={' $'} val={300}/>
    </>
    
  )
}

export default App
