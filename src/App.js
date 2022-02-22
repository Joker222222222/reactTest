import './App.css';
import { Component } from 'react';
import axios from './http/axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const Data = await axios.get("/todos");
    console.log(Data);
    this.setState({data: Data.data});
  }

  render() {
    return (
      <div>
        {this.state.data.map((x) => {
          return (
            <div className="border-bottom">
              <div className="area">
                <div>title：</div>
                <div>{x.title}</div>
              </div>
              <div className="area">
                <div>userId：</div>
                <div>{x.userId}</div>
              </div>
              <div className="area">
                <div>id：</div>
                <div>{x.id}</div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
