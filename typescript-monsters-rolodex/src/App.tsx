import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import './App.css';

type Monster = {
    id: string;
    name: string;
    email: string;
};

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((res) => res.json())
        //     .then((users) => setMonsters(users));

        const fetchUsers = async () => {
            const users = await getData<Monster[]>(
                'https://jsonplaceholder.typicode.com/users'
            );
        };
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();

        setSearchField(searchFieldString);
    };

    return (
        <div className='App'>
            <h1 className='app-title'>Monsters Rolodex</h1>

            <SearchBox
                className='monsters-search-box'
                placeholder='Search Monsters'
                onChangeHandler={onSearchChange}
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
