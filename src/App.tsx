
import './App.css'
import HomePage from './Pages'
import Map from './componets/Map'
import SpacecRender from './componets/SpacecRender'
import './index.css'

function App() {
 

  return (
    <>
    <div>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossOrigin="" />
    </div>
      <HomePage />
      <SpacecRender />
      <Map />
    </>
  )
}

export default App
