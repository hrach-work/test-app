import { lazy, Suspense } from 'react'
import Splash from './components/loader/Splash';

const Dashboard = lazy(() => import('./pages/dashboard'));

function App() {

  return (
    <Suspense fallback={<Splash />}>
    <Dashboard />
  </Suspense>
  )
}

export default App
