import SearchFilter from "../Modals/SearchFilter";
import Icons from "../icons";
import Back from "./Back";

const TopSec = ({ setMainScreen, showScreen, setshowScreen, showFilter, handleFilterShow, handleFilterClose, selectedFilter, setSelectedFilter }: { setMainScreen: any, showScreen: number, setshowScreen: any, showFilter: boolean, handleFilterShow: any, handleFilterClose: any, selectedFilter: any, setSelectedFilter: any }) => {
  return <>
    <div className="leftSideHeader" style={{ position: 'absolute', top: 0, width: '100%' }}>
      <div className="d-flex justify-content-between">
        <div className="sortButtonDiv" onClick={handleFilterShow}>
          <h5 className="mksaldkamaw-jdwa">Filter</h5>
          <h5 className="mksaldkamaw-jdwa sortButtonIcon">
            <Icons iconNumber={91} />
          </h5>
        </div>

        <button
          onClick={() => {
            const _window: any = window;
            _window.setShowScreen = 1;
            setMainScreen(1);
          }}
          className="kjlma0o-dwa jksdalfj-jasidm" style={{ width: 150, marginLeft: 10 }}
        >
          <Icons iconNumber={30} />
          Create Interview
        </button>
      </div>
      <SearchFilter show={showFilter} handleClose={handleFilterClose} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
    </div>
  </>
}
export default TopSec