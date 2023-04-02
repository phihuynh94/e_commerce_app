import {useAppSelector} from '../hooks';

export const useFetchBannersState = () =>
  useAppSelector(state => state.banner.fetchBannersState);

export const useBanners = () => useAppSelector(state => state.banner.banners);
