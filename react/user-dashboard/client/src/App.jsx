import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import Message from './components/message/Message.jsx';
import MessageProvider from './context/MessageContext.jsx';

const App = () => {
  return (
    <Router>
      <MessageProvider>
        <Message />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MessageProvider>
    </Router>
  );
};

export default App;