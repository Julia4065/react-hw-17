import './App.css';
import react, { Component, useEffect, useState } from "react";
import contactsList from './contacts.js';

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mounted: false,
//     }
//   }

//   componentDidMount() {
//     console.log('didMount');
//     this.setState({ mounted: true });
//   }

//   static getDerivedStateFromProps() {
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('didUpdate', prevState, this.state);
//   }

//   render() {
//     const { mounted } = this.state;
//     const renderCount = !mounted ? 1 : 2;
//     console.log(`${renderCount} render`);
//     return (
//       <div className="App">
//         <h1>I'm App Component</h1>
//       </div>
//     );
//   }
// }

// второй пример
// export default class App extends Component {
//   state = {
//     inputValue: '',
//     contacts: contactsList,
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(this.state);
//     const { inputValue } = this.state;
//     if (inputValue !== prevState.inputValue) {
//       this.setState({
//         contacts: contactsList.filter(({ firstName, lastName }) =>
//           firstName.toLowerCase().includes(inputValue) ||
//           lastName.toLowerCase().includes(inputValue))
//       })
//     }
//   }


//   render() {
//     const {
//       inputValue,
//       contacts,
//     } = this.state;

//     return (
//       <div className="App">
//         <form>
//           <input
//             type="text"
//             value={inputValue}
//             placeholder="search for contacts"
//             onChange={(e) => this.setState({ inputValue: e.target.value.trim() })}
//           />
//         </form>
//         <ul>
//           {contacts.map(({ firstName, lastName }) =>
//             <li>{`${firstName} ${lastName}`}</li>)
//           }
//         </ul>
//       </div>
//     );
//   }
// }






// третий пример

// через 1 секунду вернет нам масив с контактами
// const loadContracts = () => new Promise(resolve => setTimeout(() => resolve(contactsList), 1000));


// export default class App extends Component {
//   state = {
//     inputValue: '',
//     contacts: [],
//   }

//   async componentDidMount() {
//     const contacts = await loadContracts();
//     this.setState({
//       contacts
//     });
//   }


// // как альтернативный способ
// // componentDidMount() {
// //   loadContracts().then((contacts) => this.setState({contacts}));
// // }


//   componentDidUpdate(prevProps, prevState) {
//     console.log(this.state);
//     const { inputValue } = this.state;
//     if (inputValue !== prevState.inputValue) {
//       this.setState({
//         contacts: contactsList.filter(({ firstName, lastName }) =>
//           firstName.toLowerCase().includes(inputValue) ||
//           lastName.toLowerCase().includes(inputValue))
//       })
//     }
//   }


//   render() {
//     const {
//       inputValue,
//       contacts,
//     } = this.state;

//     return (
//       <div className="App">
//         <form>
//           <input
//             type="text"
//             value={inputValue}
//             placeholder="search for contacts"
//             onChange={(e) => this.setState({ inputValue: e.target.value.trim() })}
//           />
//         </form>
//         <ul>
//           {!contacts.length ?
//             <div>Loading ...</div> :
//             contacts.map(({ firstName, lastName }) =>
//             <li>{`${firstName} ${lastName}`}</li>)
//           }
//         </ul>
//       </div>
//     );
//   }
// }




function App() {

  const [mounted, setMounted] = useState(false);
  const renderCount = !mounted ? 1 : 2;

  useEffect(() => {
    setMounted(true);
    return () => {

    }
  }, []);


  console.log(`${renderCount} render`);
  return (
    <div className="App">
      <h1>I am component...</h1>
    </div>
  )
}

export default App;

App.defaultProps = {
  counter: 0,
}

