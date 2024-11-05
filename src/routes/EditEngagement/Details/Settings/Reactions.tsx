import uniq from 'lodash/uniq';
import { useState } from 'react';

import { Badge } from 'components';
import { POST_REACTIONS } from 'lib/constatns';

function PostReactions() {
  const [reactions, setReactions] = useState<string[]>([]);

  const handleAddReaction = (reaction: string) => {
    setReactions(uniq([...reactions, reaction.trim()])); // remove duplicates
  };

  const handleRemoveReaction = (reaction: string) => {
    setReactions((prev) => prev.filter((text) => text !== reaction));
  };

  const renderReactionIcon = (reaction: string) => {
    return <span className={`like-btn-${reaction} inline pr-5`}></span>;
  };

  return (
    <>
      <h1 className="sub-header">Require a Post Reaction</h1>
      <br />

      {reactions.map((reaction) => (
        <Badge
          key={reaction}
          icon={renderReactionIcon(reaction)}
          remove={() => handleRemoveReaction('positive')}
        >
          {reaction}
        </Badge>
      ))}

      <div className="mt-2.5">
        <span id="add_positive_reaction">
          <ul className="positive reactions-box">
            {POST_REACTIONS.map((reaction) => (
              <li
                key={reaction}
                className={`reaction reaction-${reaction}`}
                data-reaction={reaction}
                onClick={() => handleAddReaction(reaction)}
              />
            ))}
          </ul>
          <button className="btn btn-primary w-full">Require reaction</button>
        </span>
      </div>
    </>
  );
}

export default PostReactions;
