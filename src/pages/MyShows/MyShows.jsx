import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./MyShows.css"
import hotelActions from '../../redux/actions/hotelActions'
import ShowCardAdmin from '../../components/ShowCardAdmin/ShowCardAdmin'
import NuevaCardMyShow from '../../components/NuevaCardMyShow/NuevaCardMyShow'

export default function MyShows() {
    const dispatch = useDispatch()
    const { shows } = useSelector(state => state.hotel)
    const { id } = useSelector(state => state.user)
    const { getShows } = hotelActions


    useEffect(() => {
        dispatch(getShows(id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="CONTENEDOR-PRINCIPAL23">
            <div className='shows1234'>
                <h2>My SHOWS</h2>
            </div>

            <div className="hotel-cardcontaine33">
            <div className="hotel-cardcontaine33 ">
                <NuevaCardMyShow  text='show' reDirect='/newShow' />
                {shows.length > 0 && (
                    shows.map((show, index) => {
                        return <ShowCardAdmin shows={show} key={index} idAdm={id} />
                    }))}
            </div>
        </div>
        </div>
    )
}