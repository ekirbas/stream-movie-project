import React from "react";
import PlusIcon from "../../assets/svgComp/PlusIcon";

const Questions = () => {
  return (
    <div className="questionsArea">
      {/* questionTopContainer */}
      <div className="questionsTopContainer">
        <div className="questionsTitleContainer">
          <div className="questionsTitle">Frequently Asked Questions</div>
          <div className="questionsText">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </div>
        </div>
        <button className="askQuestionButton">Ask a Question </button>
      </div>
      <div className="questionsBottomContainer">
        <div className="questionsHalfContainer">
          <div className="questionContainer">
            <div className="count">01</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
          <div className="questionContainer">
            <div className="count">02</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
          <div className="questionContainer">
            <div className="count">03</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
          <div className="questionContainer">
            <div className="count">04</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
        </div>
        <div className="questionsHalfContainer">
          <div className="questionContainer">
            <div className="count">05</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
          <div className="questionContainer">
            <div className="count">06</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
          <div className="questionContainer">
            <div className="count">07</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
          <div className="questionContainer">
            <div className="count">08</div>
            <div className="questionTextContainer">
              <div className="questionTitle">What is StreamVibe?</div>
              <div className="questionAnswer">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <PlusIcon className="plusIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
