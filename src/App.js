import React from 'react'
class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      data:null
    }
    console.warn("constructor")
  }
  componentDidMount(){
    this.setState({data:"updated"});
    console.warn("componentDidMount")
  }
  render(){
    console.warn("render")
    return(
      <div>
 <h1> |Life cycle Method: ComponentDidMount :)</h1>
    </div>
    );
  }
}
export default App;
