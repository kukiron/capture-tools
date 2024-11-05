import { useState } from 'react';

import { Select, TextInput } from 'components';

const COMMENT_TYPES = ['Static', 'Open AI'] as const;

type CommentTypes = (typeof COMMENT_TYPES)[number];

const STATIC_COMMENTS = [
  'This is a comment.',
  'This is another comment.',
  'Yet another comment!',
];
const AI_INTEGRATIONS = ['Integration 1', 'Integration 2'];
const AI_ASSISTANCES = ['Assistance 1', 'Assistance 2'];

function StaticComments() {
  const [staticComments, setStaticComments] =
    useState<string[]>(STATIC_COMMENTS);

  const handleUpdateComment = (index: number) => (value: string) => {
    setStaticComments((prevComments) => {
      // make a copy of the state
      const newComments = [...prevComments];
      newComments[index] = value;
      return newComments;
    });
  };

  return (
    <div className="text-center">
      <br />

      {staticComments.map((comment, index) => (
        <TextInput
          key={index}
          value={comment}
          placeholder="Type your comment here"
          onChange={handleUpdateComment(index)}
          onRemove={() =>
            setStaticComments((prev) => prev.filter((_, i) => i !== index))
          }
        />
      ))}

      <br />
      <button
        className="btn btn-primary"
        onClick={() => setStaticComments((prev) => [...prev, ''])}
      >
        Add Comment
      </button>
    </div>
  );
}

function OpenAIComments() {
  const [seletedITems, setSelectedItems] = useState<string[]>([
    AI_INTEGRATIONS[0],
    AI_ASSISTANCES[0],
  ]);

  const handleUpdateSelectedItems = (index: number) => (value: string) => {
    setSelectedItems((prevComments) => {
      // make a copy of the state
      const newComments = [...prevComments];
      newComments[index] = value;
      return newComments;
    });
  };

  return (
    <>
      <Select
        label="Select Integration"
        value={seletedITems[0]}
        options={AI_INTEGRATIONS}
        onSelect={handleUpdateSelectedItems(0)}
      />

      <Select
        label="Select Assistance"
        value={seletedITems[1]}
        options={AI_ASSISTANCES}
        onSelect={handleUpdateSelectedItems(1)}
      />
    </>
  );
}

function CommentReplies() {
  const [commentType, setCommentType] = useState<CommentTypes>(
    COMMENT_TYPES[0]
  );

  return (
    <>
      <h1 className="sub-header">Reply In Comments</h1>
      <Select
        label="Comment type"
        value={commentType}
        options={['Static', 'Open AI']}
        onSelect={(value) => setCommentType(value as CommentTypes)}
      />

      {commentType === 'Static' && <StaticComments />}

      {commentType === 'Open AI' && <OpenAIComments />}
    </>
  );
}

export default CommentReplies;
