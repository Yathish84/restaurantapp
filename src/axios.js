import axios from "axios";

const instance =axios.create({
    baseURL:'http://localhost:5001/covid-19-tracker-ba750/us-central1/api'
});

export default instance;
