import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import UserContext from "./UserContext";

function App() {
  const user = {
    name: "Alice",
    age: 25,
    location: "Nairobi",
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <Header />
        <MainContent />
        <UserProfile />
        <Counter />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
