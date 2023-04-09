import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyWeather from "./MyWeather";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {

    const [city, setCity] = useState('');
    const [query, setQuery] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');


    const fetchGeoData = async (query) => {
        try {
            // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=9d09b2a81bed1025def85ba12987cea1`);
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=9d09b2a81bed1025def85ba12987cea1`);

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            }

        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
        console.log(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchGeoData();      
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mx-auto text-center w-50" >
                <Form.Label>Search</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    type="text"
                    value={query}
                    placeholder="Search City" />
            </Form.Group>
            {/* <MyWeather lat={lat} lon={lon}/> */}
        </Form>
    )
}

export default Search;
