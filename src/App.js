import './App.css';
import Portfolio from './components/Portfolio';
import data from './data';

export default function App() {
  return (
    <div className="portfolio">
      <Portfolio projects={data}/>
    </div>
  );
}