import { createContext, useEffect, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };
    case 'error':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      throw new Error('Unknown user');
  }
}

const FAKE_USER = {
  name: 'Aleksandra',
  email: 'aleksandra@globemark.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=ac',
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    const storedAuthInfo = localStorage.getItem('user');
    if (storedAuthInfo) {
      const parsedAuthInfo = JSON.parse(storedAuthInfo);
      dispatch({ type: 'login', payload: parsedAuthInfo.user });
    }
  }, []);

  function login(email, password) {
    // typically, here would be an API call
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      const user = FAKE_USER;
      localStorage.setItem('user', JSON.stringify({ user }));
      dispatch({ type: 'login', payload: FAKE_USER });
    } else {
      dispatch({
        type: 'error',
        payload: 'Unable to login with provided credentials',
      });
    }
  }

  function logout() {
    localStorage.removeItem('user');
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider');
  return context;
}

export { AuthProvider, useAuth };
