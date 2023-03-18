import { Profile } from '../components/profile/Profile'
import { Statistics } from '../components/statistics/Statistics'
import { FriendList } from '../components/friendList/FriendList'
import {TransactionHistory} from '../components/transactionHistory/TransactionHistory'
import user from '../path/user'
import data from '../path/data'
import friends from '../path/friends'
import transactions from '../path/transactions'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
      
    </div>
  );
};
