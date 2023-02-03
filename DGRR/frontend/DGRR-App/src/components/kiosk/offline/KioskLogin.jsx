import React from 'react'
import '../../../scss/KioskLogin.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import KioskLoginPlayer from './KioskLoginPlayer'
import { addPlayer } from '../../../store/OfflineLoginUsers'
// import axios from 'axios'
import { apis } from '../../../API/api'
import KioskLoginPlayer from './KioskLoginPlayer'
import KioskNavBlock from './KioskNavBlock'

const KioskLogin = () => {
  const dispatch = useDispatch()
  const onAddPlayer = () => dispatch(addPlayer())
  const players = useSelector(state => state.OfflineLoginUsers.players)
  const always4Blocks = () => {
    const playersList = [...players]
    for (let i = playersList.length; i < 4; i++) {
      playersList.push({})
    }
    return playersList
  }
  return (
    <div className="KioskBackground">
      <KioskNavBlock goBackTo="/KioskSelect" />
      <div className="ContentBlock">
        <div className="PinQRBlock">
          <div className="QRBlock">
            <div className="QRImage"></div>
            <div className="QRTitle">QR코드로 PIN번호 받기</div>
            <div className="QRText">
              QR스캔을 통해 웹사이트에 접속하여 로그인 후 화면에 출력되는 개인 PIN번호를 입력해주세요
            </div>
          </div>
          <div className="PinInputBlock">
            <input className="PinInput"></input>
            <button className="PinPlus" onClick={onAddPlayer}>
              +
            </button>
          </div>
        </div>
        <div className="UsersBlock">
          <div className="PlayersBlock">
            <div className="PlayerText">Players</div>
            <div className="PlayersList">
              {always4Blocks().map((player, index) => {
                return player.nickname ? (
                  <KioskLoginPlayer player={player} key={`KioskLoginPlayer-${index}`} />
                ) : (
                  <KioskLoginPlayer player="" key={`KioskLoginPlayer-${index}`} />
                )
              })}
              {/* <div className="Player"></div>
              <div className="Player"></div>
              <div className="Player"></div>
              <KioskLoginPlayer /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="GameStartBlock">
        <Link to="/KioskOfflineGame" className="GameStartButton">
          START
        </Link>
      </div>
    </div>
  )
}

export default KioskLogin
