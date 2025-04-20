import React, { useState } from 'react';

function App() {
  const [interests, setInterests] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill out all fields');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);
    alert("Form submitted!");
  };

  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      setInterests(interests.filter((interest) => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <fieldset>
          <legend>Areas of Interest</legend>
          {["Reading", "Coding", "Design", "Marketing"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                value={item}
                checked={interests.includes(item)}
                onChange={handleInterestChange}
              />
              {item}
            </label>
          ))}
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      
      {submitted && (
  <div>
    <h3>Thanks for signing up, {name}!</h3>
    <p>Your interests include: {interests.join(', ') || 'None'}</p>

    <div>
      <h3>Submitted Information</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Interests: {interests.join(', ') || 'None'}</p>
    </div>
  </div>
  )}
    </main>
  );
}

export default App;
