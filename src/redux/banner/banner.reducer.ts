import {createReducer} from '@reduxjs/toolkit';
import {fetchBanners} from './banner.action';
import {initialBannerState} from './banner.initial';

const bannerReducer = createReducer(initialBannerState, builder => {
  builder
    // Fetch Banners
    .addCase(fetchBanners.fulfilled, (state, {payload}) => {
      return {
        ...state,
        fetchBannersState: {
          fetchingBanners: false,
          fetchingBannersFail: false,
          fetchingBannersSuccess: true,
        },
        banners: payload,
      };
    })
    .addCase(fetchBanners.pending, state => {
      return {
        ...state,
        fetchBannersState: {
          fetchingBanners: true,
          fetchingBannersFail: false,
          fetchingBannersSuccess: false,
        },
        banners: [],
      };
    })
    .addCase(fetchBanners.rejected, state => {
      return {
        ...state,
        fetchBannersState: {
          fetchingBanners: false,
          fetchingBannersFail: true,
          fetchingBannersSuccess: false,
        },
        banners: [],
      };
    });
  // =====================================================================
});

export default bannerReducer;
