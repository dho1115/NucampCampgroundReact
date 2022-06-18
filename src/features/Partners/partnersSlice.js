import { PARTNERS } from "../../app/shared/PARTNERS";

export const selectAllPartners = () => PARTNERS;
export const selectFeaturedPartners = () => PARTNERS.find(({featured}) => featured)
