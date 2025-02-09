const setCookie = (token) =>
  (document.cookie = `airToken=${token}; max-age=1*24*60*60; SameSite=None; Secure`);

const getCookie = () => {
  return (
    document.cookie
      .split(";")
      .find((item) => item.trim().split("=")[0] === "airToken")
      ?.split("=")[1] || false
  );
};

// const saveUser = (id) =>
//   (document.cookie = `userId= ${id}; max-age=1*24*60*60; SameSite=None; Secure`)

export { setCookie, getCookie };
