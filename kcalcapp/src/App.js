
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Weight (lbs): </label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ex. 135" />
        </div>


        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Activity level: </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="ex. 13" rows="1"></textarea>
        </div>

        <button type="button" class="btn btn-info">Calculate</button>
     
      </header>
    </div>
  );
}

export default App;
