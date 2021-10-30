var myHeaders = new Headers();
myHeaders.append("Authorization", `${process.env.REACT_APP_API_KEY}`);

// fetch request method
export const fetchData = async (url) => {
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    redirect: "follow",
  };
  const data = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/${url}`,
    requestOptions
  );
  return await data.json();
};
