import './App.css'
import jsonData from '../data.json'

function App() {
  console.log(jsonData)
  const totalScore = jsonData.reduce(
    (accumulator, item) => accumulator + item.score,
    0
  );
  const averageScore = totalScore / jsonData.length;

  return (
    <body>
      <div className="card-container">
        <div className="result-container">
          <p
            style={{
              fontSize: "22px",
              paddingBottom: "25px",
              fontFamily: "Hanken Grotesk",
              color: "hsl(241, 100%, 89%)",
            }}
          >
            Your Result
          </p>
          <div className="circle-result">
            <p
              style={{
                fontSize: "70px",
                marginBottom: "0px",
                marginTop: "15px",
                fontFamily: "Hanken Grotesk",
                fontWeight: "800",
                color: "white",
              }}
            >
              {parseInt(averageScore)}
            </p>
            <p
              style={{
                fontFamily: "Hanken Grotesk",
                marginTop: "0px",
                color: "hsl(241, 100%, 89%)",
              }}
            >
              of 100
            </p>
          </div>
          <p
            style={{
              fontSize: "30px",
              marginBottom: "0px",
              fontFamily: "Hanken Grotesk",
              fontWeight: "700",
              color: "white",
            }}
          >
            Great
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              padding: "15px 40px",
              marginTop:"0px",
              fontFamily: "Hanken Grotesk",
              color: "hsl(241, 100%, 89%)",
            }}
          >
            You scored higher than 65% of the people who have taken these test.
          </p>
        </div>
        <div className="summary-container">
          <p style={{ fontFamily: "Hanken Grotesk", fontSize: "23px" }}>
            Summary
          </p>
          <div className="totals">
            {jsonData.map((item, index) => (
              <div
                style={{ backgroundColor: `${item.background}`, display:"flex", justifyContent:"space-around" }}
                className="category-div"
                key={`category-${index}`}
              >
                <img src={item.icon} alt={item.category} />
                <p
                  className="category-pad"
                  style={{
                    fontFamily: "Hanken Grotesk",
                    color: `${item.letterColor}`,
                  }}
                >
                  {item.category}
                </p>
                <p style={{ fontFamily: "Hanken Grotesk", lineHeight: "27px" , float:"right"}}>
                  {item.score} / 100

                </p>
              </div>
            ))}
          </div>
          <button className='button'
            style={{
              backgroundColor: "hsl(224, 30%, 27%)",
              borderStyle: "none",
              color: "white",
              width: "85%",
              height: "55px",
              borderRadius: "25px",
              fontSize: "15px",
              fontFamily: "Hanken Grotesk",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </body>
  );
}

export default App
