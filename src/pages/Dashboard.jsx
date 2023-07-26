import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TareaForm from '../components/TareaForm'


const Dashboard = () => {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <section>
                <h2>Bienvenido {user && user.name}</h2>
                <p>Dashboard de Tareas</p>
            </section>

            <TareaForm />
        </>
    )
}

export default Dashboard

