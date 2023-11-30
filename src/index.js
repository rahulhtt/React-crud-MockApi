import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route >
//       <Route path='/' element={<Data />} />
//       <Route path='/add' element={<Form />} />
//       <Route path='/update' element={<Update />} />
//     </Route>



//   )
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


