import axios from "axios";

const searchImages = async (term) => {
   const response = await axios.get( 'https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID vO4MobYiMWMJwX4KcLiH7mSg4Jcf1087E67Ro3_dFkI',
        },
        params: {
            query: term,
        },
    } );
    //console.log(response.data.results);
    return response.data.results;
};

export default searchImages;