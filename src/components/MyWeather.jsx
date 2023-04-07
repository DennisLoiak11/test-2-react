const MyWeather = () => {
    
    const fetchData = async () => {
        try {
            const response = await fetch(``);

            if (response.ok) {
                const data = await response.json();


                console.log(data); 
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    fetchData();
}