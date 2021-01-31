export const pageTitle = (pId) => {
  const removeTheDash = pId.replace(/_/g, " ");

  const title = removeTheDash.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return title;
};
