import { Provider } from 'react-redux';
import Body from './Components/Body';
import './index.css';
import Appstore from './Utils/AppStore';


function App() {
  return (
    <Provider store={Appstore}> <Body/></Provider>
    
  );
}

export default App;
