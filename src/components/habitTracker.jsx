import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';  
import data from '../utilities/data';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HabitTracker = () => {
  const [habits, setHabits] = useState(data.habits);
  const [newHabit, setNewHabit] = useState('');
  const [selectedHabit, setSelectedHabit] = useState(habits[0]);

  const addHabit = () => {
    if (newHabit) {
      setHabits([...habits, { name: newHabit, progress: 0 }]);
      setNewHabit('');
    }
  };

  const selectHabit = (habit) => {
    setSelectedHabit(habit);
  };

  // Dummy progress data for the chart
  const progressData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    datasets: [
      {
        label: `Progress for ${selectedHabit.name}`,
        data: [10, 20, 50, 70, 80, 90, selectedHabit.progress], // Example data
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Habit Tracker</h2>
      <div className="space-y-4">
        {habits.map((habit, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 ${habit === selectedHabit ? 'bg-blue-100' : ''}`}
            onClick={() => selectHabit(habit)}
          >
            <span>{habit.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button onClick={addHabit} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Habit
        </button>
      </div>
      <div className="mt-8">
        <Line data={progressData} />
      </div>
    </div>
  );
};

export default HabitTracker;
