export const updateStateObject = (previousState, updateProperties) => ({
  ...previousState,
  ...updatedProperties,
});
