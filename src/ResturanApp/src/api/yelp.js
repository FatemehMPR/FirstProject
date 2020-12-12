import axios from 'axios';

export default axios.create({

            baseURL: 'https://api.yelp.com/v3/businesses',
            headers:{
                Authorization: 'Bearer 9_YFKeveQhKkuOo9yq2s6HumrATjgKPjZnhQl2QtBLSSvS-17Aq3BHSVpO3tvneTn24rR7wresuH_y5jQ8_DSwJ0rNws85LsukCn-G3k-dtI1Npeg3ybHx335_HRX3Yx ' 
            }
});