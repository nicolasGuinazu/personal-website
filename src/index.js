import ReactDOM from 'react-dom';
import { ContextoProvider } from './components/store/contexto';
import './index.css';
import App from './App';

ReactDOM.render(<ContextoProvider><App /></ContextoProvider>, document.getElementById('root'));
