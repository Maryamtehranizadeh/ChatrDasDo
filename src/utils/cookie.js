const saveCookie = (token) =>
  (document.cookie = `airToken=${token}; max-age=1*24*60*60`);

const getCookie = () => {
  return document.cookie
    .split(";")
    .find((item) => item.trim().split("=")[0] === "airToken")
    ?.split("=")[1];
};

export { saveCookie, getCookie };
