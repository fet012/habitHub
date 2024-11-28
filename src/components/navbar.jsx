import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">HabitHub</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
