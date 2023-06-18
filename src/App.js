import './App.css';
import Logo from './Logo';
import React, { Component } from 'react';
import Navigation from './Navigation';
import ImageLinkForm from './ImageLinkForm';
import FaceRecognition from './FaceRecognition';
import Rank from './Rank';
import Signin from './Signin';
import Register from './Register';








class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      ImageURL: "",
      box:{},
      route:'signin',
      isSignedIn:false,
      raw: {
        "user_app_id": {
          "user_id": "amandevops",
          "app_id": "Face-Detector"
        },
        "inputs": [
          {
            "data": {
              "image": {
                "url": ''
              }
            }
          }
        ]
      },
      requestOptions: {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Key 9b50a1eb4c334c0dbb1ef7564ae9b90c'
        },
        body: ""
      }
    }
  }
  onRouteChange=(route)=>{
    if(route==='signout')
    {
      this.setState({isSignedIn:false});
    }
    else if(route==="home")
    {
      this.setState({isSignedIn:true});
    }
    this.setState({route:route})
  }
  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box
    const image =document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height),

    }
  }
  displayFace=(box)=>{
    this.setState({box:box});
    console.log(box);
  }
  onChangeSearch = (event) => {

    this.setState({ searchField: event.target.value })

  }
  onButtonClick = () => {

    this.setState({ ImageURL: this.state.searchField })
    this.state.raw.inputs[0].data.image.url = this.state.searchField
    this.state.requestOptions.body = JSON.stringify(this.state.raw)
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, this.state.requestOptions)
      .then(response => response.text())
      .then(result =>{ 
      const data=JSON.parse(result)
      this.displayFace(this.calculateFaceLocation(data))
      })

      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        { this.state.route==="home"?
          <div>
          <Logo />
          <ImageLinkForm onChangeSearch={this.onChangeSearch} onButtonClick={this.onButtonClick} />
          <FaceRecognition box={this.state.box} imageURL={this.state.ImageURL} />
          </div>
          :(
            this.state.route==="signin"?
            <Signin onRouteChange={this.onRouteChange}/>
            :<Register  onRouteChange={this.onRouteChange}/>

          )
          
          
        }

      </div>
    );
  }

}

export default App;
