const apiKey = "AC2c_xdyl0wGfLgV5_nNwriZa0eAMPDihGkKNOBtj4ZhfbQr5AxCyXxGudnfYfsdMCdvo5Io4CP6NB1SWqUrGZ7T3422KePXNhIDlRLenMmog0posZJuDMJuOkvSY3Yx";

const Yelp = {
//   method search accepts the term, location, and sortBy parameters
  search (term, location, sortBy) {
    // fetch is prepended with the cors-anywhere url to avoid CORS errors when making requests to the Yelp API
    // first argument is the url to fetch
    // second argument is an object containing the headers property with our API key as the value for the Authorization property
    // we will fetch and then map the response to a new array of businesses
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{   
        headers: {
            Authorization: `Bearer ${apiKey}`
            }}).then(response => {
                return response.json();
                }).then(jsonResponse => {
                    // if jsonResponse has a businesses property, return a new array of businesses
                    if (jsonResponse.businesses) {
                        return jsonResponse.businesses.map(business => {
                            // return an object with the properties we need from the business object
                            // this properties are based on the Yelp API documentation for the business object
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
                                reviewCount: business.review_count
                            }});
                        }
                });            
    }
};

export default Yelp;

