const Person = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', { key: 1 }, props.name),
        React.createElement('p', { key: 2 }, props.occupation),
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title', key: 3 }, 'React is rendered'),
        React.createElement(Person, { name: 'Frank', occupation: 'WebDeveloper', key: 4 }, null),
        React.createElement(Person, { name: 'Jasna', occupation: 'UI/UX Designer', key: 5 }, null),
        React.createElement(Person, { name: 'Theodor', occupation: 'Student', key: 6 }, null),
    ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App));
