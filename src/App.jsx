import robotImage from './assets/robot-coffee.png'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello World!</h1>
      <img
        src={robotImage}
        alt="Robot coding in a coffee shop"
        style={{ borderRadius: '8px', marginTop: '20px' }}
      />
      <p>Welcome to your React application.</p>
    </div>
  )
}

export default App
