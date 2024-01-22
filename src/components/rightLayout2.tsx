import React, { useEffect, useState } from 'react';
import Icons from './icons';
import SimpleCheckBox from './simpleCheck';
import SettingMenuIcon from './SettingMenuIcon';
import { useAuth } from '../hooks/useAuth';
import Typewriter from 'typewriter-effect'
const RightLayout = ({ setMainScreen, setShowScreen, showScreen = null, style = {}, mainScreen = null }: { setMainScreen: any, setShowScreen: any, showScreen?: any, style?: any, mainScreen?: any }) => {
  const { isLoggedIn } = useAuth();
  const [isLoginChecked, setIsLoginChecked] = useState(true);
  useEffect(() => {
    switch (showScreen) {
      case 0:
      case 4:
        setIsLoginChecked(true);
        break;
      case 1:
        setIsLoginChecked(false);
        break;
      default:
        break;
    }
  }, [showScreen]);

  return <div className="rightSideDiv kjdsfkn-ajdnkw" style={style}>
    <div className='rightSideBGImg'></div>
    <div className={`d-${isLoggedIn() ? 'flex' : 'none'} justify-content-end settingmenuicon`}>
      <SettingMenuIcon setMainScreen={setMainScreen} />
    </div>
    {!isLoggedIn() && (mainScreen == 0 || mainScreen == 7) ? (
      <div className="tabs-container">
        <div className="tabs">
          <input type="radio" id="radio-1" name="tabs" onChange={() => {
            if (typeof setShowScreen === 'function') {
              setIsLoginChecked(false);
              setShowScreen(1);
            } else if (typeof setMainScreen === 'function') {
              setMainScreen(0);
            }
          }} checked={!isLoginChecked} />
          <label className="tab" htmlFor="radio-1">SIGN UP</label>
          <input type="radio" id="radio-2" name="tabs" onChange={() => {
            if (typeof setShowScreen === 'function') {
              setIsLoginChecked(true);
              setShowScreen(0);
            } else if (typeof setMainScreen === 'function') {
              setMainScreen(0);
            }
          }} checked={isLoginChecked} />
          <label className="tab" htmlFor="radio-2">LOGIN</label>
          <span className="glider"></span>
        </div>
      </div>
    ) : null}
    <div className="nakds-ajews">
      <Typewriter
						options={{
							strings: [
								'Tell me about<br/>yourself in<br/><span class="activeTypedgreen">30 seconds</span>”',
                'Tell me why<br/>you’re <span class="activeTypedpurple">perfect</span><br/>for this role”',
                'Tell me about<br/>your relevant<br/><span class="activeTypedgreen">experience</span>”',
                'Where do you<br/>see yourself in<br/><span class="activeTypedpurple">five years?</span>”',
                'Tell me about a<br/>time you faced<br/><span class="activeTypedgreen">adversity?</span>”',
                'What are your<br/><span class="activeTypedpurple">pet peeves?</span>”',
                'What <span class="activeTypedgreen">motivates</span><br/>you at work?”',
                'Where are you<br/><span class="activeTypedpurple">passionate</span><br/>about?”',
                'How do you<br/>stay <span class="activeTypedgreen">organised</span><br/>at work?”',
							],
							autoStart: true,
							loop: true,
              deleteSpeed: 3,
              delay: 50
						}}
					/>
      <button className="btn no-shadow asjdsajde" onClick={() => {
          if(isLoggedIn()) {
            if(setMainScreen) {
              setMainScreen(1);
            }
          } else {
            if(setMainScreen) {
              setMainScreen(0);
            }
          }
        }}>Create Video Interview</button>
    </div>
  </div>
}
export default RightLayout;