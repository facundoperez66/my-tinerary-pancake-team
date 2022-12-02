import React, { useRef, useState, useEffect } from 'react'
import "./Cities.css"
import Checkbox from '../../components/CheckBox/Checkbox'
import CityCard from '../../components/CityCard/CityCard'
import	{ useDispatch, useSelector } from 'react-redux'
import cityActions from '../../redux/actions/cityActions'


export default function Cities() {

    const dispatch = useDispatch()
    const { cities, checks, name, checked, continent } = useSelector(state => state.city)
    const { getAllCities, getCitiesFiltred } = cityActions


    let [checkbox, setChecks] = useState([])
    const searchId = useRef()
    const inputCheck = useRef()


    useEffect(() => {
        if (checks || name) {
            let info = {
                checks, name, checked
            }
            dispatch(getCitiesFiltred(info))
            searchId.current.value = name
            if (checked) {
                checked.forEach(check => {
                    let input = Array.from(inputCheck.current).find(input => input.value === check)
                    input.checked = true
                })
            }

        } else {
            dispatch(getAllCities())
        }
        // eslint-disable-next-line
    }, [])

    function filterCheckCards(event) {

        let filter = filterCheck(event)

        let checked = filter

        filter = filter.map((check) => `continent=${check}`).join('&')

        let data = {
            name: searchId.current.value,
            checks: filter,
            checked: checked
        }

        dispatch(getCitiesFiltred(data))
    }

    function filterCheck(event) {
        let checkFiltered = []
        if (event.target.checked) {
            checkFiltered = [...checked, event.target.name]
        } else {
            checkFiltered = checkbox.filter((check) => check !== event.target.name)
        }

        setChecks(checkFiltered)

        return checkFiltered
    }



    return (
        <div className="cities-container">
            <div className='TituloHeader3'>
                <h2 className='cities-title'>Cities </h2>
            
                <form >
                    <label>
                        <input className="search-input123" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
                    </label>
                </form>
                <form className='pruebaChecks1234' ref={inputCheck}>
                    {continent.map((continente, index) => {
                        return <Checkbox continent={continente} valor={continente} fx={filterCheckCards} key={index} />
                    })}
                </form>
            </div>
            <div className="cards-container">

            {cities.length > 0 ? (
                    cities.map((city, index) => {
                        return <CityCard city={city} key={index} />
                    }))
                    : (
                        <img className='img-NotFoundCities123214' width='100%' src="https://cdn-icons-png.flaticon.com/512/6179/6179016.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
    )
}