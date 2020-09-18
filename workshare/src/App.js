import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  return (
    <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs float-right">
      <li class="nav-item">
        <a class="nav-link active" href="#">Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Sign In</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">About Page</h5>
    <p class="card-text">About the Project</p>
    <a href="#" class="btn btn-primary">Scroll Up</a>
  </div>
</div>
  );
}

export default App;
