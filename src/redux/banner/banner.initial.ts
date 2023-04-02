import {IBannerState} from './banner.state';

export const initialBannerState: IBannerState = {
  fetchBannersState: {
    fetchingBanners: false,
    fetchingBannersFail: false,
    fetchingBannersSuccess: false,
  },
  banners: [],
};
