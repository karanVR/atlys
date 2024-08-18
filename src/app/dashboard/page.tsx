import PostCard, { IPostCard } from '@/components/common/PostCard';
import { posts } from '@/lib/utils';

const page = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-atlys-bg p-4">
      <div className="flex w-[50dvw] flex-col gap-4">
        <text className="text-2xl text-atlys-text-muted-1">Hello Karan</text>
        <text className="w-[32dvw] text-sm text-atlys-text-muted-2">
          How are you doing today? Would you like to share something with the community 🤗
        </text>
        {posts.map((post: IPostCard) => {
          const {
            isCreatePost,
            username,
            timestamp,
            content,
            emoji,
            profilePicture,
            isEdited,
            commentsCount,
            showComments,
          } = post;
          return (
            <PostCard
              isCreatePost={isCreatePost}
              username={username}
              timestamp={timestamp}
              content={content}
              emoji={emoji}
              profilePicture={profilePicture}
              isEdited={isEdited}
              commentsCount={commentsCount}
              showComments={showComments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
