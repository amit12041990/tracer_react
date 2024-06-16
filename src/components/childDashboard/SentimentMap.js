import React from 'react'
import TonalityMap from './SentimentMap/TonalityMap'
import EmotionMap from './SentimentMap/EmotionMap'

function SentimentMap() {
  return (
    <>
     <div className="col-md-6 mb-4">
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <a href="" className="btn btn-full">Tonality & Emotion <i className="bi bi-chevron-right"></i></a>
                    </div>
                    <div className="dash-card-body">
                      <div className="tonality-emotion-wrap">
                        <TonalityMap/>
                        <EmotionMap/>
                      </div>
                    </div>
                    <div className="dash-card-footer">
                      <p><span>65%</span> agentive in tonality expression is sad in <span>85%</span> cases</p>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default SentimentMap