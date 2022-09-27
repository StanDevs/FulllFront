const myFetch = (queryUrl: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(queryUrl)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export default myFetch;
