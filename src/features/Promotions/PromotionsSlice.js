import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = () => PROMOTIONS.find(({featured}) => featured)

//export const selectFeaturedPromotionII = PROMOTIONS.find(({featured}) => featured)



