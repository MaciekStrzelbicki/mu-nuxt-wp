import axios from "axios";
import config from "@/api/config";

export default {
  baseUrl: config.baseUrl,

  getPosts() {
    console.log("Posts request");
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`posts?_embed`).then(response => {
        const data = [...response.data];
        console.log('posts: ',data);
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            total: response.headers["x-wp-total"],
            totalPages: response.headers["x-wp-totalpages"],
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              content: item.content.rendered,
              slug: item.slug,
              thumbUrl: item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : null,
              date: item.date.split('T')[0]
            }))
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  }
};
