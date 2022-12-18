import { Component } from "react";
import { fetchBreeds } from "../api";
import Select from 'react-select';


export class BreedSelect extends Component {
    state = {
        breeds: [],
        error: null
    };

    async componentDidMount() {
        try {
            const breeds = await fetchBreeds();
this.setState({ breeds });
        } catch (error) {
            this.setState({error: "Щось пішло не так!"});
        }
    }

    makeOptions = () => {
        return this.state.breeds.map(breed => ({
            value: breed.id,
            label: breed.name
        }));
    };

    render() {
        const { error } = this.state;
        const options = this.makeOptions();
        
        return <div>
            <Select 
            options={options}
            onChange={option => {
                console.log(option);
            }}
            
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    }
}