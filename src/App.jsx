import Header from "./Components/Header";
import Main from "./Components/Hero";
import HeadingImage from "./Components/HeadingImage";
import LIsection from "./Components/LIsection";
import RIsection from "./Components/RIsection";
function App() {


  return (
    <>
      <Header />
      <Main />
      <HeadingImage />
      <RIsection />
      <LIsection
        img="https://gitbrain.dev/_next/image?url=%2Fimages%2Fsummary.png&w=1920&q=75"
        gradhead="Self code review"
        head="Summary for your code changes"
        summary="GitBrain automatically generates a summary for your code changes,
         so you can easily review them before committing.
         It's a helpful way to remind yourself of what you've done, and also ensures
          that you don't commit any unwanted changes." />
    </>
  )
}

export default App
