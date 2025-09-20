const App = () => {
  return (
    <div className="card">
      <h2 className="card-title">Student Card</h2>
      <p className="card-content">This is a simple card styled with Sass.</p>
      <div className="btns">
        <button className="btn-primary">Click Me</button>
        <button className="btn-cancel">Don't Click Me</button>
      </div>
    </div>
  );
};

export default App;
