import { configureStore } from '@reduxjs/toolkit';
import educationReducer, { fetchEducations } from './educationSlice';

describe('educationSlice', () => {
  let store;
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch');
    store = configureStore({
      reducer: {
        education: educationReducer,
      },
    });
  });

  afterEach(() => {
    fetchMock.mockRestore();
  });

  test('fetchEducations thunk dispatches pending and fulfilled actions', async () => {
    const educations = [{ id: 1, name: 'Education 1' }, { id: 2, name: 'Education 2' }];

    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ educations }),
    });

    await store.dispatch(fetchEducations());

    const state = store.getState().education;

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.data).toEqual(educations);
  });

  test('fetchEducations thunk dispatches pending and rejected actions on error', async () => {
    const errorMessage = 'Failed to fetch education data.';

    fetchMock.mockRejectedValueOnce(new Error(errorMessage));

    await store.dispatch(fetchEducations());

    const state = store.getState().education;

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(errorMessage);
    expect(state.data).toEqual([]);
  });

  test('fetchEducations failure', async () => {
    const mockResponse = {
      ok: false,
    };

    jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    await store.dispatch(fetchEducations());

    const state = store.getState().education;

    expect(state.isLoading).toBe(false);
    expect(state.data).toEqual([]);
    expect(state.error).toBe('Failed to fetch education data.');
  });
});
