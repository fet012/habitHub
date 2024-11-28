import HabitTracker from '../components/habitTracker';
import GoalSetter from '../components/goalSetter';

const Home = () => (
  <div className="container mx-auto p-6">
    <HabitTracker />
    <GoalSetter />
  </div>
);

export default Home;
