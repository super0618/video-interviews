import Icons from "../icons";
//@ts-ignore
import { Fade } from "react-awesome-reveal";
import CheckFormBox from "../CheckBoxForm";
import no_pic from "../../images/no-pic.svg";
import add_pic from "../../images/add.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import authConfig from '../../configs/auth'
import { useAuth } from "../../hooks/useAuth";

const CheckForm = ({
  setShowScreen,
  showScreen,
  questionIds,
  questions,
  newJob,
  setJobView
}: {
  setShowScreen: any;
  showScreen: number;
  questionIds: any;
  questions: any;
  newJob: any;
  setJobView: any
}) => {
  const [interviewer, setInterviewer] = useState<any>(null);
  const { user } = useAuth()
  // useEffect(() => {
  //   console.log("check form", newJob)
  //   if (newJob?.interviewer) {
  //     getInterviewerDetails();
  //   }
  // }, [newJob]);

  // const getInterviewerDetails = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.getInterviewer(newJob?.interviewer)}`)
  //     .then(async response => {
  //       setInterviewer(response.data)
  //     })
  //     .catch(console.error)
  // }
  const addJob = (params: any) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}${authConfig.addJobEndPoint}`, params)
      .then(async response => {
        setJobView(response.data)
        setShowScreen(6);
      })
      .catch(err => {
      })
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="kjjfds-janwkea1 kjjfds-janwkea2 kjasdkamsl-wjmd white-form height-none">
        <div className="check-form">
          <div className="d-flex">
            <div style={{position: 'relative'}}>
              <img src={no_pic} />
              <div className="pic-upload-btn">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Add Photo">
                  <path id="add-btn" fill-rule="evenodd" clip-rule="evenodd" d="M12.5001 25C19.4036 25 25 19.4036 25 12.5001C25 5.5964 19.4036 0 12.5001 0C5.59655 0 0 5.5964 0 12.5001C0 19.4036 5.59655 25 12.5001 25Z" fill="#00D9CD"/>
                  <g id="Group 387">
                  <path id="Shape sp-6539-0" fill-rule="evenodd" clip-rule="evenodd" d="M12.6086 6.48245C13.1726 6.48245 13.6299 6.93959 13.6299 7.50358V17.7157C13.6299 18.2797 13.1726 18.7368 12.6086 18.7368C12.0445 18.7368 11.5875 18.2797 11.5875 17.7157V7.50358C11.5875 6.93959 12.0445 6.48245 12.6086 6.48245Z" fill="white"/>
                  <path id="Shape sp-6539-0_2" fill-rule="evenodd" clip-rule="evenodd" d="M18.7357 12.6096C18.7357 13.1744 18.2791 13.6308 17.7147 13.6308H7.50267C6.93798 13.6308 6.48136 13.1744 6.48136 12.6096C6.48136 12.0449 6.93798 11.5885 7.50267 11.5885H17.7147C18.2791 11.5885 18.7357 12.0449 18.7357 12.6096Z" fill="white"/>
                  </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="kjdflkads-mdskf check-form-heading">
              <h3>{newJob?.job_title || 'Job Title'}</h3>
              {/* <h5><Icons iconNumber={16} /> {interviewer?.job_recruiter || interviewer?.interviewer?.company_name || 'Company Name'}</h5>
                <h6><Icons iconNumber={17} /> {interviewer?.interviewer?.location || 'Location'}</h6> */}
              <h5 className="d-flex align-items-center"><Icons iconNumber={16} /> {user?.company_name || 'Company Name'}</h5>
              <h6 className="d-flex align-items-center"><Icons iconNumber={17} /> {user?.location || 'Location'}</h6>
            </div>
          </div>
          <div className="check-form-body">
            {questions?.length ? (
              questions.filter((q: any) => questionIds.find((qi: any) => qi === q._id)).map((q: any, idx: number) => {
                return (
                  <CheckFormBox key={idx} questions={q} forcedActive={false} />
                );
              })
            ) : null}
          </div>
          <div className="check-form-btn-div snasdj-sawdne-1">
            <button
              className="btn lkdafhkls0d"
              onClick={() => {
                addJob(newJob)

              }}
            >
              PUBLISH & SHARE
              <div className="klajdfkls-ds pos-rel">
                <Icons iconNumber={42} />
              </div>
            </button>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={62} />
        </div>
      </div>
    </div>
  );
};

export default CheckForm