import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import studyService from 'service/study_service';

/* 

editor 상태를 관리하는 redux store 입니다.
title은 제목, content 내용, languages는 사용 언어를 담고 있습니다.

To-do
생성시 글 id 건내주기 api 적용

*/
const getValue = (items) => {
  return items.map((item) => item.value);
};

const writePostAction = createAction('write/writePost');
const modifyPostAction = createAction('write/modifyPost');

const writePost = createAsyncThunk(
  writePostAction,
  async (
    {
      title,
      content,
      language,
      startDate,
      type,
      recruits,
      onlineOrOffline,
      contactType,
      contactPoint,
      expectedPeriod,
    },
    thunkAPI,
  ) => {
    const newLanguages = language.map((item) => item.value);
    const response = await studyService.register({
      title,
      content,
      startDate,
      contactPoint,
      type: type.value,
      recruits: recruits.value,
      onlineOrOffline: onlineOrOffline.value,
      contactType: contactType.value,
      expectedPeriod: expectedPeriod.value,
      language: newLanguages,
    });

    return response.status;
  },
);

const modifyPost = createAsyncThunk(
  modifyPostAction,
  async (
    {
      postId,
      title,
      content,
      language,
      startDate,
      type,
      recruits,
      onlineOrOffline,
      contactType,
      contactPoint,
      expectedPeriod,
    },
    thunkAPI,
  ) => {
    const response = await studyService.modify({
      postId,
      title,
      content,
      startDate,
      contactPoint,
      type: getValue(type),
      recruits: getValue(recruits),
      onlineOrOffline: getValue(onlineOrOffline),
      contactType: getValue(contactType),
      expectedPeriod: getValue(expectedPeriod),
      language: getValue(language),
    });

    return response.status;
  },
);

const initialState = {
  title: '',
  content: '',
  language: [],
  startDate: null,
  type: '',
  recruits: '',
  onlineOrOffline: '',
  contactType: '',
  contactPoint: '',
  expectedPeriod: '',
  post: undefined,
  postError: undefined,
  postId: undefined,
};

const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),

    changeLanguage: (state, { payload: language }) => ({
      ...state,
      language,
    }),

    clearField: (state) => initialState,

    setPost: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      content: post.content,
      language: post.language,
      postId: post.id,
    }),
  },
  extraReducers: {
    [writePost.pending]: (state, { payload }) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [writePost.fulfilled]: (state, { payload }) => {
      // 수정 필요
      if (payload === 201) {
        state.post = 'success';
      }
      state.post = payload; // post 정보 담음
    },
    [writePost.rejected]: (state, { payload }) => {
      if (payload === 401) {
        state.postError = 'failed'; // post 정보 담음
      }
    },
    [modifyPost.fulfilled]: (state, { payload }) => {
      // 수정 필요
      if (payload === 200) {
        state = { ...state, post: 'success' };
        return state;
      }
      state.post = payload; // post 정보 담음
    },
    [modifyPost.rejected]: (state, { payload }) => {
      if (payload === 401) {
        state.postError = 'failed'; // post 정보 담음
      }
    },
  },
});

export const { changeField, changeLanguage, clearField, setPost } = writeSlice.actions;
export { writePost, modifyPost };
export default writeSlice.reducer;
