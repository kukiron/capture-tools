import { KeywordsInput, ToggleSwitch } from 'components';
import PrivateReplies from './PrivateReplies';
import PostReactions from './Reactions';

function Settings() {
  return (
    <>
      <div className="z-10 opacity-100">
        <ToggleSwitch label="Enable To Privately Reply To First-Level Comments Only" />
        <ToggleSwitch label="Send Message To The Same User Only Once Per Post" />
        <br />
        <PostReactions />
        <br />
        <KeywordsInput label="Exclude Comments With These Keywords" />
        <br />
        <KeywordsInput label="Only Trigger For Comments With These Keywords" />
        <br />
        <PrivateReplies />
      </div>
      <br />
    </>
  );
}

export default Settings;
