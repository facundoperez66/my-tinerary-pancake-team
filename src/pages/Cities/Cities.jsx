import React, { useRef, useState, useEffect } from 'react'
import "./Cities.css"
import Checkbox from '../../components/CheckBox/Checkbox'
import CityCard from '../../components/CityCard/CityCard'

export default function Cities() {

    let [ciudades, setCiudades] = useState([])
    let [ciudadesFiltradas, setCiudadesFiltradas] = useState([])
    
    let [checks, setChecks] = useState([])
    const searchId = useRef()



    useEffect(() => {
        fetch('../dataCities.json')
            .then(response => response.json())
            .then(response => setCiudades(response))

        fetch('../dataCities.json')
            .then(response => response.json())
            .then(response => setCiudadesFiltradas(response))
    }, [])

    let checkCiudades = [...new Set(ciudades.map((ciudad) => ciudad.continent))]

    function filterCheckCards(evento) {

        let checkFiltered = filterCheck(evento)
        localStorage.setItem('checkboxFiltrados', JSON.stringify(checkFiltered))
        let searchFiltered = filterSearch(checkFiltered)
        localStorage.setItem('searchFiltrados', JSON.stringify(searchFiltered))
        setCiudadesFiltradas(searchFiltered)
        console.log(searchFiltered)
        localStorage.setItem('ciudadesFiltradas', JSON.stringify(searchFiltered))
    }

    function filterCheck(event) {
        let checkFiltered = checks
        if(event.target.checked) {
            checkFiltered =  [...checks, event.target.name]
        } else {
            checkFiltered = checks.filter((check) => check !== event.target.name)
            console.log(checks)
        }

        let ciudadesFiltradas = ciudades.filter((ciudad) => checkFiltered.includes(ciudad.continent))

        setChecks(checkFiltered)

        if (checkFiltered.length === 0) {
            return ciudades
        }

        return ciudadesFiltradas
    }

    function filterSearch(array) {
        if (searchId.current.value !== '') {
            let ciudadesFiltradas = array.filter((ciudad) => ciudad.name.toLowerCase().includes(searchId.current.value.toLowerCase()))
            return ciudadesFiltradas
        } else {
            return array
        }
    }

    return (
        <div className="cities-container">
            <div className='TituloHeader3'>
            <h2>Cities </h2>
            
            <form className="category-container" method="get">
                
                <label className='prueba12321'>
                    <input className="search-input w-100" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
                </label>

                {checkCiudades.map((continente, index) => {
                     return <Checkbox continent={continente} valor={continente} fx={filterCheckCards} key={index} />
                })}
            </form>
</div>
            <div className="cards-container">

                {ciudadesFiltradas.length > 0 ? (
                    ciudadesFiltradas.map((city, index) => {
                        return <CityCard city={city} key={index} />
                    }))
                    : (
                        <img className='img-fluid' width='100%' src="./img/notsearch.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
    )
}