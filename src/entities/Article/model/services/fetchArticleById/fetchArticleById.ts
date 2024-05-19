import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticleById = createAsyncThunk<
  Article, // return value
  string, // input value
  ThunkConfig<string> // extra, state and <rejectValue>
>('articleDetails/fetchArticleById', async (articleId, ThunkApi) => {
  const { extra, rejectWithValue } = ThunkApi;

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
