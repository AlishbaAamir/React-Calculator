import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  function handle(e) {
    setValue(value + e.target.innerHTML);
  }
  function getResult() {
    setValue(eval(value));
  }
  function clear() {
    setValue("");
  }
  function removeNumber() {
    setValue(value.slice(0, -1));
  }
  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="display-screen">
            <div id="display" value={value}>
              <input type="text" placeholder="0" value={value} />
            </div>

            <table className="table">
              <tr>
                <td>
                  <button className="button" id="clear" onClick={clear}>
                    AC
                  </button>
                </td>
                <td>
                  <button className="button" onClick={removeNumber}>
                    DEL
                  </button>
                </td>

                <td>
                  <button className="button" onClick={handle}>
                    %
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    /
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className="button" onClick={handle}>
                    7
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    8
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    9
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button" onClick={handle}>
                    4
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    5
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    6
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button" onClick={handle}>
                    1
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    2
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    3
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button" onClick={handle}>
                    00
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    0
                  </button>
                </td>
                <td>
                  <button className="button" onClick={handle}>
                    .
                  </button>
                </td>
                <td>
                  <button className="button" onClick={getResult}>
                    =
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
