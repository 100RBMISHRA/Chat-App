// client/src/components/Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";

const Login = ({ socket }) => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const history = useHistory();

  const joinRoom = () => {
    if (username && room) {
      socket.emit('join_room', { username, room });
      history.push('/chat');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default Login;