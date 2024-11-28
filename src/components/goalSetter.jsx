import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import required elements

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const GoalSetter = () => {
  const [goals, setGoals] = useState([{ name: 'Learn React', completed: false }]);
  const [goalInput, setGoalInput] = useState('');

  const addGoal = () => {
    if (!goalInput) return;
    setGoals([...goals, { name: goalInput, completed: false }]);
    setGoalInput('');
  };

  const toggleGoalCompletion = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);
  };

  // Chart Data
  const completedGoals = goals.filter((goal) => goal.completed).length;
  const remainingGoals = goals.length - completedGoals;

  const goalChartData = {
    labels: ['Completed Goals', 'Remaining Goals'],
    datasets: [
      {
        data: [completedGoals, remainingGoals],
        backgroundColor: ['#4CAF50', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Goal Setter</h2>
      <ul className="list-disc pl-5 space-y-2">
        {goals.map((goal, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              goal.completed ? 'line-through text-gray-500' : ''
            }`}
            onClick={() => toggleGoalCompletion(index)}
          >
            {goal.name}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button onClick={addGoal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Goal
        </button>
      </div>
      <div className="mt-8">
        <Pie data={goalChartData} />
      </div>
    </div>
  );
};

export default GoalSetter;
