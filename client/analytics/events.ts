import { track } from './index';
import type { SearchFilters } from '../context/SearchContext';

export const analytics = {
  // Account — Unauthenticated
  signInClicked: () => track('signInClicked'),
  joinNowClicked: () => track('joinNowClicked'),

  // Account — Authenticated
  shopNowClicked: () => track('shopNowClicked'),
  bookNowClicked: () => track('bookNowClicked'),
  navTileTapped: (tile: 'bookings' | 'offers' | 'wallet' | 'favorites') =>
    track('navTileTapped', { tile }),
  myProfileTapped: () => track('myProfileTapped'),
  settingsTapped: () => track('settingsTapped'),
  signOutClicked: () => track('signOutClicked'),

  // Rewards — Browse
  rewardsTabSelected: (tab: 'offers' | 'promotions' | 'benefits' | 'earnRedeem' | 'winnersCircle') =>
    track('rewardsTabSelected', { tab }),
  offerCardTapped: (offerId: string, title: string) =>
    track('offerCardTapped', { offerId, title }),
  featuredOfferCardTapped: (offerId: string, title: string) =>
    track('featuredOfferCardTapped', { offerId, title }),
  promotionCardTapped: (promotionId: string, title: string) =>
    track('promotionCardTapped', { promotionId, title }),
  favoriteToggled: (id: string, action: 'add' | 'remove', type: 'offer' | 'promotion') =>
    track('favoriteToggled', { id, action, type }),
  winnerAccordionExpanded: (sweepstakesTitle: string) =>
    track('winnerAccordionExpanded', { sweepstakesTitle }),
  sortChanged: (sortValue: 'soonest' | 'value' | 'newest') =>
    track('sortChanged', { sortValue }),

  // Search
  searchInitiated: (context: 'offers' | 'promotions') =>
    track('searchInitiated', { context }),
  destinationSelected: (destination: string) =>
    track('destinationSelected', { destination }),
  resortSelected: (resort: string) =>
    track('resortSelected', { resort }),
  categorySelected: (category: string) =>
    track('categorySelected', { category }),
  filterCleared: () => track('filterCleared'),
  searchSubmitted: (filters: SearchFilters, resultCount: number) =>
    track('searchSubmitted', { ...filters, resultCount }),
  searchResultsViewed: (resultCount: number) =>
    track('searchResultsViewed', { resultCount }),

  // Detail Pages
  offerDetailViewed: (offerId: string, title: string) =>
    track('offerDetailViewed', { offerId, title }),
  promotionDetailViewed: (promotionId: string, title: string) =>
    track('promotionDetailViewed', { promotionId, title }),
  detailBookNowClicked: (id: string, title: string) =>
    track('detailBookNowClicked', { id, title }),
  promoCodeCopied: (code: string) =>
    track('promoCodeCopied', { code }),
};
