import Header from "./components/Header/Header";
import IssueCard from "./components/IssueCard/IssueCard";
import IssueNav from "./components/IssueNav/IssueNav";
import Search from "./components/Search/Search";


function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <IssueNav/>
      <IssueCard/>
    </div>
  );
}

export default App;
