import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyWeather from "./MyWeather";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {

    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');


    const fetchGeoData = async () => {
        try {
            // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=9d09b2a81bed1025def85ba12987cea1`);
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=9d09b2a81bed1025def85ba12987cea1`);

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            }

        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = (event) => {
        setCity(event.target.value);
        fetchGeoData(city);
    }


    return (
        <>
            <Form.Group className="mx-auto text-center w-50" controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    type="text"
                    value={city}
                    placeholder="Search City" />
            </Form.Group>
            {/* <MyWeather lat={lat} lon={lon}/> */}
        </>
    )
}

export default Search;