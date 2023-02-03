import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import baseaxios from '../../API/baseaxios'
import Nav from '../../components/mainpage/Nav'
import PieChart from '../../components/mainpage/PieChart'
import '../../scss/MianPage.scss'
import profileimg from '../../img/profile.jpg'

const Mainpage = () => {
  const [userInfo, setUserInfo] = useState([])
  const { nickName } = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await baseaxios.get(`/api/v1/user/${nickName}`)
    const userData = request.data
    console.log(userData)
    setUserInfo(userData)
  }

  return (
    <div className="PageBase">
      <Nav />
      <div className="MainBox">
        <h2 className="UserNickName">크리스티아누 호날두</h2>
        <p className="UserText">좋아요 댓글 구독 알람설정까지!</p>
        <div className="MainInnerBox">
          <img src={profileimg} alt="ProfileImage" className="ProfileImg" />
            <div className='AvgBox'>
              <div className="PieCharts">
                <PieChart title="Last Score" id="LS" startColor="#FF4C61" endColor="#FFD2D7"/>
                <PieChart title="3 Games Avg" id="GA" startColor="#FFB800" endColor="#FFF7E1"/>
                <PieChart title="High Score" id="HS" startColor="#3CBA94" endColor="#D4F3E9"/>
              </div>
              <button className='Button'>점수 그래프</button>
          </div>
        </div>
      </div>
      <div>
        <div className="MainBox TierBox">Tier</div>
        <div className="MainBox RateBox">Rate</div>
        <div className="MainBox UserRankingBox">rankingBox</div>
      </div>

      <div>
        <div className="MainBox RecordBox">Record</div>
      </div>
    </div>
  )
}

export default Mainpage
