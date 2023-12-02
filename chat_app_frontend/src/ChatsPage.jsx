import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from  'react-chat-engine-advanced'



const ChatsPage = (props) => {
  // eslint-disable-next-line react/prop-types
  const chatProps =  useMultiChatLogic('6b9e2dce-f923-4180-8d43-c78e632b490a',props.user.username,
  // eslint-disable-next-line react/prop-types
  props.user.secret);
  return (
     <div style={{  height:'100vh' }}>
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow {...chatProps} />
     </div>
  );
};

export default ChatsPage;