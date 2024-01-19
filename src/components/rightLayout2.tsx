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
    <div className={`d-${isLoggedIn() ? 'flex' : 'none'} justify-content-end`}>
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
      <div className="topSectionDiv d-flex">
      <Typewriter
						options={{
							strings: [
								'“Tell me about<br/>&nbsp;&nbsp;yourself in<br/>&nbsp;&nbsp;<span class="activeTypedgreen">30 seconds</span>”',
                '“Tell me why<br/>&nbsp;&nbsp;you’re <span class="activeTypedpurple">perfect</span><br/>&nbsp;&nbsp;for this role”',
                '“Tell me about<br/>&nbsp;&nbsp;your relevant<br/>&nbsp;&nbsp;<span class="activeTypedgreen">experience</span>”',
                '“Where do you<br/>&nbsp;&nbsp;see yourself in<br/>&nbsp;&nbsp;<span class="activeTypedpurple">five years?</span>”',
                '“Tell me about a<br/>&nbsp;&nbsp;time you faced<br/>&nbsp;&nbsp;<span class="activeTypedgreen">adversity?</span>”',
                '“What are your<br/>&nbsp;&nbsp;<span class="activeTypedpurple">pet peeves?</span>”',
                '“What <span class="activeTypedgreen">motivates</span><br/>&nbsp;&nbsp;you at work?”',
                '“Where are you<br/>&nbsp;&nbsp;<span class="activeTypedpurple">passionate</span><br/>&nbsp;&nbsp;about?”',
                '“How do you<br/>&nbsp;&nbsp;stay <span class="activeTypedgreen">organised</span><br/>&nbsp;&nbsp;at work?”',
							],
							autoStart: true,
							loop: true,
              deleteSpeed: 5,
              delay: 50
						}}
					/>
      </div>
      <div className="createVideoInterviewBtnDiv ">
        <button className="btn no-shadow asjdsajde" onClick={() => {
          setMainScreen(0);
          setShowScreen(0);
        }}>Create Video Interview</button>
      </div>
    </div>
    <div className='kjladsm-sajdw'>
      <Icons iconNumber={60} />
    </div>
  </div>
}
export default RightLayout;