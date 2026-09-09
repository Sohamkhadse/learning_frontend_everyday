import React from 'react'

import "./styles/style.css"

import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Position from './components/position'
import Button from './components/Button'
import Table from './components/table'

const App = () => {

  return (
    <div>

      <Header />

      <h1 className="text-4xl text-red-500">
        hello bro this is new world
      </h1>

      <Card />

      <Position />

      <Footer />
      <Button/>

      <Table />

    </div>
  )
}

export default App