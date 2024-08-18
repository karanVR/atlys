'use client';

import useWindowDimensions from '@/hooks/useWindowDimentions/useWindowDimentions.hook';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaCircle } from 'react-icons/fa';

export interface IPostCard {
  isCreatePost?: boolean;
  username?: string;
  timestamp?: number;
  content?: string;
  emoji?: string | ReactNode;
  profilePicture?: string | StaticImport;
  isEdited?: boolean;
  commentsCount?: number;
  showComments?: boolean;
}

const PostCard = ({
  isCreatePost,
  username,
  timestamp,
  content,
  emoji,
  profilePicture,
  isEdited,
  commentsCount,
  showComments,
}: IPostCard) => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className="w-full rounded-md border-2 border-atlys-border bg-atlys-bg-2 p-4">
      {isCreatePost ? (
        <div className="bg-red-400 flex flex-col gap-2">
          <text className="text-atlys-text-muted-1">Create post</text>
          <div className="flex items-center rounded-md bg-atlys-gray-2 px-2 py-6">
            <div className="mr-4 flex h-[3dvw] w-[3dvw] items-center justify-center rounded-full bg-atlys-bg-2">
              {emoji}
            </div>
            <text className="text-atlys-text-muted-2">How are you feeling today?</text>
          </div>
          <button className="animated-btn ml-auto w-[6dvw] rounded-md bg-atlys-blue px-6 py-2 text-sm text-atlys-text">
            Post
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-2">
          <div className="flex gap-2">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <Image src={profilePicture!} alt="userImg" objectFit="cover" />
            </div>
            <div className="flex flex-col">
              <text className="text-sm text-atlys-text-muted-1">{username}</text>
              <text className="flex gap-2 text-xs text-atlys-text-muted-2">
                {timestamp} mins ago
                {isEdited && (
                  <>
                    <FaCircle size={6} className="mt-[0.8dvh] align-baseline" />
                    <text className="text-xs text-atlys-text-muted-2"> Edited</text>
                  </>
                )}
              </text>
            </div>
            <HiDotsHorizontal className="ml-auto mr-4 text-atlys-text" size={22} />
          </div>
          <div className="flex items-center rounded-md bg-atlys-gray-2 px-2 py-6">
            <div className="mr-4 flex h-[3dvw] w-[3dvw] items-center justify-center rounded-full bg-atlys-bg-2">
              {emoji}
            </div>
            <text className="w-[45dvw] text-sm text-atlys-text-muted-2">{content}</text>
          </div>
          <div className="ml-1 flex gap-2 text-atlys-text-muted-2">
            <FaRegCommentAlt />
            <text className="text-xs text-atlys-text-muted-2">{commentsCount} comments</text>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
