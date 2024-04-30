import logo from './logo.svg';
import './App.css';
import { FormComp } from './Component/FormComp';
import { addAreaFormCofig } from './Config/config';

function App() {
  return (
    <div>
      <FormComp addAreaFormCofig={addAreaFormCofig} />
    </div>
  );
}

export default App;
