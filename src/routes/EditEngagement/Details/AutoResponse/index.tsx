import { ToggleSwitch } from 'components';
import CommentReplies from './CommentReplies';

function AutoResponse() {
  return (
    <>
      <div className="z-10 opacity-100">
        <ToggleSwitch label="Enable To Automatically Like Comments" />
        <br />

        <CommentReplies />
      </div>
    </>
  );
}

export default AutoResponse;
