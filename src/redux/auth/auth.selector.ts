import {useAppSelector} from '../hooks';

export const useLoginState = () =>
  useAppSelector(state => state.auth.loginState);

export const useRegisterState = () =>
  useAppSelector(state => state.auth.registerState);

export const useTokenState = () => useAppSelector(state => state.auth.token);
