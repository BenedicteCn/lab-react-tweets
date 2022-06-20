import ProfileImage from "/Users/benedictecoulon/ironhack/labs/lab-react-tweets/src/components/ProfileImage.js";
import User from "/Users/benedictecoulon/ironhack/labs/lab-react-tweets/src/components/User.js";
import Timestamp from "/Users/benedictecoulon/ironhack/labs/lab-react-tweets/src/components/Timestamp.js";
import Message from "/Users/benedictecoulon/ironhack/labs/lab-react-tweets/src/components/Message.js";
import Actions from "/Users/benedictecoulon/ironhack/labs/lab-react-tweets/src/components/Actions.js";

function Tweet(prosp) {
  return (
    <div className="tweet">
      <ProfileImage image={prosp.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={prosp.tweet.user} />
          <Timestamp time={prosp.tweet.timestamp} />
        </div>

        <Message message={prosp.tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}
export default Tweet;
