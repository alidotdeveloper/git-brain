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
      <RIsection
        gradcolor=" bg-gradient-to-r from-teal-200 to-[#5b7ba8]"
        gradhead="Split code changes"
        whitetext="into"
        whitesmall= "multiple AI-generated commits"
        summary="  As developers, we often forget to commit our changes, and end up with a huge commit that is hard to review.
        GitBrain intelligently splits your code changes into multiple AI-generated commits and even allows you
        to interactively edit them. You can select, reorder, and even merge multiple commits into one with the help of our AI."
        src="../../images/ai-commit.gif"
      
      />
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
