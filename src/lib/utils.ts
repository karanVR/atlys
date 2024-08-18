import { IPostCard } from '@/components/common/PostCard';
import userImg from '@/assets/images/user-1.png';
import userImg2 from '@/assets/images/user-2.png';
import userImg3 from '@/assets/images/IMG_20230701_073922.jpg';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getRandomDescription = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const posts: IPostCard[] = [
  {
    isCreatePost: true,
    emoji: '💬',
  },
  {
    isCreatePost: false,
    profilePicture: userImg,
    username: 'Thessara webb',
    timestamp: 5,
    commentsCount: 24,
    isEdited: false,
    emoji: '👋',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    isCreatePost: false,
    profilePicture: userImg2,
    username: 'Marvin McKinney',
    timestamp: 8,
    commentsCount: 67,
    isEdited: true,
    emoji: '😞',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    isCreatePost: false,
    profilePicture: userImg3,
    username: 'Karan veer Raghuvanshi',
    timestamp: 8,
    commentsCount: 67,
    isEdited: true,
    emoji: '🤯',
    content: 'Atlys task ',
  },
];
