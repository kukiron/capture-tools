import { ToggleSwitch } from 'components';
import CommentReplies from './CommentReplies';

function AutoResponse() {
  return (
    <>
      <div style={{ opacity: 1, transform: 'none', zIndex: 1 }}>
        <ToggleSwitch label="Enable To Automatically Like Comments" />
        <br />

        <CommentReplies />
      </div>
    </>
  );
}

export default AutoResponse;
