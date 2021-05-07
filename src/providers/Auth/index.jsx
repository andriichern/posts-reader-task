import { createContext } from 'react';
import useAuthProvider from 'hooks/useAuthProvider';

export const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const authProvider = useAuthProvider();

  return <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
