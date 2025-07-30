import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, onSnapshot, updateDoc, deleteDoc, doc, addDoc } from 'firebase/firestore';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    console.log('Setting up Firebase listener...');
    const unsub = onSnapshot(
      collection(db, 'tasks'), 
      (snapshot) => {
        console.log('Firebase connection successful!');
        console.log('Number of docs:', snapshot.docs.length);
        console.log('Firebase data:', snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        setTasks(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
      },
      (error) => {
        console.error('Firebase error:', error);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  const toggleDone = async (task) => {
    await updateDoc(doc(db, 'tasks', task.id), { done: !task.done });
  };

  const deleteTask = async (task) => {
    await deleteDoc(doc(db, 'tasks', task.id));
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      await addDoc(collection(db, 'tasks'), {
        text: newTaskText,
        done: false,
        createdAt: new Date()
      });
      setNewTaskText('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Admin Dashboard</h1>
      
      {/* Add new task form */}
      <form onSubmit={addTask} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter new task..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add Task</button>
      </form>
      
      {loading && <p>Loading tasks...</p>}
      
      {!loading && tasks.length === 0 && (
        <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
          <p><strong>No tasks found!</strong></p>
          <p>Your Firestore 'tasks' collection is empty. Add your first task above!</p>
        </div>
      )}
      
      <p>Total tasks: {tasks.length}</p>
      
      {tasks.map(task => (
        <div key={task.id} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '10px', 
          border: '1px solid #ccc', 
          padding: '10px',
          borderRadius: '5px',
          background: task.done ? '#f0f8f0' : 'white'
        }}>
          <input type="checkbox" checked={task.done} onChange={() => toggleDone(task)} />
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <div style={{ 
              textDecoration: task.done ? 'line-through' : 'none',
              color: task.done ? '#666' : 'black',
              fontWeight: 'bold'
            }}>
              {task.text || task.title || '[No Text]'}
            </div>
            <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
              User ID: {task.uid || 'No User'} | Created: {task.created ? new Date(task.created.toDate()).toLocaleDateString() : 'Unknown'}
            </div>
          </div>
          <button 
            onClick={() => deleteTask(task)} 
            style={{ 
              marginLeft: '10px', 
              background: '#ff4444', 
              color: 'white', 
              border: 'none', 
              padding: '5px 10px',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;