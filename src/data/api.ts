import { delay } from 'lib/common';

import { PostEngagement } from 'store/types';
import POST_ENGAGEMENT_DATA from './json/post-engagement.json';

enum AppDataType {
  POST_ENGAGEMENT = 'post-engagement',
}

type MockFetchResponse<T> = {
  json: () => T;
};

type BaseResponse = { success: boolean; message: string };
type ApiResponse<T> = BaseResponse & {
  result?: T;
};

const RawAppData = {
  'post-engagement': POST_ENGAGEMENT_DATA,
} as const;

// A common mock fetch utility to fetch app data
const fetchAppData = <T>(type: AppDataType): Promise<MockFetchResponse<T>> =>
  new Promise(async (resolve) => {
    await delay(Math.random() * 5000);
    resolve({
      json: () => RawAppData[type] as T,
    });
  });

/* ----- API Calls ----- */

export const fetchPostEngagementData = async (): Promise<
  ApiResponse<PostEngagement[]>
> => {
  try {
    const response = await fetchAppData<PostEngagement[]>(
      AppDataType.POST_ENGAGEMENT
    );
    const result = response.json();
    return {
      success: true,
      message: 'Post engagements fetched successfully.',
      result,
    };
  } catch (error) {
    console.log('Error fetching post engagements:', error);
    return {
      success: false,
      message: 'Failed to fetch post engagements.',
    };
  }
};
