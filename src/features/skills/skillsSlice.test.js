import skillsReducer, { addSkill, fetchSkills, toggleForm } from './skillsSlice';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid');
jest.mock('node-fetch', () => jest.fn());

describe('skills slice', () => {
  describe('actions', () => {
    it('should create a toggleForm action', () => {
      const action = toggleForm();

      expect(action.type).toEqual('skills/toggleForm');
    });
  });

  describe('reducer', () => {
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: jest.fn((key) => store[key]),
        setItem: jest.fn((key, value) => {
          store[key] = value.toString();
        }),
        clear: jest.fn(() => {
          store = {};
        }),
      };
    })();

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    beforeEach(() => {
      localStorageMock.clear();
    });

    it('should handle addSkill.fulfilled', () => {
      uuidv4.mockReturnValueOnce('test-id');
      const initialState = {
        formRender: false,
        skills: [],
      };
      const action = { payload: { id: 'test-id' } };
      const nextState = skillsReducer(initialState, addSkill.fulfilled(action.payload));

      expect(nextState.skills).toEqual([{ id: 'test-id' }]);
    });

    it('should handle fetchSkills.fulfilled', () => {
      const initialState = {
        formRender: false,
        skills: [],
      };
      const action = { payload: [{ id: 'test-id' }] };
      const nextState = skillsReducer(initialState, fetchSkills.fulfilled(action.payload));

      expect(nextState.skills).toEqual([{ id: 'test-id' }]);
    });

    it('should handle toggleForm', () => {
      const initialState = {
        formRender: false,
        skills: [],
      };
      const nextState = skillsReducer(initialState, toggleForm());

      expect(nextState.formRender).toEqual(true);
    });
  });
});
