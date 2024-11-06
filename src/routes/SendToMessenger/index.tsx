import { EmptyPage } from 'components';

import ComingSoonImg from 'assets/images/coming-soon.png';

function SendToMessenger() {
  return (
    <EmptyPage
      title="Send To Messenger"
      description="Feature coming soon..."
      imageUrl={ComingSoonImg}
    />
  );
}

export default SendToMessenger;
