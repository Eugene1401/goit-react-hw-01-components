import "./App.css";

import Profile from "./components/Profile/Profile/profile";
import Statistics from "./components/Statistics/Statistic";
import FriendList from "./components/FriendList/FriendList";
import Transactions from "./components/Transactions/Transactions";

import user from "./user.json";
import statistical from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics items={statistical} />

      <FriendList items={friends} />

      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
