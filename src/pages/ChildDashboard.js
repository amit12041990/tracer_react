import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import LanguageMap from '../components/childDashboard/LanguageMap'
import SentimentMap from '../components/childDashboard/SentimentMap'
import ScreenTimeMap from '../components/childDashboard/ScreenTimeMap'
import Footer from '../components/Footer'
import InterestMap from '../components/childDashboard/InterestMap'

import DateRangeCal from '../components/childDashboard/DateRangePicker'
import ChildInfo from '../components/childDashboard/ChildInfo'


function ChildDashboard() {
  const localtion = useLocation()
  const childInfo = localtion.state.childData

  return (
    <>
    <Header />
     <main id="main" className="main dashboard-bg">
      <section id="dashboard-main-sec">
        <div className="container">
          <div className="dashborad-main-wrapper ">
          <ChildInfo name={childInfo.name} />
            <div className="dashboard-top-wrap">
             {/*  <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Time Period" aria-label="search" aria-describedby="basic-addon1" />
                    <button className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></button>
                  </div>
                </form>
              </div> */}
           <DateRangeCal/>
          
            </div>
            <div className="dashboard-content-wrap">
              <div className="row">
               <InterestMap/>
                <LanguageMap/>
               <SentimentMap/>
               <ScreenTimeMap/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  
  <Footer/>
    </>
  )
}

export default ChildDashboard