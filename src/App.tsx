import { BrowserRouter } from 'react-router-dom'
import { RouteProvider } from './pages'
import { routes } from './pages/routes.tsx'

function App() {
    return (
        <BrowserRouter>
            <RouteProvider routes={routes} />
        </BrowserRouter>
    )
}

export default App
