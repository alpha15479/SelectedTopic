import React, { useContext, useState } from 'react'
import './Content.css'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../fire'
import Axios from 'axios'

const Content = ({ handleLogout }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState(0)

  const [employeeList, setEmployeeList] = useState([])

  const getEmployee = () => {
    Axios.get('http://localhost:3001/employee').then(response => {
      setEmployeeList(response.data)
    })
  }

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      salary: salary
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          salary: salary
        }
      ])
    })
  }

  const { currentUser } = useContext(AuthContext)

  if (!currentUser) {
    return <Redirect to='/login' />
  }

  return (
    <body>
      <header className='main-header clearfix'>
        <div className='logo'>
          <a href='/hero' className='logo'>
            <em>Penta</em>gon
          </a>
        </div>
        <a href='#menu' className='menu-link'>
          <i className='fa fa-bars'></i>
        </a>
        <nav id='menu' className='main-nav' role='navigation'>
          <ul className='main-menu'>
            <li>
              <a href='#section1'>Hello - {currentUser.email}</a>
            </li>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/content'>Apply</a>
            </li>
            <li>
              <a href='/about'>About Me</a>
            </li>
            <li>
              <a href='#section4'>
                <button onClick={() => firebaseConfig.auth().signOut()}>
                  LogOut
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className='section main-banner'>
        <div className='content'>
          <div className='row'>
            <h3>
              Please apply<em> your application</em>
            </h3>
            <br />
            <div className='first'>
              <form action='' className='former'>
                <br />
                <label htmlFor='name' className='form-control'>
                  Name :
                </label>
                <input
                  type='text'
                  placeholder='Enter your name here'
                  onChange={event => {
                    setName(event.target.value)
                  }}
                />
                <label htmlFor='age' className='form-control'>
                  Age :
                </label>
                <input
                  type='number'
                  placeholder='Enter your age here'
                  onChange={event => {
                    setAge(event.target.value)
                  }}
                />
                <label htmlFor='country' className='form-control'>
                  Country :
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your country here'
                  onChange={event => {
                    setCountry(event.target.value)
                  }}
                />
                <label htmlFor='position' className='form-control'>
                  Position :
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your position here'
                  onChange={event => {
                    setPosition(event.target.value)
                  }}
                />
                <label htmlFor='salary' className='form-control'>
                  Salary :
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Enter your salary expectation here'
                  onChange={event => {
                    setSalary(event.target.value)
                  }}
                />
                <br />
                <button className='btn btn-success' onClick={addEmployee}>
                  Send Application
                </button>
                <br />
              </form>
            </div>
            <div className='second'>
              <button className='btn btn-primary' onClick={getEmployee} style={{ marginLeft: "33%" }}>
                Show Employees
              </button>
              <br />
              <br />
              {employeeList.map((val, key) => {
                return (
                  <div className='second app'>
                    <p className='card-text' style={{ fontSize: "16px", fontWeight: "bold" }}>Name : {val.name}</p>
                    <p className='card-text' style={{ fontSize: "16px", fontWeight: "bold" }}>Age : {val.age}</p>
                    <p className='card-text' style={{ fontSize: "16px", fontWeight: "bold" }}>Country : {val.country}</p>
                    <p className='card-text' style={{ fontSize: "16px", fontWeight: "bold" }}>Position : {val.position}</p>
                    <p className='card-text' style={{ fontSize: "16px", fontWeight: "bold" }}>Salary : {val.salary}</p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
    </body>
  )
}

export default Content
