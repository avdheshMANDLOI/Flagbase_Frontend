import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/Landing'
import AuthPage from '@/pages/Auth'
import DashboardPage from '@/pages/Dashboard'
import ProjectsPage from '@/pages/Projects'
import FlagsPage from '@/pages/Flags'
import AnalyticsPage from '@/pages/Analytics'
import ExperimentsPage from '@/pages/Experiments'

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <AuthPage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/flags', element: <FlagsPage /> },
  { path: '/analytics', element: <AnalyticsPage /> },
  { path: '/experiments', element: <ExperimentsPage /> },
])

export default router