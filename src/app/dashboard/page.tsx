'use client';

import PostCard, { IPostCard } from '@/components/common/PostCard';
import useWindowDimensions from '@/hooks/useWindowDimentions/useWindowDimentions.hook';
import { cn, posts } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';

const page = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className="flex flex-col items-center gap-4 bg-atlys-bg p-4">
      <div className={cn('flex flex-col gap-4', windowWidth! < 760 ? 'w-[90dvw]' : 'w-[35dvw]')}>
        <text className="text-2xl text-atlys-text-muted-1">Hello Karan</text>
        <text
          className={cn(
            'text-sm text-atlys-text-muted-2',
            windowWidth! < 760 ? 'w-[90dvw]' : 'w-[35dvw]',
          )}
        >
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
              key={uuidv4()}
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
