//axios : it support promise (we can handle data then and catch method).
//it uses library 
//API calls
//HTTP requests
//we donot need to use json
//it is interpreator here ,that work errohandling like 501 server error.

async function getData() {
    try {
        let response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        console.log(response.data);

    } catch(error) {
        console.log(error);
    }
}