const apiKey = "AC2c_xdyl0wGfLgV5_nNwriZa0eAMPDihGkKNOBtj4ZhfbQr5AxCyXxGudnfYfsdMCdvo5Io4CP6NB1SWqUrGZ7T3422KePXNhIDlRLenMmog0posZJuDMJuOkvSY3Yx";

const Yelp = {
  search (term, location, sortBy) {
    // fetch is prepended with the cors-anywhere url to avoid CORS errors when making requests to the Yelp API
    // first argument is the url to fetch
     // second argument is an object containing the headers property with our API key as the value for the Authorization property
    // we will fetch and then map the response to a new array of businesses
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{   
        headers: {
            // apikey from the Yelp API to access the Yelp data
            Authorization: `Bearer ${apiKey}`
            }}).then(response => {
                return response.json();
                }).then(jsonResponse => {
                    if (jsonResponse.businesses) {
                        // if the response is valid, we will return a new array of businesses
                        // mappping over the businesses array in the jsonResponse object
                        return jsonResponse.businesses.map(business => {
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count,
                                phone: business.phone,
                                url: business.url
                            }});
                        }
                });            
    }
};

export default Yelp;

