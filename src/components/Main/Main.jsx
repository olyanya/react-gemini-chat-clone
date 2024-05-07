import { useContext } from "react";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";
import "./Main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello!</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest beautiful places to see on an upcoming road trip in
                  Canada
                </p>
                <img src={assets.compass_icon} alt="card" />
              </div>
              <div className="card">
                <p>How to write a poem?</p>
                <img src={assets.bulb_icon} alt="card" />
              </div>
              <div className="card">
                <p>What is an example of concept art?</p>
                <img src={assets.message_icon} alt="card" />
              </div>
              <div className="card">
                <p>What is HTML used for?</p>
                <img src={assets.code_icon} alt="card" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="galery" />
              <img src={assets.mic_icon} alt="mic" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="send" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
