import { Navigate } from "react-router-dom"
import './admin.css'

export default function DashboardRoute({ children }) {
	return '1' == 1 ? <section> {children} </section> : <Navigate to={"/home"} replace />
}
