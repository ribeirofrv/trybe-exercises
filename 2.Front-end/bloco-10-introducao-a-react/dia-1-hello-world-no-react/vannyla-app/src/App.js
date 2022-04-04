import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromises = ['Study React', 'Stay on track']

function App() {
  return (
    <div className='main'>
      <h1>Appointment List</h1>
      <ul>
        {compromises.map((phrase) => Task(phrase))}
      </ul>
    </div>
  );
}

export default App;
