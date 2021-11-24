import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';


import './App.css';

const App = () => {
    return (
        <ChatEngine
        height = "100vh"
        projectID = "d73fba54-c301-464e-8a5e-9bc5dea4329b"
        userName = "tarun tyagi"
        userSecret = "123123"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}}
        />
        );
}
export default App;