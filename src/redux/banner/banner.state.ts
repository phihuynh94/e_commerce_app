import {IBanner} from '../../models/banner.model';

export interface IBannerState {
  fetchBannersState: IFetchBannersState;
  banners: IBanner[];
}

export interface IFetchBannersState {
  fetchingBanners: boolean;
  fetchingBannersFail: boolean;
  fetchingBannersSuccess: boolean;
}
