const Person = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation),
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, 'React is rendered'),
        React.createElement(Person, { name: 'Frank', occupation: 'WebDeveloper' }, null),
        React.createElement(Person, { name: 'Jasna', occupation: 'UI/UX Designer' }, null),
        React.createElement(Person, { name: 'Theodor', occupation: 'Student' }, null),
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);
