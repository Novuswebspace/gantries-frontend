import React, { useState } from 'react';

type Comment = {
  id: number;
  user: string;
  text: string;
};

type CommentSectionProps = {
  postId: string;
};

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: 'Ram', text: 'Great post!' },
    { id: 2, user: 'Satish', text: 'Very informative, thanks!' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    const comment: Comment = {
      id: comments.length + 1,
      user: 'You',
      text: newComment,
    };
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700"
          rows={2}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <button
            className="px-3 py-1 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 text-sm"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>
      <div className="space-y-4 max-h-64 overflow-y-auto">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-2 border border-gray-200 rounded-md"
          >
            <p className="text-sm font-medium">{comment.user}</p>
            <p className="text-sm">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
