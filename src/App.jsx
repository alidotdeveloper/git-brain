import Header from "./Components/Header";
import Main from "./Components/Hero";
import HeadingImage from "./Components/HeadingImage";
import LIsection from "./Components/LIsection";
import RIsection from "./Components/RIsection";
import Whitegradhead from "./Components/Whitegradhead";
import Footer from "./Components/Footer";

function App() {


  return (
    <>
      <Header />
      <Main />
      <HeadingImage />
    <Whitegradhead/>
      <RIsection
        gradcolor=" bg-gradient-to-r from-teal-200 to-[#5b7ba8]"
        gradhead="Split code changes"
        whitetext="into"
        whitesmall="multiple AI-generated commits"
        gradsmall="- customizable & editable"
        summary="  As developers, we often forget to commit our changes, and end up with a huge commit that is hard to review.
        GitBrain intelligently splits your code changes into multiple AI-generated commits and even allows you
        to interactively edit them. You can select, reorder, and even merge multiple commits into one with the help of our AI."
        src="../../images/ai-commit.gif"
      
      />
      <LIsection
        img="https://gitbrain.dev/_next/image?url=%2Fimages%2Fsummary.png&w=1920&q=75"
        width="650"
        height="550"
        gradcolor="bg-gradient-to-r from-sky-400 to-yellow-700"
        gradhead="Self code review"
        head="Summary for your code changes"
        summary="GitBrain automatically generates a summary for your code changes,
         so you can easily review them before committing.
         It's a helpful way to remind yourself of what you've done, and also ensures
          that you don't commit any unwanted changes." />
        <RIsection
        gradcolor=" bg-gradient-to-r from-orange-300 to-violet-600"
        gradhead="Auto-detect"
        whitetext="your project"
        whitesmall= "from your favorite IDEs"
        summary="  GitBrain intelligently detects the project you're currently working on from your favorite IDEs, ensuring a seamless
         Git management experience. Upon opening the GitBrain panel, you'll find your current project conveniently displayed at the top.."
        src="https://gitbrain.dev/_next/image?url=%2Fimages%2Fauto-detect.png&w=1920&q=75"
      
      />
         <LIsection
        img="https://gitbrain.dev/_next/image?url=%2Fimages%2Fkeyboard.png&w=1920&q=75"
        width="380"
        height="350"
        gradcolor="bg-gradient-to-r from-violet-500 to-violet-800"
        gradhead="Keyboard-friendly"
        whitetext="design"
        head="Keyboard shortcuts for everything"
        summary="GitBrain's keyboard-friendly design empowers you to manage your Git workflow even more efficiently. 
        You can open the GitBrain panel with the hotkey that you've assigned, and perform git operations with just a few keystrokes." />
      
      <RIsection
    
        gradcolor=" bg-gradient-to-r from-orange-300 to-violet-600"
        gradhead="Made for Mac"
        whitetext="" 
        whitesmall= "Optimized performance & native UI"
        summary=" GitBrain is a completely native Mac app, so it feels right at home on your Mac. It's lightweight, fast, and provides native feeling UIs such as menu bar,
         floating panel, and more. GitBrain also provides beautiful light & dark mode themes that fits perfectly with your Mac."
        src="https://gitbrain.dev/_next/image?url=%2Fimages%2Fmac.png&w=1920&q=75"
      
      />
      <Footer/>
    
      
    </>
  )
}

export default App
