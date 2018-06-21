const apiKey = 'mjOMmV0qBbkLrFFYe-HWqWIkPeSzF0R1epPSdr4zGStRGpLZ1Ef8p_wYSc9kRqb0w-ex5JwKzEMSmQ48LSpBGGHCSOpRQXOqZuNcU3iCbC6m5c27Q7pj4dxBG2ogW3Yx';

//store the functionality needed to interact with the Yelp API
const Yelp = {
  //retrieve search results from the Yelp API
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => response.json()).then(
      jsonResponse => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.display_address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
  }
};
export default Yelp;
