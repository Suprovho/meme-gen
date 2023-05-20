
import React from "react"
export default function Meme() {
  
  // const [memeImage, setMemeImage]=React.useState("");
  const [meme,setMeme]=React.useState({
        topText: "",
        bottomText: "",
       randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
   
  const [allMeme, setAllMeme] = React.useState([])
   
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
}, [])

  function RandomMeme() {
       const RandomNumber=Math.floor(Math.random()*allMeme.length);
        const url=allMeme[RandomNumber].url
        setMeme(prevMeme=>({
          ...prevMeme,
           randomImage:url
        }))      
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

  return (
    <main>
      <div className="form">
        <input type="text" 
        placeholder="top-text"
        className="form-input"
        name="topText"
        value={meme.topText}
        onChange={handleChange}

        />
        <input type="text" 
        placeholder="bottom-text"
        className="form-input"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
        <button className="form-button"
         onClick={RandomMeme}

        >Get a new meme image  🖼️</button>
      </div>
      <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  );
}

//note--
// 1. How would you describe the concept of "state"?
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)


// 2. When would you want to use props instead of state?
// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.


// 3. When would you want to use state instead of props?
// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component).


// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// Unchanging. Props are immutable. State is mutable. 

/**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     * ex-
     * export default function App() {
    const [count, setCount] = React.useState(0)
     *  function add() {
        setCount(prevCount => prevCount + 1)
    }
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    }
     */

    //form--

//     1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
   
// a. New value of state (setCount(42))
// b. Callback function - whatever the callback function 
//    returns === new value of state


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
// Whenever you don't need the previous value of state to determine
// what the new value of state should be.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
// Whenever you DO need the previous value to determine the new value


// 1. In a vanilla JS app, at what point in the form submission
//    process do you gather all the data from the filled-out form?
// Right before the form is submitted.


// 2. In a React app, when do you gather all the data from
//    the filled-out form?
// As the form is being filled out. The data is all held in local state.


// 3. Which attribute in the form elements (value, name, onChange, etc.)
//    should match the property name being held in state for that input?
// `name` property.


// 4. What's different about saving the data from a checkbox element
//    vs. other form elements?
// A checkbox uses the `checked` property to determine what should
// be saved in state. Other form elements use the `value` property instead.


// 5. How do you watch for a form submit? How can you trigger
//    a form submit?
// - Can watch for the submit with an onSubmit handler on the `form` element.
// - Can trigger the form submit with a button click.

//use effect--

// 1. What is a "side effect" in React? What are some examples?
// - Any code that affects an outside system.
// - local storage, API, websockets, two states to keep in sync


// 2. What is NOT a "side effect" in React? Examples?
// - Anything that React is in charge of.
// - Maintaining state, keeping the UI in sync with the data, 
//   render DOM elements


// 3. When does React run your useEffect function? When does it NOT run
//    the effect function?
// - As soon as the component loads (first render)
// - On every re-render of the component (assuming no dependencies array)
// - Will NOT run the effect when the values of the dependencies in the
//   array stay the same between renders


// 4. How would you explain what the "dependecies array" is?
// - Second paramter to the useEffect function
// - A way for React to know whether it should re-run the effect function

