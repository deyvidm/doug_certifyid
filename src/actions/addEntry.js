
export const sendFetch = () => {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
      })
      .catch(error => {
        console.error(error);
      });
  };