import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import GridContanier from '../components/GridContanier'
import DataContainer from '../components/DataTest'

const IndexPage = () => (
  <div>
    <Header />
    <div className="main">
      <div className="mainGroup">
        <h1>
          Create. <br />
          Gaia UGD-Group
        </h1>
        <p>Design based on Big Data, usage of efficient, benefit from those.</p>

        <Link to="/page-2">test link</Link>

        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="284">
          <path fill="#55CCFF">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="M 0 0 C 0 0 236.5 128.5 451 128.5 C 665.5 128.5 915 0 1101.5 0 C 1288 0 1440 38.5 1440 38.5 L 1440 284 L 0 284 Z;
          
            M 0 86.5 C 0 86.5 236.5 0 451 0 C 665.5 0 915 114.5 1101.5 114.5 C 1288 114.5 1440 38.5 1440 38.5 L 1440 284 L 0 284 Z;

            M 0 0 C 0 0 236.5 128.5 451 128.5 C 665.5 128.5 915 0 1101.5 0 C 1288 0 1440 38.5 1440 38.5 L 1440 284 L 0 284 Z
            "
            />
          </path>
        </svg>
      </div>
    </div>
    <DataContainer />
    <div className="grids">
      <GridContanier icon={require('../images/Company-top.svg')} />
      <GridContanier
        icon={require('../images/Organization information-top.svg')}
      />
      <GridContanier icon={require('../images/Organization-top.svg')} />
      <GridContanier
        icon={require('../images/Personnel information-top.svg')}
      />
      <GridContanier icon={require('../images/Timecard-top.svg')} />
    </div>
  </div>
)

export default IndexPage
