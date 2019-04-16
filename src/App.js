import React from 'react'
import ReactDOM from 'react-dom'

import ReactMicRecord from 'react-mic-record'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }


  render () {
    const { record } = this.state;
    return (
      <div>
        <header className="App-header">
          <h1>React Sound App</h1>
        </header>
        <section>
          <ReactMicRecord
              record={record} // defaults -> false.  Set to true to begin recordin
              width={800}
              height={400}
              className="App-recorder"
            />
          <button className="App-button" onClick={() => {
              console.log('Estoy clickeando... ' + record);
              this.setState({ record: !record })
            }}>{record ? '▶' : '■'}</button>
        </section>

      </div>
    )
  }
}


/*
           className={string}       // provide css class name
            onData={function}        // callback to execute when chunk of audio data is available
            onStop={function}        // callback to execute when audio stops recording
            strokeColor={string}     // sound wave color
            backgroundColor={string} // background color
            */

export default App;