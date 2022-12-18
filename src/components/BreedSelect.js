import { Component } from "react";
import { fetchBreeds } from "../api";
import Select from 'react-select';


export class BreedSelect extends Component {
    state = {
        breeds: [],
        isLoading: false,
        error: null,
    };

    async componentDidMount() {
        try {
            this.setState({isLoading: true})
            const breeds = await fetchBreeds();
this.setState({ breeds });
        } catch  {
            this.setState({error: "Щось пішло не так!"});
        } finally {
            this.setState({ isLoading: false })
        }
    }

    makeOptions = () => {
        return this.state.breeds.map(breed => ({
            value: breed.id,
            label: breed.name
        }));
    };

    handleChange = option => {
        this.props.onSelect(option.value);
    };

    render() {
        const { error, isLoading } = this.state;
        const options = this.makeOptions();
        
        return <div>
            <Select 
            options={options}
            onChange={this.handleChange}
            isLoading={isLoading}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    }
}