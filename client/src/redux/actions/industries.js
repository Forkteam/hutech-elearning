import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction.type;
};

export const getIndustries = createActions({
  getIndustriesRequest: (payload) => payload,
  getIndustriesSuccess: (payload) => payload,
  getIndustriesFailure: (error) => error,
});

export const createIndustry = createActions({
  createIndustryRequest: (payload) => payload,
  createIndustrySuccess: (payload) => payload,
  createIndustryFailure: (error) => error,
});

export const updateIndustry = createActions({
  updateIndustryRequest: (payload) => payload,
  updateIndustrySuccess: (payload) => payload,
  updateIndustryFailure: (error) => error,
});

export const deleteIndustry = createActions({
  deleteIndustryRequest: (payload) => payload,
  deleteIndustrySuccess: (payload) => payload,
  deleteIndustryFailure: (error) => error,
});
