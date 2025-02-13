import { lazy, Suspense } from 'react'
import Splash from './components/loader/Splash';
import { useQuery } from '@tanstack/react-query';

const Dashboard = lazy(() => import('./pages/dashboard'));

function App() {
  const {isLoading, data} = useQuery({
    queryKey: ['guests'],
    queryFn: () => fetch('https://ghzvrxfwrtjlnpksmxxf.supabase.co/rest/v1/guests?select=*', {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoenZyeGZ3cnRqbG5wa3NteHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDIxMjksImV4cCI6MjA1NDQxODEyOX0.gtaXct8RA-My7cpKH2Zdw5QdSFKp4HHi7Xwm2OITGa4",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoenZyeGZ3cnRqbG5wa3NteHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDIxMjksImV4cCI6MjA1NDQxODEyOX0.gtaXct8RA-My7cpKH2Zdw5QdSFKp4HHi7Xwm2OITGa4'
      }
    }).then((result) => result.json()),
    initialData: [],
    staleTime: 1000,
  })
  if (isLoading) {
    return <Splash />
  }
  return (
    <Suspense fallback={<Splash />}>
    <Dashboard data={data}/>
  </Suspense>
  )
}

export default App
