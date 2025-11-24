import { useState } from 'react'
import './App.css'
import { NavBar, Welcome, Dock } from '#components'
import gsap from 'gsap'
import { Draggable } from 'gsap/all';
import { Terminal, Resume } from '#windows';

gsap.registerPlugin(Draggable);

function App() {


  return (
    <main className=''>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
    </main>
  )
}

export default App
